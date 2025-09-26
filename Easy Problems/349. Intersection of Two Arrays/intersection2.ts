function intersection(nums1: number[], nums2: number[]): number[] {
  nums2.sort((a, b) => a - b);
  const resultSet = new Set<number>();

  for (const num of nums1) {
    if (binarySearch(nums2, num)) {
      resultSet.add(num);
    }
  }

  const result: number[] = Array.from(resultSet);
  return result;
}

function binarySearch(arr: number[], target: number) {
  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return true;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return false;
}
