/**
 * Dentistry — Home page
 * Bilingual FA/EN, Webflow layout, services/blog preview + API fallback.
 * Shared Header and Footer are rendered by the SPA router.
 * API: GET /api/v1/services?lang=fa|en
 * API: GET /api/v1/blogs?lang=fa|en
 * API: POST /api/messages
 */
import { getLanguage, t } from '../code/i18n.js';
import '../asset/css/home-custom.css';

const language = () => getLanguage() === 'fa' ? 'fa' : 'en';
const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, ch => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
})[ch]);
const tr = key => escapeHTML(t(`home.${key}`));
const clean = value => typeof value === 'string' ? value.trim() : '';

const CDN = 'https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/';
const HERO_IMAGE = 'https://cdn.prod.website-files.com/6768f6d314e679aeffeed929/679c51db219feb60fb4c94c4_hero%20image.webp';
const HERO_ICON = 'https://cdn.prod.website-files.com/6768f6d314e679aeffeed929/679c4b211f44d535f9e7da9c_1.svg';
const ARROW_ICON = `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>`;
const TOOTH_ICON = `<svg viewBox="0 0 64 64" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><path d="M18 8C10 8 5 14 5 24c0 9 4 16 7 24 2 5 5 8 9 7 4-1 3-9 5-15 1-4 3-6 6-6s5 2 6 6c2 6 1 14 5 15 4 1 7-2 9-7 3-8 7-15 7-24 0-10-5-16-13-16-6 0-9 4-14 4s-8-4-14-4Z"/></svg>`;

const SERVICE_IMAGES = [
  CDN + '67739cb05026dbf725d4e6e6_service%20image%20%281%29.webp',
  CDN + '6773a8df753ab7c72f9cc04f_service%20image%20%289%29.webp',
  CDN + '6773a948a802dec038145370_service%20image%20%282%29.webp',
  CDN + '6773a9540dd9d020f977e7e6_service%20image%20%283%29.webp',
  CDN + '6773a95f18d02159b11b502c_service%20image%20%284%29.webp',
  CDN + '6773a948a802dec038145370_service%20image%20%282%29.webp',
];

const BLOG_IMAGES = [
  CDN + '676a535bc2ab95ad9983363c_blog%20image%20%284%29.webp',
  CDN + '676a53cf0e3c157f6e1fa3f0_blog%20image%20%285%29.webp',
  CDN + '676a540c9da3b01fd9958a20_blog%20image%20%286%29.webp',
];

function demoServices() {
  return SERVICE_IMAGES.map((image, i) => ({
    id: null,
    name: t(`home.service${i + 1}Title`),
    description: t(`home.service${i + 1}Description`),
    image,
    isDemo: true,
  }));
}

function demoBlogs() {
  return BLOG_IMAGES.map((image, i) => ({
    slug: '',
    title: t(`home.blog${i + 1}Title`),
    image,
    date: '',
    isDemo: true,
  }));
}

function apiV1() {
  const base = String(import.meta.env.VITE_API_BASE_URL || '/api').replace(/\/+$/, '');
  if (/\/api\/v1$/i.test(base) || /\/v1$/i.test(base)) return base;
  if (/\/api$/i.test(base)) return `${base}/v1`;
  return `${base}/api/v1`;
}

// Message route is /api/messages, NOT /api/v1/messages.
function messagesEndpoint() {
  return `${apiV1().replace(/\/v1$/i, '')}/messages`;
}

