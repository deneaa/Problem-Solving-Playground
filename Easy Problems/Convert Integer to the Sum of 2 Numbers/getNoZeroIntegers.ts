function getNoZeroIntegers(n: number): number[] {
  for (let i = 1; i < n; i++) {
    if (
      n - 1 !== 0 &&
      !String(i).includes("0") &&
      !String(n - i).includes("0")
    ) {
      return [i, n - i];
    }
  }
  return [];
}
