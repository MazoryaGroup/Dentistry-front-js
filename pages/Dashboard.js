/**
 * Dentistry — Patient Dashboard
 * Vanilla JS + Vite | FA/EN | RTL/LTR
 *
 * Booking + Jalali Calendar
 * Treatment Plans + Dental Records
 * Billing + Profile
 */

import {
  t,
  getLanguage,
  languageSwitch,
  setLanguage,
} from '../code/i18n.js';

import {
  PatientProfile,
  initPatientProfile,
} from '../components/PatientProfile.js';

import {
  dashboardAppointmentsHTML,
  initDashboardBookings,
} from '../components/DashboardBookings.js';

import {
  dashboardTreatmentPlansHTML,
  initDashboardTreatmentPlans,
} from '../components/DashboardTreatmentPlans.js';

import {
  dashboardDentalRecordsHTML,
  initDashboardDentalRecords,
} from '../components/DashboardDentalRecords.js';

import {
  dashboardBillingHTML,
  initDashboardBilling,
} from '../components/DashboardBilling.js';

import {
  initJalaliBookingCalendars,
} from '../components/JalaliBookingCalendar.js';

import { profileApi } from '../code/api.js';

import {
  clearAuthToken,
  getAuthToken,
} from '../code/auth.js';
import {
  initDashboardOverview,
} from '../components/DashboardOverview.js';

// ============================================
// STYLES
// ============================================

import '../asset/css/portal.css';
import '../asset/css/dashboard.css';
import '../asset/css/dashboard-treatments.css';
import '../asset/css/dashboard-records.css';
import '../asset/css/dashboard-billing.css';
import '../asset/css/jalali-booking-calendar.css';

// ============================================
// TRANSLATIONS
// ============================================

