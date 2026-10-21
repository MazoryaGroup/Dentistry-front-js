
/**
 * Dentistry — Premium Patient Checkout
 *
 * /checkout?booking_id=123&mode=deposit
 * /checkout?booking_id=123&mode=remaining
 *
 * Real booking data
 * Deposit / Remaining payment
 * Discount validation
 * FA / EN — Jalali dates
 */

import { dpIcon } from '../components/PortalUI.js';

import { getLanguage } from '../code/i18n.js';

import { getAuthToken } from '../code/auth.js';

import { bookingApi } from '../code/bookingApi.js';

import { financeApi } from '../code/financeApi.js';

import { discountApi } from '../code/discountApi.js';

import '../asset/css/portal.css';
import '../asset/css/checkout-premium.css';

// ============================================
// TRANSLATIONS
// ============================================

const words = {
  en: {
    home: 'Home',
    dashboard: 'Patient portal',
    checkout: 'Checkout',
    eyebrow: 'SECURE APPOINTMENT CHECKOUT',
    title: 'Complete your appointment',
    intro: 'Review your appointment and payment details.',

    details: 'Appointment details',
    booking: 'Booking number',
    service: 'Dental service',
    doctor: 'Doctor',
    date: 'Appointment date',
    time: 'Appointment time',
    status: 'Booking status',

    payment: 'Online payment',
    paymentDescription:
      'Continue with the payment required for your booking.',

    summary: 'Appointment summary',
    financial: 'PAYMENT OVERVIEW',
    total: 'Service total',
    discount: 'Applied discount',
    finalTotal: 'Total after discount',
    deposit: 'Required deposit',
    paid: 'Already paid',
    remaining: 'Remaining balance',
    payable: 'Amount to pay',

    payDeposit: 'Pay deposit',
    payRemaining: 'Pay remaining balance',

    discountTitle: 'Have a discount code?',
    discountPlaceholder: 'Enter your discount code',
    checkDiscount: 'Check code',
    checkingDiscount: 'Checking…',
    removeDiscount: 'Remove',
    discountValid: 'Your discount code is valid.',
    discountError: 'Discount validation failed.',
    discountAmount: 'Discount amount',
    discountFinal: 'Total after discount',
    discountPreview: 'DISCOUNT PREVIEW',
    discountWarning:
      'This is a preview. The discount must be saved to your booking by the clinic server before paying the discounted amount.',
    discountNotApplied:
      'Your discount has not been applied to the booking yet. Remove the code to continue without a discount.',
    discountAlreadyApplied:
      'A discount is already recorded on this booking.',

    loading: 'Loading your booking…',
    starting: 'Connecting to the payment gateway…',
    unavailable: 'Not available',
    missing: 'A valid booking ID is required.',
    invalid: 'Could not load this appointment.',
    noAmount:
      'No payable amount is available from the clinic.',
    paidAlready:
      'No payment is currently required for this stage.',
    closed:
      'This appointment cannot be paid in its current status.',
    gatewayMissing:
      'The server did not return a valid payment gateway URL.',
    paymentError:
      'Payment could not be started. Your existing booking has not been recreated.',

    back: 'Back to appointments',
    refresh: 'Refresh booking status',
    note:
      'Payment amounts are determined by the clinic server. Payment is confirmed only after server verification.',
    currencyNote:
      'The clinic determines the final payable amount.',

    pending: 'Awaiting payment',
    confirmed: 'Confirmed',
    completed: 'Completed',
    cancelled: 'Cancelled',
    processing: 'Processing',
  },

  fa: {
    home: 'خانه',
    dashboard: 'پرتال بیماران',
    checkout: 'پرداخت',
    eyebrow: 'پرداخت امن نوبت دندان‌پزشکی',
    title: 'تکمیل رزرو نوبت',
    intro:
      'اطلاعات نوبت و جزئیات پرداخت خود را بررسی کنید.',

    details: 'مشخصات نوبت',
    booking: 'شماره رزرو',
    service: 'خدمت دندان‌پزشکی',
    doctor: 'پزشک',
    date: 'تاریخ مراجعه',
    time: 'ساعت مراجعه',
    status: 'وضعیت رزرو',

    payment: 'پرداخت آنلاین',
    paymentDescription:
      'پرداخت مربوط به نوبت ثبت‌شده خود را انجام دهید.',

    summary: 'خلاصه نوبت شما',
    financial: 'جزئیات مالی',
    total: 'مبلغ کل خدمات',
    discount: 'تخفیف اعمال‌شده',
    finalTotal: 'مبلغ نهایی پس از تخفیف',
    deposit: 'بیعانه تعیین‌شده',
    paid: 'مبلغ پرداخت‌شده',
    remaining: 'مانده حساب',
    payable: 'مبلغ قابل پرداخت',

    payDeposit: 'پرداخت بیعانه',
    payRemaining: 'پرداخت مانده حساب',

    discountTitle: 'کد تخفیف دارید؟',
    discountPlaceholder: 'کد تخفیف را وارد کنید',
    checkDiscount: 'بررسی کد',
    checkingDiscount: 'در حال بررسی…',
    removeDiscount: 'حذف',
    discountValid: 'کد تخفیف شما معتبر است.',
    discountError: 'اعتبارسنجی کد تخفیف ناموفق بود.',
    discountAmount: 'مبلغ تخفیف',
    discountFinal: 'مبلغ نهایی پس از تخفیف',
    discountPreview: 'پیش‌نمایش تخفیف',
    discountWarning:
      'این مبلغ فقط پیش‌نمایش است. تخفیف باید پیش از پرداخت توسط سرور کلینیک روی رزرو ثبت شود.',
    discountNotApplied:
      'تخفیف هنوز روی رزرو اعمال نشده است. برای پرداخت بدون تخفیف، کد را حذف کنید.',
    discountAlreadyApplied:
      'برای این نوبت قبلاً تخفیف ثبت شده است.',

    loading: 'در حال دریافت اطلاعات رزرو…',
    starting: 'در حال اتصال به درگاه پرداخت…',
    unavailable: 'اطلاعات موجود نیست',
    missing: 'شناسه رزرو معتبر نیست.',
    invalid: 'دریافت اطلاعات این رزرو ممکن نشد.',
    noAmount:
      'مبلغ قابل پرداخت توسط کلینیک مشخص نشده است.',
    paidAlready:
      'در حال حاضر پرداختی برای این مرحله لازم نیست.',
    closed:
      'این رزرو در وضعیت فعلی قابل پرداخت نیست.',
    gatewayMissing:
      'لینک معتبر درگاه پرداخت از سرور دریافت نشد.',
    paymentError:
      'شروع پرداخت ناموفق بود. رزرو قبلی شما همچنان باقی مانده است.',

    back: 'بازگشت به نوبت‌ها',
    refresh: 'بررسی مجدد وضعیت رزرو',
    note:
      'مبالغ توسط سرور کلینیک محاسبه می‌شوند و پرداخت تنها پس از تأیید سرور نهایی می‌شود.',
    currencyNote:
      'مبلغ نهایی قابل پرداخت توسط کلینیک تعیین می‌شود.',

    pending: 'در انتظار پرداخت',
    confirmed: 'تأییدشده',
    completed: 'انجام‌شده',
    cancelled: 'لغوشده',
    processing: 'در حال پردازش',
  },
};

