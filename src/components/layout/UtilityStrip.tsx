import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export function UtilityStrip() {
  return (
    <div className="hidden bg-ltm-navy text-white md:block">
      <div className="container-ltm flex h-9 items-center justify-between text-sm">
        <p className="truncate">
          Authorized by the Government of Liberia
        </p>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            <Link
              href="tel:+231888900070"
              className="hover:underline focus-visible:underline"
            >
              0888 900 070
            </Link>
            <span aria-hidden="true" className="text-white/50">
              ·
            </span>
            <Link
              href="tel:+231770900080"
              className="hover:underline focus-visible:underline"
            >
              0770 900 080
            </Link>
            <span aria-hidden="true" className="text-white/50">
              ·
            </span>
            <Link
              href="tel:+231770900090"
              className="hover:underline focus-visible:underline"
            >
              0770 900 090
            </Link>
          </span>
          <span className="flex items-center gap-1.5">
            <Mail className="h-3.5 w-3.5" aria-hidden="true" />
            <Link
              href="mailto:Ltm@liberiatraffic.com"
              className="hover:underline focus-visible:underline"
            >
              Ltm@liberiatraffic.com
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
