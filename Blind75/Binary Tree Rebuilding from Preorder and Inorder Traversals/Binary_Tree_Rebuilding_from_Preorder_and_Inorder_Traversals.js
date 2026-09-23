class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

export default function binaryTreeRebuildingFromTraversals(preOrder, inOrder) {
    let map = new Map();
    for (let i = 0; i < inOrder.length; i++) {
        map.set(inOrder[i], i);
    }

    function backtrack(preOrder, preStart, preEnd, inOrder, inStart, inEnd) {
        if (preStart > preEnd || inStart > inEnd) return null;
        let node = new TreeNode(preOrder[preStart]);

        const rootIndex = map.get(node.val);
        const leftArray = rootIndex - inStart;

        node.left = backtrack(
            preOrder,
            preStart + 1,
            preStart + leftArray,
            inOrder,
            inStart,
            rootIndex - 1,
        );
        node.right = backtrack(
            preOrder,
            preStart + leftArray + 1,
            preEnd,
            inOrder,
            rootIndex + 1,
            inEnd,
        );

        return node;
    }

    let root = backtrack(
        preOrder,
        0,
        preOrder.length - 1,
        inOrder,
        0,
        inOrder.length - 1,
    );
    return root;
}
