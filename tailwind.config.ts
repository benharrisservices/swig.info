import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0b",
        "ink-2": "#101012",
        paper: "#f4f3f1",
        "paper-2": "#ecebe8",
        "grey-600": "#5a5a5e",
        "grey-500": "#76767b",
        "grey-400": "#9a9aa0",
        metal: "#b9b6ad",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        wrap: "1480px",
      },
      transitionTimingFunction: {
        ease: "cubic-bezier(0.22, 1, 0.36, 1)",
        "ease-out-soft": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
