import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        sultan: {
          dark: '#0B0B0F',
          gold: '#D4AF37'
        }
      },
      boxShadow: {
        sultan: '0 10px 30px rgba(212,175,55,0.15)'
      }
    },
  },
  plugins: [],
} satisfies Config
