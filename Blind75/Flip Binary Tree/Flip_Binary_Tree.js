function binaryTreeFlip(root) {
  if (root == null) return null;
  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  binaryTreeFlip(root.left);
  binaryTreeFlip(root.right);
  return root;
}