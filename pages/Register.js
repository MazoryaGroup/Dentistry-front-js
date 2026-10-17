
/**
 * Dentistry — Minimal Patient Registration
 * FA / EN — Phone OTP
 */

import { t, getLanguage } from '../code/i18n.js';
import { registerApi } from '../code/api.js';
import { storeLoginResponse } from '../code/auth.js';
import { startPatientSession } from '../code/session.js';

import '../asset/css/login-minimal.css';
import '../asset/css/auth-minimal.css';

// ============================================
// STATE
// ============================================

const draft = {
  name: '',
  phone: '',
  referralCode: '',
  step: 'details',
  expiresAt: 0,
};

const language = () =>
  getLanguage() === 'fa' ? 'fa' : 'en';

const esc = value =>
  String(value ?? '').replace(/[&<>"']/g, ch => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[ch]);

const tr = key => esc(t(`auth.register.${key}`));

// ============================================
// NORMALIZATION
// ============================================

function normalizeDigits(value) {
  return String(value ?? '')
    .replace(
      /[۰-۹]/g,
      digit => String(digit.charCodeAt(0) - 0x06F0)
    )
    .replace(
      /[٠-٩]/g,
      digit => String(digit.charCodeAt(0) - 0x0660)
    );
}

function normalizePhone(value) {
  const phone = normalizeDigits(value)
    .replace(/[\s()-]/g, '')
    .replace(/^(?:\+98|0098|98)/, '0');

  return /^09\d{9}$/.test(phone)
    ? phone
    : null;
}

function normalizeCode(value) {
  return normalizeDigits(value)
    .replace(/\D/g, '')
    .slice(0, 6);
}

// ============================================
// API ERROR HANDLING
// ============================================

function getErrorMessage(error, action) {
  const status = Number(error?.status ?? 0);

  if (status === 429) {
    return t('auth.register.tooMany');
  }

  if (status === 408) {
    return t('auth.register.timeout');
  }

  if (status === 0) {
    return t('auth.register.networkError');
  }

  if (status >= 500) {
    return t('auth.register.serverError');
  }

  if (status === 409 && action === 'send') {
    return t('auth.register.alreadyRegistered');
  }

  if (
    action === 'verify' &&
    [400, 401, 403, 410, 422].includes(status)
  ) {
    return t('auth.register.invalidCode');
  }

  if (status === 422) {
    return t('auth.register.invalidData');
  }

  return t('auth.register.requestFailed');
}

function clearDraft() {
  draft.name = '';
  draft.phone = '';
  draft.referralCode = '';
  draft.step = 'details';
  draft.expiresAt = 0;
}

// ============================================
// REGISTER PAGE
// ============================================

export function Register() {
  return `
    <main
      class="dn-login-page dn-auth-page"
      data-portal-page="register"
      data-no-translate
      dir="${language() === 'fa' ? 'rtl' : 'ltr'}"
    >
      <div class="dn-login-container">

        <!-- LOGO -->

        <a
          href="/"
          class="dn-login-brand"
          aria-label="Dentistry"
        >
          <img
            src="/asset/img/logo.png"
            loading="eager"
            alt="Dentistry Logo"
            class="dn-login-logo"
          />
        </a>

        <!-- CARD -->

        <section
          class="dn-login-card"
          aria-labelledby="dn-register-title"
        >

          <div class="dn-login-heading">

            <h1 id="dn-register-title">
              ${tr('title')}
            </h1>

            <p>
              ${tr('subtitle')}
            </p>

          </div>

          <!-- STEP 1: REGISTRATION -->

          <form
            id="dp-register-form"
            class="dn-login-form"
            data-register-step="details"
            novalidate
          >

            <div class="dn-login-field">

              <label for="register-name">
                ${tr('name')}
              </label>

              <input
                id="register-name"
                name="name"
                type="text"
                autocomplete="name"
                minlength="2"
                maxlength="100"
                placeholder="${tr('namePlaceholder')}"
                required
              />

            </div>

            <div class="dn-login-field">

              <label for="register-phone">
                ${tr('phone')}
              </label>

              <input
                id="register-phone"
                name="phone"
                type="tel"
                autocomplete="tel"
                inputmode="tel"
                dir="ltr"
                maxlength="20"
                placeholder="09123456789"
                required
              />

            </div>

            <div class="dn-login-field">

              <label for="register-referral">
                ${tr('referral')}
              </label>

              <input
                id="register-referral"
                name="referral_code"
                type="text"
                maxlength="64"
                placeholder="${tr('referralPlaceholder')}"
              />

            </div>

            <button
              class="dn-login-submit"
              type="submit"
              data-register-send
            >
              <span>
                ${tr('sendCode')}
              </span>

              <span aria-hidden="true">→</span>
            </button>

          </form>

          <!-- STEP 2: OTP VERIFICATION -->

          <form
            id="dp-register-verify-form"
            class="dn-login-form"
            data-register-step="verify"
            hidden
            novalidate
          >

            <p class="dn-login-instruction">

              ${tr('codeSentTo')}

              <strong
                data-register-phone-label
                dir="ltr"
              ></strong>

            </p>

            <div class="dn-login-field">

              <label for="register-code">
                ${tr('code')}
              </label>

              <input
                id="register-code"
                name="code"
                type="text"
                dir="ltr"
                inputmode="numeric"
                autocomplete="one-time-code"
                maxlength="6"
                placeholder="${tr('codePlaceholder')}"
                required
              />

              <small>
                ${tr('codeValidity')}
              </small>

            </div>

            <button
              class="dn-login-submit"
              type="submit"
              data-register-verify
            >
              <span>
                ${tr('verify')}
              </span>

              <span aria-hidden="true">→</span>
            </button>

            <div class="dn-login-otp-actions">

              <button
                class="dn-login-text-button"
                type="button"
                data-register-edit
              >
                ${tr('editPhone')}
              </button>

              <button
                class="dn-login-text-button"
                type="button"
                data-register-resend
                disabled
              >
                ${tr('resend')}

                <span
                  data-register-countdown
                  dir="ltr"
                ></span>
              </button>

            </div>

          </form>

          <!-- COMPLETE -->

          <div
            data-register-step="complete"
            class="dn-auth-complete"
            hidden
          >

            <p
              class="dn-login-feedback dn-auth-success"
              role="status"
            >
              ${tr('success')}
            </p>

            <a
              href="/login"
              class="dn-login-submit dn-auth-button-link"
            >
              ${tr('goToLogin')}
              <span aria-hidden="true">→</span>
            </a>

          </div>

          <!-- FEEDBACK -->

          <p
            class="dn-login-feedback"
            data-form-feedback
            role="status"
            aria-live="polite"
            hidden
          ></p>

          <!-- FOOTER -->

          <div class="dn-login-footer">

            <span>
              ${tr('haveAccount')}
            </span>

            <a href="/login">
              ${tr('signIn')}
            </a>

          </div>

        </section>

      </div>
    </main>
  `;
}

// ============================================
// REGISTER INITIALIZATION
// ============================================

export function initRegister() {
  const root = document.querySelector(
    '[data-portal-page="register"]'
  );

  if (!root) {
    return () => {};
  }

  const controller = new AbortController();
  const { signal } = controller;

  const $ = selector =>
    root.querySelector(selector);

  const detailsForm = $('#dp-register-form');
  const verifyForm = $('#dp-register-verify-form');

  const nameInput = $('#register-name');
  const phoneInput = $('#register-phone');
  const referralInput = $('#register-referral');
  const codeInput = $('#register-code');

  const resendButton = $('[data-register-resend]');
  const countdown = $('[data-register-countdown]');
  const feedbackEl = $('[data-form-feedback]');

  let busy = false;
  let timer = null;

  // ==========================================
  // FEEDBACK
  // ==========================================

  function feedback(message, type = 'note') {
    feedbackEl.hidden = false;
    feedbackEl.textContent = message;
    feedbackEl.dataset.type = type;
  }

  function clearFeedback() {
    feedbackEl.hidden = true;
    feedbackEl.textContent = '';
    delete feedbackEl.dataset.type;
  }

  // ==========================================
  // BUTTONS AND COUNTDOWN
  // ==========================================

  function secondsLeft() {
    return Math.max(
      0,
      Math.ceil(
        (draft.expiresAt - Date.now()) / 1000
      )
    );
  }

  function updateButtons() {
    $('[data-register-send]').disabled = busy;
    $('[data-register-verify]').disabled = busy;
    $('[data-register-edit]').disabled = busy;

    resendButton.disabled =
      busy || secondsLeft() > 0;

    countdown.textContent =
      secondsLeft() > 0
        ? `(${secondsLeft()}s)`
        : '';
  }

  function setBusy(value) {
    busy = value;

    root.setAttribute(
      'aria-busy',
      String(value)
    );

    updateButtons();
  }

  // ==========================================
  // STEPS
  // ==========================================

  function showStep(step) {
    draft.step = step;

    root
      .querySelectorAll('[data-register-step]')
      .forEach(element => {
        element.hidden =
          element.dataset.registerStep !== step;
      });

    $('[data-register-phone-label]').textContent =
      draft.phone;

    updateButtons();
  }

  // ==========================================
  // TIMER
  // ==========================================

  function stopTimer() {
    if (timer !== null) {
      clearInterval(timer);
    }

    timer = null;
  }

  function startTimer() {
    stopTimer();
    updateButtons();

    if (secondsLeft() === 0) {
      return;
    }

    timer = setInterval(() => {
      if (
        signal.aborted ||
        secondsLeft() === 0
      ) {
        stopTimer();
      }

      updateButtons();
    }, 1000);
  }

  // ==========================================
  // SEND REGISTRATION OTP
  // ==========================================

  async function sendCode(isResend = false) {
    if (busy || signal.aborted) {
      return;
    }

    if (isResend && secondsLeft() > 0) {
      return;
    }

    const name = isResend
      ? draft.name
      : nameInput.value.trim();

    const phone = normalizePhone(
      isResend
        ? draft.phone
        : phoneInput.value
    );

    const referralCode = isResend
      ? draft.referralCode
      : referralInput.value.trim();

    if (name.length < 2) {
      return feedback(
        t('auth.register.invalidName'),
        'error'
      );
    }

    if (!phone) {
      return feedback(
        t('auth.register.invalidPhone'),
        'error'
      );
    }

    setBusy(true);
    clearFeedback();

    try {
      const response = await registerApi.sendCode(
        name,
        phone,
        referralCode,
        signal
      );

      if (signal.aborted) {
        return;
      }

      if (
        response?.success === false ||
        response?.status === false
      ) {
        throw new Error('REGISTER_SEND_FAILED');
      }

      draft.name = name;
      draft.phone = phone;
      draft.referralCode = referralCode;

      draft.expiresAt =
        Date.now() + 2 * 60 * 1000;

      codeInput.value = '';

      showStep('verify');
      startTimer();

      feedback(
        t(
          isResend
            ? 'auth.register.resent'
            : 'auth.register.sent'
        )
      );

      codeInput.focus();

    } catch (error) {
      if (!signal.aborted) {
        feedback(
          getErrorMessage(error, 'send'),
          'error'
        );
      }

    } finally {
      if (!signal.aborted) {
        setBusy(false);
      }
    }
  }

  // ==========================================
  // DETAILS FORM
  // ==========================================

  detailsForm.addEventListener(
    'submit',
    event => {
      event.preventDefault();
      void sendCode();
    },
    { signal }
  );

  // ==========================================
  // VERIFY OTP
  // ==========================================

  verifyForm.addEventListener(
    'submit',
    async event => {
      event.preventDefault();

      if (busy || signal.aborted) {
        return;
      }

      const code = normalizeCode(
        codeInput.value
      );

      if (code.length !== 6) {
        return feedback(
          t('auth.register.invalidCodeFormat'),
          'error'
        );
      }

      if (!draft.phone) {
        showStep('details');

        return feedback(
          t('auth.register.sessionExpired'),
          'error'
        );
      }

      setBusy(true);
      clearFeedback();

      try {
        const response =
          await registerApi.verifyCode(
            draft.phone,
            code,
            draft.name,
            draft.referralCode,
            signal
          );

        if (signal.aborted) {
          return;
        }

        if (
          response?.success === false ||
          response?.status === false
        ) {
          throw new Error('REGISTER_VERIFY_FAILED');
        }

        if (
          !response?.data?.token ||
          !response?.data?.client
        ) {
          throw new Error(
            'INVALID_REGISTER_RESPONSE'
          );
        }

        // Store JWT and patient information.
        storeLoginResponse(response);

        // Start the patient session.
        startPatientSession();

        clearDraft();
        stopTimer();

        // Redirect to dashboard.
        window.location.assign(
          `/dashboard?lang=${language()}`
        );

      } catch (error) {
        if (!signal.aborted) {
          feedback(
            error?.message ===
              'INVALID_REGISTER_RESPONSE'
              ? t('auth.register.requestFailed')
              : getErrorMessage(
                  error,
                  'verify'
                ),
            'error'
          );
        }

      } finally {
        if (!signal.aborted) {
          setBusy(false);
        }
      }
    },
    { signal }
  );

  // ==========================================
  // EDIT PHONE
  // ==========================================

  $('[data-register-edit]').addEventListener(
    'click',
    () => {
      if (busy) return;

      stopTimer();

      draft.expiresAt = 0;
      draft.step = 'details';

      codeInput.value = '';

      clearFeedback();
      showStep('details');

      phoneInput.focus();
    },
    { signal }
  );

  // ==========================================
  // RESEND CODE
  // ==========================================

  resendButton.addEventListener(
    'click',
    () => {
      if (
        !busy &&
        !resendButton.disabled
      ) {
        void sendCode(true);
      }
    },
    { signal }
  );

  // ==========================================
  // OTP INPUT
  // ==========================================

  codeInput.addEventListener(
    'input',
    () => {
      codeInput.value =
        normalizeCode(codeInput.value);
    },
    { signal }
  );

  // ==========================================
  // RESTORE AFTER LANGUAGE SWITCH
  // ==========================================

  nameInput.value = draft.name;
  phoneInput.value = draft.phone;
  referralInput.value = draft.referralCode;

  if (
    draft.step === 'verify' &&
    draft.phone
  ) {
    showStep('verify');
    startTimer();

  } else {
    showStep('details');
  }

  // ==========================================
  // CLEANUP
  // ==========================================

  return () => {
    controller.abort();
    stopTimer();
  };
}
