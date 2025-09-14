import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Siemens Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Professional solar energy color palette
        primary: {
          'deep-blue': '#003366',
          'deep-blue-alt': '#1E3A8A',
          'energy-green': '#00A878',
          'energy-green-alt': '#22C55E',
          'tech-gray': '#6B7280',
          'tech-gray-light': '#D1D5DB',
          'sun-yellow': '#FACC15',
          'pure-white': '#FFFFFF',
        },
        // Override Tailwind defaults with our palette
        blue: {
          600: '#1E3A8A',
          800: '#003366',
          900: '#002244',
        },
        green: {
          500: '#00A878',
          600: '#22C55E',
          700: '#16A34A',
        },
        gray: {
          300: '#D1D5DB',
          500: '#6B7280',
          600: '#4B5563',
          800: '#1F2937',
        },
        yellow: {
          400: '#FACC15',
          500: '#FACC15',
          600: '#EAB308',
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;
