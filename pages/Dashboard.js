
import {
  dpIcon,
  demoNote,
  money,
  portalHeading,
} from '../components/PortalUI.js';

import { languageSwitch, t } from '../code/i18n.js';

import {
  PatientProfile,
  initPatientProfile,
} from '../components/PatientProfile.js';

import { profileApi } from '../code/api.js';

import {
  clearAuthToken,
  getAuthToken,
} from '../code/auth.js';

// ============================================
// DASHBOARD NAVIGATION
// ============================================

function getNavigation() {
  return [
    ['overview', 'Overview', 'activity'],
    ['appointments', 'Appointments', 'calendar'],
    ['treatments', 'Treatment plans', 'tooth'],
    ['billing', 'Billing & payments', 'credit'],
    ['profile', t('profile.title'), 'user'],
  ];
}

function navItem([id, label, icon], index) {
  const active = index === 0;

  return `
    <button
      type="button"
      class="dp-dash-nav-item${active ? ' is-active' : ''}"
      data-dashboard-tab="${id}"
      role="tab"
      id="dp-tab-${id}"
      aria-selected="${active}"
      aria-controls="dp-panel-${id}"
      tabindex="${active ? '0' : '-1'}"
    >
      ${dpIcon(icon)}
      <span>${label}</span>
      ${active ? '<i aria-hidden="true"></i>' : ''}
    </button>
  `;
}

// ============================================
// DEMO APPOINTMENT
// ============================================

function appointment() {
  return `
    <article class="dp-appointment-card">

      <div class="dp-appointment-date">
        <strong>25</strong>
        <span>OCT<br>2026</span>
      </div>

      <div class="dp-appointment-main">
        <span class="dp-chip dp-chip-green">
          Example · Upcoming
        </span>

        <h3>Dental consultation</h3>

        <p>
          ${dpIcon('user')}
          Sample provider

          <span class="dp-separator">•</span>

          ${dpIcon('clock')}
          10:30 AM
        </p>
      </div>

      <a
        class="dp-btn dp-btn-outline dp-btn-small"
        href="/checkout"
      >
        View demo checkout
        ${dpIcon('arrow')}
      </a>

    </article>
  `;
}

// ============================================
// DEMO TIMELINE
// ============================================

function timeline() {
  return `
    <div class="dp-timeline">

      <div class="dp-timeline-item">
        <span class="dp-dot"></span>

        <div>
          <strong>Dental consultation</strong>
          <p>Example appointment · Oct 25, 2026</p>
        </div>

        <span class="dp-chip dp-chip-green">
          Upcoming
        </span>
      </div>

      <div class="dp-timeline-item">
        <span class="dp-dot dp-dot-muted"></span>

        <div>
          <strong>Routine examination</strong>
          <p>Example previous visit · Sep 12, 2026</p>
        </div>

        <span class="dp-chip">
          Completed
        </span>
      </div>

      <div class="dp-timeline-item">
        <span class="dp-dot dp-dot-muted"></span>

        <div>
          <strong>Cleaning & prevention</strong>
          <p>Example previous visit · Jul 07, 2026</p>
        </div>

        <span class="dp-chip">
          Completed
        </span>
      </div>

    </div>
  `;
}

// ============================================
// DEMO TREATMENT RECORDS
// ============================================

function demoRecords() {
  return `
    <div class="dp-list-row">
      <span class="dp-record-icon">
        ${dpIcon('tooth')}
      </span>

      <div>
        <strong>Routine dental assessment</strong>
        <p>Example plan · Created Sep 12, 2026</p>
      </div>

      <span class="dp-chip dp-chip-green">
        Illustrative
      </span>
    </div>

    <div class="dp-list-row">
      <span class="dp-record-icon">
        ${dpIcon('shield')}
      </span>

      <div>
        <strong>Preventive care guidance</strong>
        <p>Example educational record</p>
      </div>

      <span class="dp-chip">
        Sample
      </span>
    </div>
  `;
}

// ============================================
// MAIN DASHBOARD
// ============================================

