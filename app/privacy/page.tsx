import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy of Mitratech Services (OPC) Pvt Ltd outlining data handling, security, and DPDP Act compliance.",
  alternates: {
    canonical: "https://www.mitratechservices.in/privacy",
  },
  openGraph: {
    title: "Privacy Policy | MitraTech",
    description: "Privacy Policy and data protection standards of Mitratech Services (OPC) Pvt Ltd.",
    url: "https://www.mitratechservices.in/privacy",
    siteName: "Mitratech Services (OPC) Pvt Ltd",
    images: [{ url: "https://www.mitratechservices.in/og-image.png" }],
  },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold font-heading text-white">Privacy Policy</h1>
        <p className="text-xs text-slate-400">Effective Date: February 2026</p>
      </div>

      <div className="prose prose-invert max-w-none text-slate-300 space-y-6 text-sm leading-relaxed">
        <p>
          At <strong>Mitratech Services (OPC) Pvt Ltd</strong> ("MitraTech", "we", "us", "our"), registered at <strong>Handewadi, Hadapsar, Pune, Maharashtra 411028, India</strong>, protecting your privacy and personal data is a primary commitment. This Privacy Policy governs our collection, processing, and storage practices across our website (<a href="https://www.mitratechservices.in" className="text-cyan-400 hover:underline">www.mitratechservices.in</a>) and our software engineering services in compliance with India’s Digital Personal Data Protection (DPDP) Act and international data privacy benchmarks.
        </p>

        <h2 className="text-xl font-bold font-heading text-white">1. Information We Collect</h2>
        <p>
          When you interact with our website, request project proposals, or contact our support team, we collect information you voluntarily provide:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-slate-300">
          <li><strong>Contact Details:</strong> Full name, business email address, telephone number, and company name.</li>
          <li><strong>Project Specifications:</strong> Technical requirements, target budgets, timelines, and message notes.</li>
          <li><strong>Technical Metadata:</strong> Browser type, operating system, IP address, and anonymized user interaction logs to monitor site performance and security.</li>
        </ul>

        <h2 className="text-xl font-bold font-heading text-white">2. How We Use Your Information</h2>
        <p>
          The information collected is used strictly for legitimate commercial and technical purposes:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-slate-300">
          <li>Evaluating project feasibility and preparing formal design/engineering proposals.</li>
          <li>Delivering customer support, milestone notifications, and contract administration.</li>
          <li>Maintaining website security and preventing fraudulent or malicious form submissions.</li>
          <li>Sending requested newsletter digests (which you can unsubscribe from at any time).</li>
        </ul>

        <h2 className="text-xl font-bold font-heading text-white">3. Data Retention & Sharing</h2>
        <p>
          We retain inquiry records only as long as necessary to fulfill project evaluation and legal compliance obligations. We never sell, rent, or trade your personal data to third parties. Data is only processed through secure infrastructure providers (e.g. encrypted email relay and secure cloud hosting) bound by strict confidentiality agreements.
        </p>

        <h2 className="text-xl font-bold font-heading text-white">4. Data Security</h2>
        <p>
          We implement industry-standard encryption protocols (TLS/SSL in transit and AES encryption at rest), secure access controls, and strict server hardening to safeguard your personal data from unauthorized access or destruction.
        </p>

        <h2 className="text-xl font-bold font-heading text-white">5. Your Privacy Rights</h2>
        <p>
          You have the right to request access to the personal data we hold about you, request corrections, or request deletion of your contact records. To exercise any of these rights, please contact our Grievance Officer.
        </p>

        <h2 className="text-xl font-bold font-heading text-white">6. Grievance & Contact Officer</h2>
        <p>
          For privacy inquiries, data deletion requests, or DPDP compliance questions, please contact:
        </p>
        <div className="p-4 rounded-xl glass-panel border border-slate-800 text-xs space-y-1 text-slate-300">
          <p className="font-bold text-white">Mitratech Services (OPC) Pvt Ltd</p>
          <p>Attn: Privacy & Grievance Officer</p>
          <p>Handewadi, Hadapsar, Pune, Maharashtra 411028, India</p>
          <p>Email: <a href="mailto:support@mitratechservices.in" className="text-cyan-400 hover:underline">support@mitratechservices.in</a></p>
          <p>Phone: +91 8600352657</p>
        </div>
      </div>
    </div>
  );
}
