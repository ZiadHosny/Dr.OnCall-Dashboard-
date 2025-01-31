module.exports = {
  rules: {
    'no-unused-vars': 'off',
  },
  extends: [
    'next/core-web-vitals',
    'eslint-config-prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
}
