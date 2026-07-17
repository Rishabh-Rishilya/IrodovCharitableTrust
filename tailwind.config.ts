import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        primary: "#2D4B32",
        accent: "#FF6E41",
        background: "#FFFFEB",
        "surface-1": "#FFFFEB",
        surface: "#FFFFEB",
        "surface-2": "#FFE1D2",
        "surface-3": "#FFF2E8",
        foreground: "#2D4B32",
        muted: "#4B6B8C",
        border: "#E6EB82",
        success: "#2D4B32",
        danger: "#FF6E41",
      },
      fontFamily: {
        display: ["var(--font-merriweather)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "Segoe UI", "sans-serif"],
      },
    },
  },
};

export default config;
