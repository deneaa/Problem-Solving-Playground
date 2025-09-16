function numSubseq(nums: number[], target: number): number {
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;
  let count = 0;

  const mod = 1e9 + 7;
  const pow = new Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    pow[i] = (pow[i - 1] * 2) % mod;
  }

  while (left <= right) {
    if (nums[left] + nums[right] <= target) {
      count = (count + pow[right - left]) % mod;
      left++;
    } else {
      right--;
    }
  }

  return count;
}
