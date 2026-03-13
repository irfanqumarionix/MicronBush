/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mbm: {
          bg: '#fbfbfc',
          brand: '#0662a3',
          neutral: '#979a9f',
        },
      },
      backgroundImage: {
       'hero-pattern': 'linear-gradient(135deg, rgba(0, 0, 0, 0) 0%, rgba(6, 98, 163, 0) 50%, rgba(0, 0, 0, 0.5) 100%)',
        'metallic': 'linear-gradient(145deg, #fbfbfc 0%, #e8eaed 50%, #fbfbfc 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(6, 98, 163, 0.08)',
        'card': '0 4px 20px rgba(6, 98, 163, 0.06)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
