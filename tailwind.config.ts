import type {Config} from "tailwindcss";

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
        mainRed: "#E8344E",

      },
      aspectRatio: {
        floatingButtonRatio: 'auto 186 / 72',
        mainBannerPCImageRatio: 'auto 277 / 289',
      },
      backgroundImage: {
        mainBannerRadialGradient: 'radial-gradient(159.82% 159.82% at 50% 166.08%, #6d77cf 0%, #141617 85.5%)',
        mainRed: "#E8344E",
        showProjectResultTexture: 'url("../assets/images/game/information/show-project-result/bg.webp")'
      },
      objectPosition: {
        'center-top': 'center top',
      },
      boxShadow: {
        'accordion-shadow': '0px 8px 24px rgba(129, 137, 143, 0.12)'
      },
      keyframes: {
        fadeIn: {
          '0%': {opacity: '0'},
          '100%': {opacity: '1'},
        },
        fadeOut: {
          '0%': {opacity: '1'},
          '100%': {opacity: '0'},
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.15s linear',
        fadeOut: 'fadeOut 0.15s linear',
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
