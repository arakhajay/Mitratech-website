import React from "react";
import Metadata from "next";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Target, Compass, Award, ShieldCheck, Users, TrendingUp, Lightbulb, ArrowRight, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO, TEAM_MEMBERS } from "@/constants/companyData";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata = {
  title: "About Us | MitraTech Digital Agency",
  description: "Learn about MitraTech's story, mission, core values, leadership team, and history of delivering enterprise web products.",
};

export default function AboutPage() {
  return (
    <div className="space-y-20 py-10">
      {/* About Hero Section */}
      <section className="relative text-center max-w-4xl mx-auto px-4 space-y-6">
        <div className="inline-flex items-center space-x-2 text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/20">
          <Sparkles className="w-4 h-4" />
          <span>Our Story & Mission</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight">
          Pioneering Digital Products That{" "}
          <span className="gradient-text-blue-purple">Empower Growth.</span>
        </h1>

        <p className="text-slate-300 text-base sm:text-xl leading-relaxed">
          {COMPANY_INFO.aboutLong}
        </p>
      </section>

      {/* Main Image Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative h-72 rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="MitraTech Office Team"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-72 rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80"
              alt="UI UX Design Sprint"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-72 rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
              alt="Engineering & Code Review"
              fill
              className="object-cover"
            />
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

      {/* Company History Timeline */}
      <section className="max-w-5xl mx-auto px-4 space-y-12 bg-slate-950/40 py-16 rounded-3xl border border-slate-800/80">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold font-heading text-white">Our Journey</h2>
          <p className="text-slate-400 text-sm">Key milestones in our evolution as an enterprise digital studio.</p>
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

      {/* Leadership Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-bold font-heading text-white">Meet Our Leadership</h2>
          <p className="text-slate-400 text-sm">Experienced architects, designers, and marketing strategists behind MitraTech.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <div key={idx} className="rounded-2xl glass-panel border border-slate-800 overflow-hidden space-y-4 p-5">
              <div className="relative w-full h-60 rounded-xl overflow-hidden">
                <Image src={member.image} alt={member.name} fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-base font-bold font-heading text-white">{member.name}</h3>
                <p className="text-xs text-cyan-400 font-semibold">{member.role}</p>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
