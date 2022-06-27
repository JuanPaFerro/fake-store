/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'scrollText 30s linear infinite',
        'infinite-scroll2': 'scrollText 30s 15s linear infinite',
      },
      keyframes: {
        scrollText: {
          '0%': { left: '120%' },
          '100%': { left: '-120%' },
        },
      },
      transitionDelay: {
        '0': '0ms',
        '15000': '15000ms',
      }
    },
  },
  plugins: [],
};
