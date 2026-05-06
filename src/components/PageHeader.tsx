import * as React from "react";

import { cn } from "@/lib/utils";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  note?: string;
  actions?: React.ReactNode;
  className?: string;
};

export function PageHeader({
  title,
  subtitle,
  note,
  actions,
  className,
}: PageHeaderProps) {
  return (
    <section className={cn("bg-ltm-navy text-white", className)}>
      <div className="container-ltm flex flex-col gap-4 py-12 md:flex-row md:items-end md:justify-between md:py-16">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold text-white md:text-4xl">{title}</h1>
          {subtitle && (
            <p className="mt-3 text-base leading-relaxed text-slate-200 md:text-lg">
              {subtitle}
            </p>
          )}
          {note && (
            <p className="mt-3 text-sm italic text-slate-300">{note}</p>
          )}
        </div>
        {actions && (
          <div className="flex shrink-0 flex-wrap gap-2 print:hidden">
            {actions}
          </div>
        )}
      </div>
    </section>
  );
}
