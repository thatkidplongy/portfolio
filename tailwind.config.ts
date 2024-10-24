import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        about: "#fff1db",
        projects: "#faf7f0",
      },
      width: {
        defaultMax: "1440px",
        contentWidth: "880px",
      },
      backdropBlur: {
        "10": "10px",
      },
      backgroundImage: {
        "custom-bg": "url('/images/background.jpg')",
      },
    },
  },
  variants: {
    extend: {
      backdropBlur: ["hover", "focus"],
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
};
export default config;
