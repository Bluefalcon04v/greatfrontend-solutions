def findMissingNumberInSequence(numbers: list[int]) -> int:
    presence = [False] * (len(numbers) + 1)
    
    for number in numbers:
        presence[number] = True
        
    for index in range(len(presence)):
        if not presence[index]:
            return index

inputs = [[1,3,0], [1], [3,0,4,2,1]]
for input in inputs:
    print(findMissingNumberInSequence(input))