const copy = {
  en: {
    portal: 'Patient portal',
    workspace: 'YOUR WORKSPACE',
    general: 'GENERAL',

    overview: 'Overview',
    appointments: 'Appointments',
    treatments: 'Treatment plans',
    records: 'Dental records',
    billing: 'Payments & invoices',
    profile: 'My profile',

    menu: 'Open navigation',
    logout: 'Sign out',
    loggingOut: 'Signing out…',

    support: 'Need a hand?',
    supportText: 'Our clinic team is here to help you.',
    contact: 'Contact clinic',

    greeting: 'Welcome to your space',
    subtitle: 'Everything about your dental care, in one calm place.',

    healthTag: 'YOUR CARE, SIMPLIFIED',
    yourNextVisit: 'Your next appointment',
    noNextVisit: 'No upcoming appointment yet',
    nextVisitHint: 'When you book a visit, the details will appear here.',

    bookNewVisit: 'Book appointment',
    viewAppointments: 'View appointments',

    overviewLabel: 'AT A GLANCE',
    overviewHeading: 'Your health overview',

    upcoming: 'Upcoming visits',
    activePlans: 'Active plans',
    balance: 'Amount due',
    dataPending: 'Awaiting connection',

    quickActions: 'Quick actions',
    quickActionsCopy: 'The things you need, just a click away.',

    actionServices: 'Explore treatments',
    actionServicesCopy: 'Learn about available dental services.',

    actionProfile: 'Update your profile',
    actionProfileCopy: 'Keep your contact information current.',

    actionHelp: 'Get in touch',
    actionHelpCopy: 'Ask our team a question.',

    journey: 'Care timeline',
    journeyCopy: 'Your visits and treatment milestones will be here.',

    gentleReminderCopy:
      'Your treatment history is kept in your account. Records will appear only when available and authorized for you.',

    sectionOverviewEyebrow: 'PATIENT HOME',

    sectionAppointmentsEyebrow: 'YOUR SCHEDULE',
    appointmentTitle: 'Appointments',
    appointmentSubtitle:
      'Review future and past appointments in one place.',

    sectionTreatmentsEyebrow: 'YOUR CARE PLAN',
    treatmentTitle: 'Treatment plans',
    treatmentSubtitle:
      'Follow your treatment stages and progress.',

    sectionRecordsEyebrow: 'YOUR HEALTH FILE',
    recordsTitle: 'Dental records',
    recordsSubtitle:
      'A private home for your eligible dental history and files.',

    sectionBillingEyebrow: 'YOUR FINANCES',
    billingTitle: 'Payments & invoices',
    billingSubtitle:
      'Understand paid amounts and any upcoming payments.',

    sectionProfileEyebrow: 'YOUR ACCOUNT',
    profileTitle: 'Personal information',
    profileSubtitle:
      'Update account details and manage your contact information.',

    backHome: 'Back to website',
  },

  fa: {
    portal: 'پرتال بیماران',
    workspace: 'فضای اختصاصی شما',
    general: 'بخش‌های اصلی',

    overview: 'نمای کلی',
    appointments: 'نوبت‌های من',
    treatments: 'طرح‌های درمان',
    records: 'پرونده دندان‌پزشکی',
    billing: 'پرداخت‌ها و فاکتورها',
    profile: 'پروفایل من',

    menu: 'باز کردن منو',
    logout: 'خروج از حساب',
    loggingOut: 'در حال خروج…',

    support: 'سوالی دارید؟',
    supportText: 'تیم کلینیک آماده پاسخ‌گویی به شماست.',
    contact: 'تماس با کلینیک',

    greeting: 'به فضای شخصی خود خوش آمدید',
    subtitle:
      'همه چیز درباره مراقبت از دندان‌هایتان، در یک محیط آرام و ساده.',

    healthTag: 'مراقبت آسان‌تر از همیشه',
    yourNextVisit: 'نوبت بعدی شما',
    noNextVisit: 'هنوز نوبت آینده‌ای ثبت نشده',
    nextVisitHint:
      'پس از رزرو نوبت، جزئیات آن در این بخش نمایش داده می‌شود.',

    bookNewVisit: 'رزرو نوبت',
    viewAppointments: 'مشاهده نوبت‌ها',

    overviewLabel: 'در یک نگاه',
    overviewHeading: 'خلاصه وضعیت شما',

    upcoming: 'نوبت‌های آینده',
    activePlans: 'درمان‌های فعال',
    balance: 'مانده قابل پرداخت',
    dataPending: 'در انتظار اتصال',

    quickActions: 'دسترسی سریع',
    quickActionsCopy: 'کارهای مهم با چند کلیک ساده.',

    actionServices: 'مشاهده خدمات',
    actionServicesCopy:
      'با خدمات دندان‌پزشکی آشنا شوید.',

    actionProfile: 'ویرایش پروفایل',
    actionProfileCopy:
      'اطلاعات تماس خود را به‌روز نگه دارید.',

    actionHelp: 'ارتباط با ما',
    actionHelpCopy:
      'سوال خود را از تیم کلینیک بپرسید.',

    journey: 'مسیر درمان',
    journeyCopy:
      'سوابق مراجعه و مراحل درمان اینجا نمایش داده می‌شوند.',

    gentleReminderCopy:
      'سوابق درمان شما در حساب کاربری نگهداری می‌شود و فقط اطلاعات مجاز و در دسترس نمایش داده خواهد شد.',

    sectionOverviewEyebrow: 'خانه بیمار',

    sectionAppointmentsEyebrow: 'برنامه نوبت‌ها',
    appointmentTitle: 'نوبت‌های من',
    appointmentSubtitle:
      'نوبت‌های آینده و مراجعات قبلی را یکجا ببینید.',

    sectionTreatmentsEyebrow: 'برنامه درمان شما',
    treatmentTitle: 'طرح‌های درمان',
    treatmentSubtitle:
      'مراحل و پیشرفت درمان خود را دنبال کنید.',

    sectionRecordsEyebrow: 'پرونده سلامت شما',
    recordsTitle: 'پرونده دندان‌پزشکی',
    recordsSubtitle:
      'محیطی خصوصی برای سوابق و فایل‌های پزشکی مجاز شما.',

    sectionBillingEyebrow: 'امور مالی شما',
    billingTitle: 'پرداخت‌ها و فاکتورها',
    billingSubtitle:
      'وضعیت پرداخت‌ها و مبلغ‌های باقی‌مانده را بررسی کنید.',

    sectionProfileEyebrow: 'حساب شما',
    profileTitle: 'اطلاعات شخصی',
    profileSubtitle:
      'مشخصات حساب و اطلاعات تماس خود را مدیریت کنید.',

    backHome: 'بازگشت به سایت',
  },
};

