
import { financeApi } from './financeApi.js';

export function bookingIdFromResponse(response) {
  const booking =
    response?.data?.booking ??
    response?.data?.data?.booking ??
    response?.data?.data ??
    response?.data ??
    response;

  const id = Number(
    booking?.booking_id ??
    booking?.booking?.id ??
    booking?.id
  );

  return Number.isSafeInteger(id) && id > 0
    ? id
    : null;
}

export async function depositGatewayUrl(
  bookingId,
  signal = null
) {
  const id = Number(bookingId);

  if (!Number.isSafeInteger(id) || id < 1) {
    throw new TypeError('Invalid booking ID');
  }

  // Start payment for an EXISTING booking.
  // Never create another booking here.
  const response = await financeApi.startDeposit(
    id,
    signal
  );

  if (response?.success === false) {
    throw new Error(
      response.message ||
      'Could not start deposit payment.'
    );
  }

  const data =
    response?.data?.payment ??
    response?.data?.data ??
    response?.data ??
    response;

  const raw =
    typeof data === 'string'
      ? data
      : (
          data?.payment_url ??
          data?.gateway_url ??
          data?.redirect_url ??
          data?.payment_link ??
          data?.url ??
          data?.link ??
          data?.gateway?.url
        );

  if (
    typeof raw !== 'string' ||
    !raw.trim()
  ) {
    throw new Error(
      'Payment started, but no gateway URL was returned. Check the /start API response.'
    );
  }

  let url;

  try {
    url = new URL(raw);
  } catch {
    throw new Error(
      'Invalid payment gateway URL.'
    );
  }

  if (url.protocol !== 'https:') {
    throw new Error(
      'Insecure payment gateway URL.'
    );
  }

  return url.href;
}
