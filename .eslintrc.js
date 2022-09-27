module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      plugins: ['react', 'react-hooks', '@typescript-eslint'],
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
        ecmaVersion: 2020,
      },
        
    rules: {
        indent: ['error', 2, { SwitchCase: 1 }],
        quotes: ['error', 'double', { avoidEscape: true }],
      },
    
    overrides: [
        {
          files: ['*.{ts,tsx}'],
    
          parser: '@typescript-eslint/parser',
    
          parserOptions: {
            tsconfigRootDir: __dirname,
            project: './tsconfig.json',
          },
    
          plugins: ['@typescript-eslint'],
    
          extends: [
            'plugin:@typescript-eslint/recommended',
            'plugin:@typescript-eslint/recommended-requiring-type-checking',
          ],
    
          rules: {
            'no-unused-vars': 0,
            'react/prop-types': 0,
            '@typescript-eslint/no-non-null-assertion': 0,
            '@typescript-eslint/no-unused-vars': [2, { argsIgnorePattern: '^_' }],
            'no-empty-function': 'off',
            '@typescript-eslint/no-empty-function': 'off',
            'react/display-name': 'off',
            'react/prop-types': 'off',
          },
        },
      ],
    settings: {
        react: {
          version: 'detect',
        },
      },
};
