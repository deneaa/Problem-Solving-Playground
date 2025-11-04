function lengthOfLongestSubstring(s: string): number {
  let maxLength = 0;
  let set = new Set();
  let str = "";

  for (let ch of s) {
    if (set.has(ch)) {
      let arr = str.split("");
      while (set.has(ch)) {
        let char = arr.shift();
        set.delete(char);
      }
      str = arr.join("");
    }
    str += ch;
    set.add(ch);
    maxLength = Math.max(maxLength, set.size);
  }
  return maxLength;
}
