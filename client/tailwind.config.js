/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        "200px": "-200px",
        "1px": "-1px",
      },
      boxShadow: {
        heart: "1px 2px 33px -7px rgba(0,0,0,0.75)",
      },
      borderRadius: {
        "20px": "20px",
        "10px": "10px",
      },
      margin: {
        "35px": "35px",
        "5px": "5px",
        "10px": "10px",
      },
      fontSize: {
        "35px": "35px",
      },
      padding: {
        "5px": "5px",
        "7px": "7px",
        "15px": "15px",
      },
      width: {
        35: "35%",
        "100px": "100px",
        "145px": "145px",
        "90%": "90%",
        "40%": "40%",
      },
      minHeight: {
        "80vh": "80vh",
      },
      height: {
        480: "480px",
      },
      maxHeight: {
        480: "480px",
        "84px": "84px",
      },
      maxWidth: {
        "30rem": "30rem",
        "320px": "320px",
        "85%": "85%",
        70: "70px",
        "70%": "70%",
        "84px": "84px",
      },
      animation: {
        loader: "loader 3.5s linear forwards",
        button: "button 3.5s linear forwards",
        img: "img 2.5s alternate ease-in",
        sideContentPlus: "0.5s sideContentPlus linear",
        sideContentMinus: "0.5s sideContentMinus linear",
        sideAnimalContent: "1.5s sideAnimalContent linear",
        sideAnimalContentDetail: "2s sideAnimalContent linear",
      },
      keyframes: {
        loader: {
          "0%": {
            opacity: 1,
            visibility: "visible",
          },
          "85%": {
            opacity: 1,
            visibility: "visible",
          },
          "100%": {
            opacity: 0,
            visibility: "hidden",
          },
        },
        button: {
          "0%": {
            opacity: 0,
            visibility: "hidden",
          },
          "85%": {
            opacity: 0,
            visibility: "hidden",
          },
          "100%": {
            opacity: 1,
            visibility: "visible",
          },
        },
        img: {
          "0%": {
            transform: "scale(0.8)",
          },
          "100%": {
            transform: "scale(1.5)",
          },
        },
        sideContentPlus: {
          "0%": {
            transform: "translateX(1000px)",
          },
          "25%": {
            transform: "translateX(450px)",
          },
          "50%": {
            transform: "translateX(300px)",
          },
          "75%": {
            transform: "translateX(150px)",
          },
          "100%": {
            transform: "translateX(0px)",
          },
        },
        sideContentMinus: {
          "0%": {
            transform: "translateX(-1000px)",
          },
          "25%": {
            transform: "translateX(-450px)",
          },
          "50%": {
            transform: "translateX(-300px)",
          },
          "75%": {
            transform: "translateX(-150px)",
          },
          "100%": {
            transform: "translateX(0px)",
          },
        },
        sideAnimalContent: {
          "0%": {
            transform: "translateY(1000px)",
          },
          "25%": {
            transform: "translateY(450px)",
          },
          "50%": {
            transform: "translateY(300px)",
          },
          "75%": {
            transform: "translateY(150px)",
          },
          "100%": {
            transform: "translateY(0px)",
          },
        },
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        cyan_custom: "#85d1ce",
        pink_custom: "#fec7d7",
        gray_custom: "#535353",
        black_custom: "#0e172c",
        purple_custom: "#A786DF",
        tertiary_custom: "#d9d4e7",
        blue_1000: "rgba(14, 23, 44, 1)",
      },
      screens: {
        mobile: "700px",
      },
    },
  },
  plugins: [],
};
