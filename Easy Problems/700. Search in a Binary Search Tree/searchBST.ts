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

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) return null;

  let curr = root;
  while (curr) {
    if (val < curr.val) curr = curr.left;
    else if (val === curr.val) return curr;
    else if (val > curr.val) curr = curr.right;
  }
  return null;
}
