function countNegatives(grid: number[][]): number {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    let left = binarySearch(grid[i]);
    let m = grid[i].length;
    count += m - left;
  }
  return count;
}

function binarySearch(arr: number[]) {
  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] < 0) {
      right = mid - 1;
    } else left = mid + 1;
  }
  return left;
}
console.log(
  countNegatives([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
  ])
);
