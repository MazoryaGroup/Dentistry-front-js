
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
    invoiced: 'Total invoiced',
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
  },
  fa: {
    summary: 'خلاصه وضعیت مالی',
    invoiced: 'مجموع فاکتورها',
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
  if (value === null || value === undefined || value === '') {
    return '—';
  }

  const number = Number(value);

  const formatted = Number.isFinite(number)
    ? number.toLocaleString(isFa() ? 'fa-IR' : 'en-US')
    : String(value);

  return `${formatted}${currency ? ` ${currency}` : ''}`;
}

function dateText(value) {
  if (!value) return '';

  const parsed = new Date(value);

  if (Number.isNaN(parsed.getTime())) {
    return '';
  }

  return new Intl.DateTimeFormat(
    isFa() ? 'fa-IR' : 'en-GB',
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

  const bookingId = Number(
    row.booking_id ?? row.booking?.id
  );

  const total = amountOf(row, [
    'total_amount',
    'grand_total',
    'total',
    'amount',
  ]);

  const due = amountOf(row, [
    'remaining_amount',
    'balance_due',
    'amount_due',
  ]);

  const currency = currencyOf(row);

  /*
   * Payment buttons require an explicit backend
   * permission flag or a positive payable amount.
   */

  const depositDue = Number(
    row.deposit_due ?? row.deposit_remaining
  );

  const remainingDue = Number(
    row.remaining_due ?? row.remaining_amount
  );

  const canDeposit =
    row.can_pay_deposit === true ||
    (
      row.can_pay_deposit !== false &&
      Number.isFinite(depositDue) &&
      depositDue > 0
    );

  const canRemaining =
    row.can_pay_remaining === true ||
    (
      row.can_pay_remaining !== false &&
      Number.isFinite(remainingDue) &&
      remainingDue > 0
    );

  const status = String(
    row.payment_status ?? row.status ?? ''
  ).toLowerCase();

  const alreadyPaid = [
    'paid',
    'completed',
    'fully_paid',
  ].includes(status);

  return `
    <article class="dn-finance-entry">

      <div class="dn-finance-entry-main">
        <strong>
          ${tx('invoice')} #${id}
        </strong>

        <small>
          ${esc(dateText(
            row.issued_at ?? row.created_at
          ))}
        </small>

        <span class="dn-finance-status">
          ${esc(statusText(status))}
        </span>
      </div>

      <div class="dn-finance-amount">
        <strong>${esc(money(total, currency))}</strong>
        <small>
          ${tx('remaining')}:
          ${esc(money(due, currency))}
        </small>
      </div>

      <div class="dn-finance-actions">
        <button
          type="button"
          data-finance-invoice="${id}"
        >
          ${tx('details')}
        </button>

        ${
          validId(bookingId) &&
          !alreadyPaid &&
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
          validId(bookingId) &&
          !alreadyPaid &&
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
    if (!alive() || !validId(id)) return;

    detailController?.abort();
    detailController = new AbortController();

    const local = detailController;

    details.hidden = false;
    detailBody.textContent = tr('loading');

    try {
      const result = checkResponse(
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

      const record = dataOf(result);

      const title = type === 'invoice'
        ? tr('invoice')
        : tr('payment');

      const fields = [
        [tr('status'), record.status ?? record.payment_status],
        [tr('total'), record.total_amount ?? record.amount],
        [tr('paid'), record.paid_amount],
        [tr('discount'), record.discount_amount],
        [tr('remaining'), record.remaining_amount],
        [tr('method'), record.method],
        [tr('reference'),
          record.reference_number ?? record.transaction_id],
        [tr('date'),
          dateText(record.created_at ?? record.paid_at)],
      ];

      const items = Array.isArray(record.items)
        ? record.items
        : Array.isArray(record.invoice_items)
          ? record.invoice_items
          : [];

      detailBody.innerHTML = `
        <h3>${esc(title)} #${Number(id)}</h3>

        <dl class="dn-finance-detail-grid">
          ${fields
            .filter(([, value]) =>
              value !== null &&
              value !== undefined &&
              value !== ''
            )
            .map(([label, value]) => `
              <div>
                <dt>${esc(label)}</dt>
                <dd>${esc(value)}</dd>
              </div>
            `)
            .join('')}
        </dl>

        ${
          items.length
            ? `
              <h3>${tx('items')}</h3>

              <ul class="dn-finance-item-list">
                ${items.map(item => `
                  <li>
                    <span>
                      ${esc(
                        item.service?.name ??
                        item.name ??
                        item.title ??
                        tr('service')
                      )}
                    </span>

                    <strong>
                      ${esc(money(
                        item.amount ??
                        item.price ??
                        item.total
                      ))}
                    </strong>
                  </li>
                `).join('')}
              </ul>
            `
            : ''
        }
      `;

    } catch (error) {
      if (local.signal.aborted) return;

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
