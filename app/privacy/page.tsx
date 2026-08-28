import React from "react";

export const metadata = {
  title: "Privacy Policy | MitraTech",
  description: "MitraTech's Privacy Policy outlining data collection, usage, and security practices.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    url: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold font-heading text-white">Privacy Policy</h1>
        <p className="text-xs text-slate-400">Last updated: February 2026</p>
      </div>

      <div className="prose prose-invert max-w-none text-slate-300 space-y-6 text-sm leading-relaxed">
        <p>
          At Mitratech Services (OPC) Pvt Ltd ("MitraTech", "we", "us"), respecting your privacy and protecting your personal data is a fundamental priority.
        </p>

        <h2 className="text-xl font-bold font-heading text-white">1. Information We Collect</h2>
        <p>
          We collect personal details provided directly when submitting project inquiry forms, subscribing to newsletters, or contacting our team. This information includes your name, work email address, phone number, company name, and project requirements.
        </p>

        <h2 className="text-xl font-bold font-heading text-white">2. How We Use Information</h2>
        <p>
          The information collected is used exclusively to evaluate project specifications, send custom proposals, communicate project status updates, and provide client SLA support.
        </p>

        <h2 className="text-xl font-bold font-heading text-white">3. Data Protection & Security</h2>
        <p>
          We employ industry-standard encryption protocols (SSL/TLS), zero-trust access controls, and secure serverless databases to safeguard your information against unauthorized disclosure.
        </p>
      </div>
    </div>
  );
}
