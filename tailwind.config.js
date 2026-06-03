/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      colors: {
        cream: "#f7f1e6",
        ink: "#22201b",
        clay: "#b4471f",
        gold: "#e0a32e",
        sage: "#5d6b54",
      },
      boxShadow: {
        card: "0 24px 60px -24px rgba(45, 35, 20, 0.35)",
      },
    },
  },
  plugins: [],
};
