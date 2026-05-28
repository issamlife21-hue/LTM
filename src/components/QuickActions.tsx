import Link from "next/link";
import {
  ClipboardList,
  GraduationCap,
  MapPin,
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

// Fast paths a citizen actually opens the LTM site to do.
//
// Call LTM is deliberately *not* shown here — the homepage hero already
// surfaces it as a primary action. Repeating Call in this strip right
// underneath would waste valuable above-the-fold mobile screen space.
//
// Layout: 2-column grid on mobile (one tap per card, no horizontal scroll),
// 4-column from `lg` up. Tap targets are tall and use bold ink text so they
// are usable on dim screens, in sunlight, and on older phones.
export function QuickActions() {
  const directionsUrl = serviceCenters[0]?.map.directionsUrl;

  const actions: Action[] = [
    { label: "Check fees", href: "/pricing", icon: Receipt },
    { label: "What to bring", href: "/services", icon: ClipboardList },
  ];
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
      <div className="container-ltm py-4 md:py-5">
        <ul className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4">
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
              "flex h-full min-h-[64px] items-center gap-3 rounded-lg border-2 border-ltm-border bg-white px-3 py-3 transition-colors hover:border-ltm-black hover:bg-ltm-stone/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ltm-navy focus-visible:ring-offset-2 active:scale-[0.98]";
            return (
              <li key={a.label} className="flex">
                {a.external ? (
                  <a
                    href={a.href}
                    target="_blank"
                    rel="noopener noreferrer"
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
