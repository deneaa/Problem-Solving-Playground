function countNicePairs(nums: number[]): number {
  let map: Map<number, number> = new Map();
  for (let i = 0; i < nums.length; i++) {
    let num = reverse(nums[i]);
    let op = nums[i] - num;
    map.set(op, (map.get(op) || 0) + 1);
  }
  let mod = 1_000_000_007;

  let count = 0;
  for (let [key, value] of map.entries()) {
    if (value > 1) {
      const pairs = ((BigInt(value) * BigInt(value - 1)) / 2n) % 1000000007n;
      count = Number((BigInt(count) + pairs) % 1000000007n);
    }
  }
  return count;
}
function reverse(n: number): number {
  return Number(n.toString().split("").reverse().join(""));
}

console.log(countNicePairs([42, 11, 1, 97]));
console.log(countNicePairs([13, 10, 35, 24, 76]));
