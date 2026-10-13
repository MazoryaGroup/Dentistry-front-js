
/**
 * Dentistry — Blog Details
 *
 * APIs:
 * GET /api/v1/blogs?lang=fa|en
 * GET /api/v1/blogs/{slug}?lang=fa|en
 *
 * Supports:
 * /post/1             -> Find article by ID from list
 * /post/article-slug  -> Fetch article by slug
 *
 * Vanilla JavaScript + Vite + Webflow CSS
 */

import { blogApi } from '../code/api.js';
import { t } from '../code/i18n.js';
import { initPageInteractions } from '../code/interactions.js';

// ============================================
// LANGUAGE
// ============================================

function currentLang() {
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
// CURRENT ARTICLE IDENTIFIER
// ============================================

function currentSlug() {
  const pathname = window.location.pathname
    .replace(/\/+$/, '');

  const match = pathname.match(/\/post\/([^/]+)$/);

  if (!match) return '';

  try {
    return decodeURIComponent(match[1]);
  } catch {
    return match[1];
  }
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

function textValue(value) {
  return typeof value === 'string'
    ? value.trim()
    : '';
}

function getAssetOrigin() {
  try {
    return new URL(
      import.meta.env.VITE_API_BASE_URL || '/',
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

  const path = /^(storage|uploads|images)\//i.test(raw)
    ? `/${raw}`
    : raw;

  try {
    const url = new URL(path, getAssetOrigin());

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

function safeLinkURL(value) {
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

  try {
    const url = new URL(
      raw,
      window.location.origin
    );

    return [
      'http:',
      'https:',
      'mailto:',
      'tel:',
    ].includes(url.protocol)
      ? url.href
      : '';
  } catch {
    return '';
  }
}

// ============================================
// RICH TEXT SANITIZER
// ============================================

function sanitizeRichHTML(value) {
  if (
    typeof value !== 'string' ||
    !value.trim()
  ) {
    return '';
  }

  const allowedTags = new Set([
    'p', 'br',
    'h2', 'h3', 'h4', 'h5', 'h6',
    'b', 'strong',
    'i', 'em', 'u', 's',
    'blockquote',
    'ul', 'ol', 'li',
    'a', 'img',
    'figure', 'figcaption',
    'div', 'span', 'hr',
    'table', 'thead', 'tbody',
    'tr', 'th', 'td',
    'pre', 'code',
  ]);

  const blockedTags = new Set([
    'script', 'style', 'iframe',
    'object', 'embed', 'svg',
    'math', 'form', 'input',
    'button', 'template',
    'link', 'meta',
  ]);

  // Plain text from Laravel
  if (!/<[a-z][\s\S]*?>/i.test(value)) {
    return value
      .split(/\n\s*\n/)
      .filter(Boolean)
      .map(part => `
        <p>
          ${escapeHTML(part).replace(/\n/g, '<br>')}
        </p>
      `)
      .join('');
  }

  const documentHTML = new DOMParser()
    .parseFromString(value, 'text/html');

  function clean(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      return escapeHTML(node.textContent);
    }

    if (node.nodeType !== Node.ELEMENT_NODE) {
      return '';
    }

    const tag = node.tagName.toLowerCase();

    if (blockedTags.has(tag)) {
      return '';
    }

    const inner = [...node.childNodes]
      .map(clean)
      .join('');

    if (!allowedTags.has(tag)) {
      return inner;
    }

    if (tag === 'br' || tag === 'hr') {
      return `<${tag}>`;
    }

    if (tag === 'img') {
      const src = safeImageURL(
        node.getAttribute('src')
      );

      if (!src) return '';

      return `
        <img
          src="${escapeHTML(src)}"
          alt="${escapeHTML(node.getAttribute('alt') || '')}"
          loading="lazy"
          decoding="async"
        >
      `;
    }

    if (tag === 'a') {
      const href = safeLinkURL(
        node.getAttribute('href')
      );

      if (!href) return inner;

      return `
        <a
          href="${escapeHTML(href)}"
          target="_blank"
          rel="noopener noreferrer"
        >
          ${inner}
        </a>
      `;
    }

    return `<${tag}>${inner}</${tag}>`;
  }

  return [...documentHTML.body.childNodes]
    .map(clean)
    .join('');
}

// ============================================
// DATE
// ============================================

function formatDate(value, lang) {
  if (!value) {
    return {
      iso: '',
      label: '',
    };
  }

  const raw = String(value);

  const date = new Date(
    /^\d{4}-\d{2}-\d{2}$/.test(raw)
      ? `${raw}T12:00:00Z`
      : raw
  );

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
// EXTRACT API RESPONSE
// ============================================

function extractPosts(response) {
  const data = response?.data;

  const candidates = [
    data,
    data?.data,
    data?.blogs,
    data?.blogs?.data,
    data?.posts,
    data?.posts?.data,
    data?.items,
  ];

  return candidates.find(Array.isArray) ?? null;
}

function extractArticle(response) {
  const data = response?.data;

  const candidates = [
    data?.blog,
    data?.post,
    data?.article,
    data?.data?.blog,
    data?.data?.post,
    data?.data?.article,
    data?.data,
    data,
  ];

  return candidates.find(item =>
    item &&
    typeof item === 'object' &&
    !Array.isArray(item) &&
    (
      item.id != null ||
      item.title_1 != null ||
      item.slug != null ||
      item.title != null
    )
  ) ?? null;
}

// ============================================
// ARTICLE NORMALIZATION
// ============================================

function normalizePost(item, lang) {
  if (
    !item ||
    typeof item !== 'object'
  ) {
    return null;
  }

  const title = textValue(
    item.title_1 ?? item.title
  );

  if (!title) return null;

  return {
    id: item.id ?? null,

    slug: textValue(
      item.slug ?? item.blog_slug
    ),

    title,

    image: safeImageURL(
      item.image_1 ??
      item.image_url ??
      item.image
    ),

    date: formatDate(
      item.date ??
      item.published_at ??
      item.created_at,
      lang
    ),
  };
}

function normalizeArticle(item, lang, identifier) {
  const basic = normalizePost(item, lang);

  if (!basic) return null;

  return {
    ...basic,

    slug: basic.slug || identifier,

    secondImage: safeImageURL(
      item.image_2
    ),

    readingTime: item.reading_time ?? null,

    sections: [
      {
        title: basic.title,
        description: textValue(item.description_1),
      },
      {
        title: textValue(item.title_2),
        description: textValue(item.description_2),
      },
      {
        title: textValue(item.title_3),
        description: textValue(item.description_3),
      },
    ],

    categories: normalizeCategories(item),
  };
}

function normalizeCategories(item) {
  const raw =
    item.categories ??
    item.category ??
    [];

  const list = Array.isArray(raw)
    ? raw
    : [raw];

  return [
    ...new Set(
      list
        .map(category => {
          if (typeof category === 'string') {
            return category.trim();
          }

          if (
            category &&
            typeof category === 'object'
          ) {
            return textValue(
              category.name ??
              category.title
            );
          }

          return '';
        })
        .filter(Boolean)
    ),
  ];
}

// ============================================
// GENERATE POST URL
// ============================================

function postURL(post) {
  // Use real slug when available.
  // Otherwise use numeric ID.
  const key =
    post.slug ||
    (
      post.id != null
        ? String(post.id)
        : ''
    );

  if (!key) return '';

  return `/post/${encodeURIComponent(key)}`;
}

// ============================================
// ARTICLE HEADER
// ============================================

function renderArticleHeader(article) {
  const image = article.image
    ? `
      <img
        class="blog-single-main-image"
        src="${escapeHTML(article.image)}"
        alt="${escapeHTML(article.title)}"
        loading="eager"
        decoding="async"
      >
    `
    : '';

  const category = article.categories.length
    ? `
      <div class="blog-one-data">
        ${escapeHTML(article.categories[0])}
      </div>
    `
    : '';

  const date = article.date.label
    ? `
      <div class="blog-one-data-block">
        <time
          class="blog-date-one"
          datetime="${escapeHTML(article.date.iso)}"
        >
          ${escapeHTML(article.date.label)}
        </time>
      </div>
    `
    : '';

  return `
    <div class="w-dyn-list">
      <div class="w-dyn-items" role="list">
        <div class="w-dyn-item" role="listitem">

          <div class="blog-single-info-inner-block">

            ${image}

            <div class="blog-one-meta">
              ${category}
              ${date}
            </div>

            <h1 class="blog-single-title">
              ${escapeHTML(article.title)}
            </h1>

          </div>

        </div>
      </div>
    </div>
  `;
}

// ============================================
// ARTICLE CONTENT
// ============================================

function renderArticleContent(article) {
  return article.sections
    .map((section, index) => {
      if (!section.title && !section.description) {
        return '';
      }

      // title_1 is already the main H1.
      const heading = index > 0 && section.title
        ? `
          <h2>
            ${escapeHTML(section.title)}
          </h2>
        `
        : '';

      const description = sanitizeRichHTML(
        section.description
      );

      return `
        <div class="dp-blog-content-section">
          ${heading}
          ${description}
        </div>
      `;
    })
    .join('');
}

// ============================================
// EXTRA IMAGE
// ============================================

function renderGallery(image, title) {
  if (!image) return '';

  return `
    <div class="w-dyn-list">
      <div class="w-dyn-items" role="list">

        <div class="w-dyn-item" role="listitem">

          <a
            class="blog-image-lightbox w-inline-block"
            href="${escapeHTML(image)}"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              class="blog-image-extra"
              src="${escapeHTML(image)}"
              alt="${escapeHTML(title)}"
              loading="lazy"
              decoding="async"
            >
          </a>

        </div>
      </div>
    </div>
  `;
}

// ============================================
// SIDEBAR CATEGORIES
// ============================================

function renderCategories(categories) {
  return `
    <div class="w-dyn-items" role="list">

      ${categories.map(category => `
        <div class="w-dyn-item" role="listitem">

          <div class="blog-single-link">
            <div class="blog-dot"></div>

            <h3 class="blog-single-category-title">
              ${escapeHTML(category)}
            </h3>
          </div>

        </div>
      `).join('')}

    </div>
  `;
}

// ============================================
// RECENT POST
// ============================================

function renderRecentPost(post) {
  const url = postURL(post);

  const content = `
    ${
      post.image
        ? `
          <img
            class="blog-resent-image"
            src="${escapeHTML(post.image)}"
            alt="${escapeHTML(post.title)}"
            loading="lazy"
            decoding="async"
          >
        `
        : ''
    }

    <div class="recent-info-block">

      <h3 class="recent-heading">
        ${escapeHTML(post.title)}
      </h3>

      ${
        post.date.label
          ? `
            <div class="recent-date-block">
              <time
                class="recent-date"
                datetime="${escapeHTML(post.date.iso)}"
              >
                ${escapeHTML(post.date.label)}
              </time>
            </div>
          `
          : ''
      }

    </div>
  `;

  return `
    <div class="w-dyn-item" role="listitem">
      ${
        url
          ? `
            <a
              class="recent-link w-inline-block"
              href="${escapeHTML(url)}"
            >
              ${content}
            </a>
          `
          : `
            <div class="recent-link w-inline-block">
              ${content}
            </div>
          `
      }
    </div>
  `;
}

// ============================================
// PAGE HTML
// ============================================

export function BlogDetails() {
  return `
    <div
      class="dentistry-blog-details-page"
      data-blog-details-page
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

                  <h1 class="breadcrumb-title">
                    ${t('blog.details.page')}
                  </h1>

                </div>

                <div class="breadcrumb-subtext-block">

                  <a
                    href="/"
                    class="breadcrumb-subtext"
                  >
                    ${t('blog.home')}
                  </a>

                  <span
                    class="breadcrumb-subtext"
                    aria-hidden="true"
                  >
                    -
                  </span>

                  <a
                    href="/blog"
                    class="breadcrumb-subtext"
                  >
                    ${t('blog.title')}
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
                    ${t('blog.details.breadcrumb')}
                  </span>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- LOADING / ERROR -->

      <div
        class="dp-blog-details-status"
        data-blog-details-status
        role="status"
        aria-live="polite"
      >
        ${t('blog.details.loading')}
      </div>

      <!-- ARTICLE DETAILS -->

      <section
        class="section blog-single-section"
        data-blog-details-section
        hidden
      >
        <div
          class="w-layout-blockcontainer container w-container"
        >
          <div class="w-layout-grid blog-single-grid">

            <!-- MAIN ARTICLE -->

            <div class="blog-single-info-main-block">

              <!-- Title, date and main image -->

              <div data-blog-article></div>

              <!-- Description 1, 2 and 3 -->

              <div
                class="blog-richtext w-richtext"
                data-blog-content
              ></div>

              <!-- Second image -->

              <div
                class="blog-extra-image-list"
                data-blog-gallery
                hidden
              ></div>

            </div>

            <!-- SIDEBAR -->

            <div class="blog-single-info-right-block">

              <div class="blog-single-sticky-block">

                <!-- CATEGORIES -->

                <div
                  class="service-single-left-block"
                  data-blog-categories-box
                  hidden
                >
                  <div class="service-single-box-title">
                    <h3 class="service-single-title">
                      ${t('blog.details.categories')}
                    </h3>
                  </div>

                  <div
                    class="blog-categorie-block w-dyn-list"
                    data-blog-categories
                  ></div>

                </div>

                <!-- RECENT ARTICLES -->

                <div
                  class="service-single-left-block last"
                  data-blog-recent-box
                  hidden
                >
                  <div class="service-single-box-title">
                    <h3 class="service-single-title">
                      ${t('blog.details.recent')}
                    </h3>
                  </div>

                  <div class="w-dyn-list">
                    <div
                      class="w-dyn-items"
                      role="list"
                      data-blog-recent
                    ></div>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  `;
}

// ============================================
// INITIALIZE BLOG DETAILS
// ============================================

export function initBlogDetails() {
  const root = document.querySelector(
    '[data-blog-details-page]'
  );

  if (!root) {
    return () => {};
  }

  const lifecycle = new AbortController();

  let requestController = null;
  let renderedLang = currentLang();

  const identifier = currentSlug();

  // ============================================
  // ELEMENTS
  // ============================================

  const status = root.querySelector(
    '[data-blog-details-status]'
  );

  const section = root.querySelector(
    '[data-blog-details-section]'
  );

  const articleEl = root.querySelector(
    '[data-blog-article]'
  );

  const contentEl = root.querySelector(
    '[data-blog-content]'
  );

  const galleryEl = root.querySelector(
    '[data-blog-gallery]'
  );

  const categoriesBox = root.querySelector(
    '[data-blog-categories-box]'
  );

  const categoriesEl = root.querySelector(
    '[data-blog-categories]'
  );

  const recentBox = root.querySelector(
    '[data-blog-recent-box]'
  );

  const recentEl = root.querySelector(
    '[data-blog-recent]'
  );

  // Preserve existing Webflow interactions.
  const cleanupInteractions = initPageInteractions(
    document.getElementById('app')
  );

  // ============================================
  // STATUS
  // ============================================

  function showStatus(message, retry = false) {
    status.hidden = false;
    status.textContent = message;

    if (retry) {
      const button = document.createElement('button');

      button.type = 'button';
      button.className = 'dp-blog-details-retry';
      button.dataset.blogDetailsRetry = '';
      button.textContent = t('blog.details.retry');

      status.appendChild(button);
    }
  }

  function hideStatus() {
    status.hidden = true;
    status.textContent = '';
  }

  // ============================================
  // RESET PAGE
  // ============================================

  function clearView() {
    section.hidden = true;

    articleEl.innerHTML = '';
    contentEl.innerHTML = '';
    galleryEl.innerHTML = '';
    categoriesEl.innerHTML = '';
    recentEl.innerHTML = '';

    galleryEl.hidden = true;
    categoriesBox.hidden = true;
    recentBox.hidden = true;
  }

  // ============================================
  // DISPLAY ARTICLE
  // ============================================

  function renderDetails(article) {
    // Main image, title, date
    articleEl.innerHTML =
      renderArticleHeader(article);

    // All three content sections
    contentEl.innerHTML =
      renderArticleContent(article);

    // image_2
    if (
      article.secondImage &&
      article.secondImage !== article.image
    ) {
      galleryEl.innerHTML = renderGallery(
        article.secondImage,
        article.title
      );

      galleryEl.hidden = false;
    }

    // Optional categories
    if (article.categories.length) {
      categoriesEl.innerHTML = renderCategories(
        article.categories
      );

      categoriesBox.hidden = false;
    }

    // Show article
    section.hidden = false;
    hideStatus();

    // SEO title
    document.title = `${article.title} | Dentistry`;
  }

  // ============================================
  // RECENT POSTS
  // ============================================

  async function loadRecent(
    lang,
    article,
    signal
  ) {
    try {
      const response = await blogApi.list(
        lang,
        signal
      );

      if (
        signal.aborted ||
        lifecycle.signal.aborted ||
        !root.isConnected ||
        currentLang() !== lang
      ) {
        return;
      }

      const items = extractPosts(response);

      if (!items) {
        recentBox.hidden = true;
        return;
      }

      const recentPosts = items
        .map(item => normalizePost(item, lang))
        .filter(post => {
          if (!post) return false;

          // Exclude currently opened article.
          if (
            article.id != null &&
            post.id != null &&
            String(post.id) === String(article.id)
          ) {
            return false;
          }

          if (
            article.slug &&
            post.slug &&
            post.slug === article.slug
          ) {
            return false;
          }

          return true;
        })
        .sort((a, b) =>
          b.date.iso.localeCompare(a.date.iso)
        )
        .slice(0, 4);

      recentEl.innerHTML = recentPosts
        .map(renderRecentPost)
        .join('');

      recentBox.hidden = recentPosts.length === 0;

    } catch (error) {
      if (!signal.aborted) {
        console.warn(
          'Recent blogs could not be loaded:',
          error
        );

        recentBox.hidden = true;
      }
    }
  }

  // ============================================
  // FETCH ARTICLE BY SLUG OR ID
  // ============================================

  async function loadArticle() {
    // Cancel previous request
    requestController?.abort();

    requestController = new AbortController();

    const signal = requestController.signal;
    const lang = currentLang();

    renderedLang = lang;

    clearView();

    if (!identifier) {
      showStatus(t('blog.details.notFound'));
      return;
    }

    showStatus(t('blog.details.loading'));

    try {
      let rawArticle = null;

      // ========================================
      // CASE 1: NUMERIC ARTICLE ID
      // Example: /post/1
      // ========================================

      if (/^\d+$/.test(identifier)) {
        // Current backend list returns:
        // { success: true, data: [{ id: 1, ... }] }
        //
        // So we find the article using its ID.
        const response = await blogApi.list(
          lang,
          signal
        );

        const posts = extractPosts(response);

        if (posts) {
          rawArticle = posts.find(
            post =>
              String(post.id) === identifier
          ) ?? null;
        }

      } else {
        // ======================================
        // CASE 2: REAL ARTICLE SLUG
        // Example: /post/dental-care-guide
        // ======================================

        const response = await blogApi.show(
          identifier,
          lang,
          signal
        );

        rawArticle = extractArticle(response);
      }

      // ========================================
      // CHECK REQUEST STATE
      // ========================================

      if (
        signal.aborted ||
        lifecycle.signal.aborted ||
        !root.isConnected ||
        currentLang() !== lang
      ) {
        return;
      }

      // ========================================
      // NORMALIZE ARTICLE
      // ========================================

      const article = rawArticle
        ? normalizeArticle(
            rawArticle,
            lang,
            identifier
          )
        : null;

      if (!article) {
        showStatus(t('blog.details.notFound'));
        return;
      }

      // ========================================
      // RENDER ARTICLE
      // ========================================

      renderDetails(article);

      // ========================================
      // LOAD RECENT POSTS
      // ========================================

      void loadRecent(
        lang,
        article,
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
        'Blog details API failed:',
        error
      );

      if (error?.status === 404) {
        showStatus(t('blog.details.notFound'));
        return;
      }

      showStatus(
        t('blog.details.error'),
        true
      );
    }
  }

  // ============================================
  // RETRY BUTTON
  // ============================================

  root.addEventListener(
    'click',
    event => {
      const button = event.target.closest(
        '[data-blog-details-retry]'
      );

      if (!button) return;

      event.preventDefault();

      void loadArticle();
    },
    { signal: lifecycle.signal }
  );

  // ============================================
  // LANGUAGE SWITCH
  // ============================================

  const languageObserver = new MutationObserver(
    () => {
      const nextLang = currentLang();

      if (nextLang !== renderedLang) {
        void loadArticle();
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
  // INITIAL LOAD
  // ============================================

  void loadArticle();

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
