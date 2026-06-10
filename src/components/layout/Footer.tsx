import Image from "next/image";
import Link from "next/link";
import { Clock, ExternalLink, Facebook, Mail, MapPin, Phone } from "lucide-react";

import { FOOTER_QUICK_LINKS, SERVICE_LINKS } from "@/data/navigation";
import { serviceCenters } from "@/data/service-centers";

export function Footer() {
  const center = serviceCenters[0];
  if (!center) return null;

  return (
    <footer className="bg-ltm-charcoal text-white/90">
      <div className="container-ltm pb-8 pt-10 md:pb-10 md:pt-12">
        <div className="mb-8 flex flex-col items-center text-center md:mb-10">
          <Image
            src="/logo/ltm-logo.svg"
            alt="LTM official emblem"
            width={56}
            height={56}
            className="h-14 w-14 object-contain md:h-[70px] md:w-[70px]"
          />
          <p className="mt-2 font-serif text-xs italic text-white/80 md:mt-3 md:text-sm">
            Authorized by the Government of the Republic of Liberia
          </p>
        </div>

        {/* On mobile the footer is reordered Contact → Links → About so the
            most useful actions are the first thing a thumb reaches. On md+
            it falls back to the canonical 4-column desktop layout. */}
        <div className="grid gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-4">
          {/* About — last on mobile, first on desktop */}
          <div className="order-last md:order-none">
            <h2 className="mb-3 text-base font-semibold text-white md:mb-4 md:text-lg">
              About LTM
            </h2>
            <p className="text-sm leading-relaxed text-white/85">
              Liberia Traffic Management is the only entity authorized by the
              Government of Liberia to provide vehicle registration, driver
              licensing, vehicle inspection, license plate, and traffic
              violation services.
            </p>
            {/* Concession-agreement footnote is desktop only — it duplicates
                what already appears in the legal section above. */}
            <p className="mt-3 hidden text-xs leading-relaxed text-white/75 md:block">
              Operating under the 2018 Concession Agreement ratified by the
              Liberian Legislature.
            </p>
          </div>

          {/* Quick Links + Services share a 2-col mini-row on mobile so they
              don't take a full screen each. `md:contents` removes the wrapper
              at md+ so they flow into the outer grid as separate columns. */}
          <div className="grid grid-cols-2 gap-6 md:contents">
            <div>
              <h2 className="mb-3 text-base font-semibold text-white md:mb-4 md:text-lg">
                Quick Links
              </h2>
              <ul className="space-y-2 text-sm">
                {FOOTER_QUICK_LINKS.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="font-medium text-white/90 transition-colors hover:text-ltm-sand focus-visible:text-ltm-sand focus-visible:underline"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-base font-semibold text-white md:mb-4 md:text-lg">
                Services
              </h2>
              <ul className="space-y-2 text-sm">
                {SERVICE_LINKS.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="font-medium text-white/90 transition-colors hover:text-ltm-sand focus-visible:text-ltm-sand focus-visible:underline"
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact — first on mobile, last on desktop. On mobile we lead
              with three big tap actions (Call / Directions / Email) because
              they are the most likely thing a citizen wants from this strip. */}
          <div className="order-first md:order-none">
            <h2 className="mb-3 text-base font-semibold text-white md:mb-4 md:text-lg">
              Contact
            </h2>

            {/* One unified contact list across every breakpoint. The previous
                mobile-only big-button stack was removed because the CTABanner
                renders a primary Call directly above the footer on mobile and
                doubling the action wasted screen height. Phone numbers stay
                as bold, tap-friendly tel: links so a single tap still calls. */}
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-2">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-white/85"
                  aria-hidden="true"
                />
                <address className="not-italic leading-relaxed text-white/95">
                  {center.address.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                  <span className="block">
                    {center.address.locality}, {center.address.country}
                  </span>
                  <span className="mt-2 block text-xs font-medium leading-snug text-white/85">
                    {center.shortLocation}
                  </span>
                  {center.map.directionsUrl && (
                    <Link
                      href={center.map.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-white underline-offset-2 hover:underline focus-visible:underline"
                    >
                      Open in Google Maps
                      <ExternalLink className="h-3 w-3" aria-hidden="true" />
                    </Link>
                  )}
                </address>
              </li>

              <li className="flex items-start gap-2">
                <Phone
                  className="mt-0.5 h-4 w-4 shrink-0 text-white/85"
                  aria-hidden="true"
                />
                <ul className="space-y-1.5 leading-relaxed">
                  {center.phones.map((p) => (
                    <li key={p.dial}>
                      <Link
                        href={`tel:${p.dial}`}
                        aria-label={`Call LTM at ${p.display}`}
                        className="inline-flex min-h-[36px] items-center text-base font-semibold tabular-nums text-white transition-colors hover:text-ltm-sand"
                      >
                        {p.display}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li className="flex items-start gap-2">
                <Clock
                  className="mt-0.5 h-4 w-4 shrink-0 text-white/85"
                  aria-hidden="true"
                />
                <dl className="leading-relaxed text-white/95">
                  {center.hours.map((h) => (
                    <div key={h.days} className="flex flex-wrap gap-x-2">
                      <dt className="font-medium">{h.days}</dt>
                      <dd className="text-white/85">{h.hours}</dd>
                    </div>
                  ))}
                </dl>
              </li>

              {center.email && (
                <li className="flex items-start gap-2">
                  <Mail
                    className="mt-0.5 h-4 w-4 shrink-0 text-white/85"
                    aria-hidden="true"
                  />
                  <Link
                    href={`mailto:${center.email}`}
                    className="break-all text-sm font-semibold text-white transition-colors hover:text-ltm-sand"
                  >
                    {center.email}
                  </Link>
                </li>
              )}

              <li className="pt-1">
                <Link
                  href="https://www.facebook.com/share/1DbfpVisw8/?mibextid=wwXIfr"
                  aria-label="Visit LTM on Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white/90 transition-colors hover:border-ltm-sand hover:text-ltm-sand"
                >
                  <Facebook className="h-4 w-4" aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-ltm-graphite bg-ltm-black">
        <div className="container-ltm py-5 text-xs leading-relaxed text-white/75 md:py-6">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/coat-of-arms.svg"
              alt="Coat of arms of the Republic of Liberia"
              width={40}
              height={48}
              className="h-10 w-8 shrink-0 sm:h-12 sm:w-10"
            />
            <p>
              © Liberia Traffic Management. All fees and procedures listed on
              this site are set by the Government of Liberia and are accurate
              as of the date last reviewed on each page. For the most current
              information,{" "}
              <Link
                href="/contact"
                className="font-semibold text-white hover:text-ltm-sand"
              >
                visit an LTM service center
              </Link>
              .
            </p>
          </div>
          <p className="mt-3 text-center font-serif text-sm italic text-white/75 md:mt-4">
            &ldquo;The Love of Liberty Brought Us Here&rdquo;
          </p>
        </div>
      </div>
    </footer>
  );
}
