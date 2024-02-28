/**
 * Write a function isBalanced that takes a string containing only parentheses and checks if they are balanced.
 */

function isBalanced(str) {
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "(" || str[i] == "[" || str[i] == "{") {
      arr.push(str[i]);
    } else if (arr.length == 0) {
      return false;
    } else if (str[i] == "}" && arr[arr.length - 1] == "{") {
      arr.pop();
    } else if (str[i] == "]" && arr[arr.length - 1] == "[") {
      arr.pop();
    } else if (str[i] == ")" && arr[arr.length - 1] == "(") {
      arr.pop();
    } else {
      arr.push(str[i]);
    }
  }

  return arr.length == 0;
}

console.log(isBalanced("({})[]"));
console.log(isBalanced("{()})("));
console.log(isBalanced("{(})[]"));
console.log(isBalanced("[()]{}{[()()]()}"));
console.log(isBalanced("[(])"));
