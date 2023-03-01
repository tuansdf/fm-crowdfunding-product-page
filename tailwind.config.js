/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
      colors: {
        primary: {
          100: "hsl(176, 50%, 47%)",
          200: "hsl(176, 72%, 28%)",
        },
        neutral: {
          100: "hsl(0, 0%, 48%)",
          200: "hsl(0, 0%, 0%)",
        },
      },
    },
  },
  plugins: [],
};
