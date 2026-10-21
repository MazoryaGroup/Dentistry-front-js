
import { API_BASE_URL } from './api.js';
import { getAuthToken } from './auth.js';

export const discountApi = {
  async validate(code, bookingId, signal = null) {
    const token = getAuthToken();

    if (!token) {
      throw new Error('Authentication required.');
    }

    const response = await fetch(
      `${String(API_BASE_URL).replace(/\/+$/, '')}/v1/discount-codes/validate`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: /^Bearer\s/i.test(token)
            ? token
            : `Bearer ${token}`,
        },
        body: JSON.stringify({
          code: String(code).trim(),
          booking_id: Number(bookingId),
        }),
        signal,
      }
    );

    const result = await response.json()
      .catch(() => null);

    if (!response.ok || result?.success !== true) {
      throw new Error(
        result?.message || 'Discount validation failed.'
      );
    }

    return result.data;
  },
};
