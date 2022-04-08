# Prettier Config

```bash
yarn add -D eslint-config-prettier
```

# Eslint Config

```bash
yarn add -D eslint

yarn create @eslint/config
```

```js
// .eslintrc.js
module.exports = {
  // ... other
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'google',
    'prettier',
  ],
  rules: {
    'require-jsdoc': 0,
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'all', caughtErrors: 'all' },
    ],
    'react/prop-types': 0,
  },
  // ... other
};
```
