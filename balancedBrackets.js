/*
Given a string str consisting of characters such as '(', ')', '{', '}', '[' and ']', determine if the input string is properly balanced.

A string is considered balanced if:

- Each opening bracket bracket is closed by the same type of bracket (e.g., ( with ), { with }, and [ with ])
- Open brackets are closed in the correct order (e.g., ([]) is valid, but ([)] is not)
- Any subset of brackets enclosed within a matched pair must also form a valid matched pair (e.g., {[(])} is not balanced because the contents inside { and } are unbalanced).
*/

function isBalancedBrackets(str) {
    // Initialize an empty stack to keep track of opening brackets
      const stack = [];
  
      // A map to associate closing brackets with their corresponding opening brackets
      const bracket_map = {
          ')': '(',
          '}': '{',
          ']': '['
      };

      // Split str to strArr 
      const strArr = str.split("")

      // Travese each character in strArr
      for (let i = 0; i < strArr.length; i ++) {
          // Check strArr element is NOT key of bracket_map => push to stack
          if(!(strArr[i] in bracket_map)) {
              stack.push(strArr[i])
          } else {
              // Check if the last item of stack is not equal with value correspond with bracket_map's key
              // Example: [({})], in stack: ['[','(','{'], strArr[i]: }, ), ] => bracket_map[strArr[i]: '{', '(', '['
              if (stack[stack.length - 1] !== bracket_map[strArr[i]]) {
                  return false
              }

              // Remove item have checked from stack
              stack.pop()
          }
      }
      // if str is valid stack will be empty
      return stack.length === 0;
      
  }

  isBalancedBrackets('[({})]')