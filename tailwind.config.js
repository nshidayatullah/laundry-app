/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Instrument Sans", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('preline/plugin'),
  ],
}
