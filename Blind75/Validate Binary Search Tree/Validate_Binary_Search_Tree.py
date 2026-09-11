from typing import Optional

def isValidBST(root, low: Optional[int] = None, high: Optional[int] = None) -> bool:
    if root is None: return True
    if low is not None and low >= root.val or high is not None and high <= root.val: return False

    left_tree = isValidBST(root.left, low, root.val)
    right_tree = isValidBST(root.right, root.val, high)

    return left_tree and right_tree
