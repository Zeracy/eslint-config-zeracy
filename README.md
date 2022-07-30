# eslint-config-zeracy

## About 
This is an ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs).


## Install
At the moment this isn't published so it can only be installed through the git url
```bash
yarn add https://github.com/Zeracy/eslint-config-zeracy
```

## Usage

[Shareable configs](http://eslint.org/docs/developer-guide/shareable-configs) are designed to work with the `extends` feature of `.eslintrc` files.

```
{
  "extends": [
     "zeracy",
     "zeracy/jsdoc",
     "zeracy/jsdoc/required",
     "zeracy/json",
     "zeracy/react",
  ]
}
```

*Note: The `eslint-config-` prefix is ommited since it is automatically assumed by ESLint.*

You can override any rules or settings from the shareable config by adding them directly into your
`.eslintrc` file.

## License

MIT. Copyright (c)