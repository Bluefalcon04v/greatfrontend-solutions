function smallestInRotatedArray(numbers){
    let l = 0
    let r = numbers.length - 1

    while(l < r){
        let m = l + Math.floor((r - l)/ 2)

        if(numbers[m] > numbers[r]){
            l = m + 1
        }  
        if(numbers[m] <= numbers[r]) {
            r = m
        }
    }

    return numbers[l]
}

const testCases = [[1,2,3,4], [3,4,1,2], [6,7,8,-5,-4,2], [9,-9,-7,-4,0,2,5,6]]

for (const testCase of testCases){
    console.log(smallestInRotatedArray(testCase))
}