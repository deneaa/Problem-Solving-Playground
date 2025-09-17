function maxOperations(nums: number[], k: number): number {
  let result = 0;
  let map = new Map();
  nums.forEach((num) => {
    map.set(num, (map.get(num) || 0) + 1);
  });

  map.forEach((value, key) => {
    if (key + key === k) {
      result += Math.floor(value / 2);
      map.set(key, 0);
    }
    let complement = k - key;

    if (map.has(complement)) {
      let pairs = Math.min(value, map.get(complement));
      result += pairs;
      map.set(key, 0);
      map.set(complement, 0);
    }
  });

  return result;
}
