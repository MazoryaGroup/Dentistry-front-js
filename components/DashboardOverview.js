
/**
 * Dentistry — Live Dashboard Overview
 * Real APIs | FA/EN | Jalali | Asia/Tehran
 */

import { getLanguage } from '../code/i18n.js';
import { bookingApi } from '../code/bookingApi.js';
import { financeApi } from '../code/financeApi.js';
import { treatmentPlanApi } from '../code/treatmentPlanApi.js';
import { dentalRecordApi } from '../code/dentalRecordApi.js';

const isFa = () => getLanguage() === 'fa';

const tr = (en, fa) => isFa() ? fa : en;

const esc = value =>
  String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[char]);

// ============================================
// DATE
// ============================================

function clinicDate(value) {
  const raw = String(value ?? '').trim();

  if (!/^\d{4}-\d{2}-\d{2}/.test(raw)) {
    return '';
  }

  let date = raw.slice(0, 10);

  if (
    raw.includes('T') &&
    /(Z|[+-]\d{2}:?\d{2})$/i.test(raw)
  ) {
    const instant = new Date(raw);

    if (Number.isNaN(instant.getTime())) {
      return '';
    }

    const parts = Object.fromEntries(
      new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Tehran',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })
        .formatToParts(instant)
        .map(part => [part.type, part.value])
    );

    date = [
      parts.year,
      parts.month,
      parts.day,
    ].join('-');
  }

  const parsed = new Date(`${date}T12:00:00Z`);

  return (
    !Number.isNaN(parsed.getTime()) &&
    parsed.toISOString().slice(0, 10) === date
  ) ? date : '';
}

function formatDate(date) {
  if (!date) return '—';

  return new Intl.DateTimeFormat(
    isFa()
      ? 'fa-IR-u-ca-persian'
      : 'en-US-u-ca-persian',
    {
      dateStyle: 'medium',
      timeZone: 'UTC',
    }
  ).format(new Date(`${date}T12:00:00Z`));
}

function clinicNow() {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Asia/Tehran',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hourCycle: 'h23',
    })
      .formatToParts(new Date())
      .map(part => [part.type, part.value])
  );

  return (
    `${parts.year}-${parts.month}-${parts.day}` +
    `T${parts.hour}:${parts.minute}`
  );
}

// ============================================
// API LISTS AND PAGINATION
// ============================================

function extractList(response, keys = []) {
  const body = response?.data ?? response;

  const candidates = [
    body,
    body?.data,
    ...keys.flatMap(key => [
      body?.[key],
      body?.[key]?.data,
      response?.[key],
    ]),
  ];

  return candidates.find(Array.isArray) ?? null;
}

async function fetchPages(request, keys, signal) {
  const rows = [];
  const maxPages = 20;

  for (let page = 1; page <= maxPages; page++) {
    const response = await request(page, signal);

    if (response?.success === false) {
      throw new Error(
        response.message || 'API request failed'
      );
    }

    const items = extractList(response, keys);

    if (!items) {
      throw new Error('Unsupported API response');
    }

    rows.push(...items);

    const body = response?.data ?? response;
    const meta =
      body?.meta ??
      response?.meta ??
      body;

    const lastPage = Number(
      meta?.last_page ?? 0
    );

    const hasNext =
      Boolean(
        body?.next_page_url ??
        body?.links?.next ??
        response?.links?.next
      ) ||
      lastPage > page;

    if (!hasNext) {
      return {
        rows,
        partial: false,
      };
    }
  }

  return {
    rows,
    partial: true,
  };
}

// ============================================
// OVERVIEW HELPERS
// ============================================

function updateStat(root, key, value, subtitle) {
  const element = root.querySelector(
    `[data-dashboard-stat="${key}"]`
  );

  if (!element) return;

  element.textContent = value;
  element.removeAttribute('aria-label');

  const caption = element
    .closest('.dn-stat')
    ?.querySelector('small');

  if (caption) {
    caption.textContent = subtitle;
  }
}

function money(value, currency = '') {
  const amount = Number(value);

  if (!Number.isFinite(amount)) {
    return '—';
  }

  const unit = ['IRT', 'TOMAN'].includes(currency)
    ? tr('Toman', 'تومان')
    : currency;

  const number = amount.toLocaleString(
    isFa() ? 'fa-IR' : 'en-US'
  );

  return `${number}${unit ? ` ${unit}` : ''}`;
}

function bookingTitle(booking) {
  const services =
    booking.booking_services ??
    booking.bookingServices ??
    booking.services ??
    [];

  const names = Array.isArray(services)
    ? services.map(item =>
        item?.service?.name ??
        item?.service?.title ??
        item?.name
      ).filter(Boolean)
    : [];

  return names.length
    ? names.join(' • ')
    : tr('Dental appointment', 'نوبت دندان‌پزشکی');
}

// ============================================
// CARE TIMELINE
// ============================================

