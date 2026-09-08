function kthSmallestElementInABst(root, k) {
    // traversing 
    // left -> root -> right
    let sortedArray = [];

    function traversing(curr) {
        if (!curr) return;
        if (curr.left) {
            traversing(curr.left);
        }
        sortedArray.push(curr.val);
        traversing(curr.right);
    }

    traversing(root);

    // BST gives sorted order after traversing
    return sortedArray[k - 1];
}
