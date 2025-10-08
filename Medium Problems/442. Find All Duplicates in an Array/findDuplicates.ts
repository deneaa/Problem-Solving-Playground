function findDuplicates(nums: number[]): number[] {
  let set: Set<number> = new Set();
  let result: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      result.push(nums[i]);
    } else {
      set.add(nums[i]);
    }
  }
  return result;
}
