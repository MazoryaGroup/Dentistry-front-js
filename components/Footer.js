/** Shared footer taken from supplied footer HTML. No remote partial fetch. */
import '../asset/css/footer.css';
import { t } from '../code/i18n.js';

const HTML = String.raw`
<div class="footer-block">

      <div class="w-layout-blockcontainer container-fluid w-container">

        <div class="footer-bg-block">

          <div class="w-layout-blockcontainer container w-container">

            <div class="main-footer-block">

              <div class="inner-footer-block">

                <div class="footer-title-block">

                  <h2 class="section-title footer-title">

                    ready to tooth treatment with us

                  </h2>

                </div>

                <div class="footer-form-block">

                  <div class="w-form">

                    <form class="footer-form-inner-block" id="email-form-2" name="email-form-2" novalidate>

                      <label class="footer-visually-hidden" for="footer-email">Your email address</label>
                      <input class="input-field footer-input w-input" id="footer-email" name="email" placeholder="email address" type="email" autocomplete="email" maxlength="256" required aria-describedby="footer-form-feedback" />
                      <button class="submit-button-block w-button" type="submit" aria-label="Subscribe to updates">
                        <svg class="footer-submit-arrow" viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                      </button>

                    </form>

                    <div class="w-form-done">

                      <div>Thank you! Your submission has been received!</div>

                    </div>

                    <div class="w-form-fail">

                      <div>

                        Oops! Something went wrong while submitting the form.

                      </div>

                    </div>

                  </div>

                </div>

              </div>

              <div class="footer-center-block">

                <div class="w-layout-grid footer-center-gird">

                  <div class="footer-left-block">

                    <div class="footer-logo-block">

                      <img alt="Footer Logo Block" class="footer-logo" loading="lazy" src="https://cdn.prod.website-files.com/6768f6d314e679aeffeed929/67a052f0a3ec3d93eb5eb9a6_1%20logo%20(1).svg"/>

                    </div>

                    <p class="footer-description">

                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.

                      Suspendisse varius enim in eros elementum tristique.

                    </p>

                    <div class="footer-social-icon-block">

                      <a class="footer-social-link w-inline-block" href="#" aria-label="Facebook" title="Facebook (link not configured yet)"><div class="w-embed">

                          

                          <svg fill="none" height="18" viewbox="0 0 10 18" width="10" xmlns="http://www.w3.org/2000/svg">

                            <path d="M6.06741 18V9.78996H8.82208L9.23536 6.58941H6.06741V4.54632C6.06741 3.61998 6.32359 2.98869 7.65347 2.98869L9.34686 2.98799V0.125307C9.05401 0.0872508 8.04877 0 6.87877 0C4.43564 0 2.76302 1.49127 2.76302 4.22934V6.58941H0V9.78996H2.76302V18H6.06741Z" fill="currentColor" fill-opacity="0.88"></path>

                          </svg></div></a><a class="footer-social-link w-inline-block" href="#" aria-label="Instagram" title="Instagram (link not configured yet)"><div class="w-embed">

                          

                          <svg fill="none" height="18" viewbox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">

                            <g clip-path="url(#clip0_138_5)">

                              <path d="M14.2358 3.33105C13.9949 3.33105 13.7988 3.52712 13.7988 3.76805C13.7988 4.00897 13.9949 4.20504 14.2358 4.20504C14.4768 4.20504 14.6728 4.00901 14.6728 3.76805C14.6728 3.52709 14.4768 3.33105 14.2358 3.33105Z" fill="currentColor" fill-opacity="0.9"></path>

                              <path d="M9.00299 5.12598C6.86682 5.12598 5.12891 6.86389 5.12891 9.00006C5.12891 11.1362 6.86682 12.8742 9.00299 12.8742C11.1392 12.8742 12.8771 11.1363 12.8771 9.00009C12.8771 6.86393 11.1392 5.12598 9.00299 5.12598Z" fill="currentColor" fill-opacity="0.9"></path>

                              <path d="M13.0597 0H4.92857C2.20772 0 -0.00585938 2.21358 -0.00585938 4.93446V13.0656C-0.00585938 15.7865 2.20772 18 4.92857 18H13.0597C15.7806 18 17.9941 15.7864 17.9941 13.0656V4.93446C17.9941 2.21358 15.7806 0 13.0597 0ZM8.99414 13.9371C6.27182 13.9371 4.05711 11.7223 4.05711 9C4.05711 6.27768 6.27185 4.06301 8.99414 4.06301C11.7164 4.06301 13.9312 6.27771 13.9312 9C13.9312 11.7223 11.7164 13.9371 8.99414 13.9371ZM14.2265 5.26767C13.3994 5.26767 12.7265 4.59478 12.7265 3.7677C12.7265 2.94061 13.3994 2.26768 14.2265 2.26768C15.0536 2.26768 15.7265 2.94057 15.7265 3.76766C15.7265 4.59475 15.0536 5.26767 14.2265 5.26767Z" fill="currentColor" fill-opacity="0.88"></path>

                            </g>

                          </svg></div></a><a class="footer-social-link w-inline-block" href="#" aria-label="X" title="X (link not configured yet)"><div class="w-embed">

                          

                          <svg fill="none" height="18" viewbox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">

                            <g clip-path="url(#clip0_138_15)">

                              <path d="M10.6764 7.62177L17.2333 0H15.6795L9.98621 6.61788L5.439 0H0.194336L7.07061 10.0074L0.194336 18H1.74818L7.76044 11.0113L12.5626 18H17.8073L10.6761 7.62177H10.6764ZM8.54823 10.0956L7.85152 9.09906L2.30805 1.16971H4.69467L9.16831 7.56895L9.86502 8.56546L15.6802 16.8835H13.2936L8.54823 10.096V10.0956Z" fill="currentColor" fill-opacity="0.88"></path>

                            </g>

                          </svg></div></a><a class="footer-social-link w-inline-block" href="#" aria-label="YouTube" title="YouTube (link not configured yet)"><div class="w-embed">

                          

                          <svg fill="none" height="18" viewbox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">

                            <path d="M17.082 4.78239C16.8875 4.05945 16.3175 3.48957 15.5947 3.29491C14.2742 2.93359 8.99198 2.93359 8.99198 2.93359C8.99198 2.93359 3.70999 2.93359 2.38947 3.28121C1.68055 3.47567 1.09666 4.05956 0.902199 4.78239C0.554688 6.10281 0.554688 8.84118 0.554688 8.84118C0.554688 8.84118 0.554688 11.5934 0.902199 12.9C1.09686 13.6228 1.66664 14.1927 2.38958 14.3874C3.7239 14.7488 8.99219 14.7488 8.99219 14.7488C8.99219 14.7488 14.2742 14.7488 15.5947 14.4012C16.3176 14.2066 16.8875 13.6367 17.0822 12.9139C17.4296 11.5934 17.4296 8.85509 17.4296 8.85509C17.4296 8.85509 17.4435 6.10281 17.082 4.78239ZM7.31025 11.371V6.31137L11.7027 8.84118L7.31025 11.371Z" fill="currentColor" fill-opacity="0.88"></path>

                          </svg></div></a>

                    </div>

                  </div>

                  <div class="footer-link-inner-block">

                    <div class="footer-link-title-block">

                      <h3 class="footer-link-title">quick link</h3>

                    </div>

                    <ul class="footer-link-list" role="list">

                      <li class="footer-list-item">

                        <a class="footer-link" href="/about-us">about us</a>

                      </li>

                      <li class="footer-list-item">

                        <a class="footer-link" href="/service">service</a>

                      </li>

                      <li class="footer-list-item">

                        <a class="footer-link" href="/blog">blog</a>

                      </li>

                      <li class="footer-list-item">

                        <a class="footer-link" href="/team">team</a>

                      </li>

                      <li class="footer-list-item">

                        <a class="footer-link" href="/contact-us">contact us</a>

                      </li>

                    </ul>

                  </div>

                  <div class="footer-link-inner-block first">

                    <div class="footer-link-title-block">

                      <h3 class="footer-link-title">security</h3>

                    </div>

                    <ul class="footer-link-list" role="list">

                      <li class="footer-list-item">

                        <a class="footer-link" href="/terms-conditions">term &amp;conditions</a>

                      </li>

                      <li class="footer-list-item">

                        <a class="footer-link" href="/privecy-policy">privacy policy</a>

                      </li>

                      <li class="footer-list-item">

                        <a class="footer-link" href="/brand-guidelines/style-guide">style guide</a>

                      </li>

                      <li class="footer-list-item">

                        <a class="footer-link" href="/brand-guidelines/license">license</a>

                      </li>

                      <li class="footer-list-item">

                        <a class="footer-link" href="/brand-guidelines/changelog">changelog</a>

                      </li>

                    </ul>

                  </div>

                  <div class="footer-link-inner-block last">

                    <div class="footer-link-title-block">

                      <h3 class="footer-link-title">contact us</h3>

                    </div>

                    <ul class="footer-link-list" role="list">

                      <li class="footer-list-item">

                        <a class="footer-link" href="tel:+91123456789">+91 123456789</a>

                      </li>

                      <li class="footer-list-item">

                        <span class="footer-link footer-placeholder-contact" title="Replace with clinic email">info@abc123@gmail.com</span>

                      </li>

                      <li class="footer-list-item">

                        <span class="footer-link footer-placeholder-contact">520, west valley amin and minim, new york</span>

                      </li>

                    </ul>

                  </div>

                </div>

              </div>

              <div class="footer-copyright-block">

                <div class="footer-copyright">

                  © Powered by

                  <a class="copyright-link" href="https://webflow.com/">Webflow</a>

                  created by

                  <a class="copyright-link" href="https://peacefulqode.com/">PeacefulQode</a>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
`;

