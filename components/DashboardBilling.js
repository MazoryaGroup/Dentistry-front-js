
/**
 * Dentistry — Patient Billing Dashboard
 * Invoices + Payments + Finance Summary
 * FA / EN
 */

import { t, getLanguage } from '../code/i18n.js';
import { financeApi } from '../code/financeApi.js';

const isFa = () => getLanguage() === 'fa';

const words = {
  en: {
    summary: 'Financial overview',
   invoiced: 'Total appointment value',
    paid: 'Total paid',
    due: 'Amount due',
    invoices: 'Invoices',
    payments: 'Payment history',
    details: 'Details',
    refresh: 'Refresh',
    loading: 'Loading financial information…',
    emptyInvoices: 'No invoices available.',
    emptyPayments: 'No payments available.',
    error: 'Could not load information.',
    unavailable: 'Not available',
    invoice: 'Invoice',
    payment: 'Payment',
    amount: 'Amount',
    status: 'Status',
    date: 'Date',
    method: 'Method',
    reference: 'Reference',
    total: 'Total',
    discount: 'Discount',
    remaining: 'Remaining',
    service: 'Service',
    items: 'Invoice items',
    deposit: 'Pay deposit',
    payRemaining: 'Pay remaining',
    starting: 'Starting payment…',
    gatewayError: 'The server did not return a valid payment URL.',
    paymentError: 'Payment could not be started.',
    checkStatus: 'Check payment status',
    pending: 'Pending',
    completed: 'Completed',
    failed: 'Failed',
    cancelled: 'Cancelled',
    paidStatus: 'Paid',
    close: 'Close details',
    unpaid: 'Unpaid',
    booking: 'Booking',
time: 'Time',
subtotal: 'Subtotal',
doctor: 'Doctor',
duration: 'Duration',
minutes: 'minutes',
refund: 'Refunded',
type: 'Payment type',
gateway: 'Payment gateway',
paidAt: 'Payment date',

partiallyPaid: 'Partially paid',
  },
  fa: {
    summary: 'خلاصه وضعیت مالی',
    invoiced: 'مجموع مبلغ نوبت‌ها',
    paid: 'مجموع پرداخت‌ها',
    due: 'مانده قابل پرداخت',
    invoices: 'فاکتورهای من',
    payments: 'تاریخچه پرداخت‌ها',
    details: 'جزئیات',
    refresh: 'به‌روزرسانی',
    loading: 'در حال دریافت اطلاعات مالی…',
    emptyInvoices: 'فاکتوری برای نمایش وجود ندارد.',
    emptyPayments: 'پرداختی برای نمایش وجود ندارد.',
    error: 'دریافت اطلاعات ممکن نشد.',
    unavailable: 'اطلاعات موجود نیست',
    invoice: 'فاکتور',
    payment: 'پرداخت',
    amount: 'مبلغ',
    status: 'وضعیت',
    date: 'تاریخ',
    method: 'روش پرداخت',
    reference: 'شماره پیگیری',
    total: 'مبلغ کل',
    discount: 'تخفیف',
    remaining: 'مانده',
    service: 'خدمت',
    items: 'اقلام فاکتور',
    deposit: 'پرداخت بیعانه',
    payRemaining: 'پرداخت مانده',
    starting: 'در حال شروع پرداخت…',
    gatewayError: 'سرور لینک معتبر درگاه را برنگرداند.',
    paymentError: 'شروع پرداخت ناموفق بود.',
    checkStatus: 'بررسی وضعیت پرداخت',
    pending: 'در انتظار',
    completed: 'تکمیل‌شده',
    failed: 'ناموفق',
    cancelled: 'لغوشده',
    paidStatus: 'پرداخت‌شده',
    close: 'بستن جزئیات',
    unpaid: 'پرداخت‌نشده',
    booking: 'شماره رزرو',
    time: 'ساعت',
    subtotal: 'مبلغ قبل از تخفیف',
    doctor: 'پزشک',
    duration: 'مدت زمان',
    minutes: 'دقیقه',
    refund: 'مبلغ بازگشتی',
    type: 'نوع پرداخت',
    gateway: 'درگاه پرداخت',
    paidAt: 'تاریخ پرداخت',
    partiallyPaid: 'پرداخت بخشی از مبلغ',

  },
};

