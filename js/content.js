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
window.WORK = [
  { category: "motion", ar: "فيديوهات موشن جرافيك", en: "Motion Graphics Videos",
    videos: ["p3wM3pk72Lc", "NHrAS-x0Iz8", "E1t4RZC1Ub4", "FyH1JDoziBU"] },
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
    images: ["assets/work/ent-tonsils.webp", "assets/work/ent-cold.webp"] },
  { category: "social", ar: "أكاديمية", en: "Academy",
    images: [1, 2, 3, 4, 5, 6, 7, 8].map((n) => `assets/work/bridges-${n}.webp`) }

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
