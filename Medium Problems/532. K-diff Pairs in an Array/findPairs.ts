function findPairs(nums: number[], k: number): number {
  if (k < 0) return 0;

  nums.sort((a, b) => a - b);
  let left = 0;
  let right = 1;
  let count = 0;
  const n = nums.length;

  while (right < n) {
    if (left === right || nums[right] - nums[left] < k) {
      right++;
    } else if (nums[right] - nums[left] > k) {
      left++;
    } else {
      count++;
      left++;
      right++;

      while (left < n && nums[left] === nums[left - 1]) {
        left++;
      }
      while (right < n && nums[right] === nums[right - 1]) {
        right++;
      }
    }
  }

  return count;
}
