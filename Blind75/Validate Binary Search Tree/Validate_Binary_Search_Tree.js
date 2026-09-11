function binarySearchTreeValidate(root, low = null, high = null){
    if (!root) return true
    if(low !== null && low >= root.val || 
        high !== null && high <= root.val
    )
    return false
  
    let leftTree = binarySearchTreeValidate(root.left, low, root.val)
    let rightTree = binarySearchTreeValidate(root.right, root.val, high)

    return leftTree && rightTree
}
