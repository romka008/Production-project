module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:react/jsx-runtime",
        "prettier",
        "plugin:storybook/recommended",
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: [
        "@typescript-eslint",
        "react",
        "react-hooks",
        "eslint-check",
        "ulbi-tv-plugin",
        "unused-imports",
    ],
    rules: {
        linebreakStyle: 0,
        quotes: ["error", "double", { allowTemplateLiterals: true }],
        semi: ["error", "always"],
        "unused-imports/no-unused-imports": "error",
        "react/jsx-sort-props": ["warn", { ignoreCase: true, noSortAlphabetically: true }],
        "@typescript-eslint/no-unused-vars": 0,
        "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
        "react-hooks/exhaustive-deps": "error", // Checks effect dependencies
        "@typescript-eslint/no-var-requires": 0,
        "react/display-name": "off",
        "no-undef": "off",
        "no-fallthrough": "off",
        "eslint-check/path-checker": ["error", { alias: "@" }],
        // "eslint-check/public-api-imports": ["error", { alias: "@" }],
        "ulbi-tv-plugin/public-api-imports": [
            "error",
            {
                alias: "@",
                testFilesPatterns: ["**/*.test.ts", "**/*.test.ts", "**/StoreDecorator.tsx"],
            },
        ],
        "ulbi-tv-plugin/layer-imports": [
            "error",
            {
                alias: "@",
                ignoreImportPatterns: ["**/StoreProvider", "**/testing"],
            },
        ],
    },
    settings: {
        react: {
            version: "detect",
        },
    },
};
