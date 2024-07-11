/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        translateUp: {
          '0%': { transform: 'translateY(400px)' },
          '50%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-400px)' },
        },
        translateDown: {
          '0%': { transform: 'translateY(-400px)' },
          '50%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(400px)' },
        },
        'text': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
      },
      animation: {
        'translateUp': 'translateUp 8s linear infinite',
        'translateDown': 'translateDown 8s linear infinite',
        'text': 'text 5s ease infinite',
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        "primary": "#00c4f4", //Light Blue
        "secondary": "#563cfb", //Purple
        "hover_color": "#5f30e2;", // when hover over a button
        "secondary_hover": "#4932db", //Purple
        "menu_gray": "#867e8d", //Menu Item
        "light": "white",
        "dark": "black",
        "starColor": "#e38b01", //Rating's color
      },
      fontFamily: {
        Arial: ["Arial", "sans-serif"]
      }
    },
  },
  plugins: [],
} 