def mostCommonElements(numbers, k):
    count_map = {}
    
    for number in numbers:
        if number in count_map:
            count_map[number] += 1            
        else:
            count_map[number] = 1
        
    return count_map

test_cases = [
    {"numbers": [4,4,4,6,6,5,5,5], "k": 2},
    {"numbers": [7,7,7,8,8,9,9,9], "k": 3},
    {"numbers": [10,10,10,10,10], "k": 1},
]

for test_case in test_cases:
    print(mostCommonElements(**test_case))