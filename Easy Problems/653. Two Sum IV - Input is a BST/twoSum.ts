function findTarget(root: TreeNode | null, k: number): boolean {
  if (!root) return false;

  const res: number[] = inorder(root);
  const set = new Set<number>();

  for (let i = 0; i < res.length; i++) {
    const complement = k - res[i];
    if (set.has(complement)) return true;
    set.add(res[i]);
  }

  return false;
}

function inorder(root: TreeNode | null, res: number[] = []): number[] {
  if (!root) return res;

  if (root.left) inorder(root.left, res);
  res.push(root.val);
  if (root.right) inorder(root.right, res);

  return res;
}
