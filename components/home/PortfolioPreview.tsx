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
    <section className="py-20 bg-slate-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Selected Works & Case Studies</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
              Featured Client <span className="gradient-text-blue-purple">Portfolios.</span>
            </h2>

            <p className="text-slate-400 text-sm sm:text-base">
              Explore our recent work spanning web application engineering, luxury e-commerce, custom brand identities, and high-ROI ad campaigns.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                    : "bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl glass-panel border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-blue-500/40 transition-all duration-300"
            >
              <div>
                {/* Thumbnail Image */}
                <div className="relative w-full h-56 overflow-hidden">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[11px] font-semibold text-cyan-300 border border-slate-700">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="text-xs text-slate-400 font-medium">Client: {project.client}</div>
                  <h3 className="text-lg font-bold font-heading text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                    {project.summary}
                  </p>

                  {/* Metrics preview */}
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    {project.results.slice(0, 2).map((res, i) => (
                      <div key={i} className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-center">
                        <div className="text-sm font-bold text-cyan-400 font-heading">{res.value}</div>
                        <div className="text-[10px] text-slate-400 truncate">{res.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-800/80 mt-4">
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-white group-hover:text-blue-400 transition-colors"
                >
                  <span>Read Case Study</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-1 text-xs text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center pt-6">
          <Link
            href="/portfolio"
            className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm transition-colors"
          >
            <span>Explore All Projects & Case Studies</span>
            <ArrowUpRight className="w-4 h-4 text-cyan-400" />
          </Link>
        </div>
      </div>
    </section>
  );
}
