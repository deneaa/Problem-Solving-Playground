class Solution {
  m: number;
  map: Map<number, number> = new Map();
  set: Set<number>;

  constructor(n: number, blacklist: number[]) {
    this.m = n - blacklist.length;
    this.set = new Set(blacklist);

    let last = n - 1; 
    for (let b of blacklist) {
      if (b < this.m) {
        while (this.set.has(last)) last--;
        this.map.set(b, last);
        last--;
      }
    }
  }

  pick(): number {
    let x = Math.floor(Math.random() * this.m); 
    return this.map.get(x) ?? x; 
  }
}
