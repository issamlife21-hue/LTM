import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        ltm: {
          // Primary surfaces — matte black, like LTM's police gear
          black: "#0E0E10",
          charcoal: "#1C1C20",
          graphite: "#2A2A2E",

          // Page backgrounds — warm neutrals, not pure white
          paper: "#F5F3EE",
          stone: "#E8E4DC",
          cream: "#F0E6D2",

          // Body text
          ink: "#1A1A1A",
          slate: "#52525B",
          muted: "#71717A",

          // Used SPARINGLY — accent only
          navy: "#1E3A5F", // small accent: links, focus rings, nav hover
          red: "#BF0A30", // Liberian flag stripe only
          sand: "#D4A574", // warm accent for hovers and callouts

          // Backwards-compatible legacy keys still referenced in a
          // handful of utility states. Routed to the new palette.
          "navy-dark": "#0E0E10",
          "red-dark": "#9A0826",
          border: "#E5E7EB",
          bg: "#F5F3EE",
          success: "#16A34A",
          warning: "#D97706",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      // The whole site uses one public-service sans family (Public Sans).
      // `serif` and `display` are kept as aliases that resolve to the same
      // font so existing `font-serif` / `font-display` classes stay consistent
      // and never render a magazine-style serif.
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "70ch",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
