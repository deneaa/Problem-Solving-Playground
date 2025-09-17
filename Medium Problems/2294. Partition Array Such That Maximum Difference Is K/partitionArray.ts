function partitionArray(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);
  let count = 1;
  let first = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - first <= k) {
      continue;
    } else {
      count++;
      first = nums[i];
    }
  }
  return count;
}
