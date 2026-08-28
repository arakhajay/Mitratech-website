import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and Conditions of Mitratech Services (OPC) Pvt Ltd governing software development services and website usage.",
  alternates: {
    canonical: "https://www.mitratechservices.in/terms",
  },
  openGraph: {
    title: "Terms & Conditions | MitraTech",
    description: "Terms and Conditions of Mitratech Services (OPC) Pvt Ltd.",
    url: "https://www.mitratechservices.in/terms",
    siteName: "Mitratech Services (OPC) Pvt Ltd",
    images: [{ url: "https://www.mitratechservices.in/og-image.png" }],
  },
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold font-heading text-white">Terms & Conditions</h1>
        <p className="text-xs text-slate-400">Effective Date: February 2026</p>
      </div>

      <div className="prose prose-invert max-w-none text-slate-300 space-y-6 text-sm leading-relaxed">
        <p>
          These Terms and Conditions constitute a legally binding agreement between you (whether individually or on behalf of an enterprise) and <strong>Mitratech Services (OPC) Pvt Ltd</strong> ("MitraTech", "we", "us"), regarding your access to and use of <a href="https://www.mitratechservices.in" className="text-cyan-400 hover:underline">www.mitratechservices.in</a> and our software development and digital marketing services.
        </p>

        <h2 className="text-xl font-bold font-heading text-white">1. Scope of Services</h2>
        <p>
          MitraTech provides custom website design, Next.js web application development, proprietary SaaS tools, branding, and digital growth services. Specific deliverables, project milestones, and pricing schedules are defined in mutually signed Statements of Work (SOW) or digital project agreements.
        </p>

        <h2 className="text-xl font-bold font-heading text-white">2. Intellectual Property Transfer</h2>
        <p>
          Upon complete receipt of all agreed milestone payments, 100% of all intellectual property rights, source code repositories, design prototypes (Figma), and brand collateral created specifically for the client are irrevocably transferred to the client. MitraTech reserves the right to showcase publicly released designs in agency portfolios unless an explicit Non-Disclosure Agreement (NDA) is in place.
        </p>

        <h2 className="text-xl font-bold font-heading text-white">3. Warranties & Quality Assurance</h2>
        <p>
          We warrant that all custom code delivered is built according to industry best practices, complies with modern web standards, and operates substantially in accordance with agreed specifications. A standard 30-day post-launch warranty period is included with all full-stack project deliveries to resolve any unforeseen defects.
        </p>

        <h2 className="text-xl font-bold font-heading text-white">4. Payment Terms & Milestones</h2>
        <p>
          Fixed-price projects are structured around defined milestone deliverables. Invoices are payable within agreed terms. Work commences upon clearance of the initial discovery/design deposit.
        </p>

        <h2 className="text-xl font-bold font-heading text-white">5. Limitation of Liability & Governing Law</h2>
        <p>
          To the maximum extent permitted by applicable law, neither party shall be liable for indirect, incidental, or consequential damages. These terms are governed by and construed in accordance with the laws of India, and the courts located in <strong>Pune, Maharashtra</strong> shall have exclusive jurisdiction over any disputes.
        </p>

        <div className="p-4 rounded-xl glass-panel border border-slate-800 text-xs space-y-1 text-slate-300">
          <p className="font-bold text-white">Mitratech Services (OPC) Pvt Ltd</p>
          <p>Handewadi, Hadapsar, Pune, Maharashtra 411028, India</p>
          <p>Email: <a href="mailto:support@mitratechservices.in" className="text-cyan-400 hover:underline">support@mitratechservices.in</a></p>
        </div>
      </div>
    </div>
  );
}
