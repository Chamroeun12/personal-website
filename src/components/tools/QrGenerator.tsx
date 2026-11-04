"use client";

import React, { useState, useEffect, useRef } from "react";
import QRCode from "qrcode";
import {
  QrCode as QrIcon,
  Download,
  Copy,
  Check,
  Palette,
  Wifi,
  Globe,
  Mail,
  FileText,
  Sparkles,
  Layers,
  Send
} from "lucide-react";

type QrInputType = "url" | "text" | "wifi" | "email" | "telegram";

interface QrGeneratorProps {
  initialText?: string;
}

export function QrGenerator({ initialText }: QrGeneratorProps) {
  const [inputType, setInputType] = useState<QrInputType>("url");
  const [copied, setCopied] = useState<boolean>(false);

  // Input states
  const [urlInput, setUrlInput] = useState<string>(
    initialText || "https://chamroeun12.github.io/portfolio/"
  );
  const [textInput, setTextInput] = useState<string>("Chamroeun SARAN - Frontend Developer & IT Specialist");
  const [wifiSsid, setWifiSsid] = useState<string>("MyCoffeeShop_WiFi");
  const [wifiPassword, setWifiPassword] = useState<string>("SecurePassword123");
  const [wifiEncryption, setWifiEncryption] = useState<string>("WPA");
  const [emailTo, setEmailTo] = useState<string>("saranchamroeun@gmail.com");
  const [emailSubject, setEmailSubject] = useState<string>("Project Inquiry");
  const [emailBody, setEmailBody] = useState<string>("Hello Chamroeun, I would like to get in touch.");
  const [tgHandle, setTgHandle] = useState<string>("SARANChamroeun");

  // Styling
  const [fgColor, setFgColor] = useState<string>("#0f172a");
  const [bgColor, setBgColor] = useState<string>("#ffffff");
  const [errorLevel, setErrorLevel] = useState<"L" | "M" | "Q" | "H">("M");
  const [resolution, setResolution] = useState<number>(512);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Sync if initialText changes from LinkGenerator
  useEffect(() => {
    if (initialText) {
      setUrlInput(initialText);
      setInputType("url");
    }
  }, [initialText]);

  // Compute raw string payload for the QR code
  const getRawQrValue = (): string => {
    switch (inputType) {
      case "url": {
        let u = urlInput.trim();
        if (!u) return "https://chamroeun12.github.io/portfolio/";
        if (!u.startsWith("http://") && !u.startsWith("https://")) {
          u = `https://${u}`;
        }
        return u;
      }
      case "text":
        return textInput.trim() || "Chamroeun SARAN";
      case "wifi":
        return `WIFI:S:${wifiSsid.trim()};T:${wifiEncryption};P:${wifiPassword};;`;
      case "email":
        return `mailto:${emailTo.trim()}?subject=${encodeURIComponent(
          emailSubject.trim()
        )}&body=${encodeURIComponent(emailBody.trim())}`;
      case "telegram": {
        const clean = tgHandle.trim().replace(/^@/, "");
        return `https://t.me/${clean}`;
      }
      default:
        return "https://chamroeun12.github.io/portfolio/";
    }
  };

  const qrValue = getRawQrValue();

  // Render QR Code to Canvas whenever options change
  useEffect(() => {
    if (!canvasRef.current) return;

    QRCode.toCanvas(
      canvasRef.current,
      qrValue,
      {
        width: 320,
        margin: 2,
        color: {
          dark: fgColor,
          light: bgColor,
        },
        errorCorrectionLevel: errorLevel,
      },
      (err) => {
        if (err) console.error("QR Code Generation Error:", err);
      }
    );
  }, [qrValue, fgColor, bgColor, errorLevel]);

  // High-res PNG Download
  const downloadPng = async () => {
    try {
      const dataUrl = await QRCode.toDataURL(qrValue, {
        width: resolution,
        margin: 2,
        color: {
          dark: fgColor,
          light: bgColor,
        },
        errorCorrectionLevel: errorLevel,
      });

      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = `qr-code-${inputType}-${Date.now()}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (e) {
      console.error(e);
    }
  };

  // Vector SVG Download
  const downloadSvg = async () => {
    try {
      const svgString = await QRCode.toString(qrValue, {
        type: "svg",
        margin: 2,
        color: {
          dark: fgColor,
          light: bgColor,
        },
        errorCorrectionLevel: errorLevel,
      });

      const blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `qr-code-${inputType}-${Date.now()}.svg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (e) {
      console.error(e);
    }
  };

  const copyQrValue = () => {
    navigator.clipboard.writeText(qrValue);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const COLOR_PRESETS = [
    { label: "Dark Slate", hex: "#0f172a" },
    { label: "Royal Blue", hex: "#2563eb" },
    { label: "Ocean Cyan", hex: "#0284c7" },
    { label: "Emerald", hex: "#059669" },
    { label: "Violet", hex: "#7c3aed" },
    { label: "Crimson", hex: "#dc2626" },
  ];

  return (
    <div className="bg-white/90 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-6 lg:p-8 shadow-sm dark:shadow-2xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-200 dark:border-white/10 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-indigo-50 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30">
              High-Resolution Vector & PNG
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">Zero Watermark • Instant Download</span>
          </div>
          <h2 className="text-xl lg:text-2xl font-heading font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <QrIcon className="w-6 h-6 text-brand-blue dark:text-brand-cyan" />
            Custom QR Code Generator
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Generate custom branded QR codes for websites, WiFi networks, Telegram channels, and contact details with print-ready vector SVGs.
          </p>
        </div>
      </div>

      {/* Input Type Selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {[
          { id: "url", label: "Website URL", icon: Globe },
          { id: "telegram", label: "Telegram", icon: Send },
          { id: "wifi", label: "Wi-Fi Network", icon: Wifi },
          { id: "text", label: "Plain Text", icon: FileText },
          { id: "email", label: "Email Link", icon: Mail },
        ].map((t) => {
          const Icon = t.icon;
          const isActive = inputType === t.id;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setInputType(t.id as QrInputType)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
                isActive
                  ? "bg-brand-blue text-white shadow-glow"
                  : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{t.label}</span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Form & Customization */}
        <div className="lg:col-span-7 space-y-6">
          {/* Dynamic Content Inputs */}
          <div className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-5 space-y-4">
            {inputType === "url" && (
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  Target Website URL
                </label>
                <input
                  type="url"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  placeholder="https://example.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-black/40 border border-slate-200 dark:border-white/15 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-brand-blue dark:focus:border-brand-cyan text-sm font-mono"
                />
              </div>
            )}

            {inputType === "telegram" && (
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
                    value={tgHandle}
                    onChange={(e) => setTgHandle(e.target.value)}
                    placeholder="SARANChamroeun"
                    className="w-full pl-8 pr-4 py-2.5 rounded-xl bg-white dark:bg-black/40 border border-slate-200 dark:border-white/15 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-brand-blue dark:focus:border-brand-cyan text-sm font-mono"
                  />
                </div>
              </div>
            )}

            {inputType === "wifi" && (
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Wi-Fi Network Name (SSID)
                  </label>
                  <input
                    type="text"
                    value={wifiSsid}
                    onChange={(e) => setWifiSsid(e.target.value)}
                    placeholder="e.g. MyCoffeeShop_Guest"
                    className="w-full px-4 py-2 rounded-xl bg-white dark:bg-black/40 border border-slate-200 dark:border-white/15 text-slate-900 dark:text-white text-sm"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Password
                    </label>
                    <input
                      type="text"
                      value={wifiPassword}
                      onChange={(e) => setWifiPassword(e.target.value)}
                      placeholder="Password"
                      className="w-full px-4 py-2 rounded-xl bg-white dark:bg-black/40 border border-slate-200 dark:border-white/15 text-slate-900 dark:text-white text-sm font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Security Type
                    </label>
                    <select
                      value={wifiEncryption}
                      onChange={(e) => setWifiEncryption(e.target.value)}
                      className="w-full px-4 py-2 rounded-xl bg-white dark:bg-black/40 border border-slate-200 dark:border-white/15 text-slate-900 dark:text-white text-sm"
                    >
                      <option value="WPA">WPA / WPA2 / WPA3</option>
                      <option value="WEP">WEP</option>
                      <option value="nopass">None (Open)</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {inputType === "text" && (
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  Plain Text Content
                </label>
                <textarea
                  rows={3}
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-black/40 border border-slate-200 dark:border-white/15 text-slate-900 dark:text-white text-sm"
                />
              </div>
            )}

            {inputType === "email" && (
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Recipient Email
                  </label>
                  <input
                    type="email"
                    value={emailTo}
                    onChange={(e) => setEmailTo(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl bg-white dark:bg-black/40 border border-slate-200 dark:border-white/15 text-slate-900 dark:text-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Subject Line
                  </label>
                  <input
                    type="text"
                    value={emailSubject}
                    onChange={(e) => setEmailSubject(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl bg-white dark:bg-black/40 border border-slate-200 dark:border-white/15 text-slate-900 dark:text-white text-sm"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Color & Styling Controls */}
          <div className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-5 space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2.5 flex items-center gap-1.5">
                <Palette className="w-3.5 h-3.5 text-brand-blue dark:text-brand-cyan" />
                Color Customization
              </label>

              <div className="flex flex-wrap items-center gap-2 mb-3">
                {COLOR_PRESETS.map((color) => (
                  <button
                    key={color.hex}
                    type="button"
                    onClick={() => setFgColor(color.hex)}
                    style={{ backgroundColor: color.hex }}
                    className={`w-7 h-7 rounded-full border-2 transition-transform ${
                      fgColor === color.hex ? "scale-125 border-brand-blue shadow-md" : "border-slate-300 dark:border-white/20"
                    }`}
                    title={color.label}
                  />
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div>
                  <span className="block text-[11px] text-slate-500 dark:text-slate-400 mb-1">Foreground (QR)</span>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={fgColor}
                      onChange={(e) => setFgColor(e.target.value)}
                      className="w-8 h-8 rounded cursor-pointer bg-transparent border-0"
                    />
                    <input
                      type="text"
                      value={fgColor}
                      onChange={(e) => setFgColor(e.target.value)}
                      className="w-full px-2.5 py-1 rounded bg-white dark:bg-black/40 border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-900 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <span className="block text-[11px] text-slate-500 dark:text-slate-400 mb-1">Background</span>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={bgColor}
                      onChange={(e) => setBgColor(e.target.value)}
                      className="w-8 h-8 rounded cursor-pointer bg-transparent border-0"
                    />
                    <input
                      type="text"
                      value={bgColor}
                      onChange={(e) => setBgColor(e.target.value)}
                      className="w-full px-2.5 py-1 rounded bg-white dark:bg-black/40 border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-900 dark:text-white"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Error Correction & Resolution */}
            <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-200 dark:border-white/10">
              <div>
                <label className="block text-[11px] text-slate-500 dark:text-slate-400 mb-1">
                  Error Correction Level
                </label>
                <select
                  value={errorLevel}
                  onChange={(e) => setErrorLevel(e.target.value as any)}
                  className="w-full px-3 py-1.5 rounded-lg bg-white dark:bg-black/40 border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white"
                >
                  <option value="L">L - 7% (Smallest)</option>
                  <option value="M">M - 15% (Standard)</option>
                  <option value="Q">Q - 25% (High Quality)</option>
                  <option value="H">H - 30% (Best for Printing)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] text-slate-500 dark:text-slate-400 mb-1">Export Resolution</label>
                <select
                  value={resolution}
                  onChange={(e) => setResolution(Number(e.target.value))}
                  className="w-full px-3 py-1.5 rounded-lg bg-white dark:bg-black/40 border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white"
                >
                  <option value={256}>256 × 256 px (Web)</option>
                  <option value={512}>512 × 512 px (HD)</option>
                  <option value={1024}>1024 × 1024 px (Print & Flyers)</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Live QR Code Preview & Download */}
        <div className="lg:col-span-5 flex flex-col items-center justify-between bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-2xl p-6 shadow-sm">
          <div className="text-center w-full space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-brand-blue dark:text-brand-cyan" />
              Live Interactive Preview
            </div>

            <div
              className="p-4 rounded-2xl mx-auto shadow-xl inline-block transition-all duration-300 border border-slate-200 dark:border-transparent"
              style={{ backgroundColor: bgColor }}
            >
              <canvas ref={canvasRef} className="max-w-[240px] max-h-[240px] rounded-lg" />
            </div>

            <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-2.5 text-[11px] font-mono text-slate-700 dark:text-slate-300 truncate max-w-full shadow-sm">
              {qrValue}
            </div>
          </div>

          {/* Download Buttons */}
          <div className="w-full space-y-2.5 pt-6">
            <button
              onClick={downloadPng}
              className="w-full py-3 px-4 rounded-xl font-heading font-bold text-xs text-white bg-gradient-to-r from-brand-blue to-indigo-600 hover:from-blue-600 hover:to-indigo-500 shadow-glow transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download PNG ({resolution}px)</span>
            </button>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={downloadSvg}
                className="py-2.5 px-3 rounded-xl text-xs font-semibold bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10 flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                title="Lossless vector for Adobe Illustrator, Canva, or large printing"
              >
                <Layers className="w-3.5 h-3.5 text-brand-blue dark:text-brand-cyan" />
                <span>Vector SVG</span>
              </button>

              <button
                onClick={copyQrValue}
                className="py-2.5 px-3 rounded-xl text-xs font-semibold bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10 flex items-center justify-center gap-1.5 transition-colors shadow-sm"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Text</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
