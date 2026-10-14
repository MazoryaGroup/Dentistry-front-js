/** Dentistry — 15-minute idle session guard (frontend). */
import { getAuthToken, clearAuthToken } from './auth.js';

const LAST_ACTIVITY_KEY = 'dentistry.patient.lastActivity';
export const IDLE_TIMEOUT_MS = 15 * 60 * 1000;

function readLastActivity() {
  try { return Number(sessionStorage.getItem(LAST_ACTIVITY_KEY)); }
  catch { return 0; }
}

function writeLastActivity(now = Date.now()) {
  try { sessionStorage.setItem(LAST_ACTIVITY_KEY, String(now)); return true; }
  catch { return false; }
}

function jwtIsExpired(token) {
  if (typeof token !== 'string' || token.split('.').length !== 3) return false;
  try {
    const payload = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
    const json = JSON.parse(atob(payload.padEnd(Math.ceil(payload.length / 4) * 4, '=')));
    return typeof json.exp === 'number' && Date.now() >= json.exp * 1000;
  } catch {
    // An opaque or unparseable token still needs verification by Laravel.
    return false;
  }
}

function notifyAuthChange() {
  window.dispatchEvent(new Event('dentistry:auth-changed'));
}

/** Call immediately after storeLoginResponse(response). */
export function startPatientSession() {
  if (!getAuthToken() || !writeLastActivity()) return false;
  notifyAuthChange();
  return true;
}

/** Clear local login state. Does not revoke a JWT server-side. */
export function clearPatientSession() {
  clearAuthToken();
  try { sessionStorage.removeItem(LAST_ACTIVITY_KEY); } catch { /* storage blocked */ }
  notifyAuthChange();
}

/** True only when a token is present and activity has occurred within 15 minutes. */
export function isLoggedInAndActive() {
  const token = getAuthToken();
  if (!token) return false;

  const lastActivity = readLastActivity();
  if (!lastActivity || Date.now() - lastActivity >= IDLE_TIMEOUT_MS || jwtIsExpired(token)) {
    clearPatientSession();
    return false;
  }
  return true;
}

/** Touch only after validating that the session has not already expired. */
export function recordPatientActivity() {
  if (!isLoggedInAndActive()) return false;
  return writeLastActivity();
}

/** Initialize once, from initRouter(). */
export function initSessionMonitor(onExpired) {
  const controller = new AbortController();
  const { signal } = controller;
  let wasActive = isLoggedInAndActive();
  let lastWrite = 0;

  const check = () => {
    const active = isLoggedInAndActive();
    if (wasActive && !active) onExpired?.();
    wasActive = active;
  };

  const onActivity = () => {
    // Check expiry before treating the interaction as new activity.
    if (!isLoggedInAndActive()) {
      check();
      return;
    }
    const now = Date.now();
    if (now - lastWrite < 1000) return;
    lastWrite = now;
    recordPatientActivity();
    wasActive = true;
  };

  for (const eventName of ['pointerdown', 'keydown', 'touchstart', 'scroll']) {
    document.addEventListener(eventName, onActivity, {
      signal,
      passive: true,
      capture: eventName === 'scroll',
    });
  }

  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) check();
  }, { signal });
  window.addEventListener('focus', check, { signal });
  window.addEventListener('pageshow', check, { signal });

  // Timers may be throttled in background tabs; focus/visibility checks cover that.
  const intervalId = window.setInterval(check, 5000);
  return () => {
    controller.abort();
    window.clearInterval(intervalId);
  };
}