const L = () =>
  getLanguage() === 'fa' ? 'fa' : 'en';

const tr = key =>
  words[L()][key] ?? key;

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

// ============================================
// HELPERS
// ============================================

function validId(value) {
  const id = Number(value);

  return Number.isSafeInteger(id) && id > 0;
}

function bookingOf(response) {
  const data = response?.data ?? response;

  return (
    data?.booking ??
    data?.data?.booking ??
    data?.data ??
    data
  );
}

function numeric(value) {
  if (
    value === null ||
    value === undefined ||
    value === ''
  ) {
    return null;
  }

  const number = Number(value);

  return Number.isFinite(number)
    ? number
    : null;
}

function firstAmount(object, fields) {
  for (const field of fields) {
    const amount = numeric(object?.[field]);

    if (amount !== null) {
      return amount;
    }
  }

  return null;
}

function moneyText(value, currency = '') {
  if (value === null || value === undefined) {
    return '—';
  }

  const formatted = Number(value).toLocaleString(
    L() === 'fa' ? 'fa-IR' : 'en-US'
  );

  const unit = currency === 'TOMAN'
    ? (
        L() === 'fa'
          ? 'تومان'
          : 'Toman'
      )
    : currency;

  return `${formatted}${unit ? ` ${unit}` : ''}`;
}

