function twoCitySchedCost(costs: number[][]): number {
  for (let i = 0; i < costs.length; i++) {
    costs[i] = [costs[i][1] - costs[i][0], costs[i][0], costs[i][1]];
  }
  costs.sort((a, b) => a[0] - b[0]);
  let half = costs.length / 2;
  let result = 0;
  let index = 0;
  while (half > 0) {
    result += costs[index][2];
    index++;
    half--;
  }

  const rest = costs.slice(index).reduce((prev, curr) => prev + curr[1], 0);

  return result + rest;
}
