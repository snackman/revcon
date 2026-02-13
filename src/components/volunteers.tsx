"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

export default function Volunteers({ onApply }: { onApply: () => void }) {
  return (
    <section id="volunteers" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl rounded-2xl border border-accent-red/20 bg-gradient-to-b from-accent-red/5 to-transparent p-8 text-center sm:p-12"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Volunteer
          </h2>
          <p className="mb-8 text-zinc-400">
            Help us build something revolutionary. Volunteers get free admission,
            exclusive swag, and a front-row seat to the action.
          </p>

          <button
            onClick={onApply}
            className="rounded-full border border-accent-red px-8 py-3 text-lg font-semibold text-accent-red transition-colors hover:bg-accent-red hover:text-white"
          >
            Sign Up to Volunteer
          </button>
        </motion.div>
      </div>
    </section>
  );
}
