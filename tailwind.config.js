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
        text: "#888",
        pageTitle: "#313131",
        pageTitleDark: "#fff",
        sent: "#FF5D5D",
        received: "#08A042"
      },
      backgroundColor: {
        bgLight: "#f6f6f9",
        bgDark: "#313131",
        bgPrimary: "#336EC9",
        bgSecondary: "#E8B113",
        bgTertiary: "transparent"
      }
    },
  },
  plugins: [],
}

