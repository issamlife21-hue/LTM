import Image from "next/image";

import { type RoadSign } from "@/data/road-signs";

// Renders into a parent that must be `position: relative` (and ideally
// square / sized via h-* w-*). The image always uses next/image fill +
// object-contain so it stays centered both horizontally and vertically
// inside the frame, never crops, and never gets the awkward intrinsic-
// size override fight with Tailwind h-full / w-full.

export function SignImage({ sign }: { sign: RoadSign }) {
  if (sign.imageUrl) {
    return (
      <Image
        src={sign.imageUrl}
        alt={sign.imageHint}
        fill
        sizes="(max-width: 640px) 96px, (max-width: 1024px) 160px, 240px"
        className="object-contain"
      />
    );
  }

  const fallbackBg =
    sign.section === "traffic-signals"
      ? "bg-gray-800 text-gray-300"
      : sign.section === "pavement-markings"
        ? "bg-gray-200 text-gray-700"
        : "bg-yellow-100 text-gray-700";

  return (
    <div
      className={`absolute inset-0 flex items-center justify-center rounded ${fallbackBg}`}
      role="img"
      aria-label={sign.imageHint}
    >
      <span className="px-2 text-center text-[11px] font-medium leading-tight">
        {sign.name}
      </span>
    </div>
  );
}
