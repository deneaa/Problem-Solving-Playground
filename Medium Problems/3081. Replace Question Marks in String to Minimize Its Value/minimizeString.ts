function minimizeStringValue(s: string): string {
  const freq = new Array(26).fill(0);
  let q = 0;

  for (const ch of s) {
    if (ch === "?") q++;
    else freq[ch.charCodeAt(0) - 97]++;
  }

  const heap: [number, number][] = [];
  for (let i = 0; i < 26; i++) heap.push([freq[i], i]);
  buildHeap(heap);

  const repl: number[] = [];
  while (q-- > 0) {
    const [val, idx] = heap[0];
    repl.push(idx);
    heap[0] = [val + 1, idx];
    heapify(heap, heap.length, 0);
  }

  repl.sort((a, b) => a - b);

  let res = "";
  let ptr = 0;
  for (const ch of s) {
    res += ch === "?" ? String.fromCharCode(97 + repl[ptr++]) : ch;
  }
  return res;
}

function buildHeap(arr: [number, number][]) {
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--)
    heapify(arr, arr.length, i);
}

function heapify(arr: [number, number][], n: number, i: number) {
  let smallest = i;
  const l = 2 * i + 1,
    r = 2 * i + 2;
  if (
    l < n &&
    (arr[l][0] < arr[smallest][0] ||
      (arr[l][0] === arr[smallest][0] && arr[l][1] < arr[smallest][1]))
  )
    smallest = l;
  if (
    r < n &&
    (arr[r][0] < arr[smallest][0] ||
      (arr[r][0] === arr[smallest][0] && arr[r][1] < arr[smallest][1]))
  )
    smallest = r;
  if (smallest !== i) {
    [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
    heapify(arr, n, smallest);
  }
}
