
/**
 * Dentistry — Jalali Booking Calendar
 * UI: Jalali
 * API: Gregorian YYYY-MM-DD
 */

import {
  toJalaali,
  toGregorian,
  jalaaliMonthLength,
} from 'jalaali-js';

import { getLanguage } from '../code/i18n.js';

const MONTHS_FA = [
  'فروردین', 'اردیبهشت', 'خرداد',
  'تیر', 'مرداد', 'شهریور',
  'مهر', 'آبان', 'آذر',
  'دی', 'بهمن', 'اسفند',
];

const MONTHS_EN = [
  'Farvardin', 'Ordibehesht', 'Khordad',
  'Tir', 'Mordad', 'Shahrivar',
  'Mehr', 'Aban', 'Azar',
  'Dey', 'Bahman', 'Esfand',
];

const WD_FA = ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'];
const WD_EN = ['Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr'];

const fa = () => getLanguage() === 'fa';

const numeral = value =>
  fa()
    ? String(value).replace(
        /\d/g,
        digit => '۰۱۲۳۴۵۶۷۸۹'[Number(digit)]
      )
    : String(value);

const pad = number =>
  String(number).padStart(2, '0');

// ============================================
// CLINIC DATE
// ============================================

function clinicToday() {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Tehran',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
      .formatToParts(new Date())
      .map(part => [part.type, part.value])
  );

  return `${parts.year}-${parts.month}-${parts.day}`;
}

function isISO(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value ?? '')) {
    return false;
  }

  const [year, month, day] =
    value.split('-').map(Number);

  const parsed = new Date(
    Date.UTC(year, month - 1, day)
  );

  return (
    !Number.isNaN(parsed.getTime()) &&
    parsed.toISOString().slice(0, 10) === value
  );
}

function toJ(iso) {
  if (!isISO(iso)) return null;

  const [gy, gm, gd] =
    iso.split('-').map(Number);

  return toJalaali(gy, gm, gd);
}

function toISO(jy, jm, jd) {
  const { gy, gm, gd } = toGregorian(
    jy,
    jm,
    jd
  );

  return `${gy}-${pad(gm)}-${pad(gd)}`;
}

// ============================================
// INITIALIZATION
// ============================================

