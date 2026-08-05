/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#f15a29',
        'mainDark': '#851f00',
        'bgDarker': '#00031a',
        'bgDark': '#000321',
        'bgLessDark': '#12142b'
      }
    },
  },
  plugins: [],
}

