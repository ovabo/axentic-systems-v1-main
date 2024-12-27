/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef9ff',
          100: '#dcf2ff',
          200: '#b3e7ff',
          300: '#66d6ff',
          400: '#1cbeff',
          500: '#00a3ff',
          600: '#0083db',
          700: '#006bb4',
          800: '#005a94',
          900: '#004a7a',
        },
        alien: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#00ff9d',
          300: '#00e589',
          400: '#00cc7a',
          500: '#00b36b',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        neon: {
          purple: '#b14fff',
          blue: '#00a3ff',
          green: '#00ff9d',
        },
        dark: {
          DEFAULT: '#0a0a0f',
          50: '#1a1a2f',
          100: '#2a2a4f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-down': 'fadeDown 0.3s ease-out forwards',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};