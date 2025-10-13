function removeAnagrams(words: string[]): string[] {
  for (let i = 1; i < words.length; i++) {
    if (checkAnagram(words[i - 1], words[i])) {
      words.splice(i, 1);
      i--;
    }
  }
  return words;
}

function checkAnagram(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) return false;

  const map = new Map<string, number>();

  for (let i = 0; i < s1.length; i++) {
    map.set(s1[i], (map.get(s1[i]) || 0) + 1);
    map.set(s2[i], (map.get(s2[i]) || 0) - 1);
  }

  for (let value of map.values()) {
    if (value !== 0) return false;
  }
  return true;
}
