/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a1a',
        accent: '#ff0000',
        'gray-bg': '#E8E8E8',
        'text-gray': '#333333',
      },
      fontFamily: {
        'zalando': ['Zalando Sans Expanded', 'sans-serif'],
        'archivo': ['Archivo', 'sans-serif'],
      },
      spacing: {
        'navbar-height': '70px',
      },
      fontSize: {
        'hero': '64px',
        'section': '64px',
        'subsection': '36px',
      },
      letterSpacing: {
        'section': '-2px',
      },
      screens: {
        'xs': '480px',
        'tablet': '768px',
        'laptop': '1024px',
        'desktop': '1400px',
        'xl-desktop': '1800px',
      },
    },
  },
  plugins: [],
}