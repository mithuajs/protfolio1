import React from 'react';

const MARQUEE_ITEMS = [
  'Frontend Architecture',
  'React.js & Next.js',
  'Responsive Design Systems',
  'Tailwind CSS',
  'Glassmorphic UI',
  'REST API Integration',
  'Firebase Web Apps',
];

export const MarqueeDivider: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden border-y border-slate-200/80 dark:border-white/10 bg-slate-100/60 dark:bg-white/[0.02] py-3.5 select-none"
    >
      <div className="flex w-max animate-marquee items-center gap-8 text-xs font-medium tracking-wider uppercase text-slate-500 dark:text-slate-400">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
          <React.Fragment key={`${item}-${idx}`}>
            <span className="whitespace-nowrap">{item}</span>
            <span className="text-indigo-500/70">·</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