function tr(key) {
  const code = `dashboard.billing.${key}`;
  const result = t(code);

  return result && result !== code
    ? result
    : words[isFa() ? 'fa' : 'en'][key] ?? key;
}

function esc(value) {
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

const tx = key => esc(tr(key));

function validId(value) {
  const id = Number(value);
  return Number.isSafeInteger(id) && id > 0;
}

function dataOf(response) {
  const data = response?.data ?? response;

  if (
    data?.data &&
    !Array.isArray(data.data)
  ) {
    return data.data;
  }

  return data;
}

function collection(response, names = []) {
  const root = response?.data ?? response;

  const possible = [
    root,
    root?.data,
    ...names.map(name => root?.[name]),
    ...names.map(name => root?.[name]?.data),
  ];

  return possible.find(Array.isArray) ?? null;
}

function firstValue(object, keys) {
  for (const key of keys) {
    const value = object?.[key];

    if (
      value !== undefined &&
      value !== null &&
      value !== ''
    ) {
      return value;
    }
  }

  return null;
}


function money(value, currency = '') {
  if (
    value === null ||
    value === undefined ||
    value === ''
  ) {
    return '—';
  }

  const number = Number(value);

  if (!Number.isFinite(number)) {
    return '—';
  }

  const formatted = number.toLocaleString(
    isFa() ? 'fa-IR' : 'en-US'
  );

  const unit = ['IRT', 'TOMAN'].includes(
    String(currency).toUpperCase()
  )
    ? (isFa() ? 'تومان' : 'Toman')
    : currency;

  return `${formatted}${unit ? ` ${unit}` : ''}`;
}



function dateText(value) {
  if (!value) return '';

  const raw = String(value).trim();

  const parsed = /^\d{4}-\d{2}-\d{2}$/.test(raw)
    ? new Date(`${raw}T12:00:00Z`)
    : new Date(raw);

  if (Number.isNaN(parsed.getTime())) {
    return '';
  }

  return new Intl.DateTimeFormat(
    isFa()
      ? 'fa-IR-u-ca-persian'
      : 'en-US-u-ca-persian',
    {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      timeZone: 'Asia/Tehran',
    }
  ).format(parsed);
}


function statusText(value) {
  const raw = String(value ?? '').toLowerCase();

  const keys = {
    paid: 'paidStatus',
    success: 'completed',
    successful: 'completed',
    completed: 'completed',
    pending: 'pending',
    awaiting_payment: 'pending',
    failed: 'failed',
    canceled: 'cancelled',
    cancelled: 'cancelled',
    unpaid: 'unpaid',
partially_paid: 'partiallyPaid',
  };

  return keys[raw]
    ? tr(keys[raw])
    : String(value ?? tr('unavailable'));
}

function amountOf(row, keys) {
  return firstValue(row, keys);
}

function currencyOf(row) {
  return String(
    firstValue(row, ['currency', 'currency_unit']) ?? ''
  );
}

// ============================================
// SUMMARY
// ============================================

function summaryHTML(response) {
  const summary = dataOf(response);

  const invoiced = amountOf(summary, [
  'total_invoiced',
  'total_invoice_amount',
  'total_invoices_amount',
  'total_amount',
]);

  const paid = amountOf(summary, [
    'total_paid',
    'paid_amount',
    'total_payments',
  ]);

  const due = amountOf(summary, [
    'total_due',
    'balance_due',
    'outstanding_balance',
    'remaining_amount',
    'total_remaining',
  ]);

  const currency = currencyOf(summary);

  return `
    <div class="dn-finance-stats">
      <article>
        <span>${tx('invoiced')}</span>
        <strong>${esc(money(invoiced, currency))}</strong>
      </article>

      <article>
        <span>${tx('paid')}</span>
        <strong>${esc(money(paid, currency))}</strong>
      </article>

      <article>
        <span>${tx('due')}</span>
        <strong>${esc(money(due, currency))}</strong>
      </article>
    </div>
  `;
}

// ============================================
// INVOICES
// ============================================


function invoiceHTML(row) {
  const id = Number(row?.id);

  if (!validId(id)) return '';

  // ========================================
  // BOOKING INFORMATION
  // ========================================

  const bookingId = Number(
    row.booking_id ?? row.booking?.id
  );

  const bookingStatus = String(
    row.booking_status ?? ''
  ).toLowerCase();

  const status = String(
    row.status ?? row.payment_status ?? ''
  ).toLowerCase();

  // ========================================
  // FINANCIAL VALUES
  // ========================================

  const toNumber = value => {
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
  };

  const total = toNumber(
    row.total_amount ??
    row.grand_total ??
    row.total ??
    row.amount
  );

  const depositAmount = toNumber(
    row.deposit_amount
  );

  const paidAmount = toNumber(
    row.paid_amount
  );

  const remainingAmount = toNumber(
    row.remaining_amount ??
    row.balance_due ??
    row.amount_due
  );

  // Prefer an explicit value from Laravel.
  const explicitDepositDue = toNumber(
    row.deposit_due ??
    row.deposit_remaining
  );

  const depositDue =
    explicitDepositDue !== null
      ? Math.max(0, explicitDepositDue)
      : depositAmount !== null &&
        paidAmount !== null
        ? Math.max(
            0,
            depositAmount - paidAmount
          )
        : null;

  const remainingDue =
    remainingAmount !== null
      ? Math.max(0, remainingAmount)
      : null;

  // Invoices API currently returns currency
  // at data.currency = "IRT".
  const currency = currencyOf(row) || 'IRT';

  // ========================================
  // PAYMENT PERMISSIONS
  // ========================================

  const closed = [
    'cancelled',
    'canceled',
    'expired',
    'rejected',
  ].includes(bookingStatus);

  const alreadyPaid =
    [
      'paid',
      'completed',
      'fully_paid',
    ].includes(status) ||
    remainingDue === 0;

  const hasBooking = validId(bookingId);

  // Deposit:
  // Only for bookings awaiting payment.
  const canDeposit =
    hasBooking &&
    !closed &&
    !alreadyPaid &&
    row.can_pay_deposit !== false &&
    bookingStatus === 'awaiting_payment' &&
    depositDue !== null &&
    depositDue > 0;

  // Remaining:
  // Deposit must already be covered.
  const canRemaining =
    hasBooking &&
    !closed &&
    !alreadyPaid &&
    row.can_pay_remaining !== false &&
    ['confirmed', 'completed'].includes(
      bookingStatus
    ) &&
    depositDue !== null &&
    depositDue <= 0 &&
    remainingDue !== null &&
    remainingDue > 0;

  // ========================================
  // DISPLAY
  // ========================================

  const invoiceDate = dateText(
    row.issued_at ?? row.created_at
  );

  const bookingDate = row.booking_date
    ? dateText(row.booking_date)
    : '';

  return `
    <article class="dn-finance-entry">

      <!-- INVOICE INFORMATION -->

      <div class="dn-finance-entry-main">

        <strong>
          ${tx('invoice')} #${id}
        </strong>

        <small>
          ${esc(invoiceDate || tr('unavailable'))}
        </small>

        ${
          bookingDate
            ? `
              <small>
                ${tx('date')}: ${esc(bookingDate)}
              </small>
            `
            : ''
        }

        <span class="dn-finance-status">
          ${esc(statusText(status))}
        </span>

      </div>

      <!-- FINANCIAL AMOUNTS -->

      <div class="dn-finance-amount">

        <strong>
          ${esc(money(total, currency))}
        </strong>

        <small>
          ${tx('paid')}:
          ${esc(money(paidAmount, currency))}
        </small>

        <small>
          ${tx('remaining')}:
          ${esc(money(remainingDue, currency))}
        </small>

      </div>

      <!-- ACTION BUTTONS -->

      <div class="dn-finance-actions">

        <button
          type="button"
          data-finance-invoice="${id}"
        >
          ${tx('details')}
        </button>

        ${
          canDeposit
            ? `
              <button
                type="button"
                class="dn-finance-pay"
                data-finance-pay="deposit"
                data-finance-booking="${bookingId}"
              >
                ${tx('deposit')}
              </button>
            `
            : ''
        }

        ${
          canRemaining
            ? `
              <button
                type="button"
                class="dn-finance-pay"
                data-finance-pay="remaining"
                data-finance-booking="${bookingId}"
              >
                ${tx('payRemaining')}
              </button>
            `
            : ''
        }

      </div>

    </article>
  `;
}


// ============================================
// PAYMENTS
// ============================================

function paymentHTML(row) {
  const id = Number(row?.id);
  if (!validId(id)) return '';

  const amount = amountOf(row, [
    'amount',
    'paid_amount',
    'total',
  ]);

  const reference = firstValue(row, [
    'reference_number',
    'ref_id',
    'transaction_id',
  ]);

  return `
    <article class="dn-finance-entry">

      <div class="dn-finance-entry-main">
        <strong>
          ${tx('payment')} #${id}
        </strong>

        <small>
          ${esc(dateText(
            row.paid_at ?? row.created_at
          ))}
        </small>

        <span class="dn-finance-status">
          ${esc(statusText(
            row.status ?? row.payment_status
          ))}
        </span>
      </div>

      <div class="dn-finance-amount">
        <strong>
          ${esc(money(amount, currencyOf(row)))}
        </strong>

        ${
          reference
            ? `<small>${esc(reference)}</small>`
            : ''
        }
      </div>

      <div class="dn-finance-actions">
        <button
          type="button"
          data-finance-payment="${id}"
        >
          ${tx('details')}
        </button>

        <button
          type="button"
          data-finance-status="${id}"
        >
          ${tx('checkStatus')}
        </button>
      </div>

    </article>
  `;
}

// ============================================
// COMPONENT HTML
// ============================================

export function dashboardBillingHTML() {
  return `
    <div
      class="dn-finance"
      data-finance-root
    >

      <div class="dn-finance-toolbar">
        <h2>${tx('summary')}</h2>

        <button
          type="button"
          data-finance-refresh
        >
          ${tx('refresh')}
        </button>
      </div>

      <div data-finance-summary>
        <p class="dn-finance-muted">
          ${tx('loading')}
        </p>
      </div>

      <div class="dn-finance-columns">

        <section class="dn-finance-surface">
          <h2>${tx('invoices')}</h2>

          <div data-finance-invoices>
            <p class="dn-finance-muted">
              ${tx('loading')}
            </p>
          </div>
        </section>

        <section class="dn-finance-surface">
          <h2>${tx('payments')}</h2>

          <div data-finance-payments>
            <p class="dn-finance-muted">
              ${tx('loading')}
            </p>
          </div>
        </section>

      </div>

      <section
        class="dn-finance-surface dn-finance-details"
        data-finance-details
        hidden
      >
        <div class="dn-finance-toolbar">
          <h2>${tx('details')}</h2>

          <button
            type="button"
            data-finance-close
          >
            ${tx('close')}
          </button>
        </div>

        <div data-finance-details-body></div>
      </section>

      <p
        class="dn-finance-feedback"
        data-finance-feedback
        role="status"
        aria-live="polite"
        hidden
      ></p>

    </div>
  `;
}

// ============================================
// INITIALIZATION
// ============================================

export function initDashboardBilling(
  dashboardRoot,
  signal
) {
  const root = dashboardRoot.querySelector(
    '[data-finance-root]'
  );

  if (!root) {
    return {
      load() {},
      cleanup() {},
    };
  }

  const $ = selector =>
    root.querySelector(selector);

  const summary = $('[data-finance-summary]');
  const invoices = $('[data-finance-invoices]');
  const payments = $('[data-finance-payments]');
  const details = $('[data-finance-details]');
  const detailBody = $('[data-finance-details-body]');
  const feedback = $('[data-finance-feedback]');

  let loaded = false;
  let requestController = null;
  let detailController = null;
  let paymentInProgress = false;

  const alive = () =>
    !signal.aborted && root.isConnected;

  function feedbackMessage(value, error = false) {
    feedback.hidden = false;
    feedback.textContent = value;
    feedback.dataset.error = String(error);
  }

  function checkResponse(response) {
    if (response?.success === false) {
      throw new Error(
        response.message || tr('error')
      );
    }

    return response;
  }

  function closeDetails() {
    detailController?.abort();
    details.hidden = true;
    detailBody.replaceChildren();
  }

  // ==========================================
  // LOAD FINANCE DATA
  // ==========================================

  async function load() {
    if (!alive()) return;

    loaded = true;

    requestController?.abort();
    requestController = new AbortController();

    const local = requestController;

    closeDetails();
    feedback.hidden = true;

    summary.textContent = tr('loading');
    invoices.textContent = tr('loading');
    payments.textContent = tr('loading');

    const tasks = [
      {
        run: () => financeApi.summary(local.signal),
        element: summary,
        render: result => summaryHTML(result),
      },
      {
        run: () => financeApi.invoices(1, local.signal),
        element: invoices,
        render: result => {
          const rows = collection(result, [
            'invoices',
            'items',
          ]);

          if (!rows) {
            return `<p>${tx('error')}</p>`;
          }

          return rows.length
            ? rows.map(invoiceHTML).join('')
            : `<p>${tx('emptyInvoices')}</p>`;
        },
      },
      {
        run: () => financeApi.payments(1, local.signal),
        element: payments,
        render: result => {
          const rows = collection(result, [
            'payments',
            'transactions',
          ]);

          if (!rows) {
            return `<p>${tx('error')}</p>`;
          }

          return rows.length
            ? rows.map(paymentHTML).join('')
            : `<p>${tx('emptyPayments')}</p>`;
        },
      },
    ];

    await Promise.allSettled(
      tasks.map(async task => {
        try {
          const result = checkResponse(
            await task.run()
          );

          if (!alive() || local.signal.aborted) {
            return;
          }

          task.element.innerHTML =
            task.render(result);

          // Update Overview balance when available.
          if (task.element === summary) {
            const data = dataOf(result);

            const due = amountOf(data, [
              'total_due',
              'balance_due',
              'outstanding_balance',
              'remaining_amount',
              'total_remaining',
            ]);

            const balance = dashboardRoot.querySelector(
              '[data-dashboard-stat="balance"]'
            );

            if (balance && due !== null) {
              balance.textContent = money(
                due,
                currencyOf(data)
              );
            }
          }

        } catch (error) {
          if (!alive() || local.signal.aborted) {
            return;
          }

          console.error(
            'Finance API error:',
            error
          );

          task.element.textContent =
            error.message || tr('error');
        }
      })
    );
  }

  // ==========================================
  // DETAILS
  // ==========================================

  
async function showDetails(type, id) {
  if (
    !alive() ||
    !validId(id) ||
    !['invoice', 'payment'].includes(type)
  ) {
    return;
  }

  detailController?.abort();
  detailController = new AbortController();

  const local = detailController;

  details.hidden = false;
  detailBody.textContent = tr('loading');

  // Safe detail field renderer
  const detailField = (label, value) => {
    if (
      value === undefined ||
      value === null ||
      value === ''
    ) {
      return '';
    }

    return `
      <div>
        <dt>${esc(label)}</dt>
        <dd>${esc(value)}</dd>
      </div>
    `;
  };

  const formatTime = value =>
    String(value ?? '').slice(0, 5);

  try {
    const response = checkResponse(
      type === 'invoice'
        ? await financeApi.invoice(
            id,
            local.signal
          )
        : await financeApi.payment(
            id,
            local.signal
          )
    );

    if (!alive() || local.signal.aborted) {
      return;
    }

    const data = dataOf(response);

    const record =
      type === 'payment'
        ? data?.payment ?? data
        : data?.invoice ?? data;

    if (!record || typeof record !== 'object') {
      throw new Error(tr('error'));
    }

    const currency = currencyOf(record) || 'IRT';

    // ======================================
    // INVOICE DETAILS
    // ======================================

    if (type === 'invoice') {
      const financial =
        record.financial &&
        typeof record.financial === 'object'
          ? record.financial
          : record;

      const services = [
        record.services,
        record.items,
        record.invoice_items,
      ].find(Array.isArray) ?? [];

      const subtotal =
        financial.subtotal;

      const discount =
        financial.discount_amount;

      const total =
        financial.total_amount;

      const deposit =
        financial.deposit_amount;

      const paid =
        financial.paid_amount;

      const refunded =
        financial.refunded_amount;

      const remaining =
        financial.remaining_amount;

      const bookingDate = dateText(
        record.booking_date
      );

      const appointmentTime = [
        formatTime(record.start_time),
        formatTime(record.end_time),
      ].filter(Boolean).join(' – ');

      const financeFields = [
        [tr('total'), money(total, currency)],
        [tr('discount'), money(discount, currency)],
        [tr('deposit'), money(deposit, currency)],
        [tr('paid'), money(paid, currency)],
        [tr('refund'), money(refunded, currency)],
        [tr('remaining'), money(remaining, currency)],
      ];

      detailBody.innerHTML = `
        <div class="dn-finance-detail-content">

          <h3>
            ${tx('invoice')} #${Number(id)}
          </h3>

          <dl class="dn-finance-detail-grid">

            ${detailField(
              tr('booking'),
              record.booking_id != null
                ? `#${record.booking_id}`
                : null
            )}

            ${detailField(
              tr('date'),
              bookingDate
            )}

            ${detailField(
              tr('time'),
              appointmentTime
            )}

            ${detailField(
              tr('status'),
              statusText(record.status)
            )}

            ${detailField(
              tr('subtotal'),
              money(subtotal, currency)
            )}

            ${financeFields.map(([label, value]) =>
              detailField(label, value)
            ).join('')}

          </dl>

          <h3>${tx('items')}</h3>

          ${
            services.length
              ? `
                <ul class="dn-finance-item-list">

                  ${services.map(service => {
                    const serviceName = String(
                      service.service_name ??
                      service.service?.name ??
                      service.name ??
                      service.title ??
                      tr('service')
                    ).trim();

                    const doctorName =
                      service.doctor?.name ??
                      service.staff?.name ??
                      service.doctor_name ??
                      '';

                    const duration =
                      service.duration;

                    const price =
                      service.price ??
                      service.amount ??
                      service.total;

                    const time = [
                      formatTime(service.start_time),
                      formatTime(service.end_time),
                    ].filter(Boolean).join(' – ');

                    return `
                      <li>
                        <div>
                          <strong>
                            ${esc(serviceName)}
                          </strong>

                          ${
                            doctorName
                              ? `
                                <small>
                                  ${tx('doctor')}:
                                  ${esc(doctorName)}
                                </small>
                              `
                              : ''
                          }

                          ${
                            duration != null
                              ? `
                                <small>
                                  ${tx('duration')}:
                                  ${esc(duration)}
                                  ${tx('minutes')}
                                </small>
                              `
                              : ''
                          }

                          ${
                            time
                              ? `
                                <small>
                                  ${tx('time')}: ${esc(time)}
                                </small>
                              `
                              : ''
                          }
                        </div>

                        <strong>
                          ${esc(money(price, currency))}
                        </strong>
                      </li>
                    `;
                  }).join('')}

                </ul>
              `
              : `
                <p class="dn-finance-muted">
                  ${tx('unavailable')}
                </p>
              `
          }

        </div>
      `;

      return;
    }

    // ======================================
    // PAYMENT DETAILS
    // ======================================

    const paymentFields = [
      [
        tr('booking'),
        record.booking_id != null
          ? `#${record.booking_id}`
          : null,
      ],
      [
        tr('amount'),
        money(
          record.amount ?? record.paid_amount,
          currency
        ),
      ],
      [
        tr('status'),
        statusText(
          record.status ?? record.payment_status
        ),
      ],
      [
        tr('type'),
        record.type,
      ],
      [
        tr('method'),
        record.payment_method ?? record.method,
      ],
      [
        tr('gateway'),
        record.gateway,
      ],
      [
        tr('reference'),
        record.transaction_id ??
        record.reference_number ??
        record.ref_id,
      ],
      [
        tr('date'),
        dateText(record.created_at),
      ],
      [
        tr('paidAt'),
        dateText(record.paid_at),
      ],
    ];

    detailBody.innerHTML = `
      <div class="dn-finance-detail-content">

        <h3>
          ${tx('payment')} #${Number(id)}
        </h3>

        <dl class="dn-finance-detail-grid">

          ${paymentFields.map(([label, value]) =>
            detailField(label, value)
          ).join('')}

        </dl>

      </div>
    `;

  } catch (error) {
    if (!alive() || local.signal.aborted) {
      return;
    }

    console.error(
      'Finance details:',
      error
    );

    detailBody.textContent =
      error.message || tr('error');
  }
}


  // ==========================================
  // PAYMENT STATUS
  // ==========================================

  async function checkPaymentStatus(id) {
    if (!alive() || !validId(id)) return;

    feedbackMessage(tr('loading'));

    try {
      const response = checkResponse(
        await financeApi.paymentStatus(id, signal)
      );

      if (!alive()) return;

      const result = dataOf(response);

      const status =
        typeof result === 'string'
          ? result
          : (
              result.payment_status ??
              result.status ??
              result.payment?.status
            );

      feedbackMessage(
        status == null
          ? tr('unavailable')
          : `${tr('payment')} #${id}: ${statusText(status)}`
      );

      // Refresh list after a confirmed status check.
      // Keep response details visible to patient.
    } catch (error) {
      if (!alive()) return;

      feedbackMessage(
        error.message || tr('error'),
        true
      );
    }
  }

  // ==========================================
  // ONLINE PAYMENT
  // ==========================================


