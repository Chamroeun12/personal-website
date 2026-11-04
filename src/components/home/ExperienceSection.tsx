import React from "react";
import { PROFILE_DATA } from "@/data/profile";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  CheckCircle2,
  Clock,
  Sparkles,
  Award,
} from "lucide-react";

export function ExperienceSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-100/70 dark:bg-[#0c1322]/80 border-y border-slate-200 dark:border-white/5 transition-colors duration-300" id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-brand-blue/10 dark:bg-brand-blue/15 text-brand-blue dark:text-brand-cyan border border-brand-blue/20 dark:border-brand-cyan/20 uppercase tracking-widest inline-flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5" />
            Professional Journey & Milestones
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight">
            Work Experience & <br />
            <span className="gradient-text">Academic Timeline</span>
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Real appointments, instruction of over 100+ students, and practical IT systems maintenance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Two Real Professional Roles */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-white/10">
              <Briefcase className="w-5 h-5 text-brand-blue dark:text-brand-cyan" />
              <span>Current Appointments & Roles</span>
            </h3>

            {/* Role 1: Computer Science Teacher */}
            <div className="p-7 rounded-3xl glass-card border border-slate-200 dark:border-white/10 hover:border-brand-blue/50 transition-all duration-300 relative group glass-card-hover">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue dark:text-brand-cyan border border-brand-blue/20 dark:border-brand-cyan/30">
                  Academic Instruction
                </span>
                <span className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-brand-blue dark:text-brand-cyan" /> 2024 – Present
                </span>
              </div>

              <h4 className="font-heading font-bold text-xl text-slate-900 dark:text-white group-hover:text-brand-blue dark:group-hover:text-brand-cyan transition-colors">
                Computer Science Teacher
              </h4>
              <p className="text-xs text-brand-blue dark:text-sky-400 font-medium mb-4">
                Various Academic Institutions / Private Tutoring • Cambodia
              </p>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Lead practical training sessions for over 100+ students, focusing on corporate-ready computer applications and everyday digital productivity:
              </p>

              <ul className="space-y-2 mb-4">
                {[
                  "Microsoft Word: Document formatting, academic papers, typography, and administrative mail merge.",
                  "Microsoft Excel: Dynamic formulas (VLOOKUP, XLOOKUP, IF/COUNTIF), pivot tables, and accounting templates.",
                  "Microsoft PowerPoint: Professional presentation design, layout hierarchy, and corporate slides.",
                  "Computer Fundamentals: Windows navigation, file system management, shortcut mastery, and internet safety.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue dark:text-brand-cyan shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="p-3.5 rounded-xl bg-brand-blue/5 dark:bg-brand-blue/10 border border-brand-blue/15 dark:border-brand-blue/20 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                  Students Taught & Mentored
                </span>
                <span className="text-sm font-bold text-brand-blue dark:text-brand-cyan font-heading">
                  100+ Graduates
                </span>
              </div>
            </div>

            {/* Role 2: Freelance IT Support Specialist */}
            <div className="p-7 rounded-3xl glass-card border border-slate-200 dark:border-white/10 hover:border-brand-blue/50 transition-all duration-300 relative group glass-card-hover">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 dark:bg-sky-500/20 text-sky-700 dark:text-sky-300 border border-sky-500/20 dark:border-sky-500/30">
                  Technical Operations
                </span>
                <span className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-brand-blue dark:text-brand-cyan" /> 2023 – Present
                </span>
              </div>

              <h4 className="font-heading font-bold text-xl text-slate-900 dark:text-white group-hover:text-brand-blue dark:group-hover:text-brand-cyan transition-colors">
                Freelance IT Support Specialist
              </h4>
              <p className="text-xs text-brand-blue dark:text-sky-400 font-medium mb-4">
                Independent Client Engagements • Cambodia
              </p>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Provide on-site and remote technical support, hardware maintenance, software configuration, and operating system troubleshooting:
              </p>

              <ul className="space-y-2 mb-4">
                {[
                  "Clean Windows 10/11 installations, driver updates, and system optimizations.",
                  "Component diagnosis, thermal paste re-application, RAM/SSD upgrades, and hardware repairs.",
                  "Local network troubleshooting, router configuration, and IP address management.",
                  "Data backup, malware removal, and preventive workstation security policies.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue dark:text-brand-cyan shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Academic Degree & Conferred Status */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-white/10">
              <GraduationCap className="w-5 h-5 text-amber-500 dark:text-amber-400" />
              <span>University Education & Academic Credentials</span>
            </h3>

            {/* University Degree Card */}
            <div className="p-7 sm:p-8 rounded-3xl glass-card border border-amber-500/30 bg-gradient-to-br from-amber-500/5 via-amber-50/20 dark:via-slate-900/60 to-transparent relative group glass-card-hover">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" /> Bachelor&apos;s Degree
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Conferred: March 9, 2026
                </span>
              </div>

              <h4 className="font-heading font-extrabold text-2xl text-slate-900 dark:text-white">
                Bachelor of Science in Information Technology
              </h4>
              <p className="text-sm font-semibold text-amber-600 dark:text-amber-400 mt-1 mb-4">
                University of South-East Asia (USEA) • Cambodia
              </p>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                Comprehensive 4-year undergraduate curriculum covering software engineering, object-oriented programming, relational databases, data structures, and computer networks.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-200 dark:border-white/10 text-xs">
                <div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">Major Field</div>
                  <div className="font-semibold text-slate-900 dark:text-slate-200">Information Technology</div>
                </div>
                <div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">Graduation Year</div>
                  <div className="font-semibold text-slate-900 dark:text-slate-200">2026</div>
                </div>
                <div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">Institution</div>
                  <div className="font-semibold text-slate-900 dark:text-slate-200">University of South-East Asia</div>
                </div>
                <div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">Certificate Status</div>
                  <div className="font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Officially Issued
                  </div>
                </div>
              </div>
            </div>

            {/* Teaching Internship Milestone */}
            <div className="p-6 rounded-3xl glass-card border border-slate-200 dark:border-white/10 space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span className="font-semibold text-brand-blue dark:text-brand-cyan">Teaching Internship</span>
                <span>Oct 2025 – Mar 2026</span>
              </div>
              <h5 className="font-heading font-bold text-base text-slate-900 dark:text-white">
                Computer for Administration Teacher
              </h5>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Appointed teaching internship at the University of South-East Asia, instructing students in administrative software workflows and practical technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