// ============================================
// JALALI DATE
// ============================================


function bookingDate(value) {
  if (!value) return '—';

  const raw = String(value).trim();

  const match = raw.match(
    /^(\d{4})-(\d{2})-(\d{2})/
  );

  if (!match) return '—';

  let dateString = `${match[1]}-${match[2]}-${match[3]}`;

  // Convert actual UTC/offset timestamps
  // back into clinic-local Gregorian date.
  // Pure YYYY-MM-DD dates remain unchanged.
  const hasTimezone =
    raw.includes('T') &&
    /(Z|[+-]\d{2}:?\d{2})$/i.test(raw);

  if (hasTimezone) {
    const instant = new Date(raw);

    if (Number.isNaN(instant.getTime())) {
      return '—';
    }

    const parts = Object.fromEntries(
      new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Tehran',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })
        .formatToParts(instant)
        .map(part => [
          part.type,
          part.value,
        ])
    );

    dateString = [
      parts.year,
      parts.month,
      parts.day,
    ].join('-');
  }

  const date = new Date(
    `${dateString}T12:00:00Z`
  );

  if (
    Number.isNaN(date.getTime()) ||
    date.toISOString().slice(0, 10) !== dateString
  ) {
    return '—';
  }

  return new Intl.DateTimeFormat(
    L() === 'fa'
      ? 'fa-IR-u-ca-persian'
      : 'en-US-u-ca-persian',
    {
      dateStyle: 'long',
      timeZone: 'UTC',
    }
  ).format(date);
}

// ============================================
// BOOKING DATA
// ============================================

function bookingServices(booking) {
  return [
    booking?.booking_services,
    booking?.bookingServices,
    booking?.services,
  ].find(Array.isArray) ?? [];
}

function serviceNames(booking) {
  return bookingServices(booking)
    .map(item =>
      item?.service?.name ??
      item?.service?.title ??
      item?.name ??
      item?.title
    )
    .filter(Boolean)
    .map(String)
    .map(value => value.trim())
    .join('، ');
}

function doctorName(booking) {
  const services = bookingServices(booking);

  return (
    booking?.doctor?.name ??
    booking?.staff?.name ??
    services[0]?.staff?.name ??
    services[0]?.doctor?.name ??
    '—'
  );
}

function statusText(status) {
  const key = String(status ?? '').toLowerCase();

  const values = {
    awaiting_payment: 'pending',
    pending: 'pending',
    confirmed: 'confirmed',
    completed: 'completed',
    cancelled: 'cancelled',
    canceled: 'cancelled',
    processing: 'processing',
  };

  return values[key]
    ? tr(values[key])
    : key.replace(/_/g, ' ') || '—';
}

// ============================================
// PAYMENT GATEWAY URL
// ============================================

function gatewayURL(response) {
  const data = response?.data ?? response;

  const candidates = [
    data,
    data?.data,
    data?.payment,
    data?.gateway,
    data?.data?.payment,
    data?.data?.gateway,
  ];

  let raw = null;

  for (const item of candidates) {
    if (typeof item === 'string') {
      raw = item;
      break;
    }

    if (!item || typeof item !== 'object') {
      continue;
    }

    const found =
      item.payment_url ??
      item.gateway_url ??
      item.redirect_url ??
      item.payment_link ??
      item.url ??
      item.link;

    if (
      typeof found === 'string' &&
      found.trim()
    ) {
      raw = found;
      break;
    }
  }

  if (!raw) {
    throw new Error(tr('gatewayMissing'));
  }

  let url;

  try {
    url = new URL(raw);
  } catch {
    throw new Error(tr('gatewayMissing'));
  }

  if (url.protocol !== 'https:') {
    throw new Error(tr('gatewayMissing'));
  }

  return url.href;
}

// ============================================
// DISCOUNT HTML
// ============================================

