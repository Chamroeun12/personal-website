import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { SERVICES_DATA, ServiceItem } from "@/data/services";
import {
  Globe,
  Bot,
  Palette,
  Wrench,
  GraduationCap,
  FolderDown,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Clock,
  Sparkles,
  ChevronRight,
  MessageSquare,
} from "lucide-react";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = SERVICES_DATA.find((s) => s.slug === params.slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} — Chamroeun SARAN Solutions`,
    description: service.shortDesc,
  };
}

export default function SingleServicePage({ params }: ServicePageProps) {
  const service = SERVICES_DATA.find((s) => s.slug === params.slug);
  if (!service) notFound();

  return (
    <div className="pt-28 pb-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-blue/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <Link href="/" className="hover:text-brand-cyan transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/services" className="hover:text-brand-cyan transition-colors">
            Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-white font-medium">{service.title}</span>
        </div>

        {/* Hero Section */}
        <div className="space-y-4">
          <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-brand-blue/15 text-brand-cyan border border-brand-cyan/25 uppercase tracking-widest">
            {service.badge}
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            {service.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            {service.longDesc}
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link
              href={`/contact?service=${encodeURIComponent(service.title)}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-brand-blue to-indigo-600 hover:from-blue-600 hover:to-indigo-500 shadow-glow transition-all"
            >
              <span>Request a Custom Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Ask a Question</span>
            </Link>
          </div>
        </div>

        {/* Problems vs Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-7 rounded-2xl glass-card border border-white/10 space-y-4">
            <h3 className="font-heading font-bold text-lg text-rose-400">
              The Challenges We Solve
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
              {service.problemsAddressed.map((p) => (
                <li key={p} className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-rose-400 shrink-0 mt-1.5" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-7 rounded-2xl glass-card border border-white/10 space-y-4">
            <h3 className="font-heading font-bold text-lg text-emerald-400">
              Our Engineered Solutions
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {service.solutions.map((s) => (
                <li key={s} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Deliverables Section */}
        <div className="p-8 sm:p-10 rounded-3xl glass-card border border-white/10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-heading font-bold text-xl text-white">
              Deliverables & Assets You Receive
            </h3>
            <span className="text-xs font-mono text-brand-cyan">
              {service.pricingNotice}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {service.deliverables.map((item) => (
              <div
                key={item}
                className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-2.5 text-xs text-slate-200"
              >
                <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 4-Step Working Process for this Service */}
        <div className="space-y-6">
          <h3 className="font-heading font-bold text-2xl text-white text-center">
            The Service Execution Process
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.process.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl glass-card border border-white/10 space-y-2.5"
              >
                <span className="font-mono text-xl font-bold text-brand-cyan">
                  {step.step}
                </span>
                <h4 className="font-heading font-semibold text-sm text-white">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="space-y-6">
          <h3 className="font-heading font-bold text-2xl text-white text-center">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {service.faqs.map((faq) => (
              <div
                key={faq.question}
                className="p-6 rounded-2xl glass-card border border-white/10 space-y-2"
              >
                <h4 className="font-heading font-semibold text-base text-white flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-brand-cyan" />
                  <span>{faq.question}</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="p-8 sm:p-12 rounded-3xl glass-card border border-brand-cyan/30 text-center space-y-4 bg-gradient-to-br from-brand-blue/15 to-transparent">
          <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">
            Ready to Begin Your {service.title} Project?
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Get in touch directly or request a detailed quotation customized to your exact timeline and deliverables.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Link
              href={`/contact?service=${encodeURIComponent(service.title)}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-brand-blue hover:bg-blue-600 shadow-glow transition-all"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

