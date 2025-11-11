function splitArray(nums: number[]): number {
  let primes = 0;
  let others = 0;
  let set = new Set(Sieve(nums.length));
  for (let i = 0; i < nums.length; i++) {
    if (set.has(i)) primes += nums[i];
    else others += nums[i];
  }
  return Math.abs(primes - others);
}

function Sieve(n: number) {
  let mark = new Array(n + 1).fill(true);
  mark[0] = mark[1] = false;

  for (let p = 2; p * p <= n; p++) {
    if (mark[p]) {
      for (let multiple = p * p; multiple <= n; multiple += p) {
        mark[multiple] = false;
      }
    }
  }
  return mark.map((isPrime, i) => (isPrime ? i : -1)).filter((x) => x !== -1);
}
