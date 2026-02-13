"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Divider() {
  return (
    <section className="relative flex h-72 items-center justify-center overflow-hidden sm:h-96">
      <Image
        src="/images/liberty-bell.jpg"
        alt="The Liberty Bell, Philadelphia"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-accent-red/20 to-accent-blue/10" />

      <motion.blockquote
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="relative z-10 px-6 text-center"
      >
        <p className="text-2xl font-bold italic tracking-tight text-white sm:text-4xl lg:text-5xl">
          &ldquo;Proclaim Liberty Throughout All the Land&rdquo;
        </p>
        <cite className="mt-4 block text-sm font-normal not-italic tracking-widest text-zinc-400 uppercase">
          Inscription on the Liberty Bell
        </cite>
      </motion.blockquote>
    </section>
  );
}
