/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',
        'gold-light': '#E7C668',
        szafir: '#3B82F6', // Głęboki niebieski (Tailwind blue-500)
        'szafir-light': '#60A5FA', // Jaśniejszy niebieski (Tailwind blue-400)
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
        'script': ['Great Vibes', 'cursive'],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      fontSize: {
        'clamp-6xl': 'clamp(2.25rem, 5vw, 3.75rem)', // z 6vw na 5vw
        'clamp-3xl': 'clamp(1.5rem, 3vw, 1.875rem)', // z 4vw na 3vw
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
};