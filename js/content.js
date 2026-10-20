/* ============================================================
   المحتوى — الأعمال، الخبرات، الآراء، الأسئلة
   كل عنصر فيه نسخة عربي (ar) وإنجليزي (en)
   ============================================================ */

/* الأعمال
   category: identity | software | motion | edit | social | ads
   youtube:  ID الفيديو (الجزء اللي بعد v= أو youtu.be/ في اللينك)
   videos:   أكتر من فيديو عرضي ["id1", "id2"]
   shorts:   فيديوهات طولية (YouTube Shorts) ["id1", "id2"]
   vimeo:    رقم الفيديو على Vimeo
   image:    مسار صورة جوه فولدر assets/work/ (يفضل webp)
   images:   أكتر من صورة لنفس المشروع ["assets/work/a.webp", "assets/work/b.webp"] (بتتفتح كمعرض)
   link:     لينك خارجي (Behance مثلاً) لو مش فيديو
   لو العنصر مفيهوش youtube/vimeo/image هيظهر كـ "قريباً" */
// لوحات عرض الهوية: اللوجو، الموكب، اللوجو على لون البراند، الألوان
function brandBoards(key, mockAr, mockEn) {
  const f = (n, ar, en) => ({ src: `assets/work/brand-${key}-${n}.webp`, ar, en });
  return [
    f(1, "اللوجو الأساسي", "Primary logo"),
    f(4, mockAr, mockEn),
    f(2, "اللوجو على لون البراند", "Logo on brand color"),
    f(3, "ألوان البراند", "Brand colors")
  ];
}

window.WORK = [
  { category: "identity", caseStudy: true, ar: "أكاديمية النور", en: "Al Noor Academy",
    about: { ar: "صممنا لوجو وهوية لأكاديمية تعليمية بالأزرق الداكن والذهبي، الكتاب المفتوح والشمس والطالب بيعبروا عن العلم والنور.", en: "We designed the logo and identity for an educational academy in deep blue and gold: the open book, the sun and the student stand for knowledge and light." },
    colors: ["#1A4056", "#DCA227"], images: brandBoards("alnoor", "تطبيق الهوية على الموقع والتطبيق", "Identity applied to website and app") },
  { category: "identity", caseStudy: true, ar: "أكاديمية Bridges", en: "Bridges Academy",
    about: { ar: "صممنا لوجو وهوية لأكاديمية تعليم القرآن بالأخضر والبرتقالي، وطبقناها على محتوى السوشيال ميديا بتاعهم.", en: "We designed the logo and identity for a Quran academy in green and orange, then applied it across their social media content." },
    colors: ["#004F2B", "#FE5119"], images: brandBoards("bridges", "تطبيق الهوية على الموقع والتطبيق", "Identity applied to website and app") },
  { category: "identity", caseStudy: true, ar: "SA7AB", en: "SA7AB",
    about: { ar: "لوجو بسيط وحديث بالكحلي واللبني، يتقري بسهولة على أي خلفية.", en: "A simple, modern logo in navy and light blue that reads clearly on any background." },
    colors: ["#161B45", "#D4F5FF"], images: brandBoards("sa7ab", "تطبيق الهوية على الموقع والتطبيق", "Identity applied to website and app") },
  { category: "identity", caseStudy: true, ar: "المتحدة ستيل", en: "United Steel",
    about: { ar: "لوجو لشركة حديد تسليح وأسمنت ومواد بناء، بطابع صناعي قوي يناسب مواقع العمل.", en: "A logo for a rebar, cement and building materials company, with a strong industrial look that suits work sites." },
    colors: ["#000000", "#065F73", "#303030"], images: brandBoards("unitedsteel", "اللوجو في موقع العمل", "Logo on site") },
  { category: "motion", ar: "فيديوهات موشن جرافيك", en: "Motion Graphics Videos",
    videos: ["NHrAS-x0Iz8", "E1t4RZC1Ub4", "FyH1JDoziBU"] },
  { category: "edit", ar: "مونتاج فيديوهات يوتيوب", en: "YouTube Video Editing",
    videos: ["JKfEMRACG0c", "S5Bfa4_dPv0"] },
  { category: "edit", ar: "ريلز ومونتاج", en: "Reels & Editing",
    shorts: ["iCIRqQOEMnU", "fOY4nkztST4", "GEpZlji3_xU"] },
  { category: "social", ar: "إدارة سوشيال ميديا", en: "Social Media Management",
    images: [
      "assets/work/tawasul-2.webp",
      ...[1, 2, 3, 4].map((n) => `assets/work/mazad-${n}.webp`),
      ...[1, 2, 3, 4].map((n) => `assets/work/lazem-${n}.webp`),
      "assets/work/tawasul-1.webp"
    ] },
  { category: "social", ar: "بوستات طبية", en: "Medical Posts", client: "د/ محمود سيد عبد العال",
    images: ["assets/work/ent-tonsils.webp", "assets/work/ent-cold.webp",
      ...[1, 2, 3, 4, 5].map((n) => `assets/work/peds-${n}.webp`), "assets/work/alfa-1.webp"] },
  { category: "social", ar: "أكاديمية", en: "Academy",
    images: [...[1, 2, 3, 4, 5, 6, 7, 8].map((n) => `assets/work/bridges-${n}.webp`),
      "assets/work/zahra-1.webp", "assets/work/zahra-2.webp"] }

];

