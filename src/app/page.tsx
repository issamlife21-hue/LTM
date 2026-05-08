import Link from "next/link";
import Script from "next/script";
import { Car, Hash, IdCard, MapPin, Wrench } from "lucide-react";

import { HeroCarousel } from "@/components/HeroCarousel";
import { CTABanner } from "@/components/layout/CTABanner";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";

const SERVICES = [
  {
    icon: IdCard,
    title: "Driver License",
    description:
      "Apply for or renew your motorcycle, car, or commercial driver license.",
    href: "/services/driver-license",
  },
  {
    icon: Car,
    title: "Vehicle Registration",
    description:
      "Register a new vehicle, renew your registration, or transfer ownership.",
    href: "/services/vehicle-registration",
  },
  {
    icon: Wrench,
    title: "Vehicle Inspection",
    description:
      "Mandatory annual inspection covering lights, brakes, and windshield wipers.",
    href: "/services/vehicle-inspection",
  },
  {
    icon: Hash,
    title: "License Plates",
    description:
      "Standard plates are included with registration. Test and customized plates also available.",
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
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/85">
              Authorized by the Government of Liberia
            </p>
            <h1 className="mb-4 font-serif text-3xl leading-tight text-white md:text-5xl">
              Liberia&rsquo;s Official Traffic Management Service
            </h1>
            <p className="mb-6 max-w-xl text-base leading-relaxed text-white/90">
              Driver licenses, vehicle registration, inspection, and license
              plates, all from one trusted office in Monrovia.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" variant="whitePrimary">
                <Link href="/services">View Services</Link>
              </Button>
              <Button asChild size="lg" variant="whiteOutline">
                <Link href="/contact">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  Find Us in Monrovia
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-ltm-paper py-12 md:py-16">
        <div className="container-ltm">
          <div className="mb-8 max-w-2xl">
            <h2 className="text-2xl text-ltm-black md:text-3xl">
              Our services
            </h2>
            <p className="mt-2 text-base text-ltm-slate">
              Everything you need to keep your vehicle and license up to date.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <ServiceCard key={s.href} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Single CTA */}
      <CTABanner />
    </>
  );
}
