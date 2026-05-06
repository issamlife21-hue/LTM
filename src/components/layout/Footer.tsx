import Link from "next/link";
import { Facebook, Mail, MapPin, Phone, Clock } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Road Signs", href: "/road-signs" },
  { label: "Practice Test", href: "/practice-test" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const services = [
  { label: "Driver License", href: "/services/driver-license" },
  { label: "Vehicle Registration", href: "/services/vehicle-registration" },
  { label: "Vehicle Inspection", href: "/services/vehicle-inspection" },
  { label: "License Plates", href: "/services/license-plates" },
];

export function Footer() {
  return (
    <footer className="bg-ltm-navy text-slate-300">
      <div className="container-ltm py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">About LTM</h2>
            <p className="text-sm leading-relaxed">
              Liberia Traffic Management is the only entity authorized by the
              Government of Liberia to provide vehicle registration, driver
              licensing, vehicle inspection, license plate, and traffic
              violation services.
            </p>
            <p className="mt-3 text-xs leading-relaxed text-slate-400">
              Operating under the 2018 Concession Agreement ratified by the
              Liberian Legislature.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="hover:text-white hover:underline focus-visible:text-white focus-visible:underline"
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
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="hover:text-white hover:underline focus-visible:text-white focus-visible:underline"
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
                  className="mt-0.5 h-4 w-4 shrink-0 text-slate-400"
                  aria-hidden="true"
                />
                <address className="not-italic leading-relaxed">
                  LTM Compound, SKD Boulevard,
                  <br />
                  Adjacent to SKD Stadium,
                  <br />
                  Monrovia, Liberia
                </address>
              </li>
              <li className="flex items-start gap-2">
                <Phone
                  className="mt-0.5 h-4 w-4 shrink-0 text-slate-400"
                  aria-hidden="true"
                />
                <div className="space-y-0.5">
                  <Link
                    href="tel:+231888900070"
                    className="block hover:text-white hover:underline"
                  >
                    0888 900 070
                  </Link>
                  <Link
                    href="tel:+231770900080"
                    className="block hover:text-white hover:underline"
                  >
                    0770 900 080
                  </Link>
                  <Link
                    href="tel:+231770900090"
                    className="block hover:text-white hover:underline"
                  >
                    0770 900 090
                  </Link>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail
                  className="mt-0.5 h-4 w-4 shrink-0 text-slate-400"
                  aria-hidden="true"
                />
                <Link
                  href="mailto:Ltm@liberiatraffic.com"
                  className="hover:text-white hover:underline"
                >
                  Ltm@liberiatraffic.com
                </Link>
              </li>
              <li className="flex items-start gap-2">
                <Clock
                  className="mt-0.5 h-4 w-4 shrink-0 text-slate-400"
                  aria-hidden="true"
                />
                <div className="leading-relaxed">
                  Monday to Friday 8AM to 5PM
                  <br />
                  Saturday 9AM to 1PM
                  <br />
                  Sunday closed
                </div>
              </li>
              <li className="pt-2">
                <Link
                  href="https://www.facebook.com/"
                  aria-label="Visit LTM on Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-500 text-slate-300 transition-colors hover:border-white hover:text-white"
                >
                  <Facebook className="h-4 w-4" aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs leading-relaxed text-slate-400">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            {/* Inline <img> so the SVG inherits currentColor for monochrome
                white rendering on the navy footer. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/coat-of-arms.svg"
              alt="Coat of arms of the Republic of Liberia"
              width={40}
              height={48}
              className="h-12 w-10 shrink-0 text-white"
              style={{ color: "#ffffff" }}
            />
            <p>
              © Liberia Traffic Management. All fees and procedures listed on
              this site are set by the Government of Liberia and are accurate
              as of the date last reviewed on each page. For the most current
              information, contact our service center at{" "}
              <a
                href="tel:+231770900080"
                className="font-medium text-white hover:underline"
              >
                0770 900 080
              </a>
              .
            </p>
          </div>
          <p
            className="mt-4 text-center font-display text-sm italic text-white/60"
          >
            &ldquo;The Love of Liberty Brought Us Here&rdquo;
          </p>
        </div>
      </div>
    </footer>
  );
}
