import Link from "next/link";
import { Car, Hash, IdCard, Wrench } from "lucide-react";

import { HeroCarousel } from "@/components/HeroCarousel";
import { CTABanner } from "@/components/layout/CTABanner";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";

const SERVICES = [
  {
    icon: IdCard,
    title: "Driver License",
    description: "Apply for or renew a motorcycle, car, or commercial license.",
    href: "/services/driver-license",
  },
  {
    icon: Car,
    title: "Vehicle Registration",
    description: "Register, renew, or transfer ownership.",
    href: "/services/vehicle-registration",
  },
  {
    icon: Wrench,
    title: "Vehicle Inspection",
    description: "Annual check: lights, brakes, windshield wipers.",
    href: "/services/vehicle-inspection",
  },
  {
    icon: Hash,
    title: "License Plates",
    description: "Standard, test, and customized plates.",
    href: "/services/license-plates",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[520px] overflow-hidden bg-ltm-black md:h-[600px]">
        <HeroCarousel />

        <div className="container-ltm absolute inset-x-0 bottom-0 top-0 z-10 flex flex-col justify-end pb-14 md:pb-16">
          <div className="max-w-3xl text-white">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/85">
              Authorized by the Government of Liberia
            </p>
            <h1 className="mb-5 font-serif text-4xl leading-[1.1] text-white sm:text-5xl">
              Liberia&rsquo;s Official Traffic Management Service
            </h1>
            <p className="mb-7 max-w-xl text-base leading-relaxed text-white/90">
              Driver licenses, vehicle registration, inspection, and plates.
            </p>
            <Button asChild size="lg" variant="whitePrimary">
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-ltm-paper py-16 md:py-24">
        <div className="container-ltm">
          <h2 className="mb-10 text-2xl text-ltm-black md:text-3xl">
            Our services
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <ServiceCard key={s.href} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Legal basis / authority */}
      <section className="border-y border-ltm-border bg-white py-14 md:py-20">
        <div className="container-ltm flex flex-col items-center gap-6 md:flex-row md:items-center md:gap-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/coat-of-arms.svg"
            alt="Coat of arms of the Republic of Liberia"
            width={72}
            height={86}
            className="h-20 w-auto shrink-0 text-ltm-black"
            style={{ color: "#0E0E10" }}
          />
          <div className="max-w-3xl text-center md:text-left">
            <h2 className="font-serif text-2xl text-ltm-black md:text-3xl">
              Authorized by the Government of Liberia
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ltm-slate">
              Liberia Traffic Management is the sole entity authorized under
              the 2018 Concession Agreement, ratified by the Liberian
              Legislature, to operate vehicle registration, driver licensing,
              vehicle inspection, license plates, and traffic violation
              services on behalf of the Republic.
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
