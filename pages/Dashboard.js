/**
 * Dentistry — Patient Dashboard / Premium UI shell
 * UI-first: no sample appointments, treatments, records or prices.
 * Existing authenticated PatientProfile + logout remain connected.
 * API-ready hooks: data-dashboard-*; sections: overview, appointments,
 * treatments, records, billing, profile.
 */
import {
  t, getLanguage, languageSwitch, setLanguage,
} from '../code/i18n.js';
import {
  PatientProfile,
  initPatientProfile,
} from '../components/PatientProfile.js';
import { profileApi } from '../code/api.js';
import { clearAuthToken, getAuthToken } from '../code/auth.js';
import '../asset/css/portal.css';
import '../asset/css/dashboard.css';

const fallback = {
  en: {
    portal: 'Patient portal', workspace: 'YOUR WORKSPACE', general: 'GENERAL', account: 'ACCOUNT',
    overview: 'Overview', appointments: 'Appointments', treatments: 'Treatment plans',
    records: 'Dental records', billing: 'Payments & invoices', profile: 'My profile',
    menu: 'Open navigation', close: 'Close navigation', language: 'Language',
    logout: 'Sign out', loggingOut: 'Signing out…', support: 'Need a hand?',
    supportText: 'Our clinic team is here to help you.', contact: 'Contact clinic',
    greeting: 'Welcome to your space', subtitle: 'Everything about your dental care, in one calm place.',
    healthTag: 'YOUR CARE, SIMPLIFIED', yourNextVisit: 'Your next appointment',
    noNextVisit: 'No upcoming appointment yet', nextVisitHint: 'When you book a visit, the details will appear here.',
    exploreServices: 'Explore services', viewAppointments: 'View appointments',
    overviewLabel: 'AT A GLANCE', overviewHeading: 'Your health overview',
    upcoming: 'Upcoming visits', activePlans: 'Active plans', balance: 'Amount due',
    dataPending: 'Awaiting connection', currency: '—',
    quickActions: 'Quick actions', quickActionsCopy: 'The things you need, just a click away.',
    actionServices: 'Explore treatments', actionServicesCopy: 'Learn about available dental services.',
    actionProfile: 'Update your profile', actionProfileCopy: 'Keep your contact information current.',
    actionHelp: 'Get in touch', actionHelpCopy: 'Ask our team a question.',
    journey: 'Care timeline', journeyCopy: 'Your visits and treatment milestones will be here.',
    gentleReminder: 'A little peace of mind', gentleReminderCopy: 'Your treatment history is kept in your account. Records will appear only when available and authorized for you.',
    sectionOverviewEyebrow: 'PATIENT HOME',
    sectionAppointmentsEyebrow: 'YOUR SCHEDULE', appointmentTitle: 'Appointments',
    appointmentSubtitle: 'Review future and past appointments in one place.',
    appointmentsEmptyTitle: 'Your schedule starts here', appointmentsEmptyCopy: 'You have no appointment information to display yet. Once appointment services are connected, your visits will appear here.',
    sectionTreatmentsEyebrow: 'YOUR CARE PLAN', treatmentTitle: 'Treatment plans',
    treatmentSubtitle: 'Follow your treatment stages and progress.',
    treatmentsEmptyTitle: 'Your treatment plan, made clear', treatmentsEmptyCopy: 'Treatment plans shared with you by the clinic will appear here once available.',
    sectionRecordsEyebrow: 'YOUR HEALTH FILE', recordsTitle: 'Dental records',
    recordsSubtitle: 'A private home for your eligible dental history and files.',
    recordsEmptyTitle: 'Your dental history belongs here', recordsEmptyCopy: 'Doctor-approved records, documents and dental images will be shown here when available to you.',
    privacyNote: 'Only information authorized for the patient account will be displayed.',
    sectionBillingEyebrow: 'YOUR FINANCES', billingTitle: 'Payments & invoices',
    billingSubtitle: 'Understand paid amounts and any upcoming payments.',
    billingEmptyTitle: 'Clear, simple billing', billingEmptyCopy: 'Your invoices, deposits and payment history will appear when the billing system is connected.',
    sectionProfileEyebrow: 'YOUR ACCOUNT', profileTitle: 'Personal information',
    profileSubtitle: 'Update account details and manage your contact information.',
    badgeSoon: 'Ready for integration', backHome: 'Back to website',
  },
  fa: {
    portal: 'پرتال بیماران', workspace: 'فضای اختصاصی شما', general: 'بخش‌های اصلی', account: 'حساب کاربری',
    overview: 'نمای کلی', appointments: 'نوبت‌های من', treatments: 'طرح‌های درمان',
    records: 'پرونده دندان‌پزشکی', billing: 'پرداخت‌ها و فاکتورها', profile: 'پروفایل من',
    menu: 'باز کردن منو', close: 'بستن منو', language: 'زبان',
    logout: 'خروج از حساب', loggingOut: 'در حال خروج…', support: 'سوالی دارید؟',
    supportText: 'تیم کلینیک آماده پاسخ‌گویی به شماست.', contact: 'تماس با کلینیک',
    greeting: 'به فضای شخصی خود خوش آمدید', subtitle: 'همه چیز درباره مراقبت از دندان‌هایتان، در یک محیط آرام و ساده.',
    healthTag: 'مراقبت آسان‌تر از همیشه', yourNextVisit: 'نوبت بعدی شما',
    noNextVisit: 'هنوز نوبت آینده‌ای ثبت نشده', nextVisitHint: 'پس از رزرو نوبت، جزئیات آن در این بخش نمایش داده می‌شود.',
    exploreServices: 'مشاهده خدمات', viewAppointments: 'مشاهده نوبت‌ها',
    overviewLabel: 'در یک نگاه', overviewHeading: 'خلاصه وضعیت شما',
    upcoming: 'نوبت‌های آینده', activePlans: 'درمان‌های فعال', balance: 'مانده قابل پرداخت',
    dataPending: 'در انتظار اتصال', currency: '—',
    quickActions: 'دسترسی سریع', quickActionsCopy: 'کارهای مهم با چند کلیک ساده.',
    actionServices: 'مشاهده خدمات', actionServicesCopy: 'با خدمات دندان‌پزشکی آشنا شوید.',
    actionProfile: 'ویرایش پروفایل', actionProfileCopy: 'اطلاعات تماس خود را به‌روز نگه دارید.',
    actionHelp: 'ارتباط با ما', actionHelpCopy: 'سوال خود را از تیم کلینیک بپرسید.',
    journey: 'مسیر درمان', journeyCopy: 'سوابق مراجعه و مراحل درمان اینجا نمایش داده می‌شوند.',
    gentleReminder: 'اطمینان خاطر شما', gentleReminderCopy: 'سوابق درمان شما در حساب کاربری نگهداری می‌شود و فقط اطلاعات مجاز و در دسترس نمایش داده خواهد شد.',
    sectionOverviewEyebrow: 'خانه بیمار',
    sectionAppointmentsEyebrow: 'برنامه نوبت‌ها', appointmentTitle: 'نوبت‌های من',
    appointmentSubtitle: 'نوبت‌های آینده و مراجعات قبلی را یکجا ببینید.',
    appointmentsEmptyTitle: 'برنامه نوبت‌های شما از اینجا شروع می‌شود', appointmentsEmptyCopy: 'در حال حاضر اطلاعاتی برای نمایش وجود ندارد. پس از اتصال سیستم نوبت‌دهی، نوبت‌ها اینجا نمایش داده می‌شوند.',
    sectionTreatmentsEyebrow: 'برنامه درمان شما', treatmentTitle: 'طرح‌های درمان',
    treatmentSubtitle: 'مراحل و پیشرفت درمان خود را دنبال کنید.',
    treatmentsEmptyTitle: 'برنامه درمانی روشن و منظم', treatmentsEmptyCopy: 'طرح‌های درمانی که کلینیک با شما به اشتراک می‌گذارد، در این بخش نمایش داده خواهد شد.',
    sectionRecordsEyebrow: 'پرونده سلامت شما', recordsTitle: 'پرونده دندان‌پزشکی',
    recordsSubtitle: 'محیطی خصوصی برای سوابق و فایل‌های پزشکی مجاز شما.',
    recordsEmptyTitle: 'سوابق دندان‌پزشکی شما اینجا قرار می‌گیرد', recordsEmptyCopy: 'سوابق، مدارک و تصاویر دندان‌پزشکی که پزشک اجازه دسترسی داده باشد، در این قسمت نمایش داده می‌شوند.',
    privacyNote: 'فقط اطلاعاتی نمایش داده می‌شود که دسترسی آن برای حساب بیمار مجاز باشد.',
    sectionBillingEyebrow: 'امور مالی شما', billingTitle: 'پرداخت‌ها و فاکتورها',
    billingSubtitle: 'وضعیت پرداخت‌ها و مبلغ‌های باقی‌مانده را بررسی کنید.',
    billingEmptyTitle: 'صورت‌حساب شفاف و ساده', billingEmptyCopy: 'فاکتورها، بیعانه‌ها و سوابق پرداخت پس از اتصال سیستم مالی در این بخش نمایش داده می‌شوند.',
    sectionProfileEyebrow: 'حساب شما', profileTitle: 'اطلاعات شخصی',
    profileSubtitle: 'مشخصات حساب و اطلاعات تماس خود را مدیریت کنید.',
    badgeSoon: 'آماده اتصال', backHome: 'بازگشت به سایت',
  },
};

