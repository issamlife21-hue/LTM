import Link from "next/link";
import { ArrowRight, Car, Hash, IdCard, type LucideIcon, Wrench } from "lucide-react";

import { CTABanner } from "@/components/layout/CTABanner";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Our Services. Liberia Traffic Management",
  description:
    "Driver licensing, vehicle registration, inspection, and license plates.",
};

type ServiceDetail = {
  icon: LucideIcon;
  title: string;
  description: string;
  whatYouNeed: string[];
  href: string;
};

const SERVICES: ServiceDetail[] = [
  {
    icon: IdCard,
    title: "Driver License",
    description:
      "Apply for, renew, or upgrade a license. Motorcycle, tricycle, car, heavy-duty, and chauffeur categories.",
    whatYouNeed: [
      "Valid ID",
      "Application form (filled on arrival)",
      "Blood type",
    ],
    href: "/services/driver-license",
  },
  {
    icon: Car,
    title: "Vehicle Registration",
    description: "New registrations, renewals, and ownership transfers.",
    whatYouNeed: [
      "Valid ID",
      "Previous registration",
      "Customs clearance (imported vehicles)",
      "Bill of sale + second-party ID (transfers)",
    ],
    href: "/services/vehicle-registration",
  },
  {
    icon: Wrench,
    title: "Vehicle Inspection",
    description:
      "Annual check. 2025 criteria: lights, brakes, windshield wipers. Required before registration.",
    whatYouNeed: [
      "The vehicle",
      "Valid registration documents",
    ],
    href: "/services/vehicle-inspection",
  },
  {
    icon: Hash,
    title: "License Plates",
    description:
      "Standard plates come with registration. Test plates US$250. Custom plates US$30 per character.",
    whatYouNeed: [
      "Valid vehicle registration",
      "Payment for test or custom plates",
    ],
    href: "/services/license-plates",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader title="Our Services" />
      <section className="container-ltm py-16 md:py-20">
        <ul className="space-y-6">
          {SERVICES.map((s) => (
            <li
              key={s.href}
              className="rounded-lg border border-ltm-border bg-white p-6 md:p-8"
            >
              <div className="flex items-center gap-3">
                <s.icon
                  className="h-5 w-5 text-ltm-black"
                  aria-hidden="true"
                />
                <h2 className="font-serif text-xl text-ltm-black md:text-2xl">
                  {s.title}
                </h2>
              </div>
              <p className="mt-3 max-w-prose text-base leading-relaxed text-ltm-slate">
                {s.description}
              </p>
              <h3 className="mt-6 text-xs font-semibold uppercase tracking-wider text-ltm-muted">
                You will need
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-ltm-slate">
                {s.whatYouNeed.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="mt-6">
                <Button asChild variant="link" className="px-0">
                  <Link href={s.href}>
                    Full details
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <CTABanner />
    </>
  );
}
