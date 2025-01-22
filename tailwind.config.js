/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors:{
        main:{
          1: "#e4e6d9",
          2: "#c2cfb4",
          3: "#8aa98a",
          4: "#48664e",
          5: "#25352a",
        },
      },
    },
  },
  plugins: [],
}

