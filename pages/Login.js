
/**
 * Dentistry — Minimal Patient Login
 * Phone OTP + Email / Password
 * Languages: FA / EN
 */

import { t, getLanguage } from '../code/i18n.js';
import { loginApi } from '../code/api.js';
import { storeLoginResponse } from '../code/auth.js';
import { startPatientSession } from '../code/session.js';

import '../asset/css/login-minimal.css';

// ============================================
// STATE & HELPERS
// ============================================

const pendingLogin = {
  phone: null,
  expiresAt: 0,
};

const lang = () =>
  getLanguage() === 'fa' ? 'fa' : 'en';

const esc = value =>
  String(value ?? '').replace(/[&<>"']/g, c => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[c]);

const text = key =>
  esc(t(`auth.login.${key}`));

function normalizeDigits(value) {
  return String(value ?? '')
    .replace(
      /[۰-۹]/g,
      n => String(n.charCodeAt(0) - 0x06F0)
    )
    .replace(
      /[٠-٩]/g,
      n => String(n.charCodeAt(0) - 0x0660)
    );
}

export function normalizeIranPhone(value) {
  let phone = normalizeDigits(value)
    .replace(/[\s()-]/g, '');

  phone = phone.replace(
    /^(?:\+98|0098|98)/,
    '0'
  );

  return /^09\d{9}$/.test(phone)
    ? phone
    : null;
}

const normalizeCode = value =>
  normalizeDigits(value)
    .replace(/\D/g, '')
    .slice(0, 6);

const apiSucceeded = response =>
  response?.success === true ||
  response?.status === true;

// ============================================
// API ERRORS
// ============================================

function apiErrorMessage(error, method = 'phone') {
  const status = Number(
    error?.statusCode ??
    error?.status ??
    error?.response?.status ??
    0
  );

  if (status === 429) {
    return t('auth.login.tooMany');
  }

  if (status === 408) {
    return t('auth.login.timeout');
  }

  if (status >= 500) {
    return t('auth.login.serverError');
  }

  if (
    method === 'email' &&
    [401, 403, 422].includes(status)
  ) {
    return t('auth.login.invalidCredentials');
  }

  if (method === 'send' && status === 404) {
    return t('auth.login.noAccount');
  }

  if (method === 'send' && status === 422) {
    return t('auth.login.invalidPhone');
  }

  if (
    method === 'verify' &&
    [400, 401, 403, 422].includes(status)
  ) {
    return t('auth.login.invalidCode');
  }

  return t('auth.login.networkError');
}

// ============================================
// SUCCESSFUL LOGIN
// ============================================

function finishLogin(response) {
  storeLoginResponse(response);
  startPatientSession();

  pendingLogin.phone = null;
  pendingLogin.expiresAt = 0;

  window.location.assign(
    `/dashboard?lang=${lang()}`
  );
}

// ============================================
// LOGIN PAGE HTML
// ============================================

export function Login() {
  return `
    <main
      class="dn-login-page"
      data-portal-page="login"
      data-no-translate
      dir="${lang() === 'fa' ? 'rtl' : 'ltr'}"
    >

      <div class="dn-login-container">

        <!-- BRAND -->

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

        <!-- LOGIN CARD -->

        <section
          class="dn-login-card"
          aria-labelledby="dn-login-title"
        >

          <div class="dn-login-heading">

            <h1 id="dn-login-title">
              ${text('title')}
            </h1>

            <p>
              ${text('subtitle')}
            </p>

          </div>

          <!-- LOGIN METHOD SWITCH -->

          <div
            class="dn-login-methods"
            aria-label="${text('title')}"
          >

            <button
              type="button"
              class="dn-login-method is-active"
              data-login-method="phone"
              aria-pressed="true"
            >
              ${text('methodPhone')}
            </button>

            <button
              type="button"
              class="dn-login-method"
              data-login-method="email"
              aria-pressed="false"
            >
              ${text('methodEmail')}
            </button>

          </div>

          <!-- PHONE LOGIN -->

          <form
            id="dp-login-phone-form"
            class="dn-login-form"
            novalidate
          >

            <div class="dn-login-field">

              <label for="login-phone">
                ${text('phone')}
              </label>

              <input
                id="login-phone"
                name="phone"
                type="tel"
                dir="ltr"
                inputmode="tel"
                autocomplete="tel"
                maxlength="20"
                placeholder="${text('phonePlaceholder')}"
                required
              />

            </div>

            <button
              class="dn-login-submit"
              type="submit"
              data-login-send
            >
              <span>${text('sendCode')}</span>
              <span aria-hidden="true">→</span>
            </button>

          </form>

          <!-- OTP VERIFICATION -->

          <form
            id="dp-login-otp-form"
            class="dn-login-form"
            novalidate
            hidden
          >

            <p class="dn-login-instruction">

              ${text('codeSentTo')}

              <strong
                data-login-phone-label
                dir="ltr"
              ></strong>

            </p>

            <div class="dn-login-field">

              <label for="login-code">
                ${text('code')}
              </label>

              <input
                id="login-code"
                name="code"
                type="text"
                dir="ltr"
                inputmode="numeric"
                autocomplete="one-time-code"
                maxlength="6"
                placeholder="${text('codePlaceholder')}"
                required
              />

              <small>
                ${text('codeValidity')}
              </small>

            </div>

            <button
              class="dn-login-submit"
              type="submit"
              data-login-verify
            >
              <span>${text('verify')}</span>
              <span aria-hidden="true">→</span>
            </button>

            <div class="dn-login-otp-actions">

              <button
                type="button"
                class="dn-login-text-button"
                data-login-edit
              >
                ${text('editPhone')}
              </button>

              <button
                type="button"
                class="dn-login-text-button"
                data-login-resend
                disabled
              >
                ${text('resend')}

                <span
                  data-login-countdown
                  dir="ltr"
                ></span>

              </button>

            </div>

          </form>

          <!-- EMAIL LOGIN -->

          <form
            id="dp-login-email-form"
            class="dn-login-form"
            novalidate
            hidden
          >

            <div class="dn-login-field">

              <label for="login-email">
                ${text('email')}
              </label>

              <input
                id="login-email"
                name="email"
                type="email"
                dir="ltr"
                autocomplete="email"
                placeholder="${text('emailPlaceholder')}"
                required
              />

            </div>

            <div class="dn-login-field">

              <label for="login-password">
                ${text('password')}
              </label>

              <div class="dn-login-password-wrap">

                <input
                  id="login-password"
                  name="password"
                  type="password"
                  dir="ltr"
                  autocomplete="current-password"
                  placeholder="${text('passwordPlaceholder')}"
                  required
                />

                <button
                  type="button"
                  class="dn-login-password-toggle"
                  data-password-toggle
                  aria-label="${text('password')}"
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

            <button
              class="dn-login-submit"
              type="submit"
              data-login-email-submit
            >
              <span>${text('signIn')}</span>
              <span aria-hidden="true">→</span>
            </button>

          </form>

          <!-- FEEDBACK -->

          <p
            class="dn-login-feedback"
            data-form-feedback
            role="status"
            aria-live="polite"
            hidden
          ></p>

          <!-- REGISTER -->

          <div class="dn-login-footer">

            <span>
              ${text('newPatient')}
            </span>

            <a href="/register">
              ${text('createAccount')}
            </a>

          </div>

          <!-- FORGOT PASSWORD -->

          <a
            class="dn-login-forgot-mobile"
            href="/forgot-password"
          >
            ${text('forgotPassword')}
          </a>

        </section>

      </div>

    </main>
  `;
}

// ============================================
// LOGIN INITIALIZATION
// ============================================

export function initLogin() {
  const root = document.querySelector(
    '[data-portal-page="login"]'
  );

  if (!root) {
    return () => {};
  }

  const controller = new AbortController();
  const { signal } = controller;

  const $ = selector =>
    root.querySelector(selector);

  const phoneForm = $('#dp-login-phone-form');
  const otpForm = $('#dp-login-otp-form');
  const emailForm = $('#dp-login-email-form');

  const phoneInput = $('#login-phone');
  const codeInput = $('#login-code');
  const emailInput = $('#login-email');
  const passwordInput = $('#login-password');

  const resendButton = $('[data-login-resend]');
  const countdown = $('[data-login-countdown]');
  const feedbackBox = $('[data-form-feedback]');

  let method = 'phone';
  let phone = null;
  let otpVisible = false;
  let busy = false;
  let timer = null;

  // ==========================================
  // FEEDBACK
  // ==========================================

  function feedback(message, type = 'note') {
    feedbackBox.hidden = false;
    feedbackBox.textContent = message;
    feedbackBox.dataset.type = type;
  }

  function clearFeedback() {
    feedbackBox.hidden = true;
    feedbackBox.textContent = '';
    delete feedbackBox.dataset.type;
  }

  // ==========================================
  // COUNTDOWN
  // ==========================================

  const remainingSeconds = () =>
    Math.max(
      0,
      Math.ceil(
        (pendingLogin.expiresAt - Date.now()) / 1000
      )
    );

  function updateButtons() {
    $('[data-login-send]').disabled = busy;
    $('[data-login-verify]').disabled = busy;
    $('[data-login-email-submit]').disabled = busy;

    resendButton.disabled =
      busy || remainingSeconds() > 0;

    countdown.textContent =
      remainingSeconds() > 0
        ? `(${remainingSeconds()}s)`
        : '';

    root.querySelectorAll(
      '[data-login-method]'
    ).forEach(button => {
      button.disabled = busy;
    });
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
  // SWITCH LOGIN METHOD
  // ==========================================

  function updateView() {
    phoneForm.hidden =
      method !== 'phone' || otpVisible;

    otpForm.hidden =
      method !== 'phone' || !otpVisible;

    emailForm.hidden =
      method !== 'email';

    root.querySelectorAll(
      '[data-login-method]'
    ).forEach(button => {
      const active =
        button.dataset.loginMethod === method;

      button.classList.toggle(
        'is-active',
        active
      );

      button.setAttribute(
        'aria-pressed',
        String(active)
      );
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

    if (remainingSeconds() === 0) {
      return;
    }

    timer = setInterval(() => {
      if (
        signal.aborted ||
        remainingSeconds() === 0
      ) {
        stopTimer();
      }

      updateButtons();
    }, 1000);
  }

  // ==========================================
  // SHOW OTP FORM
  // ==========================================

  function showOtpForm() {
    otpVisible = true;

    codeInput.value = '';

    $('[data-login-phone-label]').textContent =
      phone;

    updateView();

    if (method === 'phone') {
      codeInput.focus();
    }
  }

  // ==========================================
  // SEND OTP
  // ==========================================

  async function sendCode(isResend = false) {
    if (busy || signal.aborted) {
      return;
    }

    const normalized = isResend
      ? phone
      : normalizeIranPhone(phoneInput.value);

    if (!normalized) {
      feedback(
        t('auth.login.invalidPhone'),
        'error'
      );

      return;
    }

    phone = normalized;

    setBusy(true);
    clearFeedback();

    try {
      const response = await loginApi.sendCode(
        phone,
        signal
      );

      if (signal.aborted) return;

      if (!apiSucceeded(response)) {
        throw new Error('SEND_CODE_FAILED');
      }

      pendingLogin.phone = phone;

      pendingLogin.expiresAt =
        Date.now() + 120000;

      showOtpForm();
      startTimer();

      feedback(
        t(
          isResend
            ? 'auth.login.resent'
            : 'auth.login.sent'
        )
      );

    } catch (error) {
      if (!signal.aborted) {
        feedback(
          apiErrorMessage(error, 'send'),
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
  // SELECT METHOD
  // ==========================================

  root.querySelectorAll(
    '[data-login-method]'
  ).forEach(button => {
    button.addEventListener(
      'click',
      () => {
        if (busy) return;

        method = button.dataset.loginMethod;

        clearFeedback();
        updateView();
      },
      { signal }
    );
  });

  // ==========================================
  // PHONE FORM
  // ==========================================

  phoneForm.addEventListener(
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

  otpForm.addEventListener(
    'submit',
    async event => {
      event.preventDefault();

      if (busy || signal.aborted) return;

      const code = normalizeCode(
        codeInput.value
      );

      if (code.length !== 6) {
        feedback(
          t('auth.login.invalidCodeFormat'),
          'error'
        );
        return;
      }

      if (!phone) {
        feedback(
          t('auth.login.invalidPhone'),
          'error'
        );
        return;
      }

      setBusy(true);
      clearFeedback();

      try {
        const response = await loginApi.verifyCode(
          phone,
          code,
          signal
        );

        if (signal.aborted) return;

        if (!apiSucceeded(response)) {
          throw new Error('VERIFY_FAILED');
        }

        stopTimer();
        finishLogin(response);

      } catch (error) {
        if (!signal.aborted) {
          feedback(
            error?.message === 'AUTH_TOKEN_MISSING'
              ? t('auth.login.invalidApiToken')
              : apiErrorMessage(error, 'verify'),
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
  // EMAIL / PASSWORD LOGIN
  // ==========================================

  emailForm.addEventListener(
    'submit',
    async event => {
      event.preventDefault();

      if (busy || signal.aborted) return;

      const email = emailInput.value.trim();
      const password = passwordInput.value;

      if (
        !email ||
        !emailInput.checkValidity()
      ) {
        feedback(
          t('auth.login.invalidEmail'),
          'error'
        );
        return;
      }

      if (!password) {
        feedback(
          t('auth.login.enterPassword'),
          'error'
        );
        return;
      }

      setBusy(true);
      clearFeedback();

      try {
        const response =
          await loginApi.loginWithEmail(
            email,
            password,
            signal
          );

        if (signal.aborted) return;

        if (!apiSucceeded(response)) {
          throw new Error('LOGIN_FAILED');
        }

        stopTimer();
        finishLogin(response);

      } catch (error) {
        if (!signal.aborted) {
          feedback(
            error?.message === 'AUTH_TOKEN_MISSING'
              ? t('auth.login.invalidApiToken')
              : apiErrorMessage(error, 'email'),
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
  // OTP INPUT
  // ==========================================

  codeInput.addEventListener(
    'input',
    () => {
      codeInput.value = normalizeCode(
        codeInput.value
      );
    },
    { signal }
  );

  // ==========================================
  // EDIT PHONE
  // ==========================================

  $('[data-login-edit]').addEventListener(
    'click',
    () => {
      if (busy) return;

      otpVisible = false;

      pendingLogin.phone = null;
      pendingLogin.expiresAt = 0;

      stopTimer();
      clearFeedback();
      updateView();

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
  // PASSWORD VISIBILITY
  // ==========================================

  $('[data-password-toggle]').addEventListener(
    'click',
    event => {
      const visible =
        passwordInput.type === 'password';

      passwordInput.type = visible
        ? 'text'
        : 'password';

      event.currentTarget.setAttribute(
        'aria-pressed',
        String(visible)
      );

      passwordInput.focus();
    },
    { signal }
  );

  // ==========================================
  // SESSION EXPIRED MESSAGE
  // ==========================================

  const searchParams = new URLSearchParams(
    window.location.search
  );

  if (searchParams.get('expired') === '1') {
    feedback(
      t('auth.sessionExpired'),
      'error'
    );
  }

  // ==========================================
  // RESTORE OTP AFTER LANGUAGE CHANGE
  // ==========================================

  if (
    pendingLogin.phone &&
    pendingLogin.expiresAt > Date.now()
  ) {
    phone = pendingLogin.phone;
    phoneInput.value = phone;

    showOtpForm();
    startTimer();

  } else {
    pendingLogin.phone = null;
    pendingLogin.expiresAt = 0;

    updateView();
  }

  // ==========================================
  // CLEANUP
  // ==========================================

  return () => {
    controller.abort();
    stopTimer();
  };
}
