/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  let index = 0;
  let map: Map<number, number> = new Map();
  for (let num of nums) map.set(num, (map.get(num) || 0) + 1);
  for (let i = 0; i < 3; i++) {
    if (!map.get(i)) continue;
    let value = map.get(i)!;
    while (value > 0) {
      nums[index] = i;
      index++;
      value--;
    }
  }
}
