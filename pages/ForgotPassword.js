
import {
  authShell,
  dpIcon,
  dpInput,
  initPasswordToggles,
  setFeedback,
} from '../components/PortalUI.js';

import { t } from '../code/i18n.js';
import { forgotPasswordApi } from '../code/api.js';
import { storeLoginResponse } from '../code/auth.js';

// ============================================
// SETTINGS
// ============================================

const RESEND_COOLDOWN_MS = 60 * 1000;

// Only temporary in-memory recovery information.
// No passwords are stored here.
const recoveryState = {
  step: 'phone',
  phone: '',
  code: '',
  resetToken: '',
  resetExpiresAt: 0,
  resendAfter: 0,
};

// ============================================
// HELPERS
// ============================================

function normalizeDigits(value) {
  return String(value ?? '')
    .replace(/[۰-۹]/g, digit =>
      String(digit.charCodeAt(0) - 0x06F0)
    )
    .replace(/[٠-٩]/g, digit =>
      String(digit.charCodeAt(0) - 0x0660)
    );
}

function normalizePhone(value) {
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

function normalizeCode(value) {
  return normalizeDigits(value)
    .replace(/\D/g, '')
    .slice(0, 6);
}

function resetRecoveryData() {
  recoveryState.step = 'phone';
  recoveryState.phone = '';
  recoveryState.code = '';
  recoveryState.resetToken = '';
  recoveryState.resetExpiresAt = 0;
  recoveryState.resendAfter = 0;
}

// ============================================
// API ERROR HANDLER
// ============================================

function getApiError(error, action) {
  const status = Number(error?.status ?? 0);
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
    (action === 'reset' && errors.reset_token)
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
// PAGE HTML
// ============================================

export function ForgotPassword() {
  return authShell({
    section: 'forgot-password',

    title: t('auth.forgot.title'),
    subtitle: t('auth.forgot.subtitle'),

    sideTitle: t('auth.forgot.sideTitle'),
    sideCopy: t('auth.forgot.sideCopy'),

    content: `
      <div class="dp-recovery-icon">
        ${dpIcon('lock')}
      </div>

      <!-- STEP 1: SEND CODE -->

      <form
        id="dp-forgot-phone-form"
        class="dp-form"
        data-forgot-step="phone"
        novalidate
      >
        ${dpInput({
          id: 'forgot-phone',
          label: t('auth.forgot.phone'),
          type: 'tel',
          placeholder: '09123456789',
          auto: 'tel',
          attrs: 'inputmode="tel" maxlength="20" dir="ltr"'
        })}

        <button
          type="submit"
          class="dp-btn dp-btn-primary dp-btn-block"
          data-forgot-send
        >
          ${t('auth.forgot.sendCode')}
          ${dpIcon('arrow')}
        </button>
      </form>

      <!-- STEP 2: VERIFY CODE -->

      <form
        id="dp-forgot-otp-form"
        class="dp-form"
        data-forgot-step="otp"
        hidden
        novalidate
      >
        <p class="dp-otp-instruction">
          ${t('auth.forgot.codeSentTo')}
          <strong
            data-forgot-phone-label
            dir="ltr"
          ></strong>
        </p>

        ${dpInput({
          id: 'forgot-code',
          label: t('auth.forgot.code'),
          type: 'text',
          placeholder: t('auth.forgot.codePlaceholder'),
          auto: 'one-time-code',
          attrs: 'inputmode="numeric" maxlength="6" dir="ltr"'
        })}

        <button
          type="submit"
          class="dp-btn dp-btn-primary dp-btn-block"
          data-forgot-verify
        >
          ${t('auth.forgot.verify')}
          ${dpIcon('arrow')}
        </button>

        <div class="dp-form-extras">
          <button
            type="button"
            class="dp-text-button"
            data-forgot-edit
          >
            ${t('auth.forgot.changePhone')}
          </button>

          <button
            type="button"
            class="dp-text-button"
            data-forgot-resend
            disabled
          >
            ${t('auth.forgot.resend')}
            <span data-forgot-countdown></span>
          </button>
        </div>
      </form>

      <!-- STEP 3: NEW PASSWORD -->

      <form
        id="dp-forgot-reset-form"
        class="dp-form"
        data-forgot-step="reset"
        hidden
        novalidate
      >
        <p class="dp-otp-instruction">
          ${t('auth.forgot.verifiedPhone')}
          <strong
            data-forgot-phone-label
            dir="ltr"
          ></strong>
        </p>

        ${dpInput({
          id: 'forgot-password',
          label: t('auth.forgot.newPassword'),
          type: 'password',
          placeholder: t('auth.forgot.newPasswordPlaceholder'),
          auto: 'new-password',
          attrs: 'minlength="8"'
        })}

        ${dpInput({
          id: 'forgot-confirm',
          label: t('auth.forgot.confirmPassword'),
          type: 'password',
          placeholder: t('auth.forgot.confirmPlaceholder'),
          auto: 'new-password',
          attrs: 'minlength="8"'
        })}

        <button
          type="submit"
          class="dp-btn dp-btn-primary dp-btn-block"
          data-forgot-reset
        >
          ${t('auth.forgot.resetPassword')}
          ${dpIcon('arrow')}
        </button>
      </form>

      <!-- STEP 4: SUCCESS -->

      <div
        id="dp-forgot-complete"
        data-forgot-step="done"
        hidden
      >
        <div class="dp-form-feedback" role="status">
          ${t('auth.forgot.success')}
        </div>

        <a
          href="/login"
          class="dp-btn dp-btn-primary dp-btn-block"
          style="margin-top:20px"
        >
          ${t('auth.forgot.backToLogin')}
          ${dpIcon('arrow')}
        </a>
      </div>

      <!-- API FEEDBACK -->

      <p
        class="dp-form-feedback"
        data-form-feedback
        role="status"
        aria-live="polite"
        hidden
      ></p>

      <!-- BACK TO LOGIN -->

      <p class="dp-form-switch">
        <a href="/login">
          ${t('auth.forgot.backToLogin')}
        </a>
      </p>
    `,
  });
}

// ============================================
// INITIALIZE PAGE
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

  const clearPasswordToggles = initPasswordToggles(root);

  // Forms
  const phoneForm = root.querySelector(
    '#dp-forgot-phone-form'
  );
  const otpForm = root.querySelector(
    '#dp-forgot-otp-form'
  );
  const resetForm = root.querySelector(
    '#dp-forgot-reset-form'
  );

  // Inputs
  const phoneInput = root.querySelector('#forgot-phone');
  const codeInput = root.querySelector('#forgot-code');
  const passwordInput = root.querySelector(
    '#forgot-password'
  );
  const confirmInput = root.querySelector(
    '#forgot-confirm'
  );

  // Buttons
  const resendButton = root.querySelector(
    '[data-forgot-resend]'
  );
  const countdown = root.querySelector(
    '[data-forgot-countdown]'
  );

  const feedbackElement = root.querySelector(
    '[data-form-feedback]'
  );

  let busy = false;
  let timer = null;

  // ============================================
  // FEEDBACK
  // ============================================

  function feedback(key, type = 'note') {
    setFeedback(root, t(key), type);
  }

  function clearFeedback() {
    if (!feedbackElement) return;

    feedbackElement.hidden = true;
    feedbackElement.textContent = '';

    delete feedbackElement.dataset.state;
  }

  // ============================================
  // STEPS
  // ============================================

  function showStep(step) {
    recoveryState.step = step;

    root.querySelectorAll('[data-forgot-step]')
      .forEach(element => {
        element.hidden =
          element.dataset.forgotStep !== step;
      });

    root.querySelectorAll('[data-forgot-phone-label]')
      .forEach(element => {
        element.textContent = recoveryState.phone;
      });

    updateButtons();
  }

  // ============================================
  // BUTTON STATE
  // ============================================

  function updateButtons() {
    const seconds = Math.max(
      0,
      Math.ceil(
        (recoveryState.resendAfter - Date.now()) / 1000
      )
    );

    const selectors = [
      '[data-forgot-send]',
      '[data-forgot-verify]',
      '[data-forgot-reset]',
      '[data-forgot-edit]',
    ];

    selectors.forEach(selector => {
      const button = root.querySelector(selector);

      if (button) {
        button.disabled = busy;
      }
    });

    resendButton.disabled = busy || seconds > 0;

    countdown.textContent = seconds > 0
      ? `(${seconds}s)`
      : '';
  }

  function setBusy(value) {
    busy = value;
    updateButtons();
  }

  // ============================================
  // RESEND TIMER
  // ============================================

  function stopTimer() {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;
    }
  }

  function startTimer() {
    stopTimer();
    updateButtons();

    timer = setInterval(() => {
      updateButtons();

      if (Date.now() >= recoveryState.resendAfter) {
        stopTimer();
      }
    }, 1000);
  }

  // ============================================
  // RESET RECOVERY FLOW
  // ============================================

  function restartRecovery() {
    stopTimer();
    resetRecoveryData();

    phoneInput.value = '';
    codeInput.value = '';
    passwordInput.value = '';
    confirmInput.value = '';

    showStep('phone');
  }

  // ============================================
  // STEP 1: SEND OTP
  // ============================================

  async function sendCode(isResend = false) {
    if (busy) return;

    const phone = normalizePhone(
      isResend
        ? recoveryState.phone
        : phoneInput.value
    );

    if (!phone) {
      feedback('auth.forgot.invalidPhone', 'error');
      return;
    }

    if (
      isResend &&
      Date.now() < recoveryState.resendAfter
    ) {
      return;
    }

    setBusy(true);
    clearFeedback();

    try {
      const response = await forgotPasswordApi.sendCode(
        phone,
        signal
      );

      if (signal.aborted) return;

      if (response?.success !== true) {
        throw new Error('SEND_CODE_FAILED');
      }

      recoveryState.phone = phone;
      recoveryState.code = '';
      recoveryState.resetToken = '';
      recoveryState.resetExpiresAt = 0;

      recoveryState.resendAfter =
        Date.now() + RESEND_COOLDOWN_MS;

      codeInput.value = '';

      showStep('otp');
      startTimer();

      feedback(
        isResend
          ? 'auth.forgot.resent'
          : 'auth.forgot.sent'
      );

      codeInput.focus();

    } catch (error) {
      if (!signal.aborted) {
        setFeedback(
          root,
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

  // ============================================
  // STEP 2: VERIFY OTP
  // ============================================

  otpForm.addEventListener(
    'submit',
    async event => {
      event.preventDefault();

      if (busy) return;

      const code = normalizeCode(codeInput.value);

      if (code.length !== 6) {
        feedback(
          'auth.forgot.invalidCodeFormat',
          'error'
        );
        return;
      }

      if (!recoveryState.phone) {
        restartRecovery();

        feedback(
          'auth.forgot.sessionExpired',
          'error'
        );
        return;
      }

      setBusy(true);
      clearFeedback();

      try {
        const response =
          await forgotPasswordApi.verifyCode(
            recoveryState.phone,
            code,
            signal
          );

        if (signal.aborted) return;

        const data = response?.data;

        if (
          response?.success !== true ||
          data?.verified !== true ||
          typeof data?.reset_token !== 'string' ||
          !data.reset_token.trim() ||
          !Number.isFinite(Number(data.expires_in)) ||
          Number(data.expires_in) <= 0
        ) {
          throw new Error('INVALID_VERIFY_RESPONSE');
        }

        // Make sure backend verified the same phone
        const verifiedPhone = normalizePhone(data.phone);

        if (verifiedPhone !== recoveryState.phone) {
          throw new Error('INVALID_VERIFY_RESPONSE');
        }

        // Save OTP and reset token in memory
        recoveryState.code = code;
        recoveryState.resetToken = data.reset_token;

        recoveryState.resetExpiresAt =
          Date.now() + Number(data.expires_in) * 1000;

        // Clear visible OTP input
        codeInput.value = '';

        stopTimer();
        showStep('reset');

        feedback('auth.forgot.verified');

        passwordInput.focus();

      } catch (error) {
        if (!signal.aborted) {
          setFeedback(
            root,
            error?.message === 'INVALID_VERIFY_RESPONSE'
              ? t('auth.forgot.requestFailed')
              : getApiError(error, 'verify'),
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
  // STEP 3: RESET PASSWORD
  // ============================================

  resetForm.addEventListener(
    'submit',
    async event => {
      event.preventDefault();

      if (busy) return;

      const password = passwordInput.value;
      const confirmation = confirmInput.value;

      // Validate password
      if (password.length < 8) {
        feedback(
          'auth.forgot.shortPassword',
          'error'
        );
        return;
      }

      // Validate password confirmation
      if (password !== confirmation) {
        feedback(
          'auth.forgot.passwordMismatch',
          'error'
        );
        return;
      }

      // Make sure verification exists
      if (
        !recoveryState.phone ||
        !recoveryState.code ||
        !recoveryState.resetToken
      ) {
        restartRecovery();

        feedback(
          'auth.forgot.sessionExpired',
          'error'
        );
        return;
      }

      // Check reset token expiry
      if (
        Date.now() >= recoveryState.resetExpiresAt
      ) {
        restartRecovery();

        feedback(
          'auth.forgot.resetTokenExpired',
          'error'
        );
        return;
      }

      setBusy(true);
      clearFeedback();

      try {
        // IMPORTANT:
        // Include reset_token from verify API.
        const response =
          await forgotPasswordApi.resetPassword(
            recoveryState.phone,
            recoveryState.code,
            recoveryState.resetToken,
            password,
            confirmation,
            signal
          );

        if (signal.aborted) return;

        if (response?.success !== true) {
          throw new Error('RESET_PASSWORD_FAILED');
        }

        // Backend returns JWT after password reset.
        const hasSession =
          typeof response?.data?.token === 'string' &&
          Boolean(response.data.token.trim()) &&
          Boolean(response?.data?.client);

        let authenticated = false;

        if (hasSession) {
          try {
            storeLoginResponse(response);
            authenticated = true;
          } catch {
            authenticated = false;
          }
        }

        // Clear sensitive recovery data
        resetRecoveryData();

        codeInput.value = '';
        passwordInput.value = '';
        confirmInput.value = '';

        // Auto login after successful password reset
        if (authenticated) {
          window.location.assign('/dashboard');
          return;
        }

        // Fallback if JWT was not returned
        showStep('done');
        clearFeedback();

      } catch (error) {
        if (!signal.aborted) {
          // If backend rejects reset token,
          // start recovery again.
          if (
            error?.status === 410 ||
            error?.errors?.reset_token
          ) {
            restartRecovery();

            feedback(
              'auth.forgot.resetTokenExpired',
              'error'
            );
          } else {
            setFeedback(
              root,
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

  // ============================================
  // CHANGE PHONE
  // ============================================

  root.querySelector('[data-forgot-edit]')
    .addEventListener(
      'click',
      () => {
        if (busy) return;

        const previousPhone = recoveryState.phone;

        restartRecovery();

        phoneInput.value = previousPhone;
        clearFeedback();
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
  // OTP INPUT NORMALIZATION
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
  // LANGUAGE SWITCH / RESTORE STATE
  // ============================================

  // Language changes in SPA can recreate the page.
  // Keep recovery state in memory across rerenders.
  // A full browser reload starts a new recovery flow.

  if (
    recoveryState.step === 'reset' &&
    Date.now() >= recoveryState.resetExpiresAt
  ) {
    resetRecoveryData();
  }

  phoneInput.value = recoveryState.phone;

  showStep(recoveryState.step);

  if (recoveryState.step === 'otp') {
    startTimer();
  }

  // ============================================
  // CLEANUP
  // ============================================

  return () => {
    controller.abort();
    stopTimer();
    clearPasswordToggles();
  };
}
