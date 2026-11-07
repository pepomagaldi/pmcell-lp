import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#03060f",
        navy: "#060d1f",
        panel: "#0a1530",
        brand: "#1e7bff",
        cyan: "#22d3ff",
        zap: "#25d366",
      },
      fontFamily: {
        sans: ["Montserrat", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 24px rgba(30,123,255,.55)",
        zap: "0 0 28px rgba(37,211,102,.55)",
      },
    },
  },
  plugins: [],
};

export default config;
