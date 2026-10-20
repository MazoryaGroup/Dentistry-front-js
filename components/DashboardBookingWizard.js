
/**
 * Dentistry — Dashboard Booking Wizard
 *
 * Doctor -> Service -> Date -> Availability -> Booking
 *
 * Uses:
 * - staffApi
 * - availabilityApi
 * - bookingApi
 *
 * FA / EN supported.
 */

import { t, getLanguage } from '../code/i18n.js';

import {
  staffApi,
  availabilityApi,
  AVAILABILITY_INTERVAL_MINUTES,
} from '../code/staffApi.js';

import { bookingApi } from '../code/bookingApi.js';

// ============================================
// LANGUAGE
// ============================================

const language = () =>
  getLanguage() === 'fa' ? 'fa' : 'en';

const localStrings = {
  en: {
    title: 'Book an appointment',
    subtitle: 'Choose your doctor, treatment and an available time.',
    doctor: 'Doctor',
    doctorPrompt: 'Select a doctor',
    treatment: 'Treatment',
    treatmentPrompt: 'Select a treatment',
    date: 'Appointment date',
    notes: 'Notes (optional)',
    notePlaceholder: 'Anything the clinic should know?',
    slots: 'Available times',
    chooseFirst: 'Choose a doctor, treatment and date to see available times.',
    loadingDoctors: 'Loading doctors…',
    emptyDoctors: 'There are no doctors available to book.',
    doctorsError: 'Doctors could not be loaded. Please try again.',
    loadingDoctor: 'Loading doctor details…',
    doctorError: 'Doctor details could not be loaded.',
    noServices: 'This doctor has no bookable services in the API response.',
    loadingSlots: 'Checking available times…',
    emptySlots: 'There are no available times for this selection.',
    slotsError: 'Available times could not be loaded. Check the API parameters and try again.',
    schedule: 'Doctor schedule',
    scheduleEmpty: 'Schedule information is not available.',
    scheduleError: 'Schedule could not be loaded.',
    submit: 'Confirm appointment',
    submitting: 'Creating your booking…',
    success: 'Your booking request was submitted. Check its status in your appointments.',
    createError: 'Booking could not be created. Please review your selection.',
    required: 'Please choose a doctor, a treatment, a date and an available time.',
    back: 'Back to appointments',
    retry: 'Retry',
    close: 'Close',
    slotHint: 'Each option shows the full appointment time. Start times are offered every 30 minutes; treatment duration may be longer. The clinic confirms availability when booking.',
    postSubmitHint: 'A booking may require a deposit or payment before confirmation.',
    minutes: 'min',
  },

  fa: {
    title: 'رزرو نوبت جدید',
    subtitle: 'پزشک، خدمت و یکی از ساعت‌های آزاد را انتخاب کنید.',
    doctor: 'پزشک',
    doctorPrompt: 'انتخاب پزشک',
    treatment: 'خدمت',
    treatmentPrompt: 'انتخاب خدمت',
    date: 'تاریخ مراجعه',
    notes: 'توضیحات (اختیاری)',
    notePlaceholder: 'اگر نکته‌ای برای کلینیک دارید بنویسید',
    slots: 'ساعت‌های آزاد',
    chooseFirst: 'برای مشاهده ساعت‌های آزاد، پزشک، خدمت و تاریخ را انتخاب کنید.',
    loadingDoctors: 'در حال دریافت پزشکان…',
    emptyDoctors: 'فعلاً پزشک قابل رزروی یافت نشد.',
    doctorsError: 'دریافت فهرست پزشکان ممکن نشد. دوباره تلاش کنید.',
    loadingDoctor: 'در حال دریافت اطلاعات پزشک…',
    doctorError: 'دریافت جزئیات پزشک ممکن نشد.',
    noServices: 'در پاسخ API خدمت قابل رزروی برای این پزشک وجود ندارد.',
    loadingSlots: 'در حال بررسی ساعت‌های آزاد…',
    emptySlots: 'برای این انتخاب ساعت آزادی ثبت نشده است.',
    slotsError: 'دریافت ساعت‌های آزاد ناموفق بود. پارامترهای API را بررسی کنید.',
    schedule: 'برنامه کاری پزشک',
    scheduleEmpty: 'اطلاعات برنامه کاری در دسترس نیست.',
    scheduleError: 'دریافت برنامه کاری پزشک ممکن نشد.',
    submit: 'تأیید رزرو',
    submitting: 'در حال ثبت رزرو…',
    success: 'درخواست رزرو ثبت شد. وضعیت آن را در بخش نوبت‌های خود ببینید.',
    createError: 'ثبت رزرو انجام نشد. اطلاعات انتخابی را بررسی کنید.',
    required: 'لطفاً پزشک، خدمت، تاریخ و یک ساعت آزاد را انتخاب کنید.',
    back: 'بازگشت به نوبت‌ها',
    retry: 'تلاش مجدد',
    close: 'بستن',
    slotHint: 'هر گزینه بازه کامل نوبت را نشان می‌دهد. شروع نوبت‌ها با فاصله ۳۰ دقیقه ارائه می‌شود، اما مدت خدمت ممکن است بیشتر باشد. تأیید نهایی با کلینیک است.',
    postSubmitHint: 'ممکن است برای تأیید نوبت نیاز به پرداخت بیعانه باشد.',
    minutes: 'دقیقه',
  },
};

