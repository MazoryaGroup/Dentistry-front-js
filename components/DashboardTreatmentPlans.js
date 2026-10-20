
/**
 * Dentistry — Dashboard Treatment Plans
 * Laravel JWT + FA/EN
 *
 * No demo records.
 */

import { t, getLanguage } from '../code/i18n.js';
import { treatmentPlanApi } from '../code/treatmentPlanApi.js';

// ============================================
// LANGUAGE
// ============================================

const isFa = () => getLanguage() === 'fa';

const fallback = {
  en: {
    loading: 'Loading treatment plans…',
    empty: 'No treatment plans have been shared with you yet.',
    error: 'Could not load your treatment plans.',
    retry: 'Try again',
    details: 'Plan details',
    choose: 'Select a treatment plan to view its details.',
    stages: 'Treatment stages',
    progress: 'Progress',
    noItems: 'No treatment stages are available.',
    itemsError: 'Unable to load treatment stages.',
    progressError: 'Progress information is currently unavailable.',
    doctor: 'Doctor',
    tooth: 'Tooth',
    date: 'Created',
    updated: 'Updated',
    unavailable: 'Not provided',
    total: 'Plans',
    page: 'Page',
    previous: 'Previous',
    next: 'Next',
    noTitle: 'Treatment plan',
    stage: 'Treatment stage',
    privacy: 'Only treatment information available to your patient account is displayed.',
    done: 'Completed',
    doing: 'In progress',
    planned: 'Planned',
    approved: 'Approved',
    pending: 'Pending',
    canceled: 'Cancelled',
    draft: 'Draft',
  },
  fa: {
    loading: 'در حال دریافت طرح‌های درمان…',
    empty: 'هنوز طرح درمانی برای شما منتشر نشده است.',
    error: 'دریافت طرح‌های درمان انجام نشد.',
    retry: 'تلاش مجدد',
    details: 'جزئیات طرح درمان',
    choose: 'برای مشاهده جزئیات، یک طرح درمان را انتخاب کنید.',
    stages: 'مراحل درمان',
    progress: 'پیشرفت درمان',
    noItems: 'مرحله درمانی برای نمایش موجود نیست.',
    itemsError: 'دریافت مراحل درمان ممکن نشد.',
    progressError: 'اطلاعات پیشرفت درمان فعلاً در دسترس نیست.',
    doctor: 'پزشک',
    tooth: 'دندان',
    date: 'تاریخ ایجاد',
    updated: 'آخرین تغییر',
    unavailable: 'ثبت نشده',
    total: 'طرح‌ها',
    page: 'صفحه',
    previous: 'قبلی',
    next: 'بعدی',
    noTitle: 'طرح درمان',
    stage: 'مرحله درمان',
    privacy: 'فقط اطلاعاتی نمایش داده می‌شود که دسترسی آن برای حساب بیمار مجاز باشد.',
    done: 'انجام‌شده',
    doing: 'در حال انجام',
    planned: 'برنامه‌ریزی‌شده',
    approved: 'تأییدشده',
    pending: 'در انتظار',
    canceled: 'لغوشده',
    draft: 'پیش‌نویس',
  },
};

function tr(key) {
  const full = `dashboard.treatment.${key}`;
  const translated = t(full);

  return translated && translated !== full
    ? translated
    : fallback[isFa() ? 'fa' : 'en'][key] ?? key;
}

function escapeHTML(value) {
  return String(value ?? '').replace(
    /[&<>"']/g,
    char => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    })[char]
  );
}

const tx = key => escapeHTML(tr(key));

const asObject = value =>
  value && typeof value === 'object' && !Array.isArray(value)
    ? value
    : {};

const validId = value =>
  Number.isSafeInteger(Number(value)) &&
  Number(value) > 0;

// ============================================
// NORMALIZE LARAVEL RESPONSES
// ============================================

function listFrom(response, keys) {
  const root = response?.data ?? response;

  const candidates = [
    root,
    root?.data,
    ...keys.map(key => root?.[key]),
    ...keys.map(key => root?.data?.[key]),
  ];

  for (const value of candidates) {
    if (Array.isArray(value)) {
      return value;
    }
  }

  // Unknown format is not the same as an empty list.
  return null;
}

