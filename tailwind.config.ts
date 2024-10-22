import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontSize: {
        "large-mobile": "36px",
        "base-mobile": "16px",
        "large-desctope": "48px",
        "base-desctope": "24px",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        cream: "rgba(253, 250, 236, 1)",
        black: "rgba(0, 0, 0, 1)",
        orange: "rgba(234, 126, 31, 1)",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      boxShadow: {
        cardShadow: "0px 10px 16px 4px rgba(0,0,0,0.86)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      borderColor: {
        orange: "rgba(234, 126, 31, 1)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundColor: {
        sectionBg: "rgba(21, 52, 60, 1)",
        navBar: "rgba(28, 46, 56, 1)",
        orange: "rgba(234, 126, 31, 1)",
        transparent: "rgba(0, 0, 0, 0.2)",
        darkTransparent: "rgba(0, 0, 0, 0.7)",
        cream: "rgba(253, 250, 236, 1)",
        cardTransparent: "rgba(17, 42, 48, 0.9)",
      },
      backgroundImage: {
        "general-gradient":
          "linear-gradient(0deg, var(--1, #15343C), var(--1, #15343C)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))",
        "dark-gradient": "linear-gradient(180deg, #000102 0%, #112A30 100%)",
        "light-gradient":
          "radial-gradient(57.57% 159.92% at 117.85% -4.92%, #5B7075 0%, #15343C 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))",
        "header-section": "url(/assets/head_section_bg.jpg)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
