"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Nav({ onGetNotified }: { onGetNotified: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-2xl font-bold tracking-tight">
          <span className="text-accent-red">Rev</span>Con
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          onClick={onGetNotified}
          className="hidden rounded-full bg-accent-red px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-red-hover md:block"
        >
          Get Notified
        </button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-zinc-400 md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-card-border bg-background/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-zinc-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => { setMenuOpen(false); onGetNotified(); }}
              className="mt-2 rounded-full bg-accent-red px-5 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-accent-red-hover"
            >
              Get Notified
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
