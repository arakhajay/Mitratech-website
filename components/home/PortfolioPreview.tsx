"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "@/constants/portfolioData";

export function PortfolioPreview() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Web Apps", "E-Commerce", "Website Design", "Branding", "Google Ads"];

  const filteredProjects =
    activeCategory === "All"
      ? PORTFOLIO_DATA
      : PORTFOLIO_DATA.filter((p) => p.category === activeCategory);

  return (
    <section className="py-12 bg-slate-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Compact Header & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
          <div className="space-y-1.5">
            <div className="inline-flex items-center space-x-1.5 text-[11px] font-bold text-cyan-400 uppercase tracking-wider bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
              <Sparkles className="w-3 h-3" />
              <span>Selected Works</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white tracking-tight">
              Featured Client <span className="gradient-text-blue-purple">Portfolios</span>
            </h2>
          </div>

          {/* Sleek Filter Pills */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/20 font-semibold"
                    : "bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Compact Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-xl glass-panel border border-slate-800/90 overflow-hidden flex flex-col justify-between hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
            >
              <div>
                {/* Sleek Compact Image */}
                <div className="relative w-full h-36 overflow-hidden">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-slate-950/80 backdrop-blur-md text-[10px] font-semibold text-cyan-300 border border-slate-700/80">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 space-y-2">
                  <div className="text-[11px] text-slate-400 font-medium truncate">Client: {project.client}</div>
                  <h3 className="text-base font-bold font-heading text-white group-hover:text-blue-400 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-1 leading-snug">
                    {project.summary}
                  </p>

                  {/* Inline Metrics Pills */}
                  <div className="flex items-center space-x-2 pt-1">
                    {project.results.slice(0, 2).map((res, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center space-x-1 px-2 py-0.5 rounded bg-slate-900 text-[10px] border border-slate-800 text-slate-300"
                      >
                        <span className="font-bold text-cyan-400">{res.value}</span>
                        <span className="text-slate-500">({res.label})</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Compact Footer Action */}
              <div className="px-4 py-2.5 bg-slate-900/40 border-t border-slate-800/60 flex items-center justify-between">
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="inline-flex items-center space-x-1 text-xs font-semibold text-white group-hover:text-blue-400 transition-colors"
                >
                  <span>Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-1 text-[11px] text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center pt-2">
          <Link
            href="/portfolio"
            className="inline-flex items-center space-x-1.5 px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-colors border border-slate-700"
          >
            <span>View All Works</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
          </Link>
        </div>
      </div>
    </section>
  );
}
