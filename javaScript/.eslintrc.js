module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/eslint-recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
  },
  plugins: ['@typescript-eslint'],
  rules: {
    quotes: [2, 'single'], // 引号类型 `` "" ''
    semi: [2, 'always'], // 语句强制分号结尾
    curly: [2, 'all'],
    'no-var': 2,
    'arrow-parens': [2, 'as-needed'],
    'prefer-const': [
      2,
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: false,
      },
    ],
  },
};
