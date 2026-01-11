import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.js"], // solo JS
    plugins: { js },
    // extends: ["js/recommended"], // mantiene la base que funciona
    languageOptions: {
      globals: { ...globals.browser, ...globals.node }
    },
    rules: {
      // Estilo básico
      semi: ["error", "always"],                      // punto y coma obligatorio
      quotes: ["error", "double"],                    // comillas dobles
      indent: ["error", 2],                           // indentación 2 espacios
      "no-trailing-spaces": "error",                  // sin espacios finales
      "comma-dangle": ["error", "only-multiline"], // coma final en multilinea
      "space-before-function-paren": ["error", "always"], // espacio antes de paréntesis de funciones
      "space-in-parens": ["error", "always", { "exceptions": ["[]", "{}"] }], // espacio dentro de paréntesis excepto objetos, arrays y funciones
      "space-infix-ops": "error",                     // espacio alrededor de operadores
      "comma-spacing": ["error", { "before": false, "after": true }], // espacio después de coma
      "func-style": ["error", "declaration", { "allowArrowFunctions": true }], // funciones como declaraciones

      // Buenas prácticas
      eqeqeq: "error",                               // siempre ===
      "no-unused-vars": ["warn", { args: "none" }], // advertencia variables no usadas
      "no-undef": "error",
      curly: "error",                                // siempre {}
      "no-console": "off"                           // advertencia para console.log
    }
  }
]);
