import { NextResponse } from "next/server";
import { appendVolunteer } from "@/lib/sheets";

export async function POST(req: Request) {
  try {
    const { name, email, note } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    await appendVolunteer({ name, email, note: note || "" });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Volunteer signup error:", err);
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }
}
