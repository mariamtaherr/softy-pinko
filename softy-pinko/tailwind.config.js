/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    // Same breakpoints the original Bootstrap site used,
    // so the layout changes at the same screen widths.
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',
    },
    extend: {
      colors: {
        // Softy Pinko colour palette (from the original _colors.scss)
        pink: '#ff589e',        // "$red_color"
        purple: '#8261ee',      // "$hover_color"
        'purple-light': '#a759d1',
        body: '#777',           // "$txt_color"
        dark: '#333',           // "$black_color"
        soft: '#f2f2fe',        // light lavender section background
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 48px 0 rgb(0 0 0 / 10%)',
      },
      borderRadius: {
        softy: '20px',
      },
      backgroundImage: {
        'purple-gradient': 'linear-gradient(127deg, #a759d1 0%, #8261ee 91%)',
      },
    },
  },
  plugins: [],
}
