"use client";

import { motion } from "framer-motion";
import { Lightbulb, Users, Rocket } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Lightbulb,
    title: "Learn",
    description:
      "Deep-dive talks and hands-on workshops from leading practitioners pushing the boundaries of technology.",
  },
  {
    icon: Users,
    title: "Connect",
    description:
      "Network with developers, founders, researchers, and technologists building the future in Philadelphia and beyond.",
  },
  {
    icon: Rocket,
    title: "Build",
    description:
      "Hackathon tracks and collaborative sessions where ideas become prototypes and prototypes become products.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            What is <span className="text-accent-red">Rev</span>Con?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400">
            Revolution Conference is Philadelphia&apos;s premier gathering for
            technologists who believe the next great revolution will be built
            with code. One day. Four tracks. Unlimited potential.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-3">
          {HIGHLIGHTS.map((item, i) => (
            <motion.div
              key={item.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-2xl border border-card-border bg-card-bg p-8 transition-colors hover:border-accent-red/30"
            >
              <item.icon className="mb-4 h-8 w-8 text-accent-red" />
              <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
