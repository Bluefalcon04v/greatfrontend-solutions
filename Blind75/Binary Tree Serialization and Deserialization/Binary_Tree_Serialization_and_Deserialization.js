var serialize = function (root) {
    let hash = []

    function hashing(curr) {
        if (!curr) {
            hash.push('#')
            return
        }

        hash.push(curr.val)
        hashing(curr.left)
        hashing(curr.right)
    }

    hashing(root)
    return hash.join(',')
}


var deserialize = function (data) {
    let values = data.split(',')
    let index = 0

    function destructuring() {
        let curr = values[index++]

        if (curr == '#')
            return null

        let node = new TreeNode(Number(curr))
        node.left = destructuring()
        node.right = destructuring()

        return node
    }

    return destructuring()
};

