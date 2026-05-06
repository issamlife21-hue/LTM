// src/data/photos.ts
// Real photos of LTM facilities and operations.
// Source: liberiatraffic.com (Squarespace CDN, public).

export type LtmPhoto = {
  id: string;
  url: string;
  alt: string;
  category: "exterior" | "fleet" | "inspection" | "operations";
  width: number;
  height: number;
};

export const ltmPhotos: LtmPhoto[] = [
  {
    id: "main-facility",
    url: "https://images.squarespace-cdn.com/content/v1/5b3f2240f7939231db24fdab/789e2f87-932a-469e-bf8b-97348b9ffaef/PHOTO-2024-11-04-05-35-52.jpg",
    alt: "LTM main service facility — large two-story building with paved parking area, photographed under blue sky",
    category: "exterior",
    width: 3024,
    height: 4032,
  },
  {
    id: "ltm-sign",
    url: "https://images.squarespace-cdn.com/content/v1/5b3f2240f7939231db24fdab/1563967883086-10H6CUUXQ7I72PO5FOSW/1.jpg",
    alt: "LTM compound front entrance with the Liberia Traffic Management branded wall sign",
    category: "exterior",
    width: 1200,
    height: 1300,
  },
  {
    id: "motor-vehicle-service-sign",
    url: "https://images.squarespace-cdn.com/content/v1/5b3f2240f7939231db24fdab/1563967883217-GIOBDT3X3G7Y8YZLVE55/2.jpg",
    alt: "Office of Motor Vehicle Service and Traffic Enforcement signage at the LTM compound entrance",
    category: "exterior",
    width: 1500,
    height: 850,
  },
  {
    id: "police-fleet-rain",
    url: "https://images.squarespace-cdn.com/content/v1/5b3f2240f7939231db24fdab/1598440500537-WNKVAL20G32BSKKXLK9I/IMG_7528.jpg",
    alt: "Fleet of LTM-equipped police vehicles lined up in the compound parking area",
    category: "fleet",
    width: 720,
    height: 470,
  },
  {
    id: "service-garage",
    url: "https://images.squarespace-cdn.com/content/v1/5b3f2240f7939231db24fdab/1598440500728-XWVES57JL31VOR7YEIW9/IMG_7530.jpg",
    alt: "LTM vehicle service garage with multiple bays and a construction grader on the tarmac",
    category: "inspection",
    width: 1200,
    height: 400,
  },
  {
    id: "ltm-branded-vehicle",
    url: "https://images.squarespace-cdn.com/content/v1/5b3f2240f7939231db24fdab/1598440624981-CG6O820ZD13N06QGCWTA/PHOTO-2019-04-13-13-05-24.jpg",
    alt: "Close-up of an LTM-branded police vehicle showing the Liberia Traffic Management decal on the rear window",
    category: "fleet",
    width: 1280,
    height: 960,
  },
  {
    id: "ltm-deployment",
    url: "https://images.squarespace-cdn.com/content/v1/5b3f2240f7939231db24fdab/1598440629007-V4WHW194IR5X9Y9NO8AJ/PHOTO-2019-04-16-14-52-10.jpg",
    alt: "LTM operational deployment scene with police vehicles, new motorcycles, and staff at the LTM compound",
    category: "operations",
    width: 1280,
    height: 960,
  },
  {
    id: "police-fleet-courtyard",
    url: "https://images.squarespace-cdn.com/content/v1/5b3f2240f7939231db24fdab/1598440677040-HH4GJHLX3YLXEW4REONX/IMG_2062.jpg",
    alt: "LTM police vehicle fleet parked in formation at the compound courtyard",
    category: "fleet",
    width: 640,
    height: 320,
  },
];

// Best photo for the homepage hero — the modern, high-res facility shot
export const heroPhoto = ltmPhotos[0]; // main-facility

// Photos to feature in the homepage gallery section (6 spots)
export const galleryPhotos: LtmPhoto[] = [
  ltmPhotos[1], // ltm-sign
  ltmPhotos[2], // motor-vehicle-service-sign
  ltmPhotos[7], // police-fleet-courtyard
  ltmPhotos[6], // ltm-deployment
  ltmPhotos[5], // ltm-branded-vehicle
  ltmPhotos[4], // service-garage
];

// Per-service-page header photos
export const servicePhotos = {
  "driver-license": ltmPhotos[1], // ltm-sign — exterior
  "vehicle-registration": ltmPhotos[2], // motor-vehicle-service-sign
  "vehicle-inspection": ltmPhotos[4], // service-garage
  "license-plates": ltmPhotos[7], // police-fleet-courtyard
};

// Photo for the contact page
export const contactPhoto = ltmPhotos[0]; // main-facility
