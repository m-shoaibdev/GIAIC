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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        bcolor: "var(--bcolor)",
        lightblue: "var(--light-blue)",
      },
      fontFamily: {
        nunito: ["var(--font-nunito-sans)", "sans-serif"],
        oleo: ["var(--font-oleo-script)", "cursive"],
      }
    },
    // container: {
    //   center: true,
    // },
  },
  plugins: [],
};
export default config;