// ============================================
// HELPERS
// ============================================

const lang = () =>
  getLanguage() === 'fa' ? 'fa' : 'en';

function tr(key) {
  const id = `dashboard.${key}`;
  const value = t(id);

  return value && value !== id
    ? value
    : (copy[lang()][key] ?? key);
}

const esc = value =>
  String(value ?? '').replace(
    /[&<>"']/g,
    c => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    })[c]
  );

const tx = key => esc(tr(key));

// ============================================
// SVG ICONS
// ============================================

const paths = {
  grid: `
    <rect x="3" y="3" width="7" height="7" rx="1.4"/>
    <rect x="14" y="3" width="7" height="7" rx="1.4"/>
    <rect x="3" y="14" width="7" height="7" rx="1.4"/>
    <rect x="14" y="14" width="7" height="7" rx="1.4"/>
  `,

  calendar: `
    <rect x="3" y="5" width="18" height="16" rx="2"/>
    <path d="M7 3v4m10-4v4M3 10h18"/>
  `,

  
tooth: `
  <path d="
    M12 4
    C10 4 9 2.5 7 2.5
    C4 2.5 2 5 2 8.5
    C2 12.5 4 21 7 21
    C9 21 8.5 13 12 13
    C15.5 13 15 21 17 21
    C20 21 22 12.5 22 8.5
    C22 5 20 2.5 17 2.5
    C15 2.5 14 4 12 4
    Z
  "/>
`,


  file: `
    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
    <path d="M13 2v7h7M8 13h8M8 17h5"/>
  `,

  card: `
    <rect x="2" y="5" width="20" height="14" rx="2"/>
    <path d="M2 10h20m-15 5h4"/>
  `,

  user: `
    <circle cx="12" cy="8" r="4"/>
    <path d="M4.5 21a7.5 7.5 0 0 1 15 0"/>
  `,

  arrow: `
    <path d="M5 12h14m-6-6 6 6-6 6"/>
  `,

  chevron: `
    <path d="m9 18 6-6-6-6"/>
  `,

  plus: `
    <path d="M12 5v14M5 12h14"/>
  `,

  menu: `
    <path d="M4 6h16M4 12h16M4 18h16"/>
  `,

  logout: `
    <path d="M10 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5m4-4 4-4-4-4m4 4H9"/>
  `,

  heart: `
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>
  `,

  shield: `
    <path d="m12 2 8 4v6c0 5.1-3.5 8.3-8 10-4.5-1.7-8-4.9-8-10V6l8-4Z"/>
    <path d="m9 12 2 2 4-4"/>
  `,

  help: `
    <circle cx="12" cy="12" r="9"/>
    <path d="M9.5 9a2.5 2.5 0 1 1 4.3 1.7c-1.1 1-1.8 1.4-1.8 3.1M12 17h.01"/>
  `,

  spark: `
    <path d="m12 2 2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2L12 2Z"/>
  `,
};

function icon(name, extra = '') {
  return `
    <svg
      class="dn-icon ${extra}"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.7"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      ${paths[name] ?? paths.grid}
    </svg>
  `;
}

// ============================================
// NAVIGATION
// ============================================

