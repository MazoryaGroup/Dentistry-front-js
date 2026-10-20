
import { apiGet } from './api.js';

function validId(value) {
  const id = Number(value);

  if (!Number.isSafeInteger(id) || id < 1) {
    throw new TypeError(
      'Treatment plan ID must be a positive integer.'
    );
  }

  return id;
}

export const treatmentPlanApi = {

  list(page = 1, signal = null) {
    const number = Number(page);

    if (
      !Number.isSafeInteger(number) ||
      number < 1
    ) {
      throw new TypeError(
        'Page must be a positive integer.'
      );
    }

    const query =
      number > 1 ? `?page=${number}` : '';

    return apiGet(
      `/v1/treatment-plans${query}`,
      {
        auth: true,
        signal,
      }
    );
  },

  show(id, signal = null) {
    return apiGet(
      `/v1/treatment-plans/${validId(id)}`,
      {
        auth: true,
        signal,
      }
    );
  },

  items(id, signal = null) {
    return apiGet(
      `/v1/treatment-plans/${validId(id)}/items`,
      {
        auth: true,
        signal,
      }
    );
  },

  progress(id, signal = null) {
    return apiGet(
      `/v1/treatment-plans/${validId(id)}/progress`,
      {
        auth: true,
        signal,
      }
    );
  },

};
