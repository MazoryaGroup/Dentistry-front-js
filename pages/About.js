
/**
 * Dentistry — About Us
 * FA / EN — Vanilla JS + Vite
 * Demo doctors and treatments
 */

import { t, getLanguage } from '../code/i18n.js';
import { getDemoDoctors } from '../code/demoDoctors.js';
import '../asset/css/about-custom.css';

// ============================================
// HELPERS
// ============================================

function lang() {
  return getLanguage() === 'fa' ? 'fa' : 'en';
}

function esc(value) {
  return String(value ?? '').replace(
    /[&<>"']/g,
    ch => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    })[ch]
  );
}

function tr(key) {
  return esc(t(`about.${key}`));
}

function clean(value) {
  return typeof value === 'string'
    ? value.trim()
    : '';
}

const arrowIcon = `
  <svg viewBox="0 0 24 24"
       width="20" height="20"
       fill="none"
       stroke="currentColor"
       stroke-width="1.8"
       stroke-linecap="round"
       stroke-linejoin="round"
       aria-hidden="true">
    <path d="M5 12h14"/>
    <path d="m13 6 6 6-6 6"/>
  </svg>
`;

const toothIcon = `
  <svg viewBox="0 0 64 64"
       width="56" height="56"
       fill="none"
       stroke="currentColor"
       stroke-width="2"
       stroke-linecap="round"
       stroke-linejoin="round"
       aria-hidden="true">
    <path d="M18 8C10 8 5 14 5 24c0 9 4 16 7 24
      2 5 5 8 9 7 4-1 3-9 5-15
      1-4 3-6 6-6s5 2 6 6
      c2 6 1 14 5 15 4 1 7-2 9-7
      3-8 7-15 7-24 0-10-5-16-13-16
      -6 0-9 4-14 4s-8-4-14-4Z"/>
  </svg>
`;

// ============================================
// API
// ============================================

function apiV1() {
  const base = String(
    import.meta.env.VITE_API_BASE_URL || '/api'
  ).replace(/\/+$/, '');

  if (/\/api\/v1$/i.test(base)) {
    return base;
  }

  if (/\/api$/i.test(base)) {
    return `${base}/v1`;
  }

  if (/\/v1$/i.test(base)) {
    return base;
  }

  return `${base}/api/v1`;
}

function servicesEndpoint() {
  return `${apiV1()}/services?lang=${lang()}`;
}

function imageURL(value) {
  const source = clean(value);
  if (!source) return '';

  try {
    const origin = new URL(
      apiV1(),
      window.location.origin
    ).origin;

    let path = source;

    if (!/^https?:\/\//i.test(source)) {
      if (source.startsWith('/')) {
        path = source;
      } else if (/^(storage|uploads)\//i.test(source)) {
        path = `/${source}`;
      } else {
        path = `/storage/${source}`;
      }
    }

    const url = new URL(path, origin);

    return ['http:', 'https:'].includes(url.protocol)
      ? url.href
      : '';
  } catch {
    return '';
  }
}

function getTranslation(item) {
  const current = lang();

  if (Array.isArray(item.translations)) {
    return item.translations.find(
      row => row.locale === current || row.lang === current
    ) || {};
  }

  if (item.translations?.[current]) {
    return item.translations[current];
  }

  if (
    item.translation &&
    (!item.translation.locale ||
      item.translation.locale === current)
  ) {
    return item.translation;
  }

  return {};
}

function normalizeService(item) {
  if (!item || typeof item !== 'object') {
    return null;
  }

  const id = Number(item.id);

  if (!Number.isSafeInteger(id) || id <= 0) {
    return null;
  }

  if (
    item.is_active === false ||
    item.is_active === 0 ||
    item.is_active === '0'
  ) {
    return null;
  }

  const translated = getTranslation(item);

  const name = clean(
    translated.name ||
    translated.title ||
    item.name ||
    item.title
  );

  if (!name) return null;

  return {
    id,
    name,
    description: clean(
      translated.description ||
      item.description
    ),
    image: imageURL(
      item.image_1_url ||
      item.image_url ||
      item.image_1 ||
      item.image ||
      item.cover_image ||
      ''
    ),
    isDemo: false,
  };
}

