"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

export default function Venue() {
  return (
    <section id="venue" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            The Venue
          </h2>
          <div className="mb-8 flex items-center justify-center gap-2 text-accent-red">
            <MapPin className="h-5 w-5" />
            <span className="text-lg font-semibold">Philadelphia, PA</span>
          </div>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-card-border"
        >
          <div className="relative h-64 sm:h-80">
            <Image
              src="/images/independence-hall.jpg"
              alt="Independence Hall, Philadelphia"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card-bg to-transparent" />
          </div>
          <div className="bg-card-bg p-8 text-center sm:p-12">
            <p className="mb-6 text-lg leading-relaxed text-zinc-300">
              The birthplace of American independence. The city where the
              revolution began. Now the stage for the next revolution &mdash; one
              built with code, circuits, and bold ideas.
            </p>
            <p className="mb-8 text-zinc-400">
              Specific venue and travel details will be announced soon. <span className="text-accent-red">Rev</span><span className="text-white">Con</span>
              will be centrally located in Philadelphia with easy access to public
              transit, hotels, and the city&apos;s thriving tech scene.
            </p>
            <a
              href="#signup"
              className="inline-block rounded-full border border-zinc-700 px-6 py-2 text-sm font-semibold text-zinc-300 transition-colors hover:border-accent-red hover:text-white"
            >
              Get Venue Updates
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
