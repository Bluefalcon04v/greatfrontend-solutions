def maxSumSubArray(numbers: list[int]) -> int:
    result = float('-inf')
    sum = 0
    
    for number in numbers:
        sum += number
        result = max(sum, result)
        if sum < 0:
            sum = 0 
            
    return result

test_cases = [[-1,5,-3,9,-11], [9], [1,2,3,4]]
for nums in test_cases:
    print(maxSumSubArray(nums))
    