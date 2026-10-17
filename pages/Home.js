
/**
 * Dentistry — Home Page
 * Vanilla JS + Webflow
 * Languages: FA / EN
 *
 * All API requests via code/api.js
 */

import { getLanguage, t } from '../code/i18n.js';

import {
  API_BASE_URL,
  serviceApi,
  blogApi,
  messageApi,
} from '../code/api.js';

import '../asset/css/home-custom.css';

// ============================================
// HELPERS
// ============================================

const language = () =>
  getLanguage() === 'fa' ? 'fa' : 'en';

const clean = value =>
  typeof value === 'string' ? value.trim() : '';

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

const tr = key => escapeHTML(t(`home.${key}`));

// ============================================
// STATIC ASSETS
// ============================================

const HERO_IMAGE =
  '/asset/img/hero.jpg';

const HERO_ICON =
  'https://cdn.prod.website-files.com/6768f6d314e679aeffeed929/679c4b211f44d535f9e7da9c_1.svg';

const ARROW_ICON = `
  <svg viewBox="0 0 24 24" width="20" height="20"
       fill="none" stroke="currentColor" stroke-width="1.8"
       stroke-linecap="round" stroke-linejoin="round"
       aria-hidden="true">
    <path d="M5 12h14"/>
    <path d="m13 6 6 6-6 6"/>
  </svg>
`;

const TOOTH_ICON = `
  <svg viewBox="0 0 64 64" width="48" height="48"
       fill="none" stroke="currentColor" stroke-width="1.8"
       stroke-linejoin="round" aria-hidden="true">
    <path d="M18 8C10 8 5 14 5 24c0 9 4 16 7 24
      2 5 5 8 9 7 4-1 3-9 5-15
      1-4 3-6 6-6s5 2 6 6
      c2 6 1 14 5 15 4 1 7-2 9-7
      3-8 7-15 7-24 0-10-5-16-13-16
      -6 0-9 4-14 4s-8-4-14-4Z"/>
  </svg>
`;

// ============================================
// LOADING / EMPTY / ERROR MESSAGES
// ============================================

const STATUS_TEXT = {
  en: {
    loadingServices: 'Loading services...',
    noServices: 'No services available.',
    servicesError: 'Unable to load services. Please try again later.',
    loadingBlogs: 'Loading articles...',
    noBlogs: 'No articles available.',
    blogsError: 'Unable to load articles. Please try again later.',
  },
  fa: {
    loadingServices: 'در حال دریافت خدمات...',
    noServices: 'خدمتی برای نمایش وجود ندارد.',
    servicesError: 'دریافت خدمات با خطا مواجه شد. بعداً دوباره تلاش کنید.',
    loadingBlogs: 'در حال دریافت مقالات...',
    noBlogs: 'مقاله‌ای برای نمایش وجود ندارد.',
    blogsError: 'دریافت مقالات با خطا مواجه شد. بعداً دوباره تلاش کنید.',
  },
};

function statusText(key) {
  const translated = t(`home.${key}`);

  if (
    translated &&
    translated !== `home.${key}`
  ) {
    return translated;
  }

  return STATUS_TEXT[language()][key];
}

// ============================================
// HTML DESCRIPTION TO PLAIN TEXT
// ============================================

function plainText(value) {
  const source = clean(value);

  if (!source) return '';

  const parsed = new DOMParser().parseFromString(
    source,
    'text/html'
  );

  return (parsed.body.textContent || '')
    .replace(/\s+/g, ' ')
    .trim();
}

// ============================================
// IMAGE URL
// ============================================

