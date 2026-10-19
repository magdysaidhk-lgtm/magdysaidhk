(function () {
  const C = window.SITE_CONFIG;
  const EN = window.I18N_EN;
  const AR_JS = window.I18N_AR_JS;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  let lang = "ar";
  const AR = {}; // النصوص العربي الأصلية من الـ HTML

  const t = (key) => (lang === "en" ? EN[key] : AR[key] || AR_JS[key]) || key;

  /* ---------- اللغة ---------- */
  function captureArabic() {
    $$("[data-i18n]").forEach((el) => { AR[el.dataset.i18n] ??= el.textContent; });
    $$("[data-i18n-html]").forEach((el) => { AR[el.dataset.i18nHtml] ??= el.innerHTML; });
    $$("[data-i18n-ph]").forEach((el) => { AR[el.dataset.i18nPh] ??= el.placeholder; });
  }

  function setLang(next) {
    lang = next;
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === "ar" ? "rtl" : "ltr";
    $$("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
    $$("[data-i18n-html]").forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
    $$("[data-i18n-ph]").forEach((el) => { el.placeholder = t(el.dataset.i18nPh); });
    $("#langToggle").textContent = lang === "ar" ? "EN" : "ع";
    try { localStorage.setItem("lang", lang); } catch (e) {}
    renderContent();
    updateLinks();
  }

  /* ---------- اللينكات ---------- */
  const waUrl = (text) => `https://wa.me/${C.phone}?text=${encodeURIComponent(text)}`;

  function updateLinks() {
    const hello = t("wa.hello");
    $("#waFloat").href = waUrl(hello);
    $("#waLink").href = waUrl(hello);
    $("#tgLink").href = `https://t.me/+${C.phone}`;
    $("#mailLink").href = `mailto:${C.email}`;
    const meet = C.bookingUrl || waUrl(hello);
    $("#bookMeet").href = meet;
    $("#okMeet").href = meet;
  }

  /* ---------- المحتوى ---------- */
  const CAT_LABEL = { identity: "svc.identity.t", software: "svc.software.t", motion: "svc.motion.t", edit: "svc.edit.t", social: "svc.social.t", ads: "svc.ads.t" };

  function renderContent() {
    // الأعمال
    $("#workGrid").innerHTML = window.WORK.map((w, i) => {
      const thumb = w.image
        ? `<img src="${w.image}" alt="" loading="lazy">`
        : w.youtube
          ? `<img src="https://i.ytimg.com/vi/${w.youtube}/hqdefault.jpg" alt="" loading="lazy">`
          : `<div class="card__ph card__ph--${w.category}"><span>${lang === "ar" ? "قريباً" : "Coming soon"}</span></div>`;
      const playable = w.youtube || w.vimeo;
      return `
        <article class="card" data-cat="${w.category}" data-i="${i}" ${playable || w.link || w.image ? 'tabindex="0" role="button"' : ""}>
          <div class="card__media">${thumb}${playable ? '<span class="card__play" aria-hidden="true">▶</span>' : ""}</div>
          <div class="card__meta">
            <h3>${w[lang]}</h3>
            <span class="tag">${t(CAT_LABEL[w.category])}</span>
          </div>
        </article>`;
    }).join("");
    applyFilter();

    // الخبرات
    $("#tools").innerHTML = window.TOOLS.map((x) => `<li>${x}</li>`).join("");
    $("#timeline").innerHTML = window.EXPERIENCE.map((e) => `
      <li class="reveal is-in"><span class="timeline__years" dir="ltr">${e.years}</span>
      <h3>${e[lang].role}</h3><p>${e[lang].place}</p></li>`).join("");

    // الآراء
    const list = window.TESTIMONIALS;
    $("#testimonialsGrid").innerHTML = list.length
      ? list.map((q) => `<figure class="quote"><blockquote>“${q[lang]}”</blockquote>
          <figcaption><strong>${q.name}</strong><span>${q.brand || ""}</span></figcaption></figure>`).join("")
      : `<div class="quote quote--empty"><strong>${t("test.soon")}</strong><p>${t("test.soon.d")}</p></div>`;

    // الأسئلة
    $("#faqList").innerHTML = window.FAQ.map((f) => `
      <details><summary>${f[lang][0]}</summary><p>${f[lang][1]}</p></details>`).join("");
  }

  /* ---------- فلتر الأعمال ---------- */
  let filter = "all";
  function applyFilter() {
    $$("#workGrid .card").forEach((c) => { c.hidden = filter !== "all" && c.dataset.cat !== filter; });
  }
  $("#filters").addEventListener("click", (e) => {
    const b = e.target.closest(".chip");
    if (!b) return;
    filter = b.dataset.filter;
    $$("#filters .chip").forEach((x) => x.classList.toggle("is-active", x === b));
    applyFilter();
  });

  /* ---------- مودال الفيديو ---------- */
  const modal = $("#modal");
  function openWork(i) {
    const w = window.WORK[i];
    if (w.link && !w.youtube && !w.vimeo) { window.open(w.link, "_blank", "noopener"); return; }
    if (w.image && !w.youtube && !w.vimeo) {
      $("#modalBody").innerHTML = `<img src="${w.image}" alt="${w[lang]}">`;
      modal.classList.add("modal--image");
      modal.hidden = false;
      document.body.style.overflow = "hidden";
      return;
    }
    const src = w.youtube
      ? `https://www.youtube-nocookie.com/embed/${w.youtube}?autoplay=1&rel=0`
      : w.vimeo ? `https://player.vimeo.com/video/${w.vimeo}?autoplay=1` : null;
    if (!src) return;
    $("#modalBody").innerHTML = `<iframe src="${src}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    modal.hidden = true;
    modal.classList.remove("modal--image");
    $("#modalBody").innerHTML = "";
    document.body.style.overflow = "";
  }
  $("#workGrid").addEventListener("click", (e) => {
    const c = e.target.closest(".card[role=button]");
    if (c) openWork(+c.dataset.i);
  });
  $("#workGrid").addEventListener("keydown", (e) => {
    const c = e.target.closest(".card[role=button]");
    if (c && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); openWork(+c.dataset.i); }
  });
  $("#modalClose").addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal.hidden) closeModal(); });

  /* ---------- المنيو ---------- */
  const menuBtn = $("#menuToggle");
  menuBtn.addEventListener("click", () => {
    const open = document.body.classList.toggle("menu-open");
    menuBtn.setAttribute("aria-expanded", open);
  });
  $$("#nav a").forEach((a) => a.addEventListener("click", () => {
    document.body.classList.remove("menu-open");
    menuBtn.setAttribute("aria-expanded", "false");
  }));

  window.addEventListener("scroll", () => {
    $(".header").classList.toggle("is-scrolled", scrollY > 10);
  }, { passive: true });

  /* ---------- أنيميشن الظهور ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  $$(".reveal").forEach((el) => io.observe(el));

  /* ---------- الفورم ---------- */
  const form = $("#orderForm");
  const checks = $$('input[name="services"]', form);

  function syncConditional() {
    const picked = checks.filter((c) => c.checked).map((c) => c.value);
    const all = picked.includes("all");
    $$(".cond", form).forEach((box) => {
      box.classList.toggle("is-open", all || picked.includes(box.dataset.for));
    });
    if (picked.length) $("#servicesError").hidden = true;
  }
  checks.forEach((c) => c.addEventListener("change", syncConditional));

  function collect() {
    const fd = new FormData(form);
    const data = {};
    for (const [k, v] of fd.entries()) {
      if (k === "website") continue;
      data[k] = data[k] ? `${data[k]}, ${v}` : v;
    }
    data.lang = lang;
    data.page = location.href;
    return data;
  }

  // الشيت بيستقبل أسماء عربي بدل الأكواد
  const SHEET_LABELS = {
    services: { identity: "هوية بصرية", software: "موقع / تطبيق / سيستم", motion: "موشن جرافيك", edit: "مونتاج", social: "بوستات سوشيال ميديا", ads: "إعلانات ممولة", all: "كل ده مع بعض" },
    contact_pref: { whatsapp: "واتساب", telegram: "تليجرام", email: "إيميل", meet: "ميتنج Google Meet" }
  };
  function forSheet(d) {
    const out = { ...d };
    // تفاصيل الهوية والسوفتوير بتتضاف لخانة التفاصيل (الشيت مفيهوش أعمدة ليهم)
    const extra = [];
    const ITEMS = { logo: "لوجو", full: "هوية بصرية كاملة", guide: "دليل الهوية", print: "مطبوعات وباكدجنج",
      website: "ويب سايت", store: "متجر أونلاين", app: "تطبيق موبايل", system: "سيستم إدارة / لوحة تحكم" };
    const names = (v) => (v || "").split(", ").filter(Boolean).map((x) => ITEMS[x] || x).join("، ");
    if (out.identity_name || out.identity_items) extra.push(`هوية: ${[out.identity_name, names(out.identity_items)].filter(Boolean).join(" | ")}`);
    if (out.software_type || out.software_design) extra.push(`سوفتوير: ${[names(out.software_type), out.software_design && "عنده تصميم جاهز"].filter(Boolean).join(" | ")}`);
    if (extra.length) out.details = `${out.details}\n\n${extra.join("\n")}`;
    ["identity_name", "identity_items", "software_type", "software_design"].forEach((k) => delete out[k]);

    for (const k in SHEET_LABELS) {
      if (out[k]) out[k] = out[k].split(", ").map((v) => SHEET_LABELS[k][v] || v).join("، ");
    }
    ["motion_script", "edit_footage", "social_identity", "ads_first"].forEach((k) => { if (out[k] === "yes") out[k] = "نعم"; });
    return out;
  }

  function summary(d) {
    const svcNames = (d.services || "").split(", ").map((s) => {
      if (s === "all") return t("form.svc.all");
      return t({ identity: "form.svc.identity", software: "form.svc.software", motion: "svc.motion.t", edit: "svc.edit.t", social: "form.svc.social", ads: "form.svc.ads" }[s]);
    }).join(" + ");
    return [
      t("wa.order"),
      `• ${t("form.name")}: ${d.name}`,
      d.brand && `• ${t("form.brand")}: ${d.brand}`,
      `• ${t("form.s2").replace(/^\d\.\s*/, "").replace(/\s*\(.*\)/, "")}: ${svcNames}`,
      d.deadline && `• ${t("form.deadline")} ${d.deadline}`,
      `• ${t("form.details")}: ${d.details}`
    ].filter(Boolean).join("\n");
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (form.website.value) return; // spam

    const noService = !checks.some((c) => c.checked);
    $("#servicesError").hidden = !noService;
    if (!form.checkValidity() || noService) {
      form.classList.add("was-validated");
      const firstBad = form.querySelector(":invalid") || $("#serviceChecks");
      firstBad.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    const btn = $("#submitBtn");
    const label = btn.querySelector("span");
    btn.disabled = true;
    label.textContent = t("form.sending");

    const data = collect();
    try {
      if (C.sheetEndpoint) {
        await fetch(C.sheetEndpoint, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(forSheet(data)).toString()
        });
      }
      $("#okWa").href = waUrl(summary(data));
      form.hidden = true;
      $("#success").hidden = false;
      $("#success").scrollIntoView({ behavior: "smooth", block: "center" });
      // لو مفيش Google Sheet لسه، افتح واتساب بالملخص
      if (!C.sheetEndpoint) window.open(waUrl(summary(data)), "_blank", "noopener");
    } catch (err) {
      alert(t("form.err.send"));
    } finally {
      btn.disabled = false;
      label.textContent = t("form.submit");
    }
  });

  /* ---------- فوتر ---------- */
  $("#socials").innerHTML = C.socials.map((s) =>
    `<li><a href="${s.url}" target="_blank" rel="noopener">${s.name}</a></li>`).join("");
  $("#year").textContent = new Date().getFullYear();

  /* ---------- البداية ---------- */
  captureArabic();
  let saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  const urlLang = new URLSearchParams(location.search).get("lang");
  $("#langToggle").addEventListener("click", () => setLang(lang === "ar" ? "en" : "ar"));
  setLang(urlLang || saved || "ar");
})();
