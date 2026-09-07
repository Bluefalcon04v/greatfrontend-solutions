def findInRotatedArray(numbers: list[int], target: int):
    l = 0
    r = len(numbers) - 1
    
    while l <= r:
        m = l + (r - l) // 2

        if numbers[m] == target: return m
        if numbers[l] <= numbers[m]:
            # left side is sorted
            if target >= numbers[l] and target < numbers[m]:
                r = m - 1
            else: 
                l = m + 1
        else: 
            # right side is sorted 
            if target > numbers[m] and target <= numbers[r]:
                l = m + 1
            else:
                r = m - 1
        
    return -1

test_cases = [
    {"numbers": [0,1,2,3,4], "target": 2},
    {"numbers": [2,3,4,0,1], "target": 0},
    {"numbers": [4], "target": 2},
]

for case in test_cases:
    numbers = case["numbers"]
    target = case["target"]

    print(findInRotatedArray(numbers, target))