/* الترتيب في "الكل" (والفلاتر بتمشي على نفس الترتيب): ID الفيديو أو مسار الصورة، كل 4 = صف.
   أي شغل مش مكتوب هنا بيتحط في الآخر */
window.WORK_ORDER = [
  // صف 1: مونتاج وريلز
  "GEpZlji3_xU",
  "iCIRqQOEMnU",
  "fOY4nkztST4",
  "JKfEMRACG0c",

  // صف 2: سوشيال ميديا
  "assets/work/tawasul-2.webp",
  "assets/work/lazem-3.webp",
  "assets/work/lazem-2.webp",
  "assets/work/lazem-4.webp",

  // صف 3: موشن جرافيك (الرابع مؤقتًا فيديو يوتيوب لحد ما يتضاف فيديو موشن)
  "E1t4RZC1Ub4",
  "NHrAS-x0Iz8",
  "FyH1JDoziBU",
  "S5Bfa4_dPv0",

  // صف 4: هوية بصرية
  "assets/work/brand-alnoor-1.webp",
  "assets/work/brand-bridges-1.webp",
  "assets/work/brand-sa7ab-1.webp",
  "assets/work/brand-unitedsteel-1.webp",

  // بعد كده التصميمات متجمعة حسب ألوانها: أزرق ووردي
  "assets/work/peds-1.webp",
  "assets/work/peds-2.webp",
  "assets/work/peds-4.webp",
  "assets/work/peds-3.webp",

  // أزرق
  "assets/work/peds-5.webp",
  "assets/work/ent-cold.webp",
  "assets/work/ent-tonsils.webp",
  "assets/work/mazad-1.webp",

  // أزرق بنفسجي
  "assets/work/alfa-1.webp",
  "assets/work/tawasul-1.webp",
  "assets/work/zahra-2.webp",
  "assets/work/bridges-8.webp",

  // أخضر وتركواز
  "assets/work/bridges-2.webp",
  "assets/work/bridges-1.webp",
  "assets/work/zahra-1.webp",
  "assets/work/lazem-1.webp",

  // فاتح
  "assets/work/bridges-3.webp",
  "assets/work/bridges-4.webp",
  "assets/work/bridges-6.webp",
  "assets/work/bridges-7.webp",

  // دافي
  "assets/work/mazad-2.webp",
  "assets/work/mazad-3.webp",
  "assets/work/mazad-4.webp",
  "assets/work/bridges-5.webp"
];

/* الخبرات — عدّل السنين والأماكن */
window.EXPERIENCE = [
  { years: "20XX — الآن / Now", ar: { role: "جرافيك وموشن ديزاينر فريلانس", place: "عملاء في مصر والخليج" }, en: { role: "Freelance Graphic & Motion Designer", place: "Clients in Egypt & the Gulf" } },
  { years: "20XX — 20XX", ar: { role: "جرافيك ديزاينر", place: "اسم الشركة / الوكالة" }, en: { role: "Graphic Designer", place: "Company / agency name" } },
  { years: "20XX — 20XX", ar: { role: "مونتير ومصمم سوشيال ميديا", place: "اسم الشركة" }, en: { role: "Video Editor & Social Designer", place: "Company name" } }
];

window.TOOLS = ["Photoshop", "Illustrator", "After Effects", "Premiere Pro", "Figma", "Meta Ads Manager"];

/* آراء العملاء — سيبها فاضية لحد ما تجمعهم
   مثال:
   { name: "أحمد علي", brand: "براند X", ar: "شغل ممتاز…", en: "Great work…" } */
window.TESTIMONIALS = [];

