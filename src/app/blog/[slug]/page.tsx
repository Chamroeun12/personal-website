import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { BLOG_POSTS, BlogPost } from "@/data/blog";
import {
  Clock,
  Calendar,
  User,
  ArrowLeft,
  Share2,
  Send,
  Facebook,
  Twitter,
  Link2,
  ChevronRight,
  BookOpen,
} from "lucide-react";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return { title: "Article Not Found" };
  return {
    title: `${post.title} — Chamroeun SARAN`,
    description: post.summary,
    authors: [{ name: post.author }],
  };
}

export default function SingleBlogPostPage({ params }: BlogPostPageProps) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <div className="pt-28 pb-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-blue/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <Link href="/" className="hover:text-brand-cyan transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/blog" className="hover:text-brand-cyan transition-colors">
            Blog & Tutorials
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-white truncate max-w-xs">{post.title}</span>
        </div>

        {/* Article Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-blue/20 text-brand-cyan border border-brand-cyan/25">
              {post.categoryLabel}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-slate-400">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-slate-400">
              <Calendar className="w-3.5 h-3.5 text-brand-cyan" />
              {post.publishedDate}
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {post.summary}
          </p>

          <div className="flex items-center justify-between pt-4 pb-6 border-b border-white/10 text-xs">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-cyan font-bold">
                CS
              </div>
              <div>
                <span className="text-white font-semibold block">{post.author}</span>
                <span className="text-slate-400 text-[11px]">Educator & Developer</span>
              </div>
            </div>

            {/* Social Sharing */}
            <div className="flex items-center gap-2">
              <a
                href={`https://t.me/share/url?url=https://chamroeunsaran.com/blog/${post.slug}&text=${encodeURIComponent(
                  post.title
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-brand-blue/20 hover:text-brand-cyan flex items-center justify-center text-slate-400 transition-colors"
                title="Share on Telegram"
              >
                <Send className="w-3.5 h-3.5" />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  post.title
                )}&url=https://chamroeunsaran.com/blog/${post.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-brand-blue/20 hover:text-brand-cyan flex items-center justify-center text-slate-400 transition-colors"
                title="Share on X"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Article Body Content */}
        <div className="p-8 sm:p-12 rounded-3xl glass-card border border-white/10 text-slate-300 leading-relaxed text-sm sm:text-base space-y-6">
          <div className="prose prose-invert max-w-none space-y-6">
            {post.content.split("\n\n").map((block, i) => {
              const trimmed = block.trim();
              if (trimmed.startsWith("### ")) {
                return (
                  <h3
                    key={i}
                    className="font-heading font-bold text-xl sm:text-2xl text-white pt-4 pb-1 border-b border-white/10"
                  >
                    {trimmed.replace("### ", "")}
                  </h3>
                );
              }
              if (trimmed.startsWith("```")) {
                const codeLines = trimmed.split("\n");
                const code = codeLines.slice(1, -1).join("\n");
                return (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-slate-950 border border-white/10 font-mono text-xs sm:text-sm text-sky-300 overflow-x-auto shadow-inner"
                  >
                    <pre>{code}</pre>
                  </div>
                );
              }
              if (trimmed.startsWith("- ")) {
                const items = trimmed.split("\n- ").map((item) => item.replace("- ", ""));
                return (
                  <ul key={i} className="list-disc pl-5 space-y-1.5 text-slate-300 text-sm">
                    {items.map((li, idx) => (
                      <li key={idx}>{li}</li>
                    ))}
                  </ul>
                );
              }
              if (trimmed === "---") {
                return <hr key={i} className="border-white/10 my-6" />;
              }
              return (
                <p key={i} className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {trimmed}
                </p>
              );
            })}
          </div>

          {/* Tags footer */}
          <div className="pt-8 border-t border-white/10 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg text-xs font-medium bg-white/5 text-brand-cyan border border-brand-cyan/20"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Related Articles Section */}
        {related.length > 0 && (
          <div className="space-y-6 pt-6">
            <h3 className="font-heading font-bold text-2xl text-white">
              Related Tutorials & Articles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {related.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/blog/${rel.slug}`}
                  className="p-6 rounded-2xl glass-card border border-white/10 hover:border-brand-cyan/40 transition-all flex flex-col justify-between group glass-card-hover"
                >
                  <div>
                    <span className="text-[11px] font-semibold text-brand-cyan mb-2 block">
                      {rel.categoryLabel}
                    </span>
                    <h4 className="font-heading font-bold text-base text-white group-hover:text-brand-cyan transition-colors mb-2">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-slate-400 line-clamp-2">
                      {rel.summary}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-white/10 text-xs text-slate-400 flex items-center justify-between">
                    <span>{rel.readTime}</span>
                    <span className="text-brand-cyan font-medium group-hover:translate-x-1 transition-transform">
                      Read →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back Link */}
        <div className="text-center pt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-brand-cyan transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to all tutorials</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

