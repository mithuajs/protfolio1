import React, { useState } from 'react';
import { SKILLS, SkillItem } from '../data/portfolioData';
import { Reveal } from './Reveal';

type FilterCategory = 'All' | SkillItem['category'];

const CATEGORIES: FilterCategory[] = [
  'All',
  'Frontend',
  'Styling & UI',
  'Backend & Tools',
];

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('All');

  const filteredSkills =
    selectedCategory === 'All'
      ? SKILLS
      : SKILLS.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between border-b border-slate-200/80 dark:border-white/10 pb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                02. Skills &amp; Technologies
              </p>
              <h2
                className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white"
                style={{ textWrap: 'balance' }}
              >
                Core Engineering Toolkit
              </h2>
            </div>

            {/* Interactive Segmented Category Filter */}
            <div
              role="tablist"
              aria-label="Filter skills by category"
              className="inline-flex flex-wrap items-center gap-1 rounded-xl bg-slate-100 dark:bg-white/5 p-1 border border-slate-200/80 dark:border-white/10"
            >
              {CATEGORIES.map((category) => {
                const active = selectedCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-150 whitespace-nowrap shrink-0 ${
                      active
                        ? 'bg-white dark:bg-indigo-600 text-slate-950 dark:text-white shadow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {filteredSkills.map((skill, index) => (
            <Reveal key={skill.id} delayMs={index * 35}>
              <article className="group glass-panel flex h-full flex-col justify-between rounded-2xl border border-slate-200/90 dark:border-white/10 p-5 hover:-translate-y-1 hover:border-indigo-500/50 transition-all duration-200">
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/15 to-blue-500/15 border border-indigo-500/20 font-mono text-sm font-semibold text-indigo-600 dark:text-indigo-300 group-hover:from-indigo-600 group-hover:to-blue-600 group-hover:text-white transition-colors duration-200">
                      {skill.codeSymbol}
                    </span>
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      {skill.level}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-lg font-semibold text-slate-950 dark:text-white">
                    {skill.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                    {skill.summary}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/70 dark:border-white/10 text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  {skill.category}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
