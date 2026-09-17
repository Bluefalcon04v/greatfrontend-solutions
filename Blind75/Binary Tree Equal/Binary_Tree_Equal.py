def binaryTreeEqual(a, b):
    if a is None and b is None: return True 
    if a is None or b is None: return False
    
    if a.val != b.val: return False
    return binaryTreeEqual(a.left, b.left) and binaryTreeEqual(a.right, b.right)