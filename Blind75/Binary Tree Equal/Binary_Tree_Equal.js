function binaryTreeEqual(a, b){
  if (a == null && b == null) return true;
  if (a == null || b == null) return false;
  if (a.val != b.val) return false;

  return binaryTreeEqual(a.left, b.left) && binaryTreeEqual(a.right, b.right);
}
