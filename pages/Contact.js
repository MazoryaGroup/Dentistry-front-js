
/**
 * Dentistry — Contact Us
 *
 * POST /api/messages
 *
 * Fields:
 * first_name
 * last_name
 * email
 * phone
 * message
 *
 * Vanilla JS + Vite + Webflow
 */

import { messageApi } from '../code/api.js';

// ============================================
// LANGUAGE
// ============================================

function getLang() {
  const lang = (
    document.documentElement.lang || ''
  ).toLowerCase();

  return lang === 'fa' || lang.startsWith('fa-')
    ? 'fa'
    : 'en';
}

const translations = {
  en: {
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    phone: 'Phone',
    message: 'Message',
    submit: 'Submit',
    sending: 'Sending...',
    success: 'Your message has been sent successfully.',
    error: 'Unable to send your message. Please try again.',
    validation: 'Please check the form fields.',
    contact: 'Contact Us',
    home: 'Home',
    touch: 'Get in Touch',
    heading: 'Get Free Information!',
  },

  fa: {
    firstName: 'نام',
    lastName: 'نام خانوادگی',
    email: 'ایمیل',
    phone: 'شماره تماس',
    message: 'پیام',
    submit: 'ارسال پیام',
    sending: 'در حال ارسال...',
    success: 'پیام شما با موفقیت ارسال شد.',
    error: 'ارسال پیام با مشکل مواجه شد. دوباره تلاش کنید.',
    validation: 'لطفاً اطلاعات فرم را بررسی کنید.',
    contact: 'تماس با ما',
    home: 'خانه',
    touch: 'با ما در ارتباط باشید',
    heading: 'دریافت مشاوره و اطلاعات رایگان',
  },
};

function tr(key) {
  return translations[getLang()][key] || key;
}

// ============================================
// ICONS
// ============================================

const addressIcon = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    viewBox="0 0 60 60"
    fill="none"
    stroke="currentColor"
    stroke-width="2.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M48 23c0 14-18 31-18 31S12 37 12 23a18 18 0 1 1 36 0Z"/>
    <circle cx="30" cy="23" r="7"/>
  </svg>
`;

const emailIcon = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    viewBox="0 0 60 60"
    fill="none"
    stroke="currentColor"
    stroke-width="2.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <rect x="5" y="12" width="50" height="36" rx="4"/>
    <path d="m6 16 24 19 24-19"/>
  </svg>
`;

const phoneIcon = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    viewBox="0 0 60 60"
    fill="none"
    stroke="currentColor"
    stroke-width="2.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M16 7h9l4 12-6 5c3 7 8 12 15 15l5-6 12 4v9c0 5-4 8-9 7C25 49 11 35 7 14c-1-4 3-7 9-7Z"/>
  </svg>
