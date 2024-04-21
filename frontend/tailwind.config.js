/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        colorPink: "#E855DE",
        colorIndigo: "#5400EE",
        colorLightBlue: "#6892FF",
        colorBlue: "#1555B5",
        colorOffWhite: "#EEE6FD",
        colorWhite: "#FFFFFF",
      },
      backgroundColor: {
        bgPrimary: "#0d0518",
      },
      animation: {
        "spin-infinite": "spin360 4s linear infinite",
        "spin-halfIn": "spin75 4s linear infinite",
      },
      keyframes: {
        spin360: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        spin75: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(75deg)" },
        },
      },
    },
  },
  plugins: [],
};
