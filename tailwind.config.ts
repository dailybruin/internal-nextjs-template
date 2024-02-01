import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'background': {
          '500': '#fffee4',
        },
        'line': {
          '500': '#C077CC',
        },
        'news': {
          '500': '#0A97D0',
        },
        'opinion': {
          '500': '#6DA81E',
        },
        'arts': {
          '500':'#E98C1B',
        },
        'sports': {
          '500':'#3744B5',
        },
        'misc': {
          '500':'#1B8E50',
        },
        'troubleshooting': {
          '500':'#D249BC',
        },
      }
    },
  },
  plugins: [],
};
export default config;
