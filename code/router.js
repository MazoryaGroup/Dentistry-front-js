
/**
 * Dentistry — SPA Router
 * Vanilla JS + Vite
 * FA / EN
 */

import { Header, mountHeader } from '../components/Header.js';
import { Footer, mountFooter } from '../components/Footer.js';

import {
  applyDocumentLanguage,
  getLanguage,
  setLanguage,
  translateElement,
  t,
} from './i18n.js';

import {
  isLoggedInAndActive,
  initSessionMonitor,
} from './session.js';

import { financeApi } from './financeApi.js';

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

import { Login, initLogin } from '../pages/Login.js';
import { Register, initRegister } from '../pages/Register.js';

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

const isFa = () => getLanguage() === 'fa';

// ============================================
// PAYMENT RESULT PAGE
// ============================================

function paymentReturnPage() {
  const fa = isFa();

  return `
    <main
      class="dentistry-portal"
      data-payment-return
      data-no-translate
      dir="${fa ? 'rtl' : 'ltr'}"
      style="
        min-height:65vh;
        background:#f5f8fb;
        padding:80px 20px;
      "
    >
      <section
        style="
          max-width:680px;
          margin:auto;
          background:#fff;
          padding:35px;
          border:1px solid #e3edf4;
          border-radius:20px;
          text-align:center;
        "
      >
        <h1
          style="
            color:#172c3a;
            font-size:27px;
            margin:0 0 16px;
          "
        >
          ${
            fa
              ? 'وضعیت پرداخت نوبت'
              : 'Appointment payment status'
          }
        </h1>

        <p
          data-payment-return-status
          role="status"
          aria-live="polite"
          style="
            line-height:2;
            color:#536b7c;
          "
        >
          ${
            fa
              ? 'در حال بررسی وضعیت پرداخت از سرور…'
              : 'Checking the payment status with the clinic…'
          }
        </p>

        <a
          href="/dashboard?section=billing"
          style="
            display:inline-block;
            margin-top:20px;
            background:#74ADDA;
            color:#17384c;
            padding:13px 20px;
            border-radius:12px;
            font-weight:700;
            text-decoration:none;
          "
        >
          ${
            fa
              ? 'مشاهده پرداخت‌ها و فاکتورها'
              : 'View payments and invoices'
          }
        </a>

        <a
          href="/dashboard?section=appointments"
          style="
            display:block;
            margin-top:18px;
            color:#397eaf;
            text-decoration:none;
          "
        >
          ${
            fa
              ? 'بازگشت به نوبت‌های من'
              : 'Back to my appointments'
          }
        </a>
      </section>
    </main>
  `;
}

// ============================================
// VERIFY PAYMENT RETURN
// ============================================

