/**
 * Dentistry — Dashboard booking UI
 * Real GET list/detail + POST cancel/reschedule. No demo bookings.
 * Creation uses bookingApi.create() in the booking flow, once the doctor / slot
 * selection screen is connected to its own availability endpoints.
 */
import { t, getLanguage } from '../code/i18n.js';
import { bookingApi } from '../code/bookingApi.js';
import { bookingWizardHTML, initBookingWizard } from './DashboardBookingWizard.js';

const L = () => getLanguage() === 'fa' ? 'fa' : 'en';
const phrases = {
  en: {
    newBooking:'Book a new appointment', loading:'Loading your appointments…', retry:'Try again',
    emptyTitle:'No appointments yet', emptyText:'When you book a dental visit, it will appear here.',
    loadError:'Could not load your appointments. Check your connection and try again.',
    detailError:'Could not load the appointment details.',
    appointment:'Appointment', details:'Appointment details',
    status:'Status', date:'Date', time:'Time', doctor:'Doctor', services:'Services', notes:'Notes',
    bookingNumber:'Booking', choose:'Choose an appointment to view its details.',
    view:'View details', cancel:'Cancel appointment', reschedule:'Change date or time',
    cancelReason:'Reason for cancellation', reasonPlaceholder:'Tell us why you need to cancel',
    confirmCancel:'Confirm cancellation', cancelConfirm:'Are you sure you want to cancel this appointment?',
    newDate:'New date', newTime:'New time', confirmReschedule:'Confirm change',
    back:'Back', saving:'Saving…', cancelled:'Appointment cancelled.', changed:'Appointment rescheduled.',
    actionError:'Could not update the appointment. Please try again.',
    pending:'Pending', confirmed:'Confirmed', completed:'Completed', cancelledStatus:'Cancelled',
    awaitingPayment:'Awaiting payment', unknown:'Status unavailable',
    noServices:'Service details unavailable', noDoctor:'Not assigned', noTime:'Time not available',
    listSubtitle:'Select an appointment to view its details or manage it.',
    loadMore:'Appointments', page:'Page', previous:'Previous', next:'Next', partial:'Some bookings may be on other pages; overview totals are not shown.', nextDate:'Next appointment', at:'at',
    upcoming:'Upcoming', available:'—', unsupported:'The clinic may restrict cancellations or rescheduling; its server validates every request.', bookingCreated:'Booking submitted. Refreshing your appointments…',
  },
  fa: {
    newBooking:'رزرو نوبت جدید', loading:'در حال دریافت نوبت‌های شما…', retry:'تلاش مجدد',
    emptyTitle:'هنوز نوبتی ندارید', emptyText:'بعد از ثبت رزرو، نوبت شما در این قسمت نمایش داده می‌شود.',
    loadError:'دریافت نوبت‌ها ممکن نشد. اتصال اینترنت را بررسی کنید و دوباره تلاش کنید.',
    detailError:'دریافت جزئیات نوبت ممکن نشد.',
    appointment:'نوبت', details:'جزئیات نوبت',
    status:'وضعیت', date:'تاریخ', time:'ساعت', doctor:'پزشک', services:'خدمات', notes:'یادداشت',
    bookingNumber:'شماره رزرو', choose:'برای مشاهده و مدیریت، یک نوبت را انتخاب کنید.',
    view:'مشاهده جزئیات', cancel:'لغو نوبت', reschedule:'تغییر تاریخ یا ساعت',
    cancelReason:'دلیل لغو', reasonPlaceholder:'دلیل لغو نوبت را بنویسید',
    confirmCancel:'تأیید لغو نوبت', cancelConfirm:'آیا از لغو این نوبت مطمئن هستید؟',
    newDate:'تاریخ جدید', newTime:'ساعت جدید', confirmReschedule:'تأیید تغییر زمان',
    back:'بازگشت', saving:'در حال ثبت…', cancelled:'نوبت لغو شد.', changed:'زمان نوبت تغییر کرد.',
    actionError:'ویرایش نوبت انجام نشد. لطفاً دوباره تلاش کنید.',
    pending:'در انتظار تأیید', confirmed:'تأییدشده', completed:'انجام‌شده', cancelledStatus:'لغوشده',
    awaitingPayment:'در انتظار پرداخت', unknown:'وضعیت نامشخص',
    noServices:'جزئیات خدمت موجود نیست', noDoctor:'تعیین نشده', noTime:'زمان مشخص نیست',
    listSubtitle:'برای نمایش جزئیات یا مدیریت، یک نوبت را انتخاب کنید.',
    loadMore:'نوبت‌ها', page:'صفحه', previous:'قبلی', next:'بعدی', partial:'ممکن است نوبت‌های دیگری در صفحات بعد وجود داشته باشد؛ مجموع در نمای کلی نشان داده نمی‌شود.', nextDate:'نوبت بعدی', at:'ساعت',
    upcoming:'آینده', available:'—', unsupported:'امکان لغو یا تغییر زمان ممکن است محدود باشد؛ اعتبارسنجی نهایی در سرور انجام می‌شود.', bookingCreated:'درخواست رزرو ثبت شد. در حال به‌روزرسانی نوبت‌ها…',
  },
};
function tr(key) {
  const value = t(`dashboard.booking.${key}`);
  return value && value !== `dashboard.booking.${key}` ? value : phrases[L()][key] ?? key;
}
const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]);
const tx = key => esc(tr(key));
const validId = id => Number.isSafeInteger(Number(id)) && Number(id) > 0;
function unwrapList(response) {
  const payload = response?.data ?? response;
  if (Array.isArray(payload)) return payload;
  for (const data of [payload?.data, payload?.bookings, payload?.bookings?.data, payload?.items, response?.bookings]) {
    if (Array.isArray(data)) return data;
  }
  return [];
}
function pagination(response) {
  const payload = response?.data ?? response;
  const meta = payload?.meta ?? response?.meta ?? payload;
  const current = Number(meta?.current_page ?? 1);
  const last = Number(meta?.last_page ?? 1);
  const linkNext = payload?.next_page_url ?? payload?.links?.next ?? response?.links?.next;
  const linkPrev = payload?.prev_page_url ?? payload?.links?.prev ?? response?.links?.prev;
  return {
    current: Number.isFinite(current) && current > 0 ? current : 1,
    last: Number.isFinite(last) && last > 0 ? last : 1,
    partial: last > 1 || !!linkNext || !!linkPrev,
    next: last > 1 ? current < last : Boolean(linkNext),
    prev: current > 1 || Boolean(linkPrev),
  };
}
function unwrapDetail(response) {
  const payload = response?.data ?? response;
  return payload?.booking ?? payload?.data?.booking ?? payload?.data ?? payload;
}
function validDay(value) { return /^\d{4}-\d{2}-\d{2}$/.test(String(value || '').slice(0,10)); }
function dateValue(value) { const s = String(value ?? '').slice(0,10); return validDay(s) ? s : ''; }
function timeValue(value) { const s = String(value ?? '').trim(); return /^\d{2}:\d{2}/.test(s) ? s.slice(0,5) : ''; }
function formatDate(value) {
  const s = dateValue(value);
  if (!s) return '—';
  const date = new Date(`${s}T12:00:00Z`);
  return Number.isNaN(date.getTime()) ? esc(s) : esc(new Intl.DateTimeFormat(L()==='fa' ? 'fa-IR' : 'en-US', {dateStyle:'medium', timeZone:'UTC'}).format(date));
}
function statusLabel(status) {
  const key = String(status ?? '').toLowerCase();
  return ({ pending:'pending', awaiting_payment:'awaitingPayment', confirmed:'confirmed', completed:'completed', cancelled:'cancelledStatus', canceled:'cancelledStatus' })[key]
    ? tr(({ pending:'pending', awaiting_payment:'awaitingPayment', confirmed:'confirmed', completed:'completed', cancelled:'cancelledStatus', canceled:'cancelledStatus' })[key])
    : key ? key.replace(/_/g,' ') : tr('unknown');
}
function normalized(item) {
  if (!item || typeof item !== 'object' || !validId(item.id)) return null;
  const services = [item.booking_services, item.bookingServices, item.services, item.items].find(Array.isArray) ?? [];
  return {
    id: Number(item.id), date: dateValue(item.booking_date ?? item.date),
    start: timeValue(item.start_time ?? services[0]?.start_time),
    end: timeValue(item.end_time ?? services[0]?.end_time),
    status: String(item.status ?? '').toLowerCase(),
    notes: item.notes ?? '',
    services: services.map(s => ({name:s?.service?.name ?? s?.service?.title ?? s?.name ?? s?.title ?? '', staff:s?.staff?.name ?? s?.doctor?.name ?? ''})),
    doctor: item.staff?.name ?? item.doctor?.name ?? services[0]?.staff?.name ?? services[0]?.doctor?.name ?? '',
  };
}
function serviceText(b) {
  const names = b.services.map(s => s.name).filter(Boolean);
  return names.length ? names.join(' • ') : tr('appointment') + ' #' + b.id;
}
function clinicNow() {
  const parts = new Intl.DateTimeFormat('en-GB', {timeZone:'Asia/Tehran',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(new Date());
  const p = Object.fromEntries(parts.map(({type,value})=>[type,value]));
  return {date:`${p.year}-${p.month}-${p.day}`, time:`${p.hour}:${p.minute}`};
}
const closedStatuses = new Set(['cancelled','canceled','completed','rejected','expired','no_show']);
function upcoming(b) {
  if (closedStatuses.has(b.status) || !b.date) return false;
  const now = clinicNow();
  return b.date > now.date || (b.date === now.date && (!b.start || b.start >= now.time));
}
function canModify(b) {
  return !closedStatuses.has(b.status) && upcoming(b);
}
function sortBooking(a,b) {
  return `${a.date || '9999-99-99'}T${a.start || '99:99'}`.localeCompare(`${b.date || '9999-99-99'}T${b.start || '99:99'}`);
}
function listRow(b) {
  return `<li class="dn-booking-list-item"><button type="button" class="dn-booking-row" data-booking-open="${b.id}" aria-label="${tx('view')}: ${esc(serviceText(b))}">
    <span class="dn-booking-date"><strong>${formatDate(b.date)}</strong><small>${esc(b.start || tr('noTime'))}</small></span>
    <span class="dn-booking-desc"><strong>${esc(serviceText(b))}</strong><small>#${b.id} · ${esc(statusLabel(b.status))}</small></span>
    <span class="dn-booking-row-arrow" aria-hidden="true">→</span>
  </button></li>`;
}
function detailMarkup(b) {
  const editable = canModify(b);
  const services = b.services.map(s=>s.name).filter(Boolean).join(' • ');
  return `<div class="dn-booking-detail-head"><div><span class="dn-eyebrow">${tx('details')}</span><h2>${tx('bookingNumber')} #${b.id}</h2></div><span class="dn-booking-pill">${esc(statusLabel(b.status))}</span></div>
    <dl class="dn-booking-details">
      <div><dt>${tx('date')}</dt><dd>${formatDate(b.date)}</dd></div>
      <div><dt>${tx('time')}</dt><dd>${esc(b.start || tr('noTime'))}${b.end ? ' – '+esc(b.end) : ''}</dd></div>
      <div><dt>${tx('services')}</dt><dd>${esc(services || tr('noServices'))}</dd></div>
      <div><dt>${tx('doctor')}</dt><dd>${esc(b.doctor || tr('noDoctor'))}</dd></div>
      <div><dt>${tx('status')}</dt><dd>${esc(statusLabel(b.status))}</dd></div>
      ${b.notes ? `<div><dt>${tx('notes')}</dt><dd>${esc(b.notes)}</dd></div>` : ''}
    </dl>
    ${editable ? `<div class="dn-booking-actions"><button type="button" class="dn-booking-secondary" data-booking-toggle="reschedule">${tx('reschedule')}</button><button type="button" class="dn-booking-danger-link" data-booking-toggle="cancel">${tx('cancel')}</button></div>
      <form class="dn-booking-form" data-booking-reschedule hidden>
        <label>${tx('newDate')}<input type="date" name="booking_date" value="${esc(b.date)}" required/></label>
        <label>${tx('newTime')}<input type="time" name="start_time" value="${esc(b.start)}" required/></label>
        <div class="dn-booking-form-buttons"><button type="submit" class="dn-button dn-button-primary">${tx('confirmReschedule')}</button><button type="button" data-booking-close-form>${tx('back')}</button></div>
      </form>
      <form class="dn-booking-form" data-booking-cancel hidden>
        <label>${tx('cancelReason')}<textarea name="reason" rows="3" required maxlength="500" placeholder="${tx('reasonPlaceholder')}"></textarea></label>
        <label class="dn-booking-check"><input type="checkbox" name="confirm" required/><span>${tx('cancelConfirm')}</span></label>
        <div class="dn-booking-form-buttons"><button type="submit" class="dn-booking-danger">${tx('confirmCancel')}</button><button type="button" data-booking-close-form>${tx('back')}</button></div>
      </form>
      <p class="dn-booking-policy">${tx('unsupported')}</p>` : ''}`;
}

export function dashboardAppointmentsHTML() {
  return `<div class="dn-booking-header"><p>${tx('listSubtitle')}</p><button type="button" class="dn-button dn-button-primary" data-booking-start>${tx('newBooking')} ↗</button></div>
    ${bookingWizardHTML()}
    <p data-booking-notice class="dn-booking-notice" role="status" aria-live="polite" hidden></p>
    <div data-bookings-loading class="dn-booking-message">${tx('loading')}</div>
    <div data-bookings-error class="dn-booking-message dn-booking-error" hidden><p>${tx('loadError')}</p><button type="button" class="dn-booking-secondary" data-bookings-retry>${tx('retry')}</button></div>
    <div data-bookings-empty hidden>${`<div class="dn-empty-state"><div class="dn-empty-visual"><span aria-hidden="true">${''}</span></div><h2>${tx('emptyTitle')}</h2><p>${tx('emptyText')}</p><button type="button" class="dn-button dn-button-primary" data-booking-start>${tx('newBooking')}</button></div>`}</div>
    <div data-bookings-content class="dn-booking-columns" hidden><section class="dn-booking-list-card" aria-label="${tx('loadMore')}"><ul data-booking-list class="dn-booking-list"></ul><div class="dn-booking-pagination" data-booking-pagination hidden><button type="button" data-booking-page="prev">${tx('previous')}</button><span data-booking-page-label></span><button type="button" data-booking-page="next">${tx('next')}</button></div></section><section class="dn-booking-detail-card" data-booking-detail><p class="dn-booking-hint">${tx('choose')}</p></section></div>`;
}

export function initDashboardBookings(root, signal) {
  const $ = selector => root.querySelector(selector);
  const loading = $('[data-bookings-loading]');
  const error = $('[data-bookings-error]');
  const empty = $('[data-bookings-empty]');
  const content = $('[data-bookings-content]');
  const list = $('[data-booking-list]');
  const detail = $('[data-booking-detail]');
  const notice = $('[data-booking-notice]');
  const paging = $('[data-booking-pagination]');
  const pageLabel = $('[data-booking-page-label]');
  let bookings = [];
  let currentId = null;
  let currentPage = 1;
  let pageInfo = {current:1,last:1,partial:false,next:false,prev:false};
  let listRun = 0;
  let detailRun = 0;
  let busy = false;

  const active = () => !signal.aborted && root.isConnected;
  function message(text,type='info') { notice.textContent = text; notice.dataset.state=type; notice.hidden=false; }
  function setDetailsPlaceholder() { detail.innerHTML = `<p class="dn-booking-hint">${tx('choose')}</p>`; }
  function updateOverview() {
    // Never present a partial page of Laravel pagination as total history.
    if (pageInfo.partial) return;
    const activeBookings = bookings.filter(upcoming).sort(sortBooking);
    const count = $('[data-dashboard-stat="upcoming"]');
    if (count) {
      count.textContent = String(activeBookings.length);
      count.removeAttribute('aria-label');
      const small = count.parentElement?.querySelector('small');
      if (small) small.textContent = tr('upcoming');
    }
    const title = $('[data-dashboard-next-title]');
    const description = $('[data-dashboard-next-description]');
    if (activeBookings.length) {
      const next = activeBookings[0];
      if (title) title.textContent = serviceText(next);
      if (description) description.textContent = `${formatDate(next.date)} · ${next.start || tr('noTime')}`;
    } else {
      if (title) title.textContent = t('dashboard.noNextVisit') !== 'dashboard.noNextVisit' ? t('dashboard.noNextVisit') : (L()==='fa'?'هنوز نوبت آینده‌ای ثبت نشده':'No upcoming appointment yet');
      if (description) description.textContent = t('dashboard.nextVisitHint') !== 'dashboard.nextVisitHint' ? t('dashboard.nextVisitHint') : (L()==='fa'?'پس از رزرو نوبت، جزئیات آن اینجا نمایش داده می‌شود.':'When you book a visit, the details will appear here.');
    }
  }
  async function loadList() {
    const run = ++listRun;
    detailRun++; // Invalidate any detail request from the previously shown list.
    loading.hidden = false; error.hidden = true; empty.hidden = true; content.hidden = true;
    notice.hidden = true;
    try {
      const response = await bookingApi.list(signal,currentPage);
      if (!active() || run!==listRun) return;
      bookings = unwrapList(response).map(normalized).filter(Boolean).sort(sortBooking);
      pageInfo = pagination(response);
      loading.hidden = true;
      updateOverview();
      if (!bookings.length) {
        empty.hidden = currentPage !== 1;
        if (currentPage !== 1) { currentPage = 1; void loadList(); }
        return;
      }
      list.innerHTML = bookings.map(listRow).join('');
      content.hidden = false;
      paging.hidden = !pageInfo.partial;
      pageLabel.textContent = `${tr('page')} ${pageInfo.current}${pageInfo.last>1 ? ` / ${pageInfo.last}` : ''}`;
      paging.querySelector('[data-booking-page="prev"]').disabled = !pageInfo.prev;
      paging.querySelector('[data-booking-page="next"]').disabled = !pageInfo.next;
      if (pageInfo.partial) {
        const count = $('[data-dashboard-stat="upcoming"]');
        if (count) { count.textContent = '—'; count.parentElement?.querySelector('small') && (count.parentElement.querySelector('small').textContent = tr('partial')); }
        const title=$('[data-dashboard-next-title]');
        const description=$('[data-dashboard-next-description]');
        if (title) title.textContent = '—';
        if (description) description.textContent = tr('partial');
      }
      if (currentId && bookings.some(b=>b.id===currentId)) {
        await open(currentId);
      } else {
        currentId=null;
        setDetailsPlaceholder();
      }
    } catch (e) {
      if (!active() || run!==listRun) return;
      console.error('Booking list API:',e);
      loading.hidden=true; error.hidden=false;
      // Important: do NOT replace a failed API call with fake counts or visits.
    }
  }
  async function open(id) {
    if (!validId(id) || !active()) return;
    const run = ++detailRun;
    currentId=Number(id);
    detail.innerHTML=`<p class="dn-booking-hint">${tx('loading')}</p>`;
    try {
      const response = await bookingApi.show(id,signal);
      if (!active() || run!==detailRun) return;
      const b = normalized(unwrapDetail(response));
      if (!b || b.id!==Number(id)) throw new Error('Invalid booking detail response');
      detail.innerHTML=detailMarkup(b);
    } catch (e) {
      if (!active() || run!==detailRun) return;
      console.error('Booking detail API:',e);
      detail.innerHTML=`<p class="dn-booking-hint dn-booking-error">${tx('detailError')}</p>`;
    }
  }
  function toggleForm(which) {
    const panel = which === 'cancel' ? detail.querySelector('[data-booking-cancel]') : detail.querySelector('[data-booking-reschedule]');
    for (const form of detail.querySelectorAll('.dn-booking-form')) form.hidden = form!==panel;
    panel?.querySelector('textarea,input')?.focus();
  }
  async function perform(form,type) {
    if (busy || !currentId) return;
    if (!form.reportValidity()) return;
    busy=true;
    for (const btn of detail.querySelectorAll('button')) btn.disabled=true;
    message(tr('saving'));
    try {
      if (type==='cancel') {
        const reason = form.elements.namedItem('reason').value.trim();
        if (!reason) { message(tr('cancelReason'),'error'); return; }
        await bookingApi.cancel(currentId,reason,signal);
      } else {
        await bookingApi.reschedule(currentId, form.elements.namedItem('booking_date').value, form.elements.namedItem('start_time').value,signal);
      }
      if (!active()) return;
      const id = currentId;
      await loadList();
      if (active()) { message(tr(type==='cancel'?'cancelled':'changed'),'success'); await open(id); }
    } catch (e) {
      if (!active()) return;
      console.error('Booking change API:',e);
      const errText = (e?.errors && Object.values(e.errors).flat().join(' · ')) || e?.message;
      message(errText && typeof errText==='string' ? errText : tr('actionError'),'error');
    } finally {
      busy=false;
      if (active()) for(const btn of detail.querySelectorAll('button')) btn.disabled=false;
    }
  }
  root.addEventListener('click', event => {
    const retry=event.target.closest('[data-bookings-retry]');
    if (retry) { void loadList(); return; }
    const pageBtn=event.target.closest('[data-booking-page]');
    if (pageBtn && !busy) {
      const direction=pageBtn.dataset.bookingPage;
      if (direction === 'next' && pageInfo.next) currentPage += 1;
      else if (direction === 'prev' && pageInfo.prev) currentPage = Math.max(1,currentPage-1);
      else return;
      currentId=null;
      void loadList();
      return;
    }
    const btn=event.target.closest('[data-booking-open]');
    if (btn) { if (!busy) void open(btn.dataset.bookingOpen); return; }
    const toggle=event.target.closest('[data-booking-toggle]');
    if (toggle) { toggleForm(toggle.dataset.bookingToggle); return; }
    if (event.target.closest('[data-booking-close-form]')) { for (const f of detail.querySelectorAll('.dn-booking-form')) f.hidden=true; }
  }, {signal});
  root.addEventListener('submit', event => {
    const cancelForm=event.target.closest('[data-booking-cancel]');
    const rescheduleForm=event.target.closest('[data-booking-reschedule]');
    if (!cancelForm && !rescheduleForm) return;
    event.preventDefault();
    void perform(cancelForm || rescheduleForm,cancelForm?'cancel':'reschedule');
  }, {signal});
  const wizardCleanup = initBookingWizard(root, signal, async () => {
    currentPage=1;
    currentId=null;
    await loadList();
    if (active()) message(tr('bookingCreated'),'success');
  });
  void loadList();
  return () => { listRun++; detailRun++; if(typeof wizardCleanup==='function') wizardCleanup(); };
}
