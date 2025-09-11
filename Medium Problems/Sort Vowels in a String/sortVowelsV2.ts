function sortVowels(s: string): string {
  const vowelsCount: Record<string, number> = {
    A: 0,
    E: 0,
    I: 0,
    O: 0,
    U: 0,
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
  };

  for (const char of s) {
    if (char in vowelsCount) {
      vowelsCount[char]++;
    }
  }

  const entries = Object.entries(vowelsCount);

  const result: string[] = [];
  let entryIndex = 0;

  for (const char of s) {
    if (char in vowelsCount) {
      while (entries[entryIndex][1] === 0) entryIndex++;

      result.push(entries[entryIndex][0]);
      entries[entryIndex][1]--;
    } else {
      result.push(char);
    }
  }

  return result.join("");
}
