
/**
 * Dentistry — SPA Router
 *
 * - Static routes
 * - Dynamic Blog Details by slug
 * - Dynamic Service Details by ID
 * - FA / EN language switching
 * - Login / Register / Dashboard
 * - 15-minute inactivity session protection
 * - SPA navigation
 * - Header / Footer lifecycle
 */

import {
  Header,
  mountHeader,
} from '../components/Header.js';

import {
  Footer,
  mountFooter,
} from '../components/Footer.js';

import {
  applyDocumentLanguage,
  setLanguage,
  translateElement,
  t,
} from './i18n.js';

import {
  isLoggedInAndActive,
  initSessionMonitor,
} from './session.js';

// ============================================
// PAGES
// ============================================

import {
  Home,
  initHome,
} from '../pages/Home.js';

import {
  About,
  initAbout,
} from '../pages/About.js';

import {
  Blog,
  initBlog,
} from '../pages/Blog.js';

import {
  BlogDetails,
  initBlogDetails,
} from '../pages/BlogDetails.js';

import {
  Contact,
  initContact,
} from '../pages/Contact.js';

import {
  Service,
  initService,
} from '../pages/Service.js';

import {
  ServiceDetails,
  initServiceDetails,
} from '../pages/ServiceDetails.js';

import {
  Team,
  initTeam,
} from '../pages/Team.js';

import {
  TeamDetails,
  initTeamDetails,
} from '../pages/TeamDetails.js';

import {
  Faq,
  initFaq,
} from '../pages/Faq.js';

import {
  Login,
  initLogin,
} from '../pages/Login.js';

import {
  Register,
  initRegister,
} from '../pages/Register.js';

import {
  ForgotPassword,
  initForgotPassword,
} from '../pages/ForgotPassword.js';

import {
  Dashboard,
  initDashboard,
} from '../pages/Dashboard.js';

import {
  Checkout,
  initCheckout,
} from '../pages/Checkout.js';

// ============================================
// STATIC ROUTES
// ============================================

const routes = {

  '/': {
    render: Home,
    init: initHome,
    title: 'Home',
  },

  '/about-us': {
    render: About,
    init: initAbout,
    title: 'About Us',
  },

  '/blog': {
    render: Blog,
    init: initBlog,
    title: 'Blog',
  },

  '/contact-us': {
    render: Contact,
    init: initContact,
    title: 'Contact Us',
  },

  '/service': {
    render: Service,
    init: initService,
    title: 'Services',
  },

  '/team': {
    render: Team,
    init: initTeam,
    title: 'Our Team',
  },

  '/faq': {
    render: Faq,
    init: initFaq,
    title: 'FAQ',
  },

  // ========================================
  // AUTH PAGES
  // ========================================

  '/login': {
    render: Login,
    init: initLogin,
    title: 'Patient Login',
    standalone: true,
  },

  '/register': {
    render: Register,
    init: initRegister,
    title: 'Patient Registration',
    standalone: true,
  },

  '/forgot-password': {
    render: ForgotPassword,
    init: initForgotPassword,
    title: 'Forgot Password',
    standalone: true,
  },

  // ========================================
  // PATIENT DASHBOARD
  // ========================================

  '/dashboard': {
    render: Dashboard,
    init: initDashboard,
    title: 'Patient Dashboard',
    standalone: true,
    requiresAuth: true,
  },

  '/checkout': {
    render: Checkout,
    init: initCheckout,
    title: 'Appointment Checkout',
  },

  // ========================================
  // OTHER DETAILS
  // ========================================

  '/team/dr-adam-smith': {
    render: TeamDetails,
    init: initTeamDetails,
    title: 'Team Details',
  },

};

// ============================================
// DYNAMIC ROUTES
// ============================================

const dynamicRoutes = [

  // Blog Details
  // /post/article-slug
  // /post/1 (if supported by BlogDetails API)

  {
    pattern: /^\/post\/([^/]+)$/,

    route: {
      render: BlogDetails,
      init: initBlogDetails,
      title: 'Blog Details',
    },
  },

  // Service Details
  // /services/1
  // /services/2

  {
    pattern: /^\/services\/([1-9]\d*)$/,

    route: {
      render: ServiceDetails,
      init: initServiceDetails,
      title: 'Service Details',
    },
  },

];

