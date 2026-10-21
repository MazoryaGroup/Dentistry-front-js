
/**
 * Dentistry — Patient Appointments
 *
 * GET    /api/v1/bookings
 * GET    /api/v1/bookings/{id}
 * POST   /api/v1/bookings/{id}/cancel
 * POST   /api/v1/bookings/{id}/reschedule
 *
 * Booking Wizard + Deposit Payment
 */

import {
  t,
  getLanguage,
} from '../code/i18n.js';

import { bookingApi } from '../code/bookingApi.js';

import {
  bookingWizardHTML,
  initBookingWizard,
} from './DashboardBookingWizard.js';

import {
  bookingIdFromResponse,
  depositGatewayUrl,
} from '../code/depositCheckout.js';

// ============================================
// LANGUAGE
// ============================================

const L = () =>
  getLanguage() === 'fa' ? 'fa' : 'en';

const phrases = {
  en: {
    newBooking: 'Book a new appointment',
    loading: 'Loading your appointments…',
    retry: 'Try again',
    emptyTitle: 'No appointments yet',
    emptyText: 'Your appointments will appear here after booking.',
    loadError: 'Could not load your appointments.',
    detailError: 'Could not load the appointment details.',
    appointment: 'Appointment',
    details: 'Appointment details',
    status: 'Status',
    date: 'Date',
    time: 'Time',
    doctor: 'Doctor',
    services: 'Services',
    notes: 'Notes',
    bookingNumber: 'Booking',
    choose: 'Select an appointment to view details.',
    view: 'View details',
    cancel: 'Cancel appointment',
    reschedule: 'Change date or time',
    cancelReason: 'Reason for cancellation',
    reasonPlaceholder: 'Why do you need to cancel?',
    confirmCancel: 'Confirm cancellation',
    cancelConfirm: 'I want to cancel this appointment.',
    newDate: 'New date',
    newTime: 'New time',
    confirmReschedule: 'Confirm change',
    back: 'Back',
    saving: 'Saving…',
    cancelled: 'Appointment cancelled.',
    changed: 'Appointment rescheduled.',
    actionError: 'Could not update your appointment.',
    pending: 'Pending',
    confirmed: 'Confirmed',
    completed: 'Completed',
    cancelledStatus: 'Cancelled',
    awaitingPayment: 'Awaiting payment',
    unknown: 'Status unavailable',
    noServices: 'Services unavailable',
    noDoctor: 'Not assigned',
    noTime: 'Time unavailable',
    listSubtitle: 'Select an appointment to see details, reschedule or manage payment.',
    listLabel: 'Appointments',
    page: 'Page',
    previous: 'Previous',
    next: 'Next',
    partial: 'More bookings may exist on other pages.',
    upcoming: 'Upcoming',
    nextDate: 'Next appointment',
    unsupported: 'The clinic validates cancellation and rescheduling restrictions.',
    bookingCreated: 'Booking registered. Continue with the deposit payment.',
    payDeposit: 'Pay deposit',
    openingGateway: 'Connecting to payment gateway…',
    paymentError: 'Your booking exists, but payment could not be started. Retry payment.',
    missingDate: 'Choose a valid appointment date.',
  },

  fa: {
    newBooking: 'رزرو نوبت جدید',
    loading: 'در حال دریافت نوبت‌های شما…',
    retry: 'تلاش مجدد',
    emptyTitle: 'هنوز نوبتی ندارید',
    emptyText: 'بعد از ثبت رزرو، نوبت شما در این قسمت نمایش داده می‌شود.',
    loadError: 'دریافت نوبت‌ها ممکن نشد.',
    detailError: 'دریافت جزئیات نوبت ممکن نشد.',
    appointment: 'نوبت',
    details: 'جزئیات نوبت',
    status: 'وضعیت',
    date: 'تاریخ',
    time: 'ساعت',
    doctor: 'پزشک',
    services: 'خدمات',
    notes: 'یادداشت',
    bookingNumber: 'شماره رزرو',
    choose: 'برای مشاهده جزئیات یک نوبت را انتخاب کنید.',
    view: 'مشاهده جزئیات',
    cancel: 'لغو نوبت',
    reschedule: 'تغییر تاریخ یا ساعت',
    cancelReason: 'دلیل لغو',
    reasonPlaceholder: 'دلیل لغو نوبت را بنویسید',
    confirmCancel: 'تأیید لغو نوبت',
    cancelConfirm: 'می‌خواهم این نوبت را لغو کنم.',
    newDate: 'تاریخ جدید',
    newTime: 'ساعت جدید',
    confirmReschedule: 'تأیید تغییر زمان',
    back: 'بازگشت',
    saving: 'در حال ثبت…',
    cancelled: 'نوبت لغو شد.',
    changed: 'زمان نوبت تغییر کرد.',
    actionError: 'ویرایش نوبت انجام نشد.',
    pending: 'در انتظار',
    confirmed: 'تأییدشده',
    completed: 'انجام‌شده',
    cancelledStatus: 'لغوشده',
    awaitingPayment: 'در انتظار پرداخت',
    unknown: 'وضعیت نامشخص',
    noServices: 'اطلاعات خدمات موجود نیست',
    noDoctor: 'تعیین نشده',
    noTime: 'ساعت مشخص نیست',
    listSubtitle: 'برای جزئیات، تغییر زمان یا پرداخت بیعانه یک نوبت را انتخاب کنید.',
    listLabel: 'نوبت‌ها',
    page: 'صفحه',
    previous: 'قبلی',
    next: 'بعدی',
    partial: 'ممکن است نوبت‌های دیگری در صفحات دیگر باشند.',
    upcoming: 'آینده',
    nextDate: 'نوبت بعدی',
    unsupported: 'محدودیت‌های لغو و تغییر زمان در سرور کلینیک بررسی می‌شود.',
    bookingCreated: 'نوبت ثبت شد. برای تأیید، بیعانه را پرداخت کنید.',
    payDeposit: 'پرداخت بیعانه',
    openingGateway: 'در حال اتصال به درگاه پرداخت…',
    paymentError: 'نوبت شما وجود دارد اما شروع پرداخت ناموفق بود. دوباره برای پرداخت تلاش کنید.',
    missingDate: 'تاریخ معتبر برای نوبت انتخاب کنید.',
  },
};

