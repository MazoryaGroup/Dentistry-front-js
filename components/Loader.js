/** Reusable UI loader. API integration is intentionally deferred. */
export function Loader(message = 'Loading...') {
  return `<div class="dentistry-loader" role="status" aria-live="polite">${message}</div>`;
}
