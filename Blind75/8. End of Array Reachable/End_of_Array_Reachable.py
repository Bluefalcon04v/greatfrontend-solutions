# Brute force 
def array_Reachable_End(numbers: list[int]) -> bool:
    length = len(numbers)
    max_index_reached = 0
    
    for index in range(length):
        if (index > max_index_reached): return False
        current_reached = numbers[index] + index
        max_index_reached = max(current_reached, max_index_reached)
        
    return True    
    
test_cases = [[4,1,0,0,2,3], [1,0,0,0], [2,3,1,1,4], [1,0]]
for test_case in test_cases:
    print(array_Reachable_End(test_case))