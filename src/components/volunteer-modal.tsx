"use client";

import { useState } from "react";
import Modal from "./modal";

export default function VolunteerModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [form, setForm] = useState({ name: "", email: "", note: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/volunteer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", note: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  function handleClose() {
    setStatus("idle");
    setForm({ name: "", email: "", note: "" });
    onClose();
  }

  const inputClass =
    "w-full rounded-xl border border-card-border bg-card-bg px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-accent-red";

  return (
    <Modal open={open} onClose={handleClose}>
      {status === "success" ? (
        <div className="text-center">
          <h3 className="mb-2 text-2xl font-bold">You&apos;re Signed Up!</h3>
          <p className="mb-6 text-zinc-400">
            Thanks for volunteering at{" "}
            <span className="text-accent-red">Rev</span>
            <span className="text-white">Con</span>. We&apos;ll be in touch with details.
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
          <h3 className="mb-2 text-2xl font-bold">Volunteer at RevCon</h3>
          <p className="mb-6 text-sm text-zinc-400">
            Free admission, exclusive swag, and a front-row seat.
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
            <textarea
              placeholder="Anything you'd like us to know (optional)"
              rows={3}
              value={form.note}
              onChange={(e) => update("note", e.target.value)}
              className={inputClass + " resize-none"}
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="rounded-full bg-accent-red px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-red-hover disabled:opacity-50"
            >
              {status === "loading" ? "Submitting..." : "Sign Me Up"}
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
