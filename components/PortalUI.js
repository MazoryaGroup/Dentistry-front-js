/** Shared UI fragments for the patient-facing demo pages. No account data is stored. */
import '../asset/css/portal.css';
import { formatMoney, languageSwitch, t } from '../code/i18n.js';

const paths = {
  arrow: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
  back: '<path d="M19 12H5m6 6-6-6 6-6"/>',
  tooth: '<path d="M12 4c2.4 0 3.2-1.3 5.7-1.3C22.5 2.7 24 6.6 22.5 11c-1.3 4-2.4 10-5.6 10-2 0-2.2-7-4.9-7S9.1 21 7.1 21c-3.2 0-4.3-6-5.6-10C0 6.6 1.5 2.7 6.3 2.7 8.8 2.7 9.6 4 12 4Z"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4.5 21a7.5 7.5 0 0 1 15 0"/>',
  users: '<circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0m1-14a3 3 0 0 1 0 6m2 3a5 5 0 0 1 3 5"/>',
  shield: '<path d="m12 2 8 4v6c0 5.1-3.5 8.3-8 10-4.5-1.7-8-4.9-8-10V6l8-4Z"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
  mail: '<rect x="2.5" y="5" width="19" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  eye: '<path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z"/><circle cx="12" cy="12" r="2.5"/>',
  eyeOff: '<path d="M3 3l18 18M10.5 6.2A11.4 11.4 0 0 1 12 6c6.5 0 10 6 10 6a17 17 0 0 1-3.3 3.8M6 7.8A16.1 16.1 0 0 0 2 12s3.5 6 10 6c1.7 0 3.1-.4 4.4-1"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  receipt: '<path d="M5 3h14v18l-3-2-4 2-4-2-3 2V3Z"/><path d="M9 8h6m-6 4h6"/>',
  activity: '<path d="M2 12h5l3-7 4 14 3-7h5"/>',
  credit: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',
  settings: '<path d="M10.5 2h3l.6 2.4 2.2.9 2.1-1.3 2.1 2.1-1.3 2.1.9 2.2 2.4.6v3l-2.4.6-.9 2.2 1.3 2.1-2.1 2.1-2.1-1.3-2.2.9-.6 2.4h-3l-.6-2.4-2.2-.9-2.1 1.3-2.1-2.1 1.3-2.1-.9-2.2L2 13.5v-3l2.4-.6.9-2.2L4 5.6l2.1-2.1 2.1 1.3 2.2-.9.1-1.9Z"/><circle cx="12" cy="12" r="3"/>',
  logOut: '<path d="M10 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5m4-4 4-4-4-4m4 4H9"/>',
  spark: '<path d="m12 2 2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2L12 2Z"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  phone: '<path d="M6 2h4l1 5-2.5 1.6a14 14 0 0 0 7 7L17 13l5 1v4c0 2-1.8 4-4 4C9.2 22 2 14.8 2 6c0-2.2 2-4 4-4Z"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 10v6m0-10h.01"/>',
};

export function dpIcon(name, className = '') {
  return `<svg class="dp-icon ${className}" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${paths[name] || paths.tooth}</svg>`;
}

export function demoNote(message = 'Design preview only — no data is sent or saved to a server.') {
  return `<div class="dp-demo-note" role="note">${dpIcon('info')}<span>${message}</span></div>`;
}

export function portalHeading(eyebrow, title, description = '') {
  return `<div class="dp-page-head"><div class="dp-eyebrow">${eyebrow}</div><h1>${title}</h1>${description ? `<p>${description}</p>` : ''}</div>`;
}

export function authShell({ section, title, subtitle, content, sideTitle, sideCopy }) {
  return `<main class="dentistry-portal dp-auth-page" data-portal-page="${section}">
    <div class="dp-auth-layout">
      <aside class="dp-auth-visual" aria-label="Patient portal introduction">
        <a href="/" class="dp-auth-wordmark">${dpIcon('tooth')} <span>DR. ZEINOLABEDIN <small>DENTAL CARE</small></span></a>
        <div class="dp-auth-art" aria-hidden="true"><div class="dp-auth-orbit dp-auth-orbit-a"></div><div class="dp-auth-orbit dp-auth-orbit-b"></div><div class="dp-auth-tooth">${dpIcon('tooth')}</div><div class="dp-auth-mini dp-auth-mini-one">${dpIcon('shield')}<span>Private by design</span></div><div class="dp-auth-mini dp-auth-mini-two">${dpIcon('calendar')}<span>Easy appointments</span></div></div>
        <div class="dp-auth-visual-copy"><span class="dp-pill dp-pill-light">YOUR SMILE, OUR PRIORITY</span><h2>${sideTitle}</h2><p>${sideCopy}</p></div>
        <div class="dp-auth-visual-footer">A better dental experience starts here <span>✦</span></div>
      </aside>
      <section class="dp-auth-panel" aria-labelledby="portal-title"><div class="dp-auth-panel-inner">
        <div class="dp-mobile-logo">${dpIcon('tooth')} Dr. Zeinolabedin</div>
        ${languageSwitch('dentistry-auth-lang')}
        <a class="dp-back-link" href="/">${dpIcon('back')} Back to website</a>
        <div class="dp-auth-head"><span class="dp-eyebrow">PATIENT PORTAL</span><h1 id="portal-title">${title}</h1><p>${subtitle}</p></div>
        ${content}
       <div class="dp-auth-legal">
  ${section === 'login'
    ? t('auth.shell.loginLegal')
    : t('auth.shell.privacyLegal')}
</div>
      </div></section>
    </div>
  </main>`;
}

export function dpInput({ id, label, type = 'text', placeholder = '', auto = '', required = true, attrs = '' }) {
  return `<label class="dp-field" for="${id}"><span>${label}</span><span class="dp-input-wrap"><input id="${id}" name="${id}" type="${type}" placeholder="${placeholder}" ${auto ? `autocomplete="${auto}"` : ''} ${required ? 'required' : ''} ${attrs} /><span class="dp-field-icon">${dpIcon(type === 'email' ? 'mail' : type === 'password' ? 'lock' : type === 'tel' ? 'phone' : 'user')}</span>${type === 'password' ? `<button type="button" class="dp-password-toggle" data-password-for="${id}" aria-label="Show password" aria-pressed="false">${dpIcon('eye')}</button>` : ''}</span></label>`;
}

export function initPasswordToggles(root) {
  const controller = new AbortController();
  root?.querySelectorAll('[data-password-for]').forEach(button => {
    button.addEventListener('click', () => {
      const input = root.querySelector(`#${button.dataset.passwordFor}`);
      if (!input) return;
      const show = input.type === 'password';
      input.type = show ? 'text' : 'password';
      button.innerHTML = dpIcon(show ? 'eyeOff' : 'eye');
      button.setAttribute('aria-label', t(show ? 'Hide password' : 'Show password'));
      button.setAttribute('aria-pressed', String(show));
    }, { signal: controller.signal });
  });
  return () => controller.abort();
}

export function setFeedback(root, text, type = 'note') {
  const element = root?.querySelector('[data-form-feedback]');
  if (!element) return;
  element.textContent = t(text);
  element.dataset.state = type;
  element.hidden = false;
}

export function money(value) {
  return formatMoney(value);
}
