import { NextResponse } from "next/server";
import { appendNewsletter } from "@/lib/sheets";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    await appendNewsletter(email.trim().toLowerCase());
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Newsletter signup error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
