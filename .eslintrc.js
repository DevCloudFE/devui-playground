module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'import'],
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    '@vue/eslint-config-typescript/recommended',
  ],
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
  rules: {
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'no-console': 'off',
    'no-debugger': 'warn',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    camelcase: ['error', { properties: 'never' }],
    semi: ['error', 'never'],
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true,
      },
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: false,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    'import/no-unused-modules': 'error',
    'import/no-unresolved': 'off',

    // vue
    'vue/max-attributes-per-line': ['error', {
      'singleline': {
        'max': 1
      },
      'multiline': {
        'max': 1
      },
    }],
    'vue/html-closing-bracket-spacing': 'error',
    'vue/require-default-prop': 'error',
    'vue/require-explicit-emits': 'error',
  },
  ignorePatterns: ['dist', 'node_modules'],
}
