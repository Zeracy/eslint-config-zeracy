module.exports = {
    rules: {
        'require-jsdoc': [1, {
            require: {
                FunctionDeclaration: true,
                MethodDefinition: true,
                ClassDeclaration: false,
                ArrowFunctionExpression: true,
            },
        }],
    },
};
