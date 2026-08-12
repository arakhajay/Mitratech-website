export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  badge: string;
  iconName: string;
  shortDescription: string;
  fullDescription: string;
  externalUrl: string;
  ctaText: string;
  secondaryCtaText: string;
  heroImage: string;
  stats: { label: string; value: string }[];
  keyHighlights: string[];
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  integrations?: string[];
  pricingTiers?: {
    name: string;
    price: string;
    period?: string;
    description: string;
    highlights: string[];
    popular?: boolean;
    ctaText: string;
  }[];
}

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "zivox-agent",
    slug: "zivox-agent",
    name: "Zivox Agent",
    tagline: "Train a custom AI chatbot on your website, PDFs, and documents in 2 minutes",
    badge: "AI Conversational Agent",
    iconName: "Bot",
    shortDescription: "Custom AI Chatbot trained on your knowledge base. Automate support, qualify prospects, and handle 24/7 customer workflows.",
    fullDescription: "Zivox Agent turns static contact forms into engaging, LLM-powered conversations. It ingests your website, PDFs, Notion pages, and docs to capture qualified leads, resolve support tickets with verified citations, and trigger automated API workflows 24/7.",
    externalUrl: "https://www.zivoxagent.com/",
    ctaText: "Build Your AI Agent for Free",
    secondaryCtaText: "Explore Live Demo",
    heroImage: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
    stats: [
      { label: "Active Deployments", value: "5,000+" },
      { label: "Setup Time", value: "< 2 Mins" },
      { label: "Support Resolution", value: "85%" },
      { label: "Citation Accuracy", value: "99.4%" },
    ],
    keyHighlights: [
      "Truth-First engine with clickable document citations",
      "Multi-channel deployment: WhatsApp, Slack, Telegram, Discord & Web",
      "Agentic RAG workflows to check orders & book meetings",
      "Real-time CRM sync with HubSpot, Shopify & Zapier",
    ],
    features: [
      {
        title: "Truth-First Engine with Citations",
        description: "Sticks strictly to the data you provide. Every answer comes with clickable citations showing exact document pages or URLs.",
        icon: "ShieldCheck",
      },
      {
        title: "Instant Multi-Source Training",
        description: "Crawl website URLs automatically, drag-and-drop PDFs/CSVs, or sync Notion and Google Drive knowledge bases with 1-click.",
        icon: "Brain",
      },
      {
        title: "Omnichannel Deployment",
        description: "Engage users where they live: WhatsApp (2B+ users), Slack teams, Telegram, Discord, and customizable website widgets.",
        icon: "MessageSquare",
      },
      {
        title: "Agentic RAG & API Workflows",
        description: "Don't just answer questions—perform real actions! Check order status, edit reservations, and trigger webhooks automatically.",
        icon: "Zap",
      },
    ],
    integrations: [
      "WhatsApp",
      "Slack",
      "Telegram",
      "Zapier",
      "Shopify",
      "HubSpot",
      "WordPress",
      "Discord",
    ],
    pricingTiers: [
      {
        name: "Starter",
        price: "$19",
        period: "/month",
        description: "Ideal for individuals & new merchants",
        highlights: [
          "2,000 messages/month",
          "2 AI Chatbots",
          "10MB training limit",
          "Web, Telegram & Discord",
          "Remove brand watermark",
        ],
        ctaText: "Start 7-Day Free Trial",
      },
      {
        name: "Growth",
        price: "$49",
        period: "/month",
        popular: true,
        description: "For growing businesses & active stores",
        highlights: [
          "5,000 messages/month",
          "5 AI Chatbots",
          "WhatsApp integration included",
          "Batch CRM Sync (every 6 hours)",
          "Advanced conversation analytics",
        ],
        ctaText: "Start 7-Day Free Trial",
      },
      {
        name: "Professional",
        price: "$149",
        period: "/month",
        description: "For power users & enterprise teams",
        highlights: [
          "15,000 messages/month",
          "10 AI Chatbots",
          "WhatsApp Full HSM Support",
          "Real-time CRM Sync",
          "Agentic RAG (API action triggers)",
        ],
        ctaText: "Start 7-Day Free Trial",
      },
      {
        name: "Enterprise",
        price: "Custom",
        description: "For large organizations & agency white-labeling",
        highlights: [
          "Unlimited messages & chatbots",
          "Full White-Label Branding",
          "BYOK Mode (OpenAI / Anthropic)",
          "Dedicated Success Manager",
          "SLA & Custom Security Contracts",
        ],
        ctaText: "Contact Product Sales",
      },
    ],
  },
  {
    id: "leadspark",
    slug: "leadspark",
    name: "LeadSpark AI",
    tagline: "Targeted B2B/B2C Lead Scraper, Data Enrichment & Intelligent Database",
    badge: "Lead Scraper & Intelligence",
    iconName: "Search",
    shortDescription: "Scrape, structure, manage, and export high-value B2B/B2C leads using Apify actors with your own API key.",
    fullDescription: "LeadSpark AI empowers sales teams, growth marketers, and digital agencies to extract verified leads across Google Maps, LinkedIn, Twitter/X, and public web directories. Using your own Apify API key, scrape millions of contacts with zero platform markups.",
    externalUrl: "https://leadspark-apify.vercel.app/",
    ctaText: "Launch LeadSpark Platform",
    secondaryCtaText: "View Scraper Features",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    stats: [
      { label: "Scraping Actors", value: "50+ Ready" },
      { label: "Cost Savings", value: "70% BYOK" },
      { label: "Lead Email Accuracy", value: "98.2%" },
      { label: "Export Speed", value: "Instant CSV" },
    ],
    keyHighlights: [
      "Apify Actor engine for Google Maps, LinkedIn & directory scraping",
      "BYO API key architecture with 0% markup on raw scraping compute",
      "Automated lead enrichment with verified emails & phone numbers",
      "1-click export to CSV, JSON, HubSpot & Salesforce",
    ],
    features: [
      {
        title: "Multi-Platform Scraper Engine",
        description: "Run targeted search queries across Google Maps local businesses, LinkedIn profiles, Twitter/X, and niche B2B directories.",
        icon: "Search",
      },
      {
        title: "BYO API Key Architecture",
        description: "Connect your personal Apify API key to scrape millions of leads at wholesale rates without markup or hidden fees.",
        icon: "Key",
      },
      {
        title: "Lead Verification & Enrichment",
        description: "Validate email deliverables, scrub duplicates, format phone numbers, and enrich leads with company size & social links.",
        icon: "CheckCircle",
      },
      {
        title: "Seamless Export & CRM Sync",
        description: "Download structured JSON or CSV files instantly, or auto-sync hot leads directly to your sales pipeline.",
        icon: "FileSpreadsheet",
      },
    ],
  },
];
