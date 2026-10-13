
// ============================================
// Dentistry - Authentication Manager
// JWT Auth
// ============================================

const TOKEN_KEY = 'dentistry.patient.jwt';
const CLIENT_KEY = 'dentistry.patient.client';

// ============================================
// Save Login Response
// ============================================

export function storeLoginResponse(response) {
  if (
    response?.success !== true ||
    typeof response?.data?.token !== 'string' ||
    !response.data.token.trim()
  ) {
    throw new Error('AUTH_TOKEN_MISSING');
  }

  const { token, client } = response.data;

  // Store JWT in current browser tab session
  sessionStorage.setItem(TOKEN_KEY, token);

  // Store basic patient information
  if (client && typeof client === 'object') {
   const safeClient = {
  id: client.id ?? null,
  name: client.name ?? null,
  email: client.email ?? null,
  phone: client.phone ?? null,
  referral_code: client.referral_code ?? null,
  referrer_id: client.referrer_id ?? null,
};

    sessionStorage.setItem(
      CLIENT_KEY,
      JSON.stringify(safeClient)
    );
  } else {
    sessionStorage.removeItem(CLIENT_KEY);
  }

  return client ?? null;
}

// ============================================
// Get JWT Token
// ============================================

export function getAuthToken() {
  try {
    return sessionStorage.getItem(TOKEN_KEY);
  } catch {
    return null;
  }
}

// ============================================
// Get Current Patient
// ============================================

export function getAuthClient() {
  try {
    const stored = sessionStorage.getItem(CLIENT_KEY);

    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

// ============================================
// Check Authentication
// ============================================

export function isAuthenticated() {
  const token = getAuthToken();

  if (!token) return false;

  // Decode JWT payload and check expiration
  try {
    const parts = token.split('.');

    if (parts.length !== 3) return false;

    const payload = JSON.parse(
      atob(
        parts[1]
          .replace(/-/g, '+')
          .replace(/_/g, '/')
          .padEnd(
            Math.ceil(parts[1].length / 4) * 4,
            '='
          )
      )
    );

    if (
      typeof payload.exp === 'number' &&
      Date.now() >= payload.exp * 1000
    ) {
      clearAuthToken();
      return false;
    }

    return true;

  } catch {
    return false;
  }
}

// ============================================
// Clear Authentication
// ============================================

export function clearAuthToken() {
  try {
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.removeItem(CLIENT_KEY);
  } catch {
    // Storage might be unavailable
  }
}

// ============================================
// Logout
// ============================================

export function logout() {
  clearAuthToken();
}

// ============================================
// Get Authorization Header
// ============================================

export function getAuthHeaders() {
  const token = getAuthToken();

  return token
    ? { Authorization: `Bearer ${token}` }
    : {};
}
export function storeRefreshedToken(response) {
  const token = response?.data?.token;

  if (typeof token !== 'string' || !token.trim()) {
    throw new Error('AUTH_TOKEN_MISSING');
  }

  sessionStorage.setItem(TOKEN_KEY, token);

  return token;
}