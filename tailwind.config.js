/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryblue: "#356DFB",
        lightblue: "#507EF5",
        primarygray: "#444444",
        secondarygray: "#555555",
        lightgray: "#B6B8C9",
        lightergray: "#BDBEC1",
        textgray: "#777777",
        grayshade: "#C4C4C4",
        nextgray: "#DEDFEC",
        darkgray: "#EEEEEE",
        secondaryblue: "rgba(53, 109, 251, 0.1)",
        skyblue: "#F7FBFD",
        dartblue: "#F5F8FE",
        dartgray: "#CCCCCC",
        shadowgray: "rgba(196, 196, 196, 0.05)",
      },
      fontFamily: {
        'sans': ['Open Sans', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      width: {
        '111px': "111px",
        '177px': "177px",
        '237px': "237px",
        '202px': "202px",
        '356px': "356px",
        '365px': "365px",
      },
      height: {
        "195px": "195px",
        "200px": "200px",
        "259px": "259px"
      },
      boxShadow: {
        'baseshadow': '0px 1px 4px rgba(0, 0, 0, 0.1)',
        'primaryshadow': 'rgba(196, 196, 196, 0.05)'
      }
    },
  },
  plugins: [],
}