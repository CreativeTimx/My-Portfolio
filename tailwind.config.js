/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        blink: "blink 1s step-start infinite",
      },
      keyframes: {
        blink: {
          "50%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}

