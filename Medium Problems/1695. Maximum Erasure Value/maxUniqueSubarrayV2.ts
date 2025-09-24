function maximumUniqueSubarray(nums: number[]): number {
  let set = new Set<number>();
  let left = 0;
  let sum = 0;
  let max = 0;

  for (let right = 0; right < nums.length; right++) {
    while (set.has(nums[right])) {
      set.delete(nums[left]);
      sum -= nums[left];
      left++;
    }

    set.add(nums[right]);
    sum += nums[right];
    max = Math.max(max, sum);
  }

  return max;
}
