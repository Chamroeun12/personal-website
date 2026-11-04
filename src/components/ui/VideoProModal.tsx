"use client";

import React from "react";
import { X, CheckCircle2, Zap, Shield, Cpu, ExternalLink } from "lucide-react";

interface VideoProModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VideoProModal({ isOpen, onClose }: VideoProModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-200 dark:border-white/20 p-6 sm:p-8 bg-white dark:bg-[#0b1220]/95 text-slate-900 dark:text-slate-100 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="pb-6 border-b border-slate-200 dark:border-white/10 pr-8">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue dark:text-brand-cyan border border-brand-blue/20 dark:border-brand-cyan/30">
            Case Study & Technical Deep-Dive
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white mt-2">
            Video Pro: Advanced Media Downloader
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            High-throughput desktop utility for lossless video stream acquisition & DASH remuxing.
          </p>
        </div>

        {/* Body */}
        <div className="py-6 space-y-6">
          {/* Mockup image */}
          <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-950 p-2 shadow-sm">
            <img
              src="/assets/images/projects/video_downloader_mockup_1775306873596.png"
              alt="Video Pro Interface"
              className="w-full h-auto rounded-xl"
            />
          </div>

          {/* Metrics Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-center">
              <span className="text-2xl font-bold font-heading text-brand-blue dark:text-brand-cyan">
                4K / 60 FPS
              </span>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                Lossless Stream Resolution
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-center">
              <span className="text-2xl font-bold font-heading text-emerald-600 dark:text-emerald-400">
                5x Faster
              </span>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                Multithreaded Chunk Downloads
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-center">
              <span className="text-2xl font-bold font-heading text-amber-600 dark:text-amber-400">
                100% Free
              </span>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                Ad-Free Open Source Engine
              </p>
            </div>
          </div>

          {/* Architecture & Problem */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-600 dark:text-slate-300">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10">
              <h3 className="font-heading font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <Shield className="w-4 h-4 text-brand-blue dark:text-brand-cyan" /> The Problem
              </h3>
              <p className="leading-relaxed text-slate-600 dark:text-slate-400 text-xs">
                Commercial downloaders are filled with intrusive advertising, tracking scripts, and artificial quality caps (often locking 1080p+ behind subscriptions). Furthermore, many tools fail to combine separated DASH video and audio streams correctly, yielding silent videos.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10">
              <h3 className="font-heading font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-brand-blue dark:text-brand-cyan" /> The Solution & Architecture
              </h3>
              <p className="leading-relaxed text-slate-600 dark:text-slate-400 text-xs">
                Built with Python 3.10 and a modern CustomTkinter GUI. Scraper extraction is orchestrated via an asynchronous yt-dlp core, running inside background worker threads to keep the UI fluid. FFmpeg automatically merges DASH audio and video streams without quality loss.
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-semibold mb-2">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Python 3.10",
                "CustomTkinter",
                "yt-dlp Core",
                "FFmpeg Binaries",
                "Multithreading (ThreadPoolExecutor)",
                "Subprocess Management",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-brand-blue/10 dark:bg-brand-blue/15 text-brand-blue dark:text-sky-300 border border-brand-blue/20 dark:border-brand-cyan/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-6 border-t border-slate-200 dark:border-white/10">
          <a
            href="https://github.com/Chamroeun12"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-brand-blue hover:bg-blue-600 transition-colors shadow-glow"
          >
            <span>View on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
