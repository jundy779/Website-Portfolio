/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#80ABFF',
          DEFAULT: '#5085E3',
          dark: '#3A6CC7',
        },
        secondary: {
          light: '#E6F0FF',
          DEFAULT: '#C2D8FF',
          dark: '#94B8F2',
        },
        darkbg: {
          DEFAULT: '#121623',
          lighter: '#1E2433',
          card: '#242C3E',
        },
      },
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],
}