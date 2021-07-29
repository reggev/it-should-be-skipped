/**
 * @fileoverview Rule to avoid pushing debugging tests that should be skipped
 * @author Reggev Amsalem
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    docs: {
      description: "enforce the parentheses style of arrow functions.",
      category: "Stylistic Issues",
      recommended: false,
      suggestion: true,
    },
    fixable: "code",
    schema: [],
    type: "problem",
  },
  create(context) {
    return {
      Identifier(node) {
        if (node.name !== "it") return;
        if (node.parent.type !== "CallExpression") return;
        if (node.parent.arguments.length === 0) return;

        if (
          // @ts-ignore
          node.parent.arguments[0]?.value?.slice?.(0, 17) ===
          "should be skipped"
        ) {
          context.report({
            node,
            message: "it should be skipped...",
            fix: function (fixer) {
              return fixer.insertTextAfter(node, ".skip");
            },
          });
        }
        return;
      },
    };
  },
};