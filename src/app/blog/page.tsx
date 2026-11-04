"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BLOG_POSTS, BlogPost } from "@/data/blog";
import {
  Search,
  Clock,
  Calendar,
  ArrowRight,
  BookOpen,
  Sparkles,
  Tag,
} from "lucide-react";

export default function BlogHubPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Topics" },
    { id: "office", label: "Microsoft Office" },
    { id: "python", label: "Python & Media" },
    { id: "computertips", label: "IT & Windows Tips" },
    { id: "webdev", label: "Web Engineering" },
  ];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCat =
      selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="pt-28 pb-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-brand-blue/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-blue/15 text-brand-cyan border border-brand-cyan/20 uppercase tracking-widest">
            Insights, Guides & Practical Tutorials
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            Technology Education & <br />
            <span className="gradient-text">Engineering Insights</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Hands-on tutorials in Microsoft Office mastery, Python media processing pipelines, Windows optimization, and modern frontend web engineering.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="p-6 rounded-2xl glass-card border border-white/10 space-y-4 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles, guides, or formulas..."
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-colors"
              />
            </div>

            <div className="flex flex-wrap gap-1.5 w-full sm:w-auto">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCategory(c.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                    selectedCategory === c.id
                      ? "bg-brand-blue text-white shadow-glow"
                      : "text-slate-400 hover:text-white bg-white/5 border border-white/5"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20 glass-card rounded-2xl border border-white/10 text-slate-400">
            No articles found matching your query.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group p-8 rounded-3xl glass-card border border-white/10 hover:border-brand-cyan/40 transition-all duration-300 flex flex-col justify-between glass-card-hover"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-brand-blue/20 text-brand-cyan border border-brand-cyan/25">
                      {post.categoryLabel}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-slate-400">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="font-heading font-bold text-xl sm:text-2xl text-white group-hover:text-brand-cyan transition-colors leading-snug">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-3 mb-6">
                    {post.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {post.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-brand-cyan" />
                    {post.publishedDate}
                  </span>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 font-semibold text-brand-cyan hover:text-sky-300 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Read Tutorial</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