function tr(key) {
  const path = `dashboard.booking.${key}`;
  const value = t(path);

  return value && value !== path
    ? value
    : (phrases[L()][key] ?? key);
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

const validId = value =>
  Number.isSafeInteger(Number(value)) &&
  Number(value) > 0;

// ============================================
// API RESPONSE HELPERS
// ============================================

function unwrapList(response) {
  const payload = response?.data ?? response;

  const candidates = [
    payload,
    payload?.data,
    payload?.bookings,
    payload?.bookings?.data,
    payload?.items,
    response?.bookings,
  ];

  return candidates.find(Array.isArray) ?? null;
}

function pagination(response) {
  const payload = response?.data ?? response;

  const meta =
    payload?.meta ??
    response?.meta ??
    payload;

  const current = Number(
    meta?.current_page ?? 1
  );

  const last = Number(
    meta?.last_page ?? 1
  );

  const nextURL =
    payload?.next_page_url ??
    payload?.links?.next ??
    response?.links?.next;

  const prevURL =
    payload?.prev_page_url ??
    payload?.links?.prev ??
    response?.links?.prev;

  return {
    current: current > 0 ? current : 1,
    last: last > 0 ? last : 1,

    partial:
      last > 1 ||
      Boolean(nextURL || prevURL),

    next: last > 1
      ? current < last
      : Boolean(nextURL),

    prev:
      current > 1 ||
      Boolean(prevURL),
  };
}

function unwrapDetail(response) {
  const data = response?.data ?? response;

  return (
    data?.booking ??
    data?.data?.booking ??
    data?.data ??
    data
  );
}

// ============================================
// DATE & TIME
// ============================================

function dateValue(value) {
  const date = String(
    value ?? ''
  ).slice(0, 10);

  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return '';
  }

  const parsed = new Date(
    `${date}T12:00:00Z`
  );

  return (
    !Number.isNaN(parsed.getTime()) &&
    parsed.toISOString().slice(0, 10) === date
  )
    ? date
    : '';
}

