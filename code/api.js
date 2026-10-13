
import { getAuthToken } from './auth.js';

// ============================================
// API CONFIG
// ============================================

const API_BASE_URL = 'http://127.0.0.1:8000/api';

const REQUEST_TIMEOUT = 15000;

// ============================================
// API ERROR
// ============================================

export class ApiError extends Error {
  constructor(message, status = 0, errors = null) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.errors = errors;
  }
}

// ============================================
// API REQUEST
// ============================================

export async function apiRequest(
  endpoint,
  {
    method = 'GET',
    body = null,
    auth = false,
    signal = null,
  } = {}
) {
  const controller = new AbortController();
  let timedOut = false;

  const abortRequest = () => controller.abort();

  if (signal) {
    if (signal.aborted) {
      controller.abort();
    } else {
      signal.addEventListener('abort', abortRequest, {
        once: true,
      });
    }
  }

  const timeout = setTimeout(() => {
    timedOut = true;
    controller.abort();
  }, REQUEST_TIMEOUT);

  try {
    const headers = {
      Accept: 'application/json',
    };

    if (body !== null) {
      headers['Content-Type'] = 'application/json';
    }

    if (auth) {
      const token = getAuthToken();

      if (!token) {
        throw new ApiError('Unauthenticated', 401);
      }

      headers.Authorization = `Bearer ${token}`;
    }

    const url =
      `${API_BASE_URL}/${endpoint.replace(/^\/+/, '')}`;

    const response = await fetch(url, {
      method,
      headers,
      body: body !== null
        ? JSON.stringify(body)
        : undefined,
      signal: controller.signal,
      cache: 'no-store',
      credentials: 'omit',
    });

    const result = await response.json().catch(() => null);

    if (!response.ok || result?.success === false) {
      throw new ApiError(
        result?.message || 'API request failed.',
        response.ok
          ? Number(result?.statusCode || response.status)
          : response.status,
        result?.errors ?? null
      );
    }

    if (!result || typeof result !== 'object') {
      throw new ApiError('Invalid server response.', 502);
    }

    return result;

  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }

    if (error?.name === 'AbortError') {
      if (signal?.aborted) {
        throw error;
      }

      throw new ApiError(
        timedOut
          ? 'Request timeout.'
          : 'Request cancelled.',
        timedOut ? 408 : 0
      );
    }

    throw new ApiError(
      'Unable to connect to the server.',
      0
    );

  } finally {
    clearTimeout(timeout);

    signal?.removeEventListener(
      'abort',
      abortRequest
    );
  }
}

// ============================================
// HTTP HELPERS
// ============================================

export function apiGet(endpoint, options = {}) {
  return apiRequest(endpoint, {
    ...options,
    method: 'GET',
  });
}

export function apiPost(endpoint, body = {}, options = {}) {
  return apiRequest(endpoint, {
    ...options,
    method: 'POST',
    body,
  });
}

export function apiPut(endpoint, body = {}, options = {}) {
  return apiRequest(endpoint, {
    ...options,
    method: 'PUT',
    body,
  });
}

export function apiDelete(endpoint, options = {}) {
  return apiRequest(endpoint, {
    ...options,
    method: 'DELETE',
  });
}

// ============================================
// LOGIN API
// ============================================

export const loginApi = {
  loginWithEmail(email, password, signal = null) {
    return apiPost(
      '/v1/auth/login',
      { email, password },
      { signal }
    );
  },

  sendCode(phone, signal = null) {
    return apiPost(
      '/v1/auth/login/phone/send-code',
      { phone },
      { signal }
    );
  },

  verifyCode(phone, code, signal = null) {
    return apiPost(
      '/v1/auth/login/phone/verify',
      { phone, code },
      { signal }
    );
  },
};

// ============================================
// REGISTER API
// ============================================

export const registerApi = {
  sendCode(name, phone, referralCode = '', signal = null) {
    return apiPost(
      '/v1/auth/register/send-code',
      {
        name,
        phone,
        referral_code: referralCode,
      },
      { signal }
    );
  },

  verifyCode(
    phone,
    code,
    name,
    referralCode = '',
    signal = null
  ) {
    return apiPost(
      '/v1/auth/register/verify',
      {
        phone,
        code,
        name,
        referral_code: referralCode,
      },
      { signal }
    );
  },
};

// ============================================
// FORGOT PASSWORD API
// ============================================

export const forgotPasswordApi = {
  // 1. Send OTP
  sendCode(phone, signal = null) {
    return apiPost(
      '/v1/auth/forgot-password/send-code',
      { phone },
      { signal }
    );
  },

  // 2. Verify OTP and receive reset_token
  verifyCode(phone, code, signal = null) {
    return apiPost(
      '/v1/auth/forgot-password/verify',
      {
        phone,
        code,
      },
      { signal }
    );
  },

  // 3. Reset password using reset_token
  resetPassword(
    phone,
    code,
    resetToken,
    password,
    passwordConfirmation,
    signal = null
  ) {
    return apiPost(
      '/v1/auth/forgot-password/reset',
      {
        phone,
        code,
        reset_token: resetToken,
        password,
        password_confirmation: passwordConfirmation,
      },
      { signal }
    );
  },
};
export const profileApi = {
  me(signal = null) {
    return apiGet('/v1/auth/me', {
      auth: true,
      signal,
    });
  },

  getProfile(signal = null) {
    return apiGet('/v1/auth/profile', {
      auth: true,
      signal,
    });
  },

  // Assumed PUT; confirm with backend request examples.
  updateProfile(payload, signal = null) {
    return apiPut('/v1/auth/profile', payload, {
      auth: true,
      signal,
    });
  },

  refresh(signal = null) {
    return apiPost('/v1/auth/refresh', {}, {
      auth: true,
      signal,
    });
  },

  logout(signal = null) {
    return apiPost('/v1/auth/logout', {}, {
      auth: true,
      signal,
    });
  },

  changePhoneSendCode(payload, signal = null) {
    return apiPost(
      '/v1/auth/profile/change-phone/send-code',
      payload,
      { auth: true, signal }
    );
  },

  changePhoneVerify(payload, signal = null) {
    return apiPost(
      '/v1/auth/profile/change-phone/verify',
      payload,
      { auth: true, signal }
    );
  },
};
