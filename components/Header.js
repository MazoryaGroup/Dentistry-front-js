
/**
 * Dentistry — Header
 *
 * - FA / EN support
 * - RTL / LTR
 * - Login / Dashboard based on active session
 * - Minimal auth button
 * - Desktop / Mobile navigation
 */

import { initNavbar } from './Navbar.js';

import {
  languageSwitch,
  getLanguage,
  t,
} from '../code/i18n.js';

import {
  isLoggedInAndActive,
} from '../code/session.js';

import '../asset/css/header-auth.css';

// ============================================
// NAVIGATION
// ============================================

const MENU = [
  { url: '/', key: 'header.home', en: 'Home', fa: 'خانه' },
  { url: '/about-us', key: 'header.about', en: 'About Us', fa: 'درباره ما' },
  { url: '/service', key: 'header.services', en: 'Services', fa: 'خدمات' },
  { url: '/blog', key: 'header.blog', en: 'Blog', fa: 'وبلاگ' },
  { url: '/contact-us', key: 'header.contact', en: 'Contact Us', fa: 'تماس با ما' },
];

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

function translate(key, fallbackEn, fallbackFa) {
  const result = t(key);

  if (result !== key && result) {
    return result;
  }

  return getLanguage() === 'fa'
    ? fallbackFa
    : fallbackEn;
}

function currentPath() {
  return window.location.pathname.replace(/\/+$/, '') || '/';
}

function isActive(url) {
  const path = currentPath();

  if (path === url) return true;

  if (
    url === '/service' &&
    path.startsWith('/services/')
  ) {
    return true;
  }

  if (
    url === '/blog' &&
    path.startsWith('/post/')
  ) {
    return true;
  }

  return false;
}

// ============================================
// AUTH STATUS
// ============================================

function getAuthData() {
  const authenticated = isLoggedInAndActive();

  return {
    authenticated,

    href: authenticated
      ? '/dashboard'
      : '/login',

    label: authenticated
      ? translate(
          'header.dashboard',
          'Dashboard',
          'داشبورد'
        )
      : translate(
          'header.login',
          'Login',
          'ورود'
        ),

    ariaLabel: authenticated
      ? translate(
          'header.dashboardAria',
          'Open patient dashboard',
          'ورود به داشبورد بیمار'
        )
      : translate(
          'header.loginAria',
          'Sign in to patient account',
          'ورود به حساب بیمار'
        ),
  };
}

// ============================================
// ICON
// ============================================

const userIcon = `
  <svg
    class="dentistry-header-auth-icon"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.7"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="8" r="3.5"></circle>
    <path d="M5.5 20c0-3.5 2.9-6 6.5-6s6.5 2.5 6.5 6"></path>
  </svg>
`;

// ============================================
// AUTH BUTTON
// ============================================

function authButton(type) {
  const auth = getAuthData();

  return `
    <a
      href="${auth.href}"
      class="dentistry-header-auth dentistry-header-auth-${type} w-inline-block"
      data-header-auth
      data-auth-type="${type}"
      aria-label="${escapeHTML(auth.ariaLabel)}"
    >
      ${userIcon}

      <span class="dentistry-header-auth-text">
        ${escapeHTML(auth.label)}
      </span>
    </a>
  `;
}

// ============================================
// NAVIGATION LINKS
// ============================================

function renderNavigation() {
  return MENU.map(item => {
    const active = isActive(item.url);

    const label = translate(
      item.key,
      item.en,
      item.fa
    );

    return `
      <a
        href="${item.url}"
        data-header-nav-key="${item.key}"
        class="nav-link w-inline-block${active ? ' w--current' : ''}"
        ${active ? 'aria-current="page"' : ''}
      >
        <div class="nav-link-text">
          ${escapeHTML(label)}
        </div>
      </a>
    `;
  }).join('');
}

// ============================================
// HEADER HTML
// ============================================

export function Header() {
  const homeActive = currentPath() === '/';

  return `
    <div
      data-dentistry-header
      data-no-translate
      data-animation="default"
      data-collapse="medium"
      data-duration="400"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      class="navbar w-nav"
    >

      <header id="header">

        <div class="container-fluid fist w-container">

          <div class="navbar-main-wrapper">

            <!-- LOGO -->

            <a
              href="/"
              class="brand w-nav-brand${homeActive ? ' w--current' : ''}"
              ${homeActive ? 'aria-current="page"' : ''}
            >
              <img
                src="/asset/img/logo.png"
                loading="eager"
                alt="${escapeHTML(translate('header.logo', 'Dentistry', 'دندان‌پزشکی'))}"
                class="brand-logo"
                data-header-logo
              />
            </a>

            <!-- NAVIGATION -->

            <nav
              role="navigation"
              class="nav-menu-block w-nav-menu"
              id="dentistry-nav-menu"
            >

              ${renderNavigation()}

              <!-- MOBILE AUTH BUTTON -->
              ${authButton('mobile')}

            </nav>

            <!-- LANGUAGE SWITCH -->

            ${languageSwitch('dentistry-header-lang')}

            <!-- DESKTOP AUTH BUTTON -->

            ${authButton('desktop')}

            <!-- MOBILE HAMBURGER -->

            <div
              class="hamburger-menu-button w-nav-button"
              aria-label="${escapeHTML(translate('header.menu', 'Toggle navigation', 'باز و بسته کردن منو'))}"
              aria-controls="dentistry-nav-menu"
              aria-expanded="false"
              role="button"
              tabindex="0"
              data-header-menu-button
            >
              <div class="w-icon-nav-menu"></div>
            </div>

          </div>

        </div>

      </header>

    </div>
  `;
}

