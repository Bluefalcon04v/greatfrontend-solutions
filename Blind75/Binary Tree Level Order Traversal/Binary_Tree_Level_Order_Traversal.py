def binaryTreeLevelOrderTraversal(root):
    res = []
    def backtrack(curr_node, level):
        if not curr_node: return
        if len(res) == level: res.append([])
        
        res[level].append(curr_node.val)
        backtrack(curr_node.left, level+1)
        backtrack(curr_node.right, level+1)
                        
    backtrack(root,0)
    return res