export function Dashboard() {
  const navigation = getNavigation();

  return `
    <main
      class="dentistry-portal dp-dashboard-page"
      data-portal-page="dashboard"
    >
      <div class="dp-dashboard-layout">

        <!-- =====================================
             SIDEBAR
        ====================================== -->

        <aside class="dp-dash-sidebar">

          <a class="dp-dash-brand" href="/">
            ${dpIcon('tooth')}

            <span>
              DR. ZEINOLABEDIN
              <small>PATIENT PORTAL</small>
            </span>
          </a>

          <div class="dp-sidebar-kicker">
            WORKSPACE
          </div>

          <nav
            class="dp-dash-nav"
            role="tablist"
            aria-label="Patient dashboard sections"
          >
            ${navigation.map(navItem).join('')}
          </nav>

          <!-- SIDEBAR BOTTOM -->

          <div class="dp-sidebar-bottom">

            <div class="dp-support-box">

              ${dpIcon('phone')}

              <strong>
                Need assistance?
              </strong>

              <p>
                Reach out to the clinic for
                appointment or billing questions.
              </p>

              <a href="/contact-us">
                Contact us
                ${dpIcon('arrow')}
              </a>

            </div>

            <!-- REAL LOGOUT -->

            <button
              type="button"
              class="dp-sidebar-back"
              data-dashboard-logout
            >
              ${dpIcon('back')}
              <span>${t('profile.logout')}</span>
            </button>

          </div>

        </aside>

        <!-- =====================================
             MAIN CONTENT
        ====================================== -->

        <div class="dp-dash-content">

          <!-- TOPBAR -->

          <div class="dp-dash-topbar">

            <button
              class="dp-dash-mobile-menu"
              id="dp-dash-menu"
              type="button"
              aria-expanded="false"
              aria-controls="dp-dash-mobile-tabs"
              aria-label="Toggle dashboard navigation"
            >
              ${dpIcon('menu')}
            </button>

            <div class="dp-topbar-breadcrumb">
              Patient portal
              <span>/</span>

              <strong data-current-section>
                Overview
              </strong>
            </div>

            <div class="dp-topbar-right">

              ${languageSwitch('dentistry-dashboard-lang')}

              <!-- REAL PATIENT AVATAR -->

              <span
                class="dp-avatar"
                data-patient-avatar
                aria-label="${t('profile.title')}"
              >
                —
              </span>

            </div>

          </div>

          <!-- MOBILE NAVIGATION -->

          <div
            class="dp-dash-mobile-tabs"
            id="dp-dash-mobile-tabs"
            hidden
          ></div>

          <!-- =====================================
               DASHBOARD PAGE BODY
          ====================================== -->

          <div class="dp-dash-pagebody">

            ${demoNote(
              'Appointments, treatments and billing are currently demo examples. Patient profile information is loaded from your account.'
            )}

            <!-- ==================================
                 OVERVIEW
            =================================== -->

            <section
              id="dp-panel-overview"
              role="tabpanel"
              aria-labelledby="dp-tab-overview"
              data-dashboard-panel="overview"
            >

              <!-- GREETING -->

              <div class="dp-page-head dp-dash-greeting">

                <div class="dp-eyebrow">
                  YOUR PATIENT EXPERIENCE
                </div>

                <h1>
                  Good to see you,

                  <em data-dashboard-name>
                    —
                  </em>

                  <span>✦</span>
                </h1>

                <p>
                  Here’s a quick overview of your
                  dental care journey.
                </p>

              </div>

              <!-- HERO -->

              <div class="dp-dash-hero">

                <div>

                  <span class="dp-pill">
                    PERSONALIZED DENTAL CARE
                  </span>

                  <h2>
                    Healthy smile.
                    <br>
                    Happier you.
                  </h2>

                  <p>
                    See your appointments and stay
                    on top of your treatment plans,
                    all in one place.
                  </p>

                  <a
                    class="dp-btn dp-btn-white"
                    href="/checkout"
                  >
                    Explore appointment checkout
                    ${dpIcon('arrow')}
                  </a>

                </div>

                <div
                  class="dp-dash-hero-icon"
                  aria-hidden="true"
                >
                  ${dpIcon('tooth')}
                </div>

              </div>

              <!-- STATS -->

              <div class="dp-stats-grid">

                <div class="dp-stat-card">

                  <span class="dp-stat-icon">
                    ${dpIcon('calendar')}
                  </span>

                  <span>Sample appointments</span>
                  <strong>01</strong>
                  <small>1 upcoming (demo)</small>

                </div>

                <div class="dp-stat-card">

                  <span class="dp-stat-icon">
                    ${dpIcon('tooth')}
                  </span>

                  <span>Example treatment plans</span>
                  <strong>02</strong>
                  <small>Illustrative only</small>

                </div>

                <div class="dp-stat-card">

                  <span class="dp-stat-icon">
                    ${dpIcon('credit')}
                  </span>

                  <span>Example deposit</span>
                  <strong>150K</strong>
                  <small>Toman · not payable here</small>

                </div>

              </div>

              <!-- TWO COLUMN -->

              <div class="dp-dash-two-col">

                <!-- UPCOMING APPOINTMENT -->

                <section class="dp-white-card">

                  <div class="dp-card-head">

                    <div>
                      <span class="dp-eyebrow">
                        YOUR SCHEDULE
                      </span>

                      <h2>
                        Upcoming appointment
                      </h2>
                    </div>

                    <button
                      type="button"
                      class="dp-text-button"
                      data-show-section="appointments"
                    >
                      View all
                      ${dpIcon('arrow')}
                    </button>

                  </div>

                  ${appointment()}

                </section>

                <!-- CHECKLIST -->

                <section class="dp-white-card">

                  <div class="dp-card-head">
                    <div>
                      <span class="dp-eyebrow">
                        CARE JOURNEY
                      </span>

                      <h2>
                        Patient checklist
                      </h2>
                    </div>
                  </div>

                  <ul class="dp-care-list">

                    <li>
                      <span>${dpIcon('check')}</span>
                      Keep your contact details up to date
                    </li>

                    <li>
                      <span>${dpIcon('check')}</span>
                      Review your next appointment
                    </li>

                    <li>
                      <span>${dpIcon('clock')}</span>
                      Treatment updates will appear here
                    </li>

                  </ul>

                </section>

              </div>

            </section>

            <!-- ==================================
                 APPOINTMENTS
            =================================== -->

            <section
              id="dp-panel-appointments"
              role="tabpanel"
              aria-labelledby="dp-tab-appointments"
              data-dashboard-panel="appointments"
              hidden
            >

              ${portalHeading(
                'PATIENT DASHBOARD',
                'My appointments',
                'Your schedule at a glance. The entries shown here are examples, not actual reservations.'
              )}

              <div class="dp-white-card">

                <div class="dp-card-head">

                  <h2>
                    Appointment history
                  </h2>

                  <a
                    class="dp-btn dp-btn-primary dp-btn-small"
                    href="/checkout"
                  >
                    Checkout preview
                    ${dpIcon('arrow')}
                  </a>

                </div>

                ${timeline()}

              </div>

            </section>

            <!-- ==================================
                 TREATMENTS
            =================================== -->

            <section
              id="dp-panel-treatments"
              role="tabpanel"
              aria-labelledby="dp-tab-treatments"
              data-dashboard-panel="treatments"
              hidden
            >

              ${portalHeading(
                'PATIENT DASHBOARD',
                'Treatment plans',
                'Illustrative care records. Your real treatments will appear after API integration.'
              )}

              <div class="dp-white-card">

                <div class="dp-card-head">

                  <h2>
                    Care records
                  </h2>

                  <span class="dp-chip">
                    2 sample items
                  </span>

                </div>

                ${demoRecords()}

              </div>

            </section>

            <!-- ==================================
                 BILLING
            =================================== -->

            <section
              id="dp-panel-billing"
              role="tabpanel"
              aria-labelledby="dp-tab-billing"
              data-dashboard-panel="billing"
              hidden
            >

              ${portalHeading(
                'PATIENT DASHBOARD',
                'Billing & payments',
                'Review example invoices and payments. No real balances or transactions are shown.'
              )}

              <div class="dp-white-card">

                <div class="dp-card-head">

                  <h2>
                    Sample invoice summary
                  </h2>

                  <span class="dp-chip">
                    PREVIEW
                  </span>

                </div>

                <div class="dp-billing-line">
                  <span>
                    Consultation (example)
                  </span>

                  <strong>
                    ${money(650000)}
                  </strong>
                </div>

                <div class="dp-billing-line">
                  <span>
                    Illustrative deposit
                  </span>

                  <strong>
                    ${money(150000)}
                  </strong>
                </div>

                <div class="dp-billing-line dp-billing-total">
                  <span>
                    Example remaining balance
                  </span>

                  <strong>
                    ${money(500000)}
                  </strong>
                </div>

                <p class="dp-tiny-muted">
                  Amounts are placeholders,
                  not the clinic’s actual price list.
                </p>

                <a
                  class="dp-btn dp-btn-primary"
                  href="/checkout"
                >
                  Open checkout preview
                  ${dpIcon('arrow')}
                </a>

              </div>

            </section>

            <!-- ==================================
                 PROFILE — REAL API
            =================================== -->

            <section
              id="dp-panel-profile"
              role="tabpanel"
              aria-labelledby="dp-tab-profile"
              data-dashboard-panel="profile"
              hidden
            >

              ${portalHeading(
                t('profile.dashboard'),
                t('profile.title'),
                t('profile.subtitle')
              )}

              ${PatientProfile()}

            </section>

          </div>

        </div>

      </div>

    </main>
  `;
}

