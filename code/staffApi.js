
/**
 * Dentistry — Staff & Availability API
 *
 * GET /api/v1/staff
 * GET /api/v1/staff/{id}
 * GET /api/v1/staff/{id}/schedule
 * GET /api/v1/availability
 *
 * Requests use the central API layer.
 */

import { apiGet } from './api.js';

// ============================================
// VALIDATION
// ============================================

function positiveId(value, name) {
  const id = Number(value);

  if (!Number.isSafeInteger(id) || id < 1) {
    throw new TypeError(
      `${name} must be a positive integer.`
    );
  }

  return id;
}

function dayString(value) {
  const dateString = String(value ?? '').trim();

  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
    throw new TypeError(
      'date must use YYYY-MM-DD.'
    );
  }

  const date = new Date(
    `${dateString}T12:00:00Z`
  );

  if (
    Number.isNaN(date.getTime()) ||
    date.toISOString().slice(0, 10) !== dateString
  ) {
    throw new TypeError('Invalid calendar date.');
  }

  return dateString;
}

// ============================================
// AVAILABILITY SETTINGS
// ============================================

export const AVAILABILITY_INTERVAL_MINUTES = 30;

export const AVAILABILITY_QUERY_NAMES = Object.freeze({
  staff: 'staff_id',
  service: 'service_id',
  date: 'date',
  interval: 'interval',
});

// ============================================
// STAFF API
// ============================================

export const staffApi = {

  list(signal = null) {
    return apiGet('/v1/staff', {
      auth: true,
      signal,
    });
  },

  show(id, signal = null) {
    return apiGet(
      `/v1/staff/${positiveId(id, 'staff_id')}`,
      {
        auth: true,
        signal,
      }
    );
  },

  schedule(id, signal = null) {
    return apiGet(
      `/v1/staff/${positiveId(id, 'staff_id')}/schedule`,
      {
        auth: true,
        signal,
      }
    );
  },

};

// ============================================
// AVAILABILITY API
// ============================================

export const availabilityApi = {

  /**
   * Example:
   *
   * GET /api/v1/availability
   * ?staff_id=3
   * &service_id=1
   * &date=2026-10-19
   * &interval=30
   */

  list(
    {
      staff_id,
      service_id,
      date,
      interval = AVAILABILITY_INTERVAL_MINUTES,
    },
    signal = null
  ) {

    const step = Number(interval);

    if (
      !Number.isSafeInteger(step) ||
      step < 1 ||
      step > 1440
    ) {
      throw new TypeError(
        'interval must be a positive number of minutes (up to 1440).'
      );
    }

    const query = new URLSearchParams({

      [AVAILABILITY_QUERY_NAMES.staff]:
        String(positiveId(staff_id, 'staff_id')),

      [AVAILABILITY_QUERY_NAMES.service]:
        String(positiveId(service_id, 'service_id')),

      [AVAILABILITY_QUERY_NAMES.date]:
        dayString(date),

      [AVAILABILITY_QUERY_NAMES.interval]:
        String(step),

    });

    return apiGet(
      `/v1/availability?${query.toString()}`,
      {
        auth: true,
        signal,
      }
    );
  },

};
