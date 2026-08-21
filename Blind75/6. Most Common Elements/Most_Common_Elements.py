def mostCommonElements(numbers: list[int], k: int) -> list[int]:
    count_map = {}
    
    for number in numbers:
        if number in count_map:
            count_map[number] += 1            
        else:
            count_map[number] = 1
    
    result = []
    sorted_array = sorted(count_map.items(), key=lambda item:item[1], reverse=True)[:k]
    
    for i in range(k):
        result.append(sorted_array[i][0])
    
    return result

test_cases = [
    {"numbers": [4,4,4,6,6,5,5,5, 9], "k": 2},
    {"numbers": [7,7,7,8,8,9,9,9], "k": 3},
    {"numbers": [10,10,10,10,10], "k": 1},
]

for test_case in test_cases:
    print(mostCommonElements(**test_case))