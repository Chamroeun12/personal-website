import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { PROFILE_DATA } from "@/data/profile";
import {
  GraduationCap,
  Briefcase,
  Compass,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  FileDown,
  ArrowRight,
  BookOpen,
  HeartHandshake,
  Lightbulb,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Chamroeun SARAN — Background, Philosophy & Experience",
  description:
    "Learn about Chamroeun SARAN, a Cambodian Frontend Developer, Computer Science Teacher, and IT Specialist. Discover his teaching philosophy, development principles, and academic journey.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-brand-blue/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header Hero */}
        <div className="max-w-3xl space-y-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-blue/15 text-brand-cyan border border-brand-cyan/20 uppercase tracking-widest">
            Biography & Professional Profile
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            Design with Purpose, <br />
            <span className="gradient-text">Build with Passion.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            I am a Frontend Developer, Computer Science Teacher, and IT Specialist based in Cambodia. I combine technical engineering with educational instruction to build practical digital solutions and empower people through technology.
          </p>
        </div>

        {/* Profile Card & Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md group">
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-blue via-brand-cyan to-indigo-600 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition duration-700" />
              <div className="relative rounded-2xl bg-slate-900 border border-white/15 p-3 shadow-2xl overflow-hidden">
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-slate-800">
                  <img
                    src={PROFILE_DATA.avatarUrl}
                    alt="Chamroeun SARAN"
                    className="w-full h-full object-cover object-top filter contrast-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220]/80 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0b1220]/90 backdrop-blur-md border border-white/10">
                    <h3 className="font-heading font-bold text-base text-white">
                      Chamroeun SARAN
                    </h3>
                    <p className="text-xs text-brand-cyan">
                      B.Sc. in IT • Educator • IT Specialist
                    </p>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Cambodia (Phnom Penh & Siem Reap)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white">
              My Journey in Technology
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              My fascination with technology began with exploring how operating systems communicate with hardware and how web browsers translate raw code into interactive visual interfaces. This passion led me to pursue a formal degree in Information Technology at the <strong>University of South-East Asia</strong>, graduating with a Bachelor of Science in IT.
            </p>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Early in my studies, I achieved the <strong>Cisco CCNAv7 certification</strong>, gaining rigorous hands-on practice in routing, switching protocols, VLAN architectures, and network security. Recognizing that many students and small businesses struggled with digital tools, I stepped into technical education in 2024, personally training more than 100 students in Microsoft Office productivity.
            </p>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Simultaneously, through freelance IT support since 2023, I resolved complex Windows issues, hardware diagnostics, and driver deployments. Today, I channel this multifaceted foundation into engineering modern, responsive frontend applications with Next.js, React, and Python automation.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={PROFILE_DATA.resumeUrl}
                download
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-white bg-brand-blue hover:bg-blue-600 transition-colors shadow-glow"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Official CV (PDF)</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <span>Let&apos;s Connect</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Mission, Vision & Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl glass-card border border-white/10 space-y-3 glass-card-hover">
            <div className="w-12 h-12 rounded-xl bg-brand-blue/20 text-brand-cyan flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-white">Our Mission</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              To build modern, accessible digital experiences and provide practical technology education that solves tangible challenges for Cambodian businesses and individuals.
            </p>
          </div>

          <div className="p-8 rounded-2xl glass-card border border-white/10 space-y-3 glass-card-hover">
            <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-white">Our Vision</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              A smarter digital future where businesses thrive through high-speed web solutions and every professional has the computer mastery to excel in the global economy.
            </p>
          </div>

          <div className="p-8 rounded-2xl glass-card border border-white/10 space-y-3 glass-card-hover">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-white">Core Values</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Honesty and authenticity in every project, relentless dedication to clean craft, and genuine care for students and clients alike.
            </p>
          </div>
        </div>

        {/* Dual Philosophies: Teaching & Development */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl glass-card border border-white/10 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-xl text-white">
                Teaching Philosophy
              </h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              &ldquo;Technology should empower, never intimidate.&rdquo;
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              When instructing over 100 students in Microsoft Word and Excel, I discovered that true learning occurs when theoretical formulas are tied directly to real administrative challenges — formatting contracts, balancing expense sheets, or automating calculations. My goal is to build genuine self-reliance in every student.
            </p>
          </div>

          <div className="p-8 rounded-3xl glass-card border border-white/10 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-blue/20 text-brand-cyan flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-xl text-white">
                Development Philosophy
              </h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              &ldquo;Clean architecture, zero bloat, and purposeful design.&rdquo;
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              A website must not merely look attractive; it must be fast, accessible (WCAG AA), SEO-friendly, and simple to navigate. Whether engineering desktop media utilities with Python or full-scale Next.js web applications, I prioritize maintainability, security, and responsive elegance.
            </p>
          </div>
        </div>

        {/* Full Timeline */}
        <div className="p-8 sm:p-12 rounded-3xl glass-card border border-white/10 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-semibold text-brand-cyan uppercase tracking-wider">
              Chronology
            </span>
            <h3 className="font-heading font-bold text-2xl text-white">
              Career & Education Timeline
            </h3>
          </div>

          <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2 sm:before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-brand-blue via-brand-cyan to-amber-500">
            {PROFILE_DATA.journey.map((item, idx) => (
              <div key={idx} className="relative group">
                <div
                  className={`absolute -left-[23px] sm:-left-[27px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-[#0b1220] ${
                    item.color === "gold"
                      ? "bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.6)]"
                      : item.color === "cyan"
                      ? "bg-brand-cyan shadow-[0_0_12px_rgba(56,189,248,0.6)]"
                      : "bg-brand-blue shadow-[0_0_12px_rgba(37,99,235,0.6)]"
                  }`}
                />

                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-brand-cyan">
                      {item.year}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">
                      {item.tag}
                    </span>
                  </div>
                  <h4 className="font-heading font-bold text-lg text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs text-sky-400 font-medium mb-2">
                    {item.institution}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

