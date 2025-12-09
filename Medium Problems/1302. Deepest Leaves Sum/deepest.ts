function deepestLeavesSum(root: TreeNode | null): number {
  if (!root) return 0;

  let maxDepth = 0;
  let sum = 0;

  function getDepth(node: TreeNode | null, depth: number) {
    if (!node) return;
    maxDepth = Math.max(maxDepth, depth);
    getDepth(node.left, depth + 1);
    getDepth(node.right, depth + 1);
  }

  getDepth(root, 0);

  function collect(node: TreeNode | null, depth: number) {
    if (!node) return;
    if (depth === maxDepth) sum += node.val;
    collect(node.left, depth + 1);
    collect(node.right, depth + 1);
  }

  collect(root, 0);
  return sum;
}
