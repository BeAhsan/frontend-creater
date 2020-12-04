const colors = require("tailwindcss/colors");
module.exports = {
  purge: [],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      // Build your palette here
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.blue,
      lightBlue: colors.blue,
      yellow: colors.amber,
      cyan: colors.cyan,
      rose: colors.rose,
      pink: colors.pink
    },
    boxShadow: {
      sideBar: "2px -1px 9px #dadada",
      md:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
    },
    extend: {}
  },
  variants: {
    extend: {
      textOpacity: ["dark"]
    }
  },
  plugins: []
};
