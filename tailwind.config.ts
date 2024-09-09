import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        borderColor: 'rgb(228, 235, 240)',
        fontGray: '#81898F',
        hoverGreyColor: "rgb(238, 243, 246)",
      },
    },
  },
  plugins: [],
};
export default config;