const LANG = () => getLanguage() === 'fa' ? 'fa' : 'en';
const html = value => String(value ?? '').replace(/[&<>"']/g, s => ({
  '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;',
})[s]);
function tr(key) {
  const phrase = t(`dashboard.${key}`);
  return phrase === `dashboard.${key}` ? fallback[LANG()][key] ?? key : phrase;
}
const tx = key => html(tr(key));

const paths = {
  grid:'<rect x="3" y="3" width="7" height="7" rx="1.4"/><rect x="14" y="3" width="7" height="7" rx="1.4"/><rect x="3" y="14" width="7" height="7" rx="1.4"/><rect x="14" y="14" width="7" height="7" rx="1.4"/>',
  calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/>',
  tooth:'<path d="M12 4c2.4 0 3.2-1.3 5.7-1.3C22.5 2.7 24 6.6 22.5 11c-1.3 4-2.4 10-5.6 10-2 0-2.2-7-4.9-7S9.1 21 7.1 21c-3.2 0-4.3-6-5.6-10C0 6.6 1.5 2.7 6.3 2.7 8.8 2.7 9.6 4 12 4Z"/>',
  file:'<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M13 2v7h7M8 13h8M8 17h5"/>',
  card:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20m-15 5h4"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4.5 21a7.5 7.5 0 0 1 15 0"/>',
  arrow:'<path d="M5 12h14m-6-6 6 6-6 6"/>',
  chevron:'<path d="m9 18 6-6-6-6"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',
  close:'<path d="M18 6 6 18M6 6l12 12"/>',
  logout:'<path d="M10 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5m4-4 4-4-4-4m4 4H9"/>',
  heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  shield:'<path d="m12 2 8 4v6c0 5.1-3.5 8.3-8 10-4.5-1.7-8-4.9-8-10V6l8-4Z"/><path d="m9 12 2 2 4-4"/>',
  help:'<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 4.3 1.7c-1.1 1-1.8 1.4-1.8 3.1M12 17h.01"/>',
  spark:'<path d="m12 2 2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2L12 2Z"/>',
};
const icon = (key, className='') => `<svg class="dn-icon ${className}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[key] || paths.grid}</svg>`;

