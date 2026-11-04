"use client";

import React, { useState } from "react";
import {
  Link2,
  Copy,
  Check,
  ExternalLink,
  QrCode,
  Send,
  MessageCircle,
  BarChart3,
  Sparkles,
  Info
} from "lucide-react";

type LinkType = "telegram" | "whatsapp" | "utm";

interface LinkGeneratorProps {
  onSendToQr?: (url: string) => void;
}

export function LinkGenerator({ onSendToQr }: LinkGeneratorProps) {
  const [activeType, setActiveType] = useState<LinkType>("telegram");
  const [copied, setCopied] = useState<boolean>(false);

  // Telegram state
  const [tgUsername, setTgUsername] = useState<string>("SARANChamroeun");
  const [tgMessage, setTgMessage] = useState<string>(
    "Hello Chamroeun! I saw your portfolio and would like to discuss a project."
  );

  // WhatsApp state
  const [waCountryCode, setWaCountryCode] = useState<string>("855");
  const [waPhone, setWaPhone] = useState<string>("967876525");
  const [waMessage, setWaMessage] = useState<string>(
    "Hi Chamroeun, I would like to get a quote for a website."
  );

  // UTM builder state
  const [utmUrl, setUtmUrl] = useState<string>("https://chamroeun12.github.io/portfolio/");
  const [utmSource, setUtmSource] = useState<string>("telegram");
  const [utmMedium, setUtmMedium] = useState<string>("social");
  const [utmCampaign, setUtmCampaign] = useState<string>("free_tools_launch");
  const [utmContent, setUtmContent] = useState<string>("menu_cta");

  // Computed Link
  const getGeneratedLink = (): string => {
    if (activeType === "telegram") {
      const cleanUser = tgUsername.trim().replace(/^@/, "");
      if (!cleanUser) return "";
      const query = tgMessage.trim() ? `?text=${encodeURIComponent(tgMessage.trim())}` : "";
      return `https://t.me/${cleanUser}${query}`;
    }

    if (activeType === "whatsapp") {
      const cleanDigits = (waCountryCode + waPhone).replace(/\D/g, "");
      if (!cleanDigits) return "";
      const query = waMessage.trim() ? `?text=${encodeURIComponent(waMessage.trim())}` : "";
      return `https://wa.me/${cleanDigits}${query}`;
    }

    if (activeType === "utm") {
      try {
        let base = utmUrl.trim();
        if (!base) return "";
        if (!base.startsWith("http://") && !base.startsWith("https://")) {
          base = `https://${base}`;
        }
        const urlObj = new URL(base);
        if (utmSource.trim()) urlObj.searchParams.set("utm_source", utmSource.trim());
        if (utmMedium.trim()) urlObj.searchParams.set("utm_medium", utmMedium.trim());
        if (utmCampaign.trim()) urlObj.searchParams.set("utm_campaign", utmCampaign.trim());
        if (utmContent.trim()) urlObj.searchParams.set("utm_content", utmContent.trim());
        return urlObj.toString();
      } catch {
        return utmUrl;
      }
    }

    return "";
  };

  const finalLink = getGeneratedLink();

  const copyToClipboard = () => {
    if (!finalLink) return;
    navigator.clipboard.writeText(finalLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="bg-white/90 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-6 lg:p-8 shadow-sm dark:shadow-2xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-200 dark:border-white/10 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue dark:text-brand-cyan border border-brand-blue/20 dark:border-brand-blue/30">
              Smart Link Utilities
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">Zero Redirects • 100% Clean</span>
          </div>
          <h2 className="text-xl lg:text-2xl font-heading font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Link2 className="w-6 h-6 text-brand-blue dark:text-brand-cyan" />
            Smart Click-to-Chat & Campaign Link Generator
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Create direct Telegram & WhatsApp chat links with pre-filled messages, or generate UTM tracking links for marketing.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        <button
          type="button"
          onClick={() => setActiveType("telegram")}
          className={`p-3.5 rounded-2xl border flex items-center gap-3 transition-all ${
            activeType === "telegram"
              ? "bg-sky-50 dark:bg-brand-blue/20 border-sky-500 dark:border-brand-cyan text-sky-800 dark:text-white shadow-sm dark:shadow-glow"
              : "bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100"
          }`}
        >
          <div className="w-9 h-9 rounded-lg bg-sky-500/15 text-sky-600 dark:text-sky-400 flex items-center justify-center">
            <Send className="w-4 h-4" />
          </div>
          <div className="text-left">
            <div className="font-heading font-bold text-sm text-slate-900 dark:text-white">Telegram Link</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">Direct Chat & Text</div>
          </div>
        </button>

        <button
          type="button"
          onClick={() => setActiveType("whatsapp")}
          className={`p-3.5 rounded-2xl border flex items-center gap-3 transition-all ${
            activeType === "whatsapp"
              ? "bg-emerald-50 dark:bg-emerald-500/20 border-emerald-500 dark:border-emerald-400 text-emerald-800 dark:text-white shadow-sm"
              : "bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100"
          }`}
        >
          <div className="w-9 h-9 rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <MessageCircle className="w-4 h-4" />
          </div>
          <div className="text-left">
            <div className="font-heading font-bold text-sm text-slate-900 dark:text-white">WhatsApp Link</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">Click to WhatsApp</div>
          </div>
        </button>

        <button
          type="button"
          onClick={() => setActiveType("utm")}
          className={`p-3.5 rounded-2xl border flex items-center gap-3 transition-all ${
            activeType === "utm"
              ? "bg-indigo-50 dark:bg-indigo-500/20 border-indigo-500 dark:border-indigo-400 text-indigo-800 dark:text-white shadow-sm"
              : "bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100"
          }`}
        >
          <div className="w-9 h-9 rounded-lg bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
            <BarChart3 className="w-4 h-4" />
          </div>
          <div className="text-left">
            <div className="font-heading font-bold text-sm text-slate-900 dark:text-white">UTM Campaign URL</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">Marketing Analytics</div>
          </div>
        </button>
      </div>

      {/* Form Inputs based on active tab */}
      <div className="space-y-4">
        {activeType === "telegram" && (
          <div className="space-y-4 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                Telegram Username or Channel
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 font-mono text-sm">
                  @
                </span>
                <input
                  type="text"
                  value={tgUsername}
                  onChange={(e) => setTgUsername(e.target.value)}
                  placeholder="SARANChamroeun"
                  className="w-full pl-8 pr-4 py-2.5 rounded-xl bg-white dark:bg-black/40 border border-slate-200 dark:border-white/15 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-brand-blue dark:focus:border-brand-cyan text-sm font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                Pre-filled Message (Optional)
              </label>
              <textarea
                rows={3}
                value={tgMessage}
                onChange={(e) => setTgMessage(e.target.value)}
                placeholder="Hi Chamroeun, I would like to consult on a web development project..."
                className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-black/40 border border-slate-200 dark:border-white/15 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-brand-blue dark:focus:border-brand-cyan text-sm"
              />
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                When someone clicks this link, Telegram will open with this message ready to send!
              </p>
            </div>
          </div>
        )}

        {activeType === "whatsapp" && (
          <div className="space-y-4 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-5">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              <div className="sm:col-span-1">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  Country Code
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400 text-sm">
                    +
                  </span>
                  <input
                    type="text"
                    value={waCountryCode}
                    onChange={(e) => setWaCountryCode(e.target.value)}
                    placeholder="855"
                    className="w-full pl-7 pr-3 py-2.5 rounded-xl bg-white dark:bg-black/40 border border-slate-200 dark:border-white/15 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 text-sm font-mono"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  Phone Number (without leading zero)
                </label>
                <input
                  type="text"
                  value={waPhone}
                  onChange={(e) => setWaPhone(e.target.value)}
                  placeholder="967876525"
                  className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-black/40 border border-slate-200 dark:border-white/15 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 text-sm font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                Pre-filled Message (Optional)
              </label>
              <textarea
                rows={3}
                value={waMessage}
                onChange={(e) => setWaMessage(e.target.value)}
                placeholder="Hello Chamroeun, I would like to get a quote for a website..."
                className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-black/40 border border-slate-200 dark:border-white/15 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 text-sm"
              />
            </div>
          </div>
        )}

        {activeType === "utm" && (
          <div className="space-y-4 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                Destination Website URL
              </label>
              <input
                type="url"
                value={utmUrl}
                onChange={(e) => setUtmUrl(e.target.value)}
                placeholder="https://chamroeunsaran.com/services"
                className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-black/40 border border-slate-200 dark:border-white/15 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 text-sm font-mono"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  utm_source (e.g. facebook, telegram)
                </label>
                <input
                  type="text"
                  value={utmSource}
                  onChange={(e) => setUtmSource(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl bg-white dark:bg-black/40 border border-slate-200 dark:border-white/15 text-slate-900 dark:text-white placeholder-slate-400 text-sm font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  utm_medium (e.g. cpc, social, post)
                </label>
                <input
                  type="text"
                  value={utmMedium}
                  onChange={(e) => setUtmMedium(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl bg-white dark:bg-black/40 border border-slate-200 dark:border-white/15 text-slate-900 dark:text-white placeholder-slate-400 text-sm font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  utm_campaign (e.g. summer_promo)
                </label>
                <input
                  type="text"
                  value={utmCampaign}
                  onChange={(e) => setUtmCampaign(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl bg-white dark:bg-black/40 border border-slate-200 dark:border-white/15 text-slate-900 dark:text-white placeholder-slate-400 text-sm font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  utm_content (e.g. header_banner)
                </label>
                <input
                  type="text"
                  value={utmContent}
                  onChange={(e) => setUtmContent(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl bg-white dark:bg-black/40 border border-slate-200 dark:border-white/15 text-slate-900 dark:text-white placeholder-slate-400 text-sm font-mono"
                />
              </div>
            </div>
          </div>
        )}

        {/* Output Link Box */}
        <div className="bg-slate-100 dark:bg-black/50 border border-slate-200 dark:border-white/15 rounded-2xl p-4 lg:p-5 space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span className="font-semibold uppercase tracking-wider text-brand-blue dark:text-brand-cyan flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Generated Smart Link
            </span>
            <span>Ready to share</span>
          </div>

          <div className="p-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl font-mono text-xs text-slate-900 dark:text-slate-200 break-all select-all shadow-sm">
            {finalLink || "Fill out the fields above to generate your link."}
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-1">
            <button
              onClick={copyToClipboard}
              disabled={!finalLink}
              className={`flex-1 min-w-[140px] py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                copied
                  ? "bg-emerald-600 text-white"
                  : "bg-brand-blue hover:bg-blue-600 text-white shadow-glow"
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Link</span>
                </>
              )}
            </button>

            {finalLink && (
              <a
                href={finalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 rounded-xl text-xs font-semibold bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10 flex items-center gap-1.5 transition-colors shadow-sm"
              >
                <span>Test Link</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {onSendToQr && finalLink && (
              <button
                type="button"
                onClick={() => onSendToQr(finalLink)}
                className="py-2.5 px-4 rounded-xl text-xs font-semibold bg-indigo-50 dark:bg-indigo-600/30 hover:bg-indigo-100 dark:hover:bg-indigo-600 text-indigo-700 dark:text-indigo-300 dark:hover:text-white border border-indigo-200 dark:border-indigo-500/40 flex items-center gap-1.5 transition-colors"
              >
                <QrCode className="w-3.5 h-3.5" />
                <span>Create QR Code</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
