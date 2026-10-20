
import { t, getLanguage } from '../code/i18n.js';
import { dentalRecordApi } from '../code/dentalRecordApi.js';

// ============================================
// LANGUAGE
// ============================================

const fa = () => getLanguage() === 'fa';

const words = {
  en: {
    loading: 'Loading dental records…',
    empty: 'No dental records are available.',
    error: 'Dental records could not be loaded.',
    retry: 'Retry',
    select: 'Select a record to view details.',
    details: 'Record details',
    treatments: 'Completed treatments',
    odontogram: 'Tooth chart',
    files: 'Attachments',
    noTreatments: 'No treatments available.',
    noTeeth: 'No tooth data available.',
    noFiles: 'No attachments available.',
    unavailable: 'Information unavailable.',
    doctor: 'Doctor',
    date: 'Date',
    diagnosis: 'Diagnosis',
    status: 'Status',
    tooth: 'Tooth',
    view: 'View',
    download: 'Download',
    close: 'Close preview',
    previewError:
      'This file cannot be previewed safely; use Download.',
    requestError: 'Could not retrieve the file.',
    upper: 'Upper jaw',
    lower: 'Lower jaw',
    noData: 'No data',
    page: 'Page',
    prev: 'Previous',
    next: 'Next',
    record: 'Record',
    
chiefComplaint: 'Chief complaint',
examination: 'Examination',
patientNotes: 'Patient notes',
finalized: 'Finalized',
draft: 'Draft',
caries: 'Tooth decay',
crown: 'Crown',
filled: 'Filled',
healthy: 'Healthy',
missing: 'Missing',
treated: 'Treated',
xray: 'X-Ray',
image: 'Image',
document: 'Document',
otherTeeth: 'Other teeth',
unknownTeethNote:
  'Teeth without recorded data are not assumed to be healthy.',
  teethCount: 'Teeth',
  serviceLabel: 'Service',

  },

  fa: {
    loading: 'در حال دریافت پرونده‌ها…',
    empty: 'هنوز پرونده‌ای برای نمایش موجود نیست.',
    error: 'دریافت پرونده‌ها انجام نشد.',
    retry: 'تلاش دوباره',
    select: 'برای مشاهده جزئیات، یک پرونده را انتخاب کنید.',
    details: 'جزئیات پرونده',
    treatments: 'درمان‌های انجام‌شده',
    odontogram: 'نقشه دندان‌ها',
    files: 'پیوست‌ها',
    noTreatments: 'درمانی برای نمایش موجود نیست.',
    noTeeth: 'اطلاعات دندان‌ها موجود نیست.',
    noFiles: 'پیوستی موجود نیست.',
    unavailable: 'اطلاعات در دسترس نیست.',
    doctor: 'پزشک',
    date: 'تاریخ',
    diagnosis: 'تشخیص',
    status: 'وضعیت',
    tooth: 'دندان',
    view: 'مشاهده',
    download: 'دریافت',
    close: 'بستن پیش‌نمایش',
    previewError:
      'پیش‌نمایش امن این نوع فایل ممکن نیست؛ از دریافت فایل استفاده کنید.',
    requestError: 'دریافت فایل انجام نشد.',
    upper: 'فک بالا',
    lower: 'فک پایین',
    noData: 'بدون اطلاعات',
    page: 'صفحه',
    prev: 'قبلی',
    next: 'بعدی',
    record: 'پرونده',
    serviceLabel: 'خدمت',
      
chiefComplaint: 'شکایت اصلی بیمار',
examination: 'نتیجه معاینه',
patientNotes: 'یادداشت بیمار',
finalized: 'نهایی‌شده',
draft: 'پیش‌نویس',
caries: 'پوسیدگی',
crown: 'روکش',
filled: 'پرشده',
healthy: 'سالم',
missing: 'ازدست‌رفته',
treated: 'درمان‌شده',
xray: 'رادیوگرافی',
image: 'تصویر',
document: 'مدرک',
otherTeeth: 'دندان‌های دیگر',
unknownTeethNote:
  'دندان‌های فاقد اطلاعات ثبت‌شده، سالم فرض نمی‌شوند.',
  teethCount: 'دندان‌ها',

  },
};

function tr(key) {
  const full = `dashboard.records.${key}`;
  const translated = t(full);

  return translated && translated !== full
    ? translated
    : (words[fa() ? 'fa' : 'en'][key] || key);
}