window.FAQ = [
  { ar: ["مين اللي بيشتغل على مشروعي؟", "أنا اللي بتابع معاك من أول يوم لحد التسليم، وبيشتغل معايا تيم متخصص في التصميم والتطوير والموشن والمحتوى. إنت بتتكلم معايا أنا بس."],
    en: ["Who works on my project?", "I handle your project from day one to delivery, with a team specialised in design, development, motion and content. You only ever deal with me."] },
  { ar: ["بتعملوا مواقع وتطبيقات كمان؟", "أيوه، بنعمل ويب سايت ومتاجر أونلاين وتطبيقات موبايل وسيستمات إدارة، وبتطلع بنفس هوية البراند."],
    en: ["Do you build websites and apps too?", "Yes. We build websites, online stores, mobile apps and management systems, all in your brand identity."] },
  { ar: ["التسليم بياخد قد إيه؟", "حسب حجم الشغل. البوستات عادة من 2 لـ 4 أيام، والفيديوهات من 4 لـ 10 أيام. بحدد معاك المعاد بالظبط قبل ما نبدأ."],
    en: ["How long does delivery take?", "It depends on scope. Posts usually take 2–4 days and videos 4–10 days. We agree on the exact date before starting."] },
  { ar: ["كام مرة أقدر أعدّل؟", "كل مشروع فيه جولتين تعديل مجانًا، ولو محتاج أكتر بنتفق عليها."],
    en: ["How many revisions do I get?", "Every project includes two free revision rounds; extra rounds can be arranged."] },
  { ar: ["الدفع بيكون إزاي؟", "50% مقدم و50% عند التسليم. متاح InstaPay، فودافون كاش، تحويل بنكي، أو PayPal لبره مصر."],
    en: ["How does payment work?", "50% upfront and 50% on delivery. InstaPay, Vodafone Cash, bank transfer, or PayPal for clients outside Egypt."] },
  { ar: ["هستلم الملفات المفتوحة؟", "بتستلم الملفات النهائية بكل المقاسات. الملفات المفتوحة (Source) متاحة حسب الاتفاق."],
    en: ["Do I get the source files?", "You get final files in every size. Source files are available by agreement."] },
  { ar: ["بتشتغل مع عملاء بره مصر؟", "أكيد، بشتغل أونلاين مع عملاء من مصر والخليج وأي مكان."],
    en: ["Do you work with clients outside Egypt?", "Yes, I work online with clients in Egypt, the Gulf and anywhere else."] },
  { ar: ["معنديش هوية بصرية، أعمل إيه؟", "مفيش مشكلة، نقدر نبدأ بهوية بسيطة (لوجو وألوان وخطوط) قبل المحتوى."],
    en: ["I don't have a visual identity yet. What now?", "No problem. We can start with a simple identity (logo, colors, fonts) before the content."] }
];

/* تفاصيل الخدمات: بتظهر لما العميل يدوس على كارت الخدمة
   intro: مقدمة، items: الخدمة بتشمل إيه، deliver: هتستلم إيه، time: المدة التقريبية
   الأعمال اللي بتظهر تحت كل خدمة بتتجاب لوحدها من WORK حسب الـ category */
