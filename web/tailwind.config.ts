import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#edfff8",
          100: "#cbffe9",
          200: "#9efed6",
          300: "#63f9bf",
          400: "#2aeda5",
          500: "#0fcc94",
          600: "#05a27a",
          700: "#037c61",
          800: "#04604e",
          900: "#045042",
        },
      },
      backgroundImage: {
        "aurora-glow":
          "radial-gradient(circle at 20% 20%, rgba(16, 185, 129, 0.25), transparent 55%), radial-gradient(circle at 80% 10%, rgba(56, 189, 248, 0.2), transparent 60%)",
      },
    },
  },
  plugins: [],
};

export default config;
