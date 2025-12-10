/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
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
        },
        // New colors from 'test' file
        "primary": "#f42563",
        "primary-home": "#ff6190",
        "primary-notifications": "#FF8500",
        "background-light": "#f8f5f6",
        "background-dark": "#221015",

        // Specific colors for Notifications page
        "text-primary-light": "#262626",
        "text-primary-dark": "#E0E0E0",
        "text-secondary-light": "#8e8e8e",
        "text-secondary-dark": "#A0A0A0",
        "border-light": "#dbdbdb",
        "border-dark": "#333333",
        "surface-light": "#FFFFFF",
        "surface-dark": "#1E1E1E",
        "unread-light": "#FFF2E6",
        "unread-dark": "#3D2C1A"
      },
      fontFamily: {
        "display": ["Spline Sans", "sans-serif"],
        "home": ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}