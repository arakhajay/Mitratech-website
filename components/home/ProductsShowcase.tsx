"use client";

import React from "react";
import Link from "next/link";
import {
  Bot,
  Database,
  ExternalLink,
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Sparkles,
  Key,
  Layers
} from "lucide-react";
import { PRODUCTS_DATA } from "@/constants/productsData";

export function ProductsShowcase() {
  return (
    <section className="py-24 relative bg-[#070A11] border-t border-b border-slate-800/80 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800/80 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-semibold text-cyan-300">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Proprietary In-House Software</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
              Production SaaS Products Engineered by MitraTech.
            </h2>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Beyond our bespoke engineering studio, we build and operate proprietary AI & B2B automation platforms that power businesses worldwide.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center space-x-2 text-xs font-bold text-cyan-400 hover:text-blue-400 transition-colors shrink-0 group"
          >
            <span>View All SaaS Products</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 2-Column Asymmetric Product Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product 1: Zivox Agent */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-purple-500/40 transition-all flex flex-col justify-between space-y-8 group">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-2xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-300">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-heading text-white">Zivox Agent</h3>
                    <p className="text-xs text-purple-300 font-mono">Autonomous AI Support Bot</p>
                  </div>
                </div>
                <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                  Truth-First RAG
                </span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Automates up to 85% of customer support volume with zero hallucinations. Dynamically embeds verified source citations and seamlessly escalates complex requests to human teams.
              </p>

              <div className="space-y-2.5 pt-2 text-xs text-slate-300 font-medium">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Verified clickable source citations for every answer</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Instant 1-line script embed on any web stack</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>WhatsApp, Slack & Zendesk multi-channel sync</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <a
                href="https://www.zivoxagent.com/"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-lg shadow-purple-600/20 flex items-center justify-center space-x-2 transition-all group-hover:scale-105"
              >
                <span>Launch Zivox App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <Link
                href="/products/zivox-agent"
                className="w-full sm:w-auto text-xs font-semibold text-slate-400 hover:text-white flex items-center justify-center space-x-1.5 transition-colors"
              >
                <span>Read Full Technical Architecture</span>
                <ArrowRight className="w-3.5 h-3.5 text-purple-400" />
              </Link>
            </div>
          </div>

          {/* Product 2: LeadSpark AI */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between space-y-8 group">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-300">
                    <Database className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-heading text-white">LeadSpark AI</h3>
                    <p className="text-xs text-cyan-300 font-mono">B2B Lead Generation & Scraper</p>
                  </div>
                </div>
                <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  Zero-Markup BYOK
                </span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Extract thousands of verified phone numbers, business emails, and location data directly from Google Maps and web directories with 100% transparent direct Apify cost pricing.
              </p>

              <div className="space-y-2.5 pt-2 text-xs text-slate-300 font-medium">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Bring Your Own Key (BYOK) — Pay $0 subscription markup</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Deep Google Maps & business registry scraping</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>1-Click CSV export & direct WhatsApp outreach list</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <a
                href="https://leadspark-apify.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs shadow-lg shadow-cyan-600/20 flex items-center justify-center space-x-2 transition-all group-hover:scale-105"
              >
                <span>Launch LeadSpark App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <Link
                href="/products/leadspark"
                className="w-full sm:w-auto text-xs font-semibold text-slate-400 hover:text-white flex items-center justify-center space-x-1.5 transition-colors"
              >
                <span>Read Full Technical Architecture</span>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
