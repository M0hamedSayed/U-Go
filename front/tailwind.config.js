/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: 'rgb(var(--primary-color))',
        'primary-dark': 'rgb(var(--primary-color_dark))',
        'primary-light': 'rgb(var(--primary-color_light))',
        secondary: 'rgb(var(--secondary-color))',
        'secondary-dark': 'rgb(var(--secondary-color_dark))',
        'secondary-light': 'rgb(var(--secondary-color_light))',
        main: 'rgb(var(--bg-main))',
        white: 'rgb(var(--bg-white))',
        dark: 'rgb(var(--dark-color))'
      },
      textColor: {
        primary: 'rgb(var(--primary-color))',
        'primary-toggle': 'rgb(var(--primary-toggle))',
        'primary-dark': 'rgb(var(--primary-color_dark))',
        'primary-light': 'rgb(var(--primary-color_light))',
        secondary: 'rgb(var(--secondary-color))',
        'secondary-dark': 'rgb(var(--secondary-color_dark))',
        'secondary-light': 'rgb(var(--secondary-color_light))',
        main: 'rgb(var(--txt-main))',
        white: 'rgb(var(--txt-white))',
        whiteX: 'rgb(var(--txt-white-x))',

      },
      colors: {
        primary: 'rgb(var(--primary-color))',
        'primary-dark': 'rgb(var(--primary-color_dark))',
        'primary-light': 'rgb(var(--primary-color_light))',
        secondary: 'rgb(var(--secondary-color))',
        'secondary-dark': 'rgb(var(--secondary-color_dark))',
        'secondary-light': 'rgb(var(--secondary-color_light))',
      },
      fontFamily: {
        din: 'var(--font)',
        dinBold: 'var(--font-bold)',
      },

    },
  },
  plugins: [require("daisyui")],
}
