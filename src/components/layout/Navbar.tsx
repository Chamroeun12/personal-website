"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Wrench,
  Image as ImageIcon,
  Link2,
  QrCode,
  Bot,
  Sparkles
} from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Certificates", href: "/certificates" },
  { name: "Tools", href: "/tools", hasDropdown: true },
  { name: "Resources", href: "/resources" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const TOOL_ITEMS = [
  {
    name: "Image Converter & Optimizer",
    desc: "Convert photos to WebP, PNG, or JPG with up to 90% size reduction.",
    href: "/tools#image-converter",
    icon: ImageIcon,
    badge: "Fast & WebP",
    color: "text-brand-cyan bg-brand-cyan/10 border-brand-cyan/20",
  },
  {
    name: "Smart Link Generator",
    desc: "Direct Telegram & WhatsApp chat links with pre-filled messages & UTM tags.",
    href: "/tools#link-generator",
    icon: Link2,
    badge: "Telegram & WA",
    color: "text-sky-500 bg-sky-500/10 border-sky-500/20",
  },
  {
    name: "Custom QR Code Generator",
    desc: "Branded vector SVG & high-res PNG QR codes for URLs, WiFi & contacts.",
    href: "/tools#qr-generator",
    icon: QrCode,
    badge: "Vector SVG",
    color: "text-indigo-500 bg-indigo-500/10 border-indigo-500/20",
  },
  {
    name: "AI Prompt Studio",
    desc: "Pre-engineered AI prompts for Cambodian business outreach & marketing.",
    href: "/tools#ai-prompts",
    icon: Bot,
    badge: "ChatGPT & Gemini",
    color: "text-amber-500 bg-amber-500/10 border-amber-500/20",
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
    setToolsOpen(false);
  }, [pathname]);

  // Handle outside click for tools dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setToolsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 dark:bg-[#0b1220]/85 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 shadow-md py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo with Initials & Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue via-brand-cyan to-indigo-600 p-[1.5px] shadow-glow group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-slate-900 dark:bg-[#0b1220] rounded-[10px] flex items-center justify-center font-heading font-black text-sm tracking-wider text-white">
                CS
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-base tracking-wide text-slate-900 dark:text-white group-hover:text-brand-blue dark:group-hover:text-brand-cyan transition-colors">
                CHAMROEUN <span className="text-brand-blue dark:text-brand-cyan">SARAN</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400 font-medium">
                Digital Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 bg-white/85 dark:bg-white/5 shadow-sm dark:shadow-none backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10">
            {NAV_LINKS.map((link) => {
              const isTools = link.name === "Tools";
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              if (isTools) {
                return (
                  <div
                    key={link.name}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setToolsOpen(true)}
                    onMouseLeave={() => setToolsOpen(false)}
                  >
                    <Link
                      href="/tools"
                      onClick={() => setToolsOpen(false)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                        isActive || toolsOpen
                          ? "bg-brand-blue text-white shadow-glow"
                          : "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10"
                      }`}
                    >
                      <Wrench className="w-3.5 h-3.5 text-brand-blue dark:text-brand-cyan" />
                      <span>Tools</span>
                      <span className="text-[9px] uppercase px-1.5 py-0.2 rounded-full bg-brand-blue/10 dark:bg-brand-cyan/20 text-brand-blue dark:text-brand-cyan font-bold border border-brand-blue/20 dark:border-brand-cyan/30">
                        Free AI
                      </span>
                      <ChevronDown
                        className={`w-3 h-3 transition-transform duration-200 ${
                          toolsOpen ? "rotate-180" : ""
                        }`}
                      />
                    </Link>

                    {/* Tools Dropdown Menu */}
                    {toolsOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[340px] rounded-2xl bg-white dark:bg-[#0b1220]/95 backdrop-blur-xl border border-slate-200 dark:border-white/15 p-3 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="px-3 py-2 border-b border-slate-100 dark:border-white/10 mb-2 flex items-center justify-between">
                          <span className="text-xs font-heading font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-brand-blue dark:text-brand-cyan" />
                            Free Client-Side Tools
                          </span>
                          <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
                            100% Private
                          </span>
                        </div>

                        <div className="space-y-1">
                          {TOOL_ITEMS.map((tool) => {
                            const Icon = tool.icon;
                            return (
                              <Link
                                key={tool.name}
                                href={tool.href}
                                onClick={() => setToolsOpen(false)}
                                className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group"
                              >
                                <div
                                  className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${tool.color} group-hover:scale-105 transition-transform`}
                                >
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between">
                                    <span className="text-xs font-semibold text-slate-800 dark:text-white group-hover:text-brand-blue dark:group-hover:text-brand-cyan transition-colors">
                                      {tool.name}
                                    </span>
                                  </div>
                                  <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                                    {tool.desc}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>

                        <div className="pt-2 mt-2 border-t border-slate-100 dark:border-white/10">
                          <Link
                            href="/tools"
                            onClick={() => setToolsOpen(false)}
                            className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-brand-blue dark:text-brand-cyan hover:bg-brand-blue/10 transition-colors"
                          >
                            <span>Open All Free Tools Hub</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                    isActive
                      ? "bg-brand-blue text-white shadow-glow"
                      : "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Actions: Theme Toggle, Get Quote (Resume removed from menu bar) */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />

            <Link
              href="/contact?quote=true"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-brand-blue to-indigo-600 hover:from-blue-600 hover:to-indigo-500 shadow-glow hover:shadow-cyan-500/25 transition-all duration-200 hover:scale-105"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 dark:bg-black/70 backdrop-blur-md lg:hidden transition-opacity"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Drawer Content */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] z-50 bg-white dark:bg-[#0b1220] border-l border-slate-200 dark:border-white/10 p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-slate-200 dark:border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center font-bold text-white text-xs">
                CS
              </div>
              <span className="font-heading font-bold text-sm text-slate-900 dark:text-white">
                CHAMROEUN SARAN
              </span>
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-1.5 mt-6">
            {NAV_LINKS.map((link) => {
              const isTools = link.name === "Tools";
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              if (isTools) {
                return (
                  <div key={link.name} className="space-y-1">
                    <div className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-white/5">
                      <Link
                        href="/tools"
                        onClick={() => setMobileOpen(false)}
                        className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2"
                      >
                        <Wrench className="w-4 h-4 text-brand-blue dark:text-brand-cyan" />
                        <span>Free Tools</span>
                        <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-brand-blue/10 dark:bg-brand-cyan/20 text-brand-blue dark:text-brand-cyan font-bold">
                          AI
                        </span>
                      </Link>
                      <button
                        type="button"
                        onClick={() => setMobileToolsOpen(!mobileToolsOpen)}
                        className="p-1 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            mobileToolsOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {mobileToolsOpen && (
                      <div className="pl-4 pr-1 py-1 space-y-1 border-l-2 border-brand-blue/40 dark:border-brand-cyan/40 ml-4">
                        {TOOL_ITEMS.map((t) => {
                          const Icon = t.icon;
                          return (
                            <Link
                              key={t.name}
                              href={t.href}
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
                            >
                              <Icon className="w-3.5 h-3.5 text-brand-blue dark:text-brand-cyan" />
                              <span>{t.name}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-brand-blue text-white shadow-glow"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="pt-6 border-t border-slate-200 dark:border-white/10 space-y-3 mt-6">
          <Link
            href="/contact?quote=true"
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-brand-blue to-indigo-600 shadow-glow"
          >
            <span>Get a Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </>
  );
}
