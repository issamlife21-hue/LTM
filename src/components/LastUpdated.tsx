import { CalendarClock } from "lucide-react";

import {
  formatLastUpdated,
  lastUpdated,
  type LastUpdatedKey,
} from "@/data/site-meta";

export function LastUpdated({ section }: { section: LastUpdatedKey }) {
  const date = lastUpdated[section];
  return (
    <p className="mt-12 inline-flex items-center gap-2 text-xs text-ltm-slate">
      <CalendarClock className="h-3.5 w-3.5" aria-hidden="true" />
      <span>
        Last updated:{" "}
        <time dateTime={date}>{formatLastUpdated(date)}</time>
      </span>
    </p>
  );
}
