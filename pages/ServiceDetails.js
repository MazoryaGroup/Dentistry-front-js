
/**
 * Dentistry — Service Details
 *
 * API:
 * GET /api/v1/services/{id}?lang=fa|en
 * GET /api/v1/services?lang=fa|en
 *
 * Supports single-object and array responses.
 * Vanilla JS + Vite + Webflow CSS
 */

import { serviceApi } from '../code/api.js';
import { initPageInteractions } from '../code/interactions.js';

// ============================================
// LANGUAGE
// ============================================

function getCurrentLang() {
  const lang = (
    document.documentElement.lang || ''
  ).toLowerCase();

  return lang === 'fa' || lang.startsWith('fa-')
    ? 'fa'
    : 'en';
}

const labels = {
  fa: {
    home: 'خانه',
    services: 'خدمات دندان‌پزشکی',
    details: 'جزئیات خدمت',
    otherServices: 'سایر خدمات',
    // duration: 'مدت زمان',
    // minutes: 'دقیقه',
    // price: 'قیمت',
    // deposit: 'بیعانه',
    loading: 'در حال دریافت اطلاعات خدمت...',
    notFound: 'خدمت موردنظر پیدا نشد.',
    error: 'دریافت اطلاعات خدمت با مشکل مواجه شد.',
    retry: 'تلاش مجدد',
    back: 'بازگشت به خدمات',
  },

  en: {
    home: 'Home',
    services: 'Dental Services',
    details: 'Service Details',
    otherServices: 'Our Services',
    // duration: 'Duration',
    // minutes: 'minutes',
    // price: 'Price',
    // deposit: 'Deposit',
    loading: 'Loading service details...',
    notFound: 'Service not found.',
    error: 'Unable to load service details.',
    retry: 'Try Again',
    back: 'Back to Services',
  },
};

function tr(key, lang = getCurrentLang()) {
  return labels[lang]?.[key] || key;
}

// ============================================
// HELPERS
// ============================================

function escapeHTML(value) {
  return String(value ?? '').replace(
    /[&<>"']/g,
    char => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    })[char]
  );
}

function getServiceId() {
  const path = location.pathname.replace(/\/+$/, '');
  const match = path.match(/^\/services\/([1-9]\d*)$/);

  return match ? match[1] : '';
}

function getAssetOrigin() {
  const base =
    import.meta.env.VITE_ASSET_BASE_URL ||
    import.meta.env.VITE_API_BASE_URL ||
    '/';

  try {
    return new URL(base, location.origin).origin;
  } catch {
    return location.origin;
  }
}

