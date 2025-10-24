function minSetSize(arr: number[]): number {
  const half = Math.floor(arr.length / 2);

  const map = new Map<number, number>();
  for (let num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  const heap: [number, number][] = Array.from(map.entries()).map(
    ([key, value]) => [value, key]
  );

  for (let i = (heap.length >> 1) - 1; i >= 0; i--) {
    heapify(heap, heap.length, i);
  }

  let removed = 0;
  let count = 0;
  while (removed < half) {
    const [maxFreq, num] = extractMax(heap);
    removed += maxFreq;
    count++;
  }

  return count;
}

function extractMax(heap: [number, number][]): [number, number] {
  const last = heap.length - 1;
  [heap[0], heap[last]] = [heap[last], heap[0]];
  const max = heap.pop()!;
  heapify(heap, heap.length, 0);
  return max;
}

function heapify(arr: [number, number][], n: number, i: number) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && arr[left][0] > arr[largest][0]) largest = left;
  if (right < n && arr[right][0] > arr[largest][0]) largest = right;

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}
