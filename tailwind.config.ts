import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './sanity/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#080808',
        surface: {
          DEFAULT: '#111111',
          elevated: '#1a1a1a',
          border: 'rgba(255,255,255,0.08)',
        },
        accent: {
          gold: '#c9a84c',
          'gold-hover': '#dfc06a',
          'gold-dim': '#7a6430',
          silver: '#C0C0C0',
          'silver-hover': '#d8d8d8',
          'silver-dim': 'rgba(192,192,192,0.15)',
        },
        text: {
          primary: '#f2f2f2',
          secondary: '#888888',
          muted: '#4a4a4a',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow':
          'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(201,168,76,0.12) 0%, transparent 70%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'jab': 'jab 0.28s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        jab: {
          '0%':   { transform: 'translateX(0) scale(1)' },
          '35%':  { transform: 'translateX(6px) scale(1.03)' },
          '65%':  { transform: 'translateX(-2px) scale(0.99)' },
          '100%': { transform: 'translateX(0) scale(1)' },
        },
      },
      boxShadow: {
        card: '0 0 0 1px rgba(255,255,255,0.06), 0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 0 0 1px rgba(201,168,76,0.3), 0 8px 40px rgba(0,0,0,0.6)',
        'glow-gold': '0 0 24px rgba(201,168,76,0.25)',
      },
    },
  },
  plugins: [],
}

export default config
