"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, Phone } from "lucide-react";

import { SiteSearch } from "@/components/SiteSearch";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const services = [
  { label: "Driver License", href: "/services/driver-license" },
  { label: "Vehicle Registration", href: "/services/vehicle-registration" },
  { label: "Vehicle Inspection", href: "/services/vehicle-inspection" },
  { label: "License Plates", href: "/services/license-plates" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/pricing" },
  { label: "Road Signs", href: "/road-signs" },
  { label: "Practice Test", href: "/practice-test" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const NAV_LINK_BASE =
  "rounded-md px-2 py-2 text-sm font-medium text-white/85 transition-colors hover:text-ltm-sand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ltm-navy focus-visible:ring-offset-2 focus-visible:ring-offset-ltm-black";

function ServicesDropdown() {
  const [open, setOpen] = React.useState(false);
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          NAV_LINK_BASE,
          "inline-flex items-center gap-1"
        )}
      >
        Services
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform",
            open && "rotate-180"
          )}
          aria-hidden="true"
        />
      </button>
      {open && (
        <div
          role="menu"
          className="absolute left-0 top-full z-50 mt-1 w-56 rounded-lg border border-ltm-graphite bg-ltm-charcoal py-2 text-white shadow-md"
        >
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              role="menuitem"
              className="block px-4 py-2 text-sm text-white/85 transition-colors hover:text-ltm-sand focus-visible:bg-ltm-graphite focus-visible:outline-none"
              onClick={() => setOpen(false)}
            >
              {s.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ltm-charcoal bg-ltm-black/95 text-white backdrop-blur supports-[backdrop-filter]:bg-ltm-black/85">
      <div className="container-ltm flex h-[72px] items-center justify-between gap-4">
        <Link
          href="/"
          aria-label="Liberia Traffic Management home"
          className="flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ltm-navy focus-visible:ring-offset-2 focus-visible:ring-offset-ltm-black"
        >
          <Image
            src="/logo/ltm-logo.svg"
            alt="LTM official emblem"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
            priority
          />
          <span className="hidden flex-col leading-tight md:flex">
            <span className="font-serif text-sm tracking-wider text-white">
              LIBERIA TRAFFIC
            </span>
            <span className="font-serif text-sm tracking-wider text-white">
              MANAGEMENT
            </span>
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 lg:flex"
        >
          <Link href="/" className={NAV_LINK_BASE}>
            Home
          </Link>
          <ServicesDropdown />
          <Link href="/pricing" className={NAV_LINK_BASE}>
            Pricing
          </Link>
          <Link href="/road-signs" className={NAV_LINK_BASE}>
            Road Signs
          </Link>
          <Link href="/practice-test" className={NAV_LINK_BASE}>
            Practice Test
          </Link>
          <Link href="/faq" className={NAV_LINK_BASE}>
            FAQ
          </Link>
          <Link href="/contact" className={NAV_LINK_BASE}>
            Contact
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <SiteSearch
            className="hidden w-56 xl:block"
            inputClassName="h-9 border-ltm-graphite bg-ltm-charcoal text-sm text-white placeholder:text-white/60"
            placeholder="Search…"
          />
          <Button asChild variant="whitePrimary">
            <Link href="tel:+231770900080">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call Us
            </Link>
          </Button>
        </div>

        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              aria-label="Open menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white hover:text-ltm-sand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ltm-navy focus-visible:ring-offset-2 focus-visible:ring-offset-ltm-black lg:hidden"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] p-0 sm:w-[340px]">
            <div className="border-b border-ltm-border px-6 py-4">
              <SheetTitle className="text-base">Menu</SheetTitle>
            </div>
            <div className="border-b border-ltm-border px-4 py-3">
              <SiteSearch
                inputClassName="h-9 text-sm"
                placeholder="Search…"
                onNavigate={() => setMobileOpen(false)}
              />
            </div>
            <nav
              aria-label="Mobile"
              className="flex flex-col gap-1 px-2 py-4"
            >
              {navLinks.slice(0, 1).map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md px-4 py-3 text-base font-medium text-ltm-slate hover:bg-ltm-stone hover:text-ltm-black"
                >
                  {l.label}
                </Link>
              ))}
              <div className="px-4 pb-1 pt-3 text-xs font-semibold uppercase tracking-wider text-ltm-muted">
                Services
              </div>
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md px-4 py-2.5 text-sm text-ltm-slate hover:bg-ltm-stone hover:text-ltm-black"
                >
                  {s.label}
                </Link>
              ))}
              <div className="my-2 border-t border-ltm-border" />
              {navLinks.slice(1).map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md px-4 py-3 text-base font-medium text-ltm-slate hover:bg-ltm-stone hover:text-ltm-black"
                >
                  {l.label}
                </Link>
              ))}
              <div className="px-4 pt-4">
                <Button asChild className="w-full">
                  <Link
                    href="tel:+231770900080"
                    onClick={() => setMobileOpen(false)}
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    Call Us
                  </Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
