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
        "parrotBlue" : "#1996F0",
        "parrotYellow" : "#FBC200",
        "parrotLightView" : "#CBE4F5",
      }
    }
  },
  plugins: [],
}

