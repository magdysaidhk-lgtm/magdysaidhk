/**
 * Magdy Said — Order form receiver
 * بيستقبل الطلب من الموقع → يسجله في Google Sheet → يبعتلك إيميل
 * (اختياري) يبعتلك إشعار واتساب عن طريق CallMeBot
 */

const OWNER_EMAIL = "magdysaidhk@gmail.com";

// إشعار واتساب (اختياري): شوف README إزاي تجيب الـ apikey من CallMeBot
const CALLMEBOT_PHONE = "201112301643";
const CALLMEBOT_APIKEY = ""; // سيبه فاضي لو مش عايز إشعار واتساب

const COLUMNS = [
  "timestamp", "name", "brand", "phone", "email", "industry", "services",
  "motion_type", "motion_duration", "motion_script",
  "edit_count", "edit_duration", "edit_footage",
  "social_count", "social_platforms", "social_identity",
  "ads_platform", "ads_budget", "ads_goal", "ads_first",
  "details", "budget", "deadline", "references",
  "contact_pref", "source", "lang", "page", "status"
];

function doPost(e) {
  const p = e.parameter || {};
  if (p.website) return json({ ok: true }); // spam trap

  const sheet = getSheet();
  const row = COLUMNS.map(function (c) {
    if (c === "timestamp") return new Date();
    if (c === "status") return "جديد";
    return asText(p[c] || "");
  });
  sheet.appendRow(row);

  const subject = "طلب جديد من الموقع — " + (p.name || "") + (p.brand ? " (" + p.brand + ")" : "");
  const body = COLUMNS
    .filter(function (c) { return c !== "timestamp" && c !== "status" && p[c]; })
    .map(function (c) { return c + ": " + p[c]; })
    .join("\n");

  MailApp.sendEmail({
    to: OWNER_EMAIL,
    subject: subject,
    body: body + "\n\nالشيت: " + SpreadsheetApp.getActive().getUrl(),
    replyTo: p.email || OWNER_EMAIL
  });

  if (CALLMEBOT_APIKEY) {
    const msg = "طلب جديد 🎉\n" + (p.name || "") + " — " + (p.phone || "") + "\n" + (p.services || "");
    UrlFetchApp.fetch(
      "https://api.callmebot.com/whatsapp.php?phone=" + CALLMEBOT_PHONE +
      "&text=" + encodeURIComponent(msg) + "&apikey=" + CALLMEBOT_APIKEY,
      { muteHttpExceptions: true }
    );
  }

  return json({ ok: true });
}

// يخلي القيم اللي بتبدأ بـ + أو = تتحفظ كنص (رقم الموبايل يفضل زي ما هو، ومحدش يقدر يحط formula)
function asText(v) {
  return /^[=+\-@]/.test(v) ? "'" + v : v;
}

function getSheet() {
  const ss = SpreadsheetApp.getActive();
  let sheet = ss.getSheetByName("Orders");
  if (!sheet) {
    sheet = ss.insertSheet("Orders");
    sheet.appendRow(COLUMNS);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, COLUMNS.length).setFontWeight("bold").setBackground("#E4DF51");
  }
  return sheet;
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

// شغّل الدالة دي مرة واحدة من المحرر عشان تدي الصلاحيات وتجرب
function testSetup() {
  doPost({ parameter: { name: "Test", phone: "000", services: "motion", details: "تجربة" } });
}
