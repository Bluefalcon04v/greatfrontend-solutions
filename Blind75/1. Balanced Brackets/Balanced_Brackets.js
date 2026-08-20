function isBalancedBrackets(str) {
  const stack = [];
  const pairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (const char of str) {
    if (char == "(" || char == "[" || char == "{") {
      stack.push(char);
      continue;
    }

    if (char == ")" || char == "]" || char == "}") {
      if (stack.pop() != pairs[char]) {
        return false;
      }
    }
  }
  
  return stack.length == 0;
}

const inputs = ["[]", "([)]", "([]){}"];
for (const input of inputs) {
  console.log(isBalancedBrackets(input));
}
