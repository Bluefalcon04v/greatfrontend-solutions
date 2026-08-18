function findMissingNumberInSequence(numbers){
    const presence = new Array(numbers.length +1).fill(false)

    for(const number of numbers){
        presence[number] = true
    }

    for(let index = 0; index < presence.length; index++){
        if(!presence[index]){
            return index
        }
    }
}

const inputs = [[1,3,0], [1], [3,0,4,2,1]]
for (const input of inputs){
    console.log(findMissingNumberInSequence(input))
}