function startPayment(button) {
  const bookingId = Number(
    button.dataset.financeBooking
  );

  const mode = button.dataset.financePay;

  if (
    !Number.isSafeInteger(bookingId) ||
    bookingId < 1 ||
    !['deposit', 'remaining'].includes(mode)
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

  url.searchParams.set('mode', mode);

  window.location.assign(url.toString());
}


  // ==========================================
  // EVENTS
  // ==========================================

  root.addEventListener(
    'click',
    event => {
      const button = event.target.closest('button');

      if (
        !button ||
        !root.contains(button) ||
        button.disabled
      ) {
        return;
      }

      if (button.hasAttribute('data-finance-refresh')) {
        void load();

      } else if (button.hasAttribute('data-finance-invoice')) {
        void showDetails(
          'invoice',
          button.dataset.financeInvoice
        );

      } else if (button.hasAttribute('data-finance-payment')) {
        void showDetails(
          'payment',
          button.dataset.financePayment
        );

      } else if (button.hasAttribute('data-finance-status')) {
        void checkPaymentStatus(
          button.dataset.financeStatus
        );

      } else if (button.hasAttribute('data-finance-pay')) {
        void startPayment(button);

      } else if (button.hasAttribute('data-finance-close')) {
        closeDetails();
      }
    },
    { signal }
  );

  return {
    load() {
      if (!loaded) {
        void load();
      }
    },

    cleanup() {
      requestController?.abort();
      detailController?.abort();
    },
  };
}
