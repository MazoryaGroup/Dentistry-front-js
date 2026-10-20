
/**
 * Dentistry — Jalali Booking Calendar
 *
 * Supports:
 * - New appointment
 * - Reschedule appointment
 *
 * UI: Jalali (Shamsi)
 * API value: Gregorian YYYY-MM-DD
 */

import {
  toJalaali,
  toGregorian,
  jalaaliMonthLength,
} from 'jalaali-js';

import { getLanguage } from '../code/i18n.js';

const monthsFa = [
  'فروردین', 'اردیبهشت', 'خرداد',
  'تیر', 'مرداد', 'شهریور',
  'مهر', 'آبان', 'آذر',
  'دی', 'بهمن', 'اسفند',
];

const monthsEn = [
  'Farvardin', 'Ordibehesht', 'Khordad',
  'Tir', 'Mordad', 'Shahrivar',
  'Mehr', 'Aban', 'Azar',
  'Dey', 'Bahman', 'Esfand',
];

const weekdaysFa = [
  'ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج',
];

const weekdaysEn = [
  'Sa', 'Su', 'Mo', 'Tu',
  'We', 'Th', 'Fr',
];

const isFa = () => getLanguage() === 'fa';

const faDigits = value =>
  String(value).replace(
    /\d/g,
    digit => '۰۱۲۳۴۵۶۷۸۹'[Number(digit)]
  );

const digits = value =>
  isFa() ? faDigits(value) : String(value);

const pad = number =>
  String(number).padStart(2, '0');

// ============================================
// TEHRAN TODAY
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

// ============================================
// DATE CONVERSION
// ============================================

function jalaliFromISO(iso) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso || '')) {
    return null;
  }

  const [year, month, day] =
    iso.split('-').map(Number);

  const parsed = new Date(
    Date.UTC(year, month - 1, day)
  );

  if (
    parsed.toISOString().slice(0, 10) !== iso
  ) {
    return null;
  }

  return toJalaali(year, month, day);
}

function gregorianISO(jy, jm, jd) {
  const { gy, gm, gd } = toGregorian(
    jy,
    jm,
    jd
  );

  return `${gy}-${pad(gm)}-${pad(gd)}`;
}

function formatJalali(date) {
  return digits(
    `${date.jy}/${pad(date.jm)}/${pad(date.jd)}`
  );
}

// ============================================
// INITIALIZE ALL BOOKING DATE FIELDS
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
    if (input.dataset.jalaliReady) {
      return;
    }

    input.dataset.jalaliReady = '1';

    // Replace the label container with a div,
    // preserving its classes and children.
    const oldLabel =
      input.parentElement?.tagName === 'LABEL'
        ? input.parentElement
        : null;

    let wrapper;

    if (oldLabel) {
      wrapper = document.createElement('div');

      wrapper.className = oldLabel.className;

      while (oldLabel.firstChild) {
        wrapper.append(oldLabel.firstChild);
      }

      oldLabel.replaceWith(wrapper);
    } else {
      wrapper = document.createElement('div');

      input.before(wrapper);
      wrapper.append(input);
    }

    wrapper.classList.add('dn-jalali-field');

    // Keep the original form field for Laravel.
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
      isFa()
        ? 'انتخاب تاریخ شمسی'
        : 'Choose Jalali date'
    );

    popup.hidden = true;

    wrapper.append(trigger, popup);

    // Current selected month or current Tehran month.
    const initial =
      jalaliFromISO(input.value) ||
      jalaliFromISO(clinicToday());

    let year = initial.jy;
    let month = initial.jm;

    // ========================================
    // DISPLAY SELECTED DATE
    // ========================================

    function syncLabel() {
      const selected = jalaliFromISO(
        input.value
      );

      trigger.textContent = selected
        ? formatJalali(selected)
        : (
          isFa()
            ? 'انتخاب تاریخ شمسی'
            : 'Select Jalali date'
        );
    }

    // ========================================
    // RENDER CALENDAR
    // ========================================

    function render() {
      const today = clinicToday();

      const { gy, gm, gd } = toGregorian(
        year,
        month,
        1
      );

      // Convert Sunday-first JS weekdays
      // to Saturday-first Persian weekdays.
      const offset = (
        new Date(
          Date.UTC(gy, gm - 1, gd)
        ).getUTCDay() + 1
      ) % 7;

      const count = jalaaliMonthLength(
        year,
        month
      );

      const week = isFa()
        ? weekdaysFa
        : weekdaysEn;

      const names = isFa()
        ? monthsFa
        : monthsEn;

      const title =
        `${names[month - 1]} ${digits(year)}`;

      let days = '<span></span>'.repeat(offset);

      for (let day = 1; day <= count; day++) {
        const iso = gregorianISO(
          year,
          month,
          day
        );

        const selected = iso === input.value;

        const disabled = iso < today;

        days += `
          <button
            type="button"
            class="dn-jalali-day${selected ? ' is-selected' : ''}"
            data-jalali-day="${iso}"
            aria-pressed="${selected}"
            ${disabled ? 'disabled' : ''}
          >
            ${digits(day)}
          </button>
        `;
      }

      popup.innerHTML = `
        <div class="dn-jalali-head">

          <button
            type="button"
            data-jalali-nav="prev"
            aria-label="${isFa() ? 'ماه قبل' : 'Previous month'}"
          >
            ‹
          </button>

          <strong>
            ${title}
          </strong>

          <button
            type="button"
            data-jalali-nav="next"
            aria-label="${isFa() ? 'ماه بعد' : 'Next month'}"
          >
            ›
          </button>

        </div>

        <div class="dn-jalali-grid dn-jalali-weekdays">
          ${week.map(day => `
            <span>${day}</span>
          `).join('')}
        </div>

        <div class="dn-jalali-grid">
          ${days}
        </div>
      `;
    }

    // ========================================
    // OPEN / CLOSE
    // ========================================

    function close() {
      popup.hidden = true;

      trigger.setAttribute(
        'aria-expanded',
        'false'
      );
    }

    const picker = {
      wrapper,
      close,
      syncLabel,
    };

    pickers.add(picker);

    trigger.addEventListener(
      'click',
      () => {
        for (const other of pickers) {
          if (other !== picker) {
            other.close();
          }
        }

        syncLabel();

        if (popup.hidden) {
          const selected = jalaliFromISO(
            input.value
          );

          if (selected) {
            year = selected.jy;
            month = selected.jm;
          }

          render();

          popup.hidden = false;

          trigger.setAttribute(
            'aria-expanded',
            'true'
          );

        } else {
          close();
        }
      },
      { signal }
    );

    // ========================================
    // CALENDAR CLICKS
    // ========================================

    popup.addEventListener(
      'click',
      event => {
        const nav = event.target.closest(
          '[data-jalali-nav]'
        );

        if (nav) {
          month +=
            nav.dataset.jalaliNav === 'next'
              ? 1
              : -1;

          if (month > 12) {
            month = 1;
            year++;
          }

          if (month < 1) {
            month = 12;
            year--;
          }

          render();
          return;
        }

        const day = event.target.closest(
          '[data-jalali-day]'
        );

        if (!day || day.disabled) {
          return;
        }

        // IMPORTANT:
        // Save the Gregorian ISO value.
        input.value = day.dataset.jalaliDay;

        syncLabel();
        close();

        // Existing Availability logic will
        // automatically fetch new slots.
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

  // ============================================
  // DYNAMIC FORMS
  // ============================================

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

  // Reschedule forms appear after an API call.
  const observer = new MutationObserver(
    upgradeAll
  );

  observer.observe(root, {
    childList: true,
    subtree: true,
  });

  // Close by clicking outside.
  document.addEventListener(
    'click',
    event => {
      for (const picker of pickers) {
        if (
          !picker.wrapper.contains(
            event.target
          )
        ) {
          picker.close();
        }
      }
    },
    { signal }
  );

  // Close by pressing Escape.
  document.addEventListener(
    'keydown',
    event => {
      if (event.key !== 'Escape') {
        return;
      }

      for (const picker of pickers) {
        picker.close();
      }
    },
    { signal }
  );

  // Refresh displayed value when reopening
  // the booking form after a previous booking.
  root.addEventListener(
    'click',
    event => {
      if (
        event.target.closest(
          '[data-booking-start]'
        )
      ) {
        for (const picker of pickers) {
          picker.syncLabel();
        }
      }
    },
    { signal }
  );

  // Hidden inputs are not natively
  // constraint-validated. Check rescheduling.
  root.addEventListener(
    'submit',
    event => {
      const form = event.target.closest(
        '[data-booking-reschedule]'
      );

      if (!form) {
        return;
      }

      const field = form.elements.namedItem(
        'booking_date'
      );

      const value = field?.value || '';

      if (
        jalaliFromISO(value) &&
        value >= clinicToday()
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

        error.dataset.jalaliError = '1';
        error.className = 'dn-jalali-error';

        error.setAttribute(
          'role',
          'alert'
        );

        form.append(error);
      }

      error.textContent = isFa()
        ? 'لطفاً یک تاریخ شمسی معتبر از امروز به بعد انتخاب کنید.'
        : 'Please select a valid Jalali date from today onward.';
    },
    {
      capture: true,
      signal,
    }
  );

  // ============================================
  // CLEANUP
  // ============================================

  return () => {
    observer.disconnect();

    for (const picker of pickers) {
      picker.close();
    }

    pickers.clear();
  };
}
