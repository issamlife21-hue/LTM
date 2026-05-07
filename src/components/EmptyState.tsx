import * as React from "react";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type EmptyStateProps = {
  icon: LucideIcon;
  title: string;
  description?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
};

export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-ltm-border bg-white p-8 text-center",
        className
      )}
    >
      <span
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-ltm-stone text-ltm-black"
        aria-hidden="true"
      >
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="text-base font-semibold text-ltm-black">{title}</h3>
      {description && (
        <p className="max-w-sm text-sm leading-relaxed text-ltm-muted">
          {description}
        </p>
      )}
      {action && <div className="mt-1">{action}</div>}
    </div>
  );
}
