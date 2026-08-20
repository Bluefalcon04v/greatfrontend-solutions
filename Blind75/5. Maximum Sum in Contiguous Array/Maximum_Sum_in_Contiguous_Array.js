function maxSumSubArray(numbers){
    let result = -Infinity
    let sum = 0

    for (let num of numbers){
        sum += num
        result = Math.max(sum, result)

        if(sum < 0){
            sum = 0
        }
    }
    return result
}

const testCases =  [[-1,5,-3,9,-11], [9], [1,2,3,4]]
for(const nums of testCases){
    console.log(maxSumSubArray(nums))
}