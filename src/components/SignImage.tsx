import * as React from "react";
import Image from "next/image";

// Maps RoadSign.id → public-domain image URL (Wikimedia Commons MUTCD set).
// Where no clean Wikimedia match exists, the component falls back to a
// styled placeholder using the imageHint from the data file.
const SIGN_IMAGE_MAP: Record<string, string> = {
  // Traffic signals
  "red-light":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Traffic-light-red.svg/240px-Traffic-light-red.svg.png",
  "yellow-light":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Traffic-light-yellow.svg/240px-Traffic-light-yellow.svg.png",
  "green-light":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Traffic-light-green.svg/240px-Traffic-light-green.svg.png",

  // Sign shapes
  "shape-octagon":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/MUTCD_R1-1.svg/240px-MUTCD_R1-1.svg.png",
  "shape-triangle":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/MUTCD_R1-2.svg/240px-MUTCD_R1-2.svg.png",

  // Regulatory
  "do-not-enter":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/MUTCD_R5-1.svg/240px-MUTCD_R5-1.svg.png",
  "one-way":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/MUTCD_R6-1L.svg/240px-MUTCD_R6-1L.svg.png",
  "no-left-turn":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/MUTCD_R3-2.svg/240px-MUTCD_R3-2.svg.png",
  "no-right-turn":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/MUTCD_R3-1.svg/240px-MUTCD_R3-1.svg.png",
  "no-u-turn":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/MUTCD_R3-4.svg/240px-MUTCD_R3-4.svg.png",
  "no-turn-on-red":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/MUTCD_R10-11.svg/240px-MUTCD_R10-11.svg.png",
  "do-not-pass":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/MUTCD_R4-1.svg/240px-MUTCD_R4-1.svg.png",
  "speed-limit":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/MUTCD_R2-1.svg/240px-MUTCD_R2-1.svg.png",
  "keep-right":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/MUTCD_R4-7.svg/240px-MUTCD_R4-7.svg.png",
  hov: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/MUTCD_R3-10.svg/240px-MUTCD_R3-10.svg.png",
  "disabled-parking":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/MUTCD_R7-8.svg/240px-MUTCD_R7-8.svg.png",

  // Warning
  "advisory-speed":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/MUTCD_W13-1P.svg/240px-MUTCD_W13-1P.svg.png",
  "stop-yield-ahead":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/MUTCD_W3-1.svg/240px-MUTCD_W3-1.svg.png",
  "signal-ahead":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/MUTCD_W3-3.svg/240px-MUTCD_W3-3.svg.png",
  "no-passing-zone":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/MUTCD_W14-3.svg/240px-MUTCD_W14-3.svg.png",
  merge:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/MUTCD_W4-1.svg/240px-MUTCD_W4-1.svg.png",
  "lane-reduction":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/MUTCD_W4-2.svg/240px-MUTCD_W4-2.svg.png",
  "divided-highway-begins":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/MUTCD_W6-1.svg/240px-MUTCD_W6-1.svg.png",
  "divided-highway-ends":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/MUTCD_W6-2.svg/240px-MUTCD_W6-2.svg.png",
  "slippery-when-wet":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/MUTCD_W8-5.svg/240px-MUTCD_W8-5.svg.png",
  "low-clearance":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/MUTCD_W12-2.svg/240px-MUTCD_W12-2.svg.png",
  hill: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/MUTCD_W7-1.svg/240px-MUTCD_W7-1.svg.png",
  "deer-crossing":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/MUTCD_W11-3.svg/240px-MUTCD_W11-3.svg.png",
  "pedestrian-crossing":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/MUTCD_W11-2.svg/240px-MUTCD_W11-2.svg.png",
  "bicycle-crossing":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/MUTCD_W11-1.svg/240px-MUTCD_W11-1.svg.png",
  "school-zone":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/MUTCD_S1-1.svg/240px-MUTCD_S1-1.svg.png",
  intersection:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/MUTCD_W2-1.svg/240px-MUTCD_W2-1.svg.png",
  "y-intersection":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/MUTCD_W2-5.svg/240px-MUTCD_W2-5.svg.png",
  "t-intersection":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/MUTCD_W2-4.svg/240px-MUTCD_W2-4.svg.png",
  roundabout:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/MUTCD_W2-6.svg/240px-MUTCD_W2-6.svg.png",
  "sharp-right-turn":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/MUTCD_W1-1R.svg/240px-MUTCD_W1-1R.svg.png",
  "winding-road":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/MUTCD_W1-5R.svg/240px-MUTCD_W1-5R.svg.png",

  // Railroad
  "railroad-crossing-advance":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/MUTCD_W10-1.svg/240px-MUTCD_W10-1.svg.png",
  "railroad-crossbuck":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/MUTCD_R15-1.svg/240px-MUTCD_R15-1.svg.png",

  // Work zone
  "road-construction-detour":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/MUTCD_W20-1.svg/240px-MUTCD_W20-1.svg.png",
};

function SignPlaceholder({ hint }: { hint: string }) {
  return (
    <div
      className="flex h-full w-full items-center justify-center rounded bg-ltm-stone p-2 text-center text-[10px] leading-tight text-ltm-muted"
      role="img"
      aria-label={hint}
    >
      <span className="line-clamp-3">{hint}</span>
    </div>
  );
}

export function SignImage({
  signId,
  hint,
}: {
  signId: string;
  hint: string;
}) {
  const url = SIGN_IMAGE_MAP[signId];
  if (!url) {
    return <SignPlaceholder hint={hint} />;
  }
  return (
    <Image
      src={url}
      alt={hint}
      width={80}
      height={80}
      className="h-full w-full object-contain p-1"
    />
  );
}
