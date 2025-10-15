function minStoneSum(piles: number[], k: number): number {
  let n = piles.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(piles, n, i);
  }

  while (k > 0) {
    let max = piles[0];
    let reduced = max - Math.floor(max / 2);
    piles[0] = reduced;
    heapify(piles, n, 0);
    k--;
  }
  return piles.reduce((a, b) => a + b, 0);
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
