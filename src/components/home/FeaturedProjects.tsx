"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PROJECTS_DATA, ProjectItem } from "@/data/projects";
import { InteractiveTodoApp } from "@/components/ui/InteractiveTodoApp";
import { VideoProModal } from "@/components/ui/VideoProModal";
import { SaasDashboardModal } from "@/components/ui/SaasDashboardModal";
import {
  ExternalLink,
  Github,
  ArrowRight,
  Sparkles,
  Layers,
  Code2,
  Tv,
} from "lucide-react";

export function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState<"all" | "web" | "ui" | "python">("all");
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [saasModalOpen, setSaasModalOpen] = useState(false);

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (activeFilter === "all") return true;
    return p.category === activeFilter;
  });

  return (
    <section className="py-24 relative overflow-hidden bg-slate-100/60 dark:bg-[#090e1a]/80 transition-colors duration-300" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-brand-blue/10 dark:bg-brand-blue/15 text-brand-blue dark:text-brand-cyan border border-brand-blue/20 dark:border-brand-cyan/20 uppercase tracking-widest inline-flex items-center gap-1.5">
            <Code2 className="w-3.5 h-3.5" />
            Portfolio Showcase
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight">
            Featured <span className="gradient-text">Engineering Projects</span>
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Real software applications, media utilities, interactive web demos, and responsive interfaces built with clean architecture.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeFilter === "all"
                ? "bg-brand-blue text-white shadow-glow"
                : "bg-white dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10 hover:border-slate-300"
            }`}
          >
            All Projects ({PROJECTS_DATA.length})
          </button>
          <button
            onClick={() => setActiveFilter("web")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeFilter === "web"
                ? "bg-brand-blue text-white shadow-glow"
                : "bg-white dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10"
            }`}
          >
            Web Applications
          </button>
          <button
            onClick={() => setActiveFilter("python")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeFilter === "python"
                ? "bg-brand-blue text-white shadow-glow"
                : "bg-white dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10"
            }`}
          >
            Python Media Apps
          </button>
          <button
            onClick={() => setActiveFilter("ui")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeFilter === "ui"
                ? "bg-brand-blue text-white shadow-glow"
                : "bg-white dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10"
            }`}
          >
            UI/UX Systems
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 1. Video Pro: Media Downloader */}
          {(activeFilter === "all" || activeFilter === "python") && (
            <div className="glass-card rounded-3xl border border-slate-200 dark:border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-brand-blue/50 dark:hover:border-brand-cyan/40 transition-all duration-300 glass-card-hover">
              <div>
                <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-950 p-2 mb-6 shadow-md">
                  <img
                    src="/assets/images/projects/video_downloader_mockup_1775306873596.png"
                    alt="Video Pro Mockup"
                    className="w-full h-auto rounded-xl object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue dark:text-brand-cyan border border-brand-blue/20 dark:border-brand-cyan/25">
                    Python Desktop App
                  </span>
                  <span className="text-[11px] font-medium text-amber-500 dark:text-amber-400 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> Featured
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white">
                  Video Pro: Advanced Media Downloader
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  A multithreaded desktop application designed with Python and CustomTkinter, leveraging yt-dlp and FFmpeg to provide seamless, high-resolution media extraction with real-time progress callbacks.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {["Python", "CustomTkinter", "yt-dlp", "FFmpeg", "Threading"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-slate-200 dark:border-white/10 mt-6">
                <button
                  onClick={() => setVideoModalOpen(true)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue dark:text-brand-cyan hover:text-blue-700 dark:hover:text-sky-300 transition-colors"
                >
                  <span>Architecture & Features</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>

                <a
                  href="https://github.com/Chamroeun12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          )}

          {/* 2. Interactive Todo App (Live embedded) */}
          {(activeFilter === "all" || activeFilter === "web") && (
            <div className="glass-card rounded-3xl border border-slate-200 dark:border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-brand-blue/50 dark:hover:border-brand-cyan/40 transition-all duration-300 glass-card-hover">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25">
                    Live Reactive App
                  </span>
                  <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                    Try it right now ↓
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white">
                  Interactive Todo App
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Full DOM manipulation, LocalStorage sync, task category filtering, and micro-animations.
                </p>
              </div>

              {/* Embedded Todo App */}
              <div className="my-2">
                <InteractiveTodoApp />
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-white/10 text-xs">
                <div className="flex gap-2">
                  <span className="text-slate-500 dark:text-slate-400">Stack: Vanilla JS • LocalStorage • CSS Grid</span>
                </div>
                <a
                  href="https://github.com/Chamroeun12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-brand-blue dark:text-brand-cyan hover:text-blue-700 dark:hover:text-sky-300 font-medium"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Source</span>
                </a>
              </div>
            </div>
          )}

          {/* 3. Luxury Real Estate Landing Page */}
          {(activeFilter === "all" || activeFilter === "web") && (
            <div className="glass-card rounded-3xl border border-slate-200 dark:border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-brand-blue/50 dark:hover:border-brand-cyan/40 transition-all duration-300 glass-card-hover">
              <div>
                <div className="h-44 rounded-2xl bg-gradient-to-tr from-sky-900 via-slate-900 to-indigo-950 border border-slate-200 dark:border-white/10 mb-6 p-6 flex flex-col justify-between relative overflow-hidden group">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-300 flex items-center justify-center">
                    <Tv className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-sky-400 font-bold">
                      Architectural Web Design
                    </span>
                    <h4 className="font-heading font-bold text-lg text-white">
                      Parallax Architectural Experience
                    </h4>
                  </div>
                  <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl" />
                </div>

                <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white">
                  Luxury Real Estate Landing Page
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  A high-end architectural real estate template featuring immersive parallax effects, responsive grid cards, and modern typography.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {["HTML5", "CSS3 Parallax", "Responsive Design", "Modern UI"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-slate-200 dark:border-white/10 mt-6">
                <a
                  href="/real-estate.html"
                  target="_blank"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue dark:text-brand-cyan hover:text-blue-700 dark:hover:text-sky-300 transition-colors"
                >
                  <span>Launch Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://github.com/Chamroeun12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          )}

          {/* 4. SaaS Analytics Dashboard UI */}
          {(activeFilter === "all" || activeFilter === "ui") && (
            <div className="glass-card rounded-3xl border border-slate-200 dark:border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-brand-blue/50 dark:hover:border-brand-cyan/40 transition-all duration-300 glass-card-hover">
              <div>
                <div className="h-44 rounded-2xl bg-gradient-to-tr from-indigo-900 via-slate-900 to-slate-950 border border-slate-200 dark:border-white/10 mb-6 p-6 flex flex-col justify-between relative overflow-hidden group">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center">
                    <Layers className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-indigo-400 font-bold">
                      Enterprise Dashboard UI
                    </span>
                    <h4 className="font-heading font-bold text-lg text-white">
                      Glassmorphic SaaS Analytics
                    </h4>
                  </div>
                  <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl" />
                </div>

                <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white">
                  SaaS Analytics Dashboard UI
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  A high-density financial metrics dashboard built with CSS Grid, featuring KPI cards, charts, user behavior tables, and dark theme states.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {["CSS Grid", "Dark Mode UI", "Responsive", "Data Viz"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-slate-200 dark:border-white/10 mt-6">
                <button
                  onClick={() => setSaasModalOpen(true)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue dark:text-brand-cyan hover:text-blue-700 dark:hover:text-sky-300 transition-colors"
                >
                  <span>Explore Metrics & UI</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>

                <a
                  href="https://github.com/Chamroeun12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          )}
        </div>

        {/* View All Projects in Portfolio */}
        <div className="mt-14 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-800 dark:text-white bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/15 hover:border-brand-blue/40 shadow-sm transition-all"
          >
            <span>View All Works & Interactive Demos in Portfolio</span>
            <ArrowRight className="w-4 h-4 text-brand-blue dark:text-brand-cyan" />
          </Link>
        </div>
      </div>

      {/* Case Study Modals */}
      <VideoProModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />
      <SaasDashboardModal
        isOpen={saasModalOpen}
        onClose={() => setSaasModalOpen(false)}
      />
    </section>
  );
}
