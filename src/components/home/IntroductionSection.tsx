import React from "react";
import Link from "next/link";
import {
  Rocket,
  Layers,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export function IntroductionSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-100/70 dark:bg-[#0c1424]/60 border-y border-slate-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 dark:bg-brand-blue/15 text-brand-blue dark:text-brand-cyan border border-brand-blue/20 dark:border-brand-cyan/20 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Who I Am & What I Do</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight leading-tight">
              Technology Meets Creativity. <br />
              <span className="gradient-text">Design with Purpose, Build with Passion.</span>
            </h2>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              I am a dedicated Frontend Developer and Computer Science Teacher based in Cambodia. I specialize in crafting performant, accessible web applications while actively empowering others through technical training.
            </p>

            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              With formal academic foundations in Information Technology from the University of South-East Asia and extensive experience instructing more than 100 students in Microsoft Office (Word, Excel, PowerPoint) and everyday productivity tools, I bridge the gap between complex code and real-world business results.
            </p>

            {/* Quick check points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                <span>Next.js & Modern Web Engineering</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                <span>Microsoft Office Specialist Certified</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                <span>Cisco CCNAv7 Enterprise Networking</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                <span>Practical IT & Windows Optimization</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue dark:text-brand-cyan hover:text-blue-700 dark:hover:text-sky-300 group transition-colors"
              >
                <span>Read my full journey & philosophies</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Feature Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl glass-card border border-slate-200 dark:border-white/10 space-y-3 glass-card-hover">
              <div className="w-12 h-12 rounded-xl bg-brand-blue/15 text-brand-blue dark:text-brand-cyan flex items-center justify-center">
                <Rocket className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-base text-slate-900 dark:text-white">
                Blazing Fast Speed
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Optimized server components and zero layout shift delivering sub-second load times.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-card border border-slate-200 dark:border-white/10 space-y-3 glass-card-hover">
              <div className="w-12 h-12 rounded-xl bg-sky-500/15 text-sky-600 dark:text-sky-400 flex items-center justify-center">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-base text-slate-900 dark:text-white">
                Responsive Design
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Pixel-perfect presentation adapting effortlessly to smartphones, tablets, and desktops.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-card border border-slate-200 dark:border-white/10 space-y-3 glass-card-hover">
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-base text-slate-900 dark:text-white">
                Practical Education
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Proven curriculum and patient instruction translating tech jargon into clear productivity.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-card border border-slate-200 dark:border-white/10 space-y-3 glass-card-hover">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-base text-slate-900 dark:text-white">
                Reliable Systems
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Hardware-tested configurations, Windows security hardening, and error-free scripting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
