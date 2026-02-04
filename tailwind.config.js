/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#F5F5F5',
          100: '#F0EBE0',
          200: '#E8E3D5',
          300: '#DDD8C8',
          400: '#D4C4B0',
        },
        brown: {
          50: '#8B8276',
          100: '#5C5246',
          200: '#2C2416',
        },
        orange: {
          accent: '#D4845C',
          hover: '#C57549',
          light: '#E8A584',
          dark: '#B86A3F',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'h1': ['72px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['48px', { lineHeight: '1.2', fontWeight: '600' }],
        'h3': ['32px', { lineHeight: '1.2', fontWeight: '500' }],
        'h4': ['24px', { lineHeight: '1.2', fontWeight: '500' }],
        'body-lg': ['18px', { lineHeight: '1.6' }],
        'body': ['16px', { lineHeight: '1.6' }],
        'sm': ['14px', { lineHeight: '1.5' }],
        'caption': ['12px', { lineHeight: '1.5' }],
      },
      spacing: {
        'xs': '8px',
        'sm': '16px',
        'md': '24px',
        'lg': '32px',
        'xl': '48px',
        '2xl': '64px',
        '3xl': '96px',
      },
      boxShadow: {
        'sm': '0 2px 4px rgba(44, 36, 22, 0.08)',
        'md': '0 4px 12px rgba(44, 36, 22, 0.12)',
        'lg': '0 8px 24px rgba(44, 36, 22, 0.15)',
      },
      maxWidth: {
        'container': '900px',
        'tablet': '700px',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'underline-slide': {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-in-out',
        'fade-in-up': 'fade-in-up 0.6s ease-in-out',
        'slide-in-left': 'slide-in-left 0.6s ease-in-out',
        'scale-in': 'scale-in 0.5s ease-in-out',
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      transitionDuration: {
        '250': '250ms',
        '300': '300ms',
      },
    },
  },
  plugins: [],
}
