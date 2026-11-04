"use client";

import React, { useState } from "react";
import { RESOURCES_DATA, ResourceItem } from "@/data/resources";
import {
  Search,
  ExternalLink,
  Bot,
  Code,
  Palette,
  Sparkles,
  Layers,
  BookOpen,
  CheckCircle2,
} from "lucide-react";

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCat, setSelectedCat] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Resources" },
    { id: "ai", label: "AI Tools" },
    { id: "webdev", label: "Web Development" },
    { id: "design", label: "Graphic Design" },
    { id: "productivity", label: "Productivity" },
    { id: "learning", label: "Learning Platforms" },
  ];

  const filtered = RESOURCES_DATA.filter((item) => {
    const matchesCat = selectedCat === "all" || item.category === selectedCat;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const getPricingBadge = (pricing: string) => {
    switch (pricing) {
      case "Free":
      case "Open Source":
        return "bg-emerald-500/15 text-emerald-300 border-emerald-500/25";
      case "Freemium":
        return "bg-sky-500/15 text-sky-300 border-sky-500/25";
      case "Paid":
        return "bg-amber-500/15 text-amber-300 border-amber-500/25";
      default:
        return "bg-white/10 text-slate-300 border-white/15";
    }
  };

  return (
    <div className="pt-28 pb-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-brand-cyan/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-blue/15 text-brand-cyan border border-brand-cyan/20 uppercase tracking-widest">
            Curated Knowledge Hub
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            Developer & Business <br />
            <span className="gradient-text">Resource Directory</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            A hand-picked collection of artificial intelligence tools, frontend frameworks, design assets, and official learning documentation recommended by Chamroeun SARAN.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-6 rounded-2xl glass-card border border-white/10 space-y-4 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tools, platforms, or tags..."
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-colors"
              />
            </div>

            <div className="flex flex-wrap gap-1.5 w-full sm:w-auto">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCat(c.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                    selectedCat === c.id
                      ? "bg-brand-blue text-white shadow-glow"
                      : "text-slate-400 hover:text-white bg-white/5 border border-white/5"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 glass-card rounded-2xl border border-white/10 text-slate-400">
            No tools or resources matched your query.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl glass-card border border-white/10 hover:border-brand-cyan/40 transition-all duration-300 flex flex-col justify-between glass-card-hover"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-semibold text-brand-cyan">
                      {item.categoryLabel}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${getPricingBadge(
                        item.pricing
                      )}`}
                    >
                      {item.pricing}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-white group-hover:text-brand-cyan transition-colors flex items-center justify-between">
                    <span>{item.name}</span>
                    <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-brand-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mt-2 mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs text-brand-cyan font-medium">
                  <span>Visit Resource</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

