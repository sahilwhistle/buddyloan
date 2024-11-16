import type { Config } from "tailwindcss";
const { fontFamily } = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'b-blue': '#00A6FF', 
      },
      fontFamily: {
        sans: ['var(--font-poppins)', ...fontFamily.sans],
      },
       boxShadow: {
        'custom': '0px 0px 4px 0px rgba(0, 0, 0, 0.25)', // equivalent to #00000040
      },
    },
  },
  plugins: [],
} satisfies Config;
