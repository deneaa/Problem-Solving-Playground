function minSetSize(arr: number[]): number {
  let set = new Set<number>();
  let half = Math.floor(arr.length / 2);
  let map = new Map<number, number>();

  for (let num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  let heap: [number, number][] = [];
  for (let [key, value] of map.entries()) {
    heap.push([value, key]);
  }

  for (let i = Math.floor(heap.length / 2) - 1; i >= 0; i--) {
    heapify(heap, heap.length, i);
  }

  while (half > 0 && heap.length > 0) {
    [heap[0], heap[heap.length - 1]] = [heap[heap.length - 1], heap[0]];
    let [freq, nr] = heap.pop()!;
    heapify(heap, heap.length, 0);
    half -= freq;
    set.add(nr);
  }

  return set.size;
}

function heapify(arr: [number, number][], n: number, i: number) {
  let largest = i;
  let left = 2 * i + 1;
  let right = left + 1;

  if (left < n && arr[left][0] > arr[largest][0]) largest = left;
  if (right < n && arr[right][0] > arr[largest][0]) largest = right;

  if (i !== largest) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}
