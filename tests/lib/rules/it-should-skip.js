"use strict";

const rule = require("../../../lib/rules/it-should-skip");
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester();

ruleTester.run("it-should-skip", rule, {
  valid: [
    {
      code: "it('should do whatever')",
    },
    {
      code: "it.skip('should be skipped')",
    },
    {
      code: "it('')",
    },
    {
      code: "it",
    },
  ],

  invalid: [
    {
      code: "it('should be skipped')",
      errors: [{ message: "it should be skipped..." }],
      output: "it.skip('should be skipped')",
    },
    {
      code: "it('should be skipped, whatever')",
      errors: [{ message: "it should be skipped..." }],
      output: "it.skip('should be skipped, whatever')",
    },
    {
      code: "it('should be skipped - whatever')",
      errors: [{ message: "it should be skipped..." }],
      output: "it.skip('should be skipped - whatever')",
    },
  ],
});
