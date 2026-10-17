(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=a(n);fetch(n.href,r)}})();function Jt(){const e=document.querySelector(".navbar.w-nav"),t=e==null?void 0:e.querySelector(".w-nav-button"),a=e==null?void 0:e.querySelector(".w-nav-menu");if(!e||!t||!a)return()=>{};const o=new AbortController,{signal:n}=o,r=u=>{e.classList.toggle("w--open",u),t.classList.toggle("w--open",u),a.classList.toggle("w--open",u),t.setAttribute("aria-expanded",String(u)),a.setAttribute("aria-hidden",String(u&&window.innerWidth<=991?!1:window.innerWidth<=991))},l=()=>r(!t.classList.contains("w--open"));return t.addEventListener("click",l,{signal:n}),t.addEventListener("keydown",u=>{(u.key==="Enter"||u.key===" ")&&(u.preventDefault(),l())},{signal:n}),a.addEventListener("click",u=>{u.target.closest("a[href]")&&r(!1)},{signal:n}),document.addEventListener("click",u=>{e.contains(u.target)||r(!1)},{signal:n}),document.addEventListener("keydown",u=>{u.key==="Escape"&&r(!1)},{signal:n}),window.addEventListener("resize",()=>{window.innerWidth>991&&r(!1)},{signal:n}),r(!1),()=>o.abort()}const ea={"auth.shell.asideLabel":"معرفی سامانه بیماران","auth.shell.care":"مراقبت‌های دندان‌پزشکی","auth.shell.private":"حریم خصوصی شما محفوظ است","auth.shell.easy":"نوبت‌دهی آسان","auth.shell.priority":"لبخند شما، اولویت ماست","auth.shell.tagline":"تجربه بهتر دندان‌پزشکی از اینجا آغاز می‌شود","auth.shell.back":"بازگشت به وب‌سایت","auth.shell.portal":"پنل بیماران","auth.shell.loginLegal":"ورود با شماره موبایل و کد تأیید یا ایمیل و رمز عبور امکان‌پذیر است.","auth.login.title":"خوش برگشتید","auth.login.subtitle":"برای ورود به حساب کاربری، روش موردنظر خود را انتخاب کنید.","auth.login.sideTitle":"هر لبخند زیبا با مراقبت خوب آغاز می‌شود.","auth.login.sideCopy":"فضایی اختصاصی برای مدیریت نوبت‌ها و پیگیری روند درمان دندان‌های شما.","auth.login.methodPhone":"ورود با موبایل","auth.login.methodEmail":"ورود با ایمیل","auth.login.phone":"شماره موبایل","auth.login.phonePlaceholder":"09123456789","auth.login.sendCode":"ارسال کد تأیید","auth.login.codeSentTo":"کد تأیید به این شماره ارسال شد:","auth.login.code":"کد تأیید ۶ رقمی","auth.login.codePlaceholder":"کد ۶ رقمی را وارد کنید","auth.login.codeValidity":"کد تأیید تا ۲ دقیقه معتبر است.","auth.login.verify":"تأیید و ورود","auth.login.editPhone":"تغییر شماره موبایل","auth.login.resend":"ارسال مجدد کد","auth.login.email":"آدرس ایمیل","auth.login.emailPlaceholder":"example@email.com","auth.login.password":"رمز عبور","auth.login.passwordPlaceholder":"رمز عبور خود را وارد کنید","auth.login.signIn":"ورود به حساب","auth.login.forgotPassword":"رمز عبور را فراموش کرده‌اید؟","auth.login.newPatient":"برای اولین‌بار مراجعه می‌کنید؟","auth.login.createAccount":"ایجاد حساب کاربری","auth.login.invalidPhone":"لطفاً شماره موبایل معتبر وارد کنید.","auth.login.invalidEmail":"لطفاً یک آدرس ایمیل معتبر وارد کنید.","auth.login.enterPassword":"لطفاً رمز عبور را وارد کنید.","auth.login.invalidCredentials":"ایمیل یا رمز عبور اشتباه است.","auth.login.invalidCodeFormat":"لطفاً کد تأیید ۶ رقمی را وارد کنید.","auth.login.invalidCode":"کد تأیید اشتباه است یا منقضی شده است.","auth.login.noAccount":"حسابی با این شماره موبایل وجود ندارد. ابتدا ثبت‌نام کنید.","auth.login.tooMany":"تعداد درخواست‌ها بیش از حد مجاز است. کمی بعد تلاش کنید.","auth.login.timeout":"زمان درخواست به پایان رسید. دوباره تلاش کنید.","auth.login.networkError":"ارتباط با سرور برقرار نشد. اتصال اینترنت را بررسی کنید.","auth.login.serverError":"سرور کلینیک موقتاً در دسترس نیست.","auth.login.sent":"کد تأیید با موفقیت ارسال شد.","auth.login.resent":"کد تأیید جدید ارسال شد.","auth.login.invalidApiToken":"ورود تأیید شد، اما توکن معتبر از سرور دریافت نشد.","auth.register.title":"ثبت‌نام بیمار","auth.register.subtitle":"برای ایجاد حساب کاربری، اطلاعات خود را وارد کنید.","auth.register.sideTitle":"فضایی اختصاصی برای لبخندی سالم‌تر.","auth.register.sideCopy":"نوبت‌ها، طرح‌های درمان و پرداخت‌های خود را در یکجا مدیریت کنید.","auth.register.name":"نام و نام خانوادگی","auth.register.namePlaceholder":"نام و نام خانوادگی خود را وارد کنید","auth.register.phone":"شماره موبایل","auth.register.referral":"کد معرف (اختیاری)","auth.register.referralPlaceholder":"در صورت داشتن کد معرف وارد کنید","auth.register.sendCode":"ارسال کد تأیید","auth.register.codeSentTo":"کد تأیید به این شماره ارسال شد:","auth.register.code":"کد تأیید ۶ رقمی","auth.register.codePlaceholder":"کد ۶ رقمی را وارد کنید","auth.register.codeValidity":"کد تأیید به مدت ۲ دقیقه معتبر است.","auth.register.verify":"تأیید کد و ثبت‌نام","auth.register.editPhone":"ویرایش اطلاعات","auth.register.resend":"ارسال مجدد کد","auth.register.haveAccount":"قبلاً حساب کاربری ساخته‌اید؟","auth.register.signIn":"وارد شوید","auth.register.success":"حساب کاربری شما با موفقیت ایجاد شد.","auth.register.goToLogin":"ورود به حساب کاربری","auth.register.invalidName":"لطفاً نام و نام خانوادگی معتبر وارد کنید.","auth.register.invalidPhone":"لطفاً شماره موبایل معتبر وارد کنید.","auth.register.invalidCodeFormat":"لطفاً کد تأیید ۶ رقمی را وارد کنید.","auth.register.invalidCode":"کد تأیید اشتباه است یا منقضی شده است.","auth.register.invalidData":"اطلاعات ثبت‌نام معتبر نیست. لطفاً آن‌ها را بررسی کنید.","auth.register.alreadyRegistered":"این شماره موبایل قبلاً ثبت‌نام شده است.","auth.register.sessionExpired":"اطلاعات ثبت‌نام منقضی شده است. دوباره تلاش کنید.","auth.register.sent":"کد تأیید با موفقیت ارسال شد.","auth.register.resent":"کد تأیید جدید ارسال شد.","auth.register.tooMany":"تعداد درخواست‌ها بیش از حد مجاز است. کمی بعد تلاش کنید.","auth.register.timeout":"زمان درخواست به پایان رسید. دوباره تلاش کنید.","auth.register.networkError":"ارتباط با سرور برقرار نشد. اتصال اینترنت را بررسی کنید.","auth.register.serverError":"سرور کلینیک موقتاً در دسترس نیست.","auth.register.requestFailed":"در انجام درخواست مشکلی پیش آمد. دوباره تلاش کنید.","auth.forgot.title":"بازیابی رمز عبور","auth.forgot.subtitle":"شماره موبایل خود را وارد کنید تا کد تأیید برایتان ارسال شود.","auth.forgot.sideTitle":"مراقبت از لبخند شما ادامه دارد.","auth.forgot.sideCopy":"بازیابی حساب کاربری خود را به‌سادگی و با امنیت بیشتر انجام دهید.","auth.forgot.phone":"شماره موبایل","auth.forgot.sendCode":"ارسال کد تأیید","auth.forgot.codeSentTo":"کد تأیید به شماره زیر ارسال شد:","auth.forgot.code":"کد تأیید ۶ رقمی","auth.forgot.codePlaceholder":"کد ۶ رقمی را وارد کنید","auth.forgot.verify":"تأیید کد","auth.forgot.changePhone":"تغییر شماره موبایل","auth.forgot.resend":"ارسال مجدد کد","auth.forgot.verifiedPhone":"شماره موبایل تأییدشده:","auth.forgot.newPassword":"رمز عبور جدید","auth.forgot.newPasswordPlaceholder":"حداقل ۸ کاراکتر","auth.forgot.confirmPassword":"تکرار رمز عبور جدید","auth.forgot.confirmPlaceholder":"رمز عبور جدید را دوباره وارد کنید","auth.forgot.resetPassword":"تغییر رمز عبور","auth.forgot.backToLogin":"بازگشت به ورود","auth.forgot.success":"رمز عبور شما با موفقیت تغییر کرد. اکنون می‌توانید وارد حساب خود شوید.","auth.forgot.invalidPhone":"لطفاً شماره موبایل معتبر وارد کنید.","auth.forgot.invalidCodeFormat":"کد تأیید باید ۶ رقمی باشد.","auth.forgot.invalidCode":"کد تأیید نامعتبر یا منقضی شده است.","auth.forgot.shortPassword":"رمز عبور باید حداقل ۸ کاراکتر داشته باشد.","auth.forgot.passwordMismatch":"رمز عبور و تکرار آن یکسان نیستند.","auth.forgot.sessionExpired":"اطلاعات بازیابی موجود نیست. دوباره درخواست کد کنید.","auth.forgot.invalidData":"اطلاعات واردشده معتبر نیست.","auth.forgot.sent":"کد تأیید با موفقیت ارسال شد.","auth.forgot.resent":"کد تأیید جدید ارسال شد.","auth.forgot.verified":"شماره موبایل تأیید شد. رمز عبور جدید را وارد کنید.","auth.forgot.tooMany":"تعداد درخواست‌ها بیش از حد مجاز است. کمی بعد تلاش کنید.","auth.forgot.timeout":"زمان درخواست به پایان رسید.","auth.forgot.serverError":"سرور موقتاً در دسترس نیست.","auth.forgot.networkError":"ارتباط با سرور برقرار نشد.","auth.forgot.requestFailed":"در انجام درخواست مشکلی پیش آمد. دوباره تلاش کنید.","auth.shell.privacyLegal":"اطلاعات حساب کاربری شما از طریق ارتباط امن با سرور پردازش می‌شود.","auth.forgot.resetTokenExpired":"مهلت بازیابی رمز عبور به پایان رسیده است. لطفاً دوباره کد تأیید دریافت کنید.","auth.sessionExpired":"به دلیل ۱۵ دقیقه بی‌فعالیتی، نشست شما منقضی شده است. لطفاً دوباره وارد شوید.","profile.dashboard":"داشبورد بیمار","profile.title":"پروفایل من","profile.subtitle":"اطلاعات حساب کاربری و مشخصات فردی شما.","profile.information":"اطلاعات شخصی","profile.name":"نام و نام خانوادگی","profile.email":"آدرس ایمیل","profile.phone":"شماره موبایل","profile.referral":"کد معرف","profile.notSet":"ثبت نشده","profile.loading":"در حال دریافت اطلاعات...","profile.loaded":"اطلاعات پروفایل به‌روز است.","profile.partial":"اطلاعات پایه دریافت شد؛ جزئیات پروفایل در دسترس نیست.","profile.loadError":"دریافت اطلاعات پروفایل با خطا مواجه شد.","profile.reload":"بارگذاری مجدد","profile.logout":"خروج از حساب","profile.phoneHint":"شماره موبایل فقط پس از تأیید کد پیامکی قابل تغییر است.","blog.title":"وبلاگ","blog.home":"خانه","blog.latest":"تازه‌ترین مطالب","blog.heading":"جدیدترین مقالات و مطالب دندان‌پزشکی را اینجا بخوانید.","blog.loading":"در حال دریافت مقالات...","blog.empty":"در حال حاضر مقاله‌ای برای نمایش وجود ندارد.","blog.error":"دریافت مقالات با مشکل مواجه شد. لطفاً دوباره تلاش کنید.","blog.retry":"تلاش مجدد","blog.readArticle":"مطالعه مقاله","blog.details.page":"مقالات دندان‌پزشکی","blog.details.breadcrumb":"جزئیات مقاله","blog.details.categories":"دسته‌بندی‌ها","blog.details.recent":"مقالات اخیر","blog.details.loading":"در حال دریافت مقاله...","blog.details.notFound":"مقاله موردنظر پیدا نشد.","blog.details.error":"دریافت اطلاعات مقاله با مشکل مواجه شد.","blog.details.retry":"تلاش مجدد","blog.details.back":"بازگشت به مقالات","header.login":"ورود","header.dashboard":"داشبورد","header.loginAria":"ورود به حساب بیمار","header.dashboardAria":"ورود به داشبورد بیمار","header.home":"خانه","header.about":"درباره ما","header.services":"خدمات","header.blog":"وبلاگ","header.contact":"تماس با ما","header.logo":"دندان‌پزشکی","header.menu":"باز و بسته کردن منو","header.language":"زبان سایت","footer.eyebrow":"نگاهی نو به مراقبت از لبخند شما","footer.heroTitle":"لبخند شما شایسته","footer.heroHighlight":"بهترین توجه است.","footer.heroDescription":"لبخندی سالم و زیبا از مراقبت و آگاهی آغاز می‌شود. برای آشنایی بیشتر با کلینیک و دریافت پاسخ پرسش‌های خود، با ما در ارتباط باشید.","footer.contactUs":"تماس با ما","footer.brandName":"دکتر زین‌العابدین","footer.brandDescription":"فضایی برای آشنایی با خدمات دندان‌پزشکی، روش‌های درمان و نکات کاربردی مراقبت از سلامت دهان و دندان.","footer.brandTag":"مراقبت با اطمینان آغاز می‌شود","footer.explore":"دسترسی سریع","footer.patients":"خدمات بیماران","footer.getInTouch":"ارتباط با ما","footer.home":"خانه","footer.about":"درباره ما","footer.team":"تیم پزشکی","footer.blog":"مقالات آموزشی","footer.faq":"سوالات متداول","footer.login":"ورود بیماران","footer.register":"ایجاد حساب کاربری","footer.contactDescription":"برای دریافت اطلاعات بیشتر یا مطرح کردن پرسش‌های خود، می‌توانید از طریق صفحه تماس با ما در ارتباط باشید.","footer.contactLink":"رفتن به صفحه تماس","footer.copyright":"تمامی حقوق محفوظ است.","footer.backToTop":"بازگشت به بالا","footer.parentCompany":"زیرمجموعه","about.breadcrumb":"درباره ما","about.home":"خانه","about.imageAlt":"نمایی از کلینیک دندان‌پزشکی","about.introEyebrow":"درباره ما","about.introTitle":"آشنایی با رویکرد ما به مراقبت از لبخند شما","about.introDescription":"سلامت دهان و دندان بخش مهمی از کیفیت زندگی است. آگاهی از روش‌های مراقبت، شناخت گزینه‌های درمان و گفت‌وگوی روشن درباره نیازهای هر بیمار، می‌تواند به تصمیم‌گیری بهتر کمک کند.","about.feature1Title":"آگاهی پیش از تصمیم","about.feature1Description":"آشنایی با مراحل درمان و دریافت پاسخ پرسش‌ها، بخش مهمی از انتخاب آگاهانه است.","about.feature2Title":"توجه به نیازهای هر فرد","about.feature2Description":"شرایط دهان و دندان هر بیمار متفاوت است و انتخاب روش درمان به معاینه و بررسی تخصصی نیاز دارد.","about.contactButton":"ارتباط با ما","about.treatmentEyebrow":"خدمات دندان‌پزشکی","about.treatmentTitle":"آشنایی با خدمات و روش‌های درمان","about.treatmentDescription":"در این بخش می‌توانید خدمات ثبت‌شده در کلینیک را مشاهده کنید و برای آشنایی بیشتر با هر خدمت وارد صفحه اختصاصی آن شوید.","about.servicesLoading":"در حال دریافت خدمات...","about.servicesEmpty":"در حال حاضر خدمتی برای نمایش وجود ندارد.","about.servicesError":"دریافت خدمات با مشکل مواجه شد.","about.retry":"تلاش مجدد","about.serviceDetails":"مشاهده جزئیات","about.teamEyebrow":"ارتباط با کلینیک","about.teamTitle":"برای پرسش‌های شما در دسترس هستیم","about.teamDescription":"اگر برای شناخت خدمات، بررسی گزینه‌های درمان یا دریافت اطلاعات بیشتر درباره مراجعه پرسشی دارید، می‌توانید از طریق صفحه تماس با ما پیام خود را ارسال کنید.","about.teamButton":"تماس با ما","about.faqEyebrow":"سوالات متداول","about.faqTitle":"پاسخ به پرسش‌های رایج","about.faq1Question":"هر چند وقت یک بار باید به دندان‌پزشک مراجعه کنم؟","about.faq1Answer":"برای بسیاری از افراد معاینه منظم دندان‌پزشکی توصیه می‌شود. فاصله مناسب بین معاینات به وضعیت سلامت دهان و دندان و نظر دندان‌پزشک بستگی دارد.","about.faq2Question":"چه عواملی باعث پوسیدگی دندان می‌شوند؟","about.faq2Answer":"باکتری‌های موجود در پلاک دندانی با مصرف قندها و کربوهیدرات‌های قابل تخمیر اسید تولید می‌کنند. این اسیدها می‌توانند به‌مرور مواد معدنی مینای دندان را کاهش داده و باعث پوسیدگی شوند.","about.faq3Question":"چطور می‌توان از بیماری‌های لثه پیشگیری کرد؟","about.faq3Answer":"مسواک زدن منظم با خمیردندان حاوی فلوراید، تمیز کردن بین دندان‌ها، معاینه‌های دوره‌ای و رسیدگی زودهنگام به علائمی مانند خونریزی لثه به حفظ سلامت لثه کمک می‌کنند.","about.faq4Question":"آیا سفید کردن دندان‌ها بی‌خطر است؟","about.faq4Answer":"سفید کردن دندان‌ها در صورت انتخاب روش مناسب و انجام آن زیر نظر دندان‌پزشک معمولاً ایمن است. بااین‌حال ممکن است حساسیت موقت دندان یا تحریک لثه ایجاد شود و این روش برای همه مناسب نباشد.","about.faq5Question":"ایمپلنت دندان چیست؟","about.faq5Answer":"ایمپلنت روشی برای جایگزینی دندان ازدست‌رفته است که در آن پایه‌ای معمولاً از جنس تیتانیوم در استخوان فک قرار می‌گیرد و پس از طی مراحل درمان، روکش دندان روی آن نصب می‌شود. مناسب بودن این روش به معاینه و بررسی شرایط بیمار بستگی دارد.","about.teamPreview":"معرفی پزشکان این بخش پس از تکمیل اطلاعات تیم پزشکی نمایش داده می‌شود.","about.demoTreatment1Title":"اصلاح طرح لبخند","about.demoTreatment1Description":"آشنایی با روش‌های زیبایی دندان برای بهبود ظاهر و هماهنگی لبخند.","about.demoTreatment2Title":"درمان‌های زیبایی دندان","about.demoTreatment2Description":"بررسی گزینه‌های درمانی متناسب با وضعیت دندان‌ها و اهداف زیبایی هر فرد.","about.demoTreatment3Title":"ایمپلنت دندان","about.demoTreatment3Description":"آشنایی با روش جایگزینی دندان‌های ازدست‌رفته با استفاده از ایمپلنت.","about.demoTreatment4Title":"سفید کردن دندان","about.demoTreatment4Description":"آشنایی با روش‌های حرفه‌ای سفید کردن دندان‌ها تحت نظر دندان‌پزشک.","about.demoTreatment5Title":"دندان‌پزشکی عمومی","about.demoTreatment5Description":"معاینات دوره‌ای، مراقبت‌های پیشگیرانه و بررسی مشکلات رایج دهان و دندان.","about.servicesDemoNote":"خدمات این بخش فعلاً برای پیش‌نمایش طراحی نمایش داده می‌شوند.","about.doctor1Name":"دکتر فیونا پارک","about.doctor1Role":"دندان‌پزشک عمومی","about.doctor2Name":"دکتر جان مارتین","about.doctor2Role":"دندان‌پزشکی زیبایی","about.doctor3Name":"دکتر آرچی وایت","about.doctor3Role":"مراقبت‌های دندان‌پزشکی","about.doctor4Name":"دکتر ماریا آنجل","about.doctor4Role":"دندان‌پزشکی ترمیمی","about.teamDemoNote":"اسامی و تصاویر این بخش صرفاً نمایشی هستند و بعداً با اطلاعات واقعی تیم پزشکی جایگزین می‌شوند.","teamDetails.home":"خانه","teamDetails.team":"تیم پزشکی","teamDetails.specialty":"حوزه فعالیت","teamDetails.information":"اطلاعات پزشک","teamDetails.informationText":"اطلاعات تکمیلی، سوابق حرفه‌ای و برنامه حضور پزشک پس از ثبت اطلاعات رسمی کلینیک نمایش داده خواهد شد.","teamDetails.eyebrow":"پروفایل پزشک","teamDetails.aboutTitle":"آشنایی با","teamDetails.aboutDescription":"در این بخش می‌توانید با حوزه فعالیت و خدمات مرتبط با پزشک آشنا شوید. اطلاعات اختصاصی پزشک در نسخه نهایی تکمیل می‌شود.","teamDetails.focusTitle":"خدمات و حوزه تخصصی","teamDetails.focus1":"دندان‌پزشکی عمومی شامل معاینه، مراقبت‌های پیشگیرانه و بررسی مشکلات رایج دهان و دندان است.","teamDetails.focus2":"دندان‌پزشکی زیبایی به بررسی روش‌هایی مانند اصلاح طرح لبخند، بهبود ظاهر دندان‌ها و درمان‌های زیبایی می‌پردازد.","teamDetails.focus3":"مراقبت‌های دندان‌پزشکی شامل آشنایی با اصول بهداشت دهان، پیشگیری و پیگیری نیازهای درمانی بیماران است.","teamDetails.focus4":"دندان‌پزشکی ترمیمی بر بازسازی دندان‌های آسیب‌دیده و بهبود عملکرد و ظاهر آن‌ها تمرکز دارد.","teamDetails.approachTitle":"انتخاب روش درمان","teamDetails.approachDescription":"انتخاب روش درمان مناسب به معاینه، بررسی شرایط دهان و دندان و تشخیص تخصصی نیاز دارد. طرح درمان برای هر بیمار می‌تواند متفاوت باشد.","teamDetails.previewBadge":"پروفایل نمایشی","teamDetails.previewNotice":"این صفحه برای پیش‌نمایش طراحی ساخته شده است. نام، تصویر و تخصص درج‌شده نمونه هستند و بیانگر حضور واقعی این پزشک در کلینیک نیستند.","teamDetails.backToDoctors":"بازگشت به معرفی پزشکان","teamDetails.contactButton":"تماس با کلینیک","teamDetails.notFound":"پروفایل پزشک پیدا نشد.","home.heroTitle":"دنیایی از لبخندهای سالم‌تر پیش روی شماست","home.heroDescription":"با شناخت خدمات دندان‌پزشکی، آگاهی از گزینه‌های درمان و ارتباط آسان با کلینیک، قدم اول را برای مراقبت بهتر از سلامت دهان و دندان بردارید.","home.heroImageAlt":"تصویر معرفی خدمات دندان‌پزشکی","home.bookNow":"دریافت نوبت","home.aboutEyebrow":"درباره کلینیک","home.aboutTitle":"آشنایی با خدمات و رویکرد مراقبت از لبخند","home.aboutDescription":"هر بیمار شرایط و نیازهای خاص خود را دارد. بررسی دقیق وضعیت دهان و دندان، توضیح روشن گزینه‌های درمان و توجه به مراقبت‌های پیشگیرانه، به انتخاب آگاهانه کمک می‌کند.","home.aboutImageAlt":"محیط کلینیک دندان‌پزشکی","home.aboutFeature1":"اطلاع‌رسانی شفاف درباره روش‌های درمان","home.aboutFeature2":"توجه به شرایط و نیازهای فردی بیماران","home.questions":"سؤالی دارید؟","home.contactUs":"ارتباط با کلینیک","home.readMore":"بیشتر بخوانید","home.servicesEyebrow":"خدمات کلینیک","home.servicesTitle":"راهکارهای مراقبت و درمان دندان","home.allServices":"مشاهده همه خدمات","home.demoServicesNote":"خدمات این بخش فعلاً برای پیش‌نمایش سایت نمایش داده می‌شوند.","home.treatmentEyebrow":"روش‌های درمان","home.treatmentTitle":"آشنایی با درمان‌های دندان‌پزشکی","home.contactEyebrow":"ارتباط با ما","home.contactTitle":"سؤالات خود را با ما در میان بگذارید","home.contactImageAlt":"تصویر بخش تماس کلینیک","home.name":"نام و نام خانوادگی","home.email":"ایمیل","home.phone":"شماره تماس","home.subject":"موضوع","home.message":"پیام شما","home.submit":"ارسال پیام","home.contactDemoNote":"این فرم فعلاً نمایشی است و پیام‌ها به سرور ارسال نمی‌شوند. برای ارتباط، از صفحه تماس با ما استفاده کنید.","home.formRequired":"لطفاً نام و متن پیام را وارد کنید و اطلاعات را بررسی کنید.","home.formNotConnected":"این فرم هنوز به سرور متصل نیست؛ پیام شما ارسال نشد. لطفاً از صفحه تماس با ما استفاده کنید.","home.blogEyebrow":"مطالب آموزشی","home.blogTitle":"تازه‌های سلامت دهان و دندان","home.allBlogs":"مشاهده همه مقالات","home.demoBlogNote":"مقالات این بخش نمونه هستند و بعداً با مطالب منتشرشده کلینیک جایگزین می‌شوند.","home.service1Title":"اصلاح طرح لبخند","home.service1Description":"آشنایی با گزینه‌های دندان‌پزشکی زیبایی برای بهبود هماهنگی و ظاهر لبخند.","home.service2Title":"دندان‌پزشکی زیبایی","home.service2Description":"بررسی روش‌های زیبایی متناسب با وضعیت دندان‌ها و نیازهای هر فرد.","home.service3Title":"ایمپلنت دندان","home.service3Description":"آشنایی با روش جایگزینی دندان‌های ازدست‌رفته با استفاده از ایمپلنت.","home.service4Title":"دندان‌پزشکی عمومی","home.service4Description":"معاینات دوره‌ای، آموزش بهداشت دهان و مراقبت‌های پیشگیرانه.","home.service5Title":"سفید کردن دندان‌ها","home.service5Description":"بررسی روش‌های حرفه‌ای سفید کردن دندان و محدودیت‌های هر روش.","home.service6Title":"درمان ریشه دندان","home.service6Description":"آشنایی با درمان کانال ریشه برای دندان‌هایی که نیاز به بررسی و درمان پالپ دارند.","home.blog1Title":"اشتباهات رایج هنگام مسواک زدن","home.blog2Title":"سفید کردن دندان؛ روش‌های ایمن و نکات مهم","home.blog3Title":"آشنایی با مشکلات دندان غیرزنده"},ta={"auth.shell.asideLabel":"Patient Portal Introduction","auth.shell.care":"Dental Care","auth.shell.private":"Your Privacy Is Protected","auth.shell.easy":"Easy Appointments","auth.shell.priority":"Your Smile, Our Priority","auth.shell.tagline":"A Better Dental Experience Starts Here","auth.shell.back":"Back to Website","auth.shell.portal":"Patient Portal","auth.shell.loginLegal":"Sign in using your mobile number and verification code, or your email and password.","auth.login.title":"Welcome Back","auth.login.subtitle":"Choose your preferred method to sign in to your account.","auth.login.sideTitle":"Every Beautiful Smile Begins with Great Care.","auth.login.sideCopy":"Your personal space to manage appointments and track your dental treatments.","auth.login.methodPhone":"Mobile Login","auth.login.methodEmail":"Email Login","auth.login.phone":"Mobile Number","auth.login.phonePlaceholder":"09123456789","auth.login.sendCode":"Send Verification Code","auth.login.codeSentTo":"A verification code has been sent to:","auth.login.code":"6-Digit Verification Code","auth.login.codePlaceholder":"Enter the 6-digit code","auth.login.codeValidity":"The verification code is valid for 2 minutes.","auth.login.verify":"Verify and Sign In","auth.login.editPhone":"Change Mobile Number","auth.login.resend":"Resend Code","auth.login.email":"Email Address","auth.login.emailPlaceholder":"example@email.com","auth.login.password":"Password","auth.login.passwordPlaceholder":"Enter your password","auth.login.signIn":"Sign In","auth.login.forgotPassword":"Forgot Password?","auth.login.newPatient":"New to Our Clinic?","auth.login.createAccount":"Create an Account","auth.login.invalidPhone":"Please enter a valid mobile number.","auth.login.invalidEmail":"Please enter a valid email address.","auth.login.enterPassword":"Please enter your password.","auth.login.invalidCredentials":"Invalid email or password.","auth.login.invalidCodeFormat":"Please enter the 6-digit verification code.","auth.login.invalidCode":"The verification code is incorrect or has expired.","auth.login.noAccount":"No account was found with this mobile number. Please register first.","auth.login.tooMany":"Too many requests. Please try again later.","auth.login.timeout":"The request timed out. Please try again.","auth.login.networkError":"Unable to connect to the server. Please check your internet connection.","auth.login.serverError":"The clinic server is temporarily unavailable.","auth.login.sent":"Verification code sent successfully.","auth.login.resent":"A new verification code has been sent.","auth.login.invalidApiToken":"Login was verified, but a valid authentication token was not received from the server.","auth.register.title":"Patient Registration","auth.register.subtitle":"Enter your information to create your patient account.","auth.register.sideTitle":"A Personal Space for a Healthier Smile.","auth.register.sideCopy":"Manage your appointments, treatment plans and payments in one place.","auth.register.name":"Full Name","auth.register.namePlaceholder":"Enter your full name","auth.register.phone":"Mobile Number","auth.register.referral":"Referral Code (Optional)","auth.register.referralPlaceholder":"Enter your referral code if you have one","auth.register.sendCode":"Send Verification Code","auth.register.codeSentTo":"A verification code was sent to:","auth.register.code":"6-Digit Verification Code","auth.register.codePlaceholder":"Enter the 6-digit code","auth.register.codeValidity":"The verification code is valid for 2 minutes.","auth.register.verify":"Verify and Register","auth.register.editPhone":"Edit Information","auth.register.resend":"Resend Code","auth.register.haveAccount":"Already have an account?","auth.register.signIn":"Sign In","auth.register.success":"Your account has been created successfully.","auth.register.goToLogin":"Go to Login","auth.register.invalidName":"Please enter a valid full name.","auth.register.invalidPhone":"Please enter a valid mobile number.","auth.register.invalidCodeFormat":"Please enter the 6-digit verification code.","auth.register.invalidCode":"The verification code is incorrect or has expired.","auth.register.invalidData":"Your registration information is invalid. Please review it.","auth.register.alreadyRegistered":"This mobile number is already registered.","auth.register.sessionExpired":"Your registration session has expired. Please try again.","auth.register.sent":"Verification code sent successfully.","auth.register.resent":"A new verification code has been sent.","auth.register.tooMany":"Too many requests. Please try again later.","auth.register.timeout":"The request timed out. Please try again.","auth.register.networkError":"Unable to connect to the server. Please check your internet connection.","auth.register.serverError":"The clinic server is temporarily unavailable.","auth.register.requestFailed":"Something went wrong. Please try again.","auth.forgot.title":"Reset Your Password","auth.forgot.subtitle":"Enter your mobile number to receive a verification code.","auth.forgot.sideTitle":"Your Smile Is Always Our Priority.","auth.forgot.sideCopy":"Recover your account securely and get back to managing your dental care.","auth.forgot.phone":"Mobile Number","auth.forgot.sendCode":"Send Verification Code","auth.forgot.codeSentTo":"A verification code was sent to:","auth.forgot.code":"6-Digit Verification Code","auth.forgot.codePlaceholder":"Enter the 6-digit code","auth.forgot.verify":"Verify Code","auth.forgot.changePhone":"Change Mobile Number","auth.forgot.resend":"Resend Code","auth.forgot.verifiedPhone":"Verified mobile number:","auth.forgot.newPassword":"New Password","auth.forgot.newPasswordPlaceholder":"At least 8 characters","auth.forgot.confirmPassword":"Confirm New Password","auth.forgot.confirmPlaceholder":"Enter your new password again","auth.forgot.resetPassword":"Reset Password","auth.forgot.backToLogin":"Back to Login","auth.forgot.success":"Your password has been reset successfully. You can now sign in.","auth.forgot.invalidPhone":"Please enter a valid mobile number.","auth.forgot.invalidCodeFormat":"The verification code must contain 6 digits.","auth.forgot.invalidCode":"The verification code is invalid or has expired.","auth.forgot.shortPassword":"Your password must contain at least 8 characters.","auth.forgot.passwordMismatch":"The passwords do not match.","auth.forgot.sessionExpired":"Recovery information is missing. Please request a new code.","auth.forgot.invalidData":"The submitted information is invalid.","auth.forgot.sent":"Verification code sent successfully.","auth.forgot.resent":"A new verification code has been sent.","auth.forgot.verified":"Mobile number verified. Please enter your new password.","auth.forgot.tooMany":"Too many requests. Please try again later.","auth.forgot.timeout":"The request timed out.","auth.forgot.serverError":"The server is temporarily unavailable.","auth.forgot.networkError":"Unable to connect to the server.","auth.forgot.requestFailed":"Something went wrong. Please try again.","auth.shell.privacyLegal":"Your account information is processed through a secure connection to the server.","auth.forgot.resetTokenExpired":"Your password reset session has expired. Please request a new verification code.","auth.sessionExpired":"Your session expired after 15 minutes of inactivity. Please sign in again.","profile.dashboard":"Patient Dashboard","profile.title":"My Profile","profile.subtitle":"Your account information and personal details.","profile.information":"Personal Information","profile.name":"Full Name","profile.email":"Email Address","profile.phone":"Mobile Number","profile.referral":"Referral Code","profile.notSet":"Not provided","profile.loading":"Loading your profile...","profile.loaded":"Your profile is up to date.","profile.partial":"Basic details loaded; full profile is unavailable.","profile.loadError":"Unable to load your profile information.","profile.reload":"Reload","profile.logout":"Sign Out","profile.phoneHint":"Your mobile number can only be changed after SMS verification.","blog.title":"Blog","blog.home":"Home","blog.latest":"Latest Updates","blog.heading":"Find the Latest News and Updates Here.","blog.loading":"Loading articles...","blog.empty":"No articles are available at the moment.","blog.error":"Unable to load articles. Please try again.","blog.retry":"Try Again","blog.readArticle":"Read Article","blog.details.page":"Dental Blog","blog.details.breadcrumb":"Blog Details","blog.details.categories":"Categories","blog.details.recent":"Recent Posts","blog.details.loading":"Loading article...","blog.details.notFound":"The requested article was not found.","blog.details.error":"Unable to load the article.","blog.details.retry":"Try Again","blog.details.back":"Back to Blog","header.login":"Login","header.dashboard":"Dashboard","header.loginAria":"Sign in to your patient account","header.dashboardAria":"Open patient dashboard","header.home":"Home","header.about":"About Us","header.services":"Services","header.blog":"Blog","header.contact":"Contact Us","header.logo":"Dentistry","header.menu":"Toggle navigation","header.language":"Site language","footer.eyebrow":"A NEW PERSPECTIVE ON DENTAL CARE","footer.heroTitle":"Your smile deserves","footer.heroHighlight":"something special.","footer.heroDescription":"A healthy, beautiful smile begins with care and awareness. Connect with us to learn more about the clinic and get answers to your questions.","footer.contactUs":"Contact Us","footer.brandName":"Dr. Zeinolabedin","footer.brandDescription":"A place to explore dental care, treatment options, and practical advice for maintaining good oral health.","footer.brandTag":"Care begins with confidence","footer.explore":"Quick Links","footer.patients":"For Patients","footer.getInTouch":"Get in Touch","footer.home":"Home","footer.about":"About Us","footer.team":"Our Team","footer.blog":"Dental Blog","footer.faq":"Frequently Asked Questions","footer.login":"Patient Login","footer.register":"Create an Account","footer.contactDescription":"For more information or questions, feel free to reach out through our contact page.","footer.contactLink":"Go to Contact Page","footer.copyright":"All rights reserved.","footer.backToTop":"Back to Top","footer.parentCompany":"Mazorya Group","about.breadcrumb":"About Us","about.home":"Home","about.imageAlt":"Dental clinic interior","about.introEyebrow":"About Us","about.introTitle":"A Thoughtful Approach to Your Smile","about.introDescription":"Oral health is an important part of overall well-being. Understanding preventive care, exploring treatment options, and asking informed questions can help patients make better decisions about their dental health.","about.feature1Title":"Information Before Decisions","about.feature1Description":"Understanding treatment steps and discussing concerns are important parts of making informed choices.","about.feature2Title":"Individual Treatment Needs","about.feature2Description":"Every patient has different oral health needs. Appropriate treatment depends on a professional examination and clinical assessment.","about.contactButton":"Contact Us","about.treatmentEyebrow":"Dental Services","about.treatmentTitle":"Explore Dental Treatments","about.treatmentDescription":"Discover the dental services currently listed by the clinic and visit each service page to learn more.","about.servicesLoading":"Loading services...","about.servicesEmpty":"No services are currently available.","about.servicesError":"Unable to load services.","about.retry":"Try Again","about.serviceDetails":"View Details","about.teamEyebrow":"Get in Touch","about.teamTitle":"We're Here for Your Questions","about.teamDescription":"Whether you want to learn more about available services, explore treatment options, or ask about visiting the clinic, you can reach out through our contact page.","about.teamButton":"Contact Us","about.faqEyebrow":"FAQ","about.faqTitle":"Frequently Asked Questions","about.faq1Question":"How often should I visit the dentist?","about.faq1Answer":"Regular dental checkups are recommended for many patients. The appropriate interval depends on your oral health needs and your dentist's assessment.","about.faq2Question":"What causes tooth decay?","about.faq2Answer":"Bacteria in dental plaque produce acids when they break down sugars and fermentable carbohydrates. Over time, these acids can remove minerals from tooth enamel and lead to cavities.","about.faq3Question":"How can I prevent gum disease?","about.faq3Answer":"Regular brushing with fluoride toothpaste, cleaning between teeth, routine dental checkups, and early attention to symptoms such as bleeding gums can help maintain gum health.","about.faq4Question":"Are teeth whitening treatments safe?","about.faq4Answer":"Professional whitening is generally safe when the method is appropriate and supervised by a dentist. Temporary sensitivity or gum irritation may occur, and whitening is not suitable for everyone.","about.faq5Question":"What are dental implants?","about.faq5Answer":"Dental implants are used to replace missing teeth. A post, typically made of titanium, is placed in the jawbone and later supports a dental restoration. Suitability depends on a professional examination and individual clinical conditions.","about.teamPreview":"معرفی پزشکان این بخش پس از تکمیل اطلاعات تیم پزشکی نمایش داده می‌شود.","about.demoTreatment1Title":"Smile Design","about.demoTreatment1Description":"Explore cosmetic dental options that may improve the appearance and harmony of your smile.","about.demoTreatment2Title":"Cosmetic Dentistry","about.demoTreatment2Description":"Discover aesthetic dental treatment options tailored to individual needs and goals.","about.demoTreatment3Title":"Dental Implants","about.demoTreatment3Description":"Learn about dental implants as an option for replacing missing teeth.","about.demoTreatment4Title":"Teeth Whitening","about.demoTreatment4Description":"Explore professional teeth whitening options under dental supervision.","about.demoTreatment5Title":"General Dentistry","about.demoTreatment5Description":"Routine examinations, preventive care, and assessment of common oral health concerns.","about.servicesDemoNote":"These services are currently displayed as a design preview.","about.doctor1Name":"Dr. Fiona Park","about.doctor1Role":"General Dentistry","about.doctor2Name":"Dr. John Martin","about.doctor2Role":"Cosmetic Dentistry","about.doctor3Name":"Dr. Archie White","about.doctor3Role":"Dental Care","about.doctor4Name":"Dr. Maria Angel","about.doctor4Role":"Restorative Dentistry","about.teamDemoNote":"Names and images are for demonstration only and will be replaced with the actual medical team.","teamDetails.home":"Home","teamDetails.team":"Our Medical Team","teamDetails.specialty":"Area of Practice","teamDetails.information":"Doctor Information","teamDetails.informationText":"Professional credentials, experience, and availability will be displayed after the clinic provides verified information.","teamDetails.eyebrow":"Doctor Profile","teamDetails.aboutTitle":"About","teamDetails.aboutDescription":"Explore the general field of dental care associated with this profile. Individual professional information will be completed in the final version.","teamDetails.focusTitle":"Areas of Dental Care","teamDetails.focus1":"General dentistry includes examinations, preventive care, and assessment of common oral health conditions.","teamDetails.focus2":"Cosmetic dentistry explores treatments that may improve smile appearance, tooth shape, and dental aesthetics.","teamDetails.focus3":"Dental care includes oral hygiene, preventive education, and follow-up of patients' dental needs.","teamDetails.focus4":"Restorative dentistry focuses on restoring damaged teeth and improving their appearance and function.","teamDetails.approachTitle":"Choosing the Right Treatment","teamDetails.approachDescription":"Appropriate treatment depends on a dental examination, clinical assessment, and the individual needs of each patient.","teamDetails.previewBadge":"Demo Profile","teamDetails.previewNotice":"This is a design preview. The displayed name, photo, and specialty are examples and do not establish that this doctor works at the clinic.","teamDetails.backToDoctors":"Back to Our Doctors","teamDetails.contactButton":"Contact the Clinic","teamDetails.notFound":"Doctor profile not found.","home.heroTitle":"Open Wide to a World of Smiles","home.heroDescription":"Explore dental services, understand treatment options, and connect with the clinic as you take the first step toward better oral health.","home.heroImageAlt":"Dental care and smile illustration","home.bookNow":"Book an Appointment","home.aboutEyebrow":"Who We Are","home.aboutTitle":"A Thoughtful Approach to Dental Care","home.aboutDescription":"Every patient has individual needs. Clinical assessment, clear explanations of treatment options, and attention to preventive care can help people make informed choices.","home.aboutImageAlt":"Dental clinic environment","home.aboutFeature1":"Clear information about dental treatments","home.aboutFeature2":"Attention to each patient’s unique needs","home.questions":"Have Questions?","home.contactUs":"Contact the Clinic","home.readMore":"Read More","home.servicesEyebrow":"Our Services","home.servicesTitle":"Personalized Dental Care Options","home.allServices":"View All Services","home.demoServicesNote":"The services shown here are design-preview examples.","home.treatmentEyebrow":"Treatments","home.treatmentTitle":"Explore Dental Treatment Options","home.contactEyebrow":"Get in Touch","home.contactTitle":"Have a Question? Send Us a Message","home.contactImageAlt":"Dental clinic contact section","home.name":"Full Name","home.email":"Email Address","home.phone":"Phone Number","home.subject":"Subject","home.message":"Your Message","home.submit":"Send Message","home.contactDemoNote":"This form is a preview and does not send messages to a server. Please use the Contact Us page to reach the clinic.","home.formRequired":"Please enter your name and message, and review the fields.","home.formNotConnected":"The form is not connected to a server yet. Your message was not sent. Please use the Contact Us page.","home.blogEyebrow":"Dental Insights","home.blogTitle":"Oral Health Articles","home.allBlogs":"View All Articles","home.demoBlogNote":"These articles are design-preview examples and will be replaced by published clinic articles.","home.service1Title":"Smile Design","home.service1Description":"Explore cosmetic options that may improve the appearance and harmony of your smile.","home.service2Title":"Cosmetic Dentistry","home.service2Description":"Discover aesthetic treatments suited to individual dental needs and goals.","home.service3Title":"Dental Implants","home.service3Description":"Learn about dental implants as an option for replacing missing teeth.","home.service4Title":"General Dentistry","home.service4Description":"Routine examinations, oral hygiene guidance, and preventive care.","home.service5Title":"Teeth Whitening","home.service5Description":"Explore professional whitening methods and their limitations.","home.service6Title":"Root Canal Treatment","home.service6Description":"Learn about root canal therapy for teeth requiring pulp assessment and treatment.","home.blog1Title":"Common Mistakes When Brushing Teeth","home.blog2Title":"Teeth Whitening: Safety and Best Practices","home.blog3Title":"Understanding Non-Vital Teeth"},Tt="dentistry.lang",at="en",aa=new Set(["fa","en"]),At={fa:ea,en:ta},Te=e=>String(e??"").replace(/\s+/g," ").trim();function He(e){return aa.has(e)}function X(){if(typeof window>"u")return at;const e=new URLSearchParams(window.location.search).get("lang");if(He(e))return e;try{const t=localStorage.getItem(Tt);if(He(t))return t}catch{}return at}function i(e){var n;const t=Te(e);if(!t)return String(e??"");const a=X(),o=(n=At[a])==null?void 0:n[t];return typeof o=="string"&&o.length>0?o:String(e??"")}function oa(e){const t=X(),a=t==="fa"?"fa-IR":"en-US",o=Number(e??0);return`${new Intl.NumberFormat(a).format(Number.isFinite(o)?o:0)} ${t==="fa"?"تومان":"toman"}`}function Ke(){if(typeof document>"u")return;const e=X();document.documentElement.lang=e,document.documentElement.dir=e==="fa"?"rtl":"ltr",document.documentElement.dataset.locale=e}function na(e){var u,b;if(!e||typeof document>"u")return;const t=X(),a=At[t]||{},o=new Set(["SCRIPT","STYLE","NOSCRIPT","CODE","PRE","SVG"]),n=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,{acceptNode(f){const p=f.parentElement;return!p||p.closest("[data-no-translate]")||o.has(p.tagName)||p.closest("svg")?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}}),r=[];for(;n.nextNode();)r.push(n.currentNode);for(const f of r){const p=f.nodeValue,c=Te(p);if(!c)continue;const s=a[c];if(typeof s!="string")continue;const d=((u=p.match(/^\s*/))==null?void 0:u[0])??"",g=((b=p.match(/\s*$/))==null?void 0:b[0])??"";f.nodeValue=d+s+g}const l=e.querySelectorAll("[placeholder],[title],[aria-label],[alt],[value]");for(const f of l){if(f.closest("[data-no-translate]"))continue;const p=["placeholder","title","aria-label","alt"];for(const c of p){if(!f.hasAttribute(c))continue;const s=f.getAttribute(c),d=Te(s),g=a[d];typeof g=="string"&&f.setAttribute(c,g)}if(f.tagName==="INPUT"&&["submit","button"].includes(f.type)){const c=f.getAttribute("value"),s=Te(c),d=a[s];typeof d=="string"&&f.setAttribute("value",d)}}}function Ze(e=""){const t=X();return`
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
  `}function ia(e,t){if(!He(e))return;try{localStorage.setItem(Tt,e)}catch{}const a=new URL(window.location.href);a.searchParams.set("lang",e),window.history.replaceState(window.history.state,"",a.pathname+a.search+a.hash),Ke(),typeof t=="function"&&t()}Ke();const qe="dentistry.patient.jwt",Ve="dentistry.patient.client";function xe(e){var o;if((e==null?void 0:e.success)!==!0||typeof((o=e==null?void 0:e.data)==null?void 0:o.token)!="string"||!e.data.token.trim())throw new Error("AUTH_TOKEN_MISSING");const{token:t,client:a}=e.data;if(sessionStorage.setItem(qe,t),a&&typeof a=="object"){const n={id:a.id??null,name:a.name??null,email:a.email??null,phone:a.phone??null,referral_code:a.referral_code??null,referrer_id:a.referrer_id??null};sessionStorage.setItem(Ve,JSON.stringify(n))}else sessionStorage.removeItem(Ve);return a??null}function we(){try{return sessionStorage.getItem(qe)}catch{return null}}function Ce(){try{sessionStorage.removeItem(qe),sessionStorage.removeItem(Ve)}catch{}}function ra(e){var a;const t=(a=e==null?void 0:e.data)==null?void 0:a.token;if(typeof t!="string"||!t.trim())throw new Error("AUTH_TOKEN_MISSING");return sessionStorage.setItem(qe,t),t}const Qe="dentistry.patient.lastActivity",sa=15*60*1e3;function la(){try{return Number(sessionStorage.getItem(Qe))}catch{return 0}}function xt(e=Date.now()){try{return sessionStorage.setItem(Qe,String(e)),!0}catch{return!1}}function ca(e){if(typeof e!="string"||e.split(".").length!==3)return!1;try{const t=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),a=JSON.parse(atob(t.padEnd(Math.ceil(t.length/4)*4,"=")));return typeof a.exp=="number"&&Date.now()>=a.exp*1e3}catch{return!1}}function Ct(){window.dispatchEvent(new Event("dentistry:auth-changed"))}function ot(){return!we()||!xt()?!1:(Ct(),!0)}function da(){Ce();try{sessionStorage.removeItem(Qe)}catch{}Ct()}function pe(){const e=we();if(!e)return!1;const t=la();return!t||Date.now()-t>=sa||ca(e)?(da(),!1):!0}function ua(){return pe()?xt():!1}function pa(e){const t=new AbortController,{signal:a}=t;let o=pe(),n=0;const r=()=>{const b=pe();o&&!b&&(e==null||e()),o=b},l=()=>{if(!pe()){r();return}const b=Date.now();b-n<1e3||(n=b,ua(),o=!0)};for(const b of["pointerdown","keydown","touchstart","scroll"])document.addEventListener(b,l,{signal:a,passive:!0,capture:b==="scroll"});document.addEventListener("visibilitychange",()=>{document.hidden||r()},{signal:a}),window.addEventListener("focus",r,{signal:a}),window.addEventListener("pageshow",r,{signal:a});const u=window.setInterval(r,5e3);return()=>{t.abort(),window.clearInterval(u)}}const Dt=[{url:"/",key:"header.home",en:"Home",fa:"خانه"},{url:"/about-us",key:"header.about",en:"About Us",fa:"درباره ما"},{url:"/service",key:"header.services",en:"Services",fa:"خدمات"},{url:"/blog",key:"header.blog",en:"Blog",fa:"وبلاگ"},{url:"/contact-us",key:"header.contact",en:"Contact Us",fa:"تماس با ما"}];function ye(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Q(e,t,a){const o=i(e);return o!==e&&o?o:X()==="fa"?a:t}function Lt(){return window.location.pathname.replace(/\/+$/,"")||"/"}function qt(e){const t=Lt();return!!(t===e||e==="/service"&&t.startsWith("/services/")||e==="/blog"&&t.startsWith("/post/"))}function It(){const e=pe();return{authenticated:e,href:e?"/dashboard":"/login",label:e?Q("header.dashboard","Dashboard","داشبورد"):Q("header.login","Login","ورود"),ariaLabel:e?Q("header.dashboardAria","Open patient dashboard","ورود به داشبورد بیمار"):Q("header.loginAria","Sign in to patient account","ورود به حساب بیمار")}}const ha=`
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
`;function nt(e){const t=It();return`
    <a
      href="${t.href}"
      class="dentistry-header-auth dentistry-header-auth-${e} w-inline-block"
      data-header-auth
      data-auth-type="${e}"
      aria-label="${ye(t.ariaLabel)}"
    >
      ${ha}

      <span class="dentistry-header-auth-text">
        ${ye(t.label)}
      </span>
    </a>
  `}function ma(){return Dt.map(e=>{const t=qt(e.url),a=Q(e.key,e.en,e.fa);return`
      <a
        href="${e.url}"
        data-header-nav-key="${e.key}"
        class="nav-link w-inline-block${t?" w--current":""}"
        ${t?'aria-current="page"':""}
      >
        <div class="nav-link-text">
          ${ye(a)}
        </div>
      </a>
    `}).join("")}function fa(){const e=Lt()==="/";return`
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
                alt="${ye(Q("header.logo","Dentistry","دندان‌پزشکی"))}"
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

              ${ma()}

              <!-- MOBILE AUTH BUTTON -->
              ${nt("mobile")}

            </nav>

            <!-- LANGUAGE SWITCH -->

            ${Ze("dentistry-header-lang")}

            <!-- DESKTOP AUTH BUTTON -->

            ${nt("desktop")}

            <!-- MOBILE HAMBURGER -->

            <div
              class="hamburger-menu-button w-nav-button"
              aria-label="${ye(Q("header.menu","Toggle navigation","باز و بسته کردن منو"))}"
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
  `}function ba(){const e=Jt(),t=document.querySelector("[data-dentistry-header]");if(!t)return()=>{typeof e=="function"&&e()};function a(){const f=It();t.querySelectorAll("[data-header-auth]").forEach(p=>{p.href=f.href,p.setAttribute("aria-label",f.ariaLabel);const c=p.querySelector(".dentistry-header-auth-text");c&&(c.textContent=f.label)})}function o(){Dt.forEach(f=>{const p=Array.from(t.querySelectorAll("[data-header-nav-key]")).find(d=>d.dataset.headerNavKey===f.key);if(!p)return;const c=p.querySelector(".nav-link-text");c&&(c.textContent=Q(f.key,f.en,f.fa));const s=qt(f.url);p.classList.toggle("w--current",s),s?p.setAttribute("aria-current","page"):p.removeAttribute("aria-current")})}function n(){const f=X(),p=t.querySelector(".dentistry-lang-switch");p&&p.setAttribute("aria-label",Q("header.language","Site language","زبان سایت")),t.querySelectorAll("[data-set-language]").forEach(c=>{const s=c.dataset.setLanguage===f;c.classList.toggle("is-active",s),c.setAttribute("aria-pressed",String(s))})}function r(){const f=t.querySelector("[data-header-logo]");f&&(f.alt=Q("header.logo","Dentistry","دندان‌پزشکی"));const p=t.querySelector("[data-header-menu-button]");p&&p.setAttribute("aria-label",Q("header.menu","Toggle navigation","باز و بسته کردن منو"))}function l(){t.isConnected&&(o(),a(),n(),r())}l(),window.addEventListener("dentistry:auth-changed",l);const u=new MutationObserver(l);u.observe(document.documentElement,{attributes:!0,attributeFilter:["lang","dir"]});function b(){document.hidden||l()}return document.addEventListener("visibilitychange",b),window.addEventListener("focus",l),()=>{u.disconnect(),window.removeEventListener("dentistry:auth-changed",l),window.removeEventListener("focus",l),document.removeEventListener("visibilitychange",b),typeof e=="function"&&e()}}function ga(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function H(e){return ga(i(`footer.${e}`))}const it={diagonalArrow:`
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
  `};function ie(e,t){return`
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
          ${H(t)}
        </span>

      </a>

    </li>
  `}function va(){const e=new Date().getFullYear();return`
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
              aria-label="${H("brandName")}"
            >

              <span class="dz-footer-logo-box">

                <img
                  src="/asset/img/logo.png"
                  alt="${H("brandName")}"
                  class="dz-footer-logo"
                  loading="lazy"
                />

              </span>

              <span class="dz-footer-brand-name">
                ${H("brandName")}
              </span>

            </a>

            <!-- BRAND DESCRIPTION -->

            <p class="dz-footer-brand-description">
              ${H("brandDescription")}
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
                ${H("brandTag")}
              </span>

            </div>

          </div>

          <!-- =====================================
               QUICK LINKS
          ====================================== -->

          <div class="dz-footer-column">

            <h3 class="dz-footer-column-heading">
              ${H("explore")}
            </h3>

            <ul class="dz-footer-nav-list">

              ${ie("/","home")}

              ${ie("/about-us","about")}

              ${ie("/team","team")}

              ${ie("/blog","blog")}

            </ul>

          </div>

          <!-- =====================================
               PATIENT LINKS
          ====================================== -->

          <div class="dz-footer-column">

            <h3 class="dz-footer-column-heading">
              ${H("patients")}
            </h3>

            <ul class="dz-footer-nav-list">

              ${ie("/login","login")}

              ${ie("/register","register")}

              ${ie("/faq","faq")}

            </ul>

          </div>

          <!-- =====================================
               CONTACT
          ====================================== -->

          <div class="dz-footer-column dz-footer-contact">

            <h3 class="dz-footer-column-heading">
              ${H("getInTouch")}
            </h3>

            <p class="dz-footer-contact-description">
              ${H("contactDescription")}
            </p>

            <a
              href="/contact-us"
              class="dz-footer-contact-link"
            >

              <span>
                ${H("contactLink")}
              </span>

              ${it.diagonalArrow}

            </a>

          </div>

        </div>

        <!-- =====================================
             BOTTOM
        ====================================== -->

        <div class="dz-footer-bottom">

  <!-- COPYRIGHT - LEFT -->

  <p class="dz-footer-copyright">
    © ${e} ${H("brandName")}.
    ${H("copyright")}
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
    aria-label="${H("backToTop")}"
  >
    <span>${H("backToTop")}</span>

    <span class="dz-footer-back-top-icon">
      ${it.up}
    </span>
  </button>

</div>

      </div>

    </footer>
  `}function ya(){const e=document.querySelector("[data-dz-footer]");if(!e)return()=>{};const t=new AbortController,{signal:a}=t,o=e.querySelector("[data-footer-back-top]");return o==null||o.addEventListener("click",()=>{const n=window.matchMedia("(prefers-reduced-motion: reduce)").matches;window.scrollTo({top:0,behavior:n?"auto":"smooth"})},{signal:a}),()=>{t.abort()}}const ne=()=>X()==="fa"?"fa":"en",j=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),q=e=>j(i(`home.${e}`)),he=e=>typeof e=="string"?e.trim():"",te="https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/",wa="https://cdn.prod.website-files.com/6768f6d314e679aeffeed929/679c51db219feb60fb4c94c4_hero%20image.webp",$a="https://cdn.prod.website-files.com/6768f6d314e679aeffeed929/679c4b211f44d535f9e7da9c_1.svg",Pt='<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>',me='<svg viewBox="0 0 64 64" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><path d="M18 8C10 8 5 14 5 24c0 9 4 16 7 24 2 5 5 8 9 7 4-1 3-9 5-15 1-4 3-6 6-6s5 2 6 6c2 6 1 14 5 15 4 1 7-2 9-7 3-8 7-15 7-24 0-10-5-16-13-16-6 0-9 4-14 4s-8-4-14-4Z"/></svg>',ka=[te+"67739cb05026dbf725d4e6e6_service%20image%20%281%29.webp",te+"6773a8df753ab7c72f9cc04f_service%20image%20%289%29.webp",te+"6773a948a802dec038145370_service%20image%20%282%29.webp",te+"6773a9540dd9d020f977e7e6_service%20image%20%283%29.webp",te+"6773a95f18d02159b11b502c_service%20image%20%284%29.webp",te+"6773a948a802dec038145370_service%20image%20%282%29.webp"],Sa=[te+"676a535bc2ab95ad9983363c_blog%20image%20%284%29.webp",te+"676a53cf0e3c157f6e1fa3f0_blog%20image%20%285%29.webp",te+"676a540c9da3b01fd9958a20_blog%20image%20%286%29.webp"];function Xe(){return ka.map((e,t)=>({id:null,name:i(`home.service${t+1}Title`),description:i(`home.service${t+1}Description`),image:e,isDemo:!0}))}function Nt(){return Sa.map((e,t)=>({slug:"",title:i(`home.blog${t+1}Title`),image:e,date:"",isDemo:!0}))}function De(){const e="/api".replace(/\/+$/,"");return/\/api\/v1$/i.test(e)||/\/v1$/i.test(e)?e:/\/api$/i.test(e)?`${e}/v1`:`${e}/api/v1`}function Ea(){return`${De().replace(/\/v1$/i,"")}/messages`}function Rt(e){const t=he(e);if(!t||/[<>"'\u0000-\u001f]/.test(t))return"";try{const a=new URL(De(),window.location.origin).origin,o=/^https?:\/\//i.test(t)||t.startsWith("/")?t:/^(storage|uploads|images)\//i.test(t)?`/${t}`:`/storage/${t}`,n=new URL(o,a);return["http:","https:"].includes(n.protocol)?n.href:""}catch{return""}}function Ot(e){var t;return Array.isArray(e==null?void 0:e.translations)?e.translations.find(a=>(a==null?void 0:a.locale)===ne()||(a==null?void 0:a.lang)===ne())||{}:(t=e==null?void 0:e.translations)!=null&&t[ne()]?e.translations[ne()]:e!=null&&e.translation&&(!e.translation.locale||e.translation.locale===ne())?e.translation:{}}function Ta(e){if(!e||typeof e!="object"||[!1,0,"0"].includes(e.is_active))return null;const t=Number(e.id);if(!Number.isSafeInteger(t)||t<=0)return null;const a=Ot(e),o=he(a.name||a.title_1||a.title||e.name||e.title_1||e.title);return o?{id:t,name:o,description:he(a.description_1||a.description||e.description_1||e.description),image:Rt(e.image_url||e.image_1_url||e.image||e.image_1||e.cover_image||""),isDemo:!1}:null}function Aa(e){if(!e||typeof e!="object")return null;const t=Ot(e),a=he(t.title_1||e.title_1||t.title||e.title);if(!a)return null;const o=he(e.slug||e.blog_slug||t.slug),n=/^[a-z0-9-]+$/i.test(o)?o:"",r=he(e.date||e.published_at||e.created_at).slice(0,10);return{id:e.id??null,slug:n,title:a,image:Rt(e.image_1||e.image_1_url||e.image_url||e.cover_image_url||e.image||e.cover_image||""),date:/^\d{4}-\d{2}-\d{2}$/.test(r)?r:"",isDemo:!1}}function rt(e,t){const a=(e==null?void 0:e.data)??e;if(Array.isArray(a))return a;for(const o of[a==null?void 0:a.data,a==null?void 0:a[t],a==null?void 0:a.items,e==null?void 0:e[t]])if(Array.isArray(o))return o;return[]}function $e(e,t,a="button-primary w-inline-block"){return`<a href="${e}" class="${a}"><span class="button-primary-text">${q(t)}</span><span class="button-icon-block">${Pt}</span></a>`}function xa(){return`
    <section class="section hero-one-section dp-home-hero">
      <div class="w-layout-blockcontainer container-fluid w-container">
        <div class="hero-one-main-block">
          <div class="w-layout-grid hero-one-grid">
            <div class="hero-contant-block">
              <div class="hero-icon-inner-block"><div class="hero-one-icon-block">
                <img src="${$a}" loading="eager" alt="" class="hero-one-icon" aria-hidden="true" />
              </div></div>
              <div class="hero-title-block"><h1 class="hero-title">${q("heroTitle")}</h1></div>
              <div class="hero-description"><p class="section-description">${q("heroDescription")}</p></div>
              <div class="hero-button-block">${$e("/login","bookNow")}</div>
            </div>
            <div class="hero-image-block">
              <img src="${wa}" loading="eager" fetchpriority="high" alt="${q("heroImageAlt")}" class="hero-image" />
            </div>
          </div>
        </div>
      </div>
    </section>`}function Ca(){return`
    <section class="section aboutus-section dp-home-about">
      <div class="w-layout-blockcontainer container w-container">
        <div class="main-about-block"><div class="w-layout-grid about-grid">
          <div class="about-image-block">
            <img src="/asset/img/about.jpg" loading="lazy" alt="${q("aboutImageAlt")}" class="about-image" />
            <img src="/asset/img/about-1.jpg" loading="lazy" alt="${q("aboutImageAlt")}" class="about-image-two" />
          </div>
          <div class="about-content-block">
            <div class="about-title-block">
              <div class="section-sub-text">${q("aboutEyebrow")}</div>
              <h2 class="section-title">${q("aboutTitle")}</h2>
            </div>
            <p class="aboutus-description">${q("aboutDescription")}</p>
            <div class="about-two-list-block two"><ul role="list" class="about-two-list">
              <li class="about-two-list-item">
                <div class="about-two-icon-block" aria-hidden="true">${me}</div>
                <div class="about-list-two-info-block"><h3 class="about-two-list-title">${q("aboutFeature1")}</h3></div>
              </li>
              <li class="about-two-list-item last">
                <div class="about-two-icon-block" aria-hidden="true">${me}</div>
                <div class="about-list-two-info-block"><h3 class="about-two-list-title">${q("aboutFeature2")}</h3></div>
              </li>
            </ul></div>
            <div class="contact-number-block"><div class="contact-number-text">
              ${q("questions")} <a href="/contact-us" class="about-contact-link">${q("contactUs")}</a>
            </div></div>
            <div class="about-button-block">${$e("/about-us","readMore")}</div>
          </div>
        </div></div>
      </div>
    </section>`}function _t(e){return e.map(t=>{const a=t.isDemo?"/service":`/services/${t.id}`;return`<div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item">
      <article class="service-info-main-block dp-home-service-card">
        <a href="${a}" class="service-link w-inline-block">
          <div class="service-info-inner-block"><div class="service-icon-inner-block"><div class="service-icon-block" aria-hidden="true">${me}</div>
            <h3 class="service-title-one">${j(t.name)}</h3>
          </div></div>
          <p class="service-description">${j(t.description)}</p>
        </a>
        <div class="service-link-block"><a href="${a}" class="link-block w-inline-block">
          <span class="link-button">${q("readMore")}</span><span class="link-border"></span>
        </a></div>
      </article>
    </div></div></div>`}).join("")}function Da(){return`
    <section class="section service-section dp-home-services" id="home-services">
      <div class="w-layout-blockcontainer container-fluid w-container"><div class="main-grey-block">
        <div class="w-layout-blockcontainer container w-container"><div class="service-main-block">
          <div class="section-title-main-block">
            <div class="section-title-sub-text-block"><div class="section-sub-text">${q("servicesEyebrow")}</div></div>
            <div class="section-title-grid"><h2 class="section-title">${q("servicesTitle")}</h2></div>
          </div>
          <div class="w-layout-grid service-grid-block" data-home-services>${_t(Xe())}</div>
          <p class="dp-home-preview-note" data-home-services-note>${q("demoServicesNote")}</p>
          <div class="dp-home-section-link">${$e("/service","allServices")}</div>
        </div></div>
      </div></div>
    </section>`}function Mt(e){const t=e.slice(0,5),a=t.map((n,r)=>`
    <button id="dp-home-tab-${r}" class="tretment-tab-link-main w-tab-link ${r===0?"w--current":""}"
      type="button" role="tab" tabindex="${r===0?0:-1}" aria-selected="${r===0}"
      aria-controls="dp-home-pane-${r}" data-home-tab="${r}">
      <span class="tretment-link-main-block"><span class="tretment-inner-block">
        <span class="tretment-tab-link">${j(n.name)}</span>
        <span class="tretment-round-block" aria-hidden="true"></span>
      </span></span>
      <span class="tretment-tab-content-block" ${r===0?"":"hidden"}>
        <span class="tretment-tab-content-inner-block"><span class="tretment-icon-box" aria-hidden="true">${me}</span>
          <span class="tretment-description">${j(n.description)}</span>
        </span>
      </span>
    </button>`).join(""),o=t.map((n,r)=>{const l=n.isDemo?"/service":`/services/${n.id}`;return`<div id="dp-home-pane-${r}" class="tretment-tab-pane w-tab-pane ${r===0?"w--tab-active":""}"
      role="tabpanel" aria-labelledby="dp-home-tab-${r}" data-home-pane="${r}" ${r===0?"":"hidden"}>
      <a href="${l}" class="tretment-content-link w-inline-block">
        ${n.image?`<img src="${j(n.image)}" class="tretment-image" loading="lazy" alt="${j(n.name)}" />`:`<span class="dp-home-treatment-placeholder" aria-hidden="true">${me}</span>`}
      </a>
    </div>`}).join("");return{buttons:a,panes:o}}function La(){const e=Mt(Xe());return`
    <section class="section treatment-section dp-home-treatment" id="home-treatments">
      <div class="w-layout-blockcontainer container w-container"><div class="main-treatment-block">
        <div class="treatment-title-block"><div class="section-sub-text">${q("treatmentEyebrow")}</div>
          <h2 class="section-title">${q("treatmentTitle")}</h2>
        </div>
        <div class="treatment-inner-block"><div class="tretment-tabs w-tabs dp-home-treatment-tabs" data-home-treatment>
          <div class="tretment-menu w-tab-menu" role="tablist" aria-label="${q("treatmentTitle")}" data-home-tab-list>${e.buttons}</div>
          <div class="tretment-content w-tab-content" data-home-tab-panes>${e.panes}</div>
        </div></div>
      </div></div>
    </section>`}function qa(){return`
    <section class="section contact-section dp-home-contact">
      <div class="w-layout-blockcontainer container-fluid w-container"><div class="w-layout-grid contact-grid">
        <div class="contact-info-block"><img src="/asset/img/contact.jpg" loading="lazy" alt="${q("contactImageAlt")}" class="contact-image-one" /></div>
        <div class="contact-form-block"><div class="contact-from-inner-block">
          <div class="contact-title-block-one"><div class="section-title-block">
            <div class="section-sub-text two">${q("contactEyebrow")}</div>
            <h2 class="section-title text-white">${q("contactTitle")}</h2>
          </div></div>
          <div class="contact-from-block w-form">
            <form id="home-contact-form">
              <div class="contact-main-block">
                <div class="contact-inner-block"><label class="dp-home-sr-only" for="home-first-name">${q("firstName")}</label>
                  <input id="home-first-name" class="input-field bg-grey w-input" name="first_name" maxlength="120" required
                    type="text" autocomplete="given-name" placeholder="${q("firstName")}" />
                </div>
                <div class="contact-inner-block"><label class="dp-home-sr-only" for="home-last-name">${q("lastName")}</label>
                  <input id="home-last-name" class="input-field bg-grey w-input" name="last_name" maxlength="120" required
                    type="text" autocomplete="family-name" placeholder="${q("lastName")}" />
                </div>
              </div>
              <div class="contact-main-block">
                <div class="contact-inner-block"><label class="dp-home-sr-only" for="home-email">${q("email")}</label>
                  <input id="home-email" class="input-field bg-grey w-input" name="email" maxlength="255" required
                    type="email" autocomplete="email" placeholder="${q("email")}" />
                </div>
                <div class="contact-inner-block"><label class="dp-home-sr-only" for="home-phone">${q("phone")}</label>
                  <input id="home-phone" class="input-field bg-grey w-input" name="phone" maxlength="30" required
                    type="tel" autocomplete="tel" placeholder="${q("phone")}" />
                </div>
              </div>
              <div class="contact-main-block one"><label class="dp-home-sr-only" for="home-message">${q("message")}</label>
                <textarea id="home-message" class="text-area w-input" name="message" maxlength="5000" required
                  placeholder="${q("message")}"></textarea>
              </div>
              <div class="contact-button-block"><div class="button-submit">
                <button type="submit" class="button-primary first dp-home-submit"><span class="button-primary-text last">${q("submit")}</span>
                  <span class="button-icon-block">${Pt}</span>
                </button>
              </div></div>
              <p class="dp-home-contact-status" data-home-contact-status role="status" aria-live="polite" hidden></p>
            </form>
          </div>
        </div></div>
      </div></div>
    </section>`}function Ia(e){if(!/^\d{4}-\d{2}-\d{2}$/.test(e||""))return"";const t=new Date(`${e}T12:00:00Z`);return Number.isNaN(t.getTime())?"":new Intl.DateTimeFormat(ne()==="fa"?"fa-IR":"en-US",{year:"numeric",month:"short",day:"numeric",timeZone:"UTC"}).format(t)}function Bt(e){return e.map(t=>{const a=t.slug?`/post/${encodeURIComponent(t.slug)}`:"/blog";return`<div class="w-dyn-item" role="listitem"><article class="main-blog-block dp-home-blog-card">
      <a href="${a}" class="blog-link-block w-inline-block">
        <div class="blog-image-block">
          ${t.image?`<img src="${j(t.image)}" loading="lazy" alt="${j(t.title)}" class="blog-image" />`:`<span class="dp-home-blog-placeholder" aria-hidden="true">${me}</span>`}
          ${t.date?`<div class="blog-date-block"><time class="blog-date" datetime="${j(t.date)}">${j(Ia(t.date))}</time></div>`:""}
        </div>
        <h3 class="blog-title">${j(t.title)}</h3>
      </a>
      <div class="blog-button-block">${$e(a,"readMore")}</div>
    </article></div>`}).join("")}function Pa(){return`
    <section class="section blog-section dp-home-blog" id="home-blog">
      <div class="w-layout-blockcontainer container w-container"><div class="blog-main-block">
        <div class="section-title-main-block">
          <div class="section-title-sub-text-block"><div class="section-sub-text">${q("blogEyebrow")}</div></div>
          <div class="section-title-grid"><h2 class="section-title">${q("blogTitle")}</h2></div>
        </div>
        <div class="w-dyn-list"><div class="w-dyn-items dp-home-blog-grid" role="list" data-home-blogs>${Bt(Nt())}</div></div>
        <p class="dp-home-preview-note" data-home-blogs-note>${q("demoBlogNote")}</p>
        <div class="dp-home-section-link">${$e("/blog","allBlogs")}</div>
      </div></div>
    </section>`}function Na(){return`<main class="dp-home-page" data-home-page data-no-translate>
    ${xa()}
    ${Ca()}
    ${Da()}
    ${La()}
    ${qa()}
    ${Pa()}
  </main>`}function Ra(){const e=document.querySelector("[data-home-page]");if(!e)return()=>{};const t=new AbortController,{signal:a}=t,o=e.querySelector("[data-home-services]"),n=e.querySelector("[data-home-services-note]"),r=e.querySelector("[data-home-blogs]"),l=e.querySelector("[data-home-blogs-note]"),u=e.querySelector("[data-home-treatment]"),b=e.querySelector("[data-home-tab-list]"),f=e.querySelector("[data-home-tab-panes]"),p=e.querySelector("#home-contact-form"),c=e.querySelector("[data-home-contact-status]");let s=0;function d(m,k=!1){if(!Number.isInteger(m)||m<0||m>=s)return;const D=[...b.querySelectorAll("[data-home-tab]")],C=[...f.querySelectorAll("[data-home-pane]")];D.forEach((L,T)=>{const E=T===m;L.classList.toggle("w--current",E),L.setAttribute("aria-selected",String(E)),L.tabIndex=E?0:-1;const S=L.querySelector(".tretment-tab-content-block");S&&(S.hidden=!E),E&&k&&L.focus()}),C.forEach((L,T)=>{const E=T===m;L.hidden=!E,L.classList.toggle("w--tab-active",E)})}function g(m){o.innerHTML=_t(m.slice(0,6));const k=Mt(m);b.innerHTML=k.buttons,f.innerHTML=k.panes,s=Math.min(m.length,5),u.hidden=s===0,d(0)}function h(m){r.innerHTML=Bt(m.slice(0,3))}g(Xe()),h(Nt()),b.addEventListener("click",m=>{const k=m.target instanceof Element?m.target.closest("[data-home-tab]"):null;k&&d(Number(k.dataset.homeTab))},{signal:a}),b.addEventListener("keydown",m=>{const k=m.target instanceof Element?m.target.closest("[data-home-tab]"):null;if(!k||s===0)return;const D=Number(k.dataset.homeTab);let C=D;if(m.key==="ArrowRight"||m.key==="ArrowDown")C=(D+1)%s;else if(m.key==="ArrowLeft"||m.key==="ArrowUp")C=(D-1+s)%s;else if(m.key==="Home")C=0;else if(m.key==="End")C=s-1;else return;m.preventDefault(),d(C,!0)},{signal:a});let y=!1;const w=p.querySelector('[type="submit"]');p.addEventListener("submit",async m=>{if(m.preventDefault(),y||a.aborted)return;if(c.hidden=!1,c.dataset.state="pending",!p.checkValidity()){c.textContent=i("home.formRequired"),c.dataset.state="error",p.reportValidity();return}const k=new FormData(p),D={first_name:String(k.get("first_name")||"").trim(),last_name:String(k.get("last_name")||"").trim(),email:String(k.get("email")||"").trim(),phone:String(k.get("phone")||"").trim(),message:String(k.get("message")||"").trim()};if(Object.values(D).some(E=>!E)){c.textContent=i("home.formRequired"),c.dataset.state="error";return}y=!0,w.disabled=!0,c.textContent=i("home.formSending");const C=new AbortController,L=()=>C.abort();a.addEventListener("abort",L,{once:!0});const T=setTimeout(L,15e3);try{const E=await fetch(Ea(),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(D),credentials:"omit",cache:"no-store",signal:C.signal}),S=await E.json().catch(()=>null);if(!E.ok||(S==null?void 0:S.status)===!1||(S==null?void 0:S.success)===!1){const x=new Error("MESSAGE_API_FAILED");throw x.status=E.status,x}if(!S||typeof S!="object")throw new Error("INVALID_RESPONSE");if(a.aborted||!e.isConnected)return;p.reset(),c.dataset.state="success",c.textContent=i("home.formSent")}catch(E){if(a.aborted||!e.isConnected)return;console.error("Home: message request failed.",E),c.dataset.state="error",c.textContent=(E==null?void 0:E.status)===422?i("home.formValidationError"):(E==null?void 0:E.name)==="AbortError"?i("home.formTimeout"):i("home.formError")}finally{clearTimeout(T),a.removeEventListener("abort",L),y=!1,!a.aborted&&e.isConnected&&(w.disabled=!1)}},{signal:a});async function $(){try{const m=await fetch(`${De()}/services?lang=${ne()}`,{headers:{Accept:"application/json"},signal:a,cache:"no-store",credentials:"omit"});if(!m.ok)throw new Error(`HTTP ${m.status}`);const k=await m.json();if((k==null?void 0:k.success)===!1||(k==null?void 0:k.status)===!1)throw new Error("API failure");if(a.aborted||!e.isConnected)return;const C=rt(k,"services").map(Ta).filter(Boolean).slice(0,6);C.length&&(g(C),n.hidden=!0)}catch(m){a.aborted||console.info("Home: preview services retained.",m)}}async function v(){try{const m=await fetch(`${De()}/blogs?lang=${ne()}`,{headers:{Accept:"application/json"},signal:a,cache:"no-store",credentials:"omit"});if(!m.ok)throw new Error(`HTTP ${m.status}`);const k=await m.json();if((k==null?void 0:k.success)===!1||(k==null?void 0:k.status)===!1)throw new Error("API failure");if(a.aborted||!e.isConnected)return;const C=rt(k,"blogs").map(Aa).filter(Boolean).slice(0,3);C.length&&(h(C),l.hidden=!0)}catch(m){a.aborted||console.info("Home: preview blogs retained.",m)}}return $(),v(),()=>t.abort()}const Oa=[{slug:"dr-fiona-park",nameKey:"about.doctor1Name",roleKey:"about.doctor1Role",focusKey:"teamDetails.focus1",image:"https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/679c747877e9c706de65ead8_team%20image%20%285%29.png"},{slug:"dr-john-martin",nameKey:"about.doctor2Name",roleKey:"about.doctor2Role",focusKey:"teamDetails.focus2",image:"https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/679c746ed25099b1cddcf11a_team%20image%20%284%29.png"},{slug:"dr-archie-white",nameKey:"about.doctor3Name",roleKey:"about.doctor3Role",focusKey:"teamDetails.focus3",image:"https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/679c745448e62cb3588e5bce_team%20image%206.png"},{slug:"dr-maria-angel",nameKey:"about.doctor4Name",roleKey:"about.doctor4Role",focusKey:"teamDetails.focus4",image:"https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/679c7461bd9d9a04eda1761c_team%20image%20%281%29.png"}];function Ft(){return Oa.map(e=>({...e,name:i(e.nameKey),role:i(e.roleKey),focus:i(e.focusKey)}))}function _a(e){return Ft().find(t=>t.slug===e)||null}function Ut(){return X()==="fa"?"fa":"en"}function Z(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function O(e){return Z(i(`about.${e}`))}function ze(e){return typeof e=="string"?e.trim():""}const Je=`
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
`,Ma=`
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
`;function Ht(){const e="/api".replace(/\/+$/,"");return/\/api\/v1$/i.test(e)?e:/\/api$/i.test(e)?`${e}/v1`:/\/v1$/i.test(e)?e:`${e}/api/v1`}function Ba(){return`${Ht()}/services?lang=${Ut()}`}function Fa(e){const t=ze(e);if(!t)return"";try{const a=new URL(Ht(),window.location.origin).origin;let o=t;/^https?:\/\//i.test(t)||(t.startsWith("/")?o=t:/^(storage|uploads)\//i.test(t)?o=`/${t}`:o=`/storage/${t}`);const n=new URL(o,a);return["http:","https:"].includes(n.protocol)?n.href:""}catch{return""}}function Ua(e){var a;const t=Ut();return Array.isArray(e.translations)?e.translations.find(o=>o.locale===t||o.lang===t)||{}:(a=e.translations)!=null&&a[t]?e.translations[t]:e.translation&&(!e.translation.locale||e.translation.locale===t)?e.translation:{}}function Ha(e){if(!e||typeof e!="object")return null;const t=Number(e.id);if(!Number.isSafeInteger(t)||t<=0||e.is_active===!1||e.is_active===0||e.is_active==="0")return null;const a=Ua(e),o=ze(a.name||a.title||e.name||e.title);return o?{id:t,name:o,description:ze(a.description||e.description),image:Fa(e.image_1_url||e.image_url||e.image_1||e.image||e.cover_image||""),isDemo:!1}:null}const Va=["https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/67739cb05026dbf725d4e6e6_service%20image%20%281%29.webp","https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/6773a8df753ab7c72f9cc04f_service%20image%20%289%29.webp","https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/6773a948a802dec038145370_service%20image%20%282%29.webp","https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/6773a95f18d02159b11b502c_service%20image%20%284%29.webp","https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/6773a9540dd9d020f977e7e6_service%20image%20%283%29.webp"];function za(){return Va.map((e,t)=>{const a=t+1;return{id:null,name:i(`about.demoTreatment${a}Title`),description:i(`about.demoTreatment${a}Description`),image:e,isDemo:!0}})}function Ga(){return`
    <section class="section breadcrumb-section">
      <div class="w-layout-blockcontainer container-fluid w-container">
        <div class="breadcrumb-block">
          <div class="w-layout-blockcontainer container w-container">

            <div class="breadcrumb-main-title-block">

              <div class="breadcrumb-title-block">
                <h1 class="breadcrumb-title">
                  ${O("breadcrumb")}
                </h1>
              </div>

              <div class="breadcrumb-subtext-block">

                <a href="/" class="breadcrumb-subtext">
                  ${O("home")}
                </a>

                <span class="breadcrumb-subtext">-</span>

                <span class="breadcrumb-subtext"
                      aria-current="page">
                  ${O("breadcrumb")}
                </span>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  `}function ja(){return`
    <section class="section about-one-section">

      <div class="w-layout-blockcontainer container w-container">

        <div class="about-one-main-block">
          <div class="w-layout-grid about-one-grid">

            <div class="about-one-image-block">
              <img
                src="/asset/img/IMG_0943.jpg"
                alt="${O("imageAlt")}"
                class="about-one-image"
                loading="lazy"
              />
            </div>

            <div class="about-two-content-block">

              <div class="about-two-title-block">

                <div class="section-sub-text">
                  ${O("introEyebrow")}
                </div>

                <h2 class="section-title">
                  ${O("introTitle")}
                </h2>

              </div>

              <p class="about-two-description">
                ${O("introDescription")}
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
                        ${O("feature1Title")}
                      </h3>

                      <p class="about-two-list-description">
                        ${O("feature1Description")}
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
                        ${O("feature2Title")}
                      </h3>

                      <p class="about-two-list-description">
                        ${O("feature2Description")}
                      </p>

                    </div>

                  </li>

                </ul>

              </div>

              <div class="about-two-button-block">

                <a href="/contact-us"
                   class="button-primary w-inline-block">

                  <span class="button-primary-text">
                    ${O("contactButton")}
                  </span>

                  <span class="button-icon-block">
                    ${Je}
                  </span>

                </a>

              </div>

            </div>

          </div>
        </div>

      </div>

    </section>
  `}function Ya(){return`
    <section class="section treatment-section two dp-about-treatment">

      <div class="w-layout-blockcontainer container-fluid w-container">
        <div class="main-grey-block two">

          <div class="w-layout-blockcontainer container w-container">
            <div class="main-treatment-block">

              <div class="treatment-title-block">

                <div class="section-sub-text">
                  ${O("treatmentEyebrow")}
                </div>

                <h2 class="section-title">
                  ${O("treatmentTitle")}
                </h2>

                <p class="dp-about-treatment-description">
                  ${O("treatmentDescription")}
                </p>

              </div>

              <div class="treatment-inner-block">

                <p
                  class="dp-about-services-status"
                  data-about-services-status
                  role="status"
                  aria-live="polite"
                >
                  ${O("servicesDemoNote")}
                </p>

                <div
                  class="tretment-tabs w-tabs dp-about-tabs"
                  data-about-services
                >

                  <div
                    class="tretment-menu w-tab-menu"
                    data-about-service-tabs
                    role="tablist"
                    aria-label="${O("treatmentTitle")}"
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
  `}function Wa(e){const t=e.map((o,n)=>`
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
            <span>${Z(o.name)}</span>
          </div>

          <div class="tretment-round-block"></div>

        </div>
      </div>

    </button>
  `).join(""),a=e.map((o,n)=>{const r=o.isDemo?"/service":`/services/${o.id}`;return`
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
                  src="${Z(o.image)}"
                  alt="${Z(o.name)}"
                  class="tretment-image"
                  loading="lazy"
                />
              `:`
                <div class="dp-about-no-image">
                  ${Ma}
                </div>
              `}

          <div class="dp-about-service-info">

            <h3>${Z(o.name)}</h3>

            ${o.description?`<p>${Z(o.description)}</p>`:""}

            <a
              href="${r}"
              class="dp-about-service-link"
            >
              ${O("serviceDetails")}
              ${Je}
            </a>

          </div>

        </div>

      </div>
    `}).join("");return{buttons:t,panes:a}}function Ka(){const e=Ft();return`
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
                  ${O("teamEyebrow")}
                </div>

                <h2 class="section-title">
                  ${O("teamTitle")}
                </h2>

                <p class="dp-about-team-description">
                  ${O("teamDescription")}
                </p>

              </div>

              <a
                href="/contact-us"
                class="button-primary w-inline-block"
              >

                <span class="button-primary-text">
                  ${O("teamButton")}
                </span>

                <span class="button-icon-block">
                  ${Je}
                </span>

              </a>

            </div>

            <div class="dp-about-doctors-grid">

              ${e.map((t,a)=>`
                <a
                  href="/team/${encodeURIComponent(t.slug)}"
                  class="dp-about-doctor-card"
                  aria-label="${Z(t.name)}"
                >

                  <div class="dp-about-doctor-image-wrap">

                    <img
                      src="${Z(t.image)}"
                      alt="${Z(t.name)}"
                      class="dp-about-doctor-image"
                      loading="lazy"
                    />

                    <span class="dp-about-doctor-index">
                      ${String(a+1).padStart(2,"0")}
                    </span>

                  </div>

                  <div class="dp-about-doctor-info">

                    <span class="dp-about-doctor-role">
                      ${Z(t.role)}
                    </span>

                    <h3 class="dp-about-doctor-name">
                      ${Z(t.name)}
                    </h3>

                  </div>

                </a>
              `).join("")}

            </div>

            <p class="dp-about-doctors-note">
              ${O("teamDemoNote")}
            </p>

          </div>

        </div>
      </div>

    </section>
  `}function Za(){return`
    <section class="section faq-section dp-about-faq-section">

      <div class="w-layout-blockcontainer container-fluid w-container">
        <div class="main-grey-block">

          <div class="w-layout-blockcontainer container w-container">
            <div class="faq-main-block">

              <div class="section-title-main-block">

                <div class="section-title-sub-text-block">
                  <div class="section-sub-text">
                    ${O("faqEyebrow")}
                  </div>
                </div>

                <div class="section-title-grid">
                  <h2 class="section-title">
                    ${O("faqTitle")}
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
                              ${O(`faq${e}Question`)}
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
                            ${O(`faq${e}Answer`)}
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
  `}function Qa(){return`
    <main class="dp-about-page"
          data-about-page
          data-no-translate>

      ${Ga()}
      ${ja()}
      ${Ya()}
      ${Ka()}
      ${Za()}

    </main>
  `}function Xa(){const e=document.querySelector("[data-about-page]");if(!e)return()=>{};const t=new AbortController,{signal:a}=t,o=e.querySelector("[data-about-services-status]"),n=e.querySelector("[data-about-services]"),r=e.querySelector("[data-about-service-tabs]"),l=e.querySelector("[data-about-service-panes]");let u=0;function b(c){const s=Wa(c);r.innerHTML=s.buttons,l.innerHTML=s.panes,u=c.length,n.hidden=!1,f(0)}function f(c,s=!1){if(!Number.isInteger(c)||c<0||c>=u)return;const d=[...r.querySelectorAll("[data-about-tab]")],g=[...l.querySelectorAll("[data-about-pane]")];d.forEach((h,y)=>{const w=y===c;h.classList.toggle("w--current",w),h.setAttribute("aria-selected",String(w)),h.tabIndex=w?0:-1,w&&s&&h.focus()}),g.forEach((h,y)=>{const w=y===c;h.hidden=!w,h.classList.toggle("w--tab-active",w)})}async function p(){try{const c=await fetch(Ba(),{method:"GET",headers:{Accept:"application/json"},credentials:"omit",cache:"no-store",signal:a});if(!c.ok)throw new Error(`HTTP ${c.status}`);const s=await c.json();if((s==null?void 0:s.success)===!1||(s==null?void 0:s.status)===!1)throw new Error((s==null?void 0:s.message)||"API error");if(a.aborted||!e.isConnected)return;const d=s==null?void 0:s.data,h=(Array.isArray(d)?d:Array.isArray(d==null?void 0:d.data)?d.data:Array.isArray(d==null?void 0:d.services)?d.services:Array.isArray(d==null?void 0:d.items)?d.items:[]).map(Ha).filter(Boolean).slice(0,5);h.length>0&&(b(h),o.hidden=!0)}catch(c){if(a.aborted)return;console.info("About: showing demo treatments",c)}}return b(za()),e.addEventListener("click",c=>{var h;const s=c.target instanceof Element?c.target:(h=c.target)==null?void 0:h.parentElement;if(!s)return;const d=s.closest("[data-about-tab]");if(d){f(Number(d.dataset.aboutTab));return}const g=s.closest("[data-about-faq]");if(g){const y=g.getAttribute("aria-expanded")==="true";e.querySelectorAll("[data-about-faq]").forEach(w=>{const $=w===g&&!y;w.setAttribute("aria-expanded",String($));const v=e.querySelector(`#dp-about-answer-${w.dataset.aboutFaq}`);v&&(v.hidden=!$);const m=w.querySelector(".dp-about-faq-symbol");m&&(m.textContent=$?"−":"+")})}},{signal:a}),r.addEventListener("keydown",c=>{if(!u)return;const s=c.target instanceof Element?c.target.closest("[data-about-tab]"):null;if(!s)return;const d=Number(s.dataset.aboutTab);let g=d;if(c.key==="ArrowRight"||c.key==="ArrowDown")g=(d+1)%u;else if(c.key==="ArrowLeft"||c.key==="ArrowUp")g=(d-1+u)%u;else if(c.key==="Home")g=0;else if(c.key==="End")g=u-1;else return;c.preventDefault(),f(g,!0)},{signal:a}),p(),()=>t.abort()}const Ja="http://127.0.0.1:8000/api",eo=15e3;class ce extends Error{constructor(t,a=0,o=null){super(t),this.name="ApiError",this.status=a,this.errors=o}}async function et(e,{method:t="GET",body:a=null,auth:o=!1,signal:n=null}={}){const r=new AbortController;let l=!1;const u=()=>r.abort();n&&(n.aborted?r.abort():n.addEventListener("abort",u,{once:!0}));const b=setTimeout(()=>{l=!0,r.abort()},eo);try{const f={Accept:"application/json"};if(a!==null&&(f["Content-Type"]="application/json"),o){const d=we();if(!d)throw new ce("Unauthenticated",401);f.Authorization=`Bearer ${d}`}const p=`${Ja}/${e.replace(/^\/+/,"")}`,c=await fetch(p,{method:t,headers:f,body:a!==null?JSON.stringify(a):void 0,signal:r.signal,cache:"no-store",credentials:"omit"}),s=await c.json().catch(()=>null);if(!c.ok||(s==null?void 0:s.success)===!1)throw new ce((s==null?void 0:s.message)||"API request failed.",c.ok?Number((s==null?void 0:s.statusCode)||c.status):c.status,(s==null?void 0:s.errors)??null);if(!s||typeof s!="object")throw new ce("Invalid server response.",502);return s}catch(f){throw f instanceof ce?f:(f==null?void 0:f.name)==="AbortError"?n!=null&&n.aborted?f:new ce(l?"Request timeout.":"Request cancelled.",l?408:0):new ce("Unable to connect to the server.",0)}finally{clearTimeout(b),n==null||n.removeEventListener("abort",u)}}function fe(e,t={}){return et(e,{...t,method:"GET"})}function G(e,t={},a={}){return et(e,{...a,method:"POST",body:t})}function to(e,t={},a={}){return et(e,{...a,method:"PUT",body:t})}const Ne={loginWithEmail(e,t,a=null){return G("/v1/auth/login",{email:e,password:t},{signal:a})},sendCode(e,t=null){return G("/v1/auth/login/phone/send-code",{phone:e},{signal:t})},verifyCode(e,t,a=null){return G("/v1/auth/login/phone/verify",{phone:e,code:t},{signal:a})}},st={sendCode(e,t,a="",o=null){return G("/v1/auth/register/send-code",{name:e,phone:t,referral_code:a},{signal:o})},verifyCode(e,t,a,o="",n=null){return G("/v1/auth/register/verify",{phone:e,code:t,name:a,referral_code:o},{signal:n})}},Re={sendCode(e,t=null){return G("/v1/auth/forgot-password/send-code",{phone:e},{signal:t})},verifyCode(e,t,a=null){return G("/v1/auth/forgot-password/verify",{phone:e,code:t},{signal:a})},resetPassword(e,t,a,o,n,r=null){return G("/v1/auth/forgot-password/reset",{phone:e,code:t,reset_token:a,password:o,password_confirmation:n},{signal:r})}},Ae={me(e=null){return fe("/v1/auth/me",{auth:!0,signal:e})},getProfile(e=null){return fe("/v1/auth/profile",{auth:!0,signal:e})},updateProfile(e,t=null){return to("/v1/auth/profile",e,{auth:!0,signal:t})},refresh(e=null){return G("/v1/auth/refresh",{},{auth:!0,signal:e})},logout(e=null){return G("/v1/auth/logout",{},{auth:!0,signal:e})},changePhoneSendCode(e,t=null){return G("/v1/auth/profile/change-phone/send-code",e,{auth:!0,signal:t})},changePhoneVerify(e,t=null){return G("/v1/auth/profile/change-phone/verify",e,{auth:!0,signal:t})}},Ge={list(e="en",t=null){return fe(`/v1/blogs?lang=${e==="fa"?"fa":"en"}`,{signal:t})},show(e,t="en",a=null){return fe(`/v1/blogs/${encodeURIComponent(e)}?lang=${t==="fa"?"fa":"en"}`,{signal:a})}},ao={send:(e,t=null)=>G("/messages",e,{signal:t})},je={list(e="en",t=null){return fe(`/v1/services?lang=${e==="fa"?"fa":"en"}`,{signal:t})},show(e,t="en",a=null){const o=t==="fa"?"fa":"en";return fe(`/v1/services/${encodeURIComponent(e)}?lang=${o}`,{signal:a})}};function ke(){const e=(document.documentElement.lang||"").toLowerCase();return e==="fa"||e.startsWith("fa-")?"fa":e==="en"||e.startsWith("en-")?"en":document.documentElement.dir==="rtl"?"fa":"en"}function oe(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function oo(e){if(typeof e!="string")return"";const t=e.trim();if(!t||/[<>"\u0000-\u001F]/.test(t))return"";try{const a=new URL(t,window.location.origin);return["http:","https:"].includes(a.protocol)?a.href:""}catch{return""}}function no(e,t){if(!e)return{iso:"",label:""};const a=String(e),o=/^\d{4}-\d{2}-\d{2}$/.test(a)?new Date(`${a}T12:00:00Z`):new Date(a);return Number.isNaN(o.getTime())?{iso:"",label:""}:{iso:o.toISOString().slice(0,10),label:new Intl.DateTimeFormat(t==="fa"?"fa-IR":"en-US",{year:"numeric",month:"long",day:"numeric",timeZone:"UTC"}).format(o)}}function io(e){var a;const t=e==null?void 0:e.data;return Array.isArray(t)?t:Array.isArray(t==null?void 0:t.data)?t.data:Array.isArray(t==null?void 0:t.blogs)?t.blogs:Array.isArray((a=t==null?void 0:t.blogs)==null?void 0:a.data)?t.blogs.data:null}function ro(e,t){if(!e||typeof e!="object")return null;const a=String(e.title_1??e.title??"").trim();if(!a)return null;const o=oo(e.image_1??e.image_url??e.image??""),n=String(e.slug??e.blog_slug??"").trim(),r=no(e.date??e.published_at??e.created_at,t);return{id:e.id??null,slug:n,title:a,image:o,dateISO:r.iso,date:r.label}}function so(e){const t=oe(e.title),a=e.slug||(e.id!=null?String(e.id):""),o=a?`/post/${encodeURIComponent(a)}`:"",n=e.image?`
      <img
        src="${oe(e.image)}"
        alt="${t}"
        loading="lazy"
        decoding="async"
        class="blog-one-image"
      />
    `:`
      <div class="dp-blog-no-image">
        <span>✦</span>
      </div>
    `,r=e.date?`
      <div class="blog-date-block-one">
        <time
          datetime="${oe(e.dateISO)}"
          class="blog-month-text one"
        >
          ${oe(e.date)}
        </time>
      </div>
    `:"",l=`
    <div class="blog-one-image-block">
      ${n}
    </div>

    ${r}

    <div class="blog-title-block">
      <h2 class="blog-name">${t}</h2>
    </div>
  `;return`
    <div role="listitem" class="w-dyn-item">
      ${o?`
            <a
              href="${oe(o)}"
              class="blog-one-link w-inline-block"
              aria-label="${oe(i("blog.readArticle"))}: ${t}"
            >
              ${l}
            </a>
          `:`
            <div class="blog-one-link w-inline-block">
              ${l}
            </div>
          `}
    </div>
  `}function lo(){return`
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
                    ${i("blog.title")}
                  </h1>
                </div>

                <div class="breadcrumb-subtext-block">

                  <a
                    class="breadcrumb-subtext"
                    href="/"
                  >
                    ${i("blog.home")}
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
                    ${i("blog.title")}
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
                  ${i("blog.latest")}
                </div>
              </div>

              <div class="section-title-grid">
                <h2
                  id="blog-section-heading"
                  class="section-title"
                >
                  ${i("blog.heading")}
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
              ${i("blog.loading")}
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
  `}function co(){const e=document.querySelector("[data-blog-page]");if(!e)return()=>{};const t=e.querySelector("[data-blog-list]"),a=e.querySelector("[data-blog-status]"),o=new AbortController;let n=null,r=ke();function l(c){a.hidden=!1,a.textContent=c}function u(){a.hidden=!0,a.textContent=""}function b(){a.hidden=!1,a.innerHTML=`
      <p>${oe(i("blog.error"))}</p>

      <button
        type="button"
        class="dp-blog-retry"
        data-blog-retry
      >
        ${oe(i("blog.retry"))}
      </button>
    `}async function f(){n==null||n.abort(),n=new AbortController;const c=n.signal,s=ke();r=s,l(i("blog.loading")),t.innerHTML="";try{const d=await Ge.list(s,c);if(c.aborted||o.signal.aborted||!e.isConnected||ke()!==s)return;const g=io(d);if(!g)throw new Error("INVALID_BLOG_RESPONSE");const h=g.map(y=>ro(y,s)).filter(Boolean);if(g.length&&!h.length){console.warn("Blog items have no usable title_1:",g),b();return}if(h.length===0){l(i("blog.empty"));return}t.innerHTML=h.map(so).join(""),u()}catch(d){if(c.aborted||o.signal.aborted)return;console.error("Failed to load blog posts:",d),b()}}e.addEventListener("click",c=>{c.target.closest("[data-blog-retry]")&&(c.preventDefault(),f())},{signal:o.signal});const p=new MutationObserver(()=>{const c=ke();c!==r&&(r=c,f())});return p.observe(document.documentElement,{attributes:!0,attributeFilter:["lang","dir"]}),f(),()=>{o.abort(),n==null||n.abort(),p.disconnect()}}function uo(e=document){if(!e)return()=>{};const t=new AbortController,{signal:a}=t;return e.querySelectorAll("form").forEach(o=>{o.addEventListener("submit",n=>{n.preventDefault();const r=o.closest(".w-form"),l=r==null?void 0:r.querySelector(".w-form-done");l&&(l.style.display="none");let u=(r==null?void 0:r.querySelector(".dentistry-demo-message"))||o.querySelector(".dentistry-demo-message");u||(u=document.createElement("p"),u.className="dentistry-demo-message",u.setAttribute("role","status"),o.insertAdjacentElement("afterend",u)),u.textContent="This form is not connected to the server yet. No information was submitted.",u.style.display="block"},{signal:a})}),()=>t.abort()}function po(e=document){if(!e)return()=>{};const t=new AbortController;return e.querySelectorAll(".w-tabs").forEach(a=>{var u;const o=[...a.querySelectorAll(".w-tab-menu .w-tab-link[data-w-tab]")],n=[...a.querySelectorAll(".w-tab-content .w-tab-pane[data-w-tab]")];if(!o.length)return;const r=a.querySelector(".w-tab-menu");r==null||r.setAttribute("role","tablist");function l(b){a.dataset.current=b,o.forEach(f=>{const p=f.dataset.wTab===b;f.classList.toggle("w--current",p),f.setAttribute("role","tab"),f.setAttribute("aria-selected",String(p)),f.setAttribute("aria-expanded",String(p)),f.tabIndex=p?0:-1;const c=f.querySelector(".tretment-tab-content-block");c&&(c.style.display=p?"block":"none");const s=f.querySelector(".ans-box");s&&(s.style.overflow="hidden",s.style.transition="height 300ms ease",s.style.height=p?`${s.scrollHeight}px`:"0px",s.setAttribute("aria-hidden",String(!p)));const d=f.querySelector(".plus");d&&(d.style.transform=p?"rotate(90deg)":"rotate(0deg)")}),n.forEach(f=>{const p=f.dataset.wTab===b;f.classList.toggle("w--tab-active",p),f.hidden=!p})}o.forEach((b,f)=>{b.addEventListener("click",p=>{p.preventDefault(),l(b.dataset.wTab)},{signal:t.signal}),b.addEventListener("keydown",p=>{const c=["ArrowRight","ArrowDown"].includes(p.key)?1:["ArrowLeft","ArrowUp"].includes(p.key)?-1:0;if(!c)return;p.preventDefault();const s=o[(f+c+o.length)%o.length];l(s.dataset.wTab),s.focus()},{signal:t.signal})}),l(a.dataset.current||((u=o.find(b=>b.classList.contains("w--current")))==null?void 0:u.dataset.wTab)||o[0].dataset.wTab)}),()=>t.abort()}function ho(e=document){if(!e)return()=>{};const t=new AbortController;let a=null;return e.querySelectorAll("a.w-lightbox").forEach(o=>{o.addEventListener("click",n=>{var f,p,c,s,d,g;n.preventDefault();const r=(f=o.querySelector('script.w-json[type="application/json"]'))==null?void 0:f.textContent;let l;try{l=(c=(p=JSON.parse(r||"{}").items)==null?void 0:p[0])==null?void 0:c.url}catch{}if(l||(l=((s=o.querySelector("img"))==null?void 0:s.currentSrc)||((d=o.querySelector("img"))==null?void 0:d.src)),!l)return;a==null||a.remove(),a=document.createElement("dialog"),a.className="dentistry-lightbox";const u=document.createElement("button");u.type="button",u.className="dentistry-lightbox-close",u.textContent="×",u.setAttribute("aria-label","Close image");const b=document.createElement("img");b.src=l,b.alt=((g=o.querySelector("img"))==null?void 0:g.alt)||"Gallery image",a.append(u,b),document.body.append(a),u.addEventListener("click",()=>a==null?void 0:a.close(),{once:!0}),a.addEventListener("click",h=>{h.target===a&&a.close()}),a.addEventListener("close",()=>{a==null||a.remove(),a=null},{once:!0}),a.showModal()},{signal:t.signal})}),()=>{t.abort(),a==null||a.remove()}}function Ie(e){const t=po(e),a=uo(e),o=ho(e);return()=>{t(),a(),o()}}const mo={fa:{home:"خانه",blog:"وبلاگ",details:"جزئیات مقاله",otherBlogs:"سایر مقالات",loading:"در حال دریافت مقاله...",loadingBlogs:"در حال دریافت سایر مقالات...",notFound:"مقاله موردنظر پیدا نشد.",error:"دریافت مقاله با مشکل مواجه شد.",otherEmpty:"مقاله دیگری برای نمایش وجود ندارد.",otherError:"دریافت سایر مقالات با مشکل مواجه شد.",retry:"تلاش مجدد",gallery:"تصاویر مقاله"},en:{home:"Home",blog:"Dental Blog",details:"Blog Details",otherBlogs:"Other Blogs",loading:"Loading article...",loadingBlogs:"Loading other articles...",notFound:"Article not found.",error:"Unable to load this article.",otherEmpty:"No other articles available.",otherError:"Unable to load other articles.",retry:"Try Again",gallery:"Article Images"}};function se(){return X()==="fa"?"fa":"en"}function F(e,t=se()){const a=`blog.details.${e}`,o=i(a);return o!==a?o:mo[t][e]}function N(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function fo(e){return typeof e=="string"?e.trim():""}function re(...e){for(const t of e){const a=fo(t);if(a)return a}return""}function bo(){const t=window.location.pathname.replace(/\/+$/,"").match(/^\/post\/([^/]+)$/);if(!t)return"";try{return decodeURIComponent(t[1])}catch{return t[1]}}function lt(e){if(e&&typeof e=="object"&&(e=e.image_url??e.url??e.src??e.path??""),typeof e!="string")return"";const t=e.trim();if(!t||/[<>"'\u0000-\u001F]/.test(t))return"";const a="/";try{const o=new URL(a,window.location.origin).origin,n=/^(storage|uploads|images)\//i.test(t)?`/${t}`:t,r=new URL(n,o);return["http:","https:"].includes(r.protocol)?r.href:""}catch{return""}}function go(e,t){const a=e==null?void 0:e.translations;return Array.isArray(a)?a.find(o=>o.locale===t||o.lang===t)||{}:a&&typeof a=="object"?a[t]||{}:e!=null&&e.translation&&(!e.translation.locale||e.translation.locale===t)?e.translation:{}}function vo(e,t){if(!e)return{iso:"",label:""};const a=String(e),o=/^\d{4}-\d{2}-\d{2}$/.test(a)?new Date(`${a}T12:00:00Z`):new Date(a);return Number.isNaN(o.getTime())?{iso:"",label:""}:{iso:o.toISOString().slice(0,10),label:new Intl.DateTimeFormat(t==="fa"?"fa-IR":"en-US",{year:"numeric",month:"long",day:"numeric",timeZone:"UTC"}).format(o)}}function Vt(e){if((e==null?void 0:e.status)===!1||(e==null?void 0:e.success)===!1){const t=new Error((e==null?void 0:e.message)||"BLOG_API_ERROR");throw t.status=(e==null?void 0:e.statusCode)||500,t}}function yo(e){var a,o;const t=e==null?void 0:e.data;return[t,t==null?void 0:t.data,t==null?void 0:t.blogs,(a=t==null?void 0:t.blogs)==null?void 0:a.data,t==null?void 0:t.posts,(o=t==null?void 0:t.posts)==null?void 0:o.data,t==null?void 0:t.items].find(Array.isArray)||[]}function wo(e,t,a){Vt(e);const o=e==null?void 0:e.data,n=(o==null?void 0:o.blog)??(o==null?void 0:o.post)??(o==null?void 0:o.article)??(o==null?void 0:o.data)??o;if(Array.isArray(n))return n.find(l=>(String((l==null?void 0:l.slug)??(l==null?void 0:l.blog_slug))===t||String(l==null?void 0:l.id)===t)&&(!l.locale||l.locale===a))||null;if(!n||typeof n!="object")return null;const r=n.slug??n.blog_slug;return r!=null&&String(r)!==t&&String(n.id)!==t||n.locale&&n.locale!==a?null:n}function ct(e,t){if(!e||typeof e!="object")return null;const a=go(e,t),o=re(a.title_1,e.title_1,a.title,e.title);if(!o)return null;const n=lt(e.image_1_url??e.image_1??e.image_url??e.image??a.image_1),r=[e.image_2_url??e.image_2,e.image_3_url??e.image_3,e.image_4_url??e.image_4,...Array.isArray(e.gallery)?e.gallery:[],...Array.isArray(e.images)?e.images:[]],l=[...new Set(r.map(lt).filter(b=>b&&b!==n))],u=vo(e.date??e.published_at??e.created_at,t);return{id:e.id??null,slug:re(e.slug,e.blog_slug,a.slug),title1:o,description1:re(a.description_1,e.description_1,a.description,e.description,e.content),title2:re(a.title_2,e.title_2),description2:re(a.description_2,e.description_2),title3:re(a.title_3,e.title_3),description3:re(a.description_3,e.description_3),image1:n,gallery:l,date:u}}function dt(e){if(!e)return"";if(!/<[a-z][\s\S]*?>/i.test(e))return e.split(/\n\s*\n/).filter(Boolean).map(r=>`
        <p>
          ${N(r).replace(/\n/g,"<br>")}
        </p>
      `).join("");const t=new Set(["p","br","strong","b","em","i","u","s","h2","h3","h4","h5","h6","ul","ol","li","blockquote","a","div","span","hr"]),a=new Set(["script","style","iframe","object","embed","svg","math","form","input","button","template"]),o=document.createElement("template");o.innerHTML=e;function n(r){if(r.nodeType===Node.TEXT_NODE)return N(r.textContent);if(r.nodeType!==Node.ELEMENT_NODE)return"";const l=r.tagName.toLowerCase();if(a.has(l))return"";const u=Array.from(r.childNodes).map(n).join("");if(!t.has(l))return u;if(l==="br"||l==="hr")return`<${l}>`;if(l==="a"){const b=r.getAttribute("href")||"";try{const f=new URL(b,window.location.origin);if(["http:","https:","mailto:","tel:"].includes(f.protocol))return`
            <a
              href="${N(f.href)}"
              rel="noopener noreferrer"
            >
              ${u}
            </a>
          `}catch{}return u}return`<${l}>${u}</${l}>`}return Array.from(o.content.childNodes).map(n).join("")}function $o(e,t){const a=e.image1?`
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
        aria-label="${N(F("gallery",t))}"
      >

        ${e.gallery.map(l=>`
          <div class="w-dyn-list">
            <div class="w-dyn-items" role="list">

              <div class="w-dyn-item" role="listitem">

                <a
                  href="${N(l)}"
                  class="blog-image-lightbox w-inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >

                  <img
                    class="blog-image-extra"
                    src="${N(l)}"
                    alt="${N(e.title1)}"
                    loading="lazy"
                  />

                </a>

              </div>

            </div>
          </div>
        `).join("")}

      </div>
    `:"";function r(l,u){return!l&&!u?"":`
      <div class="w-richtext dp-blog-more-content">

        ${l?`<h3>${N(l)}</h3>`:""}

        ${dt(u)}

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
                    ${dt(e.description1)}
                  </div>
                `:""}

          </div>

        </div>

      </div>

    </div>

    ${n}

    ${r(e.title2,e.description2)}

    ${r(e.title3,e.description3)}
  `}function ko(e,t){return`
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
  `}function So(){const e=se();return`
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
                    ${N(F("blog",e))}
                  </h2>

                </div>

                <div class="breadcrumb-subtext-block">

                  <a
                    href="/"
                    class="breadcrumb-subtext"
                    data-blog-home
                  >
                    ${N(F("home",e))}
                  </a>

                  <span class="breadcrumb-subtext">
                    -
                  </span>

                  <a
                    href="/blog"
                    class="breadcrumb-subtext"
                    data-blog-link
                  >
                    ${N(F("blog",e))}
                  </a>

                  <span class="breadcrumb-subtext">
                    -
                  </span>

                  <span
                    class="breadcrumb-subtext"
                    data-blog-crumb
                    aria-current="page"
                  >
                    ${N(F("details",e))}
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
        ${N(F("loading",e))}
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
              aria-label="${N(F("otherBlogs",e))}"
              data-other-blogs-aside
            >

              <div class="blog-single-sticky-block">

                <div class="service-single-left-block last">

                  <div class="service-single-box-title">

                    <h3
                      class="service-single-title"
                      data-other-blogs-heading
                    >
                      ${N(F("otherBlogs",e))}
                    </h3>

                  </div>

                  <!-- OTHER BLOGS FROM API -->

                  <div
                    data-other-blogs-list
                    aria-live="polite"
                  >
                    <p class="dp-other-blogs-message">
                      ${N(F("loadingBlogs",e))}
                    </p>
                  </div>

                </div>

              </div>

            </aside>

          </div>

        </div>

      </section>

    </main>
  `}function Eo(){const e=document.querySelector("[data-blog-details-page]");if(!e)return()=>{};const t=new AbortController;let a=null,o=se();const n=bo(),r=e.querySelector("[data-blog-status]"),l=e.querySelector("[data-blog-section]"),u=e.querySelector("[data-blog-article]"),b=e.querySelector("[data-other-blogs-list]");e.querySelector("[data-other-blogs-heading]");const f=e.querySelector("[data-other-blogs-aside]"),p=Ie(document.getElementById("app"));function c($,v=!1){if(r.hidden=!1,r.textContent=$,v){const m=document.createElement("button");m.type="button",m.className="dp-blog-details-retry",m.dataset.blogRetry="",m.textContent=F("retry"),r.appendChild(m)}}function s(){r.hidden=!0,r.textContent=""}function d($){const v={"[data-blog-heading]":"blog","[data-blog-home]":"home","[data-blog-link]":"blog","[data-blog-crumb]":"details","[data-other-blogs-heading]":"otherBlogs"};for(const[m,k]of Object.entries(v)){const D=e.querySelector(m);D&&(D.textContent=F(k,$))}f.setAttribute("aria-label",F("otherBlogs",$))}function g($){l.hidden=!0,u.innerHTML="",b.innerHTML=`
      <p class="dp-other-blogs-message">
        ${N(F("loadingBlogs",$))}
      </p>
    `}async function h($,v,m){try{const k=await Ge.list($,m);if(m.aborted||t.signal.aborted||!e.isConnected||se()!==$)return;Vt(k);const C=yo(k).filter(S=>!S.locale||S.locale===$).map(S=>ct(S,$)).filter(Boolean).filter(S=>!(v.id!=null&&S.id!=null&&String(S.id)===String(v.id)||S.slug&&(S.slug===n||S.slug===v.slug))),L=[],T=new Set;for(const S of C){const x=S.id!=null?`id:${S.id}`:S.slug?`slug:${S.slug}`:`title:${S.title1}`;T.has(x)||(T.add(x),L.push(S))}const E=L.slice(0,5);if(!E.length){b.innerHTML=`
          <p class="dp-other-blogs-message">
            ${N(F("otherEmpty",$))}
          </p>
        `;return}b.innerHTML=ko(E,$)}catch(k){if(m.aborted||t.signal.aborted)return;console.error("Other blogs API error:",k),b.innerHTML=`
        <p class="dp-other-blogs-message">
          ${N(F("otherError",$))}
        </p>
      `}}async function y(){a==null||a.abort(),a=new AbortController;const $=a.signal,v=se();if(o=v,d(v),g(v),!n){c(F("notFound",v));return}c(F("loading",v));try{const m=await Ge.show(n,v,$);if($.aborted||t.signal.aborted||!e.isConnected||se()!==v)return;const k=wo(m,n,v),D=ct(k,v);if(!D){c(F("notFound",v));return}u.innerHTML=$o(D,v),l.hidden=!1,s(),document.title=`${D.title1} | Dentistry`,h(v,D,$)}catch(m){if($.aborted||t.signal.aborted)return;console.error("Blog Details API error:",m);const k=(m==null?void 0:m.status)===404||(m==null?void 0:m.statusCode)===404;c(F(k?"notFound":"error",v),!k)}}e.addEventListener("click",$=>{$.target instanceof Element&&$.target.closest("[data-blog-retry]")&&($.preventDefault(),y())},{signal:t.signal});const w=new MutationObserver(()=>{se()!==o&&y()});return w.observe(document.documentElement,{attributes:!0,attributeFilter:["lang","dir"]}),y(),()=>{t.abort(),a==null||a.abort(),w.disconnect(),typeof p=="function"&&p()}}function To(){const e=(document.documentElement.lang||"").toLowerCase();return e==="fa"||e.startsWith("fa-")?"fa":"en"}const Ao={en:{firstName:"First Name",lastName:"Last Name",email:"Email",phone:"Phone",message:"Message",submit:"Submit",sending:"Sending...",success:"Your message has been sent successfully.",error:"Unable to send your message. Please try again.",validation:"Please check the form fields.",contact:"Contact Us",home:"Home",touch:"Get in Touch",heading:"Get Free Information!"},fa:{firstName:"نام",lastName:"نام خانوادگی",email:"ایمیل",phone:"شماره تماس",message:"پیام",submit:"ارسال پیام",sending:"در حال ارسال...",success:"پیام شما با موفقیت ارسال شد.",error:"ارسال پیام با مشکل مواجه شد. دوباره تلاش کنید.",validation:"لطفاً اطلاعات فرم را بررسی کنید.",contact:"تماس با ما",home:"خانه",touch:"با ما در ارتباط باشید",heading:"دریافت مشاوره و اطلاعات رایگان"}};function _(e){return Ao[To()][e]||e}const xo=`
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
`,Co=`
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
`,Do=`
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
`,Lo=[{label:"address :",detail:"1902 thrownrige, york",icon:xo},{label:"email :",detail:"abd123@email.com",icon:Co,href:"mailto:abd123@email.com"},{label:"phone :",detail:"(603) 555- 123 -456",icon:Do,href:"tel:+1603555123456"}];function qo(e){return`
    <div class="contactus-info-inner-block">

      <div class="contactus-info-inner-icon-block">
        <div class="w-embed" aria-hidden="true">
          ${e.icon}
        </div>
      </div>

      <div class="contact-info-details-block">

        <h2 class="contact-title">
          ${e.label}
        </h2>

        ${e.href?`
              <a
                href="${e.href}"
                class="contact-link"
              >
                ${e.detail}
              </a>
            `:`
              <div class="contact-subtext">
                ${e.detail}
              </div>
            `}

      </div>
    </div>
  `}function Io(){return`
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
                    ${_("contact")}
                  </h1>
                </div>

                <div class="breadcrumb-subtext-block">

                  <a
                    href="/"
                    class="breadcrumb-subtext"
                  >
                    ${_("home")}
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
                    ${_("contact")}
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

            ${Lo.map(qo).join("")}

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
                  ${_("touch")}
                </div>

                <h2
                  id="contact-form-heading"
                  class="section-title"
                >
                  ${_("heading")}
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
                          ${_("firstName")}
                        </label>

                        <input
                          id="contact-first-name"
                          class="input-field w-input"
                          name="first_name"
                          type="text"
                          placeholder="${_("firstName")}"
                          maxlength="255"
                          autocomplete="given-name"
                          required
                        />

                      </div>

                      <div class="dentistry-contact-field">

                        <label for="contact-last-name">
                          ${_("lastName")}
                        </label>

                        <input
                          id="contact-last-name"
                          class="input-field w-input"
                          name="last_name"
                          type="text"
                          placeholder="${_("lastName")}"
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
                          ${_("email")}
                        </label>

                        <input
                          id="contact-email"
                          class="input-field w-input"
                          name="email"
                          type="email"
                          placeholder="${_("email")}"
                          maxlength="255"
                          autocomplete="email"
                          required
                        />

                      </div>

                      <div class="dentistry-contact-field">

                        <label for="contact-phone">
                          ${_("phone")}
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
                        ${_("message")}
                      </label>

                      <textarea
                        id="contact-message"
                        class="text-area w-input"
                        name="message"
                        placeholder="${_("message")}"
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
                          ${_("submit")}
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
  `}function Po(){const e=document.querySelector(".dentistry-contact-page #email-form");if(!e)return()=>{};const t=new AbortController,a=e.querySelector("[data-contact-status]"),o=e.querySelector("[data-contact-submit]"),n=e.querySelector("[data-contact-submit-label]");let r=!1,l=null;function u(s,d="error"){a.hidden=!1,a.textContent=s,a.dataset.status=d,a.setAttribute("role",d==="error"?"alert":"status")}function b(){a.hidden=!0,a.textContent="",a.removeAttribute("data-status")}function f(){const s=new FormData(e);return{first_name:String(s.get("first_name")??"").trim(),last_name:String(s.get("last_name")??"").trim(),email:String(s.get("email")??"").trim(),phone:String(s.get("phone")??"").trim(),message:String(s.get("message")??"").trim()}}function p(s){if(!s||typeof s!="object")return!1;let d=null;for(const[g,h]of Object.entries(s)){const y=e.elements.namedItem(g);if(!y||typeof y.setCustomValidity!="function")continue;const w=Array.isArray(h)?String(h[0]??""):String(h??"");w&&(y.setCustomValidity(w),d||(d=y))}return d?(d.reportValidity(),d.focus(),!0):!1}function c(s){r=s,o.disabled=s,e.setAttribute("aria-busy",s?"true":"false"),n.textContent=_(s?"sending":"submit")}return e.addEventListener("submit",async s=>{if(s.preventDefault(),r)return;b();for(const h of e.elements)typeof h.setCustomValidity=="function"&&h.setCustomValidity("");if(!e.reportValidity())return;const d=f();if(!d.first_name||!d.last_name||!d.email||!d.phone||!d.message){u(_("validation"));return}l=new AbortController;const g=l.signal;c(!0);try{const h=await ao.send(d,g);if(g.aborted||t.signal.aborted||!e.isConnected)return;if((h==null?void 0:h.success)===!1){const y=new Error(h.message||_("error"));throw y.errors=h.errors,y}u(_("success"),"success"),e.reset()}catch(h){if(g.aborted||t.signal.aborted)return;console.error("Contact message failed:",h),(h==null?void 0:h.status)===422||h!=null&&h.errors?(p(h.errors),u(_("validation"),"error")):u(_("error"),"error")}finally{!t.signal.aborted&&e.isConnected&&c(!1)}},{signal:t.signal}),e.addEventListener("input",s=>{const d=s.target;d&&typeof d.setCustomValidity=="function"&&d.setCustomValidity(""),r||b()},{signal:t.signal}),()=>{t.abort(),l==null||l.abort()}}function de(){const e=(document.documentElement.lang||"").toLowerCase();return e==="fa"||e.startsWith("fa-")?"fa":e==="en"||e.startsWith("en-")?"en":document.documentElement.dir==="rtl"?"fa":"en"}const No={fa:{home:"خانه",service:"خدمات",ourServices:"خدمات ما",heading:"خدمات تخصصی دندان‌پزشکی",loading:"در حال دریافت خدمات...",empty:"در حال حاضر خدمتی برای نمایش وجود ندارد.",error:"دریافت خدمات با مشکل مواجه شد.",retry:"تلاش مجدد"},en:{home:"Home",service:"Services",ourServices:"Our Services",heading:"Restorative Dental Care Expertise",loading:"Loading services...",empty:"No services are available at the moment.",error:"Unable to load services.",retry:"Try Again"}};function K(e,t=de()){var a;return((a=No[t])==null?void 0:a[e])||e}function ge(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Ro(e,t){if(typeof e=="string")return e.trim();if(e&&typeof e=="object"){const a=e[t];return typeof a=="string"?a.trim():""}return""}function Oe(e,...t){for(const a of t){const o=Ro(a,e);if(o)return o}return""}function Oo(e,t){const a=e==null?void 0:e.translations;return Array.isArray(a)?a.find(o=>(o==null?void 0:o.lang)===t||(o==null?void 0:o.locale)===t||(o==null?void 0:o.language)===t)||{}:a&&typeof a=="object"?a[t]||{}:(e==null?void 0:e.translation)||{}}function _o(){const e="/";try{return new URL(e,window.location.origin).origin}catch{return window.location.origin}}function ut(e){if(e&&typeof e=="object"&&(e=e.url??e.full_url??e.src??e.path??""),typeof e!="string")return"";const t=e.trim();if(!t||/[<>"'\u0000-\u001F]/.test(t))return"";let a=t;/^(storage|uploads|images)\//i.test(a)&&(a=`/${a}`);try{const o=new URL(a,_o());return o.protocol!=="http:"&&o.protocol!=="https:"?"":o.href}catch{return""}}function Mo(e){var a;const t=e==null?void 0:e.data;return Array.isArray(t)?t:Array.isArray(t==null?void 0:t.data)?t.data:Array.isArray(t==null?void 0:t.services)?t.services:Array.isArray((a=t==null?void 0:t.services)==null?void 0:a.data)?t.services.data:Array.isArray(t==null?void 0:t.items)?t.items:null}function Bo(e,t){if(!e||typeof e!="object"||Array.isArray(e))return null;const a=Oo(e,t),o=Oe(t,a.name,a.title,e[`name_${t}`],e.name,e.title,e.service_name);if(!o)return null;const n=Oe(t,a.description,e[`description_${t}`],e.description),r=ut(e.image_1_url??e.image_1??e.image_url??e.image??""),l=ut(e.image_2_url??e.image_2??"");return{id:e.id??null,slug:Oe(t,e.slug,e.service_slug,a.slug),name:o,description:n,duration:e.duration!=null?Number(e.duration):null,price:e.price!=null?Number(e.price):null,depositAmount:e.deposit_amount!=null?Number(e.deposit_amount):null,image:r,secondImage:l}}const pt=`
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
`,Fo=`
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
`;function Uo(e){const t=ge(e.name),a=e.id!=null?`/services/${encodeURIComponent(String(e.id))}`:"",n=`
    <div class="service-three-image-block">

      ${e.image?`
      <img
        src="${ge(e.image)}"
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
        ${pt}
      </div>
    `}

      <div class="service-three-icon">
        <div class="service-icon-one w-embed">
          ${pt}
        </div>
      </div>

    </div>

    <div class="service-three-info-block">

      <h2 class="service-three-title-block">
        ${t}
      </h2>

      <div class="service-three-arrow-block">
        <div class="w-embed">
          ${Fo}
        </div>
      </div>

    </div>
  `;return`
    <div class="w-dyn-item" role="listitem">

      ${a?`
            <a
              href="${ge(a)}"
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
  `}function Ho(){const e=de();return`
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
                    ${K("ourServices",e)}
                  </h1>

                </div>

                <div class="breadcrumb-subtext-block">

                  <a
                    href="/"
                    class="breadcrumb-subtext"
                    data-service-home
                  >
                    ${K("home",e)}
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
                    ${K("service",e)}
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
                  ${K("ourServices",e)}
                </div>

              </div>

              <div class="section-title-grid">

                <h2
                  class="section-title"
                  data-service-heading
                >
                  ${K("heading",e)}
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
              ${K("loading",e)}
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
  `}function Vo(){const e=document.querySelector("[data-service-page]");if(!e)return()=>{};const t=new AbortController;let a=null,o=de();const n=e.querySelector("[data-service-list]"),r=e.querySelector("[data-service-status]"),l=Ie(document.getElementById("app"));function u(d){const g={"[data-service-title]":"ourServices","[data-service-home]":"home","[data-service-breadcrumb]":"service","[data-service-subtitle]":"ourServices","[data-service-heading]":"heading"};for(const[h,y]of Object.entries(g)){const w=e.querySelector(h);w&&(w.textContent=K(y,d))}}function b(d){r.hidden=!1,r.textContent=d}function f(){r.hidden=!0,r.textContent=""}function p(d){r.hidden=!1,r.innerHTML=`
      <p>
        ${ge(K("error",d))}
      </p>

      <button
        type="button"
        class="dp-service-retry"
        data-service-retry
      >
        ${ge(K("retry",d))}
      </button>
    `}async function c(){a==null||a.abort(),a=new AbortController;const d=a.signal,g=de();o=g,u(g),n.innerHTML="",b(K("loading",g));try{const h=await je.list(g,d);if(d.aborted||t.signal.aborted||!e.isConnected||de()!==g)return;if((h==null?void 0:h.status)===!1||(h==null?void 0:h.success)===!1)throw new Error(h.message||"SERVICE_API_ERROR");const y=Mo(h);if(!y){console.warn("Invalid services API response:",h),p(g);return}const w=y.map($=>Bo($,g)).filter(Boolean);if(y.length>0&&w.length===0){console.warn("Services returned without valid names:",y),p(g);return}if(w.length===0){b(K("empty",g));return}n.innerHTML=w.map(Uo).join(""),f()}catch(h){if(d.aborted||t.signal.aborted)return;console.error("Failed to load services:",h),p(g)}}e.addEventListener("click",d=>{d.target.closest("[data-service-retry]")&&(d.preventDefault(),c())},{signal:t.signal});const s=new MutationObserver(()=>{de()!==o&&c()});return s.observe(document.documentElement,{attributes:!0,attributeFilter:["lang","dir"]}),c(),()=>{t.abort(),a==null||a.abort(),s.disconnect(),typeof l=="function"&&l()}}function le(){const e=(document.documentElement.lang||"").toLowerCase();return e==="fa"||e.startsWith("fa-")?"fa":"en"}const zo={fa:{home:"خانه",services:"خدمات دندان‌پزشکی",details:"جزئیات خدمت",otherServices:"سایر خدمات",loading:"در حال دریافت اطلاعات خدمت...",notFound:"خدمت موردنظر پیدا نشد.",error:"دریافت اطلاعات خدمت با مشکل مواجه شد.",retry:"تلاش مجدد",back:"بازگشت به خدمات"},en:{home:"Home",services:"Dental Services",details:"Service Details",otherServices:"Our Services",loading:"Loading service details...",notFound:"Service not found.",error:"Unable to load service details.",retry:"Try Again",back:"Back to Services"}};function z(e,t=le()){var a;return((a=zo[t])==null?void 0:a[e])||e}function ae(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Go(){const t=location.pathname.replace(/\/+$/,"").match(/^\/services\/([1-9]\d*)$/);return t?t[1]:""}function jo(){const e="/";try{return new URL(e,location.origin).origin}catch{return location.origin}}function ht(e){if(e&&typeof e=="object"&&(e=e.url??e.full_url??e.src??e.path??""),typeof e!="string")return"";const t=e.trim();if(!t||/[<>"'\u0000-\u001F]/.test(t))return"";const a=/^(storage|uploads|images)\//i.test(t)?`/${t}`:t;try{const o=new URL(a,jo());return["http:","https:"].includes(o.protocol)?o.href:""}catch{return""}}function ve(e){return typeof e=="string"?e.trim():""}function _e(...e){for(const t of e){const a=ve(t);if(a)return a}return""}function mt(e){const t=ve(e);return t?t.split(/\n\s*\n/).filter(Boolean).map(a=>`
      <p>
        ${ae(a).replace(/\n/g,"<br>")}
      </p>
    `).join(""):""}function zt(e){if((e==null?void 0:e.status)===!1||(e==null?void 0:e.success)===!1)throw new Error((e==null?void 0:e.message)||"SERVICE_API_ERROR")}function Yo(e){var o;const t=e==null?void 0:e.data;return[t,t==null?void 0:t.data,t==null?void 0:t.services,(o=t==null?void 0:t.services)==null?void 0:o.data,t==null?void 0:t.items].find(Array.isArray)??[]}function Wo(e,t,a){zt(e);const o=e==null?void 0:e.data,n=(o==null?void 0:o.service)??(o==null?void 0:o.data)??o;if(Array.isArray(n)){const r=n.filter(l=>String(l==null?void 0:l.id)===String(t));return r.find(l=>l.locale===a)??r.find(l=>l.locale==null)??null}return n&&typeof n=="object"&&String(n.id)===String(t)&&(n.locale==null||n.locale===a)?n:null}function ft(e){if(!e||typeof e!="object"||Array.isArray(e))return null;const t=_e(e.name,e.title_1);return!t||e.id==null?null:{id:e.id,locale:ve(e.locale),name:t,title1:_e(e.title_1,e.name),description1:_e(e.description_1,e.description),image1:ht(e.image_1_url??e.image_1),title2:ve(e.title_2),description2:ve(e.description_2),image2:ht(e.image_2_url??e.image_2)}}const Ko=`
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
`,Zo=`
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
`;function Qo(e,t){const a=[];return a.length?`
    <div class="dp-service-facts">
      ${a.map(o=>`
        <div class="dp-service-fact">

          <span class="dp-service-fact-label">
            ${ae(o.label)}
          </span>

          <strong class="dp-service-fact-value">
            ${ae(o.value)}
          </strong>

        </div>
      `).join("")}
    </div>
  `:""}function Xo(e,t){const a=ae(e.title1),o=e.image1?`
      <img
        class="service-single-image"
        src="${ae(e.image1)}"
        alt="${a}"
        loading="eager"
        decoding="async"
      />
    `:`
      <div
        class="service-single-image dp-service-details-placeholder"
        aria-hidden="true"
      >
        ${Ko}
      </div>
    `,n=e.description1?`
      <div class="service-rich-one w-richtext">
        ${mt(e.description1)}
      </div>
    `:"",l=!!(e.title2||e.description2||e.image2)?`
      <div class="service-info-two dp-service-section-two">

        ${e.image2?`
              <img
                class="service-image-two"
                src="${ae(e.image2)}"
                alt="${ae(e.title2||e.name)}"
                loading="lazy"
                decoding="async"
              />
            `:""}

        ${e.title2||e.description2?`
              <div class="w-richtext dp-service-second-content">

                ${e.title2?`
                      <h2 class="dp-service-second-title">
                        ${ae(e.title2)}
                      </h2>
                    `:""}

                ${mt(e.description2)}

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

            ${Qo()}

            <!-- SECTION 2 -->

            ${l}

          </div>

        </div>
      </div>
    </div>
  `}function Jo(e,t){return`
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
                    ${ae(a.name)}
                  </h4>

                </div>

                <div class="service-single-icon-box">
                  <span class="service-single-icon">
                    ${Zo}
                  </span>
                </div>

              </a>
            </div>
          `}).join("")}

      </div>
    </div>
  `}function en(){const e=le();return`
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
                    ${z("services",e)}
                  </h1>

                </div>

                <div class="breadcrumb-subtext-block">

                  <a
                    href="/"
                    class="breadcrumb-subtext"
                    data-details-home
                  >
                    ${z("home",e)}
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
                    ${z("services",e)}
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
                    ${z("details",e)}
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
        ${z("loading",e)}
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
                        ${z("otherServices",e)}
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
  `}function tn(){const e=document.querySelector("[data-service-details-page]");if(!e)return()=>{};const t=new AbortController;let a=null,o=le();const n=Go(),r=e.querySelector("[data-details-status]"),l=e.querySelector("[data-details-section]"),u=e.querySelector("[data-details-content]"),b=e.querySelector("[data-details-sidebar]"),f=e.querySelector("[data-details-sidebar-box]"),p=Ie(document.getElementById("app"));function c($){const v={"[data-details-page-title]":"services","[data-details-home]":"home","[data-details-services]":"services","[data-details-breadcrumb]":"details","[data-details-sidebar-title]":"otherServices"};for(const[m,k]of Object.entries(v)){const D=e.querySelector(m);D&&(D.textContent=z(k,$))}}function s($,v=!1){if(r.hidden=!1,r.textContent=$,v){const m=document.createElement("button");m.type="button",m.className="dp-service-details-retry",m.dataset.detailsRetry="",m.textContent=z("retry"),r.appendChild(m)}}function d(){r.hidden=!0,r.textContent=""}function g(){l.hidden=!0,f.hidden=!0,u.innerHTML="",b.innerHTML=""}async function h($,v,m){try{const k=await je.list($,m);if(m.aborted||t.signal.aborted||!e.isConnected||le()!==$)return;zt(k);const D=Yo(k).filter(C=>!C.locale||C.locale===$).map(ft).filter(Boolean);if(!D.length){f.hidden=!0;return}b.innerHTML=Jo(D,v),f.hidden=!1}catch(k){!m.aborted&&!t.signal.aborted&&(console.warn("Failed to load sidebar services:",k),f.hidden=!0)}}async function y(){a==null||a.abort(),a=new AbortController;const $=a.signal,v=le();if(o=v,c(v),g(),!n){s(z("notFound",v));return}s(z("loading",v));try{const m=await je.show(n,v,$);if($.aborted||t.signal.aborted||!e.isConnected||le()!==v)return;const k=Wo(m,n,v),D=k?ft(k):null;if(!D){s(z("notFound",v));return}u.innerHTML=Xo(D,v),l.hidden=!1,d(),document.title=`${D.name} | Dentistry`,h(v,n,$)}catch(m){if($.aborted||t.signal.aborted)return;console.error("Service details API failed:",m);const k=(m==null?void 0:m.status)===404||(m==null?void 0:m.statusCode)===404;s(z(k?"notFound":"error",v),!k)}}e.addEventListener("click",$=>{$.target.closest("[data-details-retry]")&&($.preventDefault(),y())},{signal:t.signal});const w=new MutationObserver(()=>{le()!==o&&y()});return w.observe(document.documentElement,{attributes:!0,attributeFilter:["lang","dir"]}),y(),()=>{t.abort(),a==null||a.abort(),w.disconnect(),typeof p=="function"&&p()}}function J(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function U(e){return J(i(`teamDetails.${e}`))}function an(){const e=window.location.pathname.match(/^\/team\/([a-z0-9-]+)\/?$/i);return e?e[1].toLowerCase():""}const bt=`
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
`;function on(e){return`
    <section class="section breadcrumb-section">
      <div class="w-layout-blockcontainer container-fluid w-container">
        <div class="breadcrumb-block">

          <div class="w-layout-blockcontainer container w-container">
            <div class="breadcrumb-main-title-block">

              <div class="breadcrumb-title-block">
                <h1 class="breadcrumb-title">
                  ${J(e.name)}
                </h1>
              </div>

              <div class="breadcrumb-subtext-block">

                <a href="/" class="breadcrumb-subtext">
                  ${U("home")}
                </a>

                <span class="breadcrumb-subtext">-</span>

                <a href="/about-us#about-doctors"
                   class="breadcrumb-subtext">
                  ${U("team")}
                </a>

                <span class="breadcrumb-subtext">-</span>

                <span
                  class="breadcrumb-subtext"
                  aria-current="page"
                >
                  ${J(e.name)}
                </span>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  `}function nn(e){return`
    <section class="section team-single-section dp-team-details">

      <div class="w-layout-blockcontainer container w-container">
        <div class="w-layout-grid expert-grid">

          <!-- LEFT COLUMN -->

          <div class="left-expert-grid">

            <div class="expert-image-block">
              <img
                src="${J(e.image)}"
                alt="${J(e.name)}"
                class="expert-image"
                loading="eager"
              />
            </div>

            <div class="expert-flex-block">

              <h2 class="expert-team-tilte">
                ${J(e.name)}
              </h2>

              <div class="expert-designation">
                ${J(e.role)}
              </div>

            </div>

            <div class="dp-team-preview-badge">
              ${U("previewBadge")}
            </div>

            <div class="main-expert-duration">

              <h3 class="inner-expert-title">
                ${U("specialty")}
              </h3>

              <p class="dp-team-specialty">
                ${J(e.role)}
              </p>

            </div>

            <div class="main-expert-duration last">

              <h3 class="inner-expert-title">
                ${U("information")}
              </h3>

              <p class="dp-team-info">
                ${U("informationText")}
              </p>

            </div>

            <div class="expert-button-block">

              <a
                href="/contact-us"
                class="button-primary w-inline-block"
              >
                <span class="button-primary-text">
                  ${U("contactButton")}
                </span>

                <span class="button-icon-block">
                  ${bt}
                </span>
              </a>

            </div>

          </div>

          <!-- RIGHT COLUMN -->

          <div class="right-expert-grid">

            <div class="right-expert-sticky">

              <div class="expert-richbox w-richtext">

                <div class="dp-team-detail-eyebrow">
                  ${U("eyebrow")}
                </div>

                <h2>
                  ${U("aboutTitle")} ${J(e.name)}
                </h2>

                <p>
                  ${U("aboutDescription")}
                </p>

                <h3>
                  ${U("focusTitle")}
                </h3>

                <p>
                  ${J(e.focus)}
                </p>

                <h3>
                  ${U("approachTitle")}
                </h3>

                <p>
                  ${U("approachDescription")}
                </p>

                <div class="dp-team-detail-note">
                  ${U("previewNotice")}
                </div>

                <a
                  href="/about-us#about-doctors"
                  class="dp-team-back-link"
                >
                  <span class="dp-team-back-arrow">
                    ${bt}
                  </span>

                  ${U("backToDoctors")}
                </a>

              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  `}function rn(){return`
    <main class="dp-team-not-found">
      <h1>${U("notFound")}</h1>

      <a href="/about-us#about-doctors">
        ${U("backToDoctors")}
      </a>
    </main>
  `}function sn(){const e=_a(an());return e?`
    <main class="dp-team-details-page" data-no-translate>
      ${on(e)}
      ${nn(e)}
    </main>
  `:rn()}function ln(){return()=>{}}const cn=String.raw`
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
`;function dn(){return cn}function un(){return Ie(document.getElementById("app"))}const gt={arrow:'<path d="M5 12h14m-6-6 6 6-6 6"/>',back:'<path d="M19 12H5m6 6-6-6 6-6"/>',tooth:'<path d="M12 4c2.4 0 3.2-1.3 5.7-1.3C22.5 2.7 24 6.6 22.5 11c-1.3 4-2.4 10-5.6 10-2 0-2.2-7-4.9-7S9.1 21 7.1 21c-3.2 0-4.3-6-5.6-10C0 6.6 1.5 2.7 6.3 2.7 8.8 2.7 9.6 4 12 4Z"/>',calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',user:'<circle cx="12" cy="8" r="4"/><path d="M4.5 21a7.5 7.5 0 0 1 15 0"/>',users:'<circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0m1-14a3 3 0 0 1 0 6m2 3a5 5 0 0 1 3 5"/>',shield:'<path d="m12 2 8 4v6c0 5.1-3.5 8.3-8 10-4.5-1.7-8-4.9-8-10V6l8-4Z"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',mail:'<rect x="2.5" y="5" width="19" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',lock:'<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',eye:'<path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z"/><circle cx="12" cy="12" r="2.5"/>',eyeOff:'<path d="M3 3l18 18M10.5 6.2A11.4 11.4 0 0 1 12 6c6.5 0 10 6 10 6a17 17 0 0 1-3.3 3.8M6 7.8A16.1 16.1 0 0 0 2 12s3.5 6 10 6c1.7 0 3.1-.4 4.4-1"/>',check:'<path d="m5 12 4 4L19 6"/>',receipt:'<path d="M5 3h14v18l-3-2-4 2-4-2-3 2V3Z"/><path d="M9 8h6m-6 4h6"/>',activity:'<path d="M2 12h5l3-7 4 14 3-7h5"/>',credit:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',settings:'<path d="M10.5 2h3l.6 2.4 2.2.9 2.1-1.3 2.1 2.1-1.3 2.1.9 2.2 2.4.6v3l-2.4.6-.9 2.2 1.3 2.1-2.1 2.1-2.1-1.3-2.2.9-.6 2.4h-3l-.6-2.4-2.2-.9-2.1 1.3-2.1-2.1 1.3-2.1-.9-2.2L2 13.5v-3l2.4-.6.9-2.2L4 5.6l2.1-2.1 2.1 1.3 2.2-.9.1-1.9Z"/><circle cx="12" cy="12" r="3"/>',logOut:'<path d="M10 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5m4-4 4-4-4-4m4 4H9"/>',spark:'<path d="m12 2 2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2L12 2Z"/>',menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',phone:'<path d="M6 2h4l1 5-2.5 1.6a14 14 0 0 0 7 7L17 13l5 1v4c0 2-1.8 4-4 4C9.2 22 2 14.8 2 6c0-2.2 2-4 4-4Z"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 10v6m0-10h.01"/>'};function A(e,t=""){return`<svg class="dp-icon ${t}" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${gt[e]||gt.tooth}</svg>`}function Gt(e="Design preview only — no data is sent or saved to a server."){return`<div class="dp-demo-note" role="note">${A("info")}<span>${e}</span></div>`}function Se(e,t,a=""){return`<div class="dp-page-head"><div class="dp-eyebrow">${e}</div><h1>${t}</h1>${a?`<p>${a}</p>`:""}</div>`}function tt({section:e,title:t,subtitle:a,content:o,sideTitle:n,sideCopy:r}){return`<main class="dentistry-portal dp-auth-page" data-portal-page="${e}">
    <div class="dp-auth-layout">
      <aside class="dp-auth-visual" aria-label="Patient portal introduction">
        <a href="/" class="dp-auth-wordmark">${A("tooth")} <span>DR. ZEINOLABEDIN <small>DENTAL CARE</small></span></a>
        <div class="dp-auth-art" aria-hidden="true"><div class="dp-auth-orbit dp-auth-orbit-a"></div><div class="dp-auth-orbit dp-auth-orbit-b"></div><div class="dp-auth-tooth">${A("tooth")}</div><div class="dp-auth-mini dp-auth-mini-one">${A("shield")}<span>Private by design</span></div><div class="dp-auth-mini dp-auth-mini-two">${A("calendar")}<span>Easy appointments</span></div></div>
        <div class="dp-auth-visual-copy"><span class="dp-pill dp-pill-light">YOUR SMILE, OUR PRIORITY</span><h2>${n}</h2><p>${r}</p></div>
        <div class="dp-auth-visual-footer">A better dental experience starts here <span>✦</span></div>
      </aside>
      <section class="dp-auth-panel" aria-labelledby="portal-title"><div class="dp-auth-panel-inner">
        <div class="dp-mobile-logo">${A("tooth")} Dr. Zeinolabedin</div>
        ${Ze("dentistry-auth-lang")}
        <a class="dp-back-link" href="/">${A("back")} Back to website</a>
        <div class="dp-auth-head"><span class="dp-eyebrow">PATIENT PORTAL</span><h1 id="portal-title">${t}</h1><p>${a}</p></div>
        ${o}
       <div class="dp-auth-legal">
  ${i(e==="login"?"auth.shell.loginLegal":"auth.shell.privacyLegal")}
</div>
      </div></section>
    </div>
  </main>`}function Y({id:e,label:t,type:a="text",placeholder:o="",auto:n="",required:r=!0,attrs:l=""}){return`<label class="dp-field" for="${e}"><span>${t}</span><span class="dp-input-wrap"><input id="${e}" name="${e}" type="${a}" placeholder="${o}" ${n?`autocomplete="${n}"`:""} ${r?"required":""} ${l} /><span class="dp-field-icon">${A(a==="email"?"mail":a==="password"?"lock":a==="tel"?"phone":"user")}</span>${a==="password"?`<button type="button" class="dp-password-toggle" data-password-for="${e}" aria-label="Show password" aria-pressed="false">${A("eye")}</button>`:""}</span></label>`}function jt(e){const t=new AbortController;return e==null||e.querySelectorAll("[data-password-for]").forEach(a=>{a.addEventListener("click",()=>{const o=e.querySelector(`#${a.dataset.passwordFor}`);if(!o)return;const n=o.type==="password";o.type=n?"text":"password",a.innerHTML=A(n?"eyeOff":"eye"),a.setAttribute("aria-label",i(n?"Hide password":"Show password")),a.setAttribute("aria-pressed",String(n))},{signal:t.signal})}),()=>t.abort()}function ue(e,t,a="note"){const o=e==null?void 0:e.querySelector("[data-form-feedback]");o&&(o.textContent=i(t),o.dataset.state=a,o.hidden=!1)}function W(e){return oa(e)}const V={phone:null,expiresAt:0};function Yt(e){return String(e??"").replace(/[۰-۹]/g,t=>String(t.charCodeAt(0)-1776)).replace(/[٠-٩]/g,t=>String(t.charCodeAt(0)-1632))}function pn(e){let t=Yt(e).replace(/[\s()-]/g,"");return t=t.replace(/^(?:\+98|0098|98)/,"0"),/^09\d{9}$/.test(t)?t:null}function vt(e){return Yt(e).replace(/\D/g,"").slice(0,6)}function Me(e){return(e==null?void 0:e.success)===!0||(e==null?void 0:e.status)===!0}function Be(e,t="phone"){var o;const a=Number((e==null?void 0:e.statusCode)??(e==null?void 0:e.status)??((o=e==null?void 0:e.response)==null?void 0:o.status)??0);return a===429?i("auth.login.tooMany"):a===408?i("auth.login.timeout"):a>=500?i("auth.login.serverError"):t==="email"&&[401,403,422].includes(a)?i("auth.login.invalidCredentials"):t==="send"&&a===404?i("auth.login.noAccount"):t==="send"&&a===422?i("auth.login.invalidPhone"):t==="verify"&&[400,401,403,422].includes(a)?i("auth.login.invalidCode"):i("auth.login.networkError")}function yt(){const e=X()==="fa"?"fa":"en";window.location.assign(`/dashboard?lang=${e}`)}function hn(){return tt({section:"login",title:i("auth.login.title"),subtitle:i("auth.login.subtitle"),sideTitle:i("auth.login.sideTitle"),sideCopy:i("auth.login.sideCopy"),content:`

      <!-- LOGIN METHODS -->

      <div class="dp-login-methods">

        <button
          type="button"
          class="dp-btn dp-btn-primary"
          data-login-method="phone"
          aria-pressed="true"
        >
          ${A("phone")}
          ${i("auth.login.methodPhone")}
        </button>

        <button
          type="button"
          class="dp-btn dp-btn-outline"
          data-login-method="email"
          aria-pressed="false"
        >
          ${A("mail")}
          ${i("auth.login.methodEmail")}
        </button>

      </div>


      <!-- PHONE LOGIN FORM -->

      <form
        id="dp-login-phone-form"
        class="dp-form"
        novalidate
      >

        ${Y({id:"login-phone",label:i("auth.login.phone"),type:"tel",placeholder:i("auth.login.phonePlaceholder"),auto:"tel",attrs:'inputmode="tel" dir="ltr" maxlength="20"'})}

        <button
          class="dp-btn dp-btn-primary dp-btn-block"
          type="submit"
          data-login-send
        >
          ${i("auth.login.sendCode")}
          ${A("arrow")}
        </button>

      </form>


      <!-- OTP VERIFICATION FORM -->

      <form
        id="dp-login-otp-form"
        class="dp-form dp-login-otp-form"
        hidden
        novalidate
      >

        <p class="dp-otp-instruction">

          ${i("auth.login.codeSentTo")}

          <b
            data-login-phone-label
            dir="ltr"
          ></b>

        </p>

        ${Y({id:"login-code",label:i("auth.login.code"),type:"text",placeholder:i("auth.login.codePlaceholder"),auto:"one-time-code",attrs:'inputmode="numeric" maxlength="6" dir="ltr"'})}

        <p class="dp-otp-hint">
          ${i("auth.login.codeValidity")}
        </p>

        <button
          type="submit"
          class="dp-btn dp-btn-primary dp-btn-block"
          data-login-verify
        >
          ${i("auth.login.verify")}
          ${A("arrow")}
        </button>

        <div class="dp-login-actions">

          <button
            type="button"
            class="dp-login-text-button"
            data-login-edit
          >
            ${i("auth.login.editPhone")}
          </button>

          <button
            type="button"
            class="dp-login-text-button"
            data-login-resend
            disabled
          >
            ${i("auth.login.resend")}

            <span data-login-countdown></span>
          </button>

        </div>

      </form>


      <!-- EMAIL / PASSWORD LOGIN -->

      <form
        id="dp-login-email-form"
        class="dp-form"
        hidden
        novalidate
      >

        ${Y({id:"login-email",label:i("auth.login.email"),type:"email",placeholder:i("auth.login.emailPlaceholder"),auto:"email"})}

        ${Y({id:"login-password",label:i("auth.login.password"),type:"password",placeholder:i("auth.login.passwordPlaceholder"),auto:"current-password"})}

        <div class="dp-form-extras">

          <a href="/forgot-password">
            ${i("auth.login.forgotPassword")}
          </a>

        </div>

        <button
          type="submit"
          class="dp-btn dp-btn-primary dp-btn-block"
          data-login-email-submit
        >
          ${i("auth.login.signIn")}
          ${A("arrow")}
        </button>

      </form>


      <!-- FORGOT PASSWORD -->

      <div class="dp-login-forgot">

        <a href="/forgot-password">
          ${i("auth.login.forgotPassword")}
        </a>

      </div>


      <!-- FEEDBACK -->

      <p
        class="dp-form-feedback"
        data-form-feedback
        role="status"
        aria-live="polite"
        hidden
      ></p>


      <!-- REGISTER LINK -->

      <div class="dp-divider-text">
        <span>
          ${i("auth.login.newPatient")}
        </span>
      </div>

      <a
        href="/register"
        class="dp-btn dp-btn-outline dp-btn-block"
      >
        ${i("auth.login.createAccount")}
      </a>

    `})}function mn(){const e=document.querySelector('[data-portal-page="login"]');if(!e)return()=>{};const t=new AbortController,{signal:a}=t,o=jt(e),n=e.querySelector("#dp-login-phone-form"),r=e.querySelector("#dp-login-otp-form"),l=e.querySelector("#dp-login-email-form"),u=e.querySelector("#login-phone"),b=e.querySelector("#login-code"),f=e.querySelector("#login-email"),p=e.querySelector("#login-password"),c=e.querySelector("[data-login-resend]"),s=e.querySelector("[data-login-countdown]"),d=e.querySelector("[data-form-feedback]");let g="phone",h=null,y=!1,w=!1,$=null;const v=(R,B="note")=>{ue(e,R,B)};function m(){d.hidden=!0,d.textContent=""}new URLSearchParams(window.location.search).get("expired")==="1"&&v(i("auth.sessionExpired"),"error");function D(){e.querySelector("[data-login-send]").disabled=w,e.querySelector("[data-login-verify]").disabled=w,e.querySelector("[data-login-email-submit]").disabled=w;const R=Math.max(0,Math.ceil((V.expiresAt-Date.now())/1e3));c.disabled=w||R>0,s.textContent=R>0?`(${R}s)`:"",e.querySelectorAll("[data-login-method]").forEach(B=>{B.disabled=w})}function C(R){w=R,D()}function L(){n.hidden=g!=="phone"||y,r.hidden=g!=="phone"||!y,l.hidden=g!=="email",e.querySelectorAll("[data-login-method]").forEach(R=>{const B=R.dataset.loginMethod===g;R.classList.toggle("dp-btn-primary",B),R.classList.toggle("dp-btn-outline",!B),R.setAttribute("aria-pressed",String(B))}),D()}function T(){$&&clearInterval($),$=null}function E(){T(),D(),$=setInterval(()=>{if(a.aborted){T();return}D(),Date.now()>=V.expiresAt&&T()},1e3)}function S(){y=!0,b.value="",e.querySelector("[data-login-phone-label]").textContent=h,L(),g==="phone"&&b.focus()}async function x(R=!1){if(w)return;const B=pn(u.value);if(!B)return v(i("auth.login.invalidPhone"),"error");h=B,C(!0),m();try{const P=await Ne.sendCode(h,a);if(a.aborted)return;if(!Me(P))throw new Error("SEND_CODE_FAILED");V.phone=h,V.expiresAt=Date.now()+12e4,S(),E(),v(i(R?"auth.login.resent":"auth.login.sent"))}catch(P){a.aborted||v(Be(P,"send"),"error")}finally{a.aborted||C(!1)}}return e.querySelectorAll("[data-login-method]").forEach(R=>{R.addEventListener("click",()=>{w||(g=R.dataset.loginMethod,m(),L())},{signal:a})}),n.addEventListener("submit",R=>{R.preventDefault(),x()},{signal:a}),r.addEventListener("submit",async R=>{if(R.preventDefault(),w)return;const B=vt(b.value);if(B.length!==6)return v(i("auth.login.invalidCodeFormat"),"error");if(!h)return v(i("auth.login.invalidPhone"),"error");C(!0),m();try{const P=await Ne.verifyCode(h,B,a);if(a.aborted)return;if(!Me(P))throw new Error("VERIFY_FAILED");xe(P),ot(),V.phone=null,V.expiresAt=0,T(),yt()}catch(P){a.aborted||v((P==null?void 0:P.message)==="AUTH_TOKEN_MISSING"?i("auth.login.invalidApiToken"):Be(P,"verify"),"error")}finally{a.aborted||C(!1)}},{signal:a}),l.addEventListener("submit",async R=>{if(R.preventDefault(),w)return;const B=f.value.trim(),P=p.value;if(!f.checkValidity()||!B)return v(i("auth.login.invalidEmail"),"error");if(!P)return v(i("auth.login.enterPassword"),"error");C(!0),m();try{const ee=await Ne.loginWithEmail(B,P,a);if(a.aborted)return;if(!Me(ee))throw new Error("LOGIN_FAILED");xe(ee),ot(),yt()}catch(ee){a.aborted||v((ee==null?void 0:ee.message)==="AUTH_TOKEN_MISSING"?i("auth.login.invalidApiToken"):Be(ee,"email"),"error")}finally{a.aborted||C(!1)}},{signal:a}),b.addEventListener("input",()=>{b.value=vt(b.value)},{signal:a}),e.querySelector("[data-login-edit]").addEventListener("click",()=>{w||(y=!1,V.phone=null,V.expiresAt=0,T(),m(),L(),u.focus())},{signal:a}),c.addEventListener("click",()=>{!w&&!c.disabled&&x(!0)},{signal:a}),V.phone&&V.expiresAt>Date.now()?(h=V.phone,u.value=h,S(),E()):(V.phone=null,V.expiresAt=0,L()),()=>{t.abort(),T(),typeof o=="function"&&o()}}const M={name:"",phone:"",referralCode:"",expiresAt:0};function Wt(e){return String(e??"").replace(/[۰-۹]/g,t=>String(t.charCodeAt(0)-1776)).replace(/[٠-٩]/g,t=>String(t.charCodeAt(0)-1632))}function fn(e){let t=Wt(e).replace(/[\s()-]/g,"");return t=t.replace(/^(?:\+98|0098|98)/,"0"),/^09\d{9}$/.test(t)?t:null}function wt(e){return Wt(e).replace(/\D/g,"").slice(0,6)}function $t(e,t){const a=Number((e==null?void 0:e.status)||0);return a===429?i("auth.register.tooMany"):a===408?i("auth.register.timeout"):a===0?i("auth.register.networkError"):a>=500?i("auth.register.serverError"):a===409&&t==="send"?i("auth.register.alreadyRegistered"):t==="verify"&&[400,401,403,410,422].includes(a)?i("auth.register.invalidCode"):i(a===422?"auth.register.invalidData":"auth.register.requestFailed")}function bn(){return tt({section:"register",title:i("auth.register.title"),subtitle:i("auth.register.subtitle"),sideTitle:i("auth.register.sideTitle"),sideCopy:i("auth.register.sideCopy"),content:`
      <!-- STEP 1: Registration details -->
      <form
        id="dp-register-form"
        class="dp-form"
        data-register-step="details"
        novalidate
      >
        ${Y({id:"register-name",label:i("auth.register.name"),placeholder:i("auth.register.namePlaceholder"),auto:"name",attrs:'minlength="2" maxlength="100"'})}

        ${Y({id:"register-phone",label:i("auth.register.phone"),type:"tel",placeholder:"09123456789",auto:"tel",attrs:'inputmode="tel" maxlength="20" dir="ltr"'})}

        ${Y({id:"register-referral",label:i("auth.register.referral"),type:"text",placeholder:i("auth.register.referralPlaceholder"),attrs:'maxlength="64"'})}

        <button
          type="submit"
          class="dp-btn dp-btn-primary dp-btn-block"
          data-register-send
        >
          ${i("auth.register.sendCode")}
          ${A("arrow")}
        </button>
      </form>

      <!-- STEP 2: Verify OTP -->
      <form
        id="dp-register-verify-form"
        class="dp-form"
        data-register-step="verify"
        hidden
        novalidate
      >
        <div class="dp-demo-note">
          <span>
            ${i("auth.register.codeSentTo")}
            <strong data-register-phone-label dir="ltr"></strong>
          </span>
        </div>

        ${Y({id:"register-code",label:i("auth.register.code"),type:"text",placeholder:i("auth.register.codePlaceholder"),auto:"one-time-code",attrs:'inputmode="numeric" maxlength="6" dir="ltr"'})}

        <p class="dp-otp-hint">
          ${i("auth.register.codeValidity")}
        </p>

        <button
          type="submit"
          class="dp-btn dp-btn-primary dp-btn-block"
          data-register-verify
        >
          ${i("auth.register.verify")}
          ${A("arrow")}
        </button>

        <div class="dp-form-extras">
          <button
            type="button"
            class="dp-text-button"
            data-register-edit
          >
            ${i("auth.register.editPhone")}
          </button>

          <button
            type="button"
            class="dp-text-button"
            data-register-resend
            disabled
          >
            ${i("auth.register.resend")}
            <span data-register-countdown></span>
          </button>
        </div>
      </form>

      <!-- STEP 3: Registration complete -->
      <div
        id="dp-register-complete"
        data-register-step="complete"
        hidden
      >
        <div class="dp-form-feedback" role="status">
          ${i("auth.register.success")}
        </div>

        <a
          href="/login"
          class="dp-btn dp-btn-primary dp-btn-block"
          style="margin-top:20px"
        >
          ${i("auth.register.goToLogin")}
          ${A("arrow")}
        </a>
      </div>

      <p
        class="dp-form-feedback"
        data-form-feedback
        role="status"
        aria-live="polite"
        hidden
      ></p>

      <p class="dp-form-switch">
        ${i("auth.register.haveAccount")}
        <a href="/login">
          ${i("auth.register.signIn")}
        </a>
      </p>
    `})}function gn(){const e=document.querySelector('[data-portal-page="register"]');if(!e)return()=>{};const t=new AbortController,{signal:a}=t,o=e.querySelector("#dp-register-form"),n=e.querySelector("#dp-register-verify-form"),r=e.querySelector("#register-name"),l=e.querySelector("#register-phone"),u=e.querySelector("#register-referral"),b=e.querySelector("#register-code"),f=e.querySelector("[data-register-resend]"),p=e.querySelector("[data-register-countdown]"),c=e.querySelector("[data-form-feedback]");let s=!1,d=null;function g(L,T="note"){ue(e,L,T)}function h(){c&&(c.hidden=!0,c.textContent="")}function y(L){e.querySelectorAll("[data-register-step]").forEach(T=>{T.hidden=T.dataset.registerStep!==L})}function w(){const L=e.querySelector("[data-register-send]"),T=e.querySelector("[data-register-verify]"),E=e.querySelector("[data-register-edit]");L.disabled=s,T.disabled=s,E.disabled=s;const S=Math.max(0,Math.ceil((M.expiresAt-Date.now())/1e3));f.disabled=s||S>0,p.textContent=S>0?`(${S}s)`:""}function $(L){s=L,w()}function v(){d!==null&&(clearInterval(d),d=null)}function m(){v(),w(),d=setInterval(()=>{w(),Date.now()>=M.expiresAt&&v()},1e3)}function k(){e.querySelector("[data-register-phone-label]").textContent=M.phone,y("verify"),w(),b.focus()}async function D(L=!1){if(s)return;const T=r.value.trim(),E=fn(l.value),S=u.value.trim();if(T.length<2){g(i("auth.register.invalidName"),"error");return}if(!E){g(i("auth.register.invalidPhone"),"error");return}$(!0),h();try{const x=await st.sendCode(T,E,S,a);if(a.aborted)return;if((x==null?void 0:x.success)!==!0)throw new Error("REGISTER_SEND_FAILED");M.name=T,M.phone=E,M.referralCode=S,M.expiresAt=Date.now()+2*60*1e3,b.value="",k(),m(),g(i(L?"auth.register.resent":"auth.register.sent"))}catch(x){a.aborted||g($t(x,"send"),"error")}finally{a.aborted||$(!1)}}o.addEventListener("submit",L=>{L.preventDefault(),D()},{signal:a}),n.addEventListener("submit",async L=>{var E,S;if(L.preventDefault(),s)return;const T=wt(b.value);if(T.length!==6){g(i("auth.register.invalidCodeFormat"),"error");return}if(!M.phone){y("details"),g(i("auth.register.sessionExpired"),"error");return}$(!0),h();try{const x=await st.verifyCode(M.phone,T,M.name,M.referralCode,a);if(a.aborted)return;if((x==null?void 0:x.success)!==!0)throw new Error("REGISTER_VERIFY_FAILED");if((x==null?void 0:x.success)!==!0||!((E=x==null?void 0:x.data)!=null&&E.token)||!((S=x==null?void 0:x.data)!=null&&S.client))throw new Error("INVALID_REGISTER_RESPONSE");const R=xe(x);C(),window.location.assign("/dashboard");return}catch(x){a.aborted||g($t(x,"verify"),"error")}finally{a.aborted||$(!1)}},{signal:a});function C(){M.name="",M.phone="",M.referralCode="",M.expiresAt=0,b.value="",v()}return e.querySelector("[data-register-edit]").addEventListener("click",()=>{s||(C(),h(),y("details"),w(),l.focus())},{signal:a}),f.addEventListener("click",()=>{s||f.disabled||D(!0)},{signal:a}),b.addEventListener("input",()=>{b.value=wt(b.value)},{signal:a}),M.phone&&M.expiresAt>Date.now()?(r.value=M.name,l.value=M.phone,u.value=M.referralCode,k(),m()):(C(),y("details"),w()),()=>{t.abort(),v()}}const vn=60*1e3,I={step:"phone",phone:"",code:"",resetToken:"",resetExpiresAt:0,resendAfter:0};function Kt(e){return String(e??"").replace(/[۰-۹]/g,t=>String(t.charCodeAt(0)-1776)).replace(/[٠-٩]/g,t=>String(t.charCodeAt(0)-1632))}function kt(e){let t=Kt(e).replace(/[\s()-]/g,"");return t=t.replace(/^(?:\+98|0098|98)/,"0"),/^09\d{9}$/.test(t)?t:null}function St(e){return Kt(e).replace(/\D/g,"").slice(0,6)}function Fe(){I.step="phone",I.phone="",I.code="",I.resetToken="",I.resetExpiresAt=0,I.resendAfter=0}function Ue(e,t){const a=Number((e==null?void 0:e.status)??0),o=(e==null?void 0:e.errors)??{};return a===429?i("auth.forgot.tooMany"):a===408?i("auth.forgot.timeout"):a>=500?i("auth.forgot.serverError"):a===0?i("auth.forgot.networkError"):a===410||t==="reset"&&o.reset_token?i("auth.forgot.resetTokenExpired"):t==="verify"&&[400,401,403,422].includes(a)||t==="reset"&&[400,401,403].includes(a)?i("auth.forgot.invalidCode"):i(a===422?t==="send"?"auth.forgot.invalidPhone":"auth.forgot.invalidData":"auth.forgot.requestFailed")}function yn(){return tt({section:"forgot-password",title:i("auth.forgot.title"),subtitle:i("auth.forgot.subtitle"),sideTitle:i("auth.forgot.sideTitle"),sideCopy:i("auth.forgot.sideCopy"),content:`
      <div class="dp-recovery-icon">
        ${A("lock")}
      </div>

      <!-- STEP 1: SEND CODE -->

      <form
        id="dp-forgot-phone-form"
        class="dp-form"
        data-forgot-step="phone"
        novalidate
      >
        ${Y({id:"forgot-phone",label:i("auth.forgot.phone"),type:"tel",placeholder:"09123456789",auto:"tel",attrs:'inputmode="tel" maxlength="20" dir="ltr"'})}

        <button
          type="submit"
          class="dp-btn dp-btn-primary dp-btn-block"
          data-forgot-send
        >
          ${i("auth.forgot.sendCode")}
          ${A("arrow")}
        </button>
      </form>

      <!-- STEP 2: VERIFY CODE -->

      <form
        id="dp-forgot-otp-form"
        class="dp-form"
        data-forgot-step="otp"
        hidden
        novalidate
      >
        <p class="dp-otp-instruction">
          ${i("auth.forgot.codeSentTo")}
          <strong
            data-forgot-phone-label
            dir="ltr"
          ></strong>
        </p>

        ${Y({id:"forgot-code",label:i("auth.forgot.code"),type:"text",placeholder:i("auth.forgot.codePlaceholder"),auto:"one-time-code",attrs:'inputmode="numeric" maxlength="6" dir="ltr"'})}

        <button
          type="submit"
          class="dp-btn dp-btn-primary dp-btn-block"
          data-forgot-verify
        >
          ${i("auth.forgot.verify")}
          ${A("arrow")}
        </button>

        <div class="dp-form-extras">
          <button
            type="button"
            class="dp-text-button"
            data-forgot-edit
          >
            ${i("auth.forgot.changePhone")}
          </button>

          <button
            type="button"
            class="dp-text-button"
            data-forgot-resend
            disabled
          >
            ${i("auth.forgot.resend")}
            <span data-forgot-countdown></span>
          </button>
        </div>
      </form>

      <!-- STEP 3: NEW PASSWORD -->

      <form
        id="dp-forgot-reset-form"
        class="dp-form"
        data-forgot-step="reset"
        hidden
        novalidate
      >
        <p class="dp-otp-instruction">
          ${i("auth.forgot.verifiedPhone")}
          <strong
            data-forgot-phone-label
            dir="ltr"
          ></strong>
        </p>

        ${Y({id:"forgot-password",label:i("auth.forgot.newPassword"),type:"password",placeholder:i("auth.forgot.newPasswordPlaceholder"),auto:"new-password",attrs:'minlength="8"'})}

        ${Y({id:"forgot-confirm",label:i("auth.forgot.confirmPassword"),type:"password",placeholder:i("auth.forgot.confirmPlaceholder"),auto:"new-password",attrs:'minlength="8"'})}

        <button
          type="submit"
          class="dp-btn dp-btn-primary dp-btn-block"
          data-forgot-reset
        >
          ${i("auth.forgot.resetPassword")}
          ${A("arrow")}
        </button>
      </form>

      <!-- STEP 4: SUCCESS -->

      <div
        id="dp-forgot-complete"
        data-forgot-step="done"
        hidden
      >
        <div class="dp-form-feedback" role="status">
          ${i("auth.forgot.success")}
        </div>

        <a
          href="/login"
          class="dp-btn dp-btn-primary dp-btn-block"
          style="margin-top:20px"
        >
          ${i("auth.forgot.backToLogin")}
          ${A("arrow")}
        </a>
      </div>

      <!-- API FEEDBACK -->

      <p
        class="dp-form-feedback"
        data-form-feedback
        role="status"
        aria-live="polite"
        hidden
      ></p>

      <!-- BACK TO LOGIN -->

      <p class="dp-form-switch">
        <a href="/login">
          ${i("auth.forgot.backToLogin")}
        </a>
      </p>
    `})}function wn(){const e=document.querySelector('[data-portal-page="forgot-password"]');if(!e)return()=>{};const t=new AbortController,{signal:a}=t,o=jt(e),n=e.querySelector("#dp-forgot-phone-form"),r=e.querySelector("#dp-forgot-otp-form"),l=e.querySelector("#dp-forgot-reset-form"),u=e.querySelector("#forgot-phone"),b=e.querySelector("#forgot-code"),f=e.querySelector("#forgot-password"),p=e.querySelector("#forgot-confirm"),c=e.querySelector("[data-forgot-resend]"),s=e.querySelector("[data-forgot-countdown]"),d=e.querySelector("[data-form-feedback]");let g=!1,h=null;function y(T,E="note"){ue(e,i(T),E)}function w(){d&&(d.hidden=!0,d.textContent="",delete d.dataset.state)}function $(T){I.step=T,e.querySelectorAll("[data-forgot-step]").forEach(E=>{E.hidden=E.dataset.forgotStep!==T}),e.querySelectorAll("[data-forgot-phone-label]").forEach(E=>{E.textContent=I.phone}),v()}function v(){const T=Math.max(0,Math.ceil((I.resendAfter-Date.now())/1e3));["[data-forgot-send]","[data-forgot-verify]","[data-forgot-reset]","[data-forgot-edit]"].forEach(S=>{const x=e.querySelector(S);x&&(x.disabled=g)}),c.disabled=g||T>0,s.textContent=T>0?`(${T}s)`:""}function m(T){g=T,v()}function k(){h!==null&&(clearInterval(h),h=null)}function D(){k(),v(),h=setInterval(()=>{v(),Date.now()>=I.resendAfter&&k()},1e3)}function C(){k(),Fe(),u.value="",b.value="",f.value="",p.value="",$("phone")}async function L(T=!1){if(g)return;const E=kt(T?I.phone:u.value);if(!E){y("auth.forgot.invalidPhone","error");return}if(!(T&&Date.now()<I.resendAfter)){m(!0),w();try{const S=await Re.sendCode(E,a);if(a.aborted)return;if((S==null?void 0:S.success)!==!0)throw new Error("SEND_CODE_FAILED");I.phone=E,I.code="",I.resetToken="",I.resetExpiresAt=0,I.resendAfter=Date.now()+vn,b.value="",$("otp"),D(),y(T?"auth.forgot.resent":"auth.forgot.sent"),b.focus()}catch(S){a.aborted||ue(e,Ue(S,"send"),"error")}finally{a.aborted||m(!1)}}}return n.addEventListener("submit",T=>{T.preventDefault(),L()},{signal:a}),r.addEventListener("submit",async T=>{if(T.preventDefault(),g)return;const E=St(b.value);if(E.length!==6){y("auth.forgot.invalidCodeFormat","error");return}if(!I.phone){C(),y("auth.forgot.sessionExpired","error");return}m(!0),w();try{const S=await Re.verifyCode(I.phone,E,a);if(a.aborted)return;const x=S==null?void 0:S.data;if((S==null?void 0:S.success)!==!0||(x==null?void 0:x.verified)!==!0||typeof(x==null?void 0:x.reset_token)!="string"||!x.reset_token.trim()||!Number.isFinite(Number(x.expires_in))||Number(x.expires_in)<=0)throw new Error("INVALID_VERIFY_RESPONSE");if(kt(x.phone)!==I.phone)throw new Error("INVALID_VERIFY_RESPONSE");I.code=E,I.resetToken=x.reset_token,I.resetExpiresAt=Date.now()+Number(x.expires_in)*1e3,b.value="",k(),$("reset"),y("auth.forgot.verified"),f.focus()}catch(S){a.aborted||ue(e,(S==null?void 0:S.message)==="INVALID_VERIFY_RESPONSE"?i("auth.forgot.requestFailed"):Ue(S,"verify"),"error")}finally{a.aborted||m(!1)}},{signal:a}),l.addEventListener("submit",async T=>{var x,R,B;if(T.preventDefault(),g)return;const E=f.value,S=p.value;if(E.length<8){y("auth.forgot.shortPassword","error");return}if(E!==S){y("auth.forgot.passwordMismatch","error");return}if(!I.phone||!I.code||!I.resetToken){C(),y("auth.forgot.sessionExpired","error");return}if(Date.now()>=I.resetExpiresAt){C(),y("auth.forgot.resetTokenExpired","error");return}m(!0),w();try{const P=await Re.resetPassword(I.phone,I.code,I.resetToken,E,S,a);if(a.aborted)return;if((P==null?void 0:P.success)!==!0)throw new Error("RESET_PASSWORD_FAILED");const ee=typeof((x=P==null?void 0:P.data)==null?void 0:x.token)=="string"&&!!P.data.token.trim()&&!!((R=P==null?void 0:P.data)!=null&&R.client);let Pe=!1;if(ee)try{xe(P),Pe=!0}catch{Pe=!1}if(Fe(),b.value="",f.value="",p.value="",Pe){window.location.assign("/dashboard");return}$("done"),w()}catch(P){a.aborted||((P==null?void 0:P.status)===410||(B=P==null?void 0:P.errors)!=null&&B.reset_token?(C(),y("auth.forgot.resetTokenExpired","error")):ue(e,Ue(P,"reset"),"error"))}finally{a.aborted||m(!1)}},{signal:a}),e.querySelector("[data-forgot-edit]").addEventListener("click",()=>{if(g)return;const T=I.phone;C(),u.value=T,w(),u.focus()},{signal:a}),c.addEventListener("click",()=>{!g&&!c.disabled&&L(!0)},{signal:a}),b.addEventListener("input",()=>{b.value=St(b.value)},{signal:a}),I.step==="reset"&&Date.now()>=I.resetExpiresAt&&Fe(),u.value=I.phone,$(I.step),I.step==="otp"&&D(),()=>{t.abort(),k(),o()}}function Et(e){const t=e==null?void 0:e.data;return[t==null?void 0:t.client,t==null?void 0:t.profile,t==null?void 0:t.user,t].find(o=>o&&typeof o=="object"&&!Array.isArray(o)&&(o.id!==void 0||o.phone!==void 0||o.name!==void 0))||null}function $n(){return`
    <div class="dp-white-card dp-patient-profile">

      <div class="dp-card-head">
        <div>
          <h2>${i("profile.information")}</h2>
        </div>

        <button
          type="button"
          class="dp-btn dp-btn-outline dp-btn-small"
          data-profile-reload
        >
          ${i("profile.reload")}
        </button>
      </div>

      <p
        data-profile-status
        role="status"
        aria-live="polite"
        class="dp-profile-status"
      >
        ${i("profile.loading")}
      </p>

      <div class="dp-profile-grid">
        <div>
          <span>${i("profile.name")}</span>
          <strong data-profile-name>—</strong>
        </div>

        <div>
          <span>${i("profile.email")}</span>
          <strong data-profile-email>—</strong>
        </div>

        <div>
          <span>${i("profile.phone")}</span>
          <strong data-profile-phone dir="ltr">—</strong>
        </div>

        <div>
          <span>${i("profile.referral")}</span>
          <strong data-profile-referral>—</strong>
        </div>
      </div>

      <p class="dp-profile-hint">
        ${i("profile.phoneHint")}
      </p>

    </div>
  `}function kn(e){if(!e)return()=>{};const t=new AbortController,{signal:a}=t,o=e.querySelector("[data-profile-status]"),n=e.querySelector("[data-profile-reload]");let r=!1;function l(p,c=!1){!o||a.aborted||(o.textContent=p,o.dataset.state=c?"error":"normal")}function u(p){const c={"[data-profile-name]":p.name||"—","[data-profile-email]":p.email||i("profile.notSet"),"[data-profile-phone]":p.phone||"—","[data-profile-referral]":p.referral_code||"—"};for(const[g,h]of Object.entries(c)){const y=e.querySelector(g);y&&(y.textContent=String(h))}const s=e.querySelector("[data-dashboard-name]");s&&(s.textContent=p.name||"—");const d=e.querySelector("[data-patient-avatar]");if(d){const g=String(p.name||"").trim();d.textContent=g?g.slice(0,2):"—"}}async function b(p){try{return await p()}catch(c){if(a.aborted||(c==null?void 0:c.status)!==401)throw c;try{const s=await Ae.refresh(a);return a.aborted?null:(ra(s),await p())}catch(s){if(a.aborted)return null;throw Ce(),window.location.assign("/login"),s}}}async function f(){if(!(r||a.aborted)){if(!we()){window.location.assign("/login");return}r=!0,n&&(n.disabled=!0),l(i("profile.loading"));try{const p=await b(()=>Ae.me(a));if(a.aborted)return;const c=Et(p);let s=null;try{const g=await b(()=>Ae.getProfile(a));if(a.aborted)return;s=Et(g)}catch(g){if(a.aborted)return;if((g==null?void 0:g.status)===401)throw g}const d={...c||{},...s||{}};if(!d.id&&!d.phone&&!d.name)throw new Error("PROFILE_DATA_MISSING");u(d),l(i(s?"profile.loaded":"profile.partial"))}catch(p){if(a.aborted)return;if((p==null?void 0:p.status)===401){Ce(),window.location.assign("/login");return}l(i("profile.loadError"),!0)}finally{r=!1,!a.aborted&&n&&(n.disabled=!1)}}}return n==null||n.addEventListener("click",()=>void f(),{signal:a}),f(),()=>t.abort()}function Zt(){return[["overview","Overview","activity"],["appointments","Appointments","calendar"],["treatments","Treatment plans","tooth"],["billing","Billing & payments","credit"],["profile",i("profile.title"),"user"]]}function Sn([e,t,a],o){const n=o===0;return`
    <button
      type="button"
      class="dp-dash-nav-item${n?" is-active":""}"
      data-dashboard-tab="${e}"
      role="tab"
      id="dp-tab-${e}"
      aria-selected="${n}"
      aria-controls="dp-panel-${e}"
      tabindex="${n?"0":"-1"}"
    >
      ${A(a)}
      <span>${t}</span>
      ${n?'<i aria-hidden="true"></i>':""}
    </button>
  `}function En(){return`
    <article class="dp-appointment-card">

      <div class="dp-appointment-date">
        <strong>25</strong>
        <span>OCT<br>2026</span>
      </div>

      <div class="dp-appointment-main">
        <span class="dp-chip dp-chip-green">
          Example · Upcoming
        </span>

        <h3>Dental consultation</h3>

        <p>
          ${A("user")}
          Sample provider

          <span class="dp-separator">•</span>

          ${A("clock")}
          10:30 AM
        </p>
      </div>

      <a
        class="dp-btn dp-btn-outline dp-btn-small"
        href="/checkout"
      >
        View demo checkout
        ${A("arrow")}
      </a>

    </article>
  `}function Tn(){return`
    <div class="dp-timeline">

      <div class="dp-timeline-item">
        <span class="dp-dot"></span>

        <div>
          <strong>Dental consultation</strong>
          <p>Example appointment · Oct 25, 2026</p>
        </div>

        <span class="dp-chip dp-chip-green">
          Upcoming
        </span>
      </div>

      <div class="dp-timeline-item">
        <span class="dp-dot dp-dot-muted"></span>

        <div>
          <strong>Routine examination</strong>
          <p>Example previous visit · Sep 12, 2026</p>
        </div>

        <span class="dp-chip">
          Completed
        </span>
      </div>

      <div class="dp-timeline-item">
        <span class="dp-dot dp-dot-muted"></span>

        <div>
          <strong>Cleaning & prevention</strong>
          <p>Example previous visit · Jul 07, 2026</p>
        </div>

        <span class="dp-chip">
          Completed
        </span>
      </div>

    </div>
  `}function An(){return`
    <div class="dp-list-row">
      <span class="dp-record-icon">
        ${A("tooth")}
      </span>

      <div>
        <strong>Routine dental assessment</strong>
        <p>Example plan · Created Sep 12, 2026</p>
      </div>

      <span class="dp-chip dp-chip-green">
        Illustrative
      </span>
    </div>

    <div class="dp-list-row">
      <span class="dp-record-icon">
        ${A("shield")}
      </span>

      <div>
        <strong>Preventive care guidance</strong>
        <p>Example educational record</p>
      </div>

      <span class="dp-chip">
        Sample
      </span>
    </div>
  `}function xn(){const e=Zt();return`
    <main
      class="dentistry-portal dp-dashboard-page"
      data-portal-page="dashboard"
    >
      <div class="dp-dashboard-layout">

        <!-- =====================================
             SIDEBAR
        ====================================== -->

        <aside class="dp-dash-sidebar">

          <a class="dp-dash-brand" href="/">
            ${A("tooth")}

            <span>
              DR. ZEINOLABEDIN
              <small>PATIENT PORTAL</small>
            </span>
          </a>

          <div class="dp-sidebar-kicker">
            WORKSPACE
          </div>

          <nav
            class="dp-dash-nav"
            role="tablist"
            aria-label="Patient dashboard sections"
          >
            ${e.map(Sn).join("")}
          </nav>

          <!-- SIDEBAR BOTTOM -->

          <div class="dp-sidebar-bottom">

            <div class="dp-support-box">

              ${A("phone")}

              <strong>
                Need assistance?
              </strong>

              <p>
                Reach out to the clinic for
                appointment or billing questions.
              </p>

              <a href="/contact-us">
                Contact us
                ${A("arrow")}
              </a>

            </div>

            <!-- REAL LOGOUT -->

            <button
              type="button"
              class="dp-sidebar-back"
              data-dashboard-logout
            >
              ${A("back")}
              <span>${i("profile.logout")}</span>
            </button>

          </div>

        </aside>

        <!-- =====================================
             MAIN CONTENT
        ====================================== -->

        <div class="dp-dash-content">

          <!-- TOPBAR -->

          <div class="dp-dash-topbar">

            <button
              class="dp-dash-mobile-menu"
              id="dp-dash-menu"
              type="button"
              aria-expanded="false"
              aria-controls="dp-dash-mobile-tabs"
              aria-label="Toggle dashboard navigation"
            >
              ${A("menu")}
            </button>

            <div class="dp-topbar-breadcrumb">
              Patient portal
              <span>/</span>

              <strong data-current-section>
                Overview
              </strong>
            </div>

            <div class="dp-topbar-right">

              ${Ze("dentistry-dashboard-lang")}

              <!-- REAL PATIENT AVATAR -->

              <span
                class="dp-avatar"
                data-patient-avatar
                aria-label="${i("profile.title")}"
              >
                —
              </span>

            </div>

          </div>

          <!-- MOBILE NAVIGATION -->

          <div
            class="dp-dash-mobile-tabs"
            id="dp-dash-mobile-tabs"
            hidden
          ></div>

          <!-- =====================================
               DASHBOARD PAGE BODY
          ====================================== -->

          <div class="dp-dash-pagebody">

            ${Gt("Appointments, treatments and billing are currently demo examples. Patient profile information is loaded from your account.")}

            <!-- ==================================
                 OVERVIEW
            =================================== -->

            <section
              id="dp-panel-overview"
              role="tabpanel"
              aria-labelledby="dp-tab-overview"
              data-dashboard-panel="overview"
            >

              <!-- GREETING -->

              <div class="dp-page-head dp-dash-greeting">

                <div class="dp-eyebrow">
                  YOUR PATIENT EXPERIENCE
                </div>

                <h1>
                  Good to see you,

                  <em data-dashboard-name>
                    —
                  </em>

                  <span>✦</span>
                </h1>

                <p>
                  Here’s a quick overview of your
                  dental care journey.
                </p>

              </div>

              <!-- HERO -->

              <div class="dp-dash-hero">

                <div>

                  <span class="dp-pill">
                    PERSONALIZED DENTAL CARE
                  </span>

                  <h2>
                    Healthy smile.
                    <br>
                    Happier you.
                  </h2>

                  <p>
                    See your appointments and stay
                    on top of your treatment plans,
                    all in one place.
                  </p>

                  <a
                    class="dp-btn dp-btn-white"
                    href="/checkout"
                  >
                    Explore appointment checkout
                    ${A("arrow")}
                  </a>

                </div>

                <div
                  class="dp-dash-hero-icon"
                  aria-hidden="true"
                >
                  ${A("tooth")}
                </div>

              </div>

              <!-- STATS -->

              <div class="dp-stats-grid">

                <div class="dp-stat-card">

                  <span class="dp-stat-icon">
                    ${A("calendar")}
                  </span>

                  <span>Sample appointments</span>
                  <strong>01</strong>
                  <small>1 upcoming (demo)</small>

                </div>

                <div class="dp-stat-card">

                  <span class="dp-stat-icon">
                    ${A("tooth")}
                  </span>

                  <span>Example treatment plans</span>
                  <strong>02</strong>
                  <small>Illustrative only</small>

                </div>

                <div class="dp-stat-card">

                  <span class="dp-stat-icon">
                    ${A("credit")}
                  </span>

                  <span>Example deposit</span>
                  <strong>150K</strong>
                  <small>Toman · not payable here</small>

                </div>

              </div>

              <!-- TWO COLUMN -->

              <div class="dp-dash-two-col">

                <!-- UPCOMING APPOINTMENT -->

                <section class="dp-white-card">

                  <div class="dp-card-head">

                    <div>
                      <span class="dp-eyebrow">
                        YOUR SCHEDULE
                      </span>

                      <h2>
                        Upcoming appointment
                      </h2>
                    </div>

                    <button
                      type="button"
                      class="dp-text-button"
                      data-show-section="appointments"
                    >
                      View all
                      ${A("arrow")}
                    </button>

                  </div>

                  ${En()}

                </section>

                <!-- CHECKLIST -->

                <section class="dp-white-card">

                  <div class="dp-card-head">
                    <div>
                      <span class="dp-eyebrow">
                        CARE JOURNEY
                      </span>

                      <h2>
                        Patient checklist
                      </h2>
                    </div>
                  </div>

                  <ul class="dp-care-list">

                    <li>
                      <span>${A("check")}</span>
                      Keep your contact details up to date
                    </li>

                    <li>
                      <span>${A("check")}</span>
                      Review your next appointment
                    </li>

                    <li>
                      <span>${A("clock")}</span>
                      Treatment updates will appear here
                    </li>

                  </ul>

                </section>

              </div>

            </section>

            <!-- ==================================
                 APPOINTMENTS
            =================================== -->

            <section
              id="dp-panel-appointments"
              role="tabpanel"
              aria-labelledby="dp-tab-appointments"
              data-dashboard-panel="appointments"
              hidden
            >

              ${Se("PATIENT DASHBOARD","My appointments","Your schedule at a glance. The entries shown here are examples, not actual reservations.")}

              <div class="dp-white-card">

                <div class="dp-card-head">

                  <h2>
                    Appointment history
                  </h2>

                  <a
                    class="dp-btn dp-btn-primary dp-btn-small"
                    href="/checkout"
                  >
                    Checkout preview
                    ${A("arrow")}
                  </a>

                </div>

                ${Tn()}

              </div>

            </section>

            <!-- ==================================
                 TREATMENTS
            =================================== -->

            <section
              id="dp-panel-treatments"
              role="tabpanel"
              aria-labelledby="dp-tab-treatments"
              data-dashboard-panel="treatments"
              hidden
            >

              ${Se("PATIENT DASHBOARD","Treatment plans","Illustrative care records. Your real treatments will appear after API integration.")}

              <div class="dp-white-card">

                <div class="dp-card-head">

                  <h2>
                    Care records
                  </h2>

                  <span class="dp-chip">
                    2 sample items
                  </span>

                </div>

                ${An()}

              </div>

            </section>

            <!-- ==================================
                 BILLING
            =================================== -->

            <section
              id="dp-panel-billing"
              role="tabpanel"
              aria-labelledby="dp-tab-billing"
              data-dashboard-panel="billing"
              hidden
            >

              ${Se("PATIENT DASHBOARD","Billing & payments","Review example invoices and payments. No real balances or transactions are shown.")}

              <div class="dp-white-card">

                <div class="dp-card-head">

                  <h2>
                    Sample invoice summary
                  </h2>

                  <span class="dp-chip">
                    PREVIEW
                  </span>

                </div>

                <div class="dp-billing-line">
                  <span>
                    Consultation (example)
                  </span>

                  <strong>
                    ${W(65e4)}
                  </strong>
                </div>

                <div class="dp-billing-line">
                  <span>
                    Illustrative deposit
                  </span>

                  <strong>
                    ${W(15e4)}
                  </strong>
                </div>

                <div class="dp-billing-line dp-billing-total">
                  <span>
                    Example remaining balance
                  </span>

                  <strong>
                    ${W(5e5)}
                  </strong>
                </div>

                <p class="dp-tiny-muted">
                  Amounts are placeholders,
                  not the clinic’s actual price list.
                </p>

                <a
                  class="dp-btn dp-btn-primary"
                  href="/checkout"
                >
                  Open checkout preview
                  ${A("arrow")}
                </a>

              </div>

            </section>

            <!-- ==================================
                 PROFILE — REAL API
            =================================== -->

            <section
              id="dp-panel-profile"
              role="tabpanel"
              aria-labelledby="dp-tab-profile"
              data-dashboard-panel="profile"
              hidden
            >

              ${Se(i("profile.dashboard"),i("profile.title"),i("profile.subtitle"))}

              ${$n()}

            </section>

          </div>

        </div>

      </div>

    </main>
  `}function Cn(){const e=document.querySelector('[data-portal-page="dashboard"]');if(!e)return()=>{};const t=new AbortController,{signal:a}=t;if(!we())return window.location.replace("/login"),()=>t.abort();const o=[...e.querySelectorAll("[data-dashboard-tab]")],n=[...e.querySelectorAll("[data-dashboard-panel]")],r=e.querySelector("#dp-dash-mobile-tabs"),l=e.querySelector("#dp-dash-menu"),u=e.querySelector("[data-current-section]");function b(s){var h;const d=o.find(y=>y.dataset.dashboardTab===s);if(!d)return;o.forEach(y=>{const w=y===d;y.classList.toggle("is-active",w),y.setAttribute("aria-selected",String(w)),y.tabIndex=w?0:-1}),n.forEach(y=>{y.hidden=y.dataset.dashboardPanel!==s});const g=d.querySelector("span");u&&g&&(u.textContent=g.textContent),l&&l.setAttribute("aria-expanded","false"),r&&(r.hidden=!0),(h=e.querySelector(".dp-dash-pagebody"))==null||h.scrollIntoView({behavior:"auto",block:"start"})}o.forEach(s=>{s.addEventListener("click",()=>{b(s.dataset.dashboardTab)},{signal:a})}),e.querySelectorAll("[data-show-section]").forEach(s=>{s.addEventListener("click",()=>{b(s.dataset.showSection)},{signal:a})}),l==null||l.addEventListener("click",()=>{const d=!(l.getAttribute("aria-expanded")==="true");l.setAttribute("aria-expanded",String(d)),r.hidden=!d,d&&(r.innerHTML=Zt().map(([g,h])=>`
            <button
              type="button"
              data-mobile-tab="${g}"
            >
              ${h}
            </button>
          `).join(""))},{signal:a}),r==null||r.addEventListener("click",s=>{const d=s.target.closest("[data-mobile-tab]");d&&b(d.dataset.mobileTab)},{signal:a});const f=kn(e),p=e.querySelector("[data-dashboard-logout]");let c=!1;return p==null||p.addEventListener("click",async()=>{if(!c){c=!0,p.disabled=!0;try{await Ae.logout(a)}catch{}finally{Ce(),window.location.replace("/login")}}},{signal:a}),()=>{t.abort(),typeof f=="function"&&f()}}const Ee={consultation:{label:"Dental consultation",total:65e4,deposit:15e4,duration:"30 min"},cleaning:{label:"Cleaning & prevention",total:14e5,deposit:35e4,duration:"60 min"},whitening:{label:"Teeth whitening consultation",total:85e4,deposit:2e5,duration:"45 min"}};function Dn(e,t,a,o){const n=W(o==="deposit"?e.deposit:e.total);return i("Review completed — preview only")!=="Review completed — preview only"?`${i(e.label)} · ${t} · ${a}. ${o==="deposit"?"بیعانه نمونه":"مبلغ نمونه قابل پرداخت در کلینیک"}: ${n}. هیچ نوبت یا پرداختی ثبت نشده است.`:`${e.label} · ${t} · ${a}. Example ${o==="deposit"?"deposit":"pay-at-clinic total"}: ${n}. No reservation or payment was created.`}function Ln(){return`<main class="dentistry-portal dp-checkout-page" data-portal-page="checkout">
    <div class="dp-checkout-container">
      <nav class="dp-checkout-trail" aria-label="Breadcrumb"><a href="/">Home</a>${A("arrow")}<a href="/dashboard">Patient portal</a>${A("arrow")}<strong>Checkout preview</strong></nav>
      ${Gt("Prototype checkout: all dates, appointment slots and prices are examples. No booking is made, no payment is collected and no card details are requested.")}
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
          <div class="dp-payment-choices"><label class="dp-payment-choice is-selected"><input type="radio" name="paymentMethod" value="deposit" checked/><span class="dp-payment-choice-icon">${A("credit")}</span><span><strong>Online deposit</strong><small>Available after payment-gateway setup</small></span><span class="dp-radio-mark"></span></label><label class="dp-payment-choice"><input type="radio" name="paymentMethod" value="clinic"/><span class="dp-payment-choice-icon">${A("receipt")}</span><span><strong>Pay at clinic</strong><small>Subject to clinic confirmation</small></span><span class="dp-radio-mark"></span></label></div>
        </section>
      </div>
      <aside class="dp-checkout-summary"><div class="dp-summary-image"><div class="dp-summary-tooth">${A("tooth")}</div><div><span>DR. ZEINOLABEDIN</span><h2>Your appointment summary</h2></div></div>
        <div class="dp-summary-body"><span class="dp-eyebrow">ORDER OVERVIEW · SAMPLE</span><div class="dp-summary-meta"><span>${A("tooth")} <span id="dp-summary-service">Dental consultation</span></span><span>${A("clock")} <span id="dp-summary-time">30 min · 10:30 AM</span></span><span>${A("calendar")} <span id="dp-summary-date">Choose a date</span></span></div><div class="dp-summary-separator"></div>
        <div class="dp-summary-line"><span>Example service total</span><strong id="dp-summary-total">${W(65e4)}</strong></div><div class="dp-summary-line"><span>Example deposit</span><strong id="dp-summary-deposit">${W(15e4)}</strong></div><div class="dp-summary-line"><span>Remaining at clinic (example)</span><strong id="dp-summary-remaining">${W(5e5)}</strong></div><div class="dp-summary-separator"></div>
        <div class="dp-summary-pay"><span id="dp-summary-pay-label">Preview deposit amount</span><strong id="dp-summary-pay-amount">${W(15e4)}</strong></div>
        <button class="dp-btn dp-btn-primary dp-btn-block" type="submit" form="dp-checkout-form">Review demo summary ${A("arrow")}</button>
        <p class="dp-form-feedback" data-form-feedback role="status" aria-live="polite" hidden></p>
        <div class="dp-checkout-preview" id="dp-checkout-review" hidden role="status"></div>
        <div class="dp-summary-guarantee">${A("shield")} No payment is processed in this preview.</div></div>
      </aside></div>
    </div>
  </main>`}function qn(){const e=document.querySelector('[data-portal-page="checkout"]');if(!e)return()=>{};const t=new AbortController,a=e.querySelector("#dp-checkout-service"),o=e.querySelector("#dp-checkout-date"),n=e.querySelector("#dp-checkout-time"),r=[...e.querySelectorAll('input[name="paymentMethod"]')],l=new Date,u=h=>String(h).padStart(2,"0"),b=h=>`${h.getFullYear()}-${u(h.getMonth()+1)}-${u(h.getDate())}`;o.min=b(l);const f=new Date(l.getFullYear(),l.getMonth(),l.getDate()+7);o.value=b(f);const p=new URLSearchParams(location.search),c=p.get("service");c&&Object.hasOwn(Ee,c)&&(a.value=c);const s=p.get("date");s&&/^\d{4}-\d{2}-\d{2}$/.test(s)&&s>=o.min&&(o.value=s);const d=p.get("time");[...n.options].some(h=>h.value===d)&&(n.value=d);const g=()=>{var $;const h=Ee[a.value]||Ee.consultation,y=(($=r.find(v=>v.checked))==null?void 0:$.value)||"deposit",w=(v,m)=>{e.querySelector(v).textContent=m};w("#dp-summary-service",i(h.label)),w("#dp-summary-time",`${i(h.duration)} · ${n.options[n.selectedIndex].textContent.replace(/ \(example\)| \(نمونه\)/g,"")}`),w("#dp-summary-date",o.value||i("Choose a date")),w("#dp-summary-total",W(h.total)),w("#dp-summary-deposit",W(h.deposit)),w("#dp-summary-remaining",W(h.total-h.deposit)),w("#dp-summary-pay-label",i(y==="deposit"?"Preview deposit amount":"Example payable at clinic")),w("#dp-summary-pay-amount",W(y==="deposit"?h.deposit:h.total)),e.querySelectorAll(".dp-payment-choice").forEach(v=>v.classList.toggle("is-selected",v.querySelector("input").checked)),e.querySelector("#dp-checkout-review").hidden=!0};for(const h of[a,n,o,...r])h.addEventListener("change",g,{signal:t.signal});return g(),e.querySelector("#dp-checkout-form").addEventListener("submit",h=>{var E;h.preventDefault();const y=e.querySelector("#dp-checkout-name").value.trim(),w=e.querySelector("#dp-checkout-phone").value.trim(),$=e.querySelector("#dp-checkout-email"),v=e.querySelector("[data-form-feedback]"),m=S=>{v.textContent=i(S),v.dataset.state="error",v.hidden=!1};if(!o.value||o.value<o.min)return m("Please select a valid date in the future.");if(y.length<2)return m("Please enter your full name.");if(!/^[+\d\s()-]{8,20}$/.test(w))return m("Please enter a valid phone number.");if(!$.value.trim()||!$.checkValidity())return m("Please enter a valid email address.");const k=Ee[a.value],D=((E=r.find(S=>S.checked))==null?void 0:E.value)||"deposit";v.hidden=!0;const C=e.querySelector("#dp-checkout-review");C.replaceChildren();const L=document.createElement("strong");L.textContent=i("Review completed — preview only");const T=document.createElement("p");T.textContent=Dn(k,o.value,n.value,D),C.append(L,T),C.hidden=!1,C.scrollIntoView({block:"nearest",behavior:"smooth"})},{signal:t.signal}),()=>t.abort()}const Ye={"/":{render:Na,init:Ra,title:"Home"},"/about-us":{render:Qa,init:Xa,title:"About Us"},"/blog":{render:lo,init:co,title:"Blog"},"/contact-us":{render:Io,init:Po,title:"Contact Us"},"/service":{render:Ho,init:Vo,title:"Services"},"/faq":{render:dn,init:un,title:"FAQ"},"/login":{render:hn,init:mn,title:"Patient Login",standalone:!0},"/register":{render:bn,init:gn,title:"Patient Registration",standalone:!0},"/forgot-password":{render:yn,init:wn,title:"Forgot Password",standalone:!0},"/dashboard":{render:xn,init:Cn,title:"Patient Dashboard",standalone:!0,requiresAuth:!0},"/checkout":{render:Ln,init:qn,title:"Appointment Checkout"}},In=[{pattern:/^\/post\/([^/]+)$/,route:{render:So,init:Eo,title:"Blog Details"}},{pattern:/^\/services\/([1-9]\d*)$/,route:{render:en,init:tn,title:"Service Details"}},{pattern:/^\/team\/([a-z0-9-]+)$/i,route:{render:sn,init:ln,title:"Doctor Profile"}}];function Le(e){let t=String(e||"/");return t=t.replace(/\/(?:index\.html?|index\.htm)$/i,"/")||"/",t!=="/"&&t.endsWith(".html")&&(t=t.slice(0,-5)),t.replace(/\/+$/,"")||"/"}function Pn(e){if(Object.prototype.hasOwnProperty.call(Ye,e))return Ye[e];for(const t of In)if(t.pattern.test(e))return t.route;return null}function Nn(){if(Le(window.location.pathname)!=="/team")return;const t=new URL("/about-us",window.location.origin);t.search=window.location.search,t.hash="about-doctors",window.history.replaceState(window.history.state,"",t.pathname+t.search+t.hash)}function Rn(e){let t="This page is not available yet.";return e.startsWith("/post/")?t="This blog post could not be found.":e.startsWith("/services/")?t="This service could not be found.":e.startsWith("/team/")&&(t="This doctor profile could not be found."),`
    <main
      class="w-container"
      style="padding:100px 20px;min-height:50vh"
    >

      <h1>
        ${i("Page not available yet")}
      </h1>

      <p>
        ${i(t)}
      </p>

      <p>
        <a href="/">
          ${i("Back to home")}
        </a>
      </p>

    </main>
  `}let We=[];function Qt(){for(const e of We)try{e==null||e()}catch(t){console.warn("Page cleanup error:",t)}We=[]}function Xt(e=!1){const t=new URL("/login",window.location.origin),a=new URLSearchParams(window.location.search).get("lang");(a==="fa"||a==="en")&&t.searchParams.set("lang",a),e&&t.searchParams.set("expired","1"),window.history.replaceState(window.history.state,"",t.pathname+t.search)}function be(){Ke(),Qt();const e=document.getElementById("app");if(!e)throw new Error("Missing #app in index.html");Nn();let t=Le(window.location.pathname),a=Pn(t);a!=null&&a.requiresAuth&&!pe()&&(Xt(),t="/login",a=Ye[t]);const o=!(a!=null&&a.standalone),n=a?a.render():Rn(t);e.innerHTML=`
    ${o?fa():""}

    ${n}

    ${o?va():""}
  `,document.title=`${i((a==null?void 0:a.title)||"Page Not Found")} | ${i("Dr. Zeinolabedin")}`;const r=[o?ba:null,a==null?void 0:a.init,o?ya:null];for(const l of r){if(typeof l!="function")continue;const u=l();typeof u=="function"&&We.push(u)}na(e),window.location.hash&&requestAnimationFrame(()=>{let l=window.location.hash.slice(1);try{l=decodeURIComponent(l)}catch{}const u=document.getElementById(l);u&&u.scrollIntoView({behavior:"auto",block:"start"})})}function On(){const e=pa(()=>{Le(window.location.pathname)==="/dashboard"&&(Xt(!0),be())}),t=()=>{be()},a=n=>{var b;const r=n.target instanceof Element?n.target:(b=n.target)==null?void 0:b.parentElement,l=r==null?void 0:r.closest("[data-set-language]");if(!l)return;n.preventDefault();const u=l.getAttribute("data-set-language");u!=="fa"&&u!=="en"||ia(u,be)},o=n=>{var s;if(n.defaultPrevented||n.button!==0||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey)return;const r=n.target instanceof Element?n.target:(s=n.target)==null?void 0:s.parentElement,l=r==null?void 0:r.closest("a[href]");if(!l||l.hasAttribute("download")||l.target&&l.target!=="_self")return;const u=l.getAttribute("href");if(!u||u==="#"||u.startsWith("#"))return;const b=new URL(l.href,window.location.href);if(b.origin!==window.location.origin||!["http:","https:"].includes(b.protocol))return;const f=Le(b.pathname);if(/\.(?:pdf|docx?|xlsx?|zip|png|jpg|jpeg|svg|webp|css|js)$/i.test(f))return;n.preventDefault();const p=f+b.search+b.hash,c=window.location.pathname+window.location.search+window.location.hash;p!==c&&(window.history.pushState({},"",p),be(),b.hash||window.scrollTo({top:0,behavior:"auto"}))};return window.addEventListener("popstate",t),document.addEventListener("click",a),document.addEventListener("click",o),be(),()=>{window.removeEventListener("popstate",t),document.removeEventListener("click",a),document.removeEventListener("click",o),e==null||e(),Qt()}}On();
