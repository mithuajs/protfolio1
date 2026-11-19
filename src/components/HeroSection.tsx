import React, { useEffect, useState } from 'react';
import {
  ArrowDownRight,
  Download,
  Mail,
  Moon,
  Play,
  Sparkles,
  Sun,
} from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface HeroSectionProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onOpenCv: () => void;
}

const ORBIT_NODES = [
  { label: 'React.js', code: '⚛', detail: 'Component Architecture & Hooks' },
  { label: 'Next.js', code: 'NX', detail: 'App Router & SSR Optimization' },
  { label: 'JavaScript', code: 'JS', detail: 'ES6+ Modules & Async State' },
  { label: 'Tailwind', code: 'TW', detail: 'Design Tokens & Fluid Grids' },
  { label: 'HTML5', code: '<>', detail: 'Semantic & Accessible DOM' },
  { label: 'CSS3', code: '{}', detail: 'Modern Layouts & Keyframes' },
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  theme,
  onToggleTheme,
  onOpenCv,
}) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showcaseMode, setShowcaseMode] = useState<'orbit' | 'reel'>('orbit');
  const [activeNodeIndex, setActiveNodeIndex] = useState(0);

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      setTypedText(PROFILE.typingRoles[0]);
      return;
    }

    const currentRole = PROFILE.typingRoles[roleIndex];
    const speed = isDeleting ? 42 : 78;

    const timer = setTimeout(() => {
      if (!isDeleting && typedText.length < currentRole.length) {
        setTypedText(currentRole.slice(0, typedText.length + 1));
      } else if (!isDeleting && typedText.length === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1300);
      } else if (isDeleting && typedText.length > 0) {
        setTypedText(currentRole.slice(0, typedText.length - 1));
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % PROFILE.typingRoles.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex]);

  // Auto-cycle orbital node highlight every 2.8s when in orbit mode
  useEffect(() => {
    if (showcaseMode !== 'orbit') return;
    const interval = setInterval(() => {
      setActiveNodeIndex((prev) => (prev + 1) % ORBIT_NODES.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [showcaseMode]);

  const activeNode = ORBIT_NODES[activeNodeIndex];

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-8 pb-16 sm:pt-12 sm:pb-24"
    >
      {/* Subtle architectural ambient gradient mesh */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[420px] w-[760px] rounded-full bg-gradient-to-tr from-indigo-600/20 via-violet-600/15 to-blue-500/20 blur-[110px] dark:from-indigo-600/25 dark:via-violet-600/18 dark:to-blue-500/20"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* Top Hero Utility Row: Quiet Unboxed Kicker + Theme Switcher */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/80 dark:border-white/10 pb-4">
          <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
            <span className="text-slate-900 dark:text-slate-200 font-semibold">
              {PROFILE.role}
            </span>
            <span aria-hidden="true">·</span>
            <span>{PROFILE.location}</span>
            <span aria-hidden="true">·</span>
            <span>Available for Frontend &amp; Full-Stack Roles</span>
          </div>

          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 dark:border-white/12 bg-white/80 dark:bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-800 dark:text-slate-200 hover:border-indigo-500/50 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-indigo-500"
          >
            {theme === 'dark' ? (
              <>
                <Sun className="h-3.5 w-3.5 text-amber-400" />
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <Moon className="h-3.5 w-3.5 text-indigo-600" />
                <span>Dark Mode</span>
              </>
            )}
          </button>
        </div>

        {/* Split Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Typographic Hierarchy & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8 py-2">
            <div className="space-y-5">
              <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 tracking-wide">
                Hello, I&apos;m
              </p>

              <h1
                className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.08] text-slate-950 dark:text-white"
                style={{ textWrap: 'balance' }}
              >
                Md. Mobasher Hosen{' '}
                <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-blue-500 bg-clip-text text-transparent">
                  Mithu
                </span>
              </h1>

              {/* Animated Typing Subtitle */}
              <div className="flex items-center gap-2 font-mono text-base sm:text-lg text-slate-700 dark:text-slate-200 min-h-[1.75rem]">
                <span className="text-indigo-500 dark:text-indigo-400 select-none">
                  &gt;
                </span>
                <span>{typedText}</span>
                <span
                  aria-hidden="true"
                  className="inline-block h-5 w-[2px] bg-indigo-500 dark:bg-indigo-400 animate-caret"
                />
              </div>

              <p className="max-w-xl text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                {PROFILE.tagline}
              </p>
            </div>

            {/* Primary CTA Cluster */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/35 hover:brightness-110 transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                <span>View My Projects</span>
                <ArrowDownRight className="h-4 w-4" />
              </a>

              <button
                type="button"
                onClick={onOpenCv}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 dark:border-white/15 bg-white/80 dark:bg-white/5 px-5 py-3 text-sm font-semibold text-slate-800 dark:text-slate-100 hover:border-indigo-500/60 hover:bg-indigo-50/60 dark:hover:bg-white/10 transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                <Download className="h-4 w-4 text-indigo-500 dark:text-indigo-400" />
                <span>Download CV</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                <Mail className="h-4 w-4" />
                <span>Contact Me</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Glass Showcase (Tech Orbit & Motion Reel) */}
          <div className="lg:col-span-5 flex">
            <div className="glass-panel relative flex w-full flex-col justify-between rounded-2xl border border-slate-200/90 dark:border-white/12 p-5 sm:p-6 shadow-xl shadow-slate-200/40 dark:shadow-black/50">
              {/* Segmented Showcase Switcher */}
              <div className="flex items-center justify-between gap-3 pb-4 border-b border-slate-200/70 dark:border-white/10">
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  Interactive Stack Showcase
                </span>

                <div
                  role="tablist"
                  aria-label="Showcase mode"
                  className="inline-flex items-center gap-1 rounded-lg bg-slate-100 dark:bg-white/5 p-1"
                >
                  <button
                    type="button"
                    role="tab"
                    aria-selected={showcaseMode === 'orbit'}
                    onClick={() => setShowcaseMode('orbit')}
                    className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                      showcaseMode === 'orbit'
                        ? 'bg-white dark:bg-indigo-600 text-slate-900 dark:text-white shadow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <Sparkles className="h-3 w-3" />
                    <span>Tech Orbit</span>
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={showcaseMode === 'reel'}
                    onClick={() => setShowcaseMode('reel')}
                    className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                      showcaseMode === 'reel'
                        ? 'bg-white dark:bg-indigo-600 text-slate-900 dark:text-white shadow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <Play className="h-3 w-3" />
                    <span>Motion Reel</span>
                  </button>
                </div>
              </div>

              {showcaseMode === 'orbit' ? (
                <div className="flex flex-1 flex-col items-center justify-center py-6">
                  {/* Orbital Ring Graphic */}
                  <div className="relative flex h-56 w-56 items-center justify-center">
                    {/* Outer Dashed Orbit */}
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 220 220"
                      className="absolute inset-0 h-full w-full animate-spin-slow"
                    >
                      <circle
                        cx="110"
                        cy="110"
                        r="98"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeDasharray="6 6"
                        className="text-indigo-500/30 dark:text-indigo-400/30"
                      />
                      <path
                        d="M 110 12 A 98 98 0 0 1 208 110"
                        fill="none"
                        stroke="url(#orbitGrad)"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id="orbitGrad" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#6366F1" />
                          <stop offset="100%" stopColor="#3B82F6" />
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Inner Counter-Rotating Arc */}
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 160 160"
                      className="absolute h-40 w-40 animate-spin-reverse"
                    >
                      <circle
                        cx="80"
                        cy="80"
                        r="70"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="text-slate-300/60 dark:text-white/10"
                      />
                      <path
                        d="M 80 10 A 70 70 0 0 1 140 115"
                        fill="none"
                        stroke="#8B5CF6"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </svg>

                    {/* Center Core Badge */}
                    <div className="relative z-10 flex h-24 w-24 flex-col items-center justify-center rounded-full border border-indigo-500/30 bg-white/90 dark:bg-[#0B0C14]/90 shadow-lg shadow-indigo-500/15">
                      <span className="font-mono text-lg font-bold text-indigo-600 dark:text-indigo-400">
                        {activeNode.code}
                      </span>
                      <span className="mt-0.5 text-[11px] font-semibold text-slate-900 dark:text-white">
                        {activeNode.label}
                      </span>
                    </div>
                  </div>

                  {/* Interactive Stack Selector Row */}
                  <div className="mt-4 w-full space-y-3">
                    <p className="text-center text-xs text-slate-600 dark:text-slate-300">
                      {activeNode.detail}
                    </p>
                    <div className="grid grid-cols-3 gap-1.5">
                      {ORBIT_NODES.map((node, idx) => (
                        <button
                          key={node.label}
                          type="button"
                          onClick={() => setActiveNodeIndex(idx)}
                          className={`rounded-lg px-2 py-1.5 text-xs font-medium transition-all duration-150 whitespace-nowrap truncate ${
                            idx === activeNodeIndex
                              ? 'bg-indigo-600 text-white shadow-sm'
                              : 'bg-slate-100/80 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-slate-200/80 dark:hover:bg-white/10'
                          }`}
                        >
                          {node.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-1 flex-col justify-center py-3">
                  <div className="relative overflow-hidden rounded-xl border border-slate-200 dark:border-white/10 bg-black aspect-[4/3]">
                    <video
                      src="/assets/aistudio/original-3631d29b7e91091f868772dd9d3940c5_b0512bcb.mp4"
                      controls
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="h-full w-full object-cover"
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/75 to-transparent" />
                  </div>
                  <p className="mt-3 text-xs text-slate-600 dark:text-slate-400">
                    Interactive interface motion &amp; case study concept reel.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Highlights Strip (Tabular Numerals) */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 border-t border-slate-200/80 dark:border-white/10 pt-8">
          <div className="space-y-1">
            <p className="font-display text-2xl sm:text-3xl font-bold tabular-nums text-slate-950 dark:text-white">
              07
            </p>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Featured Web Projects
            </p>
          </div>
          <div className="space-y-1">
            <p className="font-display text-2xl sm:text-3xl font-bold tabular-nums text-slate-950 dark:text-white">
              10+
            </p>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Modern Frontend &amp; API Tools
            </p>
          </div>
          <div className="space-y-1">
            <p className="font-display text-2xl sm:text-3xl font-bold tabular-nums text-slate-950 dark:text-white">
              CST
            </p>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Diploma in Engineering Candidate
            </p>
          </div>
          <div className="space-y-1">
            <p className="font-display text-2xl sm:text-3xl font-bold tabular-nums text-slate-950 dark:text-white">
              100%
            </p>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Responsive Across All Viewports
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
