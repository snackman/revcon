"use client";

import { motion } from "framer-motion";
import { Brain, Link, HeartPulse, Bot } from "lucide-react";
import { TOPICS } from "@/lib/constants";

const ICON_MAP = { Brain, Link, HeartPulse, Bot } as const;

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

export default function Topics() {
  return (
    <section id="topics" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Topics
          </h2>
          <p className="mx-auto max-w-xl text-lg text-zinc-400">
            Four tracks at the frontier of technology
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TOPICS.map((topic, i) => {
            const Icon = ICON_MAP[topic.icon];
            return (
              <motion.div
                key={topic.name}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl border border-card-border bg-card-bg p-8 transition-all hover:border-accent-red/40 hover:shadow-[0_0_30px_-10px_rgba(220,38,38,0.3)]"
              >
                <Icon className="mb-4 h-10 w-10 text-accent-blue transition-colors group-hover:text-accent-red" />
                <h3 className="mb-2 text-lg font-bold">{topic.name}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {topic.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
