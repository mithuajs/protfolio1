import React from 'react';
import { BookOpen, GraduationCap, MapPin } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { Reveal } from './Reveal';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between border-b border-slate-200/80 dark:border-white/10 pb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                04. Education
              </p>
              <h2
                className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white"
                style={{ textWrap: 'balance' }}
              >
                Academic Foundation
              </h2>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Engineering &amp; Computer Science Track
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={60}>
          <div className="glass-panel rounded-2xl border border-slate-200/90 dark:border-white/10 p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3 text-indigo-600 dark:text-indigo-400">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/15 to-blue-500/15 border border-indigo-500/20">
                    <GraduationCap className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    {PROFILE.education.degree}
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
                  {PROFILE.education.department}
                </h3>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <span className="font-medium text-slate-900 dark:text-slate-100">
                    {PROFILE.education.institution}
                  </span>
                  <span aria-hidden="true" className="text-slate-400">
                    ·
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                    <MapPin className="h-4 w-4 text-indigo-500" />
                    <span>{PROFILE.education.country}</span>
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4 border-t lg:border-t-0 lg:border-l border-slate-200/80 dark:border-white/10 pt-6 lg:pt-0 lg:pl-8">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  <BookOpen className="h-4 w-4 text-indigo-500" />
                  <span>Key Coursework &amp; Focus</span>
                </div>

                <ul className="space-y-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  {PROFILE.education.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
