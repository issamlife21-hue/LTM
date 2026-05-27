// src/data/services.ts
// ============================================================================
// SERVICES — single source of truth for LTM's four services.
// ============================================================================
// Used by: the homepage service cards, the /services overview list, and the
// header + footer navigation. Edit a service's text, icon, or order here and
// it updates in every one of those places.
//
// HOW TO EDIT:
//   - `title`            shown everywhere (also used as the nav label)
//   - `href`             the service page route (keep it in sync with the
//                        folder under src/app/services/)
//   - `icon`             a lucide-react icon component
//   - `cardDescription`  short one-line text on the homepage cards
//   - `description`      fuller text on the /services overview list
//   - `whatYouNeed`      the "You will need" bullets on the /services list
// ============================================================================

import type { ComponentType, SVGProps } from "react";
import { Car, IdCard, Wrench, type LucideIcon } from "lucide-react";

import { LicensePlateIcon } from "@/components/icons/LicensePlateIcon";

// Either a lucide-react icon or a custom SVG icon component (both accept a
// className and render at the same 24x24 grid).
export type ServiceIcon = LucideIcon | ComponentType<SVGProps<SVGSVGElement>>;

export type Service = {
  id: string;
  title: string;
  href: string;
  icon: ServiceIcon;
  cardDescription: string;
  description: string;
  whatYouNeed: string[];
};

export const services: Service[] = [
  {
    id: "driver-license",
    title: "Driver License",
    href: "/services/driver-license",
    icon: IdCard,
    cardDescription:
      "Apply for or renew a motorcycle, car, or commercial license.",
    description:
      "Apply for, renew, or upgrade a license. Motorcycle, tricycle, car, heavy-duty, and chauffeur categories.",
    whatYouNeed: [
      "Valid ID",
      "Application form (filled on arrival)",
      "Blood type",
    ],
  },
  {
    id: "vehicle-registration",
    title: "Vehicle Registration",
    href: "/services/vehicle-registration",
    icon: Car,
    cardDescription: "Register, renew, or transfer ownership.",
    description: "New registrations, renewals, and ownership transfers.",
    whatYouNeed: [
      "Valid ID",
      "Previous registration",
      "Customs clearance (imported vehicles)",
      "Bill of sale + second-party ID (transfers)",
    ],
  },
  {
    id: "vehicle-inspection",
    title: "Vehicle Inspection",
    href: "/services/vehicle-inspection",
    icon: Wrench,
    cardDescription: "Annual check: lights, brakes, windshield wipers.",
    description:
      "Annual check. 2025 criteria: lights, brakes, windshield wipers. Required before registration.",
    whatYouNeed: ["The vehicle", "Valid registration documents"],
  },
  {
    id: "license-plates",
    title: "License Plates",
    href: "/services/license-plates",
    icon: LicensePlateIcon,
    cardDescription: "Standard, test, and customized plates.",
    description:
      "Standard plates are issued with registration. Test plates cost US$250. Custom plates cost US$30 per character.",
    whatYouNeed: [
      "Valid vehicle registration",
      "Payment for test or custom plates",
    ],
  },
];
