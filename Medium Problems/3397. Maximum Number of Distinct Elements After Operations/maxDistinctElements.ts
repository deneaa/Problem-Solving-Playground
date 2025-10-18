function maxDistinctElements(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);

  let nextFree = -Infinity;
  let count = 0;

  for (let x of nums) {
    let candidate = Math.max(x - k, nextFree);

    if (candidate <= x + k) {
      count++;
      nextFree = candidate + 1;
    }
  }

  return count;
}
