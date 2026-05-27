// Shared navigation data: labels and hrefs used by the Header and Footer.
// The service links are derived from the single services list in
// src/data/services.ts so they never drift out of sync.

import { services } from "@/data/services";

export type NavLink = { label: string; href: string };

export const SERVICE_LINKS: NavLink[] = services.map((s) => ({
  label: s.title,
  href: s.href,
}));

export const PRIMARY_NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/pricing" },
  { label: "Road Signs", href: "/road-signs" },
  { label: "Practice Test", href: "/practice-test" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_QUICK_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Road Signs", href: "/road-signs" },
  { label: "Practice Test", href: "/practice-test" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];
