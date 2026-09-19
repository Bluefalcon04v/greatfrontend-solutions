function binaryTreeLevelOrderTraversal(root){
    let res = []
    function backtrack(currNode, level){
        if (!currNode) return
        if(!res[level]) res[level] = [];

        res[level].push(currNode.val)
        backtrack(currNode.left, level + 1)
        backtrack(currNode.right, level+ 1)
    }
    backtrack(root, 0)
    return res
}