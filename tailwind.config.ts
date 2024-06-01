import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontSize: {
        "large-mobile": ["36px", "40px"],
        "base-mobile": ["14px", "16px"],
        "large-desctope": "56px",
        "base-desctope": "24px",
      },
      colors: {
        cream: "rgba(253, 250, 236, 1)",
        black: "rgba(0, 0, 0, 1)",
      },
      backgroundColor: {
        navBar: "rgba(28, 46, 56, 1)",
        orange: "rgba(234, 126, 31, 1)",
        transparent: "rgba(0, 0, 0, 0.2)",
        darkTransparent:"rgba(0, 0, 0, 0.5)",
        cream: "rgba(253, 250, 236, 1)",
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
  plugins: [],
};
export default config;
