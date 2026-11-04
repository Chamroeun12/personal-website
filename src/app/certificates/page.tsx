"use client";

import React, { useState } from "react";
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
  ExternalLink,
} from "lucide-react";

export default function CertificatesPage() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);
  const [categoryFilter, setCategoryFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Credentials" },
    { id: "Academic Degree", label: "Academic Degrees" },
    { id: "Cisco Networking Academy", label: "Cisco Networking" },
    { id: "Udemy Verified Certification", label: "Web Development" },
    { id: "University of South-East Asia", label: "Teaching Appointments" },
    { id: "Microsoft Office Specialist", label: "Microsoft Office" },
  ];

  const filtered = CERTIFICATES_DATA.filter((cert) => {
    if (categoryFilter === "all") return true;
    return cert.category.includes(categoryFilter);
  });

  return (
    <div className="pt-28 pb-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/25 uppercase tracking-widest">
            Academic Credentials & Verified Certifications
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            Verified Authority & <br />
            <span className="gradient-gold">Academic Qualifications</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            All diplomas, completion certificates, and teaching appointments documented directly from official issuing academic and industry bodies.
          </p>
        </div>

        {/* Credential Verification Assurance Notice */}
        <div className="p-6 rounded-2xl glass-card border border-amber-500/20 bg-gradient-to-r from-amber-500/5 via-slate-900 to-transparent flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading font-semibold text-sm text-white">
                Official Credential Archive
              </h4>
              <p className="text-xs text-slate-400">
                Click any certificate to inspect full-resolution document scans, view verified credential IDs, or download official PDFs.
              </p>
            </div>
          </div>
          <span className="text-xs font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-xl shrink-0">
            100% Verified Authentic
          </span>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategoryFilter(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                categoryFilter === cat.id
                  ? "bg-amber-400 text-slate-900 font-semibold shadow-glow"
                  : "text-slate-400 hover:text-white bg-white/5 border border-white/5"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="group cursor-pointer p-7 rounded-3xl glass-card border border-white/10 hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between glass-card-hover"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-xs"
                    style={{
                      backgroundColor: `${cert.color}20`,
                      color: cert.color,
                      border: `1px solid ${cert.color}40`,
                    }}
                  >
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                    {cert.badge}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg text-white group-hover:text-amber-400 transition-colors mb-1">
                  {cert.title}
                </h3>

                <p className="text-xs text-amber-400/90 font-medium mb-1">
                  {cert.issuer}
                </p>

                <p className="text-[11px] font-mono text-slate-500 mb-3">
                  Credential ID: {cert.credentialId}
                </p>

                <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3">
                  {cert.description}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cert.skills.slice(0, 3).map((sk) => (
                    <span
                      key={sk}
                      className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10"
                    >
                      {sk}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="text-[10px] px-1.5 py-0.5 text-slate-500">
                      +{cert.skills.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono text-[11px]">
                  {cert.date}
                </span>

                <div className="flex items-center gap-2">
                  <span className="text-amber-400 font-semibold flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5" /> Inspect
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <CertificateModal
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </div>
  );
}

