function findDuplicates(numbers){
    const seen = new Set()

    for (const number of numbers){
        if (seen.has(number)){
            return true
        }
        seen.add(number)
    }
    return false
}

const inputs = [[5,7,1,3], [10,7,0,0,9], [3,2,6,5,0,3,10,3,10,5]]
for (const input of inputs){
    console.log(findDuplicates(input))
}