function safeImageURL(value) {
  if (value && typeof value === 'object') {
    value =
      value.url ??
      value.full_url ??
      value.src ??
      value.path ??
      '';
  }

  if (typeof value !== 'string') return '';

  const raw = value.trim();

  if (!raw || /[<>"'\u0000-\u001F]/.test(raw)) {
    return '';
  }

  const path = /^(storage|uploads|images)\//i.test(raw)
    ? `/${raw}`
    : raw;

  try {
    const url = new URL(path, getAssetOrigin());

    return ['http:', 'https:'].includes(url.protocol)
      ? url.href
      : '';
  } catch {
    return '';
  }
}

function textValue(value) {
  return typeof value === 'string'
    ? value.trim()
    : '';
}

function firstText(...values) {
  for (const value of values) {
    const result = textValue(value);

    if (result) return result;
  }

  return '';
}

function numberValue(value) {
  if (value === null || value === undefined || value === '') {
    return null;
  }

  const result = Number(value);

  return Number.isFinite(result)
    ? result
    : null;
}

function formatNumber(value, lang) {
  return new Intl.NumberFormat(
    lang === 'fa' ? 'fa-IR' : 'en-US',
    {
      maximumFractionDigits: 2,
    }
  ).format(value);
}

function renderText(value) {
  const text = textValue(value);

  if (!text) return '';

  return text
    .split(/\n\s*\n/)
    .filter(Boolean)
    .map(part => `
      <p>
        ${escapeHTML(part).replace(/\n/g, '<br>')}
      </p>
    `)
    .join('');
}

// ============================================
// EXTRACT API DATA
// ============================================

function checkResponse(response) {
  if (
    response?.status === false ||
    response?.success === false
  ) {
    throw new Error(
      response?.message || 'SERVICE_API_ERROR'
    );
  }
}

function extractServices(response) {
  const data = response?.data;

  const candidates = [
    data,
    data?.data,
    data?.services,
    data?.services?.data,
    data?.items,
  ];

  return candidates.find(Array.isArray) ?? [];
}

function extractService(response, id, lang) {
  checkResponse(response);

  const data = response?.data;

  const raw =
    data?.service ??
    data?.data ??
    data;

  // New API can return an array even for details.
  if (Array.isArray(raw)) {
    const matchingId = raw.filter(
      item => String(item?.id) === String(id)
    );

    // Prefer the exact requested language.
    return matchingId.find(
      item => item.locale === lang
    ) ?? matchingId.find(
      item => item.locale == null
    ) ?? null;
  }

  // Standard single-service response.
  if (
    raw &&
    typeof raw === 'object' &&
    String(raw.id) === String(id) &&
    (raw.locale == null || raw.locale === lang)
  ) {
    return raw;
  }

  return null;
}

// ============================================
// NORMALIZE NEW SERVICE STRUCTURE
// ============================================

function normalizeService(item) {
  if (
    !item ||
    typeof item !== 'object' ||
    Array.isArray(item)
  ) {
    return null;
  }

  const name = firstText(
    item.name,
    item.title_1
  );

  if (!name || item.id == null) return null;

  return {
    id: item.id,
    locale: textValue(item.locale),

    name,

    // Section 1
    title1: firstText(
      item.title_1,
      item.name
    ),

    description1: firstText(
      item.description_1,
      item.description
    ),

    image1: safeImageURL(
      item.image_1_url ??
      item.image_1
    ),

    // Section 2
    title2: textValue(item.title_2),

    description2: textValue(
      item.description_2
    ),

    image2: safeImageURL(
      item.image_2_url ??
      item.image_2
    ),

    // // Service information
    // duration: numberValue(item.duration),
    // price: numberValue(item.price),
    // depositAmount: numberValue(
    //   item.deposit_amount
    // ),
  };
}

// ============================================
// SVG ICONS
// ============================================

const toothIcon = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="70"
    height="70"
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path
      d="M24 9C19 6 12 4 8 10
         C3 17 7 26 9 32
         C11 39 13 43 17 42
         C21 41 20 29 24 29
         C28 29 27 41 31 42
         C35 43 37 39 39 32
         C41 26 45 17 40 10
         C36 4 29 6 24 9Z"
    />
  </svg>
`;

const arrowIcon = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14"/>
    <path d="m13 6 6 6-6 6"/>
  </svg>
`;

// ============================================
// SERVICE FACTS
// ============================================

function renderServiceFacts(service, lang) {
  const facts = [];

  // if (service.duration !== null) {
  //   facts.push({
  //     label: tr('duration', lang),
  //     value: `${formatNumber(service.duration, lang)} ${tr('minutes', lang)}`,
  //   });
  // }

  // if (service.price !== null) {
  //   facts.push({
  //     label: tr('price', lang),
  //     value: formatNumber(service.price, lang),
  //   });
  // }

  // if (service.depositAmount !== null) {
  //   facts.push({
  //     label: tr('deposit', lang),
  //     value: formatNumber(service.depositAmount, lang),
  //   });
  // }

  if (!facts.length) return '';

  return `
    <div class="dp-service-facts">
      ${facts.map(fact => `
        <div class="dp-service-fact">

          <span class="dp-service-fact-label">
            ${escapeHTML(fact.label)}
          </span>

          <strong class="dp-service-fact-value">
            ${escapeHTML(fact.value)}
          </strong>

        </div>
      `).join('')}
    </div>
  `;
}

// ============================================
// MAIN SERVICE CONTENT
// ============================================

function renderServiceContent(service, lang) {
  const title1 = escapeHTML(service.title1);

  const firstImage = service.image1
    ? `
      <img
        class="service-single-image"
        src="${escapeHTML(service.image1)}"
        alt="${title1}"
        loading="eager"
        decoding="async"
      />
    `
    : `
      <div
        class="service-single-image dp-service-details-placeholder"
        aria-hidden="true"
      >
        ${toothIcon}
      </div>
    `;

  const firstDescription = service.description1
    ? `
      <div class="service-rich-one w-richtext">
        ${renderText(service.description1)}
      </div>
    `
    : '';

  const hasSection2 = Boolean(
    service.title2 ||
    service.description2 ||
    service.image2
  );

  const section2 = hasSection2
    ? `
      <div class="service-info-two dp-service-section-two">

        ${
          service.image2
            ? `
              <img
                class="service-image-two"
                src="${escapeHTML(service.image2)}"
                alt="${escapeHTML(service.title2 || service.name)}"
                loading="lazy"
                decoding="async"
              />
            `
            : ''
        }

        ${
          service.title2 || service.description2
            ? `
              <div class="w-richtext dp-service-second-content">

                ${
                  service.title2
                    ? `
                      <h2 class="dp-service-second-title">
                        ${escapeHTML(service.title2)}
                      </h2>
                    `
                    : ''
                }

                ${renderText(service.description2)}

              </div>
            `
            : ''
        }

      </div>
    `
    : '';

  return `
    <div class="w-dyn-list">
      <div class="w-dyn-items" role="list">
        <div class="w-dyn-item" role="listitem">

          <div class="service-single-image-block">

            <!-- SECTION 1 -->

            <h1 class="service-title">
              ${title1}
            </h1>

            ${firstImage}

            ${firstDescription}

            <!-- SERVICE DETAILS -->

            ${renderServiceFacts(service, lang)}

            <!-- SECTION 2 -->

            ${section2}

          </div>

        </div>
      </div>
    </div>
  `;
}

// ============================================
// SIDEBAR SERVICES
// ============================================

function renderSidebarServices(services, currentId) {
  return `
    <div class="service-list-wrap w-dyn-list">

      <div
        class="service-list w-dyn-items"
        role="list"
      >

        ${services.map(service => {
          const current =
            String(service.id) === String(currentId);

          return `
            <div class="w-dyn-item" role="listitem">

              <a
                href="/services/${encodeURIComponent(String(service.id))}"
                class="service-list-link w-inline-block ${current ? 'w--current' : ''}"
                ${current ? 'aria-current="page"' : ''}
              >

                <div class="service-list-word">

                  <div class="service-dot-block"></div>

                  <h4 class="service-single-list-name">
                    ${escapeHTML(service.name)}
                  </h4>

                </div>

                <div class="service-single-icon-box">
                  <span class="service-single-icon">
                    ${arrowIcon}
                  </span>
                </div>

              </a>
            </div>
          `;
        }).join('')}

      </div>
    </div>
  `;
}

// ============================================
// PAGE HTML
// ============================================

export function ServiceDetails() {
  const lang = getCurrentLang();

  return `
    <main
      class="dentistry-service-details-page"
      data-service-details-page
    >

      <!-- BREADCRUMB -->

      <section class="section breadcrumb-section">

        <div
          class="w-layout-blockcontainer container-fluid w-container"
        >
          <div class="breadcrumb-block two">

            <div
              class="w-layout-blockcontainer container w-container"
            >

              <div class="breadcrumb-main-title-block">

                <div class="breadcrumb-title-block">

                  <h1
                    class="breadcrumb-title"
                    data-details-page-title
                  >
                    ${tr('services', lang)}
                  </h1>

                </div>

                <div class="breadcrumb-subtext-block">

                  <a
                    href="/"
                    class="breadcrumb-subtext"
                    data-details-home
                  >
                    ${tr('home', lang)}
                  </a>

                  <span
                    class="breadcrumb-subtext"
                    aria-hidden="true"
                  >
                    -
                  </span>

                  <a
                    href="/service"
                    class="breadcrumb-subtext"
                    data-details-services
                  >
                    ${tr('services', lang)}
                  </a>

                  <span
                    class="breadcrumb-subtext"
                    aria-hidden="true"
                  >
                    -
                  </span>

                  <span
                    class="breadcrumb-subtext"
                    aria-current="page"
                    data-details-breadcrumb
                  >
                    ${tr('details', lang)}
                  </span>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- STATUS -->

      <div
        class="dp-service-details-status"
        data-details-status
        role="status"
        aria-live="polite"
      >
        ${tr('loading', lang)}
      </div>

      <!-- SERVICE DETAILS -->

      <section
        class="section service-single-section"
        data-details-section
        hidden
      >

        <div
          class="w-layout-blockcontainer container w-container"
        >

          <div class="service-single-main-block">

            <div class="w-layout-grid service-single-grid">

              <!-- SIDEBAR -->

              <div class="service-single-main-block-one">

                <div class="service-sticky-block">

                  <div
                    class="service-single-left-block"
                    data-details-sidebar-box
                    hidden
                  >

                    <div class="service-single-box-title">

                      <h3
                        class="service-single-title"
                        data-details-sidebar-title
                      >
                        ${tr('otherServices', lang)}
                      </h3>

                    </div>

                    <div data-details-sidebar></div>

                  </div>

                </div>
              </div>

              <!-- MAIN CONTENT -->

              <div class="service-single-content-block">
                <div data-details-content></div>
              </div>

            </div>

          </div>

        </div>
      </section>

    </main>
  `;
}

// ============================================
// INITIALIZE
// ============================================

export function initServiceDetails() {
  const root = document.querySelector(
    '[data-service-details-page]'
  );

  if (!root) return () => {};

  const lifecycle = new AbortController();

  let requestController = null;
  let activeLang = getCurrentLang();

  const serviceId = getServiceId();

  const status = root.querySelector(
    '[data-details-status]'
  );

  const section = root.querySelector(
    '[data-details-section]'
  );

  const content = root.querySelector(
    '[data-details-content]'
  );

  const sidebar = root.querySelector(
    '[data-details-sidebar]'
  );

  const sidebarBox = root.querySelector(
    '[data-details-sidebar-box]'
  );

  const cleanupInteractions = initPageInteractions(
    document.getElementById('app')
  );

  // ============================================
  // LANGUAGE LABELS
  // ============================================

  function updateLabels(lang) {
    const selectors = {
      '[data-details-page-title]': 'services',
      '[data-details-home]': 'home',
      '[data-details-services]': 'services',
      '[data-details-breadcrumb]': 'details',
      '[data-details-sidebar-title]': 'otherServices',
    };

    for (const [selector, key] of Object.entries(selectors)) {
      const element = root.querySelector(selector);

      if (element) {
        element.textContent = tr(key, lang);
      }
    }
  }

  // ============================================
  // STATUS
  // ============================================

  function showStatus(message, retry = false) {
    status.hidden = false;
    status.textContent = message;

    if (retry) {
      const button = document.createElement('button');

      button.type = 'button';
      button.className = 'dp-service-details-retry';
      button.dataset.detailsRetry = '';
      button.textContent = tr('retry');

      status.appendChild(button);
    }
  }

  function hideStatus() {
    status.hidden = true;
    status.textContent = '';
  }

  function resetPage() {
    section.hidden = true;
    sidebarBox.hidden = true;

    content.innerHTML = '';
    sidebar.innerHTML = '';
  }

  // ============================================
  // SIDEBAR
  // ============================================

  async function loadSidebar(lang, id, signal) {
    try {
      const response = await serviceApi.list(
        lang,
        signal
      );

      if (
        signal.aborted ||
        lifecycle.signal.aborted ||
        !root.isConnected ||
        getCurrentLang() !== lang
      ) {
        return;
      }

      checkResponse(response);

      const services = extractServices(response)
        .filter(item =>
          !item.locale || item.locale === lang
        )
        .map(normalizeService)
        .filter(Boolean);

      if (!services.length) {
        sidebarBox.hidden = true;
        return;
      }

      sidebar.innerHTML = renderSidebarServices(
        services,
        id
      );

      sidebarBox.hidden = false;

    } catch (error) {
      if (
        !signal.aborted &&
        !lifecycle.signal.aborted
      ) {
        console.warn(
          'Failed to load sidebar services:',
          error
        );

        sidebarBox.hidden = true;
      }
    }
  }

  // ============================================
  // LOAD SERVICE DETAILS
  // ============================================

  async function loadDetails() {
    requestController?.abort();

    requestController = new AbortController();

    const signal = requestController.signal;
    const lang = getCurrentLang();

    activeLang = lang;

    updateLabels(lang);
    resetPage();

    if (!serviceId) {
      showStatus(tr('notFound', lang));
      return;
    }

    showStatus(tr('loading', lang));

    try {
      // Fetch detail by ID and selected language.
      const response = await serviceApi.show(
        serviceId,
        lang,
        signal
      );

      if (
        signal.aborted ||
        lifecycle.signal.aborted ||
        !root.isConnected ||
        getCurrentLang() !== lang
      ) {
        return;
      }

      // Works with an object OR an array.
      const rawService = extractService(
        response,
        serviceId,
        lang
      );

      const service = rawService
        ? normalizeService(rawService)
        : null;

      if (!service) {
        showStatus(tr('notFound', lang));
        return;
      }

      // Render two content sections.
      content.innerHTML = renderServiceContent(
        service,
        lang
      );

      section.hidden = false;
      hideStatus();

      document.title = `${service.name} | Dentistry`;

      // Sidebar uses current language.
      void loadSidebar(
        lang,
        serviceId,
        signal
      );

    } catch (error) {
      if (
        signal.aborted ||
        lifecycle.signal.aborted
      ) {
        return;
      }

      console.error(
        'Service details API failed:',
        error
      );

      const notFound =
        error?.status === 404 ||
        error?.statusCode === 404;

      showStatus(
        notFound
          ? tr('notFound', lang)
          : tr('error', lang),
        !notFound
      );
    }
  }

  // ============================================
  // RETRY
  // ============================================

  root.addEventListener(
    'click',
    event => {
      const button = event.target.closest(
        '[data-details-retry]'
      );

      if (!button) return;

      event.preventDefault();
      void loadDetails();
    },
    { signal: lifecycle.signal }
  );

  // ============================================
  // LANGUAGE SWITCH
  // ============================================

  const observer = new MutationObserver(() => {
    const lang = getCurrentLang();

    if (lang !== activeLang) {
      void loadDetails();
    }
  });

  observer.observe(
    document.documentElement,
    {
      attributes: true,
      attributeFilter: ['lang', 'dir'],
    }
  );

  // First request
  void loadDetails();

  // ============================================
  // CLEANUP
  // ============================================

  return () => {
    lifecycle.abort();
    requestController?.abort();
    observer.disconnect();

    if (typeof cleanupInteractions === 'function') {
      cleanupInteractions();
    }
  };
}
