export default [
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { /* seus plugins aqui */ },
    languageOptions: { globals: globals.node },
    rules: {
      "no-console": "off", // Adicione esta linha
      "class-method-use-this": "off"
    }
  }
];
