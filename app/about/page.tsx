import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Target, Compass, Award, ShieldCheck, Users, TrendingUp, Lightbulb, ArrowRight, CheckCircle2, UserCheck, MapPin } from "lucide-react";
import { COMPANY_INFO } from "@/constants/companyData";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Mitratech Services (OPC) Pvt Ltd, our founder Ajay Arakh, mission, core principles, and digital engineering capabilities based in Pune, India.",
  alternates: {
    canonical: "https://www.mitratechservices.in/about",
  },
  openGraph: {
    title: "About Us | MitraTech",
    description: "Learn about Mitratech Services (OPC) Pvt Ltd, our founder Ajay Arakh, mission, and digital engineering capabilities based in Pune, India.",
    url: "https://www.mitratechservices.in/about",
    siteName: "Mitratech Services (OPC) Pvt Ltd",
    images: [
      {
        url: "https://www.mitratechservices.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Mitratech Services (OPC) Pvt Ltd",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <div className="space-y-20 py-10">
      {/* About Hero Section */}
      <section className="relative text-center max-w-4xl mx-auto px-4 space-y-6">
        <div className="inline-flex items-center space-x-2 text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/20">
          <Sparkles className="w-4 h-4" />
          <span>Our Story & Leadership</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight">
          Pioneering Digital Products That{" "}
          <span className="gradient-text-blue-purple">Empower Growth.</span>
        </h1>

        <p className="text-slate-300 text-base sm:text-xl leading-relaxed">
          {COMPANY_INFO.aboutLong}
        </p>
      </section>

      {/* Leadership / Founder Profile */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-slate-800 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 flex flex-col items-center text-center">
              <div className="w-28 h-28 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-1 shadow-xl flex items-center justify-center">
                <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center text-cyan-400">
                  <UserCheck className="w-14 h-14" />
                </div>
              </div>
              <h3 className="text-xl font-bold font-heading text-white mt-4">{COMPANY_INFO.founder}</h3>
              <p className="text-xs text-cyan-400 font-semibold">{COMPANY_INFO.founderRole}</p>
              <div className="flex items-center space-x-1 text-slate-400 text-xs mt-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>Pune, Maharashtra, India</span>
              </div>
            </div>

            <div className="md:col-span-8 space-y-4">
              <h4 className="text-lg font-bold font-heading text-white">Leadership Commitment</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Under the technical direction of Ajay Arakh, Mitratech Services (OPC) Pvt Ltd is structured around engineering integrity, transparent client partnerships, and measurable performance standards. We eliminate unnecessary agency layers to deliver direct access to experienced developers and UI/UX designers.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs">
                  <span className="font-bold text-white block">Registered OPC Entity</span>
                  <span className="text-slate-400 text-[11px]">Govt. of India Recognized</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs">
                  <span className="font-bold text-white block">Direct Technical SLA</span>
                  <span className="text-slate-400 text-[11px]">24/7 Dedicated Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-white">Our Core Principles</h2>
          <p className="text-slate-400 text-sm mt-2">Guided by technical excellence, transparent communication, and measurable client results.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPANY_INFO.values.map((val, idx) => (
            <div key={idx} className="p-6 rounded-2xl glass-panel border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-white">{val.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{val.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Company Evolution Timeline */}
      <section className="max-w-5xl mx-auto px-4 space-y-12 bg-slate-950/40 py-16 rounded-3xl border border-slate-800/80">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold font-heading text-white">Our Journey</h2>
          <p className="text-slate-400 text-sm">Key milestones in our evolution as an enterprise digital engineering studio.</p>
        </div>

        <div className="space-y-6">
          {COMPANY_INFO.timeline.map((item, idx) => (
            <div key={idx} className="flex items-start space-x-4 p-5 rounded-2xl glass-panel border border-slate-800">
              <div className="px-3 py-1 rounded-lg bg-blue-600 text-white font-bold font-heading text-sm shrink-0">
                {item.year}
              </div>
              <div>
                <h4 className="text-base font-bold font-heading text-white">{item.title}</h4>
                <p className="text-xs text-slate-400 mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
