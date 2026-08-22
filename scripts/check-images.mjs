import fs from "node:fs";
import path from "node:path";

const dir = path.join(process.cwd(), "public", "images");
const required = [
  "z-home-interiors-logo.png",
  "hero.jpg",
  "about-image.jpg",
  "service-modular-kitchen.jpg",
  "service-wardrobes.jpg",
  "service-bedroom-interiors.jpg",
  "service-living-room.jpg",
  "service-false-ceiling.jpg",
  "service-tv-unit.jpg",
  "service-office-interiors.jpg",
  "service-full-home-renovation.jpg",
  "service-3d-design.jpg",
];

const missing = required.filter((file) => !fs.existsSync(path.join(dir, file)));

if (missing.length) {
  console.error("\nMissing image assets in public/images/:");
  for (const file of missing) console.error(` - ${file}`);
  console.error("\nAdd the files with these exact names, then restart the dev server.\n");
  process.exitCode = 1;
} else {
  console.log("All required image assets are present.");
}
