import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ltm-navy focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] active:transition-transform",
  {
    variants: {
      variant: {
        default:
          "bg-ltm-black text-white hover:bg-ltm-charcoal",
        destructive:
          "bg-ltm-red text-white hover:bg-ltm-red-dark",
        outline:
          "border border-ltm-border bg-white text-ltm-slate hover:bg-ltm-stone",
        secondary:
          "bg-ltm-stone text-ltm-slate hover:bg-ltm-border",
        ghost:
          "text-ltm-slate hover:bg-ltm-stone",
        link:
          "text-ltm-black underline-offset-4 hover:underline",
        whitePrimary:
          "bg-white text-ltm-black hover:bg-ltm-stone",
        whiteOutline:
          "border border-white bg-transparent text-white hover:bg-white hover:text-ltm-black",
      },
      size: {
        // 44px tap target on mobile (Apple HIG / WCAG); compact 40px on
        // sm+ where pointer precision is higher.
        default: "h-11 px-4 py-2 sm:h-10",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-lg px-6 text-base",
        icon: "h-11 w-11 sm:h-10 sm:w-10",
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
