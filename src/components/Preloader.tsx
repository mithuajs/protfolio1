import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      onComplete();
      return;
    }

    const start = performance.now();
    const duration = 750;
    let frameId = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (elapsed < duration) {
        frameId = requestAnimationFrame(tick);
      } else {
        setExiting(true);
        setTimeout(onComplete, 320);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [onComplete]);

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050508] text-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        exiting ? 'opacity-0 pointer-events-none scale-[1.02]' : 'opacity-100 scale-100'
      }`}
    >
      <div className="w-64 max-w-[80vw] space-y-5">
        <div className="flex items-baseline justify-between">
          <span className="font-display text-2xl font-semibold tracking-tight text-white">
            Mithu<span className="text-indigo-400">.</span>
          </span>
          <span className="font-mono text-xs tabular-nums text-slate-400">
            {progress}%
          </span>
        </div>

        <div className="h-[2px] w-full overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 via-violet-500 to-blue-500 transition-[width] duration-75 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-xs text-slate-400 tracking-wide">
          Frontend Developer Portfolio
        </p>
      </div>
    </div>
  );
};