function timeValue(value) {
  const valueString = String(
    value ?? ''
  ).trim();

  return /^(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d)?$/.test(
    valueString
  )
    ? valueString.slice(0, 5)
    : '';
}

function formatDate(value) {
  const date = dateValue(value);

  if (!date) return '—';

  return new Intl.DateTimeFormat(
    L() === 'fa' ? 'fa-IR' : 'en-GB',
    {
      dateStyle: 'medium',
      timeZone: 'UTC',
    }
  ).format(
    new Date(`${date}T12:00:00Z`)
  );
}

function statusLabel(value) {
  const status = String(
    value ?? ''
  ).toLowerCase();

  const labels = {
    pending: 'pending',
    awaiting_payment: 'awaitingPayment',
    confirmed: 'confirmed',
    completed: 'completed',
    cancelled: 'cancelledStatus',
    canceled: 'cancelledStatus',
  };

  return labels[status]
    ? tr(labels[status])
    : (
        status
          ? status.replace(/_/g, ' ')
          : tr('unknown')
      );
}

// ============================================
// BOOKING NORMALIZATION
// ============================================

function normalized(row) {
  if (
    !row ||
    typeof row !== 'object' ||
    !validId(row.id)
  ) {
    return null;
  }

  const services = [
    row.booking_services,
    row.bookingServices,
    row.services,
    row.items,
  ].find(Array.isArray) ?? [];

  return {
    id: Number(row.id),

    date: dateValue(
      row.booking_date ?? row.date
    ),

    start: timeValue(
      row.start_time ??
      services[0]?.start_time
    ),

    end: timeValue(
      row.end_time ??
      services[0]?.end_time
    ),

    status: String(
      row.status ?? ''
    ).toLowerCase(),

    paymentStatus: String(
      row.payment_status ??
      row.payment?.status ??
      ''
    ).toLowerCase(),

    notes: row.notes ?? '',

    doctor:
      row.staff?.name ??
      row.doctor?.name ??
      services[0]?.staff?.name ??
      services[0]?.doctor?.name ??
      '',

    services: services.map(service => ({
      name:
        service?.service?.name ??
        service?.service?.title ??
        service?.name ??
        service?.title ??
        '',

      staff:
        service?.staff?.name ??
        service?.doctor?.name ??
        '',
    })),
  };
}

function serviceText(booking) {
  const names = booking.services
    .map(service => service.name)
    .filter(Boolean);

  return names.length
    ? names.join(' • ')
    : `${tr('appointment')} #${booking.id}`;
}

// ============================================
// UPCOMING BOOKINGS
// ============================================

function clinicNow() {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Asia/Tehran',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hourCycle: 'h23',
    })
      .formatToParts(new Date())
      .map(part => [part.type, part.value])
  );

  return {
    date: `${parts.year}-${parts.month}-${parts.day}`,
    time: `${parts.hour}:${parts.minute}`,
  };
}

const closed = new Set([
  'cancelled',
  'canceled',
  'completed',
  'rejected',
  'expired',
  'no_show',
]);

function upcoming(booking) {
  if (
    closed.has(booking.status) ||
    !booking.date
  ) {
    return false;
  }

  const now = clinicNow();

  return booking.date > now.date ||
    (
      booking.date === now.date &&
      (
        !booking.start ||
        booking.start >= now.time
      )
    );
}

function canModify(booking) {
  return (
    !closed.has(booking.status) &&
    upcoming(booking)
  );
}

function sortBooking(a, b) {
  const aKey =
    `${a.date || '9999-99-99'}T${a.start || '99:99'}`;

  const bKey =
    `${b.date || '9999-99-99'}T${b.start || '99:99'}`;

  return aKey.localeCompare(bKey);
}

