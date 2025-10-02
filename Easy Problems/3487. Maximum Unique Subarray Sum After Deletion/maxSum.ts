function maxSum(nums: number[]): number {
  let max = Math.max(...nums);
  if (max < 0) return max;
  let set = new Set(nums);
  let response = 0;
  set.forEach((value) => {
    if (value >= 0) response += value;
  });
  return response;
}
