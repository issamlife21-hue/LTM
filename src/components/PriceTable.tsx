import * as React from "react";
import { SearchX } from "lucide-react";

import { EmptyState } from "@/components/EmptyState";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

export type PriceColumn = {
  key: string;
  label: string;
  align?: "left" | "right" | "center";
  render?: (value: unknown, row: Record<string, unknown>) => React.ReactNode;
  searchable?: boolean;
  emphasis?: boolean;
};

type PriceTableProps = {
  columns: PriceColumn[];
  rows: Record<string, unknown>[];
  searchQuery?: string;
  // Field used for filtering. Defaults to "category". Pricing tables
  // typically pass "_search" — a pre-built haystack of code, category,
  // weight class, notes, and plain-language synonyms so users can type
  // words like "taxi", "motorcycle", "pickup", "bus" instead of A1/A2/A3.
  searchKey?: string;
  caption?: string;
  emptyMessage?: string;
};

// Identifying fields that we render at the top of the mobile card (large,
// high contrast). Anything not in this set or the emphasis column drops to
// the smaller detail list below the total.
const ID_KEYS = new Set([
  "code",
  "category",
  "description",
  "vehicleType",
  "durationDays",
  "weightClass",
]);

export function PriceTable({
  columns,
  rows,
  searchQuery = "",
  searchKey = "category",
  caption,
  emptyMessage = "No prices matched your search. Try a shorter word or a different category.",
}: PriceTableProps) {
  const filtered = React.useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter((row) => {
      const value = row[searchKey];
      if (typeof value === "string") return value.toLowerCase().includes(q);
      return false;
    });
  }, [rows, searchQuery, searchKey]);

  if (filtered.length === 0) {
    return (
      <EmptyState
        icon={SearchX}
        title="No matching prices"
        description={emptyMessage}
      />
    );
  }

  // Pick the emphasized column (Total / Charge / Rate). Falls back to the
  // last column so the card always shows a clear price block on mobile.
  const emphasisCol =
    columns.find((c) => c.emphasis) ?? columns[columns.length - 1];
  const idCols = columns.filter(
    (c) => ID_KEYS.has(c.key) && c.key !== emphasisCol.key,
  );
  const detailCols = columns.filter(
    (c) => !ID_KEYS.has(c.key) && c.key !== emphasisCol.key,
  );

  return (
    <div>
      {caption && (
        <h3 className="mb-3 text-lg font-semibold text-ltm-black">{caption}</h3>
      )}

      {/* Desktop / tablet table */}
      <div className="hidden overflow-hidden rounded-lg border border-ltm-border bg-white md:block print:block">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((col) => (
                <TableHead
                  key={col.key}
                  className={cn(
                    "sticky top-0 z-10 bg-ltm-stone text-ltm-black",
                    col.align === "right" && "text-right",
                    col.align === "center" && "text-center",
                  )}
                >
                  {col.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((row, idx) => (
              <TableRow
                key={idx}
                className={cn(
                  idx % 2 === 1 && "bg-ltm-stone/60",
                  "hover:bg-ltm-stone",
                )}
              >
                {columns.map((col) => (
                  <TableCell
                    key={col.key}
                    className={cn(
                      "text-[15px] text-ltm-ink",
                      col.align === "right" && "text-right tabular-nums",
                      col.align === "center" && "text-center",
                      col.emphasis &&
                        "text-base font-bold text-ltm-black",
                    )}
                  >
                    {col.render
                      ? col.render(row[col.key], row)
                      : ((row[col.key] as React.ReactNode) ?? "Not applicable")}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile cards — the Total is the most prominent element, sized and
          contrasted so it remains readable on dim screens, cracked screens,
          and in sunlight. Identifying fields (code, category, weight class)
          sit at the top; everything else drops to a small detail list. */}
      <div className="space-y-3 md:hidden print:hidden">
        {filtered.map((row, idx) => (
          <div
            key={idx}
            className="rounded-lg border-2 border-ltm-border bg-white p-4 shadow-sm"
          >
            {/* Header: identifying fields */}
            <div className="space-y-1">
              {idCols.map((col) => {
                const raw = row[col.key];
                if (
                  raw === null ||
                  raw === undefined ||
                  raw === "" ||
                  raw === "-"
                ) {
                  return null;
                }
                const rendered = col.render
                  ? col.render(raw, row)
                  : (raw as React.ReactNode);
                const isPrimary =
                  col.key === "category" ||
                  col.key === "vehicleType" ||
                  col.key === "durationDays";
                const isCode = col.key === "code";
                return (
                  <div key={col.key}>
                    {isCode ? (
                      <span className="inline-block rounded-md border border-ltm-border bg-ltm-stone px-2 py-0.5 text-xs font-bold tracking-wide text-ltm-black">
                        {rendered}
                      </span>
                    ) : isPrimary ? (
                      <h3 className="text-lg font-bold leading-snug text-ltm-black">
                        {rendered}
                      </h3>
                    ) : (
                      <p className="text-sm font-medium text-ltm-slate">
                        {col.label}:{" "}
                        <span className="text-ltm-ink">{rendered}</span>
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Big total / charge — the most visible part of the card */}
            <div className="mt-4 rounded-md bg-ltm-black p-3 text-white">
              <p className="text-xs font-bold uppercase tracking-wider text-white/70">
                {emphasisCol.label}
              </p>
              <div className="mt-1 text-2xl font-bold leading-tight tabular-nums text-white">
                {emphasisCol.render
                  ? emphasisCol.render(row[emphasisCol.key], row)
                  : ((row[emphasisCol.key] as React.ReactNode) ??
                    "Not applicable")}
              </div>
            </div>

            {/* Smaller breakdown for remaining columns */}
            {detailCols.length > 0 && (
              <dl className="mt-3 space-y-1.5">
                {detailCols.map((col) => {
                  const raw = row[col.key];
                  const rendered = col.render
                    ? col.render(raw, row)
                    : ((raw as React.ReactNode) ?? "Not applicable");
                  return (
                    <div
                      key={col.key}
                      className="flex items-baseline justify-between gap-3 text-sm"
                    >
                      <dt className="text-ltm-slate">{col.label}</dt>
                      <dd className="text-right font-medium text-ltm-ink">
                        {rendered}
                      </dd>
                    </div>
                  );
                })}
              </dl>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