function detailFrom(response) {
  const root = response?.data ?? response;

  return asObject(
    root?.treatment_plan ??
    root?.treatmentPlan ??
    root?.plan ??
    root?.data ??
    root
  );
}

function translated(row) {
  const values =
    row?.translations ??
    row?.translates ??
    row?.translation;

  if (Array.isArray(values)) {
    return values.find(item =>
      [
        item?.lang,
        item?.locale,
        item?.language,
      ].includes(isFa() ? 'fa' : 'en')
    ) || {};
  }

  if (values && typeof values === 'object') {
    return values[isFa() ? 'fa' : 'en'] ?? values;
  }

  return {};
}

function titleOf(row, fallbackTitle) {
  const value = translated(row);

  return String(
    value?.title ??
    value?.title_1 ??
    value?.name ??
    row?.title ??
    row?.title_1 ??
    row?.name ??
    row?.plan_title ??
    row?.service?.name ??
    fallbackTitle
  ).trim();
}

function doctorOf(row) {
  const doctor = asObject(
    row?.doctor ??
    row?.staff ??
    row?.dentist
  );

  return String(
    doctor.name ??
    doctor.full_name ??
    row?.doctor_name ??
    row?.staff_name ??
    ''
  ).trim();
}

// ============================================
// DATE & STATUS
// ============================================

function dateText(value) {
  if (!value) return '';

  const date = String(value).slice(0, 10);

  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return '';
  }

  const parsed = new Date(`${date}T12:00:00Z`);

  if (Number.isNaN(parsed.getTime())) {
    return '';
  }

  return new Intl.DateTimeFormat(
    isFa() ? 'fa-IR' : 'en-GB',
    {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      timeZone: 'UTC',
    }
  ).format(parsed);
}

function statusText(value) {
  const raw = String(value ?? '').trim();

  const key = {
    completed: 'done',
    done: 'done',
    in_progress: 'doing',
    active: 'doing',
    planned: 'planned',
    approved: 'approved',
    pending: 'pending',
    cancelled: 'canceled',
    canceled: 'canceled',
    draft: 'draft',
  }[raw.toLowerCase()];

  return key
    ? tr(key)
    : raw || tr('unavailable');
}

// ============================================
// PROGRESS
// ============================================

function percentOf(response) {
  const root = response?.data ?? response;

  const value = asObject(
    root?.progress ??
    root?.data ??
    root
  );

  const raw =
    value.progress_percentage ??
    value.progress_percent ??
    value.percentage ??
    value.completion_percentage ??
    value.percent;

  if (
    raw !== undefined &&
    raw !== null &&
    raw !== ''
  ) {
    const number = Number(raw);

    return (
      Number.isFinite(number) &&
      number >= 0 &&
      number <= 100
    )
      ? Math.round(number)
      : null;
  }

  const completed = Number(
    value.completed_items ??
    value.completed_count
  );

  const total = Number(
    value.total_items ??
    value.total_count
  );

  if (
    Number.isInteger(completed) &&
    Number.isInteger(total) &&
    total > 0 &&
    completed >= 0 &&
    completed <= total
  ) {
    return Math.round(
      completed * 100 / total
    );
  }

  return null;
}

// ============================================
// PAGINATION
// ============================================

function paginationOf(response) {
  const root = response?.data ?? response;

  const meta = asObject(
    root?.meta ??
    response?.meta ??
    root
  );

  const current = Number(
    meta.current_page ?? 1
  );

  const last = Number(
    meta.last_page ?? 1
  );

  const next =
    Boolean(
      root?.next_page_url ??
      root?.links?.next
    ) ||
    (last > 1 && current < last);

  const prev =
    Boolean(
      root?.prev_page_url ??
      root?.links?.prev
    ) ||
    current > 1;

  return {
    current: current > 0 ? current : 1,
    prev,
    next,
  };
}

// ============================================
// RENDER PLAN CARD
// ============================================

