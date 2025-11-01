function smallestDivisor(nums: number[], threshold: number): number {
  let left = 1;
  let right = Math.max(...nums);
  let res = Infinity;

  while (left <= right) {
    let divisor = Math.floor((left + right) / 2);
    let sum = calcSum(nums, divisor);
    if (sum <= threshold && divisor < res) res = divisor;
    else if (sum > threshold) left = divisor + 1;
    else right = divisor - 1;
  }
  return res;
}

function calcSum(arr: number[], divisor: number) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += Math.ceil(arr[i] / divisor);
  }
  return result;
}
