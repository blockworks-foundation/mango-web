module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary-bg": "#141026",
        "light-purple": "#9490A6",
        "primary-green": "#AFD803",
        "primary-lighter": "#332F46",
        "primary-light": "#262337",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      scale: ["hover"],
    },
  },
  plugins: [],
};
