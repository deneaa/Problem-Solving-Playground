function findNumbers(nums: number[]): number {
  let result = 0;

  nums.forEach((num) => {
    let count = 1;

    while (num >= 10) {
      count++;
      num = num / 10;
    }
    if (count % 2 === 0) {
      result += 1;
    }
  });

  return result;
}

