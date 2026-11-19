import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';
import { Reveal } from './Reveal';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between border-b border-slate-200/80 dark:border-white/10 pb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                05. My Services
              </p>
              <h2
                className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white"
                style={{ textWrap: 'balance' }}
              >
                How I Can Help Build Your Product
              </h2>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Clean interfaces · Reliable engineering
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, index) => (
            <Reveal key={service.number} delayMs={index * 55}>
              <article className="group glass-panel flex h-full flex-col justify-between rounded-2xl border border-slate-200/90 dark:border-white/10 p-6 sm:p-7 hover:-translate-y-1 hover:border-indigo-500/50 transition-all duration-200">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-semibold tabular-nums text-indigo-600 dark:text-indigo-400">
                      {service.number}
                    </span>
                    <a
                      href="#contact"
                      aria-label={`Inquire about ${service.title}`}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 group-hover:border-indigo-500/40 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>

                  <h3 className="font-display text-xl font-semibold text-slate-950 dark:text-white">
                    {service.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/70 dark:border-white/10 text-xs font-medium text-slate-500 dark:text-slate-400">
                  {service.deliverables.join(' · ')}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
