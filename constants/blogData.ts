import { BlogPost } from "@/types";

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "post-1",
    slug: "nextjs-15-web-performance-guide",
    title: "How We Achieve 98+ Google Lighthouse Scores in Next.js 15",
    excerpt: "Discover the architectural patterns, image optimization strategies, and server component tricks we use to deliver lightning-fast web applications.",
    content: `
# Mastering Next.js 15 Web Performance

In modern web development, speed is directly linked to business conversion rates. A delay of just 1 second in page load time can reduce conversions by up to 20%.

At MitraTech, every client website is built to achieve sub-second page loads and 95+ Core Web Vitals scores.

## Key Performance Pillars

### 1. React Server Components (RSC)
By default, Next.js 15 App Router components execute on the server. This means zero JavaScript bundle overhead is sent to the client browser for static layout sections.

### 2. Next Image Component Optimization
Using \`next/image\` with WebP/AVIF formats guarantees image compression and prevents layout shifts (CLS):
\`\`\`tsx
import Image from "next/image";

<Image
  src="/hero-banner.jpg"
  alt="MitraTech Agency Hero"
  width={1200}
  height={600}
  priority
/>
\`\`\`

### 3. Font Subsetting & Variable Fonts
We leverage \`next/font\` to automatically self-host Google Fonts like Space Grotesk and Inter with zero layout shift during rendering.

### 4. Dynamic Component Imports
Heavy interactive widgets (like 3D canvas shaders or modal dialogs) are lazy-loaded on client interaction using \`next/dynamic\`.

---

## Conclusion
Building fast websites requires intentional architecture from day one. By prioritizing Server Components and aggressive asset optimization, your business delivers a world-class user experience.
    `,
    coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    category: "Development",
    author: {
      name: "Rohan Kapoor",
      role: "Lead Full Stack Engineer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    },
    publishedAt: "2026-02-01",
    readTime: "5 min read",
    featured: true,
    tags: ["Next.js", "React", "Web Performance", "Core Web Vitals"],
  },
  {
    id: "post-2",
    slug: "ui-ux-design-trends-2026",
    title: "UI/UX Design Trends in 2026: Glassmorphic Micro-Interactions",
    excerpt: "Explore how subtle dark mode gradients, tactile micro-animations, and clean typography elevate modern digital brand identity.",
    content: `
# UI/UX Design Trends Defining 2026

The era of flat, uninspired corporate designs is over. Today's digital audiences demand rich aesthetic experiences that feel responsive, alive, and ultra-premium.

## 1. Advanced Glassmorphism & Backdrop Blurs
Combining translucent background cards with high-contrast glowing borders gives interfaces depth without cluttering readability.

## 2. Space Grotesk & Brutalist Typography
Distinctive heading fonts like Space Grotesk paired with clean body fonts like Inter establish strong visual hierarchy and modern technological authority.

## 3. Micro-Interactions & Hover Lift Effects
Small visual feedbacks—like magnetic button hover states and smooth cards lifting on mouse movement—increase user interaction rates significantly.
    `,
    coverImage: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1200&q=80",
    category: "Design",
    author: {
      name: "Ananya Deshmukh",
      role: "Head of UI/UX Design",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    },
    publishedAt: "2026-01-24",
    readTime: "4 min read",
    featured: true,
    tags: ["UI Design", "UX Trends", "Glassmorphism", "Figma"],
  },
  {
    id: "post-3",
    slug: "google-ads-ppc-cpa-reduction",
    title: "5 Proven Tactics to Reduce Google Ads Cost-Per-Acquisition (CPA)",
    excerpt: "Stop wasting ad budgets. Learn how negative keyword pruning and landing page alignment cut lead acquisition costs by up to 60%.",
    content: `
# Cutting Google Ads CPA Without Sacrificing Lead Volume

Pay-Per-Click advertising can either be your company's most profitable revenue stream or an expensive money pit.

## Step 1: Broad Match Pruning
Ensure broad match keywords are strictly monitored. Add negative keywords weekly to filter out non-commercial search queries.

## Step 2: Dedicated Landing Page Alignment
Never send ad traffic to your home page. Create dedicated, high-intent landing pages with explicit headlines matching the user's search term.

## Step 3: Conversion Value Bidding (Target CPA)
Once your campaign logs 30+ conversions per month, switch to Target CPA automated bidding to allow Google's AI to optimize bid prices.
    `,
    coverImage: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1200&q=80",
    category: "Marketing",
    author: {
      name: "Priya Nair",
      role: "PPC Growth Strategist",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    },
    publishedAt: "2026-01-15",
    readTime: "6 min read",
    featured: false,
    tags: ["Google Ads", "PPC", "Lead Generation", "Marketing"],
  },
];
