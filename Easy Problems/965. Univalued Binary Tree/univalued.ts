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

function isUnivalTree(root: TreeNode | null): boolean {
  let set = new Set();
  if (!root) return false;

  function dfs(root: TreeNode | null) {
    if (!root) return;
    set.add(root.val);
    dfs(root.left);
    dfs(root.right);
  }
  dfs(root);
  if (set.size > 1) return false;
  return true;
}
