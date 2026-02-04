/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#306998',
        secondary: '#FFD43B',
        dark: '#1a1a2e',
        darker: '#16162a',
        card: '#1f1f3a',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'particles': 'particles 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #306998, 0 0 10px #306998' },
          '100%': { boxShadow: '0 0 20px #306998, 0 0 30px #306998' },
        },
        particles: {
          '0%': { transform: 'translateY(0) rotate(0deg)' },
          '100%': { transform: 'translateY(-100vh) rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
