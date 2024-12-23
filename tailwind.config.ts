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
        myblue: '#043873',
        butcol: '#FFE492',
        boxcol: '#C4DEFD',
        boxcols: '#4F9CF9',
      },
    },
  },
  plugins: [],
};
export default config;
