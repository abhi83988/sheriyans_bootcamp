// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'cg-yellow': '#ffd439',
        'cg-green': '#068713',
        'foreground': '#171717',
      },
      grayscale: {
        30: '0.3',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          lg: '2.5rem',
          xl: '5rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1200px',
          '2xl': '1440px',
        },
      },
    },
  },
  plugins: [],
}
