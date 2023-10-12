/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#d1d5db',
        secondary: '#0891b2',
        third: '#ea580c',
        fourth: '#fbbf24'
      },
    },
  },
  plugins: [],
}