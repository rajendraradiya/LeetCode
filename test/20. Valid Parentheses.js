/* 
20. Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false

Example 4:

Input: s = "([])"

Output: true

Example 5:

Input: s = "([)]"

Output: false

 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if(s.length <= 1 || s.length % 2 !==0) return false
    let stack = [];
    const map = {
      "(": ")",
      "{": "}",
      "[": "]",
    };
    let isExecuted = false
    let remainStack = []
  
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
        isExecuted = true
        stack.push(s[i]);
      } else {
        if (stack.length !== 0 && s[i] !== map[stack[stack.length - 1]]) {
          return false;
        }
        if(stack.length == 0)
        {
          remainStack.push(s[i])
        }
        stack.pop();
      }
    }
    if(!isExecuted || remainStack.length != 0 ) return false
    return stack.length === 0;
  };
  
  console.log(isValid("()))"));
  