export function Footer() {
  return `<footer id="footer">${HTML}</footer>`;
}

export function mountFooter() {
  const footer = document.getElementById('footer');
  if (!footer) return () => {};

  const controller = new AbortController();
  const { signal } = controller;
  const form = footer.querySelector('#email-form-2');
  const feedback = footer.querySelector('#footer-form-feedback');

  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = form.elements.namedItem('email');
    if (!input) return;
    const value = input.value.trim();
    input.value = value;
    if (!input.checkValidity()) {
      input.setAttribute('aria-invalid', 'true');
      input.reportValidity();
      feedback.textContent = t('Please enter a valid email address.');
      feedback.dataset.state = 'error';
    } else {
      input.removeAttribute('aria-invalid');
      feedback.textContent = t('Subscription is not connected yet. Your email was not sent or saved.');
      feedback.dataset.state = 'info';
    }
    feedback.hidden = false;
  }, { signal });

  form?.querySelector('input[type="email"]')?.addEventListener('input', (event) => {
    event.target.removeAttribute('aria-invalid');
    if (feedback) feedback.hidden = true;
  }, { signal });

  // The original social icons have no real URLs. Do not jump to the top of the page.
  footer.querySelectorAll('.footer-social-link[href="#"]').forEach((link) => {
    link.addEventListener('click', (event) => event.preventDefault(), { signal });
  });

  return () => controller.abort();
}