function discountHTML() {
  return `
    <section
      class="dp-discount"
      data-checkout-discount
    >

      <h3>${tx('discountTitle')}</h3>

      <div class="dp-discount-entry">

        <input
          type="text"
          data-discount-code
          maxlength="100"
          autocomplete="off"
          placeholder="${tx('discountPlaceholder')}"
          aria-label="${tx('discountTitle')}"
        >

        <button
          type="button"
          data-discount-check
        >
          ${tx('checkDiscount')}
        </button>

        <button
          type="button"
          data-discount-remove
          hidden
        >
          ${tx('removeDiscount')}
        </button>

      </div>

      <p
        class="dp-discount-message"
        data-discount-message
        role="status"
        aria-live="polite"
        hidden
      ></p>

      <div
        class="dp-discount-result"
        data-discount-result
        hidden
      >

        <span class="dp-eyebrow">
          ${tx('discountPreview')}
        </span>

        <div>
          <span>${tx('discountAmount')}</span>
          <strong data-discount-amount>—</strong>
        </div>

        <div>
          <span>${tx('discountFinal')}</span>
          <strong data-discount-final>—</strong>
        </div>

        <p>${tx('discountWarning')}</p>

      </div>

    </section>
  `;
}

// ============================================
// PAGE HTML
// ============================================

