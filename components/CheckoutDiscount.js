
import { getLanguage } from '../code/i18n.js';
import { discountApi } from '../code/discountApi.js';

const fa = () => getLanguage() === 'fa';

const words = {
  en: {
    title: 'Have a discount code?',
    placeholder: 'Enter discount code',
    check: 'Check code',
    checking: 'Checking…',
    remove: 'Remove',
    valid: 'Discount code is valid.',
    discount: 'Discount',
    final: 'Total after discount',
    warning: 'This is a preview only. The discount must be applied by the clinic server before payment.',
    error: 'Discount code could not be validated.',
  },
  fa: {
    title: 'کد تخفیف دارید؟',
    placeholder: 'کد تخفیف را وارد کنید',
    check: 'بررسی کد',
    checking: 'در حال بررسی…',
    remove: 'حذف',
    valid: 'کد تخفیف معتبر است.',
    discount: 'مبلغ تخفیف',
    final: 'مبلغ کل پس از تخفیف',
    warning: 'این فقط پیش‌نمایش است. تخفیف باید قبل از پرداخت توسط سرور کلینیک روی رزرو ثبت شود.',
    error: 'بررسی کد تخفیف انجام نشد.',
  },
};

const tr = key => words[fa() ? 'fa' : 'en'][key];

function amount(value, currency) {
  const number = Number(value);

  if (!Number.isFinite(number)) return '—';

  const formatted = number.toLocaleString(
    fa() ? 'fa-IR' : 'en-US'
  );

  const unit = currency === 'TOMAN'
    ? (fa() ? 'تومان' : 'Toman')
    : currency || '';

  return `${formatted} ${unit}`.trim();
}

export function checkoutDiscountHTML() {
  return `
    <section class="dp-discount">
      <h3>${tr('title')}</h3>

      <div class="dp-discount-entry">
        <input
          type="text"
          data-discount-code
          maxlength="100"
          autocomplete="off"
          placeholder="${tr('placeholder')}"
          aria-label="${tr('title')}"
        >

        <button
          type="button"
          data-discount-check
        >
          ${tr('check')}
        </button>

        <button
          type="button"
          data-discount-remove
          hidden
        >
          ${tr('remove')}
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
        <div>
          <span>${tr('discount')}</span>
          <strong data-discount-amount>—</strong>
        </div>

        <div>
          <span>${tr('final')}</span>
          <strong data-discount-final>—</strong>
        </div>

        <p>${tr('warning')}</p>
      </div>
    </section>
  `;
}

export function initCheckoutDiscount(
  root,
  bookingId,
  signal,
  onBlockingChange = () => {}
) {
  const input = root.querySelector('[data-discount-code]');
  const check = root.querySelector('[data-discount-check]');
  const remove = root.querySelector('[data-discount-remove]');
  const message = root.querySelector('[data-discount-message]');
  const result = root.querySelector('[data-discount-result]');

  if (!input || !check || !remove || !message || !result) {
    return { reset() {} };
  }

  let run = 0;
  let busy = false;

  function state() {
    // A typed code has not been applied to the booking.
    onBlockingChange(Boolean(input.value.trim()));
  }

  function reset() {
    ++run;
    busy = false;

    input.value = '';
    input.disabled = false;
    check.disabled = false;
    check.textContent = tr('check');

    remove.hidden = true;
    message.hidden = true;
    result.hidden = true;

    state();
  }

  input.addEventListener('input', () => {
    ++run;
    result.hidden = true;
    message.hidden = true;
    remove.hidden = !input.value.trim();
    state();
  }, { signal });

  remove.addEventListener('click', reset, { signal });

  check.addEventListener('click', async () => {
    const code = input.value.trim();

    if (!code || busy) return;

    const request = ++run;

    busy = true;
    check.disabled = true;
    check.textContent = tr('checking');

    result.hidden = true;
    message.hidden = true;

    try {
      const data = await discountApi.validate(
        code,
        bookingId,
        signal
      );

      if (signal.aborted || request !== run) return;

      message.textContent = tr('valid');
      message.dataset.state = 'success';
      message.hidden = false;

      root.querySelector(
        '[data-discount-amount]'
      ).textContent = amount(
        data.discount_amount,
        data.currency
      );

      root.querySelector(
        '[data-discount-final]'
      ).textContent = amount(
        data.final_amount,
        data.currency
      );

      result.hidden = false;
      remove.hidden = false;

    } catch (error) {
      if (signal.aborted || request !== run) return;

      message.textContent = error.message || tr('error');
      message.dataset.state = 'error';
      message.hidden = false;

    } finally {
      if (request === run && !signal.aborted) {
        busy = false;
        check.disabled = false;
        check.textContent = tr('check');
      }
    }
  }, { signal });

  return { reset };
}
