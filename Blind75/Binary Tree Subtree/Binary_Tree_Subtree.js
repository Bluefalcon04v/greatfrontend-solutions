function binaryTreeSubtree(root, subRoot) {
    if (!root || !subRoot) return false
    if (root.val == subRoot.val && isValidSubtree(root, subRoot)) return true
    return binaryTreeSubtree(root.left, subRoot) || binaryTreeSubtree(root.right, subRoot)
};

function isValidSubtree(root, subRoot) {
    if (!root && !subRoot) return true;
    if (!root || !subRoot) return false
    if (root.val != subRoot.val) return false
    return isValidSubtree(root.left, subRoot.left) && isValidSubtree(root.right, subRoot.right)
}