export function Checkout() {
  const params = new URLSearchParams(
    window.location.search
  );

  const mode = params.get('mode') === 'remaining'
    ? 'remaining'
    : 'deposit';

  return `
    <main
      class="dentistry-portal dp-checkout-page"
      data-portal-page="checkout"
      data-no-translate
      dir="${L() === 'fa' ? 'rtl' : 'ltr'}"
    >

      <div class="dp-checkout-container">

        <!-- BREADCRUMB -->

        <nav
          class="dp-checkout-trail"
          aria-label="Breadcrumb"
        >

          <a href="/">
            ${tx('home')}
          </a>

          ${dpIcon('arrow')}

          <a href="/dashboard?section=appointments">
            ${tx('dashboard')}
          </a>

          ${dpIcon('arrow')}

          <strong>${tx('checkout')}</strong>

        </nav>

        <!-- PAGE HEADER -->

        <div class="dp-checkout-heading">

          <div>
            <span class="dp-eyebrow">
              ${tx('eyebrow')}
            </span>

            <h1>
              ${tx('title')}
            </h1>

            <p>${tx('intro')}</p>
          </div>

          <div
            class="dp-checkout-steps"
            aria-label="Checkout progress"
          >

            <span>
              1
              <small>${tx('details')}</small>
            </span>

            <span class="is-active">
              2
              <small>${tx('payment')}</small>
            </span>

            <span>
              3
              <small>✓</small>
            </span>

          </div>

        </div>

        <!-- STATUS -->

        <p
          class="dp-form-feedback"
          data-checkout-feedback
          role="status"
          aria-live="polite"
        >
          ${tx('loading')}
        </p>

        <!-- CHECKOUT GRID -->

        <div
          class="dp-checkout-grid"
          data-checkout-content
          hidden
        >

          <!-- LEFT AREA -->

          <div class="dp-checkout-form-area">

            <!-- BOOKING DETAILS -->

            <section class="dp-white-card dp-checkout-card">

              <div class="dp-checkout-card-heading">

                <span class="dp-num">01</span>

                <div>
                  <h2>${tx('details')}</h2>
                  <p>${tx('intro')}</p>
                </div>

              </div>

              <div class="dp-form-grid">

                <div class="dp-field">
                  <span>${tx('booking')}</span>
                  <strong data-checkout-number>—</strong>
                </div>

                <div class="dp-field">
                  <span>${tx('service')}</span>
                  <strong data-checkout-service>—</strong>
                </div>

                <div class="dp-field">
                  <span>${tx('doctor')}</span>
                  <strong data-checkout-doctor>—</strong>
                </div>

                <div class="dp-field">
                  <span>${tx('date')}</span>
                  <strong data-checkout-date>—</strong>
                </div>

                <div class="dp-field">
                  <span>${tx('time')}</span>
                  <strong data-checkout-time>—</strong>
                </div>

                <div class="dp-field">
                  <span>${tx('status')}</span>
                  <strong data-checkout-status>—</strong>
                </div>

              </div>

            </section>

            <!-- PAYMENT METHOD -->

            <section class="dp-white-card dp-checkout-card">

              <div class="dp-checkout-card-heading">

                <span class="dp-num">02</span>

                <div>
                  <h2>${tx('payment')}</h2>
                  <p>${tx('paymentDescription')}</p>
                </div>

              </div>

              <div class="dp-payment-choices">

                <div class="dp-payment-choice is-selected">

                  <span class="dp-payment-choice-icon">
                    ${dpIcon('credit')}
                  </span>

                  <span>
                    <strong data-checkout-payment-type>
                      ${mode === 'deposit'
                        ? tx('deposit')
                        : tx('remaining')}
                    </strong>

                    <small>${tx('payment')}</small>
                  </span>

                  <span class="dp-radio-mark"></span>

                </div>

              </div>

            </section>

          </div>

          <!-- SUMMARY -->

          <aside class="dp-checkout-summary">

            <div class="dp-summary-image">

              <div class="dp-summary-tooth">
                ${dpIcon('tooth')}
              </div>

              <div>
                <span>DENTISTRY</span>
                <h2>${tx('summary')}</h2>
              </div>

            </div>

            <div class="dp-summary-body">

              <span class="dp-eyebrow">
                ${tx('financial')}
              </span>

              <!-- APPOINTMENT META -->

              <div class="dp-summary-meta">

                <span>
                  ${dpIcon('calendar')}
                  <span data-checkout-summary-date>—</span>
                </span>

                <span>
                  ${dpIcon('clock')}
                  <span data-checkout-summary-time>—</span>
                </span>

              </div>

              <div class="dp-summary-separator"></div>

              <!-- PAYMENT AMOUNTS -->

              <div class="dp-summary-line">
                <span>${tx('total')}</span>
                <strong data-checkout-total>—</strong>
              </div>

              <div
                class="dp-summary-line"
                data-checkout-applied-discount
                hidden
              >
                <span>${tx('discount')}</span>
                <strong data-checkout-discount-amount>—</strong>
              </div>

              <div
                class="dp-summary-line"
                data-checkout-final-row
                hidden
              >
                <span>${tx('finalTotal')}</span>
                <strong data-checkout-final-total>—</strong>
              </div>

              <div class="dp-summary-line">
                <span>${tx('deposit')}</span>
                <strong data-checkout-deposit>—</strong>
              </div>

              <div class="dp-summary-line">
                <span>${tx('paid')}</span>
                <strong data-checkout-paid>—</strong>
              </div>

              <div class="dp-summary-line">
                <span>${tx('remaining')}</span>
                <strong data-checkout-remaining>—</strong>
              </div>

              <div class="dp-summary-separator"></div>

              <!-- DISCOUNT CODE -->

              ${
                mode === 'deposit'
                  ? discountHTML()
                  : ''
              }

              <!-- PAYABLE AMOUNT -->

              <div class="dp-summary-pay">

                <span>${tx('payable')}</span>

                <strong data-checkout-payable>
                  —
                </strong>

              </div>

              <!-- PAYMENT BUTTON -->

              <button
                type="button"
                class="dp-btn dp-btn-primary dp-btn-block"
                data-checkout-pay
                disabled
              >
                ${
                  mode === 'deposit'
                    ? tx('payDeposit')
                    : tx('payRemaining')
                }

                ${dpIcon('arrow')}
              </button>

              <!-- REFRESH -->

              <button
                type="button"
                class="dp-btn dp-btn-block"
                data-checkout-refresh
              >
                ${tx('refresh')}
              </button>

              <!-- RETURN -->

              <a
                class="dp-btn dp-btn-block"
                href="/dashboard?section=appointments"
              >
                ${tx('back')}
              </a>

              <!-- INFORMATION -->

              <p class="dp-summary-guarantee">
                ${dpIcon('shield')}
                ${tx('note')}
              </p>

            </div>

          </aside>

        </div>

      </div>

    </main>
  `;
}

// ============================================
// INITIALIZE
// ============================================