const nav = [
  ['overview','overview','grid'],
  ['appointments','appointments','calendar'],
  ['treatments','treatments','tooth'],
  ['records','records','file'],
  ['billing','billing','card'],
  ['profile','profile','user'],
];
const validSections = new Set(nav.map(([id])=>id));
const primaryMobile = new Set(['overview','appointments','records','profile']);

function navButton(id, key, symbol, variant = '') {
  const active = id === 'overview';
  return `<button type="button" class="dn-nav-button${active ? ' is-active' : ''}" data-dashboard-tab="${id}" aria-current="${active ? 'page' : 'false'}" ${variant ? `data-nav-placement="${variant}"` : ''}>
    <span class="dn-nav-icon">${icon(symbol)}</span><span class="dn-nav-label">${tx(key)}</span>
    ${variant === 'sidebar' ? `<span class="dn-nav-trailing">${icon('chevron')}</span>` : ''}
  </button>`;
}
function sectionTitle(eyebrow, heading, subtitle) {
  return `<div class="dn-page-heading"><div class="dn-eyebrow">${tx(eyebrow)}</div><h1>${tx(heading)}</h1><p>${tx(subtitle)}</p></div>`;
}
function stat(iconName, title) {
  return `<article class="dn-stat"><span class="dn-stat-symbol">${icon(iconName)}</span><span class="dn-stat-label">${tx(title)}</span><strong data-dashboard-stat="${title}" aria-label="${tx('dataPending')}">—</strong><small>${tx('dataPending')}</small></article>`;
}
function emptyView(iconName, title, body, action=false) {
  return `<div class="dn-empty-state" data-dashboard-empty>
    <div class="dn-empty-visual" aria-hidden="true"><span>${icon(iconName)}</span><i></i><i></i></div>
    <h2>${tx(title)}</h2><p>${tx(body)}</p>
    ${action ? `<a class="dn-button dn-button-primary" href="/service">${icon('plus')}${tx('exploreServices')}${icon('arrow','dn-button-arrow')}</a>` : ''}
  </div>`;
}
function actionCard(key, description, symbol, type, href) {
  const element = type === 'tab' ? `button type="button" data-dashboard-action="profile"` : `a href="${href}"`;
  const closing = type === 'tab' ? 'button' : 'a';
  return `<${element} class="dn-action-card"><span class="dn-action-icon">${icon(symbol)}</span><span class="dn-action-copy"><strong>${tx(key)}</strong><small>${tx(description)}</small></span><span class="dn-action-arrow">${icon('arrow')}</span></${closing}>`;
}

