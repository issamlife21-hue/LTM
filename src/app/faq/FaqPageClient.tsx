"use client";

import * as React from "react";
import Link from "next/link";
import { MessagesSquare, Search } from "lucide-react";

import { EmptyState } from "@/components/EmptyState";
import { CTABanner } from "@/components/layout/CTABanner";
import { LastUpdated } from "@/components/LastUpdated";
import { PageHeader } from "@/components/PageHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { faqCategories, faqs, type FAQ } from "@/data/faqs";
import { highlightMatch } from "@/lib/format";

function HighlightedText({ text, query }: { text: string; query: string }) {
  const parts = highlightMatch(text, query);
  return (
    <>
      {parts.map((part, i) =>
        part.match ? (
          <mark
            key={i}
            className="rounded bg-yellow-200 px-0.5 text-ltm-slate"
          >
            {part.text}
          </mark>
        ) : (
          <React.Fragment key={i}>{part.text}</React.Fragment>
        )
      )}
    </>
  );
}

function FAQList({ items, query }: { items: FAQ[]; query: string }) {
  if (items.length === 0) {
    return (
      <EmptyState
        icon={MessagesSquare}
        title="No questions match your search"
        description={
          <>
            Try a different word, or{" "}
            <Link
              href="/contact"
              className="font-medium text-ltm-navy hover:underline"
            >
              contact us directly
            </Link>{" "}
            and we&rsquo;ll help.
          </>
        }
      />
    );
  }
  return (
    <Accordion
      type="single"
      collapsible
      className="rounded-lg border border-ltm-border bg-white px-4 sm:px-6"
    >
      {items.map((faq) => (
        <AccordionItem key={faq.id} value={faq.id}>
          <AccordionTrigger className="text-left">
            <HighlightedText text={faq.question} query={query} />
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-[17px] leading-relaxed text-ltm-slate">
              {faq.answer}
            </p>
            {faq.bullets && faq.bullets.length > 0 && (
              <ul className="mt-3 list-disc list-inside space-y-1 text-[17px] text-ltm-slate">
                {faq.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function FAQPageClient() {
  const [query, setQuery] = React.useState("");

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return faqs;
    return faqs.filter((f) => f.question.toLowerCase().includes(q));
  }, [query]);

  const byCategory = React.useCallback(
    (cat: string) => filtered.filter((f) => f.category === cat),
    [filtered]
  );

  return (
    <>
      <PageHeader
        title="Questions & Answers"
        subtitle="Find answers to common questions about our services."
      />

      <section className="container-ltm py-10">
        <blockquote className="mb-8 max-w-2xl border-l-4 border-ltm-red pl-4 font-display text-base italic text-ltm-navy">
          &ldquo;The Love of Liberty Brought Us Here&rdquo;
          <footer className="mt-1 text-xs not-italic text-ltm-muted">
            National motto of the Republic of Liberia, 1847.
          </footer>
        </blockquote>

        <div className="mb-6">
          <label htmlFor="faq-search" className="sr-only">
            Search questions
          </label>
          <div className="relative max-w-md">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ltm-muted"
              aria-hidden="true"
            />
            <Input
              id="faq-search"
              type="search"
              placeholder="Search questions…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-6 flex h-auto w-full flex-wrap justify-start gap-1 bg-ltm-bg p-1">
            <TabsTrigger value="all" className="text-xs sm:text-sm">
              All
            </TabsTrigger>
            {faqCategories.map((cat) => (
              <TabsTrigger
                key={cat.id}
                value={cat.id}
                className="text-xs sm:text-sm"
              >
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all">
            <FAQList items={filtered} query={query} />
          </TabsContent>
          {faqCategories.map((cat) => (
            <TabsContent key={cat.id} value={cat.id}>
              <FAQList items={byCategory(cat.id)} query={query} />
            </TabsContent>
          ))}
        </Tabs>

        <LastUpdated section="faq" />
      </section>

      <CTABanner />
    </>
  );
}