export function initCheckout() {
  const root = document.querySelector(
    '[data-portal-page="checkout"]'
  );

  if (!root) {
    return () => {};
  }

  const controller = new AbortController();
  const { signal } = controller;

  const $ = selector =>
    root.querySelector(selector);

  const params = new URLSearchParams(
    window.location.search
  );

  const bookingId = Number(
    params.get('booking_id')
  );

  const mode = params.get('mode') === 'remaining'
    ? 'remaining'
    : 'deposit';

  const payButton = $('[data-checkout-pay]');
  const refreshButton = $('[data-checkout-refresh]');
  const feedback = $('[data-checkout-feedback]');
  const content = $('[data-checkout-content]');

  // Discount elements
  const discountBox = $('[data-checkout-discount]');
  const discountInput = $('[data-discount-code]');
  const discountCheck = $('[data-discount-check]');
  const discountRemove = $('[data-discount-remove]');
  const discountMessage = $('[data-discount-message]');
  const discountResult = $('[data-discount-result]');

  let booking = null;

  let paying = false;
  let loading = false;
  let checkingDiscount = false;

  let canPay = false;
  let discountBlocksPayment = false;

  let discountRun = 0;

  const alive = () =>
    !signal.aborted && root.isConnected;

  // ==========================================
  // DOM HELPERS
  // ==========================================

  function setText(selector, value) {
    const element = $(selector);

    if (element) {
      element.textContent = String(
        value ?? '—'
      );
    }
  }

  function message(value, state = 'info') {
    feedback.hidden = false;
    feedback.textContent = value;
    feedback.dataset.state = state;
  }

  function updatePayButton() {
    payButton.disabled =
      !canPay ||
      paying ||
      loading ||
      checkingDiscount ||
      discountBlocksPayment;
  }

  function setDiscountMessage(
    value,
    state = 'info'
  ) {
    if (!discountMessage) return;

    discountMessage.textContent = value;
    discountMessage.dataset.state = state;
    discountMessage.hidden = false;
  }

  // ==========================================
  // DISCOUNT RESET
  // ==========================================

  function resetDiscount() {
    ++discountRun;

    checkingDiscount = false;
    discountBlocksPayment = false;

    if (discountInput) {
      discountInput.value = '';
    }

    if (discountCheck) {
      discountCheck.disabled = false;
      discountCheck.textContent =
        tr('checkDiscount');
    }

    if (discountRemove) {
      discountRemove.hidden = true;
    }

    if (discountMessage) {
      discountMessage.hidden = true;
    }

    if (discountResult) {
      discountResult.hidden = true;
    }

    updatePayButton();
  }

  // ==========================================
  // RENDER BOOKING
  // ==========================================

  function renderBooking(b) {
    const currency = String(
      b.currency ??
      b.currency_unit ??
      ''
    );

    const total = firstAmount(b, [
      'subtotal',
      'total_amount',
      'total',
    ]);

    const appliedDiscount = firstAmount(b, [
      'discount_amount',
    ]);

    const finalTotal = firstAmount(b, [
  'total_amount',
  'final_amount',
  'grand_total',
  'total_after_discount',
]);

    const deposit = firstAmount(b, [
      'deposit_amount',
      'deposit',
    ]);

    const paid = firstAmount(b, [
      'paid_amount',
    ]);

    const remaining = firstAmount(b, [
      'remaining_amount',
      'balance_due',
      'amount_due',
    ]);

    const explicitDepositDue = firstAmount(b, [
      'deposit_due',
      'deposit_remaining',
    ]);

    const depositDue =
      explicitDepositDue ??
      (
        deposit !== null
          ? Math.max(
              0,
              deposit - Math.max(0, paid ?? 0)
            )
          : null
      );

    const payable = mode === 'deposit'
      ? depositDue
      : remaining;

    const status = String(
      b.status ?? ''
    ).toLowerCase();

    const paymentStatus = String(
      b.payment_status ?? ''
    ).toLowerCase();

    const date = bookingDate(
      b.booking_date ?? b.date
    );

    const time = String(
      b.start_time ??
      bookingServices(b)[0]?.start_time ??
      ''
    ).slice(0, 5);

    // Booking details
    setText('[data-checkout-number]', `#${b.id}`);

    setText(
      '[data-checkout-service]',
      serviceNames(b) || tr('unavailable')
    );

    setText(
      '[data-checkout-doctor]',
      doctorName(b)
    );

    setText('[data-checkout-date]', date);
    setText('[data-checkout-time]', time || '—');

    setText(
      '[data-checkout-status]',
      statusText(status)
    );

    // Summary
    setText(
      '[data-checkout-summary-date]',
      date
    );

    setText(
      '[data-checkout-summary-time]',
      time || '—'
    );

    setText(
      '[data-checkout-total]',
      moneyText(total, currency)
    );

    setText(
      '[data-checkout-deposit]',
      moneyText(deposit, currency)
    );

    setText(
      '[data-checkout-paid]',
      moneyText(paid, currency)
    );

    setText(
      '[data-checkout-remaining]',
      moneyText(remaining, currency)
    );

    setText(
      '[data-checkout-payable]',
      moneyText(payable, currency)
    );

    setText(
      '[data-checkout-payment-type]',
      mode === 'deposit'
        ? tr('deposit')
        : tr('remaining')
    );

    // Applied discount from Laravel
    const hasAppliedDiscount =
      appliedDiscount !== null &&
      appliedDiscount > 0;

    const appliedRow =
      $('[data-checkout-applied-discount]');

    const finalRow =
      $('[data-checkout-final-row]');

    if (appliedRow) {
      appliedRow.hidden = !hasAppliedDiscount;
    }

    if (finalRow) {
      finalRow.hidden =
        !hasAppliedDiscount ||
        finalTotal === null;
    }

    setText(
      '[data-checkout-discount-amount]',
      hasAppliedDiscount
        ? `− ${moneyText(appliedDiscount, currency)}`
        : '—'
    );

    setText(
      '[data-checkout-final-total]',
      moneyText(finalTotal, currency)
    );

    // Do not allow a second discount if
    // Laravel already stored one.
    if (discountBox) {
      discountBox.hidden =
        hasAppliedDiscount;
    }

    resetDiscount();

    // Payment authorization state
    const closed = [
      'cancelled',
      'canceled',
      'expired',
      'rejected',
    ].includes(status);

    const paymentCompleted = [
      'paid',
      'completed',
      'success',
      'fully_paid',
    ].includes(paymentStatus);

    const alreadyPaid = mode === 'deposit'
      ? (
          paymentCompleted ||
          (
            depositDue !== null &&
            depositDue <= 0
          )
        )
      : (
          remaining !== null &&
          remaining <= 0
        );

    canPay =
      !closed &&
      !alreadyPaid &&
      payable !== null &&
      payable > 0;

    updatePayButton();

    content.hidden = false;

    if (closed) {
      message(tr('closed'), 'error');

    } else if (alreadyPaid) {
      message(tr('paidAlready'));

    } else if (!canPay) {
      message(tr('noAmount'), 'error');

    } else {
      feedback.hidden = true;
    }
  }

  // ==========================================
  // LOAD BOOKING
  // ==========================================

  async function loadBooking() {
    if (!alive() || loading || paying) return;

    if (!validId(bookingId)) {
      message(tr('missing'), 'error');
      return;
    }

    loading = true;
    canPay = false;

    updatePayButton();
    message(tr('loading'));

    try {
      const response = await bookingApi.show(
        bookingId,
        signal
      );

      if (!alive()) return;

      if (response?.success === false) {
        throw new Error(
          response.message ||
          tr('invalid')
        );
      }

      const data = bookingOf(response);

      if (
        !data ||
        Number(data.id) !== bookingId
      ) {
        throw new Error(tr('invalid'));
      }

      booking = data;
      renderBooking(booking);

    } catch (error) {
      if (!alive()) return;

      console.error(
        'Checkout booking:',
        error
      );

      message(
        error.message || tr('invalid'),
        'error'
      );

    } finally {
      loading = false;

      if (alive()) {
        updatePayButton();
      }
    }
  }

  // ==========================================
  // VALIDATE DISCOUNT
  // ==========================================

  async function validateDiscount() {
    if (
      !discountInput ||
      !discountCheck ||
      !booking ||
      !alive() ||
      checkingDiscount ||
      paying ||
      loading
    ) {
      return;
    }

    const code = discountInput.value.trim();

    if (!code) {
      resetDiscount();
      return;
    }

    const request = ++discountRun;

    checkingDiscount = true;
    discountBlocksPayment = true;

    discountCheck.disabled = true;
    discountCheck.textContent =
      tr('checkingDiscount');

    discountResult.hidden = true;
    discountMessage.hidden = true;

    updatePayButton();

    try {
      const data = await discountApi.validate(
        code,
        bookingId,
        signal
      );

      if (
        !alive() ||
        request !== discountRun
      ) {
        return;
      }

      setText(
        '[data-discount-amount]',
        moneyText(
          data.discount_amount,
          data.currency
        )
      );

      setText(
        '[data-discount-final]',
        moneyText(
          data.final_amount,
          data.currency
        )
      );

      discountResult.hidden = false;
      discountRemove.hidden = false;

      setDiscountMessage(
        tr('discountValid') +
        ' ' +
        tr('discountNotApplied'),
        'success'
      );

      // IMPORTANT:
      // Validating is NOT applying.
      // Payment stays blocked with this code.
      discountBlocksPayment = true;

    } catch (error) {
      if (
        !alive() ||
        request !== discountRun
      ) {
        return;
      }

      console.error(
        'Discount validation:',
        error
      );

      setDiscountMessage(
        error.message ||
        tr('discountError'),
        'error'
      );

      discountResult.hidden = true;

    } finally {
      if (
        request === discountRun &&
        alive()
      ) {
        checkingDiscount = false;

        discountCheck.disabled = false;
        discountCheck.textContent =
          tr('checkDiscount');

        updatePayButton();
      }
    }
  }

  // ==========================================
  // START PAYMENT
  // ==========================================

  async function startPayment() {
    if (
      !alive() ||
      paying ||
      loading ||
      !booking ||
      !canPay ||
      discountBlocksPayment
    ) {
      return;
    }

    paying = true;

    updatePayButton();
    message(tr('starting'));

    try {
      const response = mode === 'remaining'
        ? await financeApi.startRemaining(
            bookingId,
            signal
          )
        : await financeApi.startDeposit(
            bookingId,
            signal
          );

      if (!alive()) return;

      if (response?.success === false) {
        throw new Error(
          response.message ||
          tr('paymentError')
        );
      }

      const url = gatewayURL(response);

      window.location.assign(url);

    } catch (error) {
      if (!alive()) return;

      console.error(
        'Checkout payment:',
        error
      );

      message(
        error.message ||
        tr('paymentError'),
        'error'
      );

    } finally {
      paying = false;

      if (alive()) {
        updatePayButton();
      }
    }
  }

  // ==========================================
  // AUTH
  // ==========================================

  if (!getAuthToken()) {
    controller.abort();

    window.location.replace('/login');

    return () => {};
  }

  // ==========================================
  // EVENTS
  // ==========================================

  payButton.addEventListener(
    'click',
    () => void startPayment(),
    { signal }
  );

  refreshButton.addEventListener(
    'click',
    () => void loadBooking(),
    { signal }
  );

  if (discountInput) {
    discountInput.addEventListener(
      'input',
      () => {
        ++discountRun;

        const hasCode =
          Boolean(discountInput.value.trim());

        discountBlocksPayment = hasCode;

        if (discountMessage) {
          discountMessage.hidden = true;
        }

        if (discountResult) {
          discountResult.hidden = true;
        }

        if (discountRemove) {
          discountRemove.hidden = !hasCode;
        }

        // Restore the check button if an
        // old validation request became stale.
        discountCheck.disabled = false;
        discountCheck.textContent =
          tr('checkDiscount');

        checkingDiscount = false;
        updatePayButton();
      },
      { signal }
    );

    discountInput.addEventListener(
      'keydown',
      event => {
        if (event.key === 'Enter') {
          event.preventDefault();
          void validateDiscount();
        }
      },
      { signal }
    );
  }

  if (discountCheck) {
    discountCheck.addEventListener(
      'click',
      () => void validateDiscount(),
      { signal }
    );
  }

  if (discountRemove) {
    discountRemove.addEventListener(
      'click',
      resetDiscount,
      { signal }
    );
  }

  // ==========================================
  // INITIAL LOAD
  // ==========================================

  void loadBooking();

  // ==========================================
  // CLEANUP
  // ==========================================

  return () => {
    ++discountRun;
    controller.abort();
  };
}
