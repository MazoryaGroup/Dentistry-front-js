
/**
 * Dentistry — Contact Us
 *
 * Vanilla JavaScript + Vite + Webflow
 * Bilingual: English / Persian
 *
 * API:
 * POST /api/messages
 *
 * All requests through code/api.js
 * All translations through code/i18n.js
 */

import { messageApi } from '../code/api.js';
import { t } from '../code/i18n.js';

// ============================================
// TRANSLATIONS
// ============================================

const tr = key => t(`contactPage.${key}`);

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

const ht = key => escapeHTML(tr(key));

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
    <path
      d="M48 23c0 14-18 31-18 31S12 37 12 23a18 18 0 1 1 36 0Z"
    />
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
    <rect
      x="5"
      y="12"
      width="50"
      height="36"
      rx="4"
    />
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
    <path
      d="M16 7h9l4 12-6 5c3 7 8 12 15 15l5-6 12 4v9c0 5-4 8-9 7C25 49 11 35 7 14c-1-4 3-7 9-7Z"
    />
  </svg>
`;

// ============================================
// CLINIC CONTACT INFORMATION
// ============================================

// Replace these sample details with real clinic data.
const CLINIC_EMAIL = 'abd123@email.com';
const CLINIC_PHONE = '(21) 220-59-365';
const CLINIC_PHONE_LINK = 'tel:+982122059365';

function getContactInfo() {
  return [
    {
      label: tr('addressLabel'),
      detail: tr('addressText'),
      icon: addressIcon,
      href: null,
    },
    {
      label: tr('emailLabel'),
      detail: CLINIC_EMAIL,
      icon: emailIcon,
      href: `mailto:${CLINIC_EMAIL}`,
    },
    {
      label: tr('phoneLabel'),
      detail: CLINIC_PHONE,
      icon: phoneIcon,
      href: CLINIC_PHONE_LINK,
    },
  ];
}

// ============================================
// CONTACT CARD
// ============================================

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
          ${escapeHTML(item.label)}
        </h2>

        ${
          item.href
            ? `
              <a
                href="${escapeHTML(item.href)}"
                class="contact-link"
              >
                ${escapeHTML(item.detail)}
              </a>
            `
            : `
              <div class="contact-subtext">
                ${escapeHTML(item.detail)}
              </div>
            `
        }

      </div>

    </div>
  `;
}

// ============================================
// BREADCRUMB
// ============================================

function renderBreadcrumb() {
  return `
    <section
      class="section breadcrumb-section"
      aria-label="${ht('breadcrumb')}"
    >

      <div class="w-layout-blockcontainer container-fluid w-container">

        <div class="breadcrumb-block two">

          <div class="w-layout-blockcontainer container w-container">

            <div class="breadcrumb-main-title-block">

              <div class="breadcrumb-title-block">
                <h1 class="breadcrumb-title">
                  ${ht('contact')}
                </h1>
              </div>

              <div class="breadcrumb-subtext-block">

                <a
                  href="/"
                  class="breadcrumb-subtext"
                >
                  ${ht('home')}
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
                  ${ht('contact')}
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  `;
}

// ============================================
// CONTACT INFORMATION SECTION
// ============================================

function renderContactInformation() {
  return `
    <section
      class="section contact-section-one"
      aria-label="${ht('contactInformation')}"
    >

      <div class="w-layout-blockcontainer container w-container">

        <div class="w-layout-grid contact-grid-one">

          ${getContactInfo().map(contactCard).join('')}

        </div>

      </div>

    </section>
  `;
}

// ============================================
// CONTACT FORM SECTION
// ============================================

