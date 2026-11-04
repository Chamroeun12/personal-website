import React from "react";
import { Search, Compass, Code, Rocket, ArrowRight } from "lucide-react";

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discover",
    subtitle: "Understanding Needs & Objectives",
    desc: "We analyze your business targets, user demographics, document friction points, or project requirements through deep consultation.",
    icon: Search,
    color: "from-blue-500/20 to-sky-500/20",
    border: "border-blue-500/30",
  },
  {
    step: "02",
    title: "Plan",
    subtitle: "Architecture & Roadmap",
    desc: "Formulating a clear technical roadmap, UI wireframes, content structures, and software requirements to prevent scope creep.",
    icon: Compass,
    color: "from-sky-500/20 to-indigo-500/20",
    border: "border-sky-500/30",
  },
  {
    step: "03",
    title: "Design & Develop",
    subtitle: "Precision Engineering",
    desc: "Writing clean, semantic, and modular code with Next.js, React, Tailwind CSS, or configuring stable Windows/hardware environments.",
    icon: Code,
    color: "from-indigo-500/20 to-blue-600/20",
    border: "border-indigo-500/30",
  },
  {
    step: "04",
    title: "Deliver & Improve",
    subtitle: "Testing & Handover",
    desc: "Rigorous cross-browser testing, SEO audits, training walkthroughs for staff/clients, and continuous support.",
    icon: Rocket,
    color: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/30",
  },
];

export function WorkingProcessSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-100/70 dark:bg-[#0c1424]/60 border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-brand-blue/10 dark:bg-brand-blue/15 text-brand-blue dark:text-brand-cyan border border-brand-blue/20 dark:border-brand-cyan/20 uppercase tracking-widest inline-flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5" />
            Methodology & Standards
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight">
            How I Work: <span className="gradient-text">From Concept to Delivery</span>
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            A disciplined, four-phase execution framework guaranteeing reliability, transparent communication, and high-impact digital products.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="p-7 rounded-3xl glass-card border border-slate-200 dark:border-white/10 hover:border-brand-blue/50 dark:hover:border-brand-cyan/40 transition-all duration-300 flex flex-col justify-between relative group glass-card-hover"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} border ${step.border} flex items-center justify-center`}
                    >
                      <Icon className="w-6 h-6 text-brand-blue dark:text-brand-cyan group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="font-mono text-2xl font-black text-slate-300 dark:text-white/20 group-hover:text-brand-blue dark:group-hover:text-brand-cyan/40 transition-colors">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-1">
                    {step.title}
                  </h3>
                  <div className="text-xs text-brand-blue dark:text-brand-cyan font-medium mb-3">
                    {step.subtitle}
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-200 dark:border-white/5 flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 group-hover:text-slate-900 dark:text-slate-400 dark:group-hover:text-white transition-colors">
                  <span>Phase {idx + 1} of 4</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform text-brand-blue dark:text-brand-cyan" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