// ============================================
// DEMO TREATMENTS
// ============================================

const DEMO_SERVICE_IMAGES = [
  'https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/67739cb05026dbf725d4e6e6_service%20image%20%281%29.webp',

  'https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/6773a8df753ab7c72f9cc04f_service%20image%20%289%29.webp',

  'https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/6773a948a802dec038145370_service%20image%20%282%29.webp',

  'https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/6773a95f18d02159b11b502c_service%20image%20%284%29.webp',

  'https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/6773a9540dd9d020f977e7e6_service%20image%20%283%29.webp',
];

function getDemoServices() {
  return DEMO_SERVICE_IMAGES.map((image, index) => {
    const number = index + 1;

    return {
      id: null,
      name: t(`about.demoTreatment${number}Title`),
      description: t(
        `about.demoTreatment${number}Description`
      ),
      image,
      isDemo: true,
    };
  });
}

// ============================================
// BREADCRUMB
// ============================================

function renderBreadcrumb() {
  return `
    <section class="section breadcrumb-section">
      <div class="w-layout-blockcontainer container-fluid w-container">
        <div class="breadcrumb-block">
          <div class="w-layout-blockcontainer container w-container">

            <div class="breadcrumb-main-title-block">

              <div class="breadcrumb-title-block">
                <h1 class="breadcrumb-title">
                  ${tr('breadcrumb')}
                </h1>
              </div>

              <div class="breadcrumb-subtext-block">

                <a href="/" class="breadcrumb-subtext">
                  ${tr('home')}
                </a>

                <span class="breadcrumb-subtext">-</span>

                <span class="breadcrumb-subtext"
                      aria-current="page">
                  ${tr('breadcrumb')}
                </span>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  `;
}

// ============================================
// INTRO
// ============================================

function renderIntro() {
  return `
    <section class="section about-one-section">

      <div class="w-layout-blockcontainer container w-container">

        <div class="about-one-main-block">
          <div class="w-layout-grid about-one-grid">

            <div class="about-one-image-block">
              <img
                src="/asset/img/IMG_0943.jpg"
                alt="${tr('imageAlt')}"
                class="about-one-image"
                loading="lazy"
              />
            </div>

            <div class="about-two-content-block">

              <div class="about-two-title-block">

                <div class="section-sub-text">
                  ${tr('introEyebrow')}
                </div>

                <h2 class="section-title">
                  ${tr('introTitle')}
                </h2>

              </div>

              <p class="about-two-description">
                ${tr('introDescription')}
              </p>

              <div class="about-two-list-block">

                <ul role="list" class="about-two-list">

                  <li class="about-two-list-item">

                    <div class="about-two-icon-block">
                      <span class="dp-about-feature-number">
                        01
                      </span>
                    </div>

                    <div class="about-list-two-info-block">

                      <h3 class="about-two-list-title">
                        ${tr('feature1Title')}
                      </h3>

                      <p class="about-two-list-description">
                        ${tr('feature1Description')}
                      </p>

                    </div>

                  </li>

                  <li class="about-two-list-item last">

                    <div class="about-two-icon-block">
                      <span class="dp-about-feature-number">
                        02
                      </span>
                    </div>

                    <div class="about-list-two-info-block">

                      <h3 class="about-two-list-title">
                        ${tr('feature2Title')}
                      </h3>

                      <p class="about-two-list-description">
                        ${tr('feature2Description')}
                      </p>

                    </div>

                  </li>

                </ul>

              </div>

              <div class="about-two-button-block">

                <a href="/contact-us"
                   class="button-primary w-inline-block">

                  <span class="button-primary-text">
                    ${tr('contactButton')}
                  </span>

                  <span class="button-icon-block">
                    ${arrowIcon}
                  </span>

                </a>

              </div>

            </div>

          </div>
        </div>

      </div>

    </section>
  `;
}

// ============================================
// TREATMENT SECTION
// ============================================

