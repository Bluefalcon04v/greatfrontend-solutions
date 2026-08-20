// Brute force
function maxProductSubArray(numbers){
    let maxProduct = -1

    for(let left = 0; left < numbers.length; left++){
        let currProduct = 1
        for(let right = left; right < numbers.length; right++){
            currProduct *= numbers[right]
            maxProduct = Math.max(currProduct, maxProduct)
        }
    }
    return maxProduct
}

// Optimal approach
function maxProductSubArray(numbers){
    let result = numbers[0]
    let maxProduct = numbers[0]
    let minProduct = numbers[0]

    for(let i = 1; i < numbers.length; i++){
        let curr = numbers[i]

        if (curr < 0){
            [minProduct, maxProduct] = [maxProduct, minProduct]
        }

        minProduct = Math.min(minProduct * curr, curr)
        maxProduct = Math.max(maxProduct * curr, curr)

        result = Math.max(maxProduct ,result)
    }
    return result
}

const inputs = [[1,2,-3,5,1], [9], [1,2,0,-1,8,-4]]
for (const input of inputs){
    console.log(maxProductSubArray(input))
}