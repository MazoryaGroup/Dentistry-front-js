/** Common browser-only interactions. No outgoing API requests. */

/** All forms are intentionally demo-only until the Laravel API is connected. */
export function initDemoForms(root = document) {
  if (!root) return () => {};
  const controller = new AbortController();
  const { signal } = controller;
  root.querySelectorAll('form').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      // Do not show Webflow's original success message when nothing was sent.
      const wrapper = form.closest('.w-form');
      const done = wrapper?.querySelector('.w-form-done');
      if (done) done.style.display = 'none';
      let status = wrapper?.querySelector('.dentistry-demo-message')
        || form.querySelector('.dentistry-demo-message');
      if (!status) {
        status = document.createElement('p');
        status.className = 'dentistry-demo-message';
        status.setAttribute('role', 'status');
        form.insertAdjacentElement('afterend', status);
      }
      status.textContent = 'This form is not connected to the server yet. No information was submitted.';
      status.style.display = 'block';
    }, { signal });
  });
  return () => controller.abort();
}

/** Native replacement for simple Webflow tabs / FAQ accordions. */
export function initTabs(root = document) {
  if (!root) return () => {};
  const controller = new AbortController();
  root.querySelectorAll('.w-tabs').forEach((tabs) => {
    const links = [...tabs.querySelectorAll('.w-tab-menu .w-tab-link[data-w-tab]')];
    const panes = [...tabs.querySelectorAll('.w-tab-content .w-tab-pane[data-w-tab]')];
    if (!links.length) return;
    const menu = tabs.querySelector('.w-tab-menu');
    menu?.setAttribute('role', 'tablist');
    function activate(key) {
      tabs.dataset.current = key;
      links.forEach((link) => {
        const selected = link.dataset.wTab === key;
        link.classList.toggle('w--current', selected);
        link.setAttribute('role', 'tab');
        link.setAttribute('aria-selected', String(selected));
        link.setAttribute('aria-expanded', String(selected));
        link.tabIndex = selected ? 0 : -1;
        const detail = link.querySelector('.tretment-tab-content-block');
        if (detail) detail.style.display = selected ? 'block' : 'none';
        const answer = link.querySelector('.ans-box');
        if (answer) {
          answer.style.overflow = 'hidden';
          answer.style.transition = 'height 300ms ease';
          answer.style.height = selected ? `${answer.scrollHeight}px` : '0px';
          answer.setAttribute('aria-hidden', String(!selected));
        }
        const plus = link.querySelector('.plus');
        if (plus) plus.style.transform = selected ? 'rotate(90deg)' : 'rotate(0deg)';
      });
      panes.forEach((pane) => {
        const selected = pane.dataset.wTab === key;
        pane.classList.toggle('w--tab-active', selected);
        pane.hidden = !selected;
      });
    }
    links.forEach((link, index) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        activate(link.dataset.wTab);
      }, { signal: controller.signal });
      link.addEventListener('keydown', (event) => {
        const step = ['ArrowRight', 'ArrowDown'].includes(event.key) ? 1
          : ['ArrowLeft', 'ArrowUp'].includes(event.key) ? -1 : 0;
        if (!step) return;
        event.preventDefault();
        const next = links[(index + step + links.length) % links.length];
        activate(next.dataset.wTab);
        next.focus();
      }, { signal: controller.signal });
    });
    activate(tabs.dataset.current || links.find(l => l.classList.contains('w--current'))?.dataset.wTab || links[0].dataset.wTab);
  });
  return () => controller.abort();
}

/** Lightweight image lightbox replacing Webflow's interactive modal. */
export function initLightboxes(root = document) {
  if (!root) return () => {};
  const controller = new AbortController();
  let dialog = null;
  root.querySelectorAll('a.w-lightbox').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      event.preventDefault();
      const raw = anchor.querySelector('script.w-json[type="application/json"]')?.textContent;
      let url;
      try { url = JSON.parse(raw || '{}').items?.[0]?.url; } catch (_) {}
      url ||= anchor.querySelector('img')?.currentSrc || anchor.querySelector('img')?.src;
      if (!url) return;
      dialog?.remove();
      dialog = document.createElement('dialog');
      dialog.className = 'dentistry-lightbox';
      const close = document.createElement('button');
      close.type = 'button';
      close.className = 'dentistry-lightbox-close';
      close.textContent = '×';
      close.setAttribute('aria-label', 'Close image');
      const image = document.createElement('img');
      image.src = url;
      image.alt = anchor.querySelector('img')?.alt || 'Gallery image';
      dialog.append(close, image);
      document.body.append(dialog);
      close.addEventListener('click', () => dialog?.close(), { once: true });
      dialog.addEventListener('click', (click) => { if (click.target === dialog) dialog.close(); });
      dialog.addEventListener('close', () => { dialog?.remove(); dialog = null; }, { once: true });
      dialog.showModal();
    }, { signal: controller.signal });
  });
  return () => { controller.abort(); dialog?.remove(); };
}

export function initPageInteractions(root) {
  const stopTabs = initTabs(root);
  const stopForms = initDemoForms(root);
  const stopLightboxes = initLightboxes(root);
  return () => { stopTabs(); stopForms(); stopLightboxes(); };
}
