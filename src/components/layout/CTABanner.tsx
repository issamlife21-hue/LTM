import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";

const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=SKD+Boulevard+Monrovia+Liberia";

export function CTABanner() {
  return (
    <section className="bg-ltm-black text-white">
      <div className="container-ltm flex flex-col items-start gap-6 py-12 md:flex-row md:items-center md:justify-between">
        <h2 className="text-2xl font-semibold text-white md:text-3xl">
          Have questions? Visit our service center.
        </h2>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="whitePrimary" size="lg">
            <Link href="tel:+231770900080">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call Us
            </Link>
          </Button>
          <Button asChild variant="whiteOutline" size="lg">
            <Link
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Get Directions
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