function esc(value) {
  return String(value ?? '').replace(
    /[&<>"']/g,
    ch => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    })[ch]
  );
}

const tx = key => esc(tr(key));

const goodId = value =>
  Number.isSafeInteger(Number(value)) &&
  Number(value) > 0;

// ============================================
// API RESPONSE HELPERS
// ============================================

function rowsOf(response, fields = []) {
  const r = response?.data ?? response;

  const candidates = [
    r,
    r?.data,
    r?.teeth,
    r?.odontogram?.teeth,

    ...fields.flatMap(key => [
      r?.[key],
      r?.[key]?.data,
      r?.[key]?.teeth,
      r?.data?.[key],
      r?.data?.[key]?.data,
    ]),
  ];

  return candidates.find(Array.isArray) ?? null;
}

function detailOf(response) {
  const r = response?.data ?? response;

  return (
    r?.dental_record ??
    r?.record ??
    r?.data ??
    r ??
    {}
  );
}

function nameOf(value) {
  if (typeof value === 'string') return value;

  return value?.name ?? value?.full_name ?? '';
}

function titleOf(record) {
  return (
    record?.title ||
    record?.name ||
    record?.record_title ||
    `${tr('record')} #${record?.id ?? '?'}`
  );
}

function when(value) {
  if (!value) return '';

  const date = String(value).slice(0, 10);

  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return '';
  }

  const parsed = new Date(`${date}T12:00:00Z`);

  if (Number.isNaN(parsed.valueOf())) {
    return '';
  }

  return new Intl.DateTimeFormat(
    fa() ? 'fa-IR' : 'en-GB',
    {
      dateStyle: 'medium',
      timeZone: 'UTC',
    }
  ).format(parsed);
}

function paginationOf(response) {
  const r = response?.data ?? response;
  const meta = r?.meta ?? response?.meta ?? r;

  const current = Number(meta?.current_page) || 1;
  const last = Number(meta?.last_page) || 1;

  return {
    current,
    previous: current > 1,
    next:
      Boolean(
        r?.next_page_url ||
        r?.links?.next
      ) || current < last,
  };
}

function infoPair(label, value) {
  if (value == null || value === '') return '';

  return `
    <div class="dn-record-pair">
      <dt>${tx(label)}</dt>
      <dd>${esc(value)}</dd>
    </div>
  `;
}

// ============================================
// RECORD LIST
// ============================================


function listCard(row) {
  const id = Number(row?.id);

  if (!Number.isSafeInteger(id) || id < 1) {
    return '';
  }

  const date = when(
    row.examined_at ??
    row.visit_date ??
    row.created_at
  );

  const doctor = nameOf(row.doctor);

  const complaint = String(
    row.chief_complaint ?? ''
  ).trim();

  const diagnosis = String(
    row.diagnosis ?? ''
  ).trim();

  const status = String(
    row.status ?? ''
  ).toLowerCase();

  const statusLabel = {
    finalized: tr('finalized'),
    draft: tr('draft'),
  }[status] ?? status;

  const treatmentsCount = Number(
    row.treatments_count ?? 0
  );

  const teethCount = Number(
    row.teeth_count ?? 0
  );

  const attachmentsCount = Number(
    row.attachments_count ?? 0
  );

  const count = value =>
    Number.isFinite(value) && value >= 0
      ? value
      : 0;

  return `
    <li>
      <button
        type="button"
        class="dn-record-card"
        data-record-id="${id}"
      >

        <div class="dn-record-card-top">

          <strong>
            ${esc(titleOf(row))}
          </strong>

          ${
            status
              ? `
                <span class="dn-record-status">
                  ${esc(statusLabel)}
                </span>
              `
              : ''
          }

        </div>

        <div class="dn-record-card-details">

          ${
            date
              ? `
                <span>
                  ${esc(date)}
                </span>
              `
              : ''
          }

          ${
            doctor
              ? `
                <span>
                  ${tx('doctor')}: ${esc(doctor)}
                </span>
              `
              : ''
          }

        </div>

        ${
          complaint
            ? `
              <p class="dn-record-complaint">
                ${esc(complaint)}
              </p>
            `
            : ''
        }

        ${
          diagnosis
            ? `
              <p class="dn-record-diagnosis">
                ${tx('diagnosis')}: ${esc(diagnosis)}
              </p>
            `
            : ''
        }

        <div class="dn-record-counts">

          <span>
            ${tx('treatments')}:
            <b>${count(treatmentsCount)}</b>
          </span>

          <span>
            ${tx('teethCount')}:
            <b>${count(teethCount)}</b>
          </span>

          <span>
            ${tx('files')}:
            <b>${count(attachmentsCount)}</b>
          </span>

        </div>

      </button>
    </li>
  `;
}


