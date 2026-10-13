
import { t } from '../code/i18n.js';
import { profileApi } from '../code/api.js';

import {
  getAuthToken,
  clearAuthToken,
  storeRefreshedToken,
} from '../code/auth.js';

// ============================================
// Extract client from Laravel response
// ============================================

function extractClient(response) {
  const data = response?.data;

  const candidates = [
    data?.client,
    data?.profile,
    data?.user,
    data,
  ];

  return candidates.find(client =>
    client &&
    typeof client === 'object' &&
    !Array.isArray(client) &&
    (
      client.id !== undefined ||
      client.phone !== undefined ||
      client.name !== undefined
    )
  ) || null;
}

// ============================================
// Profile HTML
// ============================================

export function PatientProfile() {
  return `
    <div class="dp-white-card dp-patient-profile">

      <div class="dp-card-head">
        <div>
          <h2>${t('profile.information')}</h2>
        </div>

        <button
          type="button"
          class="dp-btn dp-btn-outline dp-btn-small"
          data-profile-reload
        >
          ${t('profile.reload')}
        </button>
      </div>

      <p
        data-profile-status
        role="status"
        aria-live="polite"
        class="dp-profile-status"
      >
        ${t('profile.loading')}
      </p>

      <div class="dp-profile-grid">
        <div>
          <span>${t('profile.name')}</span>
          <strong data-profile-name>—</strong>
        </div>

        <div>
          <span>${t('profile.email')}</span>
          <strong data-profile-email>—</strong>
        </div>

        <div>
          <span>${t('profile.phone')}</span>
          <strong data-profile-phone dir="ltr">—</strong>
        </div>

        <div>
          <span>${t('profile.referral')}</span>
          <strong data-profile-referral>—</strong>
        </div>
      </div>

      <p class="dp-profile-hint">
        ${t('profile.phoneHint')}
      </p>

    </div>
  `;
}

// ============================================
// Profile Controller
// ============================================

export function initPatientProfile(root) {
  if (!root) return () => {};

  const controller = new AbortController();
  const { signal } = controller;

  const status = root.querySelector(
    '[data-profile-status]'
  );

  const reloadButton = root.querySelector(
    '[data-profile-reload]'
  );

  let busy = false;

  function setStatus(message, error = false) {
    if (!status || signal.aborted) return;

    status.textContent = message;
    status.dataset.state = error ? 'error' : 'normal';
  }

  function renderClient(client) {
    const fields = {
      '[data-profile-name]': client.name || '—',
      '[data-profile-email]':
        client.email || t('profile.notSet'),
      '[data-profile-phone]': client.phone || '—',
      '[data-profile-referral]':
        client.referral_code || '—',
    };

    for (const [selector, value] of Object.entries(fields)) {
      const element = root.querySelector(selector);

      if (element) {
        element.textContent = String(value);
      }
    }

    const patientName = root.querySelector(
      '[data-dashboard-name]'
    );

    if (patientName) {
      patientName.textContent = client.name || '—';
    }

    const avatar = root.querySelector(
      '[data-patient-avatar]'
    );

    if (avatar) {
      const name = String(client.name || '').trim();

      avatar.textContent = name
        ? name.slice(0, 2)
        : '—';
    }
  }

  async function authorizedRequest(action) {
    try {
      return await action();
    } catch (error) {
      if (signal.aborted || error?.status !== 401) {
        throw error;
      }

      // Try refreshing the expired JWT once.
      try {
        const refreshed = await profileApi.refresh(signal);

        if (signal.aborted) return null;

        storeRefreshedToken(refreshed);

        return await action();
      } catch (refreshError) {
        if (signal.aborted) return null;

        clearAuthToken();

        window.location.assign('/login');

        throw refreshError;
      }
    }
  }

  async function loadProfile() {
    if (busy || signal.aborted) return;

    if (!getAuthToken()) {
      window.location.assign('/login');
      return;
    }

    busy = true;

    if (reloadButton) reloadButton.disabled = true;

    setStatus(t('profile.loading'));

    try {
      const meResponse = await authorizedRequest(
        () => profileApi.me(signal)
      );

      if (signal.aborted) return;

      const me = extractClient(meResponse);

      // Try the dedicated profile endpoint as well.
      // If it is temporarily unavailable, /me can
      // still provide basic patient details.
      let profile = null;

      try {
        const profileResponse = await authorizedRequest(
          () => profileApi.getProfile(signal)
        );

        if (signal.aborted) return;

        profile = extractClient(profileResponse);
      } catch (error) {
        if (signal.aborted) return;

        if (error?.status === 401) {
          throw error;
        }
      }

      const client = {
        ...(me || {}),
        ...(profile || {}),
      };

      if (
        !client.id &&
        !client.phone &&
        !client.name
      ) {
        throw new Error('PROFILE_DATA_MISSING');
      }

      renderClient(client);

      setStatus(
        profile
          ? t('profile.loaded')
          : t('profile.partial')
      );

    } catch (error) {
      if (signal.aborted) return;

      if (error?.status === 401) {
        clearAuthToken();
        window.location.assign('/login');
        return;
      }

      setStatus(t('profile.loadError'), true);

    } finally {
      busy = false;

      if (!signal.aborted && reloadButton) {
        reloadButton.disabled = false;
      }
    }
  }

  reloadButton?.addEventListener(
    'click',
    () => void loadProfile(),
    { signal }
  );

  void loadProfile();

  return () => controller.abort();
}
