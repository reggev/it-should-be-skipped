module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:eslint-plugin/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier', 'eslint-plugin'],
  parserOptions: { ecmaVersion: 12 },
  rules: {},
};
