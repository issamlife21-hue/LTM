"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGrid, MapPin, Phone, Receipt } from "lucide-react";

import { serviceCenters } from "@/data/service-centers";
import { cn } from "@/lib/utils";

// Fixed bottom navigation for mobile only. Surfaces the four actions a
// citizen reaches for most — call, fees, services, contact — within thumb
// reach. Hidden at md+ where the header nav takes over.
const primaryDial = serviceCenters[0]?.phones[0]?.dial;

const ITEMS = [
  { label: "Call", href: `tel:${primaryDial}`, icon: Phone, external: true },
  { label: "Fees", href: "/pricing", icon: Receipt, external: false },
  { label: "Services", href: "/services", icon: LayoutGrid, external: false },
  { label: "Contact", href: "/contact", icon: MapPin, external: false },
];

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary"
      className="fixed bottom-0 left-0 right-0 z-50 flex border-t border-ltm-graphite bg-ltm-black md:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      {ITEMS.map(({ label, href, icon: Icon, external }) => {
        const active = !external && pathname === href;
        return (
          <Link
            key={label}
            href={href}
            className={cn(
              "flex flex-1 flex-col items-center justify-center gap-1 pt-2.5 transition-colors",
              active ? "text-white" : "text-white/60",
            )}
            aria-current={active ? "page" : undefined}
          >
            <Icon className="h-5 w-5" aria-hidden="true" />
            <span className="text-[10px] font-semibold uppercase tracking-wider">
              {label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