// ============================================
// INITIALIZE DASHBOARD
// ============================================

export function initDashboard() {
  const root = document.querySelector(
    '[data-portal-page="dashboard"]'
  );

  if (!root) {
    return () => {};
  }

  const controller = new AbortController();
  const { signal } = controller;

  // ============================================
  // AUTHENTICATION CHECK
  // ============================================

  if (!getAuthToken()) {
    window.location.replace('/login');

    return () => controller.abort();
  }

  // ============================================
  // ELEMENTS
  // ============================================

  const tabs = [
    ...root.querySelectorAll('[data-dashboard-tab]'),
  ];

  const panels = [
    ...root.querySelectorAll('[data-dashboard-panel]'),
  ];

  const mobile = root.querySelector(
    '#dp-dash-mobile-tabs'
  );

  const menu = root.querySelector(
    '#dp-dash-menu'
  );

  const currentSection = root.querySelector(
    '[data-current-section]'
  );

  // ============================================
  // NAVIGATION
  // ============================================

  function changeSection(name) {
    const target = tabs.find(
      tab => tab.dataset.dashboardTab === name
    );

    if (!target) return;

    // Update desktop tabs
    tabs.forEach(tab => {
      const active = tab === target;

      tab.classList.toggle('is-active', active);

      tab.setAttribute(
        'aria-selected',
        String(active)
      );

      tab.tabIndex = active ? 0 : -1;
    });

    // Update panels
    panels.forEach(panel => {
      panel.hidden =
        panel.dataset.dashboardPanel !== name;
    });

    // Update breadcrumb
    const label = target.querySelector('span');

    if (currentSection && label) {
      currentSection.textContent = label.textContent;
    }

    // Close mobile navigation
    if (menu) {
      menu.setAttribute('aria-expanded', 'false');
    }

    if (mobile) {
      mobile.hidden = true;
    }

    // Scroll to content
    root
      .querySelector('.dp-dash-pagebody')
      ?.scrollIntoView({
        behavior: 'auto',
        block: 'start',
      });
  }

  // ============================================
  // DESKTOP NAV EVENTS
  // ============================================

  tabs.forEach(tab => {
    tab.addEventListener(
      'click',
      () => {
        changeSection(tab.dataset.dashboardTab);
      },
      { signal }
    );
  });

  // ============================================
  // SECTION SHORTCUTS
  // ============================================

  root.querySelectorAll('[data-show-section]')
    .forEach(button => {
      button.addEventListener(
        'click',
        () => {
          changeSection(button.dataset.showSection);
        },
        { signal }
      );
    });

  // ============================================
  // MOBILE MENU
  // ============================================

  menu?.addEventListener(
    'click',
    () => {
      const isOpen =
        menu.getAttribute('aria-expanded') === 'true';

      const next = !isOpen;

      menu.setAttribute(
        'aria-expanded',
        String(next)
      );

      mobile.hidden = !next;

      if (next) {
        mobile.innerHTML = getNavigation()
          .map(([id, label]) => `
            <button
              type="button"
              data-mobile-tab="${id}"
            >
              ${label}
            </button>
          `)
          .join('');
      }
    },
    { signal }
  );

  mobile?.addEventListener(
    'click',
    event => {
      const button = event.target.closest(
        '[data-mobile-tab]'
      );

      if (!button) return;

      changeSection(button.dataset.mobileTab);
    },
    { signal }
  );

  // ============================================
  // PATIENT PROFILE — REAL API
  // ============================================

  const clearProfile = initPatientProfile(root);

  // ============================================
  // LOGOUT
  // ============================================

  const logoutButton = root.querySelector(
    '[data-dashboard-logout]'
  );

  let loggingOut = false;

  logoutButton?.addEventListener(
    'click',
    async () => {
      if (loggingOut) return;

      loggingOut = true;
      logoutButton.disabled = true;

      try {
        // Attempt to invalidate JWT on Laravel.
        await profileApi.logout(signal);
      } catch (error) {
        // Server logout may fail if the token has expired
        // or the network is unavailable.
        // The browser session is still cleared below.
      } finally {
        // Remove local JWT and patient cache.
        clearAuthToken();

        window.location.replace('/login');
      }
    },
    { signal }
  );

  // ============================================
  // CLEANUP
  // ============================================

  return () => {
    controller.abort();

    if (typeof clearProfile === 'function') {
      clearProfile();
    }
  };
}
