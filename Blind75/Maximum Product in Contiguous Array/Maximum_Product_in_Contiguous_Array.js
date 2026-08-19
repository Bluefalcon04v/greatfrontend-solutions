function maxProductSubArray(numbers){
    let maxProducts = -1

    for(let left = 0; left < numbers.length; left++){
        let currProduct = 1
        for(let right = left; right < numbers.length; right++){
            currProduct *= numbers[right]
            maxProducts = Math.max(currProduct, maxProducts)
        }
    }
    return maxProducts
}

const inputs = [[1,2,-3,5,1], [9], [1,2,0,-1,8,-4]]
for (const input of inputs){
    console.log(maxProductSubArray(input))
}