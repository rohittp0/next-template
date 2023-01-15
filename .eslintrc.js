module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    extends: [
        "eslint:recommended",
        "next",
        "next/core-web-vitals",
        "plugin:@typescript-eslint/recommended",
        "prettier",
    ],
    rules: {
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["error"],
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "linebreak-style":"off",
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "curly": ["warn", "multi"],
        "comma-spacing": "warn",
        "eol-last": "warn",
        "eqeqeq": "error",
        "prefer-const": "error",
        "brace-style": ["error", "allman"],
        "indent": ["error", 4]
    },
};
