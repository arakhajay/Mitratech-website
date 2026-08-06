export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MitraTech",
    "url": "https://mitratech.com",
    "logo": "https://mitratech.com/logo.png",
    "description": "Transforming Ideas into Powerful Digital Solutions. Premium web design, web development, SaaS web apps, branding, and digital growth agency.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Handewadi, Hadapsar",
      "addressLocality": "Pune",
      "addressRegion": "MH",
      "postalCode": "411028",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9579852657",
      "contactType": "Customer Service",
      "areaServed": "Worldwide",
      "availableLanguage": ["English"]
    },
    "sameAs": [
      "https://twitter.com/mitratech",
      "https://linkedin.com/company/mitratech",
      "https://instagram.com/mitratech"
    ]
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "MitraTech Digital Solutions",
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    "priceRange": "$$$",
    "telephone": "+91-9579852657",
    "email": "hello@mitratech.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Handewadi, Hadapsar",
      "addressLocality": "Pune",
      "addressRegion": "MH",
      "postalCode": "411028",
      "addressCountry": "IN"
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
      "name": "MitraTech"
    },
    "description": description
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
