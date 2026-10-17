
/**
 * ============================================
 * DENTISTRY — CENTRAL API SERVICE
 * ============================================
 *
 * Laravel Backend + Vanilla JS / Vite
 *
 * Authentication: JWT
 * Languages: English / Persian
 *
 * All frontend API calls should use this file.
 */

// ============================================
// IMPORTS
// ============================================

import { getAuthToken } from './auth.js';

// ============================================
// API CONFIG
// ============================================

// Laravel backend URL
// Change this URL if your backend address changes.

export const API_BASE_URL =
  'http://127.0.0.1:8000/api';

// Request timeout: 15 seconds
const REQUEST_TIMEOUT = 15000;

// Clean trailing slashes
const apiBase = API_BASE_URL.replace(/\/+$/, '');

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

  // ========================================
  // ABORT HANDLING
  // ========================================

  const abortRequest = () => {
    controller.abort();
  };

  if (signal) {
    if (signal.aborted) {
      controller.abort();
    } else {
      signal.addEventListener(
        'abort',
        abortRequest,
        { once: true }
      );
    }
  }

  // ========================================
  // TIMEOUT
  // ========================================

  const timeout = setTimeout(() => {
    timedOut = true;
    controller.abort();
  }, REQUEST_TIMEOUT);

  try {
    // ======================================
    // HEADERS
    // ======================================

    const headers = {
      Accept: 'application/json',
    };

    if (body !== null) {
      headers['Content-Type'] =
        'application/json';
    }

    // ======================================
    // JWT AUTHENTICATION
    // ======================================

    if (auth) {
      const token = getAuthToken();

      if (!token) {
        throw new ApiError(
          'Unauthenticated.',
          401
        );
      }

      headers.Authorization = `Bearer ${token}`;
    }

    // ======================================
    // REQUEST URL
    // ======================================

    const path = String(endpoint || '')
      .replace(/^\/+/, '');

    const url = `${apiBase}/${path}`;

    // ======================================
    // FETCH
    // ======================================

    const response = await fetch(url, {
      method: method.toUpperCase(),
      headers,

      body:
        body !== null
          ? JSON.stringify(body)
          : undefined,

      signal: controller.signal,

      cache: 'no-store',

      credentials: 'omit',
    });

    // ======================================
    // RESPONSE
    // ======================================

    // Handle endpoints returning HTTP 204
    if (response.status === 204) {
      return {
        success: true,
        statusCode: 204,
      };
    }

    const result = await response
      .json()
      .catch(() => null);

    // ======================================
    // API ERRORS
    // ======================================

    const responseStatusCode =
      Number(result?.statusCode);

    if (
      !response.ok ||
      result?.success === false ||
      result?.status === false ||
      (
        Number.isFinite(responseStatusCode) &&
        responseStatusCode >= 400
      )
    ) {
      throw new ApiError(
        result?.message || 'API request failed.',

        response.ok && responseStatusCode >= 400
          ? responseStatusCode
          : response.status,

        result?.errors ?? null
      );
    }

    // ======================================
    // INVALID RESPONSE
    // ======================================

    if (
      !result ||
      typeof result !== 'object'
    ) {
      throw new ApiError(
        'Invalid server response.',
        502
      );
    }

    return result;

  } catch (error) {
    // ======================================
    // KNOWN API ERRORS
    // ======================================

    if (error instanceof ApiError) {
      throw error;
    }

    // ======================================
    // ABORT / TIMEOUT
    // ======================================

    if (error?.name === 'AbortError') {
      // Navigation cancelled the request
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

    // ======================================
    // NETWORK ERROR
    // ======================================

    console.error('API Network Error:', {
      endpoint,
      message: error?.message,
    });

    throw new ApiError(
      'Unable to connect to the server.',
      0
    );

  } finally {
    clearTimeout(timeout);

    if (signal) {
      signal.removeEventListener(
        'abort',
        abortRequest
      );
    }
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

export function apiPost(
  endpoint,
  body = {},
  options = {}
) {
  return apiRequest(endpoint, {
    ...options,
    method: 'POST',
    body,
  });
}

export function apiPut(
  endpoint,
  body = {},
  options = {}
) {
  return apiRequest(endpoint, {
    ...options,
    method: 'PUT',
    body,
  });
}

export function apiPatch(
  endpoint,
  body = {},
  options = {}
) {
  return apiRequest(endpoint, {
    ...options,
    method: 'PATCH',
    body,
  });
}

export function apiDelete(
  endpoint,
  options = {}
) {
  return apiRequest(endpoint, {
    ...options,
    method: 'DELETE',
  });
}

// ============================================
// LOGIN API
// ============================================

export const loginApi = {

  // Login with email and password
  loginWithEmail(
    email,
    password,
    signal = null
  ) {
    return apiPost(
      '/v1/auth/login',
      {
        email,
        password,
      },
      { signal }
    );
  },

  // Send phone login OTP
  sendCode(
    phone,
    signal = null
  ) {
    return apiPost(
      '/v1/auth/login/phone/send-code',
      { phone },
      { signal }
    );
  },

  // Verify phone login OTP
  verifyCode(
    phone,
    code,
    signal = null
  ) {
    return apiPost(
      '/v1/auth/login/phone/verify',
      {
        phone,
        code,
      },
      { signal }
    );
  },

};

// ============================================
// REGISTER API
// ============================================

export const registerApi = {

  // Send registration OTP
  sendCode(
    name,
    phone,
    referralCode = '',
    signal = null
  ) {
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

  // Verify registration OTP
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

  // Step 1: Send OTP
  sendCode(
    phone,
    signal = null
  ) {
    return apiPost(
      '/v1/auth/forgot-password/send-code',
      { phone },
      { signal }
    );
  },

  // Step 2: Verify OTP
  verifyCode(
    phone,
    code,
    signal = null
  ) {
    return apiPost(
      '/v1/auth/forgot-password/verify',
      {
        phone,
        code,
      },
      { signal }
    );
  },

  // Step 3: Reset password
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

// ============================================
// PROFILE API — AUTH REQUIRED
// ============================================

export const profileApi = {

  // Current authenticated client
  me(signal = null) {
    return apiGet(
      '/v1/auth/me',
      {
        auth: true,
        signal,
      }
    );
  },

  // Get profile
  getProfile(signal = null) {
    return apiGet(
      '/v1/auth/profile',
      {
        auth: true,
        signal,
      }
    );
  },

  // Update profile
  updateProfile(
    payload,
    signal = null
  ) {
    return apiPut(
      '/v1/auth/profile',
      payload,
      {
        auth: true,
        signal,
      }
    );
  },

  // Refresh JWT token
  refresh(signal = null) {
    return apiPost(
      '/v1/auth/refresh',
      {},
      {
        auth: true,
        signal,
      }
    );
  },

  // Logout
  logout(signal = null) {
    return apiPost(
      '/v1/auth/logout',
      {},
      {
        auth: true,
        signal,
      }
    );
  },

  // Send OTP for phone change
  changePhoneSendCode(
    payload,
    signal = null
  ) {
    return apiPost(
      '/v1/auth/profile/change-phone/send-code',
      payload,
      {
        auth: true,
        signal,
      }
    );
  },

  // Verify OTP for phone change
  changePhoneVerify(
    payload,
    signal = null
  ) {
    return apiPost(
      '/v1/auth/profile/change-phone/verify',
      payload,
      {
        auth: true,
        signal,
      }
    );
  },

};

// ============================================
// BLOG API — PUBLIC
// ============================================

export const blogApi = {

  // GET /api/v1/blogs?lang=en
  list(
    lang = 'en',
    signal = null
  ) {
    const language =
      lang === 'fa' ? 'fa' : 'en';

    return apiGet(
      `/v1/blogs?lang=${language}`,
      { signal }
    );
  },

  // GET /api/v1/blogs/{slug}?lang=en
  show(
    slug,
    lang = 'en',
    signal = null
  ) {
    const language =
      lang === 'fa' ? 'fa' : 'en';

    return apiGet(
      `/v1/blogs/${encodeURIComponent(slug)}?lang=${language}`,
      { signal }
    );
  },

};

// ============================================
// SERVICE API — PUBLIC
// ============================================

export const serviceApi = {

  // GET /api/v1/services?lang=en
  list(
    lang = 'en',
    signal = null
  ) {
    const language =
      lang === 'fa' ? 'fa' : 'en';

    return apiGet(
      `/v1/services?lang=${language}`,
      { signal }
    );
  },

  // GET /api/v1/services/{id}?lang=en
  show(
    id,
    lang = 'en',
    signal = null
  ) {
    const language =
      lang === 'fa' ? 'fa' : 'en';

    return apiGet(
      `/v1/services/${encodeURIComponent(id)}?lang=${language}`,
      { signal }
    );
  },

};

// ============================================
// CONTACT / MESSAGE API — PUBLIC
// ============================================

export const messageApi = {

  // POST /api/messages
  send(
    payload,
    signal = null
  ) {
    return apiPost(
      '/messages',
      payload,
      { signal }
    );
  },

};

// ============================================
// API ALIASES
// ============================================

// Compatibility with Home.js versions using plural names.
export const servicesApi = serviceApi;
export const blogsApi = blogApi;
export const messagesApi = messageApi;
