import React from 'react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectMockupProps {
  type: ProjectItem['mockupType'];
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ type }) => {
  switch (type) {
    case 'grocery':
      return (
        <div className="relative h-full w-full overflow-hidden rounded-xl border border-slate-200/80 dark:border-white/10 bg-slate-950 p-4 text-slate-100 select-none">
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5 text-[11px]">
            <span className="font-mono font-semibold text-indigo-300">
              POS TERMINAL · #INV-2048
            </span>
            <span className="font-mono text-slate-400 tabular-nums">
              3 Items · Ready
            </span>
          </div>
          <div className="mt-3 grid grid-cols-12 gap-3">
            <div className="col-span-7 space-y-2">
              {[
                { item: 'Basmati Rice (5kg)', qty: 'x2', price: '৳1,240' },
                { item: 'Extra Virgin Olive Oil', qty: 'x1', price: '৳890' },
                { item: 'Organic Green Tea', qty: 'x3', price: '৳540' },
              ].map((row) => (
                <div
                  key={row.item}
                  className="flex items-center justify-between rounded-lg bg-white/[0.04] px-2.5 py-2 text-[11px]"
                >
                  <span className="truncate text-slate-200">{row.item}</span>
                  <div className="flex items-center gap-2 font-mono tabular-nums">
                    <span className="text-slate-400">{row.qty}</span>
                    <span className="text-indigo-300 font-semibold">{row.price}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-span-5 flex flex-col justify-between rounded-lg bg-gradient-to-br from-indigo-600/25 to-blue-600/20 border border-indigo-400/20 p-3">
              <div className="space-y-1 text-[10px] text-slate-300">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono tabular-nums">৳2,670</span>
                </div>
                <div className="flex justify-between">
                  <span>VAT (5%)</span>
                  <span className="font-mono tabular-nums">৳134</span>
                </div>
              </div>
              <div className="border-t border-white/15 pt-2">
                <p className="text-[10px] text-indigo-200">Total Payable</p>
                <p className="font-mono text-base font-bold tabular-nums text-white">
                  ৳2,804
                </p>
              </div>
            </div>
          </div>
        </div>
      );

    case 'student':
      return (
        <div className="relative h-full w-full overflow-hidden rounded-xl border border-slate-200/80 dark:border-white/10 bg-[#0A0C16] p-4 text-slate-100 select-none">
          <div className="flex items-center justify-between text-[11px] text-slate-400">
            <span className="font-semibold text-white">CST Semester Overview</span>
            <span className="font-mono tabular-nums text-indigo-300">CGPA 3.88</span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[
              { label: 'Attendance', val: '94%' },
              { label: 'Courses', val: '06' },
              { label: 'Credits', val: '21.5' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg bg-white/[0.04] p-2.5 text-center"
              >
                <p className="font-mono text-sm font-bold tabular-nums text-white">
                  {stat.val}
                </p>
                <p className="text-[10px] text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-end gap-2 h-14 px-1">
            {[48, 66, 58, 82, 74, 92, 88].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t bg-gradient-to-t from-indigo-600/80 to-blue-400/90"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      );

    case 'weather':
      return (
        <div className="relative h-full w-full overflow-hidden rounded-xl border border-slate-200/80 dark:border-white/10 bg-gradient-to-br from-[#0F172A] via-[#131C3A] to-[#0A0D1C] p-4 text-white select-none">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[11px] text-blue-200/80">Sylhet, BD</p>
              <p className="mt-0.5 font-display text-3xl font-bold tabular-nums">
                27°C
              </p>
              <p className="text-[11px] text-slate-300">Partly Cloudy</p>
            </div>
            <div className="text-right font-mono text-[10px] text-blue-200/80 space-y-1 tabular-nums">
              <p>Humidity: 68%</p>
              <p>Wind: 12 km/h</p>
              <p>UV Index: 4</p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-4 gap-1.5 text-center text-[10px]">
            {[
              { day: 'Thu', temp: '28°' },
              { day: 'Fri', temp: '26°' },
              { day: 'Sat', temp: '29°' },
              { day: 'Sun', temp: '25°' },
            ].map((item) => (
              <div
                key={item.day}
                className="rounded-lg bg-white/[0.06] py-1.5 font-mono tabular-nums"
              >
                <p className="text-slate-400">{item.day}</p>
                <p className="font-semibold text-white">{item.temp}</p>
              </div>
            ))}
          </div>
        </div>
      );

    case 'ecommerce':
      return (
        <div className="relative h-full w-full overflow-hidden rounded-xl border border-slate-200/80 dark:border-white/10 bg-[#0B0C14] p-4 text-slate-100 select-none">
          <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[11px]">
            <span className="font-semibold text-white">Storefront Grid</span>
            <span className="font-mono text-indigo-300 tabular-nums">Bag (2)</span>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2.5">
            {[
              { name: 'Mechanical Keycap Set', price: '$49.00' },
              { name: 'Minimal Desk Lamp', price: '$78.00' },
            ].map((prod, idx) => (
              <div
                key={prod.name}
                className="rounded-lg bg-white/[0.04] p-2.5 space-y-2"
              >
                <div
                  className={`h-11 rounded-md ${
                    idx === 0
                      ? 'bg-gradient-to-tr from-indigo-500/40 to-violet-500/30'
                      : 'bg-gradient-to-tr from-blue-500/40 to-indigo-500/30'
                  }`}
                />
                <p className="truncate text-[10px] font-medium text-slate-200">
                  {prod.name}
                </p>
                <p className="font-mono text-[11px] font-semibold tabular-nums text-indigo-300">
                  {prod.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      );

    case 'password':
      return (
        <div className="relative h-full w-full overflow-hidden rounded-xl border border-slate-200/80 dark:border-white/10 bg-[#090B12] p-4 text-slate-100 select-none">
          <div className="rounded-lg border border-indigo-500/30 bg-indigo-950/30 px-3 py-2.5 font-mono text-xs tracking-wider text-indigo-200 truncate">
            k9$Lm!7xQ#2vR@8z
          </div>
          <div className="mt-3 space-y-2">
            <div className="flex justify-between text-[10px] text-slate-400">
              <span>Entropy Strength</span>
              <span className="font-mono text-indigo-300">98 bits · Strong</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-indigo-500 to-blue-400" />
            </div>
            <div className="flex justify-between pt-1 text-[10px] text-slate-400 font-mono">
              <span>A-Z ✓</span>
              <span>0-9 ✓</span>
              <span>!@#$ ✓</span>
              <span>Len: 16</span>
            </div>
          </div>
        </div>
      );

    case 'todo':
      return (
        <div className="relative h-full w-full overflow-hidden rounded-xl border border-slate-200/80 dark:border-white/10 bg-[#0A0B12] p-4 text-slate-100 select-none">
          <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2 border-b border-white/10">
            <span className="font-semibold text-white">Sprint Tasks</span>
            <span className="font-mono tabular-nums text-indigo-300">2 / 3 Done</span>
          </div>
          <div className="mt-2.5 space-y-2 text-[11px]">
            <div className="flex items-center gap-2 text-slate-400 line-through">
              <span className="h-3.5 w-3.5 rounded border border-indigo-400 bg-indigo-500/40 inline-flex items-center justify-center text-[9px] text-white">
                ✓
              </span>
              <span className="truncate">Refactor responsive grid layout</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400 line-through">
              <span className="h-3.5 w-3.5 rounded border border-indigo-400 bg-indigo-500/40 inline-flex items-center justify-center text-[9px] text-white">
                ✓
              </span>
              <span className="truncate">Add LocalStorage state sync</span>
            </div>
            <div className="flex items-center gap-2 text-slate-100">
              <span className="h-3.5 w-3.5 rounded border border-white/30" />
              <span className="truncate">Deploy production bundle</span>
            </div>
          </div>
        </div>
      );

    case 'chat':
      return (
        <div className="relative h-full w-full overflow-hidden rounded-xl border border-slate-200/80 dark:border-white/10 bg-[#090A11] p-4 text-slate-100 select-none">
          <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[11px]">
            <span className="font-semibold text-white"># frontend-team</span>
            <span className="font-mono text-[10px] text-indigo-300">Firebase Live</span>
          </div>
          <div className="mt-3 space-y-2 text-[11px]">
            <div className="max-w-[82%] rounded-lg bg-white/[0.06] px-2.5 py-1.5 text-slate-200">
              Pushed the responsive header update!
            </div>
            <div className="ml-auto max-w-[82%] rounded-lg bg-gradient-to-r from-indigo-600 to-blue-600 px-2.5 py-1.5 text-white">
              Looks clean on mobile &amp; desktop.
            </div>
          </div>
        </div>
      );
  }
};
