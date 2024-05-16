module.exports = {
  env: {
    es6: true,
    node: true,
  },
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    semi: ['error'],
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'never',
    }],
  },
  overrides: [
    {
      files: ['pages/**/*.vue'],
      rules: { 'vue/multi-word-component-names': 'off' },
    },
  ],
};
