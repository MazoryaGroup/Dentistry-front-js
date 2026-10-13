
/**
 * Dentistry — Blog Page
 *
 * GET /api/v1/blogs?lang=fa
 * GET /api/v1/blogs?lang=en
 *
 * Laravel fields:
 * title_1, title_2, title_3
 * description_1, description_2, description_3
 * image_1, image_2, date, slug
 */

import { blogApi } from '../code/api.js';
import { t } from '../code/i18n.js';

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

function safeImageUrl(value) {
  if (typeof value !== 'string') return '';

  const url = value.trim();

  if (!url || /[<>"\u0000-\u001F]/.test(url)) {
    return '';
  }

  try {
    const parsed = new URL(
      url,
      window.location.origin
    );

    if (!['http:', 'https:'].includes(parsed.protocol)) {
      return '';
    }

    return parsed.href;
  } catch {
    return '';
  }
}

function formatDate(value, lang) {
  if (!value) {
    return {
      iso: '',
      label: '',
    };
  }

  const raw = String(value);

  const date = /^\d{4}-\d{2}-\d{2}$/.test(raw)
    ? new Date(`${raw}T12:00:00Z`)
    : new Date(raw);

  if (Number.isNaN(date.getTime())) {
    return {
      iso: '',
      label: '',
    };
  }

  return {
    iso: date.toISOString().slice(0, 10),

    label: new Intl.DateTimeFormat(
      lang === 'fa' ? 'fa-IR' : 'en-US',
      {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC',
      }
    ).format(date),
  };
}

// ============================================
// EXTRACT API DATA
// ============================================

function extractPosts(response) {
  const data = response?.data;

  if (Array.isArray(data)) {
    return data;
  }

  // Supports a paginated response too.
  if (Array.isArray(data?.data)) {
    return data.data;
  }

  if (Array.isArray(data?.blogs)) {
    return data.blogs;
  }

  if (Array.isArray(data?.blogs?.data)) {
    return data.blogs.data;
  }

  return null;
}

// ============================================
// NORMALIZE LARAVEL BLOG
// ============================================

function normalizePost(item, lang) {
  if (!item || typeof item !== 'object') {
    return null;
  }

  // Actual API uses title_1, NOT title.
  const title = String(
    item.title_1 ??
    item.title ??
    ''
  ).trim();

  if (!title) return null;

  // Actual API uses image_1.
  const image = safeImageUrl(
    item.image_1 ??
    item.image_url ??
    item.image ??
    ''
  );

  // Do not invent a slug if backend omits it.
  const slug = String(
    item.slug ??
    item.blog_slug ??
    ''
  ).trim();

  const date = formatDate(
    item.date ??
    item.published_at ??
    item.created_at,
    lang
  );

  return {
    id: item.id ?? null,
    slug,
    title,
    image,
    dateISO: date.iso,
    date: date.label,
  };
}

// ============================================
// RENDER BLOG CARD
// ============================================

function renderPost(post) {
  const title = escapeHTML(post.title);

  // Prefer the real slug. Use the ID when
  // the API does not return a slug yet.
  const routeKey =
    post.slug ||
    (post.id != null ? String(post.id) : '');

  const url = routeKey
    ? `/post/${encodeURIComponent(routeKey)}`
    : '';

  const imageHTML = post.image
    ? `
      <img
        src="${escapeHTML(post.image)}"
        alt="${title}"
        loading="lazy"
        decoding="async"
        class="blog-one-image"
      />
    `
    : `
      <div class="dp-blog-no-image">
        <span>✦</span>
      </div>
    `;

  const dateHTML = post.date
    ? `
      <div class="blog-date-block-one">
        <time
          datetime="${escapeHTML(post.dateISO)}"
          class="blog-month-text one"
        >
          ${escapeHTML(post.date)}
        </time>
      </div>
    `
    : '';

  const content = `
    <div class="blog-one-image-block">
      ${imageHTML}
    </div>

    ${dateHTML}

    <div class="blog-title-block">
      <h2 class="blog-name">${title}</h2>
    </div>
  `;

  return `
    <div role="listitem" class="w-dyn-item">
      ${
        url
          ? `
            <a
              href="${escapeHTML(url)}"
              class="blog-one-link w-inline-block"
              aria-label="${escapeHTML(t('blog.readArticle'))}: ${title}"
            >
              ${content}
            </a>
          `
          : `
            <div class="blog-one-link w-inline-block">
              ${content}
            </div>
          `
      }
    </div>
  `;
}

// ============================================
// BLOG PAGE
// ============================================

export function Blog() {
  return `
    <div
      class="dentistry-blog-page"
      data-blog-page
    >

      <!-- BREADCRUMB -->

      <section
        class="section breadcrumb-section"
        aria-label="Breadcrumb"
      >
        <div
          class="w-layout-blockcontainer container-fluid w-container"
        >
          <div class="breadcrumb-block two">

            <div
              class="w-layout-blockcontainer container w-container"
            >
              <div class="breadcrumb-main-title-block">

                <div class="breadcrumb-title-block">
                  <h1 class="breadcrumb-title">
                    ${t('blog.title')}
                  </h1>
                </div>

                <div class="breadcrumb-subtext-block">

                  <a
                    class="breadcrumb-subtext"
                    href="/"
                  >
                    ${t('blog.home')}
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
                  >
                    ${t('blog.title')}
                  </span>

                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- BLOG CONTENT -->

      <section
        class="section blog-section-one"
        aria-labelledby="blog-section-heading"
      >
        <div
          class="w-layout-blockcontainer container w-container"
        >
          <div class="blog-one-main-block">

            <!-- HEADING -->

            <div class="section-title-main-block">

              <div class="section-title-sub-text-block">
                <div class="section-sub-text">
                  ${t('blog.latest')}
                </div>
              </div>

              <div class="section-title-grid">
                <h2
                  id="blog-section-heading"
                  class="section-title"
                >
                  ${t('blog.heading')}
                </h2>
              </div>

            </div>

            <!-- LOADING / ERROR -->

            <div
              class="dp-blog-status"
              data-blog-status
              role="status"
              aria-live="polite"
            >
              ${t('blog.loading')}
            </div>

            <!-- API POSTS -->

            <div class="w-dyn-list">
              <div
                role="list"
                class="blog-one-list w-dyn-items"
                data-blog-list
              ></div>
            </div>

          </div>
        </div>
      </section>

    </div>
  `;
}

// ============================================
// INITIALIZE
// ============================================

export function initBlog() {
  const root = document.querySelector(
    '[data-blog-page]'
  );

  if (!root) return () => {};

  const blogList = root.querySelector(
    '[data-blog-list]'
  );

  const status = root.querySelector(
    '[data-blog-status]'
  );

  const controller = new AbortController();

  let requestController = null;
  let activeLang = getCurrentLang();

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

  function showError() {
    status.hidden = false;

    status.innerHTML = `
      <p>${escapeHTML(t('blog.error'))}</p>

      <button
        type="button"
        class="dp-blog-retry"
        data-blog-retry
      >
        ${escapeHTML(t('blog.retry'))}
      </button>
    `;
  }

  // ============================================
  // FETCH POSTS
  // ============================================

  async function loadPosts() {
    requestController?.abort();

    requestController = new AbortController();

    const requestSignal = requestController.signal;
    const language = getCurrentLang();

    activeLang = language;

    showStatus(t('blog.loading'));
    blogList.innerHTML = '';

    try {
      const response = await blogApi.list(
        language,
        requestSignal
      );

      if (
        requestSignal.aborted ||
        controller.signal.aborted ||
        !root.isConnected
      ) {
        return;
      }

      if (getCurrentLang() !== language) {
        return;
      }

      // Laravel returns:
      // { success: true, lang: "fa", data: [...] }

      const items = extractPosts(response);

      if (!items) {
        throw new Error('INVALID_BLOG_RESPONSE');
      }

      const posts = items
        .map(item => normalizePost(item, language))
        .filter(Boolean);

      // Only warn if nonempty API data cannot
      // be mapped; do not display fictional posts.
      if (items.length && !posts.length) {
        console.warn(
          'Blog items have no usable title_1:',
          items
        );

        showError();
        return;
      }

      if (posts.length === 0) {
        showStatus(t('blog.empty'));
        return;
      }

      blogList.innerHTML = posts
        .map(renderPost)
        .join('');

      hideStatus();

    } catch (error) {
      if (
        requestSignal.aborted ||
        controller.signal.aborted
      ) {
        return;
      }

      console.error(
        'Failed to load blog posts:',
        error
      );

      showError();
    }
  }

  // ============================================
  // RETRY
  // ============================================

  root.addEventListener(
    'click',
    event => {
      const button = event.target.closest(
        '[data-blog-retry]'
      );

      if (!button) return;

      event.preventDefault();
      void loadPosts();
    },
    { signal: controller.signal }
  );

  // ============================================
  // LANGUAGE CHANGE
  // ============================================

  const languageObserver = new MutationObserver(
    () => {
      const nextLang = getCurrentLang();

      if (nextLang !== activeLang) {
        activeLang = nextLang;
        void loadPosts();
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

  // Initial load
  void loadPosts();

  // ============================================
  // CLEANUP
  // ============================================

  return () => {
    controller.abort();
    requestController?.abort();
    languageObserver.disconnect();
  };
}
