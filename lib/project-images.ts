import fs from "node:fs";
import path from "node:path";
import { Project } from "@/types";

const PROJECTS_DIR = path.join(process.cwd(), "public", "images");
const SUPPORTED_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

const categoryMatchers: Array<[string, string]> = [
  ["living-room", "living-room"],
  ["living", "living-room"],
  ["bedroom", "bedroom"],
  ["kitchen", "kitchen"],
  ["wardrobe", "wardrobe"],
  ["tv-unit", "tv-unit"],
  ["tv", "tv-unit"],
  ["pooja", "pooja"],
];

function titleFromFilename(filename: string) {
  return filename
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\d+\b/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (letter) => letter.toUpperCase()) || "Interior Project";
}

function categoryFromFilename(filename: string) {
  const normalized = filename.toLowerCase();
  return categoryMatchers.find(([needle]) => normalized.includes(needle))?.[1] ?? "other";
}

export function getProjectImages(): Project[] {
  if (!fs.existsSync(PROJECTS_DIR)) return [];

  return fs
    .readdirSync(PROJECTS_DIR, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.toLowerCase().startsWith("project-") && SUPPORTED_EXTENSIONS.has(path.extname(entry.name).toLowerCase()))
    .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: "base" }))
    .map((entry, index) => ({
      id: `project-${index + 1}`,
      slug: entry.name.replace(/\.[^.]+$/, ""),
      title: titleFromFilename(entry.name),
      category: categoryFromFilename(entry.name),
      image: {
        src: `/images/${entry.name}`,
        alt: `${titleFromFilename(entry.name)} interior design`,
      },
    }));
}
