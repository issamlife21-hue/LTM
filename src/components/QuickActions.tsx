import Link from "next/link";
import {
  ClipboardList,
  GraduationCap,
  MapPin,
  Phone,
  Receipt,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { serviceCenters } from "@/data/service-centers";

type Action = {
  label: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
};

// Five fast paths a citizen actually opens the LTM site to do. Kept text-first
// and high-contrast so they are usable on dim screens, in sunlight, and on
// older phones. Renders as a horizontally scrollable row on small screens and
// a 5-column grid from `lg` up.
export function QuickActions() {
  const primaryPhone = serviceCenters[0]?.phones[0];
  const directionsUrl = serviceCenters[0]?.map.directionsUrl;

  const actions: Action[] = [
    { label: "Check fees", href: "/pricing", icon: Receipt },
    { label: "What to bring", href: "/services", icon: ClipboardList },
  ];
  if (primaryPhone) {
    actions.push({
      label: `Call LTM`,
      href: `tel:${primaryPhone.dial}`,
      icon: Phone,
      external: true,
    });
  }
  if (directionsUrl) {
    actions.push({
      label: "Directions",
      href: directionsUrl,
      icon: MapPin,
      external: true,
    });
  }
  actions.push({
    label: "Practice test",
    href: "/practice-test",
    icon: GraduationCap,
  });

  return (
    <section
      aria-label="Quick actions"
      className="border-b border-ltm-border bg-white"
    >
      <div className="container-ltm py-4">
        <ul
          className="-mx-1 flex snap-x snap-mandatory gap-2 overflow-x-auto px-1 sm:gap-3 lg:grid lg:grid-cols-5 lg:overflow-visible"
        >
          {actions.map((a) => {
            const Icon = a.icon;
            const content = (
              <>
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ltm-black text-white"
                  aria-hidden="true"
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-base font-semibold leading-tight text-ltm-black">
                  {a.label}
                </span>
              </>
            );
            const className =
              "flex w-[160px] shrink-0 snap-start items-center gap-3 rounded-lg border-2 border-ltm-border bg-white px-3 py-3 transition-colors hover:border-ltm-black hover:bg-ltm-stone/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ltm-navy focus-visible:ring-offset-2 active:scale-[0.98] lg:w-auto";
            return (
              <li key={a.label} className="flex">
                {a.external ? (
                  <a
                    href={a.href}
                    target={a.href.startsWith("tel:") ? undefined : "_blank"}
                    rel={
                      a.href.startsWith("tel:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className={className}
                  >
                    {content}
                  </a>
                ) : (
                  <Link href={a.href} className={className}>
                    {content}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
