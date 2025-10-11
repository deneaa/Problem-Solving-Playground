class Solution {
  originalNums: number[];
  constructor(nums: number[]) {
    this.originalNums = nums;
  }

  reset(): number[] {
    return this.originalNums;
  }

  shuffle(): number[] {
    const arr = this.originalNums.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