export function Dashboard() {
  return `<main class="dentistry-portal dn-dashboard" data-portal-page="dashboard" data-no-translate dir="${LANG()==='fa' ? 'rtl' : 'ltr'}">
    <div class="dn-dashboard-shell">
      <div class="dn-sidebar-scrim" data-sidebar-scrim hidden></div>
      <aside class="dn-sidebar" id="dn-dashboard-sidebar" aria-label="${tx('portal')}">
        <a href="/" class="dn-brand" aria-label="${tx('backHome')}"><img src="/asset/img/logo.png" alt="Dentistry" loading="eager"/><span>${tx('portal')}</span></a>
        <div class="dn-sidebar-scroll">
          <div class="dn-nav-caption">${tx('workspace')}</div>
          <nav class="dn-nav" aria-label="${tx('general')}">
            ${nav.map(([id,key,symbol])=>navButton(id,key,symbol,'sidebar')).join('')}
          </nav>
        </div>
        <div class="dn-sidebar-footer">
          <div class="dn-support-panel"><div class="dn-support-symbol">${icon('help')}</div><strong>${tx('support')}</strong><p>${tx('supportText')}</p><a href="/contact-us">${tx('contact')}${icon('arrow')}</a></div>
          <button type="button" class="dn-logout" data-dashboard-logout>${icon('logout')}<span data-logout-label>${tx('logout')}</span></button>
        </div>
      </aside>
      <div class="dn-main">
        <header class="dn-topbar">
          <div class="dn-topbar-left"><button type="button" class="dn-menu-button" data-sidebar-toggle aria-label="${tx('menu')}" aria-expanded="false" aria-controls="dn-dashboard-sidebar">${icon('menu')}</button><div class="dn-breadcrumb"><span>${tx('portal')}</span><span class="dn-breadcrumb-separator">/</span><strong data-current-section>${tx('overview')}</strong></div></div>
          <div class="dn-topbar-right"><a class="dn-topbar-site-link" href="/">${tx('backHome')}</a><div class="dn-topbar-lang">${languageSwitch('dn-language-switch')}</div><button type="button" class="dn-topbar-avatar" data-dashboard-action="profile" aria-label="${tx('profile')}">${icon('user')}</button></div>
        </header>
        <div class="dn-content" id="dn-dashboard-content">
          <section class="dn-panel" data-dashboard-panel="overview" aria-label="${tx('overview')}">
            <div class="dn-overview-heading"><div><span class="dn-eyebrow">${tx('sectionOverviewEyebrow')}</span><h1>${tx('greeting')}<span class="dn-heading-spark">${icon('spark')}</span></h1><p>${tx('subtitle')}</p></div><a href="/service" class="dn-button dn-button-primary dn-overview-cta">${icon('plus')}${tx('exploreServices')}${icon('arrow','dn-button-arrow')}</a></div>
            <div class="dn-welcome-card">
              <div class="dn-welcome-content"><span class="dn-welcome-kicker">${icon('heart')}${tx('healthTag')}</span><div class="dn-welcome-meta"><span class="dn-welcome-label">${tx('yourNextVisit')}</span><h2 data-dashboard-next-title>${tx('noNextVisit')}</h2><p data-dashboard-next-description>${tx('nextVisitHint')}</p></div><div class="dn-welcome-actions"><button type="button" data-dashboard-action="appointments" class="dn-button dn-button-white">${tx('viewAppointments')}${icon('arrow')}</button></div></div>
              <div class="dn-welcome-art" aria-hidden="true"><span class="dn-orbit dn-orbit-one"></span><span class="dn-orbit dn-orbit-two"></span><span class="dn-tooth-illustration">${icon('tooth')}</span><span class="dn-floating-mark dn-floating-mark-a">${icon('spark')}</span><span class="dn-floating-mark dn-floating-mark-b">${icon('plus')}</span></div>
            </div>
            <div class="dn-section-heading"><div><span class="dn-eyebrow">${tx('overviewLabel')}</span><h2>${tx('overviewHeading')}</h2></div></div>
            <div class="dn-stat-grid">${stat('calendar','upcoming')}${stat('tooth','activePlans')}${stat('card','balance')}</div>
            <div class="dn-overview-columns"><section class="dn-surface-card dn-actions-area"><div class="dn-card-title"><h2>${tx('quickActions')}</h2><p>${tx('quickActionsCopy')}</p></div><div class="dn-action-list">
              ${actionCard('actionServices','actionServicesCopy','calendar','link','/service')}
              ${actionCard('actionProfile','actionProfileCopy','user','tab','')}
              ${actionCard('actionHelp','actionHelpCopy','help','link','/contact-us')}
            </div></section>
            <section class="dn-surface-card dn-journey-area"><div class="dn-card-title"><h2>${tx('journey')}</h2><p>${tx('journeyCopy')}</p></div><div class="dn-journey-placeholder"><div class="dn-journey-track"><span>${icon('calendar')}</span><i></i><span>${icon('tooth')}</span><i></i><span>${icon('shield')}</span></div><div class="dn-journey-note">${icon('shield')}<span>${tx('gentleReminderCopy')}</span></div></div></section></div>
          </section>
          <section class="dn-panel" data-dashboard-panel="appointments" aria-label="${tx('appointments')}" hidden>${sectionTitle('sectionAppointmentsEyebrow','appointmentTitle','appointmentSubtitle')}${emptyView('calendar','appointmentsEmptyTitle','appointmentsEmptyCopy',true)}</section>
          <section class="dn-panel" data-dashboard-panel="treatments" aria-label="${tx('treatments')}" hidden>${sectionTitle('sectionTreatmentsEyebrow','treatmentTitle','treatmentSubtitle')}${emptyView('tooth','treatmentsEmptyTitle','treatmentsEmptyCopy')}</section>
          <section class="dn-panel" data-dashboard-panel="records" aria-label="${tx('records')}" hidden>${sectionTitle('sectionRecordsEyebrow','recordsTitle','recordsSubtitle')}${emptyView('file','recordsEmptyTitle','recordsEmptyCopy')}<p class="dn-private-note">${icon('shield')}${tx('privacyNote')}</p></section>
          <section class="dn-panel" data-dashboard-panel="billing" aria-label="${tx('billing')}" hidden>${sectionTitle('sectionBillingEyebrow','billingTitle','billingSubtitle')}${emptyView('card','billingEmptyTitle','billingEmptyCopy')}</section>
          <section class="dn-panel" data-dashboard-panel="profile" aria-label="${tx('profile')}" hidden>${sectionTitle('sectionProfileEyebrow','profileTitle','profileSubtitle')}<div class="dn-profile-surface">${PatientProfile()}</div></section>
          <div class="dn-content-footer"><span>© ${new Date().getFullYear()} Dentistry</span><a href="/contact-us">${tx('contact')}</a></div>
        </div>
      </div>
      <nav class="dn-mobile-bar" aria-label="${tx('general')}">${nav.filter(([id])=>primaryMobile.has(id)).map(([id,key,symbol])=>navButton(id,key,symbol,'mobile')).join('')}</nav>
    </div>
  </main>`;
}

