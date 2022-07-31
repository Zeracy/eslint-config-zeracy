# eslint-config-zeracy

## About 
This is an ESLint [Shareable Config][config-url].

## Install
At the moment this isn't published so it can only be installed through the git url
```bash
yarn add --dev https://github.com/Zeracy/eslint-config-zeracy
```

## Usage

### eslint

[Shareable configs][config-url] are designed to work with the `extends` feature of `.eslintrc` files.

```json
{
  "extends": [
     "zeracy",
     "zeracy/jest",
     "zeracy/jsdoc",
     "zeracy/jsdoc/required",
     "zeracy/json",
     "zeracy/react",
     "zeracy/typescript",
  ]
}
```

You can override any rules or settings from the shareable config by adding them directly into your
`.eslintrc` file.

#### Note
The `eslint-config-` prefix is ommited since it is automatically assumed by ESLint.

### remark-cli
For markdown support there is a config for remark-cli under the /markdown directory.

```json
{
  "plugins": [
    "eslint-config-zeracy/markdown/index.js"
  ]
}
```

## License

MIT. Copyright (c)

[config-url]: http://eslint.org/docs/developer-guide/shareable-configs
