import { NextResponse } from "next/server";
import { appendSponsor } from "@/lib/sheets";

export async function POST(req: Request) {
  try {
    const { company, name, email, message } = await req.json();

    if (!company || !name || !email) {
      return NextResponse.json({ error: "Company, name, and email are required" }, { status: 400 });
    }

    await appendSponsor({ company, name, email, message: message || "" });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Sponsor submission error:", err);
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }
}
