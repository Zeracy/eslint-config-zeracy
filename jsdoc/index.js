module.exports = {
    plugins: [
        'jsdoc',
    ],
    env: {
        'shared-node-browser': true,
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 2020,
        ecmaFeatures: {
            jsx: true,
        },
        sourceType: 'module',
    },
    settings: {
        jsdoc: {
            tagNamePreference: {
                class: 'constructor',
            },
            preferredTypes: {
                object: 'Object',
            },
        },
    },
    rules: {
        'require-jsdoc': [1, {
            require: {
                FunctionDeclaration: true,
                MethodDefinition: true,
                ClassDeclaration: false,
                ArrowFunctionExpression: true,
            },
        }],
        'valid-jsdoc': [1, {
            prefer: {
                arg: 'param',
                argument: 'param',
                return: 'returns',
            },
            requireParamDescription: false,
            requireReturnDescription: false,
            requireReturnType: true,
            requireReturn: true,
        }],
        'jsdoc/check-alignment': 2,
        'jsdoc/check-indentation': 2,
        'jsdoc/check-param-names': [2, { checkDestructured: false }],
        'jsdoc/check-syntax': 2,
        'jsdoc/check-tag-names': 2,
        'jsdoc/check-types': 2,
        'jsdoc/implements-on-classes': 2,
        'jsdoc/newline-after-description': 2,
        'jsdoc/require-description-complete-sentence': 2,
        'jsdoc/require-jsdoc': 2,
        'jsdoc/require-param': [2, { checkDestructured: false, checkDestructuredRoots: false, unnamedRootBase: ['props', 'args'] }],
        'jsdoc/require-param-name': 2,
        'jsdoc/require-param-type': 2,
        'jsdoc/require-returns': 2,
        'jsdoc/require-returns-check': 2,
        'jsdoc/require-returns-type': 2,
        'jsdoc/valid-types': 2,
    },
};
