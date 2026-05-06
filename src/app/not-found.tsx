import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";

import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="container-ltm py-20 text-center md:py-28">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ltm-muted">
        404
      </p>
      <h1 className="mt-3 text-4xl font-bold text-ltm-navy md:text-5xl">
        Page not found
      </h1>
      <p className="mx-auto mt-4 max-w-prose text-base leading-relaxed text-ltm-slate">
        We couldn&rsquo;t find the page you were looking for. It may have moved,
        or the link you followed may be out of date.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button asChild size="lg">
          <Link href="/">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to home
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/services">
            <Search className="h-4 w-4" aria-hidden="true" />
            Browse services
          </Link>
        </Button>
      </div>
      <p className="mx-auto mt-10 max-w-prose text-sm text-ltm-muted">
        Looking for something specific? Try the{" "}
        <Link href="/faq" className="font-medium text-ltm-navy hover:underline">
          FAQ
        </Link>
        ,{" "}
        <Link
          href="/pricing"
          className="font-medium text-ltm-navy hover:underline"
        >
          Pricing
        </Link>
        , or{" "}
        <Link
          href="/contact"
          className="font-medium text-ltm-navy hover:underline"
        >
          Contact
        </Link>{" "}
        page.
      </p>
    </section>
  );
}
