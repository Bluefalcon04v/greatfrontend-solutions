function BSTLowestCommonAncestor(root, p, q) {
    function traversal(curr) {
        if (curr == null) return null;
        if (curr.val > p.val && curr.val > q.val) {
            return traversal(curr.left);
        }
        if (curr.val < p.val && curr.val < q.val) {
            return traversal(curr.right);
        }
        return curr;
    }
    return traversal(root);
}