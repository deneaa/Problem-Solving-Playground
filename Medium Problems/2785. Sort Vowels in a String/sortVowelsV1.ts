function sortVowels(s: string): string {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  const vowelPositions: { index: number; char: string }[] = [];
  for (let i = 0; i < s.length; i++) {
    if (vowels.has(s[i])) {
      vowelPositions.push({ index: i, char: s[i] });
    }
  }

  vowelPositions.sort((a, b) => a.char.charCodeAt(0) - b.char.charCodeAt(0));

  const chars = s.split("");
  for (let i = 0; i < vowelPositions.length; i++) {
    chars[vowelPositions[i].index] = vowelPositions[i].char;
  }

  return chars.join("");
}
