"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

export default function Signup({ onGetNotified }: { onGetNotified: () => void }) {
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

          <button
            onClick={onGetNotified}
            className="rounded-full bg-accent-red px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-accent-red-hover"
          >
            Get Notified
          </button>

          <p className="mt-4 text-xs text-zinc-500">
            No spam. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
