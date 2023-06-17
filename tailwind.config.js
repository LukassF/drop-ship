/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        "3px": "3px",
        "500px": "500px",
        "init-screen": "850px",
        "init-screen/2": "425px",
        "4init-screen/5": "680px",
        "300px": "300px",
        "screen/2": "50vh",
        "4screen/5": "80vh",
      },
      width: {
        "4screen/5": "80vw",
      },
      fontSize: {
        "10px": "10px",
      },
      screens: {
        xs: "450px",
      },
      keyframes: {
        bop: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
        flicker: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        bop: "bop 3s linear infinite",
        flicker: "flicker 6s linear infinite",
      },
    },
  },
  plugins: [],
};
