import Link from "next/link";
import { MapPin } from "lucide-react";

import { CallLtm } from "@/components/CallLtm";
import { LocationLine } from "@/components/LocationLine";
import { Button } from "@/components/ui/button";

export function CTABanner() {
  return (
    <section className="bg-ltm-black text-white">
      <div className="container-ltm flex flex-col items-start gap-6 py-14 md:flex-row md:items-center md:justify-between md:py-16">
        <div>
          <h2 className="font-serif text-2xl text-white md:text-3xl">
            Visit an LTM service center
          </h2>
          {/* Plain-English location so users don't need to open a map */}
          <div className="mt-3 text-white">
            <LocationLine className="text-white" />
          </div>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <CallLtm buttonVariant="whitePrimary" className="w-full sm:w-auto" />
          <Button
            asChild
            variant="whiteOutline"
            size="lg"
            className="w-full sm:w-auto"
          >
            <Link href="/contact">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Find a location
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
