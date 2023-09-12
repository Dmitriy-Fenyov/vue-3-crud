/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-strongly-recommended',
    'eslint:recommended'
  ],
  rules: {
    'vue/require-v-for-key':0,
    'vue/no-unused-vars': ['warn', {
      'ignorePattern': '^_'
    }],
    'vue/max-attributes-per-line': ['warn', {
      'singleline': {
        'max': 2
      },
      'multiline': {
        'max': 1
      }
    }],
    'vue/singleline-html-element-content-newline': 0,
    'vue/html-indent': 'error',
    'semi': ['warn', 'never'],
    'comma-dangle': ['error', {
      'arrays': 'only-multiline',
      'objects': 'only-multiline',
      'imports': 'never',
      'exports': 'never',
      'functions': 'never'
    }]
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
