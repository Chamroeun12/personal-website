"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CertificateItem } from "@/data/certificates";
import { X, Award, CheckCircle, FileDown, Printer, Shield, Eye } from "lucide-react";

interface CertificateModalProps {
  cert: CertificateItem | null;
  onClose: () => void;
}

export function CertificateModal({ cert, onClose }: CertificateModalProps) {
  const [viewMode, setViewMode] = useState<"image" | "diploma">("image");

  if (!cert) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-200 dark:border-white/20 p-6 sm:p-8 bg-white dark:bg-[#0b1220]/95 text-slate-900 dark:text-slate-100 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-white/10 pr-10">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue dark:text-brand-cyan border border-brand-blue/20 dark:border-brand-cyan/30">
                {cert.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                <CheckCircle className="w-3.5 h-3.5" /> Verified Credential
              </span>
            </div>
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
              {cert.title}
            </h2>
          </div>

          {/* Toggle between scan and digital view if scan exists */}
          {cert.image && (
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs">
              <button
                onClick={() => setViewMode("image")}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                  viewMode === "image"
                    ? "bg-brand-blue text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                Document Scan
              </button>
              <button
                onClick={() => setViewMode("diploma")}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                  viewMode === "diploma"
                    ? "bg-brand-blue text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                Digital Diploma
              </button>
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="py-6 space-y-6">
          {viewMode === "image" && cert.image ? (
            <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-950 flex items-center justify-center min-h-[350px]">
              <img
                src={cert.image}
                alt={cert.title}
                className="max-h-[550px] w-auto object-contain mx-auto rounded-lg"
              />
            </div>
          ) : (
            /* Digital Diploma Representation */
            <div className="relative p-6 sm:p-10 rounded-2xl border-2 border-dashed border-amber-500/30 bg-gradient-to-b from-amber-50/50 via-white to-amber-50/30 dark:from-amber-500/5 dark:via-slate-900 dark:to-slate-900/80 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
                <Award className="w-8 h-8" />
              </div>
              <span className="text-xs uppercase tracking-widest text-amber-700 dark:text-amber-400/90 font-semibold">
                Official Credential Verification
              </span>
              <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-white mt-1 mb-2">
                {cert.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Conferred to
              </p>
              <h4 className="font-heading text-lg font-semibold text-brand-blue dark:text-brand-cyan mb-4">
                Chamroeun SARAN
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto mb-6 leading-relaxed">
                {cert.description}
              </p>

              {/* Diploma metadata grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200 dark:border-white/10 text-left text-xs">
                <div>
                  <span className="text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                    Credential ID
                  </span>
                  <span className="font-mono text-slate-900 dark:text-slate-200 font-medium">
                    {cert.credentialId}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                    Issued By
                  </span>
                  <span className="text-slate-900 dark:text-slate-200 font-medium">
                    {cert.issuer}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                    Date
                  </span>
                  <span className="text-slate-900 dark:text-slate-200 font-medium">{cert.date}</span>
                </div>
              </div>
            </div>
          )}

          {/* Description & Skills Tags */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-semibold">
              Competencies & Verified Skills
            </h4>
            <div className="flex flex-wrap gap-2">
              {cert.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-brand-blue/10 dark:bg-brand-blue/15 text-brand-blue dark:text-sky-300 border border-brand-blue/20 dark:border-brand-cyan/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-6 border-t border-slate-200 dark:border-white/10">
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <Shield className="w-4 h-4 text-brand-blue dark:text-brand-cyan" />
            <span>Authenticated academic credential archive</span>
          </div>

          <div className="flex items-center gap-3">
            {cert.pdfUrl && (
              <a
                href={cert.pdfUrl}
                download
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-brand-blue hover:bg-blue-600 transition-colors shadow-glow"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Official PDF</span>
              </a>
            )}
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>Print</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
