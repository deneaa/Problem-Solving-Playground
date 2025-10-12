function minOperations(nums: number[]): number {
  let map: Map<number, number> = new Map();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }
  let result = 0;
  for (let [key, value] of map.entries()) {
    if (value === 1) return -1;
    result += Math.ceil(value / 3);
  }
  return result;
}
