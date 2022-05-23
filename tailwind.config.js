module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#003aea",
          secondary: "#5fd3ba",
          accent: "#55e8d4",
          neutral: "#282B3E",
          "base-100": "#FCFCFD",
          info: "#538FE4",
          success: "#7AE6C7",
          warning: "#E48111",
          error: "#E36387",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
