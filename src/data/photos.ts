// src/data/photos.ts

export type LtmPhoto = {
  id: string;
  url: string;
  alt: string;
  category: "exterior" | "fleet" | "inspection" | "operations";
  width: number;
  height: number;
};

// Hero carousel rotates through the 5 strongest photos
export const heroPhotos: LtmPhoto[] = [
  {
    id: "hero-main-facility",
    url: "https://images.squarespace-cdn.com/content/v1/5b3f2240f7939231db24fdab/789e2f87-932a-469e-bf8b-97348b9ffaef/PHOTO-2024-11-04-05-35-52.jpg",
    alt: "LTM main service facility, a modern two-story building with paved compound under blue sky",
    category: "exterior",
    width: 3024,
    height: 4032,
  },
  {
    id: "hero-bicycle-fleet",
    url: "https://images.squarespace-cdn.com/content/v1/5b3f2240f7939231db24fdab/b7472912-1a2d-400a-8379-44832ad41298/WhatsApp+Image+2024-11-01+at+10.30.50+AM.jpeg",
    alt: "Large fleet of police bicycles arranged in rows at the LTM compound",
    category: "fleet",
    width: 3024,
    height: 4032,
  },
  {
    id: "hero-motorcycle-fleet",
    url: "https://images.squarespace-cdn.com/content/v1/5b3f2240f7939231db24fdab/8ecbf21a-2982-4c63-b427-7d5d609157e5/WhatsApp+Image+2024-11-01+at+10.31.32+AM.jpeg",
    alt: "Row of LTM police motorcycles parked in front of the LTM facility",
    category: "fleet",
    width: 3024,
    height: 4032,
  },
  {
    id: "hero-motorcycle-fleet-2",
    url: "https://images.squarespace-cdn.com/content/v1/5b3f2240f7939231db24fdab/716890e6-7c04-4a20-b1c2-8b7d8892e282/WhatsApp+Image+2024-11-01+at+10.31.36+AM.jpeg",
    alt: "Wide view of LTM police motorcycle fleet with the compound and inspection bays in the background",
    category: "fleet",
    width: 3024,
    height: 4032,
  },
  {
    id: "hero-inspection-bay",
    url: "https://images.squarespace-cdn.com/content/v1/5b3f2240f7939231db24fdab/1598440170352-U6Z245M9KO2LO6BHGF6W/Inspection+Center+Photos+-+1.jpg",
    alt: "Modern LTM vehicle inspection bay with roller test platforms and inspection terminals",
    category: "inspection",
    width: 1500,
    height: 700,
  },
];

// Gallery on homepage and About sections
export const galleryPhotos: LtmPhoto[] = [
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
    alt: "Office of Motor Vehicle Service and Traffic Enforcement signage at the LTM compound",
    category: "exterior",
    width: 1500,
    height: 850,
  },
  {
    id: "ltm-gate",
    url: "https://images.squarespace-cdn.com/content/v1/5b3f2240f7939231db24fdab/8c4fce9f-4562-44fa-915d-7b344f38b020/WhatsApp+Image+2024-11-01+at+10.33.06+AM.jpeg",
    alt: "LTM and LNP Traffic Enforcement main entrance gate",
    category: "exterior",
    width: 1280,
    height: 960,
  },
  {
    id: "billboard-installation",
    url: "https://images.squarespace-cdn.com/content/v1/5b3f2240f7939231db24fdab/9a7f5308-ac43-4ffe-92f9-d0259fa063d4/WhatsApp+Image+2024-11-01+at+10.46.07+AM.jpeg",
    alt: "Workers installing the official Liberia Traffic Management billboard with the Liberia National Police seal",
    category: "operations",
    width: 3024,
    height: 4032,
  },
  {
    id: "police-fleet-courtyard",
    url: "https://images.squarespace-cdn.com/content/v1/5b3f2240f7939231db24fdab/1598440677040-HH4GJHLX3YLXEW4REONX/IMG_2062.jpg",
    alt: "LTM police vehicle fleet parked in formation at the compound courtyard",
    category: "fleet",
    width: 640,
    height: 320,
  },
  {
    id: "deployment",
    url: "https://images.squarespace-cdn.com/content/v1/5b3f2240f7939231db24fdab/1598440629007-V4WHW194IR5X9Y9NO8AJ/PHOTO-2019-04-16-14-52-10.jpg",
    alt: "LTM operational deployment with police vehicles, motorcycles and personnel at the compound",
    category: "operations",
    width: 1280,
    height: 960,
  },
];

// Photos for service-page headers
export const servicePhotos = {
  "driver-license": galleryPhotos[1], // motor-vehicle-service-sign
  "vehicle-registration": galleryPhotos[0], // ltm-sign
  "vehicle-inspection": heroPhotos[4], // inspection bay
  "license-plates": galleryPhotos[4], // police-fleet-courtyard
};

export const contactPhoto = heroPhotos[0]; // main-facility