// ============================================
// NORMALIZE PATH
// ============================================

function normalizePath(path) {
  let value = String(path || '/');

  // Convert index.html / index.htm
  value = value.replace(
    /\/(?:index\.html?|index\.htm)$/i,
    '/'
  ) || '/';

  // Support legacy Webflow .html URLs
  if (
    value !== '/' &&
    value.endsWith('.html')
  ) {
    value = value.slice(0, -5);
  }

  // Remove trailing slashes
  return value.replace(/\/+$/, '') || '/';
}

// ============================================
// RESOLVE ROUTE
// ============================================

function resolveRoute(path) {

  // 1. Static routes
  if (
    Object.prototype.hasOwnProperty.call(
      routes,
      path
    )
  ) {
    return routes[path];
  }

  // 2. Dynamic routes
  for (const item of dynamicRoutes) {
    if (item.pattern.test(path)) {
      return item.route;
    }
  }

  // 3. Not found
  return null;
}

// ============================================
// NOT FOUND PAGE
// ============================================

function renderMissing(path) {
  const description = path.startsWith('/post/')
    ? 'This blog post could not be found.'
    : path.startsWith('/services/')
      ? 'This service could not be found.'
      : 'This page has not been provided yet.';

  return `
    <main
      class="w-container"
      style="padding:100px 20px;min-height:50vh"
    >

      <h1>
        ${t('Page not available yet')}
      </h1>

      <p>
        ${t(description)}
      </p>

      <p>
        <a href="/">
          ${t('Back to home')}
        </a>
      </p>

    </main>
  `;
}

// ============================================
// PAGE CLEANUP
// ============================================

let cleanup = [];

function cleanupCurrentPage() {

  for (const unsubscribe of cleanup) {

    try {
      unsubscribe?.();

    } catch (error) {
      console.warn(
        'Page cleanup error:',
        error
      );
    }
  }

  cleanup = [];
}

// ============================================
// REDIRECT TO LOGIN
// ============================================

function redirectToLogin(expired = false) {

  const url = new URL(
    '/login',
    window.location.origin
  );

  // Preserve explicit language query.
  const lang = new URLSearchParams(
    window.location.search
  ).get('lang');

  if (lang === 'fa' || lang === 'en') {
    url.searchParams.set('lang', lang);
  }

  // Inform Login page if inactivity expired.
  if (expired) {
    url.searchParams.set('expired', '1');
  }

  window.history.replaceState(
    window.history.state,
    '',
    url.pathname + url.search
  );
}

// ============================================
// RENDER ROUTE
// ============================================

export function renderRoute() {

  // Apply selected language
  applyDocumentLanguage();

  // Cleanup previous page
  cleanupCurrentPage();

  const app = document.getElementById('app');

  if (!app) {
    throw new Error(
      'Missing #app in index.html'
    );
  }

  let path = normalizePath(
    window.location.pathname
  );

  let route = resolveRoute(path);

  // ========================================
  // PROTECTED DASHBOARD
  // ========================================

  if (
    route?.requiresAuth &&
    !isLoggedInAndActive()
  ) {

    redirectToLogin();

    path = '/login';
    route = routes[path];
  }

  // ========================================
  // PAGE SHELL
  // ========================================

  // Login / Register / Dashboard
  // do not include public Header / Footer.
  const withShell = !route?.standalone;

  const pageHTML = route
    ? route.render()
    : renderMissing(path);

  app.innerHTML = `
    ${withShell ? Header() : ''}

    ${pageHTML}

    ${withShell ? Footer() : ''}
  `;

  // ========================================
  // DOCUMENT TITLE
  // ========================================

  document.title = `
    ${t(route?.title || 'Page Not Found')}
    |
    ${t('Dr. Zeinolabedin')}
  `.replace(/\s+/g, ' ').trim();

  // ========================================
  // INITIALIZE COMPONENTS
  // ========================================

  const initializers = [

    withShell ? mountHeader : null,

    route?.init,

    withShell ? mountFooter : null,

  ];

  for (const init of initializers) {

    if (typeof init !== 'function') {
      continue;
    }

    const unsubscribe = init();

    if (typeof unsubscribe === 'function') {
      cleanup.push(unsubscribe);
    }
  }

  // ========================================
  // TRANSLATE PAGE CONTENT
  // ========================================

  translateElement(app);

  // ========================================
  // HASH NAVIGATION
  // ========================================

  if (window.location.hash) {

    requestAnimationFrame(() => {

      let id = window.location.hash.slice(1);

      try {
        id = decodeURIComponent(id);

      } catch {
        // Keep original hash.
      }

      document
        .getElementById(id)
        ?.scrollIntoView();

    });
  }
}

