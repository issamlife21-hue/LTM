import * as React from "react";
import Link from "next/link";
import { Check, Clock, MapPin, Phone } from "lucide-react";

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

const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=SKD+Boulevard+Monrovia+Liberia";

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
  return (
    <>
      <PageHeader
        title={title}
        subtitle={subtitle}
        backgroundImage={headerImage}
        estimatedTime={estimatedTime}
      />

      <section className="container-ltm py-12 md:py-16">
        <div className="lg:grid lg:grid-cols-3 lg:gap-10">
          <div className="space-y-12 lg:col-span-2">
            {summary && (
              <dl className="grid grid-cols-1 gap-4 rounded-lg border border-ltm-border bg-white p-4 sm:grid-cols-2 sm:p-5">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-ltm-muted">
                    Cost
                  </dt>
                  <dd className="mt-1 text-base font-semibold text-ltm-navy">
                    {summary.cost}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-ltm-muted">
                    Visit
                  </dt>
                  <dd className="mt-1 text-base font-semibold text-ltm-navy">
                    {summary.visit}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-ltm-muted">
                    Documents required
                  </dt>
                  <dd className="mt-1 text-base font-semibold text-ltm-navy">
                    {summary.documents}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-ltm-muted">
                    Last reviewed
                  </dt>
                  <dd className="mt-1 text-base font-semibold text-ltm-navy">
                    {summary.lastReviewed}
                  </dd>
                </div>
              </dl>
            )}

            <div>
              <h2 className="text-2xl font-semibold text-ltm-navy">
                Overview
              </h2>
              <div className="mt-4 max-w-prose space-y-4 text-[18px] leading-relaxed text-ltm-slate">
                {typeof overview === "string" ? <p>{overview}</p> : overview}
              </div>
              {source && (
                <p className="mt-4 max-w-prose text-sm italic text-ltm-muted">
                  {source}
                </p>
              )}
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-ltm-navy">
                What you need to bring
              </h2>
              <p className="mt-2 max-w-prose text-sm italic text-ltm-muted">
                Please bring everything below. Missing documents are the most
                common reason a visit can&rsquo;t be completed in one trip.
              </p>
              <ul className="mt-4 space-y-3">
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
              <h2 className="text-2xl font-semibold text-ltm-navy">Pricing</h2>
              <div className="mt-4">
                <PricingSection pricing={pricing} />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-ltm-navy">
                Step by step
              </h2>
              <ol className="relative mt-6 space-y-8 border-l-2 border-ltm-border pl-8">
                {process.map((step, i) => (
                  <li key={i} className="relative">
                    <span
                      className="absolute -left-[2.6rem] top-0 inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-ltm-navy bg-white text-base font-bold text-ltm-navy shadow-sm"
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                    <h3 className="text-lg font-semibold text-ltm-navy">
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
                <h2 className="text-2xl font-semibold text-ltm-navy">
                  Frequently asked questions
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
            <div className="sticky top-24 space-y-4 rounded-lg border border-ltm-border bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-ltm-navy">
                Visit our service center
              </h2>

              <div className="flex items-start gap-3 text-sm text-ltm-slate">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-ltm-muted"
                  aria-hidden="true"
                />
                <address className="not-italic leading-relaxed">
                  LTM Compound, SKD Boulevard
                  <br />
                  Adjacent to SKD Stadium
                  <br />
                  Monrovia, Liberia
                </address>
              </div>

              <div className="flex items-start gap-3 text-sm text-ltm-slate">
                <Clock
                  className="mt-0.5 h-4 w-4 shrink-0 text-ltm-muted"
                  aria-hidden="true"
                />
                <div className="leading-relaxed">
                  Monday to Friday: 8AM to 5PM
                  <br />
                  Saturday: 9AM to 1PM
                </div>
              </div>

              <div className="flex flex-col gap-2 pt-2">
                <Button asChild className="w-full">
                  <Link href="tel:+231770900080">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    Call Us
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
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
          </aside>
        </div>
      </section>
    </>
  );
}
