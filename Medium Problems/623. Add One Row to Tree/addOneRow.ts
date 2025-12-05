function addOneRow(
  root: TreeNode | null,
  val: number,
  depth: number
): TreeNode | null {
  if (depth === 1) {
    const newRoot = new TreeNode(val);
    newRoot.left = root;
    return newRoot;
  }

  function dfs(node: TreeNode | null, currentDepth: number) {
    if (!node) return;

    if (currentDepth === depth - 1) {
      const left = node.left;
      const right = node.right;

      node.left = new TreeNode(val);
      node.left.left = left;

      node.right = new TreeNode(val);
      node.right.right = right;
    } else {
      dfs(node.left, currentDepth + 1);
      dfs(node.right, currentDepth + 1);
    }
  }

  dfs(root, 1);
  return root;
}