// ============================================
// TREATMENT HISTORY
// ============================================


/**
 * Render completed dental treatments
 * GET /api/v1/dental-records/{id}/treatments
 */

function treatmentList(response) {
  const rows = rowsOf(response, [
    'treatments',
    'treatment_history',
    'items',
  ]);

  if (!rows) {
    return `
      <p class="dn-record-muted">
        ${tx('unavailable')}
      </p>
    `;
  }

  if (!rows.length) {
    return `
      <p class="dn-record-muted">
        ${tx('noTreatments')}
      </p>
    `;
  }

  return `
    <ul class="dn-record-sublist dn-treatment-history">

      ${rows.map((row, index) => {

        // Treatment title
        const title = String(
          row?.title ??
          row?.name ??
          row?.treatment_name ??
          `${tr('treatments')} ${index + 1}`
        ).trim();

        // Service
        const serviceName = String(
          row?.service?.name ?? ''
        ).trim();

        // Doctor
        const doctorName = String(
          row?.doctor?.name ??
          row?.doctor_name ??
          ''
        ).trim();

        // Tooth number
        const toothNumber =
          row?.tooth_number ??
          row?.tooth?.number ??
          null;

        // Actual treatment date
        const performedAt = when(
          row?.performed_at ??
          row?.completed_at ??
          row?.treatment_date
        );

        // Optional description
        const description = String(
          row?.description ?? ''
        ).trim();

        return `
          <li class="dn-treatment-history-item">

            <div class="dn-treatment-history-info">

              <strong>
                ${esc(title)}
              </strong>

              ${
                description
                  ? `
                    <p class="dn-treatment-history-description">
                      ${esc(description)}
                    </p>
                  `
                  : ''
              }

              <div class="dn-treatment-history-meta">

                ${
                  serviceName
                    ? `
                      <span>
                        ${tx('serviceLabel')}:
                        ${esc(serviceName)}
                      </span>
                    `
                    : ''
                }

                ${
                  toothNumber !== null
                    ? `
                      <span>
                        ${tx('tooth')}:
                        ${esc(toothNumber)}
                      </span>
                    `
                    : ''
                }

                ${
                  doctorName
                    ? `
                      <span>
                        ${tx('doctor')}:
                        ${esc(doctorName)}
                      </span>
                    `
                    : ''
                }

                ${
                  performedAt
                    ? `
                      <span>
                        ${tx('date')}:
                        ${esc(performedAt)}
                      </span>
                    `
                    : ''
                }

              </div>

            </div>

          </li>
        `;
      }).join('')}

    </ul>
  `;
}


// ============================================
// ODONTOGRAM
// FDI PERMANENT DENTITION
// ============================================

const permanentTeeth = [
  18, 17, 16, 15, 14, 13, 12, 11,
  21, 22, 23, 24, 25, 26, 27, 28,
  48, 47, 46, 45, 44, 43, 42, 41,
  31, 32, 33, 34, 35, 36, 37, 38,
];


function toothState(row) {
  const status = String(
    row?.tooth_status ??
    row?.status ??
    row?.condition ??
    ''
  ).trim().toLowerCase();

  if ([
    'healthy',
    'sound',
    'normal',
  ].includes(status)) {
    return 'healthy';
  }

  if ([
    'treated',
    'restored',
    'filled',
    'filling',
    'crown',
    'root_canal',
    'implant',
  ].includes(status)) {
    return 'treated';
  }

  if ([
    'caries',
    'decay',
    'needs_treatment',
    'problem',
    'fractured',
    'infected',
  ].includes(status)) {
    return 'attention';
  }

  if ([
    'missing',
    'extracted',
    'absent',
  ].includes(status)) {
    return 'missing';
  }

  return 'unknown';
}



