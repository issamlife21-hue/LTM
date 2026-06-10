import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ltm-navy focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-ltm-black text-white",
        secondary:
          "border-transparent bg-ltm-stone text-ltm-slate",
        destructive:
          "border-transparent bg-ltm-red text-white",
        outline:
          "border-ltm-border text-ltm-slate",
        success:
          "border-transparent bg-ltm-success text-white",
        warning:
          "border-transparent bg-ltm-warning text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
