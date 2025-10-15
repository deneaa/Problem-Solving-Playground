function findScore(nums: number[]): number {
  let n = nums.length;
  let heap: [number, number][] = [];

  for (let i = 0; i < n; i++) {
    heap.push([nums[i], i]);
  }

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapifyMin(heap, n, i);
  }

  let marked = new Array(n).fill(false);
  let score = 0;
  let remaining = n;

  while (remaining > 0 && heap.length > 0) {
    [heap[0], heap[heap.length - 1]] = [heap[heap.length - 1], heap[0]];
    let [value, index] = heap.pop()!;

    if (heap.length > 0) heapifyMin(heap, heap.length, 0);

    if (marked[index]) {
      continue;
    }

    marked[index] = true;
    remaining--;

    if (index - 1 >= 0 && !marked[index - 1]) {
      marked[index - 1] = true;
      remaining--;
    }
    if (index + 1 < n && !marked[index + 1]) {
      marked[index + 1] = true;
      remaining--;
    }

    score += value;
  }

  return score;
}

function heapifyMin(arr: [number, number][], n: number, i: number) {
  let smallest = i;
  let left = 2 * i + 1;
  let right = left + 1;

  if (left < n) {
    if (
      arr[left][0] < arr[smallest][0] ||
      (arr[left][0] === arr[smallest][0] && arr[left][1] < arr[smallest][1])
    ) {
      smallest = left;
    }
  }

  if (right < n) {
    if (
      arr[right][0] < arr[smallest][0] ||
      (arr[right][0] === arr[smallest][0] && arr[right][1] < arr[smallest][1])
    ) {
      smallest = right;
    }
  }

  if (i !== smallest) {
    [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
    heapifyMin(arr, n, smallest);
  }
}
