import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(197 74% 28% / 0.45)",
        input: "hsl(205 84% 8%)",
        ring: "hsl(188 100% 60%)",
        background: "hsl(225 38% 7%)",
        foreground: "hsl(196 100% 95%)",
        primary: {
          DEFAULT: "hsl(188 100% 60%)",
          foreground: "hsl(224 72% 6%)",
        },
        secondary: {
          DEFAULT: "hsl(223 37% 14%)",
          foreground: "hsl(196 100% 95%)",
        },
        muted: {
          DEFAULT: "hsl(223 31% 16%)",
          foreground: "hsl(196 24% 72%)",
        },
        accent: {
          DEFAULT: "hsl(199 100% 68%)",
          foreground: "hsl(224 72% 6%)",
        },
        card: {
          DEFAULT: "hsl(224 40% 9% / 0.82)",
          foreground: "hsl(196 100% 95%)",
        },
      },
      borderRadius: {
        lg: "1.25rem",
        md: "1rem",
        sm: "0.75rem",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(117, 235, 255, 0.2), 0 0 28px rgba(54, 200, 255, 0.22)",
        panel: "0 18px 64px rgba(6, 12, 28, 0.55)",
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)"],
        display: ["var(--font-orbitron)"],
      },
      backgroundImage: {
        "hud-grid":
          "linear-gradient(rgba(74, 183, 255, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(74, 183, 255, 0.08) 1px, transparent 1px)",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(0, -12px, 0) scale(1.02)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.35", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.08)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        drift: "drift 10s ease-in-out infinite",
        "pulse-soft": "pulseSoft 2.8s ease-in-out infinite",
        scan: "scan 10s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