function odontogram(response) {
  const rows = rowsOf(response, [
    'teeth',
    'odontogram',
    'tooth_statuses',
  ]);

  if (!rows) {
    return `
      <p class="dn-record-muted">
        ${tx('unavailable')}
      </p>
    `;
  }

  if (!rows.length) {
    return `
      <p class="dn-record-muted">
        ${tx('noTeeth')}
      </p>
    `;
  }

  const teethMap = new Map();

  for (const row of rows) {
    const number = Number(
      row?.tooth_number ?? row?.number
    );

    if (
      Number.isSafeInteger(number) &&
      number > 0
    ) {
      teethMap.set(number, row);
    }
  }

  function renderTooth(number) {
    const tooth = teethMap.get(number);
    const state = tooth
      ? toothState(tooth)
      : 'unknown';

    const rawStatus = tooth
      ? String(
          tooth.tooth_status ??
          tooth.status ??
          tooth.condition ??
          tr('noData')
        )
      : tr('noData');

    const statusLabel = {
      caries: tr('caries'),
      crown: tr('crown'),
      filled: tr('filled'),
      healthy: tr('healthy'),
      missing: tr('missing'),
      treated: tr('treated'),
    }[rawStatus.toLowerCase()] ?? rawStatus;

    const surfaces = Array.isArray(tooth?.surfaces)
      ? tooth.surfaces.filter(
          value => typeof value === 'string'
        )
      : [];

    const label = [
      `${tr('tooth')} ${number}`,
      statusLabel,
      surfaces.length
        ? surfaces.join(', ')
        : '',
    ].filter(Boolean).join(' · ');

    return `
      <span
        class="dn-record-tooth is-${state}"
        title="${esc(label)}"
        aria-label="${esc(label)}"
      >
        ${number}
      </span>
    `;
  }

  const upper = permanentTeeth.slice(0, 16);
  const lower = permanentTeeth.slice(16);

  const extras = [...teethMap.keys()]
    .filter(
      number => !permanentTeeth.includes(number)
    )
    .sort((a, b) => a - b);

  return `
    <div class="dn-record-jaw">
      <strong>${tx('upper')}</strong>

      <div class="dn-record-teeth">
        ${upper.map(renderTooth).join('')}
      </div>
    </div>

    <div class="dn-record-jaw">
      <strong>${tx('lower')}</strong>

      <div class="dn-record-teeth">
        ${lower.map(renderTooth).join('')}
      </div>
    </div>

    ${
      extras.length
        ? `
          <div class="dn-record-jaw">
            <strong>${tx('otherTeeth')}</strong>

            <div class="dn-record-teeth">
              ${extras.map(renderTooth).join('')}
            </div>
          </div>
        `
        : ''
    }

    <p class="dn-record-muted">
      ${tx('unknownTeethNote')}
    </p>
  `;
}

// ============================================
// ATTACHMENTS
// ============================================


function formatFileSize(bytes) {
  if (
    bytes === null ||
    bytes === undefined
  ) {
    return '';
  }

  const size = Number(bytes);

  if (!Number.isFinite(size) || size < 0) {
    return '';
  }

  if (size < 1024) {
    return `${size} B`;
  }

  if (size < 1024 * 1024) {
    return `${(size / 1024).toFixed(1)} KB`;
  }

  return `${(size / (1024 * 1024)).toFixed(2)} MB`;
}

