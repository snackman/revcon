import { google } from "googleapis";

function getAuth() {
  const key = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
  if (!key) throw new Error("GOOGLE_SERVICE_ACCOUNT_KEY not set");

  const credentials = JSON.parse(key);
  return new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

const SPREADSHEET_ID = process.env.REVCON_SHEET_ID!;

export async function appendNewsletter(email: string) {
  const auth = getAuth();
  const sheets = google.sheets({ version: "v4", auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: "Newsletter!A:B",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [[email, new Date().toISOString()]],
    },
  });
}

export async function appendSpeaker(data: {
  name: string;
  email: string;
  topic: string;
  bio: string;
}) {
  const auth = getAuth();
  const sheets = google.sheets({ version: "v4", auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: "'Speaker Applications'!A:E",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [[data.name, data.email, data.topic, data.bio, new Date().toISOString()]],
    },
  });
}

export async function appendVolunteer(data: {
  name: string;
  email: string;
  note: string;
}) {
  const auth = getAuth();
  const sheets = google.sheets({ version: "v4", auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: "Volunteers!A:D",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [[data.name, data.email, data.note, new Date().toISOString()]],
    },
  });
}

export async function appendSponsor(data: {
  company: string;
  name: string;
  email: string;
  message: string;
}) {
  const auth = getAuth();
  const sheets = google.sheets({ version: "v4", auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: "Sponsors!A:E",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [[data.company, data.name, data.email, data.message, new Date().toISOString()]],
    },
  });
}
