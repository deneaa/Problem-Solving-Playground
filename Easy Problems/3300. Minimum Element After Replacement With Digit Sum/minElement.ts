function minElement(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i]
      .toString()
      .split("")
      .reduce((acc, curr) => Number(acc) + Number(curr), 0);
  }
  return Math.min(...nums);
}
