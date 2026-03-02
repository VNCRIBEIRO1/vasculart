import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Azul Venoso — sistema venoso, confianca, autoridade medica
        primary: {
          50: '#F0F5FC',
          100: '#DCE7F7',
          200: '#B9CFEF',
          300: '#8FB1E5',
          400: '#6593DB',
          500: '#3B75D1',
          600: '#1A4A8A',
          700: '#153C72',
          800: '#102E5A',
          900: '#0B2042',
          950: '#07152D',
        },
        // Vermelho Arterial — sistema arterial, vitalidade, coracao
        accent: {
          50: '#FFF2F4',
          100: '#FFE0E6',
          200: '#FFC2CF',
          300: '#FFA0B4',
          400: '#FF708A',
          500: '#EF3B5C',
          600: '#C41E3A',
          700: '#A21830',
          800: '#811327',
          900: '#600E1E',
          950: '#3F0912',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        // Complementar — toque de ciano/teal para detalhes medicos
        medical: {
          light: '#E0F2FE',
          DEFAULT: '#0891B2',
          dark: '#155E75',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(26, 74, 138, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(26, 74, 138, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
