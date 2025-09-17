function sumZero(n: number): number[] {
  const arr: number[] = new Array(n).fill(0);
  let k = 1;

  for (let i = 0; i < Math.floor(n / 2); i++) {
    arr[i] = k;
    arr[n - 1 - i] = -k;
    k++;
  }
  return arr;
}
