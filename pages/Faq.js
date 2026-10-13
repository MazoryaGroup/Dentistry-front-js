/**
 * Dentistry — Faq page. Converted from provided Webflow HTML.
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

        <div class="breadcrumb-block three">

          <div class="w-layout-blockcontainer container w-container">

            <div class="breadcrumb-main-title-block">

              <div class="breadcrumb-title-block">

                <h1 class="breadcrumb-title">Frequently asked questions</h1>

              </div>

              <div class="breadcrumb-subtext-block">

                <div class="breadcrumb-subtext">home</div>

                <div class="breadcrumb-subtext">-</div>

                <div class="breadcrumb-subtext">FAQ</div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

<section class="section faq-section one">

      <div class="w-layout-blockcontainer container-fluid w-container">

        <div class="main-grey-block">

          <div class="w-layout-blockcontainer container w-container">

            <div class="faq-main-block">

              <div class="section-title-main-block">

                <div class="section-title-sub-text-block">

                  <div class="section-sub-text">faq</div>

                </div>

                <div class="section-title-grid">

                  <h2 class="section-title">

                    we provide best service our patients

                  </h2>

                </div>

              </div>

              <div class="faq-content-block">

                <div class="faq-tabs w-tabs" data-current="Tab 1" data-duration-in="300" data-duration-out="100" data-easing="ease">

                  <div class="faq-tab-menu w-tab-menu">

                    <a class="faq-tab-link w-inline-block w-tab-link w--current" data-w-id="b48fd6fd-640b-16d9-0fd5-c0a1f021d9d4" data-w-tab="Tab 1"><div class="faq-tab-content-main-block" data-w-id="b48fd6fd-640b-16d9-0fd5-c0a1f021d9d5">

                        <div class="faq-question">

                          <h2 class="faq-question-text">

                            How often should I visit the dentist?

                          </h2>

                          <div class="faq-icon-main-wrap" style="background-color: rgb(37, 37, 37)">

                            <div class="faq-icon-wrap">

                              <div class="minus"></div>

                              <div class="plus" style="

                                  -webkit-transform: translate3d(0, 0, 0)

                                    scale3d(1, 1, 1) rotateX(0) rotateY(0)

                                    rotateZ(0) skew(0, 0);

                                  -moz-transform: translate3d(0, 0, 0)

                                    scale3d(1, 1, 1) rotateX(0) rotateY(0)

                                    rotateZ(0) skew(0, 0);

                                  -ms-transform: translate3d(0, 0, 0)

                                    scale3d(1, 1, 1) rotateX(0) rotateY(0)

                                    rotateZ(0) skew(0, 0);

                                  transform: translate3d(0, 0, 0)

                                    scale3d(1, 1, 1) rotateX(0) rotateY(0)

                                    rotateZ(0) skew(0, 0);

                                "></div>

                            </div>

                          </div>

                        </div>

                        <div class="ans-box" style="height: 0px">

                          <p class="ans-text">

                            Dentists recommend visiting at least twice a year

                            for routine check-ups and cleanings. However, the

                            frequency may vary based on your oral health. For

                            instance, people with gum disease, cavities, or

                            other dental issues may need more frequent visits.

                          </p>

                        </div>

                      </div></a><a class="faq-tab-link w-inline-block w-tab-link" data-w-id="b48fd6fd-640b-16d9-0fd5-c0a1f021d9e0" data-w-tab="Tab 2"><div class="faq-tab-content-main-block" data-w-id="b48fd6fd-640b-16d9-0fd5-c0a1f021d9e1">

                        <div class="faq-question">

                          <h2 class="faq-question-text">

                            What causes tooth decay?

                          </h2>

                          <div class="faq-icon-main-wrap" style="background-color: rgb(37, 37, 37)">

                            <div class="faq-icon-wrap">

                              <div class="minus"></div>

                              <div class="plus" style="

                                  -webkit-transform: translate3d(0, 0, 0)

                                    scale3d(1, 1, 1) rotateX(0) rotateY(0)

                                    rotateZ(0) skew(0, 0);

                                  -moz-transform: translate3d(0, 0, 0)

                                    scale3d(1, 1, 1) rotateX(0) rotateY(0)

                                    rotateZ(0) skew(0, 0);

                                  -ms-transform: translate3d(0, 0, 0)

                                    scale3d(1, 1, 1) rotateX(0) rotateY(0)

                                    rotateZ(0) skew(0, 0);

                                  transform: translate3d(0, 0, 0)

                                    scale3d(1, 1, 1) rotateX(0) rotateY(0)

                                    rotateZ(0) skew(0, 0);

                                "></div>

                            </div>

                          </div>

                        </div>

                        <div class="ans-box" style="height: 0px">

                          <p class="ans-text" id="w-node-b48fd6fd-640b-16d9-0fd5-c0a1f021d9ea-59a764d3">

                            Tooth decay is caused by a buildup of plaque, a

                            sticky film of bacteria on the teeth. These bacteria

                            produce acids when they come into contact with

                            sugars and starches from food and drinks. Over time,

                            these acids erode the tooth enamel, leading to

                            cavities.

                          </p>

                        </div>

                      </div></a><a class="faq-tab-link w-inline-block w-tab-link" data-w-id="b48fd6fd-640b-16d9-0fd5-c0a1f021d9ec" data-w-tab="Tab 3"><div class="faq-tab-content-main-block" data-w-id="b48fd6fd-640b-16d9-0fd5-c0a1f021d9ed">

                        <div class="faq-question">

                          <h2 class="faq-question-text">

                            How can I prevent gum disease?

                          </h2>

                          <div class="faq-icon-main-wrap" style="background-color: rgb(37, 37, 37)">

                            <div class="faq-icon-wrap">

                              <div class="minus"></div>

                              <div class="plus" style="

                                  -webkit-transform: translate3d(0, 0, 0)

                                    scale3d(1, 1, 1) rotateX(0) rotateY(0)

                                    rotateZ(0) skew(0, 0);

                                  -moz-transform: translate3d(0, 0, 0)

                                    scale3d(1, 1, 1) rotateX(0) rotateY(0)

                                    rotateZ(0) skew(0, 0);

                                  -ms-transform: translate3d(0, 0, 0)

                                    scale3d(1, 1, 1) rotateX(0) rotateY(0)

                                    rotateZ(0) skew(0, 0);

                                  transform: translate3d(0, 0, 0)

                                    scale3d(1, 1, 1) rotateX(0) rotateY(0)

                                    rotateZ(0) skew(0, 0);

                                "></div>

                            </div>

                          </div>

                        </div>

                        <div class="ans-box" style="height: 0px">

                          <p class="ans-text">

                            Preventing gum disease starts with maintaining

                            excellent oral hygiene. Brush your teeth twice a day

                            using fluoride toothpaste and floss daily to remove

                            plaque and food particles. Regular dental visits for

                            professional cleanings and check-ups are also

                            crucial.

                          </p>

                        </div>

                      </div></a><a class="faq-tab-link w-inline-block w-tab-link" data-w-id="b48fd6fd-640b-16d9-0fd5-c0a1f021d9f8" data-w-tab="Tab 4"><div class="faq-tab-content-main-block" data-w-id="b48fd6fd-640b-16d9-0fd5-c0a1f021d9f9">

                        <div class="faq-question">

                          <h2 class="faq-question-text">

                            Are teeth whitening treatments safe?

                          </h2>

                          <div class="faq-icon-main-wrap" style="background-color: rgb(37, 37, 37)">

                            <div class="faq-icon-wrap">

                              <div class="minus"></div>

                              <div class="plus" style="

                                  -webkit-transform: translate3d(0, 0, 0)

                                    scale3d(1, 1, 1) rotateX(0) rotateY(0)

                                    rotateZ(0) skew(0, 0);

                                  -moz-transform: translate3d(0, 0, 0)

                                    scale3d(1, 1, 1) rotateX(0) rotateY(0)

                                    rotateZ(0) skew(0, 0);

                                  -ms-transform: translate3d(0, 0, 0)

                                    scale3d(1, 1, 1) rotateX(0) rotateY(0)

                                    rotateZ(0) skew(0, 0);

                                  transform: translate3d(0, 0, 0)

                                    scale3d(1, 1, 1) rotateX(0) rotateY(0)

                                    rotateZ(0) skew(0, 0);

                                "></div>

                            </div>

                          </div>

                        </div>

                        <div class="ans-box" style="height: 0px">

                          <p class="ans-text">

                            Professional teeth whitening treatments are safe

                            when performed by a dentist. The procedures use

                            controlled amounts of bleaching agents, ensuring

                            minimal risks to your enamel and gums.

                            Over-the-counter products may not always be safe or

                            effective.

                          </p>

                        </div>

                      </div></a><a class="faq-tab-link w-inline-block w-tab-link" data-w-id="b48fd6fd-640b-16d9-0fd5-c0a1f021da04" data-w-tab="Tab 5"><div class="faq-tab-content-main-block" data-w-id="b48fd6fd-640b-16d9-0fd5-c0a1f021da05">

                        <div class="faq-question">

                          <h2 class="faq-question-text">

                            What are dental implants?

                          </h2>

                          <div class="faq-icon-main-wrap" style="background-color: rgb(37, 37, 37)">

                            <div class="faq-icon-wrap">

                              <div class="minus"></div>

                              <div class="plus" style="

                                  -webkit-transform: translate3d(0, 0, 0)

                                    scale3d(1, 1, 1) rotateX(0) rotateY(0)

                                    rotateZ(0) skew(0, 0);

                                  -moz-transform: translate3d(0, 0, 0)

                                    scale3d(1, 1, 1) rotateX(0) rotateY(0)

                                    rotateZ(0) skew(0, 0);

                                  -ms-transform: translate3d(0, 0, 0)

                                    scale3d(1, 1, 1) rotateX(0) rotateY(0)

                                    rotateZ(0) skew(0, 0);

                                  transform: translate3d(0, 0, 0)

                                    scale3d(1, 1, 1) rotateX(0) rotateY(0)

                                    rotateZ(0) skew(0, 0);

                                "></div>

                            </div>

                          </div>

                        </div>

                        <div class="ans-box last">

                          <p class="ans-text">

                            Dental implants are a long-lasting solution for

                            missing teeth. They involve surgically placing a

                            titanium post into the jawbone, which acts as a

                            replacement root. Once the implant integrates with

                            the bone, a crown is attached, restoring the

                            tooth's appearance and function.

                          </p>

                        </div>

                      </div></a>

                  </div>

                  <div class="faq-tab-content w-tab-content">

                    <div class="w-tab-pane w--tab-active" data-w-tab="Tab 1"></div>

                    <div class="w-tab-pane" data-w-tab="Tab 2"></div>

                    <div class="w-tab-pane" data-w-tab="Tab 3"></div>

                    <div class="w-tab-pane" data-w-tab="Tab 4"></div>

                    <div class="w-tab-pane" data-w-tab="Tab 5"></div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
`;

export function Faq() {
  return HTML;
}

export function initFaq() {
  return initPageInteractions(document.getElementById('app'));
}
