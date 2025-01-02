import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--font-primary)", "serif"],
        secondary: ["var(--font-secondary)", "serif"],
      },
      colors: {
        grisOscuro: "#1e1e1e",
        grisClaro: "#ACACAC",
        mostaza: "#C19D68",
        beige: "#f8f6f3",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
} satisfies Config;