function attachmentList(response) {
  const rows = rowsOf(response, [
    'attachments',
    'documents',
    'files',
  ]);

  if (!rows) {
    return `
      <p class="dn-record-muted">
        ${tx('unavailable')}
      </p>
    `;
  }

  if (!rows.length) {
    return `
      <p class="dn-record-muted">
        ${tx('noFiles')}
      </p>
    `;
  }

  const attachments = rows.filter(row =>
    goodId(row?.id ?? row?.attachment_id)
  );

  if (!attachments.length) {
    return `
      <p class="dn-record-muted">
        ${tx('noFiles')}
      </p>
    `;
  }

  return `
    <ul class="dn-record-sublist">

      ${attachments.map(row => {
        const id = Number(
          row.id ?? row.attachment_id
        );

        const title = String(
          row.title ??
          row.original_name ??
          row.file_name ??
          `Attachment #${id}`
        );

        const filename = String(
          row.original_name ??
          row.file_name ??
          ''
        );

        const type = String(
          row.attachment_type ??
          ''
        ).toLowerCase();

        const typeLabel = {
          xray: tr('xray'),
          radiography: tr('xray'),
          image: tr('image'),
          document: tr('document'),
        }[type] ?? type;

        const fileSize = formatFileSize(
          row.file_size
        );

        const uploadedAt = when(
          row.created_at
        );

        const metadata = [
          typeLabel,
          fileSize,
          uploadedAt,
        ].filter(Boolean).join(' · ');

        return `
          <li class="dn-record-attachment">

            <div class="dn-record-attachment-info">

              <strong>
                ${esc(title)}
              </strong>

              ${
                filename && filename !== title
                  ? `
                    <small>
                      ${esc(filename)}
                    </small>
                  `
                  : ''
              }

              ${
                metadata
                  ? `
                    <small>
                      ${esc(metadata)}
                    </small>
                  `
                  : ''
              }

            </div>

            <div class="dn-record-file-actions">

              <button
                type="button"
                data-record-view="${id}"
              >
                ${tx('view')}
              </button>

              <button
                type="button"
                data-record-download="${id}"
              >
                ${tx('download')}
              </button>

            </div>

          </li>
        `;
      }).join('')}

    </ul>
  `;
}


// ============================================
// COMPONENT HTML
// ============================================

export function dashboardDentalRecordsHTML() {
  return `
    <div
      class="dn-records"
      data-records-root
    >

      <div class="dn-records-layout">

        <section
          class="dn-records-surface"
          aria-label="${tx('record')}"
        >

          <div class="dn-records-heading">

            <h2>${tx('record')}</h2>

            <button
              type="button"
              data-records-refresh
            >
              ${tx('retry')}
            </button>

          </div>

          <p
            class="dn-record-muted"
            data-records-list-status
          >
            ${tx('loading')}
          </p>

          <ul
            class="dn-record-list"
            data-records-list
          ></ul>

          <div
            class="dn-record-pager"
            data-records-pager
            hidden
          >

            <button type="button" data-records-prev>
              ${tx('prev')}
            </button>

            <span data-records-page></span>

            <button type="button" data-records-next>
              ${tx('next')}
            </button>

          </div>

        </section>

        <section
          class="dn-records-surface"
          aria-label="${tx('details')}"
        >

          <h2>${tx('details')}</h2>

          <div data-records-detail>

            <p class="dn-record-muted">
              ${tx('select')}
            </p>

          </div>

        </section>

      </div>

      <!-- SECURE FILE PREVIEW -->

      <div
        class="dn-record-preview"
        data-record-preview
        hidden
        role="dialog"
        aria-modal="true"
        aria-label="${tx('view')}"
      >

        <div class="dn-record-preview-inner">

          <button
            type="button"
            data-record-preview-close
          >
            ${tx('close')}
          </button>

          <div data-record-preview-body></div>

        </div>

      </div>

    </div>
  `;
}

// ============================================
// INITIALIZATION
// ============================================

export function initDashboardDentalRecords(
  dashboardRoot,
  signal
) {
  const root = dashboardRoot.querySelector(
    '[data-records-root]'
  );

  if (!root) {
    return {
      load() {},
      cleanup() {},
    };
  }

  const $ = selector =>
    root.querySelector(selector);

  const list = $('[data-records-list]');
  const listStatus = $('[data-records-list-status]');
  const detail = $('[data-records-detail]');
  const pager = $('[data-records-pager]');
  const preview = $('[data-record-preview]');
  const previewBody = $('[data-record-preview-body]');

  let loaded = false;
  let page = 1;
  let selectedRecord = null;

  let listCtrl = null;
  let detailCtrl = null;
  let fileCtrl = null;
  let fileUrl = null;

  const alive = () =>
    !signal.aborted && root.isConnected;

  // ==========================================
  // FILE PREVIEW
  // ==========================================

  function closePreview() {
    preview.hidden = true;
    previewBody.replaceChildren();

    if (fileUrl) {
      URL.revokeObjectURL(fileUrl);
    }

    fileUrl = null;
  }

  function cancelDetail() {
    detailCtrl?.abort();
    fileCtrl?.abort();
    closePreview();

    selectedRecord = null;
  }

  // ==========================================
  // LOAD RECORDS
  // ==========================================

  async function loadList(number = 1) {
    if (!alive()) return;

    loaded = true;

    listCtrl?.abort();
    cancelDetail();

    listCtrl = new AbortController();
    const local = listCtrl;

    page = number;

    list.innerHTML = '';
    listStatus.hidden = false;
    listStatus.textContent = tr('loading');
    pager.hidden = true;

    detail.innerHTML = `
      <p class="dn-record-muted">
        ${tx('select')}
      </p>
    `;

    try {
      const response = await dentalRecordApi.list(
        page,
        local.signal
      );

      if (
        !alive() ||
        local.signal.aborted
      ) {
        return;
      }

      const rows = rowsOf(response, [
        'dental_records',
        'records',
      ]);

      if (!rows) {
        throw new Error(
          'Unsupported records response shape'
        );
      }

      list.innerHTML =
        rows.map(listCard).join('');

      listStatus.hidden = rows.length > 0;

      if (!rows.length) {
        listStatus.textContent = tr('empty');
      }

      const pagination = paginationOf(response);

      page = pagination.current;

      pager.hidden = !(
        pagination.previous ||
        pagination.next
      );

      $('[data-records-page]').textContent =
        `${tr('page')} ${page}`;

      $('[data-records-prev]').disabled =
        !pagination.previous;

      $('[data-records-next]').disabled =
        !pagination.next;

    } catch (error) {
      if (
        !alive() ||
        local.signal.aborted
      ) {
        return;
      }

      console.error(
        'Dental records:',
        error
      );

      listStatus.textContent = tr('error');
    }
  }

  // ==========================================
  // LOAD RECORD DETAILS
  // ==========================================

  async function loadDetail(id) {
    if (!alive() || !goodId(id)) return;

    cancelDetail();

    detailCtrl = new AbortController();
    const local = detailCtrl;

    selectedRecord = Number(id);

    root
      .querySelectorAll('[data-record-id]')
      .forEach(button => {
        button.classList.toggle(
          'is-active',
          Number(button.dataset.recordId) ===
            selectedRecord
        );
      });

    detail.innerHTML = `
      <p class="dn-record-muted">
        ${tx('loading')}
      </p>
    `;

    try {
      const response = await dentalRecordApi.show(
        id,
        local.signal
      );

      if (
        !alive() ||
        local.signal.aborted
      ) {
        return;
      }

      const record = detailOf(response);

      if (
        record.id &&
        Number(record.id) !== Number(id)
      ) {
        throw new Error('Record ID mismatch');
      }

      const doctor =
        nameOf(
          record.doctor ??
          record.staff ??
          record.dentist
        ) ||
        record.doctor_name;

      
const diagnosis =
  record.patient_diagnosis ??
  record.public_diagnosis ??
  record.diagnosis;

const complaint = record.chief_complaint;
const examination = record.examination;
const patientNotes = record.patient_notes;

const examinedAt = when(
  record.examined_at ??
  record.visit_date ??
  record.examination_date ??
  record.created_at
);

const summary =
  record.patient_summary ??
  record.public_summary;

const recordStatus = {
  finalized: tr('finalized'),
  draft: tr('draft'),
}[String(record.status || '').toLowerCase()]
  ?? record.status;

detail.innerHTML = `
  <h3>
    ${esc(titleOf(record))}
  </h3>

  <dl class="dn-record-meta">

    ${infoPair('doctor', doctor)}
    ${infoPair('date', examinedAt)}
    ${infoPair('status', recordStatus)}
    ${infoPair('chiefComplaint', complaint)}
    ${infoPair('examination', examination)}
    ${infoPair('diagnosis', diagnosis)}
    ${infoPair('patientNotes', patientNotes)}

  </dl>

  ${
    summary
      ? `
        <p class="dn-record-summary">
          ${esc(summary)}
        </p>
      `
      : ''
  }

  <div class="dn-record-block">
    <h3>${tx('treatments')}</h3>

    <div data-record-treatments>
      ${tx('loading')}
    </div>
  </div>

  <div class="dn-record-block">
    <h3>${tx('odontogram')}</h3>

    <div data-record-odontogram>
      ${tx('loading')}
    </div>
  </div>

  <div class="dn-record-block">
    <h3>${tx('files')}</h3>

    <div data-record-attachments>
      ${tx('loading')}
    </div>
  </div>
