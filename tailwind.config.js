import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      minHeight: {
        screen: ['100vh', '100svh'],
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};

export default config;
