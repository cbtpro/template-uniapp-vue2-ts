const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    // 'eslint:recommended',
    'plugin:vue/essential',
    'plugin:vue/strongly-recommended',
    'plugin:vue/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    semi: ['error', 'always'], // 每句话结束不需要加分号，加了报错
    quotes: ['error', 'single'], // 字符串必须使用单引号 使用双引号报错
    'comma-dangle': [
      'error',
      {
        arrays: 'only-multiline',
        objects: 'only-multiline',
        imports: 'only-multiline',
        exports: 'only-multiline',
        functions: 'never',
      },
    ],
    'no-console': isProd ? 'warn' : 'off',
    'no-debugger': isProd === 'production' ? 'warn' : 'off',
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': ['warn'],
    'vue/singleline-html-element-content-newline': [
      'error',
      {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: true,
        ignores: ['pre', 'textarea', 'text'],
      },
    ],
    'vue/multi-word-component-names': [
      'off',
      {
        ignores: [],
      },
    ],
    'vue/no-reserved-component-names': [
      'error',
      {
        disallowVueBuiltInComponents: true,
      },
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 3,
        },
        multiline: {
          max: 4,
        },
      },
    ],
    // 'vue/html-self-closing': [
    //   'error',
    //   {
    //     html: {
    //       void: 'never',
    //       normal: 'always',
    //       component: 'always',
    //     },
    //     svg: 'always',
    //     math: 'always',
    //   },
    // ],
  },
};
