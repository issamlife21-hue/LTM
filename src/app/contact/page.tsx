import Image from "next/image";
import Link from "next/link";
import { Clock, Facebook, Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/ContactForm";
import { CTABanner } from "@/components/layout/CTABanner";
import { PageHeader } from "@/components/PageHeader";
import { contactPhoto } from "@/data/photos";

export const metadata = {
  title: "Contact Us",
  description:
    "Visit our LTM service center on SKD Boulevard, Monrovia. Call 0770 900 080 or email Ltm@liberiatraffic.com.",
};

const MAPS_SEARCH_URL =
  "https://www.google.com/maps/search/?api=1&query=SKD+Boulevard+Monrovia+Liberia";

const MAPS_EMBED_URL =
  "https://www.google.com/maps?q=SKD+Boulevard+Monrovia+Liberia&output=embed";

const FACEBOOK_URL =
  "https://www.facebook.com/Liberia-Traffic-Management-103333742243540/";

function InfoCard({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof MapPin;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-md border border-ltm-border bg-white p-5">
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4 text-ltm-black" aria-hidden="true" />
        <h2 className="text-base font-semibold text-ltm-black">{title}</h2>
      </div>
      <div className="mt-3 text-sm leading-relaxed text-ltm-slate">
        {children}
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Visit us, give us a call, or send us a message."
        backgroundImage={contactPhoto}
        crest={{
          src: "/coat-of-arms.svg",
          alt: "Coat of arms of the Republic of Liberia",
        }}
        align="center"
      />

      <section className="container-ltm py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Left column — info cards */}
          <div className="space-y-4 lg:col-span-2">
            <InfoCard icon={MapPin} title="Visit Us">
              <address className="not-italic">
                LTM Compound
                <br />
                SKD Boulevard
                <br />
                Adjacent to SKD Stadium
                <br />
                Monrovia, Liberia
              </address>
              <Link
                href={MAPS_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-ltm-black hover:underline"
              >
                Open in Google Maps →
              </Link>
            </InfoCard>

            <InfoCard icon={Phone} title="Call Our Service Center">
              <ul className="space-y-1">
                <li>
                  <Link
                    href="tel:+231888900070"
                    className="hover:text-ltm-black hover:underline"
                  >
                    0888 900 070
                  </Link>
                </li>
                <li>
                  <Link
                    href="tel:+231770900080"
                    className="hover:text-ltm-black hover:underline"
                  >
                    0770 900 080
                  </Link>
                </li>
                <li>
                  <Link
                    href="tel:+231770900090"
                    className="hover:text-ltm-black hover:underline"
                  >
                    0770 900 090
                  </Link>
                </li>
              </ul>
              <p className="mt-3 text-xs text-ltm-muted">
                Available during working hours.
              </p>
            </InfoCard>

            <InfoCard icon={Mail} title="Other Ways to Reach Us">
              <p>
                <Link
                  href="mailto:Ltm@liberiatraffic.com"
                  className="font-medium text-ltm-black hover:underline"
                >
                  Ltm@liberiatraffic.com
                </Link>
              </p>
              <Link
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-ltm-black hover:underline"
              >
                <Facebook className="h-4 w-4" aria-hidden="true" />
                Liberia Traffic Management on Facebook
              </Link>
            </InfoCard>

            <InfoCard icon={Clock} title="Working Hours">
              <dl className="space-y-1.5">
                <div className="flex justify-between gap-4">
                  <dt className="font-medium text-ltm-slate">Monday to Friday</dt>
                  <dd>8:00 AM to 5:00 PM</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="font-medium text-ltm-slate">Saturday</dt>
                  <dd>9:00 AM to 1:00 PM</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="font-medium text-ltm-slate">Sunday</dt>
                  <dd className="text-ltm-muted">Closed</dd>
                </div>
              </dl>
              <p className="mt-3 text-xs text-ltm-muted">
                No appointment required. Walk-ins welcome.
              </p>
            </InfoCard>
          </div>

          {/* Right column — banner photo, map, and form */}
          <div className="space-y-6 lg:col-span-3">
            <div className="aspect-[16/9] overflow-hidden rounded-lg border border-ltm-border">
              <Image
                src={contactPhoto.url}
                alt={contactPhoto.alt}
                width={contactPhoto.width}
                height={contactPhoto.height}
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="overflow-hidden rounded-lg border border-ltm-border">
              <div className="aspect-video w-full">
                <iframe
                  title="Map showing LTM service center on SKD Boulevard, Monrovia"
                  src={MAPS_EMBED_URL}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0"
                />
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
