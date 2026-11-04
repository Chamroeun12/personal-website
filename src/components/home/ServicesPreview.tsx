import React from "react";
import Link from "next/link";
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
} from "lucide-react";

export function ServicesPreview() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Globe":
        return <Globe className="w-6 h-6" />;
      case "Bot":
        return <Bot className="w-6 h-6" />;
      case "Palette":
        return <Palette className="w-6 h-6" />;
      case "Wrench":
        return <Wrench className="w-6 h-6" />;
      case "GraduationCap":
        return <GraduationCap className="w-6 h-6" />;
      case "FolderDown":
        return <FolderDown className="w-6 h-6" />;
      default:
        return <Globe className="w-6 h-6" />;
    }
  };

  return (
    <section className="py-24 relative overflow-hidden" id="services">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-brand-blue/10 dark:bg-brand-blue/15 text-brand-blue dark:text-brand-cyan border border-brand-blue/20 dark:border-brand-cyan/20 uppercase tracking-widest">
            Digital Solutions & Offerings
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight">
            Comprehensive Technology & <br />
            <span className="gradient-text">Digital Services</span>
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Tailored digital capabilities combining modern engineering, educational instruction, and hands-on IT support to grow your business.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="group p-7 rounded-3xl glass-card border border-slate-200 dark:border-white/10 hover:border-brand-blue/50 dark:hover:border-brand-cyan/40 transition-all duration-300 flex flex-col justify-between glass-card-hover"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 dark:bg-brand-blue/15 text-brand-blue dark:text-brand-cyan flex items-center justify-center border border-brand-blue/20 dark:border-brand-cyan/25 group-hover:scale-110 group-hover:bg-brand-blue/25 transition-all">
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300">
                    {service.badge}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white group-hover:text-brand-blue dark:group-hover:text-brand-cyan transition-colors mb-2.5">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Subcategories */}
                <div className="space-y-2 mb-6 pt-4 border-t border-slate-200 dark:border-white/10">
                  {service.subcategories.slice(0, 4).map((sub) => (
                    <div
                      key={sub}
                      className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue dark:text-brand-cyan shrink-0" />
                      <span>{sub}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between gap-2">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue dark:text-brand-cyan hover:text-blue-700 dark:hover:text-sky-300 transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 hover:border-brand-blue/30 transition-all"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View all services CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-800 dark:text-white bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/15 hover:border-brand-blue/40 shadow-sm transition-all"
          >
            <span>Explore All Detailed Service Frameworks & Processes</span>
            <ArrowRight className="w-4 h-4 text-brand-blue dark:text-brand-cyan" />
          </Link>
        </div>
      </div>
    </section>
  );
}
