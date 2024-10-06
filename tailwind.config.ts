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
        primary: '#6B46C1', // purple
        secondary: '#9F7AEA', // light purple
      },
      transitionDuration: {
        '3000': '3000ms',
      },
    },
  },
  plugins: [],
};
export default config;
