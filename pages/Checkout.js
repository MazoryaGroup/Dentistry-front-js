import { dpIcon, demoNote, money } from '../components/PortalUI.js';
import { t } from '../code/i18n.js';

/** Fictional amounts for UI testing only — not clinic prices. */
const SAMPLE_SERVICES = {
  consultation: { label: 'Dental consultation', total: 650000, deposit: 150000, duration: '30 min' },
  cleaning: { label: 'Cleaning & prevention', total: 1400000, deposit: 350000, duration: '60 min' },
  whitening: { label: 'Teeth whitening consultation', total: 850000, deposit: 200000, duration: '45 min' },
};

function getCheckoutPreviewText(item, date, time, method) {
  const amount = money(method === 'deposit' ? item.deposit : item.total);
  if (t('Review completed — preview only') !== 'Review completed — preview only') {
    return `${t(item.label)} · ${date} · ${time}. ${method === 'deposit' ? 'بیعانه نمونه' : 'مبلغ نمونه قابل پرداخت در کلینیک'}: ${amount}. هیچ نوبت یا پرداختی ثبت نشده است.`;
  }
  return `${item.label} · ${date} · ${time}. Example ${method === 'deposit' ? 'deposit' : 'pay-at-clinic total'}: ${amount}. No reservation or payment was created.`;
}

export function Checkout() {
  return `<main class="dentistry-portal dp-checkout-page" data-portal-page="checkout">
    <div class="dp-checkout-container">
      <nav class="dp-checkout-trail" aria-label="Breadcrumb"><a href="/">Home</a>${dpIcon('arrow')}<a href="/dashboard">Patient portal</a>${dpIcon('arrow')}<strong>Checkout preview</strong></nav>
      ${demoNote('Prototype checkout: all dates, appointment slots and prices are examples. No booking is made, no payment is collected and no card details are requested.')}
      <div class="dp-checkout-heading"><div><span class="dp-eyebrow">APPOINTMENT CHECKOUT</span><h1>One step closer to<br><em>your best smile.</em></h1><p>Review the details below. The final appointment and payment will be confirmed only when connected to the clinic system.</p></div><div class="dp-checkout-steps" aria-label="Checkout progress"><span class="is-active">1 <small>Details</small></span><span>2 <small>Payment</small></span><span>3 <small>Confirmed</small></span></div></div>
      <div class="dp-checkout-grid"><div class="dp-checkout-form-area">
        <section class="dp-white-card dp-checkout-card"><div class="dp-checkout-card-heading"><span class="dp-num">01</span><div><h2>Appointment details</h2><p>Choose an illustrative service, date and time.</p></div></div>
          <div class="dp-form-grid"><label class="dp-field"><span>Dental service</span><span class="dp-input-wrap"><select name="service" id="dp-checkout-service"><option value="consultation">Dental consultation</option><option value="cleaning">Cleaning & prevention</option><option value="whitening">Teeth whitening consultation</option></select></span></label><label class="dp-field"><span>Provider</span><span class="dp-input-wrap"><input readonly value="Assigned by clinic (demo)" aria-label="Example provider"/></span></label><label class="dp-field"><span>Preferred date</span><span class="dp-input-wrap"><input type="date" id="dp-checkout-date" required /></span></label><label class="dp-field"><span>Preferred time</span><span class="dp-input-wrap"><select name="time" id="dp-checkout-time"><option value="10:30">10:30 AM (example)</option><option value="12:00">12:00 PM (example)</option><option value="15:30">3:30 PM (example)</option></select></span></label></div>
          <p class="dp-helptext">Time options are UI samples only — availability has not been checked.</p>
        </section>
        <section class="dp-white-card dp-checkout-card"><div class="dp-checkout-card-heading"><span class="dp-num">02</span><div><h2>Patient information</h2><p>Details for the appointment preview.</p></div></div>
          <form id="dp-checkout-form" novalidate><div class="dp-form-grid"><label class="dp-field"><span>Full name</span><span class="dp-input-wrap"><input type="text" name="fullName" id="dp-checkout-name" autocomplete="name" minlength="2" maxlength="100" placeholder="Your full name" required/></span></label><label class="dp-field"><span>Phone number</span><span class="dp-input-wrap"><input type="tel" name="phone" id="dp-checkout-phone" autocomplete="tel" inputmode="tel" placeholder="09xxxxxxxxx" required maxlength="20"/></span></label><label class="dp-field dp-field-full"><span>Email address</span><span class="dp-input-wrap"><input type="email" name="email" id="dp-checkout-email" placeholder="you@example.com" autocomplete="email" required/></span></label><label class="dp-field dp-field-full"><span>Notes (optional)</span><textarea id="dp-checkout-notes" name="notes" placeholder="Anything you would like the clinic to know?" maxlength="500"></textarea></label></div></form>
        </section>
        <section class="dp-white-card dp-checkout-card"><div class="dp-checkout-card-heading"><span class="dp-num">03</span><div><h2>Payment preference</h2><p>Payment is disabled in this design preview.</p></div></div>
          <div class="dp-payment-choices"><label class="dp-payment-choice is-selected"><input type="radio" name="paymentMethod" value="deposit" checked/><span class="dp-payment-choice-icon">${dpIcon('credit')}</span><span><strong>Online deposit</strong><small>Available after payment-gateway setup</small></span><span class="dp-radio-mark"></span></label><label class="dp-payment-choice"><input type="radio" name="paymentMethod" value="clinic"/><span class="dp-payment-choice-icon">${dpIcon('receipt')}</span><span><strong>Pay at clinic</strong><small>Subject to clinic confirmation</small></span><span class="dp-radio-mark"></span></label></div>
        </section>
      </div>
      <aside class="dp-checkout-summary"><div class="dp-summary-image"><div class="dp-summary-tooth">${dpIcon('tooth')}</div><div><span>DR. ZEINOLABEDIN</span><h2>Your appointment summary</h2></div></div>
        <div class="dp-summary-body"><span class="dp-eyebrow">ORDER OVERVIEW · SAMPLE</span><div class="dp-summary-meta"><span>${dpIcon('tooth')} <span id="dp-summary-service">Dental consultation</span></span><span>${dpIcon('clock')} <span id="dp-summary-time">30 min · 10:30 AM</span></span><span>${dpIcon('calendar')} <span id="dp-summary-date">Choose a date</span></span></div><div class="dp-summary-separator"></div>
        <div class="dp-summary-line"><span>Example service total</span><strong id="dp-summary-total">${money(650000)}</strong></div><div class="dp-summary-line"><span>Example deposit</span><strong id="dp-summary-deposit">${money(150000)}</strong></div><div class="dp-summary-line"><span>Remaining at clinic (example)</span><strong id="dp-summary-remaining">${money(500000)}</strong></div><div class="dp-summary-separator"></div>
        <div class="dp-summary-pay"><span id="dp-summary-pay-label">Preview deposit amount</span><strong id="dp-summary-pay-amount">${money(150000)}</strong></div>
        <button class="dp-btn dp-btn-primary dp-btn-block" type="submit" form="dp-checkout-form">Review demo summary ${dpIcon('arrow')}</button>
        <p class="dp-form-feedback" data-form-feedback role="status" aria-live="polite" hidden></p>
        <div class="dp-checkout-preview" id="dp-checkout-review" hidden role="status"></div>
        <div class="dp-summary-guarantee">${dpIcon('shield')} No payment is processed in this preview.</div></div>
      </aside></div>
    </div>
  </main>`;
}