function renderTimeline(root, events, unavailable) {
  const host = root.querySelector(
    '[data-dashboard-timeline]'
  );

  if (!host) return;

  if (!events.length) {
    host.innerHTML = `
      <p class="dn-overview-timeline-empty">
        ${esc(unavailable
          ? tr(
              'Care timeline is temporarily unavailable.',
              'دریافت مسیر درمان فعلاً ممکن نیست.'
            )
          : tr(
              'No care events have been recorded yet.',
              'هنوز رویدادی در مسیر درمان ثبت نشده است.'
            )
        )}
      </p>
    `;

    return;
  }

  events.sort(
    (a, b) => b.sort.localeCompare(a.sort)
  );

  host.innerHTML = `
    <ol class="dn-overview-timeline">
      ${events.slice(0, 7).map(event => `
        <li class="dn-overview-timeline-item">

          <span
            class="dn-overview-timeline-dot"
            aria-hidden="true"
          ></span>

          <div class="dn-overview-timeline-body">

            <span class="dn-overview-timeline-date">
              ${esc(formatDate(event.date))}
              ${event.time ? ` · ${esc(event.time)}` : ''}
            </span>

            <strong>${esc(event.title)}</strong>

            <small>${esc(event.detail)}</small>

          </div>

        </li>
      `).join('')}
    </ol>
  `;
}

// ============================================
// INITIALIZE
// ============================================

