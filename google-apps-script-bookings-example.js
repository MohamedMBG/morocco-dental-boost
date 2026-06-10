const SPREADSHEET_ID = "19m6jDC9jHFSq6T7VxmBDLGLR3r6VFhrQEGDGmwhX2BM";
const SHEET_NAME = "Reservations";
const HEADER_ROW = [
  "Submitted At (UTC)",
  "Name",
  "Phone",
  "Preferred Day",
  "Service",
  "Site",
  "IP",
];
const WEBHOOK_SECRET = "morocco-dental-bookings-2026-06-03-r7Hk2Qm9Lp4X";

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse({ ok: false, error: "Missing request body." }, 400);
    }

    const body = JSON.parse(e.postData.contents);

    if (WEBHOOK_SECRET && safeString(body.secret) !== WEBHOOK_SECRET) {
      return jsonResponse({ ok: false, error: "Unauthorized." }, 401);
    }
    const values = [
      safeString(body.submittedAtUtc),
      safeString(body.name),
      safeString(body.phone),
      safeString(body.preferredDay),
      safeString(body.service),
      safeString(body.site),
      safeString(body.ip),
    ];

    if (!values[1] || !values[2] || !values[3]) {
      return jsonResponse({ ok: false, error: "Missing required fields." }, 422);
    }

    const sheet = getOrCreateSheet_();
    sheet.appendRow(values);

    return jsonResponse({ ok: true });
  } catch (error) {
    return jsonResponse(
      { ok: false, error: error instanceof Error ? error.message : String(error) },
      500,
    );
  }
}

function getOrCreateSheet_() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet =
    spreadsheet.getSheetByName(SHEET_NAME) ||
    spreadsheet.insertSheet(SHEET_NAME);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADER_ROW);
  }

  return sheet;
}

function safeString(value) {
  return String(value || "").trim();
}

function jsonResponse(payload, statusCode) {
  return ContentService
    .createTextOutput(JSON.stringify({ ...payload, statusCode }))
    .setMimeType(ContentService.MimeType.JSON);
}
