/**
 * Dentistry — Contact Us
 * Frontend-only. The form validates locally but NEVER submits/stores data.
 * Header and footer are already rendered by code/router.js.
 */

import { t } from '../code/i18n.js';

const addressIcon = String.raw`<svg fill="none" height="50" viewBox="0 0 60 60" width="50" xmlns="http://www.w3.org/2000/svg">

                  <g clip-path="url(#clip0_138_19)">

                    <g clip-path="url(#clip1_138_19)">

                      <path d="M39.9722 39.8575C46.351 29.8481 45.5492 31.0968 45.733 30.8359C48.0554 27.5602 49.2828 23.7049 49.2828 19.6866C49.2828 9.03004 40.6353 0.251465 29.9648 0.251465C19.3291 0.251465 10.6468 9.01271 10.6468 19.6866C10.6468 23.7024 11.9 27.6586 14.2985 30.9783L19.9571 39.8576C13.9071 40.7873 3.62207 43.558 3.62207 49.6587C3.62207 51.8827 5.07361 55.052 11.9888 57.5216C16.8173 59.2461 23.2013 60.1958 29.9648 60.1958C42.6122 60.1958 56.3075 56.6282 56.3075 49.6587C56.3075 43.5569 46.0346 40.7892 39.9722 39.8575ZM17.2324 29.0464C17.213 29.0162 17.1929 28.9867 17.1718 28.9577C15.176 26.2119 14.1592 22.9579 14.1592 19.6866C14.1592 10.9035 21.2314 3.76383 29.9648 3.76383C38.68 3.76383 45.7705 10.9067 45.7705 19.6866C45.7705 22.9631 44.7728 26.1068 42.8849 28.7802C42.7157 29.0033 43.5984 27.6321 29.9648 49.0252L17.2324 29.0464ZM29.9648 56.6835C16.1502 56.6835 7.13444 52.6228 7.13444 49.6587C7.13444 47.6665 11.767 44.3908 22.0325 43.1139L28.4838 53.2369C28.8062 53.7429 29.3647 54.0492 29.9647 54.0492C30.5647 54.0492 31.1233 53.7428 31.4456 53.2369L37.8968 43.1139C48.1625 44.3908 52.7952 47.6665 52.7952 49.6587C52.7952 52.5977 43.8605 56.6835 29.9648 56.6835Z" fill="currentColor"></path>

                      <path d="M29.9596 10.9053C25.1178 10.9053 21.1787 14.8444 21.1787 19.6862C21.1787 24.528 25.1178 28.4671 29.9596 28.4671C34.8014 28.4671 38.7405 24.528 38.7405 19.6862C38.7405 14.8444 34.8014 10.9053 29.9596 10.9053ZM29.9596 24.9547C27.0545 24.9547 24.6911 22.5913 24.6911 19.6862C24.6911 16.7811 27.0545 14.4176 29.9596 14.4176C32.8647 14.4176 35.2282 16.7811 35.2282 19.6862C35.2282 22.5913 32.8647 24.9547 29.9596 24.9547Z" fill="currentColor"></path>

                    </g>

                  </g>

                </svg>`;
const emailIcon = String.raw`<svg fill="none" height="50" viewBox="0 0 60 60" width="50" xmlns="http://www.w3.org/2000/svg">

                  <g clip-path="url(#clip0_138_31)">

                    <path d="M54.7334 8.90625H5.28115C2.37941 8.90625 0.0078125 11.2675 0.0078125 14.1797V45.8203C0.0078125 48.7336 2.38093 51.0937 5.28115 51.0937H54.7334C57.6351 51.0937 60.0067 48.7325 60.0067 45.8203V14.1797C60.0067 11.2668 57.6339 8.90625 54.7334 8.90625ZM53.9236 12.4219C52.2187 14.1325 32.1922 34.2246 31.3694 35.0501C30.6822 35.7394 29.3326 35.7398 28.6451 35.0501L6.0909 12.4219H53.9236ZM3.52337 45.174V14.826L18.6479 30L3.52337 45.174ZM6.0909 47.5781L21.1298 32.49L26.1553 37.532C28.2147 39.5981 31.8007 39.5973 33.8594 37.532L38.8849 32.4901L53.9236 47.5781H6.0909ZM56.4911 45.174L41.3666 30L56.4911 14.826V45.174Z" fill="currentColor"></path>

                  </g>

                </svg>`;
