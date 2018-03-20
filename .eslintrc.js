// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-unused-vars": [2, { 
      // 允许声明未使用变量
      "vars": "local",
      // 参数不检查
      "args": "none" 
    }],
    // 关闭语句强制分号结尾
    "semi": [0],
    // 空行最多不能超过100行
    "no-multiple-empty-lines": [0, {"max": 100}],
    // 关闭禁止混用tab和空格
    "no-mixed-spaces-and-tabs": [0],
    // 缩进风格
    "indent": 0,
    // 引号类型
    "quotes": [2, "single"],
    // 空格
    "no-tabs": "off",
    // 不能有未定义的变量
    "no-undef": 0,
    // 不能有声明后未被使用的变量或参数
    "no-unused-vars": [0, {"vars": "all", "args": "after-used"}]
  }
}
