"use client";

import React from "react";
import { useTheme } from "./ThemeProvider";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`p-2.5 rounded-xl border border-white/10 hover:border-brand-cyan/40 bg-white/5 hover:bg-white/10 dark:bg-white/5 dark:hover:bg-white/10 text-slate-200 dark:text-slate-200 transition-all duration-300 flex items-center justify-center ${className}`}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-sky-400 transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
}

