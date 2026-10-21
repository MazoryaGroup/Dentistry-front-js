
/**
 * Dentistry — Booking Wizard
 * Doctor -> Service -> Date -> Slot -> Booking -> Deposit
 *
 * Compatible with:
 * DashboardBookings.js
 * JalaliBookingCalendar.js
 */

import {
  t,
  getLanguage,
} from '../code/i18n.js';

import {
  staffApi,
  availabilityApi,
  AVAILABILITY_INTERVAL_MINUTES,
} from '../code/staffApi.js';

import { bookingApi } from '../code/bookingApi.js';

import {
  bookingIdFromResponse,
  depositGatewayUrl,
} from '../code/depositCheckout.js';

// ============================================
// LANGUAGE
// ============================================

const language = () =>
  getLanguage() === 'fa' ? 'fa' : 'en';

const words = {
  en: {
    title: 'Book an appointment',
    subtitle: 'Choose a doctor, treatment, date and available time.',
    doctor: 'Doctor',
    doctorPrompt: 'Select a doctor',
    treatment: 'Treatment',
    treatmentPrompt: 'Select a treatment',
    date: 'Appointment date',
    notes: 'Notes (optional)',
    notePlaceholder: 'Anything the clinic should know?',
    slots: 'Available times',
    chooseFirst: 'Select a doctor, treatment and date first.',
    loadingDoctors: 'Loading doctors…',
    emptyDoctors: 'No doctors are currently available.',
    doctorsError: 'Could not load the doctors.',
    loadingDoctor: 'Loading doctor details…',
    doctorError: 'Could not load doctor details.',
    noServices: 'No bookable services were returned for this doctor.',
    loadingSlots: 'Checking available times…',
    emptySlots: 'No available times for this selection.',
    slotsError: 'Could not retrieve available times.',
    schedule: 'Doctor schedule',
    scheduleEmpty: 'Schedule information is unavailable.',
    scheduleError: 'Could not retrieve the doctor schedule.',
    submit: 'Continue to deposit payment',
    submitting: 'Creating your appointment…',
    createError: 'Could not create the appointment.',
    required: 'Choose a doctor, treatment, valid date and one available time.',
    back: 'Back to appointments',
    retry: 'Retry',
    close: 'Close',
    slotHint: 'Times represent the full appointment window. Availability is checked again by the clinic at booking.',
    postSubmitHint: 'A deposit must be paid to confirm your booking.',
    minutes: 'min',
    paymentTitle: 'Booking created — deposit payment',
    paymentReady: 'Your appointment is registered. Pay the deposit to continue confirmation.',
    paymentStarting: 'Connecting to the payment gateway…',
    paymentButton: 'Continue to checkout',
    missingBookingId: 'The booking may have been created, but the API did not return a booking ID. Check your appointments; do not create the same booking again.',
    paymentError: 'The booking exists, but payment could not be started. You can retry here or from your appointment details.',
    uncertain: 'We could not confirm whether your booking was created. Check your appointments before trying again.',
  },

  fa: {
    title: 'رزرو نوبت جدید',
    subtitle: 'پزشک، خدمت، تاریخ و ساعت آزاد را انتخاب کنید.',
    doctor: 'پزشک',
    doctorPrompt: 'انتخاب پزشک',
    treatment: 'خدمت',
    treatmentPrompt: 'انتخاب خدمت',
    date: 'تاریخ مراجعه',
    notes: 'توضیحات (اختیاری)',
    notePlaceholder: 'اگر نکته‌ای برای کلینیک دارید بنویسید',
    slots: 'ساعت‌های آزاد',
    chooseFirst: 'ابتدا پزشک، خدمت و تاریخ را انتخاب کنید.',
    loadingDoctors: 'در حال دریافت پزشکان…',
    emptyDoctors: 'در حال حاضر پزشک قابل رزروی وجود ندارد.',
    doctorsError: 'دریافت پزشکان ناموفق بود.',
    loadingDoctor: 'در حال دریافت اطلاعات پزشک…',
    doctorError: 'دریافت جزئیات پزشک ناموفق بود.',
    noServices: 'خدمت قابل رزروی برای این پزشک برنگشته است.',
    loadingSlots: 'در حال بررسی ساعت‌های آزاد…',
    emptySlots: 'برای این انتخاب ساعت آزادی وجود ندارد.',
    slotsError: 'دریافت ساعت‌های آزاد ناموفق بود.',
    schedule: 'برنامه کاری پزشک',
    scheduleEmpty: 'برنامه کاری در دسترس نیست.',
    scheduleError: 'دریافت برنامه کاری پزشک ناموفق بود.',
    submit: 'ادامه و پرداخت بیعانه',
    submitting: 'در حال ثبت نوبت…',
    createError: 'ثبت نوبت انجام نشد.',
    required: 'لطفاً پزشک، خدمت، تاریخ معتبر و ساعت آزاد را انتخاب کنید.',
    back: 'بازگشت به نوبت‌ها',
    retry: 'تلاش مجدد',
    close: 'بستن',
    slotHint: 'هر ساعت بازه کامل نوبت را نشان می‌دهد. هنگام ثبت، ظرفیت دوباره در سرور بررسی می‌شود.',
    postSubmitHint: 'برای تأیید نوبت باید بیعانه پرداخت شود.',
    minutes: 'دقیقه',
    paymentTitle: 'نوبت ثبت شد؛ پرداخت بیعانه',
    paymentReady: 'نوبت شما ثبت شده است. برای ادامه تأیید، بیعانه را پرداخت کنید.',
    paymentStarting: 'در حال اتصال به درگاه پرداخت…',
    paymentButton: 'ادامه به صفحه پرداخت',
    missingBookingId: 'احتمالاً نوبت ثبت شده اما شناسه آن در پاسخ API نیست. ابتدا نوبت‌های خود را بررسی کنید و مجدداً رزرو نکنید.',
    paymentError: 'نوبت ثبت شده اما شروع پرداخت انجام نشد. می‌توانید همین‌جا یا از جزئیات نوبت دوباره برای پرداخت تلاش کنید.',
    uncertain: 'مشخص نیست نوبت ثبت شده یا نه. قبل از ثبت دوباره، فهرست نوبت‌های خود را بررسی کنید.',
  },
};

