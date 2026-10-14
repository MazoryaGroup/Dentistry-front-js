
/**
 * Dentistry — Services Page
 *
 * API:
 * GET /api/v1/services?lang=fa
 * GET /api/v1/services?lang=en
 *
 * Vanilla JavaScript + Vite + Webflow CSS
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

  if (lang === 'fa' || lang.startsWith('fa-')) {
    return 'fa';
  }

  if (lang === 'en' || lang.startsWith('en-')) {
    return 'en';
  }

  return document.documentElement.dir === 'rtl'
    ? 'fa'
    : 'en';
}

// ============================================
// TRANSLATIONS
// ============================================

const labels = {
  fa: {
    home: 'خانه',
    service: 'خدمات',
    ourServices: 'خدمات ما',
    heading: 'خدمات تخصصی دندان‌پزشکی',
    loading: 'در حال دریافت خدمات...',
    empty: 'در حال حاضر خدمتی برای نمایش وجود ندارد.',
    error: 'دریافت خدمات با مشکل مواجه شد.',
    retry: 'تلاش مجدد',
  },

  en: {
    home: 'Home',
    service: 'Services',
    ourServices: 'Our Services',
    heading: 'Restorative Dental Care Expertise',
    loading: 'Loading services...',
    empty: 'No services are available at the moment.',
    error: 'Unable to load services.',
    retry: 'Try Again',
  },
};

function tr(key, lang = getCurrentLang()) {
  return labels[lang]?.[key] || key;
}

// ============================================
// HTML HELPERS
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

function getText(value, lang) {
  if (typeof value === 'string') {
    return value.trim();
  }

  if (value && typeof value === 'object') {
    const translated = value[lang];

    return typeof translated === 'string'
      ? translated.trim()
      : '';
  }

  return '';
}

function firstText(lang, ...values) {
  for (const value of values) {
    const result = getText(value, lang);

    if (result) {
      return result;
    }
  }

  return '';
}

// ============================================
// TRANSLATION OBJECT
// ============================================

function getTranslation(item, lang) {
  const translations = item?.translations;

  if (Array.isArray(translations)) {
    return translations.find(row =>
      row?.lang === lang ||
      row?.locale === lang ||
      row?.language === lang
    ) || {};
  }

  if (
    translations &&
    typeof translations === 'object'
  ) {
    return translations[lang] || {};
  }

  return item?.translation || {};
}

// ============================================
// IMAGE URL
// ============================================

function getAssetOrigin() {
  const base =
    import.meta.env.VITE_ASSET_BASE_URL ||
    import.meta.env.VITE_API_BASE_URL ||
    '/';

  try {
    return new URL(
      base,
      window.location.origin
    ).origin;
  } catch {
    return window.location.origin;
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

  if (typeof value !== 'string') {
    return '';
  }

  const raw = value.trim();

  if (
    !raw ||
    /[<>"'\u0000-\u001F]/.test(raw)
  ) {
    return '';
  }

  let path = raw;

  // Relative storage paths from Laravel
  if (/^(storage|uploads|images)\//i.test(path)) {
    path = `/${path}`;
  }

  try {
    const url = new URL(
      path,
      getAssetOrigin()
    );

    if (
      url.protocol !== 'http:' &&
      url.protocol !== 'https:'
    ) {
      return '';
    }

    return url.href;

  } catch {
    return '';
  }
}

// ============================================
// EXTRACT API DATA
// ============================================

function extractServices(response) {
  const data = response?.data;

  // Actual Dentistry API:
  // {
  //   status: true,
  //   statusCode: 200,
  //   data: [...]
  // }

  if (Array.isArray(data)) {
    return data;
  }

  // Optional paginated responses
  if (Array.isArray(data?.data)) {
    return data.data;
  }

  if (Array.isArray(data?.services)) {
    return data.services;
  }

  if (Array.isArray(data?.services?.data)) {
    return data.services.data;
  }

  if (Array.isArray(data?.items)) {
    return data.items;
  }

  return null;
}

// ============================================
// NORMALIZE SERVICE
// ============================================

function normalizeService(item, lang) {
  if (
    !item ||
    typeof item !== 'object' ||
    Array.isArray(item)
  ) {
    return null;
  }

  const translation = getTranslation(
    item,
    lang
  );

  // Real API: item.name
  const name = firstText(
    lang,
    translation.name,
    translation.title,
    item[`name_${lang}`],
    item.name,
    item.title,
    item.service_name
  );

  if (!name) {
    return null;
  }

  // Real API: item.description
  const description = firstText(
    lang,
    translation.description,
    item[`description_${lang}`],
    item.description
  );

  // Real API image fields:
  // image_1_url / image_2_url

  const image = safeImageURL(
    item.image_1_url ??
    item.image_1 ??
    item.image_url ??
    item.image ??
    ''
  );

  const secondImage = safeImageURL(
    item.image_2_url ??
    item.image_2 ??
    ''
  );

  return {
    id: item.id ?? null,

    slug: firstText(
      lang,
      item.slug,
      item.service_slug,
      translation.slug
    ),

    name,
    description,

    duration:
      item.duration != null
        ? Number(item.duration)
        : null,

    price:
      item.price != null
        ? Number(item.price)
        : null,

    depositAmount:
      item.deposit_amount != null
        ? Number(item.deposit_amount)
        : null,

    image,
    secondImage,
  };
}

// ============================================
// SVG ICONS
// ============================================

const toothIcon = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path
      d="
        M24 9
        C19 6 12 4 8 10
        C3 17 7 26 9 32
        C11 39 13 43 17 42
        C21 41 20 29 24 29
        C28 29 27 41 31 42
        C35 43 37 39 39 32
        C41 26 45 17 40 10
        C36 4 29 6 24 9
      "
    />
  </svg>
`;

const arrowIcon = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="14"
    viewBox="0 0 18 14"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="
        M17.5169 6.43796
        L11.9488 0.869778
        C11.7987 0.72488 11.5978 0.644702
        11.3892 0.646514
        C11.1807 0.648327 10.9812 0.731984
        10.8337 0.879468
        C10.6862 1.02695 10.6025 1.22646
        10.6007 1.43503
        C10.5989 1.64359 10.6791 1.84453
        10.824 1.99455
        L15.0343 6.20489
        H1.04545
        C0.834487 6.20489 0.63216 6.2887
        0.482983 6.43788
        C0.333807 6.58705 0.25 6.78938
        0.25 7.00035
        C0.25 7.21131 0.333807 7.41364
        0.482983 7.56282
        C0.63216 7.71199 0.834487 7.7958
        1.04545 7.7958
        H15.0343
        L10.824 12.0061
        C10.748 12.0795 10.6874 12.1673
        10.6457 12.2643
        C10.604 12.3614 10.5821 12.4658
        10.5812 12.5714
        C10.5802 12.677 10.6004 12.7818
        10.6404 12.8795
        C10.6804 12.9773 10.7394 13.0661
        10.8141 13.1408
        C10.8888 13.2155 10.9776 13.2745
        11.0754 13.3145
        C11.1731 13.3545 11.2779 13.3746
        11.3835 13.3737
        C11.4891 13.3728 11.5935 13.3509
        11.6905 13.3092
        C11.7876 13.2675 11.8754 13.2069
        11.9488 13.1309
        L17.5169 7.56273
        C17.6661 7.41356 17.7498 7.21127
        17.7498 7.00035
        C17.7498 6.78942 17.6661 6.58713
        17.5169 6.43796
        Z
      "
      fill="currentColor"
    />
  </svg>
`;

// ============================================
// SERVICE CARD
// ============================================

function renderService(service) {
  const name = escapeHTML(service.name);

  const url = service.id != null
    ? `/services/${encodeURIComponent(String(service.id))}`
    : '';

  const imageHTML = service.image
    ? `
      <img
        src="${escapeHTML(service.image)}"
        alt="${name}"
        class="service-image-three"
        loading="lazy"
        decoding="async"
      />
    `
    : `
      <div
        class="service-image-three dp-service-image-placeholder"
        aria-hidden="true"
      >
        ${toothIcon}
      </div>
    `;

  const cardContent = `
    <div class="service-three-image-block">

      ${imageHTML}

      <div class="service-three-icon">
        <div class="service-icon-one w-embed">
          ${toothIcon}
        </div>
      </div>

    </div>

    <div class="service-three-info-block">

      <h2 class="service-three-title-block">
        ${name}
      </h2>

      <div class="service-three-arrow-block">
        <div class="w-embed">
          ${arrowIcon}
        </div>
      </div>

    </div>
  `;

  return `
    <div class="w-dyn-item" role="listitem">

      ${
        url
          ? `
            <a
              href="${escapeHTML(url)}"
              class="service-three-link w-inline-block"
            >
              ${cardContent}
            </a>
          `
          : `
            <div class="service-three-link w-inline-block">
              ${cardContent}
            </div>
          `
      }

    </div>
  `;
}

// ============================================
// PAGE HTML
// ============================================

export function Service() {
  const lang = getCurrentLang();

  return `
    <main
      class="dentistry-service-page"
      data-service-page
    >

      <!-- BREADCRUMB -->

      <section class="section breadcrumb-section">

        <div
          class="w-layout-blockcontainer container-fluid w-container"
        >
          <div class="breadcrumb-block three">

            <div
              class="w-layout-blockcontainer container w-container"
            >

              <div class="breadcrumb-main-title-block">

                <div class="breadcrumb-title-block">

                  <h1
                    class="breadcrumb-title"
                    data-service-title
                  >
                    ${tr('ourServices', lang)}
                  </h1>

                </div>

                <div class="breadcrumb-subtext-block">

                  <a
                    href="/"
                    class="breadcrumb-subtext"
                    data-service-home
                  >
                    ${tr('home', lang)}
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
                    data-service-breadcrumb
                  >
                    ${tr('service', lang)}
                  </span>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      <!-- SERVICES SECTION -->

      <section class="section service-three-section">

        <div
          class="w-layout-blockcontainer container w-container"
        >

          <div class="service-three-main-block">

            <!-- SECTION HEADING -->

            <div class="section-title-main-block">

              <div class="section-title-sub-text-block">

                <div
                  class="section-sub-text"
                  data-service-subtitle
                >
                  ${tr('ourServices', lang)}
                </div>

              </div>

              <div class="section-title-grid">

                <h2
                  class="section-title"
                  data-service-heading
                >
                  ${tr('heading', lang)}
                </h2>

              </div>

            </div>

            <!-- LOADING / ERROR / EMPTY -->

            <div
              class="dp-service-status"
              data-service-status
              role="status"
              aria-live="polite"
            >
              ${tr('loading', lang)}
            </div>

            <!-- API SERVICES LIST -->

            <div class="w-dyn-list">

              <div
                class="service-three-list w-dyn-items"
                role="list"
                data-service-list
              ></div>

            </div>

          </div>

        </div>
      </section>

    </main>
  `;
}

// ============================================
// INITIALIZE SERVICES
// ============================================

export function initService() {
  const root = document.querySelector(
    '[data-service-page]'
  );

  if (!root) {
    return () => {};
  }

  const lifecycle = new AbortController();

  let requestController = null;
  let activeLang = getCurrentLang();

  const list = root.querySelector(
    '[data-service-list]'
  );

  const status = root.querySelector(
    '[data-service-status]'
  );

  const cleanupInteractions = initPageInteractions(
    document.getElementById('app')
  );

  // ============================================
  // UPDATE TEXTS
  // ============================================

  function updateLabels(lang) {
    const elements = {
      '[data-service-title]': 'ourServices',
      '[data-service-home]': 'home',
      '[data-service-breadcrumb]': 'service',
      '[data-service-subtitle]': 'ourServices',
      '[data-service-heading]': 'heading',
    };

    for (const [selector, key] of Object.entries(elements)) {
      const element = root.querySelector(selector);

      if (element) {
        element.textContent = tr(key, lang);
      }
    }
  }

  // ============================================
  // STATUS
  // ============================================

  function showStatus(message) {
    status.hidden = false;
    status.textContent = message;
  }

  function hideStatus() {
    status.hidden = true;
    status.textContent = '';
  }

  function showError(lang) {
    status.hidden = false;

    status.innerHTML = `
      <p>
        ${escapeHTML(tr('error', lang))}
      </p>

      <button
        type="button"
        class="dp-service-retry"
        data-service-retry
      >
        ${escapeHTML(tr('retry', lang))}
      </button>
    `;
  }

  // ============================================
  // LOAD SERVICES
  // ============================================

  async function loadServices() {
    // Cancel any previous request.
    requestController?.abort();

    requestController = new AbortController();

    const signal = requestController.signal;

    const lang = getCurrentLang();

    activeLang = lang;

    updateLabels(lang);

    list.innerHTML = '';

    showStatus(tr('loading', lang));

    try {
      // GET /api/v1/services?lang=fa|en

      const response = await serviceApi.list(
        lang,
        signal
      );

      // Avoid updating a destroyed or outdated page.
      if (
        signal.aborted ||
        lifecycle.signal.aborted ||
        !root.isConnected ||
        getCurrentLang() !== lang
      ) {
        return;
      }

      // Actual API uses "status", not "success".
      if (
        response?.status === false ||
        response?.success === false
      ) {
        throw new Error(
          response.message || 'SERVICE_API_ERROR'
        );
      }

      // Actual response.data is an array.
      const items = extractServices(response);

      if (!items) {
        console.warn(
          'Invalid services API response:',
          response
        );

        showError(lang);
        return;
      }

      const services = items
        .map(item => normalizeService(item, lang))
        .filter(Boolean);

      if (items.length > 0 && services.length === 0) {
        console.warn(
          'Services returned without valid names:',
          items
        );

        showError(lang);
        return;
      }

      if (services.length === 0) {
        showStatus(tr('empty', lang));
        return;
      }

      // Render actual API services.
      list.innerHTML = services
        .map(renderService)
        .join('');

      hideStatus();

    } catch (error) {
      if (
        signal.aborted ||
        lifecycle.signal.aborted
      ) {
        return;
      }

      console.error(
        'Failed to load services:',
        error
      );

      showError(lang);
    }
  }

  // ============================================
  // RETRY BUTTON
  // ============================================

  root.addEventListener(
    'click',
    event => {
      const retry = event.target.closest(
        '[data-service-retry]'
      );

      if (!retry) return;

      event.preventDefault();

      void loadServices();
    },
    { signal: lifecycle.signal }
  );

  // ============================================
  // LANGUAGE CHANGE
  // ============================================

  const languageObserver = new MutationObserver(
    () => {
      const nextLang = getCurrentLang();

      if (nextLang !== activeLang) {
        void loadServices();
      }
    }
  );

  languageObserver.observe(
    document.documentElement,
    {
      attributes: true,
      attributeFilter: ['lang', 'dir'],
    }
  );

  // ============================================
  // INITIAL REQUEST
  // ============================================

  void loadServices();

  // ============================================
  // CLEANUP
  // ============================================

  return () => {
    lifecycle.abort();

    requestController?.abort();

    languageObserver.disconnect();

    if (typeof cleanupInteractions === 'function') {
      cleanupInteractions();
    }
  };
}
