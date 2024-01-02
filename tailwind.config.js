/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'inter': ['Inter', 'sans-serif']
    },
    extend: {
      colors: {
        primary: "#336EC9",
        secondary: "#E8B113",
        text: "#666",
        pageTitle: "#222",
        pageTitleDark: "#fff"
      },
      backgroundColor: {
        bgLight: "#fff",
        bgDark: "#222",
        bgPrimary: "#336EC9",
        bgSecondary: "#E8B113",
        bgTertiary: "transparent"
      }
    },
  },
  plugins: [],
}

