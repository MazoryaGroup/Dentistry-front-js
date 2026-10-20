
/**
 * Dentistry — Patient Finance API
 * Base: /api/v1
 */

import {
  apiGet,
  API_BASE_URL,
} from './api.js';

import { getAuthToken } from './auth.js';

function validId(value) {
  const id = Number(value);

  if (!Number.isSafeInteger(id) || id < 1) {
    throw new TypeError('Invalid positive ID');
  }

  return id;
}

function pageQuery(page) {
  const current = validId(page);

  return current > 1
    ? `?page=${current}`
    : '';
}

function paymentPath(id) {
  return `/v1/payments/${validId(id)}`;
}

function invoicePath(id) {
  return `/v1/invoices/${validId(id)}`;
}

function bookingPaymentPath(bookingId) {
  return `/v1/payments/bookings/${validId(bookingId)}`;
}

/**
 * Authenticated POST without request body.
 *
 * Important:
 * API_BASE_URL must point to the /api base,
 * for example: https://api.example.com/api
 */
async function financePost(path, signal = null) {
  const token = getAuthToken();

  if (!token) {
    throw new Error('Authentication required.');
  }

  const base = String(API_BASE_URL)
    .replace(/\/+$/, '');

  const response = await fetch(`${base}${path}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: /^Bearer\s/i.test(token)
        ? token
        : `Bearer ${token}`,
    },
    signal,
  });

  const result = await response.json()
    .catch(() => null);

  if (
    !response.ok ||
    !result ||
    result.success === false
  ) {
    const validation = result?.errors
      ? Object.values(result.errors)
          .flat()
          .map(String)
          .join(' · ')
      : '';

    throw new Error(
      validation ||
      result?.message ||
      `Payment request failed (${response.status})`
    );
  }

  return result;
}

export const financeApi = {

  // ========================================
  // PAYMENT HISTORY
  // ========================================

  payments(page = 1, signal = null) {
    return apiGet(
      `/v1/payments${pageQuery(page)}`,
      { auth: true, signal }
    );
  },

  payment(id, signal = null) {
    return apiGet(
      paymentPath(id),
      { auth: true, signal }
    );
  },

  paymentStatus(id, signal = null) {
    return apiGet(
      `${paymentPath(id)}/status`,
      { auth: true, signal }
    );
  },

  // ========================================
  // FINANCE SUMMARY
  // ========================================

  summary(signal = null) {
    return apiGet(
      '/v1/patient/finance/summary',
      { auth: true, signal }
    );
  },

  // ========================================
  // INVOICES
  // ========================================

  invoices(page = 1, signal = null) {
    return apiGet(
      `/v1/invoices${pageQuery(page)}`,
      { auth: true, signal }
    );
  },

  invoice(id, signal = null) {
    return apiGet(
      invoicePath(id),
      { auth: true, signal }
    );
  },

  // ========================================
  // DEPOSIT
  // ========================================

  createDeposit(bookingId, signal = null) {
    return financePost(
      `${bookingPaymentPath(bookingId)}/deposit`,
      signal
    );
  },

  startDeposit(bookingId, signal = null) {
    return financePost(
      `${bookingPaymentPath(bookingId)}/start`,
      signal
    );
  },

  // ========================================
  // REMAINING PAYMENT
  // ========================================

  createRemaining(bookingId, signal = null) {
    return financePost(
      `${bookingPaymentPath(bookingId)}/remaining`,
      signal
    );
  },

  startRemaining(bookingId, signal = null) {
    return financePost(
      `${bookingPaymentPath(bookingId)}/remaining/start`,
      signal
    );
  },

};