// Dashboard no longer simulates medical/financial data. Use the existing
// profile component only after the patient explicitly opens their profile.
export function initDashboard() {
  const root = document.querySelector('[data-portal-page="dashboard"]');
  if (!root) return () => {};
  const controller = new AbortController();
  const { signal } = controller;
  if (!getAuthToken()) {
    window.location.replace('/login');
    return () => controller.abort();
  }
  const $ = selector => root.querySelector(selector);
  const buttons = [...root.querySelectorAll('[data-dashboard-tab]')];
  const panels = [...root.querySelectorAll('[data-dashboard-panel]')];
  const sidebar = $('#dn-dashboard-sidebar');
  const scrim = $('[data-sidebar-scrim]');
  const menuButton = $('[data-sidebar-toggle]');
  let profileCleanup = null;
  let loggingOut = false;
  let wasScrolled = false;

  function closeMenu(restoreFocus=false) {
    sidebar.classList.remove('is-open');
    scrim.hidden = true;
    menuButton.setAttribute('aria-expanded','false');
    document.body.style.overflow = '';
    if (restoreFocus && wasScrolled) menuButton.focus();
    wasScrolled = false;
  }
  function openMenu() {
    sidebar.classList.add('is-open');
    scrim.hidden = false;
    menuButton.setAttribute('aria-expanded','true');
    document.body.style.overflow = 'hidden';
    wasScrolled = true;
    sidebar.querySelector('.dn-nav-button')?.focus();
  }
  function showSection(section, changeUrl = true, scroll = true) {
    if (!validSections.has(section)) section = 'overview';
    buttons.forEach(button => {
      const active = button.dataset.dashboardTab === section;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-current',active ? 'page' : 'false');
    });
    panels.forEach(panel => { panel.hidden = panel.dataset.dashboardPanel !== section; });
    const label = nav.find(([id]) => id === section)?.[1];
    $('[data-current-section]').textContent = label ? tr(label) : tr('overview');
    if (changeUrl) {
      const url = new URL(window.location.href);
      if (section === 'overview') url.searchParams.delete('section');
      else url.searchParams.set('section', section);
      window.history.replaceState(window.history.state, '', url.pathname + url.search + url.hash);
    }
    closeMenu();
    if (section === 'profile' && !profileCleanup) {
      try { profileCleanup = initPatientProfile(root) || (() => {}); }
      catch (error) { console.error('Patient profile initialization:', error); }
    }
    const content = $('#dn-dashboard-content');
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (scroll) content?.scrollIntoView({behavior:reduced ? 'auto' : 'smooth',block:'start'});
  }
  root.addEventListener('click', event => {
    const tab = event.target.closest('[data-dashboard-tab]');
    if (tab && root.contains(tab)) showSection(tab.dataset.dashboardTab);
    const action = event.target.closest('[data-dashboard-action]');
    if (action && root.contains(action)) showSection(action.dataset.dashboardAction);
  }, {signal});
  menuButton.addEventListener('click', () => sidebar.classList.contains('is-open') ? closeMenu(true) : openMenu(), {signal});
  scrim.addEventListener('click', () => closeMenu(true), {signal});
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && sidebar.classList.contains('is-open')) closeMenu(true);
  }, {signal});
  root.querySelectorAll('[data-set-language]').forEach(button => {
    button.addEventListener('click', event => {
      event.stopPropagation();
      const next = button.dataset.setLanguage;
      if (next !== LANG()) {
        setLanguage(next, () => window.dispatchEvent(new PopStateEvent('popstate')));
      }
    }, {signal});
  });
  const requested = new URLSearchParams(window.location.search).get('section');
  showSection(validSections.has(requested) ? requested : 'overview', false, false);
  const logout = $('[data-dashboard-logout]');
  logout.addEventListener('click', async () => {
    if (loggingOut) return;
    loggingOut = true;
    logout.disabled = true;
    $('[data-logout-label]').textContent = tr('loggingOut');
    try { await profileApi.logout(signal); }
    catch (error) { console.warn('Server logout unavailable; clearing local session.', error); }
    finally {
      clearAuthToken();
      window.location.replace('/login');
    }
  }, {signal});
  return () => {
    controller.abort();
    document.body.style.overflow = '';
    if (typeof profileCleanup === 'function') profileCleanup();
  };
}
