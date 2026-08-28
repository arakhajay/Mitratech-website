export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mitratech Services (OPC) Pvt Ltd",
    "url": "https://www.mitratechservices.in/",
    "logo": "https://www.mitratechservices.in/logo.svg",
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
      "email": "support@mitratechservices.in",
      "contactType": "Customer Support",
      "areaServed": "Worldwide",
      "availableLanguage": ["English"]
    }
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Mitratech Services (OPC) Pvt Ltd",
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    "telephone": "+91-9579852657",
    "email": "support@mitratechservices.in",
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
      "name": "Mitratech Services (OPC) Pvt Ltd"
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
