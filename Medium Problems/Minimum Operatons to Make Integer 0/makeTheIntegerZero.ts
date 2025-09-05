function makeTheIntegerZero(num1: number, num2: number): number {
  for (let k = 1; k <= 60; k++) {
    let target = num1 - k * num2;

    if (target > 0) {
      let popcount = target.toString(2).split("1").length - 1;

      if (popcount <= k && k <= target) {
        return k; 
      }
    }
  }
  return -1;
}
