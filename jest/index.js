module.exports = {
    env: {
        node: true,
        jest: true,
    },
    plugins: [
        'jest',
    ],
    rules: {
        'jest/consistent-test-it': [2, { fn: 'it' }],
        'jest/expect-expect': 2,
        'jest/no-commented-out-tests': 2,
        'jest/no-disabled-tests': 2,
        'jest/no-duplicate-hooks': 2,
        'jest/no-focused-tests': 2,
        'jest/no-identical-title': 2,
        'jest/no-jest-import': 2,
        'jest/no-standalone-expect': 2,
        'jest/no-done-callback': 2,
        'jest/no-test-prefixes': 2,
        'jest/no-test-return-statement': 2,
        'jest/prefer-hooks-on-top': 2,
        'jest/prefer-strict-equal': 2,
        'jest/prefer-to-be': 2,
        'jest/prefer-to-contain': 2,
        'jest/prefer-to-have-length': 2,
        'jest/valid-describe-callback': 2,
        'jest/valid-expect-in-promise': 2,
    },
};
