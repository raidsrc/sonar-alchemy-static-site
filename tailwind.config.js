module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./index.html"],
  theme: {
    extend: {
      screens: {
        "mdlg": "840px",
        "thin-landscape-phone": { 'raw': '(max-height: 390px)'},
        "landscape-phone": { 'raw': '(max-height: 440px)'},
      },
      fontFamily: {
        "serif": '"Libre Baskerville", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;'
      }
    },

  },
  plugins: [],
}
