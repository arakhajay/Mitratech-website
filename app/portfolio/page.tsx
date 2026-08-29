"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowUpRight, ExternalLink } from "lucide-react";
import { PORTFOLIO_DATA } from "@/constants/portfolioData";
import { CtaBanner } from "@/components/home/CtaBanner";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Web Apps", "E-Commerce", "Website Design", "Branding", "Google Ads"];

  const filteredProjects =
    activeCategory === "All"
      ? PORTFOLIO_DATA
      : PORTFOLIO_DATA.filter((p) => p.category === activeCategory);

  const hasProjects = PORTFOLIO_DATA.length > 0;

  return (
    <div className="space-y-20 py-10">
      {/* Portfolio Hero Header */}
      <section className="text-center max-w-4xl mx-auto px-4 space-y-6">
        <div className="inline-flex items-center space-x-2 text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/20">
          <Sparkles className="w-4 h-4" />
          <span>Case Studies & Proven Impact</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight">
          Client Portfolio & <span className="gradient-text-blue-purple">Success Stories.</span>
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
          Explore how we help startups and enterprises architect scalable web applications, modern e-commerce stores, and high-converting digital solutions.
        </p>

        {/* Category Filters - only show if projects exist */}
        {hasProjects && (
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                    : "bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Projects Grid or Professional Updating Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-2xl glass-panel border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-blue-500/50 transition-all duration-300"
              >
                <div>
                  <div className="relative w-full h-60 overflow-hidden">
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

                  <div className="p-6 space-y-3">
                    <div className="text-xs text-slate-400 font-medium">Client: {project.client}</div>
                    <h3 className="text-lg font-bold font-heading text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {project.summary}
                    </p>

                    <div className="grid grid-cols-2 gap-2 pt-2">
                      {project.results.map((res, i) => (
                        <div key={i} className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-center">
                          <div className="text-sm font-bold text-cyan-400 font-heading">{res.value}</div>
                          <div className="text-[10px] text-slate-400 truncate">{res.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-800 mt-4">
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="inline-flex items-center space-x-1.5 text-xs font-bold text-white group-hover:text-blue-400 transition-colors"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center space-x-1 text-xs text-slate-400 hover:text-cyan-400 transition-colors"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-3xl mx-auto text-center p-8 sm:p-12 rounded-3xl glass-panel border border-slate-800/80 shadow-2xl space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center mx-auto text-cyan-400">
              <Sparkles className="w-8 h-8" />
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                Case Studies & Portfolio Updating
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
                We are curating and uploading our latest client case studies, web applications, and enterprise projects. In the meantime, you can reach out directly for private demonstrations and live client references.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-xs font-bold shadow-lg shadow-blue-500/20 transition-all"
              >
                Request Live Project Samples
              </Link>
              <Link
                href="/products"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition-all"
              >
                Explore Proprietary SaaS Products
              </Link>
            </div>
          </div>
        )}
      </section>

      <CtaBanner />
    </div>
  );
}
