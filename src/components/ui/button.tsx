import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ltm-navy focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-ltm-navy text-white hover:bg-ltm-navy-dark",
        destructive:
          "bg-ltm-red text-white hover:bg-ltm-red-dark",
        outline:
          "border border-ltm-border bg-white text-ltm-slate hover:bg-ltm-bg",
        secondary:
          "bg-ltm-bg text-ltm-slate hover:bg-ltm-border",
        ghost:
          "text-ltm-slate hover:bg-ltm-bg",
        link:
          "text-ltm-navy underline-offset-4 hover:underline",
        whitePrimary:
          "bg-white text-ltm-navy hover:bg-ltm-bg",
        whiteOutline:
          "border border-white bg-transparent text-white hover:bg-white hover:text-ltm-navy",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-lg px-6 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
