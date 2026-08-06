import { TeamMember, JobPosition } from "@/types";

export const COMPANY_INFO = {
  name: "MitraTech",
  tagline: "Transforming Ideas into Powerful Digital Solutions",
  aboutShort:
    "MitraTech is a modern software development and digital marketing agency that helps startups, SMEs, and enterprises build powerful digital products, improve their online presence, and generate measurable business growth.",
  aboutLong:
    "Founded with a vision to bridge the gap between high-end digital engineering and strategic brand growth, MitraTech combines elite UI/UX design, modern full-stack web applications, and hyper-targeted digital marketing campaigns. Our multidisciplinary team works with ambition-driven companies worldwide to deliver software that scales effortlessly and drives real ROI.",
  stats: [
    { label: "Projects Completed", value: "100+", suffix: "" },
    { label: "Client Satisfaction", value: "99%", suffix: "" },
    { label: "Years Experience", value: "5+", suffix: "" },
    { label: "Support & Availability", value: "24/7", suffix: "" },
  ],
  contact: {
    email: "hello@mitratech.com",
    phone: "+91 9579852657",
    whatsapp: "919579852657",
    address: "Handewadi, Hadapsar, Pune, Maharashtra 411028",
    hours: "Mon - Sat: 9:00 AM - 7:00 PM IST",
  },
  socials: {
    twitter: "https://twitter.com/mitratech",
    linkedin: "https://linkedin.com/company/mitratech",
    instagram: "https://instagram.com/mitratech",
    github: "https://github.com/mitratech",
  },
  values: [
    {
      title: "Innovation First",
      description: "We harness the newest web technologies, AI tools, and design trends to keep your business ahead of the competition.",
      icon: "Lightbulb",
    },
    {
      title: "Obsessive Quality",
      description: "From pixel-perfect visual details to clean scalable code, we craft digital products that perform at the highest standard.",
      icon: "ShieldCheck",
    },
    {
      title: "Transparent Collaboration",
      description: "No hidden costs or vague timelines. We keep you informed at every phase with clear roadmaps and weekly updates.",
      icon: "Users",
    },
    {
      title: "Measurable Impact",
      description: "Every website, application, or ad campaign we deliver is optimized specifically to drive user engagement and high conversions.",
      icon: "TrendingUp",
    },
  ],
  timeline: [
    { year: "2020", title: "Agency Founded", description: "MitraTech started as a boutique design studio serving local tech startups." },
    { year: "2021", title: "Expanded Engineering Stack", description: "Integrated Next.js, React, Node.js, and custom cloud architecture into core services." },
    { year: "2023", title: "Crossed 50+ Global Clients", description: "Expanded operations across North America, Europe, and Asia-Pacific." },
    { year: "2025", title: "Enterprise & AI Applications", description: "Launched full-scale SaaS development and custom AI application workflows." },
    { year: "2026", title: "Next-Gen Agency Platform", description: "Continuous growth delivering enterprise-grade web applications and high-conversion ad campaigns." },
  ],
  clientLogos: [
    { name: "Acme Corp", logo: "⚡ ACME" },
    { name: "Apex Labs", logo: "🔺 APEX LABS" },
    { name: "Nova SaaS", logo: "✨ NOVA" },
    { name: "Vortex AI", logo: "🌀 VORTEX" },
    { name: "Starlight Tech", logo: "⭐ STARLIGHT" },
    { name: "Krypton Health", logo: "💎 KRYPTON" },
    { name: "Elevate Global", logo: "📈 ELEVATE" },
  ],
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Vikramaditya Sharma",
    role: "Founder & Chief Architect",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    bio: "Ex-Senior Full Stack Architect with 10+ years scaling cloud platforms and complex web apps.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Ananya Deshmukh",
    role: "Head of UI/UX & Brand Design",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    bio: "Award-winning product designer specialized in human-centric interfaces and glassmorphic micro-interactions.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Rohan Kapoor",
    role: "Lead Full Stack Engineer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    bio: "Next.js & TypeScript wizard passionate about 95+ Lighthouse scores and microservices.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Priya Nair",
    role: "Digital Marketing & PPC Strategist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    bio: "Growth expert who has managed over $2M+ in Meta and Google Ads campaigns with 4.5x average ROAS.",
    linkedin: "#",
    twitter: "#",
  },
];

export const CAREER_POSITIONS: JobPosition[] = [
  {
    id: "job-1",
    title: "Senior Full Stack Next.js Engineer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote / Bengaluru",
    experience: "4+ Years",
    description: "Build ultra-fast Next.js 15 web applications, state management architectures, and backend API integrations for enterprise clients.",
    requirements: [
      "Expertise in TypeScript, Next.js 15 (App Router), and React 19.",
      "Strong understanding of Tailwind CSS, SSR/ISR, and web performance optimization.",
      "Experience with Node.js, REST/GraphQL APIs, and PostgreSQL/Supabase.",
      "Proven track record of delivering clean, tested production code.",
    ],
  },
  {
    id: "job-2",
    title: "Lead UI/UX Designer",
    department: "Design",
    type: "Full-time",
    location: "Remote",
    experience: "3+ Years",
    description: "Design high-converting landing pages, SaaS dashboards, mobile apps, and interactive component libraries in Figma.",
    requirements: [
      "Strong portfolio showcasing modern UI aesthetics, glassmorphic design, and typography.",
      "Proficiency in Figma, interactive prototyping, and design systems.",
      "Deep understanding of user experience design principles, accessibility (WCAG), and responsive layouts.",
      "Experience working alongside frontend engineers.",
    ],
  },
  {
    id: "job-3",
    title: "Google & Meta Ads Growth Specialist",
    department: "Marketing",
    type: "Full-time",
    location: "Hybrid / Bengaluru",
    experience: "3+ Years",
    description: "Plan, launch, and optimize high-ROI PPC search, display, and social media marketing campaigns for B2B and B2C clients.",
    requirements: [
      "Demonstrated experience managing Google Ads (Search, Display, Remarketing) & Meta Ads budgets.",
      "Strong analytical skills with GA4, GTM, custom conversion tracking, and ROAS optimization.",
      "Ability to write compelling ad copy and collaborate on creative visual assets.",
    ],
  },
];