window.SERVICES = {
  identity: {
    ar: {
      intro: "نبني لعلامتك التجارية شخصية بصرية واضحة ومتسقة، تبدأ من الاسم واللوجو وتمتد لكل مكان يشوف فيه العميل البراند بتاعك.",
      items: ["اختيار اسم البراند لو لسه محتاج اسم", "تصميم اللوجو بكل نسخه: الأساسي، والأيقونة، والأبيض والأسود", "بالتة الألوان والخطوط الرسمية", "دليل استخدام الهوية (Brand Guidelines)", "تطبيقات الهوية: كروت، أوراق رسمية، يافطات، باكدجنج، وقوالب سوشيال ميديا"],
      deliver: "ملفات مفتوحة وجاهزة للطباعة والديجيتال: AI، PDF، PNG، SVG.",
      time: "من أسبوعين لـ 4 أسابيع حسب حجم الهوية."
    },
    en: {
      intro: "We give your brand a clear, consistent visual personality, starting with the name and logo and extending to every place your customers see you.",
      items: ["Brand naming, if you still need a name", "Logo design in every version: primary, icon, black and white", "Official color palette and typography", "Brand guidelines", "Identity applications: business cards, stationery, signage, packaging and social media templates"],
      deliver: "Source files ready for print and digital: AI, PDF, PNG, SVG.",
      time: "Two to four weeks depending on scope."
    }
  },
  software: {
    ar: {
      intro: "نصمم ونبني الموقع أو التطبيق أو السيستم اللي محتاجه، بنفس هوية البراند، وبشكل سريع وسهل الاستخدام على الموبايل والكمبيوتر.",
      items: ["مواقع تعريفية للشركات والأشخاص", "متاجر إلكترونية بالدفع والشحن", "تطبيقات موبايل لأندرويد و iOS", "أنظمة إدارة داخلية ولوحات تحكم", "ربط الموقع بنماذج الطلب والحجز والدفع وGoogle Sheets"],
      deliver: "موقع أو تطبيق شغال على دومين باسمك، مع تدريب بسيط على إدارته.",
      time: "من أسبوعين لموقع تعريفي، وأكتر للمتاجر والتطبيقات حسب المطلوب."
    },
    en: {
      intro: "We design and build the website, app or system you need, in your brand identity, fast and easy to use on mobile and desktop.",
      items: ["Company and personal websites", "Online stores with payments and shipping", "Mobile apps for Android and iOS", "Internal management systems and dashboards", "Integrations with order, booking and payment forms and Google Sheets"],
      deliver: "A live website or app on your own domain, with a short handover on managing it.",
      time: "About two weeks for a company website, longer for stores and apps depending on scope."
    }
  },
  motion: {
    ar: {
      intro: "نحوّل فكرتك أو منتجك لفيديو متحرك بسيط وجذاب، يشرح ويقنع في ثواني.",
      items: ["فيديوهات إكسبلينر لشرح المنتج أو الخدمة", "لوجو أنيميشن", "ريلز وإعلانات متحركة للسوشيال ميديا", "إنفوجرافيك متحرك", "كتابة السكريبت والفويس أوفر لو محتاج"],
      deliver: "فيديو نهائي بالمقاسات اللي محتاجها: عرضي للموقع ويوتيوب، وطولي للريلز والستوريز.",
      time: "من أسبوع لـ 3 أسابيع حسب مدة الفيديو."
    },
    en: {
      intro: "We turn your idea or product into a simple, engaging animated video that explains and convinces in seconds.",
      items: ["Explainer videos for your product or service", "Logo animation", "Animated reels and ads for social media", "Motion infographics", "Script writing and voice-over if needed"],
      deliver: "Final video in every size you need: landscape for web and YouTube, vertical for reels and stories.",
      time: "One to three weeks depending on length."
    }
  },
  edit: {
    ar: {
      intro: "مونتاج احترافي بإيقاع يشد المشاهد من أول ثانية لآخر ثانية، لصناع المحتوى والبراندات.",
      items: ["مونتاج فيديوهات يوتيوب الطويلة", "ريلز وشورتس وتيك توك", "إعلانات الفيديو", "تلوين الصورة وتنضيف الصوت", "ترجمة وإضافة سب تايتل"],
      deliver: "فيديو جاهز للنشر بالجودة والمقاس المناسب لكل منصة.",
      time: "من يوم لـ 5 أيام حسب طول الفيديو."
    },
    en: {
      intro: "Professional editing with a rhythm that holds viewers from the first second to the last, for creators and brands.",
      items: ["Long-form YouTube video editing", "Reels, Shorts and TikToks", "Video ads", "Color grading and audio cleanup", "Translation and subtitles"],
      deliver: "A publish-ready video in the right quality and format for each platform.",
      time: "One to five days depending on length."
    }
  },
  social: {
    ar: {
      intro: "نخطط وننفذ محتوى السوشيال ميديا بهوية ثابتة، وندير صفحاتك عشان تفضل حاضر قدام جمهورك كل يوم.",
      items: ["خطة محتوى شهرية", "تصميم البوستات والكاروسيل والستوريز", "كتابة المحتوى", "إدارة الصفحات والنشر والرد على الرسايل", "تقرير شهري بالأداء"],
      deliver: "تصميمات جاهزة للنشر كل شهر، أو إدارة كاملة للصفحات.",
      time: "اشتراك شهري، والتصميمات بتتسلم حسب جدول النشر."
    },
    en: {
      intro: "We plan and produce social media content with a consistent identity, and manage your pages so you stay present for your audience every day.",
      items: ["Monthly content plan", "Post, carousel and story design", "Copywriting", "Page management, publishing and replying to messages", "Monthly performance report"],
      deliver: "Ready-to-publish designs every month, or full page management.",
      time: "Monthly plan, with designs delivered on the publishing schedule."
    }
  },
  ads: {
    ar: {
      intro: "إدارة الإعلانات الممولة (Media Buying) بهدف واضح: مبيعات أو رسايل أو انتشار، بميزانية محسوبة ونتايج بتتقاس.",
      items: ["تحديد الجمهور والهدف من الحملة", "تصميم كرييتيف الإعلانات (صور وفيديو)", "إعداد وإدارة الحملات على Meta و TikTok و Google", "متابعة يومية واختبار وتحسين النتائج", "تقارير بالأرقام: الوصول، والرسايل، والمبيعات، وتكلفة النتيجة"],
      deliver: "حملات شغالة ومتابعة، وتقرير واضح بالنتايج.",
      time: "أول حملة بتبدأ خلال أيام من الاتفاق، والإدارة بتبقى شهرية."
    },
    en: {
      intro: "Paid ads management (media buying) with a clear goal, whether sales, messages or reach, on a measured budget with measurable results.",
      items: ["Defining the audience and campaign goal", "Ad creatives (images and video)", "Setting up and managing campaigns on Meta, TikTok and Google", "Daily monitoring, testing and optimization", "Reports with the numbers: reach, messages, sales and cost per result"],
      deliver: "Live, monitored campaigns and a clear results report.",
      time: "The first campaign starts within days, with monthly management after that."
    }
  }
};
