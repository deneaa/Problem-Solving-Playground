function findSmallestInteger(nums: number[], value: number): number {
  let map: Map<number, number> = new Map();

  for (let num of nums) {
    let r = ((num % value) + value) % value;
    map.set(r, (map.get(r) || 0) + 1);
  }

  let firstMex = 0;

  while (true) {
    let rest = firstMex % value;
    if (map.has(rest)) {
      map.set(rest, map.get(rest)! - 1);
      if (map.get(rest)! == 0) map.delete(rest);

      firstMex++;
    } else break;
  }
  return firstMex;
}
