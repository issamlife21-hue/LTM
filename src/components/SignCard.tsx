import * as React from "react";
import Image from "next/image";

import { SignSvg } from "@/components/SignSvg";
import { Badge } from "@/components/ui/badge";
import type { RoadSign } from "@/data/road-signs";
import { getSignImage } from "@/data/sign-images";

export function SignCard({ sign }: { sign: RoadSign }) {
  const imageUrl = getSignImage(sign.id);

  return (
    <article className="relative flex flex-col gap-4 rounded-lg border border-ltm-border bg-white p-6 transition-shadow hover:shadow-md">
      {sign.liberiaSpecific && (
        <Badge
          variant="warning"
          className="absolute right-3 top-3 border border-ltm-warning/30"
        >
          Liberia rule
        </Badge>
      )}
      <div className="mx-auto flex h-24 w-24 items-center justify-center">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={`${sign.name} sign`}
            width={96}
            height={96}
            className="h-full w-full object-contain"
          />
        ) : (
          <SignSvg sign={sign} />
        )}
      </div>
      <div>
        <h3 className="text-base font-semibold text-ltm-navy">{sign.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ltm-slate">
          {sign.description}
        </p>
      </div>
    </article>
  );
}
