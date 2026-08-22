// ============================================================================
// GLOBAL TYPES — Z Home Interiors
// Every data file and component should import its shapes from here.
// ============================================================================

export interface ImageAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  blurDataURL?: string;
}

export interface VideoAsset {
  src: string;
  poster?: string;
  alt: string;
}

export interface NavLink {
  id: string;
  label: string;
  href: string;
  children?: NavLink[];
}

export interface ServiceCTA {
  heading: string;
  description: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string[];
  heroImage: ImageAsset;
  features: string[];
  benefits: string[];
  process: TimelineEntry[];
  faq: FAQItem[];
  seo: SEOConfig;
  icon: string;
  cta: ServiceCTA;
  order: number;
}

export interface ProjectCategory {
  id: string;
  label: string;
  slug: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  image: ImageAsset;
}


export interface GalleryItem {
  id: string;
  image: ImageAsset;
  category: string;
  projectSlug?: string;
}

export interface Review {
  id: string;
  customerName: string;
  role?: string;
  projectTitle?: string;
  projectSlug?: string;
  serviceSlug?: string;
  rating: number;
  review: string;
  location: string;
  date: string;
  featured: boolean;
  avatar?: ImageAsset;
  images?: ImageAsset[];
  video?: VideoAsset;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: string;
}

export interface CompanyInfo {
  name: string;
  legalName?: string;
  tagline: string;
  description: string;
  founded?: number;
  phone: string;
    phoneSecondary?: string;
  whatsapp: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  hours: { day: string; time: string }[];
  mapUrl?: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}

export interface BlogCategory {
  id: string;
  label: string;
  slug: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: ImageAsset;
  category: string;
  author: string;
  publishedAt: string;
  readingTime?: number;
}

export interface TimelineEntry {
  id: string;
  /** Short uppercase tag — a year for company history, a step number for a process. */
  label: string;
  title: string;
  description: string;
}

export interface WhyChooseUsFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Transformation {
  id: string;
  title: string;
  location?: string;
  before: ImageAsset;
  after: ImageAsset;
}

export interface Award {
  id: string;
  title: string;
  issuer: string;
  year: number;
}

export interface CoreValue {
  id: string;
  title: string;
  description: string;
}

export interface LegalSection {
  id: string;
  title: string;
  paragraphs?: string[];
  list?: string[];
}


