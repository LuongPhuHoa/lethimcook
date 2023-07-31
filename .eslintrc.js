module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['next/core-web-vitals', 'plugin:react/recommended', 'airbnb'],
  overrides: [{
    env: {
      node: true,
    },
    files: [
      '.eslintrc.{js,cjs}',
    ],
    parserOptions: {
      sourceType: 'script',
    },
  },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'react/react-in-jsx-scope': 0,
    // 'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'max-len': 0,
    'linebreak-style': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    // 'import/no-extraneous-dependencies': [
    //   'error',
    //   { devDependencies: false },
    // ],
  },
};
