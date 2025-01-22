/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        sixStepWriter: "typewriter 0.8s steps(6) forwards",
        eightStepWriter: "typewriter 0.8s steps(8) forwards",
        goodbyeWriter: "typewriter 1.4s steps(22) forwards",
        fade: "fadeIn 1.2s ease-in-out",
        fadeSlow: "fadeIn 2s ease-in-out",
        fadeOut: "fadeOut 1.2s ease-in-out",
      },
      keyframes: {
        typewriter: {
          to: {
            left: "100%",
          },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "50%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
    },
    colors: {
      dark: "#101010",
      white: "#F0F0F0",
      blue: "#007acc",
      lightgray: "#E2EAF4",
      gray: "#979797",
      black: "#000000",
      lightblue: "#62dafc"
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
