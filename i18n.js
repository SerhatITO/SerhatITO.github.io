(function(){
'use strict';

const T = {
en: {
    // Nav & Menu
    'nav.work':'work','nav.about':'about','nav.skills':'skills','nav.contact':'contact','nav.resume':'resume','nav.menu':'menu','menu.close':'Close',

    // Loader
    'loader.title':'.NET Backend Engineer',
    'loader.sub':'Clean Architecture \u00b7 DDD \u00b7 Scalable Systems',

    // Numbers
    'num.lines':'Lines of C#','num.systems':'Production Systems','num.domains':'Entity Domains','num.services':'Service Files','num.hubs':'SignalR Hubs',

    // About
    'about.label':'About',
    'about.subtitle':'.NET Backend Engineer',
    'about.p1':"I've been working on programming since 2020, exploring different languages and technologies along the way. Over time, I found my direction in backend engineering \u2014 specifically .NET and building scalable enterprise systems.",
    'about.p2':"Today, I specialize in designing multi-tenant platforms with ASP.NET Core, Clean Architecture, and Domain-Driven Design. I've shipped production systems handling real-time access control, CRM workflows, caching layers, and containerized deployments \u2014 writing 21,500+ lines of production C# so far.",
    'about.p3':"I work across the full backend stack: domain modeling, database design, API architecture, real-time communication with SignalR, Redis caching, Docker Swarm deployments, CI/CD pipelines, and observability with OpenTelemetry. I'm still learning new things and continuing to expand my knowledge \u2014 that part hasn't changed.",
    'about.edu':'Education',
    'about.edu.val':'OSTiM Technical University<br>Software Engineering, 2021-2025<br>GPA 3.00',
    'about.loc':'Location',
    'about.loc.val':'Ankara, Turkey',
    'about.status':'Status',
    'about.status.val':'Open to work<br>On-site / Hybrid / Remote',

    // Skills
    'skills.label':'Tech Stack',
    'skills.title':'What I<br>work with',
    'skills.core':'Core \u2014 .NET Backend',
    'skills.infra':'Data, Infra & DevOps',
    'skills.other':'Also Experienced',

    // Experience
    'career.label':'Career',
    'career.title':'Experience',
    'exp.badge':'Current',
    'exp.texit.role':'Software Engineer Backend Developer',
    'exp.texit.company':'TEXIT \u00b7 Full-time \u00b7 Hybrid',
    'exp.texit.desc':'Built texit-access (Dormimy) \u2014 physical access control system. 14.7K+ lines C#, multi-tenant, Docker Swarm, Grafana.',
    'exp.utarit.role':'Software Engineer Intern',
    'exp.utarit.company':'Utarit Bilisim \u00b7 On-site',
    'exp.utarit.desc':'Test Engineer + .NET Developer. Built SoliNova (Flutter). Automated testing with Appium.',
    'exp.avs.role':'Software Engineer Intern',
    'exp.avs.company':'AVS Muhendislik \u00b7 Hybrid',
    'exp.avs.desc':'Embedded systems \u2014 injector pump, blood serum heater. Arduino + C++ hardware integration.',
    'exp.quavis.role':'Software Engineer Intern',
    'exp.quavis.company':'QUAVIS Aviation Solutions \u00b7 Hybrid',
    'exp.quavis.desc':'Blazor WebAssembly app for aviation. Interactive UI with .NET backend.',
    'exp.ikartu.role':'Software Engineer Intern',
    'exp.ikartu.company':'Ikartu Dinamik \u00b7 Remote',
    'exp.ikartu.desc':'C/C++ project development.',

    // Contact
    'contact.label':'Get in touch',
    'contact.title':"Let's build<br>something<br>together.",
    'contact.email':'Email','contact.linkedin':'LinkedIn','contact.github':'GitHub',

    // Footer
    'footer.tagline':'Crafted with precision',

    // Slider details
    'slide.1.desc':'Physical access control system \u2014 turnstiles, doors, gates with QR/NFC/Card/Face auth. 19 entity domains including AccessControl, Tenancy, Licensing, Visitor Management, Alerts, Analytics, Sanctions. AccessEngine + RuleEvaluator + DirectionResolver pipeline. Multi-database (PostgreSQL + SQL Server), cross-platform (Windows/Linux/RPi).',
    'slide.1.stats':'14,704 lines C# \u00b7 19 domains \u00b7 Production at TEXIT',
    'slide.2.desc':'Multi-tenant CRM platform \u2014 Customers, Sales pipelines, Billing, Subscriptions, Marketing, Projects, Compliance, Templates. Same Clean Architecture as texit-access. 14 service modules, CachedRepository, encryption, audit logging.',
    'slide.2.stats':'6,876 lines C# \u00b7 98 service files \u00b7 14 modules',
    'slide.3.desc':'Dormimy \u2014 dormitory management extension for texit-access. VisitorAccessEngine with VisitorPass, VisitorCategory, VisitorAccessRule system. Category-based rule mapping for dormitory entry/exit control. Currently in active development.',
    'slide.3.stats':'Active development \u00b7 Extending texit-access platform',
    'slide.4.desc':'4 SignalR hubs \u2014 AccessPointHub (gate control), TenantAdminHub, PlatformAdminHub, AiHub. Session managers for card writing, face enrollment, terminal sessions. Custom DormimyEvictionHandler, DormimyUserIdProvider, Hub filters.',
    'slide.4.stats':'QR / NFC / Card / Face / BLE auth modes',
    'slide.5.desc':'Docker Swarm deployment to GHCR. CI/CD via GitHub Actions \u2014 build, test, push, rolling deploy. CachedRepository decorator with CacheConfigResolver \u2014 per-entity Redis/InMemory hybrid. Auto-invalidation on writes via UnitOfWork.',
    'slide.5.stats':'ghcr.io/feedemy/texit-access \u00b7 Zero-downtime deploys',
    'slide.6.desc':'Factory-pattern encryption with tenant-scoped keys. PII protection (KVKK/GDPR). OpenTelemetry OTLP to Grafana Cloud. Serilog LoggerMessage source generators. xUnit tests with NSubstitute. Full distributed tracing across hubs, EF, Redis.',
    'slide.6.stats':'Encryption + Observability + Testing pipeline',
},
tr: {
    // Nav & Menu
    'nav.work':'projeler','nav.about':'hakkımda','nav.skills':'yetenekler','nav.contact':'iletişim','nav.resume':'özgeçmiş','nav.menu':'menü','menu.close':'Kapat',

    // Loader
    'loader.title':'.NET Backend Mühendisi',
    'loader.sub':'Clean Architecture \u00b7 DDD \u00b7 Ölçeklenebilir Sistemler',

    // Numbers
    'num.lines':'Satır C#','num.systems':'Üretim Sistemi','num.domains':'Entity Domain','num.services':'Servis Dosyası','num.hubs':'SignalR Hub',

    // About
    'about.label':'Hakkımda',
    'about.subtitle':'.NET Backend Mühendisi',
    'about.p1':"2020'den beri programlama üzerine çalışıyorum, bu süreçte farklı diller ve teknolojiler keşfettim. Zamanla yönümü backend mühendisliğinde buldum \u2014 özellikle .NET ve ölçeklenebilir kurumsal sistemler geliştirme alanında.",
    'about.p2':"Bugün, ASP.NET Core, Clean Architecture ve Domain-Driven Design ile çok kiracılı (multi-tenant) platformlar tasarlama konusunda uzmanlaşıyorum. Gerçek zamanlı erişim kontrolü, CRM iş akışları, önbellekleme katmanları ve konteynerize dağıtımlar içeren üretim sistemleri geliştirdim \u2014 şu ana kadar 21.500+ satır üretim C# kodu yazdım.",
    'about.p3':"Tam backend yığını üzerinde çalışıyorum: domain modelleme, veritabanı tasarımı, API mimarisi, SignalR ile gerçek zamanlı iletişim, Redis önbellekleme, Docker Swarm dağıtımları, CI/CD pipeline'ları ve OpenTelemetry ile gözlemlenebilirlik. Hâlâ yeni şeyler öğreniyorum ve bilgimi genişletmeye devam ediyorum \u2014 bu hiç değişmedi.",
    'about.edu':'Eğitim',
    'about.edu.val':'OSTİM Teknik Üniversitesi<br>Yazılım Mühendisliği, 2021-2025<br>GNO 3.00',
    'about.loc':'Konum',
    'about.loc.val':'Ankara, Türkiye',
    'about.status':'Durum',
    'about.status.val':'İşe açık<br>Ofis / Hibrit / Uzaktan',

    // Skills
    'skills.label':'Teknoloji Yığını',
    'skills.title':'Kullandığım<br>Teknolojiler',
    'skills.core':'Çekirdek \u2014 .NET Backend',
    'skills.infra':'Veri, Altyapı & DevOps',
    'skills.other':'Deneyimli Olduğum Diğerleri',

    // Experience
    'career.label':'Kariyer',
    'career.title':'Deneyim',
    'exp.badge':'Güncel',
    'exp.texit.role':'Yazılım Mühendisi Backend Geliştirici',
    'exp.texit.company':'TEXIT \u00b7 Tam zamanlı \u00b7 Hibrit',
    'exp.texit.desc':'texit-access (Dormimy) geliştirdi \u2014 fiziksel erişim kontrol sistemi. 14.7K+ satır C#, çok kiracılı, Docker Swarm, Grafana.',
    'exp.utarit.role':'Yazılım Mühendisi Stajyer',
    'exp.utarit.company':'Utarit Bilişim \u00b7 Ofiste',
    'exp.utarit.desc':'Test Mühendisi + .NET Geliştirici. SoliNova uygulamasını geliştirdi (Flutter). Appium ile otomatik test.',
    'exp.avs.role':'Yazılım Mühendisi Stajyer',
    'exp.avs.company':'AVS Mühendislik \u00b7 Hibrit',
    'exp.avs.desc':'Gömülü sistemler \u2014 enjektör pompası, kan serum ısıtıcısı. Arduino + C++ donanım entegrasyonu.',
    'exp.quavis.role':'Yazılım Mühendisi Stajyer',
    'exp.quavis.company':'QUAVIS Havacılık Çözümleri \u00b7 Hibrit',
    'exp.quavis.desc':'Havacılık için Blazor WebAssembly uygulaması. .NET backend ile interaktif arayüz.',
    'exp.ikartu.role':'Yazılım Mühendisi Stajyer',
    'exp.ikartu.company':'Ikartu Dinamik \u00b7 Uzaktan',
    'exp.ikartu.desc':'C/C++ proje geliştirme.',

    // Contact
    'contact.label':'İletişime Geçin',
    'contact.title':'Birlikte<br>bir şeyler<br>inşa edelim.',
    'contact.email':'E-posta','contact.linkedin':'LinkedIn','contact.github':'GitHub',

    // Footer
    'footer.tagline':'Titizlikle tasarlandı',

    // Slider details
    'slide.1.desc':'Fiziksel erişim kontrol sistemi \u2014 turnikeler, kapılar, bariyerler ile QR/NFC/Kart/Yüz kimlik doğrulama. AccessControl, Tenancy, Licensing, Visitor Management, Alerts, Analytics, Sanctions dahil 19 entity domain. AccessEngine + RuleEvaluator + DirectionResolver pipeline. Çoklu veritabanı (PostgreSQL + SQL Server), çapraz platform (Windows/Linux/RPi).',
    'slide.1.stats':'14.704 satır C# \u00b7 19 domain \u00b7 TEXIT\'te üretimde',
    'slide.2.desc':'Çok kiracılı CRM platformu \u2014 Müşteriler, Satış pipeline\'ları, Faturalandırma, Abonelikler, Pazarlama, Projeler, Uyumluluk, Şablonlar. texit-access ile aynı Clean Architecture. 14 servis modülü, CachedRepository, şifreleme, denetim kaydı.',
    'slide.2.stats':'6.876 satır C# \u00b7 98 servis dosyası \u00b7 14 modül',
    'slide.3.desc':'Dormimy \u2014 texit-access için yurt yönetim uzantısı. VisitorPass, VisitorCategory, VisitorAccessRule sistemi ile VisitorAccessEngine. Yurt giriş/çıkış kontrolü için kategori tabanlı kural eşleme. Aktif geliştirme aşamasında.',
    'slide.3.stats':'Aktif geliştirme \u00b7 texit-access platformunu genişletiyor',
    'slide.4.desc':'4 SignalR hub \u2014 AccessPointHub (kapı kontrolü), TenantAdminHub, PlatformAdminHub, AiHub. Kart yazma, yüz kaydı, terminal oturumları için oturum yöneticileri. Özel DormimyEvictionHandler, DormimyUserIdProvider, Hub filtreleri.',
    'slide.4.stats':'QR / NFC / Kart / Yüz / BLE kimlik doğrulama modları',
    'slide.5.desc':'GHCR\'ye Docker Swarm dağıtımı. GitHub Actions ile CI/CD \u2014 derleme, test, push, rolling deploy. CacheConfigResolver ile CachedRepository dekoratörü \u2014 entity bazlı Redis/InMemory hibrit. UnitOfWork ile yazmalarda otomatik önbellek geçersizleştirme.',
    'slide.5.stats':'ghcr.io/feedemy/texit-access \u00b7 Sıfır kesintili dağıtım',
    'slide.6.desc':'Kiracı kapsamlı anahtarlarla fabrika deseni şifreleme. PII koruması (KVKK/GDPR). Grafana Cloud\'a OpenTelemetry OTLP. Serilog LoggerMessage kaynak oluşturucuları. NSubstitute ile xUnit testleri. Hub\'lar, EF, Redis genelinde tam dağıtık izleme.',
    'slide.6.stats':'Şifreleme + Gözlemlenebilirlik + Test pipeline\'ı',
}
};

let currentLang = localStorage.getItem('lang') || 'en';

function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;

    // Text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (T[lang][key] != null) el.textContent = T[lang][key];
    });

    // HTML content (elements with <br> etc.)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (T[lang][key] != null) el.innerHTML = T[lang][key];
    });

    // Update toggle button
    const btn = document.getElementById('langToggle');
    if (btn) btn.textContent = lang === 'en' ? 'TR' : 'EN';
}

function initI18n() {
    applyLang(currentLang);
}

window._i18n = { init: initI18n, apply: applyLang };
})();
