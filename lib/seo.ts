import type { Metadata } from "next";
import { SEOConfig } from "@/types";
import { siteConfig } from "@/config/site";
import { company } from "@/data/company";
import { socialLinks } from "@/data/social";

export function buildMetadata(seo: SEOConfig): Metadata {
  const url = seo.canonical ?? siteConfig.url;
  const image = seo.ogImage ?? "/images/hero.jpg";

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${company.name} - Interior Designers in Nandyal`,
        },
      ],
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [image],
    },
  };
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${siteConfig.url}/#business`,
    name: company.name,
    category: "Interior Design Studio",
    legalName: company.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/z-home-interiors-logo.png`,
    image: `${siteConfig.url}/images/hero.jpg`,
    description: company.description,
    telephone: company.phone,
    email: company.email,
    priceRange: "$$",

    contactPoint: {
      "@type": "ContactPoint",
      telephone: company.phone,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Telugu"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      addressRegion: company.address.state,
      postalCode: company.address.zip,
      addressCountry: "IN",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Nandyal",
      },
      {
        "@type": "AdministrativeArea",
        name: "Andhra Pradesh",
      },
    ],
    hasMap: company.mapUrl,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "19:00",
      },
    ],
    sameAs: socialLinks.map((link) => link.url),
    knowsAbout: [
      "Interior design",
      "Home interiors",
      "Modular kitchens",
      "Bedroom interiors",
      "Living room interiors",
      "Wardrobes",
      "Office interiors",
      "Full home renovation",
      "3D interior design",
    ],
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    publisher: {
      "@id": `${siteConfig.url}/#business`,
    },
    inLanguage: "en-IN",
  };
}

export function buildFAQSchema(
  items: { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; url: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildWebPageSchema(page: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.name,
    description: page.description,
    url: page.url,
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    about: {
      "@id": `${siteConfig.url}/#business`,
    },
  };
}

export function buildServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: service.url,
    ...(service.image
      ? { image: `${siteConfig.url}${service.image}` }
      : {}),
    provider: {
      "@id": `${siteConfig.url}/#business`,
    },
    areaServed: {
      "@type": "City",
      name: "Nandyal",
    },
  };
}

export function buildProjectSchema(project: {
  title: string;
  description: string;
  heroImage: { src: string };
  url: string;
  dateCreated?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    image: `${siteConfig.url}${project.heroImage.src}`,
    url: project.url,
    ...(project.dateCreated ? { dateCreated: project.dateCreated } : {}),
  };
}



