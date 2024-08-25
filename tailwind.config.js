/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  purge: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  content: [],
  theme: {
    extend: {
      backgroundColor: {
        "primary" : ''
      }
    },
  },
  plugins: [],
};
