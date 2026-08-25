// Brute Force 
function arrayProductExcludingCurrent(numbers){
    const length = numbers.length
    let products = Array(length).fill(1)
    
    for (let i = 0; i < length; i++){
        for (let j = 0; j < length; j++){
            if(i !== j){ 
                products[i] *= numbers[j] 
            }
        }
    }

    return products
}

// Optimal Approach
function arrayProductExcludingCurrent(numbers){

}
const testCases = [[1,2,3], [2,0,3], [0,0,-1,1]]
for(const testCase of testCases){
    console.log(arrayProductExcludingCurrent(testCase))
}