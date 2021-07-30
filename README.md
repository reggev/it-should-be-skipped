# eslint-plugin-it-should-skip

Ensuring All tests that should be skipped are skipped

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i -D eslint
```

Next, install `eslint-plugin-it-should-skip`:

```
$ npm i -D eslint-plugin-it-should-skip
```

## Usage

Add `it-should-be-skipped` to the plugins section of your `.eslintrc` configuration file.:

```json
{
  "plugins": ["@reggev/eslint-plugin-it-should-be-skipped"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "@reggev/it-should-be-skipped/it-should-be-skipped": 1
  }
}
```

## Supported Rules

Read more on the rule's `doc` directory

- @reggev/it-should-be-skipped/it-should-be-skipped
