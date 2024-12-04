import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        grey: "#F8F9FA",
        background: {
          primary: "#007BFF",
        },
        text: {
          body: "#212529",
          secondary: "#6C757D",
          blue: "#2B7EFB",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
