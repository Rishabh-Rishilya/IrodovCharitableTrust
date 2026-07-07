import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        primary: "#2D4B32",
        accent: "#FF6E41",
        surface: "#FFFFEB",
        "surface-2": "#FFE1D2",
        foreground: "#2D4B32",
        muted: "#4A6B52",
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