export function initDashboardOverview(
  root,
  parentSignal
) {
  let controller = null;
  let requestId = 0;

  const alive = id =>
    !parentSignal.aborted &&
    root.isConnected &&
    id === requestId;

  async function refresh() {
    controller?.abort();

    controller = new AbortController();

    const { signal } = controller;
    const id = ++requestId;

    const results = await Promise.allSettled([
      fetchPages(
        (page, s) => bookingApi.list(s, page),
        ['bookings', 'items'],
        signal
      ),

      fetchPages(
        (page, s) => treatmentPlanApi.list(page, s),
        ['treatment_plans', 'plans'],
        signal
      ),

      financeApi.summary(signal),

      fetchPages(
        (page, s) => dentalRecordApi.list(page, s),
        ['dental_records', 'records'],
        signal
      ),
    ]);

    if (!alive(id) || signal.aborted) return;

    const events = [];

    // ========================================
    // UPCOMING VISITS
    // ========================================

    const bookingsResult = results[0];

    if (bookingsResult.status === 'fulfilled') {
      const { rows, partial } = bookingsResult.value;
      const now = clinicNow();

      const confirmed = rows
        .map(booking => ({
          ...booking,
          _date: clinicDate(
            booking.booking_date ?? booking.date
          ),
          _time: String(
            booking.start_time ?? ''
          ).slice(0, 5),
        }))
        .filter(booking =>
          booking.status === 'confirmed' &&
          booking._date &&
          `${booking._date}T${booking._time || '00:00'}` >= now
        )
        .sort((a, b) =>
          `${a._date}T${a._time}`.localeCompare(
            `${b._date}T${b._time}`
          )
        );

      updateStat(
        root,
        'upcoming',
        `${confirmed.length}${partial ? '+' : ''}`,
        tr(
          'Confirmed appointments',
          'نوبت‌های تأییدشده'
        )
      );

      const nextTitle = root.querySelector(
        '[data-dashboard-next-title]'
      );

      const nextDescription = root.querySelector(
        '[data-dashboard-next-description]'
      );

      if (nextTitle) {
        nextTitle.textContent = confirmed[0]
          ? bookingTitle(confirmed[0])
          : partial
            ? tr(
                'More appointments may exist',
                'ممکن است نوبت‌های بیشتری وجود داشته باشد'
              )
            : tr(
                'No confirmed upcoming appointment',
                'نوبت تأییدشده آینده‌ای ندارید'
              );
      }

      if (nextDescription) {
        nextDescription.textContent = confirmed[0]
          ? (
              `${formatDate(confirmed[0]._date)} · ` +
              confirmed[0]._time
            )
          : tr(
              'Your next confirmed visit appears here.',
              'نوبت تأییدشده بعدی اینجا نمایش داده می‌شود.'
            );
      }

      for (const booking of rows) {
        const status = String(
          booking.status ?? ''
        ).toLowerCase();

        if (![
          'confirmed',
          'awaiting_payment',
          'completed',
        ].includes(status)) continue;

        const date = clinicDate(
          booking.booking_date ?? booking.date
        );

        if (!date) continue;

        const time = String(
          booking.start_time ?? ''
        ).slice(0, 5);

        const detail =
          status === 'confirmed'
            ? tr('Confirmed appointment', 'نوبت تأییدشده')
            : status === 'awaiting_payment'
              ? tr(
                  'Awaiting deposit payment',
                  'در انتظار پرداخت بیعانه'
                )
              : tr(
                  'Completed appointment',
                  'نوبت انجام‌شده'
                );

        events.push({
          date,
          time,
          sort: `${date}T${time}`,
          title: bookingTitle(booking),
          detail,
        });
      }

    } else {
      updateStat(
        root,
        'upcoming',
        '—',
        tr('Unable to load', 'خطا در دریافت')
      );

      console.error(
        'Overview bookings:',
        bookingsResult.reason
      );
    }

    // ========================================
    // ACTIVE TREATMENT PLANS
    // ========================================

    const plansResult = results[1];

    if (plansResult.status === 'fulfilled') {
      const { rows, partial } = plansResult.value;

      const active = rows.filter(
        plan =>
          String(plan.status ?? '').toLowerCase() ===
          'active'
      );

      updateStat(
        root,
        'activePlans',
        `${active.length}${partial ? '+' : ''}`,
        tr(
          'Active treatment plans',
          'طرح‌های درمان فعال'
        )
      );

      for (const plan of active) {
        const date = clinicDate(
          plan.planned_start_date ??
          plan.created_at
        );

        if (!date) continue;

        events.push({
          date,
          time: '',
          sort: `${date}T00:00`,
          title:
            plan.title ||
            tr('Treatment plan', 'طرح درمان'),
          detail: tr(
            'Active treatment plan',
            'طرح درمان فعال'
          ),
        });
      }

    } else {
      updateStat(
        root,
        'activePlans',
        '—',
        tr('Unable to load', 'خطا در دریافت')
      );

      console.error(
        'Overview plans:',
        plansResult.reason
      );
    }

    // ========================================
    // AMOUNT DUE
    // ========================================

    const financeResult = results[2];

    if (financeResult.status === 'fulfilled') {
      const response = financeResult.value;

      if (response?.success === false) {
        updateStat(
          root,
          'balance',
          '—',
          tr('Unable to load', 'خطا در دریافت')
        );
      } else {
        const data = response?.data ?? response;

        const due =
          data?.total_remaining ??
          data?.total_due ??
          data?.balance_due;

        updateStat(
          root,
          'balance',
          due == null
            ? '—'
            : money(due, data?.currency),
          tr(
            'Outstanding balance',
            'مانده حساب'
          )
        );
      }

    } else {
      updateStat(
        root,
        'balance',
        '—',
        tr('Unable to load', 'خطا در دریافت')
      );

      console.error(
        'Overview finance:',
        financeResult.reason
      );
    }

    // ========================================
    // DENTAL RECORDS AND TREATMENT HISTORY
    // ========================================

    const recordsResult = results[3];

    if (recordsResult.status === 'fulfilled') {
      const finalized = recordsResult.value.rows.filter(
        record =>
          String(record.status ?? '').toLowerCase() ===
          'finalized'
      );

      for (const record of finalized) {
        const date = clinicDate(
          record.examined_at ??
          record.visit_date ??
          record.created_at
        );

        if (!date) continue;

        events.push({
          date,
          time: '',
          sort: `${date}T00:00`,
          title: tr(
            'Dental examination',
            'معاینه دندان‌پزشکی'
          ),
          detail: tr(
            'Finalized dental record',
            'پرونده پزشکی نهایی‌شده'
          ),
        });
      }

      // Fetch patient-visible completed treatments.
      // Do not display private doctor notes.

      const recentRecords = finalized
        .filter(record =>
          Number.isSafeInteger(Number(record.id)) &&
          Number(record.id) > 0
        )
        .sort((a, b) =>
          String(
            b.examined_at ?? b.created_at ?? ''
          ).localeCompare(
            String(
              a.examined_at ?? a.created_at ?? ''
            )
          )
        )
        .slice(0, 8);

      const treatmentResults =
        await Promise.allSettled(
          recentRecords.map(record =>
            dentalRecordApi.treatments(
              Number(record.id),
              signal
            )
          )
        );

      if (!alive(id) || signal.aborted) return;

      for (const result of treatmentResults) {
        if (result.status !== 'fulfilled') continue;

        const treatments = extractList(
          result.value,
          [
            'treatments',
            'treatment_history',
            'items',
          ]
        );

        if (!treatments) continue;

        for (const treatment of treatments) {
          const completed = [
            'completed',
            'done',
            'performed',
          ].includes(
            String(treatment.status ?? '').toLowerCase()
          ) || Boolean(
            treatment.performed_at ??
            treatment.completed_at
          );

          const date = clinicDate(
            treatment.performed_at ??
            treatment.completed_at ??
            treatment.treatment_date
          );

          if (!completed || !date) continue;

          const tooth = treatment.tooth_number;

          events.push({
            date,
            time: '',
            sort: `${date}T12:00`,
            title:
              treatment.title ??
              treatment.name ??
              treatment.treatment_name ??
              tr('Dental treatment', 'درمان دندان‌پزشکی'),
            detail: tooth != null
              ? `${tr('Tooth', 'دندان')} ${tooth}`
              : tr(
                  'Completed treatment',
                  'درمان انجام‌شده'
                ),
          });
        }
      }

    } else {
      console.error(
        'Overview dental records:',
        recordsResult.reason
      );
    }

    // ========================================
    // RENDER TIMELINE
    // ========================================

    renderTimeline(
      root,
      events,
      results[0].status === 'rejected' &&
      results[1].status === 'rejected' &&
      results[3].status === 'rejected'
    );
  }

  // Refresh Overview after booking changes.
  root.addEventListener(
    'dentistry:overview-refresh',
    () => void refresh(),
    { signal: parentSignal }
  );

  void refresh();

  return () => {
    ++requestId;
    controller?.abort();
  };
}
