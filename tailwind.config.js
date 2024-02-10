module.exports = {
    plugins: [require("daisyui")],
    daisyui: {
        themes: [{
          myLightTheme: {
            "primary": "#3866f2",
            "secondary": "#000dff",
            "accent": "#fefefe",
            "neutral": "#0e0e0e",
            "base-100": "#fefefe",
          },
          myDarkTheme: {
            "primary": "#3866f2",
            "secondary": "#000dff",
            "accent": "#0f0f0f",
            "neutral": "#fefefe",
            "base-100": "#0e0e0e",
          }
        }],
      },
      theme: {
        fontFamily: {
          'sans': ['raleway'],
          'serif':  ['raleway'],
          'mono':  ['raleway'],
          'display':  ['raleway'],
          'body':  ['raleway'],
        },
      }
  };