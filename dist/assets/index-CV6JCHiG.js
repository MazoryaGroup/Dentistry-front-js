(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function a(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=a(o);fetch(o.href,i)}})();function oo(){const e=document.querySelector(".navbar.w-nav"),t=e==null?void 0:e.querySelector(".w-nav-button"),a=e==null?void 0:e.querySelector(".w-nav-menu");if(!e||!t||!a)return()=>{};const n=new AbortController,{signal:o}=n,i=s=>{e.classList.toggle("w--open",s),t.classList.toggle("w--open",s),a.classList.toggle("w--open",s),t.setAttribute("aria-expanded",String(s)),a.setAttribute("aria-hidden",String(s&&window.innerWidth<=991?!1:window.innerWidth<=991))},r=()=>i(!t.classList.contains("w--open"));return t.addEventListener("click",r,{signal:o}),t.addEventListener("keydown",s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),r())},{signal:o}),a.addEventListener("click",s=>{s.target.closest("a[href]")&&i(!1)},{signal:o}),document.addEventListener("click",s=>{e.contains(s.target)||i(!1)},{signal:o}),document.addEventListener("keydown",s=>{s.key==="Escape"&&i(!1)},{signal:o}),window.addEventListener("resize",()=>{window.innerWidth>991&&i(!1)},{signal:o}),i(!1),()=>n.abort()}const io={"auth.shell.asideLabel":"معرفی سامانه بیماران","auth.shell.care":"مراقبت‌های دندان‌پزشکی","auth.shell.private":"حریم خصوصی شما محفوظ است","auth.shell.easy":"نوبت‌دهی آسان","auth.shell.priority":"لبخند شما، اولویت ماست","auth.shell.tagline":"تجربه بهتر دندان‌پزشکی از اینجا آغاز می‌شود","auth.shell.back":"بازگشت به وب‌سایت","auth.shell.portal":"پنل بیماران","auth.shell.loginLegal":"ورود با شماره موبایل و کد تأیید یا ایمیل و رمز عبور امکان‌پذیر است.","auth.login.title":"خوش برگشتید","auth.login.subtitle":"برای ورود به حساب کاربری، روش موردنظر خود را انتخاب کنید.","auth.login.sideTitle":"هر لبخند زیبا با مراقبت خوب آغاز می‌شود.","auth.login.sideCopy":"فضایی اختصاصی برای مدیریت نوبت‌ها و پیگیری روند درمان دندان‌های شما.","auth.login.methodPhone":"ورود با موبایل","auth.login.methodEmail":"ورود با ایمیل","auth.login.phone":"شماره موبایل","auth.login.phonePlaceholder":"09123456789","auth.login.sendCode":"ارسال کد تأیید","auth.login.codeSentTo":"کد تأیید به این شماره ارسال شد:","auth.login.code":"کد تأیید ۶ رقمی","auth.login.codePlaceholder":"کد ۶ رقمی را وارد کنید","auth.login.codeValidity":"کد تأیید تا ۲ دقیقه معتبر است.","auth.login.verify":"تأیید و ورود","auth.login.editPhone":"تغییر شماره موبایل","auth.login.resend":"ارسال مجدد کد","auth.login.email":"آدرس ایمیل","auth.login.emailPlaceholder":"example@email.com","auth.login.password":"رمز عبور","auth.login.passwordPlaceholder":"رمز عبور خود را وارد کنید","auth.login.signIn":"ورود به حساب","auth.login.forgotPassword":"رمز عبور را فراموش کرده‌اید؟","auth.login.newPatient":"برای اولین‌بار مراجعه می‌کنید؟","auth.login.createAccount":"ایجاد حساب کاربری","auth.login.invalidPhone":"لطفاً شماره موبایل معتبر وارد کنید.","auth.login.invalidEmail":"لطفاً یک آدرس ایمیل معتبر وارد کنید.","auth.login.enterPassword":"لطفاً رمز عبور را وارد کنید.","auth.login.invalidCredentials":"ایمیل یا رمز عبور اشتباه است.","auth.login.invalidCodeFormat":"لطفاً کد تأیید ۶ رقمی را وارد کنید.","auth.login.invalidCode":"کد تأیید اشتباه است یا منقضی شده است.","auth.login.noAccount":"حسابی با این شماره موبایل وجود ندارد. ابتدا ثبت‌نام کنید.","auth.login.tooMany":"تعداد درخواست‌ها بیش از حد مجاز است. کمی بعد تلاش کنید.","auth.login.timeout":"زمان درخواست به پایان رسید. دوباره تلاش کنید.","auth.login.networkError":"ارتباط با سرور برقرار نشد. اتصال اینترنت را بررسی کنید.","auth.login.serverError":"سرور کلینیک موقتاً در دسترس نیست.","auth.login.sent":"کد تأیید با موفقیت ارسال شد.","auth.login.resent":"کد تأیید جدید ارسال شد.","auth.login.invalidApiToken":"ورود تأیید شد، اما توکن معتبر از سرور دریافت نشد.","auth.register.title":"ثبت‌نام بیمار","auth.register.subtitle":"برای ایجاد حساب کاربری، اطلاعات خود را وارد کنید.","auth.register.sideTitle":"فضایی اختصاصی برای لبخندی سالم‌تر.","auth.register.sideCopy":"نوبت‌ها، طرح‌های درمان و پرداخت‌های خود را در یکجا مدیریت کنید.","auth.register.name":"نام و نام خانوادگی","auth.register.namePlaceholder":"نام و نام خانوادگی خود را وارد کنید","auth.register.phone":"شماره موبایل","auth.register.referral":"کد معرف (اختیاری)","auth.register.referralPlaceholder":"در صورت داشتن کد معرف وارد کنید","auth.register.sendCode":"ارسال کد تأیید","auth.register.codeSentTo":"کد تأیید به این شماره ارسال شد:","auth.register.code":"کد تأیید ۶ رقمی","auth.register.codePlaceholder":"کد ۶ رقمی را وارد کنید","auth.register.codeValidity":"کد تأیید به مدت ۲ دقیقه معتبر است.","auth.register.verify":"تأیید کد و ثبت‌نام","auth.register.editPhone":"ویرایش اطلاعات","auth.register.resend":"ارسال مجدد کد","auth.register.haveAccount":"قبلاً حساب کاربری ساخته‌اید؟","auth.register.signIn":"وارد شوید","auth.register.success":"حساب کاربری شما با موفقیت ایجاد شد.","auth.register.goToLogin":"ورود به حساب کاربری","auth.register.invalidName":"لطفاً نام و نام خانوادگی معتبر وارد کنید.","auth.register.invalidPhone":"لطفاً شماره موبایل معتبر وارد کنید.","auth.register.invalidCodeFormat":"لطفاً کد تأیید ۶ رقمی را وارد کنید.","auth.register.invalidCode":"کد تأیید اشتباه است یا منقضی شده است.","auth.register.invalidData":"اطلاعات ثبت‌نام معتبر نیست. لطفاً آن‌ها را بررسی کنید.","auth.register.alreadyRegistered":"این شماره موبایل قبلاً ثبت‌نام شده است.","auth.register.sessionExpired":"اطلاعات ثبت‌نام منقضی شده است. دوباره تلاش کنید.","auth.register.sent":"کد تأیید با موفقیت ارسال شد.","auth.register.resent":"کد تأیید جدید ارسال شد.","auth.register.tooMany":"تعداد درخواست‌ها بیش از حد مجاز است. کمی بعد تلاش کنید.","auth.register.timeout":"زمان درخواست به پایان رسید. دوباره تلاش کنید.","auth.register.networkError":"ارتباط با سرور برقرار نشد. اتصال اینترنت را بررسی کنید.","auth.register.serverError":"سرور کلینیک موقتاً در دسترس نیست.","auth.register.requestFailed":"در انجام درخواست مشکلی پیش آمد. دوباره تلاش کنید.","auth.forgot.title":"بازیابی رمز عبور","auth.forgot.subtitle":"شماره موبایل خود را وارد کنید تا کد تأیید برایتان ارسال شود.","auth.forgot.sideTitle":"مراقبت از لبخند شما ادامه دارد.","auth.forgot.sideCopy":"بازیابی حساب کاربری خود را به‌سادگی و با امنیت بیشتر انجام دهید.","auth.forgot.phone":"شماره موبایل","auth.forgot.sendCode":"ارسال کد تأیید","auth.forgot.codeSentTo":"کد تأیید به شماره زیر ارسال شد:","auth.forgot.code":"کد تأیید ۶ رقمی","auth.forgot.codePlaceholder":"کد ۶ رقمی را وارد کنید","auth.forgot.verify":"تأیید کد","auth.forgot.changePhone":"تغییر شماره موبایل","auth.forgot.resend":"ارسال مجدد کد","auth.forgot.verifiedPhone":"شماره موبایل تأییدشده:","auth.forgot.newPassword":"رمز عبور جدید","auth.forgot.newPasswordPlaceholder":"حداقل ۸ کاراکتر","auth.forgot.confirmPassword":"تکرار رمز عبور جدید","auth.forgot.confirmPlaceholder":"رمز عبور جدید را دوباره وارد کنید","auth.forgot.resetPassword":"تغییر رمز عبور","auth.forgot.backToLogin":"بازگشت به ورود","auth.forgot.success":"رمز عبور شما با موفقیت تغییر کرد. اکنون می‌توانید وارد حساب خود شوید.","auth.forgot.invalidPhone":"لطفاً شماره موبایل معتبر وارد کنید.","auth.forgot.invalidCodeFormat":"کد تأیید باید ۶ رقمی باشد.","auth.forgot.invalidCode":"کد تأیید نامعتبر یا منقضی شده است.","auth.forgot.shortPassword":"رمز عبور باید حداقل ۸ کاراکتر داشته باشد.","auth.forgot.passwordMismatch":"رمز عبور و تکرار آن یکسان نیستند.","auth.forgot.sessionExpired":"اطلاعات بازیابی موجود نیست. دوباره درخواست کد کنید.","auth.forgot.invalidData":"اطلاعات واردشده معتبر نیست.","auth.forgot.sent":"کد تأیید با موفقیت ارسال شد.","auth.forgot.resent":"کد تأیید جدید ارسال شد.","auth.forgot.verified":"شماره موبایل تأیید شد. رمز عبور جدید را وارد کنید.","auth.forgot.tooMany":"تعداد درخواست‌ها بیش از حد مجاز است. کمی بعد تلاش کنید.","auth.forgot.timeout":"زمان درخواست به پایان رسید.","auth.forgot.serverError":"سرور موقتاً در دسترس نیست.","auth.forgot.networkError":"ارتباط با سرور برقرار نشد.","auth.forgot.requestFailed":"در انجام درخواست مشکلی پیش آمد. دوباره تلاش کنید.","auth.shell.privacyLegal":"اطلاعات حساب کاربری شما از طریق ارتباط امن با سرور پردازش می‌شود.","auth.forgot.resetTokenExpired":"مهلت بازیابی رمز عبور به پایان رسیده است. لطفاً دوباره کد تأیید دریافت کنید.","auth.sessionExpired":"به دلیل ۱۵ دقیقه بی‌فعالیتی، نشست شما منقضی شده است. لطفاً دوباره وارد شوید.","profile.dashboard":"داشبورد بیمار","profile.title":"پروفایل من","profile.subtitle":"اطلاعات حساب کاربری و مشخصات فردی شما.","profile.information":"اطلاعات شخصی","profile.name":"نام و نام خانوادگی","profile.email":"آدرس ایمیل","profile.phone":"شماره موبایل","profile.referral":"کد معرف","profile.notSet":"ثبت نشده","profile.loading":"در حال دریافت اطلاعات...","profile.loaded":"اطلاعات پروفایل به‌روز است.","profile.partial":"اطلاعات پایه دریافت شد؛ جزئیات پروفایل در دسترس نیست.","profile.loadError":"دریافت اطلاعات پروفایل با خطا مواجه شد.","profile.reload":"بارگذاری مجدد","profile.logout":"خروج از حساب","profile.phoneHint":"شماره موبایل فقط پس از تأیید کد پیامکی قابل تغییر است.","blog.title":"وبلاگ","blog.home":"خانه","blog.latest":"تازه‌ترین مطالب","blog.heading":"جدیدترین مقالات و مطالب دندان‌پزشکی را اینجا بخوانید.","blog.loading":"در حال دریافت مقالات...","blog.empty":"در حال حاضر مقاله‌ای برای نمایش وجود ندارد.","blog.error":"دریافت مقالات با مشکل مواجه شد. لطفاً دوباره تلاش کنید.","blog.retry":"تلاش مجدد","blog.readArticle":"مطالعه مقاله","blog.details.page":"مقالات دندان‌پزشکی","blog.details.breadcrumb":"جزئیات مقاله","blog.details.categories":"دسته‌بندی‌ها","blog.details.recent":"مقالات اخیر","blog.details.loading":"در حال دریافت مقاله...","blog.details.notFound":"مقاله موردنظر پیدا نشد.","blog.details.error":"دریافت اطلاعات مقاله با مشکل مواجه شد.","blog.details.retry":"تلاش مجدد","blog.details.back":"بازگشت به مقالات","header.login":"ورود","header.dashboard":"داشبورد","header.loginAria":"ورود به حساب بیمار","header.dashboardAria":"ورود به داشبورد بیمار","header.home":"خانه","header.about":"درباره ما","header.services":"خدمات","header.blog":"وبلاگ","header.contact":"تماس با ما","header.logo":"دندان‌پزشکی","header.menu":"باز و بسته کردن منو","header.language":"زبان سایت","footer.eyebrow":"نگاهی نو به مراقبت از لبخند شما","footer.heroTitle":"لبخند شما شایسته","footer.heroHighlight":"بهترین توجه است.","footer.heroDescription":"لبخندی سالم و زیبا از مراقبت و آگاهی آغاز می‌شود. برای آشنایی بیشتر با کلینیک و دریافت پاسخ پرسش‌های خود، با ما در ارتباط باشید.","footer.contactUs":"تماس با ما","footer.brandName":"دکتر زین‌العابدین","footer.brandDescription":"فضایی برای آشنایی با خدمات دندان‌پزشکی، روش‌های درمان و نکات کاربردی مراقبت از سلامت دهان و دندان.","footer.brandTag":"مراقبت با اطمینان آغاز می‌شود","footer.explore":"دسترسی سریع","footer.patients":"خدمات بیماران","footer.getInTouch":"ارتباط با ما","footer.home":"خانه","footer.about":"درباره ما","footer.team":"تیم پزشکی","footer.blog":"مقالات آموزشی","footer.faq":"سوالات متداول","footer.login":"ورود بیماران","footer.register":"ایجاد حساب کاربری","footer.contactDescription":"برای دریافت اطلاعات بیشتر یا مطرح کردن پرسش‌های خود، می‌توانید از طریق صفحه تماس با ما در ارتباط باشید.","footer.contactLink":"رفتن به صفحه تماس","footer.copyright":"تمامی حقوق محفوظ است.","footer.backToTop":"بازگشت به بالا","footer.parentCompany":"زیرمجموعه","about.breadcrumb":"درباره ما","about.home":"خانه","about.imageAlt":"نمایی از کلینیک دندان‌پزشکی","about.introEyebrow":"درباره ما","about.introTitle":"آشنایی با رویکرد ما به مراقبت از لبخند شما","about.introDescription":"سلامت دهان و دندان بخش مهمی از کیفیت زندگی است. آگاهی از روش‌های مراقبت، شناخت گزینه‌های درمان و گفت‌وگوی روشن درباره نیازهای هر بیمار، می‌تواند به تصمیم‌گیری بهتر کمک کند.","about.feature1Title":"آگاهی پیش از تصمیم","about.feature1Description":"آشنایی با مراحل درمان و دریافت پاسخ پرسش‌ها، بخش مهمی از انتخاب آگاهانه است.","about.feature2Title":"توجه به نیازهای هر فرد","about.feature2Description":"شرایط دهان و دندان هر بیمار متفاوت است و انتخاب روش درمان به معاینه و بررسی تخصصی نیاز دارد.","about.contactButton":"ارتباط با ما","about.treatmentEyebrow":"خدمات دندان‌پزشکی","about.treatmentTitle":"آشنایی با خدمات و روش‌های درمان","about.treatmentDescription":"در این بخش می‌توانید خدمات ثبت‌شده در کلینیک را مشاهده کنید و برای آشنایی بیشتر با هر خدمت وارد صفحه اختصاصی آن شوید.","about.servicesLoading":"در حال دریافت خدمات...","about.servicesEmpty":"در حال حاضر خدمتی برای نمایش وجود ندارد.","about.servicesError":"دریافت خدمات با مشکل مواجه شد.","about.retry":"تلاش مجدد","about.serviceDetails":"مشاهده جزئیات","about.teamEyebrow":"ارتباط با کلینیک","about.teamTitle":"برای پرسش‌های شما در دسترس هستیم","about.teamDescription":"اگر برای شناخت خدمات، بررسی گزینه‌های درمان یا دریافت اطلاعات بیشتر درباره مراجعه پرسشی دارید، می‌توانید از طریق صفحه تماس با ما پیام خود را ارسال کنید.","about.teamButton":"تماس با ما","about.faqEyebrow":"سوالات متداول","about.faqTitle":"پاسخ به پرسش‌های رایج","about.faq1Question":"هر چند وقت یک بار باید به دندان‌پزشک مراجعه کنم؟","about.faq1Answer":"برای بسیاری از افراد معاینه منظم دندان‌پزشکی توصیه می‌شود. فاصله مناسب بین معاینات به وضعیت سلامت دهان و دندان و نظر دندان‌پزشک بستگی دارد.","about.faq2Question":"چه عواملی باعث پوسیدگی دندان می‌شوند؟","about.faq2Answer":"باکتری‌های موجود در پلاک دندانی با مصرف قندها و کربوهیدرات‌های قابل تخمیر اسید تولید می‌کنند. این اسیدها می‌توانند به‌مرور مواد معدنی مینای دندان را کاهش داده و باعث پوسیدگی شوند.","about.faq3Question":"چطور می‌توان از بیماری‌های لثه پیشگیری کرد؟","about.faq3Answer":"مسواک زدن منظم با خمیردندان حاوی فلوراید، تمیز کردن بین دندان‌ها، معاینه‌های دوره‌ای و رسیدگی زودهنگام به علائمی مانند خونریزی لثه به حفظ سلامت لثه کمک می‌کنند.","about.faq4Question":"آیا سفید کردن دندان‌ها بی‌خطر است؟","about.faq4Answer":"سفید کردن دندان‌ها در صورت انتخاب روش مناسب و انجام آن زیر نظر دندان‌پزشک معمولاً ایمن است. بااین‌حال ممکن است حساسیت موقت دندان یا تحریک لثه ایجاد شود و این روش برای همه مناسب نباشد.","about.faq5Question":"ایمپلنت دندان چیست؟","about.faq5Answer":"ایمپلنت روشی برای جایگزینی دندان ازدست‌رفته است که در آن پایه‌ای معمولاً از جنس تیتانیوم در استخوان فک قرار می‌گیرد و پس از طی مراحل درمان، روکش دندان روی آن نصب می‌شود. مناسب بودن این روش به معاینه و بررسی شرایط بیمار بستگی دارد.","about.teamPreview":"معرفی پزشکان این بخش پس از تکمیل اطلاعات تیم پزشکی نمایش داده می‌شود.","about.demoTreatment1Title":"اصلاح طرح لبخند","about.demoTreatment1Description":"آشنایی با روش‌های زیبایی دندان برای بهبود ظاهر و هماهنگی لبخند.","about.demoTreatment2Title":"درمان‌های زیبایی دندان","about.demoTreatment2Description":"بررسی گزینه‌های درمانی متناسب با وضعیت دندان‌ها و اهداف زیبایی هر فرد.","about.demoTreatment3Title":"ایمپلنت دندان","about.demoTreatment3Description":"آشنایی با روش جایگزینی دندان‌های ازدست‌رفته با استفاده از ایمپلنت.","about.demoTreatment4Title":"سفید کردن دندان","about.demoTreatment4Description":"آشنایی با روش‌های حرفه‌ای سفید کردن دندان‌ها تحت نظر دندان‌پزشک.","about.demoTreatment5Title":"دندان‌پزشکی عمومی","about.demoTreatment5Description":"معاینات دوره‌ای، مراقبت‌های پیشگیرانه و بررسی مشکلات رایج دهان و دندان.","about.servicesDemoNote":"خدمات این بخش فعلاً برای پیش‌نمایش طراحی نمایش داده می‌شوند.","about.doctor1Name":"دکتر فیونا پارک","about.doctor1Role":"دندان‌پزشک عمومی","about.doctor2Name":"دکتر جان مارتین","about.doctor2Role":"دندان‌پزشکی زیبایی","about.doctor3Name":"دکتر آرچی وایت","about.doctor3Role":"مراقبت‌های دندان‌پزشکی","about.doctor4Name":"دکتر ماریا آنجل","about.doctor4Role":"دندان‌پزشکی ترمیمی","about.teamDemoNote":"اسامی و تصاویر این بخش صرفاً نمایشی هستند و بعداً با اطلاعات واقعی تیم پزشکی جایگزین می‌شوند.","teamDetails.home":"خانه","teamDetails.team":"تیم پزشکی","teamDetails.specialty":"حوزه فعالیت","teamDetails.information":"اطلاعات پزشک","teamDetails.informationText":"اطلاعات تکمیلی، سوابق حرفه‌ای و برنامه حضور پزشک پس از ثبت اطلاعات رسمی کلینیک نمایش داده خواهد شد.","teamDetails.eyebrow":"پروفایل پزشک","teamDetails.aboutTitle":"آشنایی با","teamDetails.aboutDescription":"در این بخش می‌توانید با حوزه فعالیت و خدمات مرتبط با پزشک آشنا شوید. اطلاعات اختصاصی پزشک در نسخه نهایی تکمیل می‌شود.","teamDetails.focusTitle":"خدمات و حوزه تخصصی","teamDetails.focus1":"دندان‌پزشکی عمومی شامل معاینه، مراقبت‌های پیشگیرانه و بررسی مشکلات رایج دهان و دندان است.","teamDetails.focus2":"دندان‌پزشکی زیبایی به بررسی روش‌هایی مانند اصلاح طرح لبخند، بهبود ظاهر دندان‌ها و درمان‌های زیبایی می‌پردازد.","teamDetails.focus3":"مراقبت‌های دندان‌پزشکی شامل آشنایی با اصول بهداشت دهان، پیشگیری و پیگیری نیازهای درمانی بیماران است.","teamDetails.focus4":"دندان‌پزشکی ترمیمی بر بازسازی دندان‌های آسیب‌دیده و بهبود عملکرد و ظاهر آن‌ها تمرکز دارد.","teamDetails.approachTitle":"انتخاب روش درمان","teamDetails.approachDescription":"انتخاب روش درمان مناسب به معاینه، بررسی شرایط دهان و دندان و تشخیص تخصصی نیاز دارد. طرح درمان برای هر بیمار می‌تواند متفاوت باشد.","teamDetails.previewBadge":"پروفایل نمایشی","teamDetails.previewNotice":"این صفحه برای پیش‌نمایش طراحی ساخته شده است. نام، تصویر و تخصص درج‌شده نمونه هستند و بیانگر حضور واقعی این پزشک در کلینیک نیستند.","teamDetails.backToDoctors":"بازگشت به معرفی پزشکان","teamDetails.contactButton":"تماس با کلینیک","teamDetails.notFound":"پروفایل پزشک پیدا نشد.","home.heroTitle":"دنیایی از لبخندهای سالم‌تر پیش روی شماست","home.heroDescription":"با شناخت خدمات دندان‌پزشکی، آگاهی از گزینه‌های درمان و ارتباط آسان با کلینیک، قدم اول را برای مراقبت بهتر از سلامت دهان و دندان بردارید.","home.heroImageAlt":"تصویر معرفی خدمات دندان‌پزشکی","home.bookNow":"دریافت نوبت","home.aboutEyebrow":"درباره کلینیک","home.aboutTitle":"آشنایی با خدمات و رویکرد مراقبت از لبخند","home.aboutDescription":"هر بیمار شرایط و نیازهای خاص خود را دارد. بررسی دقیق وضعیت دهان و دندان، توضیح روشن گزینه‌های درمان و توجه به مراقبت‌های پیشگیرانه، به انتخاب آگاهانه کمک می‌کند.","home.aboutImageAlt":"محیط کلینیک دندان‌پزشکی","home.aboutFeature1":"اطلاع‌رسانی شفاف درباره روش‌های درمان","home.aboutFeature2":"توجه به شرایط و نیازهای فردی بیماران","home.questions":"سؤالی دارید؟","home.contactUs":"ارتباط با کلینیک","home.readMore":"بیشتر بخوانید","home.servicesEyebrow":"خدمات کلینیک","home.servicesTitle":"راهکارهای مراقبت و درمان دندان","home.allServices":"مشاهده همه خدمات","home.demoServicesNote":"خدمات این بخش فعلاً برای پیش‌نمایش سایت نمایش داده می‌شوند.","home.treatmentEyebrow":"روش‌های درمان","home.treatmentTitle":"آشنایی با درمان‌های دندان‌پزشکی","home.contactEyebrow":"ارتباط با ما","home.contactTitle":"سؤالات خود را با ما در میان بگذارید","home.contactImageAlt":"تصویر بخش تماس کلینیک","home.name":"نام و نام خانوادگی","home.email":"ایمیل","home.phone":"شماره تماس","home.subject":"موضوع","home.message":"پیام شما","home.submit":"ارسال پیام","home.contactDemoNote":"این فرم فعلاً نمایشی است و پیام‌ها به سرور ارسال نمی‌شوند. برای ارتباط، از صفحه تماس با ما استفاده کنید.","home.formRequired":"لطفاً نام و متن پیام را وارد کنید و اطلاعات را بررسی کنید.","home.formNotConnected":"این فرم هنوز به سرور متصل نیست؛ پیام شما ارسال نشد. لطفاً از صفحه تماس با ما استفاده کنید.","home.blogEyebrow":"مطالب آموزشی","home.blogTitle":"تازه‌های سلامت دهان و دندان","home.allBlogs":"مشاهده همه مقالات","home.demoBlogNote":"مقالات این بخش نمونه هستند و بعداً با مطالب منتشرشده کلینیک جایگزین می‌شوند.","home.service1Title":"اصلاح طرح لبخند","home.service1Description":"آشنایی با گزینه‌های دندان‌پزشکی زیبایی برای بهبود هماهنگی و ظاهر لبخند.","home.service2Title":"دندان‌پزشکی زیبایی","home.service2Description":"بررسی روش‌های زیبایی متناسب با وضعیت دندان‌ها و نیازهای هر فرد.","home.service3Title":"ایمپلنت دندان","home.service3Description":"آشنایی با روش جایگزینی دندان‌های ازدست‌رفته با استفاده از ایمپلنت.","home.service4Title":"دندان‌پزشکی عمومی","home.service4Description":"معاینات دوره‌ای، آموزش بهداشت دهان و مراقبت‌های پیشگیرانه.","home.service5Title":"سفید کردن دندان‌ها","home.service5Description":"بررسی روش‌های حرفه‌ای سفید کردن دندان و محدودیت‌های هر روش.","home.service6Title":"درمان ریشه دندان","home.service6Description":"آشنایی با درمان کانال ریشه برای دندان‌هایی که نیاز به بررسی و درمان پالپ دارند.","home.blog1Title":"اشتباهات رایج هنگام مسواک زدن","home.blog2Title":"سفید کردن دندان؛ روش‌های ایمن و نکات مهم","home.blog3Title":"آشنایی با مشکلات دندان غیرزنده","home.firstName":"نام","home.lastName":"نام خانوادگی","home.formSending":"در حال ارسال پیام…","home.formSent":"پیام شما با موفقیت ثبت شد.","home.formValidationError":"اطلاعات ارسال‌شده معتبر نیست. لطفاً فیلدها را بررسی کنید.","home.formTimeout":"مهلت ارسال پیام به پایان رسید. دوباره تلاش کنید.","home.formError":"ارسال پیام انجام نشد. لطفاً دوباره تلاش کنید.","contactPage.contact":"تماس با ما","contactPage.home":"صفحه اصلی","contactPage.breadcrumb":"مسیر صفحه","contactPage.contactInformation":"اطلاعات تماس","contactPage.touch":"با ما در ارتباط باشید","contactPage.heading":"دریافت مشاوره و اطلاعات رایگان","contactPage.imageAlt":"تصویر بخش تماس کلینیک دندان‌پزشکی","contactPage.addressLabel":"آدرس","contactPage.addressText":"تهران، خیابان فرشته، جنب سفارت سوئیس، پلاک ۳، طبقه پنجم، واحد ۱۸","contactPage.emailLabel":"ایمیل","contactPage.phoneLabel":"شماره تماس","contactPage.firstName":"نام","contactPage.lastName":"نام خانوادگی","contactPage.email":"آدرس ایمیل","contactPage.phone":"شماره تماس","contactPage.phonePlaceholder":"09123456789","contactPage.message":"پیام شما","contactPage.submit":"ارسال پیام","contactPage.sending":"در حال ارسال...","contactPage.success":"پیام شما با موفقیت ارسال شد.","contactPage.error":"ارسال پیام با مشکل مواجه شد. لطفاً دوباره تلاش کنید.","contactPage.validation":"لطفاً اطلاعات فرم را بررسی کنید.","dashboard.portal":"پرتال بیماران","dashboard.workspace":"فضای اختصاصی شما","dashboard.general":"بخش‌های اصلی","dashboard.account":"حساب کاربری","dashboard.overview":"نمای کلی","dashboard.appointments":"نوبت‌های من","dashboard.treatments":"طرح‌های درمان","dashboard.records":"پرونده دندان‌پزشکی","dashboard.billing":"پرداخت‌ها و فاکتورها","dashboard.profile":"پروفایل من","dashboard.menu":"باز کردن منو","dashboard.close":"بستن منو","dashboard.language":"زبان","dashboard.logout":"خروج از حساب","dashboard.loggingOut":"در حال خروج…","dashboard.support":"سوالی دارید؟","dashboard.supportText":"تیم کلینیک آماده پاسخ‌گویی به شماست.","dashboard.contact":"تماس با کلینیک","dashboard.greeting":"به فضای شخصی خود خوش آمدید","dashboard.subtitle":"همه چیز درباره مراقبت از دندان‌هایتان، در یک محیط آرام و ساده.","dashboard.healthTag":"مراقبت آسان‌تر از همیشه","dashboard.yourNextVisit":"نوبت بعدی شما","dashboard.noNextVisit":"هنوز نوبت آینده‌ای ثبت نشده","dashboard.nextVisitHint":"پس از رزرو نوبت، جزئیات آن در این بخش نمایش داده می‌شود.","dashboard.exploreServices":"مشاهده خدمات","dashboard.viewAppointments":"مشاهده نوبت‌ها","dashboard.overviewLabel":"در یک نگاه","dashboard.overviewHeading":"خلاصه وضعیت شما","dashboard.upcoming":"نوبت‌های آینده","dashboard.activePlans":"درمان‌های فعال","dashboard.balance":"مانده قابل پرداخت","dashboard.dataPending":"در انتظار اتصال","dashboard.currency":"—","dashboard.quickActions":"دسترسی سریع","dashboard.quickActionsCopy":"کارهای مهم با چند کلیک ساده.","dashboard.actionServices":"مشاهده خدمات","dashboard.actionServicesCopy":"با خدمات دندان‌پزشکی آشنا شوید.","dashboard.actionProfile":"ویرایش پروفایل","dashboard.actionProfileCopy":"اطلاعات تماس خود را به‌روز نگه دارید.","dashboard.actionHelp":"ارتباط با ما","dashboard.actionHelpCopy":"سوال خود را از تیم کلینیک بپرسید.","dashboard.journey":"مسیر درمان","dashboard.journeyCopy":"سوابق مراجعه و مراحل درمان اینجا نمایش داده می‌شوند.","dashboard.gentleReminder":"اطمینان خاطر شما","dashboard.gentleReminderCopy":"سوابق درمان شما در حساب کاربری نگهداری می‌شود و فقط اطلاعات مجاز و در دسترس نمایش داده خواهد شد.","dashboard.sectionOverviewEyebrow":"خانه بیمار","dashboard.sectionAppointmentsEyebrow":"برنامه نوبت‌ها","dashboard.appointmentTitle":"نوبت‌های من","dashboard.appointmentSubtitle":"نوبت‌های آینده و مراجعات قبلی را یکجا ببینید.","dashboard.appointmentsEmptyTitle":"برنامه نوبت‌های شما از اینجا شروع می‌شود","dashboard.appointmentsEmptyCopy":"در حال حاضر اطلاعاتی برای نمایش وجود ندارد. پس از اتصال سیستم نوبت‌دهی، نوبت‌ها اینجا نمایش داده می‌شوند.","dashboard.sectionTreatmentsEyebrow":"برنامه درمان شما","dashboard.treatmentTitle":"طرح‌های درمان","dashboard.treatmentSubtitle":"مراحل و پیشرفت درمان خود را دنبال کنید.","dashboard.treatmentsEmptyTitle":"برنامه درمانی روشن و منظم","dashboard.treatmentsEmptyCopy":"طرح‌های درمانی که کلینیک با شما به اشتراک می‌گذارد، در این بخش نمایش داده خواهد شد.","dashboard.sectionRecordsEyebrow":"پرونده سلامت شما","dashboard.recordsTitle":"پرونده دندان‌پزشکی","dashboard.recordsSubtitle":"محیطی خصوصی برای سوابق و فایل‌های پزشکی مجاز شما.","dashboard.recordsEmptyTitle":"سوابق دندان‌پزشکی شما اینجا قرار می‌گیرد","dashboard.recordsEmptyCopy":"سوابق، مدارک و تصاویر دندان‌پزشکی که پزشک اجازه دسترسی داده باشد، در این قسمت نمایش داده می‌شوند.","dashboard.privacyNote":"فقط اطلاعاتی نمایش داده می‌شود که دسترسی آن برای حساب بیمار مجاز باشد.","dashboard.sectionBillingEyebrow":"امور مالی شما","dashboard.billingTitle":"پرداخت‌ها و فاکتورها","dashboard.billingSubtitle":"وضعیت پرداخت‌ها و مبلغ‌های باقی‌مانده را بررسی کنید.","dashboard.billingEmptyTitle":"صورت‌حساب شفاف و ساده","dashboard.billingEmptyCopy":"فاکتورها، بیعانه‌ها و سوابق پرداخت پس از اتصال سیستم مالی در این بخش نمایش داده می‌شوند.","dashboard.sectionProfileEyebrow":"حساب شما","dashboard.profileTitle":"اطلاعات شخصی","dashboard.profileSubtitle":"مشخصات حساب و اطلاعات تماس خود را مدیریت کنید.","dashboard.badgeSoon":"آماده اتصال","dashboard.backHome":"بازگشت به سایت","dashboard.treatment.loading":"در حال دریافت طرح‌های درمان…","dashboard.treatment.empty":"هنوز طرح درمانی برای شما منتشر نشده است.","dashboard.treatment.error":"دریافت طرح‌های درمان انجام نشد.","dashboard.treatment.retry":"تلاش مجدد","dashboard.treatment.details":"جزئیات طرح درمان","dashboard.treatment.choose":"برای مشاهده جزئیات، یک طرح درمان را انتخاب کنید.","dashboard.treatment.stages":"مراحل درمان","dashboard.treatment.progress":"پیشرفت درمان","dashboard.treatment.noItems":"مرحله درمانی برای نمایش موجود نیست.","dashboard.treatment.itemsError":"دریافت مراحل درمان ممکن نشد.","dashboard.treatment.progressError":"اطلاعات پیشرفت درمان فعلاً در دسترس نیست.","dashboard.treatment.doctor":"پزشک","dashboard.treatment.tooth":"دندان","dashboard.treatment.date":"تاریخ ایجاد","dashboard.treatment.updated":"آخرین تغییر","dashboard.treatment.unavailable":"ثبت نشده","dashboard.treatment.total":"طرح‌ها","dashboard.treatment.page":"صفحه","dashboard.treatment.previous":"قبلی","dashboard.treatment.next":"بعدی","dashboard.treatment.noTitle":"طرح درمان","dashboard.treatment.stage":"مرحله درمان","dashboard.treatment.privacy":"فقط اطلاعاتی نمایش داده می‌شود که دسترسی آن برای حساب بیمار مجاز باشد.","dashboard.treatment.done":"انجام‌شده","dashboard.treatment.doing":"در حال انجام","dashboard.treatment.planned":"برنامه‌ریزی‌شده","dashboard.treatment.approved":"تأییدشده","dashboard.treatment.pending":"در انتظار","dashboard.treatment.canceled":"لغوشده","dashboard.treatment.draft":"پیش‌نویس"},ro={"auth.shell.asideLabel":"Patient Portal Introduction","auth.shell.care":"Dental Care","auth.shell.private":"Your Privacy Is Protected","auth.shell.easy":"Easy Appointments","auth.shell.priority":"Your Smile, Our Priority","auth.shell.tagline":"A Better Dental Experience Starts Here","auth.shell.back":"Back to Website","auth.shell.portal":"Patient Portal","auth.shell.loginLegal":"Sign in using your mobile number and verification code, or your email and password.","auth.login.title":"Welcome Back","auth.login.subtitle":"Choose your preferred method to sign in to your account.","auth.login.sideTitle":"Every Beautiful Smile Begins with Great Care.","auth.login.sideCopy":"Your personal space to manage appointments and track your dental treatments.","auth.login.methodPhone":"Mobile Login","auth.login.methodEmail":"Email Login","auth.login.phone":"Mobile Number","auth.login.phonePlaceholder":"09123456789","auth.login.sendCode":"Send Verification Code","auth.login.codeSentTo":"A verification code has been sent to:","auth.login.code":"6-Digit Verification Code","auth.login.codePlaceholder":"Enter the 6-digit code","auth.login.codeValidity":"The verification code is valid for 2 minutes.","auth.login.verify":"Verify and Sign In","auth.login.editPhone":"Change Mobile Number","auth.login.resend":"Resend Code","auth.login.email":"Email Address","auth.login.emailPlaceholder":"example@email.com","auth.login.password":"Password","auth.login.passwordPlaceholder":"Enter your password","auth.login.signIn":"Sign In","auth.login.forgotPassword":"Forgot Password?","auth.login.newPatient":"New to Our Clinic?","auth.login.createAccount":"Create an Account","auth.login.invalidPhone":"Please enter a valid mobile number.","auth.login.invalidEmail":"Please enter a valid email address.","auth.login.enterPassword":"Please enter your password.","auth.login.invalidCredentials":"Invalid email or password.","auth.login.invalidCodeFormat":"Please enter the 6-digit verification code.","auth.login.invalidCode":"The verification code is incorrect or has expired.","auth.login.noAccount":"No account was found with this mobile number. Please register first.","auth.login.tooMany":"Too many requests. Please try again later.","auth.login.timeout":"The request timed out. Please try again.","auth.login.networkError":"Unable to connect to the server. Please check your internet connection.","auth.login.serverError":"The clinic server is temporarily unavailable.","auth.login.sent":"Verification code sent successfully.","auth.login.resent":"A new verification code has been sent.","auth.login.invalidApiToken":"Login was verified, but a valid authentication token was not received from the server.","auth.register.title":"Patient Registration","auth.register.subtitle":"Enter your information to create your patient account.","auth.register.sideTitle":"A Personal Space for a Healthier Smile.","auth.register.sideCopy":"Manage your appointments, treatment plans and payments in one place.","auth.register.name":"Full Name","auth.register.namePlaceholder":"Enter your full name","auth.register.phone":"Mobile Number","auth.register.referral":"Referral Code (Optional)","auth.register.referralPlaceholder":"Enter your referral code if you have one","auth.register.sendCode":"Send Verification Code","auth.register.codeSentTo":"A verification code was sent to:","auth.register.code":"6-Digit Verification Code","auth.register.codePlaceholder":"Enter the 6-digit code","auth.register.codeValidity":"The verification code is valid for 2 minutes.","auth.register.verify":"Verify and Register","auth.register.editPhone":"Edit Information","auth.register.resend":"Resend Code","auth.register.haveAccount":"Already have an account?","auth.register.signIn":"Sign In","auth.register.success":"Your account has been created successfully.","auth.register.goToLogin":"Go to Login","auth.register.invalidName":"Please enter a valid full name.","auth.register.invalidPhone":"Please enter a valid mobile number.","auth.register.invalidCodeFormat":"Please enter the 6-digit verification code.","auth.register.invalidCode":"The verification code is incorrect or has expired.","auth.register.invalidData":"Your registration information is invalid. Please review it.","auth.register.alreadyRegistered":"This mobile number is already registered.","auth.register.sessionExpired":"Your registration session has expired. Please try again.","auth.register.sent":"Verification code sent successfully.","auth.register.resent":"A new verification code has been sent.","auth.register.tooMany":"Too many requests. Please try again later.","auth.register.timeout":"The request timed out. Please try again.","auth.register.networkError":"Unable to connect to the server. Please check your internet connection.","auth.register.serverError":"The clinic server is temporarily unavailable.","auth.register.requestFailed":"Something went wrong. Please try again.","auth.forgot.title":"Reset Your Password","auth.forgot.subtitle":"Enter your mobile number to receive a verification code.","auth.forgot.sideTitle":"Your Smile Is Always Our Priority.","auth.forgot.sideCopy":"Recover your account securely and get back to managing your dental care.","auth.forgot.phone":"Mobile Number","auth.forgot.sendCode":"Send Verification Code","auth.forgot.codeSentTo":"A verification code was sent to:","auth.forgot.code":"6-Digit Verification Code","auth.forgot.codePlaceholder":"Enter the 6-digit code","auth.forgot.verify":"Verify Code","auth.forgot.changePhone":"Change Mobile Number","auth.forgot.resend":"Resend Code","auth.forgot.verifiedPhone":"Verified mobile number:","auth.forgot.newPassword":"New Password","auth.forgot.newPasswordPlaceholder":"At least 8 characters","auth.forgot.confirmPassword":"Confirm New Password","auth.forgot.confirmPlaceholder":"Enter your new password again","auth.forgot.resetPassword":"Reset Password","auth.forgot.backToLogin":"Back to Login","auth.forgot.success":"Your password has been reset successfully. You can now sign in.","auth.forgot.invalidPhone":"Please enter a valid mobile number.","auth.forgot.invalidCodeFormat":"The verification code must contain 6 digits.","auth.forgot.invalidCode":"The verification code is invalid or has expired.","auth.forgot.shortPassword":"Your password must contain at least 8 characters.","auth.forgot.passwordMismatch":"The passwords do not match.","auth.forgot.sessionExpired":"Recovery information is missing. Please request a new code.","auth.forgot.invalidData":"The submitted information is invalid.","auth.forgot.sent":"Verification code sent successfully.","auth.forgot.resent":"A new verification code has been sent.","auth.forgot.verified":"Mobile number verified. Please enter your new password.","auth.forgot.tooMany":"Too many requests. Please try again later.","auth.forgot.timeout":"The request timed out.","auth.forgot.serverError":"The server is temporarily unavailable.","auth.forgot.networkError":"Unable to connect to the server.","auth.forgot.requestFailed":"Something went wrong. Please try again.","auth.shell.privacyLegal":"Your account information is processed through a secure connection to the server.","auth.forgot.resetTokenExpired":"Your password reset session has expired. Please request a new verification code.","auth.sessionExpired":"Your session expired after 15 minutes of inactivity. Please sign in again.","profile.dashboard":"Patient Dashboard","profile.title":"My Profile","profile.subtitle":"Your account information and personal details.","profile.information":"Personal Information","profile.name":"Full Name","profile.email":"Email Address","profile.phone":"Mobile Number","profile.referral":"Referral Code","profile.notSet":"Not provided","profile.loading":"Loading your profile...","profile.loaded":"Your profile is up to date.","profile.partial":"Basic details loaded; full profile is unavailable.","profile.loadError":"Unable to load your profile information.","profile.reload":"Reload","profile.logout":"Sign Out","profile.phoneHint":"Your mobile number can only be changed after SMS verification.","blog.title":"Blog","blog.home":"Home","blog.latest":"Latest Updates","blog.heading":"Find the Latest News and Updates Here.","blog.loading":"Loading articles...","blog.empty":"No articles are available at the moment.","blog.error":"Unable to load articles. Please try again.","blog.retry":"Try Again","blog.readArticle":"Read Article","blog.details.page":"Dental Blog","blog.details.breadcrumb":"Blog Details","blog.details.categories":"Categories","blog.details.recent":"Recent Posts","blog.details.loading":"Loading article...","blog.details.notFound":"The requested article was not found.","blog.details.error":"Unable to load the article.","blog.details.retry":"Try Again","blog.details.back":"Back to Blog","header.login":"Login","header.dashboard":"Dashboard","header.loginAria":"Sign in to your patient account","header.dashboardAria":"Open patient dashboard","header.home":"Home","header.about":"About Us","header.services":"Services","header.blog":"Blog","header.contact":"Contact Us","header.logo":"Dentistry","header.menu":"Toggle navigation","header.language":"Site language","footer.eyebrow":"A NEW PERSPECTIVE ON DENTAL CARE","footer.heroTitle":"Your smile deserves","footer.heroHighlight":"something special.","footer.heroDescription":"A healthy, beautiful smile begins with care and awareness. Connect with us to learn more about the clinic and get answers to your questions.","footer.contactUs":"Contact Us","footer.brandName":"Dr. Zeinolabedin","footer.brandDescription":"A place to explore dental care, treatment options, and practical advice for maintaining good oral health.","footer.brandTag":"Care begins with confidence","footer.explore":"Quick Links","footer.patients":"For Patients","footer.getInTouch":"Get in Touch","footer.home":"Home","footer.about":"About Us","footer.team":"Our Team","footer.blog":"Dental Blog","footer.faq":"Frequently Asked Questions","footer.login":"Patient Login","footer.register":"Create an Account","footer.contactDescription":"For more information or questions, feel free to reach out through our contact page.","footer.contactLink":"Go to Contact Page","footer.copyright":"All rights reserved.","footer.backToTop":"Back to Top","footer.parentCompany":"Mazorya Group","about.breadcrumb":"About Us","about.home":"Home","about.imageAlt":"Dental clinic interior","about.introEyebrow":"About Us","about.introTitle":"A Thoughtful Approach to Your Smile","about.introDescription":"Oral health is an important part of overall well-being. Understanding preventive care, exploring treatment options, and asking informed questions can help patients make better decisions about their dental health.","about.feature1Title":"Information Before Decisions","about.feature1Description":"Understanding treatment steps and discussing concerns are important parts of making informed choices.","about.feature2Title":"Individual Treatment Needs","about.feature2Description":"Every patient has different oral health needs. Appropriate treatment depends on a professional examination and clinical assessment.","about.contactButton":"Contact Us","about.treatmentEyebrow":"Dental Services","about.treatmentTitle":"Explore Dental Treatments","about.treatmentDescription":"Discover the dental services currently listed by the clinic and visit each service page to learn more.","about.servicesLoading":"Loading services...","about.servicesEmpty":"No services are currently available.","about.servicesError":"Unable to load services.","about.retry":"Try Again","about.serviceDetails":"View Details","about.teamEyebrow":"Get in Touch","about.teamTitle":"We're Here for Your Questions","about.teamDescription":"Whether you want to learn more about available services, explore treatment options, or ask about visiting the clinic, you can reach out through our contact page.","about.teamButton":"Contact Us","about.faqEyebrow":"FAQ","about.faqTitle":"Frequently Asked Questions","about.faq1Question":"How often should I visit the dentist?","about.faq1Answer":"Regular dental checkups are recommended for many patients. The appropriate interval depends on your oral health needs and your dentist's assessment.","about.faq2Question":"What causes tooth decay?","about.faq2Answer":"Bacteria in dental plaque produce acids when they break down sugars and fermentable carbohydrates. Over time, these acids can remove minerals from tooth enamel and lead to cavities.","about.faq3Question":"How can I prevent gum disease?","about.faq3Answer":"Regular brushing with fluoride toothpaste, cleaning between teeth, routine dental checkups, and early attention to symptoms such as bleeding gums can help maintain gum health.","about.faq4Question":"Are teeth whitening treatments safe?","about.faq4Answer":"Professional whitening is generally safe when the method is appropriate and supervised by a dentist. Temporary sensitivity or gum irritation may occur, and whitening is not suitable for everyone.","about.faq5Question":"What are dental implants?","about.faq5Answer":"Dental implants are used to replace missing teeth. A post, typically made of titanium, is placed in the jawbone and later supports a dental restoration. Suitability depends on a professional examination and individual clinical conditions.","about.teamPreview":"معرفی پزشکان این بخش پس از تکمیل اطلاعات تیم پزشکی نمایش داده می‌شود.","about.demoTreatment1Title":"Smile Design","about.demoTreatment1Description":"Explore cosmetic dental options that may improve the appearance and harmony of your smile.","about.demoTreatment2Title":"Cosmetic Dentistry","about.demoTreatment2Description":"Discover aesthetic dental treatment options tailored to individual needs and goals.","about.demoTreatment3Title":"Dental Implants","about.demoTreatment3Description":"Learn about dental implants as an option for replacing missing teeth.","about.demoTreatment4Title":"Teeth Whitening","about.demoTreatment4Description":"Explore professional teeth whitening options under dental supervision.","about.demoTreatment5Title":"General Dentistry","about.demoTreatment5Description":"Routine examinations, preventive care, and assessment of common oral health concerns.","about.servicesDemoNote":"These services are currently displayed as a design preview.","about.doctor1Name":"Dr. Fiona Park","about.doctor1Role":"General Dentistry","about.doctor2Name":"Dr. John Martin","about.doctor2Role":"Cosmetic Dentistry","about.doctor3Name":"Dr. Archie White","about.doctor3Role":"Dental Care","about.doctor4Name":"Dr. Maria Angel","about.doctor4Role":"Restorative Dentistry","about.teamDemoNote":"Names and images are for demonstration only and will be replaced with the actual medical team.","teamDetails.home":"Home","teamDetails.team":"Our Medical Team","teamDetails.specialty":"Area of Practice","teamDetails.information":"Doctor Information","teamDetails.informationText":"Professional credentials, experience, and availability will be displayed after the clinic provides verified information.","teamDetails.eyebrow":"Doctor Profile","teamDetails.aboutTitle":"About","teamDetails.aboutDescription":"Explore the general field of dental care associated with this profile. Individual professional information will be completed in the final version.","teamDetails.focusTitle":"Areas of Dental Care","teamDetails.focus1":"General dentistry includes examinations, preventive care, and assessment of common oral health conditions.","teamDetails.focus2":"Cosmetic dentistry explores treatments that may improve smile appearance, tooth shape, and dental aesthetics.","teamDetails.focus3":"Dental care includes oral hygiene, preventive education, and follow-up of patients' dental needs.","teamDetails.focus4":"Restorative dentistry focuses on restoring damaged teeth and improving their appearance and function.","teamDetails.approachTitle":"Choosing the Right Treatment","teamDetails.approachDescription":"Appropriate treatment depends on a dental examination, clinical assessment, and the individual needs of each patient.","teamDetails.previewBadge":"Demo Profile","teamDetails.previewNotice":"This is a design preview. The displayed name, photo, and specialty are examples and do not establish that this doctor works at the clinic.","teamDetails.backToDoctors":"Back to Our Doctors","teamDetails.contactButton":"Contact the Clinic","teamDetails.notFound":"Doctor profile not found.","home.heroTitle":"Open Wide to a World of Smiles","home.heroDescription":"Explore dental services, understand treatment options, and connect with the clinic as you take the first step toward better oral health.","home.heroImageAlt":"Dental care and smile illustration","home.bookNow":"Book an Appointment","home.aboutEyebrow":"Who We Are","home.aboutTitle":"A Thoughtful Approach to Dental Care","home.aboutDescription":"Every patient has individual needs. Clinical assessment, clear explanations of treatment options, and attention to preventive care can help people make informed choices.","home.aboutImageAlt":"Dental clinic environment","home.aboutFeature1":"Clear information about dental treatments","home.aboutFeature2":"Attention to each patient’s unique needs","home.questions":"Have Questions?","home.contactUs":"Contact the Clinic","home.readMore":"Read More","home.servicesEyebrow":"Our Services","home.servicesTitle":"Personalized Dental Care Options","home.allServices":"View All Services","home.demoServicesNote":"The services shown here are design-preview examples.","home.treatmentEyebrow":"Treatments","home.treatmentTitle":"Explore Dental Treatment Options","home.contactEyebrow":"Get in Touch","home.contactTitle":"Have a Question? Send Us a Message","home.contactImageAlt":"Dental clinic contact section","home.name":"Full Name","home.email":"Email Address","home.phone":"Phone Number","home.subject":"Subject","home.message":"Your Message","home.submit":"Send Message","home.contactDemoNote":"This form is a preview and does not send messages to a server. Please use the Contact Us page to reach the clinic.","home.formRequired":"Please enter your name and message, and review the fields.","home.formNotConnected":"The form is not connected to a server yet. Your message was not sent. Please use the Contact Us page.","home.blogEyebrow":"Dental Insights","home.blogTitle":"Oral Health Articles","home.allBlogs":"View All Articles","home.demoBlogNote":"These articles are design-preview examples and will be replaced by published clinic articles.","home.service1Title":"Smile Design","home.service1Description":"Explore cosmetic options that may improve the appearance and harmony of your smile.","home.service2Title":"Cosmetic Dentistry","home.service2Description":"Discover aesthetic treatments suited to individual dental needs and goals.","home.service3Title":"Dental Implants","home.service3Description":"Learn about dental implants as an option for replacing missing teeth.","home.service4Title":"General Dentistry","home.service4Description":"Routine examinations, oral hygiene guidance, and preventive care.","home.service5Title":"Teeth Whitening","home.service5Description":"Explore professional whitening methods and their limitations.","home.service6Title":"Root Canal Treatment","home.service6Description":"Learn about root canal therapy for teeth requiring pulp assessment and treatment.","home.blog1Title":"Common Mistakes When Brushing Teeth","home.blog2Title":"Teeth Whitening: Safety and Best Practices","home.blog3Title":"Understanding Non-Vital Teeth","home.firstName":"First Name","home.lastName":"Last Name","home.formSending":"Sending your message...","home.formSent":"Your message was submitted successfully.","home.formValidationError":"Please review the information you entered and try again.","home.formTimeout":"The request timed out. Please try again.","home.formError":"The message could not be sent. Please try again.","contactPage.contact":"Contact Us","contactPage.home":"Home","contactPage.breadcrumb":"Breadcrumb","contactPage.contactInformation":"Contact Information","contactPage.touch":"Get in Touch","contactPage.heading":"Get Free Information!","contactPage.imageAlt":"Dental clinic contact illustration","contactPage.addressLabel":"Address","contactPage.addressText":"Tehran, Fereshteh Street, next to the Swiss Embassy, No. 3, 5th Floor, Unit 18","contactPage.emailLabel":"Email","contactPage.phoneLabel":"Phone","contactPage.firstName":"First Name","contactPage.lastName":"Last Name","contactPage.email":"Email","contactPage.phone":"Phone","contactPage.phonePlaceholder":"09123456789","contactPage.message":"Message","contactPage.submit":"Send Message","contactPage.sending":"Sending...","contactPage.success":"Your message has been sent successfully.","contactPage.error":"Unable to send your message. Please try again.","contactPage.validation":"Please check the form fields.","dashboard.portal":"Patient portal","dashboard.workspace":"YOUR WORKSPACE","dashboard.general":"GENERAL","dashboard.account":"ACCOUNT","dashboard.overview":"Overview","dashboard.appointments":"Appointments","dashboard.treatments":"Treatment plans","dashboard.records":"Dental records","dashboard.billing":"Payments & invoices","dashboard.profile":"My profile","dashboard.menu":"Open navigation","dashboard.close":"Close navigation","dashboard.language":"Language","dashboard.logout":"Sign out","dashboard.loggingOut":"Signing out…","dashboard.support":"Need a hand?","dashboard.supportText":"Our clinic team is here to help you.","dashboard.contact":"Contact clinic","dashboard.greeting":"Welcome to your space","dashboard.subtitle":"Everything about your dental care, in one calm place.","dashboard.healthTag":"YOUR CARE, SIMPLIFIED","dashboard.yourNextVisit":"Your next appointment","dashboard.noNextVisit":"No upcoming appointment yet","dashboard.nextVisitHint":"When you book a visit, the details will appear here.","dashboard.exploreServices":"Explore services","dashboard.viewAppointments":"View appointments","dashboard.overviewLabel":"AT A GLANCE","dashboard.overviewHeading":"Your health overview","dashboard.upcoming":"Upcoming visits","dashboard.activePlans":"Active plans","dashboard.balance":"Amount due","dashboard.dataPending":"Awaiting connection","dashboard.currency":"—","dashboard.quickActions":"Quick actions","dashboard.quickActionsCopy":"The things you need, just a click away.","dashboard.actionServices":"Explore treatments","dashboard.actionServicesCopy":"Learn about available dental services.","dashboard.actionProfile":"Update your profile","dashboard.actionProfileCopy":"Keep your contact information current.","dashboard.actionHelp":"Get in touch","dashboard.actionHelpCopy":"Ask our team a question.","dashboard.journey":"Care timeline","dashboard.journeyCopy":"Your visits and treatment milestones will be here.","dashboard.gentleReminder":"A little peace of mind","dashboard.gentleReminderCopy":"Your treatment history is kept in your account. Records will appear only when available and authorized for you.","dashboard.sectionOverviewEyebrow":"PATIENT HOME","dashboard.sectionAppointmentsEyebrow":"YOUR SCHEDULE","dashboard.appointmentTitle":"Appointments","dashboard.appointmentSubtitle":"Review future and past appointments in one place.","dashboard.appointmentsEmptyTitle":"Your schedule starts here","dashboard.appointmentsEmptyCopy":"You have no appointment information to display yet. Once appointment services are connected, your visits will appear here.","dashboard.sectionTreatmentsEyebrow":"YOUR CARE PLAN","dashboard.treatmentTitle":"Treatment plans","dashboard.treatmentSubtitle":"Follow your treatment stages and progress.","dashboard.treatmentsEmptyTitle":"Your treatment plan, made clear","dashboard.treatmentsEmptyCopy":"Treatment plans shared with you by the clinic will appear here once available.","dashboard.sectionRecordsEyebrow":"YOUR HEALTH FILE","dashboard.recordsTitle":"Dental records","dashboard.recordsSubtitle":"A private home for your eligible dental history and files.","dashboard.recordsEmptyTitle":"Your dental history belongs here","dashboard.recordsEmptyCopy":"Doctor-approved records, documents and dental images will be shown here when available to you.","dashboard.privacyNote":"Only information authorized for the patient account will be displayed.","dashboard.sectionBillingEyebrow":"YOUR FINANCES","dashboard.billingTitle":"Payments & invoices","dashboard.billingSubtitle":"Understand paid amounts and any upcoming payments.","dashboard.billingEmptyTitle":"Clear, simple billing","dashboard.billingEmptyCopy":"Your invoices, deposits and payment history will appear when the billing system is connected.","dashboard.sectionProfileEyebrow":"YOUR ACCOUNT","dashboard.profileTitle":"Personal information","dashboard.profileSubtitle":"Update account details and manage your contact information.","dashboard.badgeSoon":"Ready for integration","dashboard.backHome":"Back to website","dashboard.treatment.loading":"Loading treatment plans…","dashboard.treatment.empty":"No treatment plans have been shared with you yet.","dashboard.treatment.error":"Could not load your treatment plans.","dashboard.treatment.retry":"Try again","dashboard.treatment.details":"Plan details","dashboard.treatment.choose":"Select a treatment plan to view its details.","dashboard.treatment.stages":"Treatment stages","dashboard.treatment.progress":"Progress","dashboard.treatment.noItems":"No treatment stages are available.","dashboard.treatment.itemsError":"Unable to load treatment stages.","dashboard.treatment.progressError":"Progress information is currently unavailable.","dashboard.treatment.doctor":"Doctor","dashboard.treatment.tooth":"Tooth","dashboard.treatment.date":"Created","dashboard.treatment.updated":"Updated","dashboard.treatment.unavailable":"Not provided","dashboard.treatment.total":"Plans","dashboard.treatment.page":"Page","dashboard.treatment.previous":"Previous","dashboard.treatment.next":"Next","dashboard.treatment.noTitle":"Treatment plan","dashboard.treatment.stage":"Treatment stage","dashboard.treatment.privacy":"Only treatment information available to your patient account is displayed.","dashboard.treatment.done":"Completed","dashboard.treatment.doing":"In progress","dashboard.treatment.planned":"Planned","dashboard.treatment.approved":"Approved","dashboard.treatment.pending":"Pending","dashboard.treatment.canceled":"Cancelled","dashboard.treatment.draft":"Draft"},gn="dentistry.lang",Da="en",so=new Set(["fa","en"]),bn={fa:io,en:ro},yt=e=>String(e??"").replace(/\s+/g," ").trim();function ia(e){return so.has(e)}function oe(){if(typeof window>"u")return Da;const e=new URLSearchParams(window.location.search).get("lang");if(ia(e))return e;try{const t=localStorage.getItem(gn);if(ia(t))return t}catch{}return Da}function w(e){var o;const t=yt(e);if(!t)return String(e??"");const a=oe(),n=(o=bn[a])==null?void 0:o[t];return typeof n=="string"&&n.length>0?n:String(e??"")}function lo(e){const t=oe(),a=t==="fa"?"fa-IR":"en-US",n=Number(e??0);return`${new Intl.NumberFormat(a).format(Number.isFinite(n)?n:0)} ${t==="fa"?"تومان":"toman"}`}function ga(){if(typeof document>"u")return;const e=oe();document.documentElement.lang=e,document.documentElement.dir=e==="fa"?"rtl":"ltr",document.documentElement.dataset.locale=e}function co(e){var s,l;if(!e||typeof document>"u")return;const t=oe(),a=bn[t]||{},n=new Set(["SCRIPT","STYLE","NOSCRIPT","CODE","PRE","SVG"]),o=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,{acceptNode(d){const c=d.parentElement;return!c||c.closest("[data-no-translate]")||n.has(c.tagName)||c.closest("svg")?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}}),i=[];for(;o.nextNode();)i.push(o.currentNode);for(const d of i){const c=d.nodeValue,u=yt(c);if(!u)continue;const p=a[u];if(typeof p!="string")continue;const m=((s=c.match(/^\s*/))==null?void 0:s[0])??"",f=((l=c.match(/\s*$/))==null?void 0:l[0])??"";d.nodeValue=m+p+f}const r=e.querySelectorAll("[placeholder],[title],[aria-label],[alt],[value]");for(const d of r){if(d.closest("[data-no-translate]"))continue;const c=["placeholder","title","aria-label","alt"];for(const u of c){if(!d.hasAttribute(u))continue;const p=d.getAttribute(u),m=yt(p),f=a[m];typeof f=="string"&&d.setAttribute(u,f)}if(d.tagName==="INPUT"&&["submit","button"].includes(d.type)){const u=d.getAttribute("value"),p=yt(u),m=a[p];typeof m=="string"&&d.setAttribute("value",m)}}}function vn(e=""){const t=oe();return`
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
  `}function yn(e,t){if(!ia(e))return;try{localStorage.setItem(gn,e)}catch{}const a=new URL(window.location.href);a.searchParams.set("lang",e),window.history.replaceState(window.history.state,"",a.pathname+a.search+a.hash),ga(),typeof t=="function"&&t()}ga();const Rt="dentistry.patient.jwt",ra="dentistry.patient.client";function ba(e){var n;if((e==null?void 0:e.success)!==!0||typeof((n=e==null?void 0:e.data)==null?void 0:n.token)!="string"||!e.data.token.trim())throw new Error("AUTH_TOKEN_MISSING");const{token:t,client:a}=e.data;if(sessionStorage.setItem(Rt,t),a&&typeof a=="object"){const o={id:a.id??null,name:a.name??null,email:a.email??null,phone:a.phone??null,referral_code:a.referral_code??null,referrer_id:a.referrer_id??null};sessionStorage.setItem(ra,JSON.stringify(o))}else sessionStorage.removeItem(ra);return a??null}function We(){try{return sessionStorage.getItem(Rt)}catch{return null}}function St(){try{sessionStorage.removeItem(Rt),sessionStorage.removeItem(ra)}catch{}}function uo(e){var a;const t=(a=e==null?void 0:e.data)==null?void 0:a.token;if(typeof t!="string"||!t.trim())throw new Error("AUTH_TOKEN_MISSING");return sessionStorage.setItem(Rt,t),t}const va="dentistry.patient.lastActivity",mo=15*60*1e3;function po(){try{return Number(sessionStorage.getItem(va))}catch{return 0}}function wn(e=Date.now()){try{return sessionStorage.setItem(va,String(e)),!0}catch{return!1}}function fo(e){if(typeof e!="string"||e.split(".").length!==3)return!1;try{const t=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),a=JSON.parse(atob(t.padEnd(Math.ceil(t.length/4)*4,"=")));return typeof a.exp=="number"&&Date.now()>=a.exp*1e3}catch{return!1}}function $n(){window.dispatchEvent(new Event("dentistry:auth-changed"))}function ya(){return!We()||!wn()?!1:($n(),!0)}function ho(){St();try{sessionStorage.removeItem(va)}catch{}$n()}function Xe(){const e=We();if(!e)return!1;const t=po();return!t||Date.now()-t>=mo||fo(e)?(ho(),!1):!0}function go(){return Xe()?wn():!1}function bo(e){const t=new AbortController,{signal:a}=t;let n=Xe(),o=0;const i=()=>{const l=Xe();n&&!l&&(e==null||e()),n=l},r=()=>{if(!Xe()){i();return}const l=Date.now();l-o<1e3||(o=l,go(),n=!0)};for(const l of["pointerdown","keydown","touchstart","scroll"])document.addEventListener(l,r,{signal:a,passive:!0,capture:l==="scroll"});document.addEventListener("visibilitychange",()=>{document.hidden||i()},{signal:a}),window.addEventListener("focus",i,{signal:a}),window.addEventListener("pageshow",i,{signal:a});const s=window.setInterval(i,5e3);return()=>{t.abort(),window.clearInterval(s)}}const kn=[{url:"/",key:"header.home",en:"Home",fa:"خانه"},{url:"/about-us",key:"header.about",en:"About Us",fa:"درباره ما"},{url:"/service",key:"header.services",en:"Services",fa:"خدمات"},{url:"/blog",key:"header.blog",en:"Blog",fa:"وبلاگ"},{url:"/contact-us",key:"header.contact",en:"Contact Us",fa:"تماس با ما"}];function dt(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Ce(e,t,a){const n=w(e);return n!==e&&n?n:oe()==="fa"?a:t}function Sn(){return window.location.pathname.replace(/\/+$/,"")||"/"}function Tn(e){const t=Sn();return!!(t===e||e==="/service"&&t.startsWith("/services/")||e==="/blog"&&t.startsWith("/post/"))}function En(){const e=Xe();return{authenticated:e,href:e?"/dashboard":"/login",label:e?Ce("header.dashboard","Dashboard","داشبورد"):Ce("header.login","Login","ورود"),ariaLabel:e?Ce("header.dashboardAria","Open patient dashboard","ورود به داشبورد بیمار"):Ce("header.loginAria","Sign in to patient account","ورود به حساب بیمار")}}const vo=`
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
`;function _a(e){const t=En();return`
    <a
      href="${t.href}"
      class="dentistry-header-auth dentistry-header-auth-${e} w-inline-block"
      data-header-auth
      data-auth-type="${e}"
      aria-label="${dt(t.ariaLabel)}"
    >
      ${vo}

      <span class="dentistry-header-auth-text">
        ${dt(t.label)}
      </span>
    </a>
  `}function yo(){return kn.map(e=>{const t=Tn(e.url),a=Ce(e.key,e.en,e.fa);return`
      <a
        href="${e.url}"
        data-header-nav-key="${e.key}"
        class="nav-link w-inline-block${t?" w--current":""}"
        ${t?'aria-current="page"':""}
      >
        <div class="nav-link-text">
          ${dt(a)}
        </div>
      </a>
    `}).join("")}function wo(){const e=Sn()==="/";return`
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
                alt="${dt(Ce("header.logo","Dentistry","دندان‌پزشکی"))}"
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

              ${yo()}

              <!-- MOBILE AUTH BUTTON -->
              ${_a("mobile")}

            </nav>

            <!-- LANGUAGE SWITCH -->

            ${vn("dentistry-header-lang")}

            <!-- DESKTOP AUTH BUTTON -->

            ${_a("desktop")}

            <!-- MOBILE HAMBURGER -->

            <div
              class="hamburger-menu-button w-nav-button"
              aria-label="${dt(Ce("header.menu","Toggle navigation","باز و بسته کردن منو"))}"
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
  `}function $o(){const e=oo(),t=document.querySelector("[data-dentistry-header]");if(!t)return()=>{typeof e=="function"&&e()};function a(){const d=En();t.querySelectorAll("[data-header-auth]").forEach(c=>{c.href=d.href,c.setAttribute("aria-label",d.ariaLabel);const u=c.querySelector(".dentistry-header-auth-text");u&&(u.textContent=d.label)})}function n(){kn.forEach(d=>{const c=Array.from(t.querySelectorAll("[data-header-nav-key]")).find(m=>m.dataset.headerNavKey===d.key);if(!c)return;const u=c.querySelector(".nav-link-text");u&&(u.textContent=Ce(d.key,d.en,d.fa));const p=Tn(d.url);c.classList.toggle("w--current",p),p?c.setAttribute("aria-current","page"):c.removeAttribute("aria-current")})}function o(){const d=oe(),c=t.querySelector(".dentistry-lang-switch");c&&c.setAttribute("aria-label",Ce("header.language","Site language","زبان سایت")),t.querySelectorAll("[data-set-language]").forEach(u=>{const p=u.dataset.setLanguage===d;u.classList.toggle("is-active",p),u.setAttribute("aria-pressed",String(p))})}function i(){const d=t.querySelector("[data-header-logo]");d&&(d.alt=Ce("header.logo","Dentistry","دندان‌پزشکی"));const c=t.querySelector("[data-header-menu-button]");c&&c.setAttribute("aria-label",Ce("header.menu","Toggle navigation","باز و بسته کردن منو"))}function r(){t.isConnected&&(n(),a(),o(),i())}r(),window.addEventListener("dentistry:auth-changed",r);const s=new MutationObserver(r);s.observe(document.documentElement,{attributes:!0,attributeFilter:["lang","dir"]});function l(){document.hidden||r()}return document.addEventListener("visibilitychange",l),window.addEventListener("focus",r),()=>{s.disconnect(),window.removeEventListener("dentistry:auth-changed",r),window.removeEventListener("focus",r),document.removeEventListener("visibilitychange",l),typeof e=="function"&&e()}}function ko(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function ge(e){return ko(w(`footer.${e}`))}const Ia={diagonalArrow:`
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
  `};function je(e,t){return`
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
          ${ge(t)}
        </span>

      </a>

    </li>
  `}function So(){const e=new Date().getFullYear();return`
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
              aria-label="${ge("brandName")}"
            >

              <span class="dz-footer-logo-box">

                <img
                  src="/asset/img/logo.png"
                  alt="${ge("brandName")}"
                  class="dz-footer-logo"
                  loading="lazy"
                />

              </span>

              <span class="dz-footer-brand-name">
                ${ge("brandName")}
              </span>

            </a>

            <!-- BRAND DESCRIPTION -->

            <p class="dz-footer-brand-description">
              ${ge("brandDescription")}
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
                ${ge("brandTag")}
              </span>

            </div>

          </div>

          <!-- =====================================
               QUICK LINKS
          ====================================== -->

          <div class="dz-footer-column">

            <h3 class="dz-footer-column-heading">
              ${ge("explore")}
            </h3>

            <ul class="dz-footer-nav-list">

              ${je("/","home")}

              ${je("/about-us","about")}

              ${je("/team","team")}

              ${je("/blog","blog")}

            </ul>

          </div>

          <!-- =====================================
               PATIENT LINKS
          ====================================== -->

          <div class="dz-footer-column">

            <h3 class="dz-footer-column-heading">
              ${ge("patients")}
            </h3>

            <ul class="dz-footer-nav-list">

              ${je("/login","login")}

              ${je("/register","register")}

              ${je("/faq","faq")}

            </ul>

          </div>

          <!-- =====================================
               CONTACT
          ====================================== -->

          <div class="dz-footer-column dz-footer-contact">

            <h3 class="dz-footer-column-heading">
              ${ge("getInTouch")}
            </h3>

            <p class="dz-footer-contact-description">
              ${ge("contactDescription")}
            </p>

            <a
              href="/contact-us"
              class="dz-footer-contact-link"
            >

              <span>
                ${ge("contactLink")}
              </span>

              ${Ia.diagonalArrow}

            </a>

          </div>

        </div>

        <!-- =====================================
             BOTTOM
        ====================================== -->

        <div class="dz-footer-bottom">

  <!-- COPYRIGHT - LEFT -->

  <p class="dz-footer-copyright">
    © ${e} ${ge("brandName")}.
    ${ge("copyright")}
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
    aria-label="${ge("backToTop")}"
  >
    <span>${ge("backToTop")}</span>

    <span class="dz-footer-back-top-icon">
      ${Ia.up}
    </span>
  </button>

</div>

      </div>

    </footer>
  `}function To(){const e=document.querySelector("[data-dz-footer]");if(!e)return()=>{};const t=new AbortController,{signal:a}=t,n=e.querySelector("[data-footer-back-top]");return n==null||n.addEventListener("click",()=>{const o=window.matchMedia("(prefers-reduced-motion: reduce)").matches;window.scrollTo({top:0,behavior:o?"auto":"smooth"})},{signal:a}),()=>{t.abort()}}const Mt="https://apidr.mazoryagroup.ir/api",Eo=15e3,Ao=Mt.replace(/\/+$/,"");class Ze extends Error{constructor(t,a=0,n=null){super(t),this.name="ApiError",this.status=a,this.errors=n}}async function wa(e,{method:t="GET",body:a=null,auth:n=!1,signal:o=null}={}){const i=new AbortController;let r=!1;const s=()=>{i.abort()};o&&(o.aborted?i.abort():o.addEventListener("abort",s,{once:!0}));const l=setTimeout(()=>{r=!0,i.abort()},Eo);try{const d={Accept:"application/json"};if(a!==null&&(d["Content-Type"]="application/json"),n){const h=We();if(!h)throw new Ze("Unauthenticated.",401);d.Authorization=`Bearer ${h}`}const c=String(e||"").replace(/^\/+/,""),u=`${Ao}/${c}`,p=await fetch(u,{method:t.toUpperCase(),headers:d,body:a!==null?JSON.stringify(a):void 0,signal:i.signal,cache:"no-store",credentials:"omit"});if(p.status===204)return{success:!0,statusCode:204};const m=await p.json().catch(()=>null),f=Number(m==null?void 0:m.statusCode);if(!p.ok||(m==null?void 0:m.success)===!1||(m==null?void 0:m.status)===!1||Number.isFinite(f)&&f>=400)throw new Ze((m==null?void 0:m.message)||"API request failed.",p.ok&&f>=400?f:p.status,(m==null?void 0:m.errors)??null);if(!m||typeof m!="object")throw new Ze("Invalid server response.",502);return m}catch(d){throw d instanceof Ze?d:(d==null?void 0:d.name)==="AbortError"?o!=null&&o.aborted?d:new Ze(r?"Request timeout.":"Request cancelled.",r?408:0):(console.error("API Network Error:",{endpoint:e,message:d==null?void 0:d.message}),new Ze("Unable to connect to the server.",0))}finally{clearTimeout(l),o&&o.removeEventListener("abort",s)}}function K(e,t={}){return wa(e,{...t,method:"GET"})}function he(e,t={},a={}){return wa(e,{...a,method:"POST",body:t})}function xo(e,t={},a={}){return wa(e,{...a,method:"PUT",body:t})}const Ut={loginWithEmail(e,t,a=null){return he("/v1/auth/login",{email:e,password:t},{signal:a})},sendCode(e,t=null){return he("/v1/auth/login/phone/send-code",{phone:e},{signal:t})},verifyCode(e,t,a=null){return he("/v1/auth/login/phone/verify",{phone:e,code:t},{signal:a})}},qa={sendCode(e,t,a="",n=null){return he("/v1/auth/register/send-code",{name:e,phone:t,referral_code:a},{signal:n})},verifyCode(e,t,a,n="",o=null){return he("/v1/auth/register/verify",{phone:e,code:t,name:a,referral_code:n},{signal:o})}},zt={sendCode(e,t=null){return he("/v1/auth/forgot-password/send-code",{phone:e},{signal:t})},verifyCode(e,t,a=null){return he("/v1/auth/forgot-password/verify",{phone:e,code:t},{signal:a})},resetPassword(e,t,a,n,o,i=null){return he("/v1/auth/forgot-password/reset",{phone:e,code:t,reset_token:a,password:n,password_confirmation:o},{signal:i})}},wt={me(e=null){return K("/v1/auth/me",{auth:!0,signal:e})},getProfile(e=null){return K("/v1/auth/profile",{auth:!0,signal:e})},updateProfile(e,t=null){return xo("/v1/auth/profile",e,{auth:!0,signal:t})},refresh(e=null){return he("/v1/auth/refresh",{},{auth:!0,signal:e})},logout(e=null){return he("/v1/auth/logout",{},{auth:!0,signal:e})},changePhoneSendCode(e,t=null){return he("/v1/auth/profile/change-phone/send-code",e,{auth:!0,signal:t})},changePhoneVerify(e,t=null){return he("/v1/auth/profile/change-phone/verify",e,{auth:!0,signal:t})}},Tt={list(e="en",t=null){return K(`/v1/blogs?lang=${e==="fa"?"fa":"en"}`,{signal:t})},show(e,t="en",a=null){const n=t==="fa"?"fa":"en";return K(`/v1/blogs/${encodeURIComponent(e)}?lang=${n}`,{signal:a})}},Et={list(e="en",t=null){return K(`/v1/services?lang=${e==="fa"?"fa":"en"}`,{signal:t})},show(e,t="en",a=null){const n=t==="fa"?"fa":"en";return K(`/v1/services/${encodeURIComponent(e)}?lang=${n}`,{signal:a})}},An={send(e,t=null){return he("/messages",e,{signal:t})}},Le=()=>oe()==="fa"?"fa":"en",ke=e=>typeof e=="string"?e.trim():"";function Be(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}const H=e=>Be(w(`home.${e}`)),Co="/asset/img/hero.jpg",Lo="https://cdn.prod.website-files.com/6768f6d314e679aeffeed929/679c4b211f44d535f9e7da9c_1.svg",xn=`
  <svg viewBox="0 0 24 24" width="20" height="20"
       fill="none" stroke="currentColor" stroke-width="1.8"
       stroke-linecap="round" stroke-linejoin="round"
       aria-hidden="true">
    <path d="M5 12h14"/>
    <path d="m13 6 6 6-6 6"/>
  </svg>
`,At=`
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
`,Po={en:{loadingServices:"Loading services...",noServices:"No services available.",servicesError:"Unable to load services. Please try again later.",loadingBlogs:"Loading articles...",noBlogs:"No articles available.",blogsError:"Unable to load articles. Please try again later."},fa:{loadingServices:"در حال دریافت خدمات...",noServices:"خدمتی برای نمایش وجود ندارد.",servicesError:"دریافت خدمات با خطا مواجه شد. بعداً دوباره تلاش کنید.",loadingBlogs:"در حال دریافت مقالات...",noBlogs:"مقاله‌ای برای نمایش وجود ندارد.",blogsError:"دریافت مقالات با خطا مواجه شد. بعداً دوباره تلاش کنید."}};function $a(e){const t=w(`home.${e}`);return t&&t!==`home.${e}`?t:Po[Le()][e]}function No(e){const t=ke(e);return t?(new DOMParser().parseFromString(t,"text/html").body.textContent||"").replace(/\s+/g," ").trim():""}function Cn(e){const t=ke(e&&typeof e=="object"?e.url||e.full_url||e.path||e.src||"":e);if(!t||/[<>"'\u0000-\u001f]/.test(t))return"";try{const a=new URL(Mt,window.location.origin).origin,n=/^https?:\/\//i.test(t)||t.startsWith("/")?t:/^(storage|uploads|images)\//i.test(t)?`/${t}`:`/storage/${t}`,o=new URL(n,a);return["http:","https:"].includes(o.protocol)?o.href:""}catch{return""}}function Ln(e){const t=(e==null?void 0:e.translations)||(e==null?void 0:e.service_translations)||(e==null?void 0:e.service_translates)||(e==null?void 0:e.blog_translations)||(e==null?void 0:e.translates);if(Array.isArray(t))return t.find(n=>(n==null?void 0:n.locale)===Le()||(n==null?void 0:n.lang)===Le()||(n==null?void 0:n.language)===Le())||{};if(t&&typeof t=="object"&&t[Le()])return t[Le()];const a=e==null?void 0:e.translation;return a&&(!a.locale&&!a.lang||a.locale===Le()||a.lang===Le())?a:{}}function Do(e){if(!e||typeof e!="object"||[!1,0,"0"].includes(e.is_active))return null;const t=Number(e.id);if(!Number.isSafeInteger(t)||t<=0)return null;const a=Ln(e),n=ke(a.name||a.title_1||a.title||e.name||e.title_1||e.title);return n?{id:t,name:n,description:ke(a.description_1||a.description||e.description_1||e.description),image:Cn(e.image_url||e.image_1_url||e.image||e.image_1||e.cover_image||"")}:null}function _o(e){if(!e||typeof e!="object")return null;const t=Ln(e),a=ke(t.title_1||e.title_1||t.title||e.title);if(!a)return null;const n=ke(e.slug||e.blog_slug||t.slug),o=n&&!/[\/\\?#\u0000-\u001f]/.test(n)?n:"",i=ke(e.date||e.published_at||e.created_at).slice(0,10);return{id:e.id??null,slug:o,title:a,image:Cn(e.image_1||e.image_1_url||e.image_url||e.cover_image_url||e.image||e.cover_image||""),date:/^\d{4}-\d{2}-\d{2}$/.test(i)?i:""}}function Ra(e,t){const a=(e==null?void 0:e.data)??e;if(Array.isArray(a))return a;const n=[a==null?void 0:a.data,a==null?void 0:a[t],a==null?void 0:a.items,a==null?void 0:a.results,e==null?void 0:e[t],e==null?void 0:e.results];for(const o of n)if(Array.isArray(o))return o;return[]}function ut(e,t,a="button-primary w-inline-block"){return`
    <a href="${e}" class="${a}">
      <span class="button-primary-text">
        ${H(t)}
      </span>
      <span class="button-icon-block">
        ${xn}
      </span>
    </a>
  `}function Io(){return`
    <section class="section hero-one-section dp-home-hero">
      <div class="w-layout-blockcontainer container-fluid w-container">
        <div class="hero-one-main-block">
          <div class="w-layout-grid hero-one-grid">

            <div class="hero-contant-block">
              <div class="hero-icon-inner-block">
                <div class="hero-one-icon-block">
                  <img
                    src="${Lo}"
                    loading="eager"
                    alt=""
                    class="hero-one-icon"
                    aria-hidden="true"
                  />
                </div>
              </div>

              <div class="hero-title-block">
                <h1 class="hero-title">
                  ${H("heroTitle")}
                </h1>
              </div>

              <div class="hero-description">
                <p class="section-description">
                  ${H("heroDescription")}
                </p>
              </div>

              <div class="hero-button-block">
                ${ut("/login","bookNow")}
              </div>
            </div>

            <div class="hero-image-block">
              <img
                src="${Co}"
                loading="eager"
                fetchpriority="high"
                alt="${H("heroImageAlt")}"
                class="hero-image"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  `}function qo(){return`
    <section class="section aboutus-section dp-home-about">
      <div class="w-layout-blockcontainer container w-container">
        <div class="main-about-block">
          <div class="w-layout-grid about-grid">

            <div class="about-image-block">
              <img
                src="/asset/img/about.jpg"
                loading="lazy"
                alt="${H("aboutImageAlt")}"
                class="about-image"
              />
              <img
                src="/asset/img/about-1.jpg"
                loading="lazy"
                alt="${H("aboutImageAlt")}"
                class="about-image-two"
              />
            </div>

            <div class="about-content-block">
              <div class="about-title-block">
                <div class="section-sub-text">
                  ${H("aboutEyebrow")}
                </div>
                <h2 class="section-title">
                  ${H("aboutTitle")}
                </h2>
              </div>

              <p class="aboutus-description">
                ${H("aboutDescription")}
              </p>

              <div class="about-two-list-block two">
                <ul role="list" class="about-two-list">

                  <li class="about-two-list-item">
                    <div class="about-two-icon-block" aria-hidden="true">
                      ${At}
                    </div>
                    <div class="about-list-two-info-block">
                      <h3 class="about-two-list-title">
                        ${H("aboutFeature1")}
                      </h3>
                    </div>
                  </li>

                  <li class="about-two-list-item last">
                    <div class="about-two-icon-block" aria-hidden="true">
                      ${At}
                    </div>
                    <div class="about-list-two-info-block">
                      <h3 class="about-two-list-title">
                        ${H("aboutFeature2")}
                      </h3>
                    </div>
                  </li>

                </ul>
              </div>

              <div class="contact-number-block">
                <div class="contact-number-text">
                  ${H("questions")}
                  <a
                    href="/contact-us"
                    class="about-contact-link"
                  >
                    ${H("contactUs")}
                  </a>
                </div>
              </div>

              <div class="about-button-block">
                ${ut("/about-us","readMore")}
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  `}function Ro(e){return e.map(t=>{const a=`/services/${t.id}`;return`
      <div class="w-dyn-list">
        <div role="list" class="w-dyn-items">
          <div role="listitem" class="w-dyn-item">

            <article class="service-info-main-block dp-home-service-card">

              <a href="${a}" class="service-link w-inline-block">

                <div class="service-info-inner-block">
                  <div class="service-icon-inner-block">

                    <div class="service-icon-block" aria-hidden="true">
                      ${At}
                    </div>

                    <h3 class="service-title-one">
                      ${Be(t.name)}
                    </h3>

                  </div>
                </div>

                <p
                  class="service-description"
                  style="display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%;max-width:100%;"
                >
                  ${Be(No(t.description))}
                </p>

              </a>

              <div class="service-link-block">
                <a href="${a}" class="link-block w-inline-block">
                  <span class="link-button">
                    ${H("readMore")}
                  </span>
                  <span class="link-border"></span>
                </a>
              </div>

            </article>

          </div>
        </div>
      </div>
    `}).join("")}function Mo(){return`
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
                    ${H("servicesEyebrow")}
                  </div>
                </div>

                <div class="section-title-grid">
                  <h2 class="section-title">
                    ${H("servicesTitle")}
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
                ${Be($a("loadingServices"))}
              </p>

              <div class="dp-home-section-link">
                ${ut("/service","allServices")}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  `}function Oo(){return`
    <section class="section contact-section dp-home-contact">
      <div class="w-layout-blockcontainer container-fluid w-container">
        <div class="w-layout-grid contact-grid">

          <div class="contact-info-block">
            <img
              src="/asset/img/contact.jpg"
              loading="lazy"
              alt="${H("contactImageAlt")}"
              class="contact-image-one"
            />
          </div>

          <div class="contact-form-block">
            <div class="contact-from-inner-block">

              <div class="contact-title-block-one">
                <div class="section-title-block">
                  <div class="section-sub-text two">
                    ${H("contactEyebrow")}
                  </div>
                  <h2 class="section-title text-white">
                    ${H("contactTitle")}
                  </h2>
                </div>
              </div>

              <div class="contact-from-block w-form">

                <form id="home-contact-form">

                  <div class="contact-main-block">

                    <div class="contact-inner-block">
                      <label class="dp-home-sr-only" for="home-first-name">
                        ${H("firstName")}
                      </label>
                      <input
                        id="home-first-name"
                        class="input-field bg-grey w-input"
                        name="first_name"
                        maxlength="120"
                        required
                        type="text"
                        autocomplete="given-name"
                        placeholder="${H("firstName")}"
                      />
                    </div>

                    <div class="contact-inner-block">
                      <label class="dp-home-sr-only" for="home-last-name">
                        ${H("lastName")}
                      </label>
                      <input
                        id="home-last-name"
                        class="input-field bg-grey w-input"
                        name="last_name"
                        maxlength="120"
                        required
                        type="text"
                        autocomplete="family-name"
                        placeholder="${H("lastName")}"
                      />
                    </div>

                  </div>

                  <div class="contact-main-block">

                    <div class="contact-inner-block">
                      <label class="dp-home-sr-only" for="home-email">
                        ${H("email")}
                      </label>
                      <input
                        id="home-email"
                        class="input-field bg-grey w-input"
                        name="email"
                        maxlength="255"
                        required
                        type="email"
                        autocomplete="email"
                        placeholder="${H("email")}"
                      />
                    </div>

                    <div class="contact-inner-block">
                      <label class="dp-home-sr-only" for="home-phone">
                        ${H("phone")}
                      </label>
                      <input
                        id="home-phone"
                        class="input-field bg-grey w-input"
                        name="phone"
                        maxlength="30"
                        required
                        type="tel"
                        autocomplete="tel"
                        placeholder="${H("phone")}"
                      />
                    </div>

                  </div>

                  <div class="contact-main-block one">

                    <label class="dp-home-sr-only" for="home-message">
                      ${H("message")}
                    </label>

                    <textarea
                      id="home-message"
                      class="text-area w-input"
                      name="message"
                      maxlength="5000"
                      required
                      placeholder="${H("message")}"
                    ></textarea>

                  </div>

                  <div class="contact-button-block">
                    <div class="button-submit">
                      <button
                        type="submit"
                        class="button-primary first dp-home-submit"
                      >
                        <span class="button-primary-text last">
                          ${H("submit")}
                        </span>
                        <span class="button-icon-block">
                          ${xn}
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
  `}function Bo(e){return e.map(t=>{const a=t.slug?`/post/${encodeURIComponent(t.slug)}`:"/blog";return`
      <div class="w-dyn-item" role="listitem">
        <article class="main-blog-block dp-home-blog-card">

          <a href="${a}" class="blog-link-block w-inline-block">

            <div class="blog-image-block">

              ${t.image?`
                    <img
                      src="${Be(t.image)}"
                      loading="lazy"
                      alt="${Be(t.title)}"
                      class="blog-image"
                    />
                  `:`
                    <span class="dp-home-blog-placeholder" aria-hidden="true">
                      ${At}
                    </span>
                  `}

              ${t.date?`
                    
                  `:""}

            </div>

            <h3 class="blog-title">
              ${Be(t.title)}
            </h3>

          </a>

          <div class="blog-button-block">
            ${ut(a,"readMore")}
          </div>

        </article>
      </div>
    `}).join("")}function Fo(){return`
    <section
      class="section blog-section dp-home-blog"
      id="home-blog"
    >
      <div class="w-layout-blockcontainer container w-container">
        <div class="blog-main-block">

          <div class="section-title-main-block">
            <div class="section-title-sub-text-block">
              <div class="section-sub-text">
                ${H("blogEyebrow")}
              </div>
            </div>

            <div class="section-title-grid">
              <h2 class="section-title">
                ${H("blogTitle")}
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
            ${Be($a("loadingBlogs"))}
          </p>

          <div class="dp-home-section-link">
            ${ut("/blog","allBlogs")}
          </div>

        </div>
      </div>
    </section>
  `}function jo(){return`
    <main
      class="dp-home-page"
      data-home-page
      data-no-translate
    >
      ${Io()}
      ${qo()}
      ${Mo()}
      ${Oo()}
      ${Fo()}
    </main>
  `}function Ho(){const e=document.querySelector("[data-home-page]");if(!e)return()=>{};const t=new AbortController,{signal:a}=t,n=e.querySelector("[data-home-services]"),o=e.querySelector("[data-home-services-note]"),i=e.querySelector("[data-home-blogs]"),r=e.querySelector("[data-home-blogs-note]"),s=e.querySelector("#home-contact-form"),l=e.querySelector("[data-home-contact-status]"),d=s.querySelector('[type="submit"]'),c=()=>!a.aborted&&e.isConnected;function u(h,b){h.textContent=$a(b),h.hidden=!1}async function p(){n.replaceChildren(),u(o,"loadingServices");try{const h=await Et.list(Le(),a);if(!c())return;const b=Ra(h,"services").map(Do).filter(Boolean).slice(0,6);n.innerHTML=Ro(b),b.length?o.hidden=!0:u(o,"noServices")}catch(h){if(!c())return;u(o,"servicesError"),console.error("Home services API:",h)}}async function m(){i.replaceChildren(),u(r,"loadingBlogs");try{const h=await Tt.list(Le(),a);if(!c())return;const b=Ra(h,"blogs").map(_o).filter(Boolean).slice(0,3);i.innerHTML=Bo(b),b.length?r.hidden=!0:u(r,"noBlogs")}catch(h){if(!c())return;u(r,"blogsError"),console.error("Home blogs API:",h)}}let f=!1;return s.addEventListener("submit",async h=>{if(h.preventDefault(),f||!c())return;if(l.hidden=!1,!s.checkValidity()){l.dataset.state="error",l.textContent=w("home.formRequired"),s.reportValidity();return}const b=new FormData(s),S={first_name:ke(b.get("first_name")),last_name:ke(b.get("last_name")),email:ke(b.get("email")),phone:ke(b.get("phone")),message:ke(b.get("message"))};if(Object.values(S).some(A=>!A)){l.dataset.state="error",l.textContent=w("home.formRequired");return}f=!0,d.disabled=!0,l.dataset.state="pending",l.textContent=w("home.formSending");try{if(await An.send(S,a),!c())return;s.reset(),l.dataset.state="success",l.textContent=w("home.formSent")}catch(A){if(!c())return;console.error("Home message API:",A),l.dataset.state="error",l.textContent=(A==null?void 0:A.status)===422?w("home.formValidationError"):(A==null?void 0:A.status)===408?w("home.formTimeout"):w("home.formError")}finally{f=!1,c()&&(d.disabled=!1)}},{signal:a}),p(),m(),()=>t.abort()}const Uo=[{slug:"dr-fiona-park",nameKey:"about.doctor1Name",roleKey:"about.doctor1Role",focusKey:"teamDetails.focus1",image:"https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/679c747877e9c706de65ead8_team%20image%20%285%29.png"},{slug:"dr-john-martin",nameKey:"about.doctor2Name",roleKey:"about.doctor2Role",focusKey:"teamDetails.focus2",image:"https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/679c746ed25099b1cddcf11a_team%20image%20%284%29.png"},{slug:"dr-archie-white",nameKey:"about.doctor3Name",roleKey:"about.doctor3Role",focusKey:"teamDetails.focus3",image:"https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/679c745448e62cb3588e5bce_team%20image%206.png"},{slug:"dr-maria-angel",nameKey:"about.doctor4Name",roleKey:"about.doctor4Role",focusKey:"teamDetails.focus4",image:"https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/679c7461bd9d9a04eda1761c_team%20image%20%281%29.png"}];function Pn(){return Uo.map(e=>({...e,name:w(e.nameKey),role:w(e.roleKey),focus:w(e.focusKey)}))}function zo(e){return Pn().find(t=>t.slug===e)||null}function Nn(){return oe()==="fa"?"fa":"en"}function xe(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function W(e){return xe(w(`about.${e}`))}function sa(e){return typeof e=="string"?e.trim():""}const ka=`
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
`,Vo=`
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
`;function Dn(){const e="/api".replace(/\/+$/,"");return/\/api\/v1$/i.test(e)?e:/\/api$/i.test(e)?`${e}/v1`:/\/v1$/i.test(e)?e:`${e}/api/v1`}function Yo(){return`${Dn()}/services?lang=${Nn()}`}function Go(e){const t=sa(e);if(!t)return"";try{const a=new URL(Dn(),window.location.origin).origin;let n=t;/^https?:\/\//i.test(t)||(t.startsWith("/")?n=t:/^(storage|uploads)\//i.test(t)?n=`/${t}`:n=`/storage/${t}`);const o=new URL(n,a);return["http:","https:"].includes(o.protocol)?o.href:""}catch{return""}}function Wo(e){var a;const t=Nn();return Array.isArray(e.translations)?e.translations.find(n=>n.locale===t||n.lang===t)||{}:(a=e.translations)!=null&&a[t]?e.translations[t]:e.translation&&(!e.translation.locale||e.translation.locale===t)?e.translation:{}}function Zo(e){if(!e||typeof e!="object")return null;const t=Number(e.id);if(!Number.isSafeInteger(t)||t<=0||e.is_active===!1||e.is_active===0||e.is_active==="0")return null;const a=Wo(e),n=sa(a.name||a.title||e.name||e.title);return n?{id:t,name:n,description:sa(a.description||e.description),image:Go(e.image_1_url||e.image_url||e.image_1||e.image||e.cover_image||""),isDemo:!1}:null}const Ko=["https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/67739cb05026dbf725d4e6e6_service%20image%20%281%29.webp","https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/6773a8df753ab7c72f9cc04f_service%20image%20%289%29.webp","https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/6773a948a802dec038145370_service%20image%20%282%29.webp","https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/6773a95f18d02159b11b502c_service%20image%20%284%29.webp","https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/6773a9540dd9d020f977e7e6_service%20image%20%283%29.webp"];function Qo(){return Ko.map((e,t)=>{const a=t+1;return{id:null,name:w(`about.demoTreatment${a}Title`),description:w(`about.demoTreatment${a}Description`),image:e,isDemo:!0}})}function Xo(){return`
    <section class="section breadcrumb-section">
      <div class="w-layout-blockcontainer container-fluid w-container">
        <div class="breadcrumb-block">
          <div class="w-layout-blockcontainer container w-container">

            <div class="breadcrumb-main-title-block">

              <div class="breadcrumb-title-block">
                <h1 class="breadcrumb-title">
                  ${W("breadcrumb")}
                </h1>
              </div>

              <div class="breadcrumb-subtext-block">

                <a href="/" class="breadcrumb-subtext">
                  ${W("home")}
                </a>

                <span class="breadcrumb-subtext">-</span>

                <span class="breadcrumb-subtext"
                      aria-current="page">
                  ${W("breadcrumb")}
                </span>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  `}function Jo(){return`
    <section class="section about-one-section">

      <div class="w-layout-blockcontainer container w-container">

        <div class="about-one-main-block">
          <div class="w-layout-grid about-one-grid">

            <div class="about-one-image-block">
              <img
                src="/asset/img/IMG_0943.jpg"
                alt="${W("imageAlt")}"
                class="about-one-image"
                loading="lazy"
              />
            </div>

            <div class="about-two-content-block">

              <div class="about-two-title-block">

                <div class="section-sub-text">
                  ${W("introEyebrow")}
                </div>

                <h2 class="section-title">
                  ${W("introTitle")}
                </h2>

              </div>

              <p class="about-two-description">
                ${W("introDescription")}
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
                        ${W("feature1Title")}
                      </h3>

                      <p class="about-two-list-description">
                        ${W("feature1Description")}
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
                        ${W("feature2Title")}
                      </h3>

                      <p class="about-two-list-description">
                        ${W("feature2Description")}
                      </p>

                    </div>

                  </li>

                </ul>

              </div>

              <div class="about-two-button-block">

                <a href="/contact-us"
                   class="button-primary w-inline-block">

                  <span class="button-primary-text">
                    ${W("contactButton")}
                  </span>

                  <span class="button-icon-block">
                    ${ka}
                  </span>

                </a>

              </div>

            </div>

          </div>
        </div>

      </div>

    </section>
  `}function ei(){return`
    <section class="section treatment-section two dp-about-treatment">

      <div class="w-layout-blockcontainer container-fluid w-container">
        <div class="main-grey-block two">

          <div class="w-layout-blockcontainer container w-container">
            <div class="main-treatment-block">

              <div class="treatment-title-block">

                <div class="section-sub-text">
                  ${W("treatmentEyebrow")}
                </div>

                <h2 class="section-title">
                  ${W("treatmentTitle")}
                </h2>

                <p class="dp-about-treatment-description">
                  ${W("treatmentDescription")}
                </p>

              </div>

              <div class="treatment-inner-block">

                <p
                  class="dp-about-services-status"
                  data-about-services-status
                  role="status"
                  aria-live="polite"
                >
                  ${W("servicesDemoNote")}
                </p>

                <div
                  class="tretment-tabs w-tabs dp-about-tabs"
                  data-about-services
                >

                  <div
                    class="tretment-menu w-tab-menu"
                    data-about-service-tabs
                    role="tablist"
                    aria-label="${W("treatmentTitle")}"
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
  `}function ti(e){const t=e.map((n,o)=>`
    <button
      type="button"
      id="dp-about-tab-${o}"
      data-about-tab="${o}"
      role="tab"
      aria-controls="dp-about-pane-${o}"
      aria-selected="${o===0}"
      tabindex="${o===0?"0":"-1"}"
      class="tretment-tab-link-main w-inline-block w-tab-link
             ${o===0?"w--current":""}"
    >

      <div class="tretment-link-main-block">
        <div class="tretment-inner-block">

          <div class="tretment-tab-link bg-white">
            <span>${xe(n.name)}</span>
          </div>

          <div class="tretment-round-block"></div>

        </div>
      </div>

    </button>
  `).join(""),a=e.map((n,o)=>{const i=n.isDemo?"/service":`/services/${n.id}`;return`
      <div
        id="dp-about-pane-${o}"
        data-about-pane="${o}"
        role="tabpanel"
        aria-labelledby="dp-about-tab-${o}"
        class="tretment-tab-pane w-tab-pane
               ${o===0?"w--tab-active":""}"
        ${o===0?"":"hidden"}
      >

        <div class="dp-about-service-card">

          ${n.image?`
                <img
                  src="${xe(n.image)}"
                  alt="${xe(n.name)}"
                  class="tretment-image"
                  loading="lazy"
                />
              `:`
                <div class="dp-about-no-image">
                  ${Vo}
                </div>
              `}

          <div class="dp-about-service-info">

            <h3>${xe(n.name)}</h3>

            ${n.description?`<p>${xe(n.description)}</p>`:""}

            <a
              href="${i}"
              class="dp-about-service-link"
            >
              ${W("serviceDetails")}
              ${ka}
            </a>

          </div>

        </div>

      </div>
    `}).join("");return{buttons:t,panes:a}}function ai(){const e=Pn();return`
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
                  ${W("teamEyebrow")}
                </div>

                <h2 class="section-title">
                  ${W("teamTitle")}
                </h2>

                <p class="dp-about-team-description">
                  ${W("teamDescription")}
                </p>

              </div>

              <a
                href="/contact-us"
                class="button-primary w-inline-block"
              >

                <span class="button-primary-text">
                  ${W("teamButton")}
                </span>

                <span class="button-icon-block">
                  ${ka}
                </span>

              </a>

            </div>

            <div class="dp-about-doctors-grid">

              ${e.map((t,a)=>`
                <a
                  href="/team/${encodeURIComponent(t.slug)}"
                  class="dp-about-doctor-card"
                  aria-label="${xe(t.name)}"
                >

                  <div class="dp-about-doctor-image-wrap">

                    <img
                      src="${xe(t.image)}"
                      alt="${xe(t.name)}"
                      class="dp-about-doctor-image"
                      loading="lazy"
                    />

                    <span class="dp-about-doctor-index">
                      ${String(a+1).padStart(2,"0")}
                    </span>

                  </div>

                  <div class="dp-about-doctor-info">

                    <span class="dp-about-doctor-role">
                      ${xe(t.role)}
                    </span>

                    <h3 class="dp-about-doctor-name">
                      ${xe(t.name)}
                    </h3>

                  </div>

                </a>
              `).join("")}

            </div>

            <p class="dp-about-doctors-note">
              ${W("teamDemoNote")}
            </p>

          </div>

        </div>
      </div>

    </section>
  `}function ni(){return`
    <section class="section faq-section dp-about-faq-section">

      <div class="w-layout-blockcontainer container-fluid w-container">
        <div class="main-grey-block">

          <div class="w-layout-blockcontainer container w-container">
            <div class="faq-main-block">

              <div class="section-title-main-block">

                <div class="section-title-sub-text-block">
                  <div class="section-sub-text">
                    ${W("faqEyebrow")}
                  </div>
                </div>

                <div class="section-title-grid">
                  <h2 class="section-title">
                    ${W("faqTitle")}
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
                              ${W(`faq${e}Question`)}
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
                            ${W(`faq${e}Answer`)}
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
  `}function oi(){return`
    <main class="dp-about-page"
          data-about-page
          data-no-translate>

      ${Xo()}
      ${Jo()}
      ${ei()}
      ${ai()}
      ${ni()}

    </main>
  `}function ii(){const e=document.querySelector("[data-about-page]");if(!e)return()=>{};const t=new AbortController,{signal:a}=t,n=e.querySelector("[data-about-services-status]"),o=e.querySelector("[data-about-services]"),i=e.querySelector("[data-about-service-tabs]"),r=e.querySelector("[data-about-service-panes]");let s=0;function l(u){const p=ti(u);i.innerHTML=p.buttons,r.innerHTML=p.panes,s=u.length,o.hidden=!1,d(0)}function d(u,p=!1){if(!Number.isInteger(u)||u<0||u>=s)return;const m=[...i.querySelectorAll("[data-about-tab]")],f=[...r.querySelectorAll("[data-about-pane]")];m.forEach((h,b)=>{const S=b===u;h.classList.toggle("w--current",S),h.setAttribute("aria-selected",String(S)),h.tabIndex=S?0:-1,S&&p&&h.focus()}),f.forEach((h,b)=>{const S=b===u;h.hidden=!S,h.classList.toggle("w--tab-active",S)})}async function c(){try{const u=await fetch(Yo(),{method:"GET",headers:{Accept:"application/json"},credentials:"omit",cache:"no-store",signal:a});if(!u.ok)throw new Error(`HTTP ${u.status}`);const p=await u.json();if((p==null?void 0:p.success)===!1||(p==null?void 0:p.status)===!1)throw new Error((p==null?void 0:p.message)||"API error");if(a.aborted||!e.isConnected)return;const m=p==null?void 0:p.data,h=(Array.isArray(m)?m:Array.isArray(m==null?void 0:m.data)?m.data:Array.isArray(m==null?void 0:m.services)?m.services:Array.isArray(m==null?void 0:m.items)?m.items:[]).map(Zo).filter(Boolean).slice(0,5);h.length>0&&(l(h),n.hidden=!0)}catch(u){if(a.aborted)return;console.info("About: showing demo treatments",u)}}return l(Qo()),e.addEventListener("click",u=>{var h;const p=u.target instanceof Element?u.target:(h=u.target)==null?void 0:h.parentElement;if(!p)return;const m=p.closest("[data-about-tab]");if(m){d(Number(m.dataset.aboutTab));return}const f=p.closest("[data-about-faq]");if(f){const b=f.getAttribute("aria-expanded")==="true";e.querySelectorAll("[data-about-faq]").forEach(S=>{const A=S===f&&!b;S.setAttribute("aria-expanded",String(A));const k=e.querySelector(`#dp-about-answer-${S.dataset.aboutFaq}`);k&&(k.hidden=!A);const T=S.querySelector(".dp-about-faq-symbol");T&&(T.textContent=A?"−":"+")})}},{signal:a}),i.addEventListener("keydown",u=>{if(!s)return;const p=u.target instanceof Element?u.target.closest("[data-about-tab]"):null;if(!p)return;const m=Number(p.dataset.aboutTab);let f=m;if(u.key==="ArrowRight"||u.key==="ArrowDown")f=(m+1)%s;else if(u.key==="ArrowLeft"||u.key==="ArrowUp")f=(m-1+s)%s;else if(u.key==="Home")f=0;else if(u.key==="End")f=s-1;else return;u.preventDefault(),d(f,!0)},{signal:a}),c(),()=>t.abort()}function mt(){const e=(document.documentElement.lang||"").toLowerCase();return e==="fa"||e.startsWith("fa-")?"fa":e==="en"||e.startsWith("en-")?"en":document.documentElement.dir==="rtl"?"fa":"en"}function Me(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function ri(e){if(typeof e!="string")return"";const t=e.trim();if(!t||/[<>"\u0000-\u001F]/.test(t))return"";try{const a=new URL(t,window.location.origin);return["http:","https:"].includes(a.protocol)?a.href:""}catch{return""}}function si(e,t){if(!e)return{iso:"",label:""};const a=String(e),n=/^\d{4}-\d{2}-\d{2}$/.test(a)?new Date(`${a}T12:00:00Z`):new Date(a);return Number.isNaN(n.getTime())?{iso:"",label:""}:{iso:n.toISOString().slice(0,10),label:new Intl.DateTimeFormat(t==="fa"?"fa-IR":"en-US",{year:"numeric",month:"long",day:"numeric",timeZone:"UTC"}).format(n)}}function li(e){var a;const t=e==null?void 0:e.data;return Array.isArray(t)?t:Array.isArray(t==null?void 0:t.data)?t.data:Array.isArray(t==null?void 0:t.blogs)?t.blogs:Array.isArray((a=t==null?void 0:t.blogs)==null?void 0:a.data)?t.blogs.data:null}function ci(e,t){if(!e||typeof e!="object")return null;const a=String(e.title_1??e.title??"").trim();if(!a)return null;const n=ri(e.image_1??e.image_url??e.image??""),o=String(e.slug??e.blog_slug??"").trim(),i=si(e.date??e.published_at??e.created_at,t);return{id:e.id??null,slug:o,title:a,image:n,dateISO:i.iso,date:i.label}}function di(e){const t=Me(e.title),a=e.slug||(e.id!=null?String(e.id):""),n=a?`/post/${encodeURIComponent(a)}`:"",o=e.image?`
      <img
        src="${Me(e.image)}"
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
          datetime="${Me(e.dateISO)}"
          class="blog-month-text one"
        >
          ${Me(e.date)}
        </time>
      </div>
    `:"",r=`
    <div class="blog-one-image-block">
      ${o}
    </div>

    ${i}

    <div class="blog-title-block">
      <h2 class="blog-name">${t}</h2>
    </div>
  `;return`
    <div role="listitem" class="w-dyn-item">
      ${n?`
            <a
              href="${Me(n)}"
              class="blog-one-link w-inline-block"
              aria-label="${Me(w("blog.readArticle"))}: ${t}"
            >
              ${r}
            </a>
          `:`
            <div class="blog-one-link w-inline-block">
              ${r}
            </div>
          `}
    </div>
  `}function ui(){return`
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
                    ${w("blog.title")}
                  </h1>
                </div>

                <div class="breadcrumb-subtext-block">

                  <a
                    class="breadcrumb-subtext"
                    href="/"
                  >
                    ${w("blog.home")}
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
                    ${w("blog.title")}
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
                  ${w("blog.latest")}
                </div>
              </div>

              <div class="section-title-grid">
                <h2
                  id="blog-section-heading"
                  class="section-title"
                >
                  ${w("blog.heading")}
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
              ${w("blog.loading")}
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
  `}function mi(){const e=document.querySelector("[data-blog-page]");if(!e)return()=>{};const t=e.querySelector("[data-blog-list]"),a=e.querySelector("[data-blog-status]"),n=new AbortController;let o=null,i=mt();function r(u){a.hidden=!1,a.textContent=u}function s(){a.hidden=!0,a.textContent=""}function l(){a.hidden=!1,a.innerHTML=`
      <p>${Me(w("blog.error"))}</p>

      <button
        type="button"
        class="dp-blog-retry"
        data-blog-retry
      >
        ${Me(w("blog.retry"))}
      </button>
    `}async function d(){o==null||o.abort(),o=new AbortController;const u=o.signal,p=mt();i=p,r(w("blog.loading")),t.innerHTML="";try{const m=await Tt.list(p,u);if(u.aborted||n.signal.aborted||!e.isConnected||mt()!==p)return;const f=li(m);if(!f)throw new Error("INVALID_BLOG_RESPONSE");const h=f.map(b=>ci(b,p)).filter(Boolean);if(f.length&&!h.length){console.warn("Blog items have no usable title_1:",f),l();return}if(h.length===0){r(w("blog.empty"));return}t.innerHTML=h.map(di).join(""),s()}catch(m){if(u.aborted||n.signal.aborted)return;console.error("Failed to load blog posts:",m),l()}}e.addEventListener("click",u=>{u.target.closest("[data-blog-retry]")&&(u.preventDefault(),d())},{signal:n.signal});const c=new MutationObserver(()=>{const u=mt();u!==i&&(i=u,d())});return c.observe(document.documentElement,{attributes:!0,attributeFilter:["lang","dir"]}),d(),()=>{n.abort(),o==null||o.abort(),c.disconnect()}}function pi(e=document){if(!e)return()=>{};const t=new AbortController,{signal:a}=t;return e.querySelectorAll("form").forEach(n=>{n.addEventListener("submit",o=>{o.preventDefault();const i=n.closest(".w-form"),r=i==null?void 0:i.querySelector(".w-form-done");r&&(r.style.display="none");let s=(i==null?void 0:i.querySelector(".dentistry-demo-message"))||n.querySelector(".dentistry-demo-message");s||(s=document.createElement("p"),s.className="dentistry-demo-message",s.setAttribute("role","status"),n.insertAdjacentElement("afterend",s)),s.textContent="This form is not connected to the server yet. No information was submitted.",s.style.display="block"},{signal:a})}),()=>t.abort()}function fi(e=document){if(!e)return()=>{};const t=new AbortController;return e.querySelectorAll(".w-tabs").forEach(a=>{var s;const n=[...a.querySelectorAll(".w-tab-menu .w-tab-link[data-w-tab]")],o=[...a.querySelectorAll(".w-tab-content .w-tab-pane[data-w-tab]")];if(!n.length)return;const i=a.querySelector(".w-tab-menu");i==null||i.setAttribute("role","tablist");function r(l){a.dataset.current=l,n.forEach(d=>{const c=d.dataset.wTab===l;d.classList.toggle("w--current",c),d.setAttribute("role","tab"),d.setAttribute("aria-selected",String(c)),d.setAttribute("aria-expanded",String(c)),d.tabIndex=c?0:-1;const u=d.querySelector(".tretment-tab-content-block");u&&(u.style.display=c?"block":"none");const p=d.querySelector(".ans-box");p&&(p.style.overflow="hidden",p.style.transition="height 300ms ease",p.style.height=c?`${p.scrollHeight}px`:"0px",p.setAttribute("aria-hidden",String(!c)));const m=d.querySelector(".plus");m&&(m.style.transform=c?"rotate(90deg)":"rotate(0deg)")}),o.forEach(d=>{const c=d.dataset.wTab===l;d.classList.toggle("w--tab-active",c),d.hidden=!c})}n.forEach((l,d)=>{l.addEventListener("click",c=>{c.preventDefault(),r(l.dataset.wTab)},{signal:t.signal}),l.addEventListener("keydown",c=>{const u=["ArrowRight","ArrowDown"].includes(c.key)?1:["ArrowLeft","ArrowUp"].includes(c.key)?-1:0;if(!u)return;c.preventDefault();const p=n[(d+u+n.length)%n.length];r(p.dataset.wTab),p.focus()},{signal:t.signal})}),r(a.dataset.current||((s=n.find(l=>l.classList.contains("w--current")))==null?void 0:s.dataset.wTab)||n[0].dataset.wTab)}),()=>t.abort()}function hi(e=document){if(!e)return()=>{};const t=new AbortController;let a=null;return e.querySelectorAll("a.w-lightbox").forEach(n=>{n.addEventListener("click",o=>{var d,c,u,p,m,f;o.preventDefault();const i=(d=n.querySelector('script.w-json[type="application/json"]'))==null?void 0:d.textContent;let r;try{r=(u=(c=JSON.parse(i||"{}").items)==null?void 0:c[0])==null?void 0:u.url}catch{}if(r||(r=((p=n.querySelector("img"))==null?void 0:p.currentSrc)||((m=n.querySelector("img"))==null?void 0:m.src)),!r)return;a==null||a.remove(),a=document.createElement("dialog"),a.className="dentistry-lightbox";const s=document.createElement("button");s.type="button",s.className="dentistry-lightbox-close",s.textContent="×",s.setAttribute("aria-label","Close image");const l=document.createElement("img");l.src=r,l.alt=((f=n.querySelector("img"))==null?void 0:f.alt)||"Gallery image",a.append(s,l),document.body.append(a),s.addEventListener("click",()=>a==null?void 0:a.close(),{once:!0}),a.addEventListener("click",h=>{h.target===a&&a.close()}),a.addEventListener("close",()=>{a==null||a.remove(),a=null},{once:!0}),a.showModal()},{signal:t.signal})}),()=>{t.abort(),a==null||a.remove()}}function Ot(e){const t=fi(e),a=pi(e),n=hi(e);return()=>{t(),a(),n()}}const gi={fa:{home:"خانه",blog:"وبلاگ",details:"جزئیات مقاله",otherBlogs:"سایر مقالات",loading:"در حال دریافت مقاله...",loadingBlogs:"در حال دریافت سایر مقالات...",notFound:"مقاله موردنظر پیدا نشد.",error:"دریافت مقاله با مشکل مواجه شد.",otherEmpty:"مقاله دیگری برای نمایش وجود ندارد.",otherError:"دریافت سایر مقالات با مشکل مواجه شد.",retry:"تلاش مجدد",gallery:"تصاویر مقاله"},en:{home:"Home",blog:"Dental Blog",details:"Blog Details",otherBlogs:"Other Blogs",loading:"Loading article...",loadingBlogs:"Loading other articles...",notFound:"Article not found.",error:"Unable to load this article.",otherEmpty:"No other articles available.",otherError:"Unable to load other articles.",retry:"Try Again",gallery:"Article Images"}};function ze(){return oe()==="fa"?"fa":"en"}function se(e,t=ze()){const a=`blog.details.${e}`,n=w(a);return n!==a?n:gi[t][e]}function Y(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function bi(e){return typeof e=="string"?e.trim():""}function He(...e){for(const t of e){const a=bi(t);if(a)return a}return""}function vi(){const t=window.location.pathname.replace(/\/+$/,"").match(/^\/post\/([^/]+)$/);if(!t)return"";try{return decodeURIComponent(t[1])}catch{return t[1]}}function Ma(e){if(e&&typeof e=="object"&&(e=e.image_url??e.url??e.src??e.path??""),typeof e!="string")return"";const t=e.trim();if(!t||/[<>"'\u0000-\u001F]/.test(t))return"";const a="/";try{const n=new URL(a,window.location.origin).origin,o=/^(storage|uploads|images)\//i.test(t)?`/${t}`:t,i=new URL(o,n);return["http:","https:"].includes(i.protocol)?i.href:""}catch{return""}}function yi(e,t){const a=e==null?void 0:e.translations;return Array.isArray(a)?a.find(n=>n.locale===t||n.lang===t)||{}:a&&typeof a=="object"?a[t]||{}:e!=null&&e.translation&&(!e.translation.locale||e.translation.locale===t)?e.translation:{}}function wi(e,t){if(!e)return{iso:"",label:""};const a=String(e),n=/^\d{4}-\d{2}-\d{2}$/.test(a)?new Date(`${a}T12:00:00Z`):new Date(a);return Number.isNaN(n.getTime())?{iso:"",label:""}:{iso:n.toISOString().slice(0,10),label:new Intl.DateTimeFormat(t==="fa"?"fa-IR":"en-US",{year:"numeric",month:"long",day:"numeric",timeZone:"UTC"}).format(n)}}function _n(e){if((e==null?void 0:e.status)===!1||(e==null?void 0:e.success)===!1){const t=new Error((e==null?void 0:e.message)||"BLOG_API_ERROR");throw t.status=(e==null?void 0:e.statusCode)||500,t}}function $i(e){var a,n;const t=e==null?void 0:e.data;return[t,t==null?void 0:t.data,t==null?void 0:t.blogs,(a=t==null?void 0:t.blogs)==null?void 0:a.data,t==null?void 0:t.posts,(n=t==null?void 0:t.posts)==null?void 0:n.data,t==null?void 0:t.items].find(Array.isArray)||[]}function ki(e,t,a){_n(e);const n=e==null?void 0:e.data,o=(n==null?void 0:n.blog)??(n==null?void 0:n.post)??(n==null?void 0:n.article)??(n==null?void 0:n.data)??n;if(Array.isArray(o))return o.find(r=>(String((r==null?void 0:r.slug)??(r==null?void 0:r.blog_slug))===t||String(r==null?void 0:r.id)===t)&&(!r.locale||r.locale===a))||null;if(!o||typeof o!="object")return null;const i=o.slug??o.blog_slug;return i!=null&&String(i)!==t&&String(o.id)!==t||o.locale&&o.locale!==a?null:o}function Oa(e,t){if(!e||typeof e!="object")return null;const a=yi(e,t),n=He(a.title_1,e.title_1,a.title,e.title);if(!n)return null;const o=Ma(e.image_1_url??e.image_1??e.image_url??e.image??a.image_1),i=[e.image_2_url??e.image_2,e.image_3_url??e.image_3,e.image_4_url??e.image_4,...Array.isArray(e.gallery)?e.gallery:[],...Array.isArray(e.images)?e.images:[]],r=[...new Set(i.map(Ma).filter(l=>l&&l!==o))],s=wi(e.date??e.published_at??e.created_at,t);return{id:e.id??null,slug:He(e.slug,e.blog_slug,a.slug),title1:n,description1:He(a.description_1,e.description_1,a.description,e.description,e.content),title2:He(a.title_2,e.title_2),description2:He(a.description_2,e.description_2),title3:He(a.title_3,e.title_3),description3:He(a.description_3,e.description_3),image1:o,gallery:r,date:s}}function Ba(e){if(!e)return"";if(!/<[a-z][\s\S]*?>/i.test(e))return e.split(/\n\s*\n/).filter(Boolean).map(i=>`
        <p>
          ${Y(i).replace(/\n/g,"<br>")}
        </p>
      `).join("");const t=new Set(["p","br","strong","b","em","i","u","s","h2","h3","h4","h5","h6","ul","ol","li","blockquote","a","div","span","hr"]),a=new Set(["script","style","iframe","object","embed","svg","math","form","input","button","template"]),n=document.createElement("template");n.innerHTML=e;function o(i){if(i.nodeType===Node.TEXT_NODE)return Y(i.textContent);if(i.nodeType!==Node.ELEMENT_NODE)return"";const r=i.tagName.toLowerCase();if(a.has(r))return"";const s=Array.from(i.childNodes).map(o).join("");if(!t.has(r))return s;if(r==="br"||r==="hr")return`<${r}>`;if(r==="a"){const l=i.getAttribute("href")||"";try{const d=new URL(l,window.location.origin);if(["http:","https:","mailto:","tel:"].includes(d.protocol))return`
            <a
              href="${Y(d.href)}"
              rel="noopener noreferrer"
            >
              ${s}
            </a>
          `}catch{}return s}return`<${r}>${s}</${r}>`}return Array.from(n.content.childNodes).map(o).join("")}function Si(e,t){const a=e.image1?`
      <img
        class="blog-single-main-image"
        src="${Y(e.image1)}"
        alt="${Y(e.title1)}"
        loading="eager"
        decoding="async"
      />
    `:"",n=e.date.label?`
      <div class="blog-one-meta">

        <div class="blog-one-data-block">
          <time
            class="blog-date-one"
            datetime="${Y(e.date.iso)}"
          >
            ${Y(e.date.label)}
          </time>
        </div>

      </div>
    `:"",o=e.gallery.length?`
      <div
        class="blog-extra-image-list"
        aria-label="${Y(se("gallery",t))}"
      >

        ${e.gallery.map(r=>`
          <div class="w-dyn-list">
            <div class="w-dyn-items" role="list">

              <div class="w-dyn-item" role="listitem">

                <a
                  href="${Y(r)}"
                  class="blog-image-lightbox w-inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >

                  <img
                    class="blog-image-extra"
                    src="${Y(r)}"
                    alt="${Y(e.title1)}"
                    loading="lazy"
                  />

                </a>

              </div>

            </div>
          </div>
        `).join("")}

      </div>
    `:"";function i(r,s){return!r&&!s?"":`
      <div class="w-richtext dp-blog-more-content">

        ${r?`<h3>${Y(r)}</h3>`:""}

        ${Ba(s)}

      </div>
    `}return`
    <div class="w-dyn-list">

      <div class="w-dyn-items" role="list">

        <div class="w-dyn-item" role="listitem">

          <div class="blog-single-info-inner-block">

            ${a}

            ${n}

            <h1 class="blog-single-title">
              ${Y(e.title1)}
            </h1>

            ${e.description1?`
                  <div class="blog-richtext w-richtext">
                    ${Ba(e.description1)}
                  </div>
                `:""}

          </div>

        </div>

      </div>

    </div>

    ${o}

    ${i(e.title2,e.description2)}

    ${i(e.title3,e.description3)}
  `}function Ti(e,t){return`
    <div class="w-dyn-list">

      <div
        class="w-dyn-items dp-other-blogs-list"
        role="list"
      >

        ${e.map(a=>{const n=`
            ${a.image1?`
                  <img
                    class="blog-resent-image"
                    src="${Y(a.image1)}"
                    alt="${Y(a.title1)}"
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
                ${Y(a.title1)}
              </h3>

              ${a.date.label?`
                    <div class="recent-date-block">
                      <time
                        class="recent-date"
                        datetime="${Y(a.date.iso)}"
                      >
                        ${Y(a.date.label)}
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
                      ${n}
                    </a>
                  `:`
                    <div class="recent-link">
                      ${n}
                    </div>
                  `}

            </div>
          `}).join("")}

      </div>

    </div>
  `}function Ei(){const e=ze();return`
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
                    ${Y(se("blog",e))}
                  </h2>

                </div>

                <div class="breadcrumb-subtext-block">

                  <a
                    href="/"
                    class="breadcrumb-subtext"
                    data-blog-home
                  >
                    ${Y(se("home",e))}
                  </a>

                  <span class="breadcrumb-subtext">
                    -
                  </span>

                  <a
                    href="/blog"
                    class="breadcrumb-subtext"
                    data-blog-link
                  >
                    ${Y(se("blog",e))}
                  </a>

                  <span class="breadcrumb-subtext">
                    -
                  </span>

                  <span
                    class="breadcrumb-subtext"
                    data-blog-crumb
                    aria-current="page"
                  >
                    ${Y(se("details",e))}
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
        ${Y(se("loading",e))}
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
              aria-label="${Y(se("otherBlogs",e))}"
              data-other-blogs-aside
            >

              <div class="blog-single-sticky-block">

                <div class="service-single-left-block last">

                  <div class="service-single-box-title">

                    <h3
                      class="service-single-title"
                      data-other-blogs-heading
                    >
                      ${Y(se("otherBlogs",e))}
                    </h3>

                  </div>

                  <!-- OTHER BLOGS FROM API -->

                  <div
                    data-other-blogs-list
                    aria-live="polite"
                  >
                    <p class="dp-other-blogs-message">
                      ${Y(se("loadingBlogs",e))}
                    </p>
                  </div>

                </div>

              </div>

            </aside>

          </div>

        </div>

      </section>

    </main>
  `}function Ai(){const e=document.querySelector("[data-blog-details-page]");if(!e)return()=>{};const t=new AbortController;let a=null,n=ze();const o=vi(),i=e.querySelector("[data-blog-status]"),r=e.querySelector("[data-blog-section]"),s=e.querySelector("[data-blog-article]"),l=e.querySelector("[data-other-blogs-list]");e.querySelector("[data-other-blogs-heading]");const d=e.querySelector("[data-other-blogs-aside]"),c=Ot(document.getElementById("app"));function u(A,k=!1){if(i.hidden=!1,i.textContent=A,k){const T=document.createElement("button");T.type="button",T.className="dp-blog-details-retry",T.dataset.blogRetry="",T.textContent=se("retry"),i.appendChild(T)}}function p(){i.hidden=!0,i.textContent=""}function m(A){const k={"[data-blog-heading]":"blog","[data-blog-home]":"home","[data-blog-link]":"blog","[data-blog-crumb]":"details","[data-other-blogs-heading]":"otherBlogs"};for(const[T,N]of Object.entries(k)){const x=e.querySelector(T);x&&(x.textContent=se(N,A))}d.setAttribute("aria-label",se("otherBlogs",A))}function f(A){r.hidden=!0,s.innerHTML="",l.innerHTML=`
      <p class="dp-other-blogs-message">
        ${Y(se("loadingBlogs",A))}
      </p>
    `}async function h(A,k,T){try{const N=await Tt.list(A,T);if(T.aborted||t.signal.aborted||!e.isConnected||ze()!==A)return;_n(N);const $=$i(N).filter(L=>!L.locale||L.locale===A).map(L=>Oa(L,A)).filter(Boolean).filter(L=>!(k.id!=null&&L.id!=null&&String(L.id)===String(k.id)||L.slug&&(L.slug===o||L.slug===k.slug))),y=[],C=new Set;for(const L of $){const v=L.id!=null?`id:${L.id}`:L.slug?`slug:${L.slug}`:`title:${L.title1}`;C.has(v)||(C.add(v),y.push(L))}const g=y.slice(0,5);if(!g.length){l.innerHTML=`
          <p class="dp-other-blogs-message">
            ${Y(se("otherEmpty",A))}
          </p>
        `;return}l.innerHTML=Ti(g,A)}catch(N){if(T.aborted||t.signal.aborted)return;console.error("Other blogs API error:",N),l.innerHTML=`
        <p class="dp-other-blogs-message">
          ${Y(se("otherError",A))}
        </p>
      `}}async function b(){a==null||a.abort(),a=new AbortController;const A=a.signal,k=ze();if(n=k,m(k),f(k),!o){u(se("notFound",k));return}u(se("loading",k));try{const T=await Tt.show(o,k,A);if(A.aborted||t.signal.aborted||!e.isConnected||ze()!==k)return;const N=ki(T,o,k),x=Oa(N,k);if(!x){u(se("notFound",k));return}s.innerHTML=Si(x,k),r.hidden=!1,p(),document.title=`${x.title1} | Dentistry`,h(k,x,A)}catch(T){if(A.aborted||t.signal.aborted)return;console.error("Blog Details API error:",T);const N=(T==null?void 0:T.status)===404||(T==null?void 0:T.statusCode)===404;u(se(N?"notFound":"error",k),!N)}}e.addEventListener("click",A=>{A.target instanceof Element&&A.target.closest("[data-blog-retry]")&&(A.preventDefault(),b())},{signal:t.signal});const S=new MutationObserver(()=>{ze()!==n&&b()});return S.observe(document.documentElement,{attributes:!0,attributeFilter:["lang","dir"]}),b(),()=>{t.abort(),a==null||a.abort(),S.disconnect(),typeof c=="function"&&c()}}const $e=e=>w(`contactPage.${e}`);function ot(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}const re=e=>ot($e(e)),xi=`
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
`,Ci=`
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
`,Li=`
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
`,Fa="abd123@email.com",Pi="(21) 220-59-365",Ni="tel:+982122059365";function Di(){return[{label:$e("addressLabel"),detail:$e("addressText"),icon:xi,href:null},{label:$e("emailLabel"),detail:Fa,icon:Ci,href:`mailto:${Fa}`},{label:$e("phoneLabel"),detail:Pi,icon:Li,href:Ni}]}function _i(e){return`
    <div class="contactus-info-inner-block">

      <div class="contactus-info-inner-icon-block">
        <div class="w-embed" aria-hidden="true">
          ${e.icon}
        </div>
      </div>

      <div class="contact-info-details-block">

        <h2 class="contact-title">
          ${ot(e.label)}
        </h2>

        ${e.href?`
              <a
                href="${ot(e.href)}"
                class="contact-link"
              >
                ${ot(e.detail)}
              </a>
            `:`
              <div class="contact-subtext">
                ${ot(e.detail)}
              </div>
            `}

      </div>

    </div>
  `}function Ii(){return`
    <section
      class="section breadcrumb-section"
      aria-label="${re("breadcrumb")}"
    >

      <div class="w-layout-blockcontainer container-fluid w-container">

        <div class="breadcrumb-block two">

          <div class="w-layout-blockcontainer container w-container">

            <div class="breadcrumb-main-title-block">

              <div class="breadcrumb-title-block">
                <h1 class="breadcrumb-title">
                  ${re("contact")}
                </h1>
              </div>

              <div class="breadcrumb-subtext-block">

                <a
                  href="/"
                  class="breadcrumb-subtext"
                >
                  ${re("home")}
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
                  ${re("contact")}
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  `}function qi(){return`
    <section
      class="section contact-section-one"
      aria-label="${re("contactInformation")}"
    >

      <div class="w-layout-blockcontainer container w-container">

        <div class="w-layout-grid contact-grid-one">

          ${Di().map(_i).join("")}

        </div>

      </div>

    </section>
  `}function Ri(){return`
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
              alt="${re("imageAlt")}"
              loading="lazy"
              decoding="async"
              class="contact-image-two"
            />

          </div>

          <!-- CONTACT FORM CONTENT -->

          <div class="contact-form-block-two">

            <div class="contact-title-block-two">

              <div class="section-sub-text">
                ${re("touch")}
              </div>

              <h2
                id="contact-form-heading"
                class="section-title"
              >
                ${re("heading")}
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
                        ${re("firstName")}
                      </label>

                      <input
                        id="contact-first-name"
                        class="input-field w-input"
                        name="first_name"
                        type="text"
                        placeholder="${re("firstName")}"
                        maxlength="255"
                        autocomplete="given-name"
                        required
                      />

                    </div>

                    <div class="dentistry-contact-field">

                      <label for="contact-last-name">
                        ${re("lastName")}
                      </label>

                      <input
                        id="contact-last-name"
                        class="input-field w-input"
                        name="last_name"
                        type="text"
                        placeholder="${re("lastName")}"
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
                        ${re("email")}
                      </label>

                      <input
                        id="contact-email"
                        class="input-field w-input"
                        name="email"
                        type="email"
                        placeholder="${re("email")}"
                        maxlength="255"
                        autocomplete="email"
                        required
                      />

                    </div>

                    <div class="dentistry-contact-field">

                      <label for="contact-phone">
                        ${re("phone")}
                      </label>

                      <input
                        id="contact-phone"
                        class="input-field w-input"
                        name="phone"
                        type="tel"
                        inputmode="tel"
                        placeholder="${re("phonePlaceholder")}"
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
                      ${re("message")}
                    </label>

                    <textarea
                      id="contact-message"
                      class="text-area w-input"
                      name="message"
                      placeholder="${re("message")}"
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
                        ${re("submit")}
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
  `}function Mi(){return`
    <main
      class="dentistry-contact-page"
      data-no-translate
    >

      ${Ii()}

      ${qi()}

      ${Ri()}

    </main>
  `}function Oi(){const e=document.querySelector(".dentistry-contact-page #email-form");if(!e)return()=>{};const t=new AbortController,a=e.querySelector("[data-contact-status]"),n=e.querySelector("[data-contact-submit]"),o=e.querySelector("[data-contact-submit-label]");let i=!1,r=null;function s(m,f="error"){a.hidden=!1,a.textContent=m,a.dataset.status=f,a.setAttribute("role",f==="error"?"alert":"status")}function l(){a.hidden=!0,a.textContent="",a.removeAttribute("data-status")}function d(){const m=new FormData(e);return{first_name:String(m.get("first_name")??"").trim(),last_name:String(m.get("last_name")??"").trim(),email:String(m.get("email")??"").trim(),phone:String(m.get("phone")??"").trim(),message:String(m.get("message")??"").trim()}}function c(){for(const m of e.elements)typeof m.setCustomValidity=="function"&&m.setCustomValidity("")}function u(m){if(!m||typeof m!="object")return!1;let f=null;for(const[h,b]of Object.entries(m)){const S=e.elements.namedItem(h);if(!S||typeof S.setCustomValidity!="function")continue;const A=Array.isArray(b)?String(b[0]??""):String(b??"");A&&(S.setCustomValidity(A),f||(f=S))}return f?(f.reportValidity(),f.focus(),!0):!1}function p(m){i=m,n.disabled=m,e.setAttribute("aria-busy",m?"true":"false"),o.textContent=$e(m?"sending":"submit")}return e.addEventListener("submit",async m=>{if(m.preventDefault(),i||t.signal.aborted||(l(),c(),!e.reportValidity()))return;const f=d();if(!f.first_name||!f.last_name||!f.email||!f.phone||!f.message){s($e("validation"));return}r=new AbortController;const h=r.signal;p(!0);try{const b=await An.send(f,h);if(h.aborted||t.signal.aborted||!e.isConnected)return;if((b==null?void 0:b.success)===!1||(b==null?void 0:b.status)===!1||Number(b==null?void 0:b.statusCode)>=400){const S=new Error((b==null?void 0:b.message)||$e("error"));throw S.status=Number(b==null?void 0:b.statusCode)||0,S.errors=(b==null?void 0:b.errors)||null,S}e.reset(),s($e("success"),"success")}catch(b){if(h.aborted||t.signal.aborted||!e.isConnected)return;console.error("Contact message failed:",b),(b==null?void 0:b.status)===422||b!=null&&b.errors?(u(b==null?void 0:b.errors),s($e("validation"),"error")):s($e("error"),"error")}finally{!t.signal.aborted&&e.isConnected&&p(!1),r=null}},{signal:t.signal}),e.addEventListener("input",m=>{const f=m.target;f&&typeof f.setCustomValidity=="function"&&f.setCustomValidity(""),i||l()},{signal:t.signal}),()=>{t.abort(),r==null||r.abort()}}function Qe(){const e=(document.documentElement.lang||"").toLowerCase();return e==="fa"||e.startsWith("fa-")?"fa":e==="en"||e.startsWith("en-")?"en":document.documentElement.dir==="rtl"?"fa":"en"}const Bi={fa:{home:"خانه",service:"خدمات",ourServices:"خدمات ما",heading:"خدمات تخصصی دندان‌پزشکی",loading:"در حال دریافت خدمات...",empty:"در حال حاضر خدمتی برای نمایش وجود ندارد.",error:"دریافت خدمات با مشکل مواجه شد.",retry:"تلاش مجدد"},en:{home:"Home",service:"Services",ourServices:"Our Services",heading:"Restorative Dental Care Expertise",loading:"Loading services...",empty:"No services are available at the moment.",error:"Unable to load services.",retry:"Try Again"}};function Ae(e,t=Qe()){var a;return((a=Bi[t])==null?void 0:a[e])||e}function lt(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Fi(e,t){if(typeof e=="string")return e.trim();if(e&&typeof e=="object"){const a=e[t];return typeof a=="string"?a.trim():""}return""}function Vt(e,...t){for(const a of t){const n=Fi(a,e);if(n)return n}return""}function ji(e,t){const a=e==null?void 0:e.translations;return Array.isArray(a)?a.find(n=>(n==null?void 0:n.lang)===t||(n==null?void 0:n.locale)===t||(n==null?void 0:n.language)===t)||{}:a&&typeof a=="object"?a[t]||{}:(e==null?void 0:e.translation)||{}}function Hi(){const e="/";try{return new URL(e,window.location.origin).origin}catch{return window.location.origin}}function ja(e){if(e&&typeof e=="object"&&(e=e.url??e.full_url??e.src??e.path??""),typeof e!="string")return"";const t=e.trim();if(!t||/[<>"'\u0000-\u001F]/.test(t))return"";let a=t;/^(storage|uploads|images)\//i.test(a)&&(a=`/${a}`);try{const n=new URL(a,Hi());return n.protocol!=="http:"&&n.protocol!=="https:"?"":n.href}catch{return""}}function Ui(e){var a;const t=e==null?void 0:e.data;return Array.isArray(t)?t:Array.isArray(t==null?void 0:t.data)?t.data:Array.isArray(t==null?void 0:t.services)?t.services:Array.isArray((a=t==null?void 0:t.services)==null?void 0:a.data)?t.services.data:Array.isArray(t==null?void 0:t.items)?t.items:null}function zi(e,t){if(!e||typeof e!="object"||Array.isArray(e))return null;const a=ji(e,t),n=Vt(t,a.name,a.title,e[`name_${t}`],e.name,e.title,e.service_name);if(!n)return null;const o=Vt(t,a.description,e[`description_${t}`],e.description),i=ja(e.image_1_url??e.image_1??e.image_url??e.image??""),r=ja(e.image_2_url??e.image_2??"");return{id:e.id??null,slug:Vt(t,e.slug,e.service_slug,a.slug),name:n,description:o,duration:e.duration!=null?Number(e.duration):null,price:e.price!=null?Number(e.price):null,depositAmount:e.deposit_amount!=null?Number(e.deposit_amount):null,image:i,secondImage:r}}const Ha=`
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
`,Vi=`
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
`;function Yi(e){const t=lt(e.name),a=e.id!=null?`/services/${encodeURIComponent(String(e.id))}`:"",o=`
    <div class="service-three-image-block">

      ${e.image?`
      <img
        src="${lt(e.image)}"
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
        ${Ha}
      </div>
    `}

      <div class="service-three-icon">
        <div class="service-icon-one w-embed">
          ${Ha}
        </div>
      </div>

    </div>

    <div class="service-three-info-block">

      <h2 class="service-three-title-block">
        ${t}
      </h2>

      <div class="service-three-arrow-block">
        <div class="w-embed">
          ${Vi}
        </div>
      </div>

    </div>
  `;return`
    <div class="w-dyn-item" role="listitem">

      ${a?`
            <a
              href="${lt(a)}"
              class="service-three-link w-inline-block"
            >
              ${o}
            </a>
          `:`
            <div class="service-three-link w-inline-block">
              ${o}
            </div>
          `}

    </div>
  `}function Gi(){const e=Qe();return`
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
                    ${Ae("ourServices",e)}
                  </h1>

                </div>

                <div class="breadcrumb-subtext-block">

                  <a
                    href="/"
                    class="breadcrumb-subtext"
                    data-service-home
                  >
                    ${Ae("home",e)}
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
                    ${Ae("service",e)}
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
                  ${Ae("ourServices",e)}
                </div>

              </div>

              <div class="section-title-grid">

                <h2
                  class="section-title"
                  data-service-heading
                >
                  ${Ae("heading",e)}
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
              ${Ae("loading",e)}
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
  `}function Wi(){const e=document.querySelector("[data-service-page]");if(!e)return()=>{};const t=new AbortController;let a=null,n=Qe();const o=e.querySelector("[data-service-list]"),i=e.querySelector("[data-service-status]"),r=Ot(document.getElementById("app"));function s(m){const f={"[data-service-title]":"ourServices","[data-service-home]":"home","[data-service-breadcrumb]":"service","[data-service-subtitle]":"ourServices","[data-service-heading]":"heading"};for(const[h,b]of Object.entries(f)){const S=e.querySelector(h);S&&(S.textContent=Ae(b,m))}}function l(m){i.hidden=!1,i.textContent=m}function d(){i.hidden=!0,i.textContent=""}function c(m){i.hidden=!1,i.innerHTML=`
      <p>
        ${lt(Ae("error",m))}
      </p>

      <button
        type="button"
        class="dp-service-retry"
        data-service-retry
      >
        ${lt(Ae("retry",m))}
      </button>
    `}async function u(){a==null||a.abort(),a=new AbortController;const m=a.signal,f=Qe();n=f,s(f),o.innerHTML="",l(Ae("loading",f));try{const h=await Et.list(f,m);if(m.aborted||t.signal.aborted||!e.isConnected||Qe()!==f)return;if((h==null?void 0:h.status)===!1||(h==null?void 0:h.success)===!1)throw new Error(h.message||"SERVICE_API_ERROR");const b=Ui(h);if(!b){console.warn("Invalid services API response:",h),c(f);return}const S=b.map(A=>zi(A,f)).filter(Boolean);if(b.length>0&&S.length===0){console.warn("Services returned without valid names:",b),c(f);return}if(S.length===0){l(Ae("empty",f));return}o.innerHTML=S.map(Yi).join(""),d()}catch(h){if(m.aborted||t.signal.aborted)return;console.error("Failed to load services:",h),c(f)}}e.addEventListener("click",m=>{m.target.closest("[data-service-retry]")&&(m.preventDefault(),u())},{signal:t.signal});const p=new MutationObserver(()=>{Qe()!==n&&u()});return p.observe(document.documentElement,{attributes:!0,attributeFilter:["lang","dir"]}),u(),()=>{t.abort(),a==null||a.abort(),p.disconnect(),typeof r=="function"&&r()}}function Ve(){const e=(document.documentElement.lang||"").toLowerCase();return e==="fa"||e.startsWith("fa-")?"fa":"en"}const Zi={fa:{home:"خانه",services:"خدمات دندان‌پزشکی",details:"جزئیات خدمت",otherServices:"سایر خدمات",loading:"در حال دریافت اطلاعات خدمت...",notFound:"خدمت موردنظر پیدا نشد.",error:"دریافت اطلاعات خدمت با مشکل مواجه شد.",retry:"تلاش مجدد",back:"بازگشت به خدمات"},en:{home:"Home",services:"Dental Services",details:"Service Details",otherServices:"Our Services",loading:"Loading service details...",notFound:"Service not found.",error:"Unable to load service details.",retry:"Try Again",back:"Back to Services"}};function be(e,t=Ve()){var a;return((a=Zi[t])==null?void 0:a[e])||e}function _e(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Ki(){const t=location.pathname.replace(/\/+$/,"").match(/^\/services\/([1-9]\d*)$/);return t?t[1]:""}function Qi(){const e="/";try{return new URL(e,location.origin).origin}catch{return location.origin}}function Ua(e){if(e&&typeof e=="object"&&(e=e.url??e.full_url??e.src??e.path??""),typeof e!="string")return"";const t=e.trim();if(!t||/[<>"'\u0000-\u001F]/.test(t))return"";const a=/^(storage|uploads|images)\//i.test(t)?`/${t}`:t;try{const n=new URL(a,Qi());return["http:","https:"].includes(n.protocol)?n.href:""}catch{return""}}function ct(e){return typeof e=="string"?e.trim():""}function Yt(...e){for(const t of e){const a=ct(t);if(a)return a}return""}function za(e){const t=ct(e);return t?t.split(/\n\s*\n/).filter(Boolean).map(a=>`
      <p>
        ${_e(a).replace(/\n/g,"<br>")}
      </p>
    `).join(""):""}function In(e){if((e==null?void 0:e.status)===!1||(e==null?void 0:e.success)===!1)throw new Error((e==null?void 0:e.message)||"SERVICE_API_ERROR")}function Xi(e){var n;const t=e==null?void 0:e.data;return[t,t==null?void 0:t.data,t==null?void 0:t.services,(n=t==null?void 0:t.services)==null?void 0:n.data,t==null?void 0:t.items].find(Array.isArray)??[]}function Ji(e,t,a){In(e);const n=e==null?void 0:e.data,o=(n==null?void 0:n.service)??(n==null?void 0:n.data)??n;if(Array.isArray(o)){const i=o.filter(r=>String(r==null?void 0:r.id)===String(t));return i.find(r=>r.locale===a)??i.find(r=>r.locale==null)??null}return o&&typeof o=="object"&&String(o.id)===String(t)&&(o.locale==null||o.locale===a)?o:null}function Va(e){if(!e||typeof e!="object"||Array.isArray(e))return null;const t=Yt(e.name,e.title_1);return!t||e.id==null?null:{id:e.id,locale:ct(e.locale),name:t,title1:Yt(e.title_1,e.name),description1:Yt(e.description_1,e.description),image1:Ua(e.image_1_url??e.image_1),title2:ct(e.title_2),description2:ct(e.description_2),image2:Ua(e.image_2_url??e.image_2)}}const er=`
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
`,tr=`
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
`;function ar(e,t){const a=[];return a.length?`
    <div class="dp-service-facts">
      ${a.map(n=>`
        <div class="dp-service-fact">

          <span class="dp-service-fact-label">
            ${_e(n.label)}
          </span>

          <strong class="dp-service-fact-value">
            ${_e(n.value)}
          </strong>

        </div>
      `).join("")}
    </div>
  `:""}function nr(e,t){const a=_e(e.title1),n=e.image1?`
      <img
        class="service-single-image"
        src="${_e(e.image1)}"
        alt="${a}"
        loading="eager"
        decoding="async"
      />
    `:`
      <div
        class="service-single-image dp-service-details-placeholder"
        aria-hidden="true"
      >
        ${er}
      </div>
    `,o=e.description1?`
      <div class="service-rich-one w-richtext">
        ${za(e.description1)}
      </div>
    `:"",r=!!(e.title2||e.description2||e.image2)?`
      <div class="service-info-two dp-service-section-two">

        ${e.image2?`
              <img
                class="service-image-two"
                src="${_e(e.image2)}"
                alt="${_e(e.title2||e.name)}"
                loading="lazy"
                decoding="async"
              />
            `:""}

        ${e.title2||e.description2?`
              <div class="w-richtext dp-service-second-content">

                ${e.title2?`
                      <h2 class="dp-service-second-title">
                        ${_e(e.title2)}
                      </h2>
                    `:""}

                ${za(e.description2)}

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

            ${n}

            ${o}

            <!-- SERVICE DETAILS -->

            ${ar()}

            <!-- SECTION 2 -->

            ${r}

          </div>

        </div>
      </div>
    </div>
  `}function or(e,t){return`
    <div class="service-list-wrap w-dyn-list">

      <div
        class="service-list w-dyn-items"
        role="list"
      >

        ${e.map(a=>{const n=String(a.id)===String(t);return`
            <div class="w-dyn-item" role="listitem">

              <a
                href="/services/${encodeURIComponent(String(a.id))}"
                class="service-list-link w-inline-block ${n?"w--current":""}"
                ${n?'aria-current="page"':""}
              >

                <div class="service-list-word">

                  <div class="service-dot-block"></div>

                  <h4 class="service-single-list-name">
                    ${_e(a.name)}
                  </h4>

                </div>

                <div class="service-single-icon-box">
                  <span class="service-single-icon">
                    ${tr}
                  </span>
                </div>

              </a>
            </div>
          `}).join("")}

      </div>
    </div>
  `}function ir(){const e=Ve();return`
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
                    ${be("services",e)}
                  </h1>

                </div>

                <div class="breadcrumb-subtext-block">

                  <a
                    href="/"
                    class="breadcrumb-subtext"
                    data-details-home
                  >
                    ${be("home",e)}
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
                    ${be("services",e)}
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
                    ${be("details",e)}
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
        ${be("loading",e)}
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
                        ${be("otherServices",e)}
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
  `}function rr(){const e=document.querySelector("[data-service-details-page]");if(!e)return()=>{};const t=new AbortController;let a=null,n=Ve();const o=Ki(),i=e.querySelector("[data-details-status]"),r=e.querySelector("[data-details-section]"),s=e.querySelector("[data-details-content]"),l=e.querySelector("[data-details-sidebar]"),d=e.querySelector("[data-details-sidebar-box]"),c=Ot(document.getElementById("app"));function u(A){const k={"[data-details-page-title]":"services","[data-details-home]":"home","[data-details-services]":"services","[data-details-breadcrumb]":"details","[data-details-sidebar-title]":"otherServices"};for(const[T,N]of Object.entries(k)){const x=e.querySelector(T);x&&(x.textContent=be(N,A))}}function p(A,k=!1){if(i.hidden=!1,i.textContent=A,k){const T=document.createElement("button");T.type="button",T.className="dp-service-details-retry",T.dataset.detailsRetry="",T.textContent=be("retry"),i.appendChild(T)}}function m(){i.hidden=!0,i.textContent=""}function f(){r.hidden=!0,d.hidden=!0,s.innerHTML="",l.innerHTML=""}async function h(A,k,T){try{const N=await Et.list(A,T);if(T.aborted||t.signal.aborted||!e.isConnected||Ve()!==A)return;In(N);const x=Xi(N).filter($=>!$.locale||$.locale===A).map(Va).filter(Boolean);if(!x.length){d.hidden=!0;return}l.innerHTML=or(x,k),d.hidden=!1}catch(N){!T.aborted&&!t.signal.aborted&&(console.warn("Failed to load sidebar services:",N),d.hidden=!0)}}async function b(){a==null||a.abort(),a=new AbortController;const A=a.signal,k=Ve();if(n=k,u(k),f(),!o){p(be("notFound",k));return}p(be("loading",k));try{const T=await Et.show(o,k,A);if(A.aborted||t.signal.aborted||!e.isConnected||Ve()!==k)return;const N=Ji(T,o,k),x=N?Va(N):null;if(!x){p(be("notFound",k));return}s.innerHTML=nr(x,k),r.hidden=!1,m(),document.title=`${x.name} | Dentistry`,h(k,o,A)}catch(T){if(A.aborted||t.signal.aborted)return;console.error("Service details API failed:",T);const N=(T==null?void 0:T.status)===404||(T==null?void 0:T.statusCode)===404;p(be(N?"notFound":"error",k),!N)}}e.addEventListener("click",A=>{A.target.closest("[data-details-retry]")&&(A.preventDefault(),b())},{signal:t.signal});const S=new MutationObserver(()=>{Ve()!==n&&b()});return S.observe(document.documentElement,{attributes:!0,attributeFilter:["lang","dir"]}),b(),()=>{t.abort(),a==null||a.abort(),S.disconnect(),typeof c=="function"&&c()}}function Pe(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function ue(e){return Pe(w(`teamDetails.${e}`))}function sr(){const e=window.location.pathname.match(/^\/team\/([a-z0-9-]+)\/?$/i);return e?e[1].toLowerCase():""}const Ya=`
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
`;function lr(e){return`
    <section class="section breadcrumb-section">
      <div class="w-layout-blockcontainer container-fluid w-container">
        <div class="breadcrumb-block">

          <div class="w-layout-blockcontainer container w-container">
            <div class="breadcrumb-main-title-block">

              <div class="breadcrumb-title-block">
                <h1 class="breadcrumb-title">
                  ${Pe(e.name)}
                </h1>
              </div>

              <div class="breadcrumb-subtext-block">

                <a href="/" class="breadcrumb-subtext">
                  ${ue("home")}
                </a>

                <span class="breadcrumb-subtext">-</span>

                <a href="/about-us#about-doctors"
                   class="breadcrumb-subtext">
                  ${ue("team")}
                </a>

                <span class="breadcrumb-subtext">-</span>

                <span
                  class="breadcrumb-subtext"
                  aria-current="page"
                >
                  ${Pe(e.name)}
                </span>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  `}function cr(e){return`
    <section class="section team-single-section dp-team-details">

      <div class="w-layout-blockcontainer container w-container">
        <div class="w-layout-grid expert-grid">

          <!-- LEFT COLUMN -->

          <div class="left-expert-grid">

            <div class="expert-image-block">
              <img
                src="${Pe(e.image)}"
                alt="${Pe(e.name)}"
                class="expert-image"
                loading="eager"
              />
            </div>

            <div class="expert-flex-block">

              <h2 class="expert-team-tilte">
                ${Pe(e.name)}
              </h2>

              <div class="expert-designation">
                ${Pe(e.role)}
              </div>

            </div>

            <div class="dp-team-preview-badge">
              ${ue("previewBadge")}
            </div>

            <div class="main-expert-duration">

              <h3 class="inner-expert-title">
                ${ue("specialty")}
              </h3>

              <p class="dp-team-specialty">
                ${Pe(e.role)}
              </p>

            </div>

            <div class="main-expert-duration last">

              <h3 class="inner-expert-title">
                ${ue("information")}
              </h3>

              <p class="dp-team-info">
                ${ue("informationText")}
              </p>

            </div>

            <div class="expert-button-block">

              <a
                href="/contact-us"
                class="button-primary w-inline-block"
              >
                <span class="button-primary-text">
                  ${ue("contactButton")}
                </span>

                <span class="button-icon-block">
                  ${Ya}
                </span>
              </a>

            </div>

          </div>

          <!-- RIGHT COLUMN -->

          <div class="right-expert-grid">

            <div class="right-expert-sticky">

              <div class="expert-richbox w-richtext">

                <div class="dp-team-detail-eyebrow">
                  ${ue("eyebrow")}
                </div>

                <h2>
                  ${ue("aboutTitle")} ${Pe(e.name)}
                </h2>

                <p>
                  ${ue("aboutDescription")}
                </p>

                <h3>
                  ${ue("focusTitle")}
                </h3>

                <p>
                  ${Pe(e.focus)}
                </p>

                <h3>
                  ${ue("approachTitle")}
                </h3>

                <p>
                  ${ue("approachDescription")}
                </p>

                <div class="dp-team-detail-note">
                  ${ue("previewNotice")}
                </div>

                <a
                  href="/about-us#about-doctors"
                  class="dp-team-back-link"
                >
                  <span class="dp-team-back-arrow">
                    ${Ya}
                  </span>

                  ${ue("backToDoctors")}
                </a>

              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  `}function dr(){return`
    <main class="dp-team-not-found">
      <h1>${ue("notFound")}</h1>

      <a href="/about-us#about-doctors">
        ${ue("backToDoctors")}
      </a>
    </main>
  `}function ur(){const e=zo(sr());return e?`
    <main class="dp-team-details-page" data-no-translate>
      ${lr(e)}
      ${cr(e)}
    </main>
  `:dr()}function mr(){return()=>{}}const pr=String.raw`
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
`;function fr(){return pr}function hr(){return Ot(document.getElementById("app"))}const we={phone:null,expiresAt:0},qn=()=>oe()==="fa"?"fa":"en",gr=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),ee=e=>gr(w(`auth.login.${e}`));function Rn(e){return String(e??"").replace(/[۰-۹]/g,t=>String(t.charCodeAt(0)-1776)).replace(/[٠-٩]/g,t=>String(t.charCodeAt(0)-1632))}function br(e){let t=Rn(e).replace(/[\s()-]/g,"");return t=t.replace(/^(?:\+98|0098|98)/,"0"),/^09\d{9}$/.test(t)?t:null}const Ga=e=>Rn(e).replace(/\D/g,"").slice(0,6),Gt=e=>(e==null?void 0:e.success)===!0||(e==null?void 0:e.status)===!0;function Wt(e,t="phone"){var n;const a=Number((e==null?void 0:e.statusCode)??(e==null?void 0:e.status)??((n=e==null?void 0:e.response)==null?void 0:n.status)??0);return a===429?w("auth.login.tooMany"):a===408?w("auth.login.timeout"):a>=500?w("auth.login.serverError"):t==="email"&&[401,403,422].includes(a)?w("auth.login.invalidCredentials"):t==="send"&&a===404?w("auth.login.noAccount"):t==="send"&&a===422?w("auth.login.invalidPhone"):t==="verify"&&[400,401,403,422].includes(a)?w("auth.login.invalidCode"):w("auth.login.networkError")}function Wa(e){ba(e),ya(),we.phone=null,we.expiresAt=0,window.location.assign(`/dashboard?lang=${qn()}`)}function vr(){return`
    <main
      class="dn-login-page"
      data-portal-page="login"
      data-no-translate
      dir="${qn()==="fa"?"rtl":"ltr"}"
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
              ${ee("title")}
            </h1>

            <p>
              ${ee("subtitle")}
            </p>

          </div>

          <!-- LOGIN METHOD SWITCH -->

          <div
            class="dn-login-methods"
            aria-label="${ee("title")}"
          >

            <button
              type="button"
              class="dn-login-method is-active"
              data-login-method="phone"
              aria-pressed="true"
            >
              ${ee("methodPhone")}
            </button>

            <button
              type="button"
              class="dn-login-method"
              data-login-method="email"
              aria-pressed="false"
            >
              ${ee("methodEmail")}
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
                ${ee("phone")}
              </label>

              <input
                id="login-phone"
                name="phone"
                type="tel"
                dir="ltr"
                inputmode="tel"
                autocomplete="tel"
                maxlength="20"
                placeholder="${ee("phonePlaceholder")}"
                required
              />

            </div>

            <button
              class="dn-login-submit"
              type="submit"
              data-login-send
            >
              <span>${ee("sendCode")}</span>
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

              ${ee("codeSentTo")}

              <strong
                data-login-phone-label
                dir="ltr"
              ></strong>

            </p>

            <div class="dn-login-field">

              <label for="login-code">
                ${ee("code")}
              </label>

              <input
                id="login-code"
                name="code"
                type="text"
                dir="ltr"
                inputmode="numeric"
                autocomplete="one-time-code"
                maxlength="6"
                placeholder="${ee("codePlaceholder")}"
                required
              />

              <small>
                ${ee("codeValidity")}
              </small>

            </div>

            <button
              class="dn-login-submit"
              type="submit"
              data-login-verify
            >
              <span>${ee("verify")}</span>
              <span aria-hidden="true">→</span>
            </button>

            <div class="dn-login-otp-actions">

              <button
                type="button"
                class="dn-login-text-button"
                data-login-edit
              >
                ${ee("editPhone")}
              </button>

              <button
                type="button"
                class="dn-login-text-button"
                data-login-resend
                disabled
              >
                ${ee("resend")}

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
                ${ee("email")}
              </label>

              <input
                id="login-email"
                name="email"
                type="email"
                dir="ltr"
                autocomplete="email"
                placeholder="${ee("emailPlaceholder")}"
                required
              />

            </div>

            <div class="dn-login-field">

              <label for="login-password">
                ${ee("password")}
              </label>

              <div class="dn-login-password-wrap">

                <input
                  id="login-password"
                  name="password"
                  type="password"
                  dir="ltr"
                  autocomplete="current-password"
                  placeholder="${ee("passwordPlaceholder")}"
                  required
                />

                <button
                  type="button"
                  class="dn-login-password-toggle"
                  data-password-toggle
                  aria-label="${ee("password")}"
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
              <span>${ee("signIn")}</span>
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
              ${ee("newPatient")}
            </span>

            <a href="/register">
              ${ee("createAccount")}
            </a>

          </div>

          <!-- FORGOT PASSWORD -->

          <a
            class="dn-login-forgot-mobile"
            href="/forgot-password"
          >
            ${ee("forgotPassword")}
          </a>

        </section>

      </div>

    </main>
  `}function yr(){const e=document.querySelector('[data-portal-page="login"]');if(!e)return()=>{};const t=new AbortController,{signal:a}=t,n=E=>e.querySelector(E),o=n("#dp-login-phone-form"),i=n("#dp-login-otp-form"),r=n("#dp-login-email-form"),s=n("#login-phone"),l=n("#login-code"),d=n("#login-email"),c=n("#login-password"),u=n("[data-login-resend]"),p=n("[data-login-countdown]"),m=n("[data-form-feedback]");let f="phone",h=null,b=!1,S=!1,A=null;function k(E,P="note"){m.hidden=!1,m.textContent=E,m.dataset.type=P}function T(){m.hidden=!0,m.textContent="",delete m.dataset.type}const N=()=>Math.max(0,Math.ceil((we.expiresAt-Date.now())/1e3));function x(){n("[data-login-send]").disabled=S,n("[data-login-verify]").disabled=S,n("[data-login-email-submit]").disabled=S,u.disabled=S||N()>0,p.textContent=N()>0?`(${N()}s)`:"",e.querySelectorAll("[data-login-method]").forEach(E=>{E.disabled=S})}function $(E){S=E,e.setAttribute("aria-busy",String(E)),x()}function y(){o.hidden=f!=="phone"||b,i.hidden=f!=="phone"||!b,r.hidden=f!=="email",e.querySelectorAll("[data-login-method]").forEach(E=>{const P=E.dataset.loginMethod===f;E.classList.toggle("is-active",P),E.setAttribute("aria-pressed",String(P))}),x()}function C(){A!==null&&clearInterval(A),A=null}function g(){C(),x(),N()!==0&&(A=setInterval(()=>{(a.aborted||N()===0)&&C(),x()},1e3))}function L(){b=!0,l.value="",n("[data-login-phone-label]").textContent=h,y(),f==="phone"&&l.focus()}async function v(E=!1){if(S||a.aborted)return;const P=E?h:br(s.value);if(!P){k(w("auth.login.invalidPhone"),"error");return}h=P,$(!0),T();try{const _=await Ut.sendCode(h,a);if(a.aborted)return;if(!Gt(_))throw new Error("SEND_CODE_FAILED");we.phone=h,we.expiresAt=Date.now()+12e4,L(),g(),k(w(E?"auth.login.resent":"auth.login.sent"))}catch(_){a.aborted||k(Wt(_,"send"),"error")}finally{a.aborted||$(!1)}}return e.querySelectorAll("[data-login-method]").forEach(E=>{E.addEventListener("click",()=>{S||(f=E.dataset.loginMethod,T(),y())},{signal:a})}),o.addEventListener("submit",E=>{E.preventDefault(),v()},{signal:a}),i.addEventListener("submit",async E=>{if(E.preventDefault(),S||a.aborted)return;const P=Ga(l.value);if(P.length!==6){k(w("auth.login.invalidCodeFormat"),"error");return}if(!h){k(w("auth.login.invalidPhone"),"error");return}$(!0),T();try{const _=await Ut.verifyCode(h,P,a);if(a.aborted)return;if(!Gt(_))throw new Error("VERIFY_FAILED");C(),Wa(_)}catch(_){a.aborted||k((_==null?void 0:_.message)==="AUTH_TOKEN_MISSING"?w("auth.login.invalidApiToken"):Wt(_,"verify"),"error")}finally{a.aborted||$(!1)}},{signal:a}),r.addEventListener("submit",async E=>{if(E.preventDefault(),S||a.aborted)return;const P=d.value.trim(),_=c.value;if(!P||!d.checkValidity()){k(w("auth.login.invalidEmail"),"error");return}if(!_){k(w("auth.login.enterPassword"),"error");return}$(!0),T();try{const F=await Ut.loginWithEmail(P,_,a);if(a.aborted)return;if(!Gt(F))throw new Error("LOGIN_FAILED");C(),Wa(F)}catch(F){a.aborted||k((F==null?void 0:F.message)==="AUTH_TOKEN_MISSING"?w("auth.login.invalidApiToken"):Wt(F,"email"),"error")}finally{a.aborted||$(!1)}},{signal:a}),l.addEventListener("input",()=>{l.value=Ga(l.value)},{signal:a}),n("[data-login-edit]").addEventListener("click",()=>{S||(b=!1,we.phone=null,we.expiresAt=0,C(),T(),y(),s.focus())},{signal:a}),u.addEventListener("click",()=>{!S&&!u.disabled&&v(!0)},{signal:a}),n("[data-password-toggle]").addEventListener("click",E=>{const P=c.type==="password";c.type=P?"text":"password",E.currentTarget.setAttribute("aria-pressed",String(P)),c.focus()},{signal:a}),new URLSearchParams(window.location.search).get("expired")==="1"&&k(w("auth.sessionExpired"),"error"),we.phone&&we.expiresAt>Date.now()?(h=we.phone,s.value=h,L(),g()):(we.phone=null,we.expiresAt=0,y()),()=>{t.abort(),C()}}const Q={name:"",phone:"",referralCode:"",step:"details",expiresAt:0},Mn=()=>oe()==="fa"?"fa":"en",wr=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),ie=e=>wr(w(`auth.register.${e}`));function On(e){return String(e??"").replace(/[۰-۹]/g,t=>String(t.charCodeAt(0)-1776)).replace(/[٠-٩]/g,t=>String(t.charCodeAt(0)-1632))}function $r(e){const t=On(e).replace(/[\s()-]/g,"").replace(/^(?:\+98|0098|98)/,"0");return/^09\d{9}$/.test(t)?t:null}function Za(e){return On(e).replace(/\D/g,"").slice(0,6)}function Ka(e,t){const a=Number((e==null?void 0:e.status)??0);return a===429?w("auth.register.tooMany"):a===408?w("auth.register.timeout"):a===0?w("auth.register.networkError"):a>=500?w("auth.register.serverError"):a===409&&t==="send"?w("auth.register.alreadyRegistered"):t==="verify"&&[400,401,403,410,422].includes(a)?w("auth.register.invalidCode"):w(a===422?"auth.register.invalidData":"auth.register.requestFailed")}function kr(){Q.name="",Q.phone="",Q.referralCode="",Q.step="details",Q.expiresAt=0}function Sr(){return`
    <main
      class="dn-login-page dn-auth-page"
      data-portal-page="register"
      data-no-translate
      dir="${Mn()==="fa"?"rtl":"ltr"}"
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
              ${ie("title")}
            </h1>

            <p>
              ${ie("subtitle")}
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
                ${ie("name")}
              </label>

              <input
                id="register-name"
                name="name"
                type="text"
                autocomplete="name"
                minlength="2"
                maxlength="100"
                placeholder="${ie("namePlaceholder")}"
                required
              />

            </div>

            <div class="dn-login-field">

              <label for="register-phone">
                ${ie("phone")}
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
                ${ie("referral")}
              </label>

              <input
                id="register-referral"
                name="referral_code"
                type="text"
                maxlength="64"
                placeholder="${ie("referralPlaceholder")}"
              />

            </div>

            <button
              class="dn-login-submit"
              type="submit"
              data-register-send
            >
              <span>
                ${ie("sendCode")}
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

              ${ie("codeSentTo")}

              <strong
                data-register-phone-label
                dir="ltr"
              ></strong>

            </p>

            <div class="dn-login-field">

              <label for="register-code">
                ${ie("code")}
              </label>

              <input
                id="register-code"
                name="code"
                type="text"
                dir="ltr"
                inputmode="numeric"
                autocomplete="one-time-code"
                maxlength="6"
                placeholder="${ie("codePlaceholder")}"
                required
              />

              <small>
                ${ie("codeValidity")}
              </small>

            </div>

            <button
              class="dn-login-submit"
              type="submit"
              data-register-verify
            >
              <span>
                ${ie("verify")}
              </span>

              <span aria-hidden="true">→</span>
            </button>

            <div class="dn-login-otp-actions">

              <button
                class="dn-login-text-button"
                type="button"
                data-register-edit
              >
                ${ie("editPhone")}
              </button>

              <button
                class="dn-login-text-button"
                type="button"
                data-register-resend
                disabled
              >
                ${ie("resend")}

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
              ${ie("success")}
            </p>

            <a
              href="/login"
              class="dn-login-submit dn-auth-button-link"
            >
              ${ie("goToLogin")}
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
              ${ie("haveAccount")}
            </span>

            <a href="/login">
              ${ie("signIn")}
            </a>

          </div>

        </section>

      </div>
    </main>
  `}function Tr(){const e=document.querySelector('[data-portal-page="register"]');if(!e)return()=>{};const t=new AbortController,{signal:a}=t,n=y=>e.querySelector(y),o=n("#dp-register-form"),i=n("#dp-register-verify-form"),r=n("#register-name"),s=n("#register-phone"),l=n("#register-referral"),d=n("#register-code"),c=n("[data-register-resend]"),u=n("[data-register-countdown]"),p=n("[data-form-feedback]");let m=!1,f=null;function h(y,C="note"){p.hidden=!1,p.textContent=y,p.dataset.type=C}function b(){p.hidden=!0,p.textContent="",delete p.dataset.type}function S(){return Math.max(0,Math.ceil((Q.expiresAt-Date.now())/1e3))}function A(){n("[data-register-send]").disabled=m,n("[data-register-verify]").disabled=m,n("[data-register-edit]").disabled=m,c.disabled=m||S()>0,u.textContent=S()>0?`(${S()}s)`:""}function k(y){m=y,e.setAttribute("aria-busy",String(y)),A()}function T(y){Q.step=y,e.querySelectorAll("[data-register-step]").forEach(C=>{C.hidden=C.dataset.registerStep!==y}),n("[data-register-phone-label]").textContent=Q.phone,A()}function N(){f!==null&&clearInterval(f),f=null}function x(){N(),A(),S()!==0&&(f=setInterval(()=>{(a.aborted||S()===0)&&N(),A()},1e3))}async function $(y=!1){if(m||a.aborted||y&&S()>0)return;const C=y?Q.name:r.value.trim(),g=$r(y?Q.phone:s.value),L=y?Q.referralCode:l.value.trim();if(C.length<2)return h(w("auth.register.invalidName"),"error");if(!g)return h(w("auth.register.invalidPhone"),"error");k(!0),b();try{const v=await qa.sendCode(C,g,L,a);if(a.aborted)return;if((v==null?void 0:v.success)===!1||(v==null?void 0:v.status)===!1)throw new Error("REGISTER_SEND_FAILED");Q.name=C,Q.phone=g,Q.referralCode=L,Q.expiresAt=Date.now()+2*60*1e3,d.value="",T("verify"),x(),h(w(y?"auth.register.resent":"auth.register.sent")),d.focus()}catch(v){a.aborted||h(Ka(v,"send"),"error")}finally{a.aborted||k(!1)}}return o.addEventListener("submit",y=>{y.preventDefault(),$()},{signal:a}),i.addEventListener("submit",async y=>{var g,L;if(y.preventDefault(),m||a.aborted)return;const C=Za(d.value);if(C.length!==6)return h(w("auth.register.invalidCodeFormat"),"error");if(!Q.phone)return T("details"),h(w("auth.register.sessionExpired"),"error");k(!0),b();try{const v=await qa.verifyCode(Q.phone,C,Q.name,Q.referralCode,a);if(a.aborted)return;if((v==null?void 0:v.success)===!1||(v==null?void 0:v.status)===!1)throw new Error("REGISTER_VERIFY_FAILED");if(!((g=v==null?void 0:v.data)!=null&&g.token)||!((L=v==null?void 0:v.data)!=null&&L.client))throw new Error("INVALID_REGISTER_RESPONSE");ba(v),ya(),kr(),N(),window.location.assign(`/dashboard?lang=${Mn()}`)}catch(v){a.aborted||h((v==null?void 0:v.message)==="INVALID_REGISTER_RESPONSE"?w("auth.register.requestFailed"):Ka(v,"verify"),"error")}finally{a.aborted||k(!1)}},{signal:a}),n("[data-register-edit]").addEventListener("click",()=>{m||(N(),Q.expiresAt=0,Q.step="details",d.value="",b(),T("details"),s.focus())},{signal:a}),c.addEventListener("click",()=>{!m&&!c.disabled&&$(!0)},{signal:a}),d.addEventListener("input",()=>{d.value=Za(d.value)},{signal:a}),r.value=Q.name,s.value=Q.phone,l.value=Q.referralCode,Q.step==="verify"&&Q.phone?(T("verify"),x()):T("details"),()=>{t.abort(),N()}}const Er=60*1e3,B={step:"phone",phone:"",code:"",resetToken:"",resetExpiresAt:0,resendAfter:0},Bn=()=>oe()==="fa"?"fa":"en",Ar=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),ce=e=>Ar(w(`auth.forgot.${e}`));function Fn(e){return String(e??"").replace(/[۰-۹]/g,t=>String(t.charCodeAt(0)-1776)).replace(/[٠-٩]/g,t=>String(t.charCodeAt(0)-1632))}function Qa(e){const t=Fn(e).replace(/[\s()-]/g,"").replace(/^(?:\+98|0098|98)/,"0");return/^09\d{9}$/.test(t)?t:null}function Xa(e){return Fn(e).replace(/\D/g,"").slice(0,6)}function Zt(){B.step="phone",B.phone="",B.code="",B.resetToken="",B.resetExpiresAt=0,B.resendAfter=0}function Kt(e,t){const a=Number((e==null?void 0:e.status)??0),n=(e==null?void 0:e.errors)??{};return a===429?w("auth.forgot.tooMany"):a===408?w("auth.forgot.timeout"):a>=500?w("auth.forgot.serverError"):a===0?w("auth.forgot.networkError"):a===410||t==="reset"&&n.reset_token?w("auth.forgot.resetTokenExpired"):t==="verify"&&[400,401,403,422].includes(a)||t==="reset"&&[400,401,403].includes(a)?w("auth.forgot.invalidCode"):w(a===422?t==="send"?"auth.forgot.invalidPhone":"auth.forgot.invalidData":"auth.forgot.requestFailed")}function Ja(e,t,a){return`
    <div class="dn-login-field">

      <label for="${e}">
        ${ce(t)}
      </label>

      <div class="dn-login-password-wrap">

        <input
          id="${e}"
          name="${e}"
          type="password"
          minlength="8"
          autocomplete="new-password"
          placeholder="${ce(a)}"
          required
        />

        <button
          type="button"
          class="dn-login-password-toggle"
          data-auth-password-toggle="${e}"
          aria-label="${ce(t)}"
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
  `}function xr(){return`
    <main
      class="dn-login-page dn-auth-page"
      data-portal-page="forgot-password"
      data-no-translate
      dir="${Bn()==="fa"?"rtl":"ltr"}"
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
              ${ce("title")}
            </h1>

            <p>
              ${ce("subtitle")}
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
                ${ce("phone")}
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
                ${ce("sendCode")}
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

              ${ce("codeSentTo")}

              <strong
                data-forgot-phone-label
                dir="ltr"
              ></strong>

            </p>

            <div class="dn-login-field">

              <label for="forgot-code">
                ${ce("code")}
              </label>

              <input
                id="forgot-code"
                name="code"
                type="text"
                dir="ltr"
                inputmode="numeric"
                autocomplete="one-time-code"
                maxlength="6"
                placeholder="${ce("codePlaceholder")}"
                required
              />

            </div>

            <button
              class="dn-login-submit"
              type="submit"
              data-forgot-verify
            >

              <span>
                ${ce("verify")}
              </span>

              <span aria-hidden="true">→</span>

            </button>

            <div class="dn-login-otp-actions">

              <button
                class="dn-login-text-button"
                type="button"
                data-forgot-edit
              >
                ${ce("changePhone")}
              </button>

              <button
                class="dn-login-text-button"
                type="button"
                data-forgot-resend
                disabled
              >

                ${ce("resend")}

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

              ${ce("verifiedPhone")}

              <strong
                data-forgot-phone-label
                dir="ltr"
              ></strong>

            </p>

            ${Ja("forgot-password","newPassword","newPasswordPlaceholder")}

            ${Ja("forgot-confirm","confirmPassword","confirmPlaceholder")}

            <button
              class="dn-login-submit"
              type="submit"
              data-forgot-reset
            >

              <span>
                ${ce("resetPassword")}
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
              ${ce("success")}
            </p>

            <a
              class="dn-login-submit dn-auth-button-link"
              href="/login"
            >
              ${ce("backToLogin")}

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
              ${ce("backToLogin")}
            </a>

          </div>

        </section>

      </div>

    </main>
  `}function Cr(){const e=document.querySelector('[data-portal-page="forgot-password"]');if(!e)return()=>{};const t=new AbortController,{signal:a}=t,n=g=>e.querySelector(g),o=n("#dp-forgot-phone-form"),i=n("#dp-forgot-otp-form"),r=n("#dp-forgot-reset-form"),s=n("#forgot-phone"),l=n("#forgot-code"),d=n("#forgot-password"),c=n("#forgot-confirm"),u=n("[data-forgot-resend]"),p=n("[data-forgot-countdown]"),m=n("[data-form-feedback]");let f=!1,h=null;function b(g,L="note"){m.hidden=!1,m.textContent=g,m.dataset.type=L}function S(){m.hidden=!0,m.textContent="",delete m.dataset.type}const A=()=>Math.max(0,Math.ceil((B.resendAfter-Date.now())/1e3));function k(){["[data-forgot-send]","[data-forgot-verify]","[data-forgot-reset]","[data-forgot-edit]"].forEach(L=>{n(L).disabled=f}),u.disabled=f||A()>0,p.textContent=A()>0?`(${A()}s)`:""}function T(g){f=g,e.setAttribute("aria-busy",String(g)),k()}function N(g){B.step=g,e.querySelectorAll("[data-forgot-step]").forEach(L=>{L.hidden=L.dataset.forgotStep!==g}),e.querySelectorAll("[data-forgot-phone-label]").forEach(L=>{L.textContent=B.phone}),k()}function x(){h!==null&&clearInterval(h),h=null}function $(){x(),k(),A()!==0&&(h=setInterval(()=>{(a.aborted||A()===0)&&x(),k()},1e3))}function y(){x(),Zt(),s.value="",l.value="",d.value="",c.value="",N("phone")}async function C(g=!1){if(f||a.aborted||g&&A()>0)return;const L=Qa(g?B.phone:s.value);if(!L)return b(w("auth.forgot.invalidPhone"),"error");T(!0),S();try{const v=await zt.sendCode(L,a);if(a.aborted)return;if((v==null?void 0:v.success)===!1||(v==null?void 0:v.status)===!1)throw new Error("SEND_CODE_FAILED");B.phone=L,B.code="",B.resetToken="",B.resetExpiresAt=0,B.resendAfter=Date.now()+Er,l.value="",N("otp"),$(),b(w(g?"auth.forgot.resent":"auth.forgot.sent")),l.focus()}catch(v){a.aborted||b(Kt(v,"send"),"error")}finally{a.aborted||T(!1)}}return o.addEventListener("submit",g=>{g.preventDefault(),C()},{signal:a}),i.addEventListener("submit",async g=>{if(g.preventDefault(),f||a.aborted)return;const L=Xa(l.value);if(L.length!==6)return b(w("auth.forgot.invalidCodeFormat"),"error");if(!B.phone)return y(),b(w("auth.forgot.sessionExpired"),"error");T(!0),S();try{const v=await zt.verifyCode(B.phone,L,a);if(a.aborted)return;const D=(v==null?void 0:v.data)??{},E=Number(D.expires_in);if((v==null?void 0:v.success)===!1||(v==null?void 0:v.status)===!1||D.verified===!1||typeof D.reset_token!="string"||!D.reset_token.trim()||!Number.isFinite(E)||E<=0||D.phone&&Qa(D.phone)!==B.phone)throw new Error("INVALID_VERIFY_RESPONSE");B.code=L,B.resetToken=D.reset_token,B.resetExpiresAt=Date.now()+E*1e3,l.value="",x(),N("reset"),b(w("auth.forgot.verified")),d.focus()}catch(v){a.aborted||b((v==null?void 0:v.message)==="INVALID_VERIFY_RESPONSE"?w("auth.forgot.requestFailed"):Kt(v,"verify"),"error")}finally{a.aborted||T(!1)}},{signal:a}),r.addEventListener("submit",async g=>{var D,E,P;if(g.preventDefault(),f||a.aborted)return;const L=d.value,v=c.value;if(L.length<8)return b(w("auth.forgot.shortPassword"),"error");if(L!==v)return b(w("auth.forgot.passwordMismatch"),"error");if(!B.phone||!B.code||!B.resetToken)return y(),b(w("auth.forgot.sessionExpired"),"error");if(Date.now()>=B.resetExpiresAt)return y(),b(w("auth.forgot.resetTokenExpired"),"error");T(!0),S();try{const _=await zt.resetPassword(B.phone,B.code,B.resetToken,L,v,a);if(a.aborted)return;if((_==null?void 0:_.success)===!1||(_==null?void 0:_.status)===!1)throw new Error("RESET_PASSWORD_FAILED");const F=!!((D=_==null?void 0:_.data)!=null&&D.token&&((E=_==null?void 0:_.data)!=null&&E.client));let Ne=!1;if(F)try{ba(_),ya(),Ne=!0}catch{Ne=!1}if(Zt(),l.value="",d.value="",c.value="",Ne){window.location.assign(`/dashboard?lang=${Bn()}`);return}N("done"),S()}catch(_){a.aborted||((_==null?void 0:_.status)===410||(P=_==null?void 0:_.errors)!=null&&P.reset_token?(y(),b(w("auth.forgot.resetTokenExpired"),"error")):b(Kt(_,"reset"),"error"))}finally{a.aborted||T(!1)}},{signal:a}),n("[data-forgot-edit]").addEventListener("click",()=>{if(f)return;const g=B.phone;y(),s.value=g,S(),s.focus()},{signal:a}),u.addEventListener("click",()=>{!f&&!u.disabled&&C(!0)},{signal:a}),l.addEventListener("input",()=>{l.value=Xa(l.value)},{signal:a}),e.querySelectorAll("[data-auth-password-toggle]").forEach(g=>{g.addEventListener("click",()=>{const L=document.getElementById(g.dataset.authPasswordToggle);if(!L)return;const v=L.type==="password";L.type=v?"text":"password",g.setAttribute("aria-pressed",String(v)),L.focus()},{signal:a})}),B.step==="reset"&&Date.now()>=B.resetExpiresAt&&Zt(),s.value=B.phone,N(B.step),B.step==="otp"&&$(),()=>{t.abort(),x(),d.value="",c.value=""}}function en(e){const t=e==null?void 0:e.data;return[t==null?void 0:t.client,t==null?void 0:t.profile,t==null?void 0:t.user,t].find(n=>n&&typeof n=="object"&&!Array.isArray(n)&&(n.id!==void 0||n.phone!==void 0||n.name!==void 0))||null}function Lr(){return`
    <div class="dp-white-card dp-patient-profile">

      <div class="dp-card-head">
        <div>
          <h2>${w("profile.information")}</h2>
        </div>

        <button
          type="button"
          class="dp-btn dp-btn-outline dp-btn-small"
          data-profile-reload
        >
          ${w("profile.reload")}
        </button>
      </div>

      <p
        data-profile-status
        role="status"
        aria-live="polite"
        class="dp-profile-status"
      >
        ${w("profile.loading")}
      </p>

      <div class="dp-profile-grid">
        <div>
          <span>${w("profile.name")}</span>
          <strong data-profile-name>—</strong>
        </div>

        <div>
          <span>${w("profile.email")}</span>
          <strong data-profile-email>—</strong>
        </div>

        <div>
          <span>${w("profile.phone")}</span>
          <strong data-profile-phone dir="ltr">—</strong>
        </div>

        <div>
          <span>${w("profile.referral")}</span>
          <strong data-profile-referral>—</strong>
        </div>
      </div>

      <p class="dp-profile-hint">
        ${w("profile.phoneHint")}
      </p>

    </div>
  `}function Pr(e){if(!e)return()=>{};const t=new AbortController,{signal:a}=t,n=e.querySelector("[data-profile-status]"),o=e.querySelector("[data-profile-reload]");let i=!1;function r(c,u=!1){!n||a.aborted||(n.textContent=c,n.dataset.state=u?"error":"normal")}function s(c){const u={"[data-profile-name]":c.name||"—","[data-profile-email]":c.email||w("profile.notSet"),"[data-profile-phone]":c.phone||"—","[data-profile-referral]":c.referral_code||"—"};for(const[f,h]of Object.entries(u)){const b=e.querySelector(f);b&&(b.textContent=String(h))}const p=e.querySelector("[data-dashboard-name]");p&&(p.textContent=c.name||"—");const m=e.querySelector("[data-patient-avatar]");if(m){const f=String(c.name||"").trim();m.textContent=f?f.slice(0,2):"—"}}async function l(c){try{return await c()}catch(u){if(a.aborted||(u==null?void 0:u.status)!==401)throw u;try{const p=await wt.refresh(a);return a.aborted?null:(uo(p),await c())}catch(p){if(a.aborted)return null;throw St(),window.location.assign("/login"),p}}}async function d(){if(!(i||a.aborted)){if(!We()){window.location.assign("/login");return}i=!0,o&&(o.disabled=!0),r(w("profile.loading"));try{const c=await l(()=>wt.me(a));if(a.aborted)return;const u=en(c);let p=null;try{const f=await l(()=>wt.getProfile(a));if(a.aborted)return;p=en(f)}catch(f){if(a.aborted)return;if((f==null?void 0:f.status)===401)throw f}const m={...u||{},...p||{}};if(!m.id&&!m.phone&&!m.name)throw new Error("PROFILE_DATA_MISSING");s(m),r(w(p?"profile.loaded":"profile.partial"))}catch(c){if(a.aborted)return;if((c==null?void 0:c.status)===401){St(),window.location.assign("/login");return}r(w("profile.loadError"),!0)}finally{i=!1,!a.aborted&&o&&(o.disabled=!1)}}}return o==null||o.addEventListener("click",()=>void d(),{signal:a}),d(),()=>t.abort()}const Qt=e=>{const t=Number(e);if(!Number.isSafeInteger(t)||t<1)throw new TypeError("A valid booking id is required.");return t},tn=e=>{const t=String(e??"").trim();if(!/^\d{4}-\d{2}-\d{2}$/.test(t))throw new TypeError("booking_date must use YYYY-MM-DD.");const a=new Date(`${t}T12:00:00Z`);if(Number.isNaN(a.getTime())||a.toISOString().slice(0,10)!==t)throw new TypeError("booking_date is invalid.");return t},an=e=>{const t=String(e??"").trim();if(!/^(?:[01]\d|2[0-3]):[0-5]\d$/.test(t))throw new TypeError("start_time must use HH:mm.");return t},it={list(e=null,t=1){const a=Number(t);if(!Number.isSafeInteger(a)||a<1)throw new TypeError("Invalid bookings page number.");const n=a===1?"":`?page=${a}`;return K(`/v1/bookings${n}`,{auth:!0,signal:e})},create(e,t=null){if(!e||!Array.isArray(e.services)||!e.services.length)throw new TypeError("At least one booking service is required.");const a=e.services.map(n=>{const o=Number(n.service_id),i=Number(n.staff_id);if(![o,i].every(r=>Number.isSafeInteger(r)&&r>0))throw new TypeError("service_id and staff_id must be positive integers.");return{service_id:o,staff_id:i,start_time:an(n.start_time)}});return he("/v1/bookings",{booking_date:tn(e.booking_date),notes:String(e.notes??"").trim(),services:a},{auth:!0,signal:t})},show(e,t=null){return K(`/v1/bookings/${Qt(e)}`,{auth:!0,signal:t})},cancel(e,t,a=null){const n=String(t??"").trim();if(!n)throw new TypeError("A cancellation reason is required.");return he(`/v1/bookings/${Qt(e)}/cancel`,{reason:n},{auth:!0,signal:a})},reschedule(e,t,a,n=null){return he(`/v1/bookings/${Qt(e)}/reschedule`,{booking_date:tn(t),start_time:an(a)},{auth:!0,signal:n})}};function xt(e,t){const a=Number(e);if(!Number.isSafeInteger(a)||a<1)throw new TypeError(`${t} must be a positive integer.`);return a}function Nr(e){const t=String(e??"").trim();if(!/^\d{4}-\d{2}-\d{2}$/.test(t))throw new TypeError("date must use YYYY-MM-DD.");const a=new Date(`${t}T12:00:00Z`);if(Number.isNaN(a.getTime())||a.toISOString().slice(0,10)!==t)throw new TypeError("Invalid calendar date.");return t}const jn=30,pt=Object.freeze({staff:"staff_id",service:"service_id",date:"date",interval:"interval"}),Xt={list(e=null){return K("/v1/staff",{auth:!0,signal:e})},show(e,t=null){return K(`/v1/staff/${xt(e,"staff_id")}`,{auth:!0,signal:t})},schedule(e,t=null){return K(`/v1/staff/${xt(e,"staff_id")}/schedule`,{auth:!0,signal:t})}},Dr={list({staff_id:e,service_id:t,date:a,interval:n=jn},o=null){const i=Number(n);if(!Number.isSafeInteger(i)||i<1||i>1440)throw new TypeError("interval must be a positive number of minutes (up to 1440).");const r=new URLSearchParams({[pt.staff]:String(xt(e,"staff_id")),[pt.service]:String(xt(t,"service_id")),[pt.date]:Nr(a),[pt.interval]:String(i)});return K(`/v1/availability?${r.toString()}`,{auth:!0,signal:o})}},la=()=>oe()==="fa"?"fa":"en",_r={en:{title:"Book an appointment",subtitle:"Choose your doctor, treatment and an available time.",doctor:"Doctor",doctorPrompt:"Select a doctor",treatment:"Treatment",treatmentPrompt:"Select a treatment",date:"Appointment date",notes:"Notes (optional)",notePlaceholder:"Anything the clinic should know?",slots:"Available times",chooseFirst:"Choose a doctor, treatment and date to see available times.",loadingDoctors:"Loading doctors…",emptyDoctors:"There are no doctors available to book.",doctorsError:"Doctors could not be loaded. Please try again.",loadingDoctor:"Loading doctor details…",doctorError:"Doctor details could not be loaded.",noServices:"This doctor has no bookable services in the API response.",loadingSlots:"Checking available times…",emptySlots:"There are no available times for this selection.",slotsError:"Available times could not be loaded. Check the API parameters and try again.",schedule:"Doctor schedule",scheduleEmpty:"Schedule information is not available.",scheduleError:"Schedule could not be loaded.",submit:"Confirm appointment",submitting:"Creating your booking…",success:"Your booking request was submitted. Check its status in your appointments.",createError:"Booking could not be created. Please review your selection.",required:"Please choose a doctor, a treatment, a date and an available time.",back:"Back to appointments",retry:"Retry",close:"Close",slotHint:"Each option shows the full appointment time. Start times are offered every 30 minutes; treatment duration may be longer. The clinic confirms availability when booking.",postSubmitHint:"A booking may require a deposit or payment before confirmation.",minutes:"min"},fa:{title:"رزرو نوبت جدید",subtitle:"پزشک، خدمت و یکی از ساعت‌های آزاد را انتخاب کنید.",doctor:"پزشک",doctorPrompt:"انتخاب پزشک",treatment:"خدمت",treatmentPrompt:"انتخاب خدمت",date:"تاریخ مراجعه",notes:"توضیحات (اختیاری)",notePlaceholder:"اگر نکته‌ای برای کلینیک دارید بنویسید",slots:"ساعت‌های آزاد",chooseFirst:"برای مشاهده ساعت‌های آزاد، پزشک، خدمت و تاریخ را انتخاب کنید.",loadingDoctors:"در حال دریافت پزشکان…",emptyDoctors:"فعلاً پزشک قابل رزروی یافت نشد.",doctorsError:"دریافت فهرست پزشکان ممکن نشد. دوباره تلاش کنید.",loadingDoctor:"در حال دریافت اطلاعات پزشک…",doctorError:"دریافت جزئیات پزشک ممکن نشد.",noServices:"در پاسخ API خدمت قابل رزروی برای این پزشک وجود ندارد.",loadingSlots:"در حال بررسی ساعت‌های آزاد…",emptySlots:"برای این انتخاب ساعت آزادی ثبت نشده است.",slotsError:"دریافت ساعت‌های آزاد ناموفق بود. پارامترهای API را بررسی کنید.",schedule:"برنامه کاری پزشک",scheduleEmpty:"اطلاعات برنامه کاری در دسترس نیست.",scheduleError:"دریافت برنامه کاری پزشک ممکن نشد.",submit:"تأیید رزرو",submitting:"در حال ثبت رزرو…",success:"درخواست رزرو ثبت شد. وضعیت آن را در بخش نوبت‌های خود ببینید.",createError:"ثبت رزرو انجام نشد. اطلاعات انتخابی را بررسی کنید.",required:"لطفاً پزشک، خدمت، تاریخ و یک ساعت آزاد را انتخاب کنید.",back:"بازگشت به نوبت‌ها",retry:"تلاش مجدد",close:"بستن",slotHint:"هر گزینه بازه کامل نوبت را نشان می‌دهد. شروع نوبت‌ها با فاصله ۳۰ دقیقه ارائه می‌شود، اما مدت خدمت ممکن است بیشتر باشد. تأیید نهایی با کلینیک است.",postSubmitHint:"ممکن است برای تأیید نوبت نیاز به پرداخت بیعانه باشد.",minutes:"دقیقه"}};function G(e){const t=`dashboard.wizard.${e}`,a=w(t);return a&&a!==t?a:_r[la()][e]||e}function Te(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}const z=e=>Te(G(e)),De=e=>Number.isSafeInteger(Number(e))&&Number(e)>0;function Hn(e,t=[]){var o;if(Array.isArray(e))return e;const a=(e==null?void 0:e.data)??e;if(Array.isArray(a))return a;const n=["data",...t,"items","results"];for(const i of n){if(Array.isArray(a==null?void 0:a[i]))return a[i];if(Array.isArray((o=a==null?void 0:a[i])==null?void 0:o.data))return a[i].data;if(Array.isArray(e==null?void 0:e[i]))return e[i]}return[]}function Ir(e,t=[]){let a=(e==null?void 0:e.data)??e;for(const n of t)a!=null&&a[n]&&(a=a[n]);return a!=null&&a.data&&!Array.isArray(a.data)&&typeof a.data=="object"?a.data:a}function Un(e){const t=e==null?void 0:e.translations;return Array.isArray(t)?t.find(a=>[a.lang,a.locale,a.language].includes(la()))||{}:t&&typeof t=="object"?t[la()]||{}:(e==null?void 0:e.translation)||{}}function qr(e){const t=(e==null?void 0:e.services)??(e==null?void 0:e.staff_services)??(e==null?void 0:e.staffServices)??(e==null?void 0:e.provided_services)??(e==null?void 0:e.service_list)??[];if(!Array.isArray(t))return[];const a=new Set;return t.map(n=>{const o=(n==null?void 0:n.service)||n,i=Un(o),r=Number((o==null?void 0:o.id)??(n==null?void 0:n.service_id)),s=String(i.name||i.title||(o==null?void 0:o.name)||(o==null?void 0:o.title)||(n==null?void 0:n.service_name)||"").trim();return{id:r,name:s}}).filter(n=>!De(n.id)||!n.name||a.has(n.id)?!1:(a.add(n.id),!0))}function nn(e){const t=Un(e),a=Number((e==null?void 0:e.id)??(e==null?void 0:e.staff_id)),n=String(t.name||(e==null?void 0:e.name)||(e==null?void 0:e.full_name)||(e==null?void 0:e.doctor_name)||"").trim();return!De(a)||!n?null:{id:a,name:n,services:qr(e)}}function Ct(e){if(typeof e!="string")return"";const t=e.trim();return/^(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d)?$/.test(t)?t.slice(0,5):""}function Jt(e){if(!/^\d{4}-\d{2}-\d{2}$/.test(e))return!1;const t=new Date(`${e}T12:00:00Z`);return!Number.isNaN(t.getTime())&&t.toISOString().slice(0,10)===e}function rt(){const e=Object.fromEntries(new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Tehran",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date).map(t=>[t.type,t.value]));return`${e.year}-${e.month}-${e.day}`}function Rr(e,t){var s,l;const a=(e==null?void 0:e.data)??e,o=[a,a==null?void 0:a.slots,a==null?void 0:a.available_slots,a==null?void 0:a.availableSlots,a==null?void 0:a.times,a==null?void 0:a.availability,a==null?void 0:a.data,(s=a==null?void 0:a.data)==null?void 0:s.slots,(l=a==null?void 0:a.data)==null?void 0:l.available_slots].find(Array.isArray)||[],i=Number(t),r=new Set;return o.map(d=>{if(!d||typeof d!="object")return null;const c=Ct(d.start_time),u=Ct(d.end_time),p=Number(d.duration),m=Array.isArray(d.staff_ids)?d.staff_ids.map(Number):null;return!(d.available!==!1&&d.is_available!==!1&&d.booked!==!0&&!["unavailable","booked","blocked"].includes(String(d.status||"").toLowerCase())&&(!m||m.includes(i)))||!c||!u||!Number.isFinite(p)||p<=0?null:{start_time:c,end_time:u,duration:p}}).filter(d=>!d||r.has(d.start_time)?!1:(r.add(d.start_time),!0)).sort((d,c)=>d.start_time.localeCompare(c.start_time))}function Mr(e){return Hn(e,["schedules","schedule","staff_schedules","working_hours","days"]).map(a=>{const n=a.day_of_week??a.day??a.weekday??a.date,o=Ct(a.start_time||a.start),i=Ct(a.end_time||a.end);return n===void 0||!o||!i||a.is_active===!1?"":`${String(n)}: ${o}–${i}`}).filter(Boolean)}function on(e,t){const a=e!=null&&e.errors&&typeof e.errors=="object"?Object.values(e.errors).flat().map(String).filter(Boolean).join(" · "):"";return a||(typeof(e==null?void 0:e.message)=="string"&&e.message&&!/^Failed to fetch$/i.test(e.message)?e.message:t)}function Or(){return`
    <section
      class="dn-wizard"
      data-booking-wizard
      hidden
      aria-labelledby="dn-wizard-title"
    >

      <div class="dn-wizard-head">

        <div>

          <span class="dn-eyebrow">
            ${z("date")} · ${z("doctor")} · ${z("treatment")}
          </span>

          <h2 id="dn-wizard-title">
            ${z("title")}
          </h2>

          <p>
            ${z("subtitle")}
          </p>

        </div>

        <button
          type="button"
          class="dn-wizard-close"
          data-wizard-close
          aria-label="${z("close")}"
        >
          ×
        </button>

      </div>

      <form data-wizard-form novalidate>

        <div class="dn-wizard-form-grid">

          <label class="dn-wizard-field">

            <span>
              ${z("doctor")}
            </span>

            <select
              name="doctor"
              data-wizard-doctor
              required
            >
              <option value="">
                ${z("loadingDoctors")}
              </option>
            </select>

          </label>

          <label class="dn-wizard-field">

            <span>
              ${z("treatment")}
            </span>

            <select
              name="service"
              data-wizard-service
              required
              disabled
            >
              <option value="">
                ${z("treatmentPrompt")}
              </option>
            </select>

          </label>

          <label class="dn-wizard-field">

            <span>
              ${z("date")}
            </span>

            <input
              name="date"
              data-wizard-date
              type="date"
              min="${rt()}"
              required
            />

          </label>

        </div>

        <p
          class="dn-wizard-muted"
          data-wizard-status
          aria-live="polite"
        >
          ${z("loadingDoctors")}
        </p>

        <details class="dn-wizard-schedule">

          <summary>
            ${z("schedule")}
          </summary>

          <p data-wizard-schedule>
            ${z("scheduleEmpty")}
          </p>

        </details>

        <div class="dn-wizard-times">

          <strong>
            ${z("slots")}
          </strong>

          <p>
            ${z("slotHint")}
          </p>

          <div
            class="dn-wizard-slot-grid"
            data-wizard-slots
          >

            <span class="dn-wizard-muted">
              ${z("chooseFirst")}
            </span>

          </div>

        </div>

        <label
          class="dn-wizard-field dn-wizard-notes"
        >

          <span>
            ${z("notes")}
          </span>

          <textarea
            name="notes"
            data-wizard-notes
            rows="3"
            maxlength="1000"
            placeholder="${z("notePlaceholder")}"
          ></textarea>

        </label>

        <div class="dn-wizard-bottom">

          <button
            type="button"
            class="dn-booking-secondary"
            data-wizard-close
          >
            ${z("back")}
          </button>

          <button
            type="submit"
            class="dn-button dn-button-primary"
            data-wizard-submit
            disabled
          >
            ${z("submit")}
          </button>

        </div>

        <p
          class="dn-wizard-feedback"
          role="status"
          aria-live="polite"
          data-wizard-feedback
          hidden
        ></p>

        <p class="dn-wizard-muted dn-wizard-hint">
          ${z("postSubmitHint")}
        </p>

      </form>

    </section>
  `}function Br(e,t,a=()=>{}){const n=e.querySelector("[data-booking-wizard]");if(!n)return()=>{};const o=M=>n.querySelector(M),i=o("[data-wizard-form]"),r=o("[data-wizard-doctor]"),s=o("[data-wizard-service]"),l=o("[data-wizard-date]"),d=o("[data-wizard-slots]"),c=o("[data-wizard-status]"),u=o("[data-wizard-schedule]"),p=o("[data-wizard-feedback]"),m=o("[data-wizard-submit]");let f=[],h=null,b="",S=[],A=!1,k=0,T=0,N=0,x=!1;const $=()=>!t.aborted&&e.isConnected;function y(M,j="note"){p.hidden=!1,p.textContent=M,p.dataset.state=j}function C(){p.hidden=!0,p.textContent=""}function g(){const M=S.some(j=>j.start_time===b);m.disabled=x||!De(r.value)||!De(s.value)||!Jt(l.value)||l.value<rt()||!M}function L(M){b="",S=[],d.innerHTML=`
      <span class="dn-wizard-muted">
        ${Te(M)}
      </span>
    `,g()}function v(M){s.innerHTML=`
      <option value="">
        ${z("treatmentPrompt")}
      </option>
    `+M.map(j=>`
      <option value="${j.id}">
        ${Te(j.name)}
      </option>
    `).join(""),s.disabled=M.length===0}async function D(){const M=++k;c.textContent=G("loadingDoctors"),r.disabled=!0;try{const j=await Xt.list(t);if(!$()||M!==k)return;f=Hn(j,["staff","doctors","staffs"]).map(nn).filter(Boolean),A=!0,r.innerHTML=`
        <option value="">
          ${z("doctorPrompt")}
        </option>
      `+f.map(U=>`
        <option value="${U.id}">
          ${Te(U.name)}
        </option>
      `).join(""),r.disabled=f.length===0,c.textContent=f.length?G("chooseFirst"):G("emptyDoctors")}catch(j){if(!$()||M!==k)return;console.error("Doctors API:",j),r.innerHTML=`
        <option value="">
          ${z("doctorPrompt")}
        </option>
      `,r.disabled=!0,c.innerHTML=`
        ${z("doctorsError")}

        <button
          type="button"
          class="dn-wizard-inline"
          data-wizard-retry-doctors
        >
          ${z("retry")}
        </button>
      `}}async function E(M){const j=++k,U=f.find(q=>q.id===M);if(U){h=U,v(U.services),c.textContent=G("loadingDoctor");try{const q=await Xt.show(M,t);if(!$()||j!==k||r.value!==String(M))return;const le=nn(Ir(q,["staff","doctor"]))||U;h={...U,...le,services:le.services.length?le.services:U.services};const Se=s.value;v(h.services),h.services.some(no=>String(no.id)===Se)&&(s.value=Se,l.value&&_()),c.textContent=h.services.length?G("chooseFirst"):G("noServices")}catch(q){if(!$()||j!==k)return;console.error("Doctor detail API:",q),c.textContent=U.services.length?G("doctorError"):G("noServices")}}}async function P(M){const j=++N;u.textContent=G("loadingDoctor");try{const U=await Xt.schedule(M,t);if(!$()||j!==N||r.value!==String(M))return;const q=Mr(U);u.textContent=q.length?q.join(" · "):G("scheduleEmpty")}catch{if(!$()||j!==N)return;u.textContent=G("scheduleError")}}async function _(){const M=++T;if(L(G("chooseFirst")),!(!De(r.value)||!De(s.value)||!Jt(l.value)||l.value<rt())){L(G("loadingSlots")),c.textContent=G("loadingSlots");try{const j=await Dr.list({staff_id:r.value,service_id:s.value,date:l.value,interval:jn},t);if(!$()||M!==T)return;const U=Rr(j,Number(r.value));U.length?(S=U,d.innerHTML=U.map(q=>`
          <button
            type="button"
            class="dn-wizard-slot"
            data-wizard-slot="${Te(q.start_time)}"
            aria-pressed="false"
            aria-label="${Te(q.start_time)} – ${Te(q.end_time)}, ${Te(q.duration)} ${z("minutes")}"
          >

            <strong dir="ltr">
              ${Te(q.start_time)}
              –
              ${Te(q.end_time)}
            </strong>

            <small>
              ${Te(q.duration)}
              ${z("minutes")}
            </small>

          </button>
        `).join("")):L(G("emptySlots")),c.textContent=""}catch(j){if(!$()||M!==T)return;console.error("Availability API:",j),L(G("slotsError")),c.textContent=on(j,G("slotsError")),c.insertAdjacentHTML("beforeend",`
          <button
            type="button"
            class="dn-wizard-inline"
            data-wizard-retry-slots
          >
            ${z("retry")}
          </button>
        `)}}}function F(){n.hidden=!1,n.scrollIntoView({block:"start",behavior:"smooth"}),A||D(),r.focus()}function Ne(){x||(n.hidden=!0,C())}return e.addEventListener("click",M=>{if(M.target.closest("[data-booking-start]")){F();return}if(M.target.closest("[data-wizard-close]")){Ne();return}if(M.target.closest("[data-wizard-retry-doctors]")){D();return}if(M.target.closest("[data-wizard-retry-slots]")){_();return}const j=M.target.closest("[data-wizard-slot]");if(j&&d.contains(j)){const U=S.find(q=>q.start_time===j.dataset.wizardSlot);if(!U)return;b=U.start_time;for(const q of d.querySelectorAll("[data-wizard-slot]")){const le=q===j;q.classList.toggle("is-active",le),q.setAttribute("aria-pressed",String(le))}g()}},{signal:t}),r.addEventListener("change",()=>{++T,++N,++k,h=null,v([]),L(G("chooseFirst"));const M=Number(r.value);if(!De(M)){u.textContent=G("scheduleEmpty"),c.textContent=G("chooseFirst");return}E(M),P(M)},{signal:t}),s.addEventListener("change",()=>{C(),_()},{signal:t}),l.addEventListener("change",()=>{C(),_()},{signal:t}),l.addEventListener("input",()=>{l.value<rt()&&L(G("chooseFirst"))},{signal:t}),i.addEventListener("submit",async M=>{if(M.preventDefault(),x||!$())return;if(!S.some(q=>q.start_time===b)||!De(r.value)||!De(s.value)||!Jt(l.value)||l.value<rt()){y(G("required"),"error");return}if(!i.reportValidity())return;x=!0,g();const U=m.textContent;m.textContent=G("submitting"),C();try{const q=await it.create({booking_date:l.value,notes:o("[data-wizard-notes]").value.trim(),services:[{service_id:Number(s.value),staff_id:Number(r.value),start_time:b}]},t);if(!$())return;if((q==null?void 0:q.success)===!1||(q==null?void 0:q.status)===!1)throw new Error(String((q==null?void 0:q.message)||G("createError")));y(G("success"),"success"),n.hidden=!0,r.value="",v([]),l.value="",o("[data-wizard-notes]").value="",L(G("chooseFirst")),h=null,a()}catch(q){if(!$())return;console.error("Booking create API:",q),y(on(q,G("createError")),"error"),_()}finally{x=!1,m.textContent=U,g()}},{signal:t}),()=>{++k,++N,++T}}const Lt=()=>oe()==="fa"?"fa":"en",Fr={en:{newBooking:"Book a new appointment",loading:"Loading your appointments…",retry:"Try again",emptyTitle:"No appointments yet",emptyText:"When you book a dental visit, it will appear here.",loadError:"Could not load your appointments. Check your connection and try again.",detailError:"Could not load the appointment details.",appointment:"Appointment",details:"Appointment details",status:"Status",date:"Date",time:"Time",doctor:"Doctor",services:"Services",notes:"Notes",bookingNumber:"Booking",choose:"Choose an appointment to view its details.",view:"View details",cancel:"Cancel appointment",reschedule:"Change date or time",cancelReason:"Reason for cancellation",reasonPlaceholder:"Tell us why you need to cancel",confirmCancel:"Confirm cancellation",cancelConfirm:"Are you sure you want to cancel this appointment?",newDate:"New date",newTime:"New time",confirmReschedule:"Confirm change",back:"Back",saving:"Saving…",cancelled:"Appointment cancelled.",changed:"Appointment rescheduled.",actionError:"Could not update the appointment. Please try again.",pending:"Pending",confirmed:"Confirmed",completed:"Completed",cancelledStatus:"Cancelled",awaitingPayment:"Awaiting payment",unknown:"Status unavailable",noServices:"Service details unavailable",noDoctor:"Not assigned",noTime:"Time not available",listSubtitle:"Select an appointment to view its details or manage it.",loadMore:"Appointments",page:"Page",previous:"Previous",next:"Next",partial:"Some bookings may be on other pages; overview totals are not shown.",nextDate:"Next appointment",at:"at",upcoming:"Upcoming",available:"—",unsupported:"The clinic may restrict cancellations or rescheduling; its server validates every request.",bookingCreated:"Booking submitted. Refreshing your appointments…"},fa:{newBooking:"رزرو نوبت جدید",loading:"در حال دریافت نوبت‌های شما…",retry:"تلاش مجدد",emptyTitle:"هنوز نوبتی ندارید",emptyText:"بعد از ثبت رزرو، نوبت شما در این قسمت نمایش داده می‌شود.",loadError:"دریافت نوبت‌ها ممکن نشد. اتصال اینترنت را بررسی کنید و دوباره تلاش کنید.",detailError:"دریافت جزئیات نوبت ممکن نشد.",appointment:"نوبت",details:"جزئیات نوبت",status:"وضعیت",date:"تاریخ",time:"ساعت",doctor:"پزشک",services:"خدمات",notes:"یادداشت",bookingNumber:"شماره رزرو",choose:"برای مشاهده و مدیریت، یک نوبت را انتخاب کنید.",view:"مشاهده جزئیات",cancel:"لغو نوبت",reschedule:"تغییر تاریخ یا ساعت",cancelReason:"دلیل لغو",reasonPlaceholder:"دلیل لغو نوبت را بنویسید",confirmCancel:"تأیید لغو نوبت",cancelConfirm:"آیا از لغو این نوبت مطمئن هستید؟",newDate:"تاریخ جدید",newTime:"ساعت جدید",confirmReschedule:"تأیید تغییر زمان",back:"بازگشت",saving:"در حال ثبت…",cancelled:"نوبت لغو شد.",changed:"زمان نوبت تغییر کرد.",actionError:"ویرایش نوبت انجام نشد. لطفاً دوباره تلاش کنید.",pending:"در انتظار تأیید",confirmed:"تأییدشده",completed:"انجام‌شده",cancelledStatus:"لغوشده",awaitingPayment:"در انتظار پرداخت",unknown:"وضعیت نامشخص",noServices:"جزئیات خدمت موجود نیست",noDoctor:"تعیین نشده",noTime:"زمان مشخص نیست",listSubtitle:"برای نمایش جزئیات یا مدیریت، یک نوبت را انتخاب کنید.",loadMore:"نوبت‌ها",page:"صفحه",previous:"قبلی",next:"بعدی",partial:"ممکن است نوبت‌های دیگری در صفحات بعد وجود داشته باشد؛ مجموع در نمای کلی نشان داده نمی‌شود.",nextDate:"نوبت بعدی",at:"ساعت",upcoming:"آینده",available:"—",unsupported:"امکان لغو یا تغییر زمان ممکن است محدود باشد؛ اعتبارسنجی نهایی در سرور انجام می‌شود.",bookingCreated:"درخواست رزرو ثبت شد. در حال به‌روزرسانی نوبت‌ها…"}};function de(e){const t=w(`dashboard.booking.${e}`);return t&&t!==`dashboard.booking.${e}`?t:Fr[Lt()][e]??e}const fe=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),O=e=>fe(de(e)),zn=e=>Number.isSafeInteger(Number(e))&&Number(e)>0;function jr(e){var a;const t=(e==null?void 0:e.data)??e;if(Array.isArray(t))return t;for(const n of[t==null?void 0:t.data,t==null?void 0:t.bookings,(a=t==null?void 0:t.bookings)==null?void 0:a.data,t==null?void 0:t.items,e==null?void 0:e.bookings])if(Array.isArray(n))return n;return[]}function Hr(e){var s,l,d,c;const t=(e==null?void 0:e.data)??e,a=(t==null?void 0:t.meta)??(e==null?void 0:e.meta)??t,n=Number((a==null?void 0:a.current_page)??1),o=Number((a==null?void 0:a.last_page)??1),i=(t==null?void 0:t.next_page_url)??((s=t==null?void 0:t.links)==null?void 0:s.next)??((l=e==null?void 0:e.links)==null?void 0:l.next),r=(t==null?void 0:t.prev_page_url)??((d=t==null?void 0:t.links)==null?void 0:d.prev)??((c=e==null?void 0:e.links)==null?void 0:c.prev);return{current:Number.isFinite(n)&&n>0?n:1,last:Number.isFinite(o)&&o>0?o:1,partial:o>1||!!i||!!r,next:o>1?n<o:!!i,prev:n>1||!!r}}function Ur(e){var a;const t=(e==null?void 0:e.data)??e;return(t==null?void 0:t.booking)??((a=t==null?void 0:t.data)==null?void 0:a.booking)??(t==null?void 0:t.data)??t}function zr(e){return/^\d{4}-\d{2}-\d{2}$/.test(String(e||"").slice(0,10))}function Vn(e){const t=String(e??"").slice(0,10);return zr(t)?t:""}function rn(e){const t=String(e??"").trim();return/^\d{2}:\d{2}/.test(t)?t.slice(0,5):""}function Sa(e){const t=Vn(e);if(!t)return"—";const a=new Date(`${t}T12:00:00Z`);return Number.isNaN(a.getTime())?fe(t):fe(new Intl.DateTimeFormat(Lt()==="fa"?"fa-IR":"en-US",{dateStyle:"medium",timeZone:"UTC"}).format(a))}function ca(e){const t=String(e??"").toLowerCase();return{pending:"pending",awaiting_payment:"awaitingPayment",confirmed:"confirmed",completed:"completed",cancelled:"cancelledStatus",canceled:"cancelledStatus"}[t]?de({pending:"pending",awaiting_payment:"awaitingPayment",confirmed:"confirmed",completed:"completed",cancelled:"cancelledStatus",canceled:"cancelledStatus"}[t]):t?t.replace(/_/g," "):de("unknown")}function sn(e){var a,n,o,i,r,s,l,d;if(!e||typeof e!="object"||!zn(e.id))return null;const t=[e.booking_services,e.bookingServices,e.services,e.items].find(Array.isArray)??[];return{id:Number(e.id),date:Vn(e.booking_date??e.date),start:rn(e.start_time??((a=t[0])==null?void 0:a.start_time)),end:rn(e.end_time??((n=t[0])==null?void 0:n.end_time)),status:String(e.status??"").toLowerCase(),notes:e.notes??"",services:t.map(c=>{var u,p,m,f;return{name:((u=c==null?void 0:c.service)==null?void 0:u.name)??((p=c==null?void 0:c.service)==null?void 0:p.title)??(c==null?void 0:c.name)??(c==null?void 0:c.title)??"",staff:((m=c==null?void 0:c.staff)==null?void 0:m.name)??((f=c==null?void 0:c.doctor)==null?void 0:f.name)??""}}),doctor:((o=e.staff)==null?void 0:o.name)??((i=e.doctor)==null?void 0:i.name)??((s=(r=t[0])==null?void 0:r.staff)==null?void 0:s.name)??((d=(l=t[0])==null?void 0:l.doctor)==null?void 0:d.name)??""}}function da(e){const t=e.services.map(a=>a.name).filter(Boolean);return t.length?t.join(" • "):de("appointment")+" #"+e.id}function Vr(){const e=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Tehran",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hourCycle:"h23"}).formatToParts(new Date),t=Object.fromEntries(e.map(({type:a,value:n})=>[a,n]));return{date:`${t.year}-${t.month}-${t.day}`,time:`${t.hour}:${t.minute}`}}const Yn=new Set(["cancelled","canceled","completed","rejected","expired","no_show"]);function Gn(e){if(Yn.has(e.status)||!e.date)return!1;const t=Vr();return e.date>t.date||e.date===t.date&&(!e.start||e.start>=t.time)}function Yr(e){return!Yn.has(e.status)&&Gn(e)}function ln(e,t){return`${e.date||"9999-99-99"}T${e.start||"99:99"}`.localeCompare(`${t.date||"9999-99-99"}T${t.start||"99:99"}`)}function Gr(e){return`<li class="dn-booking-list-item"><button type="button" class="dn-booking-row" data-booking-open="${e.id}" aria-label="${O("view")}: ${fe(da(e))}">
    <span class="dn-booking-date"><strong>${Sa(e.date)}</strong><small>${fe(e.start||de("noTime"))}</small></span>
    <span class="dn-booking-desc"><strong>${fe(da(e))}</strong><small>#${e.id} · ${fe(ca(e.status))}</small></span>
    <span class="dn-booking-row-arrow" aria-hidden="true">→</span>
  </button></li>`}function Wr(e){const t=Yr(e),a=e.services.map(n=>n.name).filter(Boolean).join(" • ");return`<div class="dn-booking-detail-head"><div><span class="dn-eyebrow">${O("details")}</span><h2>${O("bookingNumber")} #${e.id}</h2></div><span class="dn-booking-pill">${fe(ca(e.status))}</span></div>
    <dl class="dn-booking-details">
      <div><dt>${O("date")}</dt><dd>${Sa(e.date)}</dd></div>
      <div><dt>${O("time")}</dt><dd>${fe(e.start||de("noTime"))}${e.end?" – "+fe(e.end):""}</dd></div>
      <div><dt>${O("services")}</dt><dd>${fe(a||de("noServices"))}</dd></div>
      <div><dt>${O("doctor")}</dt><dd>${fe(e.doctor||de("noDoctor"))}</dd></div>
      <div><dt>${O("status")}</dt><dd>${fe(ca(e.status))}</dd></div>
      ${e.notes?`<div><dt>${O("notes")}</dt><dd>${fe(e.notes)}</dd></div>`:""}
    </dl>
    ${t?`<div class="dn-booking-actions"><button type="button" class="dn-booking-secondary" data-booking-toggle="reschedule">${O("reschedule")}</button><button type="button" class="dn-booking-danger-link" data-booking-toggle="cancel">${O("cancel")}</button></div>
      <form class="dn-booking-form" data-booking-reschedule hidden>
        <label>${O("newDate")}<input type="date" name="booking_date" value="${fe(e.date)}" required/></label>
        <label>${O("newTime")}<input type="time" name="start_time" value="${fe(e.start)}" required/></label>
        <div class="dn-booking-form-buttons"><button type="submit" class="dn-button dn-button-primary">${O("confirmReschedule")}</button><button type="button" data-booking-close-form>${O("back")}</button></div>
      </form>
      <form class="dn-booking-form" data-booking-cancel hidden>
        <label>${O("cancelReason")}<textarea name="reason" rows="3" required maxlength="500" placeholder="${O("reasonPlaceholder")}"></textarea></label>
        <label class="dn-booking-check"><input type="checkbox" name="confirm" required/><span>${O("cancelConfirm")}</span></label>
        <div class="dn-booking-form-buttons"><button type="submit" class="dn-booking-danger">${O("confirmCancel")}</button><button type="button" data-booking-close-form>${O("back")}</button></div>
      </form>
      <p class="dn-booking-policy">${O("unsupported")}</p>`:""}`}function Zr(){return`<div class="dn-booking-header"><p>${O("listSubtitle")}</p><button type="button" class="dn-button dn-button-primary" data-booking-start>${O("newBooking")} ↗</button></div>
    ${Or()}
    <p data-booking-notice class="dn-booking-notice" role="status" aria-live="polite" hidden></p>
    <div data-bookings-loading class="dn-booking-message">${O("loading")}</div>
    <div data-bookings-error class="dn-booking-message dn-booking-error" hidden><p>${O("loadError")}</p><button type="button" class="dn-booking-secondary" data-bookings-retry>${O("retry")}</button></div>
    <div data-bookings-empty hidden>${`<div class="dn-empty-state"><div class="dn-empty-visual"><span aria-hidden="true"></span></div><h2>${O("emptyTitle")}</h2><p>${O("emptyText")}</p><button type="button" class="dn-button dn-button-primary" data-booking-start>${O("newBooking")}</button></div>`}</div>
    <div data-bookings-content class="dn-booking-columns" hidden><section class="dn-booking-list-card" aria-label="${O("loadMore")}"><ul data-booking-list class="dn-booking-list"></ul><div class="dn-booking-pagination" data-booking-pagination hidden><button type="button" data-booking-page="prev">${O("previous")}</button><span data-booking-page-label></span><button type="button" data-booking-page="next">${O("next")}</button></div></section><section class="dn-booking-detail-card" data-booking-detail><p class="dn-booking-hint">${O("choose")}</p></section></div>`}function Kr(e,t){const a=v=>e.querySelector(v),n=a("[data-bookings-loading]"),o=a("[data-bookings-error]"),i=a("[data-bookings-empty]"),r=a("[data-bookings-content]"),s=a("[data-booking-list]"),l=a("[data-booking-detail]"),d=a("[data-booking-notice]"),c=a("[data-booking-pagination]"),u=a("[data-booking-page-label]");let p=[],m=null,f=1,h={current:1,last:1,partial:!1,next:!1,prev:!1},b=0,S=0,A=!1;const k=()=>!t.aborted&&e.isConnected;function T(v,D="info"){d.textContent=v,d.dataset.state=D,d.hidden=!1}function N(){l.innerHTML=`<p class="dn-booking-hint">${O("choose")}</p>`}function x(){var _;if(h.partial)return;const v=p.filter(Gn).sort(ln),D=a('[data-dashboard-stat="upcoming"]');if(D){D.textContent=String(v.length),D.removeAttribute("aria-label");const F=(_=D.parentElement)==null?void 0:_.querySelector("small");F&&(F.textContent=de("upcoming"))}const E=a("[data-dashboard-next-title]"),P=a("[data-dashboard-next-description]");if(v.length){const F=v[0];E&&(E.textContent=da(F)),P&&(P.textContent=`${Sa(F.date)} · ${F.start||de("noTime")}`)}else E&&(E.textContent=w("dashboard.noNextVisit")!=="dashboard.noNextVisit"?w("dashboard.noNextVisit"):Lt()==="fa"?"هنوز نوبت آینده‌ای ثبت نشده":"No upcoming appointment yet"),P&&(P.textContent=w("dashboard.nextVisitHint")!=="dashboard.nextVisitHint"?w("dashboard.nextVisitHint"):Lt()==="fa"?"پس از رزرو نوبت، جزئیات آن اینجا نمایش داده می‌شود.":"When you book a visit, the details will appear here.")}async function $(){var D;const v=++b;S++,n.hidden=!1,o.hidden=!0,i.hidden=!0,r.hidden=!0,d.hidden=!0;try{const E=await it.list(t,f);if(!k()||v!==b)return;if(p=jr(E).map(sn).filter(Boolean).sort(ln),h=Hr(E),n.hidden=!0,x(),!p.length){i.hidden=f!==1,f!==1&&(f=1,$());return}if(s.innerHTML=p.map(Gr).join(""),r.hidden=!1,c.hidden=!h.partial,u.textContent=`${de("page")} ${h.current}${h.last>1?` / ${h.last}`:""}`,c.querySelector('[data-booking-page="prev"]').disabled=!h.prev,c.querySelector('[data-booking-page="next"]').disabled=!h.next,h.partial){const P=a('[data-dashboard-stat="upcoming"]');P&&(P.textContent="—",(D=P.parentElement)!=null&&D.querySelector("small")&&(P.parentElement.querySelector("small").textContent=de("partial")));const _=a("[data-dashboard-next-title]"),F=a("[data-dashboard-next-description]");_&&(_.textContent="—"),F&&(F.textContent=de("partial"))}m&&p.some(P=>P.id===m)?await y(m):(m=null,N())}catch(E){if(!k()||v!==b)return;console.error("Booking list API:",E),n.hidden=!0,o.hidden=!1}}async function y(v){if(!zn(v)||!k())return;const D=++S;m=Number(v),l.innerHTML=`<p class="dn-booking-hint">${O("loading")}</p>`;try{const E=await it.show(v,t);if(!k()||D!==S)return;const P=sn(Ur(E));if(!P||P.id!==Number(v))throw new Error("Invalid booking detail response");l.innerHTML=Wr(P)}catch(E){if(!k()||D!==S)return;console.error("Booking detail API:",E),l.innerHTML=`<p class="dn-booking-hint dn-booking-error">${O("detailError")}</p>`}}function C(v){var E;const D=v==="cancel"?l.querySelector("[data-booking-cancel]"):l.querySelector("[data-booking-reschedule]");for(const P of l.querySelectorAll(".dn-booking-form"))P.hidden=P!==D;(E=D==null?void 0:D.querySelector("textarea,input"))==null||E.focus()}async function g(v,D){if(!(A||!m)&&v.reportValidity()){A=!0;for(const E of l.querySelectorAll("button"))E.disabled=!0;T(de("saving"));try{if(D==="cancel"){const P=v.elements.namedItem("reason").value.trim();if(!P){T(de("cancelReason"),"error");return}await it.cancel(m,P,t)}else await it.reschedule(m,v.elements.namedItem("booking_date").value,v.elements.namedItem("start_time").value,t);if(!k())return;const E=m;await $(),k()&&(T(de(D==="cancel"?"cancelled":"changed"),"success"),await y(E))}catch(E){if(!k())return;console.error("Booking change API:",E);const P=(E==null?void 0:E.errors)&&Object.values(E.errors).flat().join(" · ")||(E==null?void 0:E.message);T(P&&typeof P=="string"?P:de("actionError"),"error")}finally{if(A=!1,k())for(const E of l.querySelectorAll("button"))E.disabled=!1}}}e.addEventListener("click",v=>{if(v.target.closest("[data-bookings-retry]")){$();return}const E=v.target.closest("[data-booking-page]");if(E&&!A){const F=E.dataset.bookingPage;if(F==="next"&&h.next)f+=1;else if(F==="prev"&&h.prev)f=Math.max(1,f-1);else return;m=null,$();return}const P=v.target.closest("[data-booking-open]");if(P){A||y(P.dataset.bookingOpen);return}const _=v.target.closest("[data-booking-toggle]");if(_){C(_.dataset.bookingToggle);return}if(v.target.closest("[data-booking-close-form]"))for(const F of l.querySelectorAll(".dn-booking-form"))F.hidden=!0},{signal:t}),e.addEventListener("submit",v=>{const D=v.target.closest("[data-booking-cancel]"),E=v.target.closest("[data-booking-reschedule]");!D&&!E||(v.preventDefault(),g(D||E,D?"cancel":"reschedule"))},{signal:t});const L=Br(e,t,async()=>{f=1,m=null,await $(),k()&&T(de("bookingCreated"),"success")});return $(),()=>{b++,S++,typeof L=="function"&&L()}}function ea(e){const t=Number(e);if(!Number.isSafeInteger(t)||t<1)throw new TypeError("Treatment plan ID must be a positive integer.");return t}const ft={list(e=1,t=null){const a=Number(e);if(!Number.isSafeInteger(a)||a<1)throw new TypeError("Page must be a positive integer.");const n=a>1?`?page=${a}`:"";return K(`/v1/treatment-plans${n}`,{auth:!0,signal:t})},show(e,t=null){return K(`/v1/treatment-plans/${ea(e)}`,{auth:!0,signal:t})},items(e,t=null){return K(`/v1/treatment-plans/${ea(e)}/items`,{auth:!0,signal:t})},progress(e,t=null){return K(`/v1/treatment-plans/${ea(e)}/progress`,{auth:!0,signal:t})}},Pt=()=>oe()==="fa",Qr={en:{loading:"Loading treatment plans…",empty:"No treatment plans have been shared with you yet.",error:"Could not load your treatment plans.",retry:"Try again",details:"Plan details",choose:"Select a treatment plan to view its details.",stages:"Treatment stages",progress:"Progress",noItems:"No treatment stages are available.",itemsError:"Unable to load treatment stages.",progressError:"Progress information is currently unavailable.",doctor:"Doctor",tooth:"Tooth",date:"Created",updated:"Updated",unavailable:"Not provided",total:"Plans",page:"Page",previous:"Previous",next:"Next",noTitle:"Treatment plan",stage:"Treatment stage",privacy:"Only treatment information available to your patient account is displayed.",done:"Completed",doing:"In progress",planned:"Planned",approved:"Approved",pending:"Pending",canceled:"Cancelled",draft:"Draft"},fa:{loading:"در حال دریافت طرح‌های درمان…",empty:"هنوز طرح درمانی برای شما منتشر نشده است.",error:"دریافت طرح‌های درمان انجام نشد.",retry:"تلاش مجدد",details:"جزئیات طرح درمان",choose:"برای مشاهده جزئیات، یک طرح درمان را انتخاب کنید.",stages:"مراحل درمان",progress:"پیشرفت درمان",noItems:"مرحله درمانی برای نمایش موجود نیست.",itemsError:"دریافت مراحل درمان ممکن نشد.",progressError:"اطلاعات پیشرفت درمان فعلاً در دسترس نیست.",doctor:"پزشک",tooth:"دندان",date:"تاریخ ایجاد",updated:"آخرین تغییر",unavailable:"ثبت نشده",total:"طرح‌ها",page:"صفحه",previous:"قبلی",next:"بعدی",noTitle:"طرح درمان",stage:"مرحله درمان",privacy:"فقط اطلاعاتی نمایش داده می‌شود که دسترسی آن برای حساب بیمار مجاز باشد.",done:"انجام‌شده",doing:"در حال انجام",planned:"برنامه‌ریزی‌شده",approved:"تأییدشده",pending:"در انتظار",canceled:"لغوشده",draft:"پیش‌نویس"}};function ne(e){const t=`dashboard.treatment.${e}`,a=w(t);return a&&a!==t?a:Qr[Pt()?"fa":"en"][e]??e}function ye(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}const me=e=>ye(ne(e)),Je=e=>e&&typeof e=="object"&&!Array.isArray(e)?e:{},ua=e=>Number.isSafeInteger(Number(e))&&Number(e)>0;function cn(e,t){const a=(e==null?void 0:e.data)??e,n=[a,a==null?void 0:a.data,...t.map(o=>a==null?void 0:a[o]),...t.map(o=>{var i;return(i=a==null?void 0:a.data)==null?void 0:i[o]})];for(const o of n)if(Array.isArray(o))return o;return null}function Xr(e){const t=(e==null?void 0:e.data)??e;return Je((t==null?void 0:t.treatment_plan)??(t==null?void 0:t.treatmentPlan)??(t==null?void 0:t.plan)??(t==null?void 0:t.data)??t)}function Wn(e){const t=(e==null?void 0:e.translations)??(e==null?void 0:e.translates)??(e==null?void 0:e.translation);return Array.isArray(t)?t.find(a=>[a==null?void 0:a.lang,a==null?void 0:a.locale,a==null?void 0:a.language].includes(Pt()?"fa":"en"))||{}:t&&typeof t=="object"?t[Pt()?"fa":"en"]??t:{}}function Ta(e,t){var n;const a=Wn(e);return String((a==null?void 0:a.title)??(a==null?void 0:a.title_1)??(a==null?void 0:a.name)??(e==null?void 0:e.title)??(e==null?void 0:e.title_1)??(e==null?void 0:e.name)??(e==null?void 0:e.plan_title)??((n=e==null?void 0:e.service)==null?void 0:n.name)??t).trim()}function Zn(e){const t=Je((e==null?void 0:e.doctor)??(e==null?void 0:e.staff)??(e==null?void 0:e.dentist));return String(t.name??t.full_name??(e==null?void 0:e.doctor_name)??(e==null?void 0:e.staff_name)??"").trim()}function Nt(e){if(!e)return"";const t=String(e).slice(0,10);if(!/^\d{4}-\d{2}-\d{2}$/.test(t))return"";const a=new Date(`${t}T12:00:00Z`);return Number.isNaN(a.getTime())?"":new Intl.DateTimeFormat(Pt()?"fa-IR":"en-GB",{year:"numeric",month:"short",day:"numeric",timeZone:"UTC"}).format(a)}function Ea(e){const t=String(e??"").trim(),a={completed:"done",done:"done",in_progress:"doing",active:"doing",planned:"planned",approved:"approved",pending:"pending",cancelled:"canceled",canceled:"canceled",draft:"draft"}[t.toLowerCase()];return a?ne(a):t||ne("unavailable")}function Jr(e){const t=(e==null?void 0:e.data)??e,a=Je((t==null?void 0:t.progress)??(t==null?void 0:t.data)??t),n=a.progress_percentage??a.progress_percent??a.percentage??a.completion_percentage??a.percent;if(n!=null&&n!==""){const r=Number(n);return Number.isFinite(r)&&r>=0&&r<=100?Math.round(r):null}const o=Number(a.completed_items??a.completed_count),i=Number(a.total_items??a.total_count);return Number.isInteger(o)&&Number.isInteger(i)&&i>0&&o>=0&&o<=i?Math.round(o*100/i):null}function es(e){var s,l;const t=(e==null?void 0:e.data)??e,a=Je((t==null?void 0:t.meta)??(e==null?void 0:e.meta)??t),n=Number(a.current_page??1),o=Number(a.last_page??1),i=!!((t==null?void 0:t.next_page_url)??((s=t==null?void 0:t.links)==null?void 0:s.next))||o>1&&n<o,r=!!((t==null?void 0:t.prev_page_url)??((l=t==null?void 0:t.links)==null?void 0:l.prev))||n>1;return{current:n>0?n:1,prev:r,next:i}}function ts(e){const t=Number(e==null?void 0:e.id);if(!ua(t))return"";const a=Ta(e,ne("noTitle")),n=Zn(e),o=Nt(e.created_at??e.plan_date),i=[n,o].filter(Boolean).join(" · ")||ne("details");return`
    <li class="dn-treatment-entry">

      <button
        type="button"
        class="dn-treatment-card"
        data-treatment-id="${t}"
      >

        <span
          class="dn-treatment-card-icon"
          aria-hidden="true"
        >
          ✦
        </span>

        <span class="dn-treatment-card-info">

          <strong>
            ${ye(a)}
          </strong>

          <small>
            ${ye(i)}
          </small>

        </span>

        <span class="dn-treatment-status">
          ${ye(Ea(e.status))}
        </span>

        <span
          class="dn-treatment-arrow"
          aria-hidden="true"
        >
          ›
        </span>

      </button>

    </li>
  `}function ht(e,t){return t==null||String(t).trim()===""?"":`
    <div class="dn-treatment-meta-field">
      <dt>${me(e)}</dt>
      <dd>${ye(t)}</dd>
    </div>
  `}function as(e,t){var d;const a=Je(e),n=Je(a.service),o=Ta(a,n.name??`${ne("stage")} ${t+1}`),i=a.tooth_number??((d=a.tooth)==null?void 0:d.number),r=Nt(a.completed_at??a.scheduled_date??a.created_at),s=a.patient_notes??a.public_notes??"",l=[i!=null?`${ne("tooth")}: ${i}`:"",r].filter(Boolean).join(" · ");return`
    <li class="dn-treatment-stage">

      <span class="dn-treatment-step-number">
        ${t+1}
      </span>

      <div class="dn-treatment-stage-content">

        <strong>
          ${ye(o)}
        </strong>

        ${s?`<p>${ye(s)}</p>`:""}

        <small>
          ${ye(l)}
        </small>

      </div>

      <span class="dn-treatment-status">
        ${ye(Ea(a.status))}
      </span>

    </li>
  `}function ns(){return`
    <div
      class="dn-treatments"
      data-treatment-root
    >

      <div class="dn-treatment-toolbar">

        <p>
          ${me("privacy")}
        </p>

        <button
          type="button"
          class="dn-treatment-retry"
          data-treatment-refresh
        >
          ${me("retry")}
        </button>

      </div>

      <div class="dn-treatment-columns">

        <!-- PLANS LIST -->

        <section
          class="dn-treatment-list-surface"
          aria-label="${me("total")}"
        >

          <div class="dn-treatment-section-label">
            ${me("total")}
          </div>

          <p
            class="dn-treatment-info"
            data-treatment-list-status
            aria-live="polite"
          >
            ${me("loading")}
          </p>

          <ul
            class="dn-treatment-list"
            data-treatment-list
          ></ul>

          <div
            class="dn-treatment-pager"
            data-treatment-pagination
            hidden
          >

            <button
              type="button"
              data-treatment-prev
            >
              ${me("previous")}
            </button>

            <span data-treatment-page></span>

            <button
              type="button"
              data-treatment-next
            >
              ${me("next")}
            </button>

          </div>

        </section>

        <!-- PLAN DETAILS -->

        <section
          class="dn-treatment-detail-surface"
          aria-label="${me("details")}"
        >

          <div class="dn-treatment-section-label">
            ${me("details")}
          </div>

          <div
            data-treatment-details
            aria-live="polite"
          >
            <p class="dn-treatment-info">
              ${me("choose")}
            </p>
          </div>

        </section>

      </div>

    </div>
  `}function os(e,t){const a=e.querySelector("[data-treatment-root]");if(!a)return{load(){},cleanup(){}};const n=$=>a.querySelector($),o=n("[data-treatment-list]"),i=n("[data-treatment-list-status]"),r=n("[data-treatment-details]"),s=n("[data-treatment-pagination]"),l=n("[data-treatment-prev]"),d=n("[data-treatment-next]"),c=n("[data-treatment-page]");let u=!1,p=1,m=0,f=0,h=null,b=null;const S=()=>!t.aborted&&a.isConnected;function A($){i.textContent=$,i.hidden=!1}function k($){r.innerHTML=`
      <p class="dn-treatment-info">
        ${ye($)}
      </p>
    `}function T(){++f,b==null||b.abort(),b=null}async function N($=p){if(!S())return;u=!0;const y=++m;h==null||h.abort(),T(),h=new AbortController,p=$,A(ne("loading")),o.replaceChildren(),s.hidden=!0,k(ne("choose"));try{const C=await ft.list($,h.signal);if(!S()||y!==m)return;const g=cn(C,["treatment_plans","treatmentPlans","plans"]);if(!g)throw new Error("UNSUPPORTED_TREATMENT_LIST_RESPONSE");const L=g.filter(D=>ua(D==null?void 0:D.id));o.innerHTML=L.map(ts).join(""),L.length?i.hidden=!0:A(ne("empty"));const v=es(C);p=v.current,s.hidden=!(v.next||v.prev),c.textContent=`${ne("page")} ${p}`,l.disabled=!v.prev,d.disabled=!v.next}catch(C){if(!S()||y!==m)return;console.error("Treatment plans list:",C),A(ne("error"))}}async function x($){var L,v;if(!S()||!ua($))return;T();const y=f,C=new AbortController;b=C;const g=()=>S()&&y===f&&!C.signal.aborted;a.querySelectorAll("[data-treatment-id]").forEach(D=>{D.classList.toggle("is-selected",Number(D.dataset.treatmentId)===Number($))}),k(ne("loading"));try{const D=await ft.show($,C.signal);if(!g())return;const E=Xr(D);if(Number(E.id??$)!==Number($)){k(ne("error"));return}const _=Zn(E),F=Ta(E,ne("noTitle")),Ne=Ea(E.status),M=E.tooth_number??((L=E.tooth)==null?void 0:L.number),j=((v=Wn(E))==null?void 0:v.patient_description)??E.patient_description??E.public_description??"";r.innerHTML=`
        <div class="dn-treatment-detail-head">

          <h2>
            ${ye(F)}
          </h2>

          <span class="dn-treatment-status">
            ${ye(Ne)}
          </span>

        </div>

        ${j?`
              <p class="dn-treatment-description">
                ${ye(j)}
              </p>
            `:""}

        <dl class="dn-treatment-metadata">
          ${ht("doctor",_)}
          ${ht("tooth",M)}
          ${ht("date",Nt(E.created_at))}
          ${ht("updated",Nt(E.updated_at))}
        </dl>

        <div class="dn-treatment-progress-block">

          <div class="dn-treatment-subtitle">
            ${me("progress")}
          </div>

          <div
            data-treatment-progress
            class="dn-treatment-info"
          >
            ${me("loading")}
          </div>

        </div>

        <div class="dn-treatment-stages-block">

          <div class="dn-treatment-subtitle">
            ${me("stages")}
          </div>

          <div
            data-treatment-stages
            class="dn-treatment-info"
          >
            ${me("loading")}
          </div>

        </div>
      `;const U=n("[data-treatment-progress]"),q=n("[data-treatment-stages]");ft.progress($,C.signal).then(le=>{if(!g())return;const Se=Jr(le);if(Se===null){U.textContent=ne("progressError");return}U.innerHTML=`
          <div class="dn-treatment-progress-line">
            <strong dir="ltr">
              ${Se}%
            </strong>
          </div>

          <div
            class="dn-treatment-progress-track"
            role="progressbar"
            aria-valuenow="${Se}"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-label="${me("progress")}"
          >
            <span
              style="width:${Se}%"
            ></span>
          </div>
        `}).catch(le=>{g()&&(console.error("Treatment progress:",le),U.textContent=ne("progressError"))}),ft.items($,C.signal).then(le=>{if(!g())return;const Se=cn(le,["items","plan_items","treatment_items","stages"]);if(!Se){q.textContent=ne("itemsError");return}q.innerHTML=Se.length?`
            <ol class="dn-treatment-stages">
              ${Se.map(as).join("")}
            </ol>
          `:`
            <p class="dn-treatment-info">
              ${me("noItems")}
            </p>
          `}).catch(le=>{g()&&(console.error("Treatment items:",le),q.textContent=ne("itemsError"))})}catch(D){if(!g())return;console.error("Treatment plan detail:",D),k(ne("error"))}}return a.addEventListener("click",$=>{const y=$.target.closest("button");!y||!a.contains(y)||(y.hasAttribute("data-treatment-refresh")?N(1):y.hasAttribute("data-treatment-id")?x(Number(y.dataset.treatmentId)):y.hasAttribute("data-treatment-prev")&&p>1?N(p-1):y.hasAttribute("data-treatment-next")&&N(p+1))},{signal:t}),{load(){u||N(1)},cleanup(){++m,++f,h==null||h.abort(),b==null||b.abort()}}}const $t=e=>{const t=Number(e);if(!Number.isSafeInteger(t)||t<1)throw new TypeError("Invalid ID");return t},et=e=>`/v1/dental-records/${$t(e)}`,Ke={list(e=1,t=null){const a=$t(e);return K(`/v1/dental-records${a>1?`?page=${a}`:""}`,{auth:!0,signal:t})},show(e,t=null){return K(et(e),{auth:!0,signal:t})},treatments(e,t=null){return K(`${et(e)}/treatments`,{auth:!0,signal:t})},odontogram(e,t=null){return K(`${et(e)}/odontogram`,{auth:!0,signal:t})},attachments(e,t=null){return K(`${et(e)}/attachments`,{auth:!0,signal:t})},async attachmentFile(e,t,a="view",n=null){var d,c;if(!["view","download"].includes(a))throw new TypeError("Invalid attachment mode");const o=We();if(!o)throw new Error("Please log in again.");const i=`${String(Mt).replace(/\/+$/,"")}${et(e)}/attachments/${$t(t)}/${a}`,r=await fetch(i,{method:"GET",headers:{Authorization:/^Bearer\s/i.test(o)?o:`Bearer ${o}`,Accept:"application/pdf, image/*, application/octet-stream, application/json"},signal:n});if(!r.ok){const p=(r.headers.get("content-type")||"").includes("application/json")?await r.json().catch(()=>null):null;throw new Error((p==null?void 0:p.message)||`File request failed (${r.status}).`)}const s=r.headers.get("content-disposition")||"";let l=(d=s.match(/filename\*=UTF-8''([^;]+)/i))==null?void 0:d[1];if(l)try{l=decodeURIComponent(l)}catch{}else l=(c=s.match(/filename="?([^";]+)"?/i))==null?void 0:c[1];return l=String(l||`attachment-${$t(t)}`).replace(/[\\/\r\n]/g,"_"),{blob:await r.blob(),filename:l}}},Kn=()=>oe()==="fa",is={en:{loading:"Loading dental records…",empty:"No dental records are available.",error:"Dental records could not be loaded.",retry:"Retry",select:"Select a record to view details.",details:"Record details",treatments:"Completed treatments",odontogram:"Tooth chart",files:"Attachments",noTreatments:"No treatments available.",noTeeth:"No tooth data available.",noFiles:"No attachments available.",unavailable:"Information unavailable.",doctor:"Doctor",date:"Date",diagnosis:"Diagnosis",status:"Status",tooth:"Tooth",view:"View",download:"Download",close:"Close preview",previewError:"This file cannot be previewed safely; use Download.",requestError:"Could not retrieve the file.",upper:"Upper jaw",lower:"Lower jaw",noData:"No data",page:"Page",prev:"Previous",next:"Next",record:"Record",chiefComplaint:"Chief complaint",examination:"Examination",patientNotes:"Patient notes",finalized:"Finalized",draft:"Draft",caries:"Tooth decay",crown:"Crown",filled:"Filled",healthy:"Healthy",missing:"Missing",treated:"Treated",xray:"X-Ray",image:"Image",document:"Document",otherTeeth:"Other teeth",unknownTeethNote:"Teeth without recorded data are not assumed to be healthy.",teethCount:"Teeth",serviceLabel:"Service"},fa:{loading:"در حال دریافت پرونده‌ها…",empty:"هنوز پرونده‌ای برای نمایش موجود نیست.",error:"دریافت پرونده‌ها انجام نشد.",retry:"تلاش دوباره",select:"برای مشاهده جزئیات، یک پرونده را انتخاب کنید.",details:"جزئیات پرونده",treatments:"درمان‌های انجام‌شده",odontogram:"نقشه دندان‌ها",files:"پیوست‌ها",noTreatments:"درمانی برای نمایش موجود نیست.",noTeeth:"اطلاعات دندان‌ها موجود نیست.",noFiles:"پیوستی موجود نیست.",unavailable:"اطلاعات در دسترس نیست.",doctor:"پزشک",date:"تاریخ",diagnosis:"تشخیص",status:"وضعیت",tooth:"دندان",view:"مشاهده",download:"دریافت",close:"بستن پیش‌نمایش",previewError:"پیش‌نمایش امن این نوع فایل ممکن نیست؛ از دریافت فایل استفاده کنید.",requestError:"دریافت فایل انجام نشد.",upper:"فک بالا",lower:"فک پایین",noData:"بدون اطلاعات",page:"صفحه",prev:"قبلی",next:"بعدی",record:"پرونده",serviceLabel:"خدمت",chiefComplaint:"شکایت اصلی بیمار",examination:"نتیجه معاینه",patientNotes:"یادداشت بیمار",finalized:"نهایی‌شده",draft:"پیش‌نویس",caries:"پوسیدگی",crown:"روکش",filled:"پرشده",healthy:"سالم",missing:"ازدست‌رفته",treated:"درمان‌شده",xray:"رادیوگرافی",image:"تصویر",document:"مدرک",otherTeeth:"دندان‌های دیگر",unknownTeethNote:"دندان‌های فاقد اطلاعات ثبت‌شده، سالم فرض نمی‌شوند.",teethCount:"دندان‌ها"}};function Z(e){const t=`dashboard.records.${e}`,a=w(t);return a&&a!==t?a:is[Kn()?"fa":"en"][e]||e}function ae(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}const I=e=>ae(Z(e)),kt=e=>Number.isSafeInteger(Number(e))&&Number(e)>0;function Bt(e,t=[]){var o;const a=(e==null?void 0:e.data)??e;return[a,a==null?void 0:a.data,a==null?void 0:a.teeth,(o=a==null?void 0:a.odontogram)==null?void 0:o.teeth,...t.flatMap(i=>{var r,s,l,d,c;return[a==null?void 0:a[i],(r=a==null?void 0:a[i])==null?void 0:r.data,(s=a==null?void 0:a[i])==null?void 0:s.teeth,(l=a==null?void 0:a.data)==null?void 0:l[i],(c=(d=a==null?void 0:a.data)==null?void 0:d[i])==null?void 0:c.data]})].find(Array.isArray)??null}function rs(e){const t=(e==null?void 0:e.data)??e;return(t==null?void 0:t.dental_record)??(t==null?void 0:t.record)??(t==null?void 0:t.data)??t??{}}function Qn(e){return typeof e=="string"?e:(e==null?void 0:e.name)??(e==null?void 0:e.full_name)??""}function Xn(e){return(e==null?void 0:e.title)||(e==null?void 0:e.name)||(e==null?void 0:e.record_title)||`${Z("record")} #${(e==null?void 0:e.id)??"?"}`}function Ft(e){if(!e)return"";const t=String(e).slice(0,10);if(!/^\d{4}-\d{2}-\d{2}$/.test(t))return"";const a=new Date(`${t}T12:00:00Z`);return Number.isNaN(a.valueOf())?"":new Intl.DateTimeFormat(Kn()?"fa-IR":"en-GB",{dateStyle:"medium",timeZone:"UTC"}).format(a)}function ss(e){var i;const t=(e==null?void 0:e.data)??e,a=(t==null?void 0:t.meta)??(e==null?void 0:e.meta)??t,n=Number(a==null?void 0:a.current_page)||1,o=Number(a==null?void 0:a.last_page)||1;return{current:n,previous:n>1,next:!!(t!=null&&t.next_page_url||(i=t==null?void 0:t.links)!=null&&i.next)||n<o}}function Ue(e,t){return t==null||t===""?"":`
    <div class="dn-record-pair">
      <dt>${I(e)}</dt>
      <dd>${ae(t)}</dd>
    </div>
  `}function ls(e){const t=Number(e==null?void 0:e.id);if(!Number.isSafeInteger(t)||t<1)return"";const a=Ft(e.examined_at??e.visit_date??e.created_at),n=Qn(e.doctor),o=String(e.chief_complaint??"").trim(),i=String(e.diagnosis??"").trim(),r=String(e.status??"").toLowerCase(),s={finalized:Z("finalized"),draft:Z("draft")}[r]??r,l=Number(e.treatments_count??0),d=Number(e.teeth_count??0),c=Number(e.attachments_count??0),u=p=>Number.isFinite(p)&&p>=0?p:0;return`
    <li>
      <button
        type="button"
        class="dn-record-card"
        data-record-id="${t}"
      >

        <div class="dn-record-card-top">

          <strong>
            ${ae(Xn(e))}
          </strong>

          ${r?`
                <span class="dn-record-status">
                  ${ae(s)}
                </span>
              `:""}

        </div>

        <div class="dn-record-card-details">

          ${a?`
                <span>
                  ${ae(a)}
                </span>
              `:""}

          ${n?`
                <span>
                  ${I("doctor")}: ${ae(n)}
                </span>
              `:""}

        </div>

        ${o?`
              <p class="dn-record-complaint">
                ${ae(o)}
              </p>
            `:""}

        ${i?`
              <p class="dn-record-diagnosis">
                ${I("diagnosis")}: ${ae(i)}
              </p>
            `:""}

        <div class="dn-record-counts">

          <span>
            ${I("treatments")}:
            <b>${u(l)}</b>
          </span>

          <span>
            ${I("teethCount")}:
            <b>${u(d)}</b>
          </span>

          <span>
            ${I("files")}:
            <b>${u(c)}</b>
          </span>

        </div>

      </button>
    </li>
  `}function cs(e){const t=Bt(e,["treatments","treatment_history","items"]);return t?t.length?`
    <ul class="dn-record-sublist dn-treatment-history">

      ${t.map((a,n)=>{var c,u,p;const o=String((a==null?void 0:a.title)??(a==null?void 0:a.name)??(a==null?void 0:a.treatment_name)??`${Z("treatments")} ${n+1}`).trim(),i=String(((c=a==null?void 0:a.service)==null?void 0:c.name)??"").trim(),r=String(((u=a==null?void 0:a.doctor)==null?void 0:u.name)??(a==null?void 0:a.doctor_name)??"").trim(),s=(a==null?void 0:a.tooth_number)??((p=a==null?void 0:a.tooth)==null?void 0:p.number)??null,l=Ft((a==null?void 0:a.performed_at)??(a==null?void 0:a.completed_at)??(a==null?void 0:a.treatment_date)),d=String((a==null?void 0:a.description)??"").trim();return`
          <li class="dn-treatment-history-item">

            <div class="dn-treatment-history-info">

              <strong>
                ${ae(o)}
              </strong>

              ${d?`
                    <p class="dn-treatment-history-description">
                      ${ae(d)}
                    </p>
                  `:""}

              <div class="dn-treatment-history-meta">

                ${i?`
                      <span>
                        ${I("serviceLabel")}:
                        ${ae(i)}
                      </span>
                    `:""}

                ${s!==null?`
                      <span>
                        ${I("tooth")}:
                        ${ae(s)}
                      </span>
                    `:""}

                ${r?`
                      <span>
                        ${I("doctor")}:
                        ${ae(r)}
                      </span>
                    `:""}

                ${l?`
                      <span>
                        ${I("date")}:
                        ${ae(l)}
                      </span>
                    `:""}

              </div>

            </div>

          </li>
        `}).join("")}

    </ul>
  `:`
      <p class="dn-record-muted">
        ${I("noTreatments")}
      </p>
    `:`
      <p class="dn-record-muted">
        ${I("unavailable")}
      </p>
    `}const ta=[18,17,16,15,14,13,12,11,21,22,23,24,25,26,27,28,48,47,46,45,44,43,42,41,31,32,33,34,35,36,37,38];function ds(e){const t=String((e==null?void 0:e.tooth_status)??(e==null?void 0:e.status)??(e==null?void 0:e.condition)??"").trim().toLowerCase();return["healthy","sound","normal"].includes(t)?"healthy":["treated","restored","filled","filling","crown","root_canal","implant"].includes(t)?"treated":["caries","decay","needs_treatment","problem","fractured","infected"].includes(t)?"attention":["missing","extracted","absent"].includes(t)?"missing":"unknown"}function us(e){const t=Bt(e,["teeth","odontogram","tooth_statuses"]);if(!t)return`
      <p class="dn-record-muted">
        ${I("unavailable")}
      </p>
    `;if(!t.length)return`
      <p class="dn-record-muted">
        ${I("noTeeth")}
      </p>
    `;const a=new Map;for(const s of t){const l=Number((s==null?void 0:s.tooth_number)??(s==null?void 0:s.number));Number.isSafeInteger(l)&&l>0&&a.set(l,s)}function n(s){const l=a.get(s),d=l?ds(l):"unknown",c=l?String(l.tooth_status??l.status??l.condition??Z("noData")):Z("noData"),u={caries:Z("caries"),crown:Z("crown"),filled:Z("filled"),healthy:Z("healthy"),missing:Z("missing"),treated:Z("treated")}[c.toLowerCase()]??c,p=Array.isArray(l==null?void 0:l.surfaces)?l.surfaces.filter(f=>typeof f=="string"):[],m=[`${Z("tooth")} ${s}`,u,p.length?p.join(", "):""].filter(Boolean).join(" · ");return`
      <span
        class="dn-record-tooth is-${d}"
        title="${ae(m)}"
        aria-label="${ae(m)}"
      >
        ${s}
      </span>
    `}const o=ta.slice(0,16),i=ta.slice(16),r=[...a.keys()].filter(s=>!ta.includes(s)).sort((s,l)=>s-l);return`
    <div class="dn-record-jaw">
      <strong>${I("upper")}</strong>

      <div class="dn-record-teeth">
        ${o.map(n).join("")}
      </div>
    </div>

    <div class="dn-record-jaw">
      <strong>${I("lower")}</strong>

      <div class="dn-record-teeth">
        ${i.map(n).join("")}
      </div>
    </div>

    ${r.length?`
          <div class="dn-record-jaw">
            <strong>${I("otherTeeth")}</strong>

            <div class="dn-record-teeth">
              ${r.map(n).join("")}
            </div>
          </div>
        `:""}

    <p class="dn-record-muted">
      ${I("unknownTeethNote")}
    </p>
  `}function ms(e){if(e==null)return"";const t=Number(e);return!Number.isFinite(t)||t<0?"":t<1024?`${t} B`:t<1024*1024?`${(t/1024).toFixed(1)} KB`:`${(t/(1024*1024)).toFixed(2)} MB`}function ps(e){const t=Bt(e,["attachments","documents","files"]);if(!t)return`
      <p class="dn-record-muted">
        ${I("unavailable")}
      </p>
    `;if(!t.length)return`
      <p class="dn-record-muted">
        ${I("noFiles")}
      </p>
    `;const a=t.filter(n=>kt((n==null?void 0:n.id)??(n==null?void 0:n.attachment_id)));return a.length?`
    <ul class="dn-record-sublist">

      ${a.map(n=>{const o=Number(n.id??n.attachment_id),i=String(n.title??n.original_name??n.file_name??`Attachment #${o}`),r=String(n.original_name??n.file_name??""),s=String(n.attachment_type??"").toLowerCase(),l={xray:Z("xray"),radiography:Z("xray"),image:Z("image"),document:Z("document")}[s]??s,d=ms(n.file_size),c=Ft(n.created_at),u=[l,d,c].filter(Boolean).join(" · ");return`
          <li class="dn-record-attachment">

            <div class="dn-record-attachment-info">

              <strong>
                ${ae(i)}
              </strong>

              ${r&&r!==i?`
                    <small>
                      ${ae(r)}
                    </small>
                  `:""}

              ${u?`
                    <small>
                      ${ae(u)}
                    </small>
                  `:""}

            </div>

            <div class="dn-record-file-actions">

              <button
                type="button"
                data-record-view="${o}"
              >
                ${I("view")}
              </button>

              <button
                type="button"
                data-record-download="${o}"
              >
                ${I("download")}
              </button>

            </div>

          </li>
        `}).join("")}

    </ul>
  `:`
      <p class="dn-record-muted">
        ${I("noFiles")}
      </p>
    `}function fs(){return`
    <div
      class="dn-records"
      data-records-root
    >

      <div class="dn-records-layout">

        <section
          class="dn-records-surface"
          aria-label="${I("record")}"
        >

          <div class="dn-records-heading">

            <h2>${I("record")}</h2>

            <button
              type="button"
              data-records-refresh
            >
              ${I("retry")}
            </button>

          </div>

          <p
            class="dn-record-muted"
            data-records-list-status
          >
            ${I("loading")}
          </p>

          <ul
            class="dn-record-list"
            data-records-list
          ></ul>

          <div
            class="dn-record-pager"
            data-records-pager
            hidden
          >

            <button type="button" data-records-prev>
              ${I("prev")}
            </button>

            <span data-records-page></span>

            <button type="button" data-records-next>
              ${I("next")}
            </button>

          </div>

        </section>

        <section
          class="dn-records-surface"
          aria-label="${I("details")}"
        >

          <h2>${I("details")}</h2>

          <div data-records-detail>

            <p class="dn-record-muted">
              ${I("select")}
            </p>

          </div>

        </section>

      </div>

      <!-- SECURE FILE PREVIEW -->

      <div
        class="dn-record-preview"
        data-record-preview
        hidden
        role="dialog"
        aria-modal="true"
        aria-label="${I("view")}"
      >

        <div class="dn-record-preview-inner">

          <button
            type="button"
            data-record-preview-close
          >
            ${I("close")}
          </button>

          <div data-record-preview-body></div>

        </div>

      </div>

    </div>
  `}function hs(e,t){const a=e.querySelector("[data-records-root]");if(!a)return{load(){},cleanup(){}};const n=$=>a.querySelector($),o=n("[data-records-list]"),i=n("[data-records-list-status]"),r=n("[data-records-detail]"),s=n("[data-records-pager]"),l=n("[data-record-preview]"),d=n("[data-record-preview-body]");let c=!1,u=1,p=null,m=null,f=null,h=null,b=null;const S=()=>!t.aborted&&a.isConnected;function A(){l.hidden=!0,d.replaceChildren(),b&&URL.revokeObjectURL(b),b=null}function k(){f==null||f.abort(),h==null||h.abort(),A(),p=null}async function T($=1){if(!S())return;c=!0,m==null||m.abort(),k(),m=new AbortController;const y=m;u=$,o.innerHTML="",i.hidden=!1,i.textContent=Z("loading"),s.hidden=!0,r.innerHTML=`
      <p class="dn-record-muted">
        ${I("select")}
      </p>
    `;try{const C=await Ke.list(u,y.signal);if(!S()||y.signal.aborted)return;const g=Bt(C,["dental_records","records"]);if(!g)throw new Error("Unsupported records response shape");o.innerHTML=g.map(ls).join(""),i.hidden=g.length>0,g.length||(i.textContent=Z("empty"));const L=ss(C);u=L.current,s.hidden=!(L.previous||L.next),n("[data-records-page]").textContent=`${Z("page")} ${u}`,n("[data-records-prev]").disabled=!L.previous,n("[data-records-next]").disabled=!L.next}catch(C){if(!S()||y.signal.aborted)return;console.error("Dental records:",C),i.textContent=Z("error")}}async function N($){if(!S()||!kt($))return;k(),f=new AbortController;const y=f;p=Number($),a.querySelectorAll("[data-record-id]").forEach(C=>{C.classList.toggle("is-active",Number(C.dataset.recordId)===p)}),r.innerHTML=`
      <p class="dn-record-muted">
        ${I("loading")}
      </p>
    `;try{const C=await Ke.show($,y.signal);if(!S()||y.signal.aborted)return;const g=rs(C);if(g.id&&Number(g.id)!==Number($))throw new Error("Record ID mismatch");const L=Qn(g.doctor??g.staff??g.dentist)||g.doctor_name,v=g.patient_diagnosis??g.public_diagnosis??g.diagnosis,D=g.chief_complaint,E=g.examination,P=g.patient_notes,_=Ft(g.examined_at??g.visit_date??g.examination_date??g.created_at),F=g.patient_summary??g.public_summary,Ne={finalized:Z("finalized"),draft:Z("draft")}[String(g.status||"").toLowerCase()]??g.status;r.innerHTML=`
  <h3>
    ${ae(Xn(g))}
  </h3>

  <dl class="dn-record-meta">

    ${Ue("doctor",L)}
    ${Ue("date",_)}
    ${Ue("status",Ne)}
    ${Ue("chiefComplaint",D)}
    ${Ue("examination",E)}
    ${Ue("diagnosis",v)}
    ${Ue("patientNotes",P)}

  </dl>

  ${F?`
        <p class="dn-record-summary">
          ${ae(F)}
        </p>
      `:""}

  <div class="dn-record-block">
    <h3>${I("treatments")}</h3>

    <div data-record-treatments>
      ${I("loading")}
    </div>
  </div>

  <div class="dn-record-block">
    <h3>${I("odontogram")}</h3>

    <div data-record-odontogram>
      ${I("loading")}
    </div>
  </div>

  <div class="dn-record-block">
    <h3>${I("files")}</h3>

    <div data-record-attachments>
      ${I("loading")}
    </div>
  </div>
`,[[Ke.treatments($,y.signal),"[data-record-treatments]",cs],[Ke.odontogram($,y.signal),"[data-record-odontogram]",us],[Ke.attachments($,y.signal),"[data-record-attachments]",ps]].forEach(([j,U,q])=>{Promise.resolve(j).then(le=>{S()&&!y.signal.aborted&&(n(U).innerHTML=q(le))}).catch(le=>{!S()||y.signal.aborted||(console.error(U,le),n(U).textContent=Z("unavailable"))})})}catch(C){if(!S()||y.signal.aborted)return;console.error("Dental record details:",C),r.innerHTML=`
        <p class="dn-record-muted">
          ${I("error")}
        </p>
      `}}async function x($,y){if(!kt(p)||!kt($))return;h==null||h.abort(),h=new AbortController;const C=h;try{const{blob:g,filename:L}=await Ke.attachmentFile(p,$,y,C.signal);if(!S()||C.signal.aborted)return;const v=URL.createObjectURL(g);if(y==="download"){const D=document.createElement("a");D.href=v,D.download=L,document.body.append(D),D.click(),D.remove(),setTimeout(()=>URL.revokeObjectURL(v),3e4);return}if(A(),g.type==="application/pdf")d.innerHTML=`
          <iframe
            title="${I("view")}"
            style="width:100%;height:70vh;border:0"
          ></iframe>
        `,d.querySelector("iframe").src=v;else if(["image/png","image/jpeg","image/gif","image/webp"].includes(g.type))d.innerHTML=`
          <img
            alt="${I("view")}"
            style="max-width:100%;max-height:70vh;object-fit:contain"
          >
        `,d.querySelector("img").src=v;else{URL.revokeObjectURL(v),window.alert(Z("previewError"));return}b=v,l.hidden=!1,n("[data-record-preview-close]").focus()}catch(g){if(C.signal.aborted)return;console.error("Dental attachment:",g),window.alert(g.message||Z("requestError"))}}return a.addEventListener("click",$=>{const y=$.target.closest("button");!y||!a.contains(y)||(y.hasAttribute("data-records-refresh")?T(1):y.hasAttribute("data-record-id")?N(Number(y.dataset.recordId)):y.hasAttribute("data-records-prev")&&u>1?T(u-1):y.hasAttribute("data-records-next")?T(u+1):y.hasAttribute("data-record-view")?x(Number(y.dataset.recordView),"view"):y.hasAttribute("data-record-download")?x(Number(y.dataset.recordDownload),"download"):y.hasAttribute("data-record-preview-close")&&A())},{signal:t}),{load(){c||T(1)},cleanup(){m==null||m.abort(),k()}}}function jt(e){const t=Number(e);if(!Number.isSafeInteger(t)||t<1)throw new TypeError("Invalid positive ID");return t}function dn(e){const t=jt(e);return t>1?`?page=${t}`:""}function un(e){return`/v1/payments/${jt(e)}`}function gs(e){return`/v1/invoices/${jt(e)}`}function gt(e){return`/v1/payments/bookings/${jt(e)}`}async function bt(e,t=null){const a=We();if(!a)throw new Error("Authentication required.");const n=String(Mt).replace(/\/+$/,""),o=await fetch(`${n}${e}`,{method:"POST",headers:{Accept:"application/json",Authorization:/^Bearer\s/i.test(a)?a:`Bearer ${a}`},signal:t}),i=await o.json().catch(()=>null);if(!o.ok||!i||i.success===!1){const r=i!=null&&i.errors?Object.values(i.errors).flat().map(String).join(" · "):"";throw new Error(r||(i==null?void 0:i.message)||`Payment request failed (${o.status})`)}return i}const qe={payments(e=1,t=null){return K(`/v1/payments${dn(e)}`,{auth:!0,signal:t})},payment(e,t=null){return K(un(e),{auth:!0,signal:t})},paymentStatus(e,t=null){return K(`${un(e)}/status`,{auth:!0,signal:t})},summary(e=null){return K("/v1/patient/finance/summary",{auth:!0,signal:e})},invoices(e=1,t=null){return K(`/v1/invoices${dn(e)}`,{auth:!0,signal:t})},invoice(e,t=null){return K(gs(e),{auth:!0,signal:t})},createDeposit(e,t=null){return bt(`${gt(e)}/deposit`,t)},startDeposit(e,t=null){return bt(`${gt(e)}/start`,t)},createRemaining(e,t=null){return bt(`${gt(e)}/remaining`,t)},startRemaining(e,t=null){return bt(`${gt(e)}/remaining/start`,t)}},Aa=()=>oe()==="fa",bs={en:{summary:"Financial overview",invoiced:"Total invoiced",paid:"Total paid",due:"Amount due",invoices:"Invoices",payments:"Payment history",details:"Details",refresh:"Refresh",loading:"Loading financial information…",emptyInvoices:"No invoices available.",emptyPayments:"No payments available.",error:"Could not load information.",unavailable:"Not available",invoice:"Invoice",payment:"Payment",amount:"Amount",status:"Status",date:"Date",method:"Method",reference:"Reference",total:"Total",discount:"Discount",remaining:"Remaining",service:"Service",items:"Invoice items",deposit:"Pay deposit",payRemaining:"Pay remaining",starting:"Starting payment…",gatewayError:"The server did not return a valid payment URL.",paymentError:"Payment could not be started.",checkStatus:"Check payment status",pending:"Pending",completed:"Completed",failed:"Failed",cancelled:"Cancelled",paidStatus:"Paid",close:"Close details"},fa:{summary:"خلاصه وضعیت مالی",invoiced:"مجموع فاکتورها",paid:"مجموع پرداخت‌ها",due:"مانده قابل پرداخت",invoices:"فاکتورهای من",payments:"تاریخچه پرداخت‌ها",details:"جزئیات",refresh:"به‌روزرسانی",loading:"در حال دریافت اطلاعات مالی…",emptyInvoices:"فاکتوری برای نمایش وجود ندارد.",emptyPayments:"پرداختی برای نمایش وجود ندارد.",error:"دریافت اطلاعات ممکن نشد.",unavailable:"اطلاعات موجود نیست",invoice:"فاکتور",payment:"پرداخت",amount:"مبلغ",status:"وضعیت",date:"تاریخ",method:"روش پرداخت",reference:"شماره پیگیری",total:"مبلغ کل",discount:"تخفیف",remaining:"مانده",service:"خدمت",items:"اقلام فاکتور",deposit:"پرداخت بیعانه",payRemaining:"پرداخت مانده",starting:"در حال شروع پرداخت…",gatewayError:"سرور لینک معتبر درگاه را برنگرداند.",paymentError:"شروع پرداخت ناموفق بود.",checkStatus:"بررسی وضعیت پرداخت",pending:"در انتظار",completed:"تکمیل‌شده",failed:"ناموفق",cancelled:"لغوشده",paidStatus:"پرداخت‌شده",close:"بستن جزئیات"}};function V(e){const t=`dashboard.billing.${e}`,a=w(t);return a&&a!==t?a:bs[Aa()?"fa":"en"][e]??e}function pe(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}const X=e=>pe(V(e));function Ye(e){const t=Number(e);return Number.isSafeInteger(t)&&t>0}function st(e){const t=(e==null?void 0:e.data)??e;return t!=null&&t.data&&!Array.isArray(t.data)?t.data:t}function mn(e,t=[]){const a=(e==null?void 0:e.data)??e;return[a,a==null?void 0:a.data,...t.map(o=>a==null?void 0:a[o]),...t.map(o=>{var i;return(i=a==null?void 0:a[o])==null?void 0:i.data})].find(Array.isArray)??null}function xa(e,t){for(const a of t){const n=e==null?void 0:e[a];if(n!=null&&n!=="")return n}return null}function Fe(e,t=""){if(e==null||e==="")return"—";const a=Number(e);return`${Number.isFinite(a)?a.toLocaleString(Aa()?"fa-IR":"en-US"):String(e)}${t?` ${t}`:""}`}function Ca(e){if(!e)return"";const t=new Date(e);return Number.isNaN(t.getTime())?"":new Intl.DateTimeFormat(Aa()?"fa-IR":"en-GB",{year:"numeric",month:"short",day:"numeric",timeZone:"Asia/Tehran"}).format(t)}function La(e){const t=String(e??"").toLowerCase(),a={paid:"paidStatus",success:"completed",successful:"completed",completed:"completed",pending:"pending",awaiting_payment:"pending",failed:"failed",canceled:"cancelled",cancelled:"cancelled"};return a[t]?V(a[t]):String(e??V("unavailable"))}function Ge(e,t){return xa(e,t)}function Ht(e){return String(xa(e,["currency","currency_unit"])??"")}function vs(e){const t=st(e),a=Ge(t,["total_invoiced","total_invoice_amount","total_invoices_amount"]),n=Ge(t,["total_paid","paid_amount","total_payments"]),o=Ge(t,["total_due","balance_due","outstanding_balance","remaining_amount","total_remaining"]),i=Ht(t);return`
    <div class="dn-finance-stats">
      <article>
        <span>${X("invoiced")}</span>
        <strong>${pe(Fe(a,i))}</strong>
      </article>

      <article>
        <span>${X("paid")}</span>
        <strong>${pe(Fe(n,i))}</strong>
      </article>

      <article>
        <span>${X("due")}</span>
        <strong>${pe(Fe(o,i))}</strong>
      </article>
    </div>
  `}function ys(e){var p;const t=Number(e==null?void 0:e.id);if(!Ye(t))return"";const a=Number(e.booking_id??((p=e.booking)==null?void 0:p.id)),n=Ge(e,["total_amount","grand_total","total","amount"]),o=Ge(e,["remaining_amount","balance_due","amount_due"]),i=Ht(e),r=Number(e.deposit_due??e.deposit_remaining),s=Number(e.remaining_due??e.remaining_amount),l=e.can_pay_deposit===!0||e.can_pay_deposit!==!1&&Number.isFinite(r)&&r>0,d=e.can_pay_remaining===!0||e.can_pay_remaining!==!1&&Number.isFinite(s)&&s>0,c=String(e.payment_status??e.status??"").toLowerCase(),u=["paid","completed","fully_paid"].includes(c);return`
    <article class="dn-finance-entry">

      <div class="dn-finance-entry-main">
        <strong>
          ${X("invoice")} #${t}
        </strong>

        <small>
          ${pe(Ca(e.issued_at??e.created_at))}
        </small>

        <span class="dn-finance-status">
          ${pe(La(c))}
        </span>
      </div>

      <div class="dn-finance-amount">
        <strong>${pe(Fe(n,i))}</strong>
        <small>
          ${X("remaining")}:
          ${pe(Fe(o,i))}
        </small>
      </div>

      <div class="dn-finance-actions">
        <button
          type="button"
          data-finance-invoice="${t}"
        >
          ${X("details")}
        </button>

        ${Ye(a)&&!u&&l?`
              <button
                type="button"
                class="dn-finance-pay"
                data-finance-pay="deposit"
                data-finance-booking="${a}"
              >
                ${X("deposit")}
              </button>
            `:""}

        ${Ye(a)&&!u&&d?`
              <button
                type="button"
                class="dn-finance-pay"
                data-finance-pay="remaining"
                data-finance-booking="${a}"
              >
                ${X("payRemaining")}
              </button>
            `:""}
      </div>
    </article>
  `}function ws(e){const t=Number(e==null?void 0:e.id);if(!Ye(t))return"";const a=Ge(e,["amount","paid_amount","total"]),n=xa(e,["reference_number","ref_id","transaction_id"]);return`
    <article class="dn-finance-entry">

      <div class="dn-finance-entry-main">
        <strong>
          ${X("payment")} #${t}
        </strong>

        <small>
          ${pe(Ca(e.paid_at??e.created_at))}
        </small>

        <span class="dn-finance-status">
          ${pe(La(e.status??e.payment_status))}
        </span>
      </div>

      <div class="dn-finance-amount">
        <strong>
          ${pe(Fe(a,Ht(e)))}
        </strong>

        ${n?`<small>${pe(n)}</small>`:""}
      </div>

      <div class="dn-finance-actions">
        <button
          type="button"
          data-finance-payment="${t}"
        >
          ${X("details")}
        </button>

        <button
          type="button"
          data-finance-status="${t}"
        >
          ${X("checkStatus")}
        </button>
      </div>

    </article>
  `}function $s(){return`
    <div
      class="dn-finance"
      data-finance-root
    >

      <div class="dn-finance-toolbar">
        <h2>${X("summary")}</h2>

        <button
          type="button"
          data-finance-refresh
        >
          ${X("refresh")}
        </button>
      </div>

      <div data-finance-summary>
        <p class="dn-finance-muted">
          ${X("loading")}
        </p>
      </div>

      <div class="dn-finance-columns">

        <section class="dn-finance-surface">
          <h2>${X("invoices")}</h2>

          <div data-finance-invoices>
            <p class="dn-finance-muted">
              ${X("loading")}
            </p>
          </div>
        </section>

        <section class="dn-finance-surface">
          <h2>${X("payments")}</h2>

          <div data-finance-payments>
            <p class="dn-finance-muted">
              ${X("loading")}
            </p>
          </div>
        </section>

      </div>

      <section
        class="dn-finance-surface dn-finance-details"
        data-finance-details
        hidden
      >
        <div class="dn-finance-toolbar">
          <h2>${X("details")}</h2>

          <button
            type="button"
            data-finance-close
          >
            ${X("close")}
          </button>
        </div>

        <div data-finance-details-body></div>
      </section>

      <p
        class="dn-finance-feedback"
        data-finance-feedback
        role="status"
        aria-live="polite"
        hidden
      ></p>

    </div>
  `}function ks(e,t){const a=e.querySelector("[data-finance-root]");if(!a)return{load(){},cleanup(){}};const n=x=>a.querySelector(x),o=n("[data-finance-summary]"),i=n("[data-finance-invoices]"),r=n("[data-finance-payments]"),s=n("[data-finance-details]"),l=n("[data-finance-details-body]"),d=n("[data-finance-feedback]");let c=!1,u=null,p=null,m=!1;const f=()=>!t.aborted&&a.isConnected;function h(x,$=!1){d.hidden=!1,d.textContent=x,d.dataset.error=String($)}function b(x){if((x==null?void 0:x.success)===!1)throw new Error(x.message||V("error"));return x}function S(){p==null||p.abort(),s.hidden=!0,l.replaceChildren()}async function A(){if(!f())return;c=!0,u==null||u.abort(),u=new AbortController;const x=u;S(),d.hidden=!0,o.textContent=V("loading"),i.textContent=V("loading"),r.textContent=V("loading");const $=[{run:()=>qe.summary(x.signal),element:o,render:y=>vs(y)},{run:()=>qe.invoices(1,x.signal),element:i,render:y=>{const C=mn(y,["invoices","items"]);return C?C.length?C.map(ys).join(""):`<p>${X("emptyInvoices")}</p>`:`<p>${X("error")}</p>`}},{run:()=>qe.payments(1,x.signal),element:r,render:y=>{const C=mn(y,["payments","transactions"]);return C?C.length?C.map(ws).join(""):`<p>${X("emptyPayments")}</p>`:`<p>${X("error")}</p>`}}];await Promise.allSettled($.map(async y=>{try{const C=b(await y.run());if(!f()||x.signal.aborted)return;if(y.element.innerHTML=y.render(C),y.element===o){const g=st(C),L=Ge(g,["total_due","balance_due","outstanding_balance","remaining_amount","total_remaining"]),v=e.querySelector('[data-dashboard-stat="balance"]');v&&L!==null&&(v.textContent=Fe(L,Ht(g)))}}catch(C){if(!f()||x.signal.aborted)return;console.error("Finance API error:",C),y.element.textContent=C.message||V("error")}}))}async function k(x,$){if(!f()||!Ye($))return;p==null||p.abort(),p=new AbortController;const y=p;s.hidden=!1,l.textContent=V("loading");try{const C=b(x==="invoice"?await qe.invoice($,y.signal):await qe.payment($,y.signal));if(!f()||y.signal.aborted)return;const g=st(C),L=V(x==="invoice"?"invoice":"payment"),v=[[V("status"),g.status??g.payment_status],[V("total"),g.total_amount??g.amount],[V("paid"),g.paid_amount],[V("discount"),g.discount_amount],[V("remaining"),g.remaining_amount],[V("method"),g.method],[V("reference"),g.reference_number??g.transaction_id],[V("date"),Ca(g.created_at??g.paid_at)]],D=Array.isArray(g.items)?g.items:Array.isArray(g.invoice_items)?g.invoice_items:[];l.innerHTML=`
        <h3>${pe(L)} #${Number($)}</h3>

        <dl class="dn-finance-detail-grid">
          ${v.filter(([,E])=>E!=null&&E!=="").map(([E,P])=>`
              <div>
                <dt>${pe(E)}</dt>
                <dd>${pe(P)}</dd>
              </div>
            `).join("")}
        </dl>

        ${D.length?`
              <h3>${X("items")}</h3>

              <ul class="dn-finance-item-list">
                ${D.map(E=>{var P;return`
                  <li>
                    <span>
                      ${pe(((P=E.service)==null?void 0:P.name)??E.name??E.title??V("service"))}
                    </span>

                    <strong>
                      ${pe(Fe(E.amount??E.price??E.total))}
                    </strong>
                  </li>
                `}).join("")}
              </ul>
            `:""}
      `}catch(C){if(y.signal.aborted)return;l.textContent=C.message||V("error")}}async function T(x){var $;if(!(!f()||!Ye(x))){h(V("loading"));try{const y=b(await qe.paymentStatus(x,t));if(!f())return;const C=st(y),g=typeof C=="string"?C:C.payment_status??C.status??(($=C.payment)==null?void 0:$.status);h(g==null?V("unavailable"):`${V("payment")} #${x}: ${La(g)}`)}catch(y){if(!f())return;h(y.message||V("error"),!0)}}}async function N(x){if(m)return;const $=Number(x.dataset.financeBooking),y=x.dataset.financePay;if(!(!Ye($)||!["deposit","remaining"].includes(y))){m=!0,x.disabled=!0,h(V("starting"));try{const C=b(y==="deposit"?await qe.startDeposit($,t):await qe.startRemaining($,t));if(!f())return;const g=st(C),L=(g==null?void 0:g.payment_url)??(g==null?void 0:g.gateway_url)??(g==null?void 0:g.redirect_url)??(g==null?void 0:g.payment_link)??(g==null?void 0:g.url)??(g==null?void 0:g.link);if(typeof L!="string"||!L.trim()){h(V("gatewayError"),!0);return}const v=new URL(L,window.location.origin);if(v.protocol!=="https:")throw new Error(V("gatewayError"));window.location.assign(v.href)}catch(C){if(!f())return;console.error("Payment start:",C),h(C.message||V("paymentError"),!0)}finally{m=!1,x.disabled=!1}}}return a.addEventListener("click",x=>{const $=x.target.closest("button");!$||!a.contains($)||$.disabled||($.hasAttribute("data-finance-refresh")?A():$.hasAttribute("data-finance-invoice")?k("invoice",$.dataset.financeInvoice):$.hasAttribute("data-finance-payment")?k("payment",$.dataset.financePayment):$.hasAttribute("data-finance-status")?T($.dataset.financeStatus):$.hasAttribute("data-finance-pay")?N($):$.hasAttribute("data-finance-close")&&S())},{signal:t}),{load(){c||A()},cleanup(){u==null||u.abort(),p==null||p.abort()}}}var Dt={toJalaali:Ss,toGregorian:Ts,jalaaliMonthLength:As},Oe=[-61,9,38,199,426,686,756,818,1111,1181,1210,1635,2060,2097,2192,2262,2324,2394,2456,3178];function Ss(e,t,a){return Object.prototype.toString.call(e)==="[object Date]"&&(a=e.getDate(),t=e.getMonth()+1,e=e.getFullYear()),Ls(Pa(e,t,a))}function Ts(e,t,a){return eo(Cs(e,t,a))}function Es(e){return xs(e)===0}function As(e,t){return t<=6?31:t<=11||Es(e)?30:29}function xs(e){var t=Oe.length,a=Oe[0],n,o,i,r,s;if(e<a||e>=Oe[t-1])throw new Error("Invalid Jalaali year "+e);for(s=1;s<t&&(n=Oe[s],o=n-a,!(e<n));s+=1)a=n;return r=e-a,o-r<6&&(r=r-o+J(o+4,33)*33),i=ve(ve(r+1,33)-1,4),i===-1&&(i=4),i}function Jn(e,t){var a=Oe.length,n=e+621,o=-14,i=Oe[0],r,s,l,d,c,u,p;if(e<i||e>=Oe[a-1])throw new Error("Invalid Jalaali year "+e);for(p=1;p<a&&(r=Oe[p],s=r-i,!(e<r));p+=1)o=o+J(s,33)*8+J(ve(s,33),4),i=r;return u=e-i,o=o+J(u,33)*8+J(ve(u,33)+3,4),ve(s,33)===4&&s-u===4&&(o+=1),d=J(n,4)-J((J(n,100)+1)*3,4)-150,c=20+o-d,t?{gy:n,march:c}:(s-u<6&&(u=u-s+J(s+4,33)*33),l=ve(ve(u+1,33)-1,4),l===-1&&(l=4),{leap:l,gy:n,march:c})}function Cs(e,t,a){var n=Jn(e,!0);return Pa(n.gy,3,n.march)+(t-1)*31-J(t,7)*(t-7)+a-1}function Ls(e){var t=eo(e).gy,a=t-621,n=Jn(a,!1),o=Pa(t,3,n.march),i,r,s;if(s=e-o,s>=0){if(s<=185)return r=1+J(s,31),i=ve(s,31)+1,{jy:a,jm:r,jd:i};s-=186}else a-=1,s+=179,n.leap===1&&(s+=1);return r=7+J(s,30),i=ve(s,30)+1,{jy:a,jm:r,jd:i}}function Pa(e,t,a){var n=J((e+J(t-8,6)+100100)*1461,4)+J(153*ve(t+9,12)+2,5)+a-34840408;return n=n-J(J(e+100100+J(t-8,6),100)*3,4)+752,n}function eo(e){var t,a,n,o,i;return t=4*e+139361631,t=t+J(J(4*e+183187720,146097)*3,4)*4-3908,a=J(ve(t,1461),4)*5+308,n=J(ve(a,153),5)+1,o=ve(J(a,153),12)+1,i=J(t,1461)-100100+J(8-o,6),{gy:i,gm:o,gd:n}}function J(e,t){return~~(e/t)}function ve(e,t){return e-~~(e/t)*t}const Ps=["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"],Ns=["Farvardin","Ordibehesht","Khordad","Tir","Mordad","Shahrivar","Mehr","Aban","Azar","Dey","Bahman","Esfand"],Ds=["ش","ی","د","س","چ","پ","ج"],_s=["Sa","Su","Mo","Tu","We","Th","Fr"],Re=()=>oe()==="fa",Is=e=>String(e).replace(/\d/g,t=>"۰۱۲۳۴۵۶۷۸۹"[Number(t)]),ma=e=>Re()?Is(e):String(e),_t=e=>String(e).padStart(2,"0");function aa(){const e=Object.fromEntries(new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Tehran",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date).map(t=>[t.type,t.value]));return`${e.year}-${e.month}-${e.day}`}function tt(e){if(!/^\d{4}-\d{2}-\d{2}$/.test(e||""))return null;const[t,a,n]=e.split("-").map(Number);return new Date(Date.UTC(t,a-1,n)).toISOString().slice(0,10)!==e?null:Dt.toJalaali(t,a,n)}function qs(e,t,a){const{gy:n,gm:o,gd:i}=Dt.toGregorian(e,t,a);return`${n}-${_t(o)}-${_t(i)}`}function Rs(e){return ma(`${e.jy}/${_t(e.jm)}/${_t(e.jd)}`)}function Ms(e,t){const a=new Set,n=["[data-wizard-date]",'[data-booking-reschedule] input[name="booking_date"]'].join(", ");function o(s){var k;if(s.dataset.jalaliReady)return;s.dataset.jalaliReady="1";const l=((k=s.parentElement)==null?void 0:k.tagName)==="LABEL"?s.parentElement:null;let d;if(l){for(d=document.createElement("div"),d.className=l.className;l.firstChild;)d.append(l.firstChild);l.replaceWith(d)}else d=document.createElement("div"),s.before(d),d.append(s);d.classList.add("dn-jalali-field"),s.type="hidden";const c=document.createElement("button");c.type="button",c.className="dn-jalali-trigger",c.setAttribute("aria-haspopup","dialog"),c.setAttribute("aria-expanded","false");const u=document.createElement("div");u.className="dn-jalali-popup",u.setAttribute("role","dialog"),u.setAttribute("aria-label",Re()?"انتخاب تاریخ شمسی":"Choose Jalali date"),u.hidden=!0,d.append(c,u);const p=tt(s.value)||tt(aa());let m=p.jy,f=p.jm;function h(){const T=tt(s.value);c.textContent=T?Rs(T):Re()?"انتخاب تاریخ شمسی":"Select Jalali date"}function b(){const T=aa(),{gy:N,gm:x,gd:$}=Dt.toGregorian(m,f,1),y=(new Date(Date.UTC(N,x-1,$)).getUTCDay()+1)%7,C=Dt.jalaaliMonthLength(m,f),g=Re()?Ds:_s,v=`${(Re()?Ps:Ns)[f-1]} ${ma(m)}`;let D="<span></span>".repeat(y);for(let E=1;E<=C;E++){const P=qs(m,f,E),_=P===s.value,F=P<T;D+=`
          <button
            type="button"
            class="dn-jalali-day${_?" is-selected":""}"
            data-jalali-day="${P}"
            aria-pressed="${_}"
            ${F?"disabled":""}
          >
            ${ma(E)}
          </button>
        `}u.innerHTML=`
        <div class="dn-jalali-head">

          <button
            type="button"
            data-jalali-nav="prev"
            aria-label="${Re()?"ماه قبل":"Previous month"}"
          >
            ‹
          </button>

          <strong>
            ${v}
          </strong>

          <button
            type="button"
            data-jalali-nav="next"
            aria-label="${Re()?"ماه بعد":"Next month"}"
          >
            ›
          </button>

        </div>

        <div class="dn-jalali-grid dn-jalali-weekdays">
          ${g.map(E=>`
            <span>${E}</span>
          `).join("")}
        </div>

        <div class="dn-jalali-grid">
          ${D}
        </div>
      `}function S(){u.hidden=!0,c.setAttribute("aria-expanded","false")}const A={wrapper:d,close:S,syncLabel:h};a.add(A),c.addEventListener("click",()=>{for(const T of a)T!==A&&T.close();if(h(),u.hidden){const T=tt(s.value);T&&(m=T.jy,f=T.jm),b(),u.hidden=!1,c.setAttribute("aria-expanded","true")}else S()},{signal:t}),u.addEventListener("click",T=>{const N=T.target.closest("[data-jalali-nav]");if(N){f+=N.dataset.jalaliNav==="next"?1:-1,f>12&&(f=1,m++),f<1&&(f=12,m--),b();return}const x=T.target.closest("[data-jalali-day]");!x||x.disabled||(s.value=x.dataset.jalaliDay,h(),S(),s.dispatchEvent(new Event("change",{bubbles:!0})),c.focus())},{signal:t}),s.addEventListener("change",h,{signal:t}),h()}function i(){for(const s of a)s.wrapper.isConnected||a.delete(s);e.querySelectorAll(n).forEach(o)}i();const r=new MutationObserver(i);return r.observe(e,{childList:!0,subtree:!0}),document.addEventListener("click",s=>{for(const l of a)l.wrapper.contains(s.target)||l.close()},{signal:t}),document.addEventListener("keydown",s=>{if(s.key==="Escape")for(const l of a)l.close()},{signal:t}),e.addEventListener("click",s=>{if(s.target.closest("[data-booking-start]"))for(const l of a)l.syncLabel()},{signal:t}),e.addEventListener("submit",s=>{const l=s.target.closest("[data-booking-reschedule]");if(!l)return;const d=l.elements.namedItem("booking_date"),c=(d==null?void 0:d.value)||"";if(tt(c)&&c>=aa())return;s.preventDefault(),s.stopImmediatePropagation();let u=l.querySelector("[data-jalali-error]");u||(u=document.createElement("p"),u.dataset.jalaliError="1",u.className="dn-jalali-error",u.setAttribute("role","alert"),l.append(u)),u.textContent=Re()?"لطفاً یک تاریخ شمسی معتبر از امروز به بعد انتخاب کنید.":"Please select a valid Jalali date from today onward."},{capture:!0,signal:t}),()=>{r.disconnect();for(const s of a)s.close();a.clear()}}const Os={en:{portal:"Patient portal",workspace:"YOUR WORKSPACE",general:"GENERAL",overview:"Overview",appointments:"Appointments",treatments:"Treatment plans",records:"Dental records",billing:"Payments & invoices",profile:"My profile",menu:"Open navigation",logout:"Sign out",loggingOut:"Signing out…",support:"Need a hand?",supportText:"Our clinic team is here to help you.",contact:"Contact clinic",greeting:"Welcome to your space",subtitle:"Everything about your dental care, in one calm place.",healthTag:"YOUR CARE, SIMPLIFIED",yourNextVisit:"Your next appointment",noNextVisit:"No upcoming appointment yet",nextVisitHint:"When you book a visit, the details will appear here.",bookNewVisit:"Book appointment",viewAppointments:"View appointments",overviewLabel:"AT A GLANCE",overviewHeading:"Your health overview",upcoming:"Upcoming visits",activePlans:"Active plans",balance:"Amount due",dataPending:"Awaiting connection",quickActions:"Quick actions",quickActionsCopy:"The things you need, just a click away.",actionServices:"Explore treatments",actionServicesCopy:"Learn about available dental services.",actionProfile:"Update your profile",actionProfileCopy:"Keep your contact information current.",actionHelp:"Get in touch",actionHelpCopy:"Ask our team a question.",journey:"Care timeline",journeyCopy:"Your visits and treatment milestones will be here.",gentleReminderCopy:"Your treatment history is kept in your account. Records will appear only when available and authorized for you.",sectionOverviewEyebrow:"PATIENT HOME",sectionAppointmentsEyebrow:"YOUR SCHEDULE",appointmentTitle:"Appointments",appointmentSubtitle:"Review future and past appointments in one place.",sectionTreatmentsEyebrow:"YOUR CARE PLAN",treatmentTitle:"Treatment plans",treatmentSubtitle:"Follow your treatment stages and progress.",sectionRecordsEyebrow:"YOUR HEALTH FILE",recordsTitle:"Dental records",recordsSubtitle:"A private home for your eligible dental history and files.",sectionBillingEyebrow:"YOUR FINANCES",billingTitle:"Payments & invoices",billingSubtitle:"Understand paid amounts and any upcoming payments.",sectionProfileEyebrow:"YOUR ACCOUNT",profileTitle:"Personal information",profileSubtitle:"Update account details and manage your contact information.",backHome:"Back to website"},fa:{portal:"پرتال بیماران",workspace:"فضای اختصاصی شما",general:"بخش‌های اصلی",overview:"نمای کلی",appointments:"نوبت‌های من",treatments:"طرح‌های درمان",records:"پرونده دندان‌پزشکی",billing:"پرداخت‌ها و فاکتورها",profile:"پروفایل من",menu:"باز کردن منو",logout:"خروج از حساب",loggingOut:"در حال خروج…",support:"سوالی دارید؟",supportText:"تیم کلینیک آماده پاسخ‌گویی به شماست.",contact:"تماس با کلینیک",greeting:"به فضای شخصی خود خوش آمدید",subtitle:"همه چیز درباره مراقبت از دندان‌هایتان، در یک محیط آرام و ساده.",healthTag:"مراقبت آسان‌تر از همیشه",yourNextVisit:"نوبت بعدی شما",noNextVisit:"هنوز نوبت آینده‌ای ثبت نشده",nextVisitHint:"پس از رزرو نوبت، جزئیات آن در این بخش نمایش داده می‌شود.",bookNewVisit:"رزرو نوبت",viewAppointments:"مشاهده نوبت‌ها",overviewLabel:"در یک نگاه",overviewHeading:"خلاصه وضعیت شما",upcoming:"نوبت‌های آینده",activePlans:"درمان‌های فعال",balance:"مانده قابل پرداخت",dataPending:"در انتظار اتصال",quickActions:"دسترسی سریع",quickActionsCopy:"کارهای مهم با چند کلیک ساده.",actionServices:"مشاهده خدمات",actionServicesCopy:"با خدمات دندان‌پزشکی آشنا شوید.",actionProfile:"ویرایش پروفایل",actionProfileCopy:"اطلاعات تماس خود را به‌روز نگه دارید.",actionHelp:"ارتباط با ما",actionHelpCopy:"سوال خود را از تیم کلینیک بپرسید.",journey:"مسیر درمان",journeyCopy:"سوابق مراجعه و مراحل درمان اینجا نمایش داده می‌شوند.",gentleReminderCopy:"سوابق درمان شما در حساب کاربری نگهداری می‌شود و فقط اطلاعات مجاز و در دسترس نمایش داده خواهد شد.",sectionOverviewEyebrow:"خانه بیمار",sectionAppointmentsEyebrow:"برنامه نوبت‌ها",appointmentTitle:"نوبت‌های من",appointmentSubtitle:"نوبت‌های آینده و مراجعات قبلی را یکجا ببینید.",sectionTreatmentsEyebrow:"برنامه درمان شما",treatmentTitle:"طرح‌های درمان",treatmentSubtitle:"مراحل و پیشرفت درمان خود را دنبال کنید.",sectionRecordsEyebrow:"پرونده سلامت شما",recordsTitle:"پرونده دندان‌پزشکی",recordsSubtitle:"محیطی خصوصی برای سوابق و فایل‌های پزشکی مجاز شما.",sectionBillingEyebrow:"امور مالی شما",billingTitle:"پرداخت‌ها و فاکتورها",billingSubtitle:"وضعیت پرداخت‌ها و مبلغ‌های باقی‌مانده را بررسی کنید.",sectionProfileEyebrow:"حساب شما",profileTitle:"اطلاعات شخصی",profileSubtitle:"مشخصات حساب و اطلاعات تماس خود را مدیریت کنید.",backHome:"بازگشت به سایت"}},Na=()=>oe()==="fa"?"fa":"en";function pa(e){const t=`dashboard.${e}`,a=w(t);return a&&a!==t?a:Os[Na()][e]??e}const Bs=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),R=e=>Bs(pa(e)),pn={grid:`
    <rect x="3" y="3" width="7" height="7" rx="1.4"/>
    <rect x="14" y="3" width="7" height="7" rx="1.4"/>
    <rect x="3" y="14" width="7" height="7" rx="1.4"/>
    <rect x="14" y="14" width="7" height="7" rx="1.4"/>
  `,calendar:`
    <rect x="3" y="5" width="18" height="16" rx="2"/>
    <path d="M7 3v4m10-4v4M3 10h18"/>
  `,tooth:`
    <path d="M12 4c2.4 0 3.2-1.3 5.7-1.3C22.5 2.7 24 6.6 22.5 11c-1.3 4-2.4 10-5.6 10-2 4.9-7S9.1 21 7.1 21c-3.2 0-4.3-6-5.6-10C0 6.6 1.5 2.7 6.3 2.7 8.8 2.7 9.6 4 12 4Z"/>
  `,file:`
    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
    <path d="M13 2v7h7M8 13h8M8 17h5"/>
  `,card:`
    <rect x="2" y="5" width="20" height="14" rx="2"/>
    <path d="M2 10h20m-15 5h4"/>
  `,user:`
    <circle cx="12" cy="8" r="4"/>
    <path d="M4.5 21a7.5 7.5 0 0 1 15 0"/>
  `,arrow:`
    <path d="M5 12h14m-6-6 6 6-6 6"/>
  `,chevron:`
    <path d="m9 18 6-6-6-6"/>
  `,plus:`
    <path d="M12 5v14M5 12h14"/>
  `,menu:`
    <path d="M4 6h16M4 12h16M4 18h16"/>
  `,logout:`
    <path d="M10 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5m4-4 4-4-4-4m4 4H9"/>
  `,heart:`
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>
  `,shield:`
    <path d="m12 2 8 4v6c0 5.1-3.5 8.3-8 10-4.5-1.7-8-4.9-8-10V6l8-4Z"/>
    <path d="m9 12 2 2 4-4"/>
  `,help:`
    <circle cx="12" cy="12" r="9"/>
    <path d="M9.5 9a2.5 2.5 0 1 1 4.3 1.7c-1.1 1-1.8 1.4-1.8 3.1M12 17h.01"/>
  `,spark:`
    <path d="m12 2 2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2L12 2Z"/>
  `};function te(e,t=""){return`
    <svg
      class="dn-icon ${t}"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.7"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      ${pn[e]??pn.grid}
    </svg>
  `}const It=[["overview","overview","grid"],["appointments","appointments","calendar"],["treatments","treatments","tooth"],["records","records","file"],["billing","billing","card"],["profile","profile","user"]],Fs=new Set(It.map(([e])=>e)),js=new Set(["overview","appointments","records","profile"]);function fn(e,t,a,n){const o=e==="overview";return`
    <button
      type="button"
      class="dn-nav-button${o?" is-active":""}"
      data-dashboard-tab="${e}"
      data-nav-placement="${n}"
      aria-current="${o?"page":"false"}"
    >
      <span class="dn-nav-icon">
        ${te(a)}
      </span>

      <span class="dn-nav-label">
        ${R(t)}
      </span>

      ${n==="sidebar"?`
            <span class="dn-nav-trailing">
              ${te("chevron")}
            </span>
          `:""}
    </button>
  `}function Hs(e,t,a){return`
    <div class="dn-page-heading">
      <div class="dn-eyebrow">
        ${R(e)}
      </div>

      <h1>${R(t)}</h1>

      <p>${R(a)}</p>
    </div>
  `}function na(e,t){return`
    <article class="dn-stat">
      <span class="dn-stat-symbol">
        ${te(e)}
      </span>

      <span class="dn-stat-label">
        ${R(t)}
      </span>

      <strong
        data-dashboard-stat="${t}"
        aria-label="${R("dataPending")}"
      >
        —
      </strong>

      <small>${R("dataPending")}</small>
    </article>
  `}function oa(e,t,a,n=null){const o=n?"a":"button",i=n?`href="${n}"`:'type="button" data-dashboard-action="profile"';return`
    <${o}
      class="dn-action-card"
      ${i}
    >
      <span class="dn-action-icon">
        ${te(a)}
      </span>

      <span class="dn-action-copy">
        <strong>${R(e)}</strong>
        <small>${R(t)}</small>
      </span>

      <span class="dn-action-arrow">
        ${te("arrow")}
      </span>
    </${o}>
  `}function at(e,t,a,n,o){return`
    <section
      class="dn-panel"
      data-dashboard-panel="${e}"
      aria-label="${R(e)}"
      hidden
    >
      ${Hs(t,a,n)}

      ${o}
    </section>
  `}function Us(){return`
    <section
      class="dn-panel"
      data-dashboard-panel="overview"
      aria-label="${R("overview")}"
    >

      <div class="dn-overview-heading">
        <div>
          <span class="dn-eyebrow">
            ${R("sectionOverviewEyebrow")}
          </span>

          <h1>
            ${R("greeting")}

            <span class="dn-heading-spark">
              ${te("spark")}
            </span>
          </h1>

          <p>${R("subtitle")}</p>
        </div>

        <button
          type="button"
          class="dn-button dn-button-primary dn-overview-cta"
          data-dashboard-action="appointments"
          data-booking-start
        >
          ${te("plus")}
          ${R("bookNewVisit")}
          ${te("arrow","dn-button-arrow")}
        </button>
      </div>

      <!-- NEXT APPOINTMENT -->

      <div class="dn-welcome-card">
        <div class="dn-welcome-content">

          <span class="dn-welcome-kicker">
            ${te("heart")}
            ${R("healthTag")}
          </span>

          <div class="dn-welcome-meta">

            <span class="dn-welcome-label">
              ${R("yourNextVisit")}
            </span>

            <h2 data-dashboard-next-title>
              ${R("noNextVisit")}
            </h2>

            <p data-dashboard-next-description>
              ${R("nextVisitHint")}
            </p>
          </div>

          <div class="dn-welcome-actions">
            <button
              type="button"
              class="dn-button dn-button-white"
              data-dashboard-action="appointments"
            >
              ${R("viewAppointments")}
              ${te("arrow")}
            </button>
          </div>
        </div>

        <div
          class="dn-welcome-art"
          aria-hidden="true"
        >
          <span class="dn-orbit dn-orbit-one"></span>
          <span class="dn-orbit dn-orbit-two"></span>

          <span class="dn-tooth-illustration">
            ${te("tooth")}
          </span>

          <span class="dn-floating-mark dn-floating-mark-a">
            ${te("spark")}
          </span>

          <span class="dn-floating-mark dn-floating-mark-b">
            ${te("plus")}
          </span>
        </div>
      </div>

      <!-- STATS -->

      <div class="dn-section-heading">
        <div>
          <span class="dn-eyebrow">
            ${R("overviewLabel")}
          </span>

          <h2>${R("overviewHeading")}</h2>
        </div>
      </div>

      <div class="dn-stat-grid">
        ${na("calendar","upcoming")}
        ${na("tooth","activePlans")}
        ${na("card","balance")}
      </div>

      <!-- QUICK ACTIONS -->

      <div class="dn-overview-columns">

        <section class="dn-surface-card dn-actions-area">
          <div class="dn-card-title">
            <h2>${R("quickActions")}</h2>
            <p>${R("quickActionsCopy")}</p>
          </div>

          <div class="dn-action-list">

            ${oa("actionServices","actionServicesCopy","calendar","/service")}

            ${oa("actionProfile","actionProfileCopy","user")}

            ${oa("actionHelp","actionHelpCopy","help","/contact-us")}
          </div>
        </section>

        <!-- CARE TIMELINE -->

        <section class="dn-surface-card dn-journey-area">
          <div class="dn-card-title">
            <h2>${R("journey")}</h2>
            <p>${R("journeyCopy")}</p>
          </div>

          <div class="dn-journey-placeholder">

            <div class="dn-journey-track">
              <span>${te("calendar")}</span>
              <i></i>
              <span>${te("tooth")}</span>
              <i></i>
              <span>${te("shield")}</span>
            </div>

            <div class="dn-journey-note">
              ${te("shield")}

              <span>
                ${R("gentleReminderCopy")}
              </span>
            </div>

          </div>
        </section>

      </div>
    </section>
  `}function zs(){return`
    <main
      class="dentistry-portal dn-dashboard"
      data-portal-page="dashboard"
      data-no-translate
      dir="${Na()==="fa"?"rtl":"ltr"}"
    >
      <div class="dn-dashboard-shell">

        <!-- MOBILE OVERLAY -->

        <div
          class="dn-sidebar-scrim"
          data-sidebar-scrim
          hidden
        ></div>

        <!-- SIDEBAR -->

        <aside
          class="dn-sidebar"
          id="dn-dashboard-sidebar"
          aria-label="${R("portal")}"
        >
          <a
            href="/"
            class="dn-brand"
            aria-label="${R("backHome")}"
          >
            <img
              src="/asset/img/logo.png"
              alt="Dentistry"
              loading="eager"
            />

            <span>${R("portal")}</span>
          </a>

          <div class="dn-sidebar-scroll">
            <div class="dn-nav-caption">
              ${R("workspace")}
            </div>

            <nav
              class="dn-nav"
              aria-label="${R("general")}"
            >
              ${It.map(([e,t,a])=>fn(e,t,a,"sidebar")).join("")}
            </nav>
          </div>

          <div class="dn-sidebar-footer">
            <div class="dn-support-panel">

              <div class="dn-support-symbol">
                ${te("help")}
              </div>

              <strong>${R("support")}</strong>
              <p>${R("supportText")}</p>

              <a href="/contact-us">
                ${R("contact")}
                ${te("arrow")}
              </a>
            </div>

            <button
              type="button"
              class="dn-logout"
              data-dashboard-logout
            >
              ${te("logout")}

              <span data-logout-label>
                ${R("logout")}
              </span>
            </button>
          </div>
        </aside>

        <!-- MAIN -->

        <div class="dn-main">

          <!-- TOPBAR -->

          <header class="dn-topbar">
            <div class="dn-topbar-left">

              <button
                type="button"
                class="dn-menu-button"
                data-sidebar-toggle
                aria-label="${R("menu")}"
                aria-expanded="false"
                aria-controls="dn-dashboard-sidebar"
              >
                ${te("menu")}
              </button>

              <div class="dn-breadcrumb">
                <span>${R("portal")}</span>

                <span class="dn-breadcrumb-separator">
                  /
                </span>

                <strong data-current-section>
                  ${R("overview")}
                </strong>
              </div>
            </div>

            <div class="dn-topbar-right">

              <a
                class="dn-topbar-site-link"
                href="/"
              >
                ${R("backHome")}
              </a>

              <div class="dn-topbar-lang">
                ${vn("dn-language-switch")}
              </div>

              <button
                type="button"
                class="dn-topbar-avatar"
                data-dashboard-action="profile"
                aria-label="${R("profile")}"
              >
                ${te("user")}
              </button>
            </div>
          </header>

          <!-- DASHBOARD CONTENT -->

          <div
            class="dn-content"
            id="dn-dashboard-content"
          >

            ${Us()}

            ${at("appointments","sectionAppointmentsEyebrow","appointmentTitle","appointmentSubtitle",Zr())}

            ${at("treatments","sectionTreatmentsEyebrow","treatmentTitle","treatmentSubtitle",ns())}

            ${at("records","sectionRecordsEyebrow","recordsTitle","recordsSubtitle",fs())}

            ${at("billing","sectionBillingEyebrow","billingTitle","billingSubtitle",$s())}

            ${at("profile","sectionProfileEyebrow","profileTitle","profileSubtitle",`
                <div class="dn-profile-surface">
                  ${Lr()}
                </div>
              `)}

            <div class="dn-content-footer">
              <span>
                © ${new Date().getFullYear()} Dentistry
              </span>

              <a href="/contact-us">
                ${R("contact")}
              </a>
            </div>

          </div>
        </div>

        <!-- MOBILE BOTTOM NAVIGATION -->

        <nav
          class="dn-mobile-bar"
          aria-label="${R("general")}"
        >
          ${It.filter(([e])=>js.has(e)).map(([e,t,a])=>fn(e,t,a,"mobile")).join("")}
        </nav>

      </div>
    </main>
  `}function Vs(){const e=document.querySelector('[data-portal-page="dashboard"]');if(!e)return()=>{};const t=new AbortController,{signal:a}=t;if(!We())return t.abort(),window.location.replace("/login"),()=>{};const n=x=>e.querySelector(x),o=[...e.querySelectorAll("[data-dashboard-tab]")],i=[...e.querySelectorAll("[data-dashboard-panel]")],r=n("#dn-dashboard-sidebar"),s=n("[data-sidebar-scrim]"),l=n("[data-sidebar-toggle]");let d=null,c=!1,u=!1;const p=Kr(e,a),m=Ms(e,a),f=os(e,a),h=hs(e,a),b=ks(e,a);function S(x=!1){const $=r.classList.contains("is-open");r.classList.remove("is-open"),s.hidden=!0,l.setAttribute("aria-expanded","false"),document.body.style.overflow="",x&&$&&l.focus()}function A(){var x;r.classList.add("is-open"),s.hidden=!1,l.setAttribute("aria-expanded","true"),document.body.style.overflow="hidden",(x=r.querySelector(".dn-nav-button"))==null||x.focus()}function k(x,$=!0,y=!0){var L,v,D,E;const C=Fs.has(x)?x:"overview";o.forEach(P=>{const _=P.dataset.dashboardTab===C;P.classList.toggle("is-active",_),P.setAttribute("aria-current",_?"page":"false")}),i.forEach(P=>{P.hidden=P.dataset.dashboardPanel!==C});const g=((L=It.find(([P])=>P===C))==null?void 0:L[1])??"overview";if(n("[data-current-section]").textContent=pa(g),$){const P=new URL(window.location.href);C==="overview"?P.searchParams.delete("section"):P.searchParams.set("section",C),window.history.replaceState(window.history.state,"",P.pathname+P.search+P.hash)}if(S(),C==="treatments"&&f.load(),C==="records"&&h.load(),C==="billing"&&b.load(),C==="profile"&&!c)try{d=Pr(e)||null,c=!0}catch(P){console.error("Patient profile initialization:",P)}if(y){const P=(D=(v=window.matchMedia)==null?void 0:v.call(window,"(prefers-reduced-motion: reduce)"))==null?void 0:D.matches;(E=n("#dn-dashboard-content"))==null||E.scrollIntoView({behavior:P?"auto":"smooth",block:"start"})}}e.addEventListener("click",x=>{const $=x.target.closest("[data-dashboard-tab]");if($&&e.contains($)){k($.dataset.dashboardTab);return}const y=x.target.closest("[data-dashboard-action]");y&&e.contains(y)&&k(y.dataset.dashboardAction)},{signal:a}),l.addEventListener("click",()=>{r.classList.contains("is-open")?S(!0):A()},{signal:a}),s.addEventListener("click",()=>S(!0),{signal:a}),document.addEventListener("keydown",x=>{x.key==="Escape"&&r.classList.contains("is-open")&&S(!0)},{signal:a}),e.querySelectorAll("[data-set-language]").forEach(x=>{x.addEventListener("click",$=>{$.stopPropagation();const y=x.dataset.setLanguage;!["fa","en"].includes(y)||y===Na()||yn(y,()=>window.dispatchEvent(new PopStateEvent("popstate")))},{signal:a})});const T=new URLSearchParams(window.location.search).get("section");k(T,!1,!1);const N=n("[data-dashboard-logout]");return N.addEventListener("click",async()=>{if(!u){u=!0,N.disabled=!0,n("[data-logout-label]").textContent=pa("loggingOut");try{await wt.logout(a)}catch(x){console.warn("Logout API unavailable; local token will be cleared.",x)}finally{St(),window.location.replace("/login")}}},{signal:a}),()=>{t.abort(),document.body.style.overflow="",typeof m=="function"&&m(),typeof p=="function"&&p(),f.cleanup(),h.cleanup(),b.cleanup(),typeof d=="function"&&d()}}const hn={arrow:'<path d="M5 12h14m-6-6 6 6-6 6"/>',back:'<path d="M19 12H5m6 6-6-6 6-6"/>',tooth:'<path d="M12 4c2.4 0 3.2-1.3 5.7-1.3C22.5 2.7 24 6.6 22.5 11c-1.3 4-2.4 10-5.6 10-2 0-2.2-7-4.9-7S9.1 21 7.1 21c-3.2 0-4.3-6-5.6-10C0 6.6 1.5 2.7 6.3 2.7 8.8 2.7 9.6 4 12 4Z"/>',calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',user:'<circle cx="12" cy="8" r="4"/><path d="M4.5 21a7.5 7.5 0 0 1 15 0"/>',users:'<circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0m1-14a3 3 0 0 1 0 6m2 3a5 5 0 0 1 3 5"/>',shield:'<path d="m12 2 8 4v6c0 5.1-3.5 8.3-8 10-4.5-1.7-8-4.9-8-10V6l8-4Z"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',mail:'<rect x="2.5" y="5" width="19" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',lock:'<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',eye:'<path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z"/><circle cx="12" cy="12" r="2.5"/>',eyeOff:'<path d="M3 3l18 18M10.5 6.2A11.4 11.4 0 0 1 12 6c6.5 0 10 6 10 6a17 17 0 0 1-3.3 3.8M6 7.8A16.1 16.1 0 0 0 2 12s3.5 6 10 6c1.7 0 3.1-.4 4.4-1"/>',check:'<path d="m5 12 4 4L19 6"/>',receipt:'<path d="M5 3h14v18l-3-2-4 2-4-2-3 2V3Z"/><path d="M9 8h6m-6 4h6"/>',activity:'<path d="M2 12h5l3-7 4 14 3-7h5"/>',credit:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',settings:'<path d="M10.5 2h3l.6 2.4 2.2.9 2.1-1.3 2.1 2.1-1.3 2.1.9 2.2 2.4.6v3l-2.4.6-.9 2.2 1.3 2.1-2.1 2.1-2.1-1.3-2.2.9-.6 2.4h-3l-.6-2.4-2.2-.9-2.1 1.3-2.1-2.1 1.3-2.1-.9-2.2L2 13.5v-3l2.4-.6.9-2.2L4 5.6l2.1-2.1 2.1 1.3 2.2-.9.1-1.9Z"/><circle cx="12" cy="12" r="3"/>',logOut:'<path d="M10 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5m4-4 4-4-4-4m4 4H9"/>',spark:'<path d="m12 2 2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2L12 2Z"/>',menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',phone:'<path d="M6 2h4l1 5-2.5 1.6a14 14 0 0 0 7 7L17 13l5 1v4c0 2-1.8 4-4 4C9.2 22 2 14.8 2 6c0-2.2 2-4 4-4Z"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 10v6m0-10h.01"/>'};function Ee(e,t=""){return`<svg class="dp-icon ${t}" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${hn[e]||hn.tooth}</svg>`}function Ys(e="Design preview only — no data is sent or saved to a server."){return`<div class="dp-demo-note" role="note">${Ee("info")}<span>${e}</span></div>`}function Ie(e){return lo(e)}const vt={consultation:{label:"Dental consultation",total:65e4,deposit:15e4,duration:"30 min"},cleaning:{label:"Cleaning & prevention",total:14e5,deposit:35e4,duration:"60 min"},whitening:{label:"Teeth whitening consultation",total:85e4,deposit:2e5,duration:"45 min"}};function Gs(e,t,a,n){const o=Ie(n==="deposit"?e.deposit:e.total);return w("Review completed — preview only")!=="Review completed — preview only"?`${w(e.label)} · ${t} · ${a}. ${n==="deposit"?"بیعانه نمونه":"مبلغ نمونه قابل پرداخت در کلینیک"}: ${o}. هیچ نوبت یا پرداختی ثبت نشده است.`:`${e.label} · ${t} · ${a}. Example ${n==="deposit"?"deposit":"pay-at-clinic total"}: ${o}. No reservation or payment was created.`}function Ws(){return`<main class="dentistry-portal dp-checkout-page" data-portal-page="checkout">
    <div class="dp-checkout-container">
      <nav class="dp-checkout-trail" aria-label="Breadcrumb"><a href="/">Home</a>${Ee("arrow")}<a href="/dashboard">Patient portal</a>${Ee("arrow")}<strong>Checkout preview</strong></nav>
      ${Ys("Prototype checkout: all dates, appointment slots and prices are examples. No booking is made, no payment is collected and no card details are requested.")}
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
          <div class="dp-payment-choices"><label class="dp-payment-choice is-selected"><input type="radio" name="paymentMethod" value="deposit" checked/><span class="dp-payment-choice-icon">${Ee("credit")}</span><span><strong>Online deposit</strong><small>Available after payment-gateway setup</small></span><span class="dp-radio-mark"></span></label><label class="dp-payment-choice"><input type="radio" name="paymentMethod" value="clinic"/><span class="dp-payment-choice-icon">${Ee("receipt")}</span><span><strong>Pay at clinic</strong><small>Subject to clinic confirmation</small></span><span class="dp-radio-mark"></span></label></div>
        </section>
      </div>
      <aside class="dp-checkout-summary"><div class="dp-summary-image"><div class="dp-summary-tooth">${Ee("tooth")}</div><div><span>DR. ZEINOLABEDIN</span><h2>Your appointment summary</h2></div></div>
        <div class="dp-summary-body"><span class="dp-eyebrow">ORDER OVERVIEW · SAMPLE</span><div class="dp-summary-meta"><span>${Ee("tooth")} <span id="dp-summary-service">Dental consultation</span></span><span>${Ee("clock")} <span id="dp-summary-time">30 min · 10:30 AM</span></span><span>${Ee("calendar")} <span id="dp-summary-date">Choose a date</span></span></div><div class="dp-summary-separator"></div>
        <div class="dp-summary-line"><span>Example service total</span><strong id="dp-summary-total">${Ie(65e4)}</strong></div><div class="dp-summary-line"><span>Example deposit</span><strong id="dp-summary-deposit">${Ie(15e4)}</strong></div><div class="dp-summary-line"><span>Remaining at clinic (example)</span><strong id="dp-summary-remaining">${Ie(5e5)}</strong></div><div class="dp-summary-separator"></div>
        <div class="dp-summary-pay"><span id="dp-summary-pay-label">Preview deposit amount</span><strong id="dp-summary-pay-amount">${Ie(15e4)}</strong></div>
        <button class="dp-btn dp-btn-primary dp-btn-block" type="submit" form="dp-checkout-form">Review demo summary ${Ee("arrow")}</button>
        <p class="dp-form-feedback" data-form-feedback role="status" aria-live="polite" hidden></p>
        <div class="dp-checkout-preview" id="dp-checkout-review" hidden role="status"></div>
        <div class="dp-summary-guarantee">${Ee("shield")} No payment is processed in this preview.</div></div>
      </aside></div>
    </div>
  </main>`}function Zs(){const e=document.querySelector('[data-portal-page="checkout"]');if(!e)return()=>{};const t=new AbortController,a=e.querySelector("#dp-checkout-service"),n=e.querySelector("#dp-checkout-date"),o=e.querySelector("#dp-checkout-time"),i=[...e.querySelectorAll('input[name="paymentMethod"]')],r=new Date,s=h=>String(h).padStart(2,"0"),l=h=>`${h.getFullYear()}-${s(h.getMonth()+1)}-${s(h.getDate())}`;n.min=l(r);const d=new Date(r.getFullYear(),r.getMonth(),r.getDate()+7);n.value=l(d);const c=new URLSearchParams(location.search),u=c.get("service");u&&Object.hasOwn(vt,u)&&(a.value=u);const p=c.get("date");p&&/^\d{4}-\d{2}-\d{2}$/.test(p)&&p>=n.min&&(n.value=p);const m=c.get("time");[...o.options].some(h=>h.value===m)&&(o.value=m);const f=()=>{var A;const h=vt[a.value]||vt.consultation,b=((A=i.find(k=>k.checked))==null?void 0:A.value)||"deposit",S=(k,T)=>{e.querySelector(k).textContent=T};S("#dp-summary-service",w(h.label)),S("#dp-summary-time",`${w(h.duration)} · ${o.options[o.selectedIndex].textContent.replace(/ \(example\)| \(نمونه\)/g,"")}`),S("#dp-summary-date",n.value||w("Choose a date")),S("#dp-summary-total",Ie(h.total)),S("#dp-summary-deposit",Ie(h.deposit)),S("#dp-summary-remaining",Ie(h.total-h.deposit)),S("#dp-summary-pay-label",w(b==="deposit"?"Preview deposit amount":"Example payable at clinic")),S("#dp-summary-pay-amount",Ie(b==="deposit"?h.deposit:h.total)),e.querySelectorAll(".dp-payment-choice").forEach(k=>k.classList.toggle("is-selected",k.querySelector("input").checked)),e.querySelector("#dp-checkout-review").hidden=!0};for(const h of[a,o,n,...i])h.addEventListener("change",f,{signal:t.signal});return f(),e.querySelector("#dp-checkout-form").addEventListener("submit",h=>{var g;h.preventDefault();const b=e.querySelector("#dp-checkout-name").value.trim(),S=e.querySelector("#dp-checkout-phone").value.trim(),A=e.querySelector("#dp-checkout-email"),k=e.querySelector("[data-form-feedback]"),T=L=>{k.textContent=w(L),k.dataset.state="error",k.hidden=!1};if(!n.value||n.value<n.min)return T("Please select a valid date in the future.");if(b.length<2)return T("Please enter your full name.");if(!/^[+\d\s()-]{8,20}$/.test(S))return T("Please enter a valid phone number.");if(!A.value.trim()||!A.checkValidity())return T("Please enter a valid email address.");const N=vt[a.value],x=((g=i.find(L=>L.checked))==null?void 0:g.value)||"deposit";k.hidden=!0;const $=e.querySelector("#dp-checkout-review");$.replaceChildren();const y=document.createElement("strong");y.textContent=w("Review completed — preview only");const C=document.createElement("p");C.textContent=Gs(N,n.value,o.value,x),$.append(y,C),$.hidden=!1,$.scrollIntoView({block:"nearest",behavior:"smooth"})},{signal:t.signal}),()=>t.abort()}const fa={"/":{render:jo,init:Ho,title:"Home"},"/about-us":{render:oi,init:ii,title:"About Us"},"/blog":{render:ui,init:mi,title:"Blog"},"/contact-us":{render:Mi,init:Oi,title:"Contact Us"},"/service":{render:Gi,init:Wi,title:"Services"},"/faq":{render:fr,init:hr,title:"FAQ"},"/login":{render:vr,init:yr,title:"Patient Login",standalone:!0},"/register":{render:Sr,init:Tr,title:"Patient Registration",standalone:!0},"/forgot-password":{render:xr,init:Cr,title:"Forgot Password",standalone:!0},"/dashboard":{render:zs,init:Vs,title:"Patient Dashboard",standalone:!0,requiresAuth:!0},"/checkout":{render:Ws,init:Zs,title:"Appointment Checkout"}},Ks=[{pattern:/^\/post\/([^/]+)$/,route:{render:Ei,init:Ai,title:"Blog Details"}},{pattern:/^\/services\/([1-9]\d*)$/,route:{render:ir,init:rr,title:"Service Details"}},{pattern:/^\/team\/([a-z0-9-]+)$/i,route:{render:ur,init:mr,title:"Doctor Profile"}}];function qt(e){let t=String(e||"/");return t=t.replace(/\/(?:index\.html?|index\.htm)$/i,"/")||"/",t!=="/"&&t.endsWith(".html")&&(t=t.slice(0,-5)),t.replace(/\/+$/,"")||"/"}function Qs(e){if(Object.prototype.hasOwnProperty.call(fa,e))return fa[e];for(const t of Ks)if(t.pattern.test(e))return t.route;return null}function Xs(){if(qt(window.location.pathname)!=="/team")return;const t=new URL("/about-us",window.location.origin);t.search=window.location.search,t.hash="about-doctors",window.history.replaceState(window.history.state,"",t.pathname+t.search+t.hash)}function Js(e){let t="This page is not available yet.";return e.startsWith("/post/")?t="This blog post could not be found.":e.startsWith("/services/")?t="This service could not be found.":e.startsWith("/team/")&&(t="This doctor profile could not be found."),`
    <main
      class="w-container"
      style="padding:100px 20px;min-height:50vh"
    >

      <h1>
        ${w("Page not available yet")}
      </h1>

      <p>
        ${w(t)}
      </p>

      <p>
        <a href="/">
          ${w("Back to home")}
        </a>
      </p>

    </main>
  `}let ha=[];function to(){for(const e of ha)try{e==null||e()}catch(t){console.warn("Page cleanup error:",t)}ha=[]}function ao(e=!1){const t=new URL("/login",window.location.origin),a=new URLSearchParams(window.location.search).get("lang");(a==="fa"||a==="en")&&t.searchParams.set("lang",a),e&&t.searchParams.set("expired","1"),window.history.replaceState(window.history.state,"",t.pathname+t.search)}function nt(){ga(),to();const e=document.getElementById("app");if(!e)throw new Error("Missing #app in index.html");Xs();let t=qt(window.location.pathname),a=Qs(t);a!=null&&a.requiresAuth&&!Xe()&&(ao(),t="/login",a=fa[t]);const n=!(a!=null&&a.standalone),o=a?a.render():Js(t);e.innerHTML=`
    ${n?wo():""}

    ${o}

    ${n?So():""}
  `,document.title=`${w((a==null?void 0:a.title)||"Page Not Found")} | ${w("Dr. Zeinolabedin")}`;const i=[n?$o:null,a==null?void 0:a.init,n?To:null];for(const r of i){if(typeof r!="function")continue;const s=r();typeof s=="function"&&ha.push(s)}co(e),window.location.hash&&requestAnimationFrame(()=>{let r=window.location.hash.slice(1);try{r=decodeURIComponent(r)}catch{}const s=document.getElementById(r);s&&s.scrollIntoView({behavior:"auto",block:"start"})})}function el(){const e=bo(()=>{qt(window.location.pathname)==="/dashboard"&&(ao(!0),nt())}),t=()=>{nt()},a=o=>{var l;const i=o.target instanceof Element?o.target:(l=o.target)==null?void 0:l.parentElement,r=i==null?void 0:i.closest("[data-set-language]");if(!r)return;o.preventDefault();const s=r.getAttribute("data-set-language");s!=="fa"&&s!=="en"||yn(s,nt)},n=o=>{var p;if(o.defaultPrevented||o.button!==0||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey)return;const i=o.target instanceof Element?o.target:(p=o.target)==null?void 0:p.parentElement,r=i==null?void 0:i.closest("a[href]");if(!r||r.hasAttribute("download")||r.target&&r.target!=="_self")return;const s=r.getAttribute("href");if(!s||s==="#"||s.startsWith("#"))return;const l=new URL(r.href,window.location.href);if(l.origin!==window.location.origin||!["http:","https:"].includes(l.protocol))return;const d=qt(l.pathname);if(/\.(?:pdf|docx?|xlsx?|zip|png|jpg|jpeg|svg|webp|css|js)$/i.test(d))return;o.preventDefault();const c=d+l.search+l.hash,u=window.location.pathname+window.location.search+window.location.hash;c!==u&&(window.history.pushState({},"",c),nt(),l.hash||window.scrollTo({top:0,behavior:"auto"}))};return window.addEventListener("popstate",t),document.addEventListener("click",a),document.addEventListener("click",n),nt(),()=>{window.removeEventListener("popstate",t),document.removeEventListener("click",a),document.removeEventListener("click",n),e==null||e(),to()}}el();
