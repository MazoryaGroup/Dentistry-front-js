
/**
 * Dentistry — SPA Router
 *
 * Dynamic routes:
 * /post/:slug
 * /services/:id
 * /team/:slug
 *
 * About Us includes the doctors listing.
 */

import { Header, mountHeader } from '../components/Header.js';
import { Footer, mountFooter } from '../components/Footer.js';

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

import { Home, initHome } from '../pages/Home.js';

import { About, initAbout } from '../pages/About.js';

import { Blog, initBlog } from '../pages/Blog.js';

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
  TeamDetails,
  initTeamDetails,
} from '../pages/TeamDetails.js';

import { Faq, initFaq } from '../pages/Faq.js';

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

  '/faq': {
    render: Faq,
    init: initFaq,
    title: 'FAQ',
  },

  // AUTH PAGES

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

  // PATIENT DASHBOARD

  '/dashboard': {
    render: Dashboard,
    init: initDashboard,
    title: 'Patient Dashboard',
    standalone: true,
    requiresAuth: true,
  },

  // APPOINTMENT CHECKOUT

  '/checkout': {
    render: Checkout,
    init: initCheckout,
    title: 'Appointment Checkout',
  },

};

// ============================================
// DYNAMIC ROUTES
// ============================================

const dynamicRoutes = [

  // BLOG DETAILS
  {
    pattern: /^\/post\/([^/]+)$/,
    route: {
      render: BlogDetails,
      init: initBlogDetails,
      title: 'Blog Details',
    },
  },

  // SERVICE DETAILS
  {
    pattern: /^\/services\/([1-9]\d*)$/,
    route: {
      render: ServiceDetails,
      init: initServiceDetails,
      title: 'Service Details',
    },
  },

  // DOCTOR DETAILS
  {
    pattern: /^\/team\/([a-z0-9-]+)$/i,
    route: {
      render: TeamDetails,
      init: initTeamDetails,
      title: 'Doctor Profile',
    },
  },

];

// ============================================
// NORMALIZE URL
// ============================================

function normalizePath(path) {
  let value = String(path || '/');

  value = value.replace(
    /\/(?:index\.html?|index\.htm)$/i,
    '/'
  ) || '/';

  if (
    value !== '/' &&
    value.endsWith('.html')
  ) {
    value = value.slice(0, -5);
  }

  return value.replace(/\/+$/, '') || '/';
}

// ============================================
// RESOLVE ROUTE
// ============================================

function resolveRoute(path) {

  if (
    Object.prototype.hasOwnProperty.call(
      routes,
      path
    )
  ) {
    return routes[path];
  }

  for (const item of dynamicRoutes) {
    if (item.pattern.test(path)) {
      return item.route;
    }
  }

  return null;
}

// ============================================
// LEGACY TEAM REDIRECT
// ============================================

function redirectOldTeamPage() {
  const path = normalizePath(
    window.location.pathname
  );

  if (path !== '/team') {
    return;
  }

  // Team listing is now part of About Us.

  const url = new URL(
    '/about-us',
    window.location.origin
  );

  url.search = window.location.search;
  url.hash = 'about-doctors';

  window.history.replaceState(
    window.history.state,
    '',
    url.pathname + url.search + url.hash
  );
}

// ============================================
// PAGE NOT FOUND
// ============================================