function canPayDeposit(booking) {
  return (
    booking.status === 'awaiting_payment' &&
    ![
      'paid',
      'completed',
      'success',
    ].includes(booking.paymentStatus)
  );
}

// ============================================
// BOOKING LIST
// ============================================

function listRow(booking) {
  return `
    <li class="dn-booking-list-item">
      <button
        type="button"
        class="dn-booking-row"
        data-booking-open="${booking.id}"
        aria-label="${tx('view')}: ${esc(serviceText(booking))}"
      >

        <span class="dn-booking-date">
          <strong>
            ${esc(formatDate(booking.date))}
          </strong>

          <small>
            ${esc(booking.start || tr('noTime'))}
          </small>
        </span>

        <span class="dn-booking-desc">
          <strong>
            ${esc(serviceText(booking))}
          </strong>

          <small>
            #${booking.id} ·
            ${esc(statusLabel(booking.status))}
          </small>
        </span>

        <span
          class="dn-booking-row-arrow"
          aria-hidden="true"
        >→</span>

      </button>
    </li>
  `;
}

// ============================================
// BOOKING DETAILS
// ============================================

function detailMarkup(booking) {
  const editable = canModify(booking);

  const serviceNames = booking.services
    .map(service => service.name)
    .filter(Boolean)
    .join(' • ');

  return `
    <div class="dn-booking-detail-head">

      <div>
        <span class="dn-eyebrow">
          ${tx('details')}
        </span>

        <h2>
          ${tx('bookingNumber')} #${booking.id}
        </h2>
      </div>

      <span class="dn-booking-pill">
        ${esc(statusLabel(booking.status))}
      </span>
    </div>

    <dl class="dn-booking-details">

      <div>
        <dt>${tx('date')}</dt>
        <dd>${esc(formatDate(booking.date))}</dd>
      </div>

      <div>
        <dt>${tx('time')}</dt>

        <dd>
          ${esc(booking.start || tr('noTime'))}

          ${
            booking.end
              ? ' – ' + esc(booking.end)
              : ''
          }
        </dd>
      </div>

      <div>
        <dt>${tx('services')}</dt>
        <dd>
          ${esc(serviceNames || tr('noServices'))}
        </dd>
      </div>

      <div>
        <dt>${tx('doctor')}</dt>
        <dd>
          ${esc(booking.doctor || tr('noDoctor'))}
        </dd>
      </div>

      <div>
        <dt>${tx('status')}</dt>
        <dd>
          ${esc(statusLabel(booking.status))}
        </dd>
      </div>

      ${
        booking.notes
          ? `
            <div>
              <dt>${tx('notes')}</dt>
              <dd>${esc(booking.notes)}</dd>
            </div>
          `
          : ''
      }

    </dl>

    ${
      canPayDeposit(booking)
        ? `
          <div class="dn-booking-actions">
            <button
              type="button"
              class="dn-button dn-button-primary"
              data-booking-pay-deposit="${booking.id}"
            >
              ${tx('payDeposit')}
            </button>
          </div>
        `
        : ''
    }

    ${
      editable
        ? `
          <div class="dn-booking-actions">

            <button
              type="button"
              class="dn-booking-secondary"
              data-booking-toggle="reschedule"
            >
              ${tx('reschedule')}
            </button>

            <button
              type="button"
              class="dn-booking-danger-link"
              data-booking-toggle="cancel"
            >
              ${tx('cancel')}
            </button>

          </div>

          <!-- RESCHEDULE -->

          <form
            class="dn-booking-form"
            data-booking-reschedule
            hidden
          >

            <label>
              ${tx('newDate')}

              <input
                type="date"
                name="booking_date"
                value="${esc(booking.date)}"
                required
              >
            </label>

            <label>
              ${tx('newTime')}

              <input
                type="time"
                name="start_time"
                value="${esc(booking.start)}"
                required
              >
            </label>

            <div class="dn-booking-form-buttons">

              <button
                type="submit"
                class="dn-button dn-button-primary"
              >
                ${tx('confirmReschedule')}
              </button>

              <button
                type="button"
                data-booking-close-form
              >
                ${tx('back')}
              </button>

            </div>

          </form>

          <!-- CANCEL -->

          <form
            class="dn-booking-form"
            data-booking-cancel
            hidden
          >

            <label>
              ${tx('cancelReason')}

              <textarea
                name="reason"
                rows="3"
                maxlength="500"
                required
                placeholder="${tx('reasonPlaceholder')}"
              ></textarea>
            </label>

            <label class="dn-booking-check">

              <input
                type="checkbox"
                name="confirm"
                required
              >

              <span>
                ${tx('cancelConfirm')}
              </span>

            </label>

            <div class="dn-booking-form-buttons">

              <button
                type="submit"
                class="dn-booking-danger"
              >
                ${tx('confirmCancel')}
              </button>

              <button
                type="button"
                data-booking-close-form
              >
                ${tx('back')}
              </button>

            </div>

          </form>

          <p class="dn-booking-policy">
            ${tx('unsupported')}
          </p>
        `
        : ''
    }
  `;
}

