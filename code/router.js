
import {
  Header,
  mountHeader,
} from '../components/Header.js';

import {
  applyDocumentLanguage,
  setLanguage,
  translateElement,
  t,
} from './i18n.js';

import {
  Footer,
  mountFooter,
} from '../components/Footer.js';

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

import { Team, initTeam } from '../pages/Team.js';

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
  // AUTH ROUTES
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
  },

  '/checkout': {
    render: Checkout,
    init: initCheckout,
    title: 'Appointment Checkout',
  },

  // ========================================
  // OTHER DETAIL PAGES
  // ========================================

  '/services/bright-smile-solutions': {
    render: ServiceDetails,
    init: initServiceDetails,
    title: 'Service Details',
  },

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
  {
    pattern: /^\/post\/([^/]+)$/,
    route: {
      render: BlogDetails,
      init: initBlogDetails,
      title: 'Blog Details',
    },
  },
];

// ============================================
// NORMALIZE PATH
// ============================================

function normalizePath(path) {
  let value = String(path || '/');

  // Remove trailing slash
  value = value.replace(/\/+$/, '') || '/';

  // Convert /index.html or /index.htm to /
  value = value.replace(
    /\/index\.html?$/i,
    '/'
  ) || '/';

  // Support old Webflow .html URLs
  if (
    value !== '/' &&
    value.endsWith('.html')
  ) {
    value = value.slice(0, -5);
  }

  return value.replace(/\/+$/, '') || '/';
}

// ============================================
// ROUTE RESOLVER
// ============================================

function resolveRoute(path) {
  // 1. Exact routes
  if (routes[path]) {
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
  let description =
    'This page has not been provided yet.';

  if (path.startsWith('/services/')) {
    description =
      'This service detail page was not included in the HTML you provided.';
  } else if (path.startsWith('/team/')) {
    description =
      'This team profile was not included in the HTML you provided.';
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
// CLEANUP
// ============================================

let cleanup = [];

function cleanupCurrentPage() {
  cleanup.forEach(fn => {
    try {
      fn?.();
    } catch (error) {
      console.warn(
        'Page cleanup error:',
        error
      );
    }
  });

  cleanup = [];
}

// ============================================
// RENDER ROUTE
// ============================================

export function renderRoute() {
  // Apply current FA / EN language
  applyDocumentLanguage();

  // Stop previous page listeners and requests
  cleanupCurrentPage();

  const app = document.getElementById('app');

  if (!app) {
    throw new Error(
      'Missing #app in index.html'
    );
  }

  const path = normalizePath(
    window.location.pathname
  );

  // Find static or dynamic route
  const route = resolveRoute(path);

  // Login, Register and Dashboard
  // do not use public Header/Footer.
  const withShell = !route?.standalone;

  // Render main page
  const pageHTML = route
    ? route.render()
    : renderMissing(path);

  app.innerHTML = `
    ${withShell ? Header() : ''}

    ${pageHTML}

    ${withShell ? Footer() : ''}
  `;

  // Browser tab title
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

  // Apply translations to rendered HTML
  translateElement(app);

  // ========================================
  // HASH NAVIGATION
  // ========================================

  if (window.location.hash) {
    requestAnimationFrame(() => {
      let id = '';

      try {
        id = decodeURIComponent(
          window.location.hash.slice(1)
        );
      } catch {
        id = window.location.hash.slice(1);
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
  // First render
  renderRoute();

  // ========================================
  // BROWSER BACK / FORWARD
  // ========================================

  window.addEventListener(
    'popstate',
    renderRoute
  );

  // ========================================
  // LANGUAGE SWITCH
  // ========================================

  document.addEventListener(
    'click',
    event => {
      const button = event.target.closest(
        '[data-set-language]'
      );

      if (!button) return;

      event.preventDefault();

      const lang = button.getAttribute(
        'data-set-language'
      );

      if (!['fa', 'en'].includes(lang)) {
        return;
      }

      setLanguage(lang, renderRoute);
    }
  );

  // ========================================
  // SPA LINK NAVIGATION
  // ========================================

  document.addEventListener(
    'click',
    event => {
      const anchor = event.target.closest(
        'a[href]'
      );

      if (
        !anchor ||
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        anchor.hasAttribute('download')
      ) {
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

      // External links should open normally
      if (
        url.origin !== window.location.origin ||
        !['http:', 'https:'].includes(url.protocol)
      ) {
        return;
      }

      const path = normalizePath(
        url.pathname
      );

      // Don't intercept static files
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

      // Update URL without reloading page
      window.history.pushState(
        {},
        '',
        next
      );

      // Render destination page
      renderRoute();

      // Scroll to top
      if (!url.hash) {
        window.scrollTo({
          top: 0,
          behavior: 'auto',
        });
      }
    }
  );
}
