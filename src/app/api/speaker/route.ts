import { NextResponse } from "next/server";
import { appendSpeaker } from "@/lib/sheets";

export async function POST(req: Request) {
  try {
    const { name, email, topic, bio } = await req.json();

    if (!name || !email || !topic) {
      return NextResponse.json({ error: "Name, email, and topic are required" }, { status: 400 });
    }

    if (typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    await appendSpeaker({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      topic: topic.trim(),
      bio: (bio || "").trim(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Speaker application error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
