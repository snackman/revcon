"use client";

import { useState } from "react";
import Modal from "./modal";

export default function SpeakerModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [form, setForm] = useState({ name: "", email: "", topic: "", bio: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/speaker", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", topic: "", bio: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  function handleClose() {
    setStatus("idle");
    setForm({ name: "", email: "", topic: "", bio: "" });
    onClose();
  }

  const inputClass =
    "w-full rounded-xl border border-card-border bg-card-bg px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-accent-red";

  return (
    <Modal open={open} onClose={handleClose}>
      {status === "success" ? (
        <div className="text-center">
          <h3 className="mb-2 text-2xl font-bold">Application Received!</h3>
          <p className="mb-6 text-zinc-400">
            Thanks for applying to speak at <span className="text-accent-red">Rev</span>
            <span className="text-white">Con</span>. We&apos;ll be in touch.
          </p>
          <button
            onClick={handleClose}
            className="rounded-full bg-accent-red px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-red-hover"
          >
            Done
          </button>
        </div>
      ) : (
        <>
          <h3 className="mb-2 text-2xl font-bold">Apply to Speak</h3>
          <p className="mb-6 text-sm text-zinc-400">
            Share your revolutionary ideas at <span className="text-accent-red">Rev</span>
            <span className="text-white">Con</span>.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Your name"
              required
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              className={inputClass}
            />
            <input
              type="email"
              placeholder="your@email.com"
              required
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className={inputClass}
            />
            <input
              type="text"
              placeholder="Talk topic or title"
              required
              value={form.topic}
              onChange={(e) => update("topic", e.target.value)}
              className={inputClass}
            />
            <textarea
              placeholder="Brief bio and talk description (optional)"
              rows={3}
              value={form.bio}
              onChange={(e) => update("bio", e.target.value)}
              className={inputClass + " rounded-xl resize-none"}
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="rounded-full bg-accent-red px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-red-hover disabled:opacity-50"
            >
              {status === "loading" ? "Submitting..." : "Submit Application"}
            </button>
            {status === "error" && (
              <p className="text-center text-sm text-red-400">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </>
      )}
    </Modal>
  );
}
