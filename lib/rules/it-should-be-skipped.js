/**
 * @author Reggev Amsalem
 * @file A Rule that blocks committing tests that should be skipped
 */
//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const schema = {
  type: 'object',
  properties: {
    it: {
      type: 'string',
      default: 'should be skipped',
    },
    describe: {
      type: 'string',
      default: 'a skipped group',
    },
  },
  additionalProperties: false,
};
const triggeringMethods = Object.keys(schema.properties);
/** @typedef {keyof schema['properties']} TriggeringMethod */

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    docs: {
      description: 'enforce the parentheses style of arrow functions.',
      category: 'Stylistic Issues',
      recommended: false,
      suggestion: true,
    },
    fixable: 'code',
    schema: [schema],
    type: 'problem',
  },
  create(context) {
    return {
      Identifier(node) {
        if (!triggeringMethods.includes(node.name)) return;
        if (node.parent.type !== 'CallExpression') return;
        if (node.parent.arguments.length === 0) return;
        /** @type {string} */
        // @ts-expect-error
        const message = node.parent.arguments[0]?.value;
        if (!message) return;

        /** @type {string} */
        const triggeringExpression =
          context.options?.[0]?.[node.name] ??
          // eslint doesn't use default values if no object was provided at all
          schema.properties[/** @type {TriggeringMethod} */ (node.name)]
            .default;

        if (message.startsWith(triggeringExpression)) {
          context.report({
            node,
            message: `this ${
              node.name === 'it' ? 'test' : 'tests group'
            } should be skipped`,
            fix: function (fixer) {
              return fixer.insertTextAfter(node, '.skip');
            },
          });
        }
      },
    };
  },
};
