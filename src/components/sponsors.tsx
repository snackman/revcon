"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

export default function Sponsors({ onApply }: { onApply: () => void }) {
  return (
    <section id="sponsors" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Partners
          </h2>
          <p className="mx-auto max-w-xl text-lg text-zinc-400">
            Partner with <span className="text-accent-red">Rev</span><span className="text-white">Con</span>{" "}
            to get your brand in front of 200+ revolutionary technologists
          </p>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <button
            onClick={onApply}
            className="inline-block rounded-full bg-accent-red px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-red-hover"
          >
            Become a Partner
          </button>
        </motion.div>
      </div>
    </section>
  );
}
