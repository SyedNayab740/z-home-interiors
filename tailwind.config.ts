import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#08271A",
        surface: "#153E2B",
        surfaceHover: "#103521",
        surfaceElevated: "#24543A",
        surfaceHighlight: "#34704E",
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E6C15A",
          dark: "#A9872C",
        },
        foreground: "#FFFFFF",
        secondary: "#D9E3DD",
        muted: "#A8B5AE",
        border: "rgba(212, 175, 55, 0.20)",
        success: "#2E8B57",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        container: "1440px",
        containerNarrow: "1080px",
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "8px",
        lg: "16px",
        xl: "24px",
        pill: "999px",
      },
      boxShadow: {
        soft: "inset 0 1px 0 rgba(212, 175, 55, 0.12), 0 4px 24px rgba(0,0,0,0.4), 0 20px 56px rgba(4,16,10,0.55)",
        gold: "0 8px 32px rgba(212,175,55,0.22), 0 2px 10px rgba(0,0,0,0.4)",
        card: "inset 0 1px 0 rgba(212, 175, 55, 0.14), 0 2px 12px rgba(0,0,0,0.45), 0 18px 40px rgba(4,16,10,0.5)",
        elevated: "inset 0 1px 0 rgba(230, 193, 90, 0.2), 0 4px 16px rgba(0,0,0,0.5), 0 24px 64px rgba(4,16,10,0.6)",
      },
      transitionDuration: {
        fast: "180ms",
        base: "320ms",
        slow: "600ms",
      },
      backdropBlur: {
        glass: "16px",
      },
      spacing: {
        section: "6rem",
        sectionSm: "3.5rem",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
