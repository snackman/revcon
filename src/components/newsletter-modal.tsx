"use client";

import { useState } from "react";
import Modal from "./modal";

export default function NewsletterModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  function handleClose() {
    setStatus("idle");
    setEmail("");
    onClose();
  }

  return (
    <Modal open={open} onClose={handleClose}>
      {status === "success" ? (
        <div className="text-center">
          <h3 className="mb-2 text-2xl font-bold">You&apos;re In!</h3>
          <p className="mb-6 text-zinc-400">
            We&apos;ll notify you when tickets drop and speakers are announced.
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
          <h3 className="mb-2 text-2xl font-bold">Get Notified</h3>
          <p className="mb-6 text-sm text-zinc-400">
            Be the first to know when tickets drop, speakers are announced, and
            the schedule goes live.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-full border border-card-border bg-card-bg px-5 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-accent-red"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="rounded-full bg-accent-red px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-red-hover disabled:opacity-50"
            >
              {status === "loading" ? "Submitting..." : "Notify Me"}
            </button>
            {status === "error" && (
              <p className="text-center text-sm text-red-400">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
          <p className="mt-4 text-center text-xs text-zinc-500">
            No spam. Unsubscribe anytime.
          </p>
        </>
      )}
    </Modal>
  );
}
