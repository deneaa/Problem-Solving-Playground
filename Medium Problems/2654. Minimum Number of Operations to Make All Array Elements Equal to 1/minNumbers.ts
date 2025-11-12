function minOperations(nums: number[]): number {
  let count1 = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) count1++;
  }

  if (count1 > 0) return nums.length - count1;

  let minLen = Infinity;

  for (let i = 0; i < nums.length; i++) {
    let currentGcd = nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      currentGcd = gcd(currentGcd, nums[j]);
      if (currentGcd === 1) {
        minLen = Math.min(minLen, j - i + 1);
        break;
      }
    }
  }

  if (minLen === Infinity) return -1;

  return minLen - 1 + (nums.length - 1);
}

function gcd(n1: number, n2: number): number {
  while (n2 !== 0) {
    [n1, n2] = [n2, n1 % n2];
  }
  return n1;
}
