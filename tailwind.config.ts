import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        primary: "#1A3C6E",
        accent: "#E8A020",
        surface: "#F7F9FC",
        foreground: "#1C1C2E",
        muted: "#6B7A99",
        danger: "#C0392B",
      },
      fontFamily: {
        display: ["var(--font-merriweather)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "Segoe UI", "sans-serif"],
      },
    },
  },
};

export default config;
