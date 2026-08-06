import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Sparkles, ArrowLeft, ExternalLink, CheckCircle2, Star, Quote } from "lucide-react";
import { PORTFOLIO_DATA } from "@/constants/portfolioData";
import { CtaBanner } from "@/components/home/CtaBanner";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PORTFOLIO_DATA.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = PORTFOLIO_DATA.find((p) => p.slug === slug);
  if (!project) return { title: "Case Study Not Found" };

  return {
    title: `${project.title} Case Study | MitraTech`,
    description: project.summary,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = PORTFOLIO_DATA.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-16 py-10">
      {/* Back Button & Title */}
      <section className="max-w-5xl mx-auto px-4 space-y-6">
        <Link
          href="/portfolio"
          className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-400 hover:text-cyan-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </Link>

        <div className="space-y-4">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-blue-600/20 text-cyan-300 text-xs font-bold border border-blue-500/30">
            {project.category} Case Study
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
            {project.title}
          </h1>
          <p className="text-slate-300 text-base sm:text-lg">
            {project.summary}
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-400 border-t border-slate-800">
            <div>Client: <span className="text-white font-semibold">{project.client}</span></div>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-1 text-cyan-400 hover:underline"
              >
                <span>Visit Live Application</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Main Cover Banner */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="relative w-full h-[400px] sm:h-[500px] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Quantified Results Grid */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-8 rounded-3xl glass-panel border border-blue-500/30 text-center">
          {project.results.map((res, i) => (
            <div key={i} className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold font-heading text-white gradient-text-cyan-blue">
                {res.value}
              </div>
              <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">{res.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-2xl glass-panel border border-slate-800 space-y-4">
          <h2 className="text-2xl font-bold font-heading text-white">The Challenge</h2>
          <p className="text-sm text-slate-300 leading-relaxed">{project.challenge}</p>
        </div>

        <div className="p-8 rounded-2xl glass-panel border border-slate-800 space-y-4">
          <h2 className="text-2xl font-bold font-heading text-white">Our Technical Solution</h2>
          <p className="text-sm text-slate-300 leading-relaxed">{project.solution}</p>
        </div>
      </section>

      {/* Tech Stack Used */}
      <section className="max-w-5xl mx-auto px-4 text-center space-y-4">
        <h3 className="text-xl font-bold font-heading text-white">Technologies & Tools</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {project.technologies.map((tech, i) => (
            <span key={i} className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-cyan-300 font-semibold">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Client Testimonial if present */}
      {project.testimonial && (
        <section className="max-w-4xl mx-auto px-4">
          <div className="p-8 rounded-3xl glass-panel border border-purple-500/30 space-y-4">
            <Quote className="w-8 h-8 text-purple-400" />
            <p className="text-base sm:text-lg text-slate-200 italic font-medium leading-relaxed">
              "{project.testimonial.quote}"
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image src={project.testimonial.avatar} alt={project.testimonial.author} fill className="object-cover" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">{project.testimonial.author}</div>
                <div className="text-xs text-slate-400">{project.testimonial.role}, {project.testimonial.company}</div>
              </div>
            </div>
          </div>
        </section>
      )}

      <CtaBanner />
    </div>
  );
}