function renderTreatment() {
  return `
    <section class="section treatment-section two dp-about-treatment">

      <div class="w-layout-blockcontainer container-fluid w-container">
        <div class="main-grey-block two">

          <div class="w-layout-blockcontainer container w-container">
            <div class="main-treatment-block">

              <div class="treatment-title-block">

                <div class="section-sub-text">
                  ${tr('treatmentEyebrow')}
                </div>

                <h2 class="section-title">
                  ${tr('treatmentTitle')}
                </h2>

                <p class="dp-about-treatment-description">
                  ${tr('treatmentDescription')}
                </p>

              </div>

              <div class="treatment-inner-block">

                <p
                  class="dp-about-services-status"
                  data-about-services-status
                  role="status"
                  aria-live="polite"
                >
                  ${tr('servicesDemoNote')}
                </p>

                <div
                  class="tretment-tabs w-tabs dp-about-tabs"
                  data-about-services
                >

                  <div
                    class="tretment-menu w-tab-menu"
                    data-about-service-tabs
                    role="tablist"
                    aria-label="${tr('treatmentTitle')}"
                  ></div>

                  <div
                    class="tretment-content w-tab-content"
                    data-about-service-panes
                  ></div>

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  `;
}

// ============================================
// SERVICE TABS
// ============================================

function renderServiceTabs(services) {
  const buttons = services.map((service, index) => `
    <button
      type="button"
      id="dp-about-tab-${index}"
      data-about-tab="${index}"
      role="tab"
      aria-controls="dp-about-pane-${index}"
      aria-selected="${index === 0}"
      tabindex="${index === 0 ? '0' : '-1'}"
      class="tretment-tab-link-main w-inline-block w-tab-link
             ${index === 0 ? 'w--current' : ''}"
    >

      <div class="tretment-link-main-block">
        <div class="tretment-inner-block">

          <div class="tretment-tab-link bg-white">
            <span>${esc(service.name)}</span>
          </div>

          <div class="tretment-round-block"></div>

        </div>
      </div>

    </button>
  `).join('');

  const panes = services.map((service, index) => {
    const href = service.isDemo
      ? '/service'
      : `/services/${service.id}`;

    return `
      <div
        id="dp-about-pane-${index}"
        data-about-pane="${index}"
        role="tabpanel"
        aria-labelledby="dp-about-tab-${index}"
        class="tretment-tab-pane w-tab-pane
               ${index === 0 ? 'w--tab-active' : ''}"
        ${index === 0 ? '' : 'hidden'}
      >

        <div class="dp-about-service-card">

          ${
            service.image
              ? `
                <img
                  src="${esc(service.image)}"
                  alt="${esc(service.name)}"
                  class="tretment-image"
                  loading="lazy"
                />
              `
              : `
                <div class="dp-about-no-image">
                  ${toothIcon}
                </div>
              `
          }

          <div class="dp-about-service-info">

            <h3>${esc(service.name)}</h3>

            ${
              service.description
                ? `<p>${esc(service.description)}</p>`
                : ''
            }

            <a
              href="${href}"
              class="dp-about-service-link"
            >
              ${tr('serviceDetails')}
              ${arrowIcon}
            </a>

          </div>

        </div>

      </div>
    `;
  }).join('');

  return { buttons, panes };
}

// ============================================
// TEAM DOCTORS
// ============================================