const navigation = [
  ['overview', 'overview', 'grid'],
  ['appointments', 'appointments', 'calendar'],
  ['treatments', 'treatments', 'tooth'],
  ['records', 'records', 'file'],
  ['billing', 'billing', 'card'],
  ['profile', 'profile', 'user'],
];

const validSections = new Set(
  navigation.map(([id]) => id)
);

const mobileSections = new Set([
  'overview',
  'appointments',
  'records',
  'profile',
]);

function navButton(
  id,
  key,
  symbol,
  placement
) {
  const active = id === 'overview';

  return `
    <button
      type="button"
      class="dn-nav-button${active ? ' is-active' : ''}"
      data-dashboard-tab="${id}"
      data-nav-placement="${placement}"
      aria-current="${active ? 'page' : 'false'}"
    >
      <span class="dn-nav-icon">
        ${icon(symbol)}
      </span>

      <span class="dn-nav-label">
        ${tx(key)}
      </span>

      ${
        placement === 'sidebar'
          ? `
            <span class="dn-nav-trailing">
              ${icon('chevron')}
            </span>
          `
          : ''
      }
    </button>
  `;
}

// ============================================
// SHARED COMPONENTS
// ============================================

function sectionTitle(
  eyebrow,
  heading,
  subtitle
) {
  return `
    <div class="dn-page-heading">
      <div class="dn-eyebrow">
        ${tx(eyebrow)}
      </div>

      <h1>${tx(heading)}</h1>

      <p>${tx(subtitle)}</p>
    </div>
  `;
}

function stat(symbol, key) {
  return `
    <article class="dn-stat">
      <span class="dn-stat-symbol">
        ${icon(symbol)}
      </span>

      <span class="dn-stat-label">
        ${tx(key)}
      </span>

      <strong
        data-dashboard-stat="${key}"
        aria-label="${tx('dataPending')}"
      >
        —
      </strong>

      <small>${tx('dataPending')}</small>
    </article>
  `;
}

function actionCard(
  title,
  description,
  symbol,
  href = null
) {
  const tag = href ? 'a' : 'button';

  const attributes = href
    ? `href="${href}"`
    : 'type="button" data-dashboard-action="profile"';

  return `
    <${tag}
      class="dn-action-card"
      ${attributes}
    >
      <span class="dn-action-icon">
        ${icon(symbol)}
      </span>

      <span class="dn-action-copy">
        <strong>${tx(title)}</strong>
        <small>${tx(description)}</small>
      </span>

      <span class="dn-action-arrow">
        ${icon('arrow')}
      </span>
    </${tag}>
  `;
}

function panel(
  id,
  eyebrow,
  heading,
  subtitle,
  content
) {
  return `
    <section
      class="dn-panel"
      data-dashboard-panel="${id}"
      aria-label="${tx(id)}"
      hidden
    >
      ${sectionTitle(
        eyebrow,
        heading,
        subtitle
      )}

      ${content}
    </section>
  `;
}

// ============================================
// OVERVIEW
// ============================================

