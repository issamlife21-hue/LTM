import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

import { FadeIn } from "@/components/FadeIn";
import { HeroCarousel } from "@/components/HeroCarousel";
import { CTABanner } from "@/components/layout/CTABanner";
import { QuickActions } from "@/components/QuickActions";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { serviceCenters } from "@/data/service-centers";
import { services } from "@/data/services";

export default function HomePage() {
  const center = serviceCenters[0];
  const primaryPhone = center?.phones[0];

  return (
    <>
      {/* Hero — sized tighter on mobile so the most important above-the-fold
          actions (View Services + Call) sit closer to the thumb. */}
      <section className="relative min-h-[45svh] overflow-hidden bg-ltm-black sm:min-h-[52svh] md:min-h-[60svh]">
        <HeroCarousel />

        <div className="container-ltm absolute inset-x-0 bottom-0 top-0 z-10 flex flex-col justify-end pb-10 md:pb-16">
          <div className="max-w-3xl text-white">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/85 sm:mb-4 sm:text-xs">
              Authorized by the Government of Liberia
            </p>
            {/* Hero image swap: replace heroPhotos in src/data/photos.ts — add url, alt, width, height */}
            <h1
              className="mb-3 font-serif leading-[1.1] text-white sm:mb-5"
              style={{ fontSize: "clamp(1.6rem, 4.5vw + 0.5rem, 3rem)" }}
            >
              Liberia&rsquo;s Official Traffic Management Service
            </h1>
            <p className="mb-5 max-w-xl text-base leading-relaxed text-white/95 sm:mb-6">
              Driver licenses, vehicle registration, inspection, and plates.
            </p>
            {/* Two clear paths above the fold: view services, or call. Call
                is the canonical mobile CTA — it isn't repeated in the
                QuickActions strip below. */}
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
              <Button asChild size="lg" variant="whitePrimary">
                <Link href="/services">View Services</Link>
              </Button>
              {primaryPhone && (
                <Button asChild size="lg" variant="whiteOutline">
                  <Link
                    href={`tel:${primaryPhone.dial}`}
                    aria-label={`Call LTM at ${primaryPhone.display}`}
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    Call {primaryPhone.display}
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Quick actions — five fast paths most citizens come here for */}
      <FadeIn>
        <QuickActions />
      </FadeIn>

      {/* Services */}
      <section className="bg-ltm-paper py-10 md:py-24">
        <div className="container-ltm">
          <h2 className="mb-6 text-xl font-bold text-ltm-black sm:mb-10 sm:text-2xl md:text-3xl">
            Our services
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, index) => (
              <FadeIn key={s.href} delay={index * 0.05} className="h-full">
                <ServiceCard
                  icon={s.icon}
                  title={s.title}
                  description={s.cardDescription}
                  href={s.href}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Legal basis / authority */}
      <FadeIn>
      <section className="border-y border-ltm-border bg-white py-10 md:py-20">
        <div className="container-ltm flex flex-col items-center gap-5 md:flex-row md:items-center md:gap-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/coat-of-arms.svg"
            alt="Coat of arms of the Republic of Liberia"
            width={72}
            height={86}
            className="h-16 w-auto shrink-0 sm:h-20"
          />
          <div className="max-w-3xl text-center md:text-left">
            <h2 className="font-serif text-xl font-bold text-ltm-black sm:text-2xl md:text-3xl">
              Authorized by the Government of Liberia
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ltm-ink">
              Liberia Traffic Management is the sole entity authorized under the
              2018 Concession Agreement, ratified by the Liberian Legislature,
              to operate vehicle registration, driver licensing, vehicle
              inspection, license plates, and traffic violation services on
              behalf of the Republic.
            </p>
            {center?.shortLocation && (
              <p className="mt-4 inline-flex items-start gap-2 text-base font-medium text-ltm-ink">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-ltm-black"
                  aria-hidden="true"
                />
                <span>{center.shortLocation}</span>
              </p>
            )}
          </div>
        </div>
      </section>
      </FadeIn>

      <CTABanner />
    </>
  );
}
