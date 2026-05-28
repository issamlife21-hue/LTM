import Link from "next/link";
import Script from "next/script";
import { Clock, ExternalLink, Mail, MapPin, Phone } from "lucide-react";

import { CallLtm } from "@/components/CallLtm";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { contactPhoto } from "@/data/photos";
import { serviceCenters, type ServiceCenter } from "@/data/service-centers";

export const metadata = {
  title: "Find a Service Center",
  description:
    "Visit an LTM service center for vehicle registration, driver licensing, inspection, and license plates.",
};

function organizationJsonLd(center: ServiceCenter) {
  return {
    "@context": "https://schema.org",
    "@type": "GovernmentOrganization",
    name: "Liberia Traffic Management",
    alternateName: "LTM",
    url: "https://www.liberiatraffic.com",
    telephone: center.phones.map((p) => p.dial),
    email: center.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: center.address.lines.join(", "),
      addressLocality: center.address.locality,
      addressCountry: center.address.country,
    },
    openingHours: center.openingHoursSchema,
    sameAs: ["https://www.facebook.com/share/1DbfpVisw8/?mibextid=wwXIfr"],
  };
}

function ServiceCenterCard({ center }: { center: ServiceCenter }) {
  const primaryPhone = center.phones[0];
  return (
    <article className="overflow-hidden rounded-lg border border-ltm-border bg-white">
      <div className="aspect-[16/9] w-full bg-ltm-stone">
        <iframe
          title={`Map to LTM ${center.county}`}
          src={center.map.embedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full w-full border-0"
        />
      </div>

      <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-2xl text-ltm-black">
            {center.county}
          </h2>

          {/* Plain-English location line — what you'd tell a taxi driver */}
          <p className="mt-3 flex items-start gap-2 text-base font-medium leading-snug text-ltm-ink">
            <MapPin
              className="mt-0.5 h-4 w-4 shrink-0 text-ltm-black"
              aria-hidden="true"
            />
            <span>{center.shortLocation}</span>
          </p>

          <div className="mt-5 flex items-start gap-3">
            <MapPin
              className="mt-0.5 h-4 w-4 shrink-0 text-ltm-slate"
              aria-hidden="true"
            />
            <address className="text-base not-italic leading-relaxed text-ltm-ink">
              {center.address.lines.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
              <span className="block">
                {center.address.locality}, {center.address.country}
              </span>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="mt-3 w-full sm:w-auto"
              >
                <Link
                  href={center.map.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  Get directions
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </Button>
            </address>
          </div>

          <div className="mt-5 flex items-start gap-3">
            <Clock
              className="mt-0.5 h-4 w-4 shrink-0 text-ltm-slate"
              aria-hidden="true"
            />
            <dl className="text-base leading-relaxed text-ltm-ink">
              {center.hours.map((h) => (
                <div key={h.days} className="flex flex-wrap gap-x-2">
                  <dt className="font-semibold">{h.days}</dt>
                  <dd>{h.hours}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div>
          <div className="flex items-start gap-3">
            <Phone
              className="mt-0.5 h-4 w-4 shrink-0 text-ltm-slate"
              aria-hidden="true"
            />
            <ul className="space-y-2 text-base leading-relaxed">
              {center.phones.map((p) => (
                <li key={p.dial}>
                  <Link
                    href={`tel:${p.dial}`}
                    aria-label={`Call LTM at ${p.display}`}
                    className="inline-flex min-h-[44px] items-center text-lg font-bold tabular-nums text-ltm-black hover:underline"
                  >
                    {p.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {primaryPhone && (
            <Button asChild size="lg" className="mt-3 w-full sm:w-auto">
              <Link href={`tel:${primaryPhone.dial}`}>
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call {primaryPhone.display}
              </Link>
            </Button>
          )}

          {center.email && (
            <div className="mt-5 flex items-start gap-3">
              <Mail
                className="mt-0.5 h-4 w-4 shrink-0 text-ltm-slate"
                aria-hidden="true"
              />
              <Link
                href={`mailto:${center.email}`}
                className="break-all text-base font-semibold text-ltm-black hover:underline"
              >
                {center.email}
              </Link>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default function ContactPage() {
  // Emit Organization JSON-LD here (the only page in the site allowed to
  // surface address / phone / hours).
  const jsonLd = serviceCenters.map(organizationJsonLd);

  return (
    <>
      <Script
        id="ltm-service-centers-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        title="Find a Service Center"
        backgroundImage={contactPhoto}
        actions={<CallLtm buttonVariant="whitePrimary" />}
      />

      <section className="container-ltm py-14 md:py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          {serviceCenters.map((center) => (
            <ServiceCenterCard key={center.id} center={center} />
          ))}
        </div>
      </section>
    </>
  );
}
