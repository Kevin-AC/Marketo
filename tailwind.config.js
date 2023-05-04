/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        mainColor: '#e8786e',
        black: '#555',
        lightColor: '#777',
        bg: '#fceae9',
        formBox: '#f7f7f7'
      },
      fontFamily: {
        Nunito: 'Nunito'
      },
      clipPath: {
        circle: 'circle(30% at 93% 0)'
      }
    }
  },
  plugins: []
}
