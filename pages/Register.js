
import {
  authShell,
  dpIcon,
  dpInput,
  setFeedback,
} from '../components/PortalUI.js';

import { t } from '../code/i18n.js';
import { registerApi } from '../code/api.js';
import { storeLoginResponse } from '../code/auth.js';

// Keeps the current registration step when the language
// changes without a full browser reload.
const registrationDraft = {
  name: '',
  phone: '',
  referralCode: '',
  expiresAt: 0,
};

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

  phone = phone.replace(/^(?:\+98|0098|98)/, '0');

  return /^09\d{9}$/.test(phone) ? phone : null;
}

function normalizeCode(value) {
  return normalizeDigits(value)
    .replace(/\D/g, '')
    .slice(0, 6);
}

function getErrorMessage(error, action) {
  const status = Number(error?.status || 0);

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

export function Register() {
  return authShell({
    section: 'register',

    title: t('auth.register.title'),
    subtitle: t('auth.register.subtitle'),

    sideTitle: t('auth.register.sideTitle'),
    sideCopy: t('auth.register.sideCopy'),

    content: `
      <!-- STEP 1: Registration details -->
      <form
        id="dp-register-form"
        class="dp-form"
        data-register-step="details"
        novalidate
      >
        ${dpInput({
          id: 'register-name',
          label: t('auth.register.name'),
          placeholder: t('auth.register.namePlaceholder'),
          auto: 'name',
          attrs: 'minlength="2" maxlength="100"'
        })}

        ${dpInput({
          id: 'register-phone',
          label: t('auth.register.phone'),
          type: 'tel',
          placeholder: '09123456789',
          auto: 'tel',
          attrs: 'inputmode="tel" maxlength="20" dir="ltr"'
        })}

        ${dpInput({
          id: 'register-referral',
          label: t('auth.register.referral'),
          type: 'text',
          placeholder: t('auth.register.referralPlaceholder'),
          attrs: 'maxlength="64"'
        })}

        <button
          type="submit"
          class="dp-btn dp-btn-primary dp-btn-block"
          data-register-send
        >
          ${t('auth.register.sendCode')}
          ${dpIcon('arrow')}
        </button>
      </form>

      <!-- STEP 2: Verify OTP -->
      <form
        id="dp-register-verify-form"
        class="dp-form"
        data-register-step="verify"
        hidden
        novalidate
      >
        <div class="dp-demo-note">
          <span>
            ${t('auth.register.codeSentTo')}
            <strong data-register-phone-label dir="ltr"></strong>
          </span>
        </div>

        ${dpInput({
          id: 'register-code',
          label: t('auth.register.code'),
          type: 'text',
          placeholder: t('auth.register.codePlaceholder'),
          auto: 'one-time-code',
          attrs: 'inputmode="numeric" maxlength="6" dir="ltr"'
        })}

        <p class="dp-otp-hint">
          ${t('auth.register.codeValidity')}
        </p>

        <button
          type="submit"
          class="dp-btn dp-btn-primary dp-btn-block"
          data-register-verify
        >
          ${t('auth.register.verify')}
          ${dpIcon('arrow')}
        </button>

        <div class="dp-form-extras">
          <button
            type="button"
            class="dp-text-button"
            data-register-edit
          >
            ${t('auth.register.editPhone')}
          </button>

          <button
            type="button"
            class="dp-text-button"
            data-register-resend
            disabled
          >
            ${t('auth.register.resend')}
            <span data-register-countdown></span>
          </button>
        </div>
      </form>

      <!-- STEP 3: Registration complete -->
      <div
        id="dp-register-complete"
        data-register-step="complete"
        hidden
      >
        <div class="dp-form-feedback" role="status">
          ${t('auth.register.success')}
        </div>

        <a
          href="/login"
          class="dp-btn dp-btn-primary dp-btn-block"
          style="margin-top:20px"
        >
          ${t('auth.register.goToLogin')}
          ${dpIcon('arrow')}
        </a>
      </div>

      <p
        class="dp-form-feedback"
        data-form-feedback
        role="status"
        aria-live="polite"
        hidden
      ></p>

      <p class="dp-form-switch">
        ${t('auth.register.haveAccount')}
        <a href="/login">
          ${t('auth.register.signIn')}
        </a>
      </p>
    `,
  });
}

export function initRegister() {
  const root = document.querySelector(
    '[data-portal-page="register"]'
  );

  if (!root) return () => {};

  const controller = new AbortController();
  const { signal } = controller;

  const detailsForm = root.querySelector('#dp-register-form');
  const verifyForm = root.querySelector(
    '#dp-register-verify-form'
  );

  const nameInput = root.querySelector('#register-name');
  const phoneInput = root.querySelector('#register-phone');
  const referralInput = root.querySelector('#register-referral');
  const codeInput = root.querySelector('#register-code');

  const resendButton = root.querySelector(
    '[data-register-resend]'
  );
  const countdown = root.querySelector(
    '[data-register-countdown]'
  );
  const feedbackElement = root.querySelector(
    '[data-form-feedback]'
  );

  let busy = false;
  let timer = null;
  let step = 'details';

  function feedback(message, type = 'note') {
    setFeedback(root, message, type);
  }

  function clearFeedback() {
    if (!feedbackElement) return;
    feedbackElement.hidden = true;
    feedbackElement.textContent = '';
  }

  function showStep(nextStep) {
    step = nextStep;

    root.querySelectorAll('[data-register-step]')
      .forEach(element => {
        element.hidden =
          element.dataset.registerStep !== nextStep;
      });
  }

  function updateButtons() {
    const sendButton = root.querySelector(
      '[data-register-send]'
    );
    const verifyButton = root.querySelector(
      '[data-register-verify]'
    );
    const editButton = root.querySelector(
      '[data-register-edit]'
    );

    sendButton.disabled = busy;
    verifyButton.disabled = busy;
    editButton.disabled = busy;

    const seconds = Math.max(
      0,
      Math.ceil(
        (registrationDraft.expiresAt - Date.now()) / 1000
      )
    );

    resendButton.disabled = busy || seconds > 0;

    countdown.textContent =
      seconds > 0 ? `(${seconds}s)` : '';
  }

  function setBusy(value) {
    busy = value;
    updateButtons();
  }

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

      if (Date.now() >= registrationDraft.expiresAt) {
        stopTimer();
      }
    }, 1000);
  }

  function showVerification() {
    root.querySelector(
      '[data-register-phone-label]'
    ).textContent = registrationDraft.phone;

    showStep('verify');
    updateButtons();
    codeInput.focus();
  }

  // ============================================
  // Step 1: Send registration OTP
  // ============================================

  async function sendCode(isResend = false) {
    if (busy) return;

    const name = nameInput.value.trim();
    const phone = normalizePhone(phoneInput.value);
    const referralCode = referralInput.value.trim();

    if (name.length < 2) {
      feedback(t('auth.register.invalidName'), 'error');
      return;
    }

    if (!phone) {
      feedback(t('auth.register.invalidPhone'), 'error');
      return;
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

      if (signal.aborted) return;

      if (response?.success !== true) {
        throw new Error('REGISTER_SEND_FAILED');
      }

      registrationDraft.name = name;
      registrationDraft.phone = phone;
      registrationDraft.referralCode = referralCode;

      // The backend controls the actual OTP expiry.
      registrationDraft.expiresAt =
        Date.now() + 2 * 60 * 1000;

      codeInput.value = '';

      showVerification();
      startTimer();

      feedback(
        t(
          isResend
            ? 'auth.register.resent'
            : 'auth.register.sent'
        )
      );
    } catch (error) {
      if (!signal.aborted) {
        feedback(
          getErrorMessage(error, 'send'),
          'error'
        );
      }
    } finally {
      if (!signal.aborted) setBusy(false);
    }
  }

  detailsForm.addEventListener(
    'submit',
    event => {
      event.preventDefault();
      void sendCode();
    },
    { signal }
  );

  // ============================================
  // Step 2: Verify registration OTP
  // ============================================

  verifyForm.addEventListener(
    'submit',
    async event => {
      event.preventDefault();

      if (busy) return;

      const code = normalizeCode(codeInput.value);

      if (code.length !== 6) {
        feedback(
          t('auth.register.invalidCodeFormat'),
          'error'
        );
        return;
      }

      if (!registrationDraft.phone) {
        showStep('details');
        feedback(
          t('auth.register.sessionExpired'),
          'error'
        );
        return;
      }

      setBusy(true);
      clearFeedback();

      try {
        const response = await registerApi.verifyCode(
          registrationDraft.phone,
          code,
          registrationDraft.name,
          registrationDraft.referralCode,
          signal
        );

        if (signal.aborted) return;

        if (response?.success !== true) {
          throw new Error('REGISTER_VERIFY_FAILED');
        }

        // Registration and authentication successful
if (
  response?.success !== true ||
  !response?.data?.token ||
  !response?.data?.client
) {
  throw new Error('INVALID_REGISTER_RESPONSE');
}

// Save JWT and patient information
const client = storeLoginResponse(response);

// Clear registration data
resetDraft();

// Redirect to patient dashboard
window.location.assign('/dashboard');
return;
      } catch (error) {
        if (!signal.aborted) {
          feedback(
            getErrorMessage(error, 'verify'),
            'error'
          );
        }
      } finally {
        if (!signal.aborted) setBusy(false);
      }
    },
    { signal }
  );

  // ============================================
  // Change mobile number
  // ============================================

  function resetDraft() {
    registrationDraft.name = '';
    registrationDraft.phone = '';
    registrationDraft.referralCode = '';
    registrationDraft.expiresAt = 0;
    codeInput.value = '';

    stopTimer();
  }

  root.querySelector('[data-register-edit]')
    .addEventListener('click', () => {
      if (busy) return;

      resetDraft();
      clearFeedback();
      showStep('details');
      updateButtons();
      phoneInput.focus();
    }, { signal });

  // ============================================
  // Resend OTP
  // ============================================

  resendButton.addEventListener('click', () => {
    if (busy || resendButton.disabled) return;

    void sendCode(true);
  }, { signal });

  // Only allow six numeric digits
  codeInput.addEventListener('input', () => {
    codeInput.value = normalizeCode(codeInput.value);
  }, { signal });

  // ============================================
  // Restore after FA / EN switch
  // ============================================

  if (
    registrationDraft.phone &&
    registrationDraft.expiresAt > Date.now()
  ) {
    nameInput.value = registrationDraft.name;
    phoneInput.value = registrationDraft.phone;
    referralInput.value = registrationDraft.referralCode;

    showVerification();
    startTimer();
  } else {
    resetDraft();
    showStep('details');
    updateButtons();
  }

  return () => {
    controller.abort();
    stopTimer();
  };
}
