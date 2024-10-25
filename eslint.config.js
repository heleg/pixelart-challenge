import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"],
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  {
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        typescript: {
          project: ["tsconfig.app.json"],
        },
      },
    },
    rules: {
      "react/button-has-type": 2,
      "no-unused-vars": 0,

      "import/no-unresolved": [2, { ignore: ["\\.svg$"] }],
      "import/order": [
        2,
        {
          groups: [
            "unknown", // non-export imports (side-effects)
            "builtin", // Node.js built-ins
            "external", // node_modules
            "internal", // aliases (like "~")
            ["parent", "sibling", "index"], // relative paths
          ],
          pathGroups: [
            {
              pattern: "bun",
              group: "builtin",
              position: "after",
            },
            {
              pattern: "react",
              group: "external",
              position: "before",
            },
            {
              pattern: "@runic/**",
              group: "external",
              position: "after",
            },
          ],
          pathGroupsExcludedImportTypes: ["react"],
          "newlines-between": "never",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
    },
  },
);
