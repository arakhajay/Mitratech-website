export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mitratech Services (OPC) Pvt Ltd",
    "legalName": "Mitratech Services (OPC) Pvt Ltd",
    "url": "https://www.mitratechservices.in/",
    "logo": "https://www.mitratechservices.in/logo.png",
    "description": "Transforming Ideas into Powerful Digital Solutions. Premium web design, Next.js web applications, SaaS products, branding, and digital growth agency based in Pune, India.",
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
    }
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Mitratech Services (OPC) Pvt Ltd",
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