function renderTeam() {
  const doctors = getDemoDoctors();

  return `
    <section
      class="section team-two-section dp-about-team-section"
      id="about-doctors"
    >

      <div class="w-layout-blockcontainer container-fluid w-container">
        <div class="main-grey-block">

          <div class="w-layout-blockcontainer container w-container">

            <div class="dp-about-doctors-header">

              <div class="dp-about-doctors-heading">

                <div class="section-sub-text">
                  ${tr('teamEyebrow')}
                </div>

                <h2 class="section-title">
                  ${tr('teamTitle')}
                </h2>

                <p class="dp-about-team-description">
                  ${tr('teamDescription')}
                </p>

              </div>

              <a
                href="/contact-us"
                class="button-primary w-inline-block"
              >

                <span class="button-primary-text">
                  ${tr('teamButton')}
                </span>

                <span class="button-icon-block">
                  ${arrowIcon}
                </span>

              </a>

            </div>

            <div class="dp-about-doctors-grid">

              ${doctors.map((doctor, index) => `
                <a
                  href="/team/${encodeURIComponent(doctor.slug)}"
                  class="dp-about-doctor-card"
                  aria-label="${esc(doctor.name)}"
                >

                  <div class="dp-about-doctor-image-wrap">

                    <img
                      src="${esc(doctor.image)}"
                      alt="${esc(doctor.name)}"
                      class="dp-about-doctor-image"
                      loading="lazy"
                    />

                    <span class="dp-about-doctor-index">
                      ${String(index + 1).padStart(2, '0')}
                    </span>

                  </div>

                  <div class="dp-about-doctor-info">

                    <span class="dp-about-doctor-role">
                      ${esc(doctor.role)}
                    </span>

                    <h3 class="dp-about-doctor-name">
                      ${esc(doctor.name)}
                    </h3>

                  </div>

                </a>
              `).join('')}

            </div>

            <p class="dp-about-doctors-note">
              ${tr('teamDemoNote')}
            </p>

          </div>

        </div>
      </div>

    </section>
  `;
}

// ============================================
// FAQ
// ============================================

function renderFAQ() {
  return `
    <section class="section faq-section dp-about-faq-section">

      <div class="w-layout-blockcontainer container-fluid w-container">
        <div class="main-grey-block">

          <div class="w-layout-blockcontainer container w-container">
            <div class="faq-main-block">

              <div class="section-title-main-block">

                <div class="section-title-sub-text-block">
                  <div class="section-sub-text">
                    ${tr('faqEyebrow')}
                  </div>
                </div>

                <div class="section-title-grid">
                  <h2 class="section-title">
                    ${tr('faqTitle')}
                  </h2>
                </div>

              </div>

              <div class="faq-content-block">
                <div class="faq-tabs w-tabs">
                  <div class="faq-tab-menu w-tab-menu">

                    ${[1, 2, 3, 4, 5].map((number, index) => `
                      <div class="dp-about-faq-item">

                        <h3 class="dp-about-faq-heading">

                          <button
                            type="button"
                            class="faq-tab-link dp-about-faq-button"
                            data-about-faq="${number}"
                            aria-expanded="${index === 0}"
                            aria-controls="dp-about-answer-${number}"
                          >

                            <span class="faq-question-text">
                              ${tr(`faq${number}Question`)}
                            </span>

                            <span
                              class="dp-about-faq-symbol"
                              aria-hidden="true"
                            >
                              ${index === 0 ? '−' : '+'}
                            </span>

                          </button>

                        </h3>

                        <div
                          id="dp-about-answer-${number}"
                          class="ans-box dp-about-faq-answer"
                          ${index === 0 ? '' : 'hidden'}
                        >

                          <p class="ans-text">
                            ${tr(`faq${number}Answer`)}
                          </p>

                        </div>

                      </div>
                    `).join('')}

                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  `;
}

// ============================================
// PAGE
// ============================================

export function About() {
  return `
    <main class="dp-about-page"
          data-about-page
          data-no-translate>

      ${renderBreadcrumb()}
      ${renderIntro()}
      ${renderTreatment()}
      ${renderTeam()}
      ${renderFAQ()}

    </main>
  `;
}

// ============================================
// INIT
// ============================================