function overview() {
  return `
    <section
      class="dn-panel"
      data-dashboard-panel="overview"
      aria-label="${tx('overview')}"
    >

      <div class="dn-overview-heading">
        <div>
          <span class="dn-eyebrow">
            ${tx('sectionOverviewEyebrow')}
          </span>

          <h1>
            ${tx('greeting')}

            <span class="dn-heading-spark">
              ${icon('spark')}
            </span>
          </h1>

          <p>${tx('subtitle')}</p>
        </div>

        <button
          type="button"
          class="dn-button dn-button-primary dn-overview-cta"
          data-dashboard-action="appointments"
          data-booking-start
        >
          ${icon('plus')}
          ${tx('bookNewVisit')}
          ${icon('arrow', 'dn-button-arrow')}
        </button>
      </div>

      <!-- NEXT APPOINTMENT -->

      <div class="dn-welcome-card">
        <div class="dn-welcome-content">

          <span class="dn-welcome-kicker">
            ${icon('heart')}
            ${tx('healthTag')}
          </span>

          <div class="dn-welcome-meta">

            <span class="dn-welcome-label">
              ${tx('yourNextVisit')}
            </span>

            <h2 data-dashboard-next-title>
              ${tx('noNextVisit')}
            </h2>

            <p data-dashboard-next-description>
              ${tx('nextVisitHint')}
            </p>
          </div>

          <div class="dn-welcome-actions">
            <button
              type="button"
              class="dn-button dn-button-white"
              data-dashboard-action="appointments"
            >
              ${tx('viewAppointments')}
              ${icon('arrow')}
            </button>
          </div>
        </div>

        <div
          class="dn-welcome-art"
          aria-hidden="true"
        >
          <span class="dn-orbit dn-orbit-one"></span>
          <span class="dn-orbit dn-orbit-two"></span>

          <span class="dn-tooth-illustration">
            ${icon('tooth')}
          </span>

          <span class="dn-floating-mark dn-floating-mark-a">
            ${icon('spark')}
          </span>

          <span class="dn-floating-mark dn-floating-mark-b">
            ${icon('plus')}
          </span>
        </div>
      </div>

      <!-- STATS -->

      <div class="dn-section-heading">
        <div>
          <span class="dn-eyebrow">
            ${tx('overviewLabel')}
          </span>

          <h2>${tx('overviewHeading')}</h2>
        </div>
      </div>

      <div class="dn-stat-grid">
        ${stat('calendar', 'upcoming')}
        ${stat('tooth', 'activePlans')}
        ${stat('card', 'balance')}
      </div>

      <!-- QUICK ACTIONS -->

      <div class="dn-overview-columns">

        <section class="dn-surface-card dn-actions-area">
          <div class="dn-card-title">
            <h2>${tx('quickActions')}</h2>
            <p>${tx('quickActionsCopy')}</p>
          </div>

          <div class="dn-action-list">

            ${actionCard(
              'actionServices',
              'actionServicesCopy',
              'calendar',
              '/service'
            )}

            ${actionCard(
              'actionProfile',
              'actionProfileCopy',
              'user'
            )}

            ${actionCard(
              'actionHelp',
              'actionHelpCopy',
              'help',
              '/contact-us'
            )}
          </div>
        </section>

        <!-- CARE TIMELINE -->

        <section class="dn-surface-card dn-journey-area">
          <div class="dn-card-title">
            <h2>${tx('journey')}</h2>
            <p>${tx('journeyCopy')}</p>
          </div>

          <div
  class="dn-journey-placeholder"
  data-dashboard-timeline
  aria-live="polite"
>
  <p class="dn-overview-timeline-empty">
    ${lang() === 'fa'
      ? 'در حال دریافت مسیر درمان…'
      : 'Loading your care timeline…'}
  </p>
</div>
        </section>

      </div>
    </section>
  `;
}

// ============================================
// MAIN DASHBOARD HTML
// ============================================

