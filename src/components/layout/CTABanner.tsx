import Link from "next/link";
import { MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CTABanner() {
  return (
    <section className="bg-ltm-black text-white">
      <div className="container-ltm flex flex-col items-start gap-6 py-14 md:flex-row md:items-center md:justify-between md:py-16">
        <h2 className="font-serif text-2xl text-white md:text-3xl">
          Ready to get something done?
        </h2>
        <Button asChild variant="whitePrimary" size="lg">
          <Link href="/contact">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            Visit an LTM service center
          </Link>
        </Button>
      </div>
    </section>
  );
}
