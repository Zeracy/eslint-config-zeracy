module.exports = {
    plugins: [
        'remark-preset-lint-recommended',
        'remark-preset-lint-consistent',
        'remark-preset-lint-markdown-style-guide',
        ['remark-lint-list-item-indent', false],
        ['remark-lint-maximum-line-length', 120],
    ],
};
