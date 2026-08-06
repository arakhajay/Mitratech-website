export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  heroImage: string;
  subCategories: string[];
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  benefits: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  techStack: {
    name: string;
    category: string;
    icon: string;
  }[];
  pricingStarting: string;
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: "Website Design" | "Website Development" | "Web Apps" | "E-Commerce" | "Branding" | "Google Ads";
  thumbnail: string;
  gallery: string[];
  summary: string;
  challenge: string;
  solution: string;
  results: {
    label: string;
    value: string;
  }[];
  technologies: string[];
  liveUrl?: string;
  featured: boolean;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
    avatar: string;
  };
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  priceMonthly: number;
  priceAnnually: number;
  description: string;
  popular: boolean;
  features: string[];
  notIncluded: string[];
  ctaText: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  featured: boolean;
  tags: string[];
}

export interface FAQItem {
  id: string;
  category: "General" | "Services" | "Pricing & Contracts" | "Process & Delivery" | "Technical";
  question: string;
  answer: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin: string;
  twitter: string;
}

export interface JobPosition {
  id: string;
  title: string;
  department: string;
  type: "Full-time" | "Part-time" | "Remote" | "Hybrid";
  location: string;
  experience: string;
  description: string;
  requirements: string[];
}
