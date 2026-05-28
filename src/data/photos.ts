// src/data/photos.ts
// ============================================================================
// IMAGES: HERO CAROUSEL, GALLERY, AND SERVICE-PAGE HEADERS
// ============================================================================
// This is the ONE file to edit for the photos shown across the site.
//
// HOW TO ADD OR CHANGE A HERO IMAGE (homepage slideshow):
//   1. Put the image file in:  public/images/hero/
//   2. Add (or edit) an entry in `heroPhotos` below.
//   3. Set `url` to the local path, e.g.  url: "/images/hero/my-photo.jpg"
//      (You can also paste a full https:// link instead of a local file.)
//   4. Always write a short, factual `alt` description for accessibility.
//   5. Set `width` / `height` to the real pixel size of the image.
//   To REMOVE a hero image, delete its entry. To REORDER, move the entries.
//
// HOW TO CHANGE A SERVICE-PAGE HEADER IMAGE:
//   Edit the `servicePhotos` map near the bottom of this file.
//
// NOTE: local files (public/images/hero/...) work with no extra config.
// External links must use a domain allowed in next.config.mjs.
// ============================================================================

export type LtmPhoto = {
  id: string;
  url: string;
  alt: string;
  category: "exterior" | "fleet" | "inspection" | "operations";
  width: number;
  height: number;
};

// ── HERO CAROUSEL ── Edit, add, or remove slides here. Order = slide order.
// Images are stored as web-optimized 1600x900 landscape files (under ~250 KB).
export const heroPhotos: LtmPhoto[] = [
  {
    id: "hero-main-facility",
    url: "/images/hero/hero-main-facility.webp",
    alt: "LTM main service facility, a modern two-story building with paved compound under blue sky",
    category: "exterior",
    width: 1600,
    height: 900,
  },
  {
    id: "hero-motorcycle-fleet",
    url: "/images/hero/hero-motorcycle-fleet.webp",
    alt: "Row of LTM police motorcycles parked in front of the LTM facility",
    category: "fleet",
    width: 1600,
    height: 900,
  },
  {
    id: "hero-inspection-bay",
    url: "/images/hero/hero-inspection-bay.webp",
    alt: "Modern LTM vehicle inspection bay with roller test platforms and inspection terminals",
    category: "inspection",
    width: 1600,
    height: 900,
  },
];

// ── GALLERY ── Photos reused as service-page banners (see servicePhotos).
export const galleryPhotos: LtmPhoto[] = [
  {
    id: "ltm-sign",
    url: "/images/gallery/ltm-sign.webp",
    alt: "LTM compound front entrance with the Liberia Traffic Management branded wall sign",
    category: "exterior",
    width: 1200,
    height: 1300,
  },
  {
    id: "motor-vehicle-service-sign",
    url: "/images/gallery/motor-vehicle-service-sign.webp",
    alt: "Office of Motor Vehicle Service and Traffic Enforcement signage at the LTM compound",
    category: "exterior",
    width: 1500,
    height: 850,
  },
  {
    id: "police-fleet-courtyard",
    url: "/images/gallery/police-fleet-courtyard.webp",
    alt: "LTM police vehicle fleet parked in formation at the compound courtyard",
    category: "fleet",
    width: 640,
    height: 320,
  },
];

// ── SERVICE-PAGE HEADER IMAGES ──
// Each service page shows one of the photos above as its banner. To change a
// banner, point the line below at a different photo (or add a new LtmPhoto and
// reference it here). Files for service-specific photos go in:
//   public/images/services/
export const servicePhotos = {
  "driver-license": galleryPhotos[1], // motor-vehicle-service-sign
  "vehicle-registration": galleryPhotos[0], // ltm-sign
  "vehicle-inspection": heroPhotos[2], // inspection bay
  "license-plates": galleryPhotos[2], // police-fleet-courtyard
};

export const contactPhoto = heroPhotos[0]; // main-facility
