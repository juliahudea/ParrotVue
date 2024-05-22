/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/components/*.vue"
  ],
  theme: {
    extend: {
      colors: {
        "parrotOrange" : "#F06B00",
        "parrotBlue" : "#0c92f1",
        "parrotYellow" : "#FBba00",
        "parrotLightView" : "#C2DEF2",
      }
    }
  },
  plugins: [],
}

