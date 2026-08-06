import { PricingPlan } from "@/types";

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "plan-starter",
    name: "Starter Package",
    badge: "Ideal for Startups & Small Businesses",
    priceMonthly: 29999,
    priceAnnually: 24999,
    description: "Essential web design and digital setup to establish a high-converting digital presence quickly.",
    popular: false,
    features: [
      "Custom 5-Page Responsive Website Design",
      "Next.js 15 & React 19 Frontend Build",
      "Mobile-First Responsive Layouts",
      "Basic On-Page SEO & JSON-LD Setup",
      "Contact Form with Email Notifications",
      "Google Analytics 4 & GTM Setup",
      "1 Month Free Maintenance & Support",
      "2-Week Fast Delivery",
    ],
    notIncluded: [
      "Headless CMS Integration",
      "Custom Web App / SaaS Backend",
      "Dedicated Ad Campaign Management",
    ],
    ctaText: "Get Started Now",
  },
  {
    id: "plan-pro",
    name: "Professional Growth",
    badge: "Most Popular Strategy",
    priceMonthly: 59999,
    priceAnnually: 49999,
    description: "Complete full-stack website engineering, custom CMS, and high-ROI digital marketing execution.",
    popular: true,
    features: [
      "Custom Multi-Page Web Product (up to 15 pages)",
      "Next.js 15 + Headless CMS (Sanity/WordPress)",
      "High-Fidelity Figma Design System included",
      "Full On-Page & Technical SEO Setup",
      "Social Media Marketing (16 Creatives + 4 Reels/mo)",
      "Google Ads Campaign Setup & Management",
      "Priority 24/7 Slack & Phone Support",
      "3 Months Dedicated Technical Maintenance",
    ],
    notIncluded: [
      "Complex Multi-Tenant SaaS Engine",
    ],
    ctaText: "Choose Pro Growth",
  },
  {
    id: "plan-enterprise",
    name: "Enterprise Custom",
    badge: "For Scaled Enterprises & SaaS",
    priceMonthly: 119999,
    priceAnnually: 99999,
    description: "Custom web applications, multi-tenant SaaS architecture, AI integration, and dedicated growth team.",
    popular: false,
    features: [
      "Full Custom Web Application or SaaS Platform",
      "Supabase / PostgreSQL / Node.js Backend Engine",
      "AI API Integrations (OpenAI, Anthropic, Custom)",
      "Advanced Analytics Dashboard & WebSockets",
      "Omnichannel Marketing & Dedicated PPC Specialist",
      "Unlimited Design & Code Refinements",
      "99.9% Uptime Guarantee & Dedicated SLA",
      "Dedicated Senior Project Architect",
    ],
    notIncluded: [],
    ctaText: "Request Enterprise Consultation",
  },
];

export const PRICING_FEATURE_MATRIX = [
  {
    category: "Design & User Experience",
    features: [
      { name: "Figma UI/UX Prototypes", starter: "5 Pages", pro: "15 Pages", enterprise: "Unlimited" },
      { name: "Custom Glassmorphic Dark Mode", starter: true, pro: true, enterprise: true },
      { name: "Design System & Asset Kit", starter: false, pro: true, enterprise: true },
      { name: "Micro-Animations & Motion Design", starter: "Standard", pro: "Advanced", enterprise: "Bespoke GSAP" },
    ],
  },
  {
    category: "Development & Engineering",
    features: [
      { name: "Next.js 15 & React 19 Engine", starter: true, pro: true, enterprise: true },
      { name: "Google Core Web Vitals (95+)", starter: true, pro: true, enterprise: true },
      { name: "Headless CMS Integration", starter: false, pro: true, enterprise: true },
      { name: "Custom Database & User Auth", starter: false, pro: "Basic", enterprise: "Enterprise SaaS" },
      { name: "AI Application Integration", starter: false, pro: false, enterprise: true },
    ],
  },
  {
    category: "Marketing & Lead Growth",
    features: [
      { name: "Technical SEO & Schema Markup", starter: "Basic", pro: "Advanced", enterprise: "Custom Strategy" },
      { name: "Social Media Campaign Management", starter: false, pro: "Included", enterprise: "Dedicated Team" },
      { name: "Google Search & Display Ads", starter: false, pro: "Included", enterprise: "Enterprise PPC" },
      { name: "Conversion Rate Optimization (CRO)", starter: false, pro: true, enterprise: true },
    ],
  },
];