function assetURL(raw) {
  const value = clean(raw);
  if (!value || /[<>"'\u0000-\u001f]/.test(value)) return '';
  try {
    const origin = new URL(apiV1(), window.location.origin).origin;
    const path = /^https?:\/\//i.test(value) || value.startsWith('/')
      ? value
      : /^(storage|uploads|images)\//i.test(value) ? `/${value}` : `/storage/${value}`;
    const url = new URL(path, origin);
    return ['http:', 'https:'].includes(url.protocol) ? url.href : '';
  } catch { return ''; }
}

function translation(record) {
  if (Array.isArray(record?.translations)) {
    return record.translations.find(x => x?.locale === language() || x?.lang === language()) || {};
  }
  if (record?.translations?.[language()]) return record.translations[language()];
  if (record?.translation && (!record.translation.locale || record.translation.locale === language())) {
    return record.translation;
  }
  return {};
}

function normalizeService(record) {
  if (!record || typeof record !== 'object') return null;
  if ([false, 0, '0'].includes(record.is_active)) return null;
  const id = Number(record.id);
  if (!Number.isSafeInteger(id) || id <= 0) return null;
  const translated = translation(record);
  const name = clean(
    translated.name || translated.title_1 || translated.title ||
    record.name || record.title_1 || record.title
  );
  if (!name) return null;
  return {
    id,
    name,
    description: clean(
      translated.description_1 || translated.description ||
      record.description_1 || record.description
    ),
    image: assetURL(record.image_url || record.image_1_url || record.image || record.image_1 || record.cover_image || ''),
    isDemo: false,
  };
}

function normalizeBlog(record) {
  if (!record || typeof record !== 'object') return null;
  const translated = translation(record);
  // Laravel list API returns title_1/image_1/date; slug can be absent.
  const title = clean(translated.title_1 || record.title_1 || translated.title || record.title);
  if (!title) return null;
  const rawSlug = clean(record.slug || record.blog_slug || translated.slug);
  const slug = /^[a-z0-9-]+$/i.test(rawSlug) ? rawSlug : '';
  const date = clean(record.date || record.published_at || record.created_at).slice(0, 10);
  return {
    id: record.id ?? null,
    slug,
    title,
    image: assetURL(record.image_1 || record.image_1_url || record.image_url || record.cover_image_url || record.image || record.cover_image || ''),
    date: /^\d{4}-\d{2}-\d{2}$/.test(date) ? date : '',
    isDemo: false,
  };
}

function extractList(json, alternate) {
  const data = json?.data ?? json;
  if (Array.isArray(data)) return data;
  for (const possible of [data?.data, data?.[alternate], data?.items, json?.[alternate]]) {
    if (Array.isArray(possible)) return possible;
  }
  return [];
}

function button(href, textKey, className = 'button-primary w-inline-block') {
  return `<a href="${href}" class="${className}"><span class="button-primary-text">${tr(textKey)}</span><span class="button-icon-block">${ARROW_ICON}</span></a>`;
}

function renderHero() {
  return `
    <section class="section hero-one-section dp-home-hero">
      <div class="w-layout-blockcontainer container-fluid w-container">
        <div class="hero-one-main-block">
          <div class="w-layout-grid hero-one-grid">
            <div class="hero-contant-block">
              <div class="hero-icon-inner-block"><div class="hero-one-icon-block">
                <img src="${HERO_ICON}" loading="eager" alt="" class="hero-one-icon" aria-hidden="true" />
              </div></div>
              <div class="hero-title-block"><h1 class="hero-title">${tr('heroTitle')}</h1></div>
              <div class="hero-description"><p class="section-description">${tr('heroDescription')}</p></div>
              <div class="hero-button-block">${button('/login', 'bookNow')}</div>
            </div>
            <div class="hero-image-block">
              <img src="${HERO_IMAGE}" loading="eager" fetchpriority="high" alt="${tr('heroImageAlt')}" class="hero-image" />
            </div>
          </div>
        </div>
      </div>
    </section>`;
}

function renderAbout() {
  return `
    <section class="section aboutus-section dp-home-about">
      <div class="w-layout-blockcontainer container w-container">
        <div class="main-about-block"><div class="w-layout-grid about-grid">
          <div class="about-image-block">
            <img src="/asset/img/about.jpg" loading="lazy" alt="${tr('aboutImageAlt')}" class="about-image" />
            <img src="/asset/img/about-1.jpg" loading="lazy" alt="${tr('aboutImageAlt')}" class="about-image-two" />
          </div>
          <div class="about-content-block">
            <div class="about-title-block">
              <div class="section-sub-text">${tr('aboutEyebrow')}</div>
              <h2 class="section-title">${tr('aboutTitle')}</h2>
            </div>
            <p class="aboutus-description">${tr('aboutDescription')}</p>
            <div class="about-two-list-block two"><ul role="list" class="about-two-list">
              <li class="about-two-list-item">
                <div class="about-two-icon-block" aria-hidden="true">${TOOTH_ICON}</div>
                <div class="about-list-two-info-block"><h3 class="about-two-list-title">${tr('aboutFeature1')}</h3></div>
              </li>
              <li class="about-two-list-item last">
                <div class="about-two-icon-block" aria-hidden="true">${TOOTH_ICON}</div>
                <div class="about-list-two-info-block"><h3 class="about-two-list-title">${tr('aboutFeature2')}</h3></div>
              </li>
            </ul></div>
            <div class="contact-number-block"><div class="contact-number-text">
              ${tr('questions')} <a href="/contact-us" class="about-contact-link">${tr('contactUs')}</a>
            </div></div>
            <div class="about-button-block">${button('/about-us', 'readMore')}</div>
          </div>
        </div></div>
      </div>
    </section>`;
}

function renderServiceCards(services) {
  return services.map(service => {
    const href = service.isDemo ? '/service' : `/services/${service.id}`;
    return `<div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item">
      <article class="service-info-main-block dp-home-service-card">
        <a href="${href}" class="service-link w-inline-block">
          <div class="service-info-inner-block"><div class="service-icon-inner-block"><div class="service-icon-block" aria-hidden="true">${TOOTH_ICON}</div>
            <h3 class="service-title-one">${escapeHTML(service.name)}</h3>
          </div></div>
          <p class="service-description">${escapeHTML(service.description)}</p>
        </a>
        <div class="service-link-block"><a href="${href}" class="link-block w-inline-block">
          <span class="link-button">${tr('readMore')}</span><span class="link-border"></span>
        </a></div>
      </article>
    </div></div></div>`;
  }).join('');
}

function renderServices() {
  return `
    <section class="section service-section dp-home-services" id="home-services">
      <div class="w-layout-blockcontainer container-fluid w-container"><div class="main-grey-block">
        <div class="w-layout-blockcontainer container w-container"><div class="service-main-block">
          <div class="section-title-main-block">
            <div class="section-title-sub-text-block"><div class="section-sub-text">${tr('servicesEyebrow')}</div></div>
            <div class="section-title-grid"><h2 class="section-title">${tr('servicesTitle')}</h2></div>
          </div>
          <div class="w-layout-grid service-grid-block" data-home-services>${renderServiceCards(demoServices())}</div>
          <p class="dp-home-preview-note" data-home-services-note>${tr('demoServicesNote')}</p>
          <div class="dp-home-section-link">${button('/service', 'allServices')}</div>
        </div></div>
      </div></div>
    </section>`;
}

function renderTreatmentTabs(services) {
  const five = services.slice(0, 5);
  const buttons = five.map((service, index) => `
    <button id="dp-home-tab-${index}" class="tretment-tab-link-main w-tab-link ${index === 0 ? 'w--current' : ''}"
      type="button" role="tab" tabindex="${index === 0 ? 0 : -1}" aria-selected="${index === 0}"
      aria-controls="dp-home-pane-${index}" data-home-tab="${index}">
      <span class="tretment-link-main-block"><span class="tretment-inner-block">
        <span class="tretment-tab-link">${escapeHTML(service.name)}</span>
        <span class="tretment-round-block" aria-hidden="true"></span>
      </span></span>
      <span class="tretment-tab-content-block" ${index === 0 ? '' : 'hidden'}>
        <span class="tretment-tab-content-inner-block"><span class="tretment-icon-box" aria-hidden="true">${TOOTH_ICON}</span>
          <span class="tretment-description">${escapeHTML(service.description)}</span>
        </span>
      </span>
    </button>`).join('');
  const panes = five.map((service, index) => {
    const href = service.isDemo ? '/service' : `/services/${service.id}`;
    return `<div id="dp-home-pane-${index}" class="tretment-tab-pane w-tab-pane ${index === 0 ? 'w--tab-active' : ''}"
      role="tabpanel" aria-labelledby="dp-home-tab-${index}" data-home-pane="${index}" ${index === 0 ? '' : 'hidden'}>
      <a href="${href}" class="tretment-content-link w-inline-block">
        ${service.image ? `<img src="${escapeHTML(service.image)}" class="tretment-image" loading="lazy" alt="${escapeHTML(service.name)}" />`
          : `<span class="dp-home-treatment-placeholder" aria-hidden="true">${TOOTH_ICON}</span>`}
      </a>
    </div>`;
  }).join('');
  return { buttons, panes };
}

function renderTreatments() {
  const content = renderTreatmentTabs(demoServices());
  return `
    <section class="section treatment-section dp-home-treatment" id="home-treatments">
      <div class="w-layout-blockcontainer container w-container"><div class="main-treatment-block">
        <div class="treatment-title-block"><div class="section-sub-text">${tr('treatmentEyebrow')}</div>
          <h2 class="section-title">${tr('treatmentTitle')}</h2>
        </div>
        <div class="treatment-inner-block"><div class="tretment-tabs w-tabs dp-home-treatment-tabs" data-home-treatment>
          <div class="tretment-menu w-tab-menu" role="tablist" aria-label="${tr('treatmentTitle')}" data-home-tab-list>${content.buttons}</div>
          <div class="tretment-content w-tab-content" data-home-tab-panes>${content.panes}</div>
        </div></div>
      </div></div>
    </section>`;
}

function renderContact() {
  return `
    <section class="section contact-section dp-home-contact">
      <div class="w-layout-blockcontainer container-fluid w-container"><div class="w-layout-grid contact-grid">
        <div class="contact-info-block"><img src="/asset/img/contact.jpg" loading="lazy" alt="${tr('contactImageAlt')}" class="contact-image-one" /></div>
        <div class="contact-form-block"><div class="contact-from-inner-block">
          <div class="contact-title-block-one"><div class="section-title-block">
            <div class="section-sub-text two">${tr('contactEyebrow')}</div>
            <h2 class="section-title text-white">${tr('contactTitle')}</h2>
          </div></div>
          <div class="contact-from-block w-form">
            <form id="home-contact-form">
              <div class="contact-main-block">
                <div class="contact-inner-block"><label class="dp-home-sr-only" for="home-first-name">${tr('firstName')}</label>
                  <input id="home-first-name" class="input-field bg-grey w-input" name="first_name" maxlength="120" required
                    type="text" autocomplete="given-name" placeholder="${tr('firstName')}" />
                </div>
                <div class="contact-inner-block"><label class="dp-home-sr-only" for="home-last-name">${tr('lastName')}</label>
                  <input id="home-last-name" class="input-field bg-grey w-input" name="last_name" maxlength="120" required
                    type="text" autocomplete="family-name" placeholder="${tr('lastName')}" />
                </div>
              </div>
              <div class="contact-main-block">
                <div class="contact-inner-block"><label class="dp-home-sr-only" for="home-email">${tr('email')}</label>
                  <input id="home-email" class="input-field bg-grey w-input" name="email" maxlength="255" required
                    type="email" autocomplete="email" placeholder="${tr('email')}" />
                </div>
                <div class="contact-inner-block"><label class="dp-home-sr-only" for="home-phone">${tr('phone')}</label>
                  <input id="home-phone" class="input-field bg-grey w-input" name="phone" maxlength="30" required
                    type="tel" autocomplete="tel" placeholder="${tr('phone')}" />
                </div>
              </div>
              <div class="contact-main-block one"><label class="dp-home-sr-only" for="home-message">${tr('message')}</label>
                <textarea id="home-message" class="text-area w-input" name="message" maxlength="5000" required
                  placeholder="${tr('message')}"></textarea>
              </div>
              <div class="contact-button-block"><div class="button-submit">
                <button type="submit" class="button-primary first dp-home-submit"><span class="button-primary-text last">${tr('submit')}</span>
                  <span class="button-icon-block">${ARROW_ICON}</span>
                </button>
              </div></div>
              <p class="dp-home-contact-status" data-home-contact-status role="status" aria-live="polite" hidden></p>
            </form>
          </div>
        </div></div>
      </div></div>
    </section>`;
}

function formatBlogDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value || '')) return '';
  const date = new Date(`${value}T12:00:00Z`);
  return Number.isNaN(date.getTime()) ? '' : new Intl.DateTimeFormat(language() === 'fa' ? 'fa-IR' : 'en-US', {
    year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC',
  }).format(date);
}

