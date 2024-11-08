/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        darkBlue: "#023047",
        lightGray: "#667085",
        darkJungleGreen: "#101828",
        mayaBlue: "rgba(97, 202, 255, 0.2)",
        darkGray: "#A6A6A6",
        cetaceanBlue: "#00112D",
        lightDark: "rgba(0, 0, 0, 0.64)",
        lightBlue: "#DFF4FF",
        lightPurple: "#EAECFF",
        darkCetaceanBlue: "#060A33",
        lightGold: "#FFF4E2",
        darkGray: "#F3F6F8",
        darkBlur: "rgba(0, 0, 0, 0.7)",
        darkNavy:"#1D2939"
      },
    },
  },
  plugins: [],
};
