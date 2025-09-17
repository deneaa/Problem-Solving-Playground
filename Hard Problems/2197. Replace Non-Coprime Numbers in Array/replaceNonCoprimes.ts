function replaceNonCoprimes(nums: number[]): number[] {
  let index = 0;

  while (index !== nums.length - 1) {
    let first = nums[index];
    let second = nums[index + 1];
    if (GCD(first, second) > 1) {
      let lcm = LCM(first, second);
      nums.splice(index, 2, lcm);
      nums[index] = lcm;
      if (index > 0) index--;
    } else {
      index++;
    }
  }
  return nums;
}

function LCM(n1: number, n2: number): number {
  return (n1 * n2) / GCD(n1, n2);
}

function GCD(n1: number, n2: number): number {
  while (n2 !== 0) {
    let rest = n1 % n2;
    n1 = n2;
    n2 = rest;
  }
  return n1;
}
