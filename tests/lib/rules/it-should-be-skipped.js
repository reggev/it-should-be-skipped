/**
 * @author Reggev
 * @file Ensuring All tests that should be skipped are skipped
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../lib/rules/it-should-be-skipped');
const RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();

ruleTester.run('it', rule, {
  valid: [
    {
      code: "it('should do whatever')",
      options: [{ it: 'should be skipped' }],
    },
    { code: "it('a skipped group')" },
    { code: "it.skip('should be skipped')" },
    { code: "it('')" },
    { code: 'it' },
    {
      code: "it('should be skipped')",
      options: [{ it: 'a custom trigger' }],
    },
  ],

  invalid: [
    {
      options: [{ it: 'should be skipped', describe: 'whatever' }],
      code: "it('should be skipped')",
      errors: [{ message: 'this test should be skipped' }],
      output: "it.skip('should be skipped')",
    },
    {
      code: "it('should be skipped, testing with some real 3rd party api')",
      errors: [{ message: 'this test should be skipped' }],
      output:
        "it.skip('should be skipped, testing with some real 3rd party api')",
    },
    {
      code: "it('should be skipped - testing with some real 3rd party api')",
      errors: [{ message: 'this test should be skipped' }],
      output:
        "it.skip('should be skipped - testing with some real 3rd party api')",
    },
    {
      code: "it('a custom trigger')",
      options: [{ it: 'a custom trigger' }],
      errors: [{ message: 'this test should be skipped' }],
      output: "it.skip('a custom trigger')",
    },
  ],
});

ruleTester.run('describe', rule, {
  valid: [
    { code: "describe('should be skipped')" },
    { code: "describe('should do whatever')" },
    { code: "describe('')" },
    { code: 'describe' },
    { code: "describe.skip('a skipped group')" },
  ],

  invalid: [
    {
      code: "describe('a skipped group')",
      errors: [{ message: 'this tests group should be skipped' }],
      output: "describe.skip('a skipped group')",
    },
    {
      code: "describe('a skipped group, testing with some real 3rd party api')",
      errors: [{ message: 'this tests group should be skipped' }],
      output:
        "describe.skip('a skipped group, testing with some real 3rd party api')",
    },
    {
      code: "describe('a skipped group - testing with some real 3rd party api')",
      errors: [{ message: 'this tests group should be skipped' }],
      output:
        "describe.skip('a skipped group - testing with some real 3rd party api')",
    },
    {
      code: "describe('a custom trigger')",
      options: [{ describe: 'a custom trigger' }],
      errors: [{ message: 'this tests group should be skipped' }],
      output: "describe.skip('a custom trigger')",
    },
  ],
});
