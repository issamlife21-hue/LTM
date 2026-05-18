"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";

import { SiteSearch } from "@/components/SiteSearch";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { PRIMARY_NAV_LINKS, SERVICE_LINKS } from "@/data/navigation";
import { cn } from "@/lib/utils";

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
        className={cn(NAV_LINK_BASE, "inline-flex items-center gap-1")}
      >
        Services
        <ChevronDown
          className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
          aria-hidden="true"
        />
      </button>
      {open && (
        <div
          role="menu"
          className="absolute left-0 top-full z-50 mt-1 w-56 rounded-lg border border-ltm-graphite bg-ltm-charcoal py-2 text-white shadow-md"
        >
          {SERVICE_LINKS.map((s) => (
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
    <header className="text-white">
      <div className="sticky top-0 z-40 border-b border-ltm-charcoal bg-ltm-black/95 backdrop-blur supports-[backdrop-filter]:bg-ltm-black/85">
        <div className="container-ltm flex h-14 items-center justify-between gap-3 md:h-[72px]">
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
            className="h-9 w-9 object-contain md:h-10 md:w-10"
            priority
          />
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-[11px] tracking-wider text-white sm:text-sm">
              LIBERIA TRAFFIC
            </span>
            <span className="font-serif text-[11px] tracking-wider text-white sm:text-sm">
              MANAGEMENT
            </span>
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 lg:flex"
        >
          {PRIMARY_NAV_LINKS.slice(0, 1).map((l) => (
            <Link key={l.href} href={l.href} className={NAV_LINK_BASE}>
              {l.label}
            </Link>
          ))}
          <ServicesDropdown />
          {PRIMARY_NAV_LINKS.slice(1).map((l) => (
            <Link key={l.href} href={l.href} className={NAV_LINK_BASE}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <SiteSearch
            className="w-56"
            inputClassName="h-9 border-ltm-graphite bg-ltm-charcoal text-sm text-white placeholder:text-white/60"
            placeholder="Search…"
          />
        </div>

        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              aria-label="Open menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md text-white hover:text-ltm-sand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ltm-navy focus-visible:ring-offset-2 focus-visible:ring-offset-ltm-black active:scale-[0.96] lg:hidden"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] p-0 sm:w-[340px]">
            <div className="border-b border-ltm-border px-6 py-4">
              <SheetTitle className="text-base">Menu</SheetTitle>
            </div>
            <nav
              aria-label="Mobile"
              className="flex flex-col gap-1 px-2 py-4"
            >
              {PRIMARY_NAV_LINKS.slice(0, 1).map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md px-4 py-3 text-base font-medium text-ltm-slate hover:bg-ltm-stone hover:text-ltm-black"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/services"
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-4 py-3 text-base font-medium text-ltm-slate hover:bg-ltm-stone hover:text-ltm-black"
              >
                Services
              </Link>
              {SERVICE_LINKS.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md py-2 pl-8 pr-4 text-sm text-ltm-slate hover:bg-ltm-stone hover:text-ltm-black"
                >
                  {s.label}
                </Link>
              ))}
              <div className="my-2 border-t border-ltm-border" />
              {PRIMARY_NAV_LINKS.slice(1).map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md px-4 py-3 text-base font-medium text-ltm-slate hover:bg-ltm-stone hover:text-ltm-black"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        </div>
      </div>

      <div className="border-b border-ltm-charcoal bg-ltm-black/95 px-4 py-2 sm:px-6 lg:hidden">
        <SiteSearch
          inputClassName="h-9 border-ltm-graphite bg-ltm-charcoal text-sm text-white placeholder:text-white/60"
          placeholder="Search FAQs, services, pricing…"
          onNavigate={() => setMobileOpen(false)}
        />
      </div>
    </header>
  );
}
