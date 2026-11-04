"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { PROFILE_DATA } from "@/data/profile";
import {
  ArrowRight,
  FileDown,
  Sparkles,
  MapPin,
  CheckCircle2,
  GraduationCap,
  Briefcase,
  Terminal,
} from "lucide-react";

const ROTATING_TITLES = [
  "Frontend Developer",
  "Computer Science Teacher",
  "IT Specialist",
  "Digital Solutions Consultant",
];

export function HeroSection() {
  const [titleIdx, setTitleIdx] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const currentTitle = ROTATING_TITLES[titleIdx];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentTitle.substring(0, charIdx + 1));
          setCharIdx((prev) => prev + 1);
          if (charIdx + 1 === currentTitle.length) {
            setTimeout(() => setIsDeleting(true), 1800);
          }
        } else {
          setDisplayText(currentTitle.substring(0, charIdx - 1));
          setCharIdx((prev) => prev - 1);
          if (charIdx - 1 === 0) {
            setIsDeleting(false);
            setTitleIdx((prev) => (prev + 1) % ROTATING_TITLES.length);
          }
        }
      },
      isDeleting ? 45 : 100
    );

    return () => clearTimeout(timeout);
  }, [charIdx, isDeleting, titleIdx]);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-slate-50 dark:bg-[#0b1220] transition-colors duration-300">
      {/* Background radial effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-brand-blue/20 via-sky-500/15 to-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-brand-cyan/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Pills */}
            <div className="inline-flex flex-wrap items-center gap-2 p-1.5 pr-4 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs shadow-sm">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                {PROFILE_DATA.availability}
              </span>
              <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-brand-blue dark:text-brand-cyan" />
                {PROFILE_DATA.location}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white tracking-tight leading-[1.15]">
              Building Digital Experiences That{" "}
              <span className="gradient-text">Make a Difference.</span>
            </h1>

            {/* Animated Subtitle */}
            <div className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300 flex items-center justify-center lg:justify-start gap-2 h-8">
              <span>I am a</span>
              <span className="text-brand-blue dark:text-brand-cyan underline decoration-brand-blue/50 underline-offset-4">
                {displayText}
              </span>
              <span className="inline-block w-0.5 h-6 bg-brand-blue dark:bg-brand-cyan animate-pulse" />
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              {PROFILE_DATA.subTagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-brand-blue to-indigo-600 hover:from-blue-600 hover:to-indigo-500 shadow-glow hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 transition-all duration-200"
              >
                <span>Let&apos;s Work Together</span>
              </Link>

              <a
                href={PROFILE_DATA.resumeUrl}
                download="Chamroeun_Saran_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-brand-blue dark:text-brand-cyan hover:text-blue-700 dark:hover:text-sky-300 bg-brand-blue/10 hover:bg-brand-blue/20 border border-brand-blue/20 dark:border-brand-cyan/30 transition-all duration-200"
              >
                <FileDown className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Key stats badges below buttons */}
            <div className="pt-8 border-t border-slate-200 dark:border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center lg:text-left">
              {PROFILE_DATA.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-heading font-bold text-2xl text-slate-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Real Profile Photo & Credential Badges */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-72 sm:w-80 md:w-96 group">
              {/* Outer decorative gradient rings */}
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-blue via-brand-cyan to-indigo-600 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition duration-700 animate-pulse-slow" />

              {/* Main Card */}
              <div className="relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/15 p-3 shadow-2xl overflow-hidden">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={PROFILE_DATA.avatarUrl}
                    alt="Chamroeun SARAN - Frontend Developer & Computer Science Teacher"
                    className="w-full h-full object-cover object-top filter contrast-[1.03] group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 dark:from-[#0b1220]/80 via-transparent to-transparent pointer-events-none" />

                  {/* Corner Badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/90 dark:bg-[#0b1220]/90 backdrop-blur-md border border-slate-200 dark:border-white/10 flex items-center justify-between shadow-lg">
                    <div>
                      <div className="font-heading font-bold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                        Chamroeun SARAN
                        <CheckCircle2 className="w-4 h-4 text-brand-blue dark:text-brand-cyan inline" />
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">
                        Cambodia • Tech Professional
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-brand-blue/15 dark:bg-brand-blue/20 flex items-center justify-center text-brand-blue dark:text-brand-cyan font-mono font-bold text-xs">
                      CS
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Education */}
              <div className="absolute -top-4 -left-6 sm:-left-8 p-3 rounded-xl glass-card border border-slate-200 dark:border-white/15 flex items-center gap-2.5 shadow-xl animate-float">
                <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-500 dark:text-amber-400 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900 dark:text-white">
                    B.Sc. in IT
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">
                    Univ. South-East Asia
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: Teaching */}
              <div
                className="absolute -bottom-4 -right-4 sm:-right-6 p-3 rounded-xl glass-card border border-slate-200 dark:border-white/15 flex items-center gap-2.5 shadow-xl animate-float"
                style={{ animationDelay: "2s" }}
              >
                <div className="w-9 h-9 rounded-lg bg-brand-blue/20 text-brand-blue dark:text-brand-cyan flex items-center justify-center">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900 dark:text-white">
                    100+ Students
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">
                    Office & CS Teacher
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
