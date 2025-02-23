module.exports = {
  root: true,
  parser: 'vue-eslint-parser', // Use vue-eslint-parser for .vue files
  parserOptions: {
    parser: '@babel/eslint-parser', // Use Babel parser for modern JS
    ecmaVersion: 2020, // Support modern ECMAScript features
    sourceType: 'module', // Enable ES modules
    requireConfigFile: false, // Allows parsing without a babel config file
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended' // Adjust if you're using Vue 2: 'plugin:vue/recommended'
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    // Customize rules as needed
  }
}