function renderContactForm() {
  return `
    <section
      class="section contact-form-section"
      aria-labelledby="contact-form-heading"
    >

      <div
        class="w-layout-blockcontainer container-fluid contact-form w-container"
      >

        <div class="w-layout-grid contact-grid-two">

          <!-- CONTACT IMAGE -->

          <div class="contact-image-block">

            <img
              src="https://cdn.prod.website-files.com/6768f6d314e679aeffeed929/676fa5def8f6d5a24f95f597_image%20%281%29%20%281%29.webp"
              sizes="(max-width: 991px) 100vw, 50vw"
              alt="${ht('imageAlt')}"
              loading="lazy"
              decoding="async"
              class="contact-image-two"
            />

          </div>

          <!-- CONTACT FORM CONTENT -->

          <div class="contact-form-block-two">

            <div class="contact-title-block-two">

              <div class="section-sub-text">
                ${ht('touch')}
              </div>

              <h2
                id="contact-form-heading"
                class="section-title"
              >
                ${ht('heading')}
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

                  <!-- FIRST NAME & LAST NAME -->

                  <div class="text-field-block">

                    <div class="dentistry-contact-field">

                      <label for="contact-first-name">
                        ${ht('firstName')}
                      </label>

                      <input
                        id="contact-first-name"
                        class="input-field w-input"
                        name="first_name"
                        type="text"
                        placeholder="${ht('firstName')}"
                        maxlength="255"
                        autocomplete="given-name"
                        required
                      />

                    </div>

                    <div class="dentistry-contact-field">

                      <label for="contact-last-name">
                        ${ht('lastName')}
                      </label>

                      <input
                        id="contact-last-name"
                        class="input-field w-input"
                        name="last_name"
                        type="text"
                        placeholder="${ht('lastName')}"
                        maxlength="255"
                        autocomplete="family-name"
                        required
                      />

                    </div>

                  </div>

                  <!-- EMAIL & PHONE -->

                  <div class="text-field-block">

                    <div class="dentistry-contact-field">

                      <label for="contact-email">
                        ${ht('email')}
                      </label>

                      <input
                        id="contact-email"
                        class="input-field w-input"
                        name="email"
                        type="email"
                        placeholder="${ht('email')}"
                        maxlength="255"
                        autocomplete="email"
                        required
                      />

                    </div>

                    <div class="dentistry-contact-field">

                      <label for="contact-phone">
                        ${ht('phone')}
                      </label>

                      <input
                        id="contact-phone"
                        class="input-field w-input"
                        name="phone"
                        type="tel"
                        inputmode="tel"
                        placeholder="${ht('phonePlaceholder')}"
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
                      ${ht('message')}
                    </label>

                    <textarea
                      id="contact-message"
                      class="text-area w-input"
                      name="message"
                      placeholder="${ht('message')}"
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
                        ${ht('submit')}
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

                  <!-- FORM STATUS -->

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
  `;
}

// ============================================
// MAIN CONTACT PAGE
// ============================================

export function Contact() {
  return `
    <main
      class="dentistry-contact-page"
      data-no-translate
    >

      ${renderBreadcrumb()}

      ${renderContactInformation()}

      ${renderContactForm()}

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

  // Lifecycle cancellation for SPA navigation
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

  // ==========================================
  // STATUS MESSAGES
  // ==========================================

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

  // ==========================================
  // FORM DATA
  // ==========================================

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

  // ==========================================
  // CLEAR VALIDATION ERRORS
  // ==========================================

  function clearValidationErrors() {
    for (const field of form.elements) {
      if (
        typeof field.setCustomValidity === 'function'
      ) {
        field.setCustomValidity('');
      }
    }
  }

  // ==========================================
  // LARAVEL VALIDATION ERRORS
  // ==========================================

  function showValidationErrors(errors) {
    if (
      !errors ||
      typeof errors !== 'object'
    ) {
      return false;
    }

    let firstInvalidField = null;

    for (
      const [fieldName, messages]
      of Object.entries(errors)
    ) {
      const field = form.elements.namedItem(
        fieldName
      );

      if (
        !field ||
        typeof field.setCustomValidity !== 'function'
      ) {
        continue;
      }

      const message = Array.isArray(messages)
        ? String(messages[0] ?? '')
        : String(messages ?? '');

      if (!message) {
        continue;
      }

      field.setCustomValidity(message);

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

  // ==========================================
  // SUBMIT BUTTON STATE
  // ==========================================

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

  // ==========================================
  // CONTACT FORM SUBMIT
  // ==========================================

  form.addEventListener(
    'submit',
    async event => {
      event.preventDefault();

      if (
        isSubmitting ||
        lifecycle.signal.aborted
      ) {
        return;
      }

      hideStatus();

      // Clear previous Laravel errors
      clearValidationErrors();

      // Browser validation
      if (!form.reportValidity()) {
        return;
      }

      const payload = getPayload();

      // Reject empty / whitespace-only values
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

      // Abort the request if page changes
      requestController = new AbortController();

      const signal = requestController.signal;

      setSubmitting(true);

      try {
        // POST /api/messages via code/api.js

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

        // Guard additional API failure flags
        if (
          response?.success === false ||
          response?.status === false ||
          Number(response?.statusCode) >= 400
        ) {
          const error = new Error(
            response?.message || tr('error')
          );

          error.status =
            Number(response?.statusCode) || 0;

          error.errors =
            response?.errors || null;

          throw error;
        }

        // Success
        form.reset();

        showStatus(
          tr('success'),
          'success'
        );

      } catch (error) {
        if (
          signal.aborted ||
          lifecycle.signal.aborted ||
          !form.isConnected
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
          showValidationErrors(
            error?.errors
          );

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

        requestController = null;
      }
    },
    {
      signal: lifecycle.signal,
    }
  );

  // ==========================================
  // CLEAR ERRORS WHILE TYPING
  // ==========================================

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
    {
      signal: lifecycle.signal,
    }
  );

  // ==========================================
  // CLEANUP
  // ==========================================

  return () => {
    lifecycle.abort();
    requestController?.abort();
  };
}
