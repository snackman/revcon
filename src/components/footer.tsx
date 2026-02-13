import { EVENT } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-card-border py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 sm:flex-row sm:justify-between">
        <div>
          <span className="text-xl font-bold tracking-tight">
            <span className="text-accent-red">Rev</span>Con
          </span>
          <p className="mt-1 text-sm text-zinc-500">
            {EVENT.date} &middot; {EVENT.location}
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-sm text-zinc-500 transition-colors hover:text-white"
            aria-label="Twitter"
          >
            X / Twitter
          </a>
          <a
            href="#"
            className="text-sm text-zinc-500 transition-colors hover:text-white"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
        </div>

        <p className="text-xs text-zinc-600">
          Built in Philadelphia
        </p>
      </div>
    </footer>
  );
}
