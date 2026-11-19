import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const NAV_LINKS = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Education', href: '#education', id: 'education' },
  { label: 'Services', href: '#services', id: 'services' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'glass-panel border-b border-slate-200/80 dark:border-white/10 shadow-sm dark:shadow-black/40'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-5 sm:px-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#home"
          className="font-display text-lg font-bold tracking-tight text-slate-900 dark:text-white whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500 rounded"
        >
          Mithu<span className="text-indigo-500">.</span>
        </a>

        {/* Zone 2: 5 concise single-line nav links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600 dark:text-slate-300"
        >
          {NAV_LINKS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500 rounded ${
                  isActive
                    ? 'text-slate-950 dark:text-white'
                    : 'hover:text-slate-950 dark:hover:text-white'
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 transition-transform duration-200 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action (desktop) + mobile menu toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-indigo-600 to-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-sm shadow-indigo-500/20 hover:from-indigo-500 hover:to-blue-500 transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Contact Me
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex md:hidden h-10 w-10 items-center justify-center rounded-lg border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-white/5 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-indigo-500"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="md:hidden glass-panel border-t border-slate-200/80 dark:border-white/10 px-5 py-4 space-y-1">
          {NAV_LINKS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={handleLinkClick}
              className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100/80 dark:hover:bg-white/5 transition-colors"
            >
              <span>{item.label}</span>
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-indigo-600 to-blue-600 px-4 py-2.5 text-sm font-semibold text-white"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
