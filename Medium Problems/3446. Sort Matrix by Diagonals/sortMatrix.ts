function sortMatrix(grid: number[][]): number[][] {
  let n = grid.length;
  let diagMap: Map<number, number[]> = new Map();

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let key = i - j;
      if (!diagMap.has(key)) diagMap.set(key, []);
      diagMap.get(key)!.push(grid[i][j]);
    }
  }

  for (let [key, arr] of diagMap.entries()) {
    if (key >= 0) {
      arr.sort((a, b) => b - a);
    } else {
      arr.sort((a, b) => a - b);
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let key = i - j;
      grid[i][j] = diagMap.get(key)!.shift()!;
    }
  }

  return grid;
}
