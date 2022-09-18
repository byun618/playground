module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  rules: {
    '@next/next/no-img-element': 'off',
    'eslint-disable-next-line': 'off',
    'react/display-name': 'off',
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: 'useRecoilCallback',
      },
    ],
  },
  ignorePatterns: [
    'node_modules/',
    'dist/',
    'build/',
    '.yarn/',
  ],
}
