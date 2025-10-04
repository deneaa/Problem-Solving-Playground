function maxCount(banned: number[], n: number, maxSum: number): number {
  const bannedSet = new Set(banned);
  let actualSum = 0;
  let count = 0;

  for (let i = 1; i <= n; i++) {
    if (bannedSet.has(i)) continue;

    if (actualSum + i > maxSum) break;

    actualSum += i;
    count++;
  }

  return count;
}