function renderBlogCards(posts) {
  return posts.map(post => {
    const href = post.slug ? `/post/${encodeURIComponent(post.slug)}` : '/blog';
    return `<div class="w-dyn-item" role="listitem"><article class="main-blog-block dp-home-blog-card">
      <a href="${href}" class="blog-link-block w-inline-block">
        <div class="blog-image-block">
          ${post.image ? `<img src="${escapeHTML(post.image)}" loading="lazy" alt="${escapeHTML(post.title)}" class="blog-image" />`
            : `<span class="dp-home-blog-placeholder" aria-hidden="true">${TOOTH_ICON}</span>`}
          ${post.date ? `<div class="blog-date-block"><time class="blog-date" datetime="${escapeHTML(post.date)}">${escapeHTML(formatBlogDate(post.date))}</time></div>` : ''}
        </div>
        <h3 class="blog-title">${escapeHTML(post.title)}</h3>
      </a>
      <div class="blog-button-block">${button(href, 'readMore')}</div>
    </article></div>`;
  }).join('');
}

function renderBlog() {
  return `
    <section class="section blog-section dp-home-blog" id="home-blog">
      <div class="w-layout-blockcontainer container w-container"><div class="blog-main-block">
        <div class="section-title-main-block">
          <div class="section-title-sub-text-block"><div class="section-sub-text">${tr('blogEyebrow')}</div></div>
          <div class="section-title-grid"><h2 class="section-title">${tr('blogTitle')}</h2></div>
        </div>
        <div class="w-dyn-list"><div class="w-dyn-items dp-home-blog-grid" role="list" data-home-blogs>${renderBlogCards(demoBlogs())}</div></div>
        <p class="dp-home-preview-note" data-home-blogs-note>${tr('demoBlogNote')}</p>
        <div class="dp-home-section-link">${button('/blog', 'allBlogs')}</div>
      </div></div>
    </section>`;
}

