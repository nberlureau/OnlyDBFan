/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Définition de ta palette pastel 
        pastel: {
          bg: '#FDFBF7',      // Fond crème très léger
          primary: '#A7C7E7', // Bleu pastel doux
          secondary: '#C1E1C1', // Vert menthe
          accent: '#FAA0A0',  // Rouge pastel pour les likes [cite: 7]
          text: '#4A4A4A',    // Gris foncé pour le texte (plus doux que le noir)
        }
      },
    },
  },
  plugins: [],
}