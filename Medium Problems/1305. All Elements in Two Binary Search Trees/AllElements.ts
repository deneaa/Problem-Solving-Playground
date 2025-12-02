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

function getAllElements(
  root1: TreeNode | null,
  root2: TreeNode | null
): number[] {
  let res1: number[] = [],
    res2: number[] = [];

  res1 = inorder(root1, res1);
  res2 = inorder(root2, res2);
  return [...res1, ...res2].sort((a, b) => a - b);
}

function inorder(root: TreeNode | null, res: number[] = []): number[] {
  if (!root) return res;
  inorder(root.left, res);
  res.push(root.val);
  inorder(root.right, res);
  return res;
}
