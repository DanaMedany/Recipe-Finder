/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "main-image":
          "url('/images/1000_F_423646293_JUs4bvASwwzKupmv5MAEZdxQpqPxH0JQ-transformed.jpeg')",
      },
    },
  },
  plugins: [],
};
