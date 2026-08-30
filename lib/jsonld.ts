export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mitratech Services (OPC) Pvt Ltd",
    "alternateName": "MitraTech",
    "legalName": "Mitratech Services (OPC) Pvt Ltd",
    "url": "https://www.mitratechservices.in/",
    "logo": "https://www.mitratechservices.in/logo.png",
    "description": "Transforming Ideas into Powerful Digital Solutions. Premium website design, Next.js web applications, SaaS products, branding, and Google Ads PPC agency based in Pune, India.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Handewadi, Hadapsar",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411028",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+919579852657",
      "email": "support@mitratechservices.in",
      "contactType": "Customer Support",
      "areaServed": ["IN", "US", "GB", "AE", "AU", "Worldwide"],
      "availableLanguage": ["English", "Hindi", "Marathi"]
    },
    "founder": {
      "@type": "Person",
      "name": "Ajay Arakh",
      "jobTitle": "Founder & Director"
    },
    "knowsAbout": [
      "Next.js Development",
      "Full-Stack Web Applications",
      "Custom SaaS Engineering",
      "UI/UX Design & Glassmorphism",
      "Google Ads PPC Lead Generation",
      "AI Chatbot Automation (Zivox Agent)",
      "B2B Lead Scraping (LeadSpark AI)"
    ]
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Mitratech Services (OPC) Pvt Ltd",
    "alternateName": "MitraTech Pune",
    "image": "https://www.mitratechservices.in/og-image.png",
    "url": "https://www.mitratechservices.in/",
    "logo": "https://www.mitratechservices.in/logo.png",
    "priceRange": "₹₹",
    "telephone": "+919579852657",
    "email": "support@mitratechservices.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Handewadi, Hadapsar",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411028",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 18.4967,
      "longitude": 73.9417
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "19:00"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Pune"
      },
      {
        "@type": "Country",
        "name": "India"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "MitraTech Software & Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Website Design"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Next.js Website Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Application & SaaS Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Google Ads PPC Growth Management"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Zivox Agent AI Chatbot"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "LeadSpark AI Scraper"
          }
        }
      ]
    }
  };
}

export function getServiceSchema(serviceTitle: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceTitle,
    "provider": {
      "@type": "Organization",
      "name": "Mitratech Services (OPC) Pvt Ltd",
      "url": "https://www.mitratechservices.in/"
    },
    "description": description,
    "areaServed": "Worldwide"
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url,
    })),
  };
}

export function getArticleSchema(post: {
  title: string;
  excerpt: string;
  slug: string;
  coverImage: string;
  publishedAt: string;
  author: { name: string; role: string };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": [post.coverImage],
    "datePublished": post.publishedAt,
    "dateModified": post.publishedAt,
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "jobTitle": post.author.role,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Mitratech Services (OPC) Pvt Ltd",
      "url": "https://www.mitratechservices.in/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.mitratechservices.in/logo.png",
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.mitratechservices.in/blog/${post.slug}`,
    },
  };
}

export function getSoftwareApplicationSchema(product: {
  name: string;
  shortDescription: string;
  slug: string;
  heroImage: string;
  externalUrl: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": product.name,
    "description": product.shortDescription,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, Cloud",
    "image": product.heroImage,
    "url": `https://www.mitratechservices.in/products/${product.slug}`,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "seller": {
        "@type": "Organization",
        "name": "Mitratech Services (OPC) Pvt Ltd",
      },
    },
  };
}


