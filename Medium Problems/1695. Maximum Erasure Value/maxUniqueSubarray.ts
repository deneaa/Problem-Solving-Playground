function maximumUniqueSubarray(nums: number[]): number {
  let max = 0;
  let arr: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    let right = nums[i];

    if (arr.includes(right)) {
      let dupIndex = arr.indexOf(right);
      arr = arr.slice(dupIndex + 1);
    }

    arr.push(right);

    let sum = arr.reduce((a, b) => a + b, 0);
    max = Math.max(max, sum);
  }

  return max;
}
