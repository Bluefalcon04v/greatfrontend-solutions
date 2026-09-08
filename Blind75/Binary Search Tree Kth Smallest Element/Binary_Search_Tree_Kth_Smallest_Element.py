def kthSmallestElementInABst(root, k) :
    sorted_array = []
    
    def traversal(curr):
        if curr is None : return
        
        if curr.left: 
            traversal(curr.left)
            
        sorted_array.append(curr.val)
        traversal(curr.right)
        
    traversal(root)
    return sorted_array[k - 1]