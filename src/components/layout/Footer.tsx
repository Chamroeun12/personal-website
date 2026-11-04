import React from "react";
import Link from "next/link";
import { PROFILE_DATA } from "@/data/profile";
import {
  Mail,
  Send,
  Phone,
  MapPin,
  ArrowUpRight,
  Heart,
  Github,
  Linkedin,
  Youtube,
  Facebook,
  Share2,
  Instagram,
  Twitter,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const getSocialIcon = (name: string) => {
    switch (name) {
      case "GitHub":
        return <Github className="w-4 h-4" />;
      case "LinkedIn":
        return <Linkedin className="w-4 h-4" />;
      case "Telegram":
        return <Send className="w-4 h-4" />;
      case "YouTube":
        return <Youtube className="w-4 h-4" />;
      case "Facebook":
        return <Facebook className="w-4 h-4" />;
      case "TikTok":
        return <Share2 className="w-4 h-4" />;
      case "Instagram":
        return <Instagram className="w-4 h-4" />;
      case "X (Twitter)":
        return <Twitter className="w-4 h-4" />;
      default:
        return <ArrowUpRight className="w-4 h-4" />;
    }
  };

  return (
    <footer className="relative bg-slate-50 dark:bg-[#070b14] border-t border-slate-200 dark:border-white/10 pt-16 pb-12 overflow-hidden text-slate-600 dark:text-slate-300 transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200 dark:border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue via-brand-cyan to-indigo-600 p-[1.5px] shadow-glow">
                <div className="w-full h-full bg-white dark:bg-[#0b1220] rounded-[10px] flex items-center justify-center font-heading font-black text-sm text-slate-900 dark:text-white">
                  CS
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg tracking-wide text-slate-900 dark:text-white">
                  CHAMROEUN <span className="text-brand-blue dark:text-brand-cyan">SARAN</span>
                </span>
                <span className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  Technology Brand & Digital Solutions
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              Combining modern frontend engineering, practical computer science
              education, and reliable IT support to build solutions that empower
              people and businesses.
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              {PROFILE_DATA.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-200/70 dark:bg-white/5 hover:bg-brand-blue/10 dark:hover:bg-brand-blue/20 hover:text-brand-blue dark:hover:text-brand-cyan border border-slate-300 dark:border-white/10 hover:border-brand-blue/40 dark:hover:border-brand-cyan/40 flex items-center justify-center text-slate-600 dark:text-slate-400 transition-all duration-200"
                  aria-label={social.name}
                >
                  {getSocialIcon(social.name)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-sm tracking-wider uppercase text-slate-900 dark:text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <Link href="/" className="hover:text-brand-blue dark:hover:text-brand-cyan transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-blue dark:hover:text-brand-cyan transition-colors">
                  About Chamroeun
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-blue dark:hover:text-brand-cyan transition-colors">
                  Digital Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-brand-blue dark:hover:text-brand-cyan transition-colors">
                  Project Portfolio
                </Link>
              </li>
              <li>
                <Link href="/certificates" className="hover:text-brand-blue dark:hover:text-brand-cyan transition-colors">
                  Certificates & Degree
                </Link>
              </li>
              <li>
                <Link href="/tools" className="hover:text-brand-blue dark:hover:text-brand-cyan transition-colors flex items-center gap-1.5">
                  <span>Free AI Tools</span>
                  <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-brand-blue/10 dark:bg-brand-cyan/20 text-brand-blue dark:text-brand-cyan font-bold">
                    Free
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-brand-blue dark:hover:text-brand-cyan transition-colors">
                  Resource Hub
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-brand-blue dark:hover:text-brand-cyan transition-colors">
                  Blog & Tutorials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-blue dark:hover:text-brand-cyan transition-colors">
                  Contact & Quotes
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-sm tracking-wider uppercase text-slate-900 dark:text-white">
              Solutions
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <Link href="/services/web-development" className="hover:text-brand-blue dark:hover:text-brand-cyan transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/ai-solutions" className="hover:text-brand-blue dark:hover:text-brand-cyan transition-colors">
                  AI Workflows
                </Link>
              </li>
              <li>
                <Link href="/services/graphic-design-branding" className="hover:text-brand-blue dark:hover:text-brand-cyan transition-colors">
                  Branding & Canva
                </Link>
              </li>
              <li>
                <Link href="/services/it-support" className="hover:text-brand-blue dark:hover:text-brand-cyan transition-colors">
                  IT Support & Windows
                </Link>
              </li>
              <li>
                <Link href="/services/computer-training" className="hover:text-brand-blue dark:hover:text-brand-cyan transition-colors">
                  Microsoft Office Training
                </Link>
              </li>
              <li>
                <Link href="/services/digital-products" className="hover:text-brand-blue dark:hover:text-brand-cyan transition-colors">
                  Digital Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-sm tracking-wider uppercase text-slate-900 dark:text-white">
              Direct Channels
            </h4>
            <div className="space-y-2.5 text-sm text-slate-600 dark:text-slate-400">
              <a
                href={`mailto:${PROFILE_DATA.contact.email}`}
                className="flex items-center gap-2 hover:text-brand-blue dark:hover:text-brand-cyan transition-colors group"
              >
                <Mail className="w-4 h-4 text-brand-blue dark:text-brand-cyan group-hover:scale-110 transition-transform" />
                <span className="truncate">{PROFILE_DATA.contact.email}</span>
              </a>
              <a
                href={PROFILE_DATA.contact.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-brand-blue dark:hover:text-brand-cyan transition-colors group"
              >
                <Send className="w-4 h-4 text-brand-blue dark:text-brand-cyan group-hover:scale-110 transition-transform" />
                <span>{PROFILE_DATA.contact.telegramUsername}</span>
              </a>
              <a
                href={`tel:${PROFILE_DATA.contact.phone}`}
                className="flex items-center gap-2 hover:text-brand-blue dark:hover:text-brand-cyan transition-colors group"
              >
                <Phone className="w-4 h-4 text-brand-blue dark:text-brand-cyan group-hover:scale-110 transition-transform" />
                <span>{PROFILE_DATA.contact.phoneDisplay}</span>
              </a>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <MapPin className="w-4 h-4 text-brand-blue dark:text-brand-cyan shrink-0" />
                <span>{PROFILE_DATA.contact.locationDisplay}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Chamroeun SARAN. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed & Engineered with Passion in Cambodia
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </p>
        </div>
      </div>
    </footer>
  );
}

