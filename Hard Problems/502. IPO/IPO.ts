function findMaximizedCapital(
  k: number,
  w: number,
  profits: number[],
  capital: number[]
): number {
  let heap: [number, number][] = [];
  let queue: [number, number][] = [];

  for (let i = 0; i < capital.length; i++) {
    if (capital[i] > w) queue.push([capital[i], profits[i]]);
    else heap.push([capital[i], profits[i]]);
  }

  queue.sort((a, b) => a[0] - b[0]);

  buildHeap(heap);
  let actualW = w;
  let idx = 0;

  while (k > 0) {
    while (idx < queue.length && queue[idx][0] <= actualW) {
      heap.push(queue[idx]);
      heapifyUp(heap, heap.length - 1);
      idx++;
    }

    if (heap.length === 0) break;

    const [_, profit] = heap[0];
    actualW += profit;

    [heap[0], heap[heap.length - 1]] = [heap[heap.length - 1], heap[0]];
    heap.pop();
    heapify(heap, heap.length, 0);

    k--;
  }

  return actualW;
}

function heapify(arr: [number, number][], n: number, i: number) {
  let largest = i;
  const l = 2 * i + 1,
    r = 2 * i + 2;

  if (
    l < n &&
    (arr[l][1] > arr[largest][1] ||
      (arr[l][1] === arr[largest][1] && arr[l][0] > arr[largest][0]))
  )
    largest = l;

  if (
    r < n &&
    (arr[r][1] > arr[largest][1] ||
      (arr[r][1] === arr[largest][1] && arr[r][0] > arr[largest][0]))
  )
    largest = r;

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}

function heapifyUp(arr: [number, number][], index: number) {
  let i = index;
  while (i > 0) {
    const parent = Math.floor((i - 1) / 2);
    if (arr[parent][1] >= arr[i][1]) break;
    [arr[parent], arr[i]] = [arr[i], arr[parent]];
    i = parent;
  }
}

function buildHeap(arr: [number, number][]) {
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    heapify(arr, arr.length, i);
  }
}