`;


      // Load treatments, teeth and files independently.
      const tasks = [
        [
          dentalRecordApi.treatments(
            id,
            local.signal
          ),
          '[data-record-treatments]',
          treatmentList,
        ],

        [
          dentalRecordApi.odontogram(
            id,
            local.signal
          ),
          '[data-record-odontogram]',
          odontogram,
        ],

        [
          dentalRecordApi.attachments(
            id,
            local.signal
          ),
          '[data-record-attachments]',
          attachmentList,
        ],
      ];

      tasks.forEach(
        ([promise, selector, render]) => {
          Promise.resolve(promise)
            .then(data => {
              if (
                alive() &&
                !local.signal.aborted
              ) {
                $(selector).innerHTML =
                  render(data);
              }
            })
            .catch(error => {
              if (
                !alive() ||
                local.signal.aborted
              ) {
                return;
              }

              console.error(
                selector,
                error
              );

              $(selector).textContent =
                tr('unavailable');
            });
        }
      );

    } catch (error) {
      if (
        !alive() ||
        local.signal.aborted
      ) {
        return;
      }

      console.error(
        'Dental record details:',
        error
      );

      detail.innerHTML = `
        <p class="dn-record-muted">
          ${tx('error')}
        </p>
      `;
    }
  }

  // ==========================================
  // VIEW / DOWNLOAD ATTACHMENT
  // ==========================================

  async function fileAction(
    attachmentId,
    mode
  ) {
    if (
      !goodId(selectedRecord) ||
      !goodId(attachmentId)
    ) {
      return;
    }

    fileCtrl?.abort();
    fileCtrl = new AbortController();

    const local = fileCtrl;

    try {
      const { blob, filename } =
        await dentalRecordApi.attachmentFile(
          selectedRecord,
          attachmentId,
          mode,
          local.signal
        );

      if (
        !alive() ||
        local.signal.aborted
      ) {
        return;
      }

      const url = URL.createObjectURL(blob);

      if (mode === 'download') {
        const link = document.createElement('a');

        link.href = url;
        link.download = filename;

        document.body.append(link);

        link.click();
        link.remove();

        setTimeout(
          () => URL.revokeObjectURL(url),
          30000
        );

        return;
      }

      closePreview();

      if (blob.type === 'application/pdf') {
        previewBody.innerHTML = `
          <iframe
            title="${tx('view')}"
            style="width:100%;height:70vh;border:0"
          ></iframe>
        `;

        previewBody.querySelector('iframe').src =
          url;

      } else if (
        [
          'image/png',
          'image/jpeg',
          'image/gif',
          'image/webp',
        ].includes(blob.type)
      ) {
        previewBody.innerHTML = `
          <img
            alt="${tx('view')}"
            style="max-width:100%;max-height:70vh;object-fit:contain"
          >
        `;

        previewBody.querySelector('img').src =
          url;

      } else {
        URL.revokeObjectURL(url);
        window.alert(tr('previewError'));
        return;
      }

      fileUrl = url;
      preview.hidden = false;

      $('[data-record-preview-close]').focus();

    } catch (error) {
      if (local.signal.aborted) return;

      console.error(
        'Dental attachment:',
        error
      );

      window.alert(
        error.message ||
        tr('requestError')
      );
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

      if (
        !button ||
        !root.contains(button)
      ) {
        return;
      }

      if (
        button.hasAttribute(
          'data-records-refresh'
        )
      ) {
        void loadList(1);

      } else if (
        button.hasAttribute(
          'data-record-id'
        )
      ) {
        void loadDetail(
          Number(button.dataset.recordId)
        );

      } else if (
        button.hasAttribute(
          'data-records-prev'
        ) &&
        page > 1
      ) {
        void loadList(page - 1);

      } else if (
        button.hasAttribute(
          'data-records-next'
        )
      ) {
        void loadList(page + 1);

      } else if (
        button.hasAttribute(
          'data-record-view'
        )
      ) {
        void fileAction(
          Number(button.dataset.recordView),
          'view'
        );

      } else if (
        button.hasAttribute(
          'data-record-download'
        )
      ) {
        void fileAction(
          Number(button.dataset.recordDownload),
          'download'
        );

      } else if (
        button.hasAttribute(
          'data-record-preview-close'
        )
      ) {
        closePreview();
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
      listCtrl?.abort();
      cancelDetail();
    },
  };
}
