function countSymmetricIntegers(low: number, high: number): number {
  let count = 0;

  const sumDigits = (s: string) =>
    s.split('').reduce((acc, c) => acc + Number(c), 0);

  for (let i = low; i <= high; i++) {
    const str = String(i);
    const len = str.length;

    if (len % 2 !== 0) continue;

    const left = sumDigits(str.slice(0, len / 2));
    const right = sumDigits(str.slice(len / 2));

    if (left === right) count++;
  }

  return count;
}
