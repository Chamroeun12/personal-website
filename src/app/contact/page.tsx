"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { PROFILE_DATA } from "@/data/profile";
import {
  Mail,
  Send,
  Phone,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
  ArrowRight,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  service: z.string().min(1, "Please choose a service"),
  budget: z.string().optional(),
  message: z.string().min(10, "Please provide at least 10 characters describing your project"),
  honeypot: z.string().max(0, "Bot detected"),
});

type ContactFormData = z.infer<typeof formSchema>;

const SERVICE_OPTIONS = [
  "Web Development (Business, Landing Page, App)",
  "AI Solutions & Business Workflows",
  "Graphic Design & Brand Identity (Canva)",
  "IT Support & Windows Optimization",
  "Microsoft Office & Computer Training",
  "Digital Products & Custom Templates",
  "General Inquiry / Other",
];

const BUDGET_OPTIONS = [
  "Flexible / Not sure yet",
  "< $250",
  "$250 - $500",
  "$500 - $1,500",
  "$1,500+",
];

export default function ContactPage() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || "";
  const isQuote = searchParams.get("quote") === "true";

  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [responseMsg, setResponseMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      service: preselectedService || "",
      budget: isQuote ? "$250 - $500" : "Flexible / Not sure yet",
      message: "",
      honeypot: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmissionStatus("loading");
    setResponseMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (res.ok && json.success) {
        setSubmissionStatus("success");
        setResponseMsg(json.message);
        reset();
      } else {
        setSubmissionStatus("error");
        setResponseMsg(
          json.message ||
            (json.errors && json.errors.map((e: any) => e.message).join(", ")) ||
            "Unable to submit message. Please contact via Telegram or email directly."
        );
      }
    } catch {
      setSubmissionStatus("error");
      setResponseMsg(
        "A network connection error occurred. Please reach out via Telegram @SARANChamroeun or email directly."
      );
    }
  };

  return (
    <div className="pt-28 pb-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-brand-blue/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-blue/15 text-brand-cyan border border-brand-cyan/20 uppercase tracking-widest">
            Let&apos;s Start a Conversation
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            Get in Touch & <br />
            <span className="gradient-text">Request a Project Quote</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Have a project in mind, need technical systems support, or looking for practical training? Reach out below for a rapid response.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Details & Information */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-heading font-bold text-2xl text-white">
              Direct Contact Channels
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              I am based in Cambodia and available for local projects, remote development, IT consultation, and training appointments.
            </p>

            <div className="space-y-4">
              {/* Telegram Card */}
              <a
                href={PROFILE_DATA.contact.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl glass-card border border-white/10 hover:border-brand-cyan/40 transition-all flex items-center gap-4 group glass-card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center border border-sky-400/30 group-hover:scale-110 transition-transform">
                  <Send className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Telegram Direct & Calls
                  </span>
                  <span className="font-heading font-bold text-base text-white group-hover:text-brand-cyan transition-colors">
                    {PROFILE_DATA.contact.telegramUsername}
                  </span>
                  <p className="text-xs text-sky-400 mt-0.5">
                    Fastest Response Time (Same Day)
                  </p>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${PROFILE_DATA.contact.email}`}
                className="p-5 rounded-2xl glass-card border border-white/10 hover:border-brand-blue/40 transition-all flex items-center gap-4 group glass-card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-blue/20 text-brand-cyan flex items-center justify-center border border-brand-cyan/30 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Official Email
                  </span>
                  <span className="font-heading font-bold text-base text-white group-hover:text-brand-cyan transition-colors">
                    {PROFILE_DATA.contact.email}
                  </span>
                  <p className="text-xs text-slate-400 mt-0.5">
                    For formal inquiries, quotes & documents
                  </p>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href={`tel:${PROFILE_DATA.contact.phone}`}
                className="p-5 rounded-2xl glass-card border border-white/10 hover:border-emerald-500/40 transition-all flex items-center gap-4 group glass-card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-400/30 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Direct Phone Line
                  </span>
                  <span className="font-heading font-bold text-base text-white group-hover:text-emerald-400 transition-colors">
                    {PROFILE_DATA.contact.phoneDisplay}
                  </span>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Monday to Saturday (8:00 AM – 6:00 PM ICT)
                  </p>
                </div>
              </a>

              {/* Location Card */}
              <div className="p-5 rounded-2xl glass-card border border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 text-slate-300 flex items-center justify-center border border-white/10">
                  <MapPin className="w-6 h-6 text-brand-cyan" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Operating Location
                  </span>
                  <span className="font-heading font-semibold text-sm text-white">
                    {PROFILE_DATA.contact.locationDisplay}
                  </span>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Serving Cambodia & International Clients
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl glass-card border border-white/15 bg-[#111827]/90 shadow-2xl relative">
              <div className="mb-6 pb-6 border-b border-white/10">
                <h3 className="font-heading font-bold text-2xl text-white">
                  Send a Message or Project Brief
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Fill in your details below and I will get back to you with insights or a custom quotation.
                </p>
              </div>

              {/* Status alerts */}
              {submissionStatus === "success" && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold">Message Received!</strong>
                    <span>{responseMsg}</span>
                  </div>
                </div>
              )}

              {submissionStatus === "error" && (
                <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs sm:text-sm flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold">Submission Error</strong>
                    <span>{responseMsg}</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Honeypot for spam bot prevention */}
                <input
                  type="text"
                  {...register("honeypot")}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Full Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("fullName")}
                      placeholder="e.g. John Doe / Sokha Chan"
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-900 border text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.fullName
                          ? "border-rose-500 focus:border-rose-500"
                          : "border-white/10 focus:border-brand-cyan"
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-rose-400">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      {...register("email")}
                      placeholder="e.g. you@example.com"
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-900 border text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.email
                          ? "border-rose-500 focus:border-rose-500"
                          : "border-white/10 focus:border-brand-cyan"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-400">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Service dropdown & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Service Interested In <span className="text-rose-400">*</span>
                    </label>
                    <select
                      {...register("service")}
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-900 border text-xs sm:text-sm text-white focus:outline-none transition-colors ${
                        errors.service
                          ? "border-rose-500 focus:border-rose-500"
                          : "border-white/10 focus:border-brand-cyan"
                      }`}
                    >
                      <option value="">Select a service category...</option>
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="text-[11px] text-rose-400">
                        {errors.service.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Estimated Budget (Optional)
                    </label>
                    <select
                      {...register("budget")}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-brand-cyan transition-colors"
                    >
                      {BUDGET_OPTIONS.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Project Details & Goals <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    {...register("message")}
                    placeholder="Tell me about what you are looking to build, your timeline, or any specific software challenges..."
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-900 border text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                      errors.message
                        ? "border-rose-500 focus:border-rose-500"
                        : "border-white/10 focus:border-brand-cyan"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-rose-400">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={submissionStatus === "loading"}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-brand-blue to-indigo-600 hover:from-blue-600 hover:to-indigo-500 shadow-glow hover:shadow-cyan-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submissionStatus === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Project Message</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-slate-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-cyan" />
                  <span>Your information is confidential and will never be shared.</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

