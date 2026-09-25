"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  CheckCircle2,
  Terminal,
  Bot,
  Database,
  Gauge,
  Sparkles,
  ExternalLink,
  Copy,
  Check,
} from "lucide-react";
import { QuickConsultModal } from "@/components/ui/QuickConsultModal";
import { TubesBackground } from "@/components/ui/TubesBackground";

const DEMO_TABS = [
  {
    id: "architecture",
    label: "Next.js 15 Engine",
    icon: Code2,
    tag: "Server Architecture",
  },
  {
    id: "zivox",
    label: "Zivox AI Agent",
    icon: Bot,
    tag: "Autonomous RAG",
  },
  {
    id: "leadspark",
    label: "LeadSpark Scraper",
    icon: Database,
    tag: "Zero-Markup API",
  },
  {
    id: "performance",
    label: "Lighthouse 100",
    icon: Gauge,
    tag: "Speed Benchmark",
  },
];

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("architecture");
  const [copied, setCopied] = useState(false);

  const copyCode = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <section className="relative min-h-[94vh] flex flex-col justify-center pt-10 pb-20 overflow-hidden bg-[#0A0E17]">
        {/* Subtle Architectural Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b18_1px,transparent_1px),linear-gradient(to_bottom,#1e293b18_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-[120px] pointer-events-none rounded-full" />

        {/* 3D Tubes Canvas Background */}
        <TubesBackground className="absolute inset-0 w-full h-full bg-transparent">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8 pt-8">
            
            {/* Top Location & Studio Label */}
            <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/70 text-xs font-semibold text-slate-300 shadow-xl pointer-events-auto">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Mitratech Services (OPC) Pvt Ltd • Pune Engineering Studio</span>
            </div>

            {/* Main Hero Headline - Clear, Authoritative, Anti-Slop */}
            <div className="space-y-4 max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading text-white tracking-tight leading-[1.08] pointer-events-auto select-none">
                Software Engineering & Digital Products{" "}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                  Built for Scale.
                </span>
              </h1>

              {/* Subtitle with Specific Proof & Guarantees */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed pointer-events-auto select-none">
                We engineer enterprise Next.js 15 platforms, custom SaaS architectures, and high-ROI conversion engines with 95+ Core Web Vitals and zero vendor lock-in.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-1 pointer-events-auto w-full sm:w-auto">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-xl shadow-blue-600/25 flex items-center justify-center space-x-2.5 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Book Engineering Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/services"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 font-semibold text-sm flex items-center justify-center space-x-2 transition-all cursor-pointer"
              >
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span>Explore Core Services</span>
              </Link>
            </div>

            {/* Key Engineering Standards Bar */}
            <div className="pt-4 pb-2 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto text-left text-xs font-semibold text-slate-300 pointer-events-auto w-full">
              <div className="flex items-center space-x-2 p-2 rounded-lg bg-slate-900/60 border border-slate-800/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Code Ownership</span>
              </div>
              <div className="flex items-center space-x-2 p-2 rounded-lg bg-slate-900/60 border border-slate-800/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Next.js 15 & React 19</span>
              </div>
              <div className="flex items-center space-x-2 p-2 rounded-lg bg-slate-900/60 border border-slate-800/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Sub-Second Latency</span>
              </div>
              <div className="flex items-center space-x-2 p-2 rounded-lg bg-slate-900/60 border border-slate-800/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Pune Founder Direct SLA</span>
              </div>
            </div>

            {/* Interactive Engineering & Product Showcase Sandbox */}
            <div className="pt-6 max-w-4xl mx-auto pointer-events-auto text-left w-full">
              <div className="rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden">
                {/* Sandbox Header / Tab Bar */}
                <div className="flex flex-wrap items-center justify-between border-b border-slate-800/80 bg-slate-900/80 px-4 py-2.5">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="text-[11px] font-mono text-slate-400 ml-2">mitratech://live-architecture-preview</span>
                  </div>

                  {/* Tab Selectors */}
                  <div className="flex items-center space-x-1 pt-2 sm:pt-0 overflow-x-auto">
                    {DEMO_TABS.map((tab) => {
                      const Icon = tab.icon;
                      const isActive = activeTab === tab.id;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-all ${
                            isActive
                              ? "bg-slate-800 text-cyan-300 border border-slate-700 shadow-sm"
                              : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                          <span>{tab.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Sandbox Content Area */}
                <div className="p-6 text-xs sm:text-sm font-mono leading-relaxed bg-[#070A10]">
                  {activeTab === "architecture" && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2">
                        <span className="text-cyan-400 font-bold">// Production Next.js 15 Server Action Pipeline</span>
                        <button
                          onClick={() => copyCode(`export async function createEnterpriseDeployment(spec: ProjectSpec) {\n  "use server";\n  const validated = schema.parse(spec);\n  return await db.deployments.create({ data: validated });\n}`)}
                          className="hover:text-white flex items-center space-x-1 text-xs"
                        >
                          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{copied ? "Copied" : "Copy"}</span>
                        </button>
                      </div>
                      <pre className="text-slate-200 overflow-x-auto">
                        <code>
                          <span className="text-purple-400">export async function</span>{" "}
                          <span className="text-blue-400">createEnterpriseDeployment</span>
                          <span className="text-slate-400">(spec: ProjectSpec)</span> &#123;{"\n"}
                          {"  "}<span className="text-cyan-300">"use server"</span>;{"\n"}
                          {"  "}<span className="text-slate-500">// Zero-runtime overhead validation + Supabase RLS</span>{"\n"}
                          {"  "}<span className="text-purple-400">const</span> payload ={" "}
                          <span className="text-amber-300">ProjectSchema</span>.parse(spec);{"\n"}
                          {"  "}<span className="text-purple-400">const</span> instance ={" "}
                          <span className="text-purple-400">await</span> edgeRuntime.deploy(&#123;{"\n"}
                          {"    "}region: <span className="text-emerald-300">"ap-south-1"</span>,{"\n"}
                          {"    "}caching: <span className="text-emerald-300">"force-cache"</span>,{"\n"}
                          {"    "}revalidate: <span className="text-amber-300">3600</span>,{"\n"}
                          {"    "}analytics: <span className="text-cyan-300">"real-time-core-vitals"</span>{"\n"}
                          {"  "}&#125;);{"\n"}
                          {"  "}<span className="text-purple-400">return</span> &#123; status:{" "}
                          <span className="text-emerald-300">"live"</span>, latencyMs:{" "}
                          <span className="text-amber-300">42</span> &#125;;{"\n"}
                          &#125;
                        </code>
                      </pre>
                    </div>
                  )}

                  {activeTab === "zivox" && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2">
                        <div className="flex items-center space-x-2">
                          <Bot className="w-4 h-4 text-purple-400" />
                          <span className="text-purple-300 font-bold">Zivox Agent • Truth-First RAG Execution</span>
                        </div>
                        <span className="text-emerald-400 text-xs font-semibold">● Live Engine (240ms)</span>
                      </div>
                      <div className="space-y-3 font-sans">
                        <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                          <span className="text-slate-500 font-mono text-[10px] block mb-1">USER QUERY:</span>
                          "How does Zivox Agent ensure our company knowledge base is never hallucinated?"
                        </div>
                        <div className="p-3.5 rounded-lg bg-blue-950/40 border border-blue-500/30 text-slate-200 text-xs space-y-2">
                          <div className="flex items-center justify-between text-[11px] text-cyan-300 font-mono">
                            <span>ZIVOX AGENT RESPONSE</span>
                            <span>Confidence: 99.4% • Citations: 3</span>
                          </div>
                          <p className="leading-relaxed">
                            Zivox Agent uses strict Truth-First semantic chunking. When answering, every claim is dynamically bound to verified source URLs and documents. If certainty drops below 95%, it smoothly escalates to human agents with a full transcript audit.
                          </p>
                          <div className="flex items-center space-x-2 pt-1">
                            <span className="text-[10px] px-2 py-0.5 rounded bg-blue-900/80 text-cyan-300 border border-blue-700">Source #1: SLA_Docs.pdf [p.14]</span>
                            <span className="text-[10px] px-2 py-0.5 rounded bg-blue-900/80 text-cyan-300 border border-blue-700">Source #2: API_Guide.md</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "leadspark" && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2">
                        <div className="flex items-center space-x-2">
                          <Database className="w-4 h-4 text-cyan-400" />
                          <span className="text-cyan-300 font-bold">LeadSpark AI • B2B Scraping & Zero-Markup Intelligence</span>
                        </div>
                        <span className="text-cyan-400 text-xs">Apify BYOK Architecture</span>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs font-mono">
                          <thead>
                            <tr className="text-slate-400 border-b border-slate-800">
                              <th className="pb-2">Company</th>
                              <th className="pb-2">Contact & Role</th>
                              <th className="pb-2">Phone / Verified</th>
                              <th className="pb-2">Location</th>
                              <th className="pb-2">Status</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-800/60 text-slate-300">
                            <tr>
                              <td className="py-2 text-white font-semibold">Apex Logistics Ltd</td>
                              <td className="py-2 text-cyan-300">Rohan Mehta (VP Ops)</td>
                              <td className="py-2 text-emerald-400">+91 98231 •••• (Verified)</td>
                              <td className="py-2">Pune, India</td>
                              <td className="py-2 text-emerald-400">✓ CRM Synced</td>
                            </tr>
                            <tr>
                              <td className="py-2 text-white font-semibold">Kavya Dental Care</td>
                              <td className="py-2 text-cyan-300">Dr. Sunita Deshmukh</td>
                              <td className="py-2 text-emerald-400">+91 94220 •••• (Verified)</td>
                              <td className="py-2">Hadapsar, Pune</td>
                              <td className="py-2 text-emerald-400">✓ Exported CSV</td>
                            </tr>
                            <tr>
                              <td className="py-2 text-white font-semibold">Zenith FinTech Corp</td>
                              <td className="py-2 text-cyan-300">Vikram Rao (CTO)</td>
                              <td className="py-2 text-emerald-400">+91 99701 •••• (Verified)</td>
                              <td className="py-2">Mumbai, India</td>
                              <td className="py-2 text-emerald-400">✓ WhatsApp Ready</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {activeTab === "performance" && (
                    <div className="space-y-4 font-sans">
                      <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2">
                        <span className="text-emerald-400 font-bold font-mono">Google Lighthouse Real-World Audit</span>
                        <span className="text-slate-400 text-xs">Target: https://www.mitratechservices.in</span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 text-center">
                        <div className="p-4 rounded-xl bg-slate-900/80 border border-emerald-500/30">
                          <div className="text-3xl font-extrabold text-emerald-400 font-mono">100</div>
                          <div className="text-xs font-semibold text-slate-300 mt-1">Performance</div>
                          <div className="text-[10px] text-slate-500 mt-0.5">0.4s FCP / 0.8s LCP</div>
                        </div>
                        <div className="p-4 rounded-xl bg-slate-900/80 border border-emerald-500/30">
                          <div className="text-3xl font-extrabold text-emerald-400 font-mono">100</div>
                          <div className="text-xs font-semibold text-slate-300 mt-1">Accessibility</div>
                          <div className="text-[10px] text-slate-500 mt-0.5">WCAG AAA Contrast</div>
                        </div>
                        <div className="p-4 rounded-xl bg-slate-900/80 border border-emerald-500/30">
                          <div className="text-3xl font-extrabold text-emerald-400 font-mono">100</div>
                          <div className="text-xs font-semibold text-slate-300 mt-1">Best Practices</div>
                          <div className="text-[10px] text-slate-500 mt-0.5">HTTPS & Modern JS</div>
                        </div>
                        <div className="p-4 rounded-xl bg-slate-900/80 border border-emerald-500/30">
                          <div className="text-3xl font-extrabold text-emerald-400 font-mono">100</div>
                          <div className="text-xs font-semibold text-slate-300 mt-1">SEO Structure</div>
                          <div className="text-[10px] text-slate-500 mt-0.5">Full JSON-LD Schemas</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
        </TubesBackground>
      </section>

      <QuickConsultModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