// ============================================
// INITIALIZE ROUTER
// ============================================

export function initRouter() {

  // ========================================
  // SESSION MONITOR
  // ========================================

  const stopSessionMonitor = initSessionMonitor(
    () => {

      // Redirect if the patient is on Dashboard
      // when the session expires.
      if (
        normalizePath(
          window.location.pathname
        ) === '/dashboard'
      ) {

        redirectToLogin(true);

        renderRoute();
      }
    }
  );

  // ========================================
  // BROWSER BACK / FORWARD
  // ========================================

  const onPopState = () => {
    renderRoute();
  };

  // ========================================
  // LANGUAGE SWITCH
  // ========================================

  const onLanguageClick = event => {

    const target = event.target instanceof Element
      ? event.target
      : event.target?.parentElement;

    const button = target?.closest(
      '[data-set-language]'
    );

    if (!button) return;

    event.preventDefault();

    const lang = button.getAttribute(
      'data-set-language'
    );

    if (
      lang !== 'fa' &&
      lang !== 'en'
    ) {
      return;
    }

    setLanguage(
      lang,
      renderRoute
    );
  };

  // ========================================
  // SPA LINK NAVIGATION
  // ========================================

  const onNavigateClick = event => {

    // Ignore non-standard clicks.
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const target = event.target instanceof Element
      ? event.target
      : event.target?.parentElement;

    const anchor = target?.closest(
      'a[href]'
    );

    if (!anchor) return;

    if (anchor.hasAttribute('download')) {
      return;
    }

    // Respect target="_blank"
    if (
      anchor.target &&
      anchor.target !== '_self'
    ) {
      return;
    }

    const raw = anchor.getAttribute('href');

    if (
      !raw ||
      raw === '#' ||
      raw.startsWith('#')
    ) {
      return;
    }

    const url = new URL(
      anchor.href,
      window.location.href
    );

    // External links
    if (
      url.origin !== window.location.origin ||
      !['http:', 'https:'].includes(url.protocol)
    ) {
      return;
    }

    const path = normalizePath(
      url.pathname
    );

    // Do not intercept static files.
    if (
      /\.(?:pdf|docx?|xlsx?|zip|png|jpg|jpeg|svg|webp|css|js)$/i
        .test(path)
    ) {
      return;
    }

    event.preventDefault();

    const next =
      path +
      url.search +
      url.hash;

    const current =
      window.location.pathname +
      window.location.search +
      window.location.hash;

    if (next === current) {
      return;
    }

    // ======================================
    // UPDATE URL
    // ======================================

    window.history.pushState(
      {},
      '',
      next
    );

    // ======================================
    // RENDER DESTINATION
    // ======================================

    renderRoute();

    // ======================================
    // SCROLL TO TOP
    // ======================================

    if (!url.hash) {
      window.scrollTo({
        top: 0,
        behavior: 'auto',
      });
    }
  };

  // ========================================
  // REGISTER EVENT LISTENERS
  // ========================================

  window.addEventListener(
    'popstate',
    onPopState
  );

  document.addEventListener(
    'click',
    onLanguageClick
  );

  document.addEventListener(
    'click',
    onNavigateClick
  );

  // ========================================
  // FIRST RENDER
  // ========================================

  renderRoute();

  // ========================================
  // ROUTER CLEANUP
  // ========================================

  return () => {

    window.removeEventListener(
      'popstate',
      onPopState
    );

    document.removeEventListener(
      'click',
      onLanguageClick
    );

    document.removeEventListener(
      'click',
      onNavigateClick
    );

    stopSessionMonitor?.();

    cleanupCurrentPage();
  };
}
