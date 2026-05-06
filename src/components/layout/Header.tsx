"use client";

import * as React from "react";
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
        className="inline-flex items-center gap-1 rounded-md px-2 py-2 text-sm font-medium text-ltm-slate hover:text-ltm-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ltm-navy focus-visible:ring-offset-2"
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
          className="absolute left-0 top-full z-50 mt-1 w-56 rounded-lg border border-ltm-border bg-white py-2 shadow-md"
        >
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              role="menuitem"
              className="block px-4 py-2 text-sm text-ltm-slate hover:bg-ltm-bg hover:text-ltm-navy focus-visible:bg-ltm-bg focus-visible:outline-none"
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
    <header className="sticky top-0 z-40 border-b border-ltm-border bg-white">
      <div className="container-ltm flex h-[72px] items-center justify-between gap-4">
        <Link
          href="/"
          aria-label="Liberia Traffic Management home"
          className="flex flex-col leading-tight rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ltm-navy focus-visible:ring-offset-2"
        >
          <span className="text-2xl font-bold tracking-tight text-ltm-navy">
            LTM
          </span>
          <span className="text-xs text-ltm-muted">
            Liberia Traffic Management
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 lg:flex"
        >
          <Link
            href="/"
            className="rounded-md px-2 py-2 text-sm font-medium text-ltm-slate hover:text-ltm-navy"
          >
            Home
          </Link>
          <ServicesDropdown />
          <Link
            href="/pricing"
            className="rounded-md px-2 py-2 text-sm font-medium text-ltm-slate hover:text-ltm-navy"
          >
            Pricing
          </Link>
          <Link
            href="/road-signs"
            className="rounded-md px-2 py-2 text-sm font-medium text-ltm-slate hover:text-ltm-navy"
          >
            Road Signs
          </Link>
          <Link
            href="/practice-test"
            className="rounded-md px-2 py-2 text-sm font-medium text-ltm-slate hover:text-ltm-navy"
          >
            Practice Test
          </Link>
          <Link
            href="/faq"
            className="rounded-md px-2 py-2 text-sm font-medium text-ltm-slate hover:text-ltm-navy"
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            className="rounded-md px-2 py-2 text-sm font-medium text-ltm-slate hover:text-ltm-navy"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <SiteSearch
            className="hidden w-56 xl:block"
            inputClassName="h-9 text-sm"
            placeholder="Search…"
          />
          <Button asChild>
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
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ltm-navy hover:bg-ltm-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ltm-navy focus-visible:ring-offset-2 lg:hidden"
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
                  className="rounded-md px-4 py-3 text-base font-medium text-ltm-slate hover:bg-ltm-bg hover:text-ltm-navy"
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
                  className="rounded-md px-4 py-2.5 text-sm text-ltm-slate hover:bg-ltm-bg hover:text-ltm-navy"
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
                  className="rounded-md px-4 py-3 text-base font-medium text-ltm-slate hover:bg-ltm-bg hover:text-ltm-navy"
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
