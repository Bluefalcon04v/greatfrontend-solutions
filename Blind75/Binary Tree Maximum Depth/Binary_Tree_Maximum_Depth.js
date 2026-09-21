function binaryTreeMaximumDepth(root){
    let maxLevel = 0
    function backtrack(currNode, currLevel){
        if (!currNode) return 
        backtrack(currNode.left, currLevel+1)
        backtrack(currNode.right, currLevel+1)
        maxLevel = Math.max(currLevel, maxLevel)
    }
    backtrack(root, 0)
    return maxLevel
}
