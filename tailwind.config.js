/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./build/*.html"
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 50s linear infinite"
      },
      keyframes: {
        marquee: {
          from: {
            transform: 'translateX(0)',
          },
          to: {
            transform: 'translateX(calc(-100% - 2.5rem))',
          },
        },
      },
    },
  },
  plugins: [],
}

