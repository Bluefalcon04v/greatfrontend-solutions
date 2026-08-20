# brute force 
def maxProductSubArray(numbers: list[int]) -> int:
    max_product = numbers[0]

    for left in range(0, len(numbers)):
        curr_product = 1
        for right in range(left, len(numbers)):
            curr_product *= numbers[right]
            max_product = max(max_product, curr_product)
   
    return max_product

# Optimal Approach
def maxProductSubArray(numbers: list[int]) -> int:
    result = numbers[0]
    max_product = numbers[0]
    min_product = numbers[0]
    
    for i in range(1, len(numbers)):
        curr = numbers[i]
        
        if curr < 0: 
            min_product, max_product = max_product , min_product
        
        min_product = min(min_product * curr, curr)
        max_product = max(max_product * curr, curr)
        
        result = max(max_product, result)
            
    return result

inputs = [[1,2,-3,5,1], [9], [1,2,0,-1,8,-4]]
for input in inputs:
    print(maxProductSubArray(input))