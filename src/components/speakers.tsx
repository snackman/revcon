"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const FIGURES = [
  { name: "Benjamin Franklin", role: "Inventor & Statesman", image: "/images/ben-franklin.jpg" },
  { name: "Betsy Ross", role: "Flag Maker & Revolutionary", image: "/images/betsy-ross.jpg" },
  { name: "Thomas Jefferson", role: "Author & Visionary", image: "/images/thomas-jefferson.jpg" },
  { name: "Thomas Paine", role: "Writer & Revolutionary", image: "/images/thomas-paine.jpg" },
];

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
          {FIGURES.map((figure, i) => (
            <motion.div
              key={figure.name}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center rounded-2xl border border-dashed border-card-border bg-card-bg/50 p-8"
            >
              <div className="relative mb-4 h-24 w-24 overflow-hidden rounded-full border border-card-border">
                <Image
                  src={figure.image}
                  alt={figure.name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mb-1 text-sm font-semibold text-zinc-300">{figure.name}</p>
              <p className="text-xs text-zinc-500">{figure.role}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="mb-4 text-zinc-400">
            Want to speak at <span className="text-accent-red">Rev</span><span className="text-white">Con</span>?
          </p>
          <a
            href="#signup"
            className="inline-block rounded-full border border-accent-red px-6 py-2 text-sm font-semibold text-accent-red transition-colors hover:bg-accent-red hover:text-white"
          >
            Apply to Speak
          </a>
        </motion.div>
      </div>
    </section>
  );
}
