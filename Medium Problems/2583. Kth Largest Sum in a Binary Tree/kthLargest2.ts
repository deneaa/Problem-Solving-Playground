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

function kthLargestLevelSum(root: TreeNode | null, k: number): number {
  let map = new Map<number, number>();
  if (!root) return -1;

  function inorder(root: TreeNode | null, l: number, map: Map<number, number>) {
    if (!root) return;
    inorder(root.left, l + 1, map);
    map.set(l, (map.get(l) || 0) + root.val);
    inorder(root.right, l + 1, map);
  }

  inorder(root, 0, map);

  if (map.size < k) return -1;

  let heap: number[] = Array.from(map.values());

  for (let i = Math.floor(heap.length / 2) - 1; i >= 0; i--) {
    heapify(heap, heap.length, i);
  }

  for (let i = 1; i < k; i++) {
    let n = heap.length;
    [heap[0], heap[n - 1]] = [heap[n - 1], heap[0]];
    heap.pop();
    heapify(heap, heap.length, 0);
  }

  return heap[0];
}

function heapify(arr: number[], n: number, i: number) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) largest = left;
  if (right < n && arr[right] > arr[largest]) largest = right;

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}