function initPaymentReturn() {
  const root = document.querySelector(
    '[data-payment-return]'
  );

  if (!root) return () => {};

  const controller = new AbortController();

  const statusElement = root.querySelector(
    '[data-payment-return-status]'
  );

  const params = new URLSearchParams(
    window.location.search
  );

  const paymentId = Number(
    params.get('payment_id')
  );

  const reason = params.get('reason');
  const fa = isFa();

  const tell = message => {
    if (
      !controller.signal.aborted &&
      root.isConnected
    ) {
      statusElement.textContent = message;
    }
  };

  if (!isLoggedInAndActive()) {
    tell(
      fa
        ? 'برای مشاهده نتیجه معتبر تراکنش، وارد حساب خود شوید و بخش پرداخت‌ها را بررسی کنید.'
        : 'Please sign in and check your payment history to verify this transaction.'
    );

    return () => controller.abort();
  }

  if (
    !Number.isSafeInteger(paymentId) ||
    paymentId <= 0
  ) {
    tell(
      fa
        ? 'شناسه پرداخت برای بررسی موجود نیست. وضعیت را از بخش پرداخت‌ها بررسی کنید.'
        : 'No payment ID is available. Please check the status in your payment history.'
    );

    return () => controller.abort();
  }

  void (async () => {
    try {
      const result = await financeApi.paymentStatus(
        paymentId,
        controller.signal
      );

      if (controller.signal.aborted) return;

      const data = result?.data ?? result;

      const status = String(
        data?.payment?.status ??
        data?.data?.status ??
        data?.status ??
        ''
      ).toLowerCase();

      if (status === 'paid') {
        tell(
          fa
            ? 'پرداخت طبق اطلاعات سرور کلینیک با موفقیت ثبت شده است.'
            : 'The clinic server confirms this payment is paid.'
        );

      } else if (reason === 'manual_review') {
        tell(
          fa
            ? 'این تراکنش نیازمند بررسی کلینیک است. ممکن است وجه از حساب شما کسر شده باشد؛ پرداخت جدید شروع نکنید.'
            : 'This transaction needs clinic review. Funds may have been charged; do not start another payment.'
        );

      } else if (status) {
        tell(
          fa
            ? `وضعیت ثبت‌شده پرداخت: ${status}. برای جزئیات بخش پرداخت‌ها را ببینید.`
            : `Recorded payment status: ${status}. See your payment history for details.`
        );

      } else {
        tell(
          fa
            ? 'نتیجه قطعی در پاسخ سرور مشخص نبود؛ وضعیت را در بخش پرداخت‌ها بررسی کنید.'
            : 'The server did not return a conclusive payment status. Check your payment history.'
        );
      }

    } catch (error) {
      if (controller.signal.aborted) return;

      console.warn(
        'Payment return status:',
        error
      );

      tell(
        fa
          ? 'بررسی آنلاین وضعیت پرداخت ممکن نشد. برای جلوگیری از پرداخت تکراری، ابتدا سوابق پرداخت را بررسی کنید.'
          : 'Could not verify the payment status. Check your payment history before retrying.'
      );
    }
  })();

  return () => controller.abort();
}

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

  // Authentication

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

  // Patient Dashboard

  '/dashboard': {
    render: Dashboard,
    init: initDashboard,
    title: 'Patient Dashboard',
    standalone: true,
    requiresAuth: true,
  },

  // Checkout — authenticated patient

  '/checkout': {
    render: Checkout,
    init: initCheckout,
    title: 'Appointment Checkout',
    requiresAuth: true,
  },

  // Payment gateway return routes

  '/payment/success': {
    render: paymentReturnPage,
    init: initPaymentReturn,
    title: 'Payment Status',
  },

  '/payment/failed': {
    render: paymentReturnPage,
    init: initPaymentReturn,
    title: 'Payment Status',
  },
};

// ============================================
// DYNAMIC ROUTES
// ============================================

