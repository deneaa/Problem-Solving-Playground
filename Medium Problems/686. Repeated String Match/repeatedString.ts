function repeatedStringMatch(a: string, b: string): number {
  if (a.includes(b)) return 1;
  let count = 1;
  const originalA = a;

  while (a.length < b.length) {
    a += originalA;
    count++;
  }

  if (a.includes(b)) return count;
  if ((a + originalA).includes(b)) return count + 1;
  return -1;
}
