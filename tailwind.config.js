/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F4F52", // Dark Teal
        secondary: "#06847E", // Light Teal (updated from red)
        accent: "#F90808", // Red (remains, can be used as needed)
        white: "#FFFFFF", // White
        dark: "#222222", // Dark Gray
      },
      fontFamily: {
        body: ["Open Sans", "sans-serif"], // Body Font
        heading: ["Vercetti", "sans-serif"], // Heading Font
        subheading: ["Niconne", "cursive"], // Subheading Font
      },
    },
  },
  plugins: [],
}
