function minOperations(queries: number[][]): number {
  let count = 0;

  queries.forEach(([l, r]) => {
    let operations: number[] = [];

    for (let i = l; i <= r; i++) {
      operations.push(Math.floor(Math.log(i) / Math.log(4)) + 1);
    }

    while (!operations.every((nr) => nr === 0)) {
      operations.sort((a, b) => b - a);

      if (operations.length >= 2) {
        operations[0]--;
        operations[1]--;
      } else {
        operations[0]--;
      }

      count++;
    }
  });

  return count;
}
