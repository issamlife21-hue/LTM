import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { FadeIn } from "@/components/FadeIn";
import { CTABanner } from "@/components/layout/CTABanner";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

export const metadata = {
  title: "Services",
  description:
    "Driver licensing, vehicle registration, inspection, and license plates.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader title="Our Services" />
      <section className="container-ltm py-10 md:py-20">
        <ul className="space-y-4 md:space-y-6">
          {services.map((s, index) => (
            <li key={s.href}>
            <FadeIn
              delay={index * 0.05}
              className="block rounded-lg border border-ltm-border bg-white p-5 md:p-8"
            >
              <div className="flex items-center gap-3">
                <s.icon className="h-6 w-6 text-ltm-black" aria-hidden="true" />
                <h2 className="font-serif text-lg font-bold text-ltm-black sm:text-xl md:text-2xl">
                  {s.title}
                </h2>
              </div>
              <p className="mt-3 max-w-prose text-base leading-relaxed text-ltm-ink">
                {s.description}
              </p>
              <h3 className="mt-6 text-xs font-bold uppercase tracking-wider text-ltm-black">
                What to bring
              </h3>
              <ul className="mt-3 space-y-2 text-base text-ltm-ink">
                {s.whatYouNeed.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-ltm-success"
                      aria-hidden="true"
                    />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button asChild variant="link" className="px-0">
                  <Link href={s.href}>
                    Full details
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
            </li>
          ))}
        </ul>
      </section>
      <CTABanner />
    </>
  );
}