export function initJalaliBookingCalendars(
  root,
  signal
) {
  const pickers = new Set();

  const selector = [
    '[data-wizard-date]',
    '[data-booking-reschedule] input[name="booking_date"]',
  ].join(', ');

  function upgrade(input) {
    if (input.dataset.jalaliReady === '1') {
      return;
    }

    input.dataset.jalaliReady = '1';

    // Interactive buttons must not be nested
    // inside a <label>.
    const label =
      input.parentElement?.tagName === 'LABEL'
        ? input.parentElement
        : null;

    const wrapper = document.createElement('div');

    if (label) {
      wrapper.className = label.className;

      while (label.firstChild) {
        wrapper.append(label.firstChild);
      }

      label.replaceWith(wrapper);
    } else {
      input.before(wrapper);
      wrapper.append(input);
    }

    wrapper.classList.add('dn-jalali-field');

    // Keep the original input for the booking API.
    input.type = 'hidden';

    const trigger = document.createElement('button');

    trigger.type = 'button';
    trigger.className = 'dn-jalali-trigger';

    trigger.setAttribute(
      'aria-haspopup',
      'dialog'
    );

    trigger.setAttribute(
      'aria-expanded',
      'false'
    );

    const popup = document.createElement('div');

    popup.className = 'dn-jalali-popup';
    popup.setAttribute('role', 'dialog');

    popup.setAttribute(
      'aria-label',
      fa()
        ? 'انتخاب تاریخ شمسی'
        : 'Choose Jalali date'
    );

    popup.hidden = true;

    wrapper.append(trigger, popup);

    const initial =
      toJ(input.value) ||
      toJ(clinicToday());

    // Month state persists independently
    // from the selected input value.
    let year = initial.jy;
    let month = initial.jm;

    function syncLabel() {
      const selected = toJ(input.value);

      trigger.textContent = selected
        ? numeral(
            `${selected.jy}/${pad(selected.jm)}/${pad(selected.jd)}`
          )
        : (
            fa()
              ? 'انتخاب تاریخ شمسی'
              : 'Choose Jalali date'
          );
    }

    function close() {
      popup.hidden = true;

      trigger.setAttribute(
        'aria-expanded',
        'false'
      );
    }

    // ========================================
    // RENDER MONTH
    // ========================================

    function render() {
      const { gy, gm, gd } = toGregorian(
        year,
        month,
        1
      );

      // Saturday-first grid.
      const offset = (
        new Date(
          Date.UTC(gy, gm - 1, gd)
        ).getUTCDay() + 1
      ) % 7;

      const daysCount = jalaaliMonthLength(
        year,
        month
      );

      const today = clinicToday();

      const minimum =
        isISO(input.getAttribute('min')) &&
        input.min > today
          ? input.min
          : today;

      const maximum =
        isISO(input.getAttribute('max'))
          ? input.max
          : null;

      const weekdays = fa() ? WD_FA : WD_EN;
      const months = fa() ? MONTHS_FA : MONTHS_EN;

      let days = '<span aria-hidden="true"></span>'
        .repeat(offset);

      for (let day = 1; day <= daysCount; day++) {
        const iso = toISO(
          year,
          month,
          day
        );

        const selected = iso === input.value;

        const disabled =
          iso < minimum ||
          (maximum && iso > maximum);

        days += `
          <button
            type="button"
            class="dn-jalali-day${selected ? ' is-selected' : ''}"
            data-jalali-day="${iso}"
            aria-pressed="${selected}"
            ${disabled ? 'disabled' : ''}
          >
            ${numeral(day)}
          </button>
        `;
      }

      popup.innerHTML = `
        <div class="dn-jalali-head">

          <button
            type="button"
            data-jalali-nav="prev"
            aria-label="${fa() ? 'ماه قبل' : 'Previous month'}"
          >
            ‹
          </button>

          <strong data-jalali-month>
            ${months[month - 1]} ${numeral(year)}
          </strong>

          <button
            type="button"
            data-jalali-nav="next"
            aria-label="${fa() ? 'ماه بعد' : 'Next month'}"
          >
            ›
          </button>

        </div>

        <div class="dn-jalali-grid dn-jalali-weekdays">
          ${weekdays.map(day => `
            <span>${day}</span>
          `).join('')}
        </div>

        <div class="dn-jalali-grid">
          ${days}
        </div>
      `;
    }

    const picker = {
      wrapper,
      close,
      syncLabel,
    };

    pickers.add(picker);

    // ========================================
    // OPEN CALENDAR
    // ========================================

    trigger.addEventListener(
      'click',
      event => {
        event.preventDefault();
        event.stopPropagation();

        if (!popup.hidden) {
          close();
          return;
        }

        for (const other of pickers) {
          if (other !== picker) {
            other.close();
          }
        }

        const selected =
          toJ(input.value) ||
          toJ(clinicToday());

        year = selected.jy;
        month = selected.jm;

        render();

        popup.hidden = false;

        trigger.setAttribute(
          'aria-expanded',
          'true'
        );
      },
      { signal }
    );

    // ========================================
    // MONTH NAVIGATION AND SELECTION
    // ========================================

    popup.addEventListener(
      'click',
      event => {
        const nav = event.target.closest(
          '[data-jalali-nav]'
        );

        if (nav) {
          event.preventDefault();
          event.stopPropagation();

          const delta =
            nav.dataset.jalaliNav === 'next'
              ? 1
              : -1;

          // Correctly handles Esfand -> Farvardin
          // and Farvardin -> Esfand.
          const absoluteMonth =
            year * 12 + (month - 1) + delta;

          year = Math.floor(
            absoluteMonth / 12
          );

          month = (
            (absoluteMonth % 12 + 12) % 12
          ) + 1;

          render();
          return;
        }

        const button = event.target.closest(
          '[data-jalali-day]'
        );

        if (!button || button.disabled) {
          return;
        }

        event.preventDefault();
        event.stopPropagation();

        // Gregorian ISO value for Laravel.
        input.value = button.dataset.jalaliDay;

        syncLabel();
        close();

        input.dispatchEvent(
          new Event('input', {
            bubbles: true,
          })
        );

        input.dispatchEvent(
          new Event('change', {
            bubbles: true,
          })
        );

        trigger.focus();
      },
      { signal }
    );

    input.addEventListener(
      'change',
      syncLabel,
      { signal }
    );

    syncLabel();
  }

  // ==========================================
  // DYNAMIC RESCHEDULE FORMS
  // ==========================================

  function upgradeAll() {
    for (const picker of pickers) {
      if (!picker.wrapper.isConnected) {
        pickers.delete(picker);
      }
    }

    root.querySelectorAll(selector)
      .forEach(upgrade);
  }

  upgradeAll();

  const observer = new MutationObserver(
    upgradeAll
  );

  observer.observe(root, {
    childList: true,
    subtree: true,
  });

  document.addEventListener(
    'click',
    event => {
      for (const picker of pickers) {
        if (!picker.wrapper.contains(event.target)) {
          picker.close();
        }
      }
    },
    { signal }
  );

  document.addEventListener(
    'keydown',
    event => {
      if (event.key === 'Escape') {
        for (const picker of pickers) {
          picker.close();
        }
      }
    },
    { signal }
  );

  // Hidden inputs are not validated by
  // native form.reportValidity().
  root.addEventListener(
    'submit',
    event => {
      const form = event.target.closest(
        '[data-booking-reschedule]'
      );

      if (!form) return;

      const dateInput =
        form.elements.namedItem('booking_date');

      if (
        isISO(dateInput?.value) &&
        dateInput.value >= clinicToday()
      ) {
        return;
      }

      event.preventDefault();
      event.stopImmediatePropagation();

      let error = form.querySelector(
        '[data-jalali-error]'
      );

      if (!error) {
        error = document.createElement('p');
        error.className = 'dn-jalali-error';
        error.dataset.jalaliError = '1';
        error.setAttribute('role', 'alert');
        form.append(error);
      }

      error.textContent = fa()
        ? 'یک تاریخ شمسی معتبر انتخاب کنید.'
        : 'Choose a valid Jalali date.';
    },
    {
      capture: true,
      signal,
    }
  );

  return () => {
    observer.disconnect();

    for (const picker of pickers) {
      picker.close();
    }

    pickers.clear();
  };
}
