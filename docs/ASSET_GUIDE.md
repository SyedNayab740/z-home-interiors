# Image Guide — How to Add or Replace Photos

Every image on the website lives directly inside **one single folder**:

```
public/images/
```

There are no subfolders. To replace an image, replace the file at the
matching name below and rebuild/redeploy the site — no code changes needed.

## Logo

| File | Used on |
|---|---|
| `public/images/z-home-interiors-logo.png` | Navbar and Footer |

## Hero (Homepage)

| File | Used on |
|---|---|
| `public/images/hero.jpg` | Homepage hero background |

Use a landscape photo, ideally 1920×1080 or larger. It will automatically
crop/scale responsively on desktop, tablet, and mobile.

## About Image

| File | Used on |
|---|---|
| `public/images/about-image.jpg` | About Preview (homepage) and Our Story (About page) |

Use a portrait or near-square photo (roughly 4:5 works best).

## Service Images

One flat file per service — filenames are fixed, just replace the file:

| File | Service |
|---|---|
| `public/images/service-modular-kitchen.jpg` | Modular Kitchen |
| `public/images/service-wardrobes.jpg` | Wardrobes |
| `public/images/service-bedroom-interiors.jpg` | Bedroom Interiors |
| `public/images/service-living-room.jpg` | Living Room |
| `public/images/service-false-ceiling.jpg` | False Ceiling |
| `public/images/service-tv-unit.jpg` | TV Unit |
| `public/images/service-office-interiors.jpg` | Office Interiors |
| `public/images/service-full-home-renovation.jpg` | Full Home Renovation |
| `public/images/service-3d-design.jpg` | 3D Design & Visualization |

## Project Images (Our Projects gallery)

**This is the easiest part of the whole site to maintain.**

Just drop image files directly into `public/images/` using this naming
pattern:

```
project-01.jpg
project-02.jpg
project-03.jpg
project-04.jpg
project-05.jpg
```

The website automatically scans `public/images/` for every file that starts
with `project-` and turns it into a project card — no data file to edit, no
component to touch. To add a new project, add a new `project-XX.jpg` file
and rebuild. To remove one, delete the file.

**Category & title are read from the filename**, so name your files with the
room type in mind:

- Anything containing `living` → categorized as **Living Room**
- Anything containing `bedroom` → **Bedroom**
- Anything containing `kitchen` → **Kitchen**
- Anything containing `wardrobe` → **Wardrobe**
- Anything containing `tv` → **TV Unit**
- Anything containing `pooja` → **Pooja**
- Anything else → **Other**

Example: `project-06-modern-bedroom.jpg` becomes the project titled
"Modern Bedroom" in the **Bedroom** category.

## What Happens If an Image Is Missing

If a file hasn't been uploaded yet, the website shows a clean, subtle
gradient placeholder instead of a broken-image icon — so the site never
looks broken while you're still gathering photography.

## Image Tips

- **Format:** `.jpg` is recommended for photos (smaller file size than PNG).
- **Size:** Aim for under 500KB per image where possible. Large images (over
  3–4MB) will slow the site down — resize/compress before uploading.
- **Orientation:** Landscape works best for the hero and service images;
  portrait or square works well for the About image and project photos.