function renderMissing(path) {

  let description = 'This page is not available yet.';

  if (path.startsWith('/post/')) {
    description = 'This blog post could not be found.';

  } else if (path.startsWith('/services/')) {
    description = 'This service could not be found.';

  } else if (path.startsWith('/team/')) {
    description = 'This doctor profile could not be found.';
  }

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
// AUTH REDIRECT
// ============================================

function redirectToLogin(expired = false) {

  const url = new URL(
    '/login',
    window.location.origin
  );

  const currentLang = new URLSearchParams(
    window.location.search
  ).get('lang');

  if (
    currentLang === 'fa' ||
    currentLang === 'en'
  ) {
    url.searchParams.set('lang', currentLang);
  }

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

  applyDocumentLanguage();

  cleanupCurrentPage();

  const app = document.getElementById('app');

  if (!app) {
    throw new Error(
      'Missing #app in index.html'
    );
  }

  // Old /team links go to About Us.

  redirectOldTeamPage();

  let path = normalizePath(
    window.location.pathname
  );

  let route = resolveRoute(path);

  // ============================================
  // AUTH GUARD
  // ============================================

  if (
    route?.requiresAuth &&
    !isLoggedInAndActive()
  ) {

    redirectToLogin();

    path = '/login';
    route = routes[path];
  }

  // ============================================
  // SHELL / STANDALONE
  // ============================================

  const withShell = !route?.standalone;

  const pageHTML = route
    ? route.render()
    : renderMissing(path);

  app.innerHTML = `
    ${withShell ? Header() : ''}

    ${pageHTML}

    ${withShell ? Footer() : ''}
  `;

  // ============================================
  // PAGE TITLE
  // ============================================

  document.title = `${
    t(route?.title || 'Page Not Found')
  } | ${t('Dr. Zeinolabedin')}`;

  // ============================================
  // INITIALIZE COMPONENTS
  // ============================================

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

  // ============================================
  // TRANSLATE
  // ============================================

  translateElement(app);

  // ============================================
  // SCROLL TO HASH
  // ============================================

  if (window.location.hash) {

    requestAnimationFrame(() => {

      let id = window.location.hash.slice(1);

      try {
        id = decodeURIComponent(id);
      } catch {
        // Keep the original fragment.
      }

      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: 'auto',
          block: 'start',
        });
      }

    });
  }
}

// ============================================
// INITIALIZE ROUTER
// ============================================

export function initRouter() {

  // ============================================
  // SESSION MONITOR
  // ============================================

  const stopSessionMonitor = initSessionMonitor(() => {

    const path = normalizePath(
      window.location.pathname
    );

    if (path === '/dashboard') {

      redirectToLogin(true);

      renderRoute();
    }

  });

  // ============================================
  // BROWSER BACK / FORWARD
  // ============================================

  const onPopState = () => {
    renderRoute();
  };

  // ============================================
  // LANGUAGE SWITCH
  // ============================================

  const onLanguageClick = event => {

    const target = event.target instanceof Element
      ? event.target
      : event.target?.parentElement;

    const button = target?.closest(
      '[data-set-language]'
    );

    if (!button) return;

    event.preventDefault();

    const selectedLang = button.getAttribute(
      'data-set-language'
    );

    if (
      selectedLang !== 'fa' &&
      selectedLang !== 'en'
    ) {
      return;
    }

    setLanguage(selectedLang, renderRoute);
  };

  // ============================================
  // SPA LINK NAVIGATION
  // ============================================

  const onNavigateClick = event => {

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

    const anchor = target?.closest('a[href]');

    if (!anchor) return;

    if (anchor.hasAttribute('download')) {
      return;
    }

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

    if (
      url.origin !== window.location.origin ||
      !['http:', 'https:'].includes(url.protocol)
    ) {
      return;
    }

    const path = normalizePath(
      url.pathname
    );

    // Ignore static assets.

    if (
      /\.(?:pdf|docx?|xlsx?|zip|png|jpg|jpeg|svg|webp|css|js)$/i
        .test(path)
    ) {
      return;
    }

    event.preventDefault();

    const next = (
      path +
      url.search +
      url.hash
    );

    const current = (
      window.location.pathname +
      window.location.search +
      window.location.hash
    );

    if (next === current) {
      return;
    }

    window.history.pushState(
      {},
      '',
      next
    );

    renderRoute();

    // Only scroll to top when no anchor exists.

    if (!url.hash) {

      window.scrollTo({
        top: 0,
        behavior: 'auto',
      });

    }
  };

  // ============================================
  // REGISTER EVENTS
  // ============================================

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

  // ============================================
  // INITIAL RENDER
  // ============================================

  renderRoute();

  // ============================================
  // ROUTER CLEANUP
  // ============================================

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
