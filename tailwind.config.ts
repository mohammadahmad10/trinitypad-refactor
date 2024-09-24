/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "active-gradient":
          "linear-gradient(100.2deg, rgba(0, 244, 255, 0.3) -7.1%, rgba(0, 138, 242, 0.3) 53.52%, rgba(0, 32, 228, 0.3) 114.15%)",
        "btn-gradient":
          "linear-gradient(100.2deg, #00F4FF -7.1%, #008AF2 53.52%, #0020E4 114.15%)",
        "btn-gradient-reverse":
          "linear-gradient(100.2deg, #0020E4 -7.1%, #008AF2 53.52%, #00F4FF 114.15%)",
        "background-gradient":
          "linear-gradient(100.2deg, #174356 -7.1%, #172752 114.15%)",
        "background-gradient-darker":
          "linear-gradient(90deg, #142C3E -7.1%, #141F3E 114.15%)",
      },
    },
  },
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
      {
        mytheme: {
          primary: "#00b8ff",
          secondary: "#a88500",
          accent: "#0000ff",
          neutral: "#191f15",
          "base-100": "#212429",
          info: "#fcd34d",
          success: "#00ce00",
          warning: "#ff4e00",
          error: "#cc103f",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
export default config;
