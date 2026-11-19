import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Copy,
  ExternalLink,
  RefreshCw,
  X,
} from 'lucide-react';
import { PROJECTS, ProjectItem } from '../data/portfolioData';
import { ProjectMockup } from './ProjectMockup';
import { Reveal } from './Reveal';

type ProjectFilter = 'All' | ProjectItem['category'];
const PROJECT_FILTERS: ProjectFilter[] = ['All', 'Web Apps', 'Dashboards', 'Utilities'];

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<ProjectFilter>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Interactive mini-demo state for Password Generator inside Case Study Modal
  const [demoPassword, setDemoPassword] = useState('Mithu#2026$Dev9');
  const [copiedDemo, setCopiedDemo] = useState(false);

  const visibleProjects =
    filter === 'All'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === filter);

  useEffect(() => {
    if (!selectedProject) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedProject]);

  const navigateModal = (direction: 'prev' | 'next') => {
    if (!selectedProject) return;
    const idx = PROJECTS.findIndex((p) => p.id === selectedProject.id);
    const nextIdx =
      direction === 'next'
        ? (idx + 1) % PROJECTS.length
        : (idx - 1 + PROJECTS.length) % PROJECTS.length;
    setSelectedProject(PROJECTS[nextIdx]);
  };

  const regenerateDemoPassword = () => {
    const chars =
      'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%&*';
    const arr = new Uint32Array(16);
    crypto.getRandomValues(arr);
    const pwd = Array.from(arr, (n) => chars[n % chars.length]).join('');
    setDemoPassword(pwd);
    setCopiedDemo(false);
  };

  const copyDemoPassword = () => {
    navigator.clipboard?.writeText(demoPassword);
    setCopiedDemo(true);
    setTimeout(() => setCopiedDemo(false), 1400);
  };

  return (
    <section id="projects" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between border-b border-slate-200/80 dark:border-white/10 pb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                03. Featured Projects
              </p>
              <h2
                className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white"
                style={{ textWrap: 'balance' }}
              >
                Selected Web Applications
              </h2>
            </div>

            <div
              role="tablist"
              aria-label="Filter projects by category"
              className="inline-flex flex-wrap items-center gap-1 rounded-xl bg-slate-100 dark:bg-white/5 p-1 border border-slate-200/80 dark:border-white/10"
            >
              {PROJECT_FILTERS.map((tab) => {
                const active = filter === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setFilter(tab)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-150 whitespace-nowrap shrink-0 ${
                      active
                        ? 'bg-white dark:bg-indigo-600 text-slate-950 dark:text-white shadow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Bento Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, index) => {
            const isHeroSpan = project.featured && filter === 'All';
            return (
              <Reveal
                key={project.id}
                delayMs={index * 45}
                className={isHeroSpan ? 'md:col-span-2' : ''}
              >
                <article
                  onClick={() => setSelectedProject(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedProject(project);
                    }
                  }}
                  className="group glass-panel flex h-full cursor-pointer flex-col justify-between rounded-2xl border border-slate-200/90 dark:border-white/10 p-5 sm:p-6 hover:-translate-y-1 hover:border-indigo-500/60 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-indigo-500"
                >
                  <div>
                    {/* Interactive Visual Preview Frame */}
                    <div
                      className={`overflow-hidden rounded-xl transition-transform duration-300 group-hover:scale-[1.015] ${
                        isHeroSpan ? 'h-52 sm:h-56' : 'h-44'
                      }`}
                    >
                      <ProjectMockup type={project.mockupType} />
                    </div>

                    {/* Clean Unboxed Metadata Line (Zero-Pill Discipline) */}
                    <div className="mt-5 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <span className="font-medium text-indigo-600 dark:text-indigo-400">
                        {project.category}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono tabular-nums">{project.year}</span>
                      <span aria-hidden="true">·</span>
                      <span className="truncate">{project.stack.join(' / ')}</span>
                    </div>

                    <h3 className="mt-2 font-display text-xl font-semibold text-slate-950 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {project.tagline}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-200/70 dark:border-white/10 pt-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      <span>Inspect Case Study</span>
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      Source Code
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Case Study Lightbox Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-slate-200 dark:border-white/15 bg-white dark:bg-[#0B0C14] p-6 sm:p-8 text-slate-900 dark:text-slate-100 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-5">
              <div>
                <p className="text-xs font-medium text-indigo-600 dark:text-indigo-400">
                  {selectedProject.category} · {selectedProject.year}
                </p>
                <h3
                  id="project-modal-title"
                  className="mt-1 font-display text-2xl sm:text-3xl font-bold tracking-tight"
                >
                  {selectedProject.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 dark:border-white/10 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Preview Frame */}
            <div className="mt-6 h-56 sm:h-64">
              <ProjectMockup type={selectedProject.mockupType} />
            </div>

            {/* Live Interactive Password Tool when Password Generator is selected */}
            {selectedProject.id === 'password-generator' && (
              <div className="mt-5 rounded-xl border border-indigo-500/30 bg-indigo-50/70 dark:bg-indigo-950/25 p-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs font-semibold text-indigo-700 dark:text-indigo-300">
                    Interactive Web Crypto Generator
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={regenerateDemoPassword}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-indigo-500 transition-colors"
                    >
                      <RefreshCw className="h-3.5 w-3.5" />
                      <span>Generate</span>
                    </button>
                    <button
                      type="button"
                      onClick={copyDemoPassword}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-indigo-500/30 bg-white dark:bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-800 dark:text-slate-200"
                    >
                      {copiedDemo ? (
                        <Check className="h-3.5 w-3.5 text-indigo-500" />
                      ) : (
                        <Copy className="h-3.5 w-3.5" />
                      )}
                      <span>{copiedDemo ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                </div>
                <p className="mt-3 rounded-lg bg-white/80 dark:bg-black/40 px-3 py-2 font-mono text-sm text-slate-900 dark:text-indigo-200 break-all">
                  {demoPassword}
                </p>
              </div>
            )}

            {/* Case Study Details */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm leading-relaxed">
              <div className="space-y-3">
                <h4 className="font-display text-sm font-semibold text-slate-950 dark:text-white">
                  Project Goal
                </h4>
                <p className="text-slate-600 dark:text-slate-300">
                  {selectedProject.goal}
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  {selectedProject.description}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-display text-sm font-semibold text-slate-950 dark:text-white">
                  Key Capabilities
                </h4>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  {selectedProject.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2">
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    Stack Used
                  </p>
                  <p className="mt-1 font-mono text-xs text-slate-800 dark:text-slate-200">
                    {selectedProject.stack.join(' · ')}
                  </p>
                </div>
              </div>
            </div>

            {/* Footer Controls: Previous / GitHub / Next */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 dark:border-white/10 pt-5">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => navigateModal('prev')}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-white/10 px-3 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>Previous</span>
                </button>
                <button
                  type="button"
                  onClick={() => navigateModal('next')}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-white/10 px-3 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                >
                  <span>Next</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>

              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 px-4 py-2 text-xs font-semibold text-white hover:brightness-110 transition-all"
              >
                <span>View on GitHub</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