export function initCheckout() {
  const root = document.querySelector('[data-portal-page="checkout"]');
  if (!root) return () => {};
  const controller = new AbortController();
  const service = root.querySelector('#dp-checkout-service');
  const date = root.querySelector('#dp-checkout-date');
  const time = root.querySelector('#dp-checkout-time');
  const payments = [...root.querySelectorAll('input[name="paymentMethod"]')];
  const dateToday = new Date();
  const pad = n => String(n).padStart(2, '0');
  const fmtDate = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  date.min = fmtDate(dateToday);
  const upcoming = new Date(dateToday.getFullYear(), dateToday.getMonth(), dateToday.getDate() + 7);
  date.value = fmtDate(upcoming);
  const params = new URLSearchParams(location.search);
  const requestedService = params.get('service');
  if (requestedService && Object.hasOwn(SAMPLE_SERVICES, requestedService)) service.value = requestedService;
  const requestedDate = params.get('date');
  if (requestedDate && /^\d{4}-\d{2}-\d{2}$/.test(requestedDate) && requestedDate >= date.min) date.value = requestedDate;
  const requestedTime = params.get('time');
  if ([...time.options].some(option => option.value === requestedTime)) time.value = requestedTime;

  const update = () => {
    const item = SAMPLE_SERVICES[service.value] || SAMPLE_SERVICES.consultation;
    const method = payments.find(el => el.checked)?.value || 'deposit';
    const text = (selector, value) => { root.querySelector(selector).textContent = value; };
    text('#dp-summary-service', t(item.label));
    text('#dp-summary-time', `${t(item.duration)} · ${time.options[time.selectedIndex].textContent.replace(/ \(example\)| \(نمونه\)/g, '')}`);
    text('#dp-summary-date', date.value || t('Choose a date'));
    text('#dp-summary-total', money(item.total));
    text('#dp-summary-deposit', money(item.deposit));
    text('#dp-summary-remaining', money(item.total - item.deposit));
    text('#dp-summary-pay-label', t(method === 'deposit' ? 'Preview deposit amount' : 'Example payable at clinic'));
    text('#dp-summary-pay-amount', money(method === 'deposit' ? item.deposit : item.total));
    root.querySelectorAll('.dp-payment-choice').forEach(label => label.classList.toggle('is-selected', label.querySelector('input').checked));
    root.querySelector('#dp-checkout-review').hidden = true;
  };
  for (const el of [service, time, date, ...payments]) el.addEventListener('change', update, { signal: controller.signal });
  update();
  root.querySelector('#dp-checkout-form').addEventListener('submit', event => {
    event.preventDefault();
    const name = root.querySelector('#dp-checkout-name').value.trim();
    const phone = root.querySelector('#dp-checkout-phone').value.trim();
    const email = root.querySelector('#dp-checkout-email');
    const feedback = root.querySelector('[data-form-feedback]');
    const showError = message => { feedback.textContent = t(message); feedback.dataset.state = 'error'; feedback.hidden = false; };
    if (!date.value || date.value < date.min) return showError('Please select a valid date in the future.');
    if (name.length < 2) return showError('Please enter your full name.');
    if (!/^[+\d\s()-]{8,20}$/.test(phone)) return showError('Please enter a valid phone number.');
    if (!email.value.trim() || !email.checkValidity()) return showError('Please enter a valid email address.');
    const item = SAMPLE_SERVICES[service.value];
    const method = payments.find(el => el.checked)?.value || 'deposit';
    feedback.hidden = true;
    const preview = root.querySelector('#dp-checkout-review');
    preview.replaceChildren();
    const heading = document.createElement('strong'); heading.textContent = t('Review completed — preview only');
    const para = document.createElement('p'); para.textContent = getCheckoutPreviewText(item, date.value, time.value, method);
    preview.append(heading, para);
    preview.hidden = false;
    preview.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }, { signal: controller.signal });
  return () => controller.abort();
}
