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
            'accordion-shadow': '0px 8px 24px rgba(129, 137, 143, 0.12)',
            'dropdown-menu': '0 8px 24px 0 rgba(95, 102, 107, 0.12)',
            'video-item': 'rgba(0, 0, 0, 0.25) 0px 24px 54px 0px',
            'interview-item': 'rgba(129, 137, 143, 0.12) 0px 8px 24px 0px'
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
            slide: {
              '0%': {transform: 'translateX(0%)'},
              '100%': {transform: 'translateX(-100%)'},
            },
            slide2: {
              '0%': {transform: 'translateX(100%)'},
              '100%': {transform: 'translateX(0%)'},
            },
            ulcstx: {
              '0%': {
                'border-color': "rgb(138, 177, 252)",
                'box-shadow': "rgba(168, 197, 255, 0.6) 0px 0px 15px 0px, rgba(168, 197, 255, 0.4) 0px 0px 40px 0px",
              },
              '50%': {
                'border-color': 'rgb(168, 197, 255)',
                'box-shadow': 'none',
              },
              '100%': {
                'border-color': 'rgb(138, 177, 252)',
                'box-shadow': 'rgba(168, 197, 255, 0.6) 0px 0px 15px 0px, rgba(168, 197, 255, 0.4) 0px 0px 40px 0px',
              }
            },
          },

          animation: {
            fadeIn: 'fadeIn 0.15s linear',
            fadeOut: 'fadeOut 0.15s linear',
            slide: 'slide 12s linear infinite',
            slide2: 'slide2 12s linear infinite',
            ulcstx: 'ulcstx 2.4s ease 0s infinite alternate none running'
          },
          transitionTimingFunction: {
            'swiper': 'var(--swiper-wrapper-transition-timing-function, initial)',
          },
          screens: {
            tablet: '600px'
          }
        },
      },
      plugins: [require
      ("tailwind-scrollbar-hide"), require("@xpd/tailwind-3dtransforms")
      ],
    }
;
export default config;
