import Image from "next/image";
import Link from "next/link";
import { Clock, Facebook, Mail, MapPin, Phone } from "lucide-react";

import { FOOTER_QUICK_LINKS, SERVICE_LINKS } from "@/data/navigation";
import { serviceCenters } from "@/data/service-centers";

export function Footer() {
  const center = serviceCenters[0];

  return (
    <footer className="bg-ltm-charcoal text-white/85">
      <div className="container-ltm pt-12 pb-10">
        <div className="mb-10 flex flex-col items-center text-center">
          <Image
            src="/logo/ltm-logo.svg"
            alt="LTM official emblem"
            width={70}
            height={70}
            className="h-[70px] w-[70px] object-contain"
          />
          <p className="mt-3 font-serif text-sm italic text-white/70">
            Authorized by the Government of the Republic of Liberia
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">About LTM</h2>
            <p className="text-sm leading-relaxed">
              Liberia Traffic Management is the only entity authorized by the
              Government of Liberia to provide vehicle registration, driver
              licensing, vehicle inspection, license plate, and traffic
              violation services.
            </p>
            <p className="mt-3 text-xs leading-relaxed text-white/60">
              Operating under the 2018 Concession Agreement ratified by the
              Liberian Legislature.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              {FOOTER_QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/85 transition-colors hover:text-ltm-sand focus-visible:text-ltm-sand focus-visible:underline"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">Services</h2>
            <ul className="space-y-2 text-sm">
              {SERVICE_LINKS.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-white/85 transition-colors hover:text-ltm-sand focus-visible:text-ltm-sand focus-visible:underline"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">Contact</h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-white/60"
                  aria-hidden="true"
                />
                <address className="not-italic leading-relaxed">
                  {center.address.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                  <span className="block">
                    {center.address.locality}, {center.address.country}
                  </span>
                </address>
              </li>
              <li className="flex items-start gap-2">
                <Phone
                  className="mt-0.5 h-4 w-4 shrink-0 text-white/60"
                  aria-hidden="true"
                />
                <ul className="leading-relaxed">
                  {center.phones.map((p) => (
                    <li key={p.dial}>
                      <Link
                        href={`tel:${p.dial}`}
                        className="transition-colors hover:text-ltm-sand"
                      >
                        {p.display}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="flex items-start gap-2">
                <Clock
                  className="mt-0.5 h-4 w-4 shrink-0 text-white/60"
                  aria-hidden="true"
                />
                <dl className="leading-relaxed">
                  {center.hours.map((h) => (
                    <div key={h.days} className="flex flex-wrap gap-x-2">
                      <dt>{h.days}</dt>
                      <dd className="text-white/70">{h.hours}</dd>
                    </div>
                  ))}
                </dl>
              </li>
              {center.email && (
                <li className="flex items-start gap-2">
                  <Mail
                    className="mt-0.5 h-4 w-4 shrink-0 text-white/60"
                    aria-hidden="true"
                  />
                  <Link
                    href={`mailto:${center.email}`}
                    className="transition-colors hover:text-ltm-sand"
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
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white/80 transition-colors hover:border-ltm-sand hover:text-ltm-sand"
                >
                  <Facebook className="h-4 w-4" aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-ltm-graphite bg-ltm-black">
        <div className="container-ltm py-6 text-xs leading-relaxed text-white/60">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            {/* Inline <img> so the SVG inherits currentColor for monochrome
                white rendering on the dark bottom strip. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/coat-of-arms.svg"
              alt="Coat of arms of the Republic of Liberia"
              width={40}
              height={48}
              className="h-12 w-10 shrink-0"
              style={{ color: "#ffffff" }}
            />
            <p>
              © Liberia Traffic Management. All fees and procedures listed on
              this site are set by the Government of Liberia and are accurate
              as of the date last reviewed on each page. For the most current
              information,{" "}
              <Link
                href="/contact"
                className="font-medium text-white hover:text-ltm-sand"
              >
                visit an LTM service center
              </Link>
              .
            </p>
          </div>
          <p className="mt-4 text-center font-serif text-sm italic text-white/60">
            &ldquo;The Love of Liberty Brought Us Here&rdquo;
          </p>
        </div>
      </div>
    </footer>
  );
}
