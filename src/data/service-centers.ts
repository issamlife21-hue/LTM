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
  // `hours` is the human-readable version shown on the page and in the footer.
  // `openingHoursSchema` is the same hours in schema.org format for SEO
  // structured data. Keep the two in sync — this file is the single source.
  hours: { days: string; hours: string }[];
  openingHoursSchema: string[];
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
    openingHoursSchema: ["Mo-Fr 08:00-17:00", "Sa 09:00-13:00"],
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
