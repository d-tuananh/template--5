/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        c_Lato: ["Lato", "sans-serif"],
      },
      colors: {
        main: "#252525",
      },
      backgroundImage: {
        "linear-green": "linear-gradient(135deg, #3EED8B 0%, #0A9949 100%)",
        "dd-400": "linear-gradient(90deg, #FBC2EB 0%, #A18CD1 100%)",
      },
      boxShadow: {
        custom: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
      },
    },
  },
  plugins: [],
}
