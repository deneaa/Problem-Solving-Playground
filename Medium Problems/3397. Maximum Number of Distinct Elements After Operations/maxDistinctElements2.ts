function maxDistinctElements(nums: number[], k: number): number {
  let set = new Set();
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    let num = -k;
    let result = nums[i] + num;
    if (!set.has(result)) {
      set.add(result);
      continue;
    } else {
      for (let j = num + 1; j <= k; j++) {
        if (!set.has(j + nums[i])) {
          set.add(j + nums[i]);
          break;
        }
      }
    }
  }
  return set.size;
}
