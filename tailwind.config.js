/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        weup: {
          primary: '#312bb0',
          bg: '#f8f9fc'
        }
      }
    },
  },
  plugins: [],
}