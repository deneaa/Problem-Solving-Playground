function zeroFilledSubarray(nums: number[]): number {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      let index = i;
      while (index < nums.length && nums[index] === 0) {
        index++;
      }
      let k = index - i;
      result += (k * (k + 1)) / 2;
      i = index - 1;
    }
  }
  return result;
}
