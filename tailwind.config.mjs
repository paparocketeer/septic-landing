/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        "max-height": "max-height",
      },
      colors: {
        primary: {
          DEFAULT: "#29ABE2",
          "heading-main": "#0071BC",
          "heading-second": "#6EA6E4",
          footer: "#001E35",
        },
      },
      padding: {
        big: "7rem",
        medium: "5rem",
        small: "3rem",
      },
    },
  },
  plugins: [],
};
