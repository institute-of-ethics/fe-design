import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1B2A4A",
          light: "#2C4A7C",
          dark: "#141E32",
        },
        secondary: {
          DEFAULT: "#5B7F95",
          light: "#7A9AAA",
          dark: "#4A6575",
        },
        accent: {
          DEFAULT: "#C9A84C",
          light: "#D4B96A",
          dark: "#A88B3A",
        },
        warm: {
          ivory: "#FAF8F5",
          gray: "#F0EDE8",
        },
        neutral: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#666666",
          700: "#525252",
          800: "#404040",
          900: "#333333",
          950: "#171717",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Cormorant Garamond", "Georgia", "serif"],
        body: ["var(--font-body)", "Source Sans 3", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-lg": ["3rem", { lineHeight: "1.2" }],
        "display-md": ["2.25rem", { lineHeight: "1.25" }],
        "display-sm": ["1.875rem", { lineHeight: "1.3" }],
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
      boxShadow: {
        card: "0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.06)",
        "card-hover":
          "0 4px 6px -1px rgb(0 0 0 / 0.08), 0 2px 4px -2px rgb(0 0 0 / 0.06)",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
export default config;
