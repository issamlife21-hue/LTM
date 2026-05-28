import { MapPin } from "lucide-react";

import { serviceCenters } from "@/data/service-centers";
import { cn } from "@/lib/utils";

type LocationLineProps = {
  // Override the center to read from. Defaults to the primary center.
  centerId?: string;
  className?: string;
};

// Plain-English location sentence rendered next to maps and direction links.
// Mirrors what a citizen would tell a taxi driver — "Located on SKD Boulevard,
// adjacent to SKD Stadium." — so the address is understandable without
// zooming a map embed on a slow connection.
export function LocationLine({ centerId, className }: LocationLineProps) {
  const center =
    serviceCenters.find((c) => c.id === centerId) ?? serviceCenters[0];
  if (!center?.shortLocation) return null;
  return (
    <p
      className={cn(
        "inline-flex items-start gap-2 text-base font-medium leading-snug text-ltm-ink",
        className,
      )}
    >
      {/* Icon inherits the text color so the component looks right on both
          light surfaces (defaults to ink) and dark surfaces (override via the
          `className` prop, e.g. `text-white`). */}
      <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
      <span>{center.shortLocation}</span>
    </p>
  );
}
