"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Sponsors
          </h2>
          <p className="mx-auto max-w-xl text-lg text-zinc-400">
            Partner with <span className="text-accent-red">Rev</span><span className="text-white">Con</span> and put your brand in front of
            Philadelphia&apos;s tech community
          </p>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="flex h-24 items-center justify-center rounded-xl border border-dashed border-card-border bg-card-bg/30 text-sm text-zinc-600"
            >
              Your Logo Here
            </div>
          ))}
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <a
            href="mailto:sponsors@revcon.dev"
            className="inline-block rounded-full bg-accent-red px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-red-hover"
          >
            Become a Sponsor
          </a>
        </motion.div>
      </div>
    </section>
  );
}
