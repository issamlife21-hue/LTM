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
              Liberia Traffic Management is the only officially authorized
              entity by the Government of Liberia to provide vehicle
              registration, driver licensing, vehicle inspection, license plate,
              and traffic violation services.
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
                  Mon–Fri 8AM–5PM
                  <br />
                  Sat 9AM–1PM
                  <br />
                  Sun closed
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
          <p>
            © Liberia Traffic Management. All rights reserved. The content of
            this website is for general information and use only. It is subject
            to change without notice.
          </p>
        </div>
      </div>
    </footer>
  );
}
