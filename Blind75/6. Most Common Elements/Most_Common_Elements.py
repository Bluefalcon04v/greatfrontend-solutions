def mostCommonElements(numbers: list[int], k: int) -> list[int]:
    count_map = {}
    
    for number in numbers:
        if number in count_map:
            count_map[number] += 1            
        else:
            count_map[number] = 1
    
    result = []
    sorted_array = sorted(count_map.items(), key=lambda item:item[1], reverse=True)[:k]
    
    for i in range(k):
        result.append(sorted_array[i][0])
    
    return result

# Optimized Approach 
def mostCommonElements(numbers: list[int], k: int) -> list[int]:
    count_map = {}
    
    for number in numbers:
        if number in count_map:
            count_map[number] += 1
        else: 
            count_map[number] = 1
            
    pq = MinPriorityQueue()
    
    for val, frequency in count_map.items():
        pq.append(val, frequency)
        if pq.size() > k:
            pq.remove()
    
    return [item[0] for item in pq.heap]

class MinPriorityQueue:
    def __init__(self):
        self.heap = []

    def size(self):
        return len(self.heap)
    
    def append(self, value, frequency):
        self.heap.append((value, frequency))
        self.heapifyUp()
        
    def getParentNodeIndex(self, node):
        return (node - 1 ) // 2
    
    def getLeftNodeIndex(self, node):
        return (node * 2) + 1
    
    def getRightNodeIndex(self, node):
        return (node * 2) + 2

    def heapifyUp(self):
        node_index =  len(self.heap) - 1
        
        while node_index > 0:
            parent_node_index = self.getParentNodeIndex(node_index)
            if self.heap[parent_node_index][1] > self.heap[node_index][1]:
                self.heap[parent_node_index], self.heap[node_index] = self.heap[node_index], self.heap[parent_node_index]
                node_index = parent_node_index
            else: 
                break
        
    def remove(self):
        last_node_index = len(self.heap) - 1
        self.heap[last_node_index], self.heap[0] = self.heap[0], self.heap[last_node_index]
        self.heap.pop()
        self.heapifyDown()
        
    def heapifyDown(self):
        node_index = 0
        length = len(self.heap)
        
        while True:
            left_node_index = self.getLeftNodeIndex(node_index)
            right_node_index = self.getRightNodeIndex(node_index)
            min_index = node_index
            
            if left_node_index < length and self.heap[left_node_index][1] < self.heap[min_index][1]:
                min_index = left_node_index

            if right_node_index < length and self.heap[right_node_index][1] < self.heap[min_index][1]:
                min_index = right_node_index
            
            if node_index != min_index:
                self.heap[node_index], self.heap[min_index] = self.heap[min_index], self.heap[node_index]
                node_index = min_index     
                
            else: 
                break                  
                
test_cases = [
    {"numbers": [4,4,4,6,6,5,5,5, 9], "k": 2},
    {"numbers": [7,7,7,8,8,9,9,9], "k": 3},
    {"numbers": [10,10,10,10,10], "k": 1},
]

for test_case in test_cases:
    print(mostCommonElements(**test_case))