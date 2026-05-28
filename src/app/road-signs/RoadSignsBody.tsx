"use client";

import * as React from "react";
import { Search } from "lucide-react";

import { EmptyState } from "@/components/EmptyState";
import { SignCard } from "@/components/SignCard";
import { Input } from "@/components/ui/input";
import { roadSigns, sectionMeta, type SignSection } from "@/data/road-signs";
import { cn } from "@/lib/utils";

const SECTIONS_IN_ORDER = (Object.keys(sectionMeta) as SignSection[]).sort(
  (a, b) => sectionMeta[a].order - sectionMeta[b].order
);

export function RoadSignsBody() {
  const [query, setQuery] = React.useState("");

  const q = query.trim().toLowerCase();
  const filtered = React.useMemo(
    () =>
      q
        ? roadSigns.filter(
            (s) =>
              s.name.toLowerCase().includes(q) ||
              s.description.toLowerCase().includes(q)
          )
        : roadSigns,
    [q]
  );
  const totalMatches = filtered.length;

  return (
    <>
      {/* Sticky jump-to-section bar with search */}
      <div className="sticky top-14 z-30 border-y border-ltm-border bg-ltm-paper/95 backdrop-blur supports-[backdrop-filter]:bg-ltm-paper/80 lg:top-[72px]">
        <div className="container-ltm flex flex-col gap-3 py-3 lg:flex-row lg:items-center lg:justify-between">
          <nav
            aria-label="Jump to section"
            className="hidden flex-wrap items-center gap-x-4 gap-y-1 text-xs md:flex"
          >
            <span className="font-semibold uppercase tracking-wider text-ltm-slate">
              Jump to:
            </span>
            {SECTIONS_IN_ORDER.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="rounded text-ltm-black underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ltm-navy focus-visible:ring-offset-2"
              >
                {sectionMeta[section].title}
              </a>
            ))}
          </nav>
          <div>
            <label htmlFor="road-signs-search" className="sr-only">
              Search road signs
            </label>
            <div className="relative w-full lg:w-72">
              <Search
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ltm-muted"
                aria-hidden="true"
              />
              <Input
                id="road-signs-search"
                type="search"
                placeholder="Search signs…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="h-9 pl-9 text-sm"
              />
            </div>
          </div>
        </div>
        {q && (
          <div className="container-ltm pb-2 text-xs font-medium text-ltm-slate">
            {totalMatches === 0
              ? "No matches."
              : `${totalMatches} sign${totalMatches === 1 ? "" : "s"} match.`}
          </div>
        )}
      </div>

      {q && totalMatches === 0 ? (
        <div className="container-ltm py-16">
          <EmptyState
            icon={Search}
            title="No signs match your search"
            description="Try a shorter word, or browse by section using the menu above."
          />
        </div>
      ) : (
        SECTIONS_IN_ORDER.map((section, i) => {
          const meta = sectionMeta[section];
          const signs = filtered.filter((s) => s.section === section);
          if (signs.length === 0) return null;
          return (
            <section
              key={section}
              id={section}
              className={cn(
                "scroll-mt-28 py-10 md:scroll-mt-32 md:py-16",
                i % 2 === 0 ? "bg-ltm-paper" : "bg-ltm-stone"
              )}
            >
              <div className="container-ltm">
                <h2 className="mb-2 font-serif text-2xl md:text-3xl">
                  {meta.title}
                </h2>
                <p className="mb-8 max-w-3xl leading-relaxed text-ltm-slate">
                  {meta.intro}
                </p>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {signs.map((sign) => (
                    <SignCard key={sign.id} sign={sign} />
                  ))}
                </div>
              </div>
            </section>
          );
        })
      )}
    </>
  );
}
