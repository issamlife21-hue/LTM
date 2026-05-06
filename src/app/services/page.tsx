import Link from "next/link";
import {
  ArrowRight,
  Car,
  Check,
  Hash,
  IdCard,
  type LucideIcon,
  Wrench,
} from "lucide-react";

import { CTABanner } from "@/components/layout/CTABanner";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Our Services — Liberia Traffic Management",
  description:
    "All the traffic-related services authorized by the Government of Liberia: driver licensing, vehicle registration, inspection, and license plates.",
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
      "Apply for, renew, or upgrade your driver license. We issue licenses for motorcycles, tricycles, private cars, heavy-duty vehicles, and commercial chauffeurs.",
    whatYouNeed: [
      "Valid ID (national ID, passport, or previous license)",
      "Application form (fill on arrival)",
      "Blood type",
      "Personal details",
    ],
    href: "/services/driver-license",
  },
  {
    icon: Car,
    title: "Vehicle Registration",
    description:
      "Register a new vehicle, renew your existing registration, or transfer ownership. Required for all vehicles operating in Liberia.",
    whatYouNeed: [
      "Valid ID",
      "Personal information",
      "Previous registration documents",
      "Customs clearance (for newly imported vehicles)",
      "Bill of sale + second-party ID (for ownership transfers)",
    ],
    href: "/services/vehicle-registration",
  },
  {
    icon: Wrench,
    title: "Vehicle Inspection",
    description:
      "Mandatory annual inspection. For 2025, criteria are limited to lights, brakes, and windshield wipers. A passing report is required to register your vehicle.",
    whatYouNeed: [
      "Vehicle being inspected",
      "Valid registration documents",
      "45-day grace period if your vehicle fails on first attempt",
    ],
    href: "/services/vehicle-inspection",
  },
  {
    icon: Hash,
    title: "License Plates",
    description:
      "Standard plates are included with vehicle registration. Test plates and customized plates are also available.",
    whatYouNeed: [
      "Valid vehicle registration",
      "Payment for any custom plates ($30 per character) or test plates ($250)",
    ],
    href: "/services/license-plates",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="All the traffic-related services authorized by the Government of Liberia."
      />
      <section className="container-ltm py-12 md:py-16">
        <ul className="space-y-6">
          {SERVICES.map((s) => (
            <li
              key={s.href}
              className="rounded-lg border border-ltm-border bg-white p-6 shadow-sm md:p-8"
            >
              <div className="flex flex-col gap-6 md:flex-row md:gap-8">
                <div className="flex shrink-0 items-start md:w-32 md:justify-center">
                  <span
                    className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-ltm-navy text-white md:h-20 md:w-20"
                    aria-hidden="true"
                  >
                    <s.icon className="h-8 w-8 md:h-10 md:w-10" />
                  </span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-ltm-navy">
                    {s.title}
                  </h2>
                  <p className="mt-2 text-base leading-relaxed text-ltm-slate">
                    {s.description}
                  </p>
                  <h3 className="mt-5 text-sm font-semibold uppercase tracking-wider text-ltm-muted">
                    What you&rsquo;ll need
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {s.whatYouNeed.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-ltm-slate"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-ltm-success"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Button asChild>
                      <Link href={s.href}>
                        Learn more
                        <ArrowRight
                          className="h-4 w-4"
                          aria-hidden="true"
                        />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <CTABanner />
    </>
  );
}
