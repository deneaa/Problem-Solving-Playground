function findKthLargest(nums: number[], k: number): number {
  let n = nums.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(nums, n, i);
  }

  if (k === 1) return nums[0];
  let count = 0;

  for (let i = n - 1; i >= 0; i--) {
    [nums[0], nums[i]] = [nums[i], nums[0]];
    heapify(nums, i, 0);
    count++;
    if (count === k) return nums[i];
  }
  return nums[0];
}

function heapify(arr: number[], n: number, i: number) {
  let largest = i;
  let left = 2 * i + 1;
  let right = left + 1;

  if (left < n && arr[left] > arr[largest]) largest = left;
  if (right < n && arr[right] > arr[largest]) largest = right;

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}
