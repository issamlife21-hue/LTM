"use client";

import * as React from "react";
import Link from "next/link";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { faqs } from "@/data/faqs";
import { roadSigns } from "@/data/road-signs";
import { services } from "@/data/services";
import { useDebouncedValue } from "@/hooks/useDebouncedValue";
import { cn } from "@/lib/utils";

type SearchHit = {
  label: string; // small category tag shown above each result
  title: string;
  preview: string;
  href: string;
};

// Static destinations the search can return. `keywords` are extra words a
// user might type (e.g. "fees" for the Pricing page). Edit these to make a
// page easier to find. Service pages are pulled in from the services list.
type PageEntry = SearchHit & { keywords: string };

const PAGE_INDEX: PageEntry[] = [
  ...services.map((s) => ({
    label: "Service",
    title: s.title,
    preview: s.cardDescription,
    href: s.href,
    keywords: `${s.title} ${s.cardDescription} ${s.description}`.toLowerCase(),
  })),
  {
    label: "Pricing",
    title: "Pricing & Fees",
    preview: "Registration, license, inspection, towing, and plate fees.",
    href: "/pricing",
    keywords:
      "pricing fees fee cost costs charges rates prices price how much taxi plate plates registration license inspection towing impoundment driving test pen-pen okada keke tricycle three wheel motorcycle bike pickup lorry coaster minibus van cargo truck bus sedan jeep 4x4 cab commercial private",
  },
  {
    label: "Page",
    title: "Road Signs & Pavement Markings",
    preview: "Traffic signals, regulatory and warning signs, and markings.",
    href: "/road-signs",
    keywords:
      "road signs sign signals signal warning regulatory pavement markings stop yield speed limit",
  },
  {
    label: "Page",
    title: "Practice Test",
    preview: "Driver's license practice exam and study mode.",
    href: "/practice-test",
    keywords: "practice test exam quiz driving test sample study questions",
  },
  {
    label: "Page",
    title: "Questions & Answers",
    preview: "Common questions about LTM services.",
    href: "/faq",
    keywords: "faq questions answers help support",
  },
  {
    label: "Page",
    title: "Find a Service Center",
    preview: "Location, hours, phone, and directions.",
    href: "/contact",
    keywords:
      "contact location service center centre hours phone address directions call email map visit",
  },
];

function searchAll(query: string): SearchHit[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];

  const pageHits: SearchHit[] = PAGE_INDEX.filter(
    (p) => p.title.toLowerCase().includes(q) || p.keywords.includes(q),
  ).map(({ label, title, preview, href }) => ({ label, title, preview, href }));

  const faqHits: SearchHit[] = faqs
    .filter(
      (f) =>
        f.question.toLowerCase().includes(q) ||
        f.answer.toLowerCase().includes(q),
    )
    .slice(0, 4)
    .map((f) => ({
      label: "Question",
      title: f.question,
      preview: f.answer.slice(0, 100) + (f.answer.length > 100 ? "…" : ""),
      href: `/faq#${f.id}`,
    }));

  const signHits: SearchHit[] = roadSigns
    .filter((s) => s.name.toLowerCase().includes(q))
    .slice(0, 3)
    .map((s) => ({
      label: "Road sign",
      title: s.name,
      preview: "Road signs & pavement markings",
      href: `/road-signs#${s.section}`,
    }));

  return [...pageHits, ...faqHits, ...signHits].slice(0, 10);
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

  const debouncedQuery = useDebouncedValue(query, 150);
  const hits = React.useMemo(
    () => searchAll(debouncedQuery),
    [debouncedQuery],
  );

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
            panelClassName,
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
                <li key={`${hit.href}-${i}`}>
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
                        {hit.label}
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
