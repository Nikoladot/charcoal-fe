module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: {
    react: { version: '18.2' },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  globals: {
    process: 'readonly'  // Add this line
  },
  plugins: ['react-refresh', 'prettier', 'import'],
  rules: {
    'prettier/prettier': [
      'error',
      {},
      {
        usePrettierrc: true
      }
    ],
    camelcase: 'off',
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-filename-extension': 0,
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [
          ['builtin', 'external'],
          ['parent', 'sibling'],
          ['index'],
          'internal'
        ],
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before'
          },
          {
            pattern: '@?\\w',
            group: 'external',
            position: 'after'
          },
          {
            pattern: '../homepage/components/**',
            group: 'parent',
            position: 'before'
          },
          {
            pattern: './components/**',
            group: 'sibling',
            position: 'before'
          },
          {
            pattern: '../../assets/**',
            group: 'internal',
            position: 'before'
          }
        ],
        pathGroupsExcludedImportTypes: ['react', '@?\\w'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        },
        'newlines-between': 'always-and-inside-groups'
      }
    ],
    'react/jsx-props-no-spreading': 'off',
    'max-classes-per-file': 'warn',
    'no-underscore-dangle': 'warn',
    'no-debugger': 'warn',
    'prefer-const': 'warn',
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'log']
      }
    ],
    'react/forbid-prop-types': 'off',
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'no-param-reassign': 0,
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'function-declaration',
        unnamedComponents: 'function-expression'
      }
    ],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^React$'
      }
    ]
  }
};
