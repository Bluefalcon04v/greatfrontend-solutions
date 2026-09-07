function findInRotatedArray(numbers, target){
    let l = 0
    let r = numbers.length - 1

    while(l <= r){
        let m = l + Math.floor((r-l)/2)

        if(numbers[m] == target) return m
        if (numbers[l] <= numbers[m]){
            // left half is sorted 
            if(target < numbers[m] && target >= numbers[l]){
                r = m - 1
            } else {
                l = m + 1
            }
        }
        else {
            // left half is sorted 
            if(target > numbers[m] && target <= numbers[r]){
                l = m + 1
            } else{
                r = m - 1
            }
        }
    }

    return -1
}

const testCases = [
    {numbers: [0,1,2,3,4], target: 2},
    {numbers: [2,3,4,0,1], target: 0},
    {numbers: [4], target: 2},
]
for (const {numbers, target} of testCases){
    console.log(findInRotatedArray(numbers, target))
}