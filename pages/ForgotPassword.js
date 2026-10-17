
/**
 * Dentistry — Minimal Password Recovery
 * FA / EN
 */

import { t, getLanguage } from '../code/i18n.js';
import { forgotPasswordApi } from '../code/api.js';
import { storeLoginResponse } from '../code/auth.js';
import { startPatientSession } from '../code/session.js';

import '../asset/css/login-minimal.css';
import '../asset/css/auth-minimal.css';

// ============================================
// SETTINGS AND STATE
// ============================================

const RESEND_COOLDOWN_MS = 60 * 1000;

// Sensitive information stays in JS memory only.
const recovery = {
  step: 'phone',
  phone: '',
  code: '',
  resetToken: '',
  resetExpiresAt: 0,
  resendAfter: 0,
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

const tr = key => esc(t(`auth.forgot.${key}`));

// ============================================
// NORMALIZE INPUT
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

function clearRecovery() {
  recovery.step = 'phone';
  recovery.phone = '';
  recovery.code = '';
  recovery.resetToken = '';
  recovery.resetExpiresAt = 0;
  recovery.resendAfter = 0;
}

// ============================================
// API ERRORS
// ============================================

function getApiError(error, action) {
  const status = Number(
    error?.status ?? 0
  );

  const errors = error?.errors ?? {};

  if (status === 429) {
    return t('auth.forgot.tooMany');
  }

  if (status === 408) {
    return t('auth.forgot.timeout');
  }

  if (status >= 500) {
    return t('auth.forgot.serverError');
  }

  if (status === 0) {
    return t('auth.forgot.networkError');
  }

  if (
    status === 410 ||
    (
      action === 'reset' &&
      errors.reset_token
    )
  ) {
    return t('auth.forgot.resetTokenExpired');
  }

  if (
    action === 'verify' &&
    [400, 401, 403, 422].includes(status)
  ) {
    return t('auth.forgot.invalidCode');
  }

  if (
    action === 'reset' &&
    [400, 401, 403].includes(status)
  ) {
    return t('auth.forgot.invalidCode');
  }

  if (status === 422) {
    return action === 'send'
      ? t('auth.forgot.invalidPhone')
      : t('auth.forgot.invalidData');
  }

  return t('auth.forgot.requestFailed');
}

// ============================================
// PASSWORD INPUT COMPONENT
// ============================================

function passwordField(
  id,
  labelKey,
  placeholderKey
) {
  return `
    <div class="dn-login-field">

      <label for="${id}">
        ${tr(labelKey)}
      </label>

      <div class="dn-login-password-wrap">

        <input
          id="${id}"
          name="${id}"
          type="password"
          minlength="8"
          autocomplete="new-password"
          placeholder="${tr(placeholderKey)}"
          required
        />

        <button
          type="button"
          class="dn-login-password-toggle"
          data-auth-password-toggle="${id}"
          aria-label="${tr(labelKey)}"
          aria-pressed="false"
        >

          <svg
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path
              d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"
            />
            <circle cx="12" cy="12" r="3"/>
          </svg>

        </button>

      </div>

    </div>
  `;
}

// ============================================
// PAGE
// ============================================

export function ForgotPassword() {
  return `
    <main
      class="dn-login-page dn-auth-page"
      data-portal-page="forgot-password"
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
          aria-labelledby="dn-forgot-title"
        >

          <div class="dn-login-heading">

            <h1 id="dn-forgot-title">
              ${tr('title')}
            </h1>

            <p>
              ${tr('subtitle')}
            </p>

          </div>

          <!-- STEP 1: PHONE -->

          <form
            id="dp-forgot-phone-form"
            class="dn-login-form"
            data-forgot-step="phone"
            novalidate
          >

            <div class="dn-login-field">

              <label for="forgot-phone">
                ${tr('phone')}
              </label>

              <input
                id="forgot-phone"
                name="phone"
                type="tel"
                inputmode="tel"
                dir="ltr"
                autocomplete="tel"
                maxlength="20"
                placeholder="09123456789"
                required
              />

            </div>

            <button
              class="dn-login-submit"
              type="submit"
              data-forgot-send
            >

              <span>
                ${tr('sendCode')}
              </span>

              <span aria-hidden="true">→</span>

            </button>

          </form>

          <!-- STEP 2: VERIFY OTP -->

          <form
            id="dp-forgot-otp-form"
            class="dn-login-form"
            data-forgot-step="otp"
            hidden
            novalidate
          >

            <p class="dn-login-instruction">

              ${tr('codeSentTo')}

              <strong
                data-forgot-phone-label
                dir="ltr"
              ></strong>

            </p>

            <div class="dn-login-field">

              <label for="forgot-code">
                ${tr('code')}
              </label>

              <input
                id="forgot-code"
                name="code"
                type="text"
                dir="ltr"
                inputmode="numeric"
                autocomplete="one-time-code"
                maxlength="6"
                placeholder="${tr('codePlaceholder')}"
                required
              />

            </div>

            <button
              class="dn-login-submit"
              type="submit"
              data-forgot-verify
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
                data-forgot-edit
              >
                ${tr('changePhone')}
              </button>

              <button
                class="dn-login-text-button"
                type="button"
                data-forgot-resend
                disabled
              >

                ${tr('resend')}

                <span
                  data-forgot-countdown
                  dir="ltr"
                ></span>

              </button>

            </div>

          </form>

          <!-- STEP 3: NEW PASSWORD -->

          <form
            id="dp-forgot-reset-form"
            class="dn-login-form"
            data-forgot-step="reset"
            hidden
            novalidate
          >

            <p class="dn-login-instruction">

              ${tr('verifiedPhone')}

              <strong
                data-forgot-phone-label
                dir="ltr"
              ></strong>

            </p>

            ${passwordField(
              'forgot-password',
              'newPassword',
              'newPasswordPlaceholder'
            )}

            ${passwordField(
              'forgot-confirm',
              'confirmPassword',
              'confirmPlaceholder'
            )}

            <button
              class="dn-login-submit"
              type="submit"
              data-forgot-reset
            >

              <span>
                ${tr('resetPassword')}
              </span>

              <span aria-hidden="true">→</span>

            </button>

          </form>

          <!-- STEP 4: SUCCESS -->

          <div
            data-forgot-step="done"
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
              class="dn-login-submit dn-auth-button-link"
              href="/login"
            >
              ${tr('backToLogin')}

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

            <a href="/login">
              ${tr('backToLogin')}
            </a>

          </div>

        </section>

      </div>

    </main>
  `;
}

// ============================================
// INITIALIZATION
// ============================================

export function initForgotPassword() {
  const root = document.querySelector(
    '[data-portal-page="forgot-password"]'
  );

  if (!root) {
    return () => {};
  }

  const controller = new AbortController();
  const { signal } = controller;

  const $ = selector =>
    root.querySelector(selector);

  const phoneForm = $('#dp-forgot-phone-form');
  const otpForm = $('#dp-forgot-otp-form');
  const resetForm = $('#dp-forgot-reset-form');

  const phoneInput = $('#forgot-phone');
  const codeInput = $('#forgot-code');
  const passwordInput = $('#forgot-password');
  const confirmInput = $('#forgot-confirm');

  const resendButton = $('[data-forgot-resend]');
  const countdown = $('[data-forgot-countdown]');
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
  // COUNTDOWN
  // ==========================================

  const remaining = () => Math.max(
    0,
    Math.ceil(
      (recovery.resendAfter - Date.now()) / 1000
    )
  );

  function updateButtons() {
    const selectors = [
      '[data-forgot-send]',
      '[data-forgot-verify]',
      '[data-forgot-reset]',
      '[data-forgot-edit]',
    ];

    selectors.forEach(selector => {
      $(selector).disabled = busy;
    });

    resendButton.disabled =
      busy || remaining() > 0;

    countdown.textContent =
      remaining() > 0
        ? `(${remaining()}s)`
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
  // STEP MANAGEMENT
  // ==========================================

  function showStep(step) {
    recovery.step = step;

    root
      .querySelectorAll('[data-forgot-step]')
      .forEach(element => {
        element.hidden =
          element.dataset.forgotStep !== step;
      });

    root
      .querySelectorAll('[data-forgot-phone-label]')
      .forEach(element => {
        element.textContent = recovery.phone;
      });

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

    if (remaining() === 0) {
      return;
    }

    timer = setInterval(() => {
      if (
        signal.aborted ||
        remaining() === 0
      ) {
        stopTimer();
      }

      updateButtons();
    }, 1000);
  }

  // ==========================================
  // RESET FLOW
  // ==========================================

  function restartRecovery() {
    stopTimer();
    clearRecovery();

    phoneInput.value = '';
    codeInput.value = '';
    passwordInput.value = '';
    confirmInput.value = '';

    showStep('phone');
  }

  // ==========================================
  // STEP 1: SEND CODE
  // ==========================================

  async function sendCode(isResend = false) {
    if (busy || signal.aborted) {
      return;
    }

    if (
      isResend &&
      remaining() > 0
    ) {
      return;
    }

    const phone = normalizePhone(
      isResend
        ? recovery.phone
        : phoneInput.value
    );

    if (!phone) {
      return feedback(
        t('auth.forgot.invalidPhone'),
        'error'
      );
    }

    setBusy(true);
    clearFeedback();

    try {
      const response =
        await forgotPasswordApi.sendCode(
          phone,
          signal
        );

      if (signal.aborted) return;

      if (
        response?.success === false ||
        response?.status === false
      ) {
        throw new Error('SEND_CODE_FAILED');
      }

      recovery.phone = phone;
      recovery.code = '';
      recovery.resetToken = '';
      recovery.resetExpiresAt = 0;

      recovery.resendAfter =
        Date.now() + RESEND_COOLDOWN_MS;

      codeInput.value = '';

      showStep('otp');
      startTimer();

      feedback(
        t(
          isResend
            ? 'auth.forgot.resent'
            : 'auth.forgot.sent'
        )
      );

      codeInput.focus();

    } catch (error) {
      if (!signal.aborted) {
        feedback(
          getApiError(error, 'send'),
          'error'
        );
      }

    } finally {
      if (!signal.aborted) {
        setBusy(false);
      }
    }
  }

  phoneForm.addEventListener(
    'submit',
    event => {
      event.preventDefault();
      void sendCode();
    },
    { signal }
  );

  // ==========================================
  // STEP 2: VERIFY OTP
  // ==========================================

  otpForm.addEventListener(
    'submit',
    async event => {
      event.preventDefault();

      if (busy || signal.aborted) return;

      const code = normalizeCode(
        codeInput.value
      );

      if (code.length !== 6) {
        return feedback(
          t('auth.forgot.invalidCodeFormat'),
          'error'
        );
      }

      if (!recovery.phone) {
        restartRecovery();

        return feedback(
          t('auth.forgot.sessionExpired'),
          'error'
        );
      }

      setBusy(true);
      clearFeedback();

      try {
        const response =
          await forgotPasswordApi.verifyCode(
            recovery.phone,
            code,
            signal
          );

        if (signal.aborted) return;

        const data = response?.data ?? {};

        const expiresIn = Number(
          data.expires_in
        );

        if (
          response?.success === false ||
          response?.status === false ||
          data.verified === false ||
          typeof data.reset_token !== 'string' ||
          !data.reset_token.trim() ||
          !Number.isFinite(expiresIn) ||
          expiresIn <= 0 ||
          (
            data.phone &&
            normalizePhone(data.phone) !==
              recovery.phone
          )
        ) {
          throw new Error(
            'INVALID_VERIFY_RESPONSE'
          );
        }

        recovery.code = code;
        recovery.resetToken = data.reset_token;

        recovery.resetExpiresAt =
          Date.now() + expiresIn * 1000;

        codeInput.value = '';

        stopTimer();
        showStep('reset');

        feedback(
          t('auth.forgot.verified')
        );

        passwordInput.focus();

      } catch (error) {
        if (!signal.aborted) {
          feedback(
            error?.message ===
              'INVALID_VERIFY_RESPONSE'
              ? t('auth.forgot.requestFailed')
              : getApiError(
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
  // STEP 3: RESET PASSWORD
  // ==========================================

  resetForm.addEventListener(
    'submit',
    async event => {
      event.preventDefault();

      if (busy || signal.aborted) return;

      const password = passwordInput.value;
      const confirmation = confirmInput.value;

      if (password.length < 8) {
        return feedback(
          t('auth.forgot.shortPassword'),
          'error'
        );
      }

      if (password !== confirmation) {
        return feedback(
          t('auth.forgot.passwordMismatch'),
          'error'
        );
      }

      if (
        !recovery.phone ||
        !recovery.code ||
        !recovery.resetToken
      ) {
        restartRecovery();

        return feedback(
          t('auth.forgot.sessionExpired'),
          'error'
        );
      }

      if (
        Date.now() >= recovery.resetExpiresAt
      ) {
        restartRecovery();

        return feedback(
          t('auth.forgot.resetTokenExpired'),
          'error'
        );
      }

      setBusy(true);
      clearFeedback();

      try {
        const response =
          await forgotPasswordApi.resetPassword(
            recovery.phone,
            recovery.code,
            recovery.resetToken,
            password,
            confirmation,
            signal
          );

        if (signal.aborted) return;

        if (
          response?.success === false ||
          response?.status === false
        ) {
          throw new Error(
            'RESET_PASSWORD_FAILED'
          );
        }

        // Auto-login if Laravel returns a JWT.
        const hasSession = Boolean(
          response?.data?.token &&
          response?.data?.client
        );

        let authenticated = false;

        if (hasSession) {
          try {
            storeLoginResponse(response);
            startPatientSession();
            authenticated = true;

          } catch {
            authenticated = false;
          }
        }

        // Clear OTP, reset token and passwords.
        clearRecovery();

        codeInput.value = '';
        passwordInput.value = '';
        confirmInput.value = '';

        if (authenticated) {
          window.location.assign(
            `/dashboard?lang=${language()}`
          );

          return;
        }

        // Successful reset without auto-login.
        showStep('done');
        clearFeedback();

      } catch (error) {
        if (!signal.aborted) {
          if (
            error?.status === 410 ||
            error?.errors?.reset_token
          ) {
            restartRecovery();

            feedback(
              t('auth.forgot.resetTokenExpired'),
              'error'
            );

          } else {
            feedback(
              getApiError(error, 'reset'),
              'error'
            );
          }
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

  $('[data-forgot-edit]').addEventListener(
    'click',
    () => {
      if (busy) return;

      const oldPhone = recovery.phone;

      restartRecovery();

      phoneInput.value = oldPhone;

      clearFeedback();
      phoneInput.focus();
    },
    { signal }
  );

  // ==========================================
  // RESEND OTP
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
  // PASSWORD VISIBILITY
  // ==========================================

  root
    .querySelectorAll(
      '[data-auth-password-toggle]'
    )
    .forEach(button => {
      button.addEventListener(
        'click',
        () => {
          const input = document.getElementById(
            button.dataset.authPasswordToggle
          );

          if (!input) return;

          const visible =
            input.type === 'password';

          input.type = visible
            ? 'text'
            : 'password';

          button.setAttribute(
            'aria-pressed',
            String(visible)
          );

          input.focus();
        },
        { signal }
      );
    });

  // ==========================================
  // RESTORE AFTER LANGUAGE SWITCH
  // ==========================================

  if (
    recovery.step === 'reset' &&
    Date.now() >= recovery.resetExpiresAt
  ) {
    clearRecovery();
  }

  phoneInput.value = recovery.phone;

  showStep(recovery.step);

  if (recovery.step === 'otp') {
    startTimer();
  }

  // ==========================================
  // CLEANUP
  // ==========================================

  return () => {
    controller.abort();
    stopTimer();

    passwordInput.value = '';
    confirmInput.value = '';
  };
}
