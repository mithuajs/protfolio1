import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200/80 dark:border-white/10 bg-white/60 dark:bg-[#050508] py-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <a
              href="#home"
              className="font-display text-lg font-bold tracking-tight text-slate-950 dark:text-white"
            >
              Md. Mobasher Hosen Mithu<span className="text-indigo-500">.</span>
            </a>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Frontend Developer · {PROFILE.location}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
            <a
              href={PROFILE.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href={PROFILE.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Facebook
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>Email</span>
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:border-indigo-500/50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200/70 dark:border-white/10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
          <p>Built with React.js, Tailwind CSS &amp; TypeScript</p>
        </div>
      </div>
    </footer>
  );
};
