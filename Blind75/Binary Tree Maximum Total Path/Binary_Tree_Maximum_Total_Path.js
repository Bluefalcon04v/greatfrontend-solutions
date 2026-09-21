function binaryTreeMaximumPathSum(root){
    let maxSum = -Infinity

  function backtrack(node, sum){
    if(!node) return 0;

    let leftMax = Math.max(0, backtrack(node.left, sum))
    let rightMax = Math.max(0, backtrack(node.right, sum))
    maxSum = Math.max(maxSum, leftMax + rightMax + node.val)
    return node.val + Math.max(leftMax, rightMax)
  }

  backtrack(root, 0)
  return maxSum
}