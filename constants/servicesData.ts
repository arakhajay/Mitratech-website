import { ServiceItem } from "@/types";

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "website-design",
    slug: "website-design",
    title: "Website Design",
    shortDescription:
      "Crafting stunning, human-centric UI/UX design systems, landing pages, corporate websites, and e-commerce layouts that captivate users and boost conversion rates.",
    fullDescription:
      "Our website design team creates bespoke visual experiences tailored to your brand identity. We blend high-end visual aesthetics, modern typography, glassmorphism accents, and intuitive user flows to ensure your website stands out from the competition.",
    iconName: "Palette",
    heroImage:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1200&q=80",
    subCategories: [
      "UI Design",
      "UX Design",
      "Responsive Layouts",
      "High-Converting Landing Pages",
      "Corporate Websites",
      "Business Websites",
      "Portfolio Showcase",
      "E-Commerce Design",
    ],
    features: [
      {
        title: "Pixel-Perfect Layouts",
        description: "Custom grid-aligned designs crafted meticulously in Figma with design tokens and adaptive breakpoints.",
        icon: "LayoutGrid",
      },
      {
        title: "User Journey & Wireframing",
        description: "Strategic user flows and low/high-fidelity prototypes designed to maximize engagement and lead generation.",
        icon: "GitBranch",
      },
      {
        title: "Design System & Style Guides",
        description: "Scalable UI kit including color palettes, typography scales, interactive component states, and icon sets.",
        icon: "Sparkles",
      },
      {
        title: "Mobile-First Responsiveness",
        description: "Flawless rendering and touch-optimized navigation across smartphones, tablets, laptops, and ultra-wide displays.",
        icon: "Smartphone",
      },
    ],
    benefits: [
      "Substantially higher conversion rates through user-tested layouts",
      "Stronger brand credibility and premium market positioning",
      "Faster developer handoff with ready-to-code design tokens",
      "WCAG AA compliance for accessibility and inclusiveness",
    ],
    process: [
      { step: 1, title: "Discovery & UX Research", description: "Analyzing target demographics, competitor interfaces, and conversion goals." },
      { step: 2, title: "Wireframing & Sitemap", description: "Mapping structural layouts, content hierarchy, and navigation flow." },
      { step: 3, title: "High-Fidelity UI Design", description: "Applying visual styling, dark/light themes, typography, and micro-interactions." },
      { step: 4, title: "Interactive Prototype", description: "Testing user interactions, button states, and screen transitions." },
      { step: 5, title: "Client Review & Handoff", description: "Refining details and supplying developer-ready assets and design specs." },
    ],
    techStack: [
      { name: "Figma", category: "Design System", icon: "Figma" },
      { name: "Adobe XD", category: "Prototyping", icon: "Layers" },
      { name: "Framer", category: "Interactive Mockups", icon: "Frame" },
      { name: "Tailwind CSS", category: "Design Tokens", icon: "Code" },
    ],
    pricingStarting: "₹25,000",
    faqs: [
      {
        question: "How long does a custom website design project take?",
        answer: "A standard landing page or corporate website design typically takes 1 to 3 weeks depending on the number of custom pages and prototype complexity.",
      },
      {
        question: "Will I receive full source Figma files?",
        answer: "Yes, once approved, you get 100% ownership of all Figma source files, reusable component libraries, and visual assets.",
      },
    ],
  },
  {
    id: "website-development",
    slug: "website-development",
    title: "Website Development",
    shortDescription:
      "Engineered for extreme speed and scalability. Building modern websites using Next.js 15, React 19, TypeScript, Headless CMS, WordPress, and Shopify.",
    fullDescription:
      "We build production-ready, lightning-fast websites engineered with modern frontend frameworks, optimized backend architecture, and seamless CMS integrations. Experience sub-second load times and 95+ Google Lighthouse scores.",
    iconName: "Code2",
    heroImage:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    subCategories: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Node.js",
      "WordPress Custom Themes",
      "Shopify E-Commerce",
      "Headless CMS (Sanity / Strapi)",
      "Performance Optimization",
    ],
    features: [
      {
        title: "Sub-Second Load Times",
        description: "Optimized server-side rendering (SSR), image compression, and dynamic code-splitting for high speed.",
        icon: "Zap",
      },
      {
        title: "Headless & Custom CMS",
        description: "Empower non-technical team members to manage content effortless via Sanity, Strapi, WordPress, or Shopify.",
        icon: "Database",
      },
      {
        title: "SEO & OpenGraph Foundation",
        description: "Built-in structured JSON-LD data, semantic HTML5 tags, dynamic sitemaps, and social share previews.",
        icon: "Search",
      },
      {
        title: "Secure & Scalable Infrastructure",
        description: "Deployed on Vercel or AWS with edge caching, automated SSL certificates, and DDOS protection.",
        icon: "Shield",
      },
    ],
    benefits: [
      "Top Google Lighthouse performance scores (95+)",
      "Higher Google search engine rankings due to Core Web Vitals excellence",
      "Effortless content management without developer bottleneck",
      "Bulletproof security with static generation & serverless APIs",
    ],
    process: [
      { step: 1, title: "Architecture & Tech Setup", description: "Configuring repository, build pipelines, and CMS schemas." },
      { step: 2, title: "Frontend Implementation", description: "Coding modular TypeScript & React components with Tailwind CSS." },
      { step: 3, title: "Backend & CMS Integration", description: "Connecting APIs, form handlers, database queries, and content pipelines." },
      { step: 4, title: "Performance Tuning & Testing", description: "Audit for Core Web Vitals, cross-browser support, and responsiveness." },
      { step: 5, title: "Deployment & Training", description: "Deploying to production on Vercel/AWS and training your team." },
    ],
    techStack: [
      { name: "Next.js 15", category: "Framework", icon: "Globe" },
      { name: "React 19", category: "UI Library", icon: "Atom" },
      { name: "TypeScript", category: "Language", icon: "FileCode" },
      { name: "Tailwind CSS", category: "Styling", icon: "Wind" },
      { name: "Node.js", category: "Backend", icon: "Server" },
      { name: "Vercel", category: "Hosting", icon: "Cloud" },
    ],
    pricingStarting: "₹45,000",
    faqs: [
      {
        question: "Do you build custom WordPress or Shopify sites?",
        answer: "Yes! We build high-performance custom WordPress themes, custom WooCommerce stores, and Headless Shopify implementations.",
      },
      {
        question: "How do you ensure fast page speeds?",
        answer: "We leverage server-side rendering, static generation, next/image optimization, clean code splitting, and edge caching to guarantee 95+ Core Web Vitals scores.",
      },
    ],
  },
  {
    id: "web-application-development",
    slug: "web-application-development",
    title: "Web Application Development",
    shortDescription:
      "Enterprise-grade custom web apps, SaaS platforms, internal tools, CRM/ERP dashboards, and AI-powered web applications built to scale.",
    fullDescription:
      "We design and build robust web applications that solve complex business challenges. From multi-tenant SaaS products and executive dashboards to custom internal workflow tools and AI app integrations, our team delivers resilient software architectures.",
    iconName: "Cpu",
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    subCategories: [
      "SaaS Platforms",
      "CRM Systems",
      "ERP Solutions",
      "Analytics Dashboards",
      "AI Applications",
      "Internal Business Tools",
      "Enterprise Software",
      "Custom Web Apps",
    ],
    features: [
      {
        title: "Multi-Tenant SaaS Architecture",
        description: "Secure user authentication, role-based access control (RBAC), subscription management, and database isolation.",
        icon: "Lock",
      },
      {
        title: "Real-Time Data Visualization",
        description: "Interactive charts, live WebSocket streaming, tabular data grids, and automated report generation.",
        icon: "BarChart3",
      },
      {
        title: "AI Integration & Workflows",
        description: "Connecting OpenAI, Anthropic, or custom AI models for automated text, image, and predictive data processing.",
        icon: "Bot",
      },
      {
        title: "Robust REST & GraphQL APIs",
        description: "Well-documented backend API endpoints designed for high throughput and seamless integration.",
        icon: "Workflow",
      },
    ],
    benefits: [
      "Streamlined business operations and automated manual workflows",
      "Scalable infrastructure capable of handling millions of requests",
      "Enhanced data security with encrypted databases and multi-factor auth",
      "Rapid time-to-market with modular component architecture",
    ],
    process: [
      { step: 1, title: "Product Strategy & Specs", description: "Defining system scope, user roles, database models, and API contracts." },
      { step: 2, title: "Database & Backend Design", description: "Setting up PostgreSQL/Supabase, auth flows, and serverless edge functions." },
      { step: 3, title: "Frontend Dashboard Build", description: "Developing responsive client views, data tables, and interactive controls." },
      { step: 4, title: "Integration & Security Audit", description: "Testing payment gateways (Stripe/Razorpay), AI workflows, and security." },
      { step: 5, title: "Continuous CI/CD Release", description: "Automated test suites, staging environments, and production deployment." },
    ],
    techStack: [
      { name: "React 19", category: "Frontend", icon: "Atom" },
      { name: "Node.js", category: "API Backend", icon: "Server" },
      { name: "Supabase / Postgres", category: "Database", icon: "Database" },
      { name: "Firebase", category: "Auth & Storage", icon: "Flame" },
      { name: "Docker", category: "Containers", icon: "Box" },
      { name: "AWS", category: "Cloud Infra", icon: "Cloud" },
    ],
    pricingStarting: "₹95,000",
    faqs: [
      {
        question: "Can you help us build an MVP for our startup?",
        answer: "Absolutely. We specialize in fast-track MVP development (4-8 weeks) so you can validate your SaaS or AI product with real users quickly.",
      },
      {
        question: "Do you offer post-launch maintenance and updates?",
        answer: "Yes, we provide dedicated SLA maintenance plans including server monitoring, security patches, feature enhancements, and 24/7 technical support.",
      },
    ],
  },
  {
    id: "social-media-marketing",
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    shortDescription:
      "Data-driven social media management, creative content strategy, high-engaging Instagram Reels, LinkedIn brand building, and paid campaign execution.",
    fullDescription:
      "Turn your social channels into predictable customer acquisition engines. We combine creative storytelling, trending Reel production, custom graphic design, content calendars, and targeted paid ads to grow your brand authority and audience engagement.",
    iconName: "Share2",
    heroImage:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80",
    subCategories: [
      "Instagram Marketing",
      "Facebook Growth",
      "LinkedIn B2B Strategy",
      "Content Strategy",
      "Monthly Content Calendar",
      "Reels & Short-Form Video",
      "Paid Campaign Management",
      "Brand Reputation Growth",
    ],
    features: [
      {
        title: "Strategic Content Planning",
        description: "Monthly content calendars aligned with product launches, industry trends, and target customer pain points.",
        icon: "Calendar",
      },
      {
        title: "Short-Form Video Production",
        description: "Scriptwriting, visual editing, and motion typography for viral Instagram Reels, YouTube Shorts, and TikToks.",
        icon: "Video",
      },
      {
        title: "B2B LinkedIn Positioning",
        description: "Thought leadership posts, carousel decks, and outreach strategies to attract high-value corporate clients.",
        icon: "Linkedin",
      },
      {
        title: "Community & Analytics",
        description: "Daily audience engagement, comment moderation, and monthly performance report metrics.",
        icon: "TrendingUp",
      },
    ],
    benefits: [
      "Consistent, high-quality brand presence across all major social networks",
      "Accelerated follower growth and organic reach",
      "Qualified lead generation through organic content and paid campaigns",
      "Detailed monthly analytics tracking ROI and engagement rates",
    ],
    process: [
      { step: 1, title: "Brand Audit & Competitor Review", description: "Evaluating existing profile performance and audience sentiment." },
      { step: 2, title: "Content Strategy & Calendar", description: "Developing content pillars, tone of voice, and 30-day posting schedules." },
      { step: 3, title: "Asset Creation & Video Editing", description: "Designing graphics, carousels, ad creatives, and edited video reels." },
      { step: 4, title: "Publishing & Community Management", description: "Posting at peak traffic times and responding to follower interactions." },
      { step: 5, title: "Reporting & Optimization", description: "Analyzing reach metrics to continuously refine content performance." },
    ],
    techStack: [
      { name: "Canva Pro", category: "Design", icon: "Image" },
      { name: "Premiere Pro / CapCut", category: "Video Editing", icon: "Film" },
      { name: "Buffer / Hootsuite", category: "Scheduling", icon: "Clock" },
      { name: "Meta Business Suite", category: "Analytics", icon: "BarChart" },
    ],
    pricingStarting: "₹20,000 / mo",
    faqs: [
      {
        question: "How many posts per week do you publish?",
        answer: "Our standard plans include 4-5 high-quality posts per week including a mix of carousels, motion graphics, and video Reels.",
      },
      {
        question: "Do you handle both organic content and paid ads?",
        answer: "Yes, we handle complete organic social growth as well as Meta Ads (Facebook & Instagram) for lead generation and brand awareness.",
      },
    ],
  },
  {
    id: "creative-graphic-design",
    slug: "creative-graphic-design",
    title: "Creative Graphic Design",
    shortDescription:
      "Transforming brand identities with iconic logos, comprehensive brand design systems, social media assets, marketing brochures, flyers, and business cards.",
    fullDescription:
      "A strong brand identity creates instant trust. Our creative studio designs memorable logos, visual style guides, social media marketing kits, print collateral, and packaging designs that leave a lasting impression on your customers.",
    iconName: "PenTool",
    heroImage:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80",
    subCategories: [
      "Logo Design",
      "Complete Brand Identity",
      "Social Media Post Creatives",
      "Brochures & Catalogs",
      "Flyers & Postcards",
      "Business Cards & Stationery",
      "Banner & Billboard Design",
      "Marketing Creatives",
    ],
    features: [
      {
        title: "Custom Logo Design",
        description: "Vector logos crafted with deep brand strategy, versatile iconography, and typography pairings.",
        icon: "Award",
      },
      {
        title: "Comprehensive Brand Guidelines",
        description: "A complete brand manual covering logo usage, color hierarchy, font rules, and tone of voice.",
        icon: "BookOpen",
      },
      {
        title: "Marketing & Ad Creatives",
        description: "Eye-catching visual designs formatted for display ad banners, billboard prints, and social feeds.",
        icon: "Layers",
      },
      {
        title: "Print-Ready Collateral",
        description: "High-resolution CMYK vector files ready for professional printing (Brochures, Flyers, Packaging).",
        icon: "Printer",
      },
    ],
    benefits: [
      "Unforgettable brand image that separates you from market competitors",
      "Unified visual consistency across print, web, and digital advertising",
      "Vector files ready for high-resolution printing or digital usage",
      "Faster turnaround time with multiple initial design concepts",
    ],
    process: [
      { step: 1, title: "Brand Questionnaire & Discovery", description: "Uncovering your core story, brand personality, and visual inspiration." },
      { step: 2, title: "Concept Brainstorming", description: "Sketching multiple unique logo concepts and visual identity options." },
      { step: 3, title: "Concept Presentation", description: "Reviewing 3 distinct design directions with realistic mockups." },
      { step: 4, title: "Refinement & Brand Kit", description: "Fine-tuning typography, colors, and building full brand guidelines." },
      { step: 5, title: "Final Asset Delivery", description: "Delivering vector SVG, AI, EPS, PNG, PDF, and print-ready packages." },
    ],
    techStack: [
      { name: "Adobe Illustrator", category: "Vector Design", icon: "PenTool" },
      { name: "Adobe Photoshop", category: "Image Editing", icon: "Image" },
      { name: "Adobe InDesign", category: "Print Layouts", icon: "BookOpen" },
      { name: "Figma", category: "Digital Assets", icon: "Figma" },
    ],
    pricingStarting: "₹15,000",
    faqs: [
      {
        question: "How many logo concepts do I get to choose from?",
        answer: "We provide 3 to 5 unique logo design concepts in the initial round, followed by unlimited revisions on your chosen direction.",
      },
      {
        question: "What file formats will I receive?",
        answer: "You will receive vector formats (AI, EPS, SVG) and web formats (PNG, JPG, PDF) along with brand color hex codes and font files.",
      },
    ],
  },
  {
    id: "google-ads",
    slug: "google-ads",
    title: "Google Ads (PPC)",
    shortDescription:
      "Maximize ROI with precision-targeted Google Search Ads, Display Campaigns, Remarketing, PPC Lead Generation, and Conversion Tracking.",
    fullDescription:
      "Capture high-intent buyers exactly when they are searching for your products or services. Our certified Google Ads managers optimize keywords, write high-converting ad copy, build dedicated landing pages, and continuously refine bids to lower your CPA.",
    iconName: "Target",
    heroImage:
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1200&q=80",
    subCategories: [
      "Google Search Ads",
      "Display Network Ads",
      "YouTube Video Campaigns",
      "Remarketing Campaigns",
      "High-Intent Lead Generation",
      "Conversion Tracking & GTM",
      "PPC Bid Optimization",
      "Continuous Campaign Management",
    ],
    features: [
      {
        title: "Keyword Intent Research",
        description: "Identifying high-converting commercial keywords and negative keyword lists to prevent wasted ad spend.",
        icon: "Search",
      },
      {
        title: "A/B Tested Ad Copywriting",
        description: "Crafting compelling headlines, descriptions, ad extensions, and responsive search ads.",
        icon: "FileText",
      },
      {
        title: "Conversion Tracking Setup",
        description: "Configuring Google Tag Manager (GTM) and GA4 to track calls, form fills, purchases, and lead values accurately.",
        icon: "CheckCircle2",
      },
      {
        title: "Bid Strategy & CPA Reduction",
        description: "Continuous automated & manual bid adjustments (Target CPA / Target ROAS) to maximize conversion volume.",
        icon: "DollarSign",
      },
    ],
    benefits: [
      "Immediate top-of-page visibility on Google search results",
      "Lower Cost Per Acquisition (CPA) and higher conversion rates",
      "Complete transparency into cost per lead and revenue generated",
      "100% control over daily advertising budgets",
    ],
    process: [
      { step: 1, title: "Account & Competitor Audit", description: "Analyzing current campaigns or setting up a brand-new ad account." },
      { step: 2, title: "Keyword & Audience Research", description: "Mapping search intent, search volumes, and competitor bidding strategy." },
      { step: 3, title: "Ad Copy & Landing Page Alignment", description: "Writing ad copy and building high-converting dedicated landing pages." },
      { step: 4, title: "Tracking & Campaign Launch", description: "Verifying conversion tags in GTM and setting live campaign bids." },
      { step: 5, title: "Daily Optimization & Reporting", description: "Pruning negative keywords, testing ad variations, and sending weekly reports." },
    ],
    techStack: [
      { name: "Google Ads Editor", category: "Campaigns", icon: "Target" },
      { name: "Google Tag Manager", category: "Tracking", icon: "Tag" },
      { name: "Google Analytics 4", category: "Analytics", icon: "BarChart2" },
      { name: "SEMrush", category: "Keyword Research", icon: "Search" },
    ],
    pricingStarting: "₹18,000 / mo",
    faqs: [
      {
        question: "Is ad spend included in your management fee?",
        answer: "No, the ad spend budget goes directly to Google Ads billed to your credit card. Our fee is for campaign strategy, copy, management, and optimization.",
      },
      {
        question: "How soon can we expect results from Google Ads?",
        answer: "Search ads start driving targeted traffic to your site as soon as the campaign goes live. Lead volume usually stabilizes within 1 to 2 weeks as Google's algorithm optimizes bids.",
      },
    ],
  },
];
