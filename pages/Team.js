/**
 * Dentistry — Team page. Converted from provided Webflow HTML.
 * All page content is currently static; no API calls are made.
 * Shared header and footer are rendered by the router.
 */
import { initPageInteractions } from '../code/interactions.js';

const HTML = String.raw`
<section class="section breadcrumb-section">

      <div class="w-layout-blockcontainer container-fluid w-container">

        <div class="breadcrumb-block">

          <div class="w-layout-blockcontainer container w-container">

            <div class="breadcrumb-main-title-block">

              <div class="breadcrumb-title-block">

                <h1 class="breadcrumb-title">team</h1>

              </div>

              <div class="breadcrumb-subtext-block">

                <div class="breadcrumb-subtext">home</div>

                <div class="breadcrumb-subtext">-</div>

                <div class="breadcrumb-subtext">team</div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

<section class="section team-three-section">

      <div class="w-layout-blockcontainer container w-container">

        <div class="team-three-main-block">

          <div class="section-title-main-block">

            <div class="section-title-sub-text-block">

              <div class="section-sub-text">our service</div>

            </div>

            <div class="section-title-grid">

              <h2 class="section-title">

                we provide best service our patients

              </h2>

            </div>

          </div>

          <div class="w-dyn-list">

            <div class="team-three-list w-dyn-items" role="list">

              <div class="w-dyn-item" data-w-id="5e4e868d-f5d1-d0d9-e555-468bb756c8b2" role="listitem">

                <div class="team-block" data-w-id="4c838bf6-ac27-87b8-a5d1-89d8a2502aab">

                  <a class="team-link w-inline-block" href="/team/dr-adam-smith"><h3 class="team-info-title" data-w-id="788e487b-a6a2-d6ef-d3f5-2c053b8f7714">

                      Dr. Adam Smith

                    </h3>

                    <div class="team-designation" data-w-id="7eed02bc-7922-997a-4b1c-54a4f7f625a0">

                      Cosmetic Dentist

                    </div></a><a class="team-link w-inline-block" href="/team/dr-adam-smith"><div class="team-image-block">

                      <img alt="Team Image" class="team-image" loading="lazy" src="https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/67723753296a1a6e8dba5242_team%20image%20%284%29.webp"/></div></a>

                  <div class="team-link-block">

                    <div class="team-link-block-one">

                      <a class="link-block w-inline-block" href="/team/dr-adam-smith"><div class="link-button" data-w-id="414eebbf-af03-5536-e363-4c9a2385a514">

                          read more

                        </div>

                        <div class="link-border" data-w-id="414eebbf-af03-5536-e363-4c9a2385a516"></div></a>

                    </div>

                    <div class="team-social-icon-block">

                      <a class="team-social-link w-inline-block" href="https://www.facebook.com/login.php/"><div class="w-embed">

                          

                          <svg fill="none" height="18" viewbox="0 0 10 18" width="10" xmlns="http://www.w3.org/2000/svg">

                            <path d="M6.06741 18V9.78996H8.82208L9.23536 6.58941H6.06741V4.54632C6.06741 3.61998 6.32359 2.98869 7.65347 2.98869L9.34686 2.98799V0.125307C9.05401 0.0872508 8.04877 0 6.87877 0C4.43564 0 2.76302 1.49127 2.76302 4.22934V6.58941H0V9.78996H2.76302V18H6.06741Z" fill="currentColor" fill-opacity="0.88"></path>

                          </svg></div></a><a class="team-social-link w-inline-block" href="https://x.com/i/flow/login"><div class="w-embed">

                          

                          <svg fill="none" height="18" viewbox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">

                            <g clip-path="url(#clip0_138_15)">

                              <path d="M10.6764 7.62177L17.2333 0H15.6795L9.98621 6.61788L5.439 0H0.194336L7.07061 10.0074L0.194336 18H1.74818L7.76044 11.0113L12.5626 18H17.8073L10.6761 7.62177H10.6764ZM8.54823 10.0956L7.85152 9.09906L2.30805 1.16971H4.69467L9.16831 7.56895L9.86502 8.56546L15.6802 16.8835H13.2936L8.54823 10.096V10.0956Z" fill="currentColor" fill-opacity="0.88"></path>

                            </g>

                          </svg></div></a><a class="team-social-link w-inline-block" href="https://www.instagram.com/accounts/login/"><div class="w-embed">

                          

                          <svg fill="none" height="18" viewbox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">

                            <g clip-path="url(#clip0_138_5)">

                              <path d="M14.2358 3.33105C13.9949 3.33105 13.7988 3.52712 13.7988 3.76805C13.7988 4.00897 13.9949 4.20504 14.2358 4.20504C14.4768 4.20504 14.6728 4.00901 14.6728 3.76805C14.6728 3.52709 14.4768 3.33105 14.2358 3.33105Z" fill="currentColor" fill-opacity="0.9"></path>

                              <path d="M9.00299 5.12598C6.86682 5.12598 5.12891 6.86389 5.12891 9.00006C5.12891 11.1362 6.86682 12.8742 9.00299 12.8742C11.1392 12.8742 12.8771 11.1363 12.8771 9.00009C12.8771 6.86393 11.1392 5.12598 9.00299 5.12598Z" fill="currentColor" fill-opacity="0.9"></path>

                              <path d="M13.0597 0H4.92857C2.20772 0 -0.00585938 2.21358 -0.00585938 4.93446V13.0656C-0.00585938 15.7865 2.20772 18 4.92857 18H13.0597C15.7806 18 17.9941 15.7864 17.9941 13.0656V4.93446C17.9941 2.21358 15.7806 0 13.0597 0ZM8.99414 13.9371C6.27182 13.9371 4.05711 11.7223 4.05711 9C4.05711 6.27768 6.27185 4.06301 8.99414 4.06301C11.7164 4.06301 13.9312 6.27771 13.9312 9C13.9312 11.7223 11.7164 13.9371 8.99414 13.9371ZM14.2265 5.26767C13.3994 5.26767 12.7265 4.59478 12.7265 3.7677C12.7265 2.94061 13.3994 2.26768 14.2265 2.26768C15.0536 2.26768 15.7265 2.94057 15.7265 3.76766C15.7265 4.59475 15.0536 5.26767 14.2265 5.26767Z" fill="currentColor" fill-opacity="0.88"></path>

                            </g>

                          </svg></div></a>

                    </div>

                  </div>

                </div>

              </div>

              <div class="w-dyn-item" data-w-id="5e4e868d-f5d1-d0d9-e555-468bb756c8b2" role="listitem">

                <div class="team-block" data-w-id="4c838bf6-ac27-87b8-a5d1-89d8a2502aab">

                  <a class="team-link w-inline-block" href="/team/dr-michel-martin"><h3 class="team-info-title" data-w-id="788e487b-a6a2-d6ef-d3f5-2c053b8f7714">

                      Dr. Michel Martin

                    </h3>

                    <div class="team-designation" data-w-id="7eed02bc-7922-997a-4b1c-54a4f7f625a0">

                      General Dentist

                    </div></a><a class="team-link w-inline-block" href="/team/dr-michel-martin"><div class="team-image-block">

                      <img alt="Team Image" class="team-image" loading="lazy" src="https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/67723761f717bbd7ba6a6243_team%20image%20%283%29.webp"/></div></a>

                  <div class="team-link-block">

                    <div class="team-link-block-one">

                      <a class="link-block w-inline-block" href="/team/dr-michel-martin"><div class="link-button" data-w-id="414eebbf-af03-5536-e363-4c9a2385a514">

                          read more

                        </div>

                        <div class="link-border" data-w-id="414eebbf-af03-5536-e363-4c9a2385a516"></div></a>

                    </div>

                    <div class="team-social-icon-block">

                      <a class="team-social-link w-inline-block" href="https://www.facebook.com/login.php/"><div class="w-embed">

                          

                          <svg fill="none" height="18" viewbox="0 0 10 18" width="10" xmlns="http://www.w3.org/2000/svg">

                            <path d="M6.06741 18V9.78996H8.82208L9.23536 6.58941H6.06741V4.54632C6.06741 3.61998 6.32359 2.98869 7.65347 2.98869L9.34686 2.98799V0.125307C9.05401 0.0872508 8.04877 0 6.87877 0C4.43564 0 2.76302 1.49127 2.76302 4.22934V6.58941H0V9.78996H2.76302V18H6.06741Z" fill="currentColor" fill-opacity="0.88"></path>

                          </svg></div></a><a class="team-social-link w-inline-block" href="https://x.com/i/flow/login"><div class="w-embed">

                          

                          <svg fill="none" height="18" viewbox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">

                            <g clip-path="url(#clip0_138_15)">

                              <path d="M10.6764 7.62177L17.2333 0H15.6795L9.98621 6.61788L5.439 0H0.194336L7.07061 10.0074L0.194336 18H1.74818L7.76044 11.0113L12.5626 18H17.8073L10.6761 7.62177H10.6764ZM8.54823 10.0956L7.85152 9.09906L2.30805 1.16971H4.69467L9.16831 7.56895L9.86502 8.56546L15.6802 16.8835H13.2936L8.54823 10.096V10.0956Z" fill="currentColor" fill-opacity="0.88"></path>

                            </g>

                          </svg></div></a><a class="team-social-link w-inline-block" href="https://www.instagram.com/accounts/login/"><div class="w-embed">

                          

                          <svg fill="none" height="18" viewbox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">

                            <g clip-path="url(#clip0_138_5)">

                              <path d="M14.2358 3.33105C13.9949 3.33105 13.7988 3.52712 13.7988 3.76805C13.7988 4.00897 13.9949 4.20504 14.2358 4.20504C14.4768 4.20504 14.6728 4.00901 14.6728 3.76805C14.6728 3.52709 14.4768 3.33105 14.2358 3.33105Z" fill="currentColor" fill-opacity="0.9"></path>

                              <path d="M9.00299 5.12598C6.86682 5.12598 5.12891 6.86389 5.12891 9.00006C5.12891 11.1362 6.86682 12.8742 9.00299 12.8742C11.1392 12.8742 12.8771 11.1363 12.8771 9.00009C12.8771 6.86393 11.1392 5.12598 9.00299 5.12598Z" fill="currentColor" fill-opacity="0.9"></path>

                              <path d="M13.0597 0H4.92857C2.20772 0 -0.00585938 2.21358 -0.00585938 4.93446V13.0656C-0.00585938 15.7865 2.20772 18 4.92857 18H13.0597C15.7806 18 17.9941 15.7864 17.9941 13.0656V4.93446C17.9941 2.21358 15.7806 0 13.0597 0ZM8.99414 13.9371C6.27182 13.9371 4.05711 11.7223 4.05711 9C4.05711 6.27768 6.27185 4.06301 8.99414 4.06301C11.7164 4.06301 13.9312 6.27771 13.9312 9C13.9312 11.7223 11.7164 13.9371 8.99414 13.9371ZM14.2265 5.26767C13.3994 5.26767 12.7265 4.59478 12.7265 3.7677C12.7265 2.94061 13.3994 2.26768 14.2265 2.26768C15.0536 2.26768 15.7265 2.94057 15.7265 3.76766C15.7265 4.59475 15.0536 5.26767 14.2265 5.26767Z" fill="currentColor" fill-opacity="0.88"></path>

                            </g>

                          </svg></div></a>

                    </div>

                  </div>

                </div>

              </div>

              <div class="w-dyn-item" data-w-id="5e4e868d-f5d1-d0d9-e555-468bb756c8b2" role="listitem">

                <div class="team-block" data-w-id="4c838bf6-ac27-87b8-a5d1-89d8a2502aab">

                  <a class="team-link w-inline-block" href="/team/dr-archie-white"><h3 class="team-info-title" data-w-id="788e487b-a6a2-d6ef-d3f5-2c053b8f7714">

                      Dr. Archie White

                    </h3>

                    <div class="team-designation" data-w-id="7eed02bc-7922-997a-4b1c-54a4f7f625a0">

                      Dental Assistant

                    </div></a><a class="team-link w-inline-block" href="/team/dr-archie-white"><div class="team-image-block">

                      <img alt="Team Image" class="team-image" loading="lazy" src="https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/67723777d488bf6feb273a54_team%20image%20%282%29.webp"/></div></a>

                  <div class="team-link-block">

                    <div class="team-link-block-one">

                      <a class="link-block w-inline-block" href="/team/dr-archie-white"><div class="link-button" data-w-id="414eebbf-af03-5536-e363-4c9a2385a514">

                          read more

                        </div>

                        <div class="link-border" data-w-id="414eebbf-af03-5536-e363-4c9a2385a516"></div></a>

                    </div>

                    <div class="team-social-icon-block">

                      <a class="team-social-link w-inline-block" href="https://www.facebook.com/login.php/"><div class="w-embed">

                          

                          <svg fill="none" height="18" viewbox="0 0 10 18" width="10" xmlns="http://www.w3.org/2000/svg">

                            <path d="M6.06741 18V9.78996H8.82208L9.23536 6.58941H6.06741V4.54632C6.06741 3.61998 6.32359 2.98869 7.65347 2.98869L9.34686 2.98799V0.125307C9.05401 0.0872508 8.04877 0 6.87877 0C4.43564 0 2.76302 1.49127 2.76302 4.22934V6.58941H0V9.78996H2.76302V18H6.06741Z" fill="currentColor" fill-opacity="0.88"></path>

                          </svg></div></a><a class="team-social-link w-inline-block" href="https://x.com/i/flow/login"><div class="w-embed">

                          

                          <svg fill="none" height="18" viewbox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">

                            <g clip-path="url(#clip0_138_15)">

                              <path d="M10.6764 7.62177L17.2333 0H15.6795L9.98621 6.61788L5.439 0H0.194336L7.07061 10.0074L0.194336 18H1.74818L7.76044 11.0113L12.5626 18H17.8073L10.6761 7.62177H10.6764ZM8.54823 10.0956L7.85152 9.09906L2.30805 1.16971H4.69467L9.16831 7.56895L9.86502 8.56546L15.6802 16.8835H13.2936L8.54823 10.096V10.0956Z" fill="currentColor" fill-opacity="0.88"></path>

                            </g>

                          </svg></div></a><a class="team-social-link w-inline-block" href="https://www.instagram.com/accounts/login/"><div class="w-embed">

                          

                          <svg fill="none" height="18" viewbox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">

                            <g clip-path="url(#clip0_138_5)">

                              <path d="M14.2358 3.33105C13.9949 3.33105 13.7988 3.52712 13.7988 3.76805C13.7988 4.00897 13.9949 4.20504 14.2358 4.20504C14.4768 4.20504 14.6728 4.00901 14.6728 3.76805C14.6728 3.52709 14.4768 3.33105 14.2358 3.33105Z" fill="currentColor" fill-opacity="0.9"></path>

                              <path d="M9.00299 5.12598C6.86682 5.12598 5.12891 6.86389 5.12891 9.00006C5.12891 11.1362 6.86682 12.8742 9.00299 12.8742C11.1392 12.8742 12.8771 11.1363 12.8771 9.00009C12.8771 6.86393 11.1392 5.12598 9.00299 5.12598Z" fill="currentColor" fill-opacity="0.9"></path>

                              <path d="M13.0597 0H4.92857C2.20772 0 -0.00585938 2.21358 -0.00585938 4.93446V13.0656C-0.00585938 15.7865 2.20772 18 4.92857 18H13.0597C15.7806 18 17.9941 15.7864 17.9941 13.0656V4.93446C17.9941 2.21358 15.7806 0 13.0597 0ZM8.99414 13.9371C6.27182 13.9371 4.05711 11.7223 4.05711 9C4.05711 6.27768 6.27185 4.06301 8.99414 4.06301C11.7164 4.06301 13.9312 6.27771 13.9312 9C13.9312 11.7223 11.7164 13.9371 8.99414 13.9371ZM14.2265 5.26767C13.3994 5.26767 12.7265 4.59478 12.7265 3.7677C12.7265 2.94061 13.3994 2.26768 14.2265 2.26768C15.0536 2.26768 15.7265 2.94057 15.7265 3.76766C15.7265 4.59475 15.0536 5.26767 14.2265 5.26767Z" fill="currentColor" fill-opacity="0.88"></path>

                            </g>

                          </svg></div></a>

                    </div>

                  </div>

                </div>

              </div>

              <div class="w-dyn-item" data-w-id="5e4e868d-f5d1-d0d9-e555-468bb756c8b2" role="listitem">

                <div class="team-block" data-w-id="4c838bf6-ac27-87b8-a5d1-89d8a2502aab">

                  <a class="team-link w-inline-block" href="/team/dr-maria-angel"><h3 class="team-info-title" data-w-id="788e487b-a6a2-d6ef-d3f5-2c053b8f7714">

                      Dr. Maria Angel

                    </h3>

                    <div class="team-designation" data-w-id="7eed02bc-7922-997a-4b1c-54a4f7f625a0">

                      General Dentist

                    </div></a><a class="team-link w-inline-block" href="/team/dr-maria-angel"><div class="team-image-block">

                      <img alt="Team Image" class="team-image" loading="lazy" src="https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/67723785a659bd4b34e791c4_team%20image%20%281%29.webp"/></div></a>

                  <div class="team-link-block">

                    <div class="team-link-block-one">

                      <a class="link-block w-inline-block" href="/team/dr-maria-angel"><div class="link-button" data-w-id="414eebbf-af03-5536-e363-4c9a2385a514">

                          read more

                        </div>

                        <div class="link-border" data-w-id="414eebbf-af03-5536-e363-4c9a2385a516"></div></a>

                    </div>

                    <div class="team-social-icon-block">

                      <a class="team-social-link w-inline-block" href="https://www.facebook.com/login.php/"><div class="w-embed">

                          

                          <svg fill="none" height="18" viewbox="0 0 10 18" width="10" xmlns="http://www.w3.org/2000/svg">

                            <path d="M6.06741 18V9.78996H8.82208L9.23536 6.58941H6.06741V4.54632C6.06741 3.61998 6.32359 2.98869 7.65347 2.98869L9.34686 2.98799V0.125307C9.05401 0.0872508 8.04877 0 6.87877 0C4.43564 0 2.76302 1.49127 2.76302 4.22934V6.58941H0V9.78996H2.76302V18H6.06741Z" fill="currentColor" fill-opacity="0.88"></path>

                          </svg></div></a><a class="team-social-link w-inline-block" href="https://x.com/i/flow/login"><div class="w-embed">

                          

                          <svg fill="none" height="18" viewbox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">

                            <g clip-path="url(#clip0_138_15)">

                              <path d="M10.6764 7.62177L17.2333 0H15.6795L9.98621 6.61788L5.439 0H0.194336L7.07061 10.0074L0.194336 18H1.74818L7.76044 11.0113L12.5626 18H17.8073L10.6761 7.62177H10.6764ZM8.54823 10.0956L7.85152 9.09906L2.30805 1.16971H4.69467L9.16831 7.56895L9.86502 8.56546L15.6802 16.8835H13.2936L8.54823 10.096V10.0956Z" fill="currentColor" fill-opacity="0.88"></path>

                            </g>

                          </svg></div></a><a class="team-social-link w-inline-block" href="https://www.instagram.com/accounts/login/"><div class="w-embed">

                          

                          <svg fill="none" height="18" viewbox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">

                            <g clip-path="url(#clip0_138_5)">

                              <path d="M14.2358 3.33105C13.9949 3.33105 13.7988 3.52712 13.7988 3.76805C13.7988 4.00897 13.9949 4.20504 14.2358 4.20504C14.4768 4.20504 14.6728 4.00901 14.6728 3.76805C14.6728 3.52709 14.4768 3.33105 14.2358 3.33105Z" fill="currentColor" fill-opacity="0.9"></path>

                              <path d="M9.00299 5.12598C6.86682 5.12598 5.12891 6.86389 5.12891 9.00006C5.12891 11.1362 6.86682 12.8742 9.00299 12.8742C11.1392 12.8742 12.8771 11.1363 12.8771 9.00009C12.8771 6.86393 11.1392 5.12598 9.00299 5.12598Z" fill="currentColor" fill-opacity="0.9"></path>

                              <path d="M13.0597 0H4.92857C2.20772 0 -0.00585938 2.21358 -0.00585938 4.93446V13.0656C-0.00585938 15.7865 2.20772 18 4.92857 18H13.0597C15.7806 18 17.9941 15.7864 17.9941 13.0656V4.93446C17.9941 2.21358 15.7806 0 13.0597 0ZM8.99414 13.9371C6.27182 13.9371 4.05711 11.7223 4.05711 9C4.05711 6.27768 6.27185 4.06301 8.99414 4.06301C11.7164 4.06301 13.9312 6.27771 13.9312 9C13.9312 11.7223 11.7164 13.9371 8.99414 13.9371ZM14.2265 5.26767C13.3994 5.26767 12.7265 4.59478 12.7265 3.7677C12.7265 2.94061 13.3994 2.26768 14.2265 2.26768C15.0536 2.26768 15.7265 2.94057 15.7265 3.76766C15.7265 4.59475 15.0536 5.26767 14.2265 5.26767Z" fill="currentColor" fill-opacity="0.88"></path>

                            </g>

                          </svg></div></a>

                    </div>

                  </div>

                </div>

              </div>

              <div class="w-dyn-item" data-w-id="5e4e868d-f5d1-d0d9-e555-468bb756c8b2" role="listitem">

                <div class="team-block" data-w-id="4c838bf6-ac27-87b8-a5d1-89d8a2502aab">

                  <a class="team-link w-inline-block" href="/team/dr-john-martin"><h3 class="team-info-title" data-w-id="788e487b-a6a2-d6ef-d3f5-2c053b8f7714">

                      Dr. John Martin

                    </h3>

                    <div class="team-designation" data-w-id="7eed02bc-7922-997a-4b1c-54a4f7f625a0">

                      Dental Therapist

                    </div></a><a class="team-link w-inline-block" href="/team/dr-john-martin"><div class="team-image-block">

                      <img alt="Team Image" class="team-image" loading="lazy" src="https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/677237961f435dcc4d408e20_team%20image%20%286%29.webp"/></div></a>

                  <div class="team-link-block">

                    <div class="team-link-block-one">

                      <a class="link-block w-inline-block" href="/team/dr-john-martin"><div class="link-button" data-w-id="414eebbf-af03-5536-e363-4c9a2385a514">

                          read more

                        </div>

                        <div class="link-border" data-w-id="414eebbf-af03-5536-e363-4c9a2385a516"></div></a>

                    </div>

                    <div class="team-social-icon-block">

                      <a class="team-social-link w-inline-block" href="https://www.facebook.com/login.php/"><div class="w-embed">

                          

                          <svg fill="none" height="18" viewbox="0 0 10 18" width="10" xmlns="http://www.w3.org/2000/svg">

                            <path d="M6.06741 18V9.78996H8.82208L9.23536 6.58941H6.06741V4.54632C6.06741 3.61998 6.32359 2.98869 7.65347 2.98869L9.34686 2.98799V0.125307C9.05401 0.0872508 8.04877 0 6.87877 0C4.43564 0 2.76302 1.49127 2.76302 4.22934V6.58941H0V9.78996H2.76302V18H6.06741Z" fill="currentColor" fill-opacity="0.88"></path>

                          </svg></div></a><a class="team-social-link w-inline-block" href="https://x.com/i/flow/login"><div class="w-embed">

                          

                          <svg fill="none" height="18" viewbox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">

                            <g clip-path="url(#clip0_138_15)">

                              <path d="M10.6764 7.62177L17.2333 0H15.6795L9.98621 6.61788L5.439 0H0.194336L7.07061 10.0074L0.194336 18H1.74818L7.76044 11.0113L12.5626 18H17.8073L10.6761 7.62177H10.6764ZM8.54823 10.0956L7.85152 9.09906L2.30805 1.16971H4.69467L9.16831 7.56895L9.86502 8.56546L15.6802 16.8835H13.2936L8.54823 10.096V10.0956Z" fill="currentColor" fill-opacity="0.88"></path>

                            </g>

                          </svg></div></a><a class="team-social-link w-inline-block" href="https://www.instagram.com/accounts/login/"><div class="w-embed">

                          

                          <svg fill="none" height="18" viewbox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">

                            <g clip-path="url(#clip0_138_5)">

                              <path d="M14.2358 3.33105C13.9949 3.33105 13.7988 3.52712 13.7988 3.76805C13.7988 4.00897 13.9949 4.20504 14.2358 4.20504C14.4768 4.20504 14.6728 4.00901 14.6728 3.76805C14.6728 3.52709 14.4768 3.33105 14.2358 3.33105Z" fill="currentColor" fill-opacity="0.9"></path>

                              <path d="M9.00299 5.12598C6.86682 5.12598 5.12891 6.86389 5.12891 9.00006C5.12891 11.1362 6.86682 12.8742 9.00299 12.8742C11.1392 12.8742 12.8771 11.1363 12.8771 9.00009C12.8771 6.86393 11.1392 5.12598 9.00299 5.12598Z" fill="currentColor" fill-opacity="0.9"></path>

                              <path d="M13.0597 0H4.92857C2.20772 0 -0.00585938 2.21358 -0.00585938 4.93446V13.0656C-0.00585938 15.7865 2.20772 18 4.92857 18H13.0597C15.7806 18 17.9941 15.7864 17.9941 13.0656V4.93446C17.9941 2.21358 15.7806 0 13.0597 0ZM8.99414 13.9371C6.27182 13.9371 4.05711 11.7223 4.05711 9C4.05711 6.27768 6.27185 4.06301 8.99414 4.06301C11.7164 4.06301 13.9312 6.27771 13.9312 9C13.9312 11.7223 11.7164 13.9371 8.99414 13.9371ZM14.2265 5.26767C13.3994 5.26767 12.7265 4.59478 12.7265 3.7677C12.7265 2.94061 13.3994 2.26768 14.2265 2.26768C15.0536 2.26768 15.7265 2.94057 15.7265 3.76766C15.7265 4.59475 15.0536 5.26767 14.2265 5.26767Z" fill="currentColor" fill-opacity="0.88"></path>

                            </g>

                          </svg></div></a>

                    </div>

                  </div>

                </div>

              </div>

              <div class="w-dyn-item" data-w-id="5e4e868d-f5d1-d0d9-e555-468bb756c8b2" role="listitem">

                <div class="team-block" data-w-id="4c838bf6-ac27-87b8-a5d1-89d8a2502aab">

                  <a class="team-link w-inline-block" href="/team/dr-fiona-park"><h3 class="team-info-title" data-w-id="788e487b-a6a2-d6ef-d3f5-2c053b8f7714">

                      Dr. Fiona Park

                    </h3>

                    <div class="team-designation" data-w-id="7eed02bc-7922-997a-4b1c-54a4f7f625a0">

                      Heating Expert

                    </div></a><a class="team-link w-inline-block" href="/team/dr-fiona-park"><div class="team-image-block">

                      <img alt="Team Image" class="team-image" loading="lazy" src="https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/677237a4c789e95331ba5548_team%20image%20%285%29.webp"/></div></a>

                  <div class="team-link-block">

                    <div class="team-link-block-one">

                      <a class="link-block w-inline-block" href="/team/dr-fiona-park"><div class="link-button" data-w-id="414eebbf-af03-5536-e363-4c9a2385a514">

                          read more

                        </div>

                        <div class="link-border" data-w-id="414eebbf-af03-5536-e363-4c9a2385a516"></div></a>

                    </div>

                    <div class="team-social-icon-block">

                      <a class="team-social-link w-inline-block" href="https://www.facebook.com/login.php/"><div class="w-embed">

                          

                          <svg fill="none" height="18" viewbox="0 0 10 18" width="10" xmlns="http://www.w3.org/2000/svg">

                            <path d="M6.06741 18V9.78996H8.82208L9.23536 6.58941H6.06741V4.54632C6.06741 3.61998 6.32359 2.98869 7.65347 2.98869L9.34686 2.98799V0.125307C9.05401 0.0872508 8.04877 0 6.87877 0C4.43564 0 2.76302 1.49127 2.76302 4.22934V6.58941H0V9.78996H2.76302V18H6.06741Z" fill="currentColor" fill-opacity="0.88"></path>

                          </svg></div></a><a class="team-social-link w-inline-block" href="https://x.com/i/flow/login"><div class="w-embed">

                          

                          <svg fill="none" height="18" viewbox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">

                            <g clip-path="url(#clip0_138_15)">

                              <path d="M10.6764 7.62177L17.2333 0H15.6795L9.98621 6.61788L5.439 0H0.194336L7.07061 10.0074L0.194336 18H1.74818L7.76044 11.0113L12.5626 18H17.8073L10.6761 7.62177H10.6764ZM8.54823 10.0956L7.85152 9.09906L2.30805 1.16971H4.69467L9.16831 7.56895L9.86502 8.56546L15.6802 16.8835H13.2936L8.54823 10.096V10.0956Z" fill="currentColor" fill-opacity="0.88"></path>

                            </g>

                          </svg></div></a><a class="team-social-link w-inline-block" href="https://www.instagram.com/accounts/login/"><div class="w-embed">

                          

                          <svg fill="none" height="18" viewbox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">

                            <g clip-path="url(#clip0_138_5)">

                              <path d="M14.2358 3.33105C13.9949 3.33105 13.7988 3.52712 13.7988 3.76805C13.7988 4.00897 13.9949 4.20504 14.2358 4.20504C14.4768 4.20504 14.6728 4.00901 14.6728 3.76805C14.6728 3.52709 14.4768 3.33105 14.2358 3.33105Z" fill="currentColor" fill-opacity="0.9"></path>

                              <path d="M9.00299 5.12598C6.86682 5.12598 5.12891 6.86389 5.12891 9.00006C5.12891 11.1362 6.86682 12.8742 9.00299 12.8742C11.1392 12.8742 12.8771 11.1363 12.8771 9.00009C12.8771 6.86393 11.1392 5.12598 9.00299 5.12598Z" fill="currentColor" fill-opacity="0.9"></path>

                              <path d="M13.0597 0H4.92857C2.20772 0 -0.00585938 2.21358 -0.00585938 4.93446V13.0656C-0.00585938 15.7865 2.20772 18 4.92857 18H13.0597C15.7806 18 17.9941 15.7864 17.9941 13.0656V4.93446C17.9941 2.21358 15.7806 0 13.0597 0ZM8.99414 13.9371C6.27182 13.9371 4.05711 11.7223 4.05711 9C4.05711 6.27768 6.27185 4.06301 8.99414 4.06301C11.7164 4.06301 13.9312 6.27771 13.9312 9C13.9312 11.7223 11.7164 13.9371 8.99414 13.9371ZM14.2265 5.26767C13.3994 5.26767 12.7265 4.59478 12.7265 3.7677C12.7265 2.94061 13.3994 2.26768 14.2265 2.26768C15.0536 2.26768 15.7265 2.94057 15.7265 3.76766C15.7265 4.59475 15.0536 5.26767 14.2265 5.26767Z" fill="currentColor" fill-opacity="0.88"></path>

                            </g>

                          </svg></div></a>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
`;

export function Team() {
  return HTML;
}

export function initTeam() {
  return initPageInteractions(document.getElementById('app'));
}
