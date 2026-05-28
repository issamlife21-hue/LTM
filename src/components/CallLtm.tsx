import Link from "next/link";
import { Phone } from "lucide-react";

import { Button, type ButtonProps } from "@/components/ui/button";
import { serviceCenters } from "@/data/service-centers";
import { cn } from "@/lib/utils";

type CallLtmProps = {
  // "button" renders a full button (good for CTAs)
  // "link"   renders a bold tap-friendly tel: link (good in lists/footers)
  variant?: "button" | "link";
  // Button styling variant when `variant="button"`. Use "whitePrimary" on
  // dark surfaces (e.g. page headers) and "default" on light ones.
  buttonVariant?: ButtonProps["variant"];
  className?: string;
  // Custom label override. Defaults to "Call LTM · <number>" for buttons
  // so the number itself is readable at a glance on mobile.
  label?: string;
  // Force a specific phone index. Defaults to the primary line.
  phoneIndex?: number;
};

// Renders an LTM phone CTA backed by a real tel: link. Reads the first
// service center's primary line by default so there is one source of truth.
// The number is always shown in the label so users can read it before they
// tap — useful on dim or cracked screens where the icon alone isn't obvious.
export function CallLtm({
  variant = "button",
  buttonVariant = "default",
  className,
  label,
  phoneIndex = 0,
}: CallLtmProps) {
  const phone = serviceCenters[0]?.phones[phoneIndex];
  if (!phone) return null;

  const buttonLabel = label ?? `Call LTM · ${phone.display}`;

  if (variant === "link") {
    return (
      <Link
        href={`tel:${phone.dial}`}
        className={cn(
          "inline-flex items-center gap-2 text-base font-semibold text-ltm-black underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ltm-navy focus-visible:ring-offset-2",
          className,
        )}
      >
        <Phone className="h-4 w-4" aria-hidden="true" />
        {label ?? phone.display}
      </Link>
    );
  }

  return (
    <Button asChild size="lg" variant={buttonVariant} className={className}>
      <Link href={`tel:${phone.dial}`} aria-label={`Call LTM at ${phone.display}`}>
        <Phone className="h-4 w-4" aria-hidden="true" />
        {buttonLabel}
      </Link>
    </Button>
  );
}
