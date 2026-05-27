import type { SVGProps } from "react";

// Custom license-plate icon drawn in the same style as the lucide-react icons
// used for the other services (24x24 grid, currentColor stroke, 2px width,
// round joins). A plate outline with three character marks. Kept minimal so it
// reads clearly at small sizes. Sized/colored by the consumer via className.
export function LicensePlateIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <path d="M8 10.5v3" />
      <path d="M12 10.5v3" />
      <path d="M16 10.5v3" />
    </svg>
  );
}
