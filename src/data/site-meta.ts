// src/data/site-meta.ts
// Single source of truth for the "last updated" stamp shown on info pages.
// Bump when the underlying content changes.

export const lastUpdated = "2026-05-06";

export function formatLastUpdated(date: string = lastUpdated): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Estimated time labels shown on each service page.
export const serviceEstimates = {
  "driver-license": "Est. visit: 20–30 minutes",
  "vehicle-registration": "Est. visit: 30–45 minutes",
  "vehicle-inspection": "Est. visit: 15–20 minutes",
  "license-plates": "Est. wait: same-day",
} as const;

export type ServiceId = keyof typeof serviceEstimates;
