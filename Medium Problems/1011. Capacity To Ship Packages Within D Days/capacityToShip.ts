function shipWithinDays(weights: number[], days: number): number {
  let left = Math.max(...weights);
  let right = weights.reduce((prev, curr) => prev + curr, 0);

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (canShip(weights, days, mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

function canShip(arr: number[], days: number, weight: number): boolean {
  let count = 1;
  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (actualSum + arr[i] <= weight) {
      actualSum += arr[i];
    } else {
      count++;
      actualSum = arr[i];
    }
  }

  return count <= days;
}