export function initAbout() {
  const root = document.querySelector('[data-about-page]');

  if (!root) return () => {};

  const controller = new AbortController();
  const { signal } = controller;

  const status = root.querySelector(
    '[data-about-services-status]'
  );

  const tabsRoot = root.querySelector(
    '[data-about-services]'
  );

  const tabList = root.querySelector(
    '[data-about-service-tabs]'
  );

  const panesRoot = root.querySelector(
    '[data-about-service-panes]'
  );

  let serviceCount = 0;

  // ============================================
  // DISPLAY SERVICES
  // ============================================

  function displayServices(services) {
    const markup = renderServiceTabs(services);

    tabList.innerHTML = markup.buttons;
    panesRoot.innerHTML = markup.panes;

    serviceCount = services.length;
    tabsRoot.hidden = false;

    activateService(0);
  }

  // ============================================
  // ACTIVATE SERVICE
  // ============================================

  function activateService(index, focus = false) {
    if (
      !Number.isInteger(index) ||
      index < 0 ||
      index >= serviceCount
    ) {
      return;
    }

    const buttons = [
      ...tabList.querySelectorAll('[data-about-tab]')
    ];

    const panes = [
      ...panesRoot.querySelectorAll('[data-about-pane]')
    ];

    buttons.forEach((button, i) => {
      const selected = i === index;

      button.classList.toggle('w--current', selected);
      button.setAttribute('aria-selected', String(selected));
      button.tabIndex = selected ? 0 : -1;

      if (selected && focus) {
        button.focus();
      }
    });

    panes.forEach((pane, i) => {
      const selected = i === index;

      pane.hidden = !selected;
      pane.classList.toggle('w--tab-active', selected);
    });
  }

  // ============================================
  // LOAD REAL SERVICES
  // ============================================

  async function loadServices() {
    try {
      const response = await fetch(
        servicesEndpoint(),
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
          credentials: 'omit',
          cache: 'no-store',
          signal,
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const json = await response.json();

      if (json?.success === false || json?.status === false) {
        throw new Error(json?.message || 'API error');
      }

      if (signal.aborted || !root.isConnected) {
        return;
      }

      const data = json?.data;

      const list = Array.isArray(data)
        ? data
        : Array.isArray(data?.data)
          ? data.data
          : Array.isArray(data?.services)
            ? data.services
            : Array.isArray(data?.items)
              ? data.items
              : [];

      const services = list
        .map(normalizeService)
        .filter(Boolean)
        .slice(0, 5);

      if (services.length > 0) {
        displayServices(services);
        status.hidden = true;
      }

    } catch (error) {
      if (signal.aborted) return;

      console.info(
        'About: showing demo treatments',
        error
      );
    }
  }

  // ============================================
  // SHOW DEMO FIRST
  // ============================================

  displayServices(getDemoServices());

  // ============================================
  // CLICK HANDLERS
  // ============================================

  root.addEventListener('click', event => {
    const target = event.target instanceof Element
      ? event.target
      : event.target?.parentElement;

    if (!target) return;

    // SERVICE TABS

    const tab = target.closest('[data-about-tab]');

    if (tab) {
      activateService(Number(tab.dataset.aboutTab));
      return;
    }

    // FAQ ACCORDION

    const faq = target.closest('[data-about-faq]');

    if (faq) {
      const wasOpen =
        faq.getAttribute('aria-expanded') === 'true';

      root.querySelectorAll('[data-about-faq]').forEach(button => {
        const active = button === faq && !wasOpen;

        button.setAttribute(
          'aria-expanded',
          String(active)
        );

        const answer = root.querySelector(
          `#dp-about-answer-${button.dataset.aboutFaq}`
        );

        if (answer) {
          answer.hidden = !active;
        }

        const icon = button.querySelector(
          '.dp-about-faq-symbol'
        );

        if (icon) {
          icon.textContent = active ? '−' : '+';
        }
      });
    }

  }, { signal });

  // ============================================
  // KEYBOARD SERVICE TABS
  // ============================================

  tabList.addEventListener('keydown', event => {
    if (!serviceCount) return;

    const target = event.target instanceof Element
      ? event.target.closest('[data-about-tab]')
      : null;

    if (!target) return;

    const current = Number(target.dataset.aboutTab);

    let next = current;

    if (
      event.key === 'ArrowRight' ||
      event.key === 'ArrowDown'
    ) {
      next = (current + 1) % serviceCount;

    } else if (
      event.key === 'ArrowLeft' ||
      event.key === 'ArrowUp'
    ) {
      next = (current - 1 + serviceCount) % serviceCount;

    } else if (event.key === 'Home') {
      next = 0;

    } else if (event.key === 'End') {
      next = serviceCount - 1;

    } else {
      return;
    }

    event.preventDefault();

    activateService(next, true);

  }, { signal });

  // ============================================
  // LOAD API
  // ============================================

  void loadServices();

  // ============================================
  // CLEANUP
  // ============================================

  return () => controller.abort();
}
