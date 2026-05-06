// src/data/photos.ts
// All images are public URLs from liberiatraffic.com (Squarespace CDN).
//
// TODO: Auto-discovery from this sandbox is blocked, so this manifest currently
// holds only the seed URL provided by the LTM team. To expand it, run from a
// network-enabled environment:
//
//   curl -sS https://www.liberiatraffic.com/ \
//     | grep -oE 'https://images\.squarespace-cdn\.com/content/v1/5b3f2240f7939231db24fdab/[a-zA-Z0-9_/-]+\.(jpe?g|png|webp)' \
//     | sort -u
//
// Add each unique URL below with a descriptive `alt` and a category guess.

export type LtmPhotoCategory =
  | "exterior"
  | "inspection"
  | "service"
  | "staff";

export type LtmPhoto = {
  id: string;
  url: string;
  alt: string;
  category: LtmPhotoCategory;
};

export const ltmPhotos: LtmPhoto[] = [
  {
    id: "compound-1",
    url: "https://images.squarespace-cdn.com/content/v1/5b3f2240f7939231db24fdab/6a0154c5-cee0-4236-b187-ac825e3236cc/IMG_5210.jpeg",
    alt: "LTM service compound on SKD Boulevard, Monrovia",
    category: "exterior",
  },
];

// Hero image — use the most representative compound photo.
export const heroPhoto = ltmPhotos[0];

// Gallery — for the homepage and About sections, pick a representative spread.
export const galleryPhotos = ltmPhotos;

// Convenience accessors for service detail page headers.
function firstByCategory(category: LtmPhotoCategory): LtmPhoto {
  return ltmPhotos.find((p) => p.category === category) ?? ltmPhotos[0];
}

export const servicePhotos = {
  driverLicense: firstByCategory("exterior"),
  vehicleRegistration: firstByCategory("exterior"),
  vehicleInspection: firstByCategory("inspection"),
  licensePlates: firstByCategory("exterior"),
};

export const contactPhoto = firstByCategory("exterior");
