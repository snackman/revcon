"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

export default function Speakers() {
  return (
    <section id="speakers" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Speakers
          </h2>
          <p className="mx-auto max-w-xl text-lg text-zinc-400">
            World-class speakers announced soon
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center rounded-2xl border border-dashed border-card-border bg-card-bg/50 p-8"
            >
              <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-zinc-800">
                <User className="h-10 w-10 text-zinc-600" />
              </div>
              <div className="mb-1 h-4 w-24 rounded bg-zinc-800" />
              <div className="h-3 w-16 rounded bg-zinc-800/60" />
            </motion.div>
          ))}
        </div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="mb-4 text-zinc-400">
            Want to speak at <span className="text-accent-red">Rev</span><span className="text-white">Con</span>? Applications open soon.
          </p>
          <a
            href="#signup"
            className="inline-block rounded-full border border-accent-red px-6 py-2 text-sm font-semibold text-accent-red transition-colors hover:bg-accent-red hover:text-white"
          >
            Get Notified When Applications Open
          </a>
        </motion.div>
      </div>
    </section>
  );
}
