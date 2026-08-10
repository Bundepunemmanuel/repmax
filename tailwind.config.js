/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./*.js",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#EDE7D8",
        card: "#F6F2E7",
        ink: "#1C1A15",
        rule: "#CBC0A0",
        mute: "#6E6650",
        brass: "#7D5B23",
        brass2: "#A3792F",
        forest: "#2B4436",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
