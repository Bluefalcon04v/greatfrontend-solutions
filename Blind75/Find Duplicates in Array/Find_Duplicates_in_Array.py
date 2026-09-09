def findDuplicates(numbers: list[int]) -> bool:
    seen = set()
    
    for number in numbers:
        if number in seen:
            return True
        
        seen.add(number)
        
    return False
    
inputs = [[5,7,1,3], [10,7,0,0,9], [3,2,6,5,0,3,10,3,10,5]]
for input in inputs:
    print(findDuplicates(input))