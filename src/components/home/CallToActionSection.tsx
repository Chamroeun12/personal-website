import React from "react";
import Link from "next/link";
import { PROFILE_DATA } from "@/data/profile";
import {
  Sparkles,
  ArrowRight,
  Send,
  Mail,
  Phone,
  MessageSquare,
} from "lucide-react";

export function CallToActionSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background radial spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-r from-brand-blue/20 via-sky-500/20 to-indigo-600/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-14 rounded-3xl glass-card border border-slate-200 dark:border-white/15 bg-gradient-to-b from-white to-slate-100/90 dark:from-[#111827]/90 dark:to-[#0b1220]/95 text-center space-y-8 shadow-2xl relative overflow-hidden">
          {/* Decorative Corner Accents */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/10 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-blue/10 rounded-full blur-2xl" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/10 dark:bg-brand-blue/15 text-brand-blue dark:text-brand-cyan border border-brand-blue/20 dark:border-brand-cyan/25 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Let&apos;s Build Something Great</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight max-w-2xl mx-auto leading-tight">
            Have an Idea? <br />
            <span className="gradient-text">Let&apos;s Turn It Into Reality.</span>
          </h2>

          <p className="text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
            Whether you need a modern business website, digital design, IT systems support, or tailored computer training, let&apos;s discuss your next project.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-brand-blue to-indigo-600 hover:from-blue-600 hover:to-indigo-500 shadow-glow hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={PROFILE_DATA.contact.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-brand-blue hover:text-blue-700 dark:text-brand-cyan dark:hover:text-sky-300 bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 hover:border-brand-blue/30 transition-all duration-200"
            >
              <Send className="w-4 h-4" />
              <span>Chat on Telegram</span>
            </a>
          </div>

          {/* Direct channels quick bar */}
          <div className="pt-8 border-t border-slate-200 dark:border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-500 dark:text-slate-400">
            <a
              href={`mailto:${PROFILE_DATA.contact.email}`}
              className="flex items-center justify-center gap-2 hover:text-brand-blue dark:hover:text-brand-cyan transition-colors"
            >
              <Mail className="w-4 h-4 text-brand-blue dark:text-brand-cyan" />
              <span>{PROFILE_DATA.contact.email}</span>
            </a>
            <a
              href={PROFILE_DATA.contact.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 hover:text-brand-blue dark:hover:text-brand-cyan transition-colors"
            >
              <Send className="w-4 h-4 text-brand-blue dark:text-brand-cyan" />
              <span>{PROFILE_DATA.contact.telegramUsername}</span>
            </a>
            <a
              href={`tel:${PROFILE_DATA.contact.phone}`}
              className="flex items-center justify-center gap-2 hover:text-brand-blue dark:hover:text-brand-cyan transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-blue dark:text-brand-cyan" />
              <span>{PROFILE_DATA.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
