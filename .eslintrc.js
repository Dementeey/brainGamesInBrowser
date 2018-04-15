/* https://eslint.org/docs/user-guide/configuring*/

module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module"
  },
  env: {
    browser: true
  },
  extends: "airbnb-base",
  /* required to lint *.vue files*/
  plugins: ["html"],
  /* check if imports actually resolve*/
  settings: {
    "import/resolver": {
      webpack: {
        config: "./webpack.config.js"
      }
    }
  },
  /* add your custom rules here*/
  rules: {
    /* don't require .vue extension when importing*/
    "import/extensions": [
      "error",
      "always",
      {
        js: "never",
        vue: "never"
      }
    ],
    /* allow debugger during development*/
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    /* allow paren-less arrow functions*/
    "arrow-parens": 0,
    /* allow async-await*/
    "generator-star-spacing": 0,
    /* strings must use double*/
    quotes: ["warn", "double", { avoidEscape: true }],
    /* only allow dangling commas on multiline arrays, objects*/
    "comma-dangle": [2, "only-multiline"],
    /* allow anonymous arrow functions to use ternary returns*/
    "no-confusing-arrow": 0,
    /* allow you to name default imports anything you want*/
    "import/no-named-as-default": 0,
    /*
 allow parameter reassignment (required for vuex)
     also useful for passing observables to functions which will
     operate on them as side-effects.
*/
    "no-param-reassign": 0,
    /* allow console.log*/
    'no-console': 0,
    /* maximum line length*/
    "max-len": [1, {
      code: 80,
      tabWidth: 2,
      ignoreComments: true,
      ignoreUrls: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true
    }]
  }
};
