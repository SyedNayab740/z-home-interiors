import { CoreValue, WhyChooseUsFeature } from "@/types";

// Powers the Company Story section — written in prose, not filler copy.
// TODO: once the client shares real founding details (year, story, city),
// replace this with their actual history.
export const companyStory = {
  paragraphs: [
    "Z Home Interiors was built on a simple idea: too many interior design studios treat every project the same way, regardless of who actually lives in the space. We start with people first — how a family moves through a kitchen, how morning light falls across a bedroom, what a room needs to feel like home rather than a showroom.",
    "We handle everything from single-room refreshes to full home renovations, and every project still begins the same way — with a conversation, not a template.",
    "Our approach stays consistent regardless of project size: timeless design, honest materials, and a process our clients can actually enjoy from first consultation to final handover.",
  ],
  mission:
    "To craft interiors that feel effortless — spaces where every material, proportion, and detail has been considered with intention, never left to chance.",
  vision:
    "To be the studio discerning homeowners trust first, known as much for our craftsmanship as our care for the people who live in the spaces we design.",
};

export const coreValues: CoreValue[] = [
  {
    id: "value-integrity",
    title: "Integrity",
    description:
      "Transparent pricing, honest timelines, and materials that are exactly what we say they are.",
  },
  {
    id: "value-craft",
    title: "Craftsmanship",
    description:
      "We hold every finish to a standard that would satisfy us in our own homes, not just our clients'.",
  },
  {
    id: "value-partnership",
    title: "Partnership",
    description:
      "The best interiors come from real collaboration — we design with our clients, not just for them.",
  },
];

// "Why Choose Z Home Interiors" — distinct emphasis from the homepage list,
// reusing the same WhyChooseUsFeature shape and shared FeatureCard component.
export const aboutWhyChooseUsFeatures: WhyChooseUsFeature[] = [
  {
    id: "about-why-materials",
    icon: "gem",
    title: "Premium Materials",
    description: "Selected with a focus on quality, durability, and thoughtful design.",
  },
  {
    id: "about-why-team",
    icon: "users",
    title: "Dedicated Team",
    description: "A dedicated team focused on thoughtful residential and commercial interior design.",
  },
  {
    id: "about-why-finishes",
    icon: "sparkles",
    title: "Luxury Finishes",
    description: "From hand-troweled plaster to bespoke millwork, finish quality is never rushed.",
  },
  {
    id: "about-why-satisfaction",
    icon: "heart-handshake",
    title: "Customer Satisfaction",
    description: "We measure success by whether a space genuinely fits how our clients live.",
  },
  {
    id: "about-why-personalized",
    icon: "compass",
    title: "Personalized Designs",
    description: "No templates — every space is designed around how you actually live.",
  },
  {
    id: "about-why-ontime",
    icon: "clock",
    title: "On-Time Delivery",
    description: "Transparent timelines and proactive coordination keep projects on schedule.",
  },
];

// "Meet Our Expertise" — design philosophy pillars, not individual employee
// profiles (no team-member data exists yet; add a data/team.ts and swap this
// section for real profiles once headshots and bios are available).
export const expertisePillars: WhyChooseUsFeature[] = [
  {
    id: "expertise-philosophy",
    icon: "pen-tool",
    title: "Design Philosophy",
    description:
      "We believe restraint is a luxury. Every room is edited until only what matters remains.",
  },
  {
    id: "expertise-craft",
    icon: "layers",
    title: "Craftsmanship & Detail",
    description:
      "From joinery to hardware, our team sweats details most firms never think to consider.",
  },
  {
    id: "expertise-process",
    icon: "users",
    title: "Collaborative Process",
    description:
      "Our designers work alongside architects, contractors, and clients as one coordinated team.",
  },
  {
    id: "expertise-quality",
    icon: "target",
    title: "Rigorous Quality Control",
    description:
      "Every installation is inspected against our own standard before a project is called complete.",
  },
];

// No awards/press recognitions are confirmed yet, so none are listed here.
// Add real certifications or press mentions to a new Award[] array once
// they're earned, and reintroduce an Awards section to display them.




