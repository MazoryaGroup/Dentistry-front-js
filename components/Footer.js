
/**
 * Dentistry — Premium Minimal Footer
 *
 * - FA / EN via JSON
 * - RTL / LTR
 * - Responsive
 * - Contact CTA
 * - Navigation links
 * - Back to top
 */

import '../asset/css/footer.css';

import { t } from '../code/i18n.js';

// ============================================
// TRANSLATIONS
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

function tr(key) {
  return escapeHTML(t(`footer.${key}`));
}

// ============================================
// ICONS
// ============================================

const ICONS = {

  arrow: `
    <svg
      viewBox="0 0 24 24"
      width="19"
      height="19"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14"></path>
      <path d="m13 6 6 6-6 6"></path>
    </svg>
  `,

  diagonalArrow: `
    <svg
      viewBox="0 0 24 24"
      width="19"
      height="19"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7"></path>
      <path d="M8 7h9v9"></path>
    </svg>
  `,

  up: `
    <svg
      viewBox="0 0 24 24"
      width="19"
      height="19"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M12 19V5"></path>
      <path d="m5 12 7-7 7 7"></path>
    </svg>
  `,

  sparkle: `
    <svg
      viewBox="0 0 40 40"
      width="40"
      height="40"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 2c2.2 10.5 7.5 15.8 18 18-10.5 2.2-15.8 7.5-18 18C17.8 27.5 12.5 22.2 2 20 12.5 17.8 17.8 12.5 20 2Z"
        fill="currentColor"
      />
    </svg>
  `,

};

// ============================================
// NAVIGATION LINK
// ============================================

function navLink(href, key) {
  return `
    <li class="dz-footer-nav-item">

      <a
        href="${href}"
        class="dz-footer-nav-link"
      >

        <span
          class="dz-footer-nav-dot"
          aria-hidden="true"
        ></span>

        <span>
          ${tr(key)}
        </span>

      </a>

    </li>
  `;
}

// ============================================
// FOOTER
// ============================================

export function Footer() {
  const year = new Date().getFullYear();

  return `
    <footer
      id="footer"
      class="dz-footer"
      data-dz-footer
      data-no-translate
    >

      <!-- BACKGROUND -->

      <div
        class="dz-footer-background"
        aria-hidden="true"
      ></div>

      <div class="dz-footer-container">

        <!-- =====================================
             TOP CTA
        ====================================== -->

        

        <!-- =====================================
             MAIN FOOTER
        ====================================== -->

        <div class="dz-footer-main">

          <!-- BRAND -->

          <div class="dz-footer-brand">

            <a
              href="/"
              class="dz-footer-brand-link"
              aria-label="${tr('brandName')}"
            >

              <span class="dz-footer-logo-box">

                <img
                  src="/asset/img/logo.png"
                  alt="${tr('brandName')}"
                  class="dz-footer-logo"
                  loading="lazy"
                />

              </span>

              <span class="dz-footer-brand-name">
                ${tr('brandName')}
              </span>

            </a>

            <!-- BRAND DESCRIPTION -->

            <p class="dz-footer-brand-description">
              ${tr('brandDescription')}
            </p>

            <!-- BRAND TAG -->

            <div class="dz-footer-brand-tag">

              <span
                class="dz-footer-tag-symbol"
                aria-hidden="true"
              >
                ✳
              </span>

              <span>
                ${tr('brandTag')}
              </span>

            </div>

          </div>

          <!-- =====================================
               QUICK LINKS
          ====================================== -->

          <div class="dz-footer-column">

            <h3 class="dz-footer-column-heading">
              ${tr('explore')}
            </h3>

            <ul class="dz-footer-nav-list">

              ${navLink('/', 'home')}

              ${navLink('/about-us', 'about')}

              ${navLink('/team', 'team')}

              ${navLink('/blog', 'blog')}

            </ul>

          </div>

          <!-- =====================================
               PATIENT LINKS
          ====================================== -->

          <div class="dz-footer-column">

            <h3 class="dz-footer-column-heading">
              ${tr('patients')}
            </h3>

            <ul class="dz-footer-nav-list">

              ${navLink('/login', 'login')}

              ${navLink('/register', 'register')}

              ${navLink('/faq', 'faq')}

            </ul>

          </div>

          <!-- =====================================
               CONTACT
          ====================================== -->

          <div class="dz-footer-column dz-footer-contact">

            <h3 class="dz-footer-column-heading">
              ${tr('getInTouch')}
            </h3>

            <p class="dz-footer-contact-description">
              ${tr('contactDescription')}
            </p>

            <a
              href="/contact-us"
              class="dz-footer-contact-link"
            >

              <span>
                ${tr('contactLink')}
              </span>

              ${ICONS.diagonalArrow}

            </a>

          </div>

        </div>

        <!-- =====================================
             BOTTOM
        ====================================== -->

        <div class="dz-footer-bottom">

  <!-- COPYRIGHT - LEFT -->

  <p class="dz-footer-copyright">
    © ${year} ${tr('brandName')}.
    ${tr('copyright')}
  </p>

  <!-- MAZORYA GROUP - CENTER -->

  <div class="dz-footer-designer">
    Designed & developed by
    <a
      href="https://www.mazoryagroup.ir/"
      target="_blank"
      rel="noopener noreferrer"
      class="dz-footer-company-link"
    >
      MazoryaGroup
    </a>
  </div>

  <!-- BACK TO TOP - RIGHT -->

  <button
    type="button"
    class="dz-footer-back-top"
    data-footer-back-top
    aria-label="${tr('backToTop')}"
  >
    <span>${tr('backToTop')}</span>

    <span class="dz-footer-back-top-icon">
      ${ICONS.up}
    </span>
  </button>

</div>

      </div>

    </footer>
  `;
}

// ============================================
// MOUNT FOOTER
// ============================================

export function mountFooter() {

  const footer = document.querySelector(
    '[data-dz-footer]'
  );

  if (!footer) {
    return () => {};
  }

  const controller = new AbortController();

  const { signal } = controller;

  // ============================================
  // BACK TO TOP
  // ============================================

  const backToTop = footer.querySelector(
    '[data-footer-back-top]'
  );

  backToTop?.addEventListener(
    'click',
    () => {

      const reducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      window.scrollTo({
        top: 0,
        behavior: reducedMotion
          ? 'auto'
          : 'smooth',
      });

    },
    { signal }
  );

  // ============================================
  // CLEANUP
  // ============================================

  return () => {
    controller.abort();
  };
}
