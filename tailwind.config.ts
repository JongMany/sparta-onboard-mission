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
        mainHeadingTextColor: '#5F666B',
        subTextColor: '#81898F',
        borderGrayColor: '#E4EBF0',
        lightGrayColor: '#D7E0E6',
        metaInfoTextGrayColor: '#9DA7AE',
        blushRed: '#FF6C7A',
        mainRed: "#E8344E"
      },
      aspectRatio: {
        floatingButtonRatio: 'auto 186 / 72',
        mainBannerPCImageRatio: 'auto 277 / 289',
      },
      backgroundImage: {
        mainBannerRadialGradient: 'radial-gradient(159.82% 159.82% at 50% 166.08%, #6d77cf 0%, #141617 85.5%)',
        mainRed: "#E8344E"
      }
    },
  },
  plugins: [],
};
export default config;
