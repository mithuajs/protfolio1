import React, { useState } from 'react';
import { Code2, Compass, Layers } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { Reveal } from './Reveal';

const PALETTE_SWATCHES = [
  { hex: '#050508', label: 'Obsidian Canvas' },
  { hex: '#6366F1', label: 'Indigo Accent' },
  { hex: '#3B82F6', label: 'Electric Blue' },
];

export const AboutSection: React.FC = () => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const copySwatch = (hex: string) => {
    navigator.clipboard?.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1500);
  };

  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between border-b border-slate-200/80 dark:border-white/10 pb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                01. About Me
              </p>
              <h2
                className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white"
                style={{ textWrap: 'balance' }}
              >
                Crafting Interfaces with Engineering Discipline
              </h2>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Sylhet, Bangladesh · Computer Science &amp; Technology
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Narrative & Engineering Pillars */}
          <Reveal className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="space-y-4 text-base sm:text-[17px] leading-relaxed text-slate-700 dark:text-slate-300">
              <p className="text-lg sm:text-xl font-medium text-slate-900 dark:text-white leading-relaxed">
                {PROFILE.aboutSummary}
              </p>
              <p>{PROFILE.aboutExtended}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2">
              <div className="glass-panel rounded-2xl border border-slate-200/90 dark:border-white/10 p-5 space-y-2.5">
                <Code2 className="h-5 w-5 text-indigo-500 dark:text-indigo-400" />
                <h3 className="font-display text-base font-semibold text-slate-950 dark:text-white">
                  Clean Code
                </h3>
                <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                  Modular React components, readable hooks, and scalable folder architecture.
                </p>
              </div>

              <div className="glass-panel rounded-2xl border border-slate-200/90 dark:border-white/10 p-5 space-y-2.5">
                <Layers className="h-5 w-5 text-violet-500 dark:text-violet-400" />
                <h3 className="font-display text-base font-semibold text-slate-950 dark:text-white">
                  Modern UI/UX
                </h3>
                <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                  Glassmorphic depth, balanced whitespace, and accessible contrast across themes.
                </p>
              </div>

              <div className="glass-panel rounded-2xl border border-slate-200/90 dark:border-white/10 p-5 space-y-2.5">
                <Compass className="h-5 w-5 text-blue-500 dark:text-blue-400" />
                <h3 className="font-display text-base font-semibold text-slate-950 dark:text-white">
                  Full-Stack Path
                </h3>
                <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                  Advancing from Next.js &amp; Firebase into end-to-end Software Engineering.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Design Language & Visual Identification Panel */}
          <Reveal delayMs={100} className="lg:col-span-5 flex">
            <div className="glass-panel flex w-full flex-col justify-between rounded-2xl border border-slate-200/90 dark:border-white/10 p-6 sm:p-7">
              <div className="space-y-1">
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  Visual Identification
                </span>
                <h3 className="font-display text-xl font-semibold text-slate-950 dark:text-white">
                  System Tokens &amp; Craft
                </h3>
              </div>

              <div className="my-6 grid grid-cols-2 gap-4">
                <div className="space-y-2.5">
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    Typography
                  </p>
                  <div className="space-y-2">
                    <div className="rounded-lg border border-slate-200/80 dark:border-white/10 bg-slate-50/70 dark:bg-white/[0.03] px-3 py-2">
                      <p className="font-display text-sm font-semibold text-slate-900 dark:text-white">
                        Outfit Display
                      </p>
                    </div>
                    <div className="rounded-lg border border-slate-200/80 dark:border-white/10 bg-slate-50/70 dark:bg-white/[0.03] px-3 py-2">
                      <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                        Plus Jakarta Sans
                      </p>
                    </div>
                    <div className="rounded-lg border border-slate-200/80 dark:border-white/10 bg-slate-50/70 dark:bg-white/[0.03] px-3 py-2">
                      <p className="font-mono text-xs text-slate-700 dark:text-slate-300">
                        JetBrains Mono
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    Color System
                  </p>
                  <div className="space-y-2">
                    {PALETTE_SWATCHES.map((swatch) => (
                      <button
                        key={swatch.hex}
                        type="button"
                        onClick={() => copySwatch(swatch.hex)}
                        title={`Copy ${swatch.hex}`}
                        className="flex w-full items-center gap-2.5 rounded-lg border border-slate-200/80 dark:border-white/10 bg-slate-50/70 dark:bg-white/[0.03] p-1.5 text-left hover:border-indigo-500/50 transition-colors"
                      >
                        <span
                          className="h-6 w-6 shrink-0 rounded-md border border-black/10 dark:border-white/15"
                          style={{ backgroundColor: swatch.hex }}
                        />
                        <span className="font-mono text-xs text-slate-700 dark:text-slate-300 truncate">
                          {copiedHex === swatch.hex ? 'Copied' : swatch.hex}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-200/70 dark:border-white/10 pt-4 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                <span>Primary Focus</span>
                <span className="font-medium text-slate-900 dark:text-slate-200">
                  React · Next.js · Responsive UI
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
