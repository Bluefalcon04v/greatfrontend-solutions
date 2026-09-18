def invertTree(root):
    if not root:
        return None

    temp = root.left
    root.left = root.right 
    root.right = temp

    invertTree(root.left)        
    invertTree(root.right)        

    return root