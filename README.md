# eslint-plugin-it-should-skip

**Ensuring All tests that should be skipped are skipped before committing them**

This plugin will trigger a warning/error if a test's name starts with `'should be skipped'` or a `describe` with a message starting with `'a skipped group'`.

**Those triggers can be customized**

see [examples](#examples)

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
    "@reggev/it-should-be-skipped/it-should-be-skipped": ["warn"]
  }
}
```

You can also set custom triggers (optional):

```json
{
  "rules": {
    "@reggev/it-should-be-skipped/it-should-be-skipped": [
      "warn",
      { "it": "custom trigger", "describe": "custom group trigger" }
    ]
  }
}
```

## examples

Examples of **incorrect** code for this rule:

```js
it('should be skipped');
it('should be skipped, going to get some real data from a 3rd party');
it('should be skipped - some debugging test');
describe('a skipped group');
it('my custom trigger, doing something that should be skipped');
```

Examples of **correct** code for this rule:

```js
it.skip('should be skipped');
it.skip('should be skipped, going to get some real data from a 3rd party');
it.skip('should be skipped - some debugging test');
describe.skip('a skipped group');
it.skip('my custom trigger, doing something that should be skipped');
```
