/**
 * eslint检测规则
 * @see https://eslint.vuejs.org/rules/component-definition-name-casing.html
 */
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
  plugins: ['import', 'vue', '@typescript-eslint'],
  rules: {
    'import/first': 'error', // 确保所有导入都出现在其他语句之前
    semi: ['error', 'always'],
    quotes: ['error', 'single'], // 字符串必须使用单引号 使用双引号报错
    'getter-return': 'error', // 强制在 getter 属性中出现一个 return 语句
    'no-compare-neg-zero': 'error', // 禁止与 -0 进行比较
    'no-cond-assign': 'error', // 禁止在条件语句中出现赋值操作符
    'no-constant-condition': 'warn', // 禁止在条件中使用常量表达式
    'no-control-regex': 'error', // 禁止在正则表达式中使用控制字符
    'no-extra-parens': ['error', 'all'], // 禁止冗余的括号
    'object-curly-spacing': ['error', 'always'], // 对象前后添加空格，如果是`{}`则不添加
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
    'no-trailing-spaces': [
      'error',

      {
        skipBlankLines: false,
        ignoreComments: false,
      },
    ],
    'eol-last': 'error',
    eqeqeq: 'error',
    'no-new-object': 'error',
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: false,
      },
    ],
    '@typescript-eslint/no-empty-function': ['warn'],
    'vue/singleline-html-element-content-newline': [
      'off',
      {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: true,
        ignores: ['pre', 'textarea', 'text'],
      },
    ],
    'vue/multi-word-component-names': [
      'error',
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
    'vue/component-definition-name-casing': ['error', 'kebab-case'],
    'vue/component-tags-order': [
      'error',
      {
        order: ['template', 'script', 'style'],
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
