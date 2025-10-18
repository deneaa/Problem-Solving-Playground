function maximumTotalSum(maximumHeight: number[]): number {
  maximumHeight.sort((a, b) => b - a);
  let max = maximumHeight[0];
  let count = 0;
  let set = new Set<number>();

  for (let i = 0; i < maximumHeight.length; i++) {
    max = Math.min(max, maximumHeight[i]);

    if (max <= 0) return -1;

    if (set.has(max)) {
      while (max > 0 && set.has(max)) {
        max--;
      }
      if (max <= 0) return -1;

      set.add(max);
      count += max;
      max--;
    } else {
      set.add(max);
      count += max;
      max--;
    }
  }
  return count;
}