`;

// ============================================
// CONTACT INFORMATION
// ============================================

// Replace these template placeholders with
// the clinic's actual address, email and phone.

const contactInfo = [
  {
    label: 'address :',
    detail: '1902 thrownrige, york',
    icon: addressIcon,
  },
  {
    label: 'email :',
    detail: 'abd123@email.com',
    icon: emailIcon,
    href: 'mailto:abd123@email.com',
  },
  {
    label: 'phone :',
    detail: '(603) 555- 123 -456',
    icon: phoneIcon,
    href: 'tel:+1603555123456',
  },
];

function contactCard(item) {
  return `
    <div class="contactus-info-inner-block">

      <div class="contactus-info-inner-icon-block">
        <div class="w-embed" aria-hidden="true">
          ${item.icon}
        </div>
      </div>

      <div class="contact-info-details-block">

        <h2 class="contact-title">
          ${item.label}
        </h2>

        ${
          item.href
            ? `
              <a
                href="${item.href}"
                class="contact-link"
              >
                ${item.detail}
              </a>
            `
            : `
              <div class="contact-subtext">
                ${item.detail}
              </div>
            `
        }

      </div>
    </div>
  `;
}

// ============================================
// CONTACT PAGE
// ============================================

export function Contact() {
  return `
    <main class="dentistry-contact-page">

      <!-- BREADCRUMB -->

      <section
        class="section breadcrumb-section"
        aria-label="Breadcrumb"
      >
        <div
          class="w-layout-blockcontainer container-fluid w-container"
        >
          <div class="breadcrumb-block two">

            <div
              class="w-layout-blockcontainer container w-container"
            >
              <div class="breadcrumb-main-title-block">

                <div class="breadcrumb-title-block">
                  <h1 class="breadcrumb-title">
                    ${tr('contact')}
                  </h1>
                </div>

                <div class="breadcrumb-subtext-block">

                  <a
                    href="/"
                    class="breadcrumb-subtext"
                  >
                    ${tr('home')}
                  </a>

                  <span
                    class="breadcrumb-subtext"
                    aria-hidden="true"
                  >
                    -
                  </span>

                  <span
                    class="breadcrumb-subtext"
                    aria-current="page"
                  >
                    ${tr('contact')}
                  </span>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CONTACT INFORMATION -->

      <section
        class="section contact-section-one"
        aria-label="Contact information"
      >
        <div
          class="w-layout-blockcontainer container w-container"
        >
          <div class="w-layout-grid contact-grid-one">

            ${contactInfo.map(contactCard).join('')}

          </div>
        </div>
      </section>

      <!-- CONTACT FORM -->

      <section
        class="section contact-form-section"
        aria-labelledby="contact-form-heading"
      >
        <div
          class="w-layout-blockcontainer container-fluid contact-form w-container"
        >
          <div class="w-layout-grid contact-grid-two">

            <!-- IMAGE -->

            <div class="contact-image-block">

              <img
                src="https://cdn.prod.website-files.com/6768f6d314e679aeffeed929/676fa5def8f6d5a24f95f597_image%20%281%29%20%281%29.webp"
                sizes="(max-width: 991px) 100vw, 50vw"
                alt="Dental clinic contact illustration"
                loading="lazy"
                decoding="async"
                class="contact-image-two"
              />

            </div>

            <!-- FORM -->

            <div class="contact-form-block-two">

              <div class="contact-title-block-two">

                <div class="section-sub-text">
                  ${tr('touch')}
                </div>

                <h2
                  id="contact-form-heading"
                  class="section-title"
                >
                  ${tr('heading')}
                </h2>

              </div>

              <div class="contact-form-info-block">

                <div class="contact-form-main-block w-form">

                  <form
                    id="email-form"
                    name="email-form"
                    class="dentistry-contact-form"
                    method="post"
                  >

                    <!-- FIRST NAME / LAST NAME -->

                    <div class="text-field-block">

                      <div class="dentistry-contact-field">

                        <label for="contact-first-name">
                          ${tr('firstName')}
                        </label>

                        <input
                          id="contact-first-name"
                          class="input-field w-input"
                          name="first_name"
                          type="text"
                          placeholder="${tr('firstName')}"
                          maxlength="255"
                          autocomplete="given-name"
                          required
                        />

                      </div>

                      <div class="dentistry-contact-field">

                        <label for="contact-last-name">
                          ${tr('lastName')}
                        </label>

                        <input
                          id="contact-last-name"
                          class="input-field w-input"
                          name="last_name"
                          type="text"
                          placeholder="${tr('lastName')}"
                          maxlength="255"
                          autocomplete="family-name"
                          required
                        />

                      </div>

                    </div>

                    <!-- EMAIL / PHONE -->

                    <div class="text-field-block">

                      <div class="dentistry-contact-field">

                        <label for="contact-email">
                          ${tr('email')}
                        </label>

                        <input
                          id="contact-email"
                          class="input-field w-input"
                          name="email"
                          type="email"
                          placeholder="${tr('email')}"
                          maxlength="255"
                          autocomplete="email"
                          required
                        />

                      </div>

                      <div class="dentistry-contact-field">

                        <label for="contact-phone">
                          ${tr('phone')}
                        </label>

                        <input
                          id="contact-phone"
                          class="input-field w-input"
                          name="phone"
                          type="tel"
                          inputmode="tel"
                          placeholder="09123456789"
                          maxlength="30"
                          autocomplete="tel"
                          required
                        />

                      </div>

                    </div>

                    <!-- MESSAGE -->

                    <div
                      class="contactus-text-aera-block dentistry-contact-field"
                    >

                      <label for="contact-message">
                        ${tr('message')}
                      </label>

                      <textarea
                        id="contact-message"
                        class="text-area w-input"
                        name="message"
                        placeholder="${tr('message')}"
                        maxlength="5000"
                        rows="6"
                        required
                      ></textarea>

                    </div>

                    <!-- SUBMIT BUTTON -->

                    <div class="button-submit">

                      <button
                        class="button-primary first dentistry-contact-submit"
                        type="submit"
                        data-contact-submit
                      >

                        <span
                          class="button-primary-text last"
                          data-contact-submit-label
                        >
                          ${tr('submit')}
                        </span>

                        <span
                          class="button-icon-block"
                          aria-hidden="true"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/6768f6d314e679aeffeed929/676923878f05f400928066e8_Vector%20%283%29.svg"
                            alt=""
                            loading="lazy"
                            class="button-icon"
                          />
                        </span>

                      </button>

                    </div>

                    <!-- API STATUS -->

                    <p
                      class="dentistry-contact-form-status"
                      data-contact-status
                      role="status"
                      aria-live="polite"
                      hidden
                    ></p>

                  </form>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- MAP -->

      <section
        class="section map-section"
        aria-label="Map illustration"
      >
        <div
          class="w-layout-blockcontainer container w-container"
        >
          <div class="map-main-block">

            <img
              src="https://cdn.prod.website-files.com/6768f6d314e679aeffeed929/678894d5efddb4cc196176c1_map.webp"
              sizes="(max-width: 640px) 94vw, (max-width: 1240px) 95vw, 1200px"
              alt="Illustrative location map"
              loading="lazy"
              decoding="async"
              class="map-image"
            />

          </div>
        </div>
      </section>

    </main>
  `;
}

// ============================================
// INITIALIZE CONTACT
// ============================================

export function initContact() {
  const form = document.querySelector(
    '.dentistry-contact-page #email-form'
  );

  if (!form) {
    return () => {};
  }

  const lifecycle = new AbortController();

  const status = form.querySelector(
    '[data-contact-status]'
  );

  const submitButton = form.querySelector(
    '[data-contact-submit]'
  );

  const submitLabel = form.querySelector(
    '[data-contact-submit-label]'
  );

  let isSubmitting = false;
  let requestController = null;

  // ============================================
  // STATUS
  // ============================================

  function showStatus(message, type = 'error') {
    status.hidden = false;
    status.textContent = message;
    status.dataset.status = type;
    status.setAttribute(
      'role',
      type === 'error' ? 'alert' : 'status'
    );
  }

  function hideStatus() {
    status.hidden = true;
    status.textContent = '';
    status.removeAttribute('data-status');
  }

  // ============================================
  // FORM VALUES
  // ============================================

  function getPayload() {
    const data = new FormData(form);

    return {
      first_name: String(
        data.get('first_name') ?? ''
      ).trim(),

      last_name: String(
        data.get('last_name') ?? ''
      ).trim(),

      email: String(
        data.get('email') ?? ''
      ).trim(),

      phone: String(
        data.get('phone') ?? ''
      ).trim(),

      message: String(
        data.get('message') ?? ''
      ).trim(),
    };
  }

  // ============================================
  // SERVER VALIDATION ERRORS
  // ============================================

  function showValidationErrors(errors) {
    if (!errors || typeof errors !== 'object') {
      return false;
    }

    let firstInvalidField = null;

    for (const [fieldName, messages] of Object.entries(errors)) {
      const field = form.elements.namedItem(fieldName);

      if (!field || typeof field.setCustomValidity !== 'function') {
        continue;
      }

      const text = Array.isArray(messages)
        ? String(messages[0] ?? '')
        : String(messages ?? '');

      if (!text) continue;

      field.setCustomValidity(text);

      if (!firstInvalidField) {
        firstInvalidField = field;
      }
    }

    if (firstInvalidField) {
      firstInvalidField.reportValidity();
      firstInvalidField.focus();
      return true;
    }

    return false;
  }

  // ============================================
  // BUTTON STATE
  // ============================================

  function setSubmitting(value) {
    isSubmitting = value;

    submitButton.disabled = value;

    form.setAttribute(
      'aria-busy',
      value ? 'true' : 'false'
    );

    submitLabel.textContent = value
      ? tr('sending')
      : tr('submit');
  }

  // ============================================
  // SUBMIT
  // ============================================

  form.addEventListener(
    'submit',
    async event => {
      event.preventDefault();

      // Prevent duplicate submissions
      if (isSubmitting) {
        return;
      }

      hideStatus();

      // Clear previous server validation errors
      for (const field of form.elements) {
        if (typeof field.setCustomValidity === 'function') {
          field.setCustomValidity('');
        }
      }

      if (!form.reportValidity()) {
        return;
      }

      const payload = getPayload();

      // Reject whitespace-only values.
      if (
        !payload.first_name ||
        !payload.last_name ||
        !payload.email ||
        !payload.phone ||
        !payload.message
      ) {
        showStatus(tr('validation'));
        return;
      }

      requestController = new AbortController();

      const signal = requestController.signal;

      setSubmitting(true);

      try {
        // POST /api/messages
        const response = await messageApi.send(
          payload,
          signal
        );

        if (
          signal.aborted ||
          lifecycle.signal.aborted ||
          !form.isConnected
        ) {
          return;
        }

        // Guard against APIs returning success:false
        // with an HTTP 200 response.
        if (response?.success === false) {
          const error = new Error(
            response.message || tr('error')
          );

          error.errors = response.errors;
          throw error;
        }

        // Confirm success only after API response.
        showStatus(
          tr('success'),
          'success'
        );

        // Clear fields after successful submission.
        form.reset();

      } catch (error) {
        if (
          signal.aborted ||
          lifecycle.signal.aborted
        ) {
          return;
        }

        console.error(
          'Contact message failed:',
          error
        );

        if (
          error?.status === 422 ||
          error?.errors
        ) {
          showValidationErrors(error.errors);

          showStatus(
            tr('validation'),
            'error'
          );
        } else {
          showStatus(
            tr('error'),
            'error'
          );
        }

      } finally {
        if (
          !lifecycle.signal.aborted &&
          form.isConnected
        ) {
          setSubmitting(false);
        }
      }
    },
    { signal: lifecycle.signal }
  );

  // ============================================
  // CLEAR ERRORS WHILE TYPING
  // ============================================

  form.addEventListener(
    'input',
    event => {
      const field = event.target;

      if (
        field &&
        typeof field.setCustomValidity === 'function'
      ) {
        field.setCustomValidity('');
      }

      if (!isSubmitting) {
        hideStatus();
      }
    },
    { signal: lifecycle.signal }
  );

  // ============================================
  // CLEANUP ON ROUTE CHANGE
  // ============================================

  return () => {
    lifecycle.abort();
    requestController?.abort();
  };
}
