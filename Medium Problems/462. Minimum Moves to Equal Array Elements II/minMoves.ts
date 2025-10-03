function minMoves2(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < (nums.length - 1) / 2; i++) {
    count += Math.abs(nums[i] - nums[nums.length - i - 1]);
  }
  return count;
}