const dynamicRoutes = [
  {
    pattern: /^\/post\/([^/]+)$/i,
    route: {
      render: BlogDetails,
      init: initBlogDetails,
      title: 'Blog Details',
    },
  },

  {
    pattern: /^\/services\/([1-9]\d*)$/i,
    route: {
      render: ServiceDetails,
      init: initServiceDetails,
      title: 'Service Details',
    },
  },

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
// NORMALIZE PATH
// ============================================

function normalizePath(path) {
  let value = String(path || '/');

  value = value.replace(
    /\/index\.html?$/i,
    '/'
  ) || '/';

  if (
    value !== '/' &&
    /\.html$/i.test(value)
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

  return dynamicRoutes.find(
    item => item.pattern.test(path)
  )?.route ?? null;
}

// ============================================
// LEGACY TEAM REDIRECT
// ============================================

function redirectOldTeamPage() {
  if (
    normalizePath(window.location.pathname) !==
    '/team'
  ) {
    return;
  }

  const url = new URL(
    '/about-us',
    window.location.origin
  );

  url.search = window.location.search;
  url.hash = '#about-doctors';

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
  const fa = isFa();

  const reason = path.startsWith('/post/')
    ? (
        fa
          ? 'این مطلب پیدا نشد.'
          : 'This blog post could not be found.'
      )
    : path.startsWith('/services/')
      ? (
          fa
            ? 'این خدمت پیدا نشد.'
            : 'This service could not be found.'
        )
      : path.startsWith('/team/')
        ? (
            fa
              ? 'این پزشک پیدا نشد.'
              : 'This doctor profile could not be found.'
          )
        : (
            fa
              ? 'این صفحه در دسترس نیست.'
              : 'This page is not available.'
          );

  return `
    <main
      class="w-container"
      style="padding:100px 20px;min-height:50vh;"
    >
      <h1>
        ${fa ? 'صفحه پیدا نشد' : 'Page not found'}
      </h1>

      <p>${reason}</p>

      <p>
        <a href="/">
          ${fa ? 'بازگشت به خانه' : 'Back to home'}
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
  for (const stop of cleanup.splice(0)) {
    try {
      if (typeof stop === 'function') {
        stop();
      }
    } catch (error) {
      console.warn(
        'Page cleanup error:',
        error
      );
    }
  }
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

  if (['fa', 'en'].includes(currentLang)) {
    url.searchParams.set(
      'lang',
      currentLang
    );
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

  redirectOldTeamPage();

  let path = normalizePath(
    window.location.pathname
  );

  let route = resolveRoute(path);

  // Authentication guard

  if (
    route?.requiresAuth &&
    !isLoggedInAndActive()
  ) {
    redirectToLogin();

    path = '/login';
    route = routes[path];
  }

  // Layout shell

  const withShell = !route?.standalone;

  const pageHTML = route
    ? route.render()
    : renderMissing(path);

  app.innerHTML = `
    ${withShell ? Header() : ''}

    ${pageHTML}

    ${withShell ? Footer() : ''}
  `;

  // Document title

  document.title = `${
    t(route?.title || 'Page Not Found')
  } | ${t('Dr. Zeinolabedin')}`;

  // Initialize components

  const initializers = [
    withShell ? mountHeader : null,
    route?.init,
    withShell ? mountFooter : null,
  ];

  for (const init of initializers) {
    if (typeof init !== 'function') {
      continue;
    }

    try {
      const stop = init();

      if (typeof stop === 'function') {
        cleanup.push(stop);
      }

    } catch (error) {
      console.error(
        'Page initialization error:',
        error
      );
    }
  }

  // Translate page

  translateElement(app);

  // Scroll to hash

  if (window.location.hash) {
    const expectedPath =
      window.location.pathname;

    const hash = window.location.hash;

    requestAnimationFrame(() => {
      if (
        window.location.pathname !==
        expectedPath
      ) {
        return;
      }

      let id = hash.slice(1);

      try {
        id = decodeURIComponent(id);
      } catch {
        // Keep original hash.
      }

      document.getElementById(id)
        ?.scrollIntoView({
          behavior: 'auto',
          block: 'start',
        });
    });
  }
}

// ============================================
// INITIALIZE ROUTER
// ============================================

export function initRouter() {
  // Monitor protected pages

  const stopSessionMonitor =
    initSessionMonitor(() => {
      const path = normalizePath(
        window.location.pathname
      );

      if (routes[path]?.requiresAuth) {
        redirectToLogin(true);
        renderRoute();
      }
    });

  // Browser history

  const onPopState = () => {
    renderRoute();
  };

  // Language switch

  const onLanguageClick = event => {
    if (event.defaultPrevented) return;

    const target =
      event.target instanceof Element
        ? event.target
        : event.target?.parentElement;

    const button = target?.closest(
      '[data-set-language]'
    );

    if (!button) return;

    const selected = button.getAttribute(
      'data-set-language'
    );

    if (
      !['fa', 'en'].includes(selected) ||
      selected === getLanguage()
    ) {
      return;
    }

    event.preventDefault();

    setLanguage(
      selected,
      renderRoute
    );
  };

  // SPA Navigation

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

    const target =
      event.target instanceof Element
        ? event.target
        : event.target?.parentElement;

    const anchor = target?.closest(
      'a[href]'
    );

    if (
      !anchor ||
      anchor.hasAttribute('download') ||
      (
        anchor.target &&
        anchor.target !== '_self'
      )
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
      !['http:', 'https:'].includes(
        url.protocol
      )
    ) {
      return;
    }

    const path = normalizePath(
      url.pathname
    );

    // Ignore static assets.

    if (
      /\.(?:pdf|docx?|xlsx?|zip|png|jpe?g|gif|svg|webp|avif|ico|css|js|json|txt|xml)$/i
        .test(path)
    ) {
      return;
    }

    // Intercept only supported SPA routes.
    if (
      !resolveRoute(path) &&
      path !== '/team'
    ) {
      return;
    }

    event.preventDefault();

    const next =
      path + url.search + url.hash;

    const current =
      window.location.pathname +
      window.location.search +
      window.location.hash;

    if (next === current) {
      return;
    }

    window.history.pushState(
      {},
      '',
      next
    );

    renderRoute();

    if (!url.hash) {
      window.scrollTo({
        top: 0,
        behavior: 'auto',
      });
    }
  };

  // Register events

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

  // Initial render

  renderRoute();

  // Router cleanup

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
