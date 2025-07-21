import importPlugin from 'eslint-plugin-import';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import unusedImports from 'eslint-plugin-unused-imports';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from './prettier.config.js';

export default [
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      import: importPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'unused-imports': unusedImports,
      '@typescript-eslint': tsPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      // Prettier
      'prettier/prettier': ['error', prettierConfig],

      // React
      'react/jsx-indent': ['error', 2],
      'react/jsx-indent-props': ['error', 2],
      'react/jsx-wrap-multilines': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',

      // TypeScript
      '@typescript-eslint/no-explicit-any': 'warn',

      // Imports
      'import/newline-after-import': 'error',
      'import/no-restricted-paths': [
        'error',
        {
          zones: [
            {
              target: 'src/entities',
              from: ['src/features', 'src/widgets', 'src/app'],
              message: '❌ entities ichiga yuqoridan import qilish taqiqlangan',
            },
            {
              target: 'src/features',
              from: ['src/widgets', 'src/app'],
              message: '❌ features faqat pastki qatlamlardan import qilishi mumkin',
            },
            {
              target: 'src/widgets',
              from: ['src/app'],
              message: '❌ widgets ichiga app’dan import qilish mumkin emas',
            },
          ],
        },
      ],

      // Unused
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-vars': [
        'warn',
        { vars: 'all', args: 'after-used', argsIgnorePattern: '^_' },
      ],
      'unused-imports/no-unused-imports': 'error',

      // Code style
      'newline-before-return': 'error',
    },
  },
];
