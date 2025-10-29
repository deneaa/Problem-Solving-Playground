function minOperations(nums: number[], k: number): number {
  const heap = [...nums];
  buildHeap(heap);
  let count = 0;

  while (heap.length > 1 && heap[0] < k) {
    const a = extractMin(heap);
    const b = extractMin(heap);
    const combined = a * 2 + b;

    insert(heap, combined);
    count++;
  }

  return count;
}

function buildHeap(arr: number[]) {
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    heapifyDown(arr, i);
  }
}

function extractMin(arr: number[]): number {
  if (arr.length === 0) return Infinity;
  const min = arr[0];
  const end = arr.pop()!;
  if (arr.length > 0) {
    arr[0] = end;
    heapifyDown(arr, 0);
  }
  return min;
}

function insert(arr: number[], val: number) {
  arr.push(val);
  heapifyUp(arr, arr.length - 1);
}

function heapifyDown(arr: number[], i: number) {
  const n = arr.length;
  while (true) {
    let smallest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && arr[left] < arr[smallest]) smallest = left;
    if (right < n && arr[right] < arr[smallest]) smallest = right;

    if (smallest !== i) {
      [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
      i = smallest;
    } else break;
  }
}

function heapifyUp(arr: number[], i: number) {
  while (i > 0) {
    const parent = Math.floor((i - 1) / 2);
    if (arr[parent] <= arr[i]) break;
    [arr[i], arr[parent]] = [arr[parent], arr[i]];
    i = parent;
  }
}
