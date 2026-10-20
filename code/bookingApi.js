/**
 * Dentistry — authenticated patient Booking endpoints.
 * Requires the central api.js exports apiGet/apiPost with {auth,signal}.
 * Backend MUST authorize bookings from the JWT patient, not client_id input.
 */
import { apiGet, apiPost } from './api.js';

const bookingId = value => {
  const id = Number(value);
  if (!Number.isSafeInteger(id) || id < 1) {
    throw new TypeError('A valid booking id is required.');
  }
  return id;
};

const validDate = value => {
  const date = String(value ?? '').trim();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) throw new TypeError('booking_date must use YYYY-MM-DD.');
  const d = new Date(`${date}T12:00:00Z`);
  if (Number.isNaN(d.getTime()) || d.toISOString().slice(0,10) !== date) {
    throw new TypeError('booking_date is invalid.');
  }
  return date;
};

const validTime = value => {
  const time = String(value ?? '').trim();
  if (!/^(?:[01]\d|2[0-3]):[0-5]\d$/.test(time)) {
    throw new TypeError('start_time must use HH:mm.');
  }
  return time;
};

export const bookingApi = {
  // GET /api/v1/bookings
  list(signal = null, page = 1) {
    const current = Number(page);
    if (!Number.isSafeInteger(current) || current < 1) throw new TypeError('Invalid bookings page number.');
    const suffix = current === 1 ? '' : `?page=${current}`;
    return apiGet(`/v1/bookings${suffix}`, { auth: true, signal });
  },

  // POST /api/v1/bookings (called by the booking flow when doctor/slot have been selected)
  create(payload, signal = null) {
    if (!payload || !Array.isArray(payload.services) || !payload.services.length) {
      throw new TypeError('At least one booking service is required.');
    }
    const services = payload.services.map(item => {
      const serviceId = Number(item.service_id);
      const staffId = Number(item.staff_id);
      if (![serviceId,staffId].every(id => Number.isSafeInteger(id) && id > 0)) {
        throw new TypeError('service_id and staff_id must be positive integers.');
      }
      return { service_id: serviceId, staff_id: staffId, start_time: validTime(item.start_time) };
    });
    return apiPost('/v1/bookings', {
      booking_date: validDate(payload.booking_date),
      notes: String(payload.notes ?? '').trim(),
      services,
    }, { auth: true, signal });
  },

  // GET /api/v1/bookings/{id}
  show(id, signal = null) {
    return apiGet(`/v1/bookings/${bookingId(id)}`, { auth: true, signal });
  },

  // POST /api/v1/bookings/{id}/cancel
  cancel(id, reason, signal = null) {
    const value = String(reason ?? '').trim();
    if (!value) throw new TypeError('A cancellation reason is required.');
    return apiPost(`/v1/bookings/${bookingId(id)}/cancel`, { reason: value }, { auth: true, signal });
  },

  // POST /api/v1/bookings/{id}/reschedule
  reschedule(id, booking_date, start_time, signal = null) {
    return apiPost(`/v1/bookings/${bookingId(id)}/reschedule`, {
      booking_date: validDate(booking_date),
      start_time: validTime(start_time),
    }, { auth: true, signal });
  },
};
