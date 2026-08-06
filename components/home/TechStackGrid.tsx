"use client";

import React from "react";
import { Sparkles } from "lucide-react";

const TECH_STACK = [
  { name: "Next.js 15", category: "Framework", color: "from-black to-slate-800" },
  { name: "React 19", category: "UI Library", color: "from-cyan-500/20 to-blue-600/20" },
  { name: "TypeScript", category: "Language", color: "from-blue-600/20 to-indigo-600/20" },
  { name: "Node.js", category: "Backend Runtime", color: "from-emerald-500/20 to-teal-600/20" },
  { name: "Tailwind CSS", category: "Styling Engine", color: "from-cyan-400/20 to-sky-600/20" },
  { name: "Supabase", category: "Database & Auth", color: "from-emerald-600/20 to-green-600/20" },
  { name: "Firebase", category: "Cloud Services", color: "from-amber-500/20 to-orange-600/20" },
  { name: "PostgreSQL", category: "Relational DB", color: "from-blue-500/20 to-cyan-600/20" },
  { name: "MongoDB", category: "Document DB", color: "from-green-500/20 to-emerald-700/20" },
  { name: "Docker", category: "Containers", color: "from-sky-500/20 to-blue-700/20" },
  { name: "Vercel", category: "Edge Hosting", color: "from-slate-700/40 to-slate-900/40" },
  { name: "AWS", category: "Cloud Infra", color: "from-amber-600/20 to-yellow-600/20" },
];

export function TechStackGrid() {
  return (
    <section className="py-20 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Modern Engineering Stack</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Powered by Cutting-Edge <span className="gradient-text-cyan-blue">Technologies.</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            We build resilient digital infrastructure using battle-tested frameworks, serverless edge networks, and modern cloud architecture.
          </p>
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {TECH_STACK.map((tech, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl glass-panel border border-slate-800 text-center space-y-2 group hover:border-blue-500/50 hover:scale-105 transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 flex items-center justify-center font-bold text-sm text-cyan-300 font-heading group-hover:rotate-6 transition-transform">
                {tech.name.substring(0, 2).toUpperCase()}
              </div>
              <h3 className="text-sm font-bold font-heading text-white group-hover:text-cyan-300 transition-colors">
                {tech.name}
              </h3>
              <p className="text-[10px] text-slate-400">{tech.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
