function minimizeMax(nums: number[], p: number): number {
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums[nums.length - 1] - nums[0];

  function canForm(maxDiff: number): boolean {
    let count = 0;
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i + 1] - nums[i] <= maxDiff) {
        count++;
        i++;
      }
      if (count >= p) return true;
    }
    return false;
  }

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (canForm(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}
