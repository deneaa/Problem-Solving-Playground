function longestSubarray(nums: number[]): number {
  if (nums.length < 3) return nums.length;

  let max = 2;
  let count = 2;

  for (let i = 2; i < nums.length; i++) {
    if (nums[i - 2] + nums[i - 1] === nums[i]) {
      count++;
    } else {
      count = 2;
    }
    max = Math.max(max, count);
  }

  return max;
}
