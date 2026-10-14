
/**
 * Dentistry — Patient Login
 *
 * Login methods:
 * 1. Phone + OTP
 * 2. Email + Password
 *
 * Features:
 * - FA / EN translations
 * - Iranian phone normalization
 * - OTP resend countdown
 * - 15-minute inactivity session
 * - Session-expired notification
 * - Redirect to Dashboard
 */

import {
  authShell,
  dpIcon,
  dpInput,
  initPasswordToggles,
  setFeedback,
} from '../components/PortalUI.js';

import { t, getLanguage } from '../code/i18n.js';

import { loginApi } from '../code/api.js';

import { storeLoginResponse } from '../code/auth.js';

import { startPatientSession } from '../code/session.js';

import '../asset/css/portal.css';

// ============================================
// PENDING OTP STATE
// ============================================

const pendingLogin = {
  phone: null,
  expiresAt: 0,
};

// ============================================
// HELPERS
// ============================================

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

// ============================================
// NORMALIZE IRAN PHONE
// ============================================

export function normalizeIranPhone(value) {
  let phone = normalizeDigits(value)
    .replace(/[\s()-]/g, '');

  // Supported examples:
  // 09123456789
  // +989123456789
  // 00989123456789
  // 989123456789

  phone = phone.replace(
    /^(?:\+98|0098|98)/,
    '0'
  );

  return /^09\d{9}$/.test(phone)
    ? phone
    : null;
}

// ============================================
// NORMALIZE OTP
// ============================================

function normalizeCode(value) {
  return normalizeDigits(value)
    .replace(/\D/g, '')
    .slice(0, 6);
}

// ============================================
// CHECK API SUCCESS
// ============================================

function isApiSuccess(response) {
  return (
    response?.success === true ||
    response?.status === true
  );
}

// ============================================
// API ERROR MESSAGES
// ============================================

