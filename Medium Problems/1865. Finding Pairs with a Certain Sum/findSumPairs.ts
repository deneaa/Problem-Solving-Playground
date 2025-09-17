class FindSumPairs {
  nums1: number[];
  nums2: number[];
  freq: Map<number, number>;

  constructor(nums1: number[], nums2: number[]) {
    this.nums1 = nums1;
    this.nums2 = nums2;
    this.freq = new Map();

    for (let num of nums2) {
      this.freq.set(num, (this.freq.get(num) ?? 0) + 1);
    }
  }

  add(index: number, val: number): void {
    let oldVal = this.nums2[index];
    let newVal = oldVal + val;
    this.nums2[index] = newVal;

    this.freq.set(oldVal, (this.freq.get(oldVal) ?? 0) - 1);
    if (this.freq.get(oldVal) === 0) this.freq.delete(oldVal);

    this.freq.set(newVal, (this.freq.get(newVal) ?? 0) + 1);
  }

  count(tot: number): number {
    let cnt = 0;
    for (let num of this.nums1) {
      let target = tot - num;
      cnt += this.freq.get(target) ?? 0;
    }
    return cnt;
  }
}

/**
 * Your FindSumPairs object will be instantiated and called as such:
 * var obj = new FindSumPairs(nums1, nums2)
 * obj.add(index,val)
 * var param_2 = obj.count(tot)
 */
