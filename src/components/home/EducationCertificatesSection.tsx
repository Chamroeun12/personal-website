"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CERTIFICATES_DATA, CertificateItem } from "@/data/certificates";
import { CertificateModal } from "@/components/ui/CertificateModal";
import {
  Award,
  GraduationCap,
  FileCheck,
  CheckCircle2,
  FileDown,
  ArrowRight,
  Eye,
  Shield,
} from "lucide-react";

export function EducationCertificatesSection() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  return (
    <section className="py-24 relative overflow-hidden" id="certificates">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/25 uppercase tracking-widest inline-flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5" />
            Verified Credentials & Authority
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight">
            Academic Degrees & <br />
            <span className="gradient-gold">Professional Certifications</span>
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Authenticated diplomas, official course completion certificates, and verified technical credentials with digital inspection.
          </p>
        </div>

        {/* Featured Bachelor's Degree Hero Card */}
        <div className="mb-10 p-8 sm:p-10 rounded-3xl glass-card border border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-amber-50/20 dark:via-slate-900 to-white dark:to-slate-900/90 relative overflow-hidden glass-card-hover shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-500/30 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4" /> Higher Education Degree
                </span>
                <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> University Conferred
                </span>
              </div>

              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">
                Bachelor of Science in Information Technology
              </h3>
              <p className="text-sm font-semibold text-amber-600 dark:text-amber-400">
                University of South-East Asia (USEA) • Conferred March 9, 2026
              </p>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                Official Bachelor&apos;s degree confirming successful graduation and fulfillment of all academic requirements in Information Technology.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => setSelectedCert(CERTIFICATES_DATA[0])}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 shadow-lg shadow-amber-500/20 transition-all hover:scale-105"
                >
                  <Eye className="w-4 h-4" />
                  <span>Inspect Official Diploma</span>
                </button>

                <a
                  href="/assets/docs/certificates/Bachelor_Degree_Certificate.pdf"
                  download="Bachelor_Degree_Certificate_Chamroeun_Saran.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white/80 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 transition-colors"
                >
                  <FileDown className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                  <span>Download Conferred PDF</span>
                </a>
              </div>
            </div>

            {/* Thumbnail preview */}
            <div className="lg:col-span-4 flex justify-center">
              <div
                onClick={() => setSelectedCert(CERTIFICATES_DATA[0])}
                className="relative w-full max-w-xs aspect-[4/3] rounded-2xl overflow-hidden border border-amber-500/40 shadow-2xl cursor-pointer group bg-slate-950"
              >
                <img
                  src="/assets/images/certificates/Bachelor_Degree_Certificate.jpg"
                  alt="Bachelor Degree Certificate"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3.5 py-1.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-lg">
                    <Eye className="w-3.5 h-3.5" /> Open Lightbox
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATES_DATA.slice(1, 4).map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-3xl glass-card border border-slate-200 dark:border-white/10 flex flex-col justify-between glass-card-hover group"
            >
              <div>
                {/* Certificate Scan Preview */}
                <div
                  onClick={() => setSelectedCert(cert)}
                  className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 border border-slate-200 dark:border-white/10 mb-4 cursor-pointer"
                >
                  {cert.image && (
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3 py-1 rounded-lg bg-white/90 text-slate-900 font-bold text-xs flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" /> Preview
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300">
                    {cert.category.toUpperCase()}
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">
                    {cert.date}
                  </span>
                </div>

                <h4 className="font-heading font-bold text-base text-slate-900 dark:text-white group-hover:text-amber-500 dark:group-hover:text-amber-300 transition-colors">
                  {cert.title}
                </h4>
                <p className="text-xs text-amber-600 dark:text-amber-400/90 font-medium mt-1 mb-2">
                  {cert.issuer}
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-white/10 mt-4 flex items-center justify-between text-xs">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="font-semibold text-brand-blue dark:text-brand-cyan hover:underline flex items-center gap-1"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3" />
                </button>

                <a
                  href={cert.pdfUrl}
                  download
                  className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white flex items-center gap-1"
                  title="Download Certificate PDF"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>PDF</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Certificates CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/certificates"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-800 dark:text-white bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/15 hover:border-amber-500/40 shadow-sm transition-all"
          >
            <span>View All Authenticated Credentials in Certificate Gallery</span>
            <ArrowRight className="w-4 h-4 text-amber-500 dark:text-amber-400" />
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      <CertificateModal
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
}
