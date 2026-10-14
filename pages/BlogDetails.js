
/**
 * Dentistry — Blog Details
 *
 * GET /api/v1/blogs/{slug}?lang=fa|en
 * GET /api/v1/blogs?lang=fa|en
 *
 * Webflow layout
 * Right sidebar: Other Blogs only
 */

import { blogApi } from '../code/api.js';
import { getLanguage, t } from '../code/i18n.js';
import { initPageInteractions } from '../code/interactions.js';

// ============================================
// LANGUAGE
// ============================================

const translations = {
  fa: {
    home: 'خانه',
    blog: 'وبلاگ',
    details: 'جزئیات مقاله',
    otherBlogs: 'سایر مقالات',
    loading: 'در حال دریافت مقاله...',
    loadingBlogs: 'در حال دریافت سایر مقالات...',
    notFound: 'مقاله موردنظر پیدا نشد.',
    error: 'دریافت مقاله با مشکل مواجه شد.',
    otherEmpty: 'مقاله دیگری برای نمایش وجود ندارد.',
    otherError: 'دریافت سایر مقالات با مشکل مواجه شد.',
    retry: 'تلاش مجدد',
    gallery: 'تصاویر مقاله',
  },

  en: {
    home: 'Home',
    blog: 'Dental Blog',
    details: 'Blog Details',
    otherBlogs: 'Other Blogs',
    loading: 'Loading article...',
    loadingBlogs: 'Loading other articles...',
    notFound: 'Article not found.',
    error: 'Unable to load this article.',
    otherEmpty: 'No other articles available.',
    otherError: 'Unable to load other articles.',
    retry: 'Try Again',
    gallery: 'Article Images',
  },
};

function currentLanguage() {
  return getLanguage() === 'fa' ? 'fa' : 'en';
}

