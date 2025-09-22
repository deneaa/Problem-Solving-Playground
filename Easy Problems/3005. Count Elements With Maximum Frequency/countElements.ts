function maxFrequencyElements(nums: number[]): number {
  const freq = new Map<number, number>();
  let max = 0;
  let count = 0;

  for (const num of nums) {
    const newFreq = (freq.get(num) || 0) + 1;
    freq.set(num, newFreq);

    if (newFreq > max) {
      max = newFreq;
      count = newFreq;
    } else if (newFreq === max) {
      count += newFreq;
    }
  }

  return count;
}