export function Home() {
  return `<main class="dp-home-page" data-home-page data-no-translate>
    ${renderHero()}
    ${renderAbout()}
    ${renderServices()}
    ${renderTreatments()}
    ${renderContact()}
    ${renderBlog()}
  </main>`;
}

export function initHome() {
  const root = document.querySelector('[data-home-page]');
  if (!root) return () => {};
  const controller = new AbortController();
  const { signal } = controller;
  const serviceList = root.querySelector('[data-home-services]');
  const serviceNote = root.querySelector('[data-home-services-note]');
  const blogList = root.querySelector('[data-home-blogs]');
  const blogNote = root.querySelector('[data-home-blogs-note]');
  const tabsRoot = root.querySelector('[data-home-treatment]');
  const tabList = root.querySelector('[data-home-tab-list]');
  const paneList = root.querySelector('[data-home-tab-panes]');
  const contactForm = root.querySelector('#home-contact-form');
  const contactStatus = root.querySelector('[data-home-contact-status]');
  let tabCount = 0;

  function activateTab(index, focus = false) {
    if (!Number.isInteger(index) || index < 0 || index >= tabCount) return;
    const tabs = [...tabList.querySelectorAll('[data-home-tab]')];
    const panes = [...paneList.querySelectorAll('[data-home-pane]')];
    tabs.forEach((tab, i) => {
      const active = i === index;
      tab.classList.toggle('w--current', active);
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
      const details = tab.querySelector('.tretment-tab-content-block');
      if (details) details.hidden = !active;
      if (active && focus) tab.focus();
    });
    panes.forEach((pane, i) => {
      const active = i === index;
      pane.hidden = !active;
      pane.classList.toggle('w--tab-active', active);
    });
  }

  function updateServices(services) {
    serviceList.innerHTML = renderServiceCards(services.slice(0, 6));
    const tabs = renderTreatmentTabs(services);
    tabList.innerHTML = tabs.buttons;
    paneList.innerHTML = tabs.panes;
    tabCount = Math.min(services.length, 5);
    tabsRoot.hidden = tabCount === 0;
    activateTab(0);
  }

  function updateBlogs(posts) {
    blogList.innerHTML = renderBlogCards(posts.slice(0, 3));
  }

  updateServices(demoServices());
  updateBlogs(demoBlogs());

  tabList.addEventListener('click', event => {
    const tab = event.target instanceof Element ? event.target.closest('[data-home-tab]') : null;
    if (tab) activateTab(Number(tab.dataset.homeTab));
  }, { signal });

  tabList.addEventListener('keydown', event => {
    const tab = event.target instanceof Element ? event.target.closest('[data-home-tab]') : null;
    if (!tab || tabCount === 0) return;
    const current = Number(tab.dataset.homeTab);
    let next = current;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (current + 1) % tabCount;
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (current - 1 + tabCount) % tabCount;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = tabCount - 1;
    else return;
    event.preventDefault();
    activateTab(next, true);
  }, { signal });

  let sendingMessage = false;
  const submitButton = contactForm.querySelector('[type="submit"]');

  contactForm.addEventListener('submit', async event => {
    event.preventDefault();
    if (sendingMessage || signal.aborted) return;

    contactStatus.hidden = false;
    contactStatus.dataset.state = 'pending';
    if (!contactForm.checkValidity()) {
      contactStatus.textContent = t('home.formRequired');
      contactStatus.dataset.state = 'error';
      contactForm.reportValidity();
      return;
    }

    const fields = new FormData(contactForm);
    const payload = {
      first_name: String(fields.get('first_name') || '').trim(),
      last_name: String(fields.get('last_name') || '').trim(),
      email: String(fields.get('email') || '').trim(),
      phone: String(fields.get('phone') || '').trim(),
      message: String(fields.get('message') || '').trim(),
    };

    if (Object.values(payload).some(value => !value)) {
      contactStatus.textContent = t('home.formRequired');
      contactStatus.dataset.state = 'error';
      return;
    }

    sendingMessage = true;
    submitButton.disabled = true;
    contactStatus.textContent = t('home.formSending');

    // Abort on SPA navigation; also timeout an unresponsive server.
    const requestController = new AbortController();
    const abortRequest = () => requestController.abort();
    signal.addEventListener('abort', abortRequest, { once: true });
    const timeout = setTimeout(abortRequest, 15000);
    try {
      const response = await fetch(messagesEndpoint(), {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        credentials: 'omit',
        cache: 'no-store',
        signal: requestController.signal,
      });
      const json = await response.json().catch(() => null);
      if (!response.ok || json?.status === false || json?.success === false) {
        const err = new Error('MESSAGE_API_FAILED');
        err.status = response.status;
        throw err;
      }
      if (!json || typeof json !== 'object') {
        throw new Error('INVALID_RESPONSE');
      }
      if (signal.aborted || !root.isConnected) return;
      contactForm.reset();
      contactStatus.dataset.state = 'success';
      contactStatus.textContent = t('home.formSent');
    } catch (error) {
      if (signal.aborted || !root.isConnected) return;
      console.error('Home: message request failed.', error);
      contactStatus.dataset.state = 'error';
      contactStatus.textContent = error?.status === 422
        ? t('home.formValidationError')
        : error?.name === 'AbortError'
          ? t('home.formTimeout')
          : t('home.formError');
    } finally {
      clearTimeout(timeout);
      signal.removeEventListener('abort', abortRequest);
      sendingMessage = false;
      if (!signal.aborted && root.isConnected) submitButton.disabled = false;
    }
  }, { signal });

  async function loadServices() {
    try {
      const response = await fetch(`${apiV1()}/services?lang=${language()}`, {
        headers: { Accept: 'application/json' }, signal, cache: 'no-store', credentials: 'omit',
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const json = await response.json();
      if (json?.success === false || json?.status === false) throw new Error('API failure');
      if (signal.aborted || !root.isConnected) return;
      const records = extractList(json, 'services');
      const services = records.map(normalizeService).filter(Boolean).slice(0, 6);
      if (services.length) {
        updateServices(services);
        serviceNote.hidden = true;
      }
    } catch (error) {
      if (!signal.aborted) console.info('Home: preview services retained.', error);
    }
  }

  async function loadBlogs() {
    try {
      const response = await fetch(`${apiV1()}/blogs?lang=${language()}`, {
        headers: { Accept: 'application/json' }, signal, cache: 'no-store', credentials: 'omit',
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const json = await response.json();
      if (json?.success === false || json?.status === false) throw new Error('API failure');
      if (signal.aborted || !root.isConnected) return;
      const records = extractList(json, 'blogs');
      const posts = records.map(normalizeBlog).filter(Boolean).slice(0, 3);
      if (posts.length) {
        updateBlogs(posts);
        blogNote.hidden = true;
      }
    } catch (error) {
      if (!signal.aborted) console.info('Home: preview blogs retained.', error);
    }
  }

  void loadServices();
  void loadBlogs();
  return () => controller.abort();
}
