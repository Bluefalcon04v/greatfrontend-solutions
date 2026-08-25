// Brute Force
function mostCommonElements(numbers, k){
    let countMap = new Map()

    for (const number of numbers){
        countMap.set(number, (countMap.get(number) || 0 ) + 1)
    }

    const sortedCountMap = [...countMap].sort((a, b) => b[1] - a[1]).splice(0, k)
    let result = []
    
    for (const num of sortedCountMap){
        result.push(num[0])
    }

    return result
}

// Optimized Approach using minPriorityQueue
function mostCommonElements(numbers, k){
    let countMap = new Map()

    for (const number of numbers){
        countMap.set(number, (countMap.get(number) || 0) + 1)
    }

    let pq = new myMinPriorityQueue()

    for(const [val, freq] of countMap){
        pq.add({val, freq})
        if (pq.size() > k){
            pq.remove()
        }
    }
    return pq.heap.map(item => item.val)
}

class myMinPriorityQueue{
    constructor(){
        this.heap = []
    }

    size(){
        return this.heap.length
    }

    getLeftElementIndex(node){
        return (node * 2) + 1
    }

    getRightElementIndex(node){
        return (node * 2) + 2
    }

    getParentElementIndex(node){
        return Math.floor((node - 1)/ 2)
    }

    add({val, freq}){
        this.heap.push({val, freq})
        this.heapifyUp()
    }

    heapifyUp(){
       let currNodeIndex = this.size() - 1

       while(currNodeIndex > 0){
            const parentElementIndex = this.getParentElementIndex(currNodeIndex)
            if(this.heap[currNodeIndex].freq < this.heap[parentElementIndex].freq){
                [this.heap[currNodeIndex], this.heap[parentElementIndex]] = [this.heap[parentElementIndex], this.heap[currNodeIndex]]
                currNodeIndex = parentElementIndex
            }
            else{
                break;
            }
       }
    }

    remove(){
        const lastNodeIndex = this.size() - 1;
        [this.heap[0], this.heap[lastNodeIndex]] = [this.heap[lastNodeIndex], this.heap[0]]
        this.heap.pop() 
        this.heapifyDown()
    }

    heapifyDown(){
        let currNodeIndex = 0
        let length = this.size()

        while(currNodeIndex < this.size()){
            const leftElementIndex = this.getLeftElementIndex(currNodeIndex)
            const rightElementIndex = this.getRightElementIndex(currNodeIndex)
            let smallestIndex = currNodeIndex

            if (leftElementIndex < length && this.heap[leftElementIndex].freq < this.heap[currNodeIndex].freq){
                smallestIndex = leftElementIndex
            }
            if(rightElementIndex < length && this.heap[rightElementIndex].freq < this.heap[smallestIndex].freq){
                smallestIndex = rightElementIndex
            }
            if(smallestIndex !== currNodeIndex){
                [this.heap[currNodeIndex], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[currNodeIndex]]
                currNodeIndex = smallestIndex
            }
            else{
                break;
            }
        }
    }
}

const testCases = [
    {"numbers": [4,4,4,6,6,5,5,5,9], "k": 2},
    {"numbers": [7,7,7,8,8,9,9,9], "k": 3},
    {"numbers": [10,10,10,10,10], "k": 1},
]

for (const {numbers, k} of testCases){
    console.log(mostCommonElements(numbers, k))
}
