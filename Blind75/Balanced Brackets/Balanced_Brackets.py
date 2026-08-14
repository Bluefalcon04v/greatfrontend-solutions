def isBalancedBrackets(str):
    stack = []
    pairs = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    
    for char in str:
        if char in '([{':
            stack.append(char)
            continue
        
        if char in ')]}':
            if stack.pop() != pairs[char]:
                return False
            
    return len(stack) == 0
    
inputs = ["[]", "([)]", "([]){}"]   
for input in inputs:
    print(isBalancedBrackets(input))
