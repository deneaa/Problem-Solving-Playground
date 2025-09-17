function minPairSum(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let n = nums.length;
  let maxSum = 0;

  for (let i = 0; i < n / 2; i++) {
    let sum = nums[i] + nums[n - 1 - i];
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
}
