"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldAlert,
  Lock,
  Layers,
  FileText,
  Award,
  MessageSquare,
  Package,
  Settings,
  Database,
  ArrowRight,
  Plus,
  Eye,
  CheckCircle2,
} from "lucide-react";

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="pt-28 pb-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-blue/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Hero */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Administrative CMS Architecture
              </span>
              <span className="text-xs text-slate-400">
                Supabase-Ready Schema
              </span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Platform Administration Control
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-xs text-slate-300 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Auth State: Admin (Chamroeun SARAN)</span>
            </div>
          </div>
        </div>

        {/* Security & Architectural Notice */}
        <div className="p-6 rounded-2xl glass-card border border-brand-cyan/20 bg-gradient-to-r from-brand-blue/10 via-slate-900 to-transparent flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-brand-blue/20 text-brand-cyan flex items-center justify-center shrink-0">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading font-semibold text-sm text-white">
                Scalable Headless Backend Architecture
              </h4>
              <p className="text-xs text-slate-400">
                Configured with strict TypeScript data models ready to connect to Supabase PostgreSQL or Next.js server actions. Secrets and service roles remain isolated from frontend code.
              </p>
            </div>
          </div>
          <span className="text-xs font-mono text-brand-cyan bg-brand-blue/15 border border-brand-cyan/20 px-3 py-1.5 rounded-xl shrink-0">
            Row Level Security (RLS) Ready
          </span>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-white/10 pb-4 text-xs font-semibold">
          {[
            { id: "overview", label: "Overview Metrics", icon: Layers },
            { id: "projects", label: "Projects (4)", icon: Package },
            { id: "services", label: "Services (6)", icon: Layers },
            { id: "blog", label: "Blog Posts (4)", icon: FileText },
            { id: "certs", label: "Certificates (7)", icon: Award },
            { id: "inquiries", label: "Contact Inquiries", icon: MessageSquare },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
                  activeTab === tab.id
                    ? "bg-brand-blue text-white shadow-glow"
                    : "text-slate-400 hover:text-white bg-white/5 border border-white/5"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: Overview Metrics */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-6 rounded-2xl glass-card border border-white/10 space-y-1">
                <span className="text-xs uppercase font-medium text-slate-400">
                  Featured Projects
                </span>
                <div className="font-heading font-extrabold text-3xl text-white">
                  4 Active
                </div>
                <p className="text-[11px] text-emerald-400">
                  1 Desktop, 2 Web, 1 UI/UX
                </p>
              </div>

              <div className="p-6 rounded-2xl glass-card border border-white/10 space-y-1">
                <span className="text-xs uppercase font-medium text-slate-400">
                  Commercial Offerings
                </span>
                <div className="font-heading font-extrabold text-3xl text-white">
                  6 Services
                </div>
                <p className="text-[11px] text-brand-cyan">
                  All slugs & frameworks mapped
                </p>
              </div>

              <div className="p-6 rounded-2xl glass-card border border-white/10 space-y-1">
                <span className="text-xs uppercase font-medium text-slate-400">
                  Verified Credentials
                </span>
                <div className="font-heading font-extrabold text-3xl text-white">
                  7 Scans
                </div>
                <p className="text-[11px] text-amber-400">
                  B.Sc. IT + CCNA + MOS
                </p>
              </div>

              <div className="p-6 rounded-2xl glass-card border border-white/10 space-y-1">
                <span className="text-xs uppercase font-medium text-slate-400">
                  Published Tutorials
                </span>
                <div className="font-heading font-extrabold text-3xl text-white">
                  4 Guides
                </div>
                <p className="text-[11px] text-sky-400">
                  Office, Python, IT & Frontend
                </p>
              </div>
            </div>

            {/* Simulated Recent Inquiries */}
            <div className="p-8 rounded-3xl glass-card border border-white/10 space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <h3 className="font-heading font-bold text-lg text-white">
                    Simulated Inquiries & Pipeline Stream
                  </h3>
                  <p className="text-xs text-slate-400">
                    Real-time leads submitted via contact & quotation endpoints.
                  </p>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                  Live Status: Active
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="text-slate-500 uppercase border-b border-white/10">
                    <tr>
                      <th className="pb-3 font-semibold">Client Name</th>
                      <th className="pb-3 font-semibold">Service Request</th>
                      <th className="pb-3 font-semibold">Budget</th>
                      <th className="pb-3 font-semibold">Time</th>
                      <th className="pb-3 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr>
                      <td className="py-3 font-medium text-white">
                        Sokha Hospitality Group
                      </td>
                      <td className="py-3 text-brand-cyan">
                        Web Development (Restaurant Landing Page)
                      </td>
                      <td className="py-3">$500 - $1,500</td>
                      <td className="py-3 text-slate-400">2 hours ago</td>
                      <td className="py-3">
                        <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                          Responded
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium text-white">
                        Phnom Penh Training Center
                      </td>
                      <td className="py-3 text-amber-400">
                        Microsoft Office Corporate Workshop
                      </td>
                      <td className="py-3">$250 - $500</td>
                      <td className="py-3 text-slate-400">Yesterday</td>
                      <td className="py-3">
                        <span className="px-2 py-0.5 rounded bg-sky-500/20 text-sky-300">
                          Scheduled Call
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Projects Management */}
        {activeTab === "projects" && (
          <div className="p-8 rounded-3xl glass-card border border-white/10 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <h3 className="font-heading font-bold text-xl text-white">
                Portfolio Projects Database
              </h3>
              <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-white bg-brand-blue hover:bg-blue-600 transition-colors">
                <Plus className="w-3.5 h-3.5" />
                <span>Add New Project</span>
              </button>
            </div>
            <div className="space-y-3">
              {[
                { title: "Video Pro: Advanced Downloader", category: "Python Projects", tech: "yt-dlp, FFmpeg, CustomTkinter" },
                { title: "Interactive Todo App", category: "Web Applications", tech: "HTML5, CSS3, Vanilla JS, LocalStorage" },
                { title: "Luxury Real Estate Landing Page", category: "Web Applications", tech: "Responsive UI, Parallax" },
                { title: "SaaS Analytics Dashboard UI", category: "UI/UX Design", tech: "CSS Grid, Glassmorphism" },
              ].map((p) => (
                <div key={p.title} className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between text-xs">
                  <div>
                    <h4 className="font-heading font-semibold text-white">{p.title}</h4>
                    <p className="text-slate-400">{p.category} • {p.tech}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">Published</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Other Tabs Placeholder */}
        {activeTab !== "overview" && activeTab !== "projects" && (
          <div className="p-12 rounded-3xl glass-card border border-white/10 text-center space-y-3 text-slate-400">
            <Database className="w-10 h-10 text-brand-cyan mx-auto" />
            <h3 className="font-heading font-bold text-lg text-white">
              Data Module: {activeTab.toUpperCase()}
            </h3>
            <p className="text-xs max-w-md mx-auto">
              Ready for Supabase PostgreSQL table binding. All schema structures in <code className="text-brand-cyan">src/data/{activeTab}.ts</code> map 1:1 with relational tables.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

