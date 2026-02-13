"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { EVENT } from "@/lib/constants";

export default function Hero({ onGetNotified }: { onGetNotified: () => void }) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Image
        src="/images/independence-hall.jpg"
        alt="Independence Hall, Philadelphia"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(220,38,38,0.2)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(59,130,246,0.1)_0%,_transparent_50%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-accent-red"
        >
          {EVENT.date} &middot; {EVENT.location}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mb-6 text-5xl font-extrabold leading-tight tracking-tight sm:text-7xl lg:text-8xl"
        >
          <span className="text-accent-red">REVOLUTION</span>
          <br />
          CONFERENCE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mx-auto mb-10 max-w-xl text-lg text-zinc-300 sm:text-xl"
        >
          {EVENT.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <button
            onClick={onGetNotified}
            className="inline-block rounded-full bg-accent-red px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-accent-red-hover"
          >
            Get Notified
          </button>
        </motion.div>
      </div>
    </section>
  );
}