function apiErrorMessage(
  error,
  method = 'phone'
) {
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

  if (
    method === 'send' &&
    status === 404
  ) {
    return t('auth.login.noAccount');
  }

  if (
    method === 'send' &&
    status === 422
  ) {
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
// DASHBOARD REDIRECT
// ============================================

function redirectToDashboard() {
  const lang = getLanguage() === 'fa'
    ? 'fa'
    : 'en';

  window.location.assign(
    `/dashboard?lang=${lang}`
  );
}

// ============================================
// LOGIN PAGE HTML
// ============================================

export function Login() {
  return authShell({
    section: 'login',

    title: t('auth.login.title'),

    subtitle: t('auth.login.subtitle'),

    sideTitle: t('auth.login.sideTitle'),

    sideCopy: t('auth.login.sideCopy'),

    content: `

      <!-- LOGIN METHODS -->

      <div class="dp-login-methods">

        <button
          type="button"
          class="dp-btn dp-btn-primary"
          data-login-method="phone"
          aria-pressed="true"
        >
          ${dpIcon('phone')}
          ${t('auth.login.methodPhone')}
        </button>

        <button
          type="button"
          class="dp-btn dp-btn-outline"
          data-login-method="email"
          aria-pressed="false"
        >
          ${dpIcon('mail')}
          ${t('auth.login.methodEmail')}
        </button>

      </div>


      <!-- PHONE LOGIN FORM -->

      <form
        id="dp-login-phone-form"
        class="dp-form"
        novalidate
      >

        ${dpInput({
          id: 'login-phone',
          label: t('auth.login.phone'),
          type: 'tel',
          placeholder: t('auth.login.phonePlaceholder'),
          auto: 'tel',
          attrs: 'inputmode="tel" dir="ltr" maxlength="20"',
        })}

        <button
          class="dp-btn dp-btn-primary dp-btn-block"
          type="submit"
          data-login-send
        >
          ${t('auth.login.sendCode')}
          ${dpIcon('arrow')}
        </button>

      </form>


      <!-- OTP VERIFICATION FORM -->

      <form
        id="dp-login-otp-form"
        class="dp-form dp-login-otp-form"
        hidden
        novalidate
      >

        <p class="dp-otp-instruction">

          ${t('auth.login.codeSentTo')}

          <b
            data-login-phone-label
            dir="ltr"
          ></b>

        </p>

        ${dpInput({
          id: 'login-code',
          label: t('auth.login.code'),
          type: 'text',
          placeholder: t('auth.login.codePlaceholder'),
          auto: 'one-time-code',
          attrs: 'inputmode="numeric" maxlength="6" dir="ltr"',
        })}

        <p class="dp-otp-hint">
          ${t('auth.login.codeValidity')}
        </p>

        <button
          type="submit"
          class="dp-btn dp-btn-primary dp-btn-block"
          data-login-verify
        >
          ${t('auth.login.verify')}
          ${dpIcon('arrow')}
        </button>

        <div class="dp-login-actions">

          <button
            type="button"
            class="dp-login-text-button"
            data-login-edit
          >
            ${t('auth.login.editPhone')}
          </button>

          <button
            type="button"
            class="dp-login-text-button"
            data-login-resend
            disabled
          >
            ${t('auth.login.resend')}

            <span data-login-countdown></span>
          </button>

        </div>

      </form>


      <!-- EMAIL / PASSWORD LOGIN -->

      <form
        id="dp-login-email-form"
        class="dp-form"
        hidden
        novalidate
      >

        ${dpInput({
          id: 'login-email',
          label: t('auth.login.email'),
          type: 'email',
          placeholder: t('auth.login.emailPlaceholder'),
          auto: 'email',
        })}

        ${dpInput({
          id: 'login-password',
          label: t('auth.login.password'),
          type: 'password',
          placeholder: t('auth.login.passwordPlaceholder'),
          auto: 'current-password',
        })}

        <div class="dp-form-extras">

          <a href="/forgot-password">
            ${t('auth.login.forgotPassword')}
          </a>

        </div>

        <button
          type="submit"
          class="dp-btn dp-btn-primary dp-btn-block"
          data-login-email-submit
        >
          ${t('auth.login.signIn')}
          ${dpIcon('arrow')}
        </button>

      </form>


      <!-- FORGOT PASSWORD -->

      <div class="dp-login-forgot">

        <a href="/forgot-password">
          ${t('auth.login.forgotPassword')}
        </a>

      </div>


      <!-- FEEDBACK -->

      <p
        class="dp-form-feedback"
        data-form-feedback
        role="status"
        aria-live="polite"
        hidden
      ></p>


      <!-- REGISTER LINK -->

      <div class="dp-divider-text">
        <span>
          ${t('auth.login.newPatient')}
        </span>
      </div>

      <a
        href="/register"
        class="dp-btn dp-btn-outline dp-btn-block"
      >
        ${t('auth.login.createAccount')}
      </a>

    `,
  });
}

// ============================================
// INITIALIZE LOGIN
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

  const clearPasswords = initPasswordToggles(root);

  // ============================================
  // ELEMENTS
  // ============================================

  const phoneForm = root.querySelector(
    '#dp-login-phone-form'
  );

  const otpForm = root.querySelector(
    '#dp-login-otp-form'
  );

  const emailForm = root.querySelector(
    '#dp-login-email-form'
  );

  const phoneInput = root.querySelector(
    '#login-phone'
  );

  const codeInput = root.querySelector(
    '#login-code'
  );

  const emailInput = root.querySelector(
    '#login-email'
  );

  const passwordInput = root.querySelector(
    '#login-password'
  );

  const resendButton = root.querySelector(
    '[data-login-resend]'
  );

  const countdown = root.querySelector(
    '[data-login-countdown]'
  );

  const feedbackElement = root.querySelector(
    '[data-form-feedback]'
  );

  // ============================================
  // STATE
  // ============================================

  let method = 'phone';

  let phone = null;

  let otpVisible = false;

  let busy = false;

  let timer = null;

  // ============================================
  // FEEDBACK
  // ============================================

  const feedback = (
    message,
    type = 'note'
  ) => {
    setFeedback(root, message, type);
  };

  function clearFeedback() {
    feedbackElement.hidden = true;
    feedbackElement.textContent = '';
  }

  // ============================================
  // SESSION EXPIRED MESSAGE
  // ============================================

  const searchParams = new URLSearchParams(
    window.location.search
  );

  if (searchParams.get('expired') === '1') {
    feedback(
      t('auth.sessionExpired'),
      'error'
    );
  }

  // ============================================
  // UPDATE BUTTONS
  // ============================================

  function updateButtons() {
    root.querySelector(
      '[data-login-send]'
    ).disabled = busy;

    root.querySelector(
      '[data-login-verify]'
    ).disabled = busy;

    root.querySelector(
      '[data-login-email-submit]'
    ).disabled = busy;

    const seconds = Math.max(
      0,
      Math.ceil(
        (
          pendingLogin.expiresAt -
          Date.now()
        ) / 1000
      )
    );

    resendButton.disabled =
      busy || seconds > 0;

    countdown.textContent =
      seconds > 0
        ? `(${seconds}s)`
        : '';

    root.querySelectorAll(
      '[data-login-method]'
    ).forEach(button => {
      button.disabled = busy;
    });
  }

  // ============================================
  // BUSY STATE
  // ============================================

  function setBusy(value) {
    busy = value;

    updateButtons();
  }

  // ============================================
  // UPDATE FORM VIEW
  // ============================================

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
        'dp-btn-primary',
        active
      );

      button.classList.toggle(
        'dp-btn-outline',
        !active
      );

      button.setAttribute(
        'aria-pressed',
        String(active)
      );
    });

    updateButtons();
  }

  // ============================================
  // OTP COUNTDOWN TIMER
  // ============================================

  function stopTimer() {
    if (timer) {
      clearInterval(timer);
    }

    timer = null;
  }

  function startTimer() {
    stopTimer();

    updateButtons();

    timer = setInterval(() => {
      if (signal.aborted) {
        stopTimer();
        return;
      }

      updateButtons();

      if (
        Date.now() >= pendingLogin.expiresAt
      ) {
        stopTimer();
      }
    }, 1000);
  }

  // ============================================
  // DISPLAY OTP FORM
  // ============================================

  function showOtpForm() {
    otpVisible = true;

    codeInput.value = '';

    root.querySelector(
      '[data-login-phone-label]'
    ).textContent = phone;

    updateView();

    if (method === 'phone') {
      codeInput.focus();
    }
  }

  // ============================================
  // SEND OTP
  // ============================================

  async function sendCode(
    isResend = false
  ) {
    if (busy) return;

    const normalized = normalizeIranPhone(
      phoneInput.value
    );

    if (!normalized) {
      return feedback(
        t('auth.login.invalidPhone'),
        'error'
      );
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

      if (!isApiSuccess(response)) {
        throw new Error(
          'SEND_CODE_FAILED'
        );
      }

      pendingLogin.phone = phone;

      // OTP expires after 2 minutes.
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
          apiErrorMessage(
            error,
            'send'
          ),
          'error'
        );
      }

    } finally {
      if (!signal.aborted) {
        setBusy(false);
      }
    }
  }

  // ============================================
  // SELECT LOGIN METHOD
  // ============================================

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

  // ============================================
  // PHONE LOGIN SUBMIT
  // ============================================

  phoneForm.addEventListener(
    'submit',
    event => {
      event.preventDefault();

      void sendCode();
    },
    { signal }
  );

  // ============================================
  // VERIFY OTP
  // ============================================

  otpForm.addEventListener(
    'submit',
    async event => {
      event.preventDefault();

      if (busy) return;

      const code = normalizeCode(
        codeInput.value
      );

      if (code.length !== 6) {
        return feedback(
          t('auth.login.invalidCodeFormat'),
          'error'
        );
      }

      if (!phone) {
        return feedback(
          t('auth.login.invalidPhone'),
          'error'
        );
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

        if (!isApiSuccess(response)) {
          throw new Error(
            'VERIFY_FAILED'
          );
        }

        // ======================================
        // STORE JWT
        // ======================================

        storeLoginResponse(response);

        // ======================================
        // START 15-MINUTE SESSION
        // ======================================

        startPatientSession();

        // ======================================
        // CLEAR OTP STATE
        // ======================================

        pendingLogin.phone = null;

        pendingLogin.expiresAt = 0;

        stopTimer();

        // ======================================
        // REDIRECT
        // ======================================

        redirectToDashboard();

      } catch (error) {
        if (!signal.aborted) {
          feedback(
            error?.message === 'AUTH_TOKEN_MISSING'
              ? t('auth.login.invalidApiToken')
              : apiErrorMessage(
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

  // ============================================
  // EMAIL / PASSWORD LOGIN
  // ============================================

  emailForm.addEventListener(
    'submit',
    async event => {
      event.preventDefault();

      if (busy) return;

      const email = emailInput.value.trim();

      const password = passwordInput.value;

      if (
        !emailInput.checkValidity() ||
        !email
      ) {
        return feedback(
          t('auth.login.invalidEmail'),
          'error'
        );
      }

      if (!password) {
        return feedback(
          t('auth.login.enterPassword'),
          'error'
        );
      }

      setBusy(true);

      clearFeedback();

      try {
        const response = await loginApi.loginWithEmail(
          email,
          password,
          signal
        );

        if (signal.aborted) return;

        if (!isApiSuccess(response)) {
          throw new Error(
            'LOGIN_FAILED'
          );
        }

        // ======================================
        // STORE JWT
        // ======================================

        storeLoginResponse(response);

        // ======================================
        // START 15-MINUTE SESSION
        // ======================================

        startPatientSession();

        // ======================================
        // REDIRECT TO DASHBOARD
        // ======================================

        redirectToDashboard();

      } catch (error) {
        if (!signal.aborted) {
          feedback(
            error?.message === 'AUTH_TOKEN_MISSING'
              ? t('auth.login.invalidApiToken')
              : apiErrorMessage(
                  error,
                  'email'
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

  // ============================================
  // OTP INPUT — DIGITS ONLY
  // ============================================

  codeInput.addEventListener(
    'input',
    () => {
      codeInput.value = normalizeCode(
        codeInput.value
      );
    },
    { signal }
  );

  // ============================================
  // CHANGE PHONE NUMBER
  // ============================================

  root.querySelector(
    '[data-login-edit]'
  ).addEventListener(
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

  // ============================================
  // RESEND OTP
  // ============================================

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

  // ============================================
  // RESTORE OTP AFTER LANGUAGE SWITCH
  // ============================================

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

  // ============================================
  // CLEANUP
  // ============================================

  return () => {
    controller.abort();

    stopTimer();

    if (
      typeof clearPasswords === 'function'
    ) {
      clearPasswords();
    }
  };
}
