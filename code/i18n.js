
/**
 * Dentistry — i18n System
 *
 * Languages: FA / EN
 * Persian: RTL
 * English: LTR
 *
 * Translation files:
 * ../lang/fa.json
 * ../lang/en.json
 */

import '../asset/css/i18n.css';

import fa from '../lang/fa.json';
import en from '../lang/en.json';

// ============================================
// CONFIG
// ============================================

const STORAGE_KEY = 'dentistry.lang';

const DEFAULT_LANGUAGE = 'en';

const supported = new Set(['fa', 'en']);

const dictionary = {
  fa,
  en,
};

// ============================================
// HELPERS
// ============================================

const normalize = value =>
  String(value ?? '')
    .replace(/\s+/g, ' ')
    .trim();

function isSupportedLanguage(lang) {
  return supported.has(lang);
}

// ============================================
// GET LANGUAGE
// ============================================

export function getLanguage() {
  if (typeof window === 'undefined') {
    return DEFAULT_LANGUAGE;
  }

  // First priority: URL
  const queryLang = new URLSearchParams(
    window.location.search
  ).get('lang');

  if (isSupportedLanguage(queryLang)) {
    return queryLang;
  }

  // Second priority: localStorage
  try {
    const saved = localStorage.getItem(
      STORAGE_KEY
    );

    if (isSupportedLanguage(saved)) {
      return saved;
    }
  } catch {
    // Storage might be disabled.
  }

  return DEFAULT_LANGUAGE;
}

// ============================================
// RTL DETECTION
// ============================================

export function isRTL() {
  return getLanguage() === 'fa';
}

// ============================================
// TRANSLATION
// ============================================

export function t(source) {
  const key = normalize(source);

  if (!key) {
    return String(source ?? '');
  }

  const lang = getLanguage();

  const translation = dictionary[lang]?.[key];

  // Translate using the selected language.
  if (
    typeof translation === 'string' &&
    translation.length > 0
  ) {
    return translation;
  }

  // If the key doesn't exist, return source.
  return String(source ?? '');
}

// ============================================
// FORMAT MONEY
// ============================================

export function formatMoney(value) {
  const lang = getLanguage();

  const locale = lang === 'fa'
    ? 'fa-IR'
    : 'en-US';

  const number = Number(value ?? 0);

  const formatted = new Intl.NumberFormat(
    locale
  ).format(
    Number.isFinite(number) ? number : 0
  );

  const currency = lang === 'fa'
    ? 'تومان'
    : 'toman';

  return `${formatted} ${currency}`;
}

// ============================================
// APPLY LANGUAGE TO DOCUMENT
// ============================================

export function applyDocumentLanguage() {
  if (typeof document === 'undefined') {
    return;
  }

  const lang = getLanguage();

  document.documentElement.lang = lang;

  document.documentElement.dir =
    lang === 'fa'
      ? 'rtl'
      : 'ltr';

  document.documentElement.dataset.locale = lang;
}

// ============================================
// TRANSLATE HTML CONTENT
// ============================================

export function translateElement(root) {
  if (!root || typeof document === 'undefined') {
    return;
  }

  const lang = getLanguage();

  const translations = dictionary[lang] || {};

  const tagsToSkip = new Set([
    'SCRIPT',
    'STYLE',
    'NOSCRIPT',
    'CODE',
    'PRE',
    'SVG',
  ]);

  // ========================================
  // TRANSLATE TEXT NODES
  // ========================================

  const walker = document.createTreeWalker(
    root,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        const parent = node.parentElement;

        if (!parent) {
          return NodeFilter.FILTER_REJECT;
        }

        if (
          parent.closest('[data-no-translate]')
        ) {
          return NodeFilter.FILTER_REJECT;
        }

        if (
          tagsToSkip.has(parent.tagName) ||
          parent.closest('svg')
        ) {
          return NodeFilter.FILTER_REJECT;
        }

        return NodeFilter.FILTER_ACCEPT;
      },
    }
  );

  const nodes = [];

  while (walker.nextNode()) {
    nodes.push(walker.currentNode);
  }

  for (const node of nodes) {
    const original = node.nodeValue;

    const key = normalize(original);

    if (!key) continue;

    const translation = translations[key];

    if (typeof translation !== 'string') {
      continue;
    }

    const leading =
      original.match(/^\s*/)?.[0] ?? '';

    const trailing =
      original.match(/\s*$/)?.[0] ?? '';

    node.nodeValue =
      leading +
      translation +
      trailing;
  }

  // ========================================
  // TRANSLATE HTML ATTRIBUTES
  // ========================================

  const nodesWithAttributes = root.querySelectorAll(
    '[placeholder],[title],[aria-label],[alt],[value]'
  );

  for (const element of nodesWithAttributes) {
    if (
      element.closest('[data-no-translate]')
    ) {
      continue;
    }

    const attributes = [
      'placeholder',
      'title',
      'aria-label',
      'alt',
    ];

    for (const attribute of attributes) {
      if (!element.hasAttribute(attribute)) {
        continue;
      }

      const source = element.getAttribute(
        attribute
      );

      const key = normalize(source);

      const translated = translations[key];

      if (typeof translated === 'string') {
        element.setAttribute(
          attribute,
          translated
        );
      }
    }

    // Translate button labels.
    // Never change normal input values.

    if (
      element.tagName === 'INPUT' &&
      ['submit', 'button'].includes(element.type)
    ) {
      const value = element.getAttribute(
        'value'
      );

      const key = normalize(value);

      const translated = translations[key];

      if (typeof translated === 'string') {
        element.setAttribute(
          'value',
          translated
        );
      }
    }
  }
}

// ============================================
// LANGUAGE SWITCH HTML
// ============================================

export function languageSwitch(className = '') {
  const selected = getLanguage();

  return `
    <div
      class="dentistry-lang-switch ${className}"
      role="group"
      aria-label="Site language"
    >

      <button
        type="button"
        data-set-language="fa"
        aria-label="فارسی"
        aria-pressed="${selected === 'fa'}"
        class="${selected === 'fa' ? 'is-active' : ''}"
      >
        FA
      </button>

      <span
        class="dentistry-lang-divider"
        aria-hidden="true"
      ></span>

      <button
        type="button"
        data-set-language="en"
        aria-label="English"
        aria-pressed="${selected === 'en'}"
        class="${selected === 'en' ? 'is-active' : ''}"
      >
        EN
      </button>

    </div>
  `;
}

// ============================================
// SET LANGUAGE
// ============================================

export function setLanguage(language, rerender) {
  if (!isSupportedLanguage(language)) {
    return;
  }

  // Save selected language
  try {
    localStorage.setItem(
      STORAGE_KEY,
      language
    );
  } catch {
    // URL fallback is available.
  }

  // Update URL without reloading the page.
  const url = new URL(
    window.location.href
  );

  url.searchParams.set(
    'lang',
    language
  );

  window.history.replaceState(
    window.history.state,
    '',
    url.pathname +
    url.search +
    url.hash
  );

  // Set HTML lang and direction.
  applyDocumentLanguage();

  // Re-render components and pages.
  if (typeof rerender === 'function') {
    rerender();
  }
}

// ============================================
// INITIALIZE LANGUAGE
// ============================================

applyDocumentLanguage();