// ============================================
// HELPERS
// ============================================

function tr(key) {
  const path = `dashboard.wizard.${key}`;
  const localized = t(path);

  return localized && localized !== path
    ? localized
    : (words[language()][key] ?? key);
}

const esc = value =>
  String(value ?? '').replace(
    /[&<>"']/g,
    char => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    })[char]
  );

const tx = key => esc(tr(key));

const positive = value =>
  Number.isSafeInteger(Number(value)) &&
  Number(value) > 0;

function collection(response, names = []) {
  const value = response?.data ?? response;

  const candidates = [
    value,
    value?.data,
    ...names.map(key => value?.[key]),
    ...names.map(key => value?.[key]?.data),
  ];

  return candidates.find(Array.isArray) ?? [];
}

function record(response, names = []) {
  const value = response?.data ?? response;

  for (const name of names) {
    if (
      value?.[name] &&
      typeof value[name] === 'object' &&
      !Array.isArray(value[name])
    ) {
      return value[name];
    }
  }

  return value?.data && !Array.isArray(value.data)
    ? value.data
    : value;
}

function translationOf(item) {
  const translations = item?.translations;

  if (Array.isArray(translations)) {
    return translations.find(x =>
      [
        x.lang,
        x.locale,
        x.language,
      ].includes(language())
    ) ?? {};
  }

  if (
    translations &&
    typeof translations === 'object'
  ) {
    return translations[language()] ?? {};
  }

  return item?.translation ?? {};
}

function servicesOf(item) {
  const rows =
    item?.services ??
    item?.staff_services ??
    item?.staffServices ??
    item?.provided_services ??
    item?.service_list ??
    [];

  if (!Array.isArray(rows)) return [];

  const ids = new Set();

  return rows
    .map(row => {
      const service = row?.service ?? row;
      const locale = translationOf(service);

      return {
        id: Number(
          row?.service_id ?? service?.id
        ),

        name: String(
          locale?.name ??
          locale?.title ??
          service?.name ??
          service?.title ??
          row?.service_name ??
          ''
        ).trim(),
      };
    })
    .filter(service => {
      if (
        !positive(service.id) ||
        !service.name ||
        ids.has(service.id)
      ) {
        return false;
      }

      ids.add(service.id);

      return true;
    });
}

