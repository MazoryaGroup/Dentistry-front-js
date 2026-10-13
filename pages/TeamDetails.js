/**
 * Dentistry — TeamDetails page. Converted from provided Webflow HTML.
 * All page content is currently static; no API calls are made.
 * Shared header and footer are rendered by the router.
 */
import { initPageInteractions } from '../code/interactions.js';

const HTML = String.raw`
<section class="back-to-top-section" id="Top">

      <a class="back-to-top w-inline-block" href="#Top"><img alt="Up Arrow" class="up-arrow" loading="lazy" src="https://cdn.prod.website-files.com/6768f6d314e679aeffeed929/676fc798e42758d966a9e6ca_Arrow%201.svg"/></a>

    </section>

<section class="section breadcrumb-section">

      <div class="w-layout-blockcontainer container-fluid w-container">

        <div class="breadcrumb-block">

          <div class="w-layout-blockcontainer container w-container">

            <div class="breadcrumb-main-title-block">

              <div class="breadcrumb-title-block">

                <h1 class="breadcrumb-title">dental expert</h1>

              </div>

              <div class="breadcrumb-subtext-block">

                <div class="breadcrumb-subtext">home</div>

                <div class="breadcrumb-subtext">-</div>

                <div class="breadcrumb-subtext">team expert</div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

<section class="section team-single-section">

      <div class="w-layout-blockcontainer container w-container">

        <div class="w-layout-grid expert-grid">

          <div class="left-expert-grid">

            <div class="expert-image-block">

              <img alt="" class="expert-image" loading="lazy" src="https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/679c72b47f96c23ec6baac4a_image%2012.png"/>

            </div>

            <div class="expert-flex-block">

              <h3 class="expert-team-tilte">Dr. Adam Smith</h3>

              <div class="expert-designation">Cosmetic Dentist</div>

            </div>

            <div class="team-social-block one">

              <a class="team-social-link-one w-inline-block" href="https://x.com/i/flow/login"><div class="w-embed">

                  

                  <svg fill="none" height="18" viewbox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">

                    <g clip-path="url(#clip0_138_15)">

                      <path d="M10.6764 7.62177L17.2333 0H15.6795L9.98621 6.61788L5.439 0H0.194336L7.07061 10.0074L0.194336 18H1.74818L7.76044 11.0113L12.5626 18H17.8073L10.6761 7.62177H10.6764ZM8.54823 10.0956L7.85152 9.09906L2.30805 1.16971H4.69467L9.16831 7.56895L9.86502 8.56546L15.6802 16.8835H13.2936L8.54823 10.096V10.0956Z" fill="currentColor" fill-opacity="0.88"></path>

                    </g>

                  </svg></div></a><a class="team-social-link-one w-inline-block" href="https://www.facebook.com/login.php/"><div class="w-embed">

                  

                  <svg fill="none" height="18" viewbox="0 0 10 18" width="10" xmlns="http://www.w3.org/2000/svg">

                    <path d="M6.06741 18V9.78996H8.82208L9.23536 6.58941H6.06741V4.54632C6.06741 3.61998 6.32359 2.98869 7.65347 2.98869L9.34686 2.98799V0.125307C9.05401 0.0872508 8.04877 0 6.87877 0C4.43564 0 2.76302 1.49127 2.76302 4.22934V6.58941H0V9.78996H2.76302V18H6.06741Z" fill="currentColor" fill-opacity="0.88"></path>

                  </svg></div></a><a class="team-social-link-one w-inline-block" href="https://www.instagram.com/accounts/login/"><div class="w-embed">

                  

                  <svg fill="none" height="18" viewbox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">

                    <g clip-path="url(#clip0_138_5)">

                      <path d="M14.2358 3.33105C13.9949 3.33105 13.7988 3.52712 13.7988 3.76805C13.7988 4.00897 13.9949 4.20504 14.2358 4.20504C14.4768 4.20504 14.6728 4.00901 14.6728 3.76805C14.6728 3.52709 14.4768 3.33105 14.2358 3.33105Z" fill="currentColor" fill-opacity="0.9"></path>

                      <path d="M9.00299 5.12598C6.86682 5.12598 5.12891 6.86389 5.12891 9.00006C5.12891 11.1362 6.86682 12.8742 9.00299 12.8742C11.1392 12.8742 12.8771 11.1363 12.8771 9.00009C12.8771 6.86393 11.1392 5.12598 9.00299 5.12598Z" fill="currentColor" fill-opacity="0.9"></path>

                      <path d="M13.0597 0H4.92857C2.20772 0 -0.00585938 2.21358 -0.00585938 4.93446V13.0656C-0.00585938 15.7865 2.20772 18 4.92857 18H13.0597C15.7806 18 17.9941 15.7864 17.9941 13.0656V4.93446C17.9941 2.21358 15.7806 0 13.0597 0ZM8.99414 13.9371C6.27182 13.9371 4.05711 11.7223 4.05711 9C4.05711 6.27768 6.27185 4.06301 8.99414 4.06301C11.7164 4.06301 13.9312 6.27771 13.9312 9C13.9312 11.7223 11.7164 13.9371 8.99414 13.9371ZM14.2265 5.26767C13.3994 5.26767 12.7265 4.59478 12.7265 3.7677C12.7265 2.94061 13.3994 2.26768 14.2265 2.26768C15.0536 2.26768 15.7265 2.94057 15.7265 3.76766C15.7265 4.59475 15.0536 5.26767 14.2265 5.26767Z" fill="currentColor" fill-opacity="0.88"></path>

                    </g>

                  </svg></div></a>

            </div>

            <div class="main-expert-duration">

              <div class="inner-expert-duration">

                <h3 class="expert-duration-title">100+</h3>

                <div class="expert-duration-subtitle">positive review</div>

              </div>

              <div class="inner-expert-duration">

                <h3 class="expert-duration-title">10+</h3>

                <div class="expert-duration-subtitle">year of experiences</div>

              </div>

            </div>

            <div class="main-expert-duration last">

              <h4 class="inner-expert-title">Available time</h4>

              <div class="inner-expert-duration last">

                <h5 class="expert-title">Monday - Saturday:</h5>

                <div class="expert-duration-subtitle last">

                  9:00 pm to 7:00 am

                </div>

              </div>

              <div class="inner-expert-duration last one">

                <h4 class="expert-title">sunday:</h4>

                <div class="expert-duration-subtitle">close</div>

              </div>

            </div>

            <div class="main-expert-duration last border-off">

              <h4 class="inner-expert-title">contact us</h4>

              <div class="inner-expert-duration last">

                <div class="contact-icon-block">

                  <img alt="Mail Icon" class="mail-icon" loading="lazy" src="https://cdn.prod.website-files.com/6768f6d314e679aeffeed929/6772454e6eb71bebe3b39d11_1%20%281%29.svg"/>

                </div>

                <a class="contact-link-one" href="mailto:mailus23@gmail.com">mailus23@gmail.com</a>

              </div>

              <div class="inner-expert-duration last zero">

                <div class="contact-icon-block">

                  <img alt="Mail Icon" class="call-icon" loading="lazy" src="https://cdn.prod.website-files.com/6768f6d314e679aeffeed929/6772454e07a2e6d0e8f02d37_1%20%282%29.svg"/>

                </div>

                <a class="contact-link-one" href="tel:(000)123456789">(000) 123456789</a>

              </div>

            </div>

            <div class="expert-button-block">

              <a class="button-primary w-inline-block" data-w-id="2192d6ae-f694-afec-d3e3-1590d12bae8e" href="/contact-us"><div class="button-primary-text">contact us</div>

                <div class="button-icon-block">

                  <img alt="Button Icon" class="button-icon" loading="lazy" src="https://cdn.prod.website-files.com/6768f6d314e679aeffeed929/676923878f05f400928066e8_Vector%20%283%29.svg"/></div></a>

            </div>

          </div>

          <div class="right-expert-grid">

            <div class="right-expert-sticky" data-w-id="60ae7f2d-b2ac-3f66-94e7-a2f63aaf265d">

              <div class="expert-richbox w-richtext">

                <h4>about Dr. Adam Smith</h4>

                <p>

                  Dr. Adam Smith is a highly experienced and compassionate

                  dentist, committed to delivering exceptional oral healthcare

                  to patients of all ages. With over 6 years of professional

                  experience, and is known for creating personalized treatment

                  plans tailored to each patient’s unique needs.<br/><br/>Dr.

                  Smith earned their dental degree from has continually expanded

                  their knowledge by attending advanced training programs and

                  staying updated with the latest advancements in dentistry.

                  Over the years, they have successfully performed  and have

                  helped countless patients regain confidence through healthy,

                  beautiful smiles.

                </p>

                <p>‍</p>

                <h4>Work experience<br/></h4>

                <p>

                  With over 6 years of experience in the dental field, Dr. Adam

                  Smith has built a reputation as a skilled and caring

                  professional dedicated to enhancing oral health and

                  transforming smiles. Dr. Smith has worked in both private

                  practice and collaborative dental teams, gaining expertise in

                  a wide range of dental procedures, including cosmetic

                  dentistry, restorative treatments, and preventive care.<br/><br/>

                </p>

                <li>Custom porcelain veneers</li>

                <li>Dental bonding for repairs</li>

                <li>Comprehensive smile makeovers</li>

                <li>Clear Invisalign aligners<br/>‍</li>

                <p>

                  By continuously embracing advancements in dental technology

                  and techniques, Dr. Smith ensures patients receive the highest

                  standard of care in a comfortable and welcoming environment.

                  Their career reflects a deep dedication to helping patients

                  achieve healthy, confident smiles.

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
`;

export function TeamDetails() {
  return HTML;
}

export function initTeamDetails() {
  return initPageInteractions(document.getElementById('app'));
}