function assetURL(raw) {
  const value = clean(
    raw && typeof raw === 'object'
      ? (
          raw.url ||
          raw.full_url ||
          raw.path ||
          raw.src ||
          ''
        )
      : raw
  );

  if (
    !value ||
    /[<>"'\u0000-\u001f]/.test(value)
  ) {
    return '';
  }

  try {
    const origin = new URL(
      API_BASE_URL,
      window.location.origin
    ).origin;

    const path =
      /^https?:\/\//i.test(value) ||
      value.startsWith('/')
        ? value
        : /^(storage|uploads|images)\//i.test(value)
          ? `/${value}`
          : `/storage/${value}`;

    const url = new URL(path, origin);

    return ['http:', 'https:'].includes(url.protocol)
      ? url.href
      : '';

  } catch {
    return '';
  }
}

// ============================================
// TRANSLATION FROM LARAVEL
// ============================================

function translation(record) {
  const rows =
    record?.translations ||
    record?.service_translations ||
    record?.service_translates ||
    record?.blog_translations ||
    record?.translates;

  if (Array.isArray(rows)) {
    return rows.find(item =>
      item?.locale === language() ||
      item?.lang === language() ||
      item?.language === language()
    ) || {};
  }

  if (
    rows &&
    typeof rows === 'object' &&
    rows[language()]
  ) {
    return rows[language()];
  }

  const item = record?.translation;

  if (
    item &&
    (
      (!item.locale && !item.lang) ||
      item.locale === language() ||
      item.lang === language()
    )
  ) {
    return item;
  }

  return {};
}

// ============================================
// NORMALIZE SERVICE
// ============================================

function normalizeService(record) {
  if (!record || typeof record !== 'object') {
    return null;
  }

  if ([false, 0, '0'].includes(record.is_active)) {
    return null;
  }

  const id = Number(record.id);

  if (!Number.isSafeInteger(id) || id <= 0) {
    return null;
  }

  const translated = translation(record);

  const name = clean(
    translated.name ||
    translated.title_1 ||
    translated.title ||
    record.name ||
    record.title_1 ||
    record.title
  );

  if (!name) return null;

  return {
    id,
    name,

    description: clean(
      translated.description_1 ||
      translated.description ||
      record.description_1 ||
      record.description
    ),

    image: assetURL(
      record.image_url ||
      record.image_1_url ||
      record.image ||
      record.image_1 ||
      record.cover_image ||
      ''
    ),
  };
}

// ============================================
// NORMALIZE BLOG
// ============================================

function normalizeBlog(record) {
  if (!record || typeof record !== 'object') {
    return null;
  }

  const translated = translation(record);

  const title = clean(
    translated.title_1 ||
    record.title_1 ||
    translated.title ||
    record.title
  );

  if (!title) return null;

  const rawSlug = clean(
    record.slug ||
    record.blog_slug ||
    translated.slug
  );

  const slug =
    rawSlug &&
    !/[\/\\?#\u0000-\u001f]/.test(rawSlug)
      ? rawSlug
      : '';

  const date = clean(
    record.date ||
    record.published_at ||
    record.created_at
  ).slice(0, 10);

  return {
    id: record.id ?? null,
    slug,
    title,

    image: assetURL(
      record.image_1 ||
      record.image_1_url ||
      record.image_url ||
      record.cover_image_url ||
      record.image ||
      record.cover_image ||
      ''
    ),

    date: /^\d{4}-\d{2}-\d{2}$/.test(date)
      ? date
      : '',
  };
}

// ============================================
// EXTRACT API LIST
// ============================================

function extractList(response, key) {
  const data = response?.data ?? response;

  if (Array.isArray(data)) {
    return data;
  }

  const candidates = [
    data?.data,
    data?.[key],
    data?.items,
    data?.results,
    response?.[key],
    response?.results,
  ];

  for (const value of candidates) {
    if (Array.isArray(value)) {
      return value;
    }
  }

  return [];
}

// ============================================
// BUTTON
// ============================================

function button(
  href,
  key,
  className = 'button-primary w-inline-block'
) {
  return `
    <a href="${href}" class="${className}">
      <span class="button-primary-text">
        ${tr(key)}
      </span>
      <span class="button-icon-block">
        ${ARROW_ICON}
      </span>
    </a>
  `;
}

// ============================================
// HERO
// ============================================

function renderHero() {
  return `
    <section class="section hero-one-section dp-home-hero">
      <div class="w-layout-blockcontainer container-fluid w-container">
        <div class="hero-one-main-block">
          <div class="w-layout-grid hero-one-grid">

            <div class="hero-contant-block">
              <div class="hero-icon-inner-block">
                <div class="hero-one-icon-block">
                  <img
                    src="${HERO_ICON}"
                    loading="eager"
                    alt=""
                    class="hero-one-icon"
                    aria-hidden="true"
                  />
                </div>
              </div>

              <div class="hero-title-block">
                <h1 class="hero-title">
                  ${tr('heroTitle')}
                </h1>
              </div>

              <div class="hero-description">
                <p class="section-description">
                  ${tr('heroDescription')}
                </p>
              </div>

              <div class="hero-button-block">
                ${button('/login', 'bookNow')}
              </div>
            </div>

            <div class="hero-image-block">
              <img
                src="${HERO_IMAGE}"
                loading="eager"
                fetchpriority="high"
                alt="${tr('heroImageAlt')}"
                class="hero-image"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  `;
}

// ============================================
// ABOUT US
// ============================================

function renderAbout() {
  return `
    <section class="section aboutus-section dp-home-about">
      <div class="w-layout-blockcontainer container w-container">
        <div class="main-about-block">
          <div class="w-layout-grid about-grid">

            <div class="about-image-block">
              <img
                src="/asset/img/about.jpg"
                loading="lazy"
                alt="${tr('aboutImageAlt')}"
                class="about-image"
              />
              <img
                src="/asset/img/about-1.jpg"
                loading="lazy"
                alt="${tr('aboutImageAlt')}"
                class="about-image-two"
              />
            </div>

            <div class="about-content-block">
              <div class="about-title-block">
                <div class="section-sub-text">
                  ${tr('aboutEyebrow')}
                </div>
                <h2 class="section-title">
                  ${tr('aboutTitle')}
                </h2>
              </div>

              <p class="aboutus-description">
                ${tr('aboutDescription')}
              </p>

              <div class="about-two-list-block two">
                <ul role="list" class="about-two-list">

                  <li class="about-two-list-item">
                    <div class="about-two-icon-block" aria-hidden="true">
                      ${TOOTH_ICON}
                    </div>
                    <div class="about-list-two-info-block">
                      <h3 class="about-two-list-title">
                        ${tr('aboutFeature1')}
                      </h3>
                    </div>
                  </li>

                  <li class="about-two-list-item last">
                    <div class="about-two-icon-block" aria-hidden="true">
                      ${TOOTH_ICON}
                    </div>
                    <div class="about-list-two-info-block">
                      <h3 class="about-two-list-title">
                        ${tr('aboutFeature2')}
                      </h3>
                    </div>
                  </li>

                </ul>
              </div>

              <div class="contact-number-block">
                <div class="contact-number-text">
                  ${tr('questions')}
                  <a
                    href="/contact-us"
                    class="about-contact-link"
                  >
                    ${tr('contactUs')}
                  </a>
                </div>
              </div>

              <div class="about-button-block">
                ${button('/about-us', 'readMore')}
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  `;
}

// ============================================
// SERVICE CARDS
// ============================================

function renderServiceCards(services) {
  return services.map(service => {
    const href = `/services/${service.id}`;

    return `
      <div class="w-dyn-list">
        <div role="list" class="w-dyn-items">
          <div role="listitem" class="w-dyn-item">

            <article class="service-info-main-block dp-home-service-card">

              <a href="${href}" class="service-link w-inline-block">

                <div class="service-info-inner-block">
                  <div class="service-icon-inner-block">

                    <div class="service-icon-block" aria-hidden="true">
                      ${TOOTH_ICON}
                    </div>

                    <h3 class="service-title-one">
                      ${escapeHTML(service.name)}
                    </h3>

                  </div>
                </div>

                <p
                  class="service-description"
                  style="display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%;max-width:100%;"
                >
                  ${escapeHTML(plainText(service.description))}
                </p>

              </a>

              <div class="service-link-block">
                <a href="${href}" class="link-block w-inline-block">
                  <span class="link-button">
                    ${tr('readMore')}
                  </span>
                  <span class="link-border"></span>
                </a>
              </div>

            </article>

          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ============================================
// SERVICES SECTION
// ============================================

function renderServices() {
  return `
    <section
      class="section service-section dp-home-services"
      id="home-services"
    >
      <div class="w-layout-blockcontainer container-fluid w-container">
        <div class="main-grey-block">
          <div class="w-layout-blockcontainer container w-container">
            <div class="service-main-block">

              <div class="section-title-main-block">
                <div class="section-title-sub-text-block">
                  <div class="section-sub-text">
                    ${tr('servicesEyebrow')}
                  </div>
                </div>

                <div class="section-title-grid">
                  <h2 class="section-title">
                    ${tr('servicesTitle')}
                  </h2>
                </div>
              </div>

              <div
                class="w-layout-grid service-grid-block"
                data-home-services
              ></div>

              <p
                class="dp-home-preview-note"
                data-home-services-note
              >
                ${escapeHTML(statusText('loadingServices'))}
              </p>

              <div class="dp-home-section-link">
                ${button('/service', 'allServices')}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// ============================================
// CONTACT FORM
// ============================================

function renderContact() {
  return `
    <section class="section contact-section dp-home-contact">
      <div class="w-layout-blockcontainer container-fluid w-container">
        <div class="w-layout-grid contact-grid">

          <div class="contact-info-block">
            <img
              src="/asset/img/contact.jpg"
              loading="lazy"
              alt="${tr('contactImageAlt')}"
              class="contact-image-one"
            />
          </div>

          <div class="contact-form-block">
            <div class="contact-from-inner-block">

              <div class="contact-title-block-one">
                <div class="section-title-block">
                  <div class="section-sub-text two">
                    ${tr('contactEyebrow')}
                  </div>
                  <h2 class="section-title text-white">
                    ${tr('contactTitle')}
                  </h2>
                </div>
              </div>

              <div class="contact-from-block w-form">

                <form id="home-contact-form">

                  <div class="contact-main-block">

                    <div class="contact-inner-block">
                      <label class="dp-home-sr-only" for="home-first-name">
                        ${tr('firstName')}
                      </label>
                      <input
                        id="home-first-name"
                        class="input-field bg-grey w-input"
                        name="first_name"
                        maxlength="120"
                        required
                        type="text"
                        autocomplete="given-name"
                        placeholder="${tr('firstName')}"
                      />
                    </div>

                    <div class="contact-inner-block">
                      <label class="dp-home-sr-only" for="home-last-name">
                        ${tr('lastName')}
                      </label>
                      <input
                        id="home-last-name"
                        class="input-field bg-grey w-input"
                        name="last_name"
                        maxlength="120"
                        required
                        type="text"
                        autocomplete="family-name"
                        placeholder="${tr('lastName')}"
                      />
                    </div>

                  </div>

                  <div class="contact-main-block">

                    <div class="contact-inner-block">
                      <label class="dp-home-sr-only" for="home-email">
                        ${tr('email')}
                      </label>
                      <input
                        id="home-email"
                        class="input-field bg-grey w-input"
                        name="email"
                        maxlength="255"
                        required
                        type="email"
                        autocomplete="email"
                        placeholder="${tr('email')}"
                      />
                    </div>

                    <div class="contact-inner-block">
                      <label class="dp-home-sr-only" for="home-phone">
                        ${tr('phone')}
                      </label>
                      <input
                        id="home-phone"
                        class="input-field bg-grey w-input"
                        name="phone"
                        maxlength="30"
                        required
                        type="tel"
                        autocomplete="tel"
                        placeholder="${tr('phone')}"
                      />
                    </div>

                  </div>

                  <div class="contact-main-block one">

                    <label class="dp-home-sr-only" for="home-message">
                      ${tr('message')}
                    </label>

                    <textarea
                      id="home-message"
                      class="text-area w-input"
                      name="message"
                      maxlength="5000"
                      required
                      placeholder="${tr('message')}"
                    ></textarea>

                  </div>

                  <div class="contact-button-block">
                    <div class="button-submit">
                      <button
                        type="submit"
                        class="button-primary first dp-home-submit"
                      >
                        <span class="button-primary-text last">
                          ${tr('submit')}
                        </span>
                        <span class="button-icon-block">
                          ${ARROW_ICON}
                        </span>
                      </button>
                    </div>
                  </div>

                  <p
                    class="dp-home-contact-status"
                    data-home-contact-status
                    role="status"
                    aria-live="polite"
                    hidden
                  ></p>

                </form>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}

// ============================================
// BLOG DATE
// ============================================

function formatBlogDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value || '')) {
    return '';
  }

  const date = new Date(`${value}T12:00:00Z`);

  if (Number.isNaN(date.getTime())) {
    return '';
  }

  return new Intl.DateTimeFormat(
    language() === 'fa' ? 'fa-IR' : 'en-US',
    {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      timeZone: 'UTC',
    }
  ).format(date);
}

// ============================================
// BLOG CARDS
// ============================================

function renderBlogCards(posts) {
  return posts.map(post => {
    const href = post.slug
      ? `/post/${encodeURIComponent(post.slug)}`
      : '/blog';

    return `
      <div class="w-dyn-item" role="listitem">
        <article class="main-blog-block dp-home-blog-card">

          <a href="${href}" class="blog-link-block w-inline-block">

            <div class="blog-image-block">

              ${
                post.image
                  ? `
                    <img
                      src="${escapeHTML(post.image)}"
                      loading="lazy"
                      alt="${escapeHTML(post.title)}"
                      class="blog-image"
                    />
                  `
                  : `
                    <span class="dp-home-blog-placeholder" aria-hidden="true">
                      ${TOOTH_ICON}
                    </span>
                  `
              }

              ${
                post.date
                  ? `
                    
                  `
                  : ''
              }

            </div>

            <h3 class="blog-title">
              ${escapeHTML(post.title)}
            </h3>

          </a>

          <div class="blog-button-block">
            ${button(href, 'readMore')}
          </div>

        </article>
      </div>
    `;
  }).join('');
}

// ============================================
// BLOG SECTION
// ============================================

function renderBlog() {
  return `
    <section
      class="section blog-section dp-home-blog"
      id="home-blog"
    >
      <div class="w-layout-blockcontainer container w-container">
        <div class="blog-main-block">

          <div class="section-title-main-block">
            <div class="section-title-sub-text-block">
              <div class="section-sub-text">
                ${tr('blogEyebrow')}
              </div>
            </div>

            <div class="section-title-grid">
              <h2 class="section-title">
                ${tr('blogTitle')}
              </h2>
            </div>
          </div>

          <div class="w-dyn-list">
            <div
              class="w-dyn-items dp-home-blog-grid"
              role="list"
              data-home-blogs
            ></div>
          </div>

          <p
            class="dp-home-preview-note"
            data-home-blogs-note
          >
            ${escapeHTML(statusText('loadingBlogs'))}
          </p>

          <div class="dp-home-section-link">
            ${button('/blog', 'allBlogs')}
          </div>

        </div>
      </div>
    </section>
  `;
}

// ============================================
// HOME RENDER
// ============================================

export function Home() {
  return `
    <main
      class="dp-home-page"
      data-home-page
      data-no-translate
    >
      ${renderHero()}
      ${renderAbout()}
      ${renderServices()}
      ${renderContact()}
      ${renderBlog()}
    </main>
  `;
}

// ============================================
// HOME INITIALIZATION
// ============================================

export function initHome() {
  const root = document.querySelector('[data-home-page]');

  if (!root) {
    return () => {};
  }

  const controller = new AbortController();
  const { signal } = controller;

  const serviceList = root.querySelector(
    '[data-home-services]'
  );

  const serviceNote = root.querySelector(
    '[data-home-services-note]'
  );

  const blogList = root.querySelector(
    '[data-home-blogs]'
  );

  const blogNote = root.querySelector(
    '[data-home-blogs-note]'
  );

  const contactForm = root.querySelector(
    '#home-contact-form'
  );

  const contactStatus = root.querySelector(
    '[data-home-contact-status]'
  );

  const submitButton = contactForm.querySelector(
    '[type="submit"]'
  );

  const alive = () =>
    !signal.aborted && root.isConnected;

  function showStatus(element, key) {
    element.textContent = statusText(key);
    element.hidden = false;
  }

  // ==========================================
  // SERVICES API
  // ==========================================

  async function loadServices() {
    serviceList.replaceChildren();

    showStatus(
      serviceNote,
      'loadingServices'
    );

    try {
      const response = await serviceApi.list(
        language(),
        signal
      );

      if (!alive()) return;

      const services = extractList(
        response,
        'services'
      )
        .map(normalizeService)
        .filter(Boolean)
        .slice(0, 6);

      serviceList.innerHTML = renderServiceCards(services);

      if (services.length) {
        serviceNote.hidden = true;
      } else {
        showStatus(serviceNote, 'noServices');
      }

    } catch (error) {
      if (!alive()) return;

      showStatus(
        serviceNote,
        'servicesError'
      );

      console.error(
        'Home services API:',
        error
      );
    }
  }

  // ==========================================
  // BLOG API
  // ==========================================

  async function loadBlogs() {
    blogList.replaceChildren();

    showStatus(
      blogNote,
      'loadingBlogs'
    );

    try {
      const response = await blogApi.list(
        language(),
        signal
      );

      if (!alive()) return;

      const blogs = extractList(
        response,
        'blogs'
      )
        .map(normalizeBlog)
        .filter(Boolean)
        .slice(0, 3);

      blogList.innerHTML = renderBlogCards(blogs);

      if (blogs.length) {
        blogNote.hidden = true;
      } else {
        showStatus(blogNote, 'noBlogs');
      }

    } catch (error) {
      if (!alive()) return;

      showStatus(
        blogNote,
        'blogsError'
      );

      console.error(
        'Home blogs API:',
        error
      );
    }
  }

  // ==========================================
  // MESSAGE API
  // ==========================================

  let sendingMessage = false;

  contactForm.addEventListener(
    'submit',
    async event => {
      event.preventDefault();

      if (sendingMessage || !alive()) {
        return;
      }

      contactStatus.hidden = false;

      if (!contactForm.checkValidity()) {
        contactStatus.dataset.state = 'error';
        contactStatus.textContent = t('home.formRequired');
        contactForm.reportValidity();
        return;
      }

      const fields = new FormData(contactForm);

      const payload = {
        first_name: clean(fields.get('first_name')),
        last_name: clean(fields.get('last_name')),
        email: clean(fields.get('email')),
        phone: clean(fields.get('phone')),
        message: clean(fields.get('message')),
      };

      if (
        Object.values(payload).some(value => !value)
      ) {
        contactStatus.dataset.state = 'error';
        contactStatus.textContent = t('home.formRequired');
        return;
      }

      sendingMessage = true;
      submitButton.disabled = true;

      contactStatus.dataset.state = 'pending';
      contactStatus.textContent = t('home.formSending');

      try {
        await messageApi.send(
          payload,
          signal
        );

        if (!alive()) return;

        contactForm.reset();

        contactStatus.dataset.state = 'success';
        contactStatus.textContent = t('home.formSent');

      } catch (error) {
        if (!alive()) return;

        console.error(
          'Home message API:',
          error
        );

        contactStatus.dataset.state = 'error';

        contactStatus.textContent =
          error?.status === 422
            ? t('home.formValidationError')
            : error?.status === 408
              ? t('home.formTimeout')
              : t('home.formError');

      } finally {
        sendingMessage = false;

        if (alive()) {
          submitButton.disabled = false;
        }
      }
    },
    { signal }
  );

  // ==========================================
  // INITIAL API LOAD
  // ==========================================

  void loadServices();
  void loadBlogs();

  // Cleanup when navigating away.
  return () => controller.abort();
}
