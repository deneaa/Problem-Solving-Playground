function sumFourDivisors(nums: number[]): number {
  let result = 0;
  for (const num of nums) {
    const s = calcDivisors(num);
    if (s !== null) result += s;
  }
  return result;
}

function calcDivisors(num: number): number | null {
  let divisors = new Set<number>();

  for (let i = 1; i * i <= num; i++) {
    if (num % i === 0) {
      divisors.add(i);
      divisors.add(num / i);
      if (divisors.size > 4) return null;
    }
  }

  if (divisors.size !== 4) return null;
  let sum = 0;
  for (const d of divisors) sum += d;
  return sum;
}
