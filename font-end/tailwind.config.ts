import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.{js,ts}"
  ],
  theme: {
    extend: {
      colors: {
        colorBackground: "var(--background)",
        colorForeground: "var(--foreground)",
        colorText: "var(--text)",
        colorHighlight: "var(--highlight)",
        colorBorder: "var(--border)",
        colorTextBlack: "var(--textBlack)",
        colorTextLogo: "var(--textLogo)",
        colorTextGreen: "var(--textGreen)"
      },
    },
  },
  plugins: [],
} satisfies Config;
