/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
 
    fontSize: {
      base: [
        "1rem",
        {
          lineHeight: "2rem",
          letterSpacing: "-0.01em",
          fontWeight: "500",
        },
      ],
      md: [
        "1.438rem",
        {
          lineHeight: "2rem",
          letterSpacing: "-0.01em",
          fontWeight: "500",
        },
      ],
      lg: [
        "2rem",
        {
          lineHeight: "2.25rem",
          letterSpacing: "-0.02em",
          fontWeight: "700",
        },
      ],
      xl: [
        "2.2rem",
        {
          lineHeight: "2.25rem",
          letterSpacing: "-0.02em",
          fontWeight: "700",
        },
      ],
      "2xl": [
        "4rem",
        {
          lineHeight: "2.25rem",
          letterSpacing: "-0.02em",
          fontWeight: "700",
        },
      ],
      "4xl": [
        "5rem",
        {
          lineHeight: "2.25rem",
          letterSpacing: "-0.02em",
          fontWeight: "700",
        },
      ],
      "8xl": [
        "8rem",
        {
          lineHeight: "2.25rem",
          letterSpacing: "-0.02em",
          fontWeight: "700",
        },
      ],
    },
    fontFamily: {
      satoshiMedium: ["Satoshi-Medium"],
      satoshiBold: ["Satoshi-Bold"],
      satoshiBlack: ["Satoshi-Black"],
    },
    colors: {
      text: "#000000",
      background: "#ffffff",
      primary: "#1747b0",
      secondary: "#a9c1f4",
      accent: "#184bb9",
    },
    extend: {
      height: {
        128: "36rem",
        256: "47rem",
      },
    },
  },
  plugins: [],
};
