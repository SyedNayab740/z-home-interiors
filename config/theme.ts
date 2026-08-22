// Central design-token reference (mirrors tailwind.config.ts).
// Import this in TS/JS logic (e.g. inline chart colors) where Tailwind
// classes aren't applicable. Keep this file in sync with tailwind.config.ts.

export const theme = {
  colors: {
    background: "#08271A",
    surface: "#153E2B",
    surfaceHover: "#103521",
    gold: "#D4AF37",
    goldLight: "#E6C15A",
    goldDark: "#A9872C",
    foreground: "#FFFFFF",
    muted: "#A8B5AE",
    border: "rgba(212, 175, 55, 0.20)",
  },
  fonts: {
    display: "var(--font-playfair)",
    body: "var(--font-inter)",
  },
  radius: {
    sm: "4px",
    base: "8px",
    lg: "16px",
    xl: "24px",
    pill: "999px",
  },
  duration: {
    fast: 180,
    base: 320,
    slow: 600,
  },
  breakpoints: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
  },
} as const;
