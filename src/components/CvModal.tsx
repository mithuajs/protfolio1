import React, { useEffect } from 'react';
import { Download, Printer, X } from 'lucide-react';
import { PROFILE, SKILLS } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownloadResume = () => {
    const resumeHtml = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>CV - ${PROFILE.name}</title>
<style>
  body { font-family: system-ui, -apple-system, sans-serif; color: #0f172a; max-width: 780px; margin: 40px auto; padding: 0 24px; line-height: 1.55; }
  h1 { margin: 0 0 4px; font-size: 26px; }
  h2 { font-size: 14px; text-transform: uppercase; letter-spacing: 0.08em; color: #4f46e5; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; margin-top: 24px; }
  .meta { color: #475569; font-size: 14px; margin-bottom: 16px; }
  ul { padding-left: 18px; }
  li { margin-bottom: 6px; }
</style>
</head>
<body>
  <h1>${PROFILE.name}</h1>
  <div class="meta">${PROFILE.role} · ${PROFILE.location} · ${PROFILE.email}</div>
  <div class="meta">GitHub: ${PROFILE.socials.github} · Facebook: ${PROFILE.socials.facebook}</div>
  <h2>Profile</h2>
  <p>${PROFILE.aboutSummary}</p>
  <h2>Technical Skills</h2>
  <p>${SKILLS.map((s) => s.name).join(' · ')}</p>
  <h2>Featured Projects</h2>
  <ul>
    <li><strong>Grocery Shop Billing System:</strong> Point-of-sale billing terminal with live cart calculation, VAT/discount math, and printable receipt output.</li>
    <li><strong>Student Dashboard:</strong> Academic overview dashboard tracking attendance, GPA trends, and course schedules.</li>
    <li><strong>Weather App:</strong> Live meteorological web app consuming REST API forecast endpoints.</li>
    <li><strong>E-Commerce Website:</strong> Responsive storefront with category filtering and slide-over cart management.</li>
    <li><strong>Password Generator:</strong> Configurable Web Crypto credential utility with entropy strength meter.</li>
    <li><strong>Todo App:</strong> Task manager with priority lanes, filters, and LocalStorage persistence.</li>
    <li><strong>Chat Application:</strong> Real-time messaging workspace built with React.js and Firebase.</li>
  </ul>
  <h2>Education</h2>
  <p><strong>${PROFILE.education.degree} in ${PROFILE.education.department}</strong><br />
  ${PROFILE.education.institution}, ${PROFILE.education.country}</p>
</body>
</html>`;

    const blob = new Blob([resumeHtml], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Md_Mobasher_Hosen_Mithu_CV.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-200 dark:border-white/15 bg-white dark:bg-[#0C0D14] p-6 sm:p-8 text-slate-900 dark:text-slate-100 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-5">
          <div>
            <h2 id="cv-modal-title" className="font-display text-2xl font-bold tracking-tight">
              {PROFILE.name}
            </h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              {PROFILE.role} · {PROFILE.location}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close CV preview"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 dark:border-white/10 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-6 space-y-5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <div>
            <h3 className="font-display text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Summary
            </h3>
            <p className="mt-2">{PROFILE.aboutSummary}</p>
          </div>

          <div>
            <h3 className="font-display text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Education
            </h3>
            <p className="mt-2 font-semibold text-slate-900 dark:text-white">
              {PROFILE.education.degree} — {PROFILE.education.department}
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              {PROFILE.education.institution}, {PROFILE.education.country}
            </p>
          </div>

          <div>
            <h3 className="font-display text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Core Technologies
            </h3>
            <p className="mt-2 text-slate-700 dark:text-slate-300">
              {SKILLS.map((s) => s.name).join(' · ')}
            </p>
          </div>

          <div>
            <h3 className="font-display text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Direct Contact
            </h3>
            <p className="mt-2">
              Email: {PROFILE.email} · GitHub: github.com/mithuajs
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-end gap-3 border-t border-slate-200 dark:border-white/10 pt-5">
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 dark:border-white/15 px-4 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
          >
            <Printer className="h-4 w-4" />
            <span>Print / Save as PDF</span>
          </button>

          <button
            type="button"
            onClick={handleDownloadResume}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 px-5 py-2.5 text-xs font-semibold text-white shadow-sm hover:brightness-110 transition-all"
          >
            <Download className="h-4 w-4" />
            <span>Download CV File</span>
          </button>
        </div>
      </div>
    </div>
  );
};