const phoneIcon = String.raw`<svg fill="none" height="50" viewBox="0 0 60 60" width="50" xmlns="http://www.w3.org/2000/svg">

                  <g clip-path="url(#clip0_138_35)">

                    <path d="M47.387 37.1687C46.1586 35.8896 44.677 35.2058 43.1068 35.2058C41.5492 35.2058 40.0549 35.877 38.7759 37.156L34.7742 41.145C34.445 40.9678 34.1157 40.8031 33.7991 40.6385C33.3433 40.4105 32.9127 40.1953 32.5455 39.9673C28.7971 37.5866 25.3906 34.484 22.1235 30.4696C20.5406 28.4687 19.4768 26.7845 18.7044 25.0749C19.7428 24.1251 20.7052 23.1373 21.6423 22.1876C21.9969 21.833 22.3514 21.4657 22.706 21.1112C25.3653 18.4518 25.3653 15.0073 22.706 12.3479L19.2489 8.89074C18.8563 8.49817 18.4511 8.09293 18.0712 7.6877C17.3114 6.90255 16.5136 6.09208 15.6905 5.33226C14.4621 4.11655 12.9932 3.4707 11.4482 3.4707C9.9033 3.4707 8.40901 4.11655 7.14267 5.33226C7.13001 5.34492 7.13001 5.34492 7.11735 5.35759L2.81179 9.70122C1.19087 11.3222 0.266441 13.2977 0.0638268 15.5898C-0.240095 19.2876 0.848958 22.7321 1.68474 24.9862C3.73622 30.5202 6.80076 35.649 11.3723 41.145C16.9188 47.7681 23.5924 52.9982 31.2158 56.6833C34.1284 58.0637 38.0161 59.6973 42.3596 59.9759C42.6255 59.9885 42.9041 60.0012 43.1574 60.0012C46.0827 60.0012 48.5394 58.9501 50.4642 56.8606C50.4769 56.8353 50.5022 56.8226 50.5148 56.7973C51.1733 55.9995 51.9332 55.2777 52.7309 54.5052C53.2755 53.986 53.8327 53.4414 54.3772 52.8716C55.6309 51.5672 56.2894 50.0476 56.2894 48.49C56.2894 46.9197 55.6182 45.4127 54.3392 44.1463L47.387 37.1687ZM51.9205 50.5035C51.9078 50.5161 51.9078 50.5035 51.9205 50.5035C51.4266 51.0353 50.9201 51.5166 50.3756 52.0484C49.5524 52.8336 48.7166 53.6567 47.9315 54.5812C46.6525 55.9488 45.1456 56.5947 43.1701 56.5947C42.9801 56.5947 42.7775 56.5947 42.5876 56.582C38.8265 56.3414 35.3314 54.8724 32.7101 53.6187C25.5426 50.1489 19.2489 45.2227 14.0189 38.9796C9.70068 33.7748 6.81342 28.9626 4.90125 23.7959C3.72355 20.6426 3.293 18.1859 3.48295 15.8684C3.60958 14.3868 4.17943 13.1584 5.2305 12.1073L9.54872 7.78901C10.1692 7.20648 10.8277 6.88989 11.4736 6.88989C12.2714 6.88989 12.9172 7.37111 13.3224 7.77634C13.3351 7.78901 13.3477 7.80167 13.3604 7.81433C14.1329 8.53616 14.8674 9.28332 15.6398 10.0811C16.0324 10.4864 16.4376 10.8916 16.8428 11.3095L20.3 14.7667C21.6423 16.109 21.6423 17.3501 20.3 18.6924C19.9327 19.0596 19.5781 19.4269 19.2109 19.7815C18.1472 20.8705 17.1341 21.8836 16.0324 22.8714C16.0071 22.8967 15.9817 22.9094 15.9691 22.9347C14.88 24.0238 15.0826 25.0875 15.3106 25.8094C15.3232 25.8474 15.3359 25.8853 15.3486 25.9233C16.2477 28.1015 17.514 30.153 19.4388 32.5971L19.4515 32.6097C22.9466 36.9154 26.6317 40.2712 30.6966 42.842C31.2158 43.1712 31.7477 43.4372 32.2542 43.6904C32.7101 43.9184 33.1407 44.1337 33.5079 44.3616C33.5585 44.3869 33.6092 44.4249 33.6599 44.4503C34.0904 44.6655 34.4956 44.7668 34.9135 44.7668C35.9646 44.7668 36.6231 44.1083 36.8384 43.893L41.1693 39.5621C41.5998 39.1315 42.2836 38.6123 43.0814 38.6123C43.8666 38.6123 44.5124 39.1062 44.905 39.5368C44.9176 39.5494 44.9176 39.5494 44.9303 39.5621L51.9078 46.5398C53.2122 47.8314 53.2122 49.1611 51.9205 50.5035Z" fill="currentColor"></path>

                    <path d="M32.3877 14.2728C35.7055 14.83 38.7194 16.4003 41.1254 18.8063C43.5315 21.2124 45.0891 24.2264 45.6589 27.5443C45.7982 28.3801 46.52 28.9626 47.3431 28.9626C47.4444 28.9626 47.5331 28.9499 47.6344 28.9373C48.5715 28.7853 49.192 27.8988 49.04 26.9617C48.3562 22.9474 46.4567 19.2876 43.5568 16.3876C40.6569 13.4876 36.9971 11.5881 32.9828 10.9042C32.0457 10.7523 31.172 11.3728 31.0073 12.2972C30.8427 13.2217 31.4506 14.1208 32.3877 14.2728Z" fill="currentColor"></path>

                    <path d="M59.9015 26.4677C58.7745 19.8573 55.6593 13.8421 50.8725 9.05524C46.0857 4.26838 40.0706 1.15313 33.4603 0.0260636C32.5359 -0.138564 31.6621 0.494618 31.4975 1.41906C31.3455 2.35617 31.966 3.22996 32.9031 3.39459C38.8043 4.39502 44.1862 7.19368 48.4665 11.4613C52.7467 15.7416 55.5326 21.1237 56.5331 27.0249C56.6723 27.8607 57.3942 28.4433 58.2173 28.4433C58.3186 28.4433 58.4072 28.4306 58.5085 28.4179C59.433 28.2786 60.0661 27.3922 59.9015 26.4677Z" fill="currentColor"></path>

                  </g>

                </svg>`;

