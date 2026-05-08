import Image from "next/image";

import { type RoadSign } from "@/data/road-signs";

export function SignImage({ sign }: { sign: RoadSign }) {
  if (sign.imageUrl) {
    return (
      <Image
        src={sign.imageUrl}
        alt={sign.imageHint}
        width={240}
        height={240}
        className="h-full w-full object-contain"
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
      className={`flex h-full w-full items-center justify-center rounded ${fallbackBg}`}
      role="img"
      aria-label={sign.imageHint}
    >
      <span className="px-2 text-center text-[11px] font-medium leading-tight">
        {sign.name}
      </span>
    </div>
  );
}
