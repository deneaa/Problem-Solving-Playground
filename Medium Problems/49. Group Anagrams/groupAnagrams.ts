function groupAnagrams(strs: string[]): string[][] {
  let response: string[][] = [];
  let map: Map<string, string[]> = new Map();

  for (let word of strs) {
    let s = help(word);
    if (map.has(s)) {
      map.set(s, [...map.get(s)!, word]);
    } else {
      map.set(s, [word]);
    }
  }

  for (let value of map.values()) {
    response.push(value);
  }
  return response;
}

function help(s: string): string {
  return s.split("").sort().join("");
}
