import '../asset/css/i18n.css';
import fa from '../lang/fa.json';
import en from '../lang/en.json';

const STORAGE_KEY = 'dentistry.lang';
const supported = new Set(['fa', 'en']);

const dictionary = { fa, en };
const normalize = value => String(value ?? '').replace(/\s+/g, ' ').trim();

export function getLanguage() {
  if (typeof window === 'undefined') return 'en';
  const queryLang = new URLSearchParams(location.search).get('lang');
  if (supported.has(queryLang)) return queryLang;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (supported.has(saved)) return saved;
  } catch { /* Storage may be disabled. */ }
  return 'en';
}

export function isRTL() { return getLanguage() === 'fa'; }

export function t(source) {
  const phrase = normalize(source);
  if (!phrase || getLanguage() !== 'fa') return String(source ?? '');
  return dictionary.fa[phrase] ?? String(source);
}

export function formatMoney(value) {
  const locale = isRTL() ? 'fa-IR' : 'en-US';
  return `${new Intl.NumberFormat(locale).format(value)} ${isRTL() ? 'تومان' : 'toman'}`;
}

export function applyDocumentLanguage() {
  if (typeof document === 'undefined') return;
  const lang = getLanguage();
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
  document.documentElement.dataset.locale = lang;
}

// Translate source-content after it has been inserted. This also supports untouched Webflow templates.
export function translateElement(root) {
  if (!root || getLanguage() !== 'fa') return;
  const tagsToSkip = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'CODE', 'PRE', 'SVG']);
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || parent.closest('[data-no-translate]')) return NodeFilter.FILTER_REJECT;
      if (tagsToSkip.has(parent.tagName) || parent.closest('svg')) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  for (const node of nodes) {
    const original = node.nodeValue;
    const key = normalize(original);
    const translation = dictionary.fa[key];
    if (!translation) continue;
    const leading = original.match(/^\s*/)?.[0] ?? '';
    const trailing = original.match(/\s*$/)?.[0] ?? '';
    node.nodeValue = leading + translation + trailing;
  }
  const nodesWithAttributes = root.querySelectorAll('[placeholder],[title],[aria-label],[alt],[value]');
  for (const element of nodesWithAttributes) {
    if (element.closest('[data-no-translate]')) continue;
    for (const attribute of ['placeholder', 'title', 'aria-label', 'alt']) {
      if (element.hasAttribute(attribute)) {
        const src = element.getAttribute(attribute);
        const translated = dictionary.fa[normalize(src)];
        if (translated) element.setAttribute(attribute, translated);
      }
    }
    // Only non-editable UI labels, not input contents or dates.
    if (element.tagName === 'INPUT' && ['submit', 'button'].includes(element.type)) {
      const value = element.getAttribute('value');
      if (dictionary.fa[normalize(value)]) element.setAttribute('value', dictionary.fa[normalize(value)]);
    }
  }
}

export function languageSwitch(className = '') {
  const selected = getLanguage();
  return `<div class="dentistry-lang-switch ${className}" role="group" aria-label="Site language">
    <button type="button" data-set-language="fa" aria-label="فارسی" aria-pressed="${selected === 'fa'}" class="${selected === 'fa' ? 'is-active' : ''}">FA</button>
    <span class="dentistry-lang-divider" aria-hidden="true"></span>
    <button type="button" data-set-language="en" aria-label="English" aria-pressed="${selected === 'en'}" class="${selected === 'en' ? 'is-active' : ''}">EN</button>
  </div>`;
}

export function setLanguage(language, rerender) {
  if (!supported.has(language)) return;
  try { localStorage.setItem(STORAGE_KEY, language); } catch { /* Keep URL as fallback. */ }
  const url = new URL(location.href);
  url.searchParams.set('lang', language);
  history.replaceState(history.state, '', url.pathname + url.search + url.hash);
  applyDocumentLanguage();
  rerender?.();
}

applyDocumentLanguage();
