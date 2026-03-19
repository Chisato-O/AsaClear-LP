/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.css",
  ],
  theme: {
    extend: {
      colors: {
        asaclear: {
          orange: '#F16813',
          blue: '#3BAFDA',
          bg: '#F6EBDD',
        }
      }
    },
  },
  plugins: [],
}
