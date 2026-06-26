import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#071828',
          900: '#0B2340',
          800: '#1B3A5C',
          700: '#2A5280',
          600: '#3B6EA8',
          500: '#4D88C4',
          400: '#6FA4D8',
          200: '#B8D4EE',
          100: '#DDE9F6',
          50: '#EEF4FB',
        },
        orange: {
          950: '#5C1A01',
          900: '#8A2F02',
          800: '#B03D07',
          700: '#C94B0A',
          600: '#DC560C',
          500: '#E8580C',
          400: '#F06B25',
          300: '#F5914D',
          200: '#FAB98A',
          100: '#FDE0CA',
          50: '#FEF3EC',
        },
        steel: {
          800: '#1E4460',
          700: '#2B5E82',
          600: '#3A739D',
          500: '#4A7FA5',
          400: '#6A9FBF',
          300: '#96BDD5',
          200: '#C2D9E8',
          100: '#E0EDF5',
          50: '#EFF6FA',
        },
        light: {
          50: '#F8F9FA',
          100: '#F5F7FA',
          200: '#E8EDF2',
          300: '#D4DCE6',
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        heading: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
