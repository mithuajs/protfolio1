import React, { useState } from 'react';
import { Check, Copy, Mail, MapPin, Send } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { Reveal } from './Reveal';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 1800);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill in your name, email address, and message.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }, 500);
  };

  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between border-b border-slate-200/80 dark:border-white/10 pb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                06. Contact Me
              </p>
              <h2
                className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white"
                style={{ textWrap: 'balance' }}
              >
                Let&apos;s Work Together
              </h2>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Open for freelance projects, internships &amp; frontend roles
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Direct Contact Info Column */}
          <Reveal className="lg:col-span-5 flex">
            <div className="glass-panel flex w-full flex-col justify-between rounded-2xl border border-slate-200/90 dark:border-white/10 p-6 sm:p-8 space-y-8">
              <div className="space-y-4">
                <h3 className="font-display text-2xl font-semibold text-slate-950 dark:text-white">
                  Direct Channels
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  Have a web application in mind, need a responsive React frontend, or want to collaborate on a project? Send a message or reach out directly.
                </p>
              </div>

              <div className="space-y-5">
                <div className="space-y-1.5">
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    Email Address
                  </p>
                  <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-200/80 dark:border-white/10 bg-slate-50/70 dark:bg-white/[0.03] px-3.5 py-2.5">
                    <a
                      href={`mailto:${PROFILE.email}`}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-900 dark:text-slate-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors break-all"
                    >
                      <Mail className="h-4 w-4 shrink-0 text-indigo-500" />
                      <span>{PROFILE.email}</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      aria-label="Copy email address"
                      className="inline-flex items-center gap-1 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-700 dark:text-slate-200 hover:border-indigo-500/50 transition-colors shrink-0"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-indigo-500" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    Location
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-800 dark:text-slate-200">
                    <MapPin className="h-4 w-4 text-indigo-500" />
                    <span>{PROFILE.location}</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-200/70 dark:border-white/10 pt-5 flex flex-wrap items-center gap-5 text-sm font-medium">
                <a
                  href={PROFILE.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  GitHub ↗
                </a>
                <a
                  href={PROFILE.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Facebook ↗
                </a>
              </div>
            </div>
          </Reveal>

          {/* Interactive Contact Form Column */}
          <Reveal delayMs={80} className="lg:col-span-7 flex">
            <div className="glass-panel w-full rounded-2xl border border-slate-200/90 dark:border-white/10 p-6 sm:p-8">
              {submitted ? (
                <div className="flex h-full min-h-[300px] flex-col items-center justify-center text-center space-y-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/15 text-indigo-600 dark:text-indigo-400">
                    <Check className="h-6 w-6" />
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-slate-950 dark:text-white">
                    Message Received
                  </h3>
                  <p className="max-w-md text-sm text-slate-600 dark:text-slate-400">
                    Thank you for reaching out. Your inquiry has been logged—feel free to send another note or email directly anytime.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="rounded-xl border border-slate-300 dark:border-white/15 px-4 py-2 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-medium text-slate-700 dark:text-slate-300"
                      >
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Md. Arif Hasan"
                        className="w-full rounded-xl border border-slate-200 dark:border-white/12 bg-white/90 dark:bg-white/[0.04] px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-medium text-slate-700 dark:text-slate-300"
                      >
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-slate-200 dark:border-white/12 bg-white/90 dark:bg-white/[0.04] px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-medium text-slate-700 dark:text-slate-300"
                    >
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Frontend Web Application Project"
                      className="w-full rounded-xl border border-slate-200 dark:border-white/12 bg-white/90 dark:bg-white/[0.04] px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-medium text-slate-700 dark:text-slate-300"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me about your project goals, timeline, or collaboration idea..."
                      className="w-full resize-none rounded-xl border border-slate-200 dark:border-white/12 bg-white/90 dark:bg-white/[0.04] px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none transition-colors"
                    />
                  </div>

                  {error && (
                    <p
                      role="alert"
                      className="text-xs font-medium text-rose-600 dark:text-rose-400"
                    >
                      {error}
                    </p>
                  )}

                  <div className="flex items-center justify-end">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 hover:brightness-110 disabled:opacity-60 transition-all"
                    >
                      <Send className="h-4 w-4" />
                      <span>{submitting ? 'Sending...' : 'Send Message'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
