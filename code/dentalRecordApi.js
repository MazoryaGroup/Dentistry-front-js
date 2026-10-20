
import { apiGet, API_BASE_URL } from './api.js';
import { getAuthToken } from './auth.js';

const idOf = value => {
  const id = Number(value);

  if (!Number.isSafeInteger(id) || id < 1) {
    throw new TypeError('Invalid ID');
  }

  return id;
};

const basePath = id =>
  `/v1/dental-records/${idOf(id)}`;

export const dentalRecordApi = {

  list(page = 1, signal = null) {
    const p = idOf(page);

    return apiGet(
      `/v1/dental-records${p > 1 ? `?page=${p}` : ''}`,
      { auth: true, signal }
    );
  },

  show(id, signal = null) {
    return apiGet(basePath(id), {
      auth: true,
      signal,
    });
  },

  treatments(id, signal = null) {
    return apiGet(
      `${basePath(id)}/treatments`,
      { auth: true, signal }
    );
  },

  odontogram(id, signal = null) {
    return apiGet(
      `${basePath(id)}/odontogram`,
      { auth: true, signal }
    );
  },

  attachments(id, signal = null) {
    return apiGet(
      `${basePath(id)}/attachments`,
      { auth: true, signal }
    );
  },

  async attachmentFile(
    recordId,
    attachmentId,
    mode = 'view',
    signal = null
  ) {
    if (!['view', 'download'].includes(mode)) {
      throw new TypeError(
        'Invalid attachment mode'
      );
    }

    const token = getAuthToken();

    if (!token) {
      throw new Error('Please log in again.');
    }

    const url =
      `${String(API_BASE_URL).replace(/\/+$/, '')}` +
      `${basePath(recordId)}` +
      `/attachments/${idOf(attachmentId)}/${mode}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: /^Bearer\s/i.test(token)
          ? token
          : `Bearer ${token}`,

        Accept:
          'application/pdf, image/*, application/octet-stream, application/json',
      },
      signal,
    });

    if (!response.ok) {
      const isJson = (
        response.headers.get('content-type') || ''
      ).includes('application/json');

      const json = isJson
        ? await response.json().catch(() => null)
        : null;

      throw new Error(
        json?.message ||
        `File request failed (${response.status}).`
      );
    }

    const disposition =
      response.headers.get('content-disposition') || '';

    let filename = disposition.match(
      /filename\*=UTF-8''([^;]+)/i
    )?.[1];

    if (filename) {
      try {
        filename = decodeURIComponent(filename);
      } catch {
        // Keep original filename.
      }
    } else {
      filename = disposition.match(
        /filename="?([^";]+)"?/i
      )?.[1];
    }

    filename = String(
      filename || `attachment-${idOf(attachmentId)}`
    ).replace(/[\\/\r\n]/g, '_');

    return {
      blob: await response.blob(),
      filename,
    };
  },

};
