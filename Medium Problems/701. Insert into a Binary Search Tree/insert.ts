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

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  const newNode = new TreeNode(val);

  if (!root) {
    root = newNode;
    return root;
  }
  let curr = root;

  while (true) {
    if (val < curr.val) {
      if (!curr.left) {
        curr.left = newNode;
        break;
      }
      curr = curr.left;
    } else {
      if (val > curr.val) {
        if (!curr.right) {
          curr.right = newNode;
          break;
        }
        curr = curr.right;
      }
    }
  }
  return root;
}
