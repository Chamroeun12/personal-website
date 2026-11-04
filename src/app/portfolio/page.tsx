"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PROJECTS_DATA, ProjectItem } from "@/data/projects";
import { InteractiveTodoApp } from "@/components/ui/InteractiveTodoApp";
import { VideoProModal } from "@/components/ui/VideoProModal";
import { SaasDashboardModal } from "@/components/ui/SaasDashboardModal";
import {
  Search,
  ExternalLink,
  Github,
  Code2,
  Tv,
  Layers,
  Sparkles,
  ArrowRight,
  Filter,
  FileDown,
  CheckCircle2
} from "lucide-react";

export default function PortfolioPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "web" | "ui" | "python"
  >("all");
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [saasModalOpen, setSaasModalOpen] = useState(false);

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    const matchesCategory =
      selectedCategory === "all" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-24 relative overflow-hidden bg-slate-50 dark:bg-[#0b1220] min-h-screen text-slate-800 dark:text-slate-100 transition-colors duration-300">
      {/* Radial glow background */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-brand-blue/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue dark:text-brand-cyan border border-brand-blue/20 dark:border-brand-cyan/25 uppercase tracking-widest inline-flex items-center gap-1.5">
            <Code2 className="w-3.5 h-3.5" />
            Engineering Portfolio & Case Studies
          </span>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white tracking-tight leading-tight">
            Crafted with Precision. <br />
            <span className="gradient-text">Proven in Production.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Explore desktop media utilities, responsive architectural web designs, live client-side state engines, and SaaS analytics hubs.
          </p>

          {/* Dedicated Resume Download Bar */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="/assets/docs/resume.pdf"
              download="Chamroeun_Saran_Resume.pdf"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl font-heading font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-brand-blue via-indigo-600 to-brand-cyan hover:opacity-95 shadow-glow hover:shadow-cyan-500/30 transition-all hover:scale-105"
            >
              <FileDown className="w-4 h-4 text-brand-cyan" />
              <span>Download Official Resume (PDF)</span>
            </a>

            <div className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-2xl text-xs text-slate-600 dark:text-slate-400 bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>Updated 2026 • IT Specialist & Developer</span>
            </div>
          </div>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="p-5 sm:p-6 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-white/10 shadow-sm space-y-4 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Search input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by tech, keyword, or title..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-brand-blue dark:focus:border-brand-cyan transition-colors"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5 w-full sm:w-auto">
              {(
                [
                  { id: "all", label: "All Works" },
                  { id: "web", label: "Web Applications" },
                  { id: "ui", label: "UI / UX Design" },
                  { id: "python", label: "Python & Media" },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                    selectedCategory === tab.id
                      ? "bg-brand-blue text-white shadow-glow"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 bg-white/80 dark:bg-slate-900/60 rounded-3xl border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 space-y-3">
            <p className="text-base font-semibold text-slate-900 dark:text-white">No projects matched your search.</p>
            <p className="text-xs">Try adjusting your keywords or clearing the category filter.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold text-brand-blue dark:text-brand-cyan bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 hover:border-brand-blue/50 dark:hover:border-brand-cyan/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Project Media / Card Banner */}
                  {project.id === "video-pro" && (
                    <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-900 p-2 mb-6 shadow-md">
                      <img
                        src="/assets/images/projects/video_downloader_mockup_1775306873596.png"
                        alt="Video Pro Mockup"
                        className="w-full h-auto rounded-xl object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  {project.id === "interactive-todo" && (
                    <div className="mb-6">
                      <InteractiveTodoApp />
                    </div>
                  )}

                  {project.id === "luxury-real-estate" && (
                    <div className="h-48 rounded-2xl bg-gradient-to-tr from-sky-900 via-slate-900 to-indigo-950 border border-slate-200 dark:border-white/10 mb-6 p-6 flex flex-col justify-between relative overflow-hidden group">
                      <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-300 flex items-center justify-center">
                        <Tv className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-sky-400 font-bold">
                          Live Architectural Demo
                        </span>
                        <h4 className="font-heading font-bold text-lg text-white">
                          Parallax Architectural Showcase
                        </h4>
                      </div>
                    </div>
                  )}

                  {project.id === "saas-dashboard" && (
                    <div className="h-48 rounded-2xl bg-gradient-to-tr from-indigo-900 via-slate-900 to-slate-950 border border-slate-200 dark:border-white/10 mb-6 p-6 flex flex-col justify-between relative overflow-hidden group">
                      <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center">
                        <Layers className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-indigo-400 font-bold">
                          Analytics UI Showcase
                        </span>
                        <h4 className="font-heading font-bold text-lg text-white">
                          Glassmorphic SaaS Analytics Hub
                        </h4>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue dark:text-brand-cyan border border-brand-blue/20 dark:border-brand-cyan/25">
                      {project.categoryLabel}
                    </span>
                    {project.featured && (
                      <span className="text-[11px] font-medium text-amber-500 dark:text-amber-400 flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5" /> Featured
                      </span>
                    )}
                  </div>

                  <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white group-hover:text-brand-blue dark:group-hover:text-brand-cyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-brand-blue dark:text-sky-400 font-medium mt-0.5 mb-3">
                    {project.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {project.summary}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 mb-4">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    {project.modalType === "video-pro" && (
                      <button
                        onClick={() => setVideoModalOpen(true)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-brand-blue hover:bg-blue-600 transition-colors shadow-glow"
                      >
                        <span>Case Study</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    )}

                    {project.modalType === "saas" && (
                      <button
                        onClick={() => setSaasModalOpen(true)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-glow"
                      >
                        <span>Explore Metrics</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    )}

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-brand-blue hover:bg-blue-600 transition-colors shadow-glow"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
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
    </div>
  );
}
