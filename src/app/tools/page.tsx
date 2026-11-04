"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Wrench,
  Image as ImageIcon,
  Link2,
  QrCode,
  Bot,
  ShieldCheck,
  Zap,
  Sparkles,
  ArrowRight,
  Code2
} from "lucide-react";
import { ImageConverter } from "@/components/tools/ImageConverter";
import { LinkGenerator } from "@/components/tools/LinkGenerator";
import { QrGenerator } from "@/components/tools/QrGenerator";
import { AiPromptAssistant } from "@/components/tools/AiPromptAssistant";

type ToolTab = "image-converter" | "link-generator" | "qr-generator" | "ai-prompts";

export default function ToolsPage() {
  const [activeTab, setActiveTab] = useState<ToolTab>("image-converter");
  const [sharedQrUrl, setSharedQrUrl] = useState<string>("");

  // Sync tab with URL hash if present
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "") as ToolTab;
      if (
        hash === "image-converter" ||
        hash === "link-generator" ||
        hash === "qr-generator" ||
        hash === "ai-prompts"
      ) {
        setActiveTab(hash);
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const handleTabChange = (tab: ToolTab) => {
    setActiveTab(tab);
    window.location.hash = tab;
  };

  const handleSendLinkToQr = (url: string) => {
    setSharedQrUrl(url);
    handleTabChange("qr-generator");
  };

  const TABS = [
    {
      id: "image-converter" as ToolTab,
      label: "Image Converter",
      badge: "Fast & WebP",
      icon: ImageIcon,
      description: "Convert photos to WebP, PNG, or JPG with instant size reduction.",
    },
    {
      id: "link-generator" as ToolTab,
      label: "Link Generator",
      badge: "Telegram & WA",
      icon: Link2,
      description: "Generate direct click-to-chat links with pre-filled messages & UTM tags.",
    },
    {
      id: "qr-generator" as ToolTab,
      label: "QR Code Generator",
      badge: "Vector SVG & PNG",
      icon: QrCode,
      description: "Custom branded QR codes for URLs, WiFi networks, and contacts.",
    },
    {
      id: "ai-prompts" as ToolTab,
      label: "AI Prompt Studio",
      badge: "ChatGPT & Gemini",
      icon: Bot,
      description: "Structured prompt formulas for marketing, outreach, and technical workflows.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b1220] text-slate-800 dark:text-slate-100 pt-28 pb-20 transition-colors duration-300">
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-brand-blue/15 via-brand-cyan/15 to-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/10 dark:bg-brand-blue/15 border border-brand-blue/20 dark:border-brand-blue/30 text-xs font-semibold text-brand-blue dark:text-brand-cyan">
            <Wrench className="w-3.5 h-3.5" />
            <span>Free Client-Side Digital Utilities</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight text-slate-900 dark:text-white">
            Free Digital & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-sky-500 to-indigo-600 dark:from-brand-blue dark:via-brand-cyan dark:to-indigo-400">AI-Powered</span> Tools
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            High-performance, privacy-first web utilities built by Chamroeun SARAN.
            Convert images, build click-to-chat links, generate custom QR codes, and create AI prompts — completely free with no server uploads.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4" /> 100% Private (Browser-Processed)
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-brand-blue dark:text-brand-cyan font-medium">
              <Zap className="w-4 h-4" /> Zero Waiting Time
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-medium">
              <Sparkles className="w-4 h-4" /> Forever Free
            </span>
          </div>
        </div>

        {/* Tab Selection Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleTabChange(tab.id)}
                className={`p-4 rounded-2xl border text-left transition-all duration-200 relative group overflow-hidden ${
                  isActive
                    ? "bg-white dark:bg-gradient-to-br dark:from-brand-blue/20 dark:to-indigo-600/20 border-brand-blue dark:border-brand-cyan shadow-md dark:shadow-glow ring-2 ring-brand-blue/20 dark:ring-0"
                    : "bg-white/80 dark:bg-white/5 border-slate-200 dark:border-white/10 hover:bg-white dark:hover:bg-white/[0.08] hover:border-slate-300 dark:hover:border-white/20 shadow-sm dark:shadow-none"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                      isActive
                        ? "bg-brand-blue text-white"
                        : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                      isActive
                        ? "bg-brand-blue/10 dark:bg-brand-cyan/20 text-brand-blue dark:text-brand-cyan border-brand-blue/30 dark:border-brand-cyan/40"
                        : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/10"
                    }`}
                  >
                    {tab.badge}
                  </span>
                </div>

                <div className="font-heading font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                  {tab.label}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                  {tab.description}
                </div>

                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-blue to-indigo-600 dark:to-brand-cyan" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Tool Body */}
        <div className="transition-all duration-300">
          {activeTab === "image-converter" && <ImageConverter />}
          {activeTab === "link-generator" && (
            <LinkGenerator onSendToQr={handleSendLinkToQr} />
          )}
          {activeTab === "qr-generator" && (
            <QrGenerator initialText={sharedQrUrl} />
          )}
          {activeTab === "ai-prompts" && <AiPromptAssistant />}
        </div>

        {/* Bottom Agency Upsell Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-blue-50 via-indigo-50/50 to-sky-50 dark:from-brand-blue/20 dark:via-indigo-950/40 dark:to-slate-900 border border-blue-200 dark:border-brand-blue/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm dark:shadow-none">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue dark:text-brand-cyan uppercase tracking-wider">
              <Code2 className="w-4 h-4" /> Custom Software & Web Solutions
            </div>
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 dark:text-white">
              Need a Custom Web App or Business System?
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xl">
              From online menus and custom booking engines to AI-integrated business workflows, Chamroeun SARAN delivers tailored software solutions across Cambodia.
            </p>
          </div>

          <Link
            href="/contact?quote=true"
            className="shrink-0 px-6 py-3.5 rounded-xl font-heading font-bold text-sm text-white bg-gradient-to-r from-brand-blue to-indigo-600 dark:to-brand-cyan hover:opacity-95 shadow-glow transition-all flex items-center gap-2 hover:scale-105"
          >
            <span>Request a Custom Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
