function minimumLength(s: string): number {
  let map: Map<string, number> = new Map();
  for (let ch of s) {
    map.set(ch, (map.get(ch) || 0) + 1);
  }
  let count = 0;
  for (let [key, value] of map.entries()) {
    if (value >= 3) {
      while (value > 2) {
        value -= 2;
      }
      count += value;
    } else count += value;
  }
  return count;
}
