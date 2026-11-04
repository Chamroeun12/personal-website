"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Copy,
  Check,
  Bot,
  MessageSquare,
  TrendingUp,
  FileCode2,
  Send,
  Zap
} from "lucide-react";

type PromptCategory = "business" | "social" | "seo" | "tech";

export function AiPromptAssistant() {
  const [category, setCategory] = useState<PromptCategory>("business");
  const [businessType, setBusinessType] = useState<string>("Modern Cambodian Restaurant & Cafe in Siem Reap");
  const [targetAudience, setTargetAudience] = useState<string>("Young professionals, expats, and tourists");
  const [tone, setTone] = useState<string>("Welcoming, culturally authentic, and premium");
  const [keyOffer, setKeyOffer] = useState<string>("Handcrafted specialty coffee and traditional Khmer fusion dishes");
  const [copied, setCopied] = useState<boolean>(false);

  const generatePrompt = (): string => {
    switch (category) {
      case "business":
        return `You are an elite Business Strategist and Copywriter helping a client in Cambodia.
Project Context:
- Business: ${businessType}
- Target Customers: ${targetAudience}
- Brand Tone: ${tone}
- Value Proposition: ${keyOffer}

Task:
Please write 3 high-converting outreach messages:
1. A friendly Telegram direct message for prospective local partners and event planners.
2. An engaging welcome email for first-time customers.
3. A short, persuasive business bio suitable for Instagram and Google Business Profile.

Guidelines:
- Keep the language engaging, respectful of Cambodian culture, and crystal clear.
- Use bullet points and clear call-to-actions (e.g. reserving via Telegram or visiting in person).`;

      case "social":
        return `Act as an expert Social Media Growth Marketer for Southeast Asian businesses.
Client Profile:
- Business: ${businessType}
- Key Highlights: ${keyOffer}
- Audience: ${targetAudience}
- Tone: ${tone}

Please produce:
1. 3 viral Facebook / TikTok caption ideas with bilingual-friendly English phrasing, hashtags, and strong hooks.
2. A promotional campaign announcement offering a limited-time incentive.
3. 5 engaging poll or question ideas to drive comments and story interactions.`;

      case "seo":
        return `Act as a Senior SEO Specialist and Web Content Strategist.
Website Details:
- Industry / Focus: ${businessType}
- Core Service / Product: ${keyOffer}
- Target Demographics: ${targetAudience}

Please provide:
1. 5 High-Intent SEO Keywords for Google Search in Cambodia.
2. An optimized Website Meta Title (under 60 characters) and Meta Description (under 155 characters).
3. A compelling Hero Section Headline & Subheadline formula designed to maximize conversion rates.`;

      case "tech":
        return `You are a Senior Software Architect and IT Consultant.
Client Scenario:
- Organization: ${businessType}
- Technical Need: Building and scaling digital infrastructure (${keyOffer})
- Stakeholders: ${targetAudience}

Task:
Provide an actionable 4-phase IT implementation roadmap:
1. Discovery & Requirement Audit
2. Technology Stack Selection & Security Hardening
3. Deployment & Automation Workflow
4. Post-Launch Maintenance & Staff Training Protocol`;

      default:
        return "";
    }
  };

  const finalPrompt = generatePrompt();

  const copyPrompt = () => {
    navigator.clipboard.writeText(finalPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white/90 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-6 lg:p-8 shadow-sm dark:shadow-2xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-200 dark:border-white/10 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-50 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-500/30">
              AI Prompt Studio
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">Works with ChatGPT, Gemini & Claude</span>
          </div>
          <h2 className="text-xl lg:text-2xl font-heading font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Bot className="w-6 h-6 text-brand-blue dark:text-brand-cyan" />
            AI Business & Marketing Prompt Engineer
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Generate battle-tested, structured AI master prompts customized for business growth, marketing campaigns, and technical workflows.
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
        {[
          { id: "business", label: "Client Outreach", icon: MessageSquare },
          { id: "social", label: "Social Media", icon: TrendingUp },
          { id: "seo", label: "SEO & Website Copy", icon: Sparkles },
          { id: "tech", label: "IT & Tech Planning", icon: FileCode2 },
        ].map((c) => {
          const Icon = c.icon;
          const isActive = category === c.id;
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => setCategory(c.id as PromptCategory)}
              className={`p-3 rounded-2xl border flex items-center gap-2 text-xs font-semibold transition-all ${
                isActive
                  ? "bg-amber-50 dark:bg-amber-500/20 border-amber-400 text-amber-900 dark:text-white shadow-sm dark:shadow-lg dark:shadow-amber-500/20"
                  : "bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100"
              }`}
            >
              <Icon className="w-4 h-4 text-amber-500 dark:text-amber-400" />
              <span>{c.label}</span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Controls */}
        <div className="lg:col-span-6 space-y-4 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-5">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
              Business / Project Type
            </label>
            <input
              type="text"
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-black/40 border border-slate-200 dark:border-white/15 text-slate-900 dark:text-white text-sm"
              placeholder="e.g. Boutique Hotel, IT Consulting, Coffee Shop"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
              Core Offering / Product
            </label>
            <input
              type="text"
              value={keyOffer}
              onChange={(e) => setKeyOffer(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-black/40 border border-slate-200 dark:border-white/15 text-slate-900 dark:text-white text-sm"
              placeholder="e.g. Custom web application and SEO services"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                Target Audience
              </label>
              <input
                type="text"
                value={targetAudience}
                onChange={(e) => setTargetAudience(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-white dark:bg-black/40 border border-slate-200 dark:border-white/15 text-slate-900 dark:text-white text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                Desired Tone
              </label>
              <input
                type="text"
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-white dark:bg-black/40 border border-slate-200 dark:border-white/15 text-slate-900 dark:text-white text-sm"
              />
            </div>
          </div>
        </div>

        {/* Generated Prompt Box */}
        <div className="lg:col-span-6 flex flex-col justify-between bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-2xl p-5 space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span className="font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-300 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" />
                Ready-to-Use Master Prompt
              </span>
              <span>Copy and paste into ChatGPT or Gemini</span>
            </div>

            <pre className="p-3.5 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-xs font-mono text-slate-800 dark:text-slate-200 whitespace-pre-wrap max-h-[260px] overflow-y-auto leading-relaxed shadow-sm">
              {finalPrompt}
            </pre>
          </div>

          <button
            onClick={copyPrompt}
            className={`w-full py-3 px-4 rounded-xl text-xs font-heading font-bold flex items-center justify-center gap-2 transition-all ${
              copied
                ? "bg-emerald-600 text-white"
                : "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-md shadow-amber-500/20"
            }`}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                <span>Prompt Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Master Prompt</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
