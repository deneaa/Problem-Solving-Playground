function numberOfSpecialChars(word: string): number {
  const lows = Array(26).fill(-1);
  const ups = Array(26).fill(-1);

  for (let i = 0; i < word.length; i++) {
    const c = word[i];

    if (c === c.toLowerCase()) {
      const code = c.charCodeAt(0) - 97;
      if (lows[code] === -1) {
        lows[code] = i;
      } else {
        lows[code] = Math.max(lows[code], i)
      }
    } else { 
      const code = c.charCodeAt(0) - 65;
      if (ups[code] === -1) {
        ups[code] = i;
      } else {
        ups[code] = Math.min(ups[code], i)
      }
    }
  }

  let special = 0;

  for (let i = 0; i < 26; i++) {
    const lower = lows[i];
    if (lower === -1) continue;

    const upper = ups[i];
    if (upper === -1) continue;

    if (lower < upper) {
      special++;
    }
  }

  return special;
};