"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { COMPANY_INFO } from "@/constants/companyData";
import { SERVICES_DATA } from "@/constants/servicesData";

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setNewsletterEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="relative bg-slate-950 text-slate-300 pt-16 pb-12 overflow-hidden border-t border-slate-800">
      {/* Background Ambient Glowing Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-purple-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-800/80">
          {/* Brand Info & Newsletter */}
          <div className="lg:col-span-2 space-y-4 pr-4">
            <Link href="/" className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-purple-600 to-cyan-400 p-0.5 shadow-md shadow-blue-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="text-xl font-bold font-heading text-white tracking-tight">
                Mitra<span className="text-blue-500">Tech</span>
              </span>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {COMPANY_INFO.aboutShort}
            </p>

            {/* Newsletter */}
            <div className="pt-2">
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2">
                Subscribe to Digital Growth Insights
              </h4>
              {subscribed ? (
                <div className="flex items-center space-x-2 text-emerald-400 text-xs font-medium bg-emerald-500/10 p-2.5 rounded-lg border border-emerald-500/20">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Subscribed! Check your inbox for updates.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex max-w-sm">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your work email"
                    required
                    className="w-full px-3.5 py-2.5 rounded-l-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-r-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center justify-center transition-colors"
                    aria-label="Subscribe to newsletter"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-blue-400 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-blue-400 transition-colors">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-400 transition-colors">
                  Blog & Articles
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* SaaS Products */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              SaaS Products
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/products" className="hover:text-cyan-400 font-semibold transition-colors">
                  Products Hub
                </Link>
              </li>
              <li>
                <Link href="/products/zivox-agent" className="hover:text-cyan-400 transition-colors">
                  Zivox Agent (AI Bot)
                </Link>
              </li>
              <li>
                <a
                  href="https://www.zivoxagent.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-500 hover:text-cyan-400 transition-colors flex items-center space-x-1"
                >
                  <span>Zivox Official App</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li className="pt-1">
                <Link href="/products/leadspark" className="hover:text-purple-400 transition-colors">
                  LeadSpark AI Scraper
                </Link>
              </li>
              <li>
                <a
                  href="https://leadspark-apify.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-500 hover:text-purple-400 transition-colors flex items-center space-x-1"
                >
                  <span>LeadSpark App</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Reach Us */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Reach Us
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.contact.address}</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{COMPANY_INFO.contact.phone}</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                <span>{COMPANY_INFO.contact.email}</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.contact.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} Mitratech Services (OPC) Pvt Ltd. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/faq" className="hover:text-slate-300 transition-colors">
              FAQs
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