// Contact details are the original template placeholders; replace with clinic details later.
const contactInfo = [
  { label: 'address :', detail: '1902 thrownrige, york', icon: addressIcon },
  { label: 'email :', detail: 'abd123@email.com', icon: emailIcon, href: 'mailto:abd123@email.com' },
  { label: 'phone :', detail: '(603) 555- 123 -456', icon: phoneIcon, href: 'tel:+1603555123456' },
];

function contactCard(item) {
  return `
    <div class="contactus-info-inner-block">
      <div class="contactus-info-inner-icon-block">
        <div class="w-embed" aria-hidden="true">${item.icon}</div>
      </div>
      <div class="contact-info-details-block">
        <h2 class="contact-title">${item.label}</h2>
        ${item.href
          ? `<a href="${item.href}" class="contact-link">${item.detail}</a>`
          : `<div class="contact-subtext">${item.detail}</div>`}
      </div>
    </div>`;
}

export function Contact() {
  return `
    <main class="dentistry-contact-page">
      <section class="section breadcrumb-section" aria-label="Breadcrumb">
        <div class="w-layout-blockcontainer container-fluid w-container">
          <div class="breadcrumb-block two">
            <div class="w-layout-blockcontainer container w-container">
              <div class="breadcrumb-main-title-block">
                <div class="breadcrumb-title-block"><h1 class="breadcrumb-title">contact us</h1></div>
                <div class="breadcrumb-subtext-block">
                  <a href="/" class="breadcrumb-subtext">home</a>
                  <span class="breadcrumb-subtext" aria-hidden="true">-</span>
                  <span class="breadcrumb-subtext" aria-current="page">contact us</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section contact-section-one" aria-label="Contact information">
        <div class="w-layout-blockcontainer container w-container">
          <div class="w-layout-grid contact-grid-one">
            ${contactInfo.map(contactCard).join('')}
          </div>
        </div>
      </section>

      <section class="section contact-form-section" aria-labelledby="contact-form-heading">
        <div class="w-layout-blockcontainer container-fluid contact-form w-container">
          <div class="w-layout-grid contact-grid-two">
            <div class="contact-image-block">
              <img
                src="https://cdn.prod.website-files.com/6768f6d314e679aeffeed929/676fa5def8f6d5a24f95f597_image%20%281%29%20%281%29.webp"
                srcset="https://cdn.prod.website-files.com/6768f6d314e679aeffeed929/676fa5def8f6d5a24f95f597_image%20%281%29%20%281%29-p-500.webp 500w, https://cdn.prod.website-files.com/6768f6d314e679aeffeed929/676fa5def8f6d5a24f95f597_image%20%281%29%20%281%29-p-800.webp 800w, https://cdn.prod.website-files.com/6768f6d314e679aeffeed929/676fa5def8f6d5a24f95f597_image%20%281%29%20%281%29.webp 916w"
                sizes="(max-width: 991px) 100vw, 50vw"
                alt="Dental clinic contact illustration"
                loading="lazy"
                decoding="async"
                class="contact-image-two"
              />
            </div>
            <div class="contact-form-block-two">
              <div class="contact-title-block-two">
                <div class="section-sub-text">get in touch</div>
                <h2 id="contact-form-heading" class="section-title">get free information !!!</h2>
              </div>
              <div class="contact-form-info-block">
                <div class="contact-form-main-block w-form">
                  <form id="email-form" name="email-form" class="dentistry-contact-form">
                    <div class="text-field-block">
                      <div class="dentistry-contact-field">
                        <label for="contact-name">Name</label>
                        <input id="contact-name" class="input-field w-input" name="name" type="text" placeholder="name" maxlength="256" autocomplete="name" required />
                      </div>
                      <div class="dentistry-contact-field">
                        <label for="contact-email">Email</label>
                        <input id="contact-email" class="input-field w-input" name="email" type="email" placeholder="email" maxlength="256" autocomplete="email" required />
                      </div>
                    </div>
                    <div class="text-field-block">
                      <div class="dentistry-contact-field">
                        <label for="contact-phone">Phone</label>
                        <input id="contact-phone" class="input-field w-input" name="phone" type="tel" placeholder="phone" maxlength="30" autocomplete="tel" />
                      </div>
                      <div class="dentistry-contact-field">
                        <label for="contact-subject">Subject</label>
                        <input id="contact-subject" class="input-field w-input" name="subject" type="text" placeholder="subject" maxlength="256" required />
                      </div>
                    </div>
                    <div class="contactus-text-aera-block dentistry-contact-field">
                      <label for="contact-message">Message</label>
                      <textarea id="contact-message" class="text-area w-input" name="message" placeholder="message" maxlength="5000" rows="6" required></textarea>
                    </div>
                    <div class="button-submit">
                      <button class="button-primary first dentistry-contact-submit" type="submit">
                        <span class="button-primary-text last">Submit</span>
                        <span class="button-icon-block" aria-hidden="true">
                          <img src="https://cdn.prod.website-files.com/6768f6d314e679aeffeed929/676923878f05f400928066e8_Vector%20%283%29.svg" alt="" loading="lazy" class="button-icon" />
                        </span>
                      </button>
                    </div>
                    <p class="dentistry-contact-form-status" role="status" aria-live="polite" hidden></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section map-section" aria-label="Map illustration">
        <div class="w-layout-blockcontainer container w-container">
          <div class="map-main-block">
            <img
              src="https://cdn.prod.website-files.com/6768f6d314e679aeffeed929/678894d5efddb4cc196176c1_map.webp"
              srcset="https://cdn.prod.website-files.com/6768f6d314e679aeffeed929/678894d5efddb4cc196176c1_map-p-500.webp 500w, https://cdn.prod.website-files.com/6768f6d314e679aeffeed929/678894d5efddb4cc196176c1_map-p-800.webp 800w, https://cdn.prod.website-files.com/6768f6d314e679aeffeed929/678894d5efddb4cc196176c1_map-p-1080.webp 1080w, https://cdn.prod.website-files.com/6768f6d314e679aeffeed929/678894d5efddb4cc196176c1_map-p-1600.webp 1600w, https://cdn.prod.website-files.com/6768f6d314e679aeffeed929/678894d5efddb4cc196176c1_map.webp 1958w"
              sizes="(max-width: 640px) 94vw, (max-width: 1240px) 95vw, 1200px"
              alt="Illustrative location map from the original website template"
              loading="lazy"
              decoding="async"
              class="map-image"
            />
          </div>
        </div>
      </section>
    </main>`;
}

export function initContact() {
  const form = document.querySelector('.dentistry-contact-page #email-form');
  if (!form) return () => {};
  const controller = new AbortController();
  const status = form.querySelector('.dentistry-contact-form-status');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Never submit to Webflow, Laravel or any endpoint.
    if (!form.reportValidity()) return;
    // Make status explicit; do not pretend that the inquiry was successfully sent.
    status.textContent = t('Your details are valid, but this form is not connected yet. No message was sent.');
    status.hidden = false;
  }, { signal: controller.signal });

  form.addEventListener('input', () => {
    status.hidden = true;
    status.textContent = '';
  }, { signal: controller.signal });

  return () => controller.abort();
}
