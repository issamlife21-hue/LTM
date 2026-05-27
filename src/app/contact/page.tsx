import Link from "next/link";
import Script from "next/script";
import { Clock, ExternalLink, Mail, MapPin, Phone } from "lucide-react";

import { PageHeader } from "@/components/PageHeader";
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

          <div className="mt-5 flex items-start gap-3">
            <MapPin
              className="mt-0.5 h-4 w-4 shrink-0 text-ltm-muted"
              aria-hidden="true"
            />
            <address className="text-sm not-italic leading-relaxed text-ltm-slate">
              {center.address.lines.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
              <span className="block">
                {center.address.locality}, {center.address.country}
              </span>
              <Link
                href={center.map.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-ltm-black underline-offset-4 hover:underline"
              >
                Get directions
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </address>
          </div>

          <div className="mt-5 flex items-start gap-3">
            <Clock
              className="mt-0.5 h-4 w-4 shrink-0 text-ltm-muted"
              aria-hidden="true"
            />
            <dl className="text-sm leading-relaxed text-ltm-slate">
              {center.hours.map((h) => (
                <div key={h.days} className="flex flex-wrap gap-x-2">
                  <dt className="font-medium text-ltm-slate">{h.days}</dt>
                  <dd>{h.hours}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div>
          <div className="flex items-start gap-3">
            <Phone
              className="mt-0.5 h-4 w-4 shrink-0 text-ltm-muted"
              aria-hidden="true"
            />
            <ul className="text-sm leading-relaxed text-ltm-slate">
              {center.phones.map((p) => (
                <li key={p.dial}>
                  <Link
                    href={`tel:${p.dial}`}
                    className="text-ltm-black hover:underline"
                  >
                    {p.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {center.email && (
            <div className="mt-5 flex items-start gap-3">
              <Mail
                className="mt-0.5 h-4 w-4 shrink-0 text-ltm-muted"
                aria-hidden="true"
              />
              <Link
                href={`mailto:${center.email}`}
                className="text-sm text-ltm-black hover:underline"
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
