function findLonely(nums: number[]): number[] {
  if (nums.length === 1) return nums;

  let map = new Map();
  let finalAnswer: number[] = [];

  nums.forEach((num, index) => {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  });

  map.forEach((value, key) => {
    if (!(map.has(key - 1) || map.has(key + 1)) && value === 1) {
      finalAnswer.push(key);
    }
  });

  return finalAnswer;
}
