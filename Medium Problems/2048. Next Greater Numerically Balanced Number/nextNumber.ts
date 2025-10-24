function nextBeautifulNumber(n: number): number {
  n++;
  while (!checkNumber(n)) {
    n++;
  }
  return n;
}

function checkNumber(n: number): boolean {
  let s = n.toString().split("");
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }
  for (let [key, value] of map.entries()) {
    if (Number(key) !== value) return false;
  }
  return true;
}
