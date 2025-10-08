function divideArray(nums: number[], k: number): number[][] {
  let arrays: number[][] = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i += 3) {
    if (
      Math.max(nums[i], nums[i + 1], nums[i + 2]) -
        Math.min(nums[i], nums[i + 1], nums[i + 2]) <=
      k
    ) {
      arrays.push([nums[i], nums[i + 1], nums[i + 2]]);
    } else {
      return [];
    }
  }
  return arrays;
}
