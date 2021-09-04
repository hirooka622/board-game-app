module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    'plugin:vue/recommended'
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always'
        }
      }
    ]
  }
}