// ============================================
// APPOINTMENTS HTML
// ============================================

export function dashboardAppointmentsHTML() {
  return `
    <div class="dn-booking-header">

      <p>
        ${tx('listSubtitle')}
      </p>

      <button
        type="button"
        class="dn-button dn-button-primary"
        data-booking-start
      >
        ${tx('newBooking')} ↗
      </button>

    </div>

    ${bookingWizardHTML()}

    <p
      data-booking-notice
      class="dn-booking-notice"
      role="status"
      aria-live="polite"
      hidden
    ></p>

    <div
      data-bookings-loading
      class="dn-booking-message"
    >
      ${tx('loading')}
    </div>

    <div
      data-bookings-error
      class="dn-booking-message dn-booking-error"
      hidden
    >
      <p>${tx('loadError')}</p>

      <button
        type="button"
        class="dn-booking-secondary"
        data-bookings-retry
      >
        ${tx('retry')}
      </button>
    </div>

    <div data-bookings-empty hidden>

      <div class="dn-empty-state">
        <h2>${tx('emptyTitle')}</h2>

        <p>${tx('emptyText')}</p>

        <button
          type="button"
          class="dn-button dn-button-primary"
          data-booking-start
        >
          ${tx('newBooking')}
        </button>
      </div>

    </div>

    <div
      data-bookings-content
      class="dn-booking-columns"
      hidden
    >

      <section
        class="dn-booking-list-card"
        aria-label="${tx('listLabel')}"
      >

        <ul
          data-booking-list
          class="dn-booking-list"
        ></ul>

        <div
          class="dn-booking-pagination"
          data-booking-pagination
          hidden
        >

          <button
            type="button"
            data-booking-page="prev"
          >
            ${tx('previous')}
          </button>

          <span data-booking-page-label></span>

          <button
            type="button"
            data-booking-page="next"
          >
            ${tx('next')}
          </button>

        </div>

      </section>

      <section
        class="dn-booking-detail-card"
        data-booking-detail
      >
        <p class="dn-booking-hint">
          ${tx('choose')}
        </p>
      </section>

    </div>
  `;
}

// ============================================
// INITIALIZE
// ============================================

