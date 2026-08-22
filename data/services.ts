import { Service, TimelineEntry } from "@/types";
import { siteConfig, routes } from "@/config/site";

/**
 * Standard 4-step process shared across services, lightly customized per
 * service. Individual services can still override `process` entirely if a
 * service ever needs a genuinely different path (e.g. Renovation).
 */
function buildProcess(serviceLabel: string): TimelineEntry[] {
  return [
    {
      id: "step-consultation",
      label: "01",
      title: "Consultation",
      description: `We discuss your needs, style preferences, and budget for your ${serviceLabel.toLowerCase()} project.`,
    },
    {
      id: "step-design",
      label: "02",
      title: "Design & Planning",
      description: "Our designers create detailed layouts and 3D renderings for your approval.",
    },
    {
      id: "step-materials",
      label: "03",
      title: "Material Selection",
      description: "You choose from curated finishes, fittings, and materials suited to your space.",
    },
    {
      id: "step-handover",
      label: "04",
      title: "Installation & Handover",
      description: "Our team executes the work on schedule, finishing with a final quality walkthrough.",
    },
  ];
}

function serviceCanonical(slug: string): string {
  return `${siteConfig.url}${routes.services}/${slug}`;
}

export const services: Service[] = [
  {
    id: "svc-modular-kitchen",
    slug: "modular-kitchen",
    title: "Modular Kitchen",
    shortDescription: "Smart, beautiful kitchens built around how you actually cook.",
    fullDescription: [
      "A kitchen should work as hard as it looks good. Our modular kitchen designs combine efficient storage, durable surfaces, and a layout tailored to your cooking habits — whether that's a compact galley kitchen or an open-plan island built for entertaining.",
      "We work with premium laminates, acrylics, and solid surfaces, pairing them with soft-close hardware and thoughtful storage solutions so every drawer and cabinet earns its place.",
    ],
    heroImage: { src: "/images/service-modular-kitchen.jpg", alt: "Luxury modular kitchen with island" },
    features: [
      "Custom cabinetry & layouts",
      "Soft-close drawers & hinges",
      "Premium countertop materials",
      "Integrated appliance planning",
      "Optimized storage systems",
      "Under-cabinet lighting",
    ],
    benefits: [
      "Maximized storage in every square foot",
      "Durable, easy-to-clean surfaces",
      "A layout built around your workflow",
      "Increased home resale value",
    ],
    process: buildProcess("Modular Kitchen"),
    faq: [
      {
        id: "faq-kitchen-1",
        question: "How long does a modular kitchen installation take?",
        answer: "Most modular kitchens are completed within 3-5 weeks from final material approval, depending on scope.",
      },
      {
        id: "faq-kitchen-2",
        question: "Can I keep my existing appliances?",
        answer: "Yes — we design around your existing appliances or help you select new ones that fit the layout.",
      },
      {
        id: "faq-kitchen-3",
        question: "What materials do you recommend for durability?",
        answer: "For high-use kitchens we typically recommend quartz or solid-surface countertops with moisture-resistant cabinetry.",
      },
    ],
    seo: {
      title: "Modular Kitchen Designers in Nandyal | Z Home Interiors",
      description: "Custom modular kitchen design in Nandyal with smart storage, premium materials and layouts designed around how you cook.",
      keywords: ["modular kitchen design", "custom kitchen cabinetry", "luxury kitchen interior"],
      ogImage: "/images/service-modular-kitchen.jpg",
      canonical: serviceCanonical("modular-kitchen"),
    },
    icon: "chef-hat",
    cta: {
      heading: "Ready to Redesign Your Kitchen?",
      description: "Book a free consultation and let's plan a kitchen built around how you live and cook.",
    },
    order: 1,
  },
  {
    id: "svc-wardrobes",
    slug: "wardrobes",
    title: "Wardrobes",
    shortDescription: "Custom wardrobes that turn storage into a design feature.",
    fullDescription: [
      "Off-the-shelf wardrobes rarely make full use of a room's dimensions. We design custom wardrobes — walk-in, sliding, or hinged — that fit your space exactly and organize your wardrobe the way you actually get dressed.",
      "From open shelving to concealed drawer systems and integrated lighting, every wardrobe is planned around what you own and how you want to access it every morning.",
    ],
    heroImage: { src: "/images/service-wardrobes.jpg", alt: "Custom walk-in wardrobe" },
    features: [
      "Walk-in & sliding wardrobe layouts",
      "Custom shelving & drawer systems",
      "Integrated LED lighting",
      "Mirror & glass finish options",
      "Shoe & accessory organizers",
    ],
    benefits: [
      "Storage designed around what you own",
      "Space-efficient layouts for any room size",
      "A calmer, more organized morning routine",
      "Finishes that match your bedroom's design language",
    ],
    process: buildProcess("Wardrobe"),
    faq: [
      {
        id: "faq-wardrobe-1",
        question: "Can you design a wardrobe for a small bedroom?",
        answer: "Yes — sliding-door and corner wardrobe layouts are especially effective at maximizing storage in compact rooms.",
      },
      {
        id: "faq-wardrobe-2",
        question: "Do you offer walk-in wardrobe designs?",
        answer: "Absolutely. We design walk-in wardrobes ranging from a single wall of storage to a full dressing room.",
      },
    ],
    seo: {
      title: "Custom Wardrobe Designers in Nandyal | Z Home Interiors",
      description: "Custom walk-in, sliding and fitted wardrobe design in Nandyal, tailored to your space and daily routine.",
      keywords: ["custom wardrobe design", "walk-in closet design", "sliding wardrobe"],
      ogImage: "/images/service-wardrobes.jpg",
      canonical: serviceCanonical("wardrobes"),
    },
    icon: "shirt",
    cta: {
      heading: "Ready for a Wardrobe That Works for You?",
      description: "Book a free consultation and let's design storage that fits your space and your routine.",
    },
    order: 2,
  },
  {
    id: "svc-bedroom",
    slug: "bedroom-interiors",
    title: "Bedroom Interiors",
    shortDescription: "Serene, considered bedrooms designed for real rest.",
    fullDescription: [
      "A bedroom carries more design weight than almost any other room — it needs to be calm, functional, and genuinely restful. We design bedroom interiors around lighting, texture, and layout, balancing statement pieces with the quiet details that make a room feel finished.",
      "From headboards and wall treatments to bedside storage and reading nooks, every element is chosen to support how you actually wind down and wake up.",
    ],
    heroImage: { src: "/images/service-bedroom-interiors.jpg", alt: "Serene luxury bedroom interior" },
    features: [
      "Custom headboards & bed frames",
      "Layered ambient & task lighting",
      "Bedside storage solutions",
      "Wall paneling & texture treatments",
      "Reading nook & seating design",
    ],
    benefits: [
      "A calmer, more restful atmosphere",
      "Storage that keeps surfaces clear",
      "Lighting suited to both rest and routine",
      "A bedroom that reflects your personal style",
    ],
    process: buildProcess("Bedroom"),
    faq: [
      {
        id: "faq-bedroom-1",
        question: "Can you work with our existing furniture?",
        answer: "Yes — we're often able to design around key existing pieces rather than starting from scratch.",
      },
      {
        id: "faq-bedroom-2",
        question: "Do you help with lighting design for bedrooms?",
        answer: "Lighting is one of the most important layers of any bedroom design, and we plan it in detail for every project.",
      },
    ],
    seo: {
      title: "Bedroom Interior Designers in Nandyal | Z Home Interiors",
      description: "Bedroom interior design in Nandyal focused on comfort, storage, lighting and a calm everyday experience.",
      keywords: ["bedroom interior design", "luxury bedroom design", "custom headboard design"],
      ogImage: "/images/service-bedroom-interiors.jpg",
      canonical: serviceCanonical("bedroom-interiors"),
    },
    icon: "bed-double",
    cta: {
      heading: "Ready for a Bedroom Built for Rest?",
      description: "Book a free consultation and let's design a bedroom that feels calm from the moment you walk in.",
    },
    order: 3,
  },
  {
    id: "svc-living-room",
    slug: "living-room",
    title: "Living Room",
    shortDescription: "Living rooms designed for both everyday life and entertaining.",
    fullDescription: [
      "The living room does more work than any other space in the home — it needs to host guests, hold a movie night, and still feel put-together on an ordinary Tuesday. We design living rooms around flexible seating, considered materials, and a layout that supports how your household actually spends time together.",
      "From custom media walls to statement lighting and upholstery, every piece is selected to work as a system, not a collection of one-off items.",
    ],
    heroImage: { src: "/images/service-living-room.jpg", alt: "Luxury living room interior" },
    features: [
      "Custom seating & upholstery",
      "Media wall & entertainment design",
      "Statement lighting fixtures",
      "Rug & textile curation",
      "Flexible layout planning",
    ],
    benefits: [
      "A space that works for both daily life and hosting",
      "Cohesive furniture and material palette",
      "Improved traffic flow and functionality",
      "A room that photographs and feels finished",
    ],
    process: buildProcess("Living Room"),
    faq: [
      {
        id: "faq-living-1",
        question: "Can you design around an open floor plan?",
        answer: "Yes — we regularly design living rooms that flow into dining and kitchen areas as one cohesive space.",
      },
      {
        id: "faq-living-2",
        question: "Do you source custom furniture?",
        answer: "We source and, where needed, commission custom furniture pieces to fit your exact layout.",
      },
    ],
    seo: {
      title: "Living Room Interior Designers in Nandyal | Z Home Interiors",
      description: "Living room interior design in Nandyal with thoughtful layouts, lighting, storage and custom design details.",
      keywords: ["living room interior design", "luxury living room", "media wall design"],
      ogImage: "/images/service-living-room.jpg",
      canonical: serviceCanonical("living-room"),
    },
    icon: "sofa",
    cta: {
      heading: "Ready to Reimagine Your Living Room?",
      description: "Book a free consultation and let's design a space built around how your household lives.",
    },
    order: 4,
  },
  {
    id: "svc-false-ceiling",
    slug: "false-ceiling",
    title: "False Ceiling",
    shortDescription: "Ceiling designs that add architecture, light, and depth.",
    fullDescription: [
      "A well-designed false ceiling can transform a flat, ordinary room into one with genuine architectural interest — concealing wiring and HVAC while introducing layered lighting and visual depth.",
      "We design false ceilings in gypsum, POP, and wood-look finishes, tailored to the proportions of your room and integrated with cove lighting, spotlights, or statement fixtures.",
    ],
    heroImage: { src: "/images/service-false-ceiling.jpg", alt: "Designer false ceiling with cove lighting" },
    features: [
      "Gypsum & POP ceiling design",
      "Integrated cove & spotlighting",
      "Wood-look & textured finishes",
      "Concealed wiring & HVAC integration",
      "Custom geometric detailing",
    ],
    benefits: [
      "Added architectural character to any room",
      "Layered lighting for mood and function",
      "Concealed wiring for a cleaner ceiling line",
      "A more finished, higher-end feel throughout the home",
    ],
    process: buildProcess("False Ceiling"),
    faq: [
      {
        id: "faq-ceiling-1",
        question: "Will a false ceiling reduce my room's height noticeably?",
        answer: "Most false ceiling designs use 4-8 inches of drop, which is rarely noticeable in standard-height rooms.",
      },
      {
        id: "faq-ceiling-2",
        question: "Can lighting be integrated into the design?",
        answer: "Yes — cove lighting and recessed spotlights are among the most popular reasons clients choose a false ceiling.",
      },
    ],
    seo: {
      title: "False Ceiling Designers in Nandyal | Z Home Interiors",
      description: "Custom false ceiling design in Nandyal with integrated lighting and architectural detailing.",
      keywords: ["false ceiling design", "POP ceiling design", "cove lighting ceiling"],
      ogImage: "/images/service-false-ceiling.jpg",
      canonical: serviceCanonical("false-ceiling"),
    },
    icon: "panel-top",
    cta: {
      heading: "Ready to Elevate Your Ceilings?",
      description: "Book a free consultation and let's add architectural depth and lighting to your space.",
    },
    order: 5,
  },
  {
    id: "svc-tv-unit",
    slug: "tv-unit",
    title: "TV Unit",
    shortDescription: "Custom media units designed as the room's centerpiece.",
    fullDescription: [
      "A television doesn't need to dominate a room's design — with the right unit, it becomes part of a considered composition. We design custom TV units with integrated storage, concealed cabling, and finishes that match the rest of your living space.",
      "From floating units to full-height media walls with display shelving, every design balances function with a genuinely finished look.",
    ],
    heroImage: { src: "/images/service-tv-unit.jpg", alt: "Custom TV unit and media wall" },
    features: [
      "Floating & full-height media units",
      "Concealed cable management",
      "Integrated display shelving",
      "Ambient backlighting options",
      "Custom finish matching",
    ],
    benefits: [
      "A cleaner, cable-free living room",
      "Storage for media and decor in one unit",
      "A cohesive look with the rest of your space",
      "Added lighting for evening ambience",
    ],
    process: buildProcess("TV Unit"),
    faq: [
      {
        id: "faq-tvunit-1",
        question: "Can you hide all the cables?",
        answer: "Yes — cable concealment is a standard part of every TV unit and media wall we design.",
      },
      {
        id: "faq-tvunit-2",
        question: "Do you design units for larger TVs and soundbars?",
        answer: "We plan every unit around your specific TV size and any soundbar or console equipment you're using.",
      },
    ],
    seo: {
      title: "TV Unit & Media Wall Designers in Nandyal | Z Home Interiors",
      description: "Custom TV units and media wall design in Nandyal with concealed cabling and integrated storage.",
      keywords: ["tv unit design", "media wall design", "custom entertainment unit"],
      ogImage: "/images/service-tv-unit.jpg",
      canonical: serviceCanonical("tv-unit"),
    },
    icon: "tv",
    cta: {
      heading: "Ready for a Media Wall That Fits Your Space?",
      description: "Book a free consultation and let's design a TV unit built around your room and your equipment.",
    },
    order: 6,
  },
  {
    id: "svc-office-interiors",
    slug: "office-interiors",
    title: "Office Interiors",
    shortDescription: "Workspaces designed for focus, collaboration, and brand identity.",
    fullDescription: [
      "Whether it's a home office or a full commercial headquarters, we design workspaces that balance functionality with a strong sense of identity. Every project starts with how the space needs to be used — focused solo work, team collaboration, or client-facing meetings — before a single material is chosen.",
      "For commercial clients, we coordinate everything from space planning to lighting and brand-aligned finishes, delivering a turnkey workspace ready for move-in.",
    ],
    heroImage: { src: "/images/service-office-interiors.jpg", alt: "Modern office interior design" },
    features: [
      "Space planning & workflow design",
      "Private office & meeting room design",
      "Brand-aligned material selection",
      "Acoustic & lighting planning",
      "Reception & lobby design",
    ],
    benefits: [
      "A workspace that supports how your team actually works",
      "Stronger first impressions for clients and visitors",
      "Improved focus through better acoustics and lighting",
      "Turnkey delivery with minimal disruption to operations",
    ],
    process: buildProcess("Office Interior"),
    faq: [
      {
        id: "faq-office-1",
        question: "Do you work with occupied offices?",
        answer: "We can phase construction to minimize disruption for teams that need to remain in the space during work.",
      },
      {
        id: "faq-office-2",
        question: "Can you align the design with our brand guidelines?",
        answer: "Yes — brand colors, materials, and identity are incorporated into the space planning from day one.",
      },
    ],
    seo: {
      title: "Office Interior Designers in Nandyal | Z Home Interiors",
      description: "Office and commercial interior design in Nandyal focused on workflow, brand identity and finish quality.",
      keywords: ["office interior design", "commercial interior design", "workspace design"],
      ogImage: "/images/service-office-interiors.jpg",
      canonical: serviceCanonical("office-interiors"),
    },
    icon: "briefcase",
    cta: {
      heading: "Ready to Redesign Your Workspace?",
      description: "Book a free consultation and let's design an office built around how your team works.",
    },
    order: 7,
  },
  {
    id: "svc-renovation",
    slug: "full-home-renovation",
    title: "Full Home Renovation",
    shortDescription: "End-to-end renovation, from architecture to final finish.",
    fullDescription: [
      "A full renovation touches every part of a home, which is why it demands a single team managing the entire process — architecture, contractor coordination, and interior finishing — rather than a patchwork of separate vendors.",
      "We manage permitting, structural changes, and trade coordination in-house, so you have one point of contact from the first walkthrough to the final handover.",
    ],
    heroImage: { src: "/images/service-full-home-renovation.jpg", alt: "Full home renovation in progress" },
    features: [
      "Architectural & structural planning",
      "Permitting & code compliance support",
      "Full contractor & trade coordination",
      "Whole-home material & finish selection",
      "Single point-of-contact project management",
    ],
    benefits: [
      "One coordinated team instead of multiple vendors",
      "Transparent timeline and budget tracking",
      "Design consistency across every room",
      "Significantly reduced project management burden for you",
    ],
    process: [
      {
        id: "reno-step-01",
        label: "01",
        title: "Assessment & Planning",
        description: "We evaluate the property's structure and develop a phased renovation plan and budget.",
      },
      {
        id: "reno-step-02",
        label: "02",
        title: "Permitting",
        description: "Our team handles permit applications and code compliance before any work begins.",
      },
      {
        id: "reno-step-03",
        label: "03",
        title: "Design Development",
        description: "Architectural and interior designs are finalized and approved room by room.",
      },
      {
        id: "reno-step-04",
        label: "04",
        title: "Construction",
        description: "Trades are coordinated on-site under a single project manager, with regular progress updates.",
      },
      {
        id: "reno-step-05",
        label: "05",
        title: "Final Walkthrough",
        description: "A detailed inspection and styling pass ensures every space is complete before handover.",
      },
    ],
    faq: [
      {
        id: "faq-reno-1",
        question: "How long does a full home renovation take?",
        answer: "Timelines vary by scope, but most full-home renovations take 4-9 months from permitting to handover.",
      },
      {
        id: "faq-reno-2",
        question: "Do you handle permits and inspections?",
        answer: "Yes — permitting, inspections, and code compliance are managed entirely by our team.",
      },
      {
        id: "faq-reno-3",
        question: "Can we stay in the home during renovation?",
        answer: "Depending on scope, we can often phase work to allow you to remain in part of the home throughout.",
      },
    ],
    seo: {
      title: "Full Home Renovation in Nandyal | Z Home Interiors",
      description: "End-to-end home renovation in Nandyal, from planning and design through execution and final interior finish.",
      keywords: ["full home renovation", "whole house renovation", "renovation contractor"],
      ogImage: "/images/service-full-home-renovation.jpg",
      canonical: serviceCanonical("full-home-renovation"),
    },
    icon: "hammer",
    cta: {
      heading: "Ready to Renovate Your Home?",
      description: "Book a free consultation and let's plan a renovation managed from start to finish, under one team.",
    },
    order: 8,
  },
  {
    id: "svc-3d-design",
    slug: "3d-design",
    title: "3D Design & Visualization",
    shortDescription: "See your space before a single wall is touched.",
    fullDescription: [
      "Committing to a design is easier when you can actually see it. Our 3D visualization service produces photorealistic renderings of your space — walls, materials, furniture, and lighting — before construction begins.",
      "This lets you approve layouts, adjust finishes, and catch issues on screen rather than mid-installation, and it's available as a standalone service or as part of any full design engagement.",
    ],
    heroImage: { src: "/images/service-3d-design.jpg", alt: "Photorealistic 3D interior rendering" },
    features: [
      "Photorealistic interior renderings",
      "Multiple layout & material options",
      "Virtual walkthrough visualization",
      "Lighting simulation",
      "Furniture & finish comparisons",
    ],
    benefits: [
      "Approve your design before construction begins",
      "Compare materials and layouts side by side",
      "Fewer costly changes mid-project",
      "A clear shared vision between you and our design team",
    ],
    process: buildProcess("3D Design"),
    faq: [
      {
        id: "faq-3d-1",
        question: "Can I request changes to the 3D renderings?",
        answer: "Yes — we typically include two rounds of revisions before finalizing a rendering package.",
      },
      {
        id: "faq-3d-2",
        question: "Is 3D visualization available as a standalone service?",
        answer: "Yes — it can be booked independently, or bundled into any full interior design engagement.",
      },
    ],
    seo: {
      title: "3D Interior Design in Nandyal | Z Home Interiors",
      description: "Photorealistic 3D interior design and visualization in Nandyal so you can see your space before construction begins.",
      keywords: ["3d interior design", "3d rendering interior", "interior visualization"],
      ogImage: "/images/service-3d-design.jpg",
      canonical: serviceCanonical("3d-design"),
    },
    icon: "cuboid",
    cta: {
      heading: "Ready to See Your Space Come to Life?",
      description: "Book a free consultation and let's create a photorealistic vision of your project before it begins.",
    },
    order: 9,
  },
];

export const getServiceBySlug = (slug: string) => services.find((service) => service.slug === slug);

export const getAllServiceSlugs = () => services.map((service) => service.slug);

