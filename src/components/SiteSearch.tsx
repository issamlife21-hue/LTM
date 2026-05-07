"use client";

import * as React from "react";
import Link from "next/link";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { faqs } from "@/data/faqs";
import { pricingTabs } from "@/data/pricing";
import { cn } from "@/lib/utils";

type SearchHit =
  | {
      kind: "faq";
      title: string;
      preview: string;
      href: string;
    }
  | {
      kind: "pricing";
      title: string;
      preview: string;
      href: string;
    };

const PRICING_HREFS: Record<string, string> = {
  registration: "/pricing#registration",
  license: "/services/driver-license",
  "driving-test": "/pricing",
  inspection: "/services/vehicle-inspection",
  towing: "/pricing",
  impoundment: "/pricing",
  plates: "/services/license-plates",
};

function searchAll(query: string): SearchHit[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];

  const faqHits: SearchHit[] = faqs
    .filter(
      (f) =>
        f.question.toLowerCase().includes(q) ||
        f.answer.toLowerCase().includes(q)
    )
    .slice(0, 5)
    .map((f) => ({
      kind: "faq",
      title: f.question,
      preview: f.answer.slice(0, 100) + (f.answer.length > 100 ? "…" : ""),
      href: `/faq#${f.id}`,
    }));

  const pricingHits: SearchHit[] = pricingTabs
    .filter((t) => t.label.toLowerCase().includes(q))
    .slice(0, 4)
    .map((t) => ({
      kind: "pricing",
      title: t.label,
      preview: "Pricing & rates",
      href: PRICING_HREFS[t.id] ?? `/pricing`,
    }));

  return [...faqHits, ...pricingHits];
}

type SiteSearchProps = {
  className?: string;
  inputClassName?: string;
  panelClassName?: string;
  onNavigate?: () => void;
  placeholder?: string;
};

export function SiteSearch({
  className,
  inputClassName,
  panelClassName,
  onNavigate,
  placeholder = "Search FAQs, services, pricing…",
}: SiteSearchProps) {
  const [query, setQuery] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const id = React.useId();

  const hits = React.useMemo(() => searchAll(query), [query]);

  React.useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const showPanel = open && query.trim().length >= 2;

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <label htmlFor={id} className="sr-only">
        Search the site
      </label>
      <Search
        className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ltm-muted"
        aria-hidden="true"
      />
      <Input
        id={id}
        type="search"
        placeholder={placeholder}
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            setOpen(false);
            (e.currentTarget as HTMLInputElement).blur();
          }
        }}
        autoComplete="off"
        className={cn("pl-9", inputClassName)}
        aria-expanded={showPanel}
        aria-controls={`${id}-results`}
      />

      {showPanel && (
        <div
          id={`${id}-results`}
          role="listbox"
          className={cn(
            "absolute left-0 right-0 top-full z-50 mt-1 max-h-[60vh] overflow-y-auto rounded-lg border border-ltm-border bg-white shadow-md",
            panelClassName
          )}
        >
          {hits.length === 0 ? (
            <div className="p-4 text-sm text-ltm-muted">
              No matches for{" "}
              <span className="font-medium text-ltm-slate">
                &ldquo;{query.trim()}&rdquo;
              </span>
              . Try a different word, or visit the{" "}
              <Link
                href="/faq"
                onClick={() => {
                  setOpen(false);
                  onNavigate?.();
                }}
                className="font-medium text-ltm-black hover:underline"
              >
                FAQ page
              </Link>
              .
            </div>
          ) : (
            <ul className="py-1">
              {hits.map((hit, i) => (
                <li key={`${hit.kind}-${i}`}>
                  <Link
                    href={hit.href}
                    role="option"
                    aria-selected="false"
                    onClick={() => {
                      setQuery("");
                      setOpen(false);
                      onNavigate?.();
                    }}
                    className="flex flex-col gap-0.5 px-4 py-3 hover:bg-ltm-stone focus-visible:bg-ltm-stone focus-visible:outline-none"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-ltm-muted">
                        {hit.kind === "faq" ? "Question" : "Pricing"}
                      </span>
                    </span>
                    <span className="text-sm font-medium text-ltm-black">
                      {hit.title}
                    </span>
                    <span className="text-xs text-ltm-muted">
                      {hit.preview}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
