// Shared navigation data: labels and hrefs used by the Header, Footer,
// and any page that renders a service list. Icons/descriptions stay
// at the call site to keep this module pure data.

export type NavLink = { label: string; href: string };

export const SERVICE_LINKS: NavLink[] = [
  { label: "Driver License", href: "/services/driver-license" },
  { label: "Vehicle Registration", href: "/services/vehicle-registration" },
  { label: "Vehicle Inspection", href: "/services/vehicle-inspection" },
  { label: "License Plates", href: "/services/license-plates" },
];

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
