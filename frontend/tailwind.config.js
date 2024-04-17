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
    },
  },
  plugins: [],
};
