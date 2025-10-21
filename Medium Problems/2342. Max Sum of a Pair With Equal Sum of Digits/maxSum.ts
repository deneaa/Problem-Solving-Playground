function maximumSum(nums: number[]): number {
  const sumDigits = (num: number) => {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return sum;
  };

  let arr: number[][] = nums.map((val) => [sumDigits(val), val]);
  buildHeap(arr);

  let result = -1;

  while (arr.length > 0) {
    const [digitSum, val] = arr[0];

    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
    arr.pop();
    if (arr.length > 0) heapify(arr, arr.length, 0);

    if (arr.length > 0 && arr[0][0] === digitSum) {
      result = Math.max(result, val + arr[0][1]);
    }
  }

  return result;
}

function buildHeap(arr: number[][]) {
  const n = arr.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(arr, n, i);
}

function heapify(arr: number[][], n: number, i: number) {
  let largest = i;
  const left = 2 * i + 1;
  const right = left + 1;

  if (
    left < n &&
    (arr[left][0] > arr[largest][0] ||
      (arr[left][0] === arr[largest][0] && arr[left][1] > arr[largest][1]))
  )
    largest = left;

  if (
    right < n &&
    (arr[right][0] > arr[largest][0] ||
      (arr[right][0] === arr[largest][0] && arr[right][1] > arr[largest][1]))
  )
    largest = right;

  if (i !== largest) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}
