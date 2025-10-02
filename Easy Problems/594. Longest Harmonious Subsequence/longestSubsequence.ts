function findLHS(nums: number[]): number {
  let map: Map<number, number> = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }
  let count = 0;
  map.forEach((value, key) => {
    if (map.has(key + 1)) {
      count = Math.max(value + map.get(key + 1)!, count);
    }
  });
  return count;
}
