function countSmaller(nums: number[]): number[] {
  const counts: number[] = new Array(nums.length);
  const sorted: number[] = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    const num = nums[i];
    let left = 0;
    let right = sorted.length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (sorted[mid] < num) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    counts[i] = left;

    sorted.splice(left, 0, num);
  }

  return counts;
}
