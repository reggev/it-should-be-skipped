# it-should-be-skipped

## Rule Details

When interacting with a real api on a test(usually for debugging), most of the time this test should be skipped
it also shouldn't run on the CI.
This rule ensures those tests are pushed to GIT when they are really skipped

Examples of **incorrect** code for this rule:

```js
it("should be skipped");
```

Examples of **correct** code for this rule:

```js
it.skip("should be skipped");
it.skip("should be skipped, some debugging test");
it.skip("should be skipped - some debugging test");
```
