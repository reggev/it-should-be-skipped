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

ruleTester.run('it-should-be-skipped', rule, {
  valid: [
    { code: "it('should do whatever')" },
    { code: "it.skip('should be skipped')" },
    { code: "it('')" },
    { code: 'it' },
  ],

  invalid: [
    {
      code: "it('should be skipped')",
      errors: [{ message: 'it should be skipped...' }],
      output: "it.skip('should be skipped')",
    },
    {
      code: "it('should be skipped, whatever')",
      errors: [{ message: 'it should be skipped...' }],
      output: "it.skip('should be skipped, whatever')",
    },
    {
      code: "it('should be skipped - whatever')",
      errors: [{ message: 'it should be skipped...' }],
      output: "it.skip('should be skipped - whatever')",
    },
  ],
});
