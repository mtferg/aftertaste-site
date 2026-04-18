/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        licorice: "#1C1C1C",
        almond: "#FCF9EF",
        cherry: "#E3452D",
        bubblegum: "#FFB1C1",
        mint: "#419B85",
        coffee: "#F3E7BF"
      },
      fontFamily: {
        sans: ["Montserrat", "ui-sans-serif", "system-ui"],
        display: ["Anton", "Impact", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 0 3px rgba(227,69,45,.28), 0 8px 30px rgba(0,0,0,.45)"
      },
      backgroundImage: {
        noir: "radial-gradient(1200px 600px at 70% -20%, rgba(94,185,206,.12), transparent 38%), radial-gradient(800px 400px at 10% 120%, rgba(227,69,45,.10), transparent 48%), linear-gradient(160deg, #0a0a0a 0%, #151515 55%, #0e0e0e 100%)"
      }
    }
  },
  plugins: []
};
