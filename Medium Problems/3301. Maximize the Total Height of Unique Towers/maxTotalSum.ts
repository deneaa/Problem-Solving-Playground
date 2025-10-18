function maximumTotalSum(maximumHeight: number[]): number {
  maximumHeight.sort((a, b) => b - a);

  let max = maximumHeight[0];
  let sum = 0;

  for (let i = 0; i < maximumHeight.length; i++) {
    max = Math.min(max, maximumHeight[i]);

    if (max <= 0) return -1;

    sum += max;
    max--;
  }

  return sum;
}