export function initDashboardBookings(
  root,
  signal
) {
  const $ = selector =>
    root.querySelector(selector);

  const loading = $('[data-bookings-loading]');
  const errorBox = $('[data-bookings-error]');
  const empty = $('[data-bookings-empty]');
  const content = $('[data-bookings-content]');
  const list = $('[data-booking-list]');
  const detail = $('[data-booking-detail]');
  const notice = $('[data-booking-notice]');
  const pager = $('[data-booking-pagination]');
  const pageLabel = $('[data-booking-page-label]');

  let bookings = [];
  let currentId = null;
  let currentPage = 1;

  let pageInfo = {
    current: 1,
    last: 1,
    partial: false,
    next: false,
    prev: false,
  };

  let listRun = 0;
  let detailRun = 0;

  let busy = false;
  let paying = false;

  const active = () =>
    !signal.aborted &&
    root.isConnected;

  function message(
    text,
    type = 'info'
  ) {
    notice.textContent = text;
    notice.dataset.state = type;
    notice.hidden = false;
  }

  function detailPlaceholder() {
    detail.innerHTML = `
      <p class="dn-booking-hint">
        ${tx('choose')}
      </p>
    `;
  }

  // ==========================================
  // UPDATE OVERVIEW
  // ==========================================

  function updateOverview() {
    const count = $(
      '[data-dashboard-stat="upcoming"]'
    );

    const nextTitle = $(
      '[data-dashboard-next-title]'
    );

    const nextDescription = $(
      '[data-dashboard-next-description]'
    );

    if (pageInfo.partial) {
      if (count) {
        count.textContent = '—';
      }

      if (nextDescription) {
        nextDescription.textContent =
          tr('partial');
      }

      return;
    }

    const upcomingBookings = bookings
      .filter(upcoming)
      .sort(sortBooking);

    if (count) {
      count.textContent =
        String(upcomingBookings.length);

      count.removeAttribute('aria-label');

      const caption = count.parentElement
        ?.querySelector('small');

      if (caption) {
        caption.textContent = tr('upcoming');
      }
    }

    if (upcomingBookings.length) {
      const next = upcomingBookings[0];

      if (nextTitle) {
        nextTitle.textContent =
          serviceText(next);
      }

      if (nextDescription) {
        nextDescription.textContent =
          `${formatDate(next.date)} · ${next.start || tr('noTime')}`;
      }

    } else {
      if (nextTitle) {
        nextTitle.textContent = L() === 'fa'
          ? 'هنوز نوبت آینده‌ای ثبت نشده'
          : 'No upcoming appointment yet';
      }

      if (nextDescription) {
        nextDescription.textContent = L() === 'fa'
          ? 'پس از رزرو نوبت، جزئیات اینجا نمایش داده می‌شود.'
          : 'New appointment details will appear here.';
      }
    }
  }

  // ==========================================
  // LOAD BOOKINGS
  // ==========================================

  async function loadList() {
    const request = ++listRun;

    ++detailRun;

    loading.hidden = false;
    errorBox.hidden = true;
    empty.hidden = true;
    content.hidden = true;

    try {
      const response = await bookingApi.list(
        signal,
        currentPage
      );

      if (
        !active() ||
        request !== listRun
      ) {
        return;
      }

      if (response?.success === false) {
        throw new Error(
          response.message ||
          tr('loadError')
        );
      }

      const rows = unwrapList(response);

      if (!rows) {
        throw new Error(
          'Unsupported bookings list response'
        );
      }

      bookings = rows
        .map(normalized)
        .filter(Boolean)
        .sort(sortBooking);

      pageInfo = pagination(response);

      loading.hidden = true;

      updateOverview();

      if (!bookings.length) {
        if (currentPage > 1) {
          currentPage = 1;
          void loadList();

        } else {
          empty.hidden = false;
        }

        return;
      }

      list.innerHTML =
        bookings.map(listRow).join('');

      content.hidden = false;

      pager.hidden =
        !pageInfo.partial;

      pageLabel.textContent =
        `${tr('page')} ${pageInfo.current}` +
        (
          pageInfo.last > 1
            ? ` / ${pageInfo.last}`
            : ''
        );

      pager.querySelector(
        '[data-booking-page="prev"]'
      ).disabled = !pageInfo.prev;

      pager.querySelector(
        '[data-booking-page="next"]'
      ).disabled = !pageInfo.next;

      if (
        currentId &&
        bookings.some(
          booking => booking.id === currentId
        )
      ) {
        await open(currentId);

      } else {
        currentId = null;
        detailPlaceholder();
      }

    } catch (error) {
      if (
        !active() ||
        request !== listRun
      ) {
        return;
      }

      console.error(
        'Booking list API:',
        error
      );

      loading.hidden = true;
      errorBox.hidden = false;
    }
  }

  // ==========================================
  // BOOKING DETAILS
  // ==========================================

  async function open(id) {
    if (
      !validId(id) ||
      !active()
    ) {
      return;
    }

    const request = ++detailRun;

    currentId = Number(id);

    detail.innerHTML = `
      <p class="dn-booking-hint">
        ${tx('loading')}
      </p>
    `;

    try {
      const response = await bookingApi.show(
        id,
        signal
      );

      if (
        !active() ||
        request !== detailRun
      ) {
        return;
      }

      if (response?.success === false) {
        throw new Error(
          response.message ||
          tr('detailError')
        );
      }

      const booking = normalized(
        unwrapDetail(response)
      );

      if (
        !booking ||
        booking.id !== Number(id)
      ) {
        throw new Error(
          'Invalid booking detail response'
        );
      }

      detail.innerHTML =
        detailMarkup(booking);

    } catch (error) {
      if (
        !active() ||
        request !== detailRun
      ) {
        return;
      }

      console.error(
        'Booking details API:',
        error
      );

      detail.innerHTML = `
        <p class="dn-booking-hint dn-booking-error">
          ${tx('detailError')}
        </p>
      `;
    }
  }

  // ==========================================
  // SHOW RESCHEDULE / CANCEL FORM
  // ==========================================

  function toggleForm(which) {
    const target = detail.querySelector(
      which === 'cancel'
        ? '[data-booking-cancel]'
        : '[data-booking-reschedule]'
    );

    if (!target) return;

    const shouldOpen = target.hidden;

    for (
      const form
      of detail.querySelectorAll(
        '.dn-booking-form'
      )
    ) {
      form.hidden = true;
    }

    if (shouldOpen) {
      target.hidden = false;

      // Jalali calendar is initialized by
      // the shared MutationObserver.
      queueMicrotask(() => {
        target.querySelector(
          '.dn-jalali-trigger, textarea, input:not([type="hidden"])'
        )?.focus();
      });
    }
  }

  // ==========================================
  // CANCEL / RESCHEDULE
  // ==========================================

  async function perform(
    form,
    type
  ) {
    if (
      busy ||
      paying ||
      !currentId
    ) {
      return;
    }

    const selectedDate =
      form.elements.namedItem(
        'booking_date'
      )?.value ?? '';

    const chosenTime =
      form.elements.namedItem(
        'start_time'
      )?.value ?? '';

    if (type === 'reschedule') {
      const date = dateValue(
        selectedDate
      );

      if (
        !date ||
        date !== selectedDate ||
        date < clinicNow().date ||
        !timeValue(chosenTime)
      ) {
        message(
          tr('missingDate'),
          'error'
        );

        return;
      }
    }

    if (!form.reportValidity()) {
      return;
    }

    busy = true;

    detail.querySelectorAll(
      'button'
    ).forEach(button => {
      button.disabled = true;
    });

    message(tr('saving'));

    try {
      if (type === 'cancel') {
        const reason =
          form.elements.namedItem(
            'reason'
          ).value.trim();

        if (!reason) {
          message(
            tr('cancelReason'),
            'error'
          );

          return;
        }

        const result = await bookingApi.cancel(
          currentId,
          reason,
          signal
        );

        if (result?.success === false) {
          throw new Error(
            result.message ||
            tr('actionError')
          );
        }

      } else {
        const result = await bookingApi.reschedule(
          currentId,
          selectedDate,
          chosenTime,
          signal
        );

        if (result?.success === false) {
          throw new Error(
            result.message ||
            tr('actionError')
          );
        }
      }

      if (!active()) return;

      const id = currentId;

      await loadList();

      if (active()) {
        message(
          tr(
            type === 'cancel'
              ? 'cancelled'
              : 'changed'
          ),
          'success'
        );

        if (
          id &&
          currentId !== id
        ) {
          await open(id);
        }
      }

    } catch (error) {
      if (!active()) return;

      console.error(
        'Booking modification:',
        error
      );

      const validation =
        error?.errors &&
        typeof error.errors === 'object'
          ? Object.values(error.errors)
              .flat()
              .join(' · ')
          : '';

      message(
        validation ||
        error?.message ||
        tr('actionError'),
        'error'
      );

    } finally {
      busy = false;

      if (active()) {
        detail.querySelectorAll(
          'button'
        ).forEach(button => {
          button.disabled = false;
        });
      }
    }
  }

  // ==========================================
  // RETRY DEPOSIT PAYMENT
  // ==========================================

 
function payExistingDeposit(button) {
  const bookingId = Number(
    button.dataset.bookingPayDeposit
  );

  if (
    !Number.isSafeInteger(bookingId) ||
    bookingId <= 0
  ) {
    return;
  }

  const url = new URL(
    '/checkout',
    window.location.origin
  );

  url.searchParams.set(
    'booking_id',
    String(bookingId)
  );

  url.searchParams.set('mode', 'deposit');

  window.location.assign(url.toString());
}


  // ==========================================
  // CLICK EVENTS
  // ==========================================

  root.addEventListener(
    'click',
    event => {
      const button = event.target.closest(
        'button'
      );

      if (
        !button ||
        !root.contains(button)
      ) {
        return;
      }

      // Pay deposit on an existing booking.
      if (
        button.matches(
          '[data-booking-pay-deposit]'
        )
      ) {
        void payExistingDeposit(button);
        return;
      }

      // Retry list.
      if (
        button.matches(
          '[data-bookings-retry]'
        )
      ) {
        void loadList();
        return;
      }

      // Pagination.
      if (
        button.matches(
          '[data-booking-page]'
        ) &&
        !busy &&
        !paying
      ) {
        const direction =
          button.dataset.bookingPage;

        if (
          direction === 'next' &&
          pageInfo.next
        ) {
          currentPage += 1;

        } else if (
          direction === 'prev' &&
          pageInfo.prev
        ) {
          currentPage = Math.max(
            1,
            currentPage - 1
          );

        } else {
          return;
        }

        currentId = null;
        void loadList();

        return;
      }

      // Open booking details.
      if (
        button.matches(
          '[data-booking-open]'
        )
      ) {
        if (!busy && !paying) {
          void open(
            button.dataset.bookingOpen
          );
        }

        return;
      }

      // Open reschedule / cancel.
      if (
        button.matches(
          '[data-booking-toggle]'
        )
      ) {
        toggleForm(
          button.dataset.bookingToggle
        );

        return;
      }

      // Close a form.
      if (
        button.matches(
          '[data-booking-close-form]'
        )
      ) {
        detail
          .querySelectorAll(
            '.dn-booking-form'
          )
          .forEach(form => {
            form.hidden = true;
          });
      }
    },
    { signal }
  );

  // ==========================================
  // FORM SUBMIT EVENTS
  // ==========================================

  root.addEventListener(
    'submit',
    event => {
      const form = event.target.closest(
        '[data-booking-cancel], [data-booking-reschedule]'
      );

      if (
        !form ||
        !root.contains(form)
      ) {
        return;
      }

      event.preventDefault();

      void perform(
        form,
        form.matches(
          '[data-booking-cancel]'
        )
          ? 'cancel'
          : 'reschedule'
      );
    },
    { signal }
  );

  // ==========================================
  // BOOKING WIZARD
  // ==========================================

  const wizardCleanup = initBookingWizard(
    root,
    signal,
    async result => {
      currentPage = 1;

      currentId =
        bookingIdFromResponse(result);

      await loadList();

      if (active()) {
        message(
          tr('bookingCreated'),
          'success'
        );
      }
    }
  );

  // Initial load for Overview + Appointments.
  void loadList();

  // ==========================================
  // CLEANUP
  // ==========================================

  return () => {
    ++listRun;
    ++detailRun;

    if (
      typeof wizardCleanup === 'function'
    ) {
      wizardCleanup();
    }
  };
}
