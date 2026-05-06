import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import {
  ArrowRight,
  Car,
  Clock,
  Hash,
  IdCard,
  MapPin,
  Phone,
  ShieldCheck,
  UserCheck,
  Wrench,
} from "lucide-react";

import { HeroCarousel } from "@/components/HeroCarousel";
import { CTABanner } from "@/components/layout/CTABanner";
import { ServiceCard } from "@/components/ServiceCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { faqs } from "@/data/faqs";
import { galleryPhotos } from "@/data/photos";

const TRUST_ITEMS = [
  {
    icon: ShieldCheck,
    title: "Officially Authorized",
    text: "The only entity authorized by the Government of Liberia to provide these services.",
  },
  {
    icon: Clock,
    title: "15-Minute Service",
    text: "If you have all your documents ready, your visit can take as little as 15 minutes.",
  },
  {
    icon: UserCheck,
    title: "Walk-In, No Appointment",
    text: "Just walk in during our working hours. No booking required.",
  },
  {
    icon: MapPin,
    title: "One-Stop Shop",
    text: "Vehicle inspection, registration, and licensing all under one roof.",
  },
];

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

const STEPS = [
  {
    title: "Visit our service center",
    text: "Walk into our SKD Boulevard location during working hours. No appointment needed.",
  },
  {
    title: "Bring your documents",
    text: "Valid ID, vehicle papers if registering a vehicle, and any previous documentation.",
  },
  {
    title: "Get same-day service",
    text: "Most services completed in under 15 minutes if your paperwork is in order.",
  },
];

const HOMEPAGE_FAQ_IDS = ["q1", "q3", "q6", "q8"];
const homepageFaqs = HOMEPAGE_FAQ_IDS.map(
  (id) => faqs.find((f) => f.id === id)!
).filter(Boolean);

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
      {/* ── Section 1 — Hero ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-ltm-navy">
        <HeroCarousel />

        <div className="container-ltm relative z-10 flex min-h-[480px] flex-col items-center justify-center py-20 text-center text-white md:min-h-[600px] md:py-28">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 sm:text-sm">
            Official Government Concessionaire
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
            Liberia&rsquo;s Official Traffic Management Service
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
            Vehicle registration, driver licensing, inspections, and license
            plates — authorized by the Government of Liberia.
          </p>
          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
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
      </section>

      {/* ── Section 2 — Trust strip ──────────────────────────────── */}
      <section className="bg-white py-12">
        <div className="container-ltm">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {TRUST_ITEMS.map((item) => (
              <li
                key={item.title}
                className="flex flex-col items-start gap-3 sm:items-center sm:text-center"
              >
                <span
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-ltm-navy text-white"
                  aria-hidden="true"
                >
                  <item.icon className="h-6 w-6" />
                </span>
                <h2 className="text-base font-semibold text-ltm-navy">
                  {item.title}
                </h2>
                <p className="text-sm leading-relaxed text-ltm-slate">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Section 3 — Services grid ────────────────────────────── */}
      <section className="bg-ltm-bg py-20">
        <div className="container-ltm">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold text-ltm-navy md:text-4xl">
              Our Services
            </h2>
            <p className="mt-3 text-base text-ltm-muted md:text-lg">
              Everything you need to keep your vehicle and license up to date.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <ServiceCard key={s.href} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4 — How it works ─────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="container-ltm">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold text-ltm-navy md:text-4xl">
              How it works
            </h2>
            <p className="mt-3 text-base text-ltm-muted md:text-lg">
              Three simple steps from arrival to driving away.
            </p>
          </div>
          <ol className="mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
            {STEPS.map((step, i) => (
              <li
                key={i}
                className="relative flex flex-col items-center text-center"
              >
                {i < STEPS.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute left-[calc(50%+2rem)] top-8 hidden w-[calc(100%-4rem)] border-t-2 border-dashed border-ltm-border md:block"
                  />
                )}
                <span className="relative z-10 inline-flex h-16 w-16 items-center justify-center rounded-full bg-ltm-navy text-2xl font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-ltm-navy">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-ltm-slate">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Section 5 — Quick info row ───────────────────────────── */}
      <section className="bg-ltm-bg py-16">
        <div className="container-ltm grid gap-6 lg:grid-cols-3">
          <div className="rounded-lg border border-ltm-border bg-white p-8">
            <span
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ltm-navy text-white"
              aria-hidden="true"
            >
              <Clock className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-lg font-semibold text-ltm-navy">Hours</h3>
            <ul className="mt-3 space-y-1 text-sm text-ltm-slate">
              <li>Mon–Fri: 8:00 AM – 5:00 PM</li>
              <li>Saturday: 9:00 AM – 1:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
          <div className="rounded-lg border border-ltm-border bg-white p-8">
            <span
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ltm-navy text-white"
              aria-hidden="true"
            >
              <MapPin className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-lg font-semibold text-ltm-navy">
              Address
            </h3>
            <address className="mt-3 space-y-1 text-sm not-italic text-ltm-slate">
              <p>LTM Compound, SKD Boulevard</p>
              <p>Adjacent to SKD Stadium</p>
              <p>Monrovia, Liberia</p>
            </address>
            <Link
              href="/contact"
              className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-ltm-navy hover:underline"
            >
              Get directions
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
          <div className="rounded-lg border border-ltm-border bg-white p-8">
            <span
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ltm-navy text-white"
              aria-hidden="true"
            >
              <Phone className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-lg font-semibold text-ltm-navy">Phone</h3>
            <ul className="mt-3 space-y-1 text-sm text-ltm-slate">
              <li>
                <Link
                  href="tel:+231888900070"
                  className="hover:text-ltm-navy hover:underline"
                >
                  0888 900 070
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+231770900080"
                  className="hover:text-ltm-navy hover:underline"
                >
                  0770 900 080
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+231770900090"
                  className="hover:text-ltm-navy hover:underline"
                >
                  0770 900 090
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Section 6 — Photo gallery ────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="container-ltm">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold text-ltm-navy md:text-4xl">
              Our facility
            </h2>
            <p className="mt-3 text-base text-ltm-muted md:text-lg">
              Modern, professional service centers built for efficiency.
            </p>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryPhotos.slice(0, 6).map((photo) => (
              <li
                key={photo.id}
                className="group aspect-[4/3] overflow-hidden rounded-lg border border-ltm-border"
              >
                <Image
                  src={photo.url}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Section 7 — FAQ teaser ───────────────────────────────── */}
      <section className="bg-ltm-bg py-20">
        <div className="container-ltm">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold text-ltm-navy md:text-4xl">
              Common questions
            </h2>
            <p className="mt-3 text-base text-ltm-muted md:text-lg">
              Quick answers to what people ask most.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-3xl">
            <Accordion
              type="single"
              collapsible
              className="rounded-lg border border-ltm-border bg-white px-4 sm:px-6"
            >
              {homepageFaqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="leading-relaxed text-ltm-slate">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="mt-6 text-center">
              <Button asChild variant="outline" size="lg">
                <Link href="/faq">
                  View all questions
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 8 — CTA banner ───────────────────────────────── */}
      <CTABanner />
    </>
  );
}
