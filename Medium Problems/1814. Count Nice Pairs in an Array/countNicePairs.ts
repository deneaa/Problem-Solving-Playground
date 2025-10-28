function countNicePairs(nums: number[]): number {
  const mod = 1_000_000_007;
  const map = new Map<number, number>();
  let count = 0;

  for (let num of nums) {
    const rev = reverse(num);
    const key = num - rev;
    const freq = map.get(key) || 0;

    count = (count + freq) % mod;

    map.set(key, freq + 1);
  }

  return count;
}

function reverse(n: number): number {
  return Number(n.toString().split("").reverse().join(""));
}
