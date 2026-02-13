"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

export default function Signup() {
  return (
    <section id="signup" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl rounded-2xl border border-accent-red/20 bg-gradient-to-b from-accent-red/5 to-transparent p-8 text-center sm:p-12"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Stay in the Loop
          </h2>
          <p className="mb-8 text-zinc-400">
            Be the first to know when tickets drop, speakers are announced, and
            the schedule goes live.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              placeholder="your@email.com"
              required
              className="flex-1 rounded-full border border-card-border bg-card-bg px-5 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-accent-red"
            />
            <button
              type="submit"
              className="rounded-full bg-accent-red px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-red-hover"
            >
              Notify Me
            </button>
          </form>

          <p className="mt-4 text-xs text-zinc-500">
            No spam. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
