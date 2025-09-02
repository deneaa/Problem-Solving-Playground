function maxDifference(s: string, k: number): number {
  let finalDif = -Infinity;

  for (let start = 0; start < s.length; start++) {
    for (let end = start + k; end <= s.length; end++) {
      let word = s.slice(start, end);

      let map = new Map<string, number>();
      for (let char of word) {
        map.set(char, (map.get(char) || 0) + 1);
      }

      let arr = Array.from(map.entries());

      for (let [charA, freqA] of arr) {
        for (let [charB, freqB] of arr) {
          if (freqA % 2 === 1 && freqB % 2 === 0 && freqB > 0) {
            let diff = freqA - freqB;
            if (diff > finalDif) {
              finalDif = diff;
            }
          }
        }
      }
    }
  } 

  return finalDif;
}
