function isPerfectSquare(num: number): boolean {
  if (num === 1) return true;
  let left = 1;
  let right = num;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (mid * mid === num) return true;
    else if (mid * mid > num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
}
