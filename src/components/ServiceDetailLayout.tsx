import * as React from "react";
import Link from "next/link";
import { Check, MapPin, Phone } from "lucide-react";

import { PageHeader } from "@/components/PageHeader";
import { PriceTable, type PriceColumn } from "@/components/PriceTable";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import type { FAQ } from "@/data/faqs";
import { serviceCenters } from "@/data/service-centers";

export type ProcessStep = {
  title: string;
  body: string;
  items?: string[];
};

export type ServiceSummary = {
  cost: string;
  visit: string;
  documents: number;
  lastReviewed: string;
};

type ServiceDetailLayoutProps = {
  title: string;
  subtitle: string;
  overview: React.ReactNode;
  whatToBring: string[];
  pricing: {
    columns: PriceColumn[];
    rows: Record<string, unknown>[];
    searchKey?: string;
    note?: React.ReactNode;
  } | React.ReactNode;
  process: ProcessStep[];
  faqs: FAQ[];
  headerImage?: { url: string; alt: string };
  extraContent?: React.ReactNode;
  estimatedTime?: string;
  summary?: ServiceSummary;
  source?: React.ReactNode;
};

function PricingSection({
  pricing,
}: {
  pricing: ServiceDetailLayoutProps["pricing"];
}) {
  if (
    pricing &&
    typeof pricing === "object" &&
    "columns" in pricing &&
    "rows" in pricing
  ) {
    return (
      <>
        <PriceTable
          columns={pricing.columns}
          rows={pricing.rows}
          searchQuery=""
          searchKey={pricing.searchKey}
        />
        {pricing.note && (
          <p className="mt-3 text-sm italic text-ltm-muted">{pricing.note}</p>
        )}
      </>
    );
  }
  return <>{pricing}</>;
}

export function ServiceDetailLayout({
  title,
  subtitle,
  overview,
  whatToBring,
  pricing,
  process,
  faqs,
  headerImage,
  extraContent,
  estimatedTime,
  summary,
  source,
}: ServiceDetailLayoutProps) {
  const primaryPhone = serviceCenters[0]?.phones[0];

  return (
    <>
      <PageHeader
        title={title}
        subtitle={subtitle}
        backgroundImage={headerImage}
        estimatedTime={estimatedTime}
      />

      <section className="container-ltm py-16 md:py-20">
        <div className="lg:grid lg:grid-cols-3 lg:gap-12">
          <div className="space-y-14 lg:col-span-2">
            {summary && (
              <dl className="grid grid-cols-1 gap-5 rounded-lg border border-ltm-border bg-white p-5 sm:grid-cols-2 sm:p-6">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-ltm-muted">
                    Cost
                  </dt>
                  <dd className="mt-1 text-base font-semibold text-ltm-black">
                    {summary.cost}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-ltm-muted">
                    Visit
                  </dt>
                  <dd className="mt-1 text-base font-semibold text-ltm-black">
                    {summary.visit}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-ltm-muted">
                    Documents
                  </dt>
                  <dd className="mt-1 text-base font-semibold text-ltm-black">
                    {summary.documents}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-ltm-muted">
                    Last reviewed
                  </dt>
                  <dd className="mt-1 text-base font-semibold text-ltm-black">
                    {summary.lastReviewed}
                  </dd>
                </div>
              </dl>
            )}

            <div>
              <h2 className="font-serif text-2xl text-ltm-black">Overview</h2>
              <div className="mt-5 max-w-prose space-y-4 text-[17px] leading-relaxed text-ltm-slate">
                {typeof overview === "string" ? <p>{overview}</p> : overview}
              </div>
              {source && (
                <p className="mt-4 max-w-prose text-sm italic text-ltm-muted">
                  {source}
                </p>
              )}
            </div>

            <div>
              <h2 className="font-serif text-2xl text-ltm-black">
                What to bring
              </h2>
              <ul className="mt-5 space-y-3">
                {whatToBring.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 rounded-md border border-ltm-border bg-white p-3"
                  >
                    <Check
                      className="mt-0.5 h-5 w-5 shrink-0 text-ltm-success"
                      aria-hidden="true"
                    />
                    <span className="text-sm leading-relaxed text-ltm-slate">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-ltm-black">Pricing</h2>
              <div className="mt-5">
                <PricingSection pricing={pricing} />
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-ltm-black">
                Step by step
              </h2>
              <ol className="relative mt-6 space-y-8 border-l-2 border-ltm-border pl-8">
                {process.map((step, i) => (
                  <li key={i} className="relative">
                    <span
                      className="absolute -left-[2.6rem] top-0 inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-ltm-charcoal bg-white text-base font-bold text-ltm-black shadow-sm"
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                    <h3 className="text-lg font-semibold text-ltm-black">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-ltm-slate">
                      {step.body}
                    </p>
                    {step.items && step.items.length > 0 && (
                      <ul className="mt-3 space-y-2">
                        {step.items.map((item, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2 text-sm text-ltm-slate"
                          >
                            <Check
                              className="mt-0.5 h-4 w-4 shrink-0 text-ltm-success"
                              aria-hidden="true"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ol>
            </div>

            {extraContent}

            {faqs.length > 0 && (
              <div>
                <h2 className="font-serif text-2xl text-ltm-black">
                  Common questions
                </h2>
                <Accordion
                  type="single"
                  collapsible
                  className="mt-4 rounded-lg border border-ltm-border bg-white px-4 sm:px-6"
                >
                  {faqs.map((faq) => (
                    <AccordionItem key={faq.id} value={faq.id}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="leading-relaxed text-ltm-slate">
                          {faq.answer}
                        </p>
                        {faq.bullets && faq.bullets.length > 0 && (
                          <ul className="mt-3 list-disc list-inside space-y-1 text-ltm-slate">
                            {faq.bullets.map((b, i) => (
                              <li key={i}>{b}</li>
                            ))}
                          </ul>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            )}
          </div>

          <aside className="mt-12 lg:col-span-1 lg:mt-0">
            <div className="sticky top-24 rounded-lg border border-ltm-border bg-white p-6">
              <h2 className="font-serif text-lg text-ltm-black">
                Ready to start?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ltm-slate">
                No appointment needed. Bring the documents listed above.
              </p>
              <Button asChild className="mt-5 w-full">
                <Link href="/contact">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  Visit an LTM service center
                </Link>
              </Button>

              {primaryPhone && (
                <div className="mt-5 border-t border-ltm-border pt-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-ltm-muted">
                    Have a question?
                  </p>
                  <Link
                    href={`tel:${primaryPhone.dial}`}
                    className="mt-1 inline-flex items-center gap-2 text-base font-semibold text-ltm-black hover:underline"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    {primaryPhone.display}
                  </Link>
                </div>
              )}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
