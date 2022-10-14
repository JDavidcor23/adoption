/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pink_custom: "#fec7d7",
        gray_custom: "#535353",
        black_custom: "#0e172c",
        tertiary_custom: "#d9d4e7",
      },
    },
  },
  plugins: [],
};
