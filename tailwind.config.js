/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      base: [
        "1rem",
        {
          letterSpacing: "-0.01em",
          fontWeight: "500",
        },
      ],
      md: [
        "1.438rem",
        {
          letterSpacing: "-0.01em",
          fontWeight: "500",
        },
      ],
      lg: [
        "1.7rem",
        {
          letterSpacing: "-0.03em",
          fontWeight: "700",
        },
      ],
      xl: [
        "2.1rem",
        {
          letterSpacing: "-0.03em",
          fontWeight: "700",
        },
      ],
      "2xl": [
        "4rem",
        {
          letterSpacing: "-0.02em",
          fontWeight: "700",
        },
      ],
      "4xl": [
        "5rem",
        {
          letterSpacing: "-0.02em",
          fontWeight: "700",
        },
      ],
      "8xl": [
        "7rem",
        {
          letterSpacing: "-0.03em",
          fontWeight: "700",
        },
      ],
    },
    fontFamily: {
      satoshiMedium: ["Satoshi-Medium"],
      satoshiBold: ["Satoshi-Bold"],
      satoshiBlack: ["Satoshi-Black"],
      satoshiRegular: ["Satoshi-Regular"],
      satoshiLight: ["Satoshi-Light"],
    },
    colors: {
      text: "#000000",
      background: "#ffffff",
      primary: "#1049C1",
    },

    extend: {
      height: {
        0.5: "0.125rem",
        ///// positif high
        64: "14rem",
        128: "36rem",
        256: "47rem",
        ///// ratio
        "q-full": "90vh",
        "9/10": "90%",
      },
      lineHeight: {
        "extra-loose": "2.5",
        12: "3rem",
      },
    },
  },
  plugins: [],
};
