/*
9. Palindrome Number
============================================================================================================
Given an integer x, return true if x is a palindrome, and false otherwise.


Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1
 

Follow up: Could you solve it without converting the integer to a string?
*/

/**
 * @param {number} x
 * @return {boolean}
 */

//== Solution 1 ===========================================================================
/*

var isPalindrome = function (x) {
  let reverseString = x.toString().split("").reverse().join("");
  return reverseString == x;
};

console.log(isPalindrome(121));
 */

//== Solution 2 ===========================================================================

var isPalindrome = function (x) {
    let strVal = x.toString();
    let len = strVal.length;
    if (len < 2) return true;
    for (let i = 0; i < len - 1 / 2; i++) {
      if (strVal[i] !== strVal[len - 1 - i]) {
        return false;
      }
    }
    return true;
  };
  
  console.log(isPalindrome(11111));
  