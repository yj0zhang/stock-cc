const path = require("path")

module.exports = {
  "extends": ["taro"],
  "rules": {
    "no-unused-vars": ["warn", { "varsIgnorePattern": "Taro" }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".tsx"] }],
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "useJSXTextNode": true,
    "project": "./tsconfig.json"
  },
  "import/resolver": {
    "alias": {
      "map": [
        ["@", path.resolve(__dirname, './src')],
      ]
    }
  }
}
