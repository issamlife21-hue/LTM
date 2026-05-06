// src/data/site-meta.ts
// Single source of truth for the "last updated" stamp shown on info pages.
// Bump each entry when the underlying content changes.

export const lastUpdated = {
  pricing: "2025-11-01",
  roadSigns: "2025-11-01",
  faq: "2025-11-01",
  services: "2025-11-01",
} as const;

export type LastUpdatedKey = keyof typeof lastUpdated;

export function formatLastUpdated(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Estimated time labels shown on each service page.
export const serviceEstimates = {
  "driver-license":
    "Most visits take 20 to 30 minutes once you're at the counter",
  "vehicle-registration":
    "Most visits take 30 to 45 minutes once you're at the counter",
  "vehicle-inspection":
    "Most inspections take 15 to 20 minutes when the bay is free",
  "license-plates":
    "Standard plates leave with you the same day you register",
} as const;

export type ServiceId = keyof typeof serviceEstimates;
