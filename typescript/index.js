module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:@typescript-eslint/recommended',
    ],
    plugins: [
        '@typescript-eslint/eslint-plugin',
    ],
    rules: {
        '@typescript-eslint/padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: '*',
                next: ['interface', 'type'],
            },
            {
                blankLine: 'always',
                prev: ['interface', 'type'],
                next: '*',
            },
        ],
    },
};
