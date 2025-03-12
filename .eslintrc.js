module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended', // Add this line
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', '@typescript-eslint', 'react'], // Add 'react' here
  settings: {
    react: {
      version: 'detect', // Ensure this is present
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'react-native/no-inline-styles': 'warn',
    'no-console': 'warn',
    '@typescript-eslint/no-unused-vars': ['error', {argsIgnorePattern: '^_'}],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': [
          'warn',
          {allowExpressions: true},
        ],
      },
    },
  ],
};
