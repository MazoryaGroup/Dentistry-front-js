/** Responsive menu without Webflow's jQuery runtime. */
export function initNavbar() {
  const nav = document.querySelector('.navbar.w-nav');
  const button = nav?.querySelector('.w-nav-button');
  const menu = nav?.querySelector('.w-nav-menu');
  if (!nav || !button || !menu) return () => {};

  const controller = new AbortController();
  const { signal } = controller;
  const setOpen = (open) => {
    nav.classList.toggle('w--open', open);
    button.classList.toggle('w--open', open);
    menu.classList.toggle('w--open', open);
    button.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-hidden', String(open && window.innerWidth <= 991 ? false : window.innerWidth <= 991));
  };
  const toggle = () => setOpen(!button.classList.contains('w--open'));

  button.addEventListener('click', toggle, { signal });
  button.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggle();
    }
  }, { signal });
  menu.addEventListener('click', (event) => {
    if (event.target.closest('a[href]')) setOpen(false);
  }, { signal });
  document.addEventListener('click', (event) => {
    if (!nav.contains(event.target)) setOpen(false);
  }, { signal });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOpen(false);
  }, { signal });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991) setOpen(false);
  }, { signal });
  setOpen(false);
  return () => controller.abort();
}
