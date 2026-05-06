import * as React from "react";
import {
  Ban,
  CornerUpLeft,
  CornerUpRight,
  RotateCcw,
} from "lucide-react";

import type { RoadSign, SignColor, SignShape } from "@/data/road-signs";
import { cn } from "@/lib/utils";

const colorMap: Record<SignColor, { fill: string; stroke: string; text: string }> = {
  red: { fill: "#BF0A30", stroke: "#9A0826", text: "#ffffff" },
  yellow: { fill: "#FACC15", stroke: "#1F2937", text: "#1F2937" },
  green: { fill: "#16A34A", stroke: "#0E6B2E", text: "#ffffff" },
  white: { fill: "#ffffff", stroke: "#1F2937", text: "#1F2937" },
  black: { fill: "#1F2937", stroke: "#1F2937", text: "#ffffff" },
  orange: { fill: "#F97316", stroke: "#1F2937", text: "#1F2937" },
  blue: { fill: "#1E40AF", stroke: "#1E3A8A", text: "#ffffff" },
  brown: { fill: "#78350F", stroke: "#451A03", text: "#ffffff" },
  pink: { fill: "#F472B6", stroke: "#1F2937", text: "#1F2937" },
  "yellow-green": { fill: "#A3E635", stroke: "#1F2937", text: "#1F2937" },
};

const SIZE = 96;

function ProhibitionOverlay({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {children}
      <Ban
        className="absolute inset-0 m-auto h-16 w-16 text-ltm-red"
        strokeWidth={2.5}
        aria-hidden="true"
      />
    </div>
  );
}

function symbolForId(id: string): React.ReactNode | null {
  switch (id) {
    case "no-left-turn":
      return (
        <ProhibitionOverlay>
          <CornerUpLeft className="h-12 w-12 text-ltm-slate" aria-hidden="true" />
        </ProhibitionOverlay>
      );
    case "no-right-turn":
      return (
        <ProhibitionOverlay>
          <CornerUpRight
            className="h-12 w-12 text-ltm-slate"
            aria-hidden="true"
          />
        </ProhibitionOverlay>
      );
    case "no-u-turn":
      return (
        <ProhibitionOverlay>
          <RotateCcw className="h-12 w-12 text-ltm-slate" aria-hidden="true" />
        </ProhibitionOverlay>
      );
    case "do-not-enter":
      return (
        <div className="flex h-full w-full items-center justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-ltm-red">
            <div className="h-3 w-14 rounded bg-white" />
          </div>
        </div>
      );
    default:
      return null;
  }
}

function ShapeSvg({
  shape,
  color,
  label,
}: {
  shape: SignShape;
  color: SignColor;
  label?: string;
}) {
  const c = colorMap[color];
  const common = {
    width: SIZE,
    height: SIZE,
    viewBox: "0 0 100 100",
    role: "img" as const,
    "aria-hidden": true as const,
  };

  switch (shape) {
    case "octagon": {
      const r = 48;
      const points = Array.from({ length: 8 }, (_, i) => {
        const a = (Math.PI / 8) * (2 * i + 1);
        const x = 50 + r * Math.cos(a);
        const y = 50 + r * Math.sin(a);
        return `${x.toFixed(1)},${y.toFixed(1)}`;
      }).join(" ");
      return (
        <svg {...common}>
          <polygon points={points} fill={c.fill} stroke="#ffffff" strokeWidth="3" />
          <text
            x="50"
            y="58"
            textAnchor="middle"
            fontSize="22"
            fontWeight="700"
            fill={c.text}
            fontFamily="sans-serif"
          >
            {label ?? "STOP"}
          </text>
        </svg>
      );
    }
    case "triangle": {
      // Yield: upside-down red/white. Slow-moving: upward orange.
      const isYield = color === "red";
      const points = isYield
        ? "10,15 90,15 50,90"
        : "50,10 90,85 10,85";
      return (
        <svg {...common}>
          <polygon
            points={points}
            fill={isYield ? "#ffffff" : c.fill}
            stroke={c.fill}
            strokeWidth="6"
            strokeLinejoin="round"
          />
          {isYield && (
            <text
              x="50"
              y="50"
              textAnchor="middle"
              fontSize="14"
              fontWeight="700"
              fill={c.fill}
              fontFamily="sans-serif"
            >
              YIELD
            </text>
          )}
        </svg>
      );
    }
    case "diamond":
      return (
        <svg {...common}>
          <polygon
            points="50,8 92,50 50,92 8,50"
            fill={c.fill}
            stroke="#1F2937"
            strokeWidth="3"
          />
        </svg>
      );
    case "pentagon": {
      const points = "50,8 92,38 78,90 22,90 8,38";
      return (
        <svg {...common}>
          <polygon
            points={points}
            fill={c.fill}
            stroke="#1F2937"
            strokeWidth="3"
          />
        </svg>
      );
    }
    case "circle":
      return (
        <svg {...common}>
          <circle
            cx="50"
            cy="50"
            r="42"
            fill={c.fill}
            stroke="#1F2937"
            strokeWidth="2"
          />
        </svg>
      );
    case "rectangle":
      return (
        <svg {...common}>
          <rect
            x="14"
            y="22"
            width="72"
            height="56"
            rx="4"
            fill={color === "white" ? "#ffffff" : c.fill}
            stroke="#1F2937"
            strokeWidth="3"
          />
        </svg>
      );
    case "crossbuck":
      return (
        <svg {...common}>
          <g fill="#ffffff" stroke="#1F2937" strokeWidth="2">
            <rect
              x="6"
              y="44"
              width="88"
              height="14"
              transform="rotate(20 50 50)"
            />
            <rect
              x="6"
              y="44"
              width="88"
              height="14"
              transform="rotate(-20 50 50)"
            />
          </g>
          <text
            x="50"
            y="56"
            textAnchor="middle"
            fontSize="9"
            fontWeight="700"
            fill="#1F2937"
            fontFamily="sans-serif"
          >
            RAILROAD
          </text>
        </svg>
      );
    case "none":
    default:
      return (
        <svg {...common}>
          <rect
            x="10"
            y="10"
            width="80"
            height="80"
            rx="10"
            fill={c.fill}
            stroke="#1F2937"
            strokeWidth="2"
          />
        </svg>
      );
  }
}

export function SignSvg({
  sign,
  className,
}: {
  sign: RoadSign;
  className?: string;
}) {
  const symbol = symbolForId(sign.id);

  return (
    <div
      className={cn(
        "relative flex h-24 w-24 shrink-0 items-center justify-center",
        className
      )}
      aria-hidden="true"
    >
      {symbol ? (
        symbol
      ) : (
        <ShapeSvg
          shape={sign.shape ?? "none"}
          color={sign.primaryColor ?? "white"}
        />
      )}
    </div>
  );
}
