module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["@casper124578/eslint-config"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
};
