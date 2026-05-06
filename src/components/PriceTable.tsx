import * as React from "react";

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
};

type PriceTableProps = {
  columns: PriceColumn[];
  rows: Record<string, unknown>[];
  searchQuery?: string;
  searchKey?: string; // field used for filtering — defaults to "category"
  caption?: string;
  emptyMessage?: string;
};

export function PriceTable({
  columns,
  rows,
  searchQuery = "",
  searchKey = "category",
  caption,
  emptyMessage = "No matches.",
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
      <div className="rounded-lg border border-ltm-border bg-white p-8 text-center text-sm text-ltm-muted">
        {emptyMessage}
      </div>
    );
  }

  return (
    <div>
      {caption && (
        <h3 className="mb-3 text-lg font-semibold text-ltm-navy">{caption}</h3>
      )}

      {/* Desktop / tablet table */}
      <div className="hidden overflow-hidden rounded-lg border border-ltm-border bg-white shadow-sm md:block print:block">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((col) => (
                <TableHead
                  key={col.key}
                  className={cn(
                    "sticky top-0 z-10 bg-ltm-bg",
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
                  idx % 2 === 1 && "bg-ltm-bg/60",
                  "hover:bg-ltm-bg"
                )}
              >
                {columns.map((col) => (
                  <TableCell
                    key={col.key}
                    className={cn(
                      col.align === "right" && "text-right tabular-nums",
                      col.align === "center" && "text-center"
                    )}
                  >
                    {col.render
                      ? col.render(row[col.key], row)
                      : (row[col.key] as React.ReactNode) ?? "—"}
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
            className="rounded-lg border border-ltm-border bg-white p-4 shadow-sm"
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
                      : ((row[col.key] as React.ReactNode) ?? "—")}
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