function planCard(row) {
  const id = Number(row?.id);

  if (!validId(id)) return '';

  const title = titleOf(
    row,
    tr('noTitle')
  );

  const doctor = doctorOf(row);

  const date = dateText(
    row.created_at ??
    row.plan_date
  );

  const subtitle =
    [doctor, date].filter(Boolean).join(' · ') ||
    tr('details');

  return `
    <li class="dn-treatment-entry">

      <button
        type="button"
        class="dn-treatment-card"
        data-treatment-id="${id}"
      >

        <span
          class="dn-treatment-card-icon"
          aria-hidden="true"
        >
          ✦
        </span>

        <span class="dn-treatment-card-info">

          <strong>
            ${escapeHTML(title)}
          </strong>

          <small>
            ${escapeHTML(subtitle)}
          </small>

        </span>

        <span class="dn-treatment-status">
          ${escapeHTML(statusText(row.status))}
        </span>

        <span
          class="dn-treatment-arrow"
          aria-hidden="true"
        >
          ›
        </span>

      </button>

    </li>
  `;
}

// ============================================
// DETAILS HELPERS
// ============================================

function field(label, value) {
  if (
    value === undefined ||
    value === null ||
    String(value).trim() === ''
  ) {
    return '';
  }

  return `
    <div class="dn-treatment-meta-field">
      <dt>${tx(label)}</dt>
      <dd>${escapeHTML(value)}</dd>
    </div>
  `;
}

function stageItem(row, index) {
  const step = asObject(row);
  const inner = asObject(step.service);

  const title = titleOf(
    step,
    inner.name ??
    `${tr('stage')} ${index + 1}`
  );

  const tooth =
    step.tooth_number ??
    step.tooth?.number;

  const when = dateText(
    step.completed_at ??
    step.scheduled_date ??
    step.created_at
  );

  // Never show internal doctor notes.
  const publicNote =
    step.patient_notes ??
    step.public_notes ??
    '';

  const subtitle = [
    tooth != null
      ? `${tr('tooth')}: ${tooth}`
      : '',
    when,
  ].filter(Boolean).join(' · ');

  return `
    <li class="dn-treatment-stage">

      <span class="dn-treatment-step-number">
        ${index + 1}
      </span>

      <div class="dn-treatment-stage-content">

        <strong>
          ${escapeHTML(title)}
        </strong>

        ${
          publicNote
            ? `<p>${escapeHTML(publicNote)}</p>`
            : ''
        }

        <small>
          ${escapeHTML(subtitle)}
        </small>

      </div>

      <span class="dn-treatment-status">
        ${escapeHTML(statusText(step.status))}
      </span>

    </li>
  `;
}

// ============================================
// MAIN COMPONENT HTML
// ============================================

export function dashboardTreatmentPlansHTML() {
  return `
    <div
      class="dn-treatments"
      data-treatment-root
    >

      <div class="dn-treatment-toolbar">

        <p>
          ${tx('privacy')}
        </p>

        <button
          type="button"
          class="dn-treatment-retry"
          data-treatment-refresh
        >
          ${tx('retry')}
        </button>

      </div>

      <div class="dn-treatment-columns">

        <!-- PLANS LIST -->

        <section
          class="dn-treatment-list-surface"
          aria-label="${tx('total')}"
        >

          <div class="dn-treatment-section-label">
            ${tx('total')}
          </div>

          <p
            class="dn-treatment-info"
            data-treatment-list-status
            aria-live="polite"
          >
            ${tx('loading')}
          </p>

          <ul
            class="dn-treatment-list"
            data-treatment-list
          ></ul>

          <div
            class="dn-treatment-pager"
            data-treatment-pagination
            hidden
          >

            <button
              type="button"
              data-treatment-prev
            >
              ${tx('previous')}
            </button>

            <span data-treatment-page></span>

            <button
              type="button"
              data-treatment-next
            >
              ${tx('next')}
            </button>

          </div>

        </section>

        <!-- PLAN DETAILS -->

        <section
          class="dn-treatment-detail-surface"
          aria-label="${tx('details')}"
        >

          <div class="dn-treatment-section-label">
            ${tx('details')}
          </div>

          <div
            data-treatment-details
            aria-live="polite"
          >
            <p class="dn-treatment-info">
              ${tx('choose')}
            </p>
          </div>

        </section>

      </div>

    </div>
  `;
}

// ============================================
// INITIALIZATION
// ============================================

