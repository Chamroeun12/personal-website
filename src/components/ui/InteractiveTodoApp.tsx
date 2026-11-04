"use client";

import React, { useState, useEffect } from "react";
import { Plus, Check, Undo2, Trash2, CheckCircle2, ClipboardList } from "lucide-react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const DEFAULT_TODOS: Todo[] = [
  { id: 1, text: "Design Chamroeun Saran brand platform", completed: true },
  { id: 2, text: "Configure Next.js App Router & Tailwind", completed: true },
  { id: 3, text: "Explore AI workflows for Cambodian businesses", completed: false },
  { id: 4, text: "Prepare Microsoft Excel training syllabus", completed: false },
];

export function InteractiveTodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newText, setNewText] = useState("");
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    try {
      const saved = localStorage.getItem("cs_todos");
      if (saved) {
        setTodos(JSON.parse(saved));
      } else {
        setTodos(DEFAULT_TODOS);
      }
    } catch {
      setTodos(DEFAULT_TODOS);
    }
  }, []);

  const saveTodos = (updated: Todo[]) => {
    setTodos(updated);
    try {
      localStorage.setItem("cs_todos", JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const handleAdd = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!newText.trim()) return;
    const item: Todo = {
      id: Date.now(),
      text: newText.trim(),
      completed: false,
    };
    saveTodos([item, ...todos]);
    setNewText("");
  };

  const toggleTodo = (id: number) => {
    saveTodos(
      todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTodo = (id: number) => {
    saveTodos(todos.filter((t) => t.id !== id));
  };

  const clearCompleted = () => {
    saveTodos(todos.filter((t) => !t.completed));
  };

  const filteredTodos = todos.filter((t) => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  const remainingCount = todos.filter((t) => !t.completed).length;

  if (!isClient) {
    return (
      <div className="p-6 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-center py-12 text-slate-500 dark:text-slate-400">
        Loading interactive demo...
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-slate-50 dark:bg-[#0d1527] rounded-2xl border border-slate-200 dark:border-white/10 p-5 shadow-inner">
      <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-brand-blue/15 text-brand-blue dark:text-brand-cyan flex items-center justify-center">
            <ClipboardList className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-heading font-semibold text-sm text-slate-900 dark:text-white">
              Interactive Task Engine
            </h4>
            <span className="text-[11px] text-slate-500 dark:text-slate-400">
              Live DOM & LocalStorage Demo
            </span>
          </div>
        </div>
        <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-medium">
          {remainingCount} left
        </span>
      </div>

      {/* Input */}
      <form onSubmit={handleAdd} className="flex gap-2 mt-4">
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          placeholder="What needs to be done?"
          className="flex-1 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-white/10 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-brand-blue dark:focus:border-brand-cyan transition-colors"
        />
        <button
          type="submit"
          className="px-3.5 py-2 rounded-xl bg-brand-blue hover:bg-blue-600 text-white text-xs font-semibold flex items-center gap-1 shadow-glow transition-all"
          aria-label="Add task"
        >
          <Plus className="w-4 h-4" />
          <span>Add</span>
        </button>
      </form>

      {/* Filter Tabs */}
      <div className="flex items-center justify-between mt-3 pb-3 border-b border-slate-200 dark:border-white/10 text-xs">
        <div className="flex gap-1">
          {(["all", "active", "completed"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-2.5 py-1 rounded-lg capitalize transition-colors ${
                filter === tab
                  ? "bg-brand-blue text-white font-medium"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {todos.some((t) => t.completed) && (
          <button
            onClick={clearCompleted}
            className="text-[11px] text-rose-500 hover:text-rose-600 font-medium transition-colors"
          >
            Clear Done
          </button>
        )}
      </div>

      {/* Todo List */}
      <div className="flex-1 overflow-y-auto max-h-56 mt-3 space-y-1.5 pr-1">
        {filteredTodos.length === 0 ? (
          <div className="text-center py-8 text-xs text-slate-500">
            No {filter === "all" ? "tasks" : filter + " tasks"} right now!
          </div>
        ) : (
          filteredTodos.map((t) => (
            <div
              key={t.id}
              className={`flex items-center justify-between p-2.5 rounded-xl border transition-all ${
                t.completed
                  ? "bg-slate-100 dark:bg-white/[0.02] border-slate-200 dark:border-white/5 opacity-60"
                  : "bg-white dark:bg-white/[0.04] border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20"
              }`}
            >
              <button
                onClick={() => toggleTodo(t.id)}
                className="flex items-center gap-2.5 text-left flex-1 text-xs"
              >
                <div
                  className={`w-4 h-4 rounded-md flex items-center justify-center transition-colors ${
                    t.completed
                      ? "bg-brand-blue text-white"
                      : "border border-slate-400 dark:border-slate-500 hover:border-brand-blue dark:hover:border-brand-cyan"
                  }`}
                >
                  {t.completed && <Check className="w-3 h-3 stroke-[3]" />}
                </div>
                <span
                  className={
                    t.completed
                      ? "line-through text-slate-400 dark:text-slate-500"
                      : "text-slate-800 dark:text-slate-200 font-medium"
                  }
                >
                  {t.text}
                </span>
              </button>

              <button
                onClick={() => deleteTodo(t.id)}
                className="p-1 rounded-md text-slate-400 hover:text-rose-500 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                aria-label="Delete todo"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          ))
        )}
      </div>

      {/* Tags footer */}
      <div className="pt-3 mt-2 border-t border-slate-200 dark:border-white/10 flex flex-wrap gap-1.5 text-[10px]">
        <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 font-medium">
          LocalStorage
        </span>
        <span className="px-2 py-0.5 rounded bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 font-medium">
          State Sync
        </span>
        <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 font-medium">
          Interactive Demo
        </span>
      </div>
    </div>
  );
}

