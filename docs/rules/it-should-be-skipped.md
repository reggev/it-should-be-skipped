# it-should-be-skipped

## Rule Details

When interacting with a real api on a test(usually for debugging), most of the time this test should be skipped
it also shouldn't run on the CI.
This rule ensures those tests are pushed to GIT when they are really skipped

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
