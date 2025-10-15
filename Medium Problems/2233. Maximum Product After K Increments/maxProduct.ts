function maximumProduct(nums: number[], k: number): number {
  let n = nums.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapifyMin(nums, n, i);
  }
  const MOD = 1_000_000_007;

  while (k > 0) {
    nums[0]++;
    heapifyMin(nums, n, 0);
    k--;
  }
  let product = 1;
  for (let num of nums) {
    product = (product * num) % MOD;
  }

  return product;
}

function heapifyMin(arr: number[], n: number, i: number) {
  let smallest = i;
  let left = 2 * i + 1;
  let right = left + 1;

  if (left < n && arr[left] < arr[smallest]) smallest = left;
  if (right < n && arr[right] < arr[smallest]) smallest = right;

  if (i !== smallest) {
    [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
    heapifyMin(arr, n, smallest);
  }
}

console.log(maximumProduct([0, 4], 5));
