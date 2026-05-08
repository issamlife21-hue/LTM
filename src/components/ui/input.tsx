import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-lg border border-ltm-border bg-white px-3 py-2 text-base text-ltm-slate ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-ltm-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ltm-navy focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:h-10 sm:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