export function initDashboardTreatmentPlans(
  dashboardRoot,
  signal
) {
  const root = dashboardRoot.querySelector(
    '[data-treatment-root]'
  );

  if (!root) {
    return {
      load() {},
      cleanup() {},
    };
  }

  const $ = selector =>
    root.querySelector(selector);

  const list = $('[data-treatment-list]');
  const listStatus = $('[data-treatment-list-status]');
  const details = $('[data-treatment-details]');

  const pager = $('[data-treatment-pagination]');
  const prev = $('[data-treatment-prev]');
  const next = $('[data-treatment-next]');
  const pageLabel = $('[data-treatment-page]');

  let loaded = false;
  let currentPage = 1;

  let listRequest = 0;
  let detailRequest = 0;

  let listController = null;
  let detailController = null;

  const alive = () =>
    !signal.aborted && root.isConnected;

  function showListStatus(value) {
    listStatus.textContent = value;
    listStatus.hidden = false;
  }

  function showDetailMessage(value) {
    details.innerHTML = `
      <p class="dn-treatment-info">
        ${escapeHTML(value)}
      </p>
    `;
  }

  function cancelDetails() {
    ++detailRequest;

    detailController?.abort();
    detailController = null;
  }

  // ==========================================
  // LOAD TREATMENT PLANS
  // ==========================================

  async function loadList(page = currentPage) {
    if (!alive()) return;

    loaded = true;

    const request = ++listRequest;

    listController?.abort();
    cancelDetails();

    listController = new AbortController();
    currentPage = page;

    showListStatus(tr('loading'));

    list.replaceChildren();
    pager.hidden = true;

    showDetailMessage(tr('choose'));

    try {
      const response =
        await treatmentPlanApi.list(
          page,
          listController.signal
        );

      if (
        !alive() ||
        request !== listRequest
      ) {
        return;
      }

      const plans = listFrom(response, [
        'treatment_plans',
        'treatmentPlans',
        'plans',
      ]);

      if (!plans) {
        throw new Error(
          'UNSUPPORTED_TREATMENT_LIST_RESPONSE'
        );
      }

      const valid = plans.filter(
        row => validId(row?.id)
      );

      list.innerHTML =
        valid.map(planCard).join('');

      if (valid.length) {
        listStatus.hidden = true;
      } else {
        showListStatus(tr('empty'));
      }

      const pages = paginationOf(response);

      currentPage = pages.current;

      pager.hidden =
        !(pages.next || pages.prev);

      pageLabel.textContent =
        `${tr('page')} ${currentPage}`;

      prev.disabled = !pages.prev;
      next.disabled = !pages.next;

    } catch (error) {
      if (
        !alive() ||
        request !== listRequest
      ) {
        return;
      }

      console.error(
        'Treatment plans list:',
        error
      );

      showListStatus(tr('error'));
    }
  }

  // ==========================================
  // LOAD PLAN DETAILS
  // ==========================================

  async function loadDetails(id) {
    if (!alive() || !validId(id)) {
      return;
    }

    cancelDetails();

    const request = detailRequest;
    const local = new AbortController();

    detailController = local;

    const aliveDetail = () =>
      alive() &&
      request === detailRequest &&
      !local.signal.aborted;

    root
      .querySelectorAll('[data-treatment-id]')
      .forEach(button => {
        button.classList.toggle(
          'is-selected',
          Number(button.dataset.treatmentId) === Number(id)
        );
      });

    showDetailMessage(tr('loading'));

    try {
      const response =
        await treatmentPlanApi.show(
          id,
          local.signal
        );

      if (!aliveDetail()) return;

      const plan = detailFrom(response);

      const actualId = Number(
        plan.id ?? id
      );

      if (actualId !== Number(id)) {
        showDetailMessage(tr('error'));
        return;
      }

      const doctor = doctorOf(plan);

      const title = titleOf(
        plan,
        tr('noTitle')
      );

      const status = statusText(
        plan.status
      );

      const tooth =
        plan.tooth_number ??
        plan.tooth?.number;

      // Patient-facing description only.
      const description =
        translated(plan)?.patient_description ??
        plan.patient_description ??
        plan.public_description ??
        '';

      details.innerHTML = `
        <div class="dn-treatment-detail-head">

          <h2>
            ${escapeHTML(title)}
          </h2>

          <span class="dn-treatment-status">
            ${escapeHTML(status)}
          </span>

        </div>

        ${
          description
            ? `
              <p class="dn-treatment-description">
                ${escapeHTML(description)}
              </p>
            `
            : ''
        }

        <dl class="dn-treatment-metadata">
          ${field('doctor', doctor)}
          ${field('tooth', tooth)}
          ${field('date', dateText(plan.created_at))}
          ${field('updated', dateText(plan.updated_at))}
        </dl>

        <div class="dn-treatment-progress-block">

          <div class="dn-treatment-subtitle">
            ${tx('progress')}
          </div>

          <div
            data-treatment-progress
            class="dn-treatment-info"
          >
            ${tx('loading')}
          </div>

        </div>

        <div class="dn-treatment-stages-block">

          <div class="dn-treatment-subtitle">
            ${tx('stages')}
          </div>

          <div
            data-treatment-stages
            class="dn-treatment-info"
          >
            ${tx('loading')}
          </div>

        </div>
      `;

      const progressBox = $(
        '[data-treatment-progress]'
      );

      const itemsBox = $(
        '[data-treatment-stages]'
      );

      // ======================================
      // LOAD PROGRESS
      // ======================================

      void treatmentPlanApi.progress(
        id,
        local.signal
      ).then(result => {
        if (!aliveDetail()) return;

        const percentage = percentOf(result);

        if (percentage === null) {
          progressBox.textContent =
            tr('progressError');
          return;
        }

        progressBox.innerHTML = `
          <div class="dn-treatment-progress-line">
            <strong dir="ltr">
              ${percentage}%
            </strong>
          </div>

          <div
            class="dn-treatment-progress-track"
            role="progressbar"
            aria-valuenow="${percentage}"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-label="${tx('progress')}"
          >
            <span
              style="width:${percentage}%"
            ></span>
          </div>
        `;

      }).catch(error => {
        if (!aliveDetail()) return;

        console.error(
          'Treatment progress:',
          error
        );

        progressBox.textContent =
          tr('progressError');
      });

      // ======================================
      // LOAD TREATMENT ITEMS
      // ======================================

      void treatmentPlanApi.items(
        id,
        local.signal
      ).then(result => {
        if (!aliveDetail()) return;

        const items = listFrom(result, [
          'items',
          'plan_items',
          'treatment_items',
          'stages',
        ]);

        if (!items) {
          itemsBox.textContent =
            tr('itemsError');
          return;
        }

        itemsBox.innerHTML = items.length
          ? `
            <ol class="dn-treatment-stages">
              ${items.map(stageItem).join('')}
            </ol>
          `
          : `
            <p class="dn-treatment-info">
              ${tx('noItems')}
            </p>
          `;

      }).catch(error => {
        if (!aliveDetail()) return;

        console.error(
          'Treatment items:',
          error
        );

        itemsBox.textContent =
          tr('itemsError');
      });

    } catch (error) {
      if (!aliveDetail()) return;

      console.error(
        'Treatment plan detail:',
        error
      );

      showDetailMessage(tr('error'));
    }
  }

  // ==========================================
  // EVENTS
  // ==========================================

  root.addEventListener(
    'click',
    event => {
      const button = event.target.closest(
        'button'
      );

      if (!button || !root.contains(button)) {
        return;
      }

      if (
        button.hasAttribute(
          'data-treatment-refresh'
        )
      ) {
        void loadList(1);

      } else if (
        button.hasAttribute(
          'data-treatment-id'
        )
      ) {
        void loadDetails(
          Number(button.dataset.treatmentId)
        );

      } else if (
        button.hasAttribute(
          'data-treatment-prev'
        ) &&
        currentPage > 1
      ) {
        void loadList(currentPage - 1);

      } else if (
        button.hasAttribute(
          'data-treatment-next'
        )
      ) {
        void loadList(currentPage + 1);
      }
    },
    { signal }
  );

  // ==========================================
  // PUBLIC METHODS
  // ==========================================

  return {
    load() {
      if (!loaded) {
        void loadList(1);
      }
    },

    cleanup() {
      ++listRequest;
      ++detailRequest;

      listController?.abort();
      detailController?.abort();
    },
  };
}
