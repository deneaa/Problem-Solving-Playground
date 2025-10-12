/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  let heap: number[] = [];

  for (let i = 0; i < lists.length; i++) {
    let head = lists[i];
    while (head !== null) {
      heap.push(head.val);
      head = head.next;
    }
  }
  let n = heap.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(heap, n, i);
  }

  for (let i = n - 1; i > 0; i--) {
    [heap[0], heap[i]] = [heap[i], heap[0]];
    heapify(heap, i, 0);
  }

  let dummmy = new ListNode(0);
  let current = dummmy;

  for (let val of heap) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummmy.next;
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
