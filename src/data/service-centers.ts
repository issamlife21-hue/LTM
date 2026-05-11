// src/data/service-centers.ts
// Source of truth for every LTM service center location on the site.
// Add a new entry here to surface a new card on /contact.

export type ServiceCenterPhone = {
  display: string;
  dial: string;
};

export type ServiceCenter = {
  id: string;
  county: string;
  address: {
    lines: string[];
    locality: string;
    country: string;
  };
  hours: { days: string; hours: string }[];
  phones: ServiceCenterPhone[];
  email?: string;
  map: {
    embedUrl: string;
    directionsUrl: string;
  };
};

export const serviceCenters: ServiceCenter[] = [
  {
    id: "montserrado",
    county: "Montserrado County",
    address: {
      lines: ["LTM Compound, SKD Boulevard", "Adjacent to SKD Stadium"],
      locality: "Monrovia",
      country: "Liberia",
    },
    hours: [
      { days: "Monday – Friday", hours: "8:00 AM – 5:00 PM" },
      { days: "Saturday", hours: "9:00 AM – 1:00 PM" },
      { days: "Sunday", hours: "Closed" },
    ],
    phones: [
      { display: "0888 900 070", dial: "+231888900070" },
      { display: "0770 900 080", dial: "+231770900080" },
      { display: "0770 900 090", dial: "+231770900090" },
    ],
    email: "Ltm@liberiatraffic.com",
    map: {
      embedUrl:
        "https://www.google.com/maps?q=SKD+Boulevard+Monrovia+Liberia&output=embed",
      directionsUrl:
        "https://www.google.com/maps/dir/?api=1&destination=SKD+Boulevard+Monrovia+Liberia",
    },
  },
];
