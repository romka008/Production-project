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
    plugins: ["@typescript-eslint", "react", "react-hooks", "eslint-check"],
    rules: {
        indent: [2, 4],
        linebreakStyle: 0,
        quotes: ["error", "double", { allowTemplateLiterals: true }],
        semi: ["error", "always"],
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
    },
    settings: {
        react: {
            version: "detect",
        },
    },
};
