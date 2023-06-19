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
        "210px": "210px",
        "screen/2": "50vh",
        "4screen/5": "80vh",
      },
      width: {
        "4screen/5": "80vw",
        "5/7": "71.5%",
        "350px": "350px",
      },
      fontSize: {
        "10px": "10px",
        "8px": "8px",
      },
      scale: {
        "90s": "0.9",
        "80s": "0.8",
        "70s": "0.7",
        "60s": "0.6",
        "65s": "0.65",
      },
      screens: {
        xs: "450px",
      },
      keyframes: {
        bop: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(20deg)" },
        },
        sway: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
        wave: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(10deg)" },
        },
        gradient: {
          "0%": { backgroundPosition: "left" },
          "100%": { backgroundPosition: "right" },
        },
      },
      animation: {
        bop: "bop 3s linear infinite",
        sway: "sway 3s ease-in-out infinite",
        wave: "wave 4s linear infinite",
        gradient: "gradient 20s linear infinite alternate",
      },
      aspectRatio: {
        "5/3": "5 / 3",
      },
    },
  },
  plugins: [],
};
