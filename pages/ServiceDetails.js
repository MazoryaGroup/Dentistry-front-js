/**
 * Dentistry — ServiceDetails page. Converted from provided Webflow HTML.
 * All page content is currently static; no API calls are made.
 * Shared header and footer are rendered by the router.
 */
import { initPageInteractions } from '../code/interactions.js';

const HTML = String.raw`
<section class="section breadcrumb-section">

      <div class="w-layout-blockcontainer container-fluid w-container">

        <div class="breadcrumb-block two">

          <div class="w-layout-blockcontainer container w-container">

            <div class="breadcrumb-main-title-block">

              <div class="breadcrumb-title-block">

                <h1 class="breadcrumb-title">dental services</h1>

              </div>

              <div class="breadcrumb-subtext-block">

                <div class="breadcrumb-subtext">home</div>

                <div class="breadcrumb-subtext">-</div>

                <div class="breadcrumb-subtext">service details</div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

<section class="section service-single-section">

      <div class="w-layout-blockcontainer container w-container">

        <div class="service-single-main-block">

          <div class="w-layout-grid service-single-grid">

            <div class="service-single-main-block-one">

              <div class="service-sticky-block">

                <div class="service-single-left-block" data-w-id="86f814b1-5073-5d91-8758-36bb35f61720">

                  <div class="service-single-box-title">

                    <h3 class="service-single-title">our service</h3>

                  </div>

                  <div class="service-list-wrap w-dyn-list">

                    <div class="service-list w-dyn-items" role="list">

                      <div class="w-dyn-item" role="listitem">

                        <a class="service-list-link w-inline-block" href="/services/smile-design-clinic"><div class="service-list-word">

                            <div class="service-dot-block"></div>

                            <h4 class="service-single-list-name">

                              Smile Design Clinic

                            </h4>

                          </div>

                          <div class="service-single-icon-box">

                            <img alt="Service Single Icon" class="service-single-icon" loading="lazy" src="https://cdn.prod.website-files.com/6768f6d314e679aeffeed929/676923878f05f400928066e8_Vector%20%283%29.svg"/></div></a>

                      </div>

                      <div class="w-dyn-item" role="listitem">

                        <a aria-current="page" class="service-list-link w-inline-block w--current" href="/services/bright-smile-solutions"><div class="service-list-word">

                            <div class="service-dot-block"></div>

                            <h4 class="service-single-list-name">

                              Perfect Smile Clinic

                            </h4>

                          </div>

                          <div class="service-single-icon-box">

                            <img alt="Service Single Icon" class="service-single-icon" loading="lazy" src="https://cdn.prod.website-files.com/6768f6d314e679aeffeed929/676923878f05f400928066e8_Vector%20%283%29.svg"/></div></a>

                      </div>

                      <div class="w-dyn-item" role="listitem">

                        <a class="service-list-link w-inline-block" href="/services/dental-implants"><div class="service-list-word">

                            <div class="service-dot-block"></div>

                            <h4 class="service-single-list-name">

                              Golden Standard

                            </h4>

                          </div>

                          <div class="service-single-icon-box">

                            <img alt="Service Single Icon" class="service-single-icon" loading="lazy" src="https://cdn.prod.website-files.com/6768f6d314e679aeffeed929/676923878f05f400928066e8_Vector%20%283%29.svg"/></div></a>

                      </div>

                      <div class="w-dyn-item" role="listitem">

                        <a class="service-list-link w-inline-block" href="/services/general-dentistry"><div class="service-list-word">

                            <div class="service-dot-block"></div>

                            <h4 class="service-single-list-name">

                              General Dentistry

                            </h4>

                          </div>

                          <div class="service-single-icon-box">

                            <img alt="Service Single Icon" class="service-single-icon" loading="lazy" src="https://cdn.prod.website-files.com/6768f6d314e679aeffeed929/676923878f05f400928066e8_Vector%20%283%29.svg"/></div></a>

                      </div>

                      <div class="w-dyn-item" role="listitem">

                        <a class="service-list-link w-inline-block" href="/services/teeth-whitening"><div class="service-list-word">

                            <div class="service-dot-block"></div>

                            <h4 class="service-single-list-name">

                              Teeth Whitening

                            </h4>

                          </div>

                          <div class="service-single-icon-box">

                            <img alt="Service Single Icon" class="service-single-icon" loading="lazy" src="https://cdn.prod.website-files.com/6768f6d314e679aeffeed929/676923878f05f400928066e8_Vector%20%283%29.svg"/></div></a>

                      </div>

                      <div class="w-dyn-item" role="listitem">

                        <a class="service-list-link w-inline-block" href="/services/root-cannel-treatment"><div class="service-list-word">

                            <div class="service-dot-block"></div>

                            <h4 class="service-single-list-name">

                              rootcannel treatment

                            </h4>

                          </div>

                          <div class="service-single-icon-box">

                            <img alt="Service Single Icon" class="service-single-icon" loading="lazy" src="https://cdn.prod.website-files.com/6768f6d314e679aeffeed929/676923878f05f400928066e8_Vector%20%283%29.svg"/></div></a>

                      </div>

                      <div class="w-dyn-item" role="listitem">

                        <a class="service-list-link w-inline-block" href="/services/removal-teeth"><div class="service-list-word">

                            <div class="service-dot-block"></div>

                            <h4 class="service-single-list-name">

                              removal teeth

                            </h4>

                          </div>

                          <div class="service-single-icon-box">

                            <img alt="Service Single Icon" class="service-single-icon" loading="lazy" src="https://cdn.prod.website-files.com/6768f6d314e679aeffeed929/676923878f05f400928066e8_Vector%20%283%29.svg"/></div></a>

                      </div>

                      <div class="w-dyn-item" role="listitem">

                        <a class="service-list-link w-inline-block" href="/services/oral-hygienic-treatment"><div class="service-list-word">

                            <div class="service-dot-block"></div>

                            <h4 class="service-single-list-name">

                              oral treatment

                            </h4>

                          </div>

                          <div class="service-single-icon-box">

                            <img alt="Service Single Icon" class="service-single-icon" loading="lazy" src="https://cdn.prod.website-files.com/6768f6d314e679aeffeed929/676923878f05f400928066e8_Vector%20%283%29.svg"/></div></a>

                      </div>

                      <div class="w-dyn-item" role="listitem">

                        <a class="service-list-link w-inline-block" href="/services/smiling-teeth"><div class="service-list-word">

                            <div class="service-dot-block"></div>

                            <h4 class="service-single-list-name">

                              smiling teeth

                            </h4>

                          </div>

                          <div class="service-single-icon-box">

                            <img alt="Service Single Icon" class="service-single-icon" loading="lazy" src="https://cdn.prod.website-files.com/6768f6d314e679aeffeed929/676923878f05f400928066e8_Vector%20%283%29.svg"/></div></a>

                      </div>

                    </div>

                  </div>

                </div>

                <div class="service-single-left-block" data-w-id="ab7edbfd-6ffb-4687-8f9c-765ee005a2fb">

                  <div class="service-single-box-title">

                    <h3 class="service-single-title">Company Profile</h3>

                  </div>

                  <div class="download-main-block">

                    <a class="download-button w-inline-block" href="#"><div class="download-wrap">

                        <img alt="Download Image" class="download-image" loading="lazy" src="https://cdn.prod.website-files.com/6768f6d314e679aeffeed929/67721ddbabdfe66195137eaf_1%20%281%29.svg"/>

                        <div class="download-text">Download PDF</div>

                      </div>

                      <div class="download-icon-block">

                        <img alt="Download  Icon" class="download-icon" loading="lazy" src="https://cdn.prod.website-files.com/6768f6d314e679aeffeed929/67721ddbed801d723bd4f52d_1%20%283%29.svg"/></div></a><a class="download-button last w-inline-block" href="#"><div class="download-wrap">

                        <img alt="Download Image" class="download-image" loading="lazy" src="https://cdn.prod.website-files.com/6768f6d314e679aeffeed929/67721ddb8a35f481ea1b1643_1%20%282%29.svg"/>

                        <div class="download-text">Download Word File</div>

                      </div>

                      <div class="download-icon-block">

                        <img alt="Download  Icon" class="download-icon" loading="lazy" src="https://cdn.prod.website-files.com/6768f6d314e679aeffeed929/67721ddbed801d723bd4f52d_1%20%283%29.svg"/></div></a>

                  </div>

                </div>

              </div>

            </div>

            <div class="service-single-content-block">

              <div class="w-dyn-list">

                <div class="w-dyn-items" role="list">

                  <div class="w-dyn-item" role="listitem">

                    <div class="service-single-image-block">

                      <h3 class="service-title" data-w-id="e1b9d500-ee96-cbb1-0424-761415846318">

                        Smile Design Clinic

                      </h3>

                      <img alt="Service Single Image" class="service-single-image" data-w-id="5a0f4aac-2936-a86b-8b6c-e17958d83ee6" loading="lazy" sizes="(max-width: 479px) 94vw, (max-width: 767px) 96vw, (max-width: 991px) 97vw, (max-width: 1439px) 98vw, 1270px" src="https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/677399bfd70674aa2f9cc4e0_1%20%281%29.jpg" srcset="

                          https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/677399bfd70674aa2f9cc4e0_1%20%281%29-p-500.jpg   500w,

                          https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/677399bfd70674aa2f9cc4e0_1%20%281%29-p-800.jpg   800w,

                          https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/677399bfd70674aa2f9cc4e0_1%20%281%29-p-1080.jpg 1080w,

                          https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/677399bfd70674aa2f9cc4e0_1%20%281%29.jpg        1400w

                        "/>

                      <div class="service-rich-one w-richtext" data-w-id="1117faa0-53a5-1952-d0da-30a474fdbf53">

                        <p>

                          Dental services are essential for maintaining oral

                          health, preventing diseases, and enhancing the

                          appearance of your smile. From routine checkups and

                          cleanings to advanced procedures like root canals,

                          implants, and cosmetic treatments, dental care

                          addresses a wide range of needs. These services ensure

                          healthy teeth and gums, protect against oral

                          infections, and improve overall confidence.

                        </p>

                      </div>

                      <div class="service-info-two">

                        <img alt="" class="service-image-two" data-w-id="01322ddb-194f-a222-faee-86d0963ea9e0" loading="lazy" sizes="(max-width: 479px) 94vw, (max-width: 767px) 96vw, (max-width: 991px) 47vw, (max-width: 1439px) 48vw, 620px" src="https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/676a5664edeeceaba15db054_service%20extra%20image%20%283%29.webp" srcset="

                            https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/676a5664edeeceaba15db054_service%20extra%20image%20%283%29-p-500.webp   500w,

                            https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/676a5664edeeceaba15db054_service%20extra%20image%20%283%29-p-800.webp   800w,

                            https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/676a5664edeeceaba15db054_service%20extra%20image%20%283%29-p-1080.webp 1080w,

                            https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/676a5664edeeceaba15db054_service%20extra%20image%20%283%29.webp        1400w

                          "/>

                        <div class="w-richtext" data-w-id="3978e663-afd0-431d-8996-194fe6f2260a">

                          <p>

                            Regular visits to the dentist help in early

                            detection of issues, saving time, money, and

                            discomfort in the long run. By prioritizing

                            professional dental care, you can achieve a brighter

                            smile and better overall health.

                          </p>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

              <div class="w-dyn-list">

                <div class="team-list-block w-dyn-items" role="list">

                  <div class="w-dyn-item" data-w-id="58469d2f-3494-e756-8009-2c28c71dc8cf" role="listitem">

                    <div class="team-info-main-block">

                      <a class="team-link-info-block w-inline-block" href="#"><img alt="Team Image One" class="team-image-one one" loading="lazy" src="https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/679c72b47f96c23ec6baac4a_image%2012.png"/>

                        <div class="team-info-name-block">

                          <h3 class="team-name-one">Dr. Adam Smith</h3>

                          <div class="team-one-dagin">Cosmetic Dentist</div>

                        </div></a>

                      <div class="social-icon-one-block">

                        <a class="social-icon-link-one w-inline-block" href="#"><div class="w-embed">

                            

                            <svg fill="none" height="18" viewbox="0 0 10 18" width="10" xmlns="http://www.w3.org/2000/svg">

                              <path d="M6.06741 18V9.78996H8.82208L9.23536 6.58941H6.06741V4.54632C6.06741 3.61998 6.32359 2.98869 7.65347 2.98869L9.34686 2.98799V0.125307C9.05401 0.0872508 8.04877 0 6.87877 0C4.43564 0 2.76302 1.49127 2.76302 4.22934V6.58941H0V9.78996H2.76302V18H6.06741Z" fill="currentColor" fill-opacity="0.88"></path>

                            </svg></div></a><a class="social-icon-link-one w-inline-block" href="#"><div class="w-embed">

                            

                            <svg fill="none" height="18" viewbox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">

                              <g clip-path="url(#clip0_138_15)">

                                <path d="M10.6764 7.62177L17.2333 0H15.6795L9.98621 6.61788L5.439 0H0.194336L7.07061 10.0074L0.194336 18H1.74818L7.76044 11.0113L12.5626 18H17.8073L10.6761 7.62177H10.6764ZM8.54823 10.0956L7.85152 9.09906L2.30805 1.16971H4.69467L9.16831 7.56895L9.86502 8.56546L15.6802 16.8835H13.2936L8.54823 10.096V10.0956Z" fill="currentColor" fill-opacity="0.88"></path>

                              </g>

                            </svg></div></a><a class="social-icon-link-one w-inline-block" href="#"><div class="w-embed">

                            

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

                  <div class="w-dyn-item" data-w-id="58469d2f-3494-e756-8009-2c28c71dc8cf" role="listitem">

                    <div class="team-info-main-block">

                      <a class="team-link-info-block w-inline-block" href="#"><img alt="Team Image One" class="team-image-one one" loading="lazy" src="https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/679c7445bd38a452b8e0b373_team%20image%20%282%29.png"/>

                        <div class="team-info-name-block">

                          <h3 class="team-name-one">Dr. Michel Martin</h3>

                          <div class="team-one-dagin">General Dentist</div>

                        </div></a>

                      <div class="social-icon-one-block">

                        <a class="social-icon-link-one w-inline-block" href="#"><div class="w-embed">

                            

                            <svg fill="none" height="18" viewbox="0 0 10 18" width="10" xmlns="http://www.w3.org/2000/svg">

                              <path d="M6.06741 18V9.78996H8.82208L9.23536 6.58941H6.06741V4.54632C6.06741 3.61998 6.32359 2.98869 7.65347 2.98869L9.34686 2.98799V0.125307C9.05401 0.0872508 8.04877 0 6.87877 0C4.43564 0 2.76302 1.49127 2.76302 4.22934V6.58941H0V9.78996H2.76302V18H6.06741Z" fill="currentColor" fill-opacity="0.88"></path>

                            </svg></div></a><a class="social-icon-link-one w-inline-block" href="#"><div class="w-embed">

                            

                            <svg fill="none" height="18" viewbox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">

                              <g clip-path="url(#clip0_138_15)">

                                <path d="M10.6764 7.62177L17.2333 0H15.6795L9.98621 6.61788L5.439 0H0.194336L7.07061 10.0074L0.194336 18H1.74818L7.76044 11.0113L12.5626 18H17.8073L10.6761 7.62177H10.6764ZM8.54823 10.0956L7.85152 9.09906L2.30805 1.16971H4.69467L9.16831 7.56895L9.86502 8.56546L15.6802 16.8835H13.2936L8.54823 10.096V10.0956Z" fill="currentColor" fill-opacity="0.88"></path>

                              </g>

                            </svg></div></a><a class="social-icon-link-one w-inline-block" href="#"><div class="w-embed">

                            

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

                  <div class="w-dyn-item" data-w-id="58469d2f-3494-e756-8009-2c28c71dc8cf" role="listitem">

                    <div class="team-info-main-block">

                      <a class="team-link-info-block w-inline-block" href="#"><img alt="Team Image One" class="team-image-one one" loading="lazy" src="https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/679c745448e62cb3588e5bce_team%20image%206.png"/>

                        <div class="team-info-name-block">

                          <h3 class="team-name-one">Dr. Archie White</h3>

                          <div class="team-one-dagin">Dental Assistant</div>

                        </div></a>

                      <div class="social-icon-one-block">

                        <a class="social-icon-link-one w-inline-block" href="#"><div class="w-embed">

                            

                            <svg fill="none" height="18" viewbox="0 0 10 18" width="10" xmlns="http://www.w3.org/2000/svg">

                              <path d="M6.06741 18V9.78996H8.82208L9.23536 6.58941H6.06741V4.54632C6.06741 3.61998 6.32359 2.98869 7.65347 2.98869L9.34686 2.98799V0.125307C9.05401 0.0872508 8.04877 0 6.87877 0C4.43564 0 2.76302 1.49127 2.76302 4.22934V6.58941H0V9.78996H2.76302V18H6.06741Z" fill="currentColor" fill-opacity="0.88"></path>

                            </svg></div></a><a class="social-icon-link-one w-inline-block" href="#"><div class="w-embed">

                            

                            <svg fill="none" height="18" viewbox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">

                              <g clip-path="url(#clip0_138_15)">

                                <path d="M10.6764 7.62177L17.2333 0H15.6795L9.98621 6.61788L5.439 0H0.194336L7.07061 10.0074L0.194336 18H1.74818L7.76044 11.0113L12.5626 18H17.8073L10.6761 7.62177H10.6764ZM8.54823 10.0956L7.85152 9.09906L2.30805 1.16971H4.69467L9.16831 7.56895L9.86502 8.56546L15.6802 16.8835H13.2936L8.54823 10.096V10.0956Z" fill="currentColor" fill-opacity="0.88"></path>

                              </g>

                            </svg></div></a><a class="social-icon-link-one w-inline-block" href="#"><div class="w-embed">

                            

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

      </div>

    </section>
`;

export function ServiceDetails() {
  return HTML;
}

export function initServiceDetails() {
  return initPageInteractions(document.getElementById('app'));
}
