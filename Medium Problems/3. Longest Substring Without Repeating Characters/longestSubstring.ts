function lengthOfLongestSubstring(s: string): number {
  let left = 0;
  let max = 0;
  let map = new Map<string, number>();

  for (let right = 0; right < s.length; right++) {
    if (map.has(s[right])) {
      left = Math.max(left, map.get(s[right])! + 1);
    }
    map.set(s[right], right);
    max = Math.max(max, right - left + 1);
  }

  return max;
}
