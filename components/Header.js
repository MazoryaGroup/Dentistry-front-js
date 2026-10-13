/** Shared navbar converted directly from the supplied header markup. */
import { initNavbar } from './Navbar.js';
import { languageSwitch } from '../code/i18n.js';

const MENU = [
  ['/', 'home'],
  ['/about-us', 'about us'],
  ['/service', 'service'],
  ['/blog', 'blog'],
  ['/contact-us', 'contact-us'],
];

export function Header() {
  const current = window.location.pathname.replace(/\/+$/, '') || '/';
  const links = MENU.map(([url, label]) => {
    const isActive = current === url || (url === '/service' && current.startsWith('/services/'))
      || (url === '/blog' && current.startsWith('/post/'));
    return `<a href="${url}" class="nav-link w-inline-block${isActive ? ' w--current' : ''}"${isActive ? ' aria-current="page"' : ''}><div class="nav-link-text">${label}</div></a>`;
  }).join('');

  return `
    <div data-animation="default" data-collapse="medium" data-duration="400"
         data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav">
      <header id="header">
        <div class="container-fluid fist w-container">
          <div class="navbar-main-wrapper">
            <a href="/" class="brand w-nav-brand${current === '/' ? ' w--current' : ''}"${current === '/' ? ' aria-current="page"' : ''}>
              <img src="/asset/img/logo.png" loading="eager" alt="Brand Logo" class="brand-logo" />
            </a>
            <nav role="navigation" class="nav-menu-block w-nav-menu" id="dentistry-nav-menu">
              ${links}
            </nav>
            ${languageSwitch('dentistry-header-lang')}
            <div class="hamburger-menu-button w-nav-button" aria-label="Toggle navigation"
                 aria-controls="dentistry-nav-menu" aria-expanded="false" role="button" tabindex="0">
              <div class="w-icon-nav-menu"></div>
            </div>
          </div>
        </div>
      </header>
    </div>`;
}

export function mountHeader() {
  return initNavbar();
}
