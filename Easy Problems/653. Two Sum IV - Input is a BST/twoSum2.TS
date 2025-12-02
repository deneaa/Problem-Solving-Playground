/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function findTarget(root: TreeNode | null, k: number): boolean {
  const res = inorder(root);
  let left = 0,
    right = res.length - 1;

  while (left < right) {
    const sum = res[left] + res[right];
    if (sum === k) return true;
    if (sum < k) left++;
    else right--;
  }

  return false;
}

function inorder(root: TreeNode | null, res: number[] = []) {
  if (!root) return res;

  inorder(root.left, res);
  res.push(root.val);
  inorder(root.right, res);
  return res;
}
