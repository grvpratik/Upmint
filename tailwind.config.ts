import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        outfit: ["var(--font-outfit)"],
        inter: ["var(--font-inter)"],
      },
      colors: {
        overlay:"var(--overlay-color)",


        cbackground: "var(--background-color)",
        cletter: "var(--text-color)",
        cinput: "var(--input-color)",
        cheader: "var(--header-color)",
        cborder: "var(--border-color)",
      },
      boxShadow: { 
        depth:
          "0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)",
      },
    },
  },
  plugins: [],
};
export default config
