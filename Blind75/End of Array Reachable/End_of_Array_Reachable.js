function arrayReachableEnd(numbers){
    let maxReachedIndex = 0
    const length = numbers.length

    for (let index = 0; index < length; index++){
        if (index > maxReachedIndex ) return false
        if(maxReachedIndex >= length) return true 
        
        const canReachToIndex =  numbers[index] + index
        maxReachedIndex = Math.max(maxReachedIndex, canReachToIndex)
    }
    return true
}

const test_cases = [[4,1,0,0,2,3], [1,0,0,0], [2,3,1,1,4], [1,0]]
for(const test_case of test_cases){
    console.log(arrayReachableEnd(test_case))
}