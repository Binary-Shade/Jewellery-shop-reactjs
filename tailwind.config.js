/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'custom': 'radial-gradient(circle, rgba(41,37,98,1) 23%, rgba(43,53,96,1) 38%, rgba(112,60,142,1) 98%)'
      }
    },
  },
  plugins: [],
    plugins: [
      require('@tailwindcss/aspect-ratio'),
      require('@tailwindcss/forms'),
    ],
}