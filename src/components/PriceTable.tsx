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
  searchKey?: string; // field used for filtering, defaults to "category"
  caption?: string;
  emptyMessage?: string;
};

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
                    "sticky top-0 z-10 bg-ltm-stone",
                    col.align === "right" && "text-right",
                    col.align === "center" && "text-center"
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
                  "hover:bg-ltm-stone"
                )}
              >
                {columns.map((col) => (
                  <TableCell
                    key={col.key}
                    className={cn(
                      "text-sm",
                      col.align === "right" && "text-right tabular-nums",
                      col.align === "center" && "text-center",
                      col.emphasis &&
                        "text-base font-semibold text-ltm-black"
                    )}
                  >
                    {col.render
                      ? col.render(row[col.key], row)
                      : (row[col.key] as React.ReactNode) ?? "Not applicable"}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile stacked cards */}
      <div className="space-y-3 md:hidden print:hidden">
        {filtered.map((row, idx) => (
          <div
            key={idx}
            className="rounded-lg border border-ltm-border bg-white p-4"
          >
            <dl className="space-y-2">
              {columns.map((col) => (
                <div
                  key={col.key}
                  className="flex flex-col gap-0.5 border-b border-ltm-border/60 pb-2 last:border-b-0 last:pb-0"
                >
                  <dt className="text-xs font-medium uppercase tracking-wide text-ltm-muted">
                    {col.label}
                  </dt>
                  <dd className="text-sm text-ltm-slate">
                    {col.render
                      ? col.render(row[col.key], row)
                      : ((row[col.key] as React.ReactNode) ?? "Not applicable")}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </div>
  );
}
