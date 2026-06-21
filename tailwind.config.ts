import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#04060F",
        primary: "#00D9FF",
        secondary: "#6D5DF6",
        accent: "#FFC857",
        muted: "#94A3B8",
        surface: "rgba(255, 255, 255, 0.04)",
        borderCustom: "rgba(255, 255, 255, 0.08)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
        "radial-dark": "radial-gradient(circle at center, rgba(109, 93, 246, 0.1) 0%, rgba(4, 6, 15, 0) 70%)",
      },
      boxShadow: {
        "glow-cyan": "0 0 20px rgba(0, 217, 255, 0.15)",
        "glow-purple": "0 0 20px rgba(109, 93, 246, 0.15)",
        "glow-gold": "0 0 20px rgba(255, 200, 87, 0.15)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
