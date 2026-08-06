import React from "react";
import Link from "next/link";
import { Sparkles, Palette, Code2, Cpu, Share2, PenTool, Target, ArrowRight, CheckCircle2 } from "lucide-react";
import { SERVICES_DATA } from "@/constants/servicesData";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata = {
  title: "Core Services | MitraTech Digital Agency",
  description: "Explore MitraTech's 6 core services: Website Design, Website Development, Web Application Development, Social Media Marketing, Graphic Design, and Google Ads.",
};

const iconMap: Record<string, React.ReactNode> = {
  Palette: <Palette className="w-8 h-8 text-cyan-400" />,
  Code2: <Code2 className="w-8 h-8 text-blue-400" />,
  Cpu: <Cpu className="w-8 h-8 text-purple-400" />,
  Share2: <Share2 className="w-8 h-8 text-pink-400" />,
  PenTool: <PenTool className="w-8 h-8 text-amber-400" />,
  Target: <Target className="w-8 h-8 text-emerald-400" />,
};

export default function ServicesPage() {
  return (
    <div className="space-y-20 py-10">
      {/* Services Hero Header */}
      <section className="text-center max-w-4xl mx-auto px-4 space-y-6">
        <div className="inline-flex items-center space-x-2 text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
          <Sparkles className="w-4 h-4" />
          <span>Full-Spectrum Digital Services</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight">
          Comprehensive Capabilities for Modern{" "}
          <span className="gradient-text-blue-purple">Enterprise Growth.</span>
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
          We combine cutting-edge software architecture, human-centric UI/UX design, and targeted digital marketing to build products that scale.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="p-8 rounded-2xl glass-panel border border-slate-800 flex flex-col justify-between hover:border-blue-500/50 transition-all group"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                    {iconMap[service.iconName]}
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    From {service.pricingStarting}
                  </span>
                </div>

                <h2 className="text-2xl font-bold font-heading text-white group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h2>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {service.fullDescription}
                </p>

                {/* Subcategories list */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">Key Offerings:</span>
                  <div className="grid grid-cols-2 gap-1.5">
                    {service.subCategories.slice(0, 6).map((sub, i) => (
                      <span key={i} className="text-[11px] text-slate-400 flex items-center space-x-1">
                        <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />
                        <span className="truncate">{sub}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800">
                <Link
                  href={`/services/${service.slug}`}
                  className="w-full py-3 rounded-xl bg-slate-800 hover:bg-blue-600 text-white font-semibold text-xs flex items-center justify-center space-x-2 transition-colors"
                >
                  <span>View Detailed Service Page</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
