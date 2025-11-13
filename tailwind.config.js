/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F4EFEA',
        primary: '#C07A6D',
        secondary: '#748C70',
        text: '#2E2E2E',
        highlight: '#CBAACB',
      },
    },
  },
  plugins: [],
}