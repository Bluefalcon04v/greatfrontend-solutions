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
    return -1

inputs = [[1,2,-3,5,1], [9], [1,2,0,-1,8,-4]]
for input in inputs:
    print(maxProductSubArray(input))