function findLucky(arr: number[]): number {
  let map: Map<number, number> = new Map();
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
  }
  let max = -1;
  map.forEach((value, key) => {
    if (value === key && max < key) max = key;
  });
  return max;
}
