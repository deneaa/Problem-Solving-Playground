function smallestNumber(n: number): number {
  let number = 0;
  let power = 0;
  while (number < n) {
    number += Math.pow(2, power);
    power++;
  }
  return number;
}
