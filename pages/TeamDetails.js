
/**
 * Dentistry — Doctor Profile
 * Demo data / bilingual / dynamic slug
 */

import { t } from '../code/i18n.js';
import { getDemoDoctorBySlug } from '../code/demoDoctors.js';
import '../asset/css/team-details.css';

function esc(value) {
  return String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[char]);
}

function tr(key) {
  return esc(t(`teamDetails.${key}`));
}

function getSlug() {
  const match = window.location.pathname.match(
    /^\/team\/([a-z0-9-]+)\/?$/i
  );

  return match ? match[1].toLowerCase() : '';
}

const arrowIcon = `
  <svg
    width="19"
    height="19"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.8"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14"></path>
    <path d="m13 6 6 6-6 6"></path>
  </svg>
`;

function renderBreadcrumb(doctor) {
  return `
    <section class="section breadcrumb-section">
      <div class="w-layout-blockcontainer container-fluid w-container">
        <div class="breadcrumb-block">

          <div class="w-layout-blockcontainer container w-container">
            <div class="breadcrumb-main-title-block">

              <div class="breadcrumb-title-block">
                <h1 class="breadcrumb-title">
                  ${esc(doctor.name)}
                </h1>
              </div>

              <div class="breadcrumb-subtext-block">

                <a href="/" class="breadcrumb-subtext">
                  ${tr('home')}
                </a>

                <span class="breadcrumb-subtext">-</span>

                <a href="/about-us#about-doctors"
                   class="breadcrumb-subtext">
                  ${tr('team')}
                </a>

                <span class="breadcrumb-subtext">-</span>

                <span
                  class="breadcrumb-subtext"
                  aria-current="page"
                >
                  ${esc(doctor.name)}
                </span>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}

function renderProfile(doctor) {
  return `
    <section class="section team-single-section dp-team-details">

      <div class="w-layout-blockcontainer container w-container">
        <div class="w-layout-grid expert-grid">

          <!-- LEFT COLUMN -->

          <div class="left-expert-grid">

            <div class="expert-image-block">
              <img
                src="${esc(doctor.image)}"
                alt="${esc(doctor.name)}"
                class="expert-image"
                loading="eager"
              />
            </div>

            <div class="expert-flex-block">

              <h2 class="expert-team-tilte">
                ${esc(doctor.name)}
              </h2>

              <div class="expert-designation">
                ${esc(doctor.role)}
              </div>

            </div>

            <div class="dp-team-preview-badge">
              ${tr('previewBadge')}
            </div>

            <div class="main-expert-duration">

              <h3 class="inner-expert-title">
                ${tr('specialty')}
              </h3>

              <p class="dp-team-specialty">
                ${esc(doctor.role)}
              </p>

            </div>

            <div class="main-expert-duration last">

              <h3 class="inner-expert-title">
                ${tr('information')}
              </h3>

              <p class="dp-team-info">
                ${tr('informationText')}
              </p>

            </div>

            <div class="expert-button-block">

              <a
                href="/contact-us"
                class="button-primary w-inline-block"
              >
                <span class="button-primary-text">
                  ${tr('contactButton')}
                </span>

                <span class="button-icon-block">
                  ${arrowIcon}
                </span>
              </a>

            </div>

          </div>

          <!-- RIGHT COLUMN -->

          <div class="right-expert-grid">

            <div class="right-expert-sticky">

              <div class="expert-richbox w-richtext">

                <div class="dp-team-detail-eyebrow">
                  ${tr('eyebrow')}
                </div>

                <h2>
                  ${tr('aboutTitle')} ${esc(doctor.name)}
                </h2>

                <p>
                  ${tr('aboutDescription')}
                </p>

                <h3>
                  ${tr('focusTitle')}
                </h3>

                <p>
                  ${esc(doctor.focus)}
                </p>

                <h3>
                  ${tr('approachTitle')}
                </h3>

                <p>
                  ${tr('approachDescription')}
                </p>

                <div class="dp-team-detail-note">
                  ${tr('previewNotice')}
                </div>

                <a
                  href="/about-us#about-doctors"
                  class="dp-team-back-link"
                >
                  <span class="dp-team-back-arrow">
                    ${arrowIcon}
                  </span>

                  ${tr('backToDoctors')}
                </a>

              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  `;
}

function renderNotFound() {
  return `
    <main class="dp-team-not-found">
      <h1>${tr('notFound')}</h1>

      <a href="/about-us#about-doctors">
        ${tr('backToDoctors')}
      </a>
    </main>
  `;
}

export function TeamDetails() {
  const doctor = getDemoDoctorBySlug(getSlug());

  if (!doctor) {
    return renderNotFound();
  }

  return `
    <main class="dp-team-details-page" data-no-translate>
      ${renderBreadcrumb(doctor)}
      ${renderProfile(doctor)}
    </main>
  `;
}

export function initTeamDetails() {
  // Interaction is handled by the shared SPA router.
  // No Webflow-only scripts are required.
  return () => {};
}
