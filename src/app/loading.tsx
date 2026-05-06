import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="container-ltm flex min-h-[50vh] items-center justify-center py-24"
    >
      <Loader2
        className="h-10 w-10 animate-spin text-ltm-navy"
        aria-hidden="true"
      />
      <span className="sr-only">Loading…</span>
    </div>
  );
}
