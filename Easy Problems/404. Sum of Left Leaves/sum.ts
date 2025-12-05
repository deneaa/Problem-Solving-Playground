function sumOfLeftLeaves(root: TreeNode | null): number {
  if (!root) return 0;

  let sum = 0;

  function dfs(node: TreeNode | null, isLeft: boolean) {
    if (!node) return;

    if (!node.left && !node.right && isLeft) {
      sum += node.val;
    }

    dfs(node.left, true);
    dfs(node.right, false);
  }

  dfs(root, false);
  return sum;
}
