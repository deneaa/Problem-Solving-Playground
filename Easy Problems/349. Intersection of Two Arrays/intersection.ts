function intersection(nums1: number[], nums2: number[]): number[] {
  let s1 = new Set(nums1);
  let s2 = new Set(nums2);
  let result: number[] = [];

  s1.forEach((value) => {
    if (s2.has(value)) result.push(value);
  });
  return result;
}
