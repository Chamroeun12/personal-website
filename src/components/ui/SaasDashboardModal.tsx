"use client";

import React from "react";
import { X, TrendingUp, Users, ShieldCheck, Layers, ExternalLink } from "lucide-react";

interface SaasDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SaasDashboardModal({ isOpen, onClose }: SaasDashboardModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-200 dark:border-white/20 p-6 sm:p-8 bg-white dark:bg-[#0b1220]/95 text-slate-900 dark:text-slate-100 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="pb-6 border-b border-slate-200 dark:border-white/10 pr-8">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-400/30">
            Interactive UI Showcase
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white mt-2">
            SaaS Analytics & Operations Hub
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Modern high-performance dashboard crafted with CSS Grid & Glassmorphism.
          </p>
        </div>

        <div className="py-6 space-y-6">
          {/* Simulated Live KPI Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-blue-50/60 dark:bg-gradient-to-br dark:from-blue-900/40 dark:to-slate-900 border border-blue-200 dark:border-blue-500/30">
              <span className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-medium">
                ARR Growth
              </span>
              <div className="text-2xl font-bold font-heading text-slate-900 dark:text-white mt-1">
                $48,250
              </div>
              <p className="flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 mt-1">
                <TrendingUp className="w-3.5 h-3.5" /> +24.5% vs last mo
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-sky-50/60 dark:bg-gradient-to-br dark:from-sky-900/40 dark:to-slate-900 border border-sky-200 dark:border-sky-500/30">
              <span className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-medium">
                Active Users
              </span>
              <div className="text-2xl font-bold font-heading text-slate-900 dark:text-white mt-1">
                14,890
              </div>
              <p className="flex items-center gap-1 text-xs text-sky-600 dark:text-sky-400 mt-1">
                <Users className="w-3.5 h-3.5" /> +18.2% new signups
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-indigo-50/60 dark:bg-gradient-to-br dark:from-indigo-900/40 dark:to-slate-900 border border-indigo-200 dark:border-indigo-500/30">
              <span className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-medium">
                Retention Rate
              </span>
              <div className="text-2xl font-bold font-heading text-slate-900 dark:text-white mt-1">
                96.4%
              </div>
              <p className="flex items-center gap-1 text-xs text-indigo-600 dark:text-indigo-400 mt-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Industry Top 5%
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-600 dark:text-slate-300">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10">
              <h3 className="font-heading font-semibold text-slate-900 dark:text-white text-sm mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-600 dark:text-indigo-400" /> Modular Architecture
              </h3>
              <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                Engineered with reusable card components, dynamic CSS subgrids, and custom CSS variables supporting fluid dark/light theme switching. Optimized for instant zero layout shifts.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10">
              <h3 className="font-heading font-semibold text-slate-900 dark:text-white text-sm mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> WCAG AA Compliance
              </h3>
              <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                Strict contrast standards, aria-labels for chart elements, keyboard tab focus management, and fluid responsiveness scaling across mobile phones and ultrawide displays.
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-semibold mb-2">
              Core UI Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Semantic HTML5",
                "CSS3 Modern Grid & Flex",
                "Vanilla JavaScript (ES6+)",
                "SVG Data Visuals",
                "Glassmorphism Variables",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-indigo-50 dark:bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-slate-200 dark:border-white/10">
          <a
            href="https://github.com/Chamroeun12"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-glow"
          >
            <span>View on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