export function Dashboard() {
  return `
    <main
      class="dentistry-portal dn-dashboard"
      data-portal-page="dashboard"
      data-no-translate
      dir="${lang() === 'fa' ? 'rtl' : 'ltr'}"
    >
      <div class="dn-dashboard-shell">

        <!-- MOBILE OVERLAY -->

        <div
          class="dn-sidebar-scrim"
          data-sidebar-scrim
          hidden
        ></div>

        <!-- SIDEBAR -->

        <aside
          class="dn-sidebar"
          id="dn-dashboard-sidebar"
          aria-label="${tx('portal')}"
        >
          <a
            href="/"
            class="dn-brand"
            aria-label="${tx('backHome')}"
          >
            <img
              src="/asset/img/logo.png"
              alt="Dentistry"
              loading="eager"
            />

            <span>${tx('portal')}</span>
          </a>

          <div class="dn-sidebar-scroll">
            <div class="dn-nav-caption">
              ${tx('workspace')}
            </div>

            <nav
              class="dn-nav"
              aria-label="${tx('general')}"
            >
              ${navigation
                .map(([id, key, symbol]) =>
                  navButton(
                    id,
                    key,
                    symbol,
                    'sidebar'
                  )
                )
                .join('')}
            </nav>
          </div>

          <div class="dn-sidebar-footer">
            <div class="dn-support-panel">

              <div class="dn-support-symbol">
                ${icon('help')}
              </div>

              <strong>${tx('support')}</strong>
              <p>${tx('supportText')}</p>

              <a href="/contact-us">
                ${tx('contact')}
                ${icon('arrow')}
              </a>
            </div>

            <button
              type="button"
              class="dn-logout"
              data-dashboard-logout
            >
              ${icon('logout')}

              <span data-logout-label>
                ${tx('logout')}
              </span>
            </button>
          </div>
        </aside>

        <!-- MAIN -->

        <div class="dn-main">

          <!-- TOPBAR -->

          <header class="dn-topbar">
            <div class="dn-topbar-left">

              <button
                type="button"
                class="dn-menu-button"
                data-sidebar-toggle
                aria-label="${tx('menu')}"
                aria-expanded="false"
                aria-controls="dn-dashboard-sidebar"
              >
                ${icon('menu')}
              </button>

              <div class="dn-breadcrumb">
                <span>${tx('portal')}</span>

                <span class="dn-breadcrumb-separator">
                  /
                </span>

                <strong data-current-section>
                  ${tx('overview')}
                </strong>
              </div>
            </div>

            <div class="dn-topbar-right">

              <a
                class="dn-topbar-site-link"
                href="/"
              >
                ${tx('backHome')}
              </a>

              <div class="dn-topbar-lang">
                ${languageSwitch(
                  'dn-language-switch'
                )}
              </div>

              <button
                type="button"
                class="dn-topbar-avatar"
                data-dashboard-action="profile"
                aria-label="${tx('profile')}"
              >
                ${icon('user')}
              </button>
            </div>
          </header>

          <!-- DASHBOARD CONTENT -->

          <div
            class="dn-content"
            id="dn-dashboard-content"
          >

            ${overview()}

            ${panel(
              'appointments',
              'sectionAppointmentsEyebrow',
              'appointmentTitle',
              'appointmentSubtitle',
              dashboardAppointmentsHTML()
            )}

            ${panel(
              'treatments',
              'sectionTreatmentsEyebrow',
              'treatmentTitle',
              'treatmentSubtitle',
              dashboardTreatmentPlansHTML()
            )}

            ${panel(
              'records',
              'sectionRecordsEyebrow',
              'recordsTitle',
              'recordsSubtitle',
              dashboardDentalRecordsHTML()
            )}

            ${panel(
              'billing',
              'sectionBillingEyebrow',
              'billingTitle',
              'billingSubtitle',
              dashboardBillingHTML()
            )}

            ${panel(
              'profile',
              'sectionProfileEyebrow',
              'profileTitle',
              'profileSubtitle',
              `
                <div class="dn-profile-surface">
                  ${PatientProfile()}
                </div>
              `
            )}

            <div class="dn-content-footer">
              <span>
                © ${new Date().getFullYear()} Dentistry
              </span>

              <a href="/contact-us">
                ${tx('contact')}
              </a>
            </div>

          </div>
        </div>

        <!-- MOBILE BOTTOM NAVIGATION -->

        <nav
          class="dn-mobile-bar"
          aria-label="${tx('general')}"
        >
          ${navigation
            .filter(([id]) =>
              mobileSections.has(id)
            )
            .map(([id, key, symbol]) =>
              navButton(
                id,
                key,
                symbol,
                'mobile'
              )
            )
            .join('')}
        </nav>

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

  // ==========================================
  // AUTH CHECK — BEFORE ANY API MODULE
  // ==========================================

  if (!getAuthToken()) {
    controller.abort();
    window.location.replace('/login');

    return () => {};
  }

  const $ = selector =>
    root.querySelector(selector);

  const buttons = [
    ...root.querySelectorAll(
      '[data-dashboard-tab]'
    ),
  ];

  const panels = [
    ...root.querySelectorAll(
      '[data-dashboard-panel]'
    ),
  ];

  const sidebar = $('#dn-dashboard-sidebar');
  const scrim = $('[data-sidebar-scrim]');
  const menuButton = $('[data-sidebar-toggle]');

  let profileCleanup = null;
  let profileInitialized = false;
  let loggingOut = false;
  let priorBodyOverflow = null;

  // ==========================================
  // INITIALIZE BOOKING
  // ==========================================

  const bookingsCleanup = initDashboardBookings(
    root,
    signal
  );

  // ==========================================
  // INITIALIZE JALALI CALENDAR
  // ==========================================

  const calendarCleanup =
    initJalaliBookingCalendars(
      root,
      signal
    );

  // ==========================================
  // INITIALIZE TREATMENT PLANS
  // ==========================================

  const treatments =
    initDashboardTreatmentPlans(
      root,
      signal
    );

  // ==========================================
  // INITIALIZE DENTAL RECORDS
  // ==========================================

  const records =
    initDashboardDentalRecords(
      root,
      signal
    );

  // ==========================================
  // INITIALIZE BILLING
  // ==========================================

  const billing =
    initDashboardBilling(
      root,
      signal
    );
const overviewCleanup = initDashboardOverview(
  root,
  signal
);
  // ==========================================
  // MOBILE SIDEBAR
  // ==========================================

  function closeMenu(focus = false) {
    const wasOpen = sidebar.classList.contains('is-open');
    if (!wasOpen) return;

    sidebar.classList.remove('is-open');
    scrim.hidden = true;
    menuButton.setAttribute('aria-expanded', 'false');

    if (priorBodyOverflow !== null) {
      document.body.style.overflow = priorBodyOverflow;
      priorBodyOverflow = null;
    }
    if (focus) menuButton.focus();
  }

  function openMenu() {
    if (sidebar.classList.contains('is-open')) return;
    priorBodyOverflow = document.body.style.overflow;
    sidebar.classList.add('is-open');
    scrim.hidden = false;
    menuButton.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    sidebar.querySelector('.dn-nav-button')?.focus();
  }

  // ==========================================
  // SECTION NAVIGATION
  // ==========================================

  function showSection(
    requested,
    updateUrl = true,
    scroll = true
  ) {
    const section = validSections.has(requested)
      ? requested
      : 'overview';

    // Update selected navigation item.
    buttons.forEach(button => {
      const active =
        button.dataset.dashboardTab === section;

      button.classList.toggle(
        'is-active',
        active
      );

      button.setAttribute(
        'aria-current',
        active ? 'page' : 'false'
      );
    });

    // Show only the selected panel.
    panels.forEach(panel => {
      panel.hidden =
        panel.dataset.dashboardPanel !== section;
    });

    // Update breadcrumb.
    const label =
      navigation.find(
        ([id]) => id === section
      )?.[1] ?? 'overview';

    $('[data-current-section]').textContent =
      tr(label);

    // Preserve selected tab in URL.
    if (updateUrl) {
      const url = new URL(
        window.location.href
      );

      if (section === 'overview') {
        url.searchParams.delete('section');
      } else {
        url.searchParams.set(
          'section',
          section
        );
      }

      window.history.replaceState(
        window.history.state,
        '',
        url.pathname +
          url.search +
          url.hash
      );
    }

    closeMenu();

    // ========================================
    // LAZY LOAD REAL API DATA
    // ========================================

    if (section === 'treatments') treatments?.load?.();
    if (section === 'records') records?.load?.();
    if (section === 'billing') billing?.load?.();

    // ========================================
    // INITIALIZE PROFILE ONCE
    // ========================================

    if (
      section === 'profile' &&
      !profileInitialized
    ) {
      try {
        profileCleanup =
          initPatientProfile(root) || null;

        profileInitialized = true;

      } catch (error) {
        console.error(
          'Patient profile initialization:',
          error
        );
      }
    }

    // ========================================
    // SCROLL TO ACTIVE SECTION
    // ========================================

    if (scroll) {
      const reduced =
        window.matchMedia?.(
          '(prefers-reduced-motion: reduce)'
        )?.matches;

      $('#dn-dashboard-content')
        ?.scrollIntoView({
          behavior: reduced
            ? 'auto'
            : 'smooth',

          block: 'start',
        });
    }
  }

  // ==========================================
  // TAB AND ACTION EVENTS
  // ==========================================

  root.addEventListener(
    'click',
    event => {
      const tab = event.target.closest(
        '[data-dashboard-tab]'
      );

      if (tab && root.contains(tab)) {
        showSection(
          tab.dataset.dashboardTab
        );

        return;
      }

      const action = event.target.closest(
        '[data-dashboard-action]'
      );

      if (
        action &&
        root.contains(action)
      ) {
        showSection(
          action.dataset.dashboardAction
        );
      }
    },
    { signal }
  );

  // ==========================================
  // MOBILE MENU EVENTS
  // ==========================================

  menuButton.addEventListener(
    'click',
    () => {
      if (
        sidebar.classList.contains('is-open')
      ) {
        closeMenu(true);
      } else {
        openMenu();
      }
    },
    { signal }
  );

  scrim.addEventListener(
    'click',
    () => closeMenu(true),
    { signal }
  );

  document.addEventListener(
    'keydown',
    event => {
      if (
        event.key === 'Escape' &&
        sidebar.classList.contains('is-open')
      ) {
        closeMenu(true);
      }
    },
    { signal }
  );

  // ==========================================
  // LANGUAGE SWITCH
  // ==========================================

  root
    .querySelectorAll('[data-set-language]')
    .forEach(button => {
      button.addEventListener(
        'click',
        event => {
          event.stopPropagation();

          const next =
            button.dataset.setLanguage;

          if (
            !['fa', 'en'].includes(next) ||
            next === lang()
          ) {
            return;
          }

          setLanguage(
            next,
            () => window.dispatchEvent(
              new PopStateEvent('popstate')
            )
          );
        },
        { signal }
      );
    });

  // ==========================================
  // RESTORE SELECTED TAB FROM URL
  // ==========================================

  const requested = new URLSearchParams(
    window.location.search
  ).get('section');

  showSection(
    requested,
    false,
    false
  );

  // ==========================================
  // LOGOUT
  // ==========================================

  const logoutButton = $(
    '[data-dashboard-logout]'
  );

  logoutButton.addEventListener(
    'click',
    async () => {
      if (loggingOut) return;

      loggingOut = true;
      logoutButton.disabled = true;

      $('[data-logout-label]').textContent =
        tr('loggingOut');

      try {
        await profileApi.logout(signal);

      } catch (error) {
        console.warn(
          'Logout API unavailable; local token will be cleared.',
          error
        );

      } finally {
        clearAuthToken();

        window.location.replace('/login');
      }
    },
    { signal }
  );

  // ==========================================
  // COMPLETE CLEANUP
  // ==========================================

  return () => {
    controller.abort();

    if (priorBodyOverflow !== null) {
      document.body.style.overflow = priorBodyOverflow;
      priorBodyOverflow = null;
    }

    // Jalali calendar
    if (
      typeof calendarCleanup === 'function'
    ) {
      calendarCleanup();
    }

    // Bookings
    if (
      typeof bookingsCleanup === 'function'
    ) {
      bookingsCleanup();
    }

    // Treatment plans
    treatments?.cleanup?.();

    // Dental records
    records?.cleanup?.();

    // Billing
    billing?.cleanup?.();

    // Patient profile
    if (
      typeof profileCleanup === 'function'
    ) {
      profileCleanup();
    }
    if (typeof overviewCleanup === 'function') {
  overviewCleanup();
}
  };
}
