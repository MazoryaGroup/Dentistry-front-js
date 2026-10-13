import { Header, mountHeader } from '../components/Header.js';
import { applyDocumentLanguage, getLanguage, languageSwitch, setLanguage, translateElement, t } from './i18n.js';
import { Footer, mountFooter } from '../components/Footer.js';
import { Home, initHome } from '../pages/Home.js';
import { About, initAbout } from '../pages/About.js';
import { Blog, initBlog } from '../pages/Blog.js';
import { BlogDetails, initBlogDetails } from '../pages/BlogDetails.js';
import { Contact, initContact } from '../pages/Contact.js';
import { Service, initService } from '../pages/Service.js';
import { ServiceDetails, initServiceDetails } from '../pages/ServiceDetails.js';
import { Team, initTeam } from '../pages/Team.js';
import { TeamDetails, initTeamDetails } from '../pages/TeamDetails.js';
import { Faq, initFaq } from '../pages/Faq.js';
import { Login, initLogin } from '../pages/Login.js';
import { Register, initRegister } from '../pages/Register.js';
import { ForgotPassword, initForgotPassword } from '../pages/ForgotPassword.js';
import { Dashboard, initDashboard } from '../pages/Dashboard.js';
import { Checkout, initCheckout } from '../pages/Checkout.js';

const routes = {
  '/':                  { render: Home, init: initHome, title: 'Home' },
  '/about-us':          { render: About, init: initAbout, title: 'About Us' },
  '/blog':              { render: Blog, init: initBlog, title: 'Blog' },
  '/contact-us':        { render: Contact, init: initContact, title: 'Contact Us' },
  '/service':           { render: Service, init: initService, title: 'Services' },
  '/team':              { render: Team, init: initTeam, title: 'Our Team' },
  '/faq':               { render: Faq, init: initFaq, title: 'FAQ' },
  '/login':             { render: Login, init: initLogin, title: 'Patient Login', standalone: true },
  '/register':          { render: Register, init: initRegister, title: 'Patient Registration', standalone: true },
  '/forgot-password':   { render: ForgotPassword, init: initForgotPassword, title: 'Forgot Password', standalone: true },
  '/dashboard':         { render: Dashboard, init: initDashboard, title: 'Patient Dashboard', standalone: true },
  '/checkout':          { render: Checkout, init: initCheckout, title: 'Appointment Checkout' },
  // Exact details sent by the user; other detail pages are not invented.
  '/post/benefits-of-regular-dental-checkups': { render: BlogDetails, init: initBlogDetails, title: 'Blog Details' },
  '/post/choosing-the-best-toothbrush-for-you': { render: BlogDetails, init: initBlogDetails, title: 'Blog Details' },
  '/services/bright-smile-solutions': { render: ServiceDetails, init: initServiceDetails, title: 'Service Details' },
  '/team/dr-adam-smith': { render: TeamDetails, init: initTeamDetails, title: 'Team Details' },
};

function normalizePath(path) {
  let value = path.replace(/\/+$/, '') || '/';
  value = value.replace(/\/(?:index\.html?|index\.htm)$/, '/') || '/';
  if (value !== '/' && value.endsWith('.html')) value = value.slice(0, -5);
  return value;
}

function renderMissing(path) {
  const text = path.startsWith('/services/') ? 'This service detail page was not included in the HTML you provided.'
    : path.startsWith('/post/') ? 'This blog detail page was not included in the HTML you provided.'
    : path.startsWith('/team/') ? 'This team profile was not included in the HTML you provided.'
    : 'This page has not been provided yet.';
  return `<main class="w-container" style="padding:100px 20px;min-height:50vh">
    <h1>Page not available yet</h1><p>${text}</p><p><a href="/">Back to home</a></p>
  </main>`;
}

let cleanup = [];

export function renderRoute() {
  applyDocumentLanguage();
  cleanup.forEach((fn) => { try { fn?.(); } catch (error) { console.warn(error); } });
  cleanup = [];

  const app = document.getElementById('app');
  if (!app) throw new Error('Missing #app in index.html');
  const path = normalizePath(window.location.pathname);
  const route = routes[path];
  const withShell = !route?.standalone;
  app.innerHTML = `${withShell ? Header() : ''}${route ? route.render() : renderMissing(path)}${withShell ? Footer() : ''}`;
  document.title = `${t(route?.title || 'Page Not Found')} | ${t('Dr. Zeinolabedin')}`;

  for (const init of [withShell ? mountHeader : null, route?.init, withShell ? mountFooter : null]) {
    const unsubscribe = init?.();
    if (typeof unsubscribe === 'function') cleanup.push(unsubscribe);
  }
  translateElement(app);
  if (window.location.hash) {
    // Navigating from one SPA route to a named section.
    requestAnimationFrame(() => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      document.getElementById(id)?.scrollIntoView();
    });
  }
}

export function initRouter() {
  renderRoute();
  window.addEventListener('popstate', renderRoute);
  document.addEventListener('click', (event) => {
    const button = event.target.closest('[data-set-language]');
    if (!button) return;
    event.preventDefault();
    setLanguage(button.getAttribute('data-set-language'), renderRoute);
  });
  document.addEventListener('click', (event) => {
    const anchor = event.target.closest('a[href]');
    if (!anchor || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey
      || event.shiftKey || event.altKey || anchor.hasAttribute('download')) return;
    if (anchor.target && anchor.target !== '_self') return;
    const raw = anchor.getAttribute('href');
    if (!raw || raw === '#' || raw.startsWith('#')) return;
    const url = new URL(anchor.href, location.href);
    if (url.origin !== location.origin || !['http:', 'https:'].includes(url.protocol)) return;
    const path = normalizePath(url.pathname);
    // Do not intercept static assets and downloadable files.
    if (/\.(?:pdf|docx?|xlsx?|zip|png|jpg|jpeg|svg|webp|css|js)$/i.test(path)) return;
    event.preventDefault();
    const next = path + url.search + url.hash;
    if (next === location.pathname + location.search + location.hash) return;
    history.pushState({}, '', next);
    renderRoute();
    if (!url.hash) window.scrollTo({ top: 0, behavior: 'instant' });
  });
}
