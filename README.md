# eslint-plugin-it-should-skip

helps ensuring tests that should be skipped are skipped

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-it-should-skip`:

```
$ npm install eslint-plugin-it-should-skip --save-dev
```


## Usage

Add `it-should-skip` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "it-should-skip"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "it-should-skip/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