function tr(key) {
  const id = `dashboard.wizard.${key}`;
  const value = t(id);

  return value && value !== id
    ? value
    : localStrings[language()][key] || key;
}

function escapeHTML(value) {
  return String(value ?? '').replace(
    /[&<>"']/g,
    char => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    })[char]
  );
}

const tx = key => escapeHTML(tr(key));

const positive = value =>
  Number.isSafeInteger(Number(value)) &&
  Number(value) > 0;

// ============================================
// API RESPONSE HELPERS
// ============================================

function collection(value, names = []) {
  if (Array.isArray(value)) return value;

  const root = value?.data ?? value;

  if (Array.isArray(root)) return root;

  const fields = [
    'data',
    ...names,
    'items',
    'results',
  ];

  for (const field of fields) {
    if (Array.isArray(root?.[field])) {
      return root[field];
    }

    if (Array.isArray(root?.[field]?.data)) {
      return root[field].data;
    }

    if (Array.isArray(value?.[field])) {
      return value[field];
    }
  }

  return [];
}

function record(value, names = []) {
  let result = value?.data ?? value;

  for (const name of names) {
    if (result?.[name]) {
      result = result[name];
    }
  }

  if (
    result?.data &&
    !Array.isArray(result.data) &&
    typeof result.data === 'object'
  ) {
    return result.data;
  }

  return result;
}

function translated(item) {
  const translations = item?.translations;

  if (Array.isArray(translations)) {
    return translations.find(item =>
      [
        item.lang,
        item.locale,
        item.language,
      ].includes(language())
    ) || {};
  }

  if (
    translations &&
    typeof translations === 'object'
  ) {
    return translations[language()] || {};
  }

  return item?.translation || {};
}

// ============================================
// DOCTOR SERVICES
// ============================================

function serviceList(data) {
  const raw =
    data?.services ??
    data?.staff_services ??
    data?.staffServices ??
    data?.provided_services ??
    data?.service_list ??
    [];

  if (!Array.isArray(raw)) return [];

  const seen = new Set();

  return raw
    .map(row => {
      const service = row?.service || row;
      const translation = translated(service);

      const id = Number(
        service?.id ?? row?.service_id
      );

      const name = String(
        translation.name ||
        translation.title ||
        service?.name ||
        service?.title ||
        row?.service_name ||
        ''
      ).trim();

      return { id, name };
    })
    .filter(service => {
      if (
        !positive(service.id) ||
        !service.name ||
        seen.has(service.id)
      ) {
        return false;
      }

      seen.add(service.id);
      return true;
    });
}

function doctorOf(item) {
  const translation = translated(item);

  const id = Number(
    item?.id ?? item?.staff_id
  );

  const name = String(
    translation.name ||
    item?.name ||
    item?.full_name ||
    item?.doctor_name ||
    ''
  ).trim();

  if (!positive(id) || !name) {
    return null;
  }

  return {
    id,
    name,
    services: serviceList(item),
  };
}

