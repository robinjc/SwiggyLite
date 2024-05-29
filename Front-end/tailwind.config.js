/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./src/Screens/**/*.{html,js}" ],
  theme: {
    extend: {
      colors: {
        'myindigo': '#432C7A',
        'mypurple': '#80489C',
        'mypink': '#FF8FB1',
        'mypeach': '#FCE2DB',
      },
    },
  },
  plugins: [],
}