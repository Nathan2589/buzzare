/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pressStart: ['var(--font-press-start)'],
        russoOne: ['var(--font-russo-one)'],
        sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
      },
      colors: {
        'cyber-cyan': '#00ffff',
        'cyber-magenta': '#ff00ff',
        'cyber-black': '#000000',
        'cyber-white': '#ffffff',
      },
      boxShadow: {
        'neon-cyan': '0 0 10px rgba(0, 255, 255, 0.5), 0 0 20px rgba(0, 255, 255, 0.3)',
        'neon-magenta': '0 0 10px rgba(255, 0, 255, 0.5), 0 0 20px rgba(255, 0, 255, 0.3)',
      },
      animation: {
        'glitch': 'glitch 5s infinite linear alternate',
        'scanline': 'scanline-text 8s linear infinite',
        'noise': 'noise 0.3s infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

