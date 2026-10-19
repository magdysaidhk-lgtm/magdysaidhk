# موقع مجدي سعيد — دليل التشغيل

موقع بورتفوليو عربي/إنجليزي مع فورم طلبات بيسجل في Google Sheet ويبعت إيميل.
مجاني بالكامل: استضافة Vercel + Google Apps Script.

## الملفات
| الملف | فيه إيه |
|---|---|
| `index.html` | الصفحة كلها (النص العربي) |
| `js/config.js` | **الإعدادات**: الرقم، الإيميل، لينك الحجز، لينك الشيت، السوشيال |
| `js/content.js` | **المحتوى**: الأعمال، الخبرات، الأدوات، آراء العملاء، الأسئلة |
| `js/i18n.js` | النصوص الإنجليزي |
| `css/style.css` | التصميم والألوان (Color System v1.0) |
| `assets/` | الصور |
| `apps-script/Code.gs` | الكود اللي بيستقبل الطلبات في Google Sheet |

---

## 1) رفع الموقع على Vercel (مجاني → magdysaidhk.vercel.app)
1. اعمل حساب على github.com، واعمل Repository جديد اسمه `magdysaidhk`.
2. ارفع كل ملفات الفولدر ده فيه (Add file → Upload files).
3. ادخل vercel.com بحساب GitHub → **Add New → Project** → اختار الـ Repository → **Deploy**.
4. من **Settings → Domains** غيّر الاسم لـ `magdysaidhk.vercel.app`.
5. أي تعديل ترفعه على GitHub بيتنشر تلقائي.

## 2) ربط الفورم بـ Google Sheet + إيميل
1. افتح sheets.new واعمل شيت اسمه "Orders — Website".
2. **Extensions → Apps Script** → امسح الموجود والزق محتوى `apps-script/Code.gs` → Save.
3. من القايمة اختار الدالة `testSetup` → **Run** → وافق على الصلاحيات (Advanced → Go to project).
   هتلاقي صف تجربة في الشيت وإيميل وصلك. امسح صف التجربة.
4. **Deploy → New deployment** → النوع **Web app**:
   - Execute as: **Me**
   - Who has access: **Anyone**
5. انسخ الـ URL اللي بيخلص بـ `/exec` وحطه في `js/config.js`:
   ```js
   sheetEndpoint: "https://script.google.com/macros/s/XXXX/exec",
   ```
> لو عدّلت الكود بعدين: Deploy → Manage deployments → Edit → Version: New version.

لحد ما تعمل الخطوة دي، الفورم بيفتح واتساب للعميل برسالة فيها ملخص طلبه كبديل.

## 3) إشعار واتساب لما يوصل طلب (اختياري، مجاني)
1. سجّل رقم `+34 694 25 79 72` عندك باسم CallMeBot.
2. ابعتله على واتساب: `I allow callmebot to send me messages`
3. هيرد عليك بـ apikey → حطه في `CALLMEBOT_APIKEY` جوه `Code.gs` واعمل Deploy بنسخة جديدة.

## 4) حجز ميتنج Google Meet
1. calendar.google.com → **Create → Appointment schedule**.
2. حدد المدة (30 دقيقة مثلاً) والأيام والساعات، وتأكد إن Google Meet مفعّل.
3. Save → **Share** → انسخ اللينك وحطه في `bookingUrl` جوه `js/config.js`.

## 5) إضافة الأعمال
في `js/content.js` جوه `WORK`:
```js
{ category: "motion", ar: "اسم الشغل", en: "Project name", youtube: "dQw4w9WgXcQ" },
{ category: "social", ar: "بوستات مطعم", en: "Restaurant posts", image: "assets/work/rest.webp", link: "https://behance.net/..." },
```
- الفيديو: ارفعه على YouTube (ممكن **Unlisted**) وحط الـ ID بس.
- الصور: صغّرها لـ WebP بعرض 1200px تقريبًا (squoosh.app) وحطها في `assets/work/`.

## 6) آراء العملاء
لما تجمعهم ضيفهم في `TESTIMONIALS` في `js/content.js`، والقسم هيتملي لوحده.

## 7) الدومين بعدين (Hostinger)
اشتري الدومين → في Vercel: **Settings → Domains → Add** → اكتب الدومين → Vercel هيقولك تضيف سجلات DNS إيه
(A record و CNAME) → ضيفهم من Hostinger → **DNS / Nameservers**. الموقع هيفضل على Vercel مجانًا.
