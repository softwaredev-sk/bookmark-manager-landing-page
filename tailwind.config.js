/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        softblue: 'hsl(231, 69%, 60%)',
        darkblue: 'hsl(229, 31%, 21%)',
        grayblue: 'hsl(229, 8%, 60%)',
        softred: 'hsl(0, 94%, 66%)',
      },
    },
  },
  plugins: [],
};
