function topKFrequent(nums: number[], k: number): number[] {
  let map: Map<number, number> = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }
  let heap: [number, number][] = [];
  for (let [key, value] of map.entries()) {
    heap.push([value, key]);
  }
  let n = heap.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(heap, n, i);
  }
  let result = [];
  for (let i = n - 1; i >= 0; i--) {
    [heap[0], heap[i]] = [heap[i], heap[0]];
    heapify(heap, i, 0);
    result.push(heap[i][1]);
    if (result.length === k) return result;
  }
  return result;
}

function heapify(arr: [number, number][], n: number, i: number) {
  let largest = i;
  let left = 2 * i + 1;
  let right = left + 1;

  if (left < n && arr[left][0] > arr[largest][0]) largest = left;
  if (right < n && arr[right][0] > arr[largest][0]) largest = right;

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}

console.log(topKFrequent([3, 3, 3, 1, 2, 1, 2, 1, 2, 3, 1, 3, 2], 2));
