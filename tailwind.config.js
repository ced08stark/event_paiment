module.exports = {
  content: [
    "./emails/**/*.{js,ts,jsx,tsx}", // Répertoire contenant tes e-mails React
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4CAF50", // Couleur personnalisée
      },
    },
  },
  corePlugins: {
    preflight: false, // Désactiver Preflight pour éviter les conflits
  },
};
