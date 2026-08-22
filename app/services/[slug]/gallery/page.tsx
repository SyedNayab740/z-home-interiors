import type { Metadata } from "next";
import fs from "node:fs";
import path from "node:path";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/ui/PageHeader";
import { ServiceGallery } from "@/components/services/ServiceGallery";
import { getAllServiceSlugs, getServiceBySlug } from "@/data/services";
import { routes, siteConfig } from "@/config/site";

interface ServiceGalleryPageProps {
  params: Promise<{ slug: string }>;
}

const allowedExtensions = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".avif",
]);

const galleryNames: Record<string, string> = {
  "modular-kitchen": "Kitchen",
  wardrobes: "Wardrobe",
  "bedroom-interiors": "Bedroom",
  "living-room": "Living Room",
  "false-ceiling": "False Ceiling",
  "tv-unit": "TV Unit",
  "office-interiors": "Office",
  "full-home-renovation": "Renovation",
  "3d-design": "3D",
};

function getServiceGalleryImages(slug: string) {
  const directory = path.join(
    process.cwd(),
    "public",
    "images",
    "services",
    slug,
  );

  if (!fs.existsSync(directory)) {
    return [];
  }

  return fs
    .readdirSync(directory)
    .filter((filename) =>
      allowedExtensions.has(path.extname(filename).toLowerCase()),
    )
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((filename) => ({
      src: `/images/services/${slug}/${filename}`,
      alt: `${galleryNames[slug] ?? slug} interior design`,
    }));
}

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServiceGalleryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: `Gallery | ${siteConfig.name}`,
    };
  }

  const galleryName = galleryNames[slug] ?? service.title;

  return {
    title: `${galleryName} Designs | ${siteConfig.name}`,
    description: `Explore ${galleryName.toLowerCase()} interior designs by ${siteConfig.name} in Nandyal.`,
  };
}

export default async function ServiceGalleryPage({
  params,
}: ServiceGalleryPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const images = getServiceGalleryImages(slug);
  const galleryName = galleryNames[slug] ?? service.title;

  return (
    <>
      <PageHeader
        eyebrow="Z Home Interiors · Nandyal"
        title={`${galleryName} Designs`}
        description={`Explore our ${galleryName.toLowerCase()} interior design work.`}
        breadcrumbs={[
          { label: "Home", href: routes.home },
          { label: "Services", href: routes.services },
          { label: service.title, href: `${routes.services}/${slug}` },
          { label: `${galleryName} Designs` },
        ]}
        backgroundImage={service.heroImage}
      />

      <ServiceGallery
        images={images}
        title={galleryName}
      />
    </>
  );
}
