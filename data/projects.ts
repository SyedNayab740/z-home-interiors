import { ProjectCategory } from "@/types";

/**
 * Keep project management intentionally simple.
 * Add project images directly to public/images/ (e.g. project-01.jpg) and
 * they appear automatically — no subfolder, no data to edit.
 * File names are used to create the title and category.
 */
export const projectCategories: ProjectCategory[] = [
  { id: "cat-living-room", label: "Living Room", slug: "living-room" },
  { id: "cat-bedroom", label: "Bedroom", slug: "bedroom" },
  { id: "cat-kitchen", label: "Kitchen", slug: "kitchen" },
  { id: "cat-wardrobe", label: "Wardrobe", slug: "wardrobe" },
  { id: "cat-tv-unit", label: "TV Unit", slug: "tv-unit" },
  { id: "cat-pooja", label: "Pooja", slug: "pooja" },
  { id: "cat-other", label: "Other", slug: "other" },
];
