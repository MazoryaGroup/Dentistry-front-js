(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}})();function pa(){const e=document.querySelector(".navbar.w-nav"),t=e==null?void 0:e.querySelector(".w-nav-button"),a=e==null?void 0:e.querySelector(".w-nav-menu");if(!e||!t||!a)return()=>{};const o=new AbortController,{signal:n}=o,i=l=>{e.classList.toggle("w--open",l),t.classList.toggle("w--open",l),a.classList.toggle("w--open",l),t.setAttribute("aria-expanded",String(l)),a.setAttribute("aria-hidden",String(l&&window.innerWidth<=991?!1:window.innerWidth<=991))},r=()=>i(!t.classList.contains("w--open"));return t.addEventListener("click",r,{signal:n}),t.addEventListener("keydown",l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),r())},{signal:n}),a.addEventListener("click",l=>{l.target.closest("a[href]")&&i(!1)},{signal:n}),document.addEventListener("click",l=>{e.contains(l.target)||i(!1)},{signal:n}),document.addEventListener("keydown",l=>{l.key==="Escape"&&i(!1)},{signal:n}),window.addEventListener("resize",()=>{window.innerWidth>991&&i(!1)},{signal:n}),i(!1),()=>o.abort()}const ha={"auth.shell.asideLabel":"معرفی سامانه بیماران","auth.shell.care":"مراقبت‌های دندان‌پزشکی","auth.shell.private":"حریم خصوصی شما محفوظ است","auth.shell.easy":"نوبت‌دهی آسان","auth.shell.priority":"لبخند شما، اولویت ماست","auth.shell.tagline":"تجربه بهتر دندان‌پزشکی از اینجا آغاز می‌شود","auth.shell.back":"بازگشت به وب‌سایت","auth.shell.portal":"پنل بیماران","auth.shell.loginLegal":"ورود با شماره موبایل و کد تأیید یا ایمیل و رمز عبور امکان‌پذیر است.","auth.login.title":"خوش برگشتید","auth.login.subtitle":"برای ورود به حساب کاربری، روش موردنظر خود را انتخاب کنید.","auth.login.sideTitle":"هر لبخند زیبا با مراقبت خوب آغاز می‌شود.","auth.login.sideCopy":"فضایی اختصاصی برای مدیریت نوبت‌ها و پیگیری روند درمان دندان‌های شما.","auth.login.methodPhone":"ورود با موبایل","auth.login.methodEmail":"ورود با ایمیل","auth.login.phone":"شماره موبایل","auth.login.phonePlaceholder":"09123456789","auth.login.sendCode":"ارسال کد تأیید","auth.login.codeSentTo":"کد تأیید به این شماره ارسال شد:","auth.login.code":"کد تأیید ۶ رقمی","auth.login.codePlaceholder":"کد ۶ رقمی را وارد کنید","auth.login.codeValidity":"کد تأیید تا ۲ دقیقه معتبر است.","auth.login.verify":"تأیید و ورود","auth.login.editPhone":"تغییر شماره موبایل","auth.login.resend":"ارسال مجدد کد","auth.login.email":"آدرس ایمیل","auth.login.emailPlaceholder":"example@email.com","auth.login.password":"رمز عبور","auth.login.passwordPlaceholder":"رمز عبور خود را وارد کنید","auth.login.signIn":"ورود به حساب","auth.login.forgotPassword":"رمز عبور را فراموش کرده‌اید؟","auth.login.newPatient":"برای اولین‌بار مراجعه می‌کنید؟","auth.login.createAccount":"ایجاد حساب کاربری","auth.login.invalidPhone":"لطفاً شماره موبایل معتبر وارد کنید.","auth.login.invalidEmail":"لطفاً یک آدرس ایمیل معتبر وارد کنید.","auth.login.enterPassword":"لطفاً رمز عبور را وارد کنید.","auth.login.invalidCredentials":"ایمیل یا رمز عبور اشتباه است.","auth.login.invalidCodeFormat":"لطفاً کد تأیید ۶ رقمی را وارد کنید.","auth.login.invalidCode":"کد تأیید اشتباه است یا منقضی شده است.","auth.login.noAccount":"حسابی با این شماره موبایل وجود ندارد. ابتدا ثبت‌نام کنید.","auth.login.tooMany":"تعداد درخواست‌ها بیش از حد مجاز است. کمی بعد تلاش کنید.","auth.login.timeout":"زمان درخواست به پایان رسید. دوباره تلاش کنید.","auth.login.networkError":"ارتباط با سرور برقرار نشد. اتصال اینترنت را بررسی کنید.","auth.login.serverError":"سرور کلینیک موقتاً در دسترس نیست.","auth.login.sent":"کد تأیید با موفقیت ارسال شد.","auth.login.resent":"کد تأیید جدید ارسال شد.","auth.login.invalidApiToken":"ورود تأیید شد، اما توکن معتبر از سرور دریافت نشد.","auth.register.title":"ثبت‌نام بیمار","auth.register.subtitle":"برای ایجاد حساب کاربری، اطلاعات خود را وارد کنید.","auth.register.sideTitle":"فضایی اختصاصی برای لبخندی سالم‌تر.","auth.register.sideCopy":"نوبت‌ها، طرح‌های درمان و پرداخت‌های خود را در یکجا مدیریت کنید.","auth.register.name":"نام و نام خانوادگی","auth.register.namePlaceholder":"نام و نام خانوادگی خود را وارد کنید","auth.register.phone":"شماره موبایل","auth.register.referral":"کد معرف (اختیاری)","auth.register.referralPlaceholder":"در صورت داشتن کد معرف وارد کنید","auth.register.sendCode":"ارسال کد تأیید","auth.register.codeSentTo":"کد تأیید به این شماره ارسال شد:","auth.register.code":"کد تأیید ۶ رقمی","auth.register.codePlaceholder":"کد ۶ رقمی را وارد کنید","auth.register.codeValidity":"کد تأیید به مدت ۲ دقیقه معتبر است.","auth.register.verify":"تأیید کد و ثبت‌نام","auth.register.editPhone":"ویرایش اطلاعات","auth.register.resend":"ارسال مجدد کد","auth.register.haveAccount":"قبلاً حساب کاربری ساخته‌اید؟","auth.register.signIn":"وارد شوید","auth.register.success":"حساب کاربری شما با موفقیت ایجاد شد.","auth.register.goToLogin":"ورود به حساب کاربری","auth.register.invalidName":"لطفاً نام و نام خانوادگی معتبر وارد کنید.","auth.register.invalidPhone":"لطفاً شماره موبایل معتبر وارد کنید.","auth.register.invalidCodeFormat":"لطفاً کد تأیید ۶ رقمی را وارد کنید.","auth.register.invalidCode":"کد تأیید اشتباه است یا منقضی شده است.","auth.register.invalidData":"اطلاعات ثبت‌نام معتبر نیست. لطفاً آن‌ها را بررسی کنید.","auth.register.alreadyRegistered":"این شماره موبایل قبلاً ثبت‌نام شده است.","auth.register.sessionExpired":"اطلاعات ثبت‌نام منقضی شده است. دوباره تلاش کنید.","auth.register.sent":"کد تأیید با موفقیت ارسال شد.","auth.register.resent":"کد تأیید جدید ارسال شد.","auth.register.tooMany":"تعداد درخواست‌ها بیش از حد مجاز است. کمی بعد تلاش کنید.","auth.register.timeout":"زمان درخواست به پایان رسید. دوباره تلاش کنید.","auth.register.networkError":"ارتباط با سرور برقرار نشد. اتصال اینترنت را بررسی کنید.","auth.register.serverError":"سرور کلینیک موقتاً در دسترس نیست.","auth.register.requestFailed":"در انجام درخواست مشکلی پیش آمد. دوباره تلاش کنید.","auth.forgot.title":"بازیابی رمز عبور","auth.forgot.subtitle":"شماره موبایل خود را وارد کنید تا کد تأیید برایتان ارسال شود.","auth.forgot.sideTitle":"مراقبت از لبخند شما ادامه دارد.","auth.forgot.sideCopy":"بازیابی حساب کاربری خود را به‌سادگی و با امنیت بیشتر انجام دهید.","auth.forgot.phone":"شماره موبایل","auth.forgot.sendCode":"ارسال کد تأیید","auth.forgot.codeSentTo":"کد تأیید به شماره زیر ارسال شد:","auth.forgot.code":"کد تأیید ۶ رقمی","auth.forgot.codePlaceholder":"کد ۶ رقمی را وارد کنید","auth.forgot.verify":"تأیید کد","auth.forgot.changePhone":"تغییر شماره موبایل","auth.forgot.resend":"ارسال مجدد کد","auth.forgot.verifiedPhone":"شماره موبایل تأییدشده:","auth.forgot.newPassword":"رمز عبور جدید","auth.forgot.newPasswordPlaceholder":"حداقل ۸ کاراکتر","auth.forgot.confirmPassword":"تکرار رمز عبور جدید","auth.forgot.confirmPlaceholder":"رمز عبور جدید را دوباره وارد کنید","auth.forgot.resetPassword":"تغییر رمز عبور","auth.forgot.backToLogin":"بازگشت به ورود","auth.forgot.success":"رمز عبور شما با موفقیت تغییر کرد. اکنون می‌توانید وارد حساب خود شوید.","auth.forgot.invalidPhone":"لطفاً شماره موبایل معتبر وارد کنید.","auth.forgot.invalidCodeFormat":"کد تأیید باید ۶ رقمی باشد.","auth.forgot.invalidCode":"کد تأیید نامعتبر یا منقضی شده است.","auth.forgot.shortPassword":"رمز عبور باید حداقل ۸ کاراکتر داشته باشد.","auth.forgot.passwordMismatch":"رمز عبور و تکرار آن یکسان نیستند.","auth.forgot.sessionExpired":"اطلاعات بازیابی موجود نیست. دوباره درخواست کد کنید.","auth.forgot.invalidData":"اطلاعات واردشده معتبر نیست.","auth.forgot.sent":"کد تأیید با موفقیت ارسال شد.","auth.forgot.resent":"کد تأیید جدید ارسال شد.","auth.forgot.verified":"شماره موبایل تأیید شد. رمز عبور جدید را وارد کنید.","auth.forgot.tooMany":"تعداد درخواست‌ها بیش از حد مجاز است. کمی بعد تلاش کنید.","auth.forgot.timeout":"زمان درخواست به پایان رسید.","auth.forgot.serverError":"سرور موقتاً در دسترس نیست.","auth.forgot.networkError":"ارتباط با سرور برقرار نشد.","auth.forgot.requestFailed":"در انجام درخواست مشکلی پیش آمد. دوباره تلاش کنید.","auth.shell.privacyLegal":"اطلاعات حساب کاربری شما از طریق ارتباط امن با سرور پردازش می‌شود.","auth.forgot.resetTokenExpired":"مهلت بازیابی رمز عبور به پایان رسیده است. لطفاً دوباره کد تأیید دریافت کنید.","auth.sessionExpired":"به دلیل ۱۵ دقیقه بی‌فعالیتی، نشست شما منقضی شده است. لطفاً دوباره وارد شوید.","profile.dashboard":"داشبورد بیمار","profile.title":"پروفایل من","profile.subtitle":"اطلاعات حساب کاربری و مشخصات فردی شما.","profile.information":"اطلاعات شخصی","profile.name":"نام و نام خانوادگی","profile.email":"آدرس ایمیل","profile.phone":"شماره موبایل","profile.referral":"کد معرف","profile.notSet":"ثبت نشده","profile.loading":"در حال دریافت اطلاعات...","profile.loaded":"اطلاعات پروفایل به‌روز است.","profile.partial":"اطلاعات پایه دریافت شد؛ جزئیات پروفایل در دسترس نیست.","profile.loadError":"دریافت اطلاعات پروفایل با خطا مواجه شد.","profile.reload":"بارگذاری مجدد","profile.logout":"خروج از حساب","profile.phoneHint":"شماره موبایل فقط پس از تأیید کد پیامکی قابل تغییر است.","blog.title":"وبلاگ","blog.home":"خانه","blog.latest":"تازه‌ترین مطالب","blog.heading":"جدیدترین مقالات و مطالب دندان‌پزشکی را اینجا بخوانید.","blog.loading":"در حال دریافت مقالات...","blog.empty":"در حال حاضر مقاله‌ای برای نمایش وجود ندارد.","blog.error":"دریافت مقالات با مشکل مواجه شد. لطفاً دوباره تلاش کنید.","blog.retry":"تلاش مجدد","blog.readArticle":"مطالعه مقاله","blog.details.page":"مقالات دندان‌پزشکی","blog.details.breadcrumb":"جزئیات مقاله","blog.details.categories":"دسته‌بندی‌ها","blog.details.recent":"مقالات اخیر","blog.details.loading":"در حال دریافت مقاله...","blog.details.notFound":"مقاله موردنظر پیدا نشد.","blog.details.error":"دریافت اطلاعات مقاله با مشکل مواجه شد.","blog.details.retry":"تلاش مجدد","blog.details.back":"بازگشت به مقالات","header.login":"ورود","header.dashboard":"داشبورد","header.loginAria":"ورود به حساب بیمار","header.dashboardAria":"ورود به داشبورد بیمار","header.home":"خانه","header.about":"درباره ما","header.services":"خدمات","header.blog":"وبلاگ","header.contact":"تماس با ما","header.logo":"دندان‌پزشکی","header.menu":"باز و بسته کردن منو","header.language":"زبان سایت","footer.eyebrow":"نگاهی نو به مراقبت از لبخند شما","footer.heroTitle":"لبخند شما شایسته","footer.heroHighlight":"بهترین توجه است.","footer.heroDescription":"لبخندی سالم و زیبا از مراقبت و آگاهی آغاز می‌شود. برای آشنایی بیشتر با کلینیک و دریافت پاسخ پرسش‌های خود، با ما در ارتباط باشید.","footer.contactUs":"تماس با ما","footer.brandName":"دکتر زین‌العابدین","footer.brandDescription":"فضایی برای آشنایی با خدمات دندان‌پزشکی، روش‌های درمان و نکات کاربردی مراقبت از سلامت دهان و دندان.","footer.brandTag":"مراقبت با اطمینان آغاز می‌شود","footer.explore":"دسترسی سریع","footer.patients":"خدمات بیماران","footer.getInTouch":"ارتباط با ما","footer.home":"خانه","footer.about":"درباره ما","footer.team":"تیم پزشکی","footer.blog":"مقالات آموزشی","footer.faq":"سوالات متداول","footer.login":"ورود بیماران","footer.register":"ایجاد حساب کاربری","footer.contactDescription":"برای دریافت اطلاعات بیشتر یا مطرح کردن پرسش‌های خود، می‌توانید از طریق صفحه تماس با ما در ارتباط باشید.","footer.contactLink":"رفتن به صفحه تماس","footer.copyright":"تمامی حقوق محفوظ است.","footer.backToTop":"بازگشت به بالا","footer.parentCompany":"زیرمجموعه","about.breadcrumb":"درباره ما","about.home":"خانه","about.imageAlt":"نمایی از کلینیک دندان‌پزشکی","about.introEyebrow":"درباره ما","about.introTitle":"آشنایی با رویکرد ما به مراقبت از لبخند شما","about.introDescription":"سلامت دهان و دندان بخش مهمی از کیفیت زندگی است. آگاهی از روش‌های مراقبت، شناخت گزینه‌های درمان و گفت‌وگوی روشن درباره نیازهای هر بیمار، می‌تواند به تصمیم‌گیری بهتر کمک کند.","about.feature1Title":"آگاهی پیش از تصمیم","about.feature1Description":"آشنایی با مراحل درمان و دریافت پاسخ پرسش‌ها، بخش مهمی از انتخاب آگاهانه است.","about.feature2Title":"توجه به نیازهای هر فرد","about.feature2Description":"شرایط دهان و دندان هر بیمار متفاوت است و انتخاب روش درمان به معاینه و بررسی تخصصی نیاز دارد.","about.contactButton":"ارتباط با ما","about.treatmentEyebrow":"خدمات دندان‌پزشکی","about.treatmentTitle":"آشنایی با خدمات و روش‌های درمان","about.treatmentDescription":"در این بخش می‌توانید خدمات ثبت‌شده در کلینیک را مشاهده کنید و برای آشنایی بیشتر با هر خدمت وارد صفحه اختصاصی آن شوید.","about.servicesLoading":"در حال دریافت خدمات...","about.servicesEmpty":"در حال حاضر خدمتی برای نمایش وجود ندارد.","about.servicesError":"دریافت خدمات با مشکل مواجه شد.","about.retry":"تلاش مجدد","about.serviceDetails":"مشاهده جزئیات","about.teamEyebrow":"ارتباط با کلینیک","about.teamTitle":"برای پرسش‌های شما در دسترس هستیم","about.teamDescription":"اگر برای شناخت خدمات، بررسی گزینه‌های درمان یا دریافت اطلاعات بیشتر درباره مراجعه پرسشی دارید، می‌توانید از طریق صفحه تماس با ما پیام خود را ارسال کنید.","about.teamButton":"تماس با ما","about.faqEyebrow":"سوالات متداول","about.faqTitle":"پاسخ به پرسش‌های رایج","about.faq1Question":"هر چند وقت یک بار باید به دندان‌پزشک مراجعه کنم؟","about.faq1Answer":"برای بسیاری از افراد معاینه منظم دندان‌پزشکی توصیه می‌شود. فاصله مناسب بین معاینات به وضعیت سلامت دهان و دندان و نظر دندان‌پزشک بستگی دارد.","about.faq2Question":"چه عواملی باعث پوسیدگی دندان می‌شوند؟","about.faq2Answer":"باکتری‌های موجود در پلاک دندانی با مصرف قندها و کربوهیدرات‌های قابل تخمیر اسید تولید می‌کنند. این اسیدها می‌توانند به‌مرور مواد معدنی مینای دندان را کاهش داده و باعث پوسیدگی شوند.","about.faq3Question":"چطور می‌توان از بیماری‌های لثه پیشگیری کرد؟","about.faq3Answer":"مسواک زدن منظم با خمیردندان حاوی فلوراید، تمیز کردن بین دندان‌ها، معاینه‌های دوره‌ای و رسیدگی زودهنگام به علائمی مانند خونریزی لثه به حفظ سلامت لثه کمک می‌کنند.","about.faq4Question":"آیا سفید کردن دندان‌ها بی‌خطر است؟","about.faq4Answer":"سفید کردن دندان‌ها در صورت انتخاب روش مناسب و انجام آن زیر نظر دندان‌پزشک معمولاً ایمن است. بااین‌حال ممکن است حساسیت موقت دندان یا تحریک لثه ایجاد شود و این روش برای همه مناسب نباشد.","about.faq5Question":"ایمپلنت دندان چیست؟","about.faq5Answer":"ایمپلنت روشی برای جایگزینی دندان ازدست‌رفته است که در آن پایه‌ای معمولاً از جنس تیتانیوم در استخوان فک قرار می‌گیرد و پس از طی مراحل درمان، روکش دندان روی آن نصب می‌شود. مناسب بودن این روش به معاینه و بررسی شرایط بیمار بستگی دارد.","about.teamPreview":"معرفی پزشکان این بخش پس از تکمیل اطلاعات تیم پزشکی نمایش داده می‌شود.","about.demoTreatment1Title":"اصلاح طرح لبخند","about.demoTreatment1Description":"آشنایی با روش‌های زیبایی دندان برای بهبود ظاهر و هماهنگی لبخند.","about.demoTreatment2Title":"درمان‌های زیبایی دندان","about.demoTreatment2Description":"بررسی گزینه‌های درمانی متناسب با وضعیت دندان‌ها و اهداف زیبایی هر فرد.","about.demoTreatment3Title":"ایمپلنت دندان","about.demoTreatment3Description":"آشنایی با روش جایگزینی دندان‌های ازدست‌رفته با استفاده از ایمپلنت.","about.demoTreatment4Title":"سفید کردن دندان","about.demoTreatment4Description":"آشنایی با روش‌های حرفه‌ای سفید کردن دندان‌ها تحت نظر دندان‌پزشک.","about.demoTreatment5Title":"دندان‌پزشکی عمومی","about.demoTreatment5Description":"معاینات دوره‌ای، مراقبت‌های پیشگیرانه و بررسی مشکلات رایج دهان و دندان.","about.servicesDemoNote":"خدمات این بخش فعلاً برای پیش‌نمایش طراحی نمایش داده می‌شوند.","about.doctor1Name":"دکتر فیونا پارک","about.doctor1Role":"دندان‌پزشک عمومی","about.doctor2Name":"دکتر جان مارتین","about.doctor2Role":"دندان‌پزشکی زیبایی","about.doctor3Name":"دکتر آرچی وایت","about.doctor3Role":"مراقبت‌های دندان‌پزشکی","about.doctor4Name":"دکتر ماریا آنجل","about.doctor4Role":"دندان‌پزشکی ترمیمی","about.teamDemoNote":"اسامی و تصاویر این بخش صرفاً نمایشی هستند و بعداً با اطلاعات واقعی تیم پزشکی جایگزین می‌شوند.","teamDetails.home":"خانه","teamDetails.team":"تیم پزشکی","teamDetails.specialty":"حوزه فعالیت","teamDetails.information":"اطلاعات پزشک","teamDetails.informationText":"اطلاعات تکمیلی، سوابق حرفه‌ای و برنامه حضور پزشک پس از ثبت اطلاعات رسمی کلینیک نمایش داده خواهد شد.","teamDetails.eyebrow":"پروفایل پزشک","teamDetails.aboutTitle":"آشنایی با","teamDetails.aboutDescription":"در این بخش می‌توانید با حوزه فعالیت و خدمات مرتبط با پزشک آشنا شوید. اطلاعات اختصاصی پزشک در نسخه نهایی تکمیل می‌شود.","teamDetails.focusTitle":"خدمات و حوزه تخصصی","teamDetails.focus1":"دندان‌پزشکی عمومی شامل معاینه، مراقبت‌های پیشگیرانه و بررسی مشکلات رایج دهان و دندان است.","teamDetails.focus2":"دندان‌پزشکی زیبایی به بررسی روش‌هایی مانند اصلاح طرح لبخند، بهبود ظاهر دندان‌ها و درمان‌های زیبایی می‌پردازد.","teamDetails.focus3":"مراقبت‌های دندان‌پزشکی شامل آشنایی با اصول بهداشت دهان، پیشگیری و پیگیری نیازهای درمانی بیماران است.","teamDetails.focus4":"دندان‌پزشکی ترمیمی بر بازسازی دندان‌های آسیب‌دیده و بهبود عملکرد و ظاهر آن‌ها تمرکز دارد.","teamDetails.approachTitle":"انتخاب روش درمان","teamDetails.approachDescription":"انتخاب روش درمان مناسب به معاینه، بررسی شرایط دهان و دندان و تشخیص تخصصی نیاز دارد. طرح درمان برای هر بیمار می‌تواند متفاوت باشد.","teamDetails.previewBadge":"پروفایل نمایشی","teamDetails.previewNotice":"این صفحه برای پیش‌نمایش طراحی ساخته شده است. نام، تصویر و تخصص درج‌شده نمونه هستند و بیانگر حضور واقعی این پزشک در کلینیک نیستند.","teamDetails.backToDoctors":"بازگشت به معرفی پزشکان","teamDetails.contactButton":"تماس با کلینیک","teamDetails.notFound":"پروفایل پزشک پیدا نشد.","home.heroTitle":"دنیایی از لبخندهای سالم‌تر پیش روی شماست","home.heroDescription":"با شناخت خدمات دندان‌پزشکی، آگاهی از گزینه‌های درمان و ارتباط آسان با کلینیک، قدم اول را برای مراقبت بهتر از سلامت دهان و دندان بردارید.","home.heroImageAlt":"تصویر معرفی خدمات دندان‌پزشکی","home.bookNow":"دریافت نوبت","home.aboutEyebrow":"درباره کلینیک","home.aboutTitle":"آشنایی با خدمات و رویکرد مراقبت از لبخند","home.aboutDescription":"هر بیمار شرایط و نیازهای خاص خود را دارد. بررسی دقیق وضعیت دهان و دندان، توضیح روشن گزینه‌های درمان و توجه به مراقبت‌های پیشگیرانه، به انتخاب آگاهانه کمک می‌کند.","home.aboutImageAlt":"محیط کلینیک دندان‌پزشکی","home.aboutFeature1":"اطلاع‌رسانی شفاف درباره روش‌های درمان","home.aboutFeature2":"توجه به شرایط و نیازهای فردی بیماران","home.questions":"سؤالی دارید؟","home.contactUs":"ارتباط با کلینیک","home.readMore":"بیشتر بخوانید","home.servicesEyebrow":"خدمات کلینیک","home.servicesTitle":"راهکارهای مراقبت و درمان دندان","home.allServices":"مشاهده همه خدمات","home.demoServicesNote":"خدمات این بخش فعلاً برای پیش‌نمایش سایت نمایش داده می‌شوند.","home.treatmentEyebrow":"روش‌های درمان","home.treatmentTitle":"آشنایی با درمان‌های دندان‌پزشکی","home.contactEyebrow":"ارتباط با ما","home.contactTitle":"سؤالات خود را با ما در میان بگذارید","home.contactImageAlt":"تصویر بخش تماس کلینیک","home.name":"نام و نام خانوادگی","home.email":"ایمیل","home.phone":"شماره تماس","home.subject":"موضوع","home.message":"پیام شما","home.submit":"ارسال پیام","home.contactDemoNote":"این فرم فعلاً نمایشی است و پیام‌ها به سرور ارسال نمی‌شوند. برای ارتباط، از صفحه تماس با ما استفاده کنید.","home.formRequired":"لطفاً نام و متن پیام را وارد کنید و اطلاعات را بررسی کنید.","home.formNotConnected":"این فرم هنوز به سرور متصل نیست؛ پیام شما ارسال نشد. لطفاً از صفحه تماس با ما استفاده کنید.","home.blogEyebrow":"مطالب آموزشی","home.blogTitle":"تازه‌های سلامت دهان و دندان","home.allBlogs":"مشاهده همه مقالات","home.demoBlogNote":"مقالات این بخش نمونه هستند و بعداً با مطالب منتشرشده کلینیک جایگزین می‌شوند.","home.service1Title":"اصلاح طرح لبخند","home.service1Description":"آشنایی با گزینه‌های دندان‌پزشکی زیبایی برای بهبود هماهنگی و ظاهر لبخند.","home.service2Title":"دندان‌پزشکی زیبایی","home.service2Description":"بررسی روش‌های زیبایی متناسب با وضعیت دندان‌ها و نیازهای هر فرد.","home.service3Title":"ایمپلنت دندان","home.service3Description":"آشنایی با روش جایگزینی دندان‌های ازدست‌رفته با استفاده از ایمپلنت.","home.service4Title":"دندان‌پزشکی عمومی","home.service4Description":"معاینات دوره‌ای، آموزش بهداشت دهان و مراقبت‌های پیشگیرانه.","home.service5Title":"سفید کردن دندان‌ها","home.service5Description":"بررسی روش‌های حرفه‌ای سفید کردن دندان و محدودیت‌های هر روش.","home.service6Title":"درمان ریشه دندان","home.service6Description":"آشنایی با درمان کانال ریشه برای دندان‌هایی که نیاز به بررسی و درمان پالپ دارند.","home.blog1Title":"اشتباهات رایج هنگام مسواک زدن","home.blog2Title":"سفید کردن دندان؛ روش‌های ایمن و نکات مهم","home.blog3Title":"آشنایی با مشکلات دندان غیرزنده","home.firstName":"نام","home.lastName":"نام خانوادگی","home.formSending":"در حال ارسال پیام…","home.formSent":"پیام شما با موفقیت ثبت شد.","home.formValidationError":"اطلاعات ارسال‌شده معتبر نیست. لطفاً فیلدها را بررسی کنید.","home.formTimeout":"مهلت ارسال پیام به پایان رسید. دوباره تلاش کنید.","home.formError":"ارسال پیام انجام نشد. لطفاً دوباره تلاش کنید.","contactPage.contact":"تماس با ما","contactPage.home":"صفحه اصلی","contactPage.breadcrumb":"مسیر صفحه","contactPage.contactInformation":"اطلاعات تماس","contactPage.touch":"با ما در ارتباط باشید","contactPage.heading":"دریافت مشاوره و اطلاعات رایگان","contactPage.imageAlt":"تصویر بخش تماس کلینیک دندان‌پزشکی","contactPage.addressLabel":"آدرس","contactPage.addressText":"تهران، خیابان فرشته، جنب سفارت سوئیس، پلاک ۳، طبقه پنجم، واحد ۱۸","contactPage.emailLabel":"ایمیل","contactPage.phoneLabel":"شماره تماس","contactPage.firstName":"نام","contactPage.lastName":"نام خانوادگی","contactPage.email":"آدرس ایمیل","contactPage.phone":"شماره تماس","contactPage.phonePlaceholder":"09123456789","contactPage.message":"پیام شما","contactPage.submit":"ارسال پیام","contactPage.sending":"در حال ارسال...","contactPage.success":"پیام شما با موفقیت ارسال شد.","contactPage.error":"ارسال پیام با مشکل مواجه شد. لطفاً دوباره تلاش کنید.","contactPage.validation":"لطفاً اطلاعات فرم را بررسی کنید.","dashboard.portal":"پرتال بیماران","dashboard.workspace":"فضای اختصاصی شما","dashboard.general":"بخش‌های اصلی","dashboard.account":"حساب کاربری","dashboard.overview":"نمای کلی","dashboard.appointments":"نوبت‌های من","dashboard.treatments":"طرح‌های درمان","dashboard.records":"پرونده دندان‌پزشکی","dashboard.billing":"پرداخت‌ها و فاکتورها","dashboard.profile":"پروفایل من","dashboard.menu":"باز کردن منو","dashboard.close":"بستن منو","dashboard.language":"زبان","dashboard.logout":"خروج از حساب","dashboard.loggingOut":"در حال خروج…","dashboard.support":"سوالی دارید؟","dashboard.supportText":"تیم کلینیک آماده پاسخ‌گویی به شماست.","dashboard.contact":"تماس با کلینیک","dashboard.greeting":"به فضای شخصی خود خوش آمدید","dashboard.subtitle":"همه چیز درباره مراقبت از دندان‌هایتان، در یک محیط آرام و ساده.","dashboard.healthTag":"مراقبت آسان‌تر از همیشه","dashboard.yourNextVisit":"نوبت بعدی شما","dashboard.noNextVisit":"هنوز نوبت آینده‌ای ثبت نشده","dashboard.nextVisitHint":"پس از رزرو نوبت، جزئیات آن در این بخش نمایش داده می‌شود.","dashboard.exploreServices":"مشاهده خدمات","dashboard.viewAppointments":"مشاهده نوبت‌ها","dashboard.overviewLabel":"در یک نگاه","dashboard.overviewHeading":"خلاصه وضعیت شما","dashboard.upcoming":"نوبت‌های آینده","dashboard.activePlans":"درمان‌های فعال","dashboard.balance":"مانده قابل پرداخت","dashboard.dataPending":"در انتظار اتصال","dashboard.currency":"—","dashboard.quickActions":"دسترسی سریع","dashboard.quickActionsCopy":"کارهای مهم با چند کلیک ساده.","dashboard.actionServices":"مشاهده خدمات","dashboard.actionServicesCopy":"با خدمات دندان‌پزشکی آشنا شوید.","dashboard.actionProfile":"ویرایش پروفایل","dashboard.actionProfileCopy":"اطلاعات تماس خود را به‌روز نگه دارید.","dashboard.actionHelp":"ارتباط با ما","dashboard.actionHelpCopy":"سوال خود را از تیم کلینیک بپرسید.","dashboard.journey":"مسیر درمان","dashboard.journeyCopy":"سوابق مراجعه و مراحل درمان اینجا نمایش داده می‌شوند.","dashboard.gentleReminder":"اطمینان خاطر شما","dashboard.gentleReminderCopy":"سوابق درمان شما در حساب کاربری نگهداری می‌شود و فقط اطلاعات مجاز و در دسترس نمایش داده خواهد شد.","dashboard.sectionOverviewEyebrow":"خانه بیمار","dashboard.sectionAppointmentsEyebrow":"برنامه نوبت‌ها","dashboard.appointmentTitle":"نوبت‌های من","dashboard.appointmentSubtitle":"نوبت‌های آینده و مراجعات قبلی را یکجا ببینید.","dashboard.appointmentsEmptyTitle":"برنامه نوبت‌های شما از اینجا شروع می‌شود","dashboard.appointmentsEmptyCopy":"در حال حاضر اطلاعاتی برای نمایش وجود ندارد. پس از اتصال سیستم نوبت‌دهی، نوبت‌ها اینجا نمایش داده می‌شوند.","dashboard.sectionTreatmentsEyebrow":"برنامه درمان شما","dashboard.treatmentTitle":"طرح‌های درمان","dashboard.treatmentSubtitle":"مراحل و پیشرفت درمان خود را دنبال کنید.","dashboard.treatmentsEmptyTitle":"برنامه درمانی روشن و منظم","dashboard.treatmentsEmptyCopy":"طرح‌های درمانی که کلینیک با شما به اشتراک می‌گذارد، در این بخش نمایش داده خواهد شد.","dashboard.sectionRecordsEyebrow":"پرونده سلامت شما","dashboard.recordsTitle":"پرونده دندان‌پزشکی","dashboard.recordsSubtitle":"محیطی خصوصی برای سوابق و فایل‌های پزشکی مجاز شما.","dashboard.recordsEmptyTitle":"سوابق دندان‌پزشکی شما اینجا قرار می‌گیرد","dashboard.recordsEmptyCopy":"سوابق، مدارک و تصاویر دندان‌پزشکی که پزشک اجازه دسترسی داده باشد، در این قسمت نمایش داده می‌شوند.","dashboard.privacyNote":"فقط اطلاعاتی نمایش داده می‌شود که دسترسی آن برای حساب بیمار مجاز باشد.","dashboard.sectionBillingEyebrow":"امور مالی شما","dashboard.billingTitle":"پرداخت‌ها و فاکتورها","dashboard.billingSubtitle":"وضعیت پرداخت‌ها و مبلغ‌های باقی‌مانده را بررسی کنید.","dashboard.billingEmptyTitle":"صورت‌حساب شفاف و ساده","dashboard.billingEmptyCopy":"فاکتورها، بیعانه‌ها و سوابق پرداخت پس از اتصال سیستم مالی در این بخش نمایش داده می‌شوند.","dashboard.sectionProfileEyebrow":"حساب شما","dashboard.profileTitle":"اطلاعات شخصی","dashboard.profileSubtitle":"مشخصات حساب و اطلاعات تماس خود را مدیریت کنید.","dashboard.badgeSoon":"آماده اتصال","dashboard.backHome":"بازگشت به سایت"},ga={"auth.shell.asideLabel":"Patient Portal Introduction","auth.shell.care":"Dental Care","auth.shell.private":"Your Privacy Is Protected","auth.shell.easy":"Easy Appointments","auth.shell.priority":"Your Smile, Our Priority","auth.shell.tagline":"A Better Dental Experience Starts Here","auth.shell.back":"Back to Website","auth.shell.portal":"Patient Portal","auth.shell.loginLegal":"Sign in using your mobile number and verification code, or your email and password.","auth.login.title":"Welcome Back","auth.login.subtitle":"Choose your preferred method to sign in to your account.","auth.login.sideTitle":"Every Beautiful Smile Begins with Great Care.","auth.login.sideCopy":"Your personal space to manage appointments and track your dental treatments.","auth.login.methodPhone":"Mobile Login","auth.login.methodEmail":"Email Login","auth.login.phone":"Mobile Number","auth.login.phonePlaceholder":"09123456789","auth.login.sendCode":"Send Verification Code","auth.login.codeSentTo":"A verification code has been sent to:","auth.login.code":"6-Digit Verification Code","auth.login.codePlaceholder":"Enter the 6-digit code","auth.login.codeValidity":"The verification code is valid for 2 minutes.","auth.login.verify":"Verify and Sign In","auth.login.editPhone":"Change Mobile Number","auth.login.resend":"Resend Code","auth.login.email":"Email Address","auth.login.emailPlaceholder":"example@email.com","auth.login.password":"Password","auth.login.passwordPlaceholder":"Enter your password","auth.login.signIn":"Sign In","auth.login.forgotPassword":"Forgot Password?","auth.login.newPatient":"New to Our Clinic?","auth.login.createAccount":"Create an Account","auth.login.invalidPhone":"Please enter a valid mobile number.","auth.login.invalidEmail":"Please enter a valid email address.","auth.login.enterPassword":"Please enter your password.","auth.login.invalidCredentials":"Invalid email or password.","auth.login.invalidCodeFormat":"Please enter the 6-digit verification code.","auth.login.invalidCode":"The verification code is incorrect or has expired.","auth.login.noAccount":"No account was found with this mobile number. Please register first.","auth.login.tooMany":"Too many requests. Please try again later.","auth.login.timeout":"The request timed out. Please try again.","auth.login.networkError":"Unable to connect to the server. Please check your internet connection.","auth.login.serverError":"The clinic server is temporarily unavailable.","auth.login.sent":"Verification code sent successfully.","auth.login.resent":"A new verification code has been sent.","auth.login.invalidApiToken":"Login was verified, but a valid authentication token was not received from the server.","auth.register.title":"Patient Registration","auth.register.subtitle":"Enter your information to create your patient account.","auth.register.sideTitle":"A Personal Space for a Healthier Smile.","auth.register.sideCopy":"Manage your appointments, treatment plans and payments in one place.","auth.register.name":"Full Name","auth.register.namePlaceholder":"Enter your full name","auth.register.phone":"Mobile Number","auth.register.referral":"Referral Code (Optional)","auth.register.referralPlaceholder":"Enter your referral code if you have one","auth.register.sendCode":"Send Verification Code","auth.register.codeSentTo":"A verification code was sent to:","auth.register.code":"6-Digit Verification Code","auth.register.codePlaceholder":"Enter the 6-digit code","auth.register.codeValidity":"The verification code is valid for 2 minutes.","auth.register.verify":"Verify and Register","auth.register.editPhone":"Edit Information","auth.register.resend":"Resend Code","auth.register.haveAccount":"Already have an account?","auth.register.signIn":"Sign In","auth.register.success":"Your account has been created successfully.","auth.register.goToLogin":"Go to Login","auth.register.invalidName":"Please enter a valid full name.","auth.register.invalidPhone":"Please enter a valid mobile number.","auth.register.invalidCodeFormat":"Please enter the 6-digit verification code.","auth.register.invalidCode":"The verification code is incorrect or has expired.","auth.register.invalidData":"Your registration information is invalid. Please review it.","auth.register.alreadyRegistered":"This mobile number is already registered.","auth.register.sessionExpired":"Your registration session has expired. Please try again.","auth.register.sent":"Verification code sent successfully.","auth.register.resent":"A new verification code has been sent.","auth.register.tooMany":"Too many requests. Please try again later.","auth.register.timeout":"The request timed out. Please try again.","auth.register.networkError":"Unable to connect to the server. Please check your internet connection.","auth.register.serverError":"The clinic server is temporarily unavailable.","auth.register.requestFailed":"Something went wrong. Please try again.","auth.forgot.title":"Reset Your Password","auth.forgot.subtitle":"Enter your mobile number to receive a verification code.","auth.forgot.sideTitle":"Your Smile Is Always Our Priority.","auth.forgot.sideCopy":"Recover your account securely and get back to managing your dental care.","auth.forgot.phone":"Mobile Number","auth.forgot.sendCode":"Send Verification Code","auth.forgot.codeSentTo":"A verification code was sent to:","auth.forgot.code":"6-Digit Verification Code","auth.forgot.codePlaceholder":"Enter the 6-digit code","auth.forgot.verify":"Verify Code","auth.forgot.changePhone":"Change Mobile Number","auth.forgot.resend":"Resend Code","auth.forgot.verifiedPhone":"Verified mobile number:","auth.forgot.newPassword":"New Password","auth.forgot.newPasswordPlaceholder":"At least 8 characters","auth.forgot.confirmPassword":"Confirm New Password","auth.forgot.confirmPlaceholder":"Enter your new password again","auth.forgot.resetPassword":"Reset Password","auth.forgot.backToLogin":"Back to Login","auth.forgot.success":"Your password has been reset successfully. You can now sign in.","auth.forgot.invalidPhone":"Please enter a valid mobile number.","auth.forgot.invalidCodeFormat":"The verification code must contain 6 digits.","auth.forgot.invalidCode":"The verification code is invalid or has expired.","auth.forgot.shortPassword":"Your password must contain at least 8 characters.","auth.forgot.passwordMismatch":"The passwords do not match.","auth.forgot.sessionExpired":"Recovery information is missing. Please request a new code.","auth.forgot.invalidData":"The submitted information is invalid.","auth.forgot.sent":"Verification code sent successfully.","auth.forgot.resent":"A new verification code has been sent.","auth.forgot.verified":"Mobile number verified. Please enter your new password.","auth.forgot.tooMany":"Too many requests. Please try again later.","auth.forgot.timeout":"The request timed out.","auth.forgot.serverError":"The server is temporarily unavailable.","auth.forgot.networkError":"Unable to connect to the server.","auth.forgot.requestFailed":"Something went wrong. Please try again.","auth.shell.privacyLegal":"Your account information is processed through a secure connection to the server.","auth.forgot.resetTokenExpired":"Your password reset session has expired. Please request a new verification code.","auth.sessionExpired":"Your session expired after 15 minutes of inactivity. Please sign in again.","profile.dashboard":"Patient Dashboard","profile.title":"My Profile","profile.subtitle":"Your account information and personal details.","profile.information":"Personal Information","profile.name":"Full Name","profile.email":"Email Address","profile.phone":"Mobile Number","profile.referral":"Referral Code","profile.notSet":"Not provided","profile.loading":"Loading your profile...","profile.loaded":"Your profile is up to date.","profile.partial":"Basic details loaded; full profile is unavailable.","profile.loadError":"Unable to load your profile information.","profile.reload":"Reload","profile.logout":"Sign Out","profile.phoneHint":"Your mobile number can only be changed after SMS verification.","blog.title":"Blog","blog.home":"Home","blog.latest":"Latest Updates","blog.heading":"Find the Latest News and Updates Here.","blog.loading":"Loading articles...","blog.empty":"No articles are available at the moment.","blog.error":"Unable to load articles. Please try again.","blog.retry":"Try Again","blog.readArticle":"Read Article","blog.details.page":"Dental Blog","blog.details.breadcrumb":"Blog Details","blog.details.categories":"Categories","blog.details.recent":"Recent Posts","blog.details.loading":"Loading article...","blog.details.notFound":"The requested article was not found.","blog.details.error":"Unable to load the article.","blog.details.retry":"Try Again","blog.details.back":"Back to Blog","header.login":"Login","header.dashboard":"Dashboard","header.loginAria":"Sign in to your patient account","header.dashboardAria":"Open patient dashboard","header.home":"Home","header.about":"About Us","header.services":"Services","header.blog":"Blog","header.contact":"Contact Us","header.logo":"Dentistry","header.menu":"Toggle navigation","header.language":"Site language","footer.eyebrow":"A NEW PERSPECTIVE ON DENTAL CARE","footer.heroTitle":"Your smile deserves","footer.heroHighlight":"something special.","footer.heroDescription":"A healthy, beautiful smile begins with care and awareness. Connect with us to learn more about the clinic and get answers to your questions.","footer.contactUs":"Contact Us","footer.brandName":"Dr. Zeinolabedin","footer.brandDescription":"A place to explore dental care, treatment options, and practical advice for maintaining good oral health.","footer.brandTag":"Care begins with confidence","footer.explore":"Quick Links","footer.patients":"For Patients","footer.getInTouch":"Get in Touch","footer.home":"Home","footer.about":"About Us","footer.team":"Our Team","footer.blog":"Dental Blog","footer.faq":"Frequently Asked Questions","footer.login":"Patient Login","footer.register":"Create an Account","footer.contactDescription":"For more information or questions, feel free to reach out through our contact page.","footer.contactLink":"Go to Contact Page","footer.copyright":"All rights reserved.","footer.backToTop":"Back to Top","footer.parentCompany":"Mazorya Group","about.breadcrumb":"About Us","about.home":"Home","about.imageAlt":"Dental clinic interior","about.introEyebrow":"About Us","about.introTitle":"A Thoughtful Approach to Your Smile","about.introDescription":"Oral health is an important part of overall well-being. Understanding preventive care, exploring treatment options, and asking informed questions can help patients make better decisions about their dental health.","about.feature1Title":"Information Before Decisions","about.feature1Description":"Understanding treatment steps and discussing concerns are important parts of making informed choices.","about.feature2Title":"Individual Treatment Needs","about.feature2Description":"Every patient has different oral health needs. Appropriate treatment depends on a professional examination and clinical assessment.","about.contactButton":"Contact Us","about.treatmentEyebrow":"Dental Services","about.treatmentTitle":"Explore Dental Treatments","about.treatmentDescription":"Discover the dental services currently listed by the clinic and visit each service page to learn more.","about.servicesLoading":"Loading services...","about.servicesEmpty":"No services are currently available.","about.servicesError":"Unable to load services.","about.retry":"Try Again","about.serviceDetails":"View Details","about.teamEyebrow":"Get in Touch","about.teamTitle":"We're Here for Your Questions","about.teamDescription":"Whether you want to learn more about available services, explore treatment options, or ask about visiting the clinic, you can reach out through our contact page.","about.teamButton":"Contact Us","about.faqEyebrow":"FAQ","about.faqTitle":"Frequently Asked Questions","about.faq1Question":"How often should I visit the dentist?","about.faq1Answer":"Regular dental checkups are recommended for many patients. The appropriate interval depends on your oral health needs and your dentist's assessment.","about.faq2Question":"What causes tooth decay?","about.faq2Answer":"Bacteria in dental plaque produce acids when they break down sugars and fermentable carbohydrates. Over time, these acids can remove minerals from tooth enamel and lead to cavities.","about.faq3Question":"How can I prevent gum disease?","about.faq3Answer":"Regular brushing with fluoride toothpaste, cleaning between teeth, routine dental checkups, and early attention to symptoms such as bleeding gums can help maintain gum health.","about.faq4Question":"Are teeth whitening treatments safe?","about.faq4Answer":"Professional whitening is generally safe when the method is appropriate and supervised by a dentist. Temporary sensitivity or gum irritation may occur, and whitening is not suitable for everyone.","about.faq5Question":"What are dental implants?","about.faq5Answer":"Dental implants are used to replace missing teeth. A post, typically made of titanium, is placed in the jawbone and later supports a dental restoration. Suitability depends on a professional examination and individual clinical conditions.","about.teamPreview":"معرفی پزشکان این بخش پس از تکمیل اطلاعات تیم پزشکی نمایش داده می‌شود.","about.demoTreatment1Title":"Smile Design","about.demoTreatment1Description":"Explore cosmetic dental options that may improve the appearance and harmony of your smile.","about.demoTreatment2Title":"Cosmetic Dentistry","about.demoTreatment2Description":"Discover aesthetic dental treatment options tailored to individual needs and goals.","about.demoTreatment3Title":"Dental Implants","about.demoTreatment3Description":"Learn about dental implants as an option for replacing missing teeth.","about.demoTreatment4Title":"Teeth Whitening","about.demoTreatment4Description":"Explore professional teeth whitening options under dental supervision.","about.demoTreatment5Title":"General Dentistry","about.demoTreatment5Description":"Routine examinations, preventive care, and assessment of common oral health concerns.","about.servicesDemoNote":"These services are currently displayed as a design preview.","about.doctor1Name":"Dr. Fiona Park","about.doctor1Role":"General Dentistry","about.doctor2Name":"Dr. John Martin","about.doctor2Role":"Cosmetic Dentistry","about.doctor3Name":"Dr. Archie White","about.doctor3Role":"Dental Care","about.doctor4Name":"Dr. Maria Angel","about.doctor4Role":"Restorative Dentistry","about.teamDemoNote":"Names and images are for demonstration only and will be replaced with the actual medical team.","teamDetails.home":"Home","teamDetails.team":"Our Medical Team","teamDetails.specialty":"Area of Practice","teamDetails.information":"Doctor Information","teamDetails.informationText":"Professional credentials, experience, and availability will be displayed after the clinic provides verified information.","teamDetails.eyebrow":"Doctor Profile","teamDetails.aboutTitle":"About","teamDetails.aboutDescription":"Explore the general field of dental care associated with this profile. Individual professional information will be completed in the final version.","teamDetails.focusTitle":"Areas of Dental Care","teamDetails.focus1":"General dentistry includes examinations, preventive care, and assessment of common oral health conditions.","teamDetails.focus2":"Cosmetic dentistry explores treatments that may improve smile appearance, tooth shape, and dental aesthetics.","teamDetails.focus3":"Dental care includes oral hygiene, preventive education, and follow-up of patients' dental needs.","teamDetails.focus4":"Restorative dentistry focuses on restoring damaged teeth and improving their appearance and function.","teamDetails.approachTitle":"Choosing the Right Treatment","teamDetails.approachDescription":"Appropriate treatment depends on a dental examination, clinical assessment, and the individual needs of each patient.","teamDetails.previewBadge":"Demo Profile","teamDetails.previewNotice":"This is a design preview. The displayed name, photo, and specialty are examples and do not establish that this doctor works at the clinic.","teamDetails.backToDoctors":"Back to Our Doctors","teamDetails.contactButton":"Contact the Clinic","teamDetails.notFound":"Doctor profile not found.","home.heroTitle":"Open Wide to a World of Smiles","home.heroDescription":"Explore dental services, understand treatment options, and connect with the clinic as you take the first step toward better oral health.","home.heroImageAlt":"Dental care and smile illustration","home.bookNow":"Book an Appointment","home.aboutEyebrow":"Who We Are","home.aboutTitle":"A Thoughtful Approach to Dental Care","home.aboutDescription":"Every patient has individual needs. Clinical assessment, clear explanations of treatment options, and attention to preventive care can help people make informed choices.","home.aboutImageAlt":"Dental clinic environment","home.aboutFeature1":"Clear information about dental treatments","home.aboutFeature2":"Attention to each patient’s unique needs","home.questions":"Have Questions?","home.contactUs":"Contact the Clinic","home.readMore":"Read More","home.servicesEyebrow":"Our Services","home.servicesTitle":"Personalized Dental Care Options","home.allServices":"View All Services","home.demoServicesNote":"The services shown here are design-preview examples.","home.treatmentEyebrow":"Treatments","home.treatmentTitle":"Explore Dental Treatment Options","home.contactEyebrow":"Get in Touch","home.contactTitle":"Have a Question? Send Us a Message","home.contactImageAlt":"Dental clinic contact section","home.name":"Full Name","home.email":"Email Address","home.phone":"Phone Number","home.subject":"Subject","home.message":"Your Message","home.submit":"Send Message","home.contactDemoNote":"This form is a preview and does not send messages to a server. Please use the Contact Us page to reach the clinic.","home.formRequired":"Please enter your name and message, and review the fields.","home.formNotConnected":"The form is not connected to a server yet. Your message was not sent. Please use the Contact Us page.","home.blogEyebrow":"Dental Insights","home.blogTitle":"Oral Health Articles","home.allBlogs":"View All Articles","home.demoBlogNote":"These articles are design-preview examples and will be replaced by published clinic articles.","home.service1Title":"Smile Design","home.service1Description":"Explore cosmetic options that may improve the appearance and harmony of your smile.","home.service2Title":"Cosmetic Dentistry","home.service2Description":"Discover aesthetic treatments suited to individual dental needs and goals.","home.service3Title":"Dental Implants","home.service3Description":"Learn about dental implants as an option for replacing missing teeth.","home.service4Title":"General Dentistry","home.service4Description":"Routine examinations, oral hygiene guidance, and preventive care.","home.service5Title":"Teeth Whitening","home.service5Description":"Explore professional whitening methods and their limitations.","home.service6Title":"Root Canal Treatment","home.service6Description":"Learn about root canal therapy for teeth requiring pulp assessment and treatment.","home.blog1Title":"Common Mistakes When Brushing Teeth","home.blog2Title":"Teeth Whitening: Safety and Best Practices","home.blog3Title":"Understanding Non-Vital Teeth","home.firstName":"First Name","home.lastName":"Last Name","home.formSending":"Sending your message...","home.formSent":"Your message was submitted successfully.","home.formValidationError":"Please review the information you entered and try again.","home.formTimeout":"The request timed out. Please try again.","home.formError":"The message could not be sent. Please try again.","contactPage.contact":"Contact Us","contactPage.home":"Home","contactPage.breadcrumb":"Breadcrumb","contactPage.contactInformation":"Contact Information","contactPage.touch":"Get in Touch","contactPage.heading":"Get Free Information!","contactPage.imageAlt":"Dental clinic contact illustration","contactPage.addressLabel":"Address","contactPage.addressText":"Tehran, Fereshteh Street, next to the Swiss Embassy, No. 3, 5th Floor, Unit 18","contactPage.emailLabel":"Email","contactPage.phoneLabel":"Phone","contactPage.firstName":"First Name","contactPage.lastName":"Last Name","contactPage.email":"Email","contactPage.phone":"Phone","contactPage.phonePlaceholder":"09123456789","contactPage.message":"Message","contactPage.submit":"Send Message","contactPage.sending":"Sending...","contactPage.success":"Your message has been sent successfully.","contactPage.error":"Unable to send your message. Please try again.","contactPage.validation":"Please check the form fields.","dashboard.portal":"Patient portal","dashboard.workspace":"YOUR WORKSPACE","dashboard.general":"GENERAL","dashboard.account":"ACCOUNT","dashboard.overview":"Overview","dashboard.appointments":"Appointments","dashboard.treatments":"Treatment plans","dashboard.records":"Dental records","dashboard.billing":"Payments & invoices","dashboard.profile":"My profile","dashboard.menu":"Open navigation","dashboard.close":"Close navigation","dashboard.language":"Language","dashboard.logout":"Sign out","dashboard.loggingOut":"Signing out…","dashboard.support":"Need a hand?","dashboard.supportText":"Our clinic team is here to help you.","dashboard.contact":"Contact clinic","dashboard.greeting":"Welcome to your space","dashboard.subtitle":"Everything about your dental care, in one calm place.","dashboard.healthTag":"YOUR CARE, SIMPLIFIED","dashboard.yourNextVisit":"Your next appointment","dashboard.noNextVisit":"No upcoming appointment yet","dashboard.nextVisitHint":"When you book a visit, the details will appear here.","dashboard.exploreServices":"Explore services","dashboard.viewAppointments":"View appointments","dashboard.overviewLabel":"AT A GLANCE","dashboard.overviewHeading":"Your health overview","dashboard.upcoming":"Upcoming visits","dashboard.activePlans":"Active plans","dashboard.balance":"Amount due","dashboard.dataPending":"Awaiting connection","dashboard.currency":"—","dashboard.quickActions":"Quick actions","dashboard.quickActionsCopy":"The things you need, just a click away.","dashboard.actionServices":"Explore treatments","dashboard.actionServicesCopy":"Learn about available dental services.","dashboard.actionProfile":"Update your profile","dashboard.actionProfileCopy":"Keep your contact information current.","dashboard.actionHelp":"Get in touch","dashboard.actionHelpCopy":"Ask our team a question.","dashboard.journey":"Care timeline","dashboard.journeyCopy":"Your visits and treatment milestones will be here.","dashboard.gentleReminder":"A little peace of mind","dashboard.gentleReminderCopy":"Your treatment history is kept in your account. Records will appear only when available and authorized for you.","dashboard.sectionOverviewEyebrow":"PATIENT HOME","dashboard.sectionAppointmentsEyebrow":"YOUR SCHEDULE","dashboard.appointmentTitle":"Appointments","dashboard.appointmentSubtitle":"Review future and past appointments in one place.","dashboard.appointmentsEmptyTitle":"Your schedule starts here","dashboard.appointmentsEmptyCopy":"You have no appointment information to display yet. Once appointment services are connected, your visits will appear here.","dashboard.sectionTreatmentsEyebrow":"YOUR CARE PLAN","dashboard.treatmentTitle":"Treatment plans","dashboard.treatmentSubtitle":"Follow your treatment stages and progress.","dashboard.treatmentsEmptyTitle":"Your treatment plan, made clear","dashboard.treatmentsEmptyCopy":"Treatment plans shared with you by the clinic will appear here once available.","dashboard.sectionRecordsEyebrow":"YOUR HEALTH FILE","dashboard.recordsTitle":"Dental records","dashboard.recordsSubtitle":"A private home for your eligible dental history and files.","dashboard.recordsEmptyTitle":"Your dental history belongs here","dashboard.recordsEmptyCopy":"Doctor-approved records, documents and dental images will be shown here when available to you.","dashboard.privacyNote":"Only information authorized for the patient account will be displayed.","dashboard.sectionBillingEyebrow":"YOUR FINANCES","dashboard.billingTitle":"Payments & invoices","dashboard.billingSubtitle":"Understand paid amounts and any upcoming payments.","dashboard.billingEmptyTitle":"Clear, simple billing","dashboard.billingEmptyCopy":"Your invoices, deposits and payment history will appear when the billing system is connected.","dashboard.sectionProfileEyebrow":"YOUR ACCOUNT","dashboard.profileTitle":"Personal information","dashboard.profileSubtitle":"Update account details and manage your contact information.","dashboard.badgeSoon":"Ready for integration","dashboard.backHome":"Back to website"},_t="dentistry.lang",ut="en",ma=new Set(["fa","en"]),Bt={fa:ha,en:ga},Le=e=>String(e??"").replace(/\s+/g," ").trim();function Xe(e){return ma.has(e)}function G(){if(typeof window>"u")return ut;const e=new URLSearchParams(window.location.search).get("lang");if(Xe(e))return e;try{const t=localStorage.getItem(_t);if(Xe(t))return t}catch{}return ut}function p(e){var n;const t=Le(e);if(!t)return String(e??"");const a=G(),o=(n=Bt[a])==null?void 0:n[t];return typeof o=="string"&&o.length>0?o:String(e??"")}function ba(e){const t=G(),a=t==="fa"?"fa-IR":"en-US",o=Number(e??0);return`${new Intl.NumberFormat(a).format(Number.isFinite(o)?o:0)} ${t==="fa"?"تومان":"toman"}`}function ot(){if(typeof document>"u")return;const e=G();document.documentElement.lang=e,document.documentElement.dir=e==="fa"?"rtl":"ltr",document.documentElement.dataset.locale=e}function fa(e){var l,b;if(!e||typeof document>"u")return;const t=G(),a=Bt[t]||{},o=new Set(["SCRIPT","STYLE","NOSCRIPT","CODE","PRE","SVG"]),n=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,{acceptNode(u){const d=u.parentElement;return!d||d.closest("[data-no-translate]")||o.has(d.tagName)||d.closest("svg")?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}}),i=[];for(;n.nextNode();)i.push(n.currentNode);for(const u of i){const d=u.nodeValue,c=Le(d);if(!c)continue;const h=a[c];if(typeof h!="string")continue;const s=((l=d.match(/^\s*/))==null?void 0:l[0])??"",g=((b=d.match(/\s*$/))==null?void 0:b[0])??"";u.nodeValue=s+h+g}const r=e.querySelectorAll("[placeholder],[title],[aria-label],[alt],[value]");for(const u of r){if(u.closest("[data-no-translate]"))continue;const d=["placeholder","title","aria-label","alt"];for(const c of d){if(!u.hasAttribute(c))continue;const h=u.getAttribute(c),s=Le(h),g=a[s];typeof g=="string"&&u.setAttribute(c,g)}if(u.tagName==="INPUT"&&["submit","button"].includes(u.type)){const c=u.getAttribute("value"),h=Le(c),s=a[h];typeof s=="string"&&u.setAttribute("value",s)}}}function Ft(e=""){const t=G();return`
    <div
      class="dentistry-lang-switch ${e}"
      role="group"
      aria-label="Site language"
    >

      <button
        type="button"
        data-set-language="fa"
        aria-label="فارسی"
        aria-pressed="${t==="fa"}"
        class="${t==="fa"?"is-active":""}"
      >
        FA
      </button>

      <span
        class="dentistry-lang-divider"
        aria-hidden="true"
      ></span>

      <button
        type="button"
        data-set-language="en"
        aria-label="English"
        aria-pressed="${t==="en"}"
        class="${t==="en"?"is-active":""}"
      >
        EN
      </button>

    </div>
  `}function Ut(e,t){if(!Xe(e))return;try{localStorage.setItem(_t,e)}catch{}const a=new URL(window.location.href);a.searchParams.set("lang",e),window.history.replaceState(window.history.state,"",a.pathname+a.search+a.hash),ot(),typeof t=="function"&&t()}ot();const Be="dentistry.patient.jwt",Je="dentistry.patient.client";function nt(e){var o;if((e==null?void 0:e.success)!==!0||typeof((o=e==null?void 0:e.data)==null?void 0:o.token)!="string"||!e.data.token.trim())throw new Error("AUTH_TOKEN_MISSING");const{token:t,client:a}=e.data;if(sessionStorage.setItem(Be,t),a&&typeof a=="object"){const n={id:a.id??null,name:a.name??null,email:a.email??null,phone:a.phone??null,referral_code:a.referral_code??null,referrer_id:a.referrer_id??null};sessionStorage.setItem(Je,JSON.stringify(n))}else sessionStorage.removeItem(Je);return a??null}function Te(){try{return sessionStorage.getItem(Be)}catch{return null}}function qe(){try{sessionStorage.removeItem(Be),sessionStorage.removeItem(Je)}catch{}}function va(e){var a;const t=(a=e==null?void 0:e.data)==null?void 0:a.token;if(typeof t!="string"||!t.trim())throw new Error("AUTH_TOKEN_MISSING");return sessionStorage.setItem(Be,t),t}const it="dentistry.patient.lastActivity",ya=15*60*1e3;function wa(){try{return Number(sessionStorage.getItem(it))}catch{return 0}}function Ht(e=Date.now()){try{return sessionStorage.setItem(it,String(e)),!0}catch{return!1}}function $a(e){if(typeof e!="string"||e.split(".").length!==3)return!1;try{const t=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),a=JSON.parse(atob(t.padEnd(Math.ceil(t.length/4)*4,"=")));return typeof a.exp=="number"&&Date.now()>=a.exp*1e3}catch{return!1}}function jt(){window.dispatchEvent(new Event("dentistry:auth-changed"))}function rt(){return!Te()||!Ht()?!1:(jt(),!0)}function ka(){qe();try{sessionStorage.removeItem(it)}catch{}jt()}function fe(){const e=Te();if(!e)return!1;const t=wa();return!t||Date.now()-t>=ya||$a(e)?(ka(),!1):!0}function Ea(){return fe()?Ht():!1}function Sa(e){const t=new AbortController,{signal:a}=t;let o=fe(),n=0;const i=()=>{const b=fe();o&&!b&&(e==null||e()),o=b},r=()=>{if(!fe()){i();return}const b=Date.now();b-n<1e3||(n=b,Ea(),o=!0)};for(const b of["pointerdown","keydown","touchstart","scroll"])document.addEventListener(b,r,{signal:a,passive:!0,capture:b==="scroll"});document.addEventListener("visibilitychange",()=>{document.hidden||i()},{signal:a}),window.addEventListener("focus",i,{signal:a}),window.addEventListener("pageshow",i,{signal:a});const l=window.setInterval(i,5e3);return()=>{t.abort(),window.clearInterval(l)}}const Vt=[{url:"/",key:"header.home",en:"Home",fa:"خانه"},{url:"/about-us",key:"header.about",en:"About Us",fa:"درباره ما"},{url:"/service",key:"header.services",en:"Services",fa:"خدمات"},{url:"/blog",key:"header.blog",en:"Blog",fa:"وبلاگ"},{url:"/contact-us",key:"header.contact",en:"Contact Us",fa:"تماس با ما"}];function Se(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function oe(e,t,a){const o=p(e);return o!==e&&o?o:G()==="fa"?a:t}function Yt(){return window.location.pathname.replace(/\/+$/,"")||"/"}function zt(e){const t=Yt();return!!(t===e||e==="/service"&&t.startsWith("/services/")||e==="/blog"&&t.startsWith("/post/"))}function Gt(){const e=fe();return{authenticated:e,href:e?"/dashboard":"/login",label:e?oe("header.dashboard","Dashboard","داشبورد"):oe("header.login","Login","ورود"),ariaLabel:e?oe("header.dashboardAria","Open patient dashboard","ورود به داشبورد بیمار"):oe("header.loginAria","Sign in to patient account","ورود به حساب بیمار")}}const Ta=`
  <svg
    class="dentistry-header-auth-icon"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.7"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="8" r="3.5"></circle>
    <path d="M5.5 20c0-3.5 2.9-6 6.5-6s6.5 2.5 6.5 6"></path>
  </svg>
`;function pt(e){const t=Gt();return`
    <a
      href="${t.href}"
      class="dentistry-header-auth dentistry-header-auth-${e} w-inline-block"
      data-header-auth
      data-auth-type="${e}"
      aria-label="${Se(t.ariaLabel)}"
    >
      ${Ta}

      <span class="dentistry-header-auth-text">
        ${Se(t.label)}
      </span>
    </a>
  `}function Aa(){return Vt.map(e=>{const t=zt(e.url),a=oe(e.key,e.en,e.fa);return`
      <a
        href="${e.url}"
        data-header-nav-key="${e.key}"
        class="nav-link w-inline-block${t?" w--current":""}"
        ${t?'aria-current="page"':""}
      >
        <div class="nav-link-text">
          ${Se(a)}
        </div>
      </a>
    `}).join("")}function Ca(){const e=Yt()==="/";return`
    <div
      data-dentistry-header
      data-no-translate
      data-animation="default"
      data-collapse="medium"
      data-duration="400"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      class="navbar w-nav"
    >

      <header id="header">

        <div class="container-fluid fist w-container">

          <div class="navbar-main-wrapper">

            <!-- LOGO -->

            <a
              href="/"
              class="brand w-nav-brand${e?" w--current":""}"
              ${e?'aria-current="page"':""}
            >
              <img
                src="/asset/img/logo.png"
                loading="eager"
                alt="${Se(oe("header.logo","Dentistry","دندان‌پزشکی"))}"
                class="brand-logo"
                data-header-logo
              />
            </a>

            <!-- NAVIGATION -->

            <nav
              role="navigation"
              class="nav-menu-block w-nav-menu"
              id="dentistry-nav-menu"
            >

              ${Aa()}

              <!-- MOBILE AUTH BUTTON -->
              ${pt("mobile")}

            </nav>

            <!-- LANGUAGE SWITCH -->

            ${Ft("dentistry-header-lang")}

            <!-- DESKTOP AUTH BUTTON -->

            ${pt("desktop")}

            <!-- MOBILE HAMBURGER -->

            <div
              class="hamburger-menu-button w-nav-button"
              aria-label="${Se(oe("header.menu","Toggle navigation","باز و بسته کردن منو"))}"
              aria-controls="dentistry-nav-menu"
              aria-expanded="false"
              role="button"
              tabindex="0"
              data-header-menu-button
            >
              <div class="w-icon-nav-menu"></div>
            </div>

          </div>

        </div>

      </header>

    </div>
  `}function xa(){const e=pa(),t=document.querySelector("[data-dentistry-header]");if(!t)return()=>{typeof e=="function"&&e()};function a(){const u=Gt();t.querySelectorAll("[data-header-auth]").forEach(d=>{d.href=u.href,d.setAttribute("aria-label",u.ariaLabel);const c=d.querySelector(".dentistry-header-auth-text");c&&(c.textContent=u.label)})}function o(){Vt.forEach(u=>{const d=Array.from(t.querySelectorAll("[data-header-nav-key]")).find(s=>s.dataset.headerNavKey===u.key);if(!d)return;const c=d.querySelector(".nav-link-text");c&&(c.textContent=oe(u.key,u.en,u.fa));const h=zt(u.url);d.classList.toggle("w--current",h),h?d.setAttribute("aria-current","page"):d.removeAttribute("aria-current")})}function n(){const u=G(),d=t.querySelector(".dentistry-lang-switch");d&&d.setAttribute("aria-label",oe("header.language","Site language","زبان سایت")),t.querySelectorAll("[data-set-language]").forEach(c=>{const h=c.dataset.setLanguage===u;c.classList.toggle("is-active",h),c.setAttribute("aria-pressed",String(h))})}function i(){const u=t.querySelector("[data-header-logo]");u&&(u.alt=oe("header.logo","Dentistry","دندان‌پزشکی"));const d=t.querySelector("[data-header-menu-button]");d&&d.setAttribute("aria-label",oe("header.menu","Toggle navigation","باز و بسته کردن منو"))}function r(){t.isConnected&&(o(),a(),n(),i())}r(),window.addEventListener("dentistry:auth-changed",r);const l=new MutationObserver(r);l.observe(document.documentElement,{attributes:!0,attributeFilter:["lang","dir"]});function b(){document.hidden||r()}return document.addEventListener("visibilitychange",b),window.addEventListener("focus",r),()=>{l.disconnect(),window.removeEventListener("dentistry:auth-changed",r),window.removeEventListener("focus",r),document.removeEventListener("visibilitychange",b),typeof e=="function"&&e()}}function Pa(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function z(e){return Pa(p(`footer.${e}`))}const ht={diagonalArrow:`
    <svg
      viewBox="0 0 24 24"
      width="19"
      height="19"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7"></path>
      <path d="M8 7h9v9"></path>
    </svg>
  `,up:`
    <svg
      viewBox="0 0 24 24"
      width="19"
      height="19"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M12 19V5"></path>
      <path d="m5 12 7-7 7 7"></path>
    </svg>
  `};function ue(e,t){return`
    <li class="dz-footer-nav-item">

      <a
        href="${e}"
        class="dz-footer-nav-link"
      >

        <span
          class="dz-footer-nav-dot"
          aria-hidden="true"
        ></span>

        <span>
          ${z(t)}
        </span>

      </a>

    </li>
  `}function La(){const e=new Date().getFullYear();return`
    <footer
      id="footer"
      class="dz-footer"
      data-dz-footer
      data-no-translate
    >

      <!-- BACKGROUND -->

      <div
        class="dz-footer-background"
        aria-hidden="true"
      ></div>

      <div class="dz-footer-container">

        <!-- =====================================
             TOP CTA
        ====================================== -->

        

        <!-- =====================================
             MAIN FOOTER
        ====================================== -->

        <div class="dz-footer-main">

          <!-- BRAND -->

          <div class="dz-footer-brand">

            <a
              href="/"
              class="dz-footer-brand-link"
              aria-label="${z("brandName")}"
            >

              <span class="dz-footer-logo-box">

                <img
                  src="/asset/img/logo.png"
                  alt="${z("brandName")}"
                  class="dz-footer-logo"
                  loading="lazy"
                />

              </span>

              <span class="dz-footer-brand-name">
                ${z("brandName")}
              </span>

            </a>

            <!-- BRAND DESCRIPTION -->

            <p class="dz-footer-brand-description">
              ${z("brandDescription")}
            </p>

            <!-- BRAND TAG -->

            <div class="dz-footer-brand-tag">

              <span
                class="dz-footer-tag-symbol"
                aria-hidden="true"
              >
                ✳
              </span>

              <span>
                ${z("brandTag")}
              </span>

            </div>

          </div>

          <!-- =====================================
               QUICK LINKS
          ====================================== -->

          <div class="dz-footer-column">

            <h3 class="dz-footer-column-heading">
              ${z("explore")}
            </h3>

            <ul class="dz-footer-nav-list">

              ${ue("/","home")}

              ${ue("/about-us","about")}

              ${ue("/team","team")}

              ${ue("/blog","blog")}

            </ul>

          </div>

          <!-- =====================================
               PATIENT LINKS
          ====================================== -->

          <div class="dz-footer-column">

            <h3 class="dz-footer-column-heading">
              ${z("patients")}
            </h3>

            <ul class="dz-footer-nav-list">

              ${ue("/login","login")}

              ${ue("/register","register")}

              ${ue("/faq","faq")}

            </ul>

          </div>

          <!-- =====================================
               CONTACT
          ====================================== -->

          <div class="dz-footer-column dz-footer-contact">

            <h3 class="dz-footer-column-heading">
              ${z("getInTouch")}
            </h3>

            <p class="dz-footer-contact-description">
              ${z("contactDescription")}
            </p>

            <a
              href="/contact-us"
              class="dz-footer-contact-link"
            >

              <span>
                ${z("contactLink")}
              </span>

              ${ht.diagonalArrow}

            </a>

          </div>

        </div>

        <!-- =====================================
             BOTTOM
        ====================================== -->

        <div class="dz-footer-bottom">

  <!-- COPYRIGHT - LEFT -->

  <p class="dz-footer-copyright">
    © ${e} ${z("brandName")}.
    ${z("copyright")}
  </p>

  <!-- MAZORYA GROUP - CENTER -->

  <div class="dz-footer-designer">
    Designed & developed by
    <a
      href="https://www.mazoryagroup.ir/"
      target="_blank"
      rel="noopener noreferrer"
      class="dz-footer-company-link"
    >
      MazoryaGroup
    </a>
  </div>

  <!-- BACK TO TOP - RIGHT -->

  <button
    type="button"
    class="dz-footer-back-top"
    data-footer-back-top
    aria-label="${z("backToTop")}"
  >
    <span>${z("backToTop")}</span>

    <span class="dz-footer-back-top-icon">
      ${ht.up}
    </span>
  </button>

</div>

      </div>

    </footer>
  `}function Da(){const e=document.querySelector("[data-dz-footer]");if(!e)return()=>{};const t=new AbortController,{signal:a}=t,o=e.querySelector("[data-footer-back-top]");return o==null||o.addEventListener("click",()=>{const n=window.matchMedia("(prefers-reduced-motion: reduce)").matches;window.scrollTo({top:0,behavior:n?"auto":"smooth"})},{signal:a}),()=>{t.abort()}}const Wt="httpS://apidr.mazoryagroup.ir/api",Ia=15e3,qa=Wt.replace(/\/+$/,"");class me extends Error{constructor(t,a=0,o=null){super(t),this.name="ApiError",this.status=a,this.errors=o}}async function st(e,{method:t="GET",body:a=null,auth:o=!1,signal:n=null}={}){const i=new AbortController;let r=!1;const l=()=>{i.abort()};n&&(n.aborted?i.abort():n.addEventListener("abort",l,{once:!0}));const b=setTimeout(()=>{r=!0,i.abort()},Ia);try{const u={Accept:"application/json"};if(a!==null&&(u["Content-Type"]="application/json"),o){const m=Te();if(!m)throw new me("Unauthenticated.",401);u.Authorization=`Bearer ${m}`}const d=String(e||"").replace(/^\/+/,""),c=`${qa}/${d}`,h=await fetch(c,{method:t.toUpperCase(),headers:u,body:a!==null?JSON.stringify(a):void 0,signal:i.signal,cache:"no-store",credentials:"omit"});if(h.status===204)return{success:!0,statusCode:204};const s=await h.json().catch(()=>null),g=Number(s==null?void 0:s.statusCode);if(!h.ok||(s==null?void 0:s.success)===!1||(s==null?void 0:s.status)===!1||Number.isFinite(g)&&g>=400)throw new me((s==null?void 0:s.message)||"API request failed.",h.ok&&g>=400?g:h.status,(s==null?void 0:s.errors)??null);if(!s||typeof s!="object")throw new me("Invalid server response.",502);return s}catch(u){throw u instanceof me?u:(u==null?void 0:u.name)==="AbortError"?n!=null&&n.aborted?u:new me(r?"Request timeout.":"Request cancelled.",r?408:0):(console.error("API Network Error:",{endpoint:e,message:u==null?void 0:u.message}),new me("Unable to connect to the server.",0))}finally{clearTimeout(b),n&&n.removeEventListener("abort",l)}}function ve(e,t={}){return st(e,{...t,method:"GET"})}function Z(e,t={},a={}){return st(e,{...a,method:"POST",body:t})}function Na(e,t={},a={}){return st(e,{...a,method:"PUT",body:t})}const He={loginWithEmail(e,t,a=null){return Z("/v1/auth/login",{email:e,password:t},{signal:a})},sendCode(e,t=null){return Z("/v1/auth/login/phone/send-code",{phone:e},{signal:t})},verifyCode(e,t,a=null){return Z("/v1/auth/login/phone/verify",{phone:e,code:t},{signal:a})}},gt={sendCode(e,t,a="",o=null){return Z("/v1/auth/register/send-code",{name:e,phone:t,referral_code:a},{signal:o})},verifyCode(e,t,a,o="",n=null){return Z("/v1/auth/register/verify",{phone:e,code:t,name:a,referral_code:o},{signal:n})}},je={sendCode(e,t=null){return Z("/v1/auth/forgot-password/send-code",{phone:e},{signal:t})},verifyCode(e,t,a=null){return Z("/v1/auth/forgot-password/verify",{phone:e,code:t},{signal:a})},resetPassword(e,t,a,o,n,i=null){return Z("/v1/auth/forgot-password/reset",{phone:e,code:t,reset_token:a,password:o,password_confirmation:n},{signal:i})}},De={me(e=null){return ve("/v1/auth/me",{auth:!0,signal:e})},getProfile(e=null){return ve("/v1/auth/profile",{auth:!0,signal:e})},updateProfile(e,t=null){return Na("/v1/auth/profile",e,{auth:!0,signal:t})},refresh(e=null){return Z("/v1/auth/refresh",{},{auth:!0,signal:e})},logout(e=null){return Z("/v1/auth/logout",{},{auth:!0,signal:e})},changePhoneSendCode(e,t=null){return Z("/v1/auth/profile/change-phone/send-code",e,{auth:!0,signal:t})},changePhoneVerify(e,t=null){return Z("/v1/auth/profile/change-phone/verify",e,{auth:!0,signal:t})}},Ne={list(e="en",t=null){return ve(`/v1/blogs?lang=${e==="fa"?"fa":"en"}`,{signal:t})},show(e,t="en",a=null){const o=t==="fa"?"fa":"en";return ve(`/v1/blogs/${encodeURIComponent(e)}?lang=${o}`,{signal:a})}},Re={list(e="en",t=null){return ve(`/v1/services?lang=${e==="fa"?"fa":"en"}`,{signal:t})},show(e,t="en",a=null){const o=t==="fa"?"fa":"en";return ve(`/v1/services/${encodeURIComponent(e)}?lang=${o}`,{signal:a})}},Zt={send(e,t=null){return Z("/messages",e,{signal:t})}},ne=()=>G()==="fa"?"fa":"en",X=e=>typeof e=="string"?e.trim():"";function de(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}const q=e=>de(p(`home.${e}`)),Ra="/asset/img/hero.jpg",Oa="https://cdn.prod.website-files.com/6768f6d314e679aeffeed929/679c4b211f44d535f9e7da9c_1.svg",Kt=`
  <svg viewBox="0 0 24 24" width="20" height="20"
       fill="none" stroke="currentColor" stroke-width="1.8"
       stroke-linecap="round" stroke-linejoin="round"
       aria-hidden="true">
    <path d="M5 12h14"/>
    <path d="m13 6 6 6-6 6"/>
  </svg>
`,Oe=`
  <svg viewBox="0 0 64 64" width="48" height="48"
       fill="none" stroke="currentColor" stroke-width="1.8"
       stroke-linejoin="round" aria-hidden="true">
    <path d="M18 8C10 8 5 14 5 24c0 9 4 16 7 24
      2 5 5 8 9 7 4-1 3-9 5-15
      1-4 3-6 6-6s5 2 6 6
      c2 6 1 14 5 15 4 1 7-2 9-7
      3-8 7-15 7-24 0-10-5-16-13-16
      -6 0-9 4-14 4s-8-4-14-4Z"/>
  </svg>
`,Ma={en:{loadingServices:"Loading services...",noServices:"No services available.",servicesError:"Unable to load services. Please try again later.",loadingBlogs:"Loading articles...",noBlogs:"No articles available.",blogsError:"Unable to load articles. Please try again later."},fa:{loadingServices:"در حال دریافت خدمات...",noServices:"خدمتی برای نمایش وجود ندارد.",servicesError:"دریافت خدمات با خطا مواجه شد. بعداً دوباره تلاش کنید.",loadingBlogs:"در حال دریافت مقالات...",noBlogs:"مقاله‌ای برای نمایش وجود ندارد.",blogsError:"دریافت مقالات با خطا مواجه شد. بعداً دوباره تلاش کنید."}};function lt(e){const t=p(`home.${e}`);return t&&t!==`home.${e}`?t:Ma[ne()][e]}function _a(e){const t=X(e);return t?(new DOMParser().parseFromString(t,"text/html").body.textContent||"").replace(/\s+/g," ").trim():""}function Qt(e){const t=X(e&&typeof e=="object"?e.url||e.full_url||e.path||e.src||"":e);if(!t||/[<>"'\u0000-\u001f]/.test(t))return"";try{const a=new URL(Wt,window.location.origin).origin,o=/^https?:\/\//i.test(t)||t.startsWith("/")?t:/^(storage|uploads|images)\//i.test(t)?`/${t}`:`/storage/${t}`,n=new URL(o,a);return["http:","https:"].includes(n.protocol)?n.href:""}catch{return""}}function Xt(e){const t=(e==null?void 0:e.translations)||(e==null?void 0:e.service_translations)||(e==null?void 0:e.service_translates)||(e==null?void 0:e.blog_translations)||(e==null?void 0:e.translates);if(Array.isArray(t))return t.find(o=>(o==null?void 0:o.locale)===ne()||(o==null?void 0:o.lang)===ne()||(o==null?void 0:o.language)===ne())||{};if(t&&typeof t=="object"&&t[ne()])return t[ne()];const a=e==null?void 0:e.translation;return a&&(!a.locale&&!a.lang||a.locale===ne()||a.lang===ne())?a:{}}function Ba(e){if(!e||typeof e!="object"||[!1,0,"0"].includes(e.is_active))return null;const t=Number(e.id);if(!Number.isSafeInteger(t)||t<=0)return null;const a=Xt(e),o=X(a.name||a.title_1||a.title||e.name||e.title_1||e.title);return o?{id:t,name:o,description:X(a.description_1||a.description||e.description_1||e.description),image:Qt(e.image_url||e.image_1_url||e.image||e.image_1||e.cover_image||"")}:null}function Fa(e){if(!e||typeof e!="object")return null;const t=Xt(e),a=X(t.title_1||e.title_1||t.title||e.title);if(!a)return null;const o=X(e.slug||e.blog_slug||t.slug),n=o&&!/[\/\\?#\u0000-\u001f]/.test(o)?o:"",i=X(e.date||e.published_at||e.created_at).slice(0,10);return{id:e.id??null,slug:n,title:a,image:Qt(e.image_1||e.image_1_url||e.image_url||e.cover_image_url||e.image||e.cover_image||""),date:/^\d{4}-\d{2}-\d{2}$/.test(i)?i:""}}function mt(e,t){const a=(e==null?void 0:e.data)??e;if(Array.isArray(a))return a;const o=[a==null?void 0:a.data,a==null?void 0:a[t],a==null?void 0:a.items,a==null?void 0:a.results,e==null?void 0:e[t],e==null?void 0:e.results];for(const n of o)if(Array.isArray(n))return n;return[]}function Ae(e,t,a="button-primary w-inline-block"){return`
    <a href="${e}" class="${a}">
      <span class="button-primary-text">
        ${q(t)}
      </span>
      <span class="button-icon-block">
        ${Kt}
      </span>
    </a>
  `}function Ua(){return`
    <section class="section hero-one-section dp-home-hero">
      <div class="w-layout-blockcontainer container-fluid w-container">
        <div class="hero-one-main-block">
          <div class="w-layout-grid hero-one-grid">

            <div class="hero-contant-block">
              <div class="hero-icon-inner-block">
                <div class="hero-one-icon-block">
                  <img
                    src="${Oa}"
                    loading="eager"
                    alt=""
                    class="hero-one-icon"
                    aria-hidden="true"
                  />
                </div>
              </div>

              <div class="hero-title-block">
                <h1 class="hero-title">
                  ${q("heroTitle")}
                </h1>
              </div>

              <div class="hero-description">
                <p class="section-description">
                  ${q("heroDescription")}
                </p>
              </div>

              <div class="hero-button-block">
                ${Ae("/login","bookNow")}
              </div>
            </div>

            <div class="hero-image-block">
              <img
                src="${Ra}"
                loading="eager"
                fetchpriority="high"
                alt="${q("heroImageAlt")}"
                class="hero-image"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  `}function Ha(){return`
    <section class="section aboutus-section dp-home-about">
      <div class="w-layout-blockcontainer container w-container">
        <div class="main-about-block">
          <div class="w-layout-grid about-grid">

            <div class="about-image-block">
              <img
                src="/asset/img/about.jpg"
                loading="lazy"
                alt="${q("aboutImageAlt")}"
                class="about-image"
              />
              <img
                src="/asset/img/about-1.jpg"
                loading="lazy"
                alt="${q("aboutImageAlt")}"
                class="about-image-two"
              />
            </div>

            <div class="about-content-block">
              <div class="about-title-block">
                <div class="section-sub-text">
                  ${q("aboutEyebrow")}
                </div>
                <h2 class="section-title">
                  ${q("aboutTitle")}
                </h2>
              </div>

              <p class="aboutus-description">
                ${q("aboutDescription")}
              </p>

              <div class="about-two-list-block two">
                <ul role="list" class="about-two-list">

                  <li class="about-two-list-item">
                    <div class="about-two-icon-block" aria-hidden="true">
                      ${Oe}
                    </div>
                    <div class="about-list-two-info-block">
                      <h3 class="about-two-list-title">
                        ${q("aboutFeature1")}
                      </h3>
                    </div>
                  </li>

                  <li class="about-two-list-item last">
                    <div class="about-two-icon-block" aria-hidden="true">
                      ${Oe}
                    </div>
                    <div class="about-list-two-info-block">
                      <h3 class="about-two-list-title">
                        ${q("aboutFeature2")}
                      </h3>
                    </div>
                  </li>

                </ul>
              </div>

              <div class="contact-number-block">
                <div class="contact-number-text">
                  ${q("questions")}
                  <a
                    href="/contact-us"
                    class="about-contact-link"
                  >
                    ${q("contactUs")}
                  </a>
                </div>
              </div>

              <div class="about-button-block">
                ${Ae("/about-us","readMore")}
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  `}function ja(e){return e.map(t=>{const a=`/services/${t.id}`;return`
      <div class="w-dyn-list">
        <div role="list" class="w-dyn-items">
          <div role="listitem" class="w-dyn-item">

            <article class="service-info-main-block dp-home-service-card">

              <a href="${a}" class="service-link w-inline-block">

                <div class="service-info-inner-block">
                  <div class="service-icon-inner-block">

                    <div class="service-icon-block" aria-hidden="true">
                      ${Oe}
                    </div>

                    <h3 class="service-title-one">
                      ${de(t.name)}
                    </h3>

                  </div>
                </div>

                <p
                  class="service-description"
                  style="display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%;max-width:100%;"
                >
                  ${de(_a(t.description))}
                </p>

              </a>

              <div class="service-link-block">
                <a href="${a}" class="link-block w-inline-block">
                  <span class="link-button">
                    ${q("readMore")}
                  </span>
                  <span class="link-border"></span>
                </a>
              </div>

            </article>

          </div>
        </div>
      </div>
    `}).join("")}function Va(){return`
    <section
      class="section service-section dp-home-services"
      id="home-services"
    >
      <div class="w-layout-blockcontainer container-fluid w-container">
        <div class="main-grey-block">
          <div class="w-layout-blockcontainer container w-container">
            <div class="service-main-block">

              <div class="section-title-main-block">
                <div class="section-title-sub-text-block">
                  <div class="section-sub-text">
                    ${q("servicesEyebrow")}
                  </div>
                </div>

                <div class="section-title-grid">
                  <h2 class="section-title">
                    ${q("servicesTitle")}
                  </h2>
                </div>
              </div>

              <div
                class="w-layout-grid service-grid-block"
                data-home-services
              ></div>

              <p
                class="dp-home-preview-note"
                data-home-services-note
              >
                ${de(lt("loadingServices"))}
              </p>

              <div class="dp-home-section-link">
                ${Ae("/service","allServices")}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  `}function Ya(){return`
    <section class="section contact-section dp-home-contact">
      <div class="w-layout-blockcontainer container-fluid w-container">
        <div class="w-layout-grid contact-grid">

          <div class="contact-info-block">
            <img
              src="/asset/img/contact.jpg"
              loading="lazy"
              alt="${q("contactImageAlt")}"
              class="contact-image-one"
            />
          </div>

          <div class="contact-form-block">
            <div class="contact-from-inner-block">

              <div class="contact-title-block-one">
                <div class="section-title-block">
                  <div class="section-sub-text two">
                    ${q("contactEyebrow")}
                  </div>
                  <h2 class="section-title text-white">
                    ${q("contactTitle")}
                  </h2>
                </div>
              </div>

              <div class="contact-from-block w-form">

                <form id="home-contact-form">

                  <div class="contact-main-block">

                    <div class="contact-inner-block">
                      <label class="dp-home-sr-only" for="home-first-name">
                        ${q("firstName")}
                      </label>
                      <input
                        id="home-first-name"
                        class="input-field bg-grey w-input"
                        name="first_name"
                        maxlength="120"
                        required
                        type="text"
                        autocomplete="given-name"
                        placeholder="${q("firstName")}"
                      />
                    </div>

                    <div class="contact-inner-block">
                      <label class="dp-home-sr-only" for="home-last-name">
                        ${q("lastName")}
                      </label>
                      <input
                        id="home-last-name"
                        class="input-field bg-grey w-input"
                        name="last_name"
                        maxlength="120"
                        required
                        type="text"
                        autocomplete="family-name"
                        placeholder="${q("lastName")}"
                      />
                    </div>

                  </div>

                  <div class="contact-main-block">

                    <div class="contact-inner-block">
                      <label class="dp-home-sr-only" for="home-email">
                        ${q("email")}
                      </label>
                      <input
                        id="home-email"
                        class="input-field bg-grey w-input"
                        name="email"
                        maxlength="255"
                        required
                        type="email"
                        autocomplete="email"
                        placeholder="${q("email")}"
                      />
                    </div>

                    <div class="contact-inner-block">
                      <label class="dp-home-sr-only" for="home-phone">
                        ${q("phone")}
                      </label>
                      <input
                        id="home-phone"
                        class="input-field bg-grey w-input"
                        name="phone"
                        maxlength="30"
                        required
                        type="tel"
                        autocomplete="tel"
                        placeholder="${q("phone")}"
                      />
                    </div>

                  </div>

                  <div class="contact-main-block one">

                    <label class="dp-home-sr-only" for="home-message">
                      ${q("message")}
                    </label>

                    <textarea
                      id="home-message"
                      class="text-area w-input"
                      name="message"
                      maxlength="5000"
                      required
                      placeholder="${q("message")}"
                    ></textarea>

                  </div>

                  <div class="contact-button-block">
                    <div class="button-submit">
                      <button
                        type="submit"
                        class="button-primary first dp-home-submit"
                      >
                        <span class="button-primary-text last">
                          ${q("submit")}
                        </span>
                        <span class="button-icon-block">
                          ${Kt}
                        </span>
                      </button>
                    </div>
                  </div>

                  <p
                    class="dp-home-contact-status"
                    data-home-contact-status
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
  `}function za(e){return e.map(t=>{const a=t.slug?`/post/${encodeURIComponent(t.slug)}`:"/blog";return`
      <div class="w-dyn-item" role="listitem">
        <article class="main-blog-block dp-home-blog-card">

          <a href="${a}" class="blog-link-block w-inline-block">

            <div class="blog-image-block">

              ${t.image?`
                    <img
                      src="${de(t.image)}"
                      loading="lazy"
                      alt="${de(t.title)}"
                      class="blog-image"
                    />
                  `:`
                    <span class="dp-home-blog-placeholder" aria-hidden="true">
                      ${Oe}
                    </span>
                  `}

              ${t.date?`
                    
                  `:""}

            </div>

            <h3 class="blog-title">
              ${de(t.title)}
            </h3>

          </a>

          <div class="blog-button-block">
            ${Ae(a,"readMore")}
          </div>

        </article>
      </div>
    `}).join("")}function Ga(){return`
    <section
      class="section blog-section dp-home-blog"
      id="home-blog"
    >
      <div class="w-layout-blockcontainer container w-container">
        <div class="blog-main-block">

          <div class="section-title-main-block">
            <div class="section-title-sub-text-block">
              <div class="section-sub-text">
                ${q("blogEyebrow")}
              </div>
            </div>

            <div class="section-title-grid">
              <h2 class="section-title">
                ${q("blogTitle")}
              </h2>
            </div>
          </div>

          <div class="w-dyn-list">
            <div
              class="w-dyn-items dp-home-blog-grid"
              role="list"
              data-home-blogs
            ></div>
          </div>

          <p
            class="dp-home-preview-note"
            data-home-blogs-note
          >
            ${de(lt("loadingBlogs"))}
          </p>

          <div class="dp-home-section-link">
            ${Ae("/blog","allBlogs")}
          </div>

        </div>
      </div>
    </section>
  `}function Wa(){return`
    <main
      class="dp-home-page"
      data-home-page
      data-no-translate
    >
      ${Ua()}
      ${Ha()}
      ${Va()}
      ${Ya()}
      ${Ga()}
    </main>
  `}function Za(){const e=document.querySelector("[data-home-page]");if(!e)return()=>{};const t=new AbortController,{signal:a}=t,o=e.querySelector("[data-home-services]"),n=e.querySelector("[data-home-services-note]"),i=e.querySelector("[data-home-blogs]"),r=e.querySelector("[data-home-blogs-note]"),l=e.querySelector("#home-contact-form"),b=e.querySelector("[data-home-contact-status]"),u=l.querySelector('[type="submit"]'),d=()=>!a.aborted&&e.isConnected;function c(m,f){m.textContent=lt(f),m.hidden=!1}async function h(){o.replaceChildren(),c(n,"loadingServices");try{const m=await Re.list(ne(),a);if(!d())return;const f=mt(m,"services").map(Ba).filter(Boolean).slice(0,6);o.innerHTML=ja(f),f.length?n.hidden=!0:c(n,"noServices")}catch(m){if(!d())return;c(n,"servicesError"),console.error("Home services API:",m)}}async function s(){i.replaceChildren(),c(r,"loadingBlogs");try{const m=await Ne.list(ne(),a);if(!d())return;const f=mt(m,"blogs").map(Fa).filter(Boolean).slice(0,3);i.innerHTML=za(f),f.length?r.hidden=!0:c(r,"noBlogs")}catch(m){if(!d())return;c(r,"blogsError"),console.error("Home blogs API:",m)}}let g=!1;return l.addEventListener("submit",async m=>{if(m.preventDefault(),g||!d())return;if(b.hidden=!1,!l.checkValidity()){b.dataset.state="error",b.textContent=p("home.formRequired"),l.reportValidity();return}const f=new FormData(l),v={first_name:X(f.get("first_name")),last_name:X(f.get("last_name")),email:X(f.get("email")),phone:X(f.get("phone")),message:X(f.get("message"))};if(Object.values(v).some(y=>!y)){b.dataset.state="error",b.textContent=p("home.formRequired");return}g=!0,u.disabled=!0,b.dataset.state="pending",b.textContent=p("home.formSending");try{if(await Zt.send(v,a),!d())return;l.reset(),b.dataset.state="success",b.textContent=p("home.formSent")}catch(y){if(!d())return;console.error("Home message API:",y),b.dataset.state="error",b.textContent=(y==null?void 0:y.status)===422?p("home.formValidationError"):(y==null?void 0:y.status)===408?p("home.formTimeout"):p("home.formError")}finally{g=!1,d()&&(u.disabled=!1)}},{signal:a}),h(),s(),()=>t.abort()}const Ka=[{slug:"dr-fiona-park",nameKey:"about.doctor1Name",roleKey:"about.doctor1Role",focusKey:"teamDetails.focus1",image:"https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/679c747877e9c706de65ead8_team%20image%20%285%29.png"},{slug:"dr-john-martin",nameKey:"about.doctor2Name",roleKey:"about.doctor2Role",focusKey:"teamDetails.focus2",image:"https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/679c746ed25099b1cddcf11a_team%20image%20%284%29.png"},{slug:"dr-archie-white",nameKey:"about.doctor3Name",roleKey:"about.doctor3Role",focusKey:"teamDetails.focus3",image:"https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/679c745448e62cb3588e5bce_team%20image%206.png"},{slug:"dr-maria-angel",nameKey:"about.doctor4Name",roleKey:"about.doctor4Role",focusKey:"teamDetails.focus4",image:"https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/679c7461bd9d9a04eda1761c_team%20image%20%281%29.png"}];function Jt(){return Ka.map(e=>({...e,name:p(e.nameKey),role:p(e.roleKey),focus:p(e.focusKey)}))}function Qa(e){return Jt().find(t=>t.slug===e)||null}function ea(){return G()==="fa"?"fa":"en"}function ae(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function R(e){return ae(p(`about.${e}`))}function et(e){return typeof e=="string"?e.trim():""}const ct=`
  <svg viewBox="0 0 24 24"
       width="20" height="20"
       fill="none"
       stroke="currentColor"
       stroke-width="1.8"
       stroke-linecap="round"
       stroke-linejoin="round"
       aria-hidden="true">
    <path d="M5 12h14"/>
    <path d="m13 6 6 6-6 6"/>
  </svg>
`,Xa=`
  <svg viewBox="0 0 64 64"
       width="56" height="56"
       fill="none"
       stroke="currentColor"
       stroke-width="2"
       stroke-linecap="round"
       stroke-linejoin="round"
       aria-hidden="true">
    <path d="M18 8C10 8 5 14 5 24c0 9 4 16 7 24
      2 5 5 8 9 7 4-1 3-9 5-15
      1-4 3-6 6-6s5 2 6 6
      c2 6 1 14 5 15 4 1 7-2 9-7
      3-8 7-15 7-24 0-10-5-16-13-16
      -6 0-9 4-14 4s-8-4-14-4Z"/>
  </svg>
`;function ta(){const e="/api".replace(/\/+$/,"");return/\/api\/v1$/i.test(e)?e:/\/api$/i.test(e)?`${e}/v1`:/\/v1$/i.test(e)?e:`${e}/api/v1`}function Ja(){return`${ta()}/services?lang=${ea()}`}function eo(e){const t=et(e);if(!t)return"";try{const a=new URL(ta(),window.location.origin).origin;let o=t;/^https?:\/\//i.test(t)||(t.startsWith("/")?o=t:/^(storage|uploads)\//i.test(t)?o=`/${t}`:o=`/storage/${t}`);const n=new URL(o,a);return["http:","https:"].includes(n.protocol)?n.href:""}catch{return""}}function to(e){var a;const t=ea();return Array.isArray(e.translations)?e.translations.find(o=>o.locale===t||o.lang===t)||{}:(a=e.translations)!=null&&a[t]?e.translations[t]:e.translation&&(!e.translation.locale||e.translation.locale===t)?e.translation:{}}function ao(e){if(!e||typeof e!="object")return null;const t=Number(e.id);if(!Number.isSafeInteger(t)||t<=0||e.is_active===!1||e.is_active===0||e.is_active==="0")return null;const a=to(e),o=et(a.name||a.title||e.name||e.title);return o?{id:t,name:o,description:et(a.description||e.description),image:eo(e.image_1_url||e.image_url||e.image_1||e.image||e.cover_image||""),isDemo:!1}:null}const oo=["https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/67739cb05026dbf725d4e6e6_service%20image%20%281%29.webp","https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/6773a8df753ab7c72f9cc04f_service%20image%20%289%29.webp","https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/6773a948a802dec038145370_service%20image%20%282%29.webp","https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/6773a95f18d02159b11b502c_service%20image%20%284%29.webp","https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/6773a9540dd9d020f977e7e6_service%20image%20%283%29.webp"];function no(){return oo.map((e,t)=>{const a=t+1;return{id:null,name:p(`about.demoTreatment${a}Title`),description:p(`about.demoTreatment${a}Description`),image:e,isDemo:!0}})}function io(){return`
    <section class="section breadcrumb-section">
      <div class="w-layout-blockcontainer container-fluid w-container">
        <div class="breadcrumb-block">
          <div class="w-layout-blockcontainer container w-container">

            <div class="breadcrumb-main-title-block">

              <div class="breadcrumb-title-block">
                <h1 class="breadcrumb-title">
                  ${R("breadcrumb")}
                </h1>
              </div>

              <div class="breadcrumb-subtext-block">

                <a href="/" class="breadcrumb-subtext">
                  ${R("home")}
                </a>

                <span class="breadcrumb-subtext">-</span>

                <span class="breadcrumb-subtext"
                      aria-current="page">
                  ${R("breadcrumb")}
                </span>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  `}function ro(){return`
    <section class="section about-one-section">

      <div class="w-layout-blockcontainer container w-container">

        <div class="about-one-main-block">
          <div class="w-layout-grid about-one-grid">

            <div class="about-one-image-block">
              <img
                src="/asset/img/IMG_0943.jpg"
                alt="${R("imageAlt")}"
                class="about-one-image"
                loading="lazy"
              />
            </div>

            <div class="about-two-content-block">

              <div class="about-two-title-block">

                <div class="section-sub-text">
                  ${R("introEyebrow")}
                </div>

                <h2 class="section-title">
                  ${R("introTitle")}
                </h2>

              </div>

              <p class="about-two-description">
                ${R("introDescription")}
              </p>

              <div class="about-two-list-block">

                <ul role="list" class="about-two-list">

                  <li class="about-two-list-item">

                    <div class="about-two-icon-block">
                      <span class="dp-about-feature-number">
                        01
                      </span>
                    </div>

                    <div class="about-list-two-info-block">

                      <h3 class="about-two-list-title">
                        ${R("feature1Title")}
                      </h3>

                      <p class="about-two-list-description">
                        ${R("feature1Description")}
                      </p>

                    </div>

                  </li>

                  <li class="about-two-list-item last">

                    <div class="about-two-icon-block">
                      <span class="dp-about-feature-number">
                        02
                      </span>
                    </div>

                    <div class="about-list-two-info-block">

                      <h3 class="about-two-list-title">
                        ${R("feature2Title")}
                      </h3>

                      <p class="about-two-list-description">
                        ${R("feature2Description")}
                      </p>

                    </div>

                  </li>

                </ul>

              </div>

              <div class="about-two-button-block">

                <a href="/contact-us"
                   class="button-primary w-inline-block">

                  <span class="button-primary-text">
                    ${R("contactButton")}
                  </span>

                  <span class="button-icon-block">
                    ${ct}
                  </span>

                </a>

              </div>

            </div>

          </div>
        </div>

      </div>

    </section>
  `}function so(){return`
    <section class="section treatment-section two dp-about-treatment">

      <div class="w-layout-blockcontainer container-fluid w-container">
        <div class="main-grey-block two">

          <div class="w-layout-blockcontainer container w-container">
            <div class="main-treatment-block">

              <div class="treatment-title-block">

                <div class="section-sub-text">
                  ${R("treatmentEyebrow")}
                </div>

                <h2 class="section-title">
                  ${R("treatmentTitle")}
                </h2>

                <p class="dp-about-treatment-description">
                  ${R("treatmentDescription")}
                </p>

              </div>

              <div class="treatment-inner-block">

                <p
                  class="dp-about-services-status"
                  data-about-services-status
                  role="status"
                  aria-live="polite"
                >
                  ${R("servicesDemoNote")}
                </p>

                <div
                  class="tretment-tabs w-tabs dp-about-tabs"
                  data-about-services
                >

                  <div
                    class="tretment-menu w-tab-menu"
                    data-about-service-tabs
                    role="tablist"
                    aria-label="${R("treatmentTitle")}"
                  ></div>

                  <div
                    class="tretment-content w-tab-content"
                    data-about-service-panes
                  ></div>

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  `}function lo(e){const t=e.map((o,n)=>`
    <button
      type="button"
      id="dp-about-tab-${n}"
      data-about-tab="${n}"
      role="tab"
      aria-controls="dp-about-pane-${n}"
      aria-selected="${n===0}"
      tabindex="${n===0?"0":"-1"}"
      class="tretment-tab-link-main w-inline-block w-tab-link
             ${n===0?"w--current":""}"
    >

      <div class="tretment-link-main-block">
        <div class="tretment-inner-block">

          <div class="tretment-tab-link bg-white">
            <span>${ae(o.name)}</span>
          </div>

          <div class="tretment-round-block"></div>

        </div>
      </div>

    </button>
  `).join(""),a=e.map((o,n)=>{const i=o.isDemo?"/service":`/services/${o.id}`;return`
      <div
        id="dp-about-pane-${n}"
        data-about-pane="${n}"
        role="tabpanel"
        aria-labelledby="dp-about-tab-${n}"
        class="tretment-tab-pane w-tab-pane
               ${n===0?"w--tab-active":""}"
        ${n===0?"":"hidden"}
      >

        <div class="dp-about-service-card">

          ${o.image?`
                <img
                  src="${ae(o.image)}"
                  alt="${ae(o.name)}"
                  class="tretment-image"
                  loading="lazy"
                />
              `:`
                <div class="dp-about-no-image">
                  ${Xa}
                </div>
              `}

          <div class="dp-about-service-info">

            <h3>${ae(o.name)}</h3>

            ${o.description?`<p>${ae(o.description)}</p>`:""}

            <a
              href="${i}"
              class="dp-about-service-link"
            >
              ${R("serviceDetails")}
              ${ct}
            </a>

          </div>

        </div>

      </div>
    `}).join("");return{buttons:t,panes:a}}function co(){const e=Jt();return`
    <section
      class="section team-two-section dp-about-team-section"
      id="about-doctors"
    >

      <div class="w-layout-blockcontainer container-fluid w-container">
        <div class="main-grey-block">

          <div class="w-layout-blockcontainer container w-container">

            <div class="dp-about-doctors-header">

              <div class="dp-about-doctors-heading">

                <div class="section-sub-text">
                  ${R("teamEyebrow")}
                </div>

                <h2 class="section-title">
                  ${R("teamTitle")}
                </h2>

                <p class="dp-about-team-description">
                  ${R("teamDescription")}
                </p>

              </div>

              <a
                href="/contact-us"
                class="button-primary w-inline-block"
              >

                <span class="button-primary-text">
                  ${R("teamButton")}
                </span>

                <span class="button-icon-block">
                  ${ct}
                </span>

              </a>

            </div>

            <div class="dp-about-doctors-grid">

              ${e.map((t,a)=>`
                <a
                  href="/team/${encodeURIComponent(t.slug)}"
                  class="dp-about-doctor-card"
                  aria-label="${ae(t.name)}"
                >

                  <div class="dp-about-doctor-image-wrap">

                    <img
                      src="${ae(t.image)}"
                      alt="${ae(t.name)}"
                      class="dp-about-doctor-image"
                      loading="lazy"
                    />

                    <span class="dp-about-doctor-index">
                      ${String(a+1).padStart(2,"0")}
                    </span>

                  </div>

                  <div class="dp-about-doctor-info">

                    <span class="dp-about-doctor-role">
                      ${ae(t.role)}
                    </span>

                    <h3 class="dp-about-doctor-name">
                      ${ae(t.name)}
                    </h3>

                  </div>

                </a>
              `).join("")}

            </div>

            <p class="dp-about-doctors-note">
              ${R("teamDemoNote")}
            </p>

          </div>

        </div>
      </div>

    </section>
  `}function uo(){return`
    <section class="section faq-section dp-about-faq-section">

      <div class="w-layout-blockcontainer container-fluid w-container">
        <div class="main-grey-block">

          <div class="w-layout-blockcontainer container w-container">
            <div class="faq-main-block">

              <div class="section-title-main-block">

                <div class="section-title-sub-text-block">
                  <div class="section-sub-text">
                    ${R("faqEyebrow")}
                  </div>
                </div>

                <div class="section-title-grid">
                  <h2 class="section-title">
                    ${R("faqTitle")}
                  </h2>
                </div>

              </div>

              <div class="faq-content-block">
                <div class="faq-tabs w-tabs">
                  <div class="faq-tab-menu w-tab-menu">

                    ${[1,2,3,4,5].map((e,t)=>`
                      <div class="dp-about-faq-item">

                        <h3 class="dp-about-faq-heading">

                          <button
                            type="button"
                            class="faq-tab-link dp-about-faq-button"
                            data-about-faq="${e}"
                            aria-expanded="${t===0}"
                            aria-controls="dp-about-answer-${e}"
                          >

                            <span class="faq-question-text">
                              ${R(`faq${e}Question`)}
                            </span>

                            <span
                              class="dp-about-faq-symbol"
                              aria-hidden="true"
                            >
                              ${t===0?"−":"+"}
                            </span>

                          </button>

                        </h3>

                        <div
                          id="dp-about-answer-${e}"
                          class="ans-box dp-about-faq-answer"
                          ${t===0?"":"hidden"}
                        >

                          <p class="ans-text">
                            ${R(`faq${e}Answer`)}
                          </p>

                        </div>

                      </div>
                    `).join("")}

                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  `}function po(){return`
    <main class="dp-about-page"
          data-about-page
          data-no-translate>

      ${io()}
      ${ro()}
      ${so()}
      ${co()}
      ${uo()}

    </main>
  `}function ho(){const e=document.querySelector("[data-about-page]");if(!e)return()=>{};const t=new AbortController,{signal:a}=t,o=e.querySelector("[data-about-services-status]"),n=e.querySelector("[data-about-services]"),i=e.querySelector("[data-about-service-tabs]"),r=e.querySelector("[data-about-service-panes]");let l=0;function b(c){const h=lo(c);i.innerHTML=h.buttons,r.innerHTML=h.panes,l=c.length,n.hidden=!1,u(0)}function u(c,h=!1){if(!Number.isInteger(c)||c<0||c>=l)return;const s=[...i.querySelectorAll("[data-about-tab]")],g=[...r.querySelectorAll("[data-about-pane]")];s.forEach((m,f)=>{const v=f===c;m.classList.toggle("w--current",v),m.setAttribute("aria-selected",String(v)),m.tabIndex=v?0:-1,v&&h&&m.focus()}),g.forEach((m,f)=>{const v=f===c;m.hidden=!v,m.classList.toggle("w--tab-active",v)})}async function d(){try{const c=await fetch(Ja(),{method:"GET",headers:{Accept:"application/json"},credentials:"omit",cache:"no-store",signal:a});if(!c.ok)throw new Error(`HTTP ${c.status}`);const h=await c.json();if((h==null?void 0:h.success)===!1||(h==null?void 0:h.status)===!1)throw new Error((h==null?void 0:h.message)||"API error");if(a.aborted||!e.isConnected)return;const s=h==null?void 0:h.data,m=(Array.isArray(s)?s:Array.isArray(s==null?void 0:s.data)?s.data:Array.isArray(s==null?void 0:s.services)?s.services:Array.isArray(s==null?void 0:s.items)?s.items:[]).map(ao).filter(Boolean).slice(0,5);m.length>0&&(b(m),o.hidden=!0)}catch(c){if(a.aborted)return;console.info("About: showing demo treatments",c)}}return b(no()),e.addEventListener("click",c=>{var m;const h=c.target instanceof Element?c.target:(m=c.target)==null?void 0:m.parentElement;if(!h)return;const s=h.closest("[data-about-tab]");if(s){u(Number(s.dataset.aboutTab));return}const g=h.closest("[data-about-faq]");if(g){const f=g.getAttribute("aria-expanded")==="true";e.querySelectorAll("[data-about-faq]").forEach(v=>{const y=v===g&&!f;v.setAttribute("aria-expanded",String(y));const w=e.querySelector(`#dp-about-answer-${v.dataset.aboutFaq}`);w&&(w.hidden=!y);const $=v.querySelector(".dp-about-faq-symbol");$&&($.textContent=y?"−":"+")})}},{signal:a}),i.addEventListener("keydown",c=>{if(!l)return;const h=c.target instanceof Element?c.target.closest("[data-about-tab]"):null;if(!h)return;const s=Number(h.dataset.aboutTab);let g=s;if(c.key==="ArrowRight"||c.key==="ArrowDown")g=(s+1)%l;else if(c.key==="ArrowLeft"||c.key==="ArrowUp")g=(s-1+l)%l;else if(c.key==="Home")g=0;else if(c.key==="End")g=l-1;else return;c.preventDefault(),u(g,!0)},{signal:a}),d(),()=>t.abort()}function Ce(){const e=(document.documentElement.lang||"").toLowerCase();return e==="fa"||e.startsWith("fa-")?"fa":e==="en"||e.startsWith("en-")?"en":document.documentElement.dir==="rtl"?"fa":"en"}function ce(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function go(e){if(typeof e!="string")return"";const t=e.trim();if(!t||/[<>"\u0000-\u001F]/.test(t))return"";try{const a=new URL(t,window.location.origin);return["http:","https:"].includes(a.protocol)?a.href:""}catch{return""}}function mo(e,t){if(!e)return{iso:"",label:""};const a=String(e),o=/^\d{4}-\d{2}-\d{2}$/.test(a)?new Date(`${a}T12:00:00Z`):new Date(a);return Number.isNaN(o.getTime())?{iso:"",label:""}:{iso:o.toISOString().slice(0,10),label:new Intl.DateTimeFormat(t==="fa"?"fa-IR":"en-US",{year:"numeric",month:"long",day:"numeric",timeZone:"UTC"}).format(o)}}function bo(e){var a;const t=e==null?void 0:e.data;return Array.isArray(t)?t:Array.isArray(t==null?void 0:t.data)?t.data:Array.isArray(t==null?void 0:t.blogs)?t.blogs:Array.isArray((a=t==null?void 0:t.blogs)==null?void 0:a.data)?t.blogs.data:null}function fo(e,t){if(!e||typeof e!="object")return null;const a=String(e.title_1??e.title??"").trim();if(!a)return null;const o=go(e.image_1??e.image_url??e.image??""),n=String(e.slug??e.blog_slug??"").trim(),i=mo(e.date??e.published_at??e.created_at,t);return{id:e.id??null,slug:n,title:a,image:o,dateISO:i.iso,date:i.label}}function vo(e){const t=ce(e.title),a=e.slug||(e.id!=null?String(e.id):""),o=a?`/post/${encodeURIComponent(a)}`:"",n=e.image?`
      <img
        src="${ce(e.image)}"
        alt="${t}"
        loading="lazy"
        decoding="async"
        class="blog-one-image"
      />
    `:`
      <div class="dp-blog-no-image">
        <span>✦</span>
      </div>
    `,i=e.date?`
      <div class="blog-date-block-one">
        <time
          datetime="${ce(e.dateISO)}"
          class="blog-month-text one"
        >
          ${ce(e.date)}
        </time>
      </div>
    `:"",r=`
    <div class="blog-one-image-block">
      ${n}
    </div>

    ${i}

    <div class="blog-title-block">
      <h2 class="blog-name">${t}</h2>
    </div>
  `;return`
    <div role="listitem" class="w-dyn-item">
      ${o?`
            <a
              href="${ce(o)}"
              class="blog-one-link w-inline-block"
              aria-label="${ce(p("blog.readArticle"))}: ${t}"
            >
              ${r}
            </a>
          `:`
            <div class="blog-one-link w-inline-block">
              ${r}
            </div>
          `}
    </div>
  `}function yo(){return`
    <div
      class="dentistry-blog-page"
      data-blog-page
    >

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
                    ${p("blog.title")}
                  </h1>
                </div>

                <div class="breadcrumb-subtext-block">

                  <a
                    class="breadcrumb-subtext"
                    href="/"
                  >
                    ${p("blog.home")}
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
                    ${p("blog.title")}
                  </span>

                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- BLOG CONTENT -->

      <section
        class="section blog-section-one"
        aria-labelledby="blog-section-heading"
      >
        <div
          class="w-layout-blockcontainer container w-container"
        >
          <div class="blog-one-main-block">

            <!-- HEADING -->

            <div class="section-title-main-block">

              <div class="section-title-sub-text-block">
                <div class="section-sub-text">
                  ${p("blog.latest")}
                </div>
              </div>

              <div class="section-title-grid">
                <h2
                  id="blog-section-heading"
                  class="section-title"
                >
                  ${p("blog.heading")}
                </h2>
              </div>

            </div>

            <!-- LOADING / ERROR -->

            <div
              class="dp-blog-status"
              data-blog-status
              role="status"
              aria-live="polite"
            >
              ${p("blog.loading")}
            </div>

            <!-- API POSTS -->

            <div class="w-dyn-list">
              <div
                role="list"
                class="blog-one-list w-dyn-items"
                data-blog-list
              ></div>
            </div>

          </div>
        </div>
      </section>

    </div>
  `}function wo(){const e=document.querySelector("[data-blog-page]");if(!e)return()=>{};const t=e.querySelector("[data-blog-list]"),a=e.querySelector("[data-blog-status]"),o=new AbortController;let n=null,i=Ce();function r(c){a.hidden=!1,a.textContent=c}function l(){a.hidden=!0,a.textContent=""}function b(){a.hidden=!1,a.innerHTML=`
      <p>${ce(p("blog.error"))}</p>

      <button
        type="button"
        class="dp-blog-retry"
        data-blog-retry
      >
        ${ce(p("blog.retry"))}
      </button>
    `}async function u(){n==null||n.abort(),n=new AbortController;const c=n.signal,h=Ce();i=h,r(p("blog.loading")),t.innerHTML="";try{const s=await Ne.list(h,c);if(c.aborted||o.signal.aborted||!e.isConnected||Ce()!==h)return;const g=bo(s);if(!g)throw new Error("INVALID_BLOG_RESPONSE");const m=g.map(f=>fo(f,h)).filter(Boolean);if(g.length&&!m.length){console.warn("Blog items have no usable title_1:",g),b();return}if(m.length===0){r(p("blog.empty"));return}t.innerHTML=m.map(vo).join(""),l()}catch(s){if(c.aborted||o.signal.aborted)return;console.error("Failed to load blog posts:",s),b()}}e.addEventListener("click",c=>{c.target.closest("[data-blog-retry]")&&(c.preventDefault(),u())},{signal:o.signal});const d=new MutationObserver(()=>{const c=Ce();c!==i&&(i=c,u())});return d.observe(document.documentElement,{attributes:!0,attributeFilter:["lang","dir"]}),u(),()=>{o.abort(),n==null||n.abort(),d.disconnect()}}function $o(e=document){if(!e)return()=>{};const t=new AbortController,{signal:a}=t;return e.querySelectorAll("form").forEach(o=>{o.addEventListener("submit",n=>{n.preventDefault();const i=o.closest(".w-form"),r=i==null?void 0:i.querySelector(".w-form-done");r&&(r.style.display="none");let l=(i==null?void 0:i.querySelector(".dentistry-demo-message"))||o.querySelector(".dentistry-demo-message");l||(l=document.createElement("p"),l.className="dentistry-demo-message",l.setAttribute("role","status"),o.insertAdjacentElement("afterend",l)),l.textContent="This form is not connected to the server yet. No information was submitted.",l.style.display="block"},{signal:a})}),()=>t.abort()}function ko(e=document){if(!e)return()=>{};const t=new AbortController;return e.querySelectorAll(".w-tabs").forEach(a=>{var l;const o=[...a.querySelectorAll(".w-tab-menu .w-tab-link[data-w-tab]")],n=[...a.querySelectorAll(".w-tab-content .w-tab-pane[data-w-tab]")];if(!o.length)return;const i=a.querySelector(".w-tab-menu");i==null||i.setAttribute("role","tablist");function r(b){a.dataset.current=b,o.forEach(u=>{const d=u.dataset.wTab===b;u.classList.toggle("w--current",d),u.setAttribute("role","tab"),u.setAttribute("aria-selected",String(d)),u.setAttribute("aria-expanded",String(d)),u.tabIndex=d?0:-1;const c=u.querySelector(".tretment-tab-content-block");c&&(c.style.display=d?"block":"none");const h=u.querySelector(".ans-box");h&&(h.style.overflow="hidden",h.style.transition="height 300ms ease",h.style.height=d?`${h.scrollHeight}px`:"0px",h.setAttribute("aria-hidden",String(!d)));const s=u.querySelector(".plus");s&&(s.style.transform=d?"rotate(90deg)":"rotate(0deg)")}),n.forEach(u=>{const d=u.dataset.wTab===b;u.classList.toggle("w--tab-active",d),u.hidden=!d})}o.forEach((b,u)=>{b.addEventListener("click",d=>{d.preventDefault(),r(b.dataset.wTab)},{signal:t.signal}),b.addEventListener("keydown",d=>{const c=["ArrowRight","ArrowDown"].includes(d.key)?1:["ArrowLeft","ArrowUp"].includes(d.key)?-1:0;if(!c)return;d.preventDefault();const h=o[(u+c+o.length)%o.length];r(h.dataset.wTab),h.focus()},{signal:t.signal})}),r(a.dataset.current||((l=o.find(b=>b.classList.contains("w--current")))==null?void 0:l.dataset.wTab)||o[0].dataset.wTab)}),()=>t.abort()}function Eo(e=document){if(!e)return()=>{};const t=new AbortController;let a=null;return e.querySelectorAll("a.w-lightbox").forEach(o=>{o.addEventListener("click",n=>{var u,d,c,h,s,g;n.preventDefault();const i=(u=o.querySelector('script.w-json[type="application/json"]'))==null?void 0:u.textContent;let r;try{r=(c=(d=JSON.parse(i||"{}").items)==null?void 0:d[0])==null?void 0:c.url}catch{}if(r||(r=((h=o.querySelector("img"))==null?void 0:h.currentSrc)||((s=o.querySelector("img"))==null?void 0:s.src)),!r)return;a==null||a.remove(),a=document.createElement("dialog"),a.className="dentistry-lightbox";const l=document.createElement("button");l.type="button",l.className="dentistry-lightbox-close",l.textContent="×",l.setAttribute("aria-label","Close image");const b=document.createElement("img");b.src=r,b.alt=((g=o.querySelector("img"))==null?void 0:g.alt)||"Gallery image",a.append(l,b),document.body.append(a),l.addEventListener("click",()=>a==null?void 0:a.close(),{once:!0}),a.addEventListener("click",m=>{m.target===a&&a.close()}),a.addEventListener("close",()=>{a==null||a.remove(),a=null},{once:!0}),a.showModal()},{signal:t.signal})}),()=>{t.abort(),a==null||a.remove()}}function Fe(e){const t=ko(e),a=$o(e),o=Eo(e);return()=>{t(),a(),o()}}const So={fa:{home:"خانه",blog:"وبلاگ",details:"جزئیات مقاله",otherBlogs:"سایر مقالات",loading:"در حال دریافت مقاله...",loadingBlogs:"در حال دریافت سایر مقالات...",notFound:"مقاله موردنظر پیدا نشد.",error:"دریافت مقاله با مشکل مواجه شد.",otherEmpty:"مقاله دیگری برای نمایش وجود ندارد.",otherError:"دریافت سایر مقالات با مشکل مواجه شد.",retry:"تلاش مجدد",gallery:"تصاویر مقاله"},en:{home:"Home",blog:"Dental Blog",details:"Blog Details",otherBlogs:"Other Blogs",loading:"Loading article...",loadingBlogs:"Loading other articles...",notFound:"Article not found.",error:"Unable to load this article.",otherEmpty:"No other articles available.",otherError:"Unable to load other articles.",retry:"Try Again",gallery:"Article Images"}};function he(){return G()==="fa"?"fa":"en"}function j(e,t=he()){const a=`blog.details.${e}`,o=p(a);return o!==a?o:So[t][e]}function N(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function To(e){return typeof e=="string"?e.trim():""}function pe(...e){for(const t of e){const a=To(t);if(a)return a}return""}function Ao(){const t=window.location.pathname.replace(/\/+$/,"").match(/^\/post\/([^/]+)$/);if(!t)return"";try{return decodeURIComponent(t[1])}catch{return t[1]}}function bt(e){if(e&&typeof e=="object"&&(e=e.image_url??e.url??e.src??e.path??""),typeof e!="string")return"";const t=e.trim();if(!t||/[<>"'\u0000-\u001F]/.test(t))return"";const a="/";try{const o=new URL(a,window.location.origin).origin,n=/^(storage|uploads|images)\//i.test(t)?`/${t}`:t,i=new URL(n,o);return["http:","https:"].includes(i.protocol)?i.href:""}catch{return""}}function Co(e,t){const a=e==null?void 0:e.translations;return Array.isArray(a)?a.find(o=>o.locale===t||o.lang===t)||{}:a&&typeof a=="object"?a[t]||{}:e!=null&&e.translation&&(!e.translation.locale||e.translation.locale===t)?e.translation:{}}function xo(e,t){if(!e)return{iso:"",label:""};const a=String(e),o=/^\d{4}-\d{2}-\d{2}$/.test(a)?new Date(`${a}T12:00:00Z`):new Date(a);return Number.isNaN(o.getTime())?{iso:"",label:""}:{iso:o.toISOString().slice(0,10),label:new Intl.DateTimeFormat(t==="fa"?"fa-IR":"en-US",{year:"numeric",month:"long",day:"numeric",timeZone:"UTC"}).format(o)}}function aa(e){if((e==null?void 0:e.status)===!1||(e==null?void 0:e.success)===!1){const t=new Error((e==null?void 0:e.message)||"BLOG_API_ERROR");throw t.status=(e==null?void 0:e.statusCode)||500,t}}function Po(e){var a,o;const t=e==null?void 0:e.data;return[t,t==null?void 0:t.data,t==null?void 0:t.blogs,(a=t==null?void 0:t.blogs)==null?void 0:a.data,t==null?void 0:t.posts,(o=t==null?void 0:t.posts)==null?void 0:o.data,t==null?void 0:t.items].find(Array.isArray)||[]}function Lo(e,t,a){aa(e);const o=e==null?void 0:e.data,n=(o==null?void 0:o.blog)??(o==null?void 0:o.post)??(o==null?void 0:o.article)??(o==null?void 0:o.data)??o;if(Array.isArray(n))return n.find(r=>(String((r==null?void 0:r.slug)??(r==null?void 0:r.blog_slug))===t||String(r==null?void 0:r.id)===t)&&(!r.locale||r.locale===a))||null;if(!n||typeof n!="object")return null;const i=n.slug??n.blog_slug;return i!=null&&String(i)!==t&&String(n.id)!==t||n.locale&&n.locale!==a?null:n}function ft(e,t){if(!e||typeof e!="object")return null;const a=Co(e,t),o=pe(a.title_1,e.title_1,a.title,e.title);if(!o)return null;const n=bt(e.image_1_url??e.image_1??e.image_url??e.image??a.image_1),i=[e.image_2_url??e.image_2,e.image_3_url??e.image_3,e.image_4_url??e.image_4,...Array.isArray(e.gallery)?e.gallery:[],...Array.isArray(e.images)?e.images:[]],r=[...new Set(i.map(bt).filter(b=>b&&b!==n))],l=xo(e.date??e.published_at??e.created_at,t);return{id:e.id??null,slug:pe(e.slug,e.blog_slug,a.slug),title1:o,description1:pe(a.description_1,e.description_1,a.description,e.description,e.content),title2:pe(a.title_2,e.title_2),description2:pe(a.description_2,e.description_2),title3:pe(a.title_3,e.title_3),description3:pe(a.description_3,e.description_3),image1:n,gallery:r,date:l}}function vt(e){if(!e)return"";if(!/<[a-z][\s\S]*?>/i.test(e))return e.split(/\n\s*\n/).filter(Boolean).map(i=>`
        <p>
          ${N(i).replace(/\n/g,"<br>")}
        </p>
      `).join("");const t=new Set(["p","br","strong","b","em","i","u","s","h2","h3","h4","h5","h6","ul","ol","li","blockquote","a","div","span","hr"]),a=new Set(["script","style","iframe","object","embed","svg","math","form","input","button","template"]),o=document.createElement("template");o.innerHTML=e;function n(i){if(i.nodeType===Node.TEXT_NODE)return N(i.textContent);if(i.nodeType!==Node.ELEMENT_NODE)return"";const r=i.tagName.toLowerCase();if(a.has(r))return"";const l=Array.from(i.childNodes).map(n).join("");if(!t.has(r))return l;if(r==="br"||r==="hr")return`<${r}>`;if(r==="a"){const b=i.getAttribute("href")||"";try{const u=new URL(b,window.location.origin);if(["http:","https:","mailto:","tel:"].includes(u.protocol))return`
            <a
              href="${N(u.href)}"
              rel="noopener noreferrer"
            >
              ${l}
            </a>
          `}catch{}return l}return`<${r}>${l}</${r}>`}return Array.from(o.content.childNodes).map(n).join("")}function Do(e,t){const a=e.image1?`
      <img
        class="blog-single-main-image"
        src="${N(e.image1)}"
        alt="${N(e.title1)}"
        loading="eager"
        decoding="async"
      />
    `:"",o=e.date.label?`
      <div class="blog-one-meta">

        <div class="blog-one-data-block">
          <time
            class="blog-date-one"
            datetime="${N(e.date.iso)}"
          >
            ${N(e.date.label)}
          </time>
        </div>

      </div>
    `:"",n=e.gallery.length?`
      <div
        class="blog-extra-image-list"
        aria-label="${N(j("gallery",t))}"
      >

        ${e.gallery.map(r=>`
          <div class="w-dyn-list">
            <div class="w-dyn-items" role="list">

              <div class="w-dyn-item" role="listitem">

                <a
                  href="${N(r)}"
                  class="blog-image-lightbox w-inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >

                  <img
                    class="blog-image-extra"
                    src="${N(r)}"
                    alt="${N(e.title1)}"
                    loading="lazy"
                  />

                </a>

              </div>

            </div>
          </div>
        `).join("")}

      </div>
    `:"";function i(r,l){return!r&&!l?"":`
      <div class="w-richtext dp-blog-more-content">

        ${r?`<h3>${N(r)}</h3>`:""}

        ${vt(l)}

      </div>
    `}return`
    <div class="w-dyn-list">

      <div class="w-dyn-items" role="list">

        <div class="w-dyn-item" role="listitem">

          <div class="blog-single-info-inner-block">

            ${a}

            ${o}

            <h1 class="blog-single-title">
              ${N(e.title1)}
            </h1>

            ${e.description1?`
                  <div class="blog-richtext w-richtext">
                    ${vt(e.description1)}
                  </div>
                `:""}

          </div>

        </div>

      </div>

    </div>

    ${n}

    ${i(e.title2,e.description2)}

    ${i(e.title3,e.description3)}
  `}function Io(e,t){return`
    <div class="w-dyn-list">

      <div
        class="w-dyn-items dp-other-blogs-list"
        role="list"
      >

        ${e.map(a=>{const o=`
            ${a.image1?`
                  <img
                    class="blog-resent-image"
                    src="${N(a.image1)}"
                    alt="${N(a.title1)}"
                    loading="lazy"
                    decoding="async"
                  />
                `:`
                  <div
                    class="dp-other-blog-placeholder"
                    aria-hidden="true"
                  >
                    ✦
                  </div>
                `}

            <div class="recent-info-block">

              <h3 class="recent-heading">
                ${N(a.title1)}
              </h3>

              ${a.date.label?`
                    <div class="recent-date-block">
                      <time
                        class="recent-date"
                        datetime="${N(a.date.iso)}"
                      >
                        ${N(a.date.label)}
                      </time>
                    </div>
                  `:""}

            </div>
          `;return`
            <div
              class="w-dyn-item"
              role="listitem"
            >

              ${a.slug?`
                    <a
                      href="/post/${encodeURIComponent(a.slug)}"
                      class="recent-link w-inline-block"
                    >
                      ${o}
                    </a>
                  `:`
                    <div class="recent-link">
                      ${o}
                    </div>
                  `}

            </div>
          `}).join("")}

      </div>

    </div>
  `}function qo(){const e=he();return`
    <main
      class="dentistry-blog-details-page"
      data-blog-details-page
    >

      <!-- BREADCRUMB -->

      <section class="section breadcrumb-section">

        <div
          class="w-layout-blockcontainer container-fluid w-container"
        >

          <div class="breadcrumb-block three">

            <div
              class="w-layout-blockcontainer container w-container"
            >

              <div class="breadcrumb-main-title-block">

                <div class="breadcrumb-title-block">

                  <h2
                    class="breadcrumb-title"
                    data-blog-heading
                  >
                    ${N(j("blog",e))}
                  </h2>

                </div>

                <div class="breadcrumb-subtext-block">

                  <a
                    href="/"
                    class="breadcrumb-subtext"
                    data-blog-home
                  >
                    ${N(j("home",e))}
                  </a>

                  <span class="breadcrumb-subtext">
                    -
                  </span>

                  <a
                    href="/blog"
                    class="breadcrumb-subtext"
                    data-blog-link
                  >
                    ${N(j("blog",e))}
                  </a>

                  <span class="breadcrumb-subtext">
                    -
                  </span>

                  <span
                    class="breadcrumb-subtext"
                    data-blog-crumb
                    aria-current="page"
                  >
                    ${N(j("details",e))}
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      <!-- LOADING / ERROR -->

      <div
        class="dp-blog-details-status"
        data-blog-status
        role="status"
        aria-live="polite"
      >
        ${N(j("loading",e))}
      </div>

      <!-- BLOG DETAILS -->

      <section
        class="section blog-single-section"
        data-blog-section
        hidden
      >

        <div
          class="w-layout-blockcontainer container w-container"
        >

          <div class="w-layout-grid blog-single-grid">

            <!-- MAIN ARTICLE -->

            <div
              class="blog-single-info-main-block"
              data-blog-article
            ></div>

            <!-- RIGHT SIDEBAR -->

            <aside
              class="blog-single-info-right-block"
              aria-label="${N(j("otherBlogs",e))}"
              data-other-blogs-aside
            >

              <div class="blog-single-sticky-block">

                <div class="service-single-left-block last">

                  <div class="service-single-box-title">

                    <h3
                      class="service-single-title"
                      data-other-blogs-heading
                    >
                      ${N(j("otherBlogs",e))}
                    </h3>

                  </div>

                  <!-- OTHER BLOGS FROM API -->

                  <div
                    data-other-blogs-list
                    aria-live="polite"
                  >
                    <p class="dp-other-blogs-message">
                      ${N(j("loadingBlogs",e))}
                    </p>
                  </div>

                </div>

              </div>

            </aside>

          </div>

        </div>

      </section>

    </main>
  `}function No(){const e=document.querySelector("[data-blog-details-page]");if(!e)return()=>{};const t=new AbortController;let a=null,o=he();const n=Ao(),i=e.querySelector("[data-blog-status]"),r=e.querySelector("[data-blog-section]"),l=e.querySelector("[data-blog-article]"),b=e.querySelector("[data-other-blogs-list]");e.querySelector("[data-other-blogs-heading]");const u=e.querySelector("[data-other-blogs-aside]"),d=Fe(document.getElementById("app"));function c(y,w=!1){if(i.hidden=!1,i.textContent=y,w){const $=document.createElement("button");$.type="button",$.className="dp-blog-details-retry",$.dataset.blogRetry="",$.textContent=j("retry"),i.appendChild($)}}function h(){i.hidden=!0,i.textContent=""}function s(y){const w={"[data-blog-heading]":"blog","[data-blog-home]":"home","[data-blog-link]":"blog","[data-blog-crumb]":"details","[data-other-blogs-heading]":"otherBlogs"};for(const[$,T]of Object.entries(w)){const P=e.querySelector($);P&&(P.textContent=j(T,y))}u.setAttribute("aria-label",j("otherBlogs",y))}function g(y){r.hidden=!0,l.innerHTML="",b.innerHTML=`
      <p class="dp-other-blogs-message">
        ${N(j("loadingBlogs",y))}
      </p>
    `}async function m(y,w,$){try{const T=await Ne.list(y,$);if($.aborted||t.signal.aborted||!e.isConnected||he()!==y)return;aa(T);const _=Po(T).filter(E=>!E.locale||E.locale===y).map(E=>ft(E,y)).filter(Boolean).filter(E=>!(w.id!=null&&E.id!=null&&String(E.id)===String(w.id)||E.slug&&(E.slug===n||E.slug===w.slug))),x=[],C=new Set;for(const E of _){const k=E.id!=null?`id:${E.id}`:E.slug?`slug:${E.slug}`:`title:${E.title1}`;C.has(k)||(C.add(k),x.push(E))}const A=x.slice(0,5);if(!A.length){b.innerHTML=`
          <p class="dp-other-blogs-message">
            ${N(j("otherEmpty",y))}
          </p>
        `;return}b.innerHTML=Io(A,y)}catch(T){if($.aborted||t.signal.aborted)return;console.error("Other blogs API error:",T),b.innerHTML=`
        <p class="dp-other-blogs-message">
          ${N(j("otherError",y))}
        </p>
      `}}async function f(){a==null||a.abort(),a=new AbortController;const y=a.signal,w=he();if(o=w,s(w),g(w),!n){c(j("notFound",w));return}c(j("loading",w));try{const $=await Ne.show(n,w,y);if(y.aborted||t.signal.aborted||!e.isConnected||he()!==w)return;const T=Lo($,n,w),P=ft(T,w);if(!P){c(j("notFound",w));return}l.innerHTML=Do(P,w),r.hidden=!1,h(),document.title=`${P.title1} | Dentistry`,m(w,P,y)}catch($){if(y.aborted||t.signal.aborted)return;console.error("Blog Details API error:",$);const T=($==null?void 0:$.status)===404||($==null?void 0:$.statusCode)===404;c(j(T?"notFound":"error",w),!T)}}e.addEventListener("click",y=>{y.target instanceof Element&&y.target.closest("[data-blog-retry]")&&(y.preventDefault(),f())},{signal:t.signal});const v=new MutationObserver(()=>{he()!==o&&f()});return v.observe(document.documentElement,{attributes:!0,attributeFilter:["lang","dir"]}),f(),()=>{t.abort(),a==null||a.abort(),v.disconnect(),typeof d=="function"&&d()}}const Q=e=>p(`contactPage.${e}`);function $e(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}const H=e=>$e(Q(e)),Ro=`
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
`,Oo=`
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
`,Mo=`
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
`,yt="abd123@email.com",_o="(21) 220-59-365",Bo="tel:+982122059365";function Fo(){return[{label:Q("addressLabel"),detail:Q("addressText"),icon:Ro,href:null},{label:Q("emailLabel"),detail:yt,icon:Oo,href:`mailto:${yt}`},{label:Q("phoneLabel"),detail:_o,icon:Mo,href:Bo}]}function Uo(e){return`
    <div class="contactus-info-inner-block">

      <div class="contactus-info-inner-icon-block">
        <div class="w-embed" aria-hidden="true">
          ${e.icon}
        </div>
      </div>

      <div class="contact-info-details-block">

        <h2 class="contact-title">
          ${$e(e.label)}
        </h2>

        ${e.href?`
              <a
                href="${$e(e.href)}"
                class="contact-link"
              >
                ${$e(e.detail)}
              </a>
            `:`
              <div class="contact-subtext">
                ${$e(e.detail)}
              </div>
            `}

      </div>

    </div>
  `}function Ho(){return`
    <section
      class="section breadcrumb-section"
      aria-label="${H("breadcrumb")}"
    >

      <div class="w-layout-blockcontainer container-fluid w-container">

        <div class="breadcrumb-block two">

          <div class="w-layout-blockcontainer container w-container">

            <div class="breadcrumb-main-title-block">

              <div class="breadcrumb-title-block">
                <h1 class="breadcrumb-title">
                  ${H("contact")}
                </h1>
              </div>

              <div class="breadcrumb-subtext-block">

                <a
                  href="/"
                  class="breadcrumb-subtext"
                >
                  ${H("home")}
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
                  ${H("contact")}
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  `}function jo(){return`
    <section
      class="section contact-section-one"
      aria-label="${H("contactInformation")}"
    >

      <div class="w-layout-blockcontainer container w-container">

        <div class="w-layout-grid contact-grid-one">

          ${Fo().map(Uo).join("")}

        </div>

      </div>

    </section>
  `}function Vo(){return`
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
              alt="${H("imageAlt")}"
              loading="lazy"
              decoding="async"
              class="contact-image-two"
            />

          </div>

          <!-- CONTACT FORM CONTENT -->

          <div class="contact-form-block-two">

            <div class="contact-title-block-two">

              <div class="section-sub-text">
                ${H("touch")}
              </div>

              <h2
                id="contact-form-heading"
                class="section-title"
              >
                ${H("heading")}
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
                        ${H("firstName")}
                      </label>

                      <input
                        id="contact-first-name"
                        class="input-field w-input"
                        name="first_name"
                        type="text"
                        placeholder="${H("firstName")}"
                        maxlength="255"
                        autocomplete="given-name"
                        required
                      />

                    </div>

                    <div class="dentistry-contact-field">

                      <label for="contact-last-name">
                        ${H("lastName")}
                      </label>

                      <input
                        id="contact-last-name"
                        class="input-field w-input"
                        name="last_name"
                        type="text"
                        placeholder="${H("lastName")}"
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
                        ${H("email")}
                      </label>

                      <input
                        id="contact-email"
                        class="input-field w-input"
                        name="email"
                        type="email"
                        placeholder="${H("email")}"
                        maxlength="255"
                        autocomplete="email"
                        required
                      />

                    </div>

                    <div class="dentistry-contact-field">

                      <label for="contact-phone">
                        ${H("phone")}
                      </label>

                      <input
                        id="contact-phone"
                        class="input-field w-input"
                        name="phone"
                        type="tel"
                        inputmode="tel"
                        placeholder="${H("phonePlaceholder")}"
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
                      ${H("message")}
                    </label>

                    <textarea
                      id="contact-message"
                      class="text-area w-input"
                      name="message"
                      placeholder="${H("message")}"
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
                        ${H("submit")}
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
  `}function Yo(){return`
    <main
      class="dentistry-contact-page"
      data-no-translate
    >

      ${Ho()}

      ${jo()}

      ${Vo()}

    </main>
  `}function zo(){const e=document.querySelector(".dentistry-contact-page #email-form");if(!e)return()=>{};const t=new AbortController,a=e.querySelector("[data-contact-status]"),o=e.querySelector("[data-contact-submit]"),n=e.querySelector("[data-contact-submit-label]");let i=!1,r=null;function l(s,g="error"){a.hidden=!1,a.textContent=s,a.dataset.status=g,a.setAttribute("role",g==="error"?"alert":"status")}function b(){a.hidden=!0,a.textContent="",a.removeAttribute("data-status")}function u(){const s=new FormData(e);return{first_name:String(s.get("first_name")??"").trim(),last_name:String(s.get("last_name")??"").trim(),email:String(s.get("email")??"").trim(),phone:String(s.get("phone")??"").trim(),message:String(s.get("message")??"").trim()}}function d(){for(const s of e.elements)typeof s.setCustomValidity=="function"&&s.setCustomValidity("")}function c(s){if(!s||typeof s!="object")return!1;let g=null;for(const[m,f]of Object.entries(s)){const v=e.elements.namedItem(m);if(!v||typeof v.setCustomValidity!="function")continue;const y=Array.isArray(f)?String(f[0]??""):String(f??"");y&&(v.setCustomValidity(y),g||(g=v))}return g?(g.reportValidity(),g.focus(),!0):!1}function h(s){i=s,o.disabled=s,e.setAttribute("aria-busy",s?"true":"false"),n.textContent=Q(s?"sending":"submit")}return e.addEventListener("submit",async s=>{if(s.preventDefault(),i||t.signal.aborted||(b(),d(),!e.reportValidity()))return;const g=u();if(!g.first_name||!g.last_name||!g.email||!g.phone||!g.message){l(Q("validation"));return}r=new AbortController;const m=r.signal;h(!0);try{const f=await Zt.send(g,m);if(m.aborted||t.signal.aborted||!e.isConnected)return;if((f==null?void 0:f.success)===!1||(f==null?void 0:f.status)===!1||Number(f==null?void 0:f.statusCode)>=400){const v=new Error((f==null?void 0:f.message)||Q("error"));throw v.status=Number(f==null?void 0:f.statusCode)||0,v.errors=(f==null?void 0:f.errors)||null,v}e.reset(),l(Q("success"),"success")}catch(f){if(m.aborted||t.signal.aborted||!e.isConnected)return;console.error("Contact message failed:",f),(f==null?void 0:f.status)===422||f!=null&&f.errors?(c(f==null?void 0:f.errors),l(Q("validation"),"error")):l(Q("error"),"error")}finally{!t.signal.aborted&&e.isConnected&&h(!1),r=null}},{signal:t.signal}),e.addEventListener("input",s=>{const g=s.target;g&&typeof g.setCustomValidity=="function"&&g.setCustomValidity(""),i||b()},{signal:t.signal}),()=>{t.abort(),r==null||r.abort()}}function be(){const e=(document.documentElement.lang||"").toLowerCase();return e==="fa"||e.startsWith("fa-")?"fa":e==="en"||e.startsWith("en-")?"en":document.documentElement.dir==="rtl"?"fa":"en"}const Go={fa:{home:"خانه",service:"خدمات",ourServices:"خدمات ما",heading:"خدمات تخصصی دندان‌پزشکی",loading:"در حال دریافت خدمات...",empty:"در حال حاضر خدمتی برای نمایش وجود ندارد.",error:"دریافت خدمات با مشکل مواجه شد.",retry:"تلاش مجدد"},en:{home:"Home",service:"Services",ourServices:"Our Services",heading:"Restorative Dental Care Expertise",loading:"Loading services...",empty:"No services are available at the moment.",error:"Unable to load services.",retry:"Try Again"}};function te(e,t=be()){var a;return((a=Go[t])==null?void 0:a[e])||e}function ke(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Wo(e,t){if(typeof e=="string")return e.trim();if(e&&typeof e=="object"){const a=e[t];return typeof a=="string"?a.trim():""}return""}function Ve(e,...t){for(const a of t){const o=Wo(a,e);if(o)return o}return""}function Zo(e,t){const a=e==null?void 0:e.translations;return Array.isArray(a)?a.find(o=>(o==null?void 0:o.lang)===t||(o==null?void 0:o.locale)===t||(o==null?void 0:o.language)===t)||{}:a&&typeof a=="object"?a[t]||{}:(e==null?void 0:e.translation)||{}}function Ko(){const e="/";try{return new URL(e,window.location.origin).origin}catch{return window.location.origin}}function wt(e){if(e&&typeof e=="object"&&(e=e.url??e.full_url??e.src??e.path??""),typeof e!="string")return"";const t=e.trim();if(!t||/[<>"'\u0000-\u001F]/.test(t))return"";let a=t;/^(storage|uploads|images)\//i.test(a)&&(a=`/${a}`);try{const o=new URL(a,Ko());return o.protocol!=="http:"&&o.protocol!=="https:"?"":o.href}catch{return""}}function Qo(e){var a;const t=e==null?void 0:e.data;return Array.isArray(t)?t:Array.isArray(t==null?void 0:t.data)?t.data:Array.isArray(t==null?void 0:t.services)?t.services:Array.isArray((a=t==null?void 0:t.services)==null?void 0:a.data)?t.services.data:Array.isArray(t==null?void 0:t.items)?t.items:null}function Xo(e,t){if(!e||typeof e!="object"||Array.isArray(e))return null;const a=Zo(e,t),o=Ve(t,a.name,a.title,e[`name_${t}`],e.name,e.title,e.service_name);if(!o)return null;const n=Ve(t,a.description,e[`description_${t}`],e.description),i=wt(e.image_1_url??e.image_1??e.image_url??e.image??""),r=wt(e.image_2_url??e.image_2??"");return{id:e.id??null,slug:Ve(t,e.slug,e.service_slug,a.slug),name:o,description:n,duration:e.duration!=null?Number(e.duration):null,price:e.price!=null?Number(e.price):null,depositAmount:e.deposit_amount!=null?Number(e.deposit_amount):null,image:i,secondImage:r}}const $t=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path
      d="
        M24 9
        C19 6 12 4 8 10
        C3 17 7 26 9 32
        C11 39 13 43 17 42
        C21 41 20 29 24 29
        C28 29 27 41 31 42
        C35 43 37 39 39 32
        C41 26 45 17 40 10
        C36 4 29 6 24 9
      "
    />
  </svg>
`,Jo=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="14"
    viewBox="0 0 18 14"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="
        M17.5169 6.43796
        L11.9488 0.869778
        C11.7987 0.72488 11.5978 0.644702
        11.3892 0.646514
        C11.1807 0.648327 10.9812 0.731984
        10.8337 0.879468
        C10.6862 1.02695 10.6025 1.22646
        10.6007 1.43503
        C10.5989 1.64359 10.6791 1.84453
        10.824 1.99455
        L15.0343 6.20489
        H1.04545
        C0.834487 6.20489 0.63216 6.2887
        0.482983 6.43788
        C0.333807 6.58705 0.25 6.78938
        0.25 7.00035
        C0.25 7.21131 0.333807 7.41364
        0.482983 7.56282
        C0.63216 7.71199 0.834487 7.7958
        1.04545 7.7958
        H15.0343
        L10.824 12.0061
        C10.748 12.0795 10.6874 12.1673
        10.6457 12.2643
        C10.604 12.3614 10.5821 12.4658
        10.5812 12.5714
        C10.5802 12.677 10.6004 12.7818
        10.6404 12.8795
        C10.6804 12.9773 10.7394 13.0661
        10.8141 13.1408
        C10.8888 13.2155 10.9776 13.2745
        11.0754 13.3145
        C11.1731 13.3545 11.2779 13.3746
        11.3835 13.3737
        C11.4891 13.3728 11.5935 13.3509
        11.6905 13.3092
        C11.7876 13.2675 11.8754 13.2069
        11.9488 13.1309
        L17.5169 7.56273
        C17.6661 7.41356 17.7498 7.21127
        17.7498 7.00035
        C17.7498 6.78942 17.6661 6.58713
        17.5169 6.43796
        Z
      "
      fill="currentColor"
    />
  </svg>
`;function en(e){const t=ke(e.name),a=e.id!=null?`/services/${encodeURIComponent(String(e.id))}`:"",n=`
    <div class="service-three-image-block">

      ${e.image?`
      <img
        src="${ke(e.image)}"
        alt="${t}"
        class="service-image-three"
        loading="lazy"
        decoding="async"
      />
    `:`
      <div
        class="service-image-three dp-service-image-placeholder"
        aria-hidden="true"
      >
        ${$t}
      </div>
    `}

      <div class="service-three-icon">
        <div class="service-icon-one w-embed">
          ${$t}
        </div>
      </div>

    </div>

    <div class="service-three-info-block">

      <h2 class="service-three-title-block">
        ${t}
      </h2>

      <div class="service-three-arrow-block">
        <div class="w-embed">
          ${Jo}
        </div>
      </div>

    </div>
  `;return`
    <div class="w-dyn-item" role="listitem">

      ${a?`
            <a
              href="${ke(a)}"
              class="service-three-link w-inline-block"
            >
              ${n}
            </a>
          `:`
            <div class="service-three-link w-inline-block">
              ${n}
            </div>
          `}

    </div>
  `}function tn(){const e=be();return`
    <main
      class="dentistry-service-page"
      data-service-page
    >

      <!-- BREADCRUMB -->

      <section class="section breadcrumb-section">

        <div
          class="w-layout-blockcontainer container-fluid w-container"
        >
          <div class="breadcrumb-block three">

            <div
              class="w-layout-blockcontainer container w-container"
            >

              <div class="breadcrumb-main-title-block">

                <div class="breadcrumb-title-block">

                  <h1
                    class="breadcrumb-title"
                    data-service-title
                  >
                    ${te("ourServices",e)}
                  </h1>

                </div>

                <div class="breadcrumb-subtext-block">

                  <a
                    href="/"
                    class="breadcrumb-subtext"
                    data-service-home
                  >
                    ${te("home",e)}
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
                    data-service-breadcrumb
                  >
                    ${te("service",e)}
                  </span>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      <!-- SERVICES SECTION -->

      <section class="section service-three-section">

        <div
          class="w-layout-blockcontainer container w-container"
        >

          <div class="service-three-main-block">

            <!-- SECTION HEADING -->

            <div class="section-title-main-block">

              <div class="section-title-sub-text-block">

                <div
                  class="section-sub-text"
                  data-service-subtitle
                >
                  ${te("ourServices",e)}
                </div>

              </div>

              <div class="section-title-grid">

                <h2
                  class="section-title"
                  data-service-heading
                >
                  ${te("heading",e)}
                </h2>

              </div>

            </div>

            <!-- LOADING / ERROR / EMPTY -->

            <div
              class="dp-service-status"
              data-service-status
              role="status"
              aria-live="polite"
            >
              ${te("loading",e)}
            </div>

            <!-- API SERVICES LIST -->

            <div class="w-dyn-list">

              <div
                class="service-three-list w-dyn-items"
                role="list"
                data-service-list
              ></div>

            </div>

          </div>

        </div>
      </section>

    </main>
  `}function an(){const e=document.querySelector("[data-service-page]");if(!e)return()=>{};const t=new AbortController;let a=null,o=be();const n=e.querySelector("[data-service-list]"),i=e.querySelector("[data-service-status]"),r=Fe(document.getElementById("app"));function l(s){const g={"[data-service-title]":"ourServices","[data-service-home]":"home","[data-service-breadcrumb]":"service","[data-service-subtitle]":"ourServices","[data-service-heading]":"heading"};for(const[m,f]of Object.entries(g)){const v=e.querySelector(m);v&&(v.textContent=te(f,s))}}function b(s){i.hidden=!1,i.textContent=s}function u(){i.hidden=!0,i.textContent=""}function d(s){i.hidden=!1,i.innerHTML=`
      <p>
        ${ke(te("error",s))}
      </p>

      <button
        type="button"
        class="dp-service-retry"
        data-service-retry
      >
        ${ke(te("retry",s))}
      </button>
    `}async function c(){a==null||a.abort(),a=new AbortController;const s=a.signal,g=be();o=g,l(g),n.innerHTML="",b(te("loading",g));try{const m=await Re.list(g,s);if(s.aborted||t.signal.aborted||!e.isConnected||be()!==g)return;if((m==null?void 0:m.status)===!1||(m==null?void 0:m.success)===!1)throw new Error(m.message||"SERVICE_API_ERROR");const f=Qo(m);if(!f){console.warn("Invalid services API response:",m),d(g);return}const v=f.map(y=>Xo(y,g)).filter(Boolean);if(f.length>0&&v.length===0){console.warn("Services returned without valid names:",f),d(g);return}if(v.length===0){b(te("empty",g));return}n.innerHTML=v.map(en).join(""),u()}catch(m){if(s.aborted||t.signal.aborted)return;console.error("Failed to load services:",m),d(g)}}e.addEventListener("click",s=>{s.target.closest("[data-service-retry]")&&(s.preventDefault(),c())},{signal:t.signal});const h=new MutationObserver(()=>{be()!==o&&c()});return h.observe(document.documentElement,{attributes:!0,attributeFilter:["lang","dir"]}),c(),()=>{t.abort(),a==null||a.abort(),h.disconnect(),typeof r=="function"&&r()}}function ge(){const e=(document.documentElement.lang||"").toLowerCase();return e==="fa"||e.startsWith("fa-")?"fa":"en"}const on={fa:{home:"خانه",services:"خدمات دندان‌پزشکی",details:"جزئیات خدمت",otherServices:"سایر خدمات",loading:"در حال دریافت اطلاعات خدمت...",notFound:"خدمت موردنظر پیدا نشد.",error:"دریافت اطلاعات خدمت با مشکل مواجه شد.",retry:"تلاش مجدد",back:"بازگشت به خدمات"},en:{home:"Home",services:"Dental Services",details:"Service Details",otherServices:"Our Services",loading:"Loading service details...",notFound:"Service not found.",error:"Unable to load service details.",retry:"Try Again",back:"Back to Services"}};function W(e,t=ge()){var a;return((a=on[t])==null?void 0:a[e])||e}function se(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function nn(){const t=location.pathname.replace(/\/+$/,"").match(/^\/services\/([1-9]\d*)$/);return t?t[1]:""}function rn(){const e="/";try{return new URL(e,location.origin).origin}catch{return location.origin}}function kt(e){if(e&&typeof e=="object"&&(e=e.url??e.full_url??e.src??e.path??""),typeof e!="string")return"";const t=e.trim();if(!t||/[<>"'\u0000-\u001F]/.test(t))return"";const a=/^(storage|uploads|images)\//i.test(t)?`/${t}`:t;try{const o=new URL(a,rn());return["http:","https:"].includes(o.protocol)?o.href:""}catch{return""}}function Ee(e){return typeof e=="string"?e.trim():""}function Ye(...e){for(const t of e){const a=Ee(t);if(a)return a}return""}function Et(e){const t=Ee(e);return t?t.split(/\n\s*\n/).filter(Boolean).map(a=>`
      <p>
        ${se(a).replace(/\n/g,"<br>")}
      </p>
    `).join(""):""}function oa(e){if((e==null?void 0:e.status)===!1||(e==null?void 0:e.success)===!1)throw new Error((e==null?void 0:e.message)||"SERVICE_API_ERROR")}function sn(e){var o;const t=e==null?void 0:e.data;return[t,t==null?void 0:t.data,t==null?void 0:t.services,(o=t==null?void 0:t.services)==null?void 0:o.data,t==null?void 0:t.items].find(Array.isArray)??[]}function ln(e,t,a){oa(e);const o=e==null?void 0:e.data,n=(o==null?void 0:o.service)??(o==null?void 0:o.data)??o;if(Array.isArray(n)){const i=n.filter(r=>String(r==null?void 0:r.id)===String(t));return i.find(r=>r.locale===a)??i.find(r=>r.locale==null)??null}return n&&typeof n=="object"&&String(n.id)===String(t)&&(n.locale==null||n.locale===a)?n:null}function St(e){if(!e||typeof e!="object"||Array.isArray(e))return null;const t=Ye(e.name,e.title_1);return!t||e.id==null?null:{id:e.id,locale:Ee(e.locale),name:t,title1:Ye(e.title_1,e.name),description1:Ye(e.description_1,e.description),image1:kt(e.image_1_url??e.image_1),title2:Ee(e.title_2),description2:Ee(e.description_2),image2:kt(e.image_2_url??e.image_2)}}const cn=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="70"
    height="70"
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path
      d="M24 9C19 6 12 4 8 10
         C3 17 7 26 9 32
         C11 39 13 43 17 42
         C21 41 20 29 24 29
         C28 29 27 41 31 42
         C35 43 37 39 39 32
         C41 26 45 17 40 10
         C36 4 29 6 24 9Z"
    />
  </svg>
`,dn=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14"/>
    <path d="m13 6 6 6-6 6"/>
  </svg>
`;function un(e,t){const a=[];return a.length?`
    <div class="dp-service-facts">
      ${a.map(o=>`
        <div class="dp-service-fact">

          <span class="dp-service-fact-label">
            ${se(o.label)}
          </span>

          <strong class="dp-service-fact-value">
            ${se(o.value)}
          </strong>

        </div>
      `).join("")}
    </div>
  `:""}function pn(e,t){const a=se(e.title1),o=e.image1?`
      <img
        class="service-single-image"
        src="${se(e.image1)}"
        alt="${a}"
        loading="eager"
        decoding="async"
      />
    `:`
      <div
        class="service-single-image dp-service-details-placeholder"
        aria-hidden="true"
      >
        ${cn}
      </div>
    `,n=e.description1?`
      <div class="service-rich-one w-richtext">
        ${Et(e.description1)}
      </div>
    `:"",r=!!(e.title2||e.description2||e.image2)?`
      <div class="service-info-two dp-service-section-two">

        ${e.image2?`
              <img
                class="service-image-two"
                src="${se(e.image2)}"
                alt="${se(e.title2||e.name)}"
                loading="lazy"
                decoding="async"
              />
            `:""}

        ${e.title2||e.description2?`
              <div class="w-richtext dp-service-second-content">

                ${e.title2?`
                      <h2 class="dp-service-second-title">
                        ${se(e.title2)}
                      </h2>
                    `:""}

                ${Et(e.description2)}

              </div>
            `:""}

      </div>
    `:"";return`
    <div class="w-dyn-list">
      <div class="w-dyn-items" role="list">
        <div class="w-dyn-item" role="listitem">

          <div class="service-single-image-block">

            <!-- SECTION 1 -->

            <h1 class="service-title">
              ${a}
            </h1>

            ${o}

            ${n}

            <!-- SERVICE DETAILS -->

            ${un()}

            <!-- SECTION 2 -->

            ${r}

          </div>

        </div>
      </div>
    </div>
  `}function hn(e,t){return`
    <div class="service-list-wrap w-dyn-list">

      <div
        class="service-list w-dyn-items"
        role="list"
      >

        ${e.map(a=>{const o=String(a.id)===String(t);return`
            <div class="w-dyn-item" role="listitem">

              <a
                href="/services/${encodeURIComponent(String(a.id))}"
                class="service-list-link w-inline-block ${o?"w--current":""}"
                ${o?'aria-current="page"':""}
              >

                <div class="service-list-word">

                  <div class="service-dot-block"></div>

                  <h4 class="service-single-list-name">
                    ${se(a.name)}
                  </h4>

                </div>

                <div class="service-single-icon-box">
                  <span class="service-single-icon">
                    ${dn}
                  </span>
                </div>

              </a>
            </div>
          `}).join("")}

      </div>
    </div>
  `}function gn(){const e=ge();return`
    <main
      class="dentistry-service-details-page"
      data-service-details-page
    >

      <!-- BREADCRUMB -->

      <section class="section breadcrumb-section">

        <div
          class="w-layout-blockcontainer container-fluid w-container"
        >
          <div class="breadcrumb-block two">

            <div
              class="w-layout-blockcontainer container w-container"
            >

              <div class="breadcrumb-main-title-block">

                <div class="breadcrumb-title-block">

                  <h1
                    class="breadcrumb-title"
                    data-details-page-title
                  >
                    ${W("services",e)}
                  </h1>

                </div>

                <div class="breadcrumb-subtext-block">

                  <a
                    href="/"
                    class="breadcrumb-subtext"
                    data-details-home
                  >
                    ${W("home",e)}
                  </a>

                  <span
                    class="breadcrumb-subtext"
                    aria-hidden="true"
                  >
                    -
                  </span>

                  <a
                    href="/service"
                    class="breadcrumb-subtext"
                    data-details-services
                  >
                    ${W("services",e)}
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
                    data-details-breadcrumb
                  >
                    ${W("details",e)}
                  </span>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- STATUS -->

      <div
        class="dp-service-details-status"
        data-details-status
        role="status"
        aria-live="polite"
      >
        ${W("loading",e)}
      </div>

      <!-- SERVICE DETAILS -->

      <section
        class="section service-single-section"
        data-details-section
        hidden
      >

        <div
          class="w-layout-blockcontainer container w-container"
        >

          <div class="service-single-main-block">

            <div class="w-layout-grid service-single-grid">

              <!-- SIDEBAR -->

              <div class="service-single-main-block-one">

                <div class="service-sticky-block">

                  <div
                    class="service-single-left-block"
                    data-details-sidebar-box
                    hidden
                  >

                    <div class="service-single-box-title">

                      <h3
                        class="service-single-title"
                        data-details-sidebar-title
                      >
                        ${W("otherServices",e)}
                      </h3>

                    </div>

                    <div data-details-sidebar></div>

                  </div>

                </div>
              </div>

              <!-- MAIN CONTENT -->

              <div class="service-single-content-block">
                <div data-details-content></div>
              </div>

            </div>

          </div>

        </div>
      </section>

    </main>
  `}function mn(){const e=document.querySelector("[data-service-details-page]");if(!e)return()=>{};const t=new AbortController;let a=null,o=ge();const n=nn(),i=e.querySelector("[data-details-status]"),r=e.querySelector("[data-details-section]"),l=e.querySelector("[data-details-content]"),b=e.querySelector("[data-details-sidebar]"),u=e.querySelector("[data-details-sidebar-box]"),d=Fe(document.getElementById("app"));function c(y){const w={"[data-details-page-title]":"services","[data-details-home]":"home","[data-details-services]":"services","[data-details-breadcrumb]":"details","[data-details-sidebar-title]":"otherServices"};for(const[$,T]of Object.entries(w)){const P=e.querySelector($);P&&(P.textContent=W(T,y))}}function h(y,w=!1){if(i.hidden=!1,i.textContent=y,w){const $=document.createElement("button");$.type="button",$.className="dp-service-details-retry",$.dataset.detailsRetry="",$.textContent=W("retry"),i.appendChild($)}}function s(){i.hidden=!0,i.textContent=""}function g(){r.hidden=!0,u.hidden=!0,l.innerHTML="",b.innerHTML=""}async function m(y,w,$){try{const T=await Re.list(y,$);if($.aborted||t.signal.aborted||!e.isConnected||ge()!==y)return;oa(T);const P=sn(T).filter(_=>!_.locale||_.locale===y).map(St).filter(Boolean);if(!P.length){u.hidden=!0;return}b.innerHTML=hn(P,w),u.hidden=!1}catch(T){!$.aborted&&!t.signal.aborted&&(console.warn("Failed to load sidebar services:",T),u.hidden=!0)}}async function f(){a==null||a.abort(),a=new AbortController;const y=a.signal,w=ge();if(o=w,c(w),g(),!n){h(W("notFound",w));return}h(W("loading",w));try{const $=await Re.show(n,w,y);if(y.aborted||t.signal.aborted||!e.isConnected||ge()!==w)return;const T=ln($,n,w),P=T?St(T):null;if(!P){h(W("notFound",w));return}l.innerHTML=pn(P,w),r.hidden=!1,s(),document.title=`${P.name} | Dentistry`,m(w,n,y)}catch($){if(y.aborted||t.signal.aborted)return;console.error("Service details API failed:",$);const T=($==null?void 0:$.status)===404||($==null?void 0:$.statusCode)===404;h(W(T?"notFound":"error",w),!T)}}e.addEventListener("click",y=>{y.target.closest("[data-details-retry]")&&(y.preventDefault(),f())},{signal:t.signal});const v=new MutationObserver(()=>{ge()!==o&&f()});return v.observe(document.documentElement,{attributes:!0,attributeFilter:["lang","dir"]}),f(),()=>{t.abort(),a==null||a.abort(),v.disconnect(),typeof d=="function"&&d()}}function ie(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Y(e){return ie(p(`teamDetails.${e}`))}function bn(){const e=window.location.pathname.match(/^\/team\/([a-z0-9-]+)\/?$/i);return e?e[1].toLowerCase():""}const Tt=`
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
`;function fn(e){return`
    <section class="section breadcrumb-section">
      <div class="w-layout-blockcontainer container-fluid w-container">
        <div class="breadcrumb-block">

          <div class="w-layout-blockcontainer container w-container">
            <div class="breadcrumb-main-title-block">

              <div class="breadcrumb-title-block">
                <h1 class="breadcrumb-title">
                  ${ie(e.name)}
                </h1>
              </div>

              <div class="breadcrumb-subtext-block">

                <a href="/" class="breadcrumb-subtext">
                  ${Y("home")}
                </a>

                <span class="breadcrumb-subtext">-</span>

                <a href="/about-us#about-doctors"
                   class="breadcrumb-subtext">
                  ${Y("team")}
                </a>

                <span class="breadcrumb-subtext">-</span>

                <span
                  class="breadcrumb-subtext"
                  aria-current="page"
                >
                  ${ie(e.name)}
                </span>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  `}function vn(e){return`
    <section class="section team-single-section dp-team-details">

      <div class="w-layout-blockcontainer container w-container">
        <div class="w-layout-grid expert-grid">

          <!-- LEFT COLUMN -->

          <div class="left-expert-grid">

            <div class="expert-image-block">
              <img
                src="${ie(e.image)}"
                alt="${ie(e.name)}"
                class="expert-image"
                loading="eager"
              />
            </div>

            <div class="expert-flex-block">

              <h2 class="expert-team-tilte">
                ${ie(e.name)}
              </h2>

              <div class="expert-designation">
                ${ie(e.role)}
              </div>

            </div>

            <div class="dp-team-preview-badge">
              ${Y("previewBadge")}
            </div>

            <div class="main-expert-duration">

              <h3 class="inner-expert-title">
                ${Y("specialty")}
              </h3>

              <p class="dp-team-specialty">
                ${ie(e.role)}
              </p>

            </div>

            <div class="main-expert-duration last">

              <h3 class="inner-expert-title">
                ${Y("information")}
              </h3>

              <p class="dp-team-info">
                ${Y("informationText")}
              </p>

            </div>

            <div class="expert-button-block">

              <a
                href="/contact-us"
                class="button-primary w-inline-block"
              >
                <span class="button-primary-text">
                  ${Y("contactButton")}
                </span>

                <span class="button-icon-block">
                  ${Tt}
                </span>
              </a>

            </div>

          </div>

          <!-- RIGHT COLUMN -->

          <div class="right-expert-grid">

            <div class="right-expert-sticky">

              <div class="expert-richbox w-richtext">

                <div class="dp-team-detail-eyebrow">
                  ${Y("eyebrow")}
                </div>

                <h2>
                  ${Y("aboutTitle")} ${ie(e.name)}
                </h2>

                <p>
                  ${Y("aboutDescription")}
                </p>

                <h3>
                  ${Y("focusTitle")}
                </h3>

                <p>
                  ${ie(e.focus)}
                </p>

                <h3>
                  ${Y("approachTitle")}
                </h3>

                <p>
                  ${Y("approachDescription")}
                </p>

                <div class="dp-team-detail-note">
                  ${Y("previewNotice")}
                </div>

                <a
                  href="/about-us#about-doctors"
                  class="dp-team-back-link"
                >
                  <span class="dp-team-back-arrow">
                    ${Tt}
                  </span>

                  ${Y("backToDoctors")}
                </a>

              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  `}function yn(){return`
    <main class="dp-team-not-found">
      <h1>${Y("notFound")}</h1>

      <a href="/about-us#about-doctors">
        ${Y("backToDoctors")}
      </a>
    </main>
  `}function wn(){const e=Qa(bn());return e?`
    <main class="dp-team-details-page" data-no-translate>
      ${fn(e)}
      ${vn(e)}
    </main>
  `:yn()}function $n(){return()=>{}}const kn=String.raw`
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
`;function En(){return kn}function Sn(){return Fe(document.getElementById("app"))}const K={phone:null,expiresAt:0},na=()=>G()==="fa"?"fa":"en",Tn=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),B=e=>Tn(p(`auth.login.${e}`));function ia(e){return String(e??"").replace(/[۰-۹]/g,t=>String(t.charCodeAt(0)-1776)).replace(/[٠-٩]/g,t=>String(t.charCodeAt(0)-1632))}function An(e){let t=ia(e).replace(/[\s()-]/g,"");return t=t.replace(/^(?:\+98|0098|98)/,"0"),/^09\d{9}$/.test(t)?t:null}const At=e=>ia(e).replace(/\D/g,"").slice(0,6),ze=e=>(e==null?void 0:e.success)===!0||(e==null?void 0:e.status)===!0;function Ge(e,t="phone"){var o;const a=Number((e==null?void 0:e.statusCode)??(e==null?void 0:e.status)??((o=e==null?void 0:e.response)==null?void 0:o.status)??0);return a===429?p("auth.login.tooMany"):a===408?p("auth.login.timeout"):a>=500?p("auth.login.serverError"):t==="email"&&[401,403,422].includes(a)?p("auth.login.invalidCredentials"):t==="send"&&a===404?p("auth.login.noAccount"):t==="send"&&a===422?p("auth.login.invalidPhone"):t==="verify"&&[400,401,403,422].includes(a)?p("auth.login.invalidCode"):p("auth.login.networkError")}function Ct(e){nt(e),rt(),K.phone=null,K.expiresAt=0,window.location.assign(`/dashboard?lang=${na()}`)}function Cn(){return`
    <main
      class="dn-login-page"
      data-portal-page="login"
      data-no-translate
      dir="${na()==="fa"?"rtl":"ltr"}"
    >

      <div class="dn-login-container">

        <!-- BRAND -->

        <a
  href="/"
  class="dn-login-brand"
  aria-label="Dentistry"
>
  <img
    src="/asset/img/logo.png"
    loading="eager"
    alt="Dentistry Logo"
    class="dn-login-logo"
  />
</a>

        <!-- LOGIN CARD -->

        <section
          class="dn-login-card"
          aria-labelledby="dn-login-title"
        >

          <div class="dn-login-heading">

            <h1 id="dn-login-title">
              ${B("title")}
            </h1>

            <p>
              ${B("subtitle")}
            </p>

          </div>

          <!-- LOGIN METHOD SWITCH -->

          <div
            class="dn-login-methods"
            aria-label="${B("title")}"
          >

            <button
              type="button"
              class="dn-login-method is-active"
              data-login-method="phone"
              aria-pressed="true"
            >
              ${B("methodPhone")}
            </button>

            <button
              type="button"
              class="dn-login-method"
              data-login-method="email"
              aria-pressed="false"
            >
              ${B("methodEmail")}
            </button>

          </div>

          <!-- PHONE LOGIN -->

          <form
            id="dp-login-phone-form"
            class="dn-login-form"
            novalidate
          >

            <div class="dn-login-field">

              <label for="login-phone">
                ${B("phone")}
              </label>

              <input
                id="login-phone"
                name="phone"
                type="tel"
                dir="ltr"
                inputmode="tel"
                autocomplete="tel"
                maxlength="20"
                placeholder="${B("phonePlaceholder")}"
                required
              />

            </div>

            <button
              class="dn-login-submit"
              type="submit"
              data-login-send
            >
              <span>${B("sendCode")}</span>
              <span aria-hidden="true">→</span>
            </button>

          </form>

          <!-- OTP VERIFICATION -->

          <form
            id="dp-login-otp-form"
            class="dn-login-form"
            novalidate
            hidden
          >

            <p class="dn-login-instruction">

              ${B("codeSentTo")}

              <strong
                data-login-phone-label
                dir="ltr"
              ></strong>

            </p>

            <div class="dn-login-field">

              <label for="login-code">
                ${B("code")}
              </label>

              <input
                id="login-code"
                name="code"
                type="text"
                dir="ltr"
                inputmode="numeric"
                autocomplete="one-time-code"
                maxlength="6"
                placeholder="${B("codePlaceholder")}"
                required
              />

              <small>
                ${B("codeValidity")}
              </small>

            </div>

            <button
              class="dn-login-submit"
              type="submit"
              data-login-verify
            >
              <span>${B("verify")}</span>
              <span aria-hidden="true">→</span>
            </button>

            <div class="dn-login-otp-actions">

              <button
                type="button"
                class="dn-login-text-button"
                data-login-edit
              >
                ${B("editPhone")}
              </button>

              <button
                type="button"
                class="dn-login-text-button"
                data-login-resend
                disabled
              >
                ${B("resend")}

                <span
                  data-login-countdown
                  dir="ltr"
                ></span>

              </button>

            </div>

          </form>

          <!-- EMAIL LOGIN -->

          <form
            id="dp-login-email-form"
            class="dn-login-form"
            novalidate
            hidden
          >

            <div class="dn-login-field">

              <label for="login-email">
                ${B("email")}
              </label>

              <input
                id="login-email"
                name="email"
                type="email"
                dir="ltr"
                autocomplete="email"
                placeholder="${B("emailPlaceholder")}"
                required
              />

            </div>

            <div class="dn-login-field">

              <label for="login-password">
                ${B("password")}
              </label>

              <div class="dn-login-password-wrap">

                <input
                  id="login-password"
                  name="password"
                  type="password"
                  dir="ltr"
                  autocomplete="current-password"
                  placeholder="${B("passwordPlaceholder")}"
                  required
                />

                <button
                  type="button"
                  class="dn-login-password-toggle"
                  data-password-toggle
                  aria-label="${B("password")}"
                  aria-pressed="false"
                >

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
                    <path
                      d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"
                    />
                    <circle cx="12" cy="12" r="3"/>
                  </svg>

                </button>

              </div>

            </div>

            <button
              class="dn-login-submit"
              type="submit"
              data-login-email-submit
            >
              <span>${B("signIn")}</span>
              <span aria-hidden="true">→</span>
            </button>

          </form>

          <!-- FEEDBACK -->

          <p
            class="dn-login-feedback"
            data-form-feedback
            role="status"
            aria-live="polite"
            hidden
          ></p>

          <!-- REGISTER -->

          <div class="dn-login-footer">

            <span>
              ${B("newPatient")}
            </span>

            <a href="/register">
              ${B("createAccount")}
            </a>

          </div>

          <!-- FORGOT PASSWORD -->

          <a
            class="dn-login-forgot-mobile"
            href="/forgot-password"
          >
            ${B("forgotPassword")}
          </a>

        </section>

      </div>

    </main>
  `}function xn(){const e=document.querySelector('[data-portal-page="login"]');if(!e)return()=>{};const t=new AbortController,{signal:a}=t,o=I=>e.querySelector(I),n=o("#dp-login-phone-form"),i=o("#dp-login-otp-form"),r=o("#dp-login-email-form"),l=o("#login-phone"),b=o("#login-code"),u=o("#login-email"),d=o("#login-password"),c=o("[data-login-resend]"),h=o("[data-login-countdown]"),s=o("[data-form-feedback]");let g="phone",m=null,f=!1,v=!1,y=null;function w(I,F="note"){s.hidden=!1,s.textContent=I,s.dataset.type=F}function $(){s.hidden=!0,s.textContent="",delete s.dataset.type}const T=()=>Math.max(0,Math.ceil((K.expiresAt-Date.now())/1e3));function P(){o("[data-login-send]").disabled=v,o("[data-login-verify]").disabled=v,o("[data-login-email-submit]").disabled=v,c.disabled=v||T()>0,h.textContent=T()>0?`(${T()}s)`:"",e.querySelectorAll("[data-login-method]").forEach(I=>{I.disabled=v})}function _(I){v=I,e.setAttribute("aria-busy",String(I)),P()}function x(){n.hidden=g!=="phone"||f,i.hidden=g!=="phone"||!f,r.hidden=g!=="email",e.querySelectorAll("[data-login-method]").forEach(I=>{const F=I.dataset.loginMethod===g;I.classList.toggle("is-active",F),I.setAttribute("aria-pressed",String(F))}),P()}function C(){y!==null&&clearInterval(y),y=null}function A(){C(),P(),T()!==0&&(y=setInterval(()=>{(a.aborted||T()===0)&&C(),P()},1e3))}function E(){f=!0,b.value="",o("[data-login-phone-label]").textContent=m,x(),g==="phone"&&b.focus()}async function k(I=!1){if(v||a.aborted)return;const F=I?m:An(l.value);if(!F){w(p("auth.login.invalidPhone"),"error");return}m=F,_(!0),$();try{const L=await He.sendCode(m,a);if(a.aborted)return;if(!ze(L))throw new Error("SEND_CODE_FAILED");K.phone=m,K.expiresAt=Date.now()+12e4,E(),A(),w(p(I?"auth.login.resent":"auth.login.sent"))}catch(L){a.aborted||w(Ge(L,"send"),"error")}finally{a.aborted||_(!1)}}return e.querySelectorAll("[data-login-method]").forEach(I=>{I.addEventListener("click",()=>{v||(g=I.dataset.loginMethod,$(),x())},{signal:a})}),n.addEventListener("submit",I=>{I.preventDefault(),k()},{signal:a}),i.addEventListener("submit",async I=>{if(I.preventDefault(),v||a.aborted)return;const F=At(b.value);if(F.length!==6){w(p("auth.login.invalidCodeFormat"),"error");return}if(!m){w(p("auth.login.invalidPhone"),"error");return}_(!0),$();try{const L=await He.verifyCode(m,F,a);if(a.aborted)return;if(!ze(L))throw new Error("VERIFY_FAILED");C(),Ct(L)}catch(L){a.aborted||w((L==null?void 0:L.message)==="AUTH_TOKEN_MISSING"?p("auth.login.invalidApiToken"):Ge(L,"verify"),"error")}finally{a.aborted||_(!1)}},{signal:a}),r.addEventListener("submit",async I=>{if(I.preventDefault(),v||a.aborted)return;const F=u.value.trim(),L=d.value;if(!F||!u.checkValidity()){w(p("auth.login.invalidEmail"),"error");return}if(!L){w(p("auth.login.enterPassword"),"error");return}_(!0),$();try{const re=await He.loginWithEmail(F,L,a);if(a.aborted)return;if(!ze(re))throw new Error("LOGIN_FAILED");C(),Ct(re)}catch(re){a.aborted||w((re==null?void 0:re.message)==="AUTH_TOKEN_MISSING"?p("auth.login.invalidApiToken"):Ge(re,"email"),"error")}finally{a.aborted||_(!1)}},{signal:a}),b.addEventListener("input",()=>{b.value=At(b.value)},{signal:a}),o("[data-login-edit]").addEventListener("click",()=>{v||(f=!1,K.phone=null,K.expiresAt=0,C(),$(),x(),l.focus())},{signal:a}),c.addEventListener("click",()=>{!v&&!c.disabled&&k(!0)},{signal:a}),o("[data-password-toggle]").addEventListener("click",I=>{const F=d.type==="password";d.type=F?"text":"password",I.currentTarget.setAttribute("aria-pressed",String(F)),d.focus()},{signal:a}),new URLSearchParams(window.location.search).get("expired")==="1"&&w(p("auth.sessionExpired"),"error"),K.phone&&K.expiresAt>Date.now()?(m=K.phone,l.value=m,E(),A()):(K.phone=null,K.expiresAt=0,x()),()=>{t.abort(),C()}}const O={name:"",phone:"",referralCode:"",step:"details",expiresAt:0},ra=()=>G()==="fa"?"fa":"en",Pn=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),U=e=>Pn(p(`auth.register.${e}`));function sa(e){return String(e??"").replace(/[۰-۹]/g,t=>String(t.charCodeAt(0)-1776)).replace(/[٠-٩]/g,t=>String(t.charCodeAt(0)-1632))}function Ln(e){const t=sa(e).replace(/[\s()-]/g,"").replace(/^(?:\+98|0098|98)/,"0");return/^09\d{9}$/.test(t)?t:null}function xt(e){return sa(e).replace(/\D/g,"").slice(0,6)}function Pt(e,t){const a=Number((e==null?void 0:e.status)??0);return a===429?p("auth.register.tooMany"):a===408?p("auth.register.timeout"):a===0?p("auth.register.networkError"):a>=500?p("auth.register.serverError"):a===409&&t==="send"?p("auth.register.alreadyRegistered"):t==="verify"&&[400,401,403,410,422].includes(a)?p("auth.register.invalidCode"):p(a===422?"auth.register.invalidData":"auth.register.requestFailed")}function Dn(){O.name="",O.phone="",O.referralCode="",O.step="details",O.expiresAt=0}function In(){return`
    <main
      class="dn-login-page dn-auth-page"
      data-portal-page="register"
      data-no-translate
      dir="${ra()==="fa"?"rtl":"ltr"}"
    >
      <div class="dn-login-container">

        <!-- LOGO -->

        <a
          href="/"
          class="dn-login-brand"
          aria-label="Dentistry"
        >
          <img
            src="/asset/img/logo.png"
            loading="eager"
            alt="Dentistry Logo"
            class="dn-login-logo"
          />
        </a>

        <!-- CARD -->

        <section
          class="dn-login-card"
          aria-labelledby="dn-register-title"
        >

          <div class="dn-login-heading">

            <h1 id="dn-register-title">
              ${U("title")}
            </h1>

            <p>
              ${U("subtitle")}
            </p>

          </div>

          <!-- STEP 1: REGISTRATION -->

          <form
            id="dp-register-form"
            class="dn-login-form"
            data-register-step="details"
            novalidate
          >

            <div class="dn-login-field">

              <label for="register-name">
                ${U("name")}
              </label>

              <input
                id="register-name"
                name="name"
                type="text"
                autocomplete="name"
                minlength="2"
                maxlength="100"
                placeholder="${U("namePlaceholder")}"
                required
              />

            </div>

            <div class="dn-login-field">

              <label for="register-phone">
                ${U("phone")}
              </label>

              <input
                id="register-phone"
                name="phone"
                type="tel"
                autocomplete="tel"
                inputmode="tel"
                dir="ltr"
                maxlength="20"
                placeholder="09123456789"
                required
              />

            </div>

            <div class="dn-login-field">

              <label for="register-referral">
                ${U("referral")}
              </label>

              <input
                id="register-referral"
                name="referral_code"
                type="text"
                maxlength="64"
                placeholder="${U("referralPlaceholder")}"
              />

            </div>

            <button
              class="dn-login-submit"
              type="submit"
              data-register-send
            >
              <span>
                ${U("sendCode")}
              </span>

              <span aria-hidden="true">→</span>
            </button>

          </form>

          <!-- STEP 2: OTP VERIFICATION -->

          <form
            id="dp-register-verify-form"
            class="dn-login-form"
            data-register-step="verify"
            hidden
            novalidate
          >

            <p class="dn-login-instruction">

              ${U("codeSentTo")}

              <strong
                data-register-phone-label
                dir="ltr"
              ></strong>

            </p>

            <div class="dn-login-field">

              <label for="register-code">
                ${U("code")}
              </label>

              <input
                id="register-code"
                name="code"
                type="text"
                dir="ltr"
                inputmode="numeric"
                autocomplete="one-time-code"
                maxlength="6"
                placeholder="${U("codePlaceholder")}"
                required
              />

              <small>
                ${U("codeValidity")}
              </small>

            </div>

            <button
              class="dn-login-submit"
              type="submit"
              data-register-verify
            >
              <span>
                ${U("verify")}
              </span>

              <span aria-hidden="true">→</span>
            </button>

            <div class="dn-login-otp-actions">

              <button
                class="dn-login-text-button"
                type="button"
                data-register-edit
              >
                ${U("editPhone")}
              </button>

              <button
                class="dn-login-text-button"
                type="button"
                data-register-resend
                disabled
              >
                ${U("resend")}

                <span
                  data-register-countdown
                  dir="ltr"
                ></span>
              </button>

            </div>

          </form>

          <!-- COMPLETE -->

          <div
            data-register-step="complete"
            class="dn-auth-complete"
            hidden
          >

            <p
              class="dn-login-feedback dn-auth-success"
              role="status"
            >
              ${U("success")}
            </p>

            <a
              href="/login"
              class="dn-login-submit dn-auth-button-link"
            >
              ${U("goToLogin")}
              <span aria-hidden="true">→</span>
            </a>

          </div>

          <!-- FEEDBACK -->

          <p
            class="dn-login-feedback"
            data-form-feedback
            role="status"
            aria-live="polite"
            hidden
          ></p>

          <!-- FOOTER -->

          <div class="dn-login-footer">

            <span>
              ${U("haveAccount")}
            </span>

            <a href="/login">
              ${U("signIn")}
            </a>

          </div>

        </section>

      </div>
    </main>
  `}function qn(){const e=document.querySelector('[data-portal-page="register"]');if(!e)return()=>{};const t=new AbortController,{signal:a}=t,o=x=>e.querySelector(x),n=o("#dp-register-form"),i=o("#dp-register-verify-form"),r=o("#register-name"),l=o("#register-phone"),b=o("#register-referral"),u=o("#register-code"),d=o("[data-register-resend]"),c=o("[data-register-countdown]"),h=o("[data-form-feedback]");let s=!1,g=null;function m(x,C="note"){h.hidden=!1,h.textContent=x,h.dataset.type=C}function f(){h.hidden=!0,h.textContent="",delete h.dataset.type}function v(){return Math.max(0,Math.ceil((O.expiresAt-Date.now())/1e3))}function y(){o("[data-register-send]").disabled=s,o("[data-register-verify]").disabled=s,o("[data-register-edit]").disabled=s,d.disabled=s||v()>0,c.textContent=v()>0?`(${v()}s)`:""}function w(x){s=x,e.setAttribute("aria-busy",String(x)),y()}function $(x){O.step=x,e.querySelectorAll("[data-register-step]").forEach(C=>{C.hidden=C.dataset.registerStep!==x}),o("[data-register-phone-label]").textContent=O.phone,y()}function T(){g!==null&&clearInterval(g),g=null}function P(){T(),y(),v()!==0&&(g=setInterval(()=>{(a.aborted||v()===0)&&T(),y()},1e3))}async function _(x=!1){if(s||a.aborted||x&&v()>0)return;const C=x?O.name:r.value.trim(),A=Ln(x?O.phone:l.value),E=x?O.referralCode:b.value.trim();if(C.length<2)return m(p("auth.register.invalidName"),"error");if(!A)return m(p("auth.register.invalidPhone"),"error");w(!0),f();try{const k=await gt.sendCode(C,A,E,a);if(a.aborted)return;if((k==null?void 0:k.success)===!1||(k==null?void 0:k.status)===!1)throw new Error("REGISTER_SEND_FAILED");O.name=C,O.phone=A,O.referralCode=E,O.expiresAt=Date.now()+2*60*1e3,u.value="",$("verify"),P(),m(p(x?"auth.register.resent":"auth.register.sent")),u.focus()}catch(k){a.aborted||m(Pt(k,"send"),"error")}finally{a.aborted||w(!1)}}return n.addEventListener("submit",x=>{x.preventDefault(),_()},{signal:a}),i.addEventListener("submit",async x=>{var A,E;if(x.preventDefault(),s||a.aborted)return;const C=xt(u.value);if(C.length!==6)return m(p("auth.register.invalidCodeFormat"),"error");if(!O.phone)return $("details"),m(p("auth.register.sessionExpired"),"error");w(!0),f();try{const k=await gt.verifyCode(O.phone,C,O.name,O.referralCode,a);if(a.aborted)return;if((k==null?void 0:k.success)===!1||(k==null?void 0:k.status)===!1)throw new Error("REGISTER_VERIFY_FAILED");if(!((A=k==null?void 0:k.data)!=null&&A.token)||!((E=k==null?void 0:k.data)!=null&&E.client))throw new Error("INVALID_REGISTER_RESPONSE");nt(k),rt(),Dn(),T(),window.location.assign(`/dashboard?lang=${ra()}`)}catch(k){a.aborted||m((k==null?void 0:k.message)==="INVALID_REGISTER_RESPONSE"?p("auth.register.requestFailed"):Pt(k,"verify"),"error")}finally{a.aborted||w(!1)}},{signal:a}),o("[data-register-edit]").addEventListener("click",()=>{s||(T(),O.expiresAt=0,O.step="details",u.value="",f(),$("details"),l.focus())},{signal:a}),d.addEventListener("click",()=>{!s&&!d.disabled&&_(!0)},{signal:a}),u.addEventListener("input",()=>{u.value=xt(u.value)},{signal:a}),r.value=O.name,l.value=O.phone,b.value=O.referralCode,O.step==="verify"&&O.phone?($("verify"),P()):$("details"),()=>{t.abort(),T()}}const Nn=60*1e3,D={step:"phone",phone:"",code:"",resetToken:"",resetExpiresAt:0,resendAfter:0},la=()=>G()==="fa"?"fa":"en",Rn=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),V=e=>Rn(p(`auth.forgot.${e}`));function ca(e){return String(e??"").replace(/[۰-۹]/g,t=>String(t.charCodeAt(0)-1776)).replace(/[٠-٩]/g,t=>String(t.charCodeAt(0)-1632))}function Lt(e){const t=ca(e).replace(/[\s()-]/g,"").replace(/^(?:\+98|0098|98)/,"0");return/^09\d{9}$/.test(t)?t:null}function Dt(e){return ca(e).replace(/\D/g,"").slice(0,6)}function We(){D.step="phone",D.phone="",D.code="",D.resetToken="",D.resetExpiresAt=0,D.resendAfter=0}function Ze(e,t){const a=Number((e==null?void 0:e.status)??0),o=(e==null?void 0:e.errors)??{};return a===429?p("auth.forgot.tooMany"):a===408?p("auth.forgot.timeout"):a>=500?p("auth.forgot.serverError"):a===0?p("auth.forgot.networkError"):a===410||t==="reset"&&o.reset_token?p("auth.forgot.resetTokenExpired"):t==="verify"&&[400,401,403,422].includes(a)||t==="reset"&&[400,401,403].includes(a)?p("auth.forgot.invalidCode"):p(a===422?t==="send"?"auth.forgot.invalidPhone":"auth.forgot.invalidData":"auth.forgot.requestFailed")}function It(e,t,a){return`
    <div class="dn-login-field">

      <label for="${e}">
        ${V(t)}
      </label>

      <div class="dn-login-password-wrap">

        <input
          id="${e}"
          name="${e}"
          type="password"
          minlength="8"
          autocomplete="new-password"
          placeholder="${V(a)}"
          required
        />

        <button
          type="button"
          class="dn-login-password-toggle"
          data-auth-password-toggle="${e}"
          aria-label="${V(t)}"
          aria-pressed="false"
        >

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
            <path
              d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"
            />
            <circle cx="12" cy="12" r="3"/>
          </svg>

        </button>

      </div>

    </div>
  `}function On(){return`
    <main
      class="dn-login-page dn-auth-page"
      data-portal-page="forgot-password"
      data-no-translate
      dir="${la()==="fa"?"rtl":"ltr"}"
    >

      <div class="dn-login-container">

        <!-- LOGO -->

        <a
          href="/"
          class="dn-login-brand"
          aria-label="Dentistry"
        >
          <img
            src="/asset/img/logo.png"
            loading="eager"
            alt="Dentistry Logo"
            class="dn-login-logo"
          />
        </a>

        <!-- CARD -->

        <section
          class="dn-login-card"
          aria-labelledby="dn-forgot-title"
        >

          <div class="dn-login-heading">

            <h1 id="dn-forgot-title">
              ${V("title")}
            </h1>

            <p>
              ${V("subtitle")}
            </p>

          </div>

          <!-- STEP 1: PHONE -->

          <form
            id="dp-forgot-phone-form"
            class="dn-login-form"
            data-forgot-step="phone"
            novalidate
          >

            <div class="dn-login-field">

              <label for="forgot-phone">
                ${V("phone")}
              </label>

              <input
                id="forgot-phone"
                name="phone"
                type="tel"
                inputmode="tel"
                dir="ltr"
                autocomplete="tel"
                maxlength="20"
                placeholder="09123456789"
                required
              />

            </div>

            <button
              class="dn-login-submit"
              type="submit"
              data-forgot-send
            >

              <span>
                ${V("sendCode")}
              </span>

              <span aria-hidden="true">→</span>

            </button>

          </form>

          <!-- STEP 2: VERIFY OTP -->

          <form
            id="dp-forgot-otp-form"
            class="dn-login-form"
            data-forgot-step="otp"
            hidden
            novalidate
          >

            <p class="dn-login-instruction">

              ${V("codeSentTo")}

              <strong
                data-forgot-phone-label
                dir="ltr"
              ></strong>

            </p>

            <div class="dn-login-field">

              <label for="forgot-code">
                ${V("code")}
              </label>

              <input
                id="forgot-code"
                name="code"
                type="text"
                dir="ltr"
                inputmode="numeric"
                autocomplete="one-time-code"
                maxlength="6"
                placeholder="${V("codePlaceholder")}"
                required
              />

            </div>

            <button
              class="dn-login-submit"
              type="submit"
              data-forgot-verify
            >

              <span>
                ${V("verify")}
              </span>

              <span aria-hidden="true">→</span>

            </button>

            <div class="dn-login-otp-actions">

              <button
                class="dn-login-text-button"
                type="button"
                data-forgot-edit
              >
                ${V("changePhone")}
              </button>

              <button
                class="dn-login-text-button"
                type="button"
                data-forgot-resend
                disabled
              >

                ${V("resend")}

                <span
                  data-forgot-countdown
                  dir="ltr"
                ></span>

              </button>

            </div>

          </form>

          <!-- STEP 3: NEW PASSWORD -->

          <form
            id="dp-forgot-reset-form"
            class="dn-login-form"
            data-forgot-step="reset"
            hidden
            novalidate
          >

            <p class="dn-login-instruction">

              ${V("verifiedPhone")}

              <strong
                data-forgot-phone-label
                dir="ltr"
              ></strong>

            </p>

            ${It("forgot-password","newPassword","newPasswordPlaceholder")}

            ${It("forgot-confirm","confirmPassword","confirmPlaceholder")}

            <button
              class="dn-login-submit"
              type="submit"
              data-forgot-reset
            >

              <span>
                ${V("resetPassword")}
              </span>

              <span aria-hidden="true">→</span>

            </button>

          </form>

          <!-- STEP 4: SUCCESS -->

          <div
            data-forgot-step="done"
            class="dn-auth-complete"
            hidden
          >

            <p
              class="dn-login-feedback dn-auth-success"
              role="status"
            >
              ${V("success")}
            </p>

            <a
              class="dn-login-submit dn-auth-button-link"
              href="/login"
            >
              ${V("backToLogin")}

              <span aria-hidden="true">→</span>
            </a>

          </div>

          <!-- FEEDBACK -->

          <p
            class="dn-login-feedback"
            data-form-feedback
            role="status"
            aria-live="polite"
            hidden
          ></p>

          <!-- FOOTER -->

          <div class="dn-login-footer">

            <a href="/login">
              ${V("backToLogin")}
            </a>

          </div>

        </section>

      </div>

    </main>
  `}function Mn(){const e=document.querySelector('[data-portal-page="forgot-password"]');if(!e)return()=>{};const t=new AbortController,{signal:a}=t,o=A=>e.querySelector(A),n=o("#dp-forgot-phone-form"),i=o("#dp-forgot-otp-form"),r=o("#dp-forgot-reset-form"),l=o("#forgot-phone"),b=o("#forgot-code"),u=o("#forgot-password"),d=o("#forgot-confirm"),c=o("[data-forgot-resend]"),h=o("[data-forgot-countdown]"),s=o("[data-form-feedback]");let g=!1,m=null;function f(A,E="note"){s.hidden=!1,s.textContent=A,s.dataset.type=E}function v(){s.hidden=!0,s.textContent="",delete s.dataset.type}const y=()=>Math.max(0,Math.ceil((D.resendAfter-Date.now())/1e3));function w(){["[data-forgot-send]","[data-forgot-verify]","[data-forgot-reset]","[data-forgot-edit]"].forEach(E=>{o(E).disabled=g}),c.disabled=g||y()>0,h.textContent=y()>0?`(${y()}s)`:""}function $(A){g=A,e.setAttribute("aria-busy",String(A)),w()}function T(A){D.step=A,e.querySelectorAll("[data-forgot-step]").forEach(E=>{E.hidden=E.dataset.forgotStep!==A}),e.querySelectorAll("[data-forgot-phone-label]").forEach(E=>{E.textContent=D.phone}),w()}function P(){m!==null&&clearInterval(m),m=null}function _(){P(),w(),y()!==0&&(m=setInterval(()=>{(a.aborted||y()===0)&&P(),w()},1e3))}function x(){P(),We(),l.value="",b.value="",u.value="",d.value="",T("phone")}async function C(A=!1){if(g||a.aborted||A&&y()>0)return;const E=Lt(A?D.phone:l.value);if(!E)return f(p("auth.forgot.invalidPhone"),"error");$(!0),v();try{const k=await je.sendCode(E,a);if(a.aborted)return;if((k==null?void 0:k.success)===!1||(k==null?void 0:k.status)===!1)throw new Error("SEND_CODE_FAILED");D.phone=E,D.code="",D.resetToken="",D.resetExpiresAt=0,D.resendAfter=Date.now()+Nn,b.value="",T("otp"),_(),f(p(A?"auth.forgot.resent":"auth.forgot.sent")),b.focus()}catch(k){a.aborted||f(Ze(k,"send"),"error")}finally{a.aborted||$(!1)}}return n.addEventListener("submit",A=>{A.preventDefault(),C()},{signal:a}),i.addEventListener("submit",async A=>{if(A.preventDefault(),g||a.aborted)return;const E=Dt(b.value);if(E.length!==6)return f(p("auth.forgot.invalidCodeFormat"),"error");if(!D.phone)return x(),f(p("auth.forgot.sessionExpired"),"error");$(!0),v();try{const k=await je.verifyCode(D.phone,E,a);if(a.aborted)return;const J=(k==null?void 0:k.data)??{},I=Number(J.expires_in);if((k==null?void 0:k.success)===!1||(k==null?void 0:k.status)===!1||J.verified===!1||typeof J.reset_token!="string"||!J.reset_token.trim()||!Number.isFinite(I)||I<=0||J.phone&&Lt(J.phone)!==D.phone)throw new Error("INVALID_VERIFY_RESPONSE");D.code=E,D.resetToken=J.reset_token,D.resetExpiresAt=Date.now()+I*1e3,b.value="",P(),T("reset"),f(p("auth.forgot.verified")),u.focus()}catch(k){a.aborted||f((k==null?void 0:k.message)==="INVALID_VERIFY_RESPONSE"?p("auth.forgot.requestFailed"):Ze(k,"verify"),"error")}finally{a.aborted||$(!1)}},{signal:a}),r.addEventListener("submit",async A=>{var J,I,F;if(A.preventDefault(),g||a.aborted)return;const E=u.value,k=d.value;if(E.length<8)return f(p("auth.forgot.shortPassword"),"error");if(E!==k)return f(p("auth.forgot.passwordMismatch"),"error");if(!D.phone||!D.code||!D.resetToken)return x(),f(p("auth.forgot.sessionExpired"),"error");if(Date.now()>=D.resetExpiresAt)return x(),f(p("auth.forgot.resetTokenExpired"),"error");$(!0),v();try{const L=await je.resetPassword(D.phone,D.code,D.resetToken,E,k,a);if(a.aborted)return;if((L==null?void 0:L.success)===!1||(L==null?void 0:L.status)===!1)throw new Error("RESET_PASSWORD_FAILED");const re=!!((J=L==null?void 0:L.data)!=null&&J.token&&((I=L==null?void 0:L.data)!=null&&I.client));let Ue=!1;if(re)try{nt(L),rt(),Ue=!0}catch{Ue=!1}if(We(),b.value="",u.value="",d.value="",Ue){window.location.assign(`/dashboard?lang=${la()}`);return}T("done"),v()}catch(L){a.aborted||((L==null?void 0:L.status)===410||(F=L==null?void 0:L.errors)!=null&&F.reset_token?(x(),f(p("auth.forgot.resetTokenExpired"),"error")):f(Ze(L,"reset"),"error"))}finally{a.aborted||$(!1)}},{signal:a}),o("[data-forgot-edit]").addEventListener("click",()=>{if(g)return;const A=D.phone;x(),l.value=A,v(),l.focus()},{signal:a}),c.addEventListener("click",()=>{!g&&!c.disabled&&C(!0)},{signal:a}),b.addEventListener("input",()=>{b.value=Dt(b.value)},{signal:a}),e.querySelectorAll("[data-auth-password-toggle]").forEach(A=>{A.addEventListener("click",()=>{const E=document.getElementById(A.dataset.authPasswordToggle);if(!E)return;const k=E.type==="password";E.type=k?"text":"password",A.setAttribute("aria-pressed",String(k)),E.focus()},{signal:a})}),D.step==="reset"&&Date.now()>=D.resetExpiresAt&&We(),l.value=D.phone,T(D.step),D.step==="otp"&&_(),()=>{t.abort(),P(),u.value="",d.value=""}}function qt(e){const t=e==null?void 0:e.data;return[t==null?void 0:t.client,t==null?void 0:t.profile,t==null?void 0:t.user,t].find(o=>o&&typeof o=="object"&&!Array.isArray(o)&&(o.id!==void 0||o.phone!==void 0||o.name!==void 0))||null}function _n(){return`
    <div class="dp-white-card dp-patient-profile">

      <div class="dp-card-head">
        <div>
          <h2>${p("profile.information")}</h2>
        </div>

        <button
          type="button"
          class="dp-btn dp-btn-outline dp-btn-small"
          data-profile-reload
        >
          ${p("profile.reload")}
        </button>
      </div>

      <p
        data-profile-status
        role="status"
        aria-live="polite"
        class="dp-profile-status"
      >
        ${p("profile.loading")}
      </p>

      <div class="dp-profile-grid">
        <div>
          <span>${p("profile.name")}</span>
          <strong data-profile-name>—</strong>
        </div>

        <div>
          <span>${p("profile.email")}</span>
          <strong data-profile-email>—</strong>
        </div>

        <div>
          <span>${p("profile.phone")}</span>
          <strong data-profile-phone dir="ltr">—</strong>
        </div>

        <div>
          <span>${p("profile.referral")}</span>
          <strong data-profile-referral>—</strong>
        </div>
      </div>

      <p class="dp-profile-hint">
        ${p("profile.phoneHint")}
      </p>

    </div>
  `}function Bn(e){if(!e)return()=>{};const t=new AbortController,{signal:a}=t,o=e.querySelector("[data-profile-status]"),n=e.querySelector("[data-profile-reload]");let i=!1;function r(d,c=!1){!o||a.aborted||(o.textContent=d,o.dataset.state=c?"error":"normal")}function l(d){const c={"[data-profile-name]":d.name||"—","[data-profile-email]":d.email||p("profile.notSet"),"[data-profile-phone]":d.phone||"—","[data-profile-referral]":d.referral_code||"—"};for(const[g,m]of Object.entries(c)){const f=e.querySelector(g);f&&(f.textContent=String(m))}const h=e.querySelector("[data-dashboard-name]");h&&(h.textContent=d.name||"—");const s=e.querySelector("[data-patient-avatar]");if(s){const g=String(d.name||"").trim();s.textContent=g?g.slice(0,2):"—"}}async function b(d){try{return await d()}catch(c){if(a.aborted||(c==null?void 0:c.status)!==401)throw c;try{const h=await De.refresh(a);return a.aborted?null:(va(h),await d())}catch(h){if(a.aborted)return null;throw qe(),window.location.assign("/login"),h}}}async function u(){if(!(i||a.aborted)){if(!Te()){window.location.assign("/login");return}i=!0,n&&(n.disabled=!0),r(p("profile.loading"));try{const d=await b(()=>De.me(a));if(a.aborted)return;const c=qt(d);let h=null;try{const g=await b(()=>De.getProfile(a));if(a.aborted)return;h=qt(g)}catch(g){if(a.aborted)return;if((g==null?void 0:g.status)===401)throw g}const s={...c||{},...h||{}};if(!s.id&&!s.phone&&!s.name)throw new Error("PROFILE_DATA_MISSING");l(s),r(p(h?"profile.loaded":"profile.partial"))}catch(d){if(a.aborted)return;if((d==null?void 0:d.status)===401){qe(),window.location.assign("/login");return}r(p("profile.loadError"),!0)}finally{i=!1,!a.aborted&&n&&(n.disabled=!1)}}}return n==null||n.addEventListener("click",()=>void u(),{signal:a}),u(),()=>t.abort()}const Fn={en:{portal:"Patient portal",workspace:"YOUR WORKSPACE",general:"GENERAL",account:"ACCOUNT",overview:"Overview",appointments:"Appointments",treatments:"Treatment plans",records:"Dental records",billing:"Payments & invoices",profile:"My profile",menu:"Open navigation",close:"Close navigation",language:"Language",logout:"Sign out",loggingOut:"Signing out…",support:"Need a hand?",supportText:"Our clinic team is here to help you.",contact:"Contact clinic",greeting:"Welcome to your space",subtitle:"Everything about your dental care, in one calm place.",healthTag:"YOUR CARE, SIMPLIFIED",yourNextVisit:"Your next appointment",noNextVisit:"No upcoming appointment yet",nextVisitHint:"When you book a visit, the details will appear here.",exploreServices:"Explore services",viewAppointments:"View appointments",overviewLabel:"AT A GLANCE",overviewHeading:"Your health overview",upcoming:"Upcoming visits",activePlans:"Active plans",balance:"Amount due",dataPending:"Awaiting connection",currency:"—",quickActions:"Quick actions",quickActionsCopy:"The things you need, just a click away.",actionServices:"Explore treatments",actionServicesCopy:"Learn about available dental services.",actionProfile:"Update your profile",actionProfileCopy:"Keep your contact information current.",actionHelp:"Get in touch",actionHelpCopy:"Ask our team a question.",journey:"Care timeline",journeyCopy:"Your visits and treatment milestones will be here.",gentleReminder:"A little peace of mind",gentleReminderCopy:"Your treatment history is kept in your account. Records will appear only when available and authorized for you.",sectionOverviewEyebrow:"PATIENT HOME",sectionAppointmentsEyebrow:"YOUR SCHEDULE",appointmentTitle:"Appointments",appointmentSubtitle:"Review future and past appointments in one place.",appointmentsEmptyTitle:"Your schedule starts here",appointmentsEmptyCopy:"You have no appointment information to display yet. Once appointment services are connected, your visits will appear here.",sectionTreatmentsEyebrow:"YOUR CARE PLAN",treatmentTitle:"Treatment plans",treatmentSubtitle:"Follow your treatment stages and progress.",treatmentsEmptyTitle:"Your treatment plan, made clear",treatmentsEmptyCopy:"Treatment plans shared with you by the clinic will appear here once available.",sectionRecordsEyebrow:"YOUR HEALTH FILE",recordsTitle:"Dental records",recordsSubtitle:"A private home for your eligible dental history and files.",recordsEmptyTitle:"Your dental history belongs here",recordsEmptyCopy:"Doctor-approved records, documents and dental images will be shown here when available to you.",privacyNote:"Only information authorized for the patient account will be displayed.",sectionBillingEyebrow:"YOUR FINANCES",billingTitle:"Payments & invoices",billingSubtitle:"Understand paid amounts and any upcoming payments.",billingEmptyTitle:"Clear, simple billing",billingEmptyCopy:"Your invoices, deposits and payment history will appear when the billing system is connected.",sectionProfileEyebrow:"YOUR ACCOUNT",profileTitle:"Personal information",profileSubtitle:"Update account details and manage your contact information.",badgeSoon:"Ready for integration",backHome:"Back to website"},fa:{portal:"پرتال بیماران",workspace:"فضای اختصاصی شما",general:"بخش‌های اصلی",account:"حساب کاربری",overview:"نمای کلی",appointments:"نوبت‌های من",treatments:"طرح‌های درمان",records:"پرونده دندان‌پزشکی",billing:"پرداخت‌ها و فاکتورها",profile:"پروفایل من",menu:"باز کردن منو",close:"بستن منو",language:"زبان",logout:"خروج از حساب",loggingOut:"در حال خروج…",support:"سوالی دارید؟",supportText:"تیم کلینیک آماده پاسخ‌گویی به شماست.",contact:"تماس با کلینیک",greeting:"به فضای شخصی خود خوش آمدید",subtitle:"همه چیز درباره مراقبت از دندان‌هایتان، در یک محیط آرام و ساده.",healthTag:"مراقبت آسان‌تر از همیشه",yourNextVisit:"نوبت بعدی شما",noNextVisit:"هنوز نوبت آینده‌ای ثبت نشده",nextVisitHint:"پس از رزرو نوبت، جزئیات آن در این بخش نمایش داده می‌شود.",exploreServices:"مشاهده خدمات",viewAppointments:"مشاهده نوبت‌ها",overviewLabel:"در یک نگاه",overviewHeading:"خلاصه وضعیت شما",upcoming:"نوبت‌های آینده",activePlans:"درمان‌های فعال",balance:"مانده قابل پرداخت",dataPending:"در انتظار اتصال",currency:"—",quickActions:"دسترسی سریع",quickActionsCopy:"کارهای مهم با چند کلیک ساده.",actionServices:"مشاهده خدمات",actionServicesCopy:"با خدمات دندان‌پزشکی آشنا شوید.",actionProfile:"ویرایش پروفایل",actionProfileCopy:"اطلاعات تماس خود را به‌روز نگه دارید.",actionHelp:"ارتباط با ما",actionHelpCopy:"سوال خود را از تیم کلینیک بپرسید.",journey:"مسیر درمان",journeyCopy:"سوابق مراجعه و مراحل درمان اینجا نمایش داده می‌شوند.",gentleReminder:"اطمینان خاطر شما",gentleReminderCopy:"سوابق درمان شما در حساب کاربری نگهداری می‌شود و فقط اطلاعات مجاز و در دسترس نمایش داده خواهد شد.",sectionOverviewEyebrow:"خانه بیمار",sectionAppointmentsEyebrow:"برنامه نوبت‌ها",appointmentTitle:"نوبت‌های من",appointmentSubtitle:"نوبت‌های آینده و مراجعات قبلی را یکجا ببینید.",appointmentsEmptyTitle:"برنامه نوبت‌های شما از اینجا شروع می‌شود",appointmentsEmptyCopy:"در حال حاضر اطلاعاتی برای نمایش وجود ندارد. پس از اتصال سیستم نوبت‌دهی، نوبت‌ها اینجا نمایش داده می‌شوند.",sectionTreatmentsEyebrow:"برنامه درمان شما",treatmentTitle:"طرح‌های درمان",treatmentSubtitle:"مراحل و پیشرفت درمان خود را دنبال کنید.",treatmentsEmptyTitle:"برنامه درمانی روشن و منظم",treatmentsEmptyCopy:"طرح‌های درمانی که کلینیک با شما به اشتراک می‌گذارد، در این بخش نمایش داده خواهد شد.",sectionRecordsEyebrow:"پرونده سلامت شما",recordsTitle:"پرونده دندان‌پزشکی",recordsSubtitle:"محیطی خصوصی برای سوابق و فایل‌های پزشکی مجاز شما.",recordsEmptyTitle:"سوابق دندان‌پزشکی شما اینجا قرار می‌گیرد",recordsEmptyCopy:"سوابق، مدارک و تصاویر دندان‌پزشکی که پزشک اجازه دسترسی داده باشد، در این قسمت نمایش داده می‌شوند.",privacyNote:"فقط اطلاعاتی نمایش داده می‌شود که دسترسی آن برای حساب بیمار مجاز باشد.",sectionBillingEyebrow:"امور مالی شما",billingTitle:"پرداخت‌ها و فاکتورها",billingSubtitle:"وضعیت پرداخت‌ها و مبلغ‌های باقی‌مانده را بررسی کنید.",billingEmptyTitle:"صورت‌حساب شفاف و ساده",billingEmptyCopy:"فاکتورها، بیعانه‌ها و سوابق پرداخت پس از اتصال سیستم مالی در این بخش نمایش داده می‌شوند.",sectionProfileEyebrow:"حساب شما",profileTitle:"اطلاعات شخصی",profileSubtitle:"مشخصات حساب و اطلاعات تماس خود را مدیریت کنید.",badgeSoon:"آماده اتصال",backHome:"بازگشت به سایت"}},dt=()=>G()==="fa"?"fa":"en",Un=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);function Ie(e){const t=p(`dashboard.${e}`);return t===`dashboard.${e}`?Fn[dt()][e]??e:t}const S=e=>Un(Ie(e)),Nt={grid:'<rect x="3" y="3" width="7" height="7" rx="1.4"/><rect x="14" y="3" width="7" height="7" rx="1.4"/><rect x="3" y="14" width="7" height="7" rx="1.4"/><rect x="14" y="14" width="7" height="7" rx="1.4"/>',calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/>',tooth:'<path d="M12 4c2.4 0 3.2-1.3 5.7-1.3C22.5 2.7 24 6.6 22.5 11c-1.3 4-2.4 10-5.6 10-2 0-2.2-7-4.9-7S9.1 21 7.1 21c-3.2 0-4.3-6-5.6-10C0 6.6 1.5 2.7 6.3 2.7 8.8 2.7 9.6 4 12 4Z"/>',file:'<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M13 2v7h7M8 13h8M8 17h5"/>',card:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20m-15 5h4"/>',user:'<circle cx="12" cy="8" r="4"/><path d="M4.5 21a7.5 7.5 0 0 1 15 0"/>',arrow:'<path d="M5 12h14m-6-6 6 6-6 6"/>',chevron:'<path d="m9 18 6-6-6-6"/>',plus:'<path d="M12 5v14M5 12h14"/>',menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',close:'<path d="M18 6 6 18M6 6l12 12"/>',logout:'<path d="M10 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5m4-4 4-4-4-4m4 4H9"/>',heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',shield:'<path d="m12 2 8 4v6c0 5.1-3.5 8.3-8 10-4.5-1.7-8-4.9-8-10V6l8-4Z"/><path d="m9 12 2 2 4-4"/>',help:'<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 4.3 1.7c-1.1 1-1.8 1.4-1.8 3.1M12 17h.01"/>',spark:'<path d="m12 2 2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2L12 2Z"/>'},M=(e,t="")=>`<svg class="dn-icon ${t}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${Nt[e]||Nt.grid}</svg>`,Me=[["overview","overview","grid"],["appointments","appointments","calendar"],["treatments","treatments","tooth"],["records","records","file"],["billing","billing","card"],["profile","profile","user"]],Rt=new Set(Me.map(([e])=>e)),Hn=new Set(["overview","appointments","records","profile"]);function Ot(e,t,a,o=""){const n=e==="overview";return`<button type="button" class="dn-nav-button${n?" is-active":""}" data-dashboard-tab="${e}" aria-current="${n?"page":"false"}" ${o?`data-nav-placement="${o}"`:""}>
    <span class="dn-nav-icon">${M(a)}</span><span class="dn-nav-label">${S(t)}</span>
    ${o==="sidebar"?`<span class="dn-nav-trailing">${M("chevron")}</span>`:""}
  </button>`}function ye(e,t,a){return`<div class="dn-page-heading"><div class="dn-eyebrow">${S(e)}</div><h1>${S(t)}</h1><p>${S(a)}</p></div>`}function Ke(e,t){return`<article class="dn-stat"><span class="dn-stat-symbol">${M(e)}</span><span class="dn-stat-label">${S(t)}</span><strong data-dashboard-stat="${t}" aria-label="${S("dataPending")}">—</strong><small>${S("dataPending")}</small></article>`}function xe(e,t,a,o=!1){return`<div class="dn-empty-state" data-dashboard-empty>
    <div class="dn-empty-visual" aria-hidden="true"><span>${M(e)}</span><i></i><i></i></div>
    <h2>${S(t)}</h2><p>${S(a)}</p>
    ${o?`<a class="dn-button dn-button-primary" href="/service">${M("plus")}${S("exploreServices")}${M("arrow","dn-button-arrow")}</a>`:""}
  </div>`}function Qe(e,t,a,o,n){const i=o==="tab"?'button type="button" data-dashboard-action="profile"':`a href="${n}"`,r=o==="tab"?"button":"a";return`<${i} class="dn-action-card"><span class="dn-action-icon">${M(a)}</span><span class="dn-action-copy"><strong>${S(e)}</strong><small>${S(t)}</small></span><span class="dn-action-arrow">${M("arrow")}</span></${r}>`}function jn(){return`<main class="dentistry-portal dn-dashboard" data-portal-page="dashboard" data-no-translate dir="${dt()==="fa"?"rtl":"ltr"}">
    <div class="dn-dashboard-shell">
      <div class="dn-sidebar-scrim" data-sidebar-scrim hidden></div>
      <aside class="dn-sidebar" id="dn-dashboard-sidebar" aria-label="${S("portal")}">
        <a href="/" class="dn-brand" aria-label="${S("backHome")}"><img src="/asset/img/logo.png" alt="Dentistry" loading="eager"/><span>${S("portal")}</span></a>
        <div class="dn-sidebar-scroll">
          <div class="dn-nav-caption">${S("workspace")}</div>
          <nav class="dn-nav" aria-label="${S("general")}">
            ${Me.map(([e,t,a])=>Ot(e,t,a,"sidebar")).join("")}
          </nav>
        </div>
        <div class="dn-sidebar-footer">
          <div class="dn-support-panel"><div class="dn-support-symbol">${M("help")}</div><strong>${S("support")}</strong><p>${S("supportText")}</p><a href="/contact-us">${S("contact")}${M("arrow")}</a></div>
          <button type="button" class="dn-logout" data-dashboard-logout>${M("logout")}<span data-logout-label>${S("logout")}</span></button>
        </div>
      </aside>
      <div class="dn-main">
        <header class="dn-topbar">
          <div class="dn-topbar-left"><button type="button" class="dn-menu-button" data-sidebar-toggle aria-label="${S("menu")}" aria-expanded="false" aria-controls="dn-dashboard-sidebar">${M("menu")}</button><div class="dn-breadcrumb"><span>${S("portal")}</span><span class="dn-breadcrumb-separator">/</span><strong data-current-section>${S("overview")}</strong></div></div>
          <div class="dn-topbar-right"><a class="dn-topbar-site-link" href="/">${S("backHome")}</a><div class="dn-topbar-lang">${Ft("dn-language-switch")}</div><button type="button" class="dn-topbar-avatar" data-dashboard-action="profile" aria-label="${S("profile")}">${M("user")}</button></div>
        </header>
        <div class="dn-content" id="dn-dashboard-content">
          <section class="dn-panel" data-dashboard-panel="overview" aria-label="${S("overview")}">
            <div class="dn-overview-heading"><div><span class="dn-eyebrow">${S("sectionOverviewEyebrow")}</span><h1>${S("greeting")}<span class="dn-heading-spark">${M("spark")}</span></h1><p>${S("subtitle")}</p></div><a href="/service" class="dn-button dn-button-primary dn-overview-cta">${M("plus")}${S("exploreServices")}${M("arrow","dn-button-arrow")}</a></div>
            <div class="dn-welcome-card">
              <div class="dn-welcome-content"><span class="dn-welcome-kicker">${M("heart")}${S("healthTag")}</span><div class="dn-welcome-meta"><span class="dn-welcome-label">${S("yourNextVisit")}</span><h2 data-dashboard-next-title>${S("noNextVisit")}</h2><p data-dashboard-next-description>${S("nextVisitHint")}</p></div><div class="dn-welcome-actions"><button type="button" data-dashboard-action="appointments" class="dn-button dn-button-white">${S("viewAppointments")}${M("arrow")}</button></div></div>
              <div class="dn-welcome-art" aria-hidden="true"><span class="dn-orbit dn-orbit-one"></span><span class="dn-orbit dn-orbit-two"></span><span class="dn-tooth-illustration">${M("tooth")}</span><span class="dn-floating-mark dn-floating-mark-a">${M("spark")}</span><span class="dn-floating-mark dn-floating-mark-b">${M("plus")}</span></div>
            </div>
            <div class="dn-section-heading"><div><span class="dn-eyebrow">${S("overviewLabel")}</span><h2>${S("overviewHeading")}</h2></div></div>
            <div class="dn-stat-grid">${Ke("calendar","upcoming")}${Ke("tooth","activePlans")}${Ke("card","balance")}</div>
            <div class="dn-overview-columns"><section class="dn-surface-card dn-actions-area"><div class="dn-card-title"><h2>${S("quickActions")}</h2><p>${S("quickActionsCopy")}</p></div><div class="dn-action-list">
              ${Qe("actionServices","actionServicesCopy","calendar","link","/service")}
              ${Qe("actionProfile","actionProfileCopy","user","tab","")}
              ${Qe("actionHelp","actionHelpCopy","help","link","/contact-us")}
            </div></section>
            <section class="dn-surface-card dn-journey-area"><div class="dn-card-title"><h2>${S("journey")}</h2><p>${S("journeyCopy")}</p></div><div class="dn-journey-placeholder"><div class="dn-journey-track"><span>${M("calendar")}</span><i></i><span>${M("tooth")}</span><i></i><span>${M("shield")}</span></div><div class="dn-journey-note">${M("shield")}<span>${S("gentleReminderCopy")}</span></div></div></section></div>
          </section>
          <section class="dn-panel" data-dashboard-panel="appointments" aria-label="${S("appointments")}" hidden>${ye("sectionAppointmentsEyebrow","appointmentTitle","appointmentSubtitle")}${xe("calendar","appointmentsEmptyTitle","appointmentsEmptyCopy",!0)}</section>
          <section class="dn-panel" data-dashboard-panel="treatments" aria-label="${S("treatments")}" hidden>${ye("sectionTreatmentsEyebrow","treatmentTitle","treatmentSubtitle")}${xe("tooth","treatmentsEmptyTitle","treatmentsEmptyCopy")}</section>
          <section class="dn-panel" data-dashboard-panel="records" aria-label="${S("records")}" hidden>${ye("sectionRecordsEyebrow","recordsTitle","recordsSubtitle")}${xe("file","recordsEmptyTitle","recordsEmptyCopy")}<p class="dn-private-note">${M("shield")}${S("privacyNote")}</p></section>
          <section class="dn-panel" data-dashboard-panel="billing" aria-label="${S("billing")}" hidden>${ye("sectionBillingEyebrow","billingTitle","billingSubtitle")}${xe("card","billingEmptyTitle","billingEmptyCopy")}</section>
          <section class="dn-panel" data-dashboard-panel="profile" aria-label="${S("profile")}" hidden>${ye("sectionProfileEyebrow","profileTitle","profileSubtitle")}<div class="dn-profile-surface">${_n()}</div></section>
          <div class="dn-content-footer"><span>© ${new Date().getFullYear()} Dentistry</span><a href="/contact-us">${S("contact")}</a></div>
        </div>
      </div>
      <nav class="dn-mobile-bar" aria-label="${S("general")}">${Me.filter(([e])=>Hn.has(e)).map(([e,t,a])=>Ot(e,t,a,"mobile")).join("")}</nav>
    </div>
  </main>`}function Vn(){const e=document.querySelector('[data-portal-page="dashboard"]');if(!e)return()=>{};const t=new AbortController,{signal:a}=t;if(!Te())return window.location.replace("/login"),()=>t.abort();const o=v=>e.querySelector(v),n=[...e.querySelectorAll("[data-dashboard-tab]")],i=[...e.querySelectorAll("[data-dashboard-panel]")],r=o("#dn-dashboard-sidebar"),l=o("[data-sidebar-scrim]"),b=o("[data-sidebar-toggle]");let u=null,d=!1,c=!1;function h(v=!1){r.classList.remove("is-open"),l.hidden=!0,b.setAttribute("aria-expanded","false"),document.body.style.overflow="",v&&c&&b.focus(),c=!1}function s(){var v;r.classList.add("is-open"),l.hidden=!1,b.setAttribute("aria-expanded","true"),document.body.style.overflow="hidden",c=!0,(v=r.querySelector(".dn-nav-button"))==null||v.focus()}function g(v,y=!0,w=!0){var _,x;Rt.has(v)||(v="overview"),n.forEach(C=>{const A=C.dataset.dashboardTab===v;C.classList.toggle("is-active",A),C.setAttribute("aria-current",A?"page":"false")}),i.forEach(C=>{C.hidden=C.dataset.dashboardPanel!==v});const $=(_=Me.find(([C])=>C===v))==null?void 0:_[1];if(o("[data-current-section]").textContent=Ie($||"overview"),y){const C=new URL(window.location.href);v==="overview"?C.searchParams.delete("section"):C.searchParams.set("section",v),window.history.replaceState(window.history.state,"",C.pathname+C.search+C.hash)}if(h(),v==="profile"&&!u)try{u=Bn(e)||(()=>{})}catch(C){console.error("Patient profile initialization:",C)}const T=o("#dn-dashboard-content"),P=(x=window.matchMedia)==null?void 0:x.call(window,"(prefers-reduced-motion: reduce)").matches;w&&(T==null||T.scrollIntoView({behavior:P?"auto":"smooth",block:"start"}))}e.addEventListener("click",v=>{const y=v.target.closest("[data-dashboard-tab]");y&&e.contains(y)&&g(y.dataset.dashboardTab);const w=v.target.closest("[data-dashboard-action]");w&&e.contains(w)&&g(w.dataset.dashboardAction)},{signal:a}),b.addEventListener("click",()=>r.classList.contains("is-open")?h(!0):s(),{signal:a}),l.addEventListener("click",()=>h(!0),{signal:a}),document.addEventListener("keydown",v=>{v.key==="Escape"&&r.classList.contains("is-open")&&h(!0)},{signal:a}),e.querySelectorAll("[data-set-language]").forEach(v=>{v.addEventListener("click",y=>{y.stopPropagation();const w=v.dataset.setLanguage;w!==dt()&&Ut(w,()=>window.dispatchEvent(new PopStateEvent("popstate")))},{signal:a})});const m=new URLSearchParams(window.location.search).get("section");g(Rt.has(m)?m:"overview",!1,!1);const f=o("[data-dashboard-logout]");return f.addEventListener("click",async()=>{if(!d){d=!0,f.disabled=!0,o("[data-logout-label]").textContent=Ie("loggingOut");try{await De.logout(a)}catch(v){console.warn("Server logout unavailable; clearing local session.",v)}finally{qe(),window.location.replace("/login")}}},{signal:a}),()=>{t.abort(),document.body.style.overflow="",typeof u=="function"&&u()}}const Mt={arrow:'<path d="M5 12h14m-6-6 6 6-6 6"/>',back:'<path d="M19 12H5m6 6-6-6 6-6"/>',tooth:'<path d="M12 4c2.4 0 3.2-1.3 5.7-1.3C22.5 2.7 24 6.6 22.5 11c-1.3 4-2.4 10-5.6 10-2 0-2.2-7-4.9-7S9.1 21 7.1 21c-3.2 0-4.3-6-5.6-10C0 6.6 1.5 2.7 6.3 2.7 8.8 2.7 9.6 4 12 4Z"/>',calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',user:'<circle cx="12" cy="8" r="4"/><path d="M4.5 21a7.5 7.5 0 0 1 15 0"/>',users:'<circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0m1-14a3 3 0 0 1 0 6m2 3a5 5 0 0 1 3 5"/>',shield:'<path d="m12 2 8 4v6c0 5.1-3.5 8.3-8 10-4.5-1.7-8-4.9-8-10V6l8-4Z"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',mail:'<rect x="2.5" y="5" width="19" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',lock:'<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',eye:'<path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z"/><circle cx="12" cy="12" r="2.5"/>',eyeOff:'<path d="M3 3l18 18M10.5 6.2A11.4 11.4 0 0 1 12 6c6.5 0 10 6 10 6a17 17 0 0 1-3.3 3.8M6 7.8A16.1 16.1 0 0 0 2 12s3.5 6 10 6c1.7 0 3.1-.4 4.4-1"/>',check:'<path d="m5 12 4 4L19 6"/>',receipt:'<path d="M5 3h14v18l-3-2-4 2-4-2-3 2V3Z"/><path d="M9 8h6m-6 4h6"/>',activity:'<path d="M2 12h5l3-7 4 14 3-7h5"/>',credit:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',settings:'<path d="M10.5 2h3l.6 2.4 2.2.9 2.1-1.3 2.1 2.1-1.3 2.1.9 2.2 2.4.6v3l-2.4.6-.9 2.2 1.3 2.1-2.1 2.1-2.1-1.3-2.2.9-.6 2.4h-3l-.6-2.4-2.2-.9-2.1 1.3-2.1-2.1 1.3-2.1-.9-2.2L2 13.5v-3l2.4-.6.9-2.2L4 5.6l2.1-2.1 2.1 1.3 2.2-.9.1-1.9Z"/><circle cx="12" cy="12" r="3"/>',logOut:'<path d="M10 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5m4-4 4-4-4-4m4 4H9"/>',spark:'<path d="m12 2 2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2L12 2Z"/>',menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',phone:'<path d="M6 2h4l1 5-2.5 1.6a14 14 0 0 0 7 7L17 13l5 1v4c0 2-1.8 4-4 4C9.2 22 2 14.8 2 6c0-2.2 2-4 4-4Z"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 10v6m0-10h.01"/>'};function ee(e,t=""){return`<svg class="dp-icon ${t}" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${Mt[e]||Mt.tooth}</svg>`}function Yn(e="Design preview only — no data is sent or saved to a server."){return`<div class="dp-demo-note" role="note">${ee("info")}<span>${e}</span></div>`}function le(e){return ba(e)}const Pe={consultation:{label:"Dental consultation",total:65e4,deposit:15e4,duration:"30 min"},cleaning:{label:"Cleaning & prevention",total:14e5,deposit:35e4,duration:"60 min"},whitening:{label:"Teeth whitening consultation",total:85e4,deposit:2e5,duration:"45 min"}};function zn(e,t,a,o){const n=le(o==="deposit"?e.deposit:e.total);return p("Review completed — preview only")!=="Review completed — preview only"?`${p(e.label)} · ${t} · ${a}. ${o==="deposit"?"بیعانه نمونه":"مبلغ نمونه قابل پرداخت در کلینیک"}: ${n}. هیچ نوبت یا پرداختی ثبت نشده است.`:`${e.label} · ${t} · ${a}. Example ${o==="deposit"?"deposit":"pay-at-clinic total"}: ${n}. No reservation or payment was created.`}function Gn(){return`<main class="dentistry-portal dp-checkout-page" data-portal-page="checkout">
    <div class="dp-checkout-container">
      <nav class="dp-checkout-trail" aria-label="Breadcrumb"><a href="/">Home</a>${ee("arrow")}<a href="/dashboard">Patient portal</a>${ee("arrow")}<strong>Checkout preview</strong></nav>
      ${Yn("Prototype checkout: all dates, appointment slots and prices are examples. No booking is made, no payment is collected and no card details are requested.")}
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
          <div class="dp-payment-choices"><label class="dp-payment-choice is-selected"><input type="radio" name="paymentMethod" value="deposit" checked/><span class="dp-payment-choice-icon">${ee("credit")}</span><span><strong>Online deposit</strong><small>Available after payment-gateway setup</small></span><span class="dp-radio-mark"></span></label><label class="dp-payment-choice"><input type="radio" name="paymentMethod" value="clinic"/><span class="dp-payment-choice-icon">${ee("receipt")}</span><span><strong>Pay at clinic</strong><small>Subject to clinic confirmation</small></span><span class="dp-radio-mark"></span></label></div>
        </section>
      </div>
      <aside class="dp-checkout-summary"><div class="dp-summary-image"><div class="dp-summary-tooth">${ee("tooth")}</div><div><span>DR. ZEINOLABEDIN</span><h2>Your appointment summary</h2></div></div>
        <div class="dp-summary-body"><span class="dp-eyebrow">ORDER OVERVIEW · SAMPLE</span><div class="dp-summary-meta"><span>${ee("tooth")} <span id="dp-summary-service">Dental consultation</span></span><span>${ee("clock")} <span id="dp-summary-time">30 min · 10:30 AM</span></span><span>${ee("calendar")} <span id="dp-summary-date">Choose a date</span></span></div><div class="dp-summary-separator"></div>
        <div class="dp-summary-line"><span>Example service total</span><strong id="dp-summary-total">${le(65e4)}</strong></div><div class="dp-summary-line"><span>Example deposit</span><strong id="dp-summary-deposit">${le(15e4)}</strong></div><div class="dp-summary-line"><span>Remaining at clinic (example)</span><strong id="dp-summary-remaining">${le(5e5)}</strong></div><div class="dp-summary-separator"></div>
        <div class="dp-summary-pay"><span id="dp-summary-pay-label">Preview deposit amount</span><strong id="dp-summary-pay-amount">${le(15e4)}</strong></div>
        <button class="dp-btn dp-btn-primary dp-btn-block" type="submit" form="dp-checkout-form">Review demo summary ${ee("arrow")}</button>
        <p class="dp-form-feedback" data-form-feedback role="status" aria-live="polite" hidden></p>
        <div class="dp-checkout-preview" id="dp-checkout-review" hidden role="status"></div>
        <div class="dp-summary-guarantee">${ee("shield")} No payment is processed in this preview.</div></div>
      </aside></div>
    </div>
  </main>`}function Wn(){const e=document.querySelector('[data-portal-page="checkout"]');if(!e)return()=>{};const t=new AbortController,a=e.querySelector("#dp-checkout-service"),o=e.querySelector("#dp-checkout-date"),n=e.querySelector("#dp-checkout-time"),i=[...e.querySelectorAll('input[name="paymentMethod"]')],r=new Date,l=m=>String(m).padStart(2,"0"),b=m=>`${m.getFullYear()}-${l(m.getMonth()+1)}-${l(m.getDate())}`;o.min=b(r);const u=new Date(r.getFullYear(),r.getMonth(),r.getDate()+7);o.value=b(u);const d=new URLSearchParams(location.search),c=d.get("service");c&&Object.hasOwn(Pe,c)&&(a.value=c);const h=d.get("date");h&&/^\d{4}-\d{2}-\d{2}$/.test(h)&&h>=o.min&&(o.value=h);const s=d.get("time");[...n.options].some(m=>m.value===s)&&(n.value=s);const g=()=>{var y;const m=Pe[a.value]||Pe.consultation,f=((y=i.find(w=>w.checked))==null?void 0:y.value)||"deposit",v=(w,$)=>{e.querySelector(w).textContent=$};v("#dp-summary-service",p(m.label)),v("#dp-summary-time",`${p(m.duration)} · ${n.options[n.selectedIndex].textContent.replace(/ \(example\)| \(نمونه\)/g,"")}`),v("#dp-summary-date",o.value||p("Choose a date")),v("#dp-summary-total",le(m.total)),v("#dp-summary-deposit",le(m.deposit)),v("#dp-summary-remaining",le(m.total-m.deposit)),v("#dp-summary-pay-label",p(f==="deposit"?"Preview deposit amount":"Example payable at clinic")),v("#dp-summary-pay-amount",le(f==="deposit"?m.deposit:m.total)),e.querySelectorAll(".dp-payment-choice").forEach(w=>w.classList.toggle("is-selected",w.querySelector("input").checked)),e.querySelector("#dp-checkout-review").hidden=!0};for(const m of[a,n,o,...i])m.addEventListener("change",g,{signal:t.signal});return g(),e.querySelector("#dp-checkout-form").addEventListener("submit",m=>{var A;m.preventDefault();const f=e.querySelector("#dp-checkout-name").value.trim(),v=e.querySelector("#dp-checkout-phone").value.trim(),y=e.querySelector("#dp-checkout-email"),w=e.querySelector("[data-form-feedback]"),$=E=>{w.textContent=p(E),w.dataset.state="error",w.hidden=!1};if(!o.value||o.value<o.min)return $("Please select a valid date in the future.");if(f.length<2)return $("Please enter your full name.");if(!/^[+\d\s()-]{8,20}$/.test(v))return $("Please enter a valid phone number.");if(!y.value.trim()||!y.checkValidity())return $("Please enter a valid email address.");const T=Pe[a.value],P=((A=i.find(E=>E.checked))==null?void 0:A.value)||"deposit";w.hidden=!0;const _=e.querySelector("#dp-checkout-review");_.replaceChildren();const x=document.createElement("strong");x.textContent=p("Review completed — preview only");const C=document.createElement("p");C.textContent=zn(T,o.value,n.value,P),_.append(x,C),_.hidden=!1,_.scrollIntoView({block:"nearest",behavior:"smooth"})},{signal:t.signal}),()=>t.abort()}const tt={"/":{render:Wa,init:Za,title:"Home"},"/about-us":{render:po,init:ho,title:"About Us"},"/blog":{render:yo,init:wo,title:"Blog"},"/contact-us":{render:Yo,init:zo,title:"Contact Us"},"/service":{render:tn,init:an,title:"Services"},"/faq":{render:En,init:Sn,title:"FAQ"},"/login":{render:Cn,init:xn,title:"Patient Login",standalone:!0},"/register":{render:In,init:qn,title:"Patient Registration",standalone:!0},"/forgot-password":{render:On,init:Mn,title:"Forgot Password",standalone:!0},"/dashboard":{render:jn,init:Vn,title:"Patient Dashboard",standalone:!0,requiresAuth:!0},"/checkout":{render:Gn,init:Wn,title:"Appointment Checkout"}},Zn=[{pattern:/^\/post\/([^/]+)$/,route:{render:qo,init:No,title:"Blog Details"}},{pattern:/^\/services\/([1-9]\d*)$/,route:{render:gn,init:mn,title:"Service Details"}},{pattern:/^\/team\/([a-z0-9-]+)$/i,route:{render:wn,init:$n,title:"Doctor Profile"}}];function _e(e){let t=String(e||"/");return t=t.replace(/\/(?:index\.html?|index\.htm)$/i,"/")||"/",t!=="/"&&t.endsWith(".html")&&(t=t.slice(0,-5)),t.replace(/\/+$/,"")||"/"}function Kn(e){if(Object.prototype.hasOwnProperty.call(tt,e))return tt[e];for(const t of Zn)if(t.pattern.test(e))return t.route;return null}function Qn(){if(_e(window.location.pathname)!=="/team")return;const t=new URL("/about-us",window.location.origin);t.search=window.location.search,t.hash="about-doctors",window.history.replaceState(window.history.state,"",t.pathname+t.search+t.hash)}function Xn(e){let t="This page is not available yet.";return e.startsWith("/post/")?t="This blog post could not be found.":e.startsWith("/services/")?t="This service could not be found.":e.startsWith("/team/")&&(t="This doctor profile could not be found."),`
    <main
      class="w-container"
      style="padding:100px 20px;min-height:50vh"
    >

      <h1>
        ${p("Page not available yet")}
      </h1>

      <p>
        ${p(t)}
      </p>

      <p>
        <a href="/">
          ${p("Back to home")}
        </a>
      </p>

    </main>
  `}let at=[];function da(){for(const e of at)try{e==null||e()}catch(t){console.warn("Page cleanup error:",t)}at=[]}function ua(e=!1){const t=new URL("/login",window.location.origin),a=new URLSearchParams(window.location.search).get("lang");(a==="fa"||a==="en")&&t.searchParams.set("lang",a),e&&t.searchParams.set("expired","1"),window.history.replaceState(window.history.state,"",t.pathname+t.search)}function we(){ot(),da();const e=document.getElementById("app");if(!e)throw new Error("Missing #app in index.html");Qn();let t=_e(window.location.pathname),a=Kn(t);a!=null&&a.requiresAuth&&!fe()&&(ua(),t="/login",a=tt[t]);const o=!(a!=null&&a.standalone),n=a?a.render():Xn(t);e.innerHTML=`
    ${o?Ca():""}

    ${n}

    ${o?La():""}
  `,document.title=`${p((a==null?void 0:a.title)||"Page Not Found")} | ${p("Dr. Zeinolabedin")}`;const i=[o?xa:null,a==null?void 0:a.init,o?Da:null];for(const r of i){if(typeof r!="function")continue;const l=r();typeof l=="function"&&at.push(l)}fa(e),window.location.hash&&requestAnimationFrame(()=>{let r=window.location.hash.slice(1);try{r=decodeURIComponent(r)}catch{}const l=document.getElementById(r);l&&l.scrollIntoView({behavior:"auto",block:"start"})})}function Jn(){const e=Sa(()=>{_e(window.location.pathname)==="/dashboard"&&(ua(!0),we())}),t=()=>{we()},a=n=>{var b;const i=n.target instanceof Element?n.target:(b=n.target)==null?void 0:b.parentElement,r=i==null?void 0:i.closest("[data-set-language]");if(!r)return;n.preventDefault();const l=r.getAttribute("data-set-language");l!=="fa"&&l!=="en"||Ut(l,we)},o=n=>{var h;if(n.defaultPrevented||n.button!==0||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey)return;const i=n.target instanceof Element?n.target:(h=n.target)==null?void 0:h.parentElement,r=i==null?void 0:i.closest("a[href]");if(!r||r.hasAttribute("download")||r.target&&r.target!=="_self")return;const l=r.getAttribute("href");if(!l||l==="#"||l.startsWith("#"))return;const b=new URL(r.href,window.location.href);if(b.origin!==window.location.origin||!["http:","https:"].includes(b.protocol))return;const u=_e(b.pathname);if(/\.(?:pdf|docx?|xlsx?|zip|png|jpg|jpeg|svg|webp|css|js)$/i.test(u))return;n.preventDefault();const d=u+b.search+b.hash,c=window.location.pathname+window.location.search+window.location.hash;d!==c&&(window.history.pushState({},"",d),we(),b.hash||window.scrollTo({top:0,behavior:"auto"}))};return window.addEventListener("popstate",t),document.addEventListener("click",a),document.addEventListener("click",o),we(),()=>{window.removeEventListener("popstate",t),document.removeEventListener("click",a),document.removeEventListener("click",o),e==null||e(),da()}}Jn();
