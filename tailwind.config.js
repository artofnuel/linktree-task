/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'texts': '#101828',
        'textsecondary': '#667085',
        'boxes': '#EAECF0'
      },
    },
  },
  plugins: [],
}
