function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let max = -Infinity;
  while (left < right) {
    let capacity =
      Math.min(height[left], height[right]) * Math.abs(left - right);
    if (capacity > max) max = capacity;

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
}