function tr(key, language = currentLanguage()) {
  const translationKey = `blog.details.${key}`;
  const result = t(translationKey);

  return result !== translationKey
    ? result
    : translations[language][key];
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

function getBlogSlug() {
  const path = window.location.pathname
    .replace(/\/+$/, '');

  const match = path.match(/^\/post\/([^/]+)$/);

  if (!match) return '';

  try {
    return decodeURIComponent(match[1]);
  } catch {
    return match[1];
  }
}

// ============================================
// IMAGE URL
// ============================================

function safeImageURL(value) {
  if (value && typeof value === 'object') {
    value =
      value.image_url ??
      value.url ??
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

  const base =
    import.meta.env.VITE_ASSET_BASE_URL ||
    import.meta.env.VITE_API_BASE_URL ||
    '/';

  try {
    const origin = new URL(
      base,
      window.location.origin
    ).origin;

    const path = /^(storage|uploads|images)\//i.test(raw)
      ? `/${raw}`
      : raw;

    const url = new URL(path, origin);

    return ['http:', 'https:'].includes(url.protocol)
      ? url.href
      : '';

  } catch {
    return '';
  }
}

// ============================================
// API TRANSLATION
// ============================================

function getTranslation(item, language) {
  const values = item?.translations;

  if (Array.isArray(values)) {
    return values.find(row =>
      row.locale === language ||
      row.lang === language
    ) || {};
  }

  if (values && typeof values === 'object') {
    return values[language] || {};
  }

  if (
    item?.translation &&
    (
      !item.translation.locale ||
      item.translation.locale === language
    )
  ) {
    return item.translation;
  }

  return {};
}

// ============================================
// FORMAT DATE
// ============================================

function formatBlogDate(value, language) {
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
      language === 'fa' ? 'fa-IR' : 'en-US',
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
// API RESPONSE
// ============================================

function checkResponse(response) {
  if (
    response?.status === false ||
    response?.success === false
  ) {
    const error = new Error(
      response?.message || 'BLOG_API_ERROR'
    );

    error.status =
      response?.statusCode || 500;

    throw error;
  }
}

function extractPosts(response) {
  const data = response?.data;

  return [
    data,
    data?.data,
    data?.blogs,
    data?.blogs?.data,
    data?.posts,
    data?.posts?.data,
    data?.items,
  ].find(Array.isArray) || [];
}

function extractArticle(response, slug, language) {
  checkResponse(response);

  const data = response?.data;

  const candidate =
    data?.blog ??
    data?.post ??
    data?.article ??
    data?.data ??
    data;

  if (Array.isArray(candidate)) {
    return candidate.find(item =>
      (
        String(item?.slug ?? item?.blog_slug) === slug ||
        String(item?.id) === slug
      ) &&
      (!item.locale || item.locale === language)
    ) || null;
  }

  if (
    !candidate ||
    typeof candidate !== 'object'
  ) {
    return null;
  }

  const candidateSlug =
    candidate.slug ??
    candidate.blog_slug;

  if (
    candidateSlug != null &&
    String(candidateSlug) !== slug &&
    String(candidate.id) !== slug
  ) {
    return null;
  }

  if (
    candidate.locale &&
    candidate.locale !== language
  ) {
    return null;
  }

  return candidate;
}

// ============================================
// NORMALIZE BLOG
// ============================================

function normalizeBlog(item, language) {
  if (
    !item ||
    typeof item !== 'object'
  ) {
    return null;
  }

  const translation = getTranslation(
    item,
    language
  );

  const title1 = firstText(
    translation.title_1,
    item.title_1,
    translation.title,
    item.title
  );

  if (!title1) return null;

  const image1 = safeImageURL(
    item.image_1_url ??
    item.image_1 ??
    item.image_url ??
    item.image ??
    translation.image_1
  );

  const extraImages = [
    item.image_2_url ?? item.image_2,
    item.image_3_url ?? item.image_3,
    item.image_4_url ?? item.image_4,

    ...(Array.isArray(item.gallery)
      ? item.gallery
      : []),

    ...(Array.isArray(item.images)
      ? item.images
      : []),
  ];

  const gallery = [
    ...new Set(
      extraImages
        .map(safeImageURL)
        .filter(url =>
          url && url !== image1
        )
    ),
  ];

  const date = formatBlogDate(
    item.date ??
    item.published_at ??
    item.created_at,
    language
  );

  return {
    id: item.id ?? null,

    slug: firstText(
      item.slug,
      item.blog_slug,
      translation.slug
    ),

    title1,

    description1: firstText(
      translation.description_1,
      item.description_1,
      translation.description,
      item.description,
      item.content
    ),

    title2: firstText(
      translation.title_2,
      item.title_2
    ),

    description2: firstText(
      translation.description_2,
      item.description_2
    ),

    title3: firstText(
      translation.title_3,
      item.title_3
    ),

    description3: firstText(
      translation.description_3,
      item.description_3
    ),

    image1,
    gallery,

    date,
  };
}

// ============================================
// SAFE RICH TEXT
// ============================================

function renderRichText(source) {
  if (!source) return '';

  if (!/<[a-z][\s\S]*?>/i.test(source)) {
    return source
      .split(/\n\s*\n/)
      .filter(Boolean)
      .map(part => `
        <p>
          ${escapeHTML(part).replace(/\n/g, '<br>')}
        </p>
      `)
      .join('');
  }

  const allowed = new Set([
    'p', 'br', 'strong', 'b',
    'em', 'i', 'u', 's',
    'h2', 'h3', 'h4', 'h5', 'h6',
    'ul', 'ol', 'li',
    'blockquote', 'a',
    'div', 'span', 'hr',
  ]);

  const blocked = new Set([
    'script', 'style', 'iframe',
    'object', 'embed', 'svg',
    'math', 'form', 'input',
    'button', 'template',
  ]);

  const template = document.createElement(
    'template'
  );

  template.innerHTML = source;

  function clean(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      return escapeHTML(node.textContent);
    }

    if (node.nodeType !== Node.ELEMENT_NODE) {
      return '';
    }

    const tag = node.tagName.toLowerCase();

    if (blocked.has(tag)) return '';

    const children = Array.from(node.childNodes)
      .map(clean)
      .join('');

    if (!allowed.has(tag)) {
      return children;
    }

    if (tag === 'br' || tag === 'hr') {
      return `<${tag}>`;
    }

    if (tag === 'a') {
      const href = node.getAttribute('href') || '';

      try {
        const url = new URL(
          href,
          window.location.origin
        );

        if (
          ['http:', 'https:', 'mailto:', 'tel:']
            .includes(url.protocol)
        ) {
          return `
            <a
              href="${escapeHTML(url.href)}"
              rel="noopener noreferrer"
            >
              ${children}
            </a>
          `;
        }
      } catch {
        // Ignore unsafe links.
      }

      return children;
    }

    return `<${tag}>${children}</${tag}>`;
  }

  return Array.from(template.content.childNodes)
    .map(clean)
    .join('');
}

// ============================================
// RENDER MAIN ARTICLE
// ============================================

function renderArticle(post, language) {
  const hero = post.image1
    ? `
      <img
        class="blog-single-main-image"
        src="${escapeHTML(post.image1)}"
        alt="${escapeHTML(post.title1)}"
        loading="eager"
        decoding="async"
      />
    `
    : '';

  const dateHTML = post.date.label
    ? `
      <div class="blog-one-meta">

        <div class="blog-one-data-block">
          <time
            class="blog-date-one"
            datetime="${escapeHTML(post.date.iso)}"
          >
            ${escapeHTML(post.date.label)}
          </time>
        </div>

      </div>
    `
    : '';

  const galleryHTML = post.gallery.length
    ? `
      <div
        class="blog-extra-image-list"
        aria-label="${escapeHTML(tr('gallery', language))}"
      >

        ${post.gallery.map(image => `
          <div class="w-dyn-list">
            <div class="w-dyn-items" role="list">

              <div class="w-dyn-item" role="listitem">

                <a
                  href="${escapeHTML(image)}"
                  class="blog-image-lightbox w-inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >

                  <img
                    class="blog-image-extra"
                    src="${escapeHTML(image)}"
                    alt="${escapeHTML(post.title1)}"
                    loading="lazy"
                  />

                </a>

              </div>

            </div>
          </div>
        `).join('')}

      </div>
    `
    : '';

  function additionalSection(title, description) {
    if (!title && !description) return '';

    return `
      <div class="w-richtext dp-blog-more-content">

        ${title
          ? `<h3>${escapeHTML(title)}</h3>`
          : ''
        }

        ${renderRichText(description)}

      </div>
    `;
  }

  return `
    <div class="w-dyn-list">

      <div class="w-dyn-items" role="list">

        <div class="w-dyn-item" role="listitem">

          <div class="blog-single-info-inner-block">

            ${hero}

            ${dateHTML}

            <h1 class="blog-single-title">
              ${escapeHTML(post.title1)}
            </h1>

            ${
              post.description1
                ? `
                  <div class="blog-richtext w-richtext">
                    ${renderRichText(post.description1)}
                  </div>
                `
                : ''
            }

          </div>

        </div>

      </div>

    </div>

    ${galleryHTML}

    ${additionalSection(
      post.title2,
      post.description2
    )}

    ${additionalSection(
      post.title3,
      post.description3
    )}
  `;
}

// ============================================
// OTHER BLOGS SIDEBAR
// ============================================

function renderOtherBlogs(posts, language) {
  return `
    <div class="w-dyn-list">

      <div
        class="w-dyn-items dp-other-blogs-list"
        role="list"
      >

        ${posts.map(post => {

          const content = `
            ${
              post.image1
                ? `
                  <img
                    class="blog-resent-image"
                    src="${escapeHTML(post.image1)}"
                    alt="${escapeHTML(post.title1)}"
                    loading="lazy"
                    decoding="async"
                  />
                `
                : `
                  <div
                    class="dp-other-blog-placeholder"
                    aria-hidden="true"
                  >
                    ✦
                  </div>
                `
            }

            <div class="recent-info-block">

              <h3 class="recent-heading">
                ${escapeHTML(post.title1)}
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
            <div
              class="w-dyn-item"
              role="listitem"
            >

              ${
                post.slug
                  ? `
                    <a
                      href="/post/${encodeURIComponent(post.slug)}"
                      class="recent-link w-inline-block"
                    >
                      ${content}
                    </a>
                  `
                  : `
                    <div class="recent-link">
                      ${content}
                    </div>
                  `
              }

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

export function BlogDetails() {
  const language = currentLanguage();

  return `
    <main
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

                  <h2
                    class="breadcrumb-title"
                    data-blog-heading
                  >
                    ${escapeHTML(tr('blog', language))}
                  </h2>

                </div>

                <div class="breadcrumb-subtext-block">

                  <a
                    href="/"
                    class="breadcrumb-subtext"
                    data-blog-home
                  >
                    ${escapeHTML(tr('home', language))}
                  </a>

                  <span class="breadcrumb-subtext">
                    -
                  </span>

                  <a
                    href="/blog"
                    class="breadcrumb-subtext"
                    data-blog-link
                  >
                    ${escapeHTML(tr('blog', language))}
                  </a>

                  <span class="breadcrumb-subtext">
                    -
                  </span>

                  <span
                    class="breadcrumb-subtext"
                    data-blog-crumb
                    aria-current="page"
                  >
                    ${escapeHTML(tr('details', language))}
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
        data-blog-status
        role="status"
        aria-live="polite"
      >
        ${escapeHTML(tr('loading', language))}
      </div>

      <!-- BLOG DETAILS -->

      <section
        class="section blog-single-section"
        data-blog-section
        hidden
      >

        <div
          class="w-layout-blockcontainer container w-container"
        >

          <div class="w-layout-grid blog-single-grid">

            <!-- MAIN ARTICLE -->

            <div
              class="blog-single-info-main-block"
              data-blog-article
            ></div>

            <!-- RIGHT SIDEBAR -->

            <aside
              class="blog-single-info-right-block"
              aria-label="${escapeHTML(tr('otherBlogs', language))}"
              data-other-blogs-aside
            >

              <div class="blog-single-sticky-block">

                <div class="service-single-left-block last">

                  <div class="service-single-box-title">

                    <h3
                      class="service-single-title"
                      data-other-blogs-heading
                    >
                      ${escapeHTML(tr('otherBlogs', language))}
                    </h3>

                  </div>

                  <!-- OTHER BLOGS FROM API -->

                  <div
                    data-other-blogs-list
                    aria-live="polite"
                  >
                    <p class="dp-other-blogs-message">
                      ${escapeHTML(tr('loadingBlogs', language))}
                    </p>
                  </div>

                </div>

              </div>

            </aside>

          </div>

        </div>

      </section>

    </main>
  `;
}

// ============================================
// INITIALIZE BLOG DETAILS
// ============================================

export function initBlogDetails() {
  const root = document.querySelector(
    '[data-blog-details-page]'
  );

  if (!root) return () => {};

  const lifecycle = new AbortController();

  let requestController = null;

  let activeLanguage = currentLanguage();

  const slug = getBlogSlug();

  // ============================================
  // ELEMENTS
  // ============================================

  const status = root.querySelector(
    '[data-blog-status]'
  );

  const section = root.querySelector(
    '[data-blog-section]'
  );

  const article = root.querySelector(
    '[data-blog-article]'
  );

  const otherBlogsList = root.querySelector(
    '[data-other-blogs-list]'
  );

  const otherBlogsHeading = root.querySelector(
    '[data-other-blogs-heading]'
  );

  const otherBlogsAside = root.querySelector(
    '[data-other-blogs-aside]'
  );

  const cleanupInteractions = initPageInteractions(
    document.getElementById('app')
  );

  // ============================================
  // STATUS
  // ============================================

  function setStatus(message, retry = false) {
    status.hidden = false;
    status.textContent = message;

    if (retry) {
      const button = document.createElement('button');

      button.type = 'button';
      button.className = 'dp-blog-details-retry';
      button.dataset.blogRetry = '';
      button.textContent = tr('retry');

      status.appendChild(button);
    }
  }

  function hideStatus() {
    status.hidden = true;
    status.textContent = '';
  }

  // ============================================
  // UPDATE LABELS
  // ============================================

  function updateLabels(language) {
    const fields = {
      '[data-blog-heading]': 'blog',
      '[data-blog-home]': 'home',
      '[data-blog-link]': 'blog',
      '[data-blog-crumb]': 'details',
      '[data-other-blogs-heading]': 'otherBlogs',
    };

    for (const [selector, key] of Object.entries(fields)) {
      const element = root.querySelector(selector);

      if (element) {
        element.textContent = tr(key, language);
      }
    }

    otherBlogsAside.setAttribute(
      'aria-label',
      tr('otherBlogs', language)
    );
  }

  // ============================================
  // RESET
  // ============================================

  function reset(language) {
    section.hidden = true;

    article.innerHTML = '';

    otherBlogsList.innerHTML = `
      <p class="dp-other-blogs-message">
        ${escapeHTML(tr('loadingBlogs', language))}
      </p>
    `;
  }

  // ============================================
  // LOAD OTHER BLOGS
  // ============================================

  async function loadOtherBlogs(
    language,
    currentPost,
    signal
  ) {
    try {
      const response = await blogApi.list(
        language,
        signal
      );

      if (
        signal.aborted ||
        lifecycle.signal.aborted ||
        !root.isConnected ||
        currentLanguage() !== language
      ) {
        return;
      }

      checkResponse(response);

      // All blogs from Laravel API
      const posts = extractPosts(response)
        .filter(item =>
          !item.locale ||
          item.locale === language
        )
        .map(item =>
          normalizeBlog(item, language)
        )
        .filter(Boolean);

      // ======================================
      // EXCLUDE CURRENT ARTICLE
      // ======================================

      const otherPosts = posts.filter(post => {

        // Exclude using ID when available.
        if (
          currentPost.id != null &&
          post.id != null &&
          String(post.id) === String(currentPost.id)
        ) {
          return false;
        }

        // Exclude using slug.
        if (
          post.slug &&
          (
            post.slug === slug ||
            post.slug === currentPost.slug
          )
        ) {
          return false;
        }

        return true;

      });

      // Remove duplicates by ID or slug.
      const unique = [];
      const seen = new Set();

      for (const post of otherPosts) {
        const key = post.id != null
          ? `id:${post.id}`
          : post.slug
            ? `slug:${post.slug}`
            : `title:${post.title1}`;

        if (seen.has(key)) continue;

        seen.add(key);
        unique.push(post);
      }

      // Maximum 5 other articles
      const selected = unique.slice(0, 5);

      if (!selected.length) {
        otherBlogsList.innerHTML = `
          <p class="dp-other-blogs-message">
            ${escapeHTML(tr('otherEmpty', language))}
          </p>
        `;

        return;
      }

      otherBlogsList.innerHTML = renderOtherBlogs(
        selected,
        language
      );

    } catch (error) {
      if (
        signal.aborted ||
        lifecycle.signal.aborted
      ) {
        return;
      }

      console.error(
        'Other blogs API error:',
        error
      );

      otherBlogsList.innerHTML = `
        <p class="dp-other-blogs-message">
          ${escapeHTML(tr('otherError', language))}
        </p>
      `;
    }
  }

  // ============================================
  // LOAD ARTICLE
  // ============================================

  async function load() {
    requestController?.abort();

    requestController = new AbortController();

    const signal = requestController.signal;

    const language = currentLanguage();

    activeLanguage = language;

    updateLabels(language);
    reset(language);

    if (!slug) {
      setStatus(tr('notFound', language));
      return;
    }

    setStatus(tr('loading', language));

    try {
      // GET /api/v1/blogs/{slug}?lang=fa|en

      const response = await blogApi.show(
        slug,
        language,
        signal
      );

      if (
        signal.aborted ||
        lifecycle.signal.aborted ||
        !root.isConnected ||
        currentLanguage() !== language
      ) {
        return;
      }

      const rawPost = extractArticle(
        response,
        slug,
        language
      );

      const post = normalizeBlog(
        rawPost,
        language
      );

      if (!post) {
        setStatus(tr('notFound', language));
        return;
      }

      // ======================================
      // RENDER ARTICLE
      // ======================================

      article.innerHTML = renderArticle(
        post,
        language
      );

      section.hidden = false;

      hideStatus();

      document.title = `${post.title1} | Dentistry`;

      // ======================================
      // FETCH OTHER ARTICLES
      // ======================================

      void loadOtherBlogs(
        language,
        post,
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
        'Blog Details API error:',
        error
      );

      const notFound =
        error?.status === 404 ||
        error?.statusCode === 404;

      setStatus(
        tr(
          notFound ? 'notFound' : 'error',
          language
        ),
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
      if (
        event.target instanceof Element &&
        event.target.closest('[data-blog-retry]')
      ) {
        event.preventDefault();
        void load();
      }
    },
    { signal: lifecycle.signal }
  );

  // ============================================
  // LANGUAGE CHANGE
  // ============================================

  const observer = new MutationObserver(() => {
    const language = currentLanguage();

    if (language !== activeLanguage) {
      void load();
    }
  });

  observer.observe(
    document.documentElement,
    {
      attributes: true,
      attributeFilter: ['lang', 'dir'],
    }
  );

  // ============================================
  // INITIAL LOAD
  // ============================================

  void load();

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
