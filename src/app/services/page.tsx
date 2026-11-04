import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { SERVICES_DATA } from "@/data/services";
import {
  Globe,
  Bot,
  Palette,
  Wrench,
  GraduationCap,
  FolderDown,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  MessageSquare,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Digital Solutions — Chamroeun SARAN",
  description:
    "Explore tailored digital services offered by Chamroeun SARAN in Cambodia: Web Development, AI Workflows, Graphic Design & Branding, IT Support, Computer Training, and Digital Products.",
};

export default function ServicesPage() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Globe":
        return <Globe className="w-7 h-7" />;
      case "Bot":
        return <Bot className="w-7 h-7" />;
      case "Palette":
        return <Palette className="w-7 h-7" />;
      case "Wrench":
        return <Wrench className="w-7 h-7" />;
      case "GraduationCap":
        return <GraduationCap className="w-7 h-7" />;
      case "FolderDown":
        return <FolderDown className="w-7 h-7" />;
      default:
        return <Globe className="w-7 h-7" />;
    }
  };

  return (
    <div className="pt-28 pb-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-brand-blue/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-blue/15 text-brand-cyan border border-brand-cyan/20 uppercase tracking-widest">
            Professional Offerings & Solutions
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            Digital Services That <br />
            <span className="gradient-text">Drive Measurable Growth</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            From modern responsive web applications and AI productivity pipelines to enterprise IT systems maintenance and patient computer software training.
          </p>
        </div>

        {/* Detailed Service Sections */}
        <div className="space-y-16">
          {SERVICES_DATA.map((service, idx) => (
            <div
              key={service.id}
              id={service.slug}
              className="p-8 sm:p-12 rounded-3xl glass-card border border-white/10 hover:border-brand-cyan/40 transition-all duration-300 relative group overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Overview */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-brand-blue/20 text-brand-cyan flex items-center justify-center border border-brand-cyan/30">
                      {getIcon(service.icon)}
                    </div>
                    <div>
                      <span className="text-[11px] uppercase font-bold tracking-wider text-brand-cyan">
                        {service.badge}
                      </span>
                      <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {service.longDesc}
                  </p>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">
                      Scope & Capabilities:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {service.subcategories.map((sub) => (
                        <li key={sub} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                          <span>{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-brand-blue hover:bg-blue-600 transition-colors shadow-glow"
                    >
                      <span>Explore Full Framework</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-brand-cyan" />
                      <span>Request a Quote</span>
                    </Link>
                  </div>
                </div>

                {/* Right Problem / Solution / Deliverables */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Problems addressed */}
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2.5">
                    <h3 className="text-xs uppercase font-bold tracking-wider text-rose-400">
                      Problems Addressed
                    </h3>
                    <ul className="space-y-2 text-xs text-slate-400 leading-relaxed">
                      {service.problemsAddressed.map((prob) => (
                        <li key={prob} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0 mt-1.5" />
                          <span>{prob}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solutions delivered */}
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2.5">
                    <h3 className="text-xs uppercase font-bold tracking-wider text-emerald-400">
                      Solutions Delivered
                    </h3>
                    <ul className="space-y-2 text-xs text-slate-300 leading-relaxed">
                      {service.solutions.map((sol) => (
                        <li key={sol} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{sol}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables (Spans across) */}
                  <div className="sm:col-span-2 p-5 rounded-2xl bg-brand-blue/5 border border-brand-blue/15 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs uppercase font-bold tracking-wider text-brand-cyan">
                        Standard Deliverables & Handover
                      </h3>
                      <span className="text-[11px] font-mono text-slate-400">
                        {service.pricingNotice}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {service.deliverables.map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-brand-blue/10 text-sky-200 border border-brand-cyan/20"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

