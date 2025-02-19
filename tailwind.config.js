/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{xml,html,vue,svelte,ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sigmar: ["Sigmar", "cursive"], // Agregar la fuente personalizada
     
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
