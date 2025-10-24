/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#2B3990',
        'primary-border': '#CFD1D4',
        'secondary-blue': '#111827',
      },
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}

