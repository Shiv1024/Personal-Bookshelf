/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure this path is correct
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': 'rgb(34 197 94)', // Custom green color
      },
    },
  },
  plugins: [],
}