// ============================================
// DATE / TIME HELPERS
// ============================================

function hhmm(value) {
  if (typeof value !== 'string') return '';

  const time = value.trim();

  return /^(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d)?$/
    .test(time)
    ? time.slice(0, 5)
    : '';
}

function dateIsValid(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false;
  }

  const date = new Date(
    `${value}T12:00:00Z`
  );

  return (
    !Number.isNaN(date.getTime()) &&
    date.toISOString().slice(0, 10) === value
  );
}

function todayInClinic() {
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
// NORMALIZE AVAILABILITY RESPONSE
// ============================================

/**
 * Laravel response:
 *
 * {
 *   success: true,
 *   data: [
 *     {
 *       start_time: "08:00",
 *       end_time: "09:00",
 *       duration: 60,
 *       staff_ids: [3]
 *     }
 *   ]
 * }
 */

export function normalizeAvailabilitySlots(
  response,
  staffId
) {
  const root = response?.data ?? response;

  const candidates = [
    root,
    root?.slots,
    root?.available_slots,
    root?.availableSlots,
    root?.times,
    root?.availability,
    root?.data,
    root?.data?.slots,
    root?.data?.available_slots,
  ];

  const rows =
    candidates.find(Array.isArray) || [];

  const doctorId = Number(staffId);
  const seen = new Set();

  return rows
    .map(row => {
      if (
        !row ||
        typeof row !== 'object'
      ) {
        return null;
      }

      const startTime = hhmm(
        row.start_time
      );

      const endTime = hhmm(
        row.end_time
      );

      const duration = Number(
        row.duration
      );

      const staffIds = Array.isArray(
        row.staff_ids
      )
        ? row.staff_ids.map(Number)
        : null;

      const allowed =
        row.available !== false &&
        row.is_available !== false &&
        row.booked !== true &&
        ![
          'unavailable',
          'booked',
          'blocked',
        ].includes(
          String(row.status || '').toLowerCase()
        ) &&
        (
          !staffIds ||
          staffIds.includes(doctorId)
        );

      if (
        !allowed ||
        !startTime ||
        !endTime ||
        !Number.isFinite(duration) ||
        duration <= 0
      ) {
        return null;
      }

      return {
        start_time: startTime,
        end_time: endTime,
        duration,
      };
    })
    .filter(slot => {
      if (
        !slot ||
        seen.has(slot.start_time)
      ) {
        return false;
      }

      seen.add(slot.start_time);
      return true;
    })
    .sort((a, b) =>
      a.start_time.localeCompare(
        b.start_time
      )
    );
}

// ============================================
// DOCTOR SCHEDULE
// ============================================

function scheduleLines(response) {
  const rows = collection(response, [
    'schedules',
    'schedule',
    'staff_schedules',
    'working_hours',
    'days',
  ]);

  return rows
    .map(row => {
      const day =
        row.day_of_week ??
        row.day ??
        row.weekday ??
        row.date;

      const start = hhmm(
        row.start_time || row.start
      );

      const end = hhmm(
        row.end_time || row.end
      );

      if (
        day === undefined ||
        !start ||
        !end ||
        row.is_active === false
      ) {
        return '';
      }

      return `${String(day)}: ${start}–${end}`;
    })
    .filter(Boolean);
}

// ============================================
// API ERROR TEXT
// ============================================

function errorText(error, fallback) {
  const validations =
    error?.errors &&
    typeof error.errors === 'object'
      ? Object.values(error.errors)
          .flat()
          .map(String)
          .filter(Boolean)
          .join(' · ')
      : '';

  if (validations) return validations;

  if (
    typeof error?.message === 'string' &&
    error.message &&
    !/^Failed to fetch$/i.test(error.message)
  ) {
    return error.message;
  }

  return fallback;
}

// ============================================
// BOOKING WIZARD HTML
// ============================================

export function bookingWizardHTML() {
  return `
    <section
      class="dn-wizard"
      data-booking-wizard
      hidden
      aria-labelledby="dn-wizard-title"
    >

      <div class="dn-wizard-head">

        <div>

          <span class="dn-eyebrow">
            ${tx('date')} · ${tx('doctor')} · ${tx('treatment')}
          </span>

          <h2 id="dn-wizard-title">
            ${tx('title')}
          </h2>

          <p>
            ${tx('subtitle')}
          </p>

        </div>

        <button
          type="button"
          class="dn-wizard-close"
          data-wizard-close
          aria-label="${tx('close')}"
        >
          ×
        </button>

      </div>

      <form data-wizard-form novalidate>

        <div class="dn-wizard-form-grid">

          <label class="dn-wizard-field">

            <span>
              ${tx('doctor')}
            </span>

            <select
              name="doctor"
              data-wizard-doctor
              required
            >
              <option value="">
                ${tx('loadingDoctors')}
              </option>
            </select>

          </label>

          <label class="dn-wizard-field">

            <span>
              ${tx('treatment')}
            </span>

            <select
              name="service"
              data-wizard-service
              required
              disabled
            >
              <option value="">
                ${tx('treatmentPrompt')}
              </option>
            </select>

          </label>

          <label class="dn-wizard-field">

            <span>
              ${tx('date')}
            </span>

            <input
              name="date"
              data-wizard-date
              type="date"
              min="${todayInClinic()}"
              required
            />

          </label>

        </div>

        <p
          class="dn-wizard-muted"
          data-wizard-status
          aria-live="polite"
        >
          ${tx('loadingDoctors')}
        </p>

        <details class="dn-wizard-schedule">

          <summary>
            ${tx('schedule')}
          </summary>

          <p data-wizard-schedule>
            ${tx('scheduleEmpty')}
          </p>

        </details>

        <div class="dn-wizard-times">

          <strong>
            ${tx('slots')}
          </strong>

          <p>
            ${tx('slotHint')}
          </p>

          <div
            class="dn-wizard-slot-grid"
            data-wizard-slots
          >

            <span class="dn-wizard-muted">
              ${tx('chooseFirst')}
            </span>

          </div>

        </div>

        <label
          class="dn-wizard-field dn-wizard-notes"
        >

          <span>
            ${tx('notes')}
          </span>

          <textarea
            name="notes"
            data-wizard-notes
            rows="3"
            maxlength="1000"
            placeholder="${tx('notePlaceholder')}"
          ></textarea>

        </label>

        <div class="dn-wizard-bottom">

          <button
            type="button"
            class="dn-booking-secondary"
            data-wizard-close
          >
            ${tx('back')}
          </button>

          <button
            type="submit"
            class="dn-button dn-button-primary"
            data-wizard-submit
            disabled
          >
            ${tx('submit')}
          </button>

        </div>

        <p
          class="dn-wizard-feedback"
          role="status"
          aria-live="polite"
          data-wizard-feedback
          hidden
        ></p>

        <p class="dn-wizard-muted dn-wizard-hint">
          ${tx('postSubmitHint')}
        </p>

      </form>

    </section>
  `;
}

// ============================================
// INITIALIZE BOOKING WIZARD
// ============================================

export function initBookingWizard(
  root,
  signal,
  onCreated = () => {}
) {
  const wizard = root.querySelector(
    '[data-booking-wizard]'
  );

  if (!wizard) {
    return () => {};
  }

  const $ = selector =>
    wizard.querySelector(selector);

  const form = $('[data-wizard-form]');
  const selectDoctor = $('[data-wizard-doctor]');
  const selectService = $('[data-wizard-service]');
  const dateInput = $('[data-wizard-date]');
  const slotGrid = $('[data-wizard-slots]');
  const status = $('[data-wizard-status]');
  const schedule = $('[data-wizard-schedule]');
  const feedback = $('[data-wizard-feedback]');
  const submit = $('[data-wizard-submit]');

  let doctors = [];
  let selectedDoctor = null;
  let selectedTime = '';
  let availableSlots = [];

  let doctorsLoaded = false;
  let doctorRun = 0;
  let slotsRun = 0;
  let scheduleRun = 0;
  let creating = false;

  const alive = () =>
    !signal.aborted && root.isConnected;

  // ==========================================
  // FEEDBACK
  // ==========================================

  function message(text, type = 'note') {
    feedback.hidden = false;
    feedback.textContent = text;
    feedback.dataset.state = type;
  }

  function clearMessage() {
    feedback.hidden = true;
    feedback.textContent = '';
  }

  // ==========================================
  // SUBMIT VALIDATION
  // ==========================================

  function updateSubmit() {
    const slotIsSelected =
      availableSlots.some(
        slot => slot.start_time === selectedTime
      );

    submit.disabled =
      creating ||
      !positive(selectDoctor.value) ||
      !positive(selectService.value) ||
      !dateIsValid(dateInput.value) ||
      dateInput.value < todayInClinic() ||
      !slotIsSelected;
  }

  function resetSlots(text) {
    selectedTime = '';
    availableSlots = [];

    slotGrid.innerHTML = `
      <span class="dn-wizard-muted">
        ${escapeHTML(text)}
      </span>
    `;

    updateSubmit();
  }

  function selectOptions(services) {
    selectService.innerHTML = `
      <option value="">
        ${tx('treatmentPrompt')}
      </option>
    ` + services.map(service => `
      <option value="${service.id}">
        ${escapeHTML(service.name)}
      </option>
    `).join('');

    selectService.disabled =
      services.length === 0;
  }

  // ==========================================
  // LOAD DOCTORS
  // ==========================================

  async function loadDoctors() {
    const run = ++doctorRun;

    status.textContent = tr('loadingDoctors');
    selectDoctor.disabled = true;

    try {
      const result = await staffApi.list(signal);

      if (
        !alive() ||
        run !== doctorRun
      ) {
        return;
      }

      doctors = collection(
        result,
        ['staff', 'doctors', 'staffs']
      )
        .map(doctorOf)
        .filter(Boolean);

      doctorsLoaded = true;

      selectDoctor.innerHTML = `
        <option value="">
          ${tx('doctorPrompt')}
        </option>
      ` + doctors.map(doctor => `
        <option value="${doctor.id}">
          ${escapeHTML(doctor.name)}
        </option>
      `).join('');

      selectDoctor.disabled =
        doctors.length === 0;

      status.textContent = doctors.length
        ? tr('chooseFirst')
        : tr('emptyDoctors');

    } catch (error) {
      if (
        !alive() ||
        run !== doctorRun
      ) {
        return;
      }

      console.error(
        'Doctors API:',
        error
      );

      selectDoctor.innerHTML = `
        <option value="">
          ${tx('doctorPrompt')}
        </option>
      `;

      selectDoctor.disabled = true;

      status.innerHTML = `
        ${tx('doctorsError')}

        <button
          type="button"
          class="dn-wizard-inline"
          data-wizard-retry-doctors
        >
          ${tx('retry')}
        </button>
      `;
    }
  }

  // ==========================================
  // LOAD DOCTOR DETAILS
  // ==========================================

  async function loadDoctor(id) {
    const run = ++doctorRun;

    const doctor = doctors.find(
      item => item.id === id
    );

    if (!doctor) return;

    selectedDoctor = doctor;
    selectOptions(doctor.services);

    status.textContent = tr('loadingDoctor');

    try {
      const response = await staffApi.show(
        id,
        signal
      );

      if (
        !alive() ||
        run !== doctorRun ||
        selectDoctor.value !== String(id)
      ) {
        return;
      }

      const detail =
        doctorOf(
          record(response, ['staff', 'doctor'])
        ) || doctor;

      selectedDoctor = {
        ...doctor,
        ...detail,
        services: detail.services.length
          ? detail.services
          : doctor.services,
      };

      const previousService =
        selectService.value;

      selectOptions(
        selectedDoctor.services
      );

      if (
        selectedDoctor.services.some(
          service =>
            String(service.id) === previousService
        )
      ) {
        selectService.value =
          previousService;

        if (dateInput.value) {
          void loadSlots();
        }
      }

      status.textContent =
        selectedDoctor.services.length
          ? tr('chooseFirst')
          : tr('noServices');

    } catch (error) {
      if (
        !alive() ||
        run !== doctorRun
      ) {
        return;
      }

      console.error(
        'Doctor detail API:',
        error
      );

      status.textContent =
        doctor.services.length
          ? tr('doctorError')
          : tr('noServices');
    }
  }

  // ==========================================
  // LOAD DOCTOR SCHEDULE
  // ==========================================

  async function loadSchedule(id) {
    const run = ++scheduleRun;

    schedule.textContent =
      tr('loadingDoctor');

    try {
      const response = await staffApi.schedule(
        id,
        signal
      );

      if (
        !alive() ||
        run !== scheduleRun ||
        selectDoctor.value !== String(id)
      ) {
        return;
      }

      const lines = scheduleLines(
        response
      );

      schedule.textContent = lines.length
        ? lines.join(' · ')
        : tr('scheduleEmpty');

    } catch (error) {
      if (
        !alive() ||
        run !== scheduleRun
      ) {
        return;
      }

      schedule.textContent =
        tr('scheduleError');
    }
  }

  // ==========================================
  // LOAD AVAILABLE SLOTS
  // ==========================================

  async function loadSlots() {
    const run = ++slotsRun;

    resetSlots(
      tr('chooseFirst')
    );

    if (
      !positive(selectDoctor.value) ||
      !positive(selectService.value) ||
      !dateIsValid(dateInput.value) ||
      dateInput.value < todayInClinic()
    ) {
      return;
    }

    resetSlots(
      tr('loadingSlots')
    );

    status.textContent =
      tr('loadingSlots');

    try {
      const response = await availabilityApi.list(
        {
          staff_id: selectDoctor.value,
          service_id: selectService.value,
          date: dateInput.value,
          interval: AVAILABILITY_INTERVAL_MINUTES,
        },
        signal
      );

      if (
        !alive() ||
        run !== slotsRun
      ) {
        return;
      }

      const slots = normalizeAvailabilitySlots(
        response,
        Number(selectDoctor.value)
      );

      if (!slots.length) {
        resetSlots(
          tr('emptySlots')
        );

      } else {
        availableSlots = slots;

        slotGrid.innerHTML = slots.map(slot => `
          <button
            type="button"
            class="dn-wizard-slot"
            data-wizard-slot="${escapeHTML(slot.start_time)}"
            aria-pressed="false"
            aria-label="${escapeHTML(slot.start_time)} – ${escapeHTML(slot.end_time)}, ${escapeHTML(slot.duration)} ${tx('minutes')}"
          >

            <strong dir="ltr">
              ${escapeHTML(slot.start_time)}
              –
              ${escapeHTML(slot.end_time)}
            </strong>

            <small>
              ${escapeHTML(slot.duration)}
              ${tx('minutes')}
            </small>

          </button>
        `).join('');
      }

      status.textContent = '';

    } catch (error) {
      if (
        !alive() ||
        run !== slotsRun
      ) {
        return;
      }

      console.error(
        'Availability API:',
        error
      );

      resetSlots(
        tr('slotsError')
      );

      status.textContent = errorText(
        error,
        tr('slotsError')
      );

      status.insertAdjacentHTML(
        'beforeend',
        `
          <button
            type="button"
            class="dn-wizard-inline"
            data-wizard-retry-slots
          >
            ${tx('retry')}
          </button>
        `
      );
    }
  }

  // ==========================================
  // SHOW / CLOSE WIZARD
  // ==========================================

  function show() {
    wizard.hidden = false;

    wizard.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });

    if (!doctorsLoaded) {
      void loadDoctors();
    }

    selectDoctor.focus();
  }

  function close() {
    if (creating) return;

    wizard.hidden = true;
    clearMessage();
  }

  // ==========================================
  // CLICK EVENTS
  // ==========================================

  root.addEventListener(
    'click',
    event => {

      if (
        event.target.closest(
          '[data-booking-start]'
        )
      ) {
        show();
        return;
      }

      if (
        event.target.closest(
          '[data-wizard-close]'
        )
      ) {
        close();
        return;
      }

      if (
        event.target.closest(
          '[data-wizard-retry-doctors]'
        )
      ) {
        void loadDoctors();
        return;
      }

      if (
        event.target.closest(
          '[data-wizard-retry-slots]'
        )
      ) {
        void loadSlots();
        return;
      }

      const button = event.target.closest(
        '[data-wizard-slot]'
      );

      if (
        button &&
        slotGrid.contains(button)
      ) {
        const selected = availableSlots.find(
          slot =>
            slot.start_time ===
            button.dataset.wizardSlot
        );

        if (!selected) return;

        selectedTime = selected.start_time;

        for (
          const item
          of slotGrid.querySelectorAll(
            '[data-wizard-slot]'
          )
        ) {
          const active = item === button;

          item.classList.toggle(
            'is-active',
            active
          );

          item.setAttribute(
            'aria-pressed',
            String(active)
          );
        }

        updateSubmit();
      }
    },
    { signal }
  );

  // ==========================================
  // DOCTOR CHANGE
  // ==========================================

  selectDoctor.addEventListener(
    'change',
    () => {
      ++slotsRun;
      ++scheduleRun;
      ++doctorRun;

      selectedDoctor = null;

      selectOptions([]);
      resetSlots(
        tr('chooseFirst')
      );

      const id = Number(
        selectDoctor.value
      );

      if (!positive(id)) {
        schedule.textContent =
          tr('scheduleEmpty');

        status.textContent =
          tr('chooseFirst');

        return;
      }

      void loadDoctor(id);
      void loadSchedule(id);
    },
    { signal }
  );

  // ==========================================
  // SERVICE / DATE CHANGE
  // ==========================================

  selectService.addEventListener(
    'change',
    () => {
      clearMessage();
      void loadSlots();
    },
    { signal }
  );

  dateInput.addEventListener(
    'change',
    () => {
      clearMessage();
      void loadSlots();
    },
    { signal }
  );

  dateInput.addEventListener(
    'input',
    () => {
      if (
        dateInput.value <
        todayInClinic()
      ) {
        resetSlots(
          tr('chooseFirst')
        );
      }
    },
    { signal }
  );

  // ==========================================
  // CREATE BOOKING
  // ==========================================

  form.addEventListener(
    'submit',
    async event => {
      event.preventDefault();

      if (
        creating ||
        !alive()
      ) {
        return;
      }

      const validSlot = availableSlots.some(
        slot =>
          slot.start_time === selectedTime
      );

      if (
        !validSlot ||
        !positive(selectDoctor.value) ||
        !positive(selectService.value) ||
        !dateIsValid(dateInput.value) ||
        dateInput.value < todayInClinic()
      ) {
        message(
          tr('required'),
          'error'
        );

        return;
      }

      if (!form.reportValidity()) {
        return;
      }

      creating = true;
      updateSubmit();

      const previousLabel =
        submit.textContent;

      submit.textContent =
        tr('submitting');

      clearMessage();

      try {
        const result = await bookingApi.create(
          {
            booking_date: dateInput.value,

            notes: $(
              '[data-wizard-notes]'
            ).value.trim(),

            services: [
              {
                service_id: Number(
                  selectService.value
                ),

                staff_id: Number(
                  selectDoctor.value
                ),

                start_time: selectedTime,
              },
            ],
          },
          signal
        );

        if (!alive()) return;

        if (
          result?.success === false ||
          result?.status === false
        ) {
          throw new Error(
            String(
              result?.message ||
              tr('createError')
            )
          );
        }

        message(
          tr('success'),
          'success'
        );

        wizard.hidden = true;

        selectDoctor.value = '';
        selectOptions([]);

        dateInput.value = '';

        $(
          '[data-wizard-notes]'
        ).value = '';

        resetSlots(
          tr('chooseFirst')
        );

        selectedDoctor = null;

        onCreated();

      } catch (error) {
        if (!alive()) return;

        console.error(
          'Booking create API:',
          error
        );

        message(
          errorText(
            error,
            tr('createError')
          ),
          'error'
        );

        // Refresh availability after a failed booking.
        void loadSlots();

      } finally {
        creating = false;

        submit.textContent =
          previousLabel;

        updateSubmit();
      }
    },
    { signal }
  );

  // ==========================================
  // CLEANUP
  // ==========================================

  return () => {
    ++doctorRun;
    ++scheduleRun;
    ++slotsRun;
  };
}