// ============================================
// MOUNT HEADER
// ============================================

export function mountHeader() {
  const cleanupNavbar = initNavbar();

  const root = document.querySelector(
    '[data-dentistry-header]'
  );

  if (!root) {
    return () => {
      if (typeof cleanupNavbar === 'function') {
        cleanupNavbar();
      }
    };
  }

  // ============================================
  // UPDATE AUTH BUTTONS
  // ============================================

  function updateAuthButtons() {
    const auth = getAuthData();

    root.querySelectorAll(
      '[data-header-auth]'
    ).forEach(link => {

      link.href = auth.href;

      link.setAttribute(
        'aria-label',
        auth.ariaLabel
      );

      const label = link.querySelector(
        '.dentistry-header-auth-text'
      );

      if (label) {
        label.textContent = auth.label;
      }
    });
  }

  // ============================================
  // UPDATE NAVIGATION LANGUAGE
  // ============================================

  function updateNavigation() {
    MENU.forEach(item => {
      const link = Array.from(
        root.querySelectorAll('[data-header-nav-key]')
      ).find(element =>
        element.dataset.headerNavKey === item.key
      );

      if (!link) return;

      const label = link.querySelector(
        '.nav-link-text'
      );

      if (label) {
        label.textContent = translate(
          item.key,
          item.en,
          item.fa
        );
      }

      const active = isActive(item.url);

      link.classList.toggle(
        'w--current',
        active
      );

      if (active) {
        link.setAttribute(
          'aria-current',
          'page'
        );
      } else {
        link.removeAttribute(
          'aria-current'
        );
      }
    });
  }

  // ============================================
  // UPDATE LANGUAGE SWITCH
  // ============================================

  function updateLanguageSwitch() {
    const lang = getLanguage();

    const switcher = root.querySelector(
      '.dentistry-lang-switch'
    );

    if (switcher) {
      switcher.setAttribute(
        'aria-label',
        translate(
          'header.language',
          'Site language',
          'زبان سایت'
        )
      );
    }

    root.querySelectorAll(
      '[data-set-language]'
    ).forEach(button => {

      const active =
        button.dataset.setLanguage === lang;

      button.classList.toggle(
        'is-active',
        active
      );

      button.setAttribute(
        'aria-pressed',
        String(active)
      );
    });
  }

  // ============================================
  // UPDATE OTHER LABELS
  // ============================================

  function updateOtherLabels() {
    const logo = root.querySelector(
      '[data-header-logo]'
    );

    if (logo) {
      logo.alt = translate(
        'header.logo',
        'Dentistry',
        'دندان‌پزشکی'
      );
    }

    const menuButton = root.querySelector(
      '[data-header-menu-button]'
    );

    if (menuButton) {
      menuButton.setAttribute(
        'aria-label',
        translate(
          'header.menu',
          'Toggle navigation',
          'باز و بسته کردن منو'
        )
      );
    }
  }

  // ============================================
  // UPDATE EVERYTHING
  // ============================================

  function updateHeader() {
    if (!root.isConnected) return;

    updateNavigation();
    updateAuthButtons();
    updateLanguageSwitch();
    updateOtherLabels();
  }

  // Initial update
  updateHeader();

  // ============================================
  // AUTH CHANGES
  // ============================================

  window.addEventListener(
    'dentistry:auth-changed',
    updateHeader
  );

  // ============================================
  // LANGUAGE CHANGES
  // ============================================

  const languageObserver = new MutationObserver(
    updateHeader
  );

  languageObserver.observe(
    document.documentElement,
    {
      attributes: true,
      attributeFilter: ['lang', 'dir'],
    }
  );

  // ============================================
  // RETURNING TO TAB
  // ============================================

  function onVisibilityChange() {
    if (!document.hidden) {
      updateHeader();
    }
  }

  document.addEventListener(
    'visibilitychange',
    onVisibilityChange
  );

  window.addEventListener(
    'focus',
    updateHeader
  );

  // ============================================
  // CLEANUP
  // ============================================

  return () => {
    languageObserver.disconnect();

    window.removeEventListener(
      'dentistry:auth-changed',
      updateHeader
    );

    window.removeEventListener(
      'focus',
      updateHeader
    );

    document.removeEventListener(
      'visibilitychange',
      onVisibilityChange
    );

    if (typeof cleanupNavbar === 'function') {
      cleanupNavbar();
    }
  };
}
