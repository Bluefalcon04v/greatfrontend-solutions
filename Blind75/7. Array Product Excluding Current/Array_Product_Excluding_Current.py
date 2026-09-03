def arrayProductExcludingCurrent(numbers : list[int]) -> list[int]:
    length = len(numbers)
    answer = []

    for i in range(length):
        product = 1
        for j in range(length):
            if j != i:
                product *= numbers[j]
        answer.append(product)

    return answer


test_cases = [[1,2,3], [2,0,3], [0,0,-1,1]]
for test_case in test_cases:
    print(arrayProductExcludingCurrent(test_case))