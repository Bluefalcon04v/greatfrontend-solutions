def findInRotatedArray(numbers: list[int]) -> int:
    l = 0
    r = len(numbers) - 1

    while l < r:
        m = l + (r - l) // 2
        if numbers[m] > numbers[r]: l = m + 1
        if numbers[m] <= numbers[r]: r = m 
    
    return numbers[l]

test_cases = [[1,2,3,4], [3,4,1,2], [6,7,8,-5,-4,2], [9,-9,-7,-4,0,2,5,6]]
for test_case in test_cases:
    print(findInRotatedArray(test_case))