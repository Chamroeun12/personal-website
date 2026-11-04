"use client";

import React, { useState } from "react";
import {
  SKILL_CATEGORIES,
  CORE_PROFICIENCY_BARS,
  SkillCategory,
} from "@/data/skills";
import {
  Code,
  Layout,
  Terminal,
  Video,
  Wrench,
  GraduationCap,
  Network,
  Palette,
  FileCode,
  Atom,
  FileTerminal,
  GitBranch,
  DownloadCloud,
  Cpu,
  Monitor,
  AlertTriangle,
  HardDrive,
  FileText,
  Presentation,
  Share2,
  Wifi,
} from "lucide-react";

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState("all");

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Layout":
        return <Layout className="w-5 h-5" />;
      case "Terminal":
        return <Terminal className="w-5 h-5" />;
      case "Video":
        return <Video className="w-5 h-5" />;
      case "Wrench":
        return <Wrench className="w-5 h-5" />;
      case "GraduationCap":
        return <GraduationCap className="w-5 h-5" />;
      case "Network":
        return <Network className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case "Code":
        return <Code className="w-4 h-4" />;
      case "Palette":
        return <Palette className="w-4 h-4" />;
      case "FileCode":
        return <FileCode className="w-4 h-4" />;
      case "Atom":
        return <Atom className="w-4 h-4" />;
      case "FileTerminal":
        return <FileTerminal className="w-4 h-4" />;
      case "GitBranch":
        return <GitBranch className="w-4 h-4" />;
      case "DownloadCloud":
        return <DownloadCloud className="w-4 h-4" />;
      case "Cpu":
        return <Cpu className="w-4 h-4" />;
      case "Monitor":
        return <Monitor className="w-4 h-4" />;
      case "AlertTriangle":
        return <AlertTriangle className="w-4 h-4" />;
      case "HardDrive":
        return <HardDrive className="w-4 h-4" />;
      case "FileText":
        return <FileText className="w-4 h-4" />;
      case "Presentation":
        return <Presentation className="w-4 h-4" />;
      case "Share2":
        return <Share2 className="w-4 h-4" />;
      case "Wifi":
        return <Wifi className="w-4 h-4" />;
      default:
        return <Code className="w-4 h-4" />;
    }
  };

  const filteredCategories =
    activeTab === "all"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.id === activeTab);

  return (
    <section className="py-24 relative overflow-hidden" id="skills">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-brand-blue/10 dark:bg-brand-blue/15 text-brand-blue dark:text-brand-cyan border border-brand-blue/20 dark:border-brand-cyan/20 uppercase tracking-widest inline-flex items-center gap-1.5">
            <Code className="w-3.5 h-3.5" />
            Technical Stack & Expertise
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight">
            Tools & Technologies That <br />
            <span className="gradient-text">Power Modern Solutions</span>
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            A balanced synthesis of frontend engineering, systems administration, media automation, and office software instruction.
          </p>
        </div>

        {/* Top Grid: High-Level Proficiency Bars */}
        <div className="p-8 sm:p-10 rounded-3xl glass-card border border-slate-200 dark:border-white/10 mb-14 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs uppercase tracking-wider text-brand-blue dark:text-brand-cyan font-bold">
                Demonstrated Competence
              </span>
              <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-white">
                Core Proficiency Metrics
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Reflecting practical project executions, university teaching appointments, and hands-on client deployments across Cambodia.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {CORE_PROFICIENCY_BARS.map((bar) => (
                <div key={bar.label} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-800 dark:text-slate-200">{bar.label}</span>
                    <span className="text-brand-blue dark:text-brand-cyan font-mono">{bar.percent}%</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-slate-200 dark:bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out shadow-glow"
                      style={{
                        width: `${bar.percent}%`,
                        backgroundColor: bar.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              activeTab === "all"
                ? "bg-brand-blue text-white shadow-glow"
                : "bg-white dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10"
            }`}
          >
            All Skills
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                activeTab === cat.id
                  ? "bg-brand-blue text-white shadow-glow"
                  : "bg-white dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* 6 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="p-6 sm:p-7 rounded-3xl glass-card border border-slate-200 dark:border-white/10 flex flex-col justify-between glass-card-hover"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue dark:text-brand-cyan flex items-center justify-center border border-brand-blue/20 dark:border-brand-cyan/20">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-base text-slate-900 dark:text-white">
                      {category.name}
                    </h4>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      {category.skills.length} core technologies
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                  {category.description}
                </p>

                {/* Individual Skill Badges */}
                <div className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/15 transition-colors flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className="w-7 h-7 rounded-lg flex items-center justify-center text-xs"
                          style={{
                            backgroundColor: `${skill.color}20`,
                            color: skill.color,
                          }}
                        >
                          {getSkillIcon(skill.iconName)}
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                            {skill.name}
                          </div>
                          <div className="text-[10px] text-slate-500 dark:text-slate-400">
                            {skill.description}
                          </div>
                        </div>
                      </div>

                      {skill.proficiency && (
                        <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 font-medium">
                          {skill.proficiency}%
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
