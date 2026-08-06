"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { Sparkles, Mail, Phone, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "@/constants/companyData";

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name is required."),
  email: z.string().email("Please enter a valid work email."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  service: z.string().min(1, "Please select a service."),
  budget: z.string().optional(),
  message: z.string().min(10, "Please provide brief details about your project."),
});

type FormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    await new Promise((res) => setTimeout(res, 1200));
    setIsSubmitting(false);
    router.push("/thank-you");
  };

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=${encodeURIComponent(
    "Hello MitraTech, I would like to schedule a project consultation."
  )}`;

  return (
    <div className="space-y-16 py-10">
      {/* Hero */}
      <section className="text-center max-w-4xl mx-auto px-4 space-y-4">
        <div className="inline-flex items-center space-x-2 text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/20">
          <Sparkles className="w-4 h-4" />
          <span>Get in Touch</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight">
          Let's Discuss Your Next <span className="gradient-text-blue-purple">Digital Product.</span>
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto">
          Have a question or looking to start a new project? Fill out the form below or connect with us directly via phone or WhatsApp.
        </p>
      </section>

      {/* Main Grid: Form + Info Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Info Sidebar */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 rounded-3xl glass-panel border border-slate-800 space-y-6">
            <h2 className="text-2xl font-bold font-heading text-white">Contact Details</h2>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-white">Office Location</div>
                  <div className="text-slate-400 mt-0.5">{COMPANY_INFO.contact.address}</div>
                </div>
              </div>

              <div className="flex items-center space-x-3.5">
                <div className="p-2.5 rounded-xl bg-cyan-600/20 text-cyan-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-white">Phone Support</div>
                  <div className="text-slate-400">{COMPANY_INFO.contact.phone}</div>
                </div>
              </div>

              <div className="flex items-center space-x-3.5">
                <div className="p-2.5 rounded-xl bg-purple-600/20 text-purple-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-white">Direct Email</div>
                  <div className="text-slate-400">{COMPANY_INFO.contact.email}</div>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 rounded-xl bg-amber-600/20 text-amber-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-white">Business Hours</div>
                  <div className="text-slate-400">{COMPANY_INFO.contact.hours}</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center space-x-2 transition-colors shadow-lg shadow-emerald-600/20"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant WhatsApp Chat</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Placeholder */}
          <div className="relative h-64 rounded-3xl overflow-hidden glass-panel border border-slate-800 flex items-center justify-center p-6 text-center">
            <div className="space-y-2">
              <MapPin className="w-8 h-8 text-blue-400 mx-auto animate-bounce" />
              <h3 className="text-base font-bold font-heading text-white">Pune Headquarters</h3>
              <p className="text-xs text-slate-400">Handewadi, Hadapsar, Pune, Maharashtra 411028</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl glass-panel border border-slate-800 space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold font-heading text-white">Send Us a Project Inquiry</h2>
            <p className="text-xs text-slate-400">Fill in your requirements for a free estimate and project roadmap.</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Full Name *</label>
                <input
                  {...register("fullName")}
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm"
                />
                {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName.message}</p>}
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Email Address *</label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="john@company.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm"
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Phone Number *</label>
                <input
                  {...register("phone")}
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm"
                />
                {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Service Interested In *</label>
                <select
                  {...register("service")}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-blue-500 text-sm"
                >
                  <option value="Website Design">Website Design & UI/UX</option>
                  <option value="Website Development">Website Development (Next.js / WordPress)</option>
                  <option value="Web Application Development">Web Application (SaaS / AI / Dashboard)</option>
                  <option value="Social Media Marketing">Social Media Marketing & Reels</option>
                  <option value="Creative Graphic Design">Creative Graphic Design & Branding</option>
                  <option value="Google Ads">Google Ads (PPC Campaigns)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Project Message & Goals *</label>
              <textarea
                {...register("message")}
                rows={4}
                placeholder="Describe your project vision, target timeline, or specific features..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm"
              />
              {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm shadow-xl shadow-blue-500/25 flex items-center justify-center space-x-2 transition-all active:scale-95 disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Sending Message...</span>
              ) : (
                <>
                  <span>Submit Inquiry</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
