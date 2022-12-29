/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        skills: {
          '0%': {
            transform: 'scaleX(0)',
          },
          '100%': {
            transform: 'scaleX(1)',
          },
        },
      },
    },
  },
  plugins: [],
};
