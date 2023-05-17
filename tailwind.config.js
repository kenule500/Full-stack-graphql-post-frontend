/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.vue"],
  theme: {
    extend: {
      screens: {
        xs: "380px",
        // => @media (min-width: 380px) { ... }

        sm: "480px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "960px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1330px",
        // => @media (min-width: 1330px) { ... }
        "3xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        bgDark: "#1E1E20",
        ash: {
          100: "#999999",
          200: "#E9E9E9",
        },
        bgBlue: "#09173A",
        blue: "#1e3a8a",
        background: "#E5E8E8",
      },
    },
  },
  plugins: [],
};
