"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "@/constants/portfolioData";

export function PortfolioPreview() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  if (!PORTFOLIO_DATA || PORTFOLIO_DATA.length === 0) {
    return null;
  }

  const categories = ["All", "Web Apps", "E-Commerce", "Website Design", "Branding"];

  const filteredProjects = (
    activeCategory === "All"
      ? PORTFOLIO_DATA
      : PORTFOLIO_DATA.filter((p) => p.category === activeCategory)
  ).slice(0, 3); // Display strictly top 3 items for maximum compactness

  return (
    <section className="py-8 bg-slate-950/40 relative border-y border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
        {/* Minimal Single-Row Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <h2 className="text-lg sm:text-xl font-bold font-heading text-white tracking-tight">
              Selected <span className="gradient-text-blue-purple">Portfolios</span>
            </h2>
          </div>

          {/* Minimal Category Pills + View All */}
          <div className="flex items-center space-x-3 overflow-x-auto pb-1 sm:pb-0">
            <div className="flex items-center space-x-1 shrink-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
                    activeCategory === cat
                      ? "bg-blue-600/90 text-white font-semibold"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <span className="text-slate-700">|</span>

            <Link
              href="/portfolio"
              className="text-xs font-semibold text-cyan-400 hover:text-blue-400 flex items-center space-x-1 shrink-0 transition-colors"
            >
              <span>View All</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 3-Column Ultra-Minimal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/portfolio/${project.slug}`}
              className="group p-3 rounded-xl glass-panel border border-slate-800/80 hover:border-blue-500/40 hover:bg-slate-800/40 transition-all flex items-center space-x-3.5"
            >
              {/* Small Landscape Thumbnail */}
              <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0 border border-slate-700/60">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Title, Category & Metrics */}
              <div className="flex-1 min-w-0 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-cyan-400 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <h3 className="text-xs sm:text-sm font-bold font-heading text-white group-hover:text-blue-400 transition-colors truncate">
                  {project.title}
                </h3>

                <p className="text-[11px] text-slate-400 truncate">
                  {project.client}
                </p>

                {project.results[0] && (
                  <span className="inline-block text-[10px] font-semibold text-emerald-400">
                    {project.results[0].value} {project.results[0].label}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
