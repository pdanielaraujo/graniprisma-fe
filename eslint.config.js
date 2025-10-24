import eslint from "@eslint/js";
import tanstackQuery from "@tanstack/eslint-plugin-query";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config([
  globalIgnores([
    "dist",
    "node_modules/**",
    // '**/dist/**',
    // '**/build/**',
    // '**/.next/**',
    // '**/coverage/**',
    // '**/*.min.*',
    "eslint.config.*",
  ]),

  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Base JS recommendations
      eslint.configs.recommended,
      // TypeScript: strict + stylistic (type-aware variants)
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
      // React hook rules and extra rules for imports
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
      // Tanstack query rules https://tanstack.com/query/latest/docs/eslint/eslint-plugin-query#rules
      tanstackQuery.configs["flat/recommended"],
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "@typescript-eslint/no-confusing-void-expression": "off",
      "@typescript-eslint/consistent-type-definitions": "off",
    },
  },
]);
