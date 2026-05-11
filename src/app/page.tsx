import Link from "next/link";
import Script from "next/script";
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

const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "GovernmentOrganization",
  name: "Liberia Traffic Management",
  alternateName: "LTM",
  url: "https://www.liberiatraffic.com",
  telephone: ["+231-888-900070", "+231-770-900080", "+231-770-900090"],
  email: "Ltm@liberiatraffic.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "SKD Boulevard, Adjacent to SKD Stadium",
    addressLocality: "Monrovia",
    addressCountry: "LR",
  },
  openingHours: ["Mo-Fr 08:00-17:00", "Sa 09:00-13:00"],
  sameAs: [
    "https://www.facebook.com/Liberia-Traffic-Management-103333742243540/",
  ],
};

export default function HomePage() {
  return (
    <>
      <Script
        id="ltm-organization-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(ORGANIZATION_JSON_LD),
        }}
      />

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
              SKD Boulevard, Monrovia.
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

      <CTABanner />
    </>
  );
}