function doctorOf(item) {
  const id = Number(
    item?.id ?? item?.staff_id
  );

  const locale = translationOf(item);

  const name = String(
    locale?.name ??
    item?.name ??
    item?.full_name ??
    item?.doctor_name ??
    ''
  ).trim();

  return positive(id) && name
    ? {
        id,
        name,
        services: servicesOf(item),
      }
    : null;
}

function hhmm(value) {
  const time = String(value ?? '').trim();

  return /^(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d)?$/.test(time)
    ? time.slice(0, 5)
    : '';
}

function validDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value ?? '')) {
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

function errorText(error, fallback) {
  const validation =
    error?.errors &&
    typeof error.errors === 'object'
      ? Object.values(error.errors)
          .flat()
          .map(String)
          .filter(Boolean)
          .join(' · ')
      : '';

  return validation ||
    (
      typeof error?.message === 'string'
        ? error.message
        : fallback
    );
}

// ============================================
// AVAILABILITY
// ============================================

export function normalizeAvailabilitySlots(
  response,
  staffId
) {
  const value = response?.data ?? response;

  const rows = [
    value,
    value?.slots,
    value?.available_slots,
    value?.data,
  ].find(Array.isArray) ?? [];

  const seen = new Set();

  return rows
    .map(row => {
      if (
        !row ||
        typeof row !== 'object'
      ) {
        return null;
      }

      const start_time = hhmm(
        row.start_time
      );

      const end_time = hhmm(
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
          'blocked',
          'booked',
          'unavailable',
        ].includes(
          String(row.status ?? '').toLowerCase()
        ) &&
        (
          staffIds === null ||
          staffIds.includes(Number(staffId))
        );

      return (
        allowed &&
        start_time &&
        end_time &&
        Number.isFinite(duration) &&
        duration > 0
      )
        ? {
            start_time,
            end_time,
            duration,
          }
        : null;
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

function scheduleLines(response) {
  return collection(response, [
    'schedules',
    'schedule',
    'staff_schedules',
    'working_hours',
    'days',
  ])
    .filter(row =>
      row &&
      row.is_active !== false
    )
    .map(row => {
      const day =
        row.day_of_week ??
        row.day ??
        row.weekday ??
        row.date;

      const start = hhmm(
        row.start_time ?? row.start
      );

      const end = hhmm(
        row.end_time ?? row.end
      );

      return day != null && start && end
        ? `${day}: ${start}–${end}`
        : '';
    })
    .filter(Boolean);
}

// ============================================
// WIZARD HTML
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
            ${tx('doctor')} · ${tx('treatment')} · ${tx('date')}
          </span>

          <h2 id="dn-wizard-title">
            ${tx('title')}
          </h2>

          <p>${tx('subtitle')}</p>
        </div>

        <button
          type="button"
          class="dn-wizard-close"
          data-wizard-close
          aria-label="${tx('close')}"
        >×</button>
      </div>

      <form data-wizard-form novalidate>
        <div class="dn-wizard-form-grid">

          <label class="dn-wizard-field">
            <span>${tx('doctor')}</span>

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
            <span>${tx('treatment')}</span>

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
            <span>${tx('date')}</span>

            <input
              type="date"
              name="date"
              data-wizard-date
              min="${clinicToday()}"
              required
            >
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
          <summary>${tx('schedule')}</summary>

          <p data-wizard-schedule>
            ${tx('scheduleEmpty')}
          </p>
        </details>

        <div class="dn-wizard-times">
          <strong>${tx('slots')}</strong>
          <p>${tx('slotHint')}</p>

          <div
            class="dn-wizard-slot-grid"
            data-wizard-slots
          >
            <span class="dn-wizard-muted">
              ${tx('chooseFirst')}
            </span>
          </div>
        </div>

        <label class="dn-wizard-field dn-wizard-notes">
          <span>${tx('notes')}</span>

          <textarea
            name="notes"
            rows="3"
            maxlength="1000"
            data-wizard-notes
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
          data-wizard-feedback
          hidden
          role="status"
          aria-live="polite"
        ></p>

        <p class="dn-wizard-muted dn-wizard-hint">
          ${tx('postSubmitHint')}
        </p>
      </form>

      <!-- DEPOSIT PAYMENT STEP -->

      <div
        class="dn-wizard-payment"
        data-wizard-payment
        hidden
      >
        <h3 data-wizard-payment-title>
          ${tx('paymentTitle')}
        </h3>

        <p
          data-wizard-payment-message
          role="status"
          aria-live="polite"
        ></p>

        <button
          type="button"
          class="dn-button dn-button-primary"
          data-wizard-pay-deposit
        >
          ${tx('paymentButton')}
        </button>

        <div class="dn-wizard-bottom">
          <button
            type="button"
            class="dn-booking-secondary"
            data-wizard-close
          >
            ${tx('back')}
          </button>
        </div>
      </div>

    </section>
  `;
}

// ============================================
// INITIALIZATION
// ============================================

export function initBookingWizard(
  root,
  signal,
  onCreated = () => {}
) {
  const wizard = root.querySelector(
    '[data-booking-wizard]'
  );

  if (!wizard) return () => {};

  const $ = selector =>
    wizard.querySelector(selector);

  const form = $('[data-wizard-form]');
  const doctorInput = $('[data-wizard-doctor]');
  const serviceInput = $('[data-wizard-service]');
  const dateInput = $('[data-wizard-date]');
  const status = $('[data-wizard-status]');
  const schedule = $('[data-wizard-schedule]');
  const slotsNode = $('[data-wizard-slots]');
  const feedback = $('[data-wizard-feedback]');
  const submit = $('[data-wizard-submit]');
  const payment = $('[data-wizard-payment]');
  const paymentMessage = $('[data-wizard-payment-message]');
  const payButton = $('[data-wizard-pay-deposit]');

  let doctors = [];
  let doctorsLoaded = false;

  let selectedTime = '';
  let availableSlots = [];

  let doctorsRun = 0;
  let doctorRun = 0;
  let scheduleRun = 0;
  let slotRun = 0;

  let creating = false;
  let paying = false;

  let bookingSubmitted = false;
  let pendingBookingId = null;
  let submissionUncertain = false;

  const alive = () =>
    !signal.aborted &&
    root.isConnected;

  // ==========================================
  // NOTIFICATIONS
  // ==========================================

  const notify = (
    text,
    type = 'info'
  ) => {
    feedback.hidden = false;
    feedback.textContent = text;
    feedback.dataset.state = type;
  };

  const clearNotice = () => {
    feedback.hidden = true;
    feedback.textContent = '';
  };

  // ==========================================
  // VALIDATION
  // ==========================================

  function updateSubmit() {
    submit.disabled =
      creating ||
      bookingSubmitted ||
      submissionUncertain ||
      !positive(doctorInput.value) ||
      !positive(serviceInput.value) ||
      !validDate(dateInput.value) ||
      dateInput.value < clinicToday() ||
      !availableSlots.some(
        slot => slot.start_time === selectedTime
      );
  }

  function resetSlots(message) {
    selectedTime = '';
    availableSlots = [];

    slotsNode.innerHTML = `
      <span class="dn-wizard-muted">
        ${esc(message)}
      </span>
    `;

    updateSubmit();
  }

  function setServices(services) {
    serviceInput.innerHTML = `
      <option value="">
        ${tx('treatmentPrompt')}
      </option>
    ` + services.map(service => `
      <option value="${service.id}">
        ${esc(service.name)}
      </option>
    `).join('');

    serviceInput.disabled =
      services.length === 0;
  }

  // ==========================================
  // LOAD DOCTORS
  // ==========================================

  async function loadDoctors() {
    const request = ++doctorsRun;

    doctorInput.disabled = true;
    status.textContent = tr('loadingDoctors');

    try {
      const response = await staffApi.list(
        signal
      );

      if (
        !alive() ||
        request !== doctorsRun
      ) {
        return;
      }

      if (response?.success === false) {
        throw new Error(
          response.message ||
          tr('doctorsError')
        );
      }

      doctors = collection(response, [
        'staff',
        'doctors',
        'staffs',
      ])
        .map(doctorOf)
        .filter(Boolean);

      doctorInput.innerHTML = `
        <option value="">
          ${tx('doctorPrompt')}
        </option>
      ` + doctors.map(doctor => `
        <option value="${doctor.id}">
          ${esc(doctor.name)}
        </option>
      `).join('');

      doctorInput.disabled =
        doctors.length === 0;

      doctorsLoaded = true;

      status.textContent = doctors.length
        ? tr('chooseFirst')
        : tr('emptyDoctors');

    } catch (error) {
      if (
        !alive() ||
        request !== doctorsRun
      ) {
        return;
      }

      console.error('Doctors API:', error);

      doctorInput.disabled = true;

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
  // DOCTOR DETAILS
  // ==========================================

  async function loadDoctor(id) {
    const request = ++doctorRun;

    const doctor = doctors.find(
      item => item.id === id
    );

    if (!doctor) return;

    setServices(doctor.services);
    status.textContent = tr('loadingDoctor');

    try {
      const response = await staffApi.show(
        id,
        signal
      );

      if (
        !alive() ||
        request !== doctorRun ||
        doctorInput.value !== String(id)
      ) {
        return;
      }

      if (response?.success === false) {
        throw new Error(
          response.message ||
          tr('doctorError')
        );
      }

      const detail = doctorOf(
        record(response, ['staff', 'doctor'])
      );

      const previous = serviceInput.value;

      const services = detail?.services?.length
        ? detail.services
        : doctor.services;

      setServices(services);

      if (
        services.some(
          service =>
            String(service.id) === previous
        )
      ) {
        serviceInput.value = previous;

        if (dateInput.value) {
          void loadSlots();
        }
      }

      status.textContent = services.length
        ? tr('chooseFirst')
        : tr('noServices');

    } catch (error) {
      if (
        !alive() ||
        request !== doctorRun
      ) {
        return;
      }

      console.error(
        'Doctor details:',
        error
      );

      status.textContent = doctor.services.length
        ? tr('doctorError')
        : tr('noServices');
    }
  }

  // ==========================================
  // DOCTOR SCHEDULE
  // ==========================================

  async function loadSchedule(id) {
    const request = ++scheduleRun;

    schedule.textContent =
      tr('loadingDoctor');

    try {
      const result = await staffApi.schedule(
        id,
        signal
      );

      if (
        !alive() ||
        request !== scheduleRun ||
        doctorInput.value !== String(id)
      ) {
        return;
      }

      if (result?.success === false) {
        throw new Error(
          result.message ||
          tr('scheduleError')
        );
      }

      const lines = scheduleLines(result);

      schedule.textContent = lines.length
        ? lines.join(' · ')
        : tr('scheduleEmpty');

    } catch (error) {
      if (
        !alive() ||
        request !== scheduleRun
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
    const request = ++slotRun;

    resetSlots(tr('chooseFirst'));

    const staffId = Number(
      doctorInput.value
    );

    const serviceId = Number(
      serviceInput.value
    );

    const day = dateInput.value;

    if (
      !positive(staffId) ||
      !positive(serviceId) ||
      !validDate(day) ||
      day < clinicToday()
    ) {
      return;
    }

    resetSlots(tr('loadingSlots'));

    status.textContent =
      tr('loadingSlots');

    try {
      const result = await availabilityApi.list(
        {
          staff_id: staffId,
          service_id: serviceId,
          date: day,
          interval: AVAILABILITY_INTERVAL_MINUTES,
        },
        signal
      );

      if (
        !alive() ||
        request !== slotRun ||
        doctorInput.value !== String(staffId) ||
        serviceInput.value !== String(serviceId) ||
        dateInput.value !== day
      ) {
        return;
      }

      if (result?.success === false) {
        throw new Error(
          result.message ||
          tr('slotsError')
        );
      }

      const slots = normalizeAvailabilitySlots(
        result,
        staffId
      );

      availableSlots = slots;

      slotsNode.innerHTML = slots.length
        ? slots.map(slot => `
            <button
              type="button"
              class="dn-wizard-slot"
              data-wizard-slot="${esc(slot.start_time)}"
              aria-pressed="false"
            >
              <strong dir="ltr">
                ${esc(slot.start_time)}
                –
                ${esc(slot.end_time)}
              </strong>

              <small>
                ${esc(slot.duration)}
                ${tx('minutes')}
              </small>
            </button>
          `).join('')
        : `
            <span class="dn-wizard-muted">
              ${tx('emptySlots')}
            </span>
          `;

      status.textContent = '';

      updateSubmit();

    } catch (error) {
      if (
        !alive() ||
        request !== slotRun
      ) {
        return;
      }

      console.error(
        'Availability API:',
        error
      );

      resetSlots(tr('slotsError'));

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
  // SHOW / CLOSE
  // ==========================================

  function show() {
    wizard.hidden = false;

    if (
      !bookingSubmitted &&
      !doctorsLoaded
    ) {
      void loadDoctors();
    }

    // Wait until Dashboard switches to Appointments.
    requestAnimationFrame(() => {
      if (
        !alive() ||
        wizard.hidden
      ) {
        return;
      }

      wizard.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });

      if (
        bookingSubmitted &&
        pendingBookingId
      ) {
        payButton.focus();

      } else if (!bookingSubmitted) {
        doctorInput.focus();
      }
    });
  }

  function close() {
    if (creating || paying) return;

    wizard.hidden = true;
    clearNotice();
  }

  // ==========================================
  // DEPOSIT PAYMENT
  // ==========================================

  
function startDepositPayment() {
  if (!pendingBookingId || !alive()) {
    return;
  }

  const url = new URL(
    '/checkout',
    window.location.origin
  );

  url.searchParams.set(
    'booking_id',
    String(pendingBookingId)
  );

  url.searchParams.set('mode', 'deposit');

  window.location.assign(url.toString());
}


  payButton.addEventListener(
    'click',
    () => void startDepositPayment(),
    { signal }
  );

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
        slotsNode.contains(button) &&
        !bookingSubmitted
      ) {
        const slot = availableSlots.find(
          item =>
            item.start_time ===
            button.dataset.wizardSlot
        );

        if (!slot) return;

        selectedTime = slot.start_time;

        slotsNode
          .querySelectorAll('[data-wizard-slot]')
          .forEach(element => {
            const active = element === button;

            element.classList.toggle(
              'is-active',
              active
            );

            element.setAttribute(
              'aria-pressed',
              String(active)
            );
          });

        updateSubmit();
      }
    },
    { signal }
  );

  // ==========================================
  // DOCTOR CHANGE
  // ==========================================

  doctorInput.addEventListener(
    'change',
    () => {
      ++doctorRun;
      ++scheduleRun;
      ++slotRun;

      setServices([]);
      resetSlots(tr('chooseFirst'));

      const id = Number(
        doctorInput.value
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

  serviceInput.addEventListener(
    'change',
    () => {
      clearNotice();
      void loadSlots();
    },
    { signal }
  );

  dateInput.addEventListener(
    'change',
    () => {
      clearNotice();
      void loadSlots();
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
        bookingSubmitted ||
        submissionUncertain ||
        !alive()
      ) {
        return;
      }

      const valid =
        positive(doctorInput.value) &&
        positive(serviceInput.value) &&
        validDate(dateInput.value) &&
        dateInput.value >= clinicToday() &&
        availableSlots.some(
          item =>
            item.start_time === selectedTime
        );

      if (!valid) {
        notify(tr('required'), 'error');
        return;
      }

      if (!form.reportValidity()) {
        return;
      }

      creating = true;
      updateSubmit();

      submit.textContent =
        tr('submitting');

      clearNotice();

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
                  serviceInput.value
                ),

                staff_id: Number(
                  doctorInput.value
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
            result?.message ||
            tr('createError')
          );
        }

        // Booking was created successfully.
        // Never send POST /bookings again.
        bookingSubmitted = true;

        pendingBookingId =
          bookingIdFromResponse(result);

        // Switch to deposit payment.
        form.hidden = true;
        payment.hidden = false;

        paymentMessage.textContent =
          pendingBookingId
            ? tr('paymentReady')
            : tr('missingBookingId');

        payButton.hidden =
          !pendingBookingId;

        // Refresh appointments without
        // interrupting the payment step.
        try {
          Promise.resolve(
            onCreated(result)
          ).catch(console.error);

        } catch (error) {
          console.error(
            'Booking refresh callback:',
            error
          );
        }

        
      } catch (error) {
        if (!alive()) return;

        console.error(
          'Create booking:',
          error
        );

        const ambiguous =
          error?.status === 0 ||
          error?.status === 408 ||
          error?.name === 'AbortError' ||
          /fetch|network|timed out|timeout|load failed/i.test(
            String(error?.message)
          );

        if (ambiguous) {
          submissionUncertain = true;

          notify(
            tr('uncertain'),
            'error'
          );

        } else {
          notify(
            errorText(
              error,
              tr('createError')
            ),
            'error'
          );

          // Recheck availability after a
          // rejected booking request.
          void loadSlots();
        }

      } finally {
        creating = false;

        if (alive()) {
          submit.textContent =
            tr('submit');

          updateSubmit();
        }
      }
    },
    { signal }
  );

  return () => {
    ++doctorsRun;
    ++doctorRun;
    ++scheduleRun;
    ++slotRun;